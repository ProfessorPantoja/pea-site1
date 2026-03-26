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

## 006

**Pedido:** adaptar o script local de otimizacao e passar nas midias atuais do projeto.

**Acao:** converti o script para operar em `public/fotos` e `public/video`, gerei versoes `webp` para as imagens e `-optimized.mp4` para os videos, e atualizei o site para usar as imagens locais otimizadas no hero, na logo e na secao de palestrantes.

**Status:** concluido

## 007

**Pedido:** registrar explicitamente no log a adicao dos videos e da nova foto do hero.

**Acao:** documentado que, nesta etapa, foram adicionados ao projeto:

- a nova imagem de hero `public/fotos/foto-hero.jpg`
- os videos `public/video/1.mp4`, `public/video/2.mp4`, `public/video/3.mp4` e `public/video/4.mp4`
- o script local `scripts/optimize-media.sh`, trazido para dentro deste repositorio

**Resultado associado:** essas midias passaram a fazer parte da base do projeto, e a foto do hero entrou no fluxo de otimizacao e uso da interface.

**Status:** concluido

## 008

**Pedido:** reduzir ainda mais o video teaser mais pesado, por estar grande demais para uma landing page.

**Acao:** ajustado o script de otimizacao para tratar especificamente o `public/video/3.mp4` com um perfil mais agressivo para prova social:

- escala reduzida para `480p`
- frame rate reduzido para `24fps`
- compressao mais forte com `crf 37`
- sem audio, mantendo foco em clima visual

**Objetivo:** baixar significativamente o peso do arquivo sem depender de autoplay nem de preloading pesado quando esse video entrar na interface.

**Status:** concluido

## 009

**Pedido:** manter som em todos os videos otimizados, porque nesta landing eles serao usados na secao de edicoes anteriores e nao como fundo mudo.

**Acao:** ajustado o script para preservar audio comprimido em todos os `*-optimized.mp4`:

- `1`, `2` e `4` agora usam perfil equilibrado com audio `aac` a `96k`
- `3` manteve o perfil mais leve de video, mas passou a incluir audio `aac` a `64k`
- mantida a compressao mais agressiva apenas no `3`, como combinado

**Objetivo:** permitir reproducao com som na secao de prova social sem voltar aos arquivos brutos originais.

**Status:** concluido

## 010

**Pedido:** adicionar a LIA como elemento forte do site, com destaque flutuante e uma secao propria na landing.

**Acao:** criada a base de conteudo da LIA em `site.ts`, adicionada uma secao dedicada para apresentar a atendente inteligente do evento e incluido um CTA flutuante fixo para chamar atencao durante toda a navegacao.

**Objetivo:** transformar a LIA em um ativo real de conversao, ajudando o visitante a tirar duvidas do evento e reduzir friccao antes da compra.

**Status:** concluido

## 011

**Pedido:** configurar a LIA com o numero real de WhatsApp e uma mensagem padrao que identifique a origem pelo site.

**Acao:** atualizado o link da LIA para o numero `27 99268-1959`, com a mensagem:

`Oi, LIA. Vim do site e quero mais informacoes sobre o Pessoas em Acao.`

**Objetivo:** deixar claro no atendimento que o contato veio da landing page, melhorando contexto e conversao.

**Status:** concluido

## 012

**Pedido:** manter o tamanho externo da logo, mas aumentar um pouco a imagem interna para melhorar leitura visual.

**Acao:** ajustado o render da logo no header e no footer para preservar o circulo externo e ampliar apenas o conteudo interno em cerca de `12%`.

**Objetivo:** melhorar presenca e legibilidade da marca sem mexer no espacamento ja aprovado.

**Status:** concluido

## 013

**Pedido:** aumentar mais a presenca interna da logo e trocar os contatos gerais do site para o novo numero de WhatsApp, com mensagens melhores para vaga e atendimento.

**Acao:** ampliado o conteudo interno da logo em mais um passo e substituidos os links gerais de WhatsApp pelo numero `22 99894-6111`, com dois fluxos separados:

- vaga: `Ola, vim do site e quero garantir minha vaga no Pessoas em Acao.`
- atendimento: `Ola, vim do site e gostaria de falar com alguem para entender melhor o evento.`

**Objetivo:** melhorar a leitura da marca e deixar o atendimento do site mais claro e mais orientado para conversao.

**Status:** concluido

## 014

**Pedido:** concluir push e deploy na Vercel sem carregar peso desnecessario para a publicacao.

**Acao:** criado `.vercelignore` para excluir do deploy os arquivos originais pesados que nao sao usados pela interface, mantendo apenas as midias otimizadas em producao.

**Objetivo:** reduzir o volume do pacote enviado para a Vercel e aumentar a chance de deploy estavel.

**Status:** concluido

## 015

**Pedido:** corrigir a comunicacao da `6a` edicao, colocar os videos das edicoes anteriores no site com carregamento controlado e configurar o OG para compartilhamento no WhatsApp.

**Acao:** trocada a copy da edicao para um texto mais claro, adicionados os quatro videos otimizados na secao de prova social com `preload="metadata"` apenas no primeiro e `preload="none"` nos demais, e configuradas meta tags Open Graph usando `public/fotos/og-pea.png`.

**Objetivo:** melhorar compreensao imediata da proposta, usar prova social real sem pesar no carregamento e garantir compartilhamento com imagem correta no WhatsApp.

**Status:** concluido

## 016

**Pedido:** fazer um pente fino em toda a acentuação do site, corrigindo textos visíveis para o português do Brasil.

**Acao:** revisadas e corrigidas as strings visíveis em `site.ts`, layout e seções da landing, incluindo título, descrições, CTAs, navegação, textos da LIA, prova social, ingresso e rodapé.

**Objetivo:** deixar a comunicação mais profissional, natural e correta para o público brasileiro.

**Status:** concluido

## 017

**Pedido:** refinar a hierarquia visual da landing, deixando as transições de sessão mais claras, limpando overlays ruins no hero, organizando melhor a prova social e melhorando a experiência da LIA.

**Acao:** reduzido e afinado o CTA do topo, removido o bloco sobre a imagem do hero e levado os highlights para fora da foto, dado mais respiro ao letreiro, reorganizada a prova social para começar com título antes do vídeo no mobile, criadas subseções claras para vídeos e legado do evento, trocadas tags repetitivas por rótulos mais úteis, transformados os highlights da LIA em bullets, deixadas as perguntas rápidas clicáveis com ida direta ao WhatsApp da LIA, reforçado o efeito do botão flutuante, melhorada a legibilidade do bloco de escassez e substituído o texto final pouco útil do rodapé por `Pessoas em Ação · 2026`.

**Objetivo:** deixar o site com leitura mais premium, reduzir sensação de repetição e tornar cada bloco mais compreensível antes da próxima rodada de refinos.

**Status:** concluido

## 018

**Pedido:** resolver a questão dos divisores entre seções, criando transições menos retas e mais premium entre os blocos principais da landing.

**Acao:** criado um sistema reutilizável de transição com o novo componente `SectionBridge.astro`, incluindo três variações de tom (`light`, `soft` e `dark`) com curvas superiores e inferiores, textura leve e texto editorial curto para anunciar a mudança de assunto. Esse sistema foi aplicado entre `Quem conduz -> Prova social`, `Prova social -> LIA` e `LIA -> Ingresso`. Também foram removidas as curvas soltas antigas de `SocialProofSection` e `LiaSection` para evitar redundância e deixar a hierarquia mais controlada.

**Objetivo:** fazer cada virada de assunto ficar evidente sem parecer brusca, elevando a percepção de acabamento premium da landing.

**Status:** concluido

## 019

**Pedido:** alterar a mensagem padrão do botão da LIA para um texto mais direto sobre a origem do contato e publicar a mudança no site.

**Acao:** atualizada a mensagem principal do WhatsApp da LIA em `src/data/site.ts` para:

`Oi, LIA. Vim do site do Pessoas em Ação.`

Tambem foi feito `push` para `main` e deploy em producao na Vercel, com atualizacao publicada em `https://pea-site.vercel.app`.

**Objetivo:** deixar o primeiro contato com a LIA mais limpo e imediato, preservando o contexto de que o usuario veio da landing page.

**Status:** concluido

## 020

**Pedido:** mudar o valor do ingresso para `R$100` e deixar claro na landing que buffet / coffee break nao esta incluso no ingresso e sera pago separadamente no dia do evento.

**Acao:** atualizado o preco base do evento para `R$100`, revisados os textos do hero e da secao de ingresso para remover qualquer leitura de alimentacao inclusa, e adicionado um aviso explicito no card de ingresso com a mensagem:

`Buffet / coffee break e separado e o pagamento e feito na hora do evento.`

Tambem foi feito `push` para `main` e deploy em producao na Vercel, com atualizacao publicada em `https://pea-site.vercel.app`.

**Objetivo:** alinhar a comunicacao comercial com a regra real do evento, evitando promessa errada sobre inclusoes do ingresso.

**Status:** concluido

## 021

**Pedido:** ajustar a nomenclatura do aviso de alimentacao para usar o nome correto `cafe colonial`.

**Acao:** atualizado o aviso do card de ingresso para trocar `buffet / coffee break` por `cafe colonial`, ficando com a comunicacao:

`O cafe colonial e separado e o pagamento e feito na hora do evento.`

**Objetivo:** usar o nome real da oferta de alimentacao e evitar ambiguidade na comunicacao comercial do site.

**Status:** concluido
