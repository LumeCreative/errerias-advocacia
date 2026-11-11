# Novo site — Errerias & Associados

Site institucional completo em Next.js/Vinext, com conteúdo em português do Brasil, navegação responsiva e páginas próprias para cada área de atuação.

## Abrir localmente sem instalar nada

Abra a pasta `local-preview` e dê dois cliques em `index.html`. As páginas internas, imagens, menus e o formulário de contato funcionarão diretamente no navegador.

## Abrir o projeto de desenvolvimento

1. Instale o Node.js 22 ou superior.
2. Abra uma janela de terminal nesta pasta.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra o endereço mostrado no terminal.

Para conferir a versão de produção, execute `npm run build` e depois `npm start`.

Para recriar a pasta estática depois de qualquer alteração, execute `npm run export:local`.

## Estrutura principal

- `app/`: páginas, componentes, textos e estilos.
- `app/data/site.ts`: áreas de atuação e informações centrais do escritório.
- `public/images/`: imagens originais do novo site.
- `public/robots.txt`, `public/sitemap.xml` e `public/llms.txt`: descoberta por buscadores e motores de IA.
- `public/og.png`: imagem utilizada em compartilhamentos.

## Antes da publicação

- Confirmar telefone, e-mail, endereço e CEP.
- Revisar o aviso de privacidade com o responsável interno por LGPD.
- Substituir ou ampliar os textos da área de conteúdos conforme o calendário editorial.
- Apontar o domínio `errerias.adv.br` somente depois da aprovação final.

O formulário de contato abre uma mensagem estruturada no WhatsApp e, por isso, funciona sem banco de dados ou servidor de e-mail.
