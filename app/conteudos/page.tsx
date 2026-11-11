import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "../components/ContactBand";
import { PageHero } from "../components/PageHero";
import { insights } from "../data/site";

export const metadata: Metadata = {
  title: "Conteúdos e análises",
  description: "Análises jurídicas empresariais da Errerias & Associados sobre transportes, trabalho, tributos, contratos, patrimônio e gestão de riscos.",
  alternates: { canonical: "/conteudos" },
};

export default function ConteudosPage() {
  return (
    <main>
      <PageHero eyebrow="Conhecimento aplicado" title="Conteúdo que começa pela pergunta certa." description="Análises objetivas sobre temas jurídicos que afetam decisões, rotinas e riscos empresariais." breadcrumb="Conteúdos" />
      <section className="section">
        <div className="container content-list">
          {insights.map((insight, index) => (
            <Link className="content-row" key={insight.slug} href={`/conteudos/${insight.slug}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{insight.category} • {insight.readTime}</p><h2>{insight.title}</h2><small>{insight.description}</small></div>
              <b>Leia →</b>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section--warm newsletter-note"><div className="container"><p className="eyebrow eyebrow--dark">Informação responsável</p><h2>O conteúdo informa. O caso concreto exige análise própria.</h2><p>Textos jurídicos gerais não substituem a avaliação de documentos, fatos, datas e riscos específicos.</p></div></section>
      <ContactBand />
    </main>
  );
}
