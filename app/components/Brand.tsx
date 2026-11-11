import Image from "next/image";
import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? "brand--inverse" : ""}`} href="/" aria-label="Errerias & Associados — página inicial">
      <Image
        className="brand__logo"
        src={inverse ? "/brand/logo-horizontal-white.svg" : "/brand/logo-horizontal-gold.svg"}
        alt=""
        aria-hidden="true"
        width={900}
        height={360}
        priority={!inverse}
      />
    </Link>
  );
}
