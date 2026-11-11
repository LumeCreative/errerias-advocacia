import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBand } from "../../components/ContactBand";
import { JsonLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { getService, services, site } from "../../data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/atuacao/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, url: `/atuacao/${service.slug}`, images: [] },
    twitter: { title: service.title, description: service.summary, images: [] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${site.url}/atuacao/${service.slug}`,
      provider: { "@id": `${site.url}/#escritorio` },
      areaServed: { "@type": "Country", name: "Brasil" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: site.url },
        { "@type": "ListItem", position: 2, name: "Áreas de atuação", item: `${site.url}/atuacao` },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: `${site.url}/atuacao/${service.slug}` },
      ],
    },
  ];

  return (
    <main>
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.summary} image={service.image} imageAlt={service.imageAlt} breadcrumb={service.shortTitle} />
      <section className="section">
        <div className="container service-intro">
          <p className="eyebrow eyebrow--dark">Visão da área</p>
          <p>{service.intro}</p>
        </div>
      </section>
      <section className="section section--warm">
        <div className="container">
          <div className="section-heading section-heading--compact"><div><p className="eyebrow eyebrow--dark">Escopo</p><h2>Como podemos atuar</h2></div></div>
          <div className="topic-grid">
            {service.topics.map((topic, index) => (
              <article key={topic.title} className="topic-card">
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{topic.title}</h3>
                <ul>{topic.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container approach-grid">
          <div><p className="eyebrow">Forma de trabalho</p><h2>Profundidade técnica, aplicação prática.</h2><p>Cada trabalho parte dos fatos, documentos e objetivos específicos. O escopo é definido de forma transparente antes do início da atuação.</p></div>
          <ol>{service.approach.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </div>
      </section>
      <section className="section">
        <div className="container faq-layout">
          <div><p className="eyebrow eyebrow--dark">Dúvidas comuns</p><h2>Perguntas frequentes</h2></div>
          <div className="faq-list">{service.faq.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>
      <ContactBand title={`Converse conosco sobre ${service.shortTitle.toLowerCase()}.`} />
      <JsonLd data={schema} />
    </main>
  );
}
