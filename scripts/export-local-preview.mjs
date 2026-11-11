import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = dirname(scriptDirectory);
const outputDirectory = join(projectDirectory, "local-preview");

const serviceSlugs = [
  "transportes-e-logistica",
  "empresarial-e-contratos",
  "trabalhista-empresarial",
  "tributario",
  "contencioso-e-recuperacao",
  "sucessorio-e-patrimonial",
  "agronegocio",
  "lgpd-e-governanca",
];

const articleSlugs = [
  "juridico-para-transportadoras",
  "planejamento-tributario-com-governanca",
  "prevencao-passivo-trabalhista",
];

const routes = new Map([
  ["/", "index.html"],
  ["/escritorio", "escritorio.html"],
  ["/atuacao", "atuacao.html"],
  ...serviceSlugs.map((slug) => [`/atuacao/${slug}`, `atuacao-${slug}.html`]),
  ["/conteudos", "conteudos.html"],
  ...articleSlugs.map((slug) => [`/conteudos/${slug}`, `conteudo-${slug}.html`]),
  ["/contato", "contato.html"],
  ["/privacidade", "privacidade.html"],
]);

const staticScript = String.raw`<script>
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('main-nav--open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('main-nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var lines = [
        'Olá, gostaria de falar com a Errerias & Associados.',
        data.get('name') ? 'Nome: ' + data.get('name') : '',
        data.get('company') ? 'Empresa: ' + data.get('company') : '',
        data.get('email') ? 'E-mail: ' + data.get('email') : '',
        data.get('phone') ? 'Telefone: ' + data.get('phone') : '',
        data.get('subject') ? 'Assunto: ' + data.get('subject') : '',
        data.get('message') ? 'Contexto: ' + data.get('message') : ''
      ].filter(Boolean).join('\n');
      window.open('https://wa.me/5544988516797?text=' + encodeURIComponent(lines), '_blank', 'noopener,noreferrer');
    });
  }
})();
</script>`;

function convertImageUrls(html) {
  return html.replace(
    /\/_vinext\/image\?url=%2Fimages%2F([^&"]+)(?:&amp;|&)w=\d+(?:&amp;|&)q=\d+/g,
    (_match, filename) => `images/${decodeURIComponent(filename)}`,
  );
}

function convertLinks(html) {
  return html.replace(/href="(\/[^"#?]*)"/g, (match, pathname) => {
    const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    return routes.has(normalized) ? `href="${routes.get(normalized)}"` : match;
  });
}

function makeStatic(html) {
  let result = html;
  result = result.replace(/<link[^>]+rel="modulepreload"[^>]*\/?>(?:<\/link>)?/g, "");
  result = result.replace(/<link[^>]+rel="preload"[^>]+as="image"[^>]*\/?>(?:<\/link>)?/g, "");
  result = result.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  result = result.replace(/href="\/assets\//g, 'href="assets/');
  result = result.replace(/src="\/brand\//g, 'src="brand/');
  result = result.replace(/srcSet="\/brand\//g, 'srcSet="brand/');
  result = result.replace(/, \/brand\//g, ', brand/');
  result = result.replace(/href="https:\/\/errerias\.adv\.br\/favicon\.svg"/g, 'href="favicon.svg"');
  result = result.replace(/href="https:\/\/errerias\.adv\.br\/manifest\.webmanifest"/g, 'href="manifest.webmanifest"');
  result = convertImageUrls(result);
  result = convertLinks(result);
  result = result.replace("</body>", `${staticScript}</body>`);
  return result;
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

const workerModule = await import(join(projectDirectory, "dist/server/index.js"));
const worker = workerModule.default;

for (const [route, filename] of routes) {
  const response = await worker.fetch(
    new Request(`http://local.errerias${route}`),
    {},
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Falha ao exportar ${route}: HTTP ${response.status}`);
  const html = makeStatic(await response.text());
  await writeFile(join(outputDirectory, filename), html, "utf8");
}

const assetSource = join(projectDirectory, "dist/client/assets");
const assetOutput = join(outputDirectory, "assets");
await mkdir(assetOutput, { recursive: true });
for (const filename of await readdir(assetSource)) {
  if (filename.endsWith(".css")) await cp(join(assetSource, filename), join(assetOutput, filename));
}
await cp(join(projectDirectory, "dist/client/images"), join(outputDirectory, "images"), { recursive: true });
await cp(join(projectDirectory, "dist/client/brand"), join(outputDirectory, "brand"), { recursive: true });

for (const filename of ["favicon.svg", "manifest.webmanifest", "og.png", "robots.txt", "sitemap.xml", "llms.txt"]) {
  await cp(join(projectDirectory, "dist/client", filename), join(outputDirectory, filename));
}

const manifestPath = join(outputDirectory, "manifest.webmanifest");
const manifest = await readFile(manifestPath, "utf8");
await writeFile(manifestPath, manifest.replace('"start_url": "/"', '"start_url": "index.html"'), "utf8");

console.log(`Prévia local criada em ${join(outputDirectory, "index.html")}`);
