"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Olá, gostaria de falar com a Errerias & Associados.",
      name ? `Nome: ${name}` : "",
      company ? `Empresa: ${company}` : "",
      email ? `E-mail: ${email}` : "",
      phone ? `Telefone: ${phone}` : "",
      subject ? `Assunto: ${subject}` : "",
      message ? `Contexto: ${message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/5544988516797?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Nome completo<input name="name" type="text" autoComplete="name" required /></label>
        <label>Empresa<input name="company" type="text" autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
        <label>Telefone / WhatsApp<input name="phone" type="tel" autoComplete="tel" required /></label>
      </div>
      <label>Assunto<select name="subject" defaultValue=""><option value="" disabled>Selecione</option><option>Transportes e logística</option><option>Empresarial e contratos</option><option>Trabalhista empresarial</option><option>Tributário</option><option>Contencioso ou recuperação</option><option>Sucessório e patrimonial</option><option>Agronegócio</option><option>LGPD e governança</option><option>Outro assunto</option></select></label>
      <label>Conte-nos brevemente o contexto<textarea name="message" rows={5} required /></label>
      <label className="checkbox"><input type="checkbox" required /><span>Li o aviso de <a href="/privacidade">privacidade</a> e concordo com o uso dos dados para retorno deste contato.</span></label>
      <button className="button" type="submit">Continuar pelo WhatsApp</button>
      <p className="form-note">O envio será concluído no WhatsApp. Não inclua informações sigilosas ou documentos nesta primeira mensagem.</p>
    </form>
  );
}
