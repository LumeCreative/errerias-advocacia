"use client";

import Link from "next/link";
import { useState } from "react";
import { Brand } from "./Brand";
import { services } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline__inner">
          <span>Advocacia empresarial • Maringá, Paraná</span>
          <div>
            <a href="tel:+5544988516797">(44) 98851-6797</a>
            <a href="mailto:consultoria@errerias.adv.br">consultoria@errerias.adv.br</a>
          </div>
        </div>
      </div>
      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span className="sr-only">Abrir menu</span>
          </button>
          <nav
            id="primary-navigation"
            className={`main-nav ${open ? "main-nav--open" : ""}`}
            aria-label="Navegação principal"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            <Link href="/escritorio">O escritório</Link>
            <div className="nav-group">
              <Link href="/atuacao">Áreas de atuação <span aria-hidden="true">⌄</span></Link>
              <div className="submenu">
                <div className="submenu__intro">
                  <span>Atuação integrada</span>
                  <strong>Direito a serviço da decisão empresarial.</strong>
                  <Link href="/atuacao">Conheça todas as áreas →</Link>
                </div>
                <div className="submenu__links">
                  {services.map((service) => (
                    <Link key={service.slug} href={`/atuacao/${service.slug}`}>
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/conteudos">Conteúdos</Link>
            <Link href="/contato">Contato</Link>
            <a className="button button--small" href="https://wa.me/5544988516797" target="_blank" rel="noreferrer">
              Falar com o escritório
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
