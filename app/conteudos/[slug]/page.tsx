import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "../../components/ContactBand";
import { JsonLd } from "../../components/JsonLd";
import { insights, site } from "../../data/site";

const articles: Record<string, { sections: { heading: string; paragraphs: string[]; bullets?: string[] }[] }> = {
  "juridico-para-transportadoras": {
    sections: [
      { heading: "A operação não cabe em uma única área do Direito", paragraphs: ["Uma transportadora reúne relações trabalhistas, contratos comerciais, obrigações regulatórias, seguros, responsabilidade por carga, trânsito e risco de acidentes. Tratar cada evento de forma isolada pode gerar orientações incompatíveis entre si.", "A assessoria setorial começa pelo entendimento do fluxo: quem contrata o frete, como o motorista é vinculado, quais documentos acompanham a operação, onde os dados são registrados e quem decide quando surge uma exceção."] },
      { heading: "O cotidiano produz a prova do futuro", paragraphs: ["Controles de jornada, ordens, comprovantes, mensagens, documentos de carga e registros de manutenção podem se tornar decisivos em uma fiscalização ou processo. Não basta criar uma política formal se a prática segue outro caminho."], bullets: ["documentos coerentes com a rotina real", "responsáveis definidos para cada registro", "treinamento de quem aplica as regras", "revisão periódica de falhas e exceções"] },
      { heading: "Prevenção precisa ser executável", paragraphs: ["Uma recomendação jurídica só reduz risco quando a operação consegue cumpri-la. Por isso, medidas sobre jornada, contratação, acidentes, cargas ou defesas administrativas devem ser construídas com RH, frota, segurança, fiscal e direção.", "O papel do jurídico setorial é traduzir a norma em decisão e, ao mesmo tempo, mostrar à empresa quando uma escolha operacional aumenta sua exposição."] },
    ],
  },
  "planejamento-tributario-com-governanca": {
    sections: [
      { heading: "Antes da oportunidade, vêm os fatos", paragraphs: ["Regime tributário, cadeia de fornecedores, natureza das receitas, localização das operações e documentação contábil mudam completamente uma análise fiscal. Uma tese relevante para uma empresa pode ser inaplicável a outra.", "O diagnóstico procura compreender como a obrigação foi apurada, quais documentos sustentam a operação e qual é a interpretação jurídica aplicável ao período analisado."] },
      { heading: "Segurança também é processo", paragraphs: ["Planejamento não termina em um parecer. A implementação precisa definir responsáveis, ajustes em sistemas, registros e formas de revisão. Sem governança, uma decisão juridicamente defensável pode ser executada de maneira diferente do que foi planejado."], bullets: ["premissas e documentos utilizados", "responsável por cada etapa", "validação entre jurídico, fiscal e contabilidade", "monitoramento de mudanças legislativas e jurisprudenciais"] },
      { heading: "Crédito tributário não é promessa", paragraphs: ["A recuperação de valores depende de recolhimento, base jurídica, prazo e documentação. O diagnóstico deve deixar claro o método de cálculo, os riscos e a via escolhida — administrativa ou judicial.", "A decisão empresarial melhora quando oportunidade e exposição são apresentadas juntas, com registro dos fundamentos adotados."] },
    ],
  },
  "prevencao-passivo-trabalhista": {
    sections: [
      { heading: "A distância entre documento e prática", paragraphs: ["Contratos e regulamentos são importantes, mas o passivo trabalhista costuma nascer da forma como liderança, jornada, remuneração e medidas disciplinares funcionam no cotidiano. A prevenção começa comparando o que está escrito com o que realmente acontece.", "Esse diagnóstico deve ouvir RH, gestores e áreas operacionais, além de examinar registros e situações repetitivas."] },
      { heading: "Quatro elementos precisam conversar", paragraphs: ["Orientação jurídica, controle, liderança e evidência formam um único sistema. Se um deles falha, a empresa pode não conseguir demonstrar a regularidade de uma conduta ou perceber o risco antes de ele se repetir."], bullets: ["regras compreensíveis e acessíveis", "controles compatíveis com a atividade", "gestores treinados para situações recorrentes", "documentação proporcional e preservada"] },
      { heading: "Prevenção é acompanhamento", paragraphs: ["Mudanças na empresa, nos instrumentos coletivos e nos entendimentos dos tribunais podem tornar uma rotina inadequada. Por isso, a revisão não deve ocorrer apenas depois de uma reclamação trabalhista.", "Uma assessoria preventiva acompanha indicadores, dúvidas e ocorrências para transformar casos isolados em melhoria de processo."] },
    ],
  },
};

export function generateStaticParams() { return insights.map((insight) => ({ slug: insight.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.description, alternates: { canonical: `/conteudos/${slug}` }, openGraph: { title: insight.title, description: insight.description, images: [] }, twitter: { title: insight.title, description: insight.description, images: [] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  const article = articles[slug];
  if (!insight || !article) notFound();
  return (
    <main>
      <article>
        <header className="article-header"><div className="container article-header__inner"><div className="breadcrumbs"><Link href="/">Início</Link><span>—</span><Link href="/conteudos">Conteúdos</Link></div><p className="eyebrow">{insight.category} • {insight.readTime}</p><h1>{insight.title}</h1><p>{insight.description}</p><small>Publicado em 24 de agosto de 2026 • Conteúdo informativo</small></div></header>
        <div className="container article-body">
          {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}
          <aside><strong>Nota</strong><p>Este texto apresenta informações gerais e não substitui a análise jurídica de fatos e documentos específicos.</p></aside>
        </div>
      </article>
      <ContactBand title="Quer avaliar como esse tema aparece na sua operação?" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: insight.title, description: insight.description, datePublished: "2026-08-24", dateModified: "2026-08-24", inLanguage: "pt-BR", mainEntityOfPage: `${site.url}/conteudos/${slug}`, author: { "@id": `${site.url}/#escritorio` }, publisher: { "@id": `${site.url}/#escritorio` } }} />
    </main>
  );
}
