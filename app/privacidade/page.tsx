import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { site } from "../data/site";

export const metadata: Metadata = { title: "Privacidade e LGPD", description: "Aviso de privacidade e proteção de dados do site da Errerias & Associados.", alternates: { canonical: "/privacidade" } };

export default function PrivacidadePage() {
  return (
    <main>
      <PageHero eyebrow="Privacidade" title="Transparência no tratamento de dados." description="Este aviso explica, de forma objetiva, como os dados enviados por nossos canais podem ser utilizados." breadcrumb="Privacidade e LGPD" />
      <article className="container legal-copy">
        <section><h2>1. Quem controla os dados</h2><p>A Consultoria Jurídica Errerias &amp; Associados é responsável pelo tratamento dos dados pessoais recebidos por este site e por seus canais de contato, nos limites da legislação aplicável.</p></section>
        <section><h2>2. Dados tratados</h2><p>Podemos receber dados cadastrais e de contato fornecidos diretamente por você, como nome, empresa, e-mail, telefone e a descrição inicial do assunto. Dados técnicos mínimos podem ser registrados pelo serviço de hospedagem para segurança e funcionamento.</p></section>
        <section><h2>3. Finalidades</h2><p>Os dados são utilizados para responder contatos, verificar conflitos, agendar atendimentos, prestar serviços quando contratados, cumprir obrigações legais e manter a segurança dos canais.</p></section>
        <section><h2>4. Compartilhamento e conservação</h2><p>O compartilhamento ocorre apenas quando necessário à operação dos canais, ao cumprimento de obrigações ou à prestação contratada, observados sigilo e proteção adequados. Os dados são conservados pelo período compatível com a finalidade e com as obrigações profissionais e legais.</p></section>
        <section><h2>5. Seus direitos</h2><p>Você pode solicitar confirmação, acesso, correção e outras providências previstas na Lei Geral de Proteção de Dados. Algumas informações poderão ser preservadas quando houver obrigação legal, regulatória ou profissional.</p></section>
        <section><h2>6. Contato sobre dados pessoais</h2><p>Para dúvidas ou solicitações, escreva para <a href={`mailto:${site.email}`}>{site.email}</a>. Para proteger o sigilo, não envie documentos sensíveis antes da orientação do escritório.</p></section>
        <section><h2>7. Atualizações</h2><p>Este aviso poderá ser atualizado para refletir mudanças nos canais, serviços ou requisitos legais. Versão apresentada: 24 de agosto de 2026.</p></section>
      </article>
    </main>
  );
}
