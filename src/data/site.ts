// Placeholder content for the prototype. Replace contact and date details when the official data is approved.
const ticketPhone = '5522998946111';
const liaPhone = '5527992681959';

const buildWhatsappUrl = (phone: string, text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const eventMeta = {
  name: 'Pessoas em Ação',
  editionLabel: '6ª edição do Pessoas em Ação',
  dateDisplay: '2 de maio de 2026',
  city: 'Cabo Frio, RJ',
  duration: '5 horas de experiência',
  capacity: 'Apenas 100 vagas',
  price: 'R$150',
  year: '2026',
  instagramHandle: '@pessoas.em.acao.oficial',
  instagramUrl: 'https://www.instagram.com/pessoas.em.acao.oficial/',
  email: 'pessoas.em.acao.oficial@gmail.com',
  whatsappTicketUrl: buildWhatsappUrl(
    ticketPhone,
    'Olá, vim do site e quero garantir minha vaga no Pessoas em Ação.'
  ),
  whatsappSupportUrl: buildWhatsappUrl(
    ticketPhone,
    'Olá, vim do site e gostaria de falar com alguém para entender melhor o evento.'
  ),
};

export const navLinks = [
  { href: '#evento', label: 'O evento' },
  { href: '#publico', label: 'Para quem é' },
  { href: '#conduz', label: 'Quem conduz' },
  { href: '#prova-social', label: 'Prova social' },
  { href: '#lia', label: 'LIA' },
  { href: '#ingresso', label: 'Ingresso' },
] as const;

export const liaMeta = {
  name: 'LIA',
  role: 'Assistente de IA do evento',
  botUrl: buildWhatsappUrl(
    liaPhone,
    'Oi, LIA. Vim do site do Pessoas em Ação.'
  ),
  badge: 'Fale com a LIA',
  headline: 'A LIA responde às suas dúvidas sobre o evento em segundos.',
  body:
    'Se você quer entender ingresso, horário, público, local, dinâmica do encontro ou simplesmente saber se esse evento faz sentido para você, a LIA entra para orientar sem fricção.',
  ctaLabel: 'Falar com a LIA agora',
  floatingLabel: 'Fale com a LIA',
} as const;

export const liaHighlights = [
  'Tira dúvidas do evento em tempo real',
  'Explica ingresso, acesso e formato',
  'Ajuda quem ainda está indeciso',
  'Encaminha a conversa para a ação',
] as const;

export const liaQuestions = [
  {
    label: 'Que horas começa o evento?',
    url: buildWhatsappUrl(
      liaPhone,
      'Oi, LIA. Vim do site e quero saber que horas começa o evento.'
    ),
  },
  {
    label: 'O que está incluso no ingresso?',
    url: buildWhatsappUrl(
      liaPhone,
      'Oi, LIA. Vim do site e quero saber o que está incluso no ingresso.'
    ),
  },
  {
    label: 'Esse evento é para mim?',
    url: buildWhatsappUrl(
      liaPhone,
      'Oi, LIA. Vim do site e quero entender se esse evento faz sentido para mim.'
    ),
  },
  {
    label: 'Como eu garanto minha vaga?',
    url: buildWhatsappUrl(
      liaPhone,
      'Oi, LIA. Vim do site e quero saber como eu garanto minha vaga.'
    ),
  },
] as const;

export const heroStats = [
  { value: '6ª edição', label: 'do Pessoas em Ação' },
  { value: '100', label: 'vagas presenciais' },
  { value: '5h', label: 'de experiência ao vivo' },
  { value: 'IA + networking', label: 'conteúdo e conexão real' },
] as const;

export const heroHighlights = [
  'Networking de verdade',
  'Demo de IA ao vivo',
  'Comida liberada',
  'Energia alta',
] as const;

export const heroRibbon = [
  '6ª edição presencial',
  'Lote único',
  'Acesso pelo WhatsApp',
  'Sem entrada na hora',
  'Cabo Frio, RJ',
  'Pessoas certas no mesmo ambiente',
] as const;

export const pillars = [
  {
    title: 'Acesso',
    body: 'Entre num ambiente e numa rede que normalmente não estariam ao seu alcance.',
    accent: 'rose',
  },
  {
    title: 'Ambiente',
    body: 'Local bonito, energia alta, comida liberada e uma experiência que faz você querer estar ali do início ao fim.',
    accent: 'sky',
  },
  {
    title: 'Transformação',
    body: 'Você não sai só inspirado. Você sai com ideias, conexões e experiências que pode aplicar no dia seguinte.',
    accent: 'ink',
  },
] as const;

export const audienceCards = [
  {
    title: 'Empreendedoras',
    body: 'Cansadas de crescer sozinhas. Precisam de conexões que virem negócio, visão e movimento.',
    tag: 'rede, negócio, merecimento',
  },
  {
    title: 'Empreendedores e profissionais',
    body: 'Sentem estagnação. Querem resultado, repertório novo e contatos que realmente abrem portas.',
    tag: 'resultado, repertório, destravar',
  },
  {
    title: 'Jovens com ambição',
    body: 'Querem entrar no ambiente certo, cercados por gente que está construindo algo de verdade.',
    tag: 'referência, ambiente, futuro',
  },
] as const;

export const hosts = [
  {
    name: 'Marceni',
    role: 'Psicóloga, palestrante principal e alma do evento',
    body: 'Conduz a experiência com foco em conexão, emoção e movimento. O evento gira ao redor da energia que ela cria no ambiente.',
    image: '/fotos/Marceni.webp',
  },
  {
    name: 'Isabela',
    role: 'Palestra sobre Lei da Atração e construção de clima',
    body: 'Ajuda a construir a atmosfera, a organização e a energia do encontro para que a experiência seja leve, humana e memorável.',
    image: '/fotos/isabela.webp',
  },
  {
    name: 'Fabio Pantoja',
    role: 'Estrategista e especialista em IA para negócios',
    body: 'Leva para o palco uma demo ao vivo de como tecnologia vira experiência, repertório prático e oportunidade real.',
    image: '/fotos/pantoja.webp',
  },
] as const;

export const proofMetrics = [
  { value: '5', label: 'edições anteriores' },
  { value: 'centenas', label: 'de pessoas impactadas' },
  { value: 'nova fase', label: 'mesma essência' },
] as const;

export const proofTiles = [
  {
    tag: 'Conexões',
    title: 'Conexões que continuam depois do evento',
    body: 'O tipo de encontro que segue rendendo conversa, parceria e proximidade nos dias seguintes.',
  },
  {
    tag: 'Aplicação',
    title: 'Aprendizado que sai do palco e vai para a vida real',
    body: 'A experiência foi desenhada para gerar aplicação prática, não só inspiração momentânea.',
  },
  {
    tag: 'Ambiente',
    title: 'Ambiente que faz as pessoas se abrirem',
    body: 'Quando o clima está certo, a energia muda. E isso acelera troca, confiança e oportunidade.',
  },
] as const;

export const proofVideos = [
  {
    title: 'Clima real das edições anteriores',
    body: 'Um recorte rápido para sentir energia, público e atmosfera do Pessoas em Ação.',
    src: '/video/1-optimized.mp4',
    preload: 'metadata',
    poster: '/fotos/og-pea.png',
    duration: '32s',
  },
  {
    title: 'Público e ambiente',
    body: 'Pessoas conectando, vivendo a experiência e entrando no ritmo do encontro.',
    src: '/video/2-optimized.mp4',
    preload: 'none',
    poster: '/fotos/og-pea.png',
    duration: '13s',
  },
  {
    title: 'Momento expandido',
    body: 'O teaser mais longo para mostrar profundidade, energia e prova social do evento.',
    src: '/video/3-optimized.mp4',
    preload: 'none',
    poster: '/fotos/og-pea.png',
    duration: '1min',
  },
  {
    title: 'Experiência em movimento',
    body: 'Mais um recorte de palco, público e emoção para reduzir dúvida e aumentar confiança.',
    src: '/video/4-optimized.mp4',
    preload: 'none',
    poster: '/fotos/og-pea.png',
    duration: '14s',
  },
] as const;

export const ticketItems = [
  'Entrada no evento presencial',
  'Alimentação livre durante todo o período',
  '4 palestras',
  'Dinâmicas e sorteios',
  'Networking qualificado',
  'Experiência completa',
] as const;
