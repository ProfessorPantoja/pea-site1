# pea-site

Estrutura organizada para iniciar a implementacao da landing page do evento `Pessoas em Acao`.

## Pastas

- `docs/context`: documento-fonte do evento
- `docs/structures`: propostas de estrutura da landing page
- `docs/reviews`: comparativos e avaliacoes entre propostas
- `docs/briefs`: briefs enviados ou preparados para ferramentas de design
- `design/exports/stitch-v1`: export atual do STITCH
- `design/archives`: arquivos compactados de referencia
- `scripts`: utilitarios locais

## App

O site esta implementado em `Astro + Tailwind CSS + TypeScript`.

### Comandos

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

### Estrutura do app

- `src/pages/index.astro`: landing page principal
- `src/components/sections`: secoes da landing page
- `src/layouts`: layout base e scripts globais
- `src/data/site.ts`: conteudo centralizado e placeholders internos
- `src/styles/global.css`: tokens visuais, utilitarios e animacoes
