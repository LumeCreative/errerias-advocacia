import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container"><p className="eyebrow">Erro 404</p><h1>Esta página não foi encontrada.</h1><p>O endereço pode ter mudado ou o conteúdo pode não estar mais disponível.</p><Link className="button" href="/">Voltar ao início</Link></div>
    </main>
  );
}
