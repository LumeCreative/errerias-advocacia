import { site } from "../data/site";

export function ContactBand({ title = "Converse sobre o contexto da sua empresa." }: { title?: string }) {
  return (
    <section className="contact-band">
      <div className="container contact-band__inner">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>{title}</h2>
          <p>O primeiro contato serve para compreender a necessidade, verificar eventuais conflitos e definir o encaminhamento adequado.</p>
        </div>
        <div className="contact-band__actions">
          <a className="button button--light" href={site.whatsapp} target="_blank" rel="noreferrer">Iniciar pelo WhatsApp</a>
          <a className="text-link text-link--light" href={`mailto:${site.email}`}>{site.email} →</a>
        </div>
      </div>
    </section>
  );
}
