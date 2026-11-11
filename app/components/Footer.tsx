import Link from "next/link";
import { Brand } from "./Brand";
import { services, site } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand inverse />
          <p>
            Assessoria jurídica consultiva e contenciosa para empresas, empresários, transportadores, produtores e famílias empresárias.
          </p>
          <span>Desde {site.founded}, em Maringá.</span>
        </div>
        <div>
          <h2>Atuação</h2>
          <ul>
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}><Link href={`/atuacao/${service.slug}`}>{service.shortTitle}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Mais áreas</h2>
          <ul>
            {services.slice(4).map((service) => (
              <li key={service.slug}><Link href={`/atuacao/${service.slug}`}>{service.shortTitle}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <address>
            {site.address}<br />
            {site.city} — {site.state}, {site.postalCode}
          </address>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.</span>
        <div>
          <Link href="/privacidade">Privacidade e LGPD</Link>
          <span>Conteúdo informativo. Não constitui promessa de resultado.</span>
        </div>
      </div>
    </footer>
  );
}
