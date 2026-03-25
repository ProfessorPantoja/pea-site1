# [CODEX-06] Change Request Log

Log numerado das mudancas pedidas a partir desta etapa do projeto.

## 001

**Pedido:** criar um log de cada mudanca solicitada daqui para frente.

**Acao:** criado este arquivo para registrar cada ajuste de forma sequencial.

**Status:** concluido

## 002

**Pedido:** verificar por que as animacoes pareciam inexistentes ou fracas.

**Acao:** analisei a execucao no browser, confirmei que o reveal estava rodando e reforcei o sistema de motion com:

- reveal mais forte
- timing melhor no primeiro paint
- parallax mais perceptivel
- ticker continuo no hero
- hover-lift nos cards

**Status:** concluido

## 003

**Pedido:** investigar por que o layout saiu do lugar no mobile.

**Causa encontrada:** o ticker do hero estava estourando a largura do grid e empurrando os elementos para fora do viewport.

**Acao:** limitei a largura do bloco, apliquei `min-w-0` nos containers criticos e isolei o marquee dentro de um wrapper com `overflow-hidden`.

**Status:** concluido

## 004

**Pedido:** deixar a animacao perceptivel na pratica e explicar por que ela parecia inexistente.

**Causa encontrada:** o sistema de reveal existia, mas a entrada dos elementos visiveis na primeira dobra estava sutil demais e rapida demais para ser percebida.

**Acao:** reforcei o motion com:

- stagger real nos elementos ja visiveis no primeiro viewport
- atraso inicial maior para o olho perceber a entrada
- reveal com mais deslocamento e blur
- CTA principal com pulso continuo
- indicacao interna de `motionMode` no runtime para diferenciar `full` de `reduced`

**Status:** concluido

## 005

**Pedido:** usar as 4 imagens adicionadas pela pasta `fotos`, incluindo a logo no favicon e nos lugares cabiveis.

**Acao:** movi os arquivos para `public/fotos`, substitui as fotos remotas dos palestrantes pelas imagens reais locais e troquei o simbolo textual pela logo real no header, footer e favicon.

**Status:** concluido
