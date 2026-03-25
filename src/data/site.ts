// Placeholder content for the prototype. Replace contact and date details when the official data is approved.
export const eventMeta = {
  name: 'Pessoas em Acao',
  editionLabel: '6a edicao da essencia',
  dateDisplay: '2 de maio de 2026',
  city: 'Cabo Frio, RJ',
  duration: '5 horas de experiencia',
  capacity: 'Apenas 100 vagas',
  price: 'R$150',
  instagramHandle: '@pessoas.em.acao.oficial',
  instagramUrl: 'https://www.instagram.com/pessoas.em.acao.oficial/',
  email: 'pessoas.em.acao.oficial@gmail.com',
  whatsappTicketUrl:
    'https://wa.me/5522998946111?text=Ola%2C%20vim%20do%20site%20e%20quero%20garantir%20minha%20vaga%20no%20Pessoas%20em%20Acao.',
  whatsappSupportUrl:
    'https://wa.me/5522998946111?text=Ola%2C%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20alguem%20para%20entender%20melhor%20o%20evento.',
};

export const navLinks = [
  { href: '#evento', label: 'O evento' },
  { href: '#publico', label: 'Para quem' },
  { href: '#conduz', label: 'Quem conduz' },
  { href: '#prova-social', label: 'Prova social' },
  { href: '#lia', label: 'LIA' },
  { href: '#ingresso', label: 'Ingresso' },
] as const;

export const liaMeta = {
  name: 'LIA',
  role: 'Atendente inteligente do evento',
  botUrl:
    'https://wa.me/5527992681959?text=Oi%2C%20LIA.%20Vim%20do%20site%20e%20quero%20mais%20informacoes%20sobre%20o%20Pessoas%20em%20Acao.',
  badge: 'Atendimento IA',
  headline: 'A LIA responde suas duvidas sobre o evento em segundos.',
  body:
    'Se voce quer entender ingresso, horario, publico, local, dinamica do encontro ou simplesmente saber se esse evento faz sentido para voce, a LIA entra para orientar sem friccao.',
  ctaLabel: 'Falar com a LIA agora',
  floatingLabel: 'Duvidas? Chame a LIA',
} as const;

export const liaHighlights = [
  'Tira duvidas do evento em tempo real',
  'Explica ingresso, acesso e formato',
  'Ajuda quem ainda esta indeciso',
  'Encaminha a conversa para a acao',
] as const;

export const liaQuestions = [
  'Que horas comeca o evento?',
  'O que esta incluso no ingresso?',
  'Esse evento e para mim?',
  'Como eu garanto minha vaga?',
] as const;

export const heroStats = [
  { value: '6a', label: 'edicao da essencia' },
  { value: '100', label: 'vagas presenciais' },
  { value: '5h', label: 'de experiencia ao vivo' },
  { value: 'IA + networking', label: 'conteudo e conexao real' },
] as const;

export const heroRibbon = [
  'Networking de verdade',
  'Conhecimento pratico',
  'Experiencia memoravel',
  'Demo de IA ao vivo',
  'Cabo Frio, RJ',
  'Energia alta do inicio ao fim',
] as const;

export const pillars = [
  {
    title: 'Acesso',
    body: 'Entre num ambiente e numa rede que normalmente nao estariam ao seu alcance.',
    accent: 'rose',
  },
  {
    title: 'Ambiente',
    body: 'Local bonito, energia alta, comida liberada e uma experiencia que faz voce querer estar ali do inicio ao fim.',
    accent: 'sky',
  },
  {
    title: 'Transformacao',
    body: 'Voce nao sai so inspirado. Voce sai com ideias, conexoes e experiencias que pode aplicar no dia seguinte.',
    accent: 'ink',
  },
] as const;

export const audienceCards = [
  {
    title: 'Empreendedoras',
    body: 'Cansadas de crescer sozinhas. Precisam de conexoes que virem negocio, visao e movimento.',
    tag: 'rede, negocio, merecimento',
  },
  {
    title: 'Empreendedores e profissionais',
    body: 'Sentem estagnacao. Querem resultado, repertorio novo e contatos que realmente abrem portas.',
    tag: 'resultado, repertorio, destravar',
  },
  {
    title: 'Jovens com ambicao',
    body: 'Querem entrar no ambiente certo, cercados por gente que esta construindo algo de verdade.',
    tag: 'referencia, ambiente, futuro',
  },
] as const;

export const hosts = [
  {
    name: 'Marceni',
    role: 'Psicologa, palestrante principal e alma do evento',
    body: 'Conduz a experiencia com foco em conexao, emocao e movimento. O evento gira ao redor da energia que ela cria no ambiente.',
    image: '/fotos/Marceni.webp',
  },
  {
    name: 'Isabela',
    role: 'Palestra sobre Lei da Atracao e construcao de clima',
    body: 'Ajuda a construir a atmosfera, a organizacao e a energia do encontro para que a experiencia seja leve, humana e memoravel.',
    image: '/fotos/isabela.webp',
  },
  {
    name: 'Fabio Pantoja',
    role: 'Estrategista e especialista em IA para negocios',
    body: 'Leva para o palco uma demo ao vivo de como tecnologia vira experiencia, repertorio pratico e oportunidade real.',
    image: '/fotos/pantoja.webp',
  },
] as const;

export const proofMetrics = [
  { value: '5', label: 'edicoes anteriores' },
  { value: 'centenas', label: 'de pessoas impactadas' },
  { value: 'nova fase', label: 'mesma essencia' },
] as const;

export const proofTiles = [
  {
    title: 'Conexoes que continuam depois do evento',
    body: 'O tipo de encontro que segue rendendo conversa, parceria e proximidade nos dias seguintes.',
  },
  {
    title: 'Aprendizado que sai do palco e vai para a vida real',
    body: 'A experiencia foi desenhada para gerar aplicacao pratica, nao so inspiracao momentanea.',
  },
  {
    title: 'Ambiente que faz as pessoas se abrirem',
    body: 'Quando o clima esta certo, a energia muda. E isso acelera troca, confianca e oportunidade.',
  },
] as const;

export const ticketItems = [
  'Entrada no evento presencial',
  'Alimentacao livre durante todo o periodo',
  '4 palestras',
  'Dinamicas e sorteios',
  'Networking qualificado',
  'Experiencia completa',
] as const;
