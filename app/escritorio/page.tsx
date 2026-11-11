import type { Metadata } from "next";
import { ContactBand } from "../components/ContactBand";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "O escritório",
  description: "Conheça a história, o método e a forma de atuação da Errerias & Associados, escritório de advocacia empresarial fundado em 1998 em Maringá.",
  alternates: { canonical: "/escritorio" },
};

export default function EscritorioPage() {
  return (
    <main>
      <PageHero eyebrow="Institucional" title="Experiência construída ao lado de empresas." description="Um escritório fundado em 1998, com atuação consultiva e contenciosa orientada pela ética, pela clareza e pela compreensão do negócio." image="/images/hero-office.png" imageAlt="Arquitetura contemporânea em tons de carvão, dourado e marfim" breadcrumb="O escritório" />

      <section className="section">
        <div className="container story-grid">
          <div className="story-year"><span>Desde</span><strong>1998</strong><small>Maringá • Paraná</small></div>
          <div className="rich-text rich-text--large">
            <p>A Consultoria Jurídica Errerias &amp; Associados foi constituída pelo sócio fundador, Dr. Aparecido Domingos Errerias Lopes, juiz aposentado da Justiça do Trabalho, professor universitário aposentado, mestre em Direito pela Universidade Federal de Santa Catarina e autor de obras com ênfase trabalhista.</p>
            <p>Desde o início, o escritório se dedicou à consultoria preventiva e à assessoria de pequenas, médias e grandes empresas, tanto na esfera extrajudicial quanto no contencioso.</p>
            <p>O Dr. Rogério Andreotti Errerias integra o escritório na qualidade de sócio.</p>
            <p>Ao longo do tempo, a atuação se ampliou para responder de forma integrada às necessidades empresariais — trabalho, contratos, tributos, patrimônio, contencioso, proteção de dados e setores com dinâmica própria, como transporte e agronegócio.</p>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container method-grid">
          <div><p className="eyebrow">Nosso método</p><h2>Entender. Estruturar. Acompanhar.</h2><p>Para cada contexto, uma estratégia documentada e compreensível por quem precisa decidir.</p></div>
          <ol className="steps">
            <li><span>01</span><div><h3>Compreensão</h3><p>Mapeamos fatos, operação, documentos, responsáveis e impacto econômico.</p></div></li>
            <li><span>02</span><div><h3>Estratégia</h3><p>Apresentamos cenários, riscos, alternativas e um plano de ação adequado à empresa.</p></div></li>
            <li><span>03</span><div><h3>Implementação</h3><p>Transformamos a orientação em contratos, rotinas, negociações ou medidas processuais.</p></div></li>
            <li><span>04</span><div><h3>Acompanhamento</h3><p>Monitoramos resultados, mudanças e os ajustes necessários ao longo do tempo.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container values-grid">
          <div><p className="eyebrow eyebrow--dark">Princípios</p><h2>Rigor técnico com relações de confiança.</h2></div>
          <div className="value-list">
            <article><span>01</span><h3>Ética</h3><p>Independência, sigilo e respeito aos limites da advocacia.</p></article>
            <article><span>02</span><h3>Clareza</h3><p>Informação objetiva para que o cliente compreenda e decida.</p></article>
            <article><span>03</span><h3>Responsabilidade</h3><p>Recomendações compatíveis com os fatos, os riscos e a realidade.</p></article>
            <article><span>04</span><h3>Proximidade</h3><p>Comunicação direta com a direção e as equipes envolvidas.</p></article>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
