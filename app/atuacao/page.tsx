import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "../components/ContactBand";
import { PageHero } from "../components/PageHero";
import { services } from "../data/site";

export const metadata: Metadata = {
  title: "Áreas de atuação",
  description: "Conheça as áreas de atuação da Errerias & Associados: transportes, empresarial, trabalhista, tributário, contencioso, sucessório, agronegócio e LGPD.",
  alternates: { canonical: "/atuacao" },
};

export default function AtuacaoPage() {
  return (
    <main>
      <PageHero eyebrow="Atuação integrada" title="Competências organizadas em torno da empresa." description="Áreas que se conectam para tratar decisões, rotinas e conflitos de forma coordenada — sem perder a profundidade de cada matéria." breadcrumb="Áreas de atuação" />
      <section className="section section--warm">
        <div className="container area-list">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/atuacao/${service.slug}`} className="area-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{service.eyebrow}</p><h2>{service.shortTitle}</h2><small>{service.summary}</small></div>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand title="Uma necessidade pode envolver mais de uma área." />
    </main>
  );
}
