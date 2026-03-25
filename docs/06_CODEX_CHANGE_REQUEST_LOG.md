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
