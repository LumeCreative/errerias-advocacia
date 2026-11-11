import Link from "next/link";
import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: string;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero--image" : ""}`}>
      {image ? <Image className="page-hero__image" src={image} alt={imageAlt ?? ""} fill sizes="100vw" /> : null}
      <div className="page-hero__veil" />
      <div className="container page-hero__content">
        <div className="breadcrumbs" aria-label="Navegação estrutural">
          <Link href="/">Início</Link><span>—</span><span>{breadcrumb ?? title}</span>
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
