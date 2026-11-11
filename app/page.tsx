import Link from "next/link";
import Image from "next/image";
import { ContactBand } from "./components/ContactBand";
import { JsonLd } from "./components/JsonLd";
import { insights, services, site } from "./data/site";

export default function Home() {
  const faq = [
    {
      question: "Onde fica o escritório Errerias & Associados?",
      answer: `O escritório está em ${site.address}, ${site.city}, ${site.state}, com atendimentos presenciais mediante agendamento e atuação remota em todo o Brasil.`,
    },
    {
      question: "Quais empresas o escritório atende?",
      answer: "A atuação é voltada a pequenas, médias e grandes empresas, com núcleo dedicado a transportadoras e logística, além de produtores rurais, empresários e famílias empresárias.",
    },
    {
      question: "O escritório trabalha com consultoria preventiva?",
      answer: "Sim. A consultoria preventiva, a organização de rotinas e documentos e o apoio à decisão empresarial convivem com a atuação em processos administrativos e judiciais.",
    },
  ];

  return (
    <main>
      <section className="home-hero">
        <Image className="home-hero__image" src="/images/hero-office.png" alt="Interior contemporâneo de escritório em tons de carvão, dourado e marfim" fill priority sizes="100vw" />
        <div className="home-hero__overlay" />
        <div className="container home-hero__content">
          <p className="eyebrow">Advocacia empresarial desde 1998</p>
          <h1>Direito próximo<br />da <em>operação.</em></h1>
          <p>
            Estratégia jurídica para empresas que precisam decidir, prevenir riscos e conduzir conflitos sem perder de vista o negócio.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/atuacao">Conheça nossa atuação</Link>
            <Link className="text-link text-link--light" href="/escritorio">O escritório →</Link>
          </div>
        </div>
        <div className="container hero-facts" aria-label="Informações principais">
          <div><span>01</span><strong>Desde 1998</strong><small>Experiência empresarial</small></div>
          <div><span>02</span><strong>Maringá • Brasil</strong><small>Atuação presencial e remota</small></div>
          <div><span>03</span><strong>Consultivo + contencioso</strong><small>Visão integrada do risco</small></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-intro">
          <div>
            <p className="eyebrow eyebrow--dark">Como atuamos</p>
            <h2>O jurídico não deve chegar apenas depois do problema.</h2>
          </div>
          <div className="rich-text">
            <p>
              Nossa atuação começa pela compreensão da empresa: sua operação, seus contratos, suas pessoas, seus tributos e as decisões que sustentam o negócio.
            </p>
            <p>
              A partir daí, organizamos medidas preventivas, apoiamos negociações e conduzimos disputas com comunicação objetiva para a direção e as equipes internas.
            </p>
            <Link className="text-link" href="/escritorio">Conheça nosso método →</Link>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow eyebrow--dark">Áreas de atuação</p><h2>Competências que se encontram na realidade da empresa.</h2></div>
            <Link className="text-link" href="/atuacao">Ver todas as áreas →</Link>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link className={`service-card ${index === 0 ? "service-card--featured" : ""}`} key={service.slug} href={`/atuacao/${service.slug}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-feature">
        <div className="sector-feature__image-wrap">
          <Image src="/images/transport-logistics.png" alt="Caminhão em operação logística rodoviária ao amanhecer" fill sizes="(max-width: 820px) 100vw, 54vw" />
        </div>
        <div className="sector-feature__content">
          <p className="eyebrow">Núcleo de transportes</p>
          <h2>Conhecimento jurídico que entende a estrada e a empresa.</h2>
          <p>
            Uma frente dedicada a transportadoras, operadores logísticos e transportadores autônomos, integrando trabalho, contratos, acidentes, cargas, defesas e gestão do risco.
          </p>
          <ul className="feature-list">
            <li>Motoristas profissionais e jornada</li>
            <li>Contratos e responsabilidade na cadeia logística</li>
            <li>Defesas administrativas e judiciais</li>
          </ul>
          <Link className="button button--outline-light" href="/atuacao/transportes-e-logistica">Explorar esta atuação</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow eyebrow--dark">Visão aplicada</p><h2>Conteúdo para decisões empresariais.</h2></div>
            <Link className="text-link" href="/conteudos">Todos os conteúdos →</Link>
          </div>
          <div className="insight-grid">
            {insights.map((insight) => (
              <Link className="insight-card" key={insight.slug} href={`/conteudos/${insight.slug}`}>
                <div><span>{insight.category}</span><span>{insight.readTime}</span></div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <b>Ler análise →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container faq-layout">
          <div><p className="eyebrow eyebrow--dark">Informações objetivas</p><h2>Perguntas frequentes</h2></div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />
    </main>
  );
}
