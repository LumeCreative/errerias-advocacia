import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { services, site } from "./data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Errerias & Associados | Advocacia Empresarial em Maringá",
    template: "%s | Errerias & Associados",
  },
  description: site.description,
  keywords: [
    "advocacia empresarial Maringá",
    "advogado para transportadora",
    "direito trabalhista empresarial",
    "planejamento tributário",
    "recuperação judicial",
    "planejamento sucessório",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Errerias & Associados | Advocacia Empresarial",
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Errerias & Associados — Advocacia Empresarial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Errerias & Associados | Advocacia Empresarial",
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "ProfessionalService"],
  "@id": `${site.url}/#escritorio`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  foundingDate: site.founded,
  founder: {
    "@type": "Person",
    name: "Aparecido Domingos Errerias Lopes",
    jobTitle: "Sócio fundador",
  },
  member: [
    {
      "@type": "Person",
      name: "Rogério Andreotti Errerias",
      jobTitle: "Sócio",
    },
    {
      "@type": "Person",
      name: "Aparecido Domingos Errerias Lopes",
      jobTitle: "Sócio fundador",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.postalCode,
    addressCountry: "BR",
  },
  areaServed: [{ "@type": "Country", name: "Brasil" }, { "@type": "State", name: "Paraná" }],
  knowsAbout: services.map((service) => service.title),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "atendimento",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <Header />
        <div id="conteudo">{children}</div>
        <Footer />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
