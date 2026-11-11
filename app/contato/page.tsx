import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { site } from "../data/site";

export const metadata: Metadata = { title: "Contato", description: "Entre em contato com a Errerias & Associados em Maringá por WhatsApp, telefone ou e-mail.", alternates: { canonical: "/contato" } };

export default function ContatoPage() {
  return (
    <main>
      <PageHero eyebrow="Contato" title="Comece pelo contexto." description="Conte-nos brevemente a necessidade para direcionarmos o primeiro contato à área adequada." breadcrumb="Contato" />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <p className="eyebrow eyebrow--dark">Errerias &amp; Associados</p><h2>Atendimento com agendamento.</h2>
            <div><span>Endereço</span><address>{site.address}<br />{site.city} — {site.state}<br />CEP {site.postalCode}</address></div>
            <div><span>Telefone e WhatsApp</span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div>
            <div><span>E-mail</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><span>Modalidade</span><p>Presencial em Maringá e atendimento remoto, conforme o caso.</p></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
