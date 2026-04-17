import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'zonas-seguras-sociais';
const title = 'Social Safe Zones: Simulador de Vídeo para TikTok, Reels e Shorts';
const description =
  'Pré-visualiza as tuas imagens e vídeos com a interface real das redes sociais. Garante que o teu conteúdo está sempre visível e evita cortes acidentais.';

const faqData = [
  {
    question: "O que são 'Zonas Seguras' nas redes sociais?",
    answer:
      "São as áreas do ecrã onde o conteúdo é visível sem o risco de ser coberto por elementos da interface, como o nome de utilizador, descrição, botões de interação (gostar, partilhar) ou cortes automáticos aplicados por alguns dispositivos.",
  },
  {
    question: 'Porque é que o meu vídeo do TikTok parece cortado em cima e em baixo?',
    answer:
      'O TikTok utiliza uma proporção de 9:16. Se o teu vídeo for mais largo, a app aplicará zoom para preencher o ecrã, causando o corte. Além disso, a interface inferior cobre parte do vídeo, por isso elementos importantes devem estar centrados.',
  },
  {
    question: 'A zona segura é a mesma para o Instagram Reels e o YouTube Shorts?',
    answer:
      'São muito semelhantes mas não idênticas. Os botões do YouTube Shorts estão posicionados de forma diferente dos do Reels. A nossa ferramenta permite-te alternar entre plataformas para verificares o teu design em todas elas.',
  },
  {
    question: 'O que acontece se eu colocar texto no canto inferior direito?',
    answer:
      'Provavelmente será invisível ou muito difícil de ler, pois é onde se encontram os ícones do perfil, coração e comentários. Idealmente, mantém os textos e rostos na área central superior (Zona Segura).',
  },
];

const howToData = [
  {
    name: 'Carrega a tua imagem ou vídeo',
    text: 'Faz o upload do ficheiro que desejas pré-visualizar. O processamento é local e privado — nada é carregado para a internet.',
  },
  {
    name: 'Seleciona a plataforma',
    text: 'Escolhe entre TikTok, Instagram Reels ou YouTube Shorts para ativares a sobreposição de interface correspondente.',
  },
  {
    name: 'Verifica a legibilidade',
    text: 'Verifica se os textos, legendas ou elementos chave da marca estão cobertos pelos ícones da rede social.',
  },
  {
    name: 'Ajusta e exporta',
    text: 'Se algo estiver oculto, move o elemento no teu editor de vídeo original e testa novamente até que encaixe perfeitamente.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Documentação Oficial das Plataformas',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Otimização de vídeo e zonas seguras',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Melhores práticas para Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'Ajuda do YouTube: Criar YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Zonas seguras e proporções para vídeo',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guia Mestre de Zonas Seguras: Otimiza os teus Reels, TikToks e Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No mundo saturado do conteúdo vertical, a primeira impressão é técnica. O maior erro que os criadores cometem é ignorar como o seu <strong>vídeo ou imagem</strong> interage com a interface nativa da plataforma. Cada rede social (TikTok, Instagram Reels e YouTube Shorts) sobrepõe camadas de botões, texto e perfis que podem anular o impacto visual da tua composição.',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta permite-te carregar os teus ficheiros multimédia e pré-visualizar exatamente quais as partes do teu frame que serão consumidas pela interface. Não se trata apenas de <strong>legendas</strong>; trata-se de garantir que os rostos, produtos ou ações principais no teu vídeo não fiquem enterrados sob um botão "Gostar" ou uma descrição longa.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: A interface mais invasiva',
          html: '<p>O TikTok tem a interface mais densa. No lado direito, existe uma coluna de ícones que ocupa aproximadamente 15% da largura. Na parte inferior, a descrição pode estender-se por 4 ou 5 linhas, cobrindo quase um terço do ecrã a partir de baixo.</p><ul><li><strong>Margem inferior:</strong> Deixa os últimos 250px livres para evitar o texto da descrição e o nome de utilizador.</li><li><strong>Margem direita:</strong> Evita colocar texto a menos de 100px da borda direita.</li><li><strong>Topo:</strong> Os botões "Seguindo" e "Para Você" ocupam a faixa central superior.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels: O fator feed',
          html: '<p>Ao contrário do TikTok, o Instagram Reels corta o vídeo para um formato 4:5 quando visualizado a partir do feed principal. Isto significa que, se colocares informações vitais nos 15% superiores ou inferiores do teu vídeo 9:16, elas desaparecerão no feed.</p><ul><li><strong>A regra 4:5:</strong> Mantém títulos e elementos chave na zona central para visibilidade no feed.</li><li><strong>Interface:</strong> Os ícones do Reels são mais subtis do que os do TikTok, permitindo um pouco mais de margem lateral.</li><li><strong>Botão de áudio:</strong> Localizado no canto inferior direito, costuma cobrir muito menos do que o disco giratório do TikTok.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Atenção ao lado direito',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O YouTube Shorts tem uma interface assimétrica. O botão de subscrever é muito proeminente e de cor sólida (geralmente preto ou branco), criando um ponto cego visual importante no canto inferior direito.',
    },
    {
      type: 'list',
      items: [
        '<strong>Margem direita:</strong> Evita colocar texto ou elementos importantes nos 20% inferiores direitos.',
        '<strong>Margem inferior:</strong> Deixa os últimos 150px livres para evitar o texto da descrição e o nome de utilizador.',
        '<strong>Topo:</strong> Os botões de subscrever e outros ocupam a faixa central superior.',
      ],
    },
    {
      type: 'title',
      text: 'Questões Críticas sobre o Design Vertical',
      level: 2,
    },
    {
      type: 'title',
      text: 'Onde colocar elementos chave (rostos, texto, produto)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A "Zona de Ouro" para a ação principal é o terço central do vídeo. Se estás a filmar uma pessoa, garante que os seus olhos e boca estão dentro desta zona. Elementos gráficos importantes devem ser ligeiramente deslocados para cima em relação ao centro geométrico para evitar a descrição inferior.',
    },
    {
      type: 'title',
      text: 'Porque é que o meu vídeo parece desfocado depois de submetido?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitas vezes não é a qualidade, mas sim o redimensionamento. Grava sempre em 1080x1920 a 30 ou 60 fps. Evita 46K se estiveres a aplicar muitos efeitos pesados, pois as plataformas comprimem agressivamente ficheiros grandes.',
    },
    {
      type: 'title',
      text: 'E quanto aos limites do telemóvel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lembra-te que os telemóveis modernos têm entalhes (notches) ou buracos de câmara no ecrã. Esta ferramenta inclui uma margem de segurança superior para que o teu conteúdo não entre em conflito com o relógio ou ícones de sistema (bateria, sinal).',
    },
    {
      type: 'title',
      text: 'Anatomia de um Vídeo Viral',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Desenhar para redes sociais não é apenas estética — é <strong>usabilidade</strong>. Se um utilizador tiver de lutar para ler texto porque os ícones da plataforma o cobrem, ele simplesmente passará para o vídeo seguinte. A retenção (Watch Time) cai drasticamente quando há fricção visual.',
    },
    {
      type: 'paragraph',
      html: 'No YouTube Shorts, por exemplo, a interface é assimétrica. O botão de subscrever é muito evidente. Ao usar este simulador, podes ajustar a opacidade para entender como a tua paleta de cores interage com as cores nativas da UI.',
    },
    {
      type: 'tip',
      title: 'Ferramenta de Controlo de Qualidade Criativo',
      html: '<p>Desenhado para criadores que não deixam nada ao acaso.</p>',
    },
  ],
  ui: {
    labelConfig: 'Definições',
    labelPlatform: 'Plataforma Alvo',
    labelUpload: 'Carregar Conteúdo',
    uploadPrompt: 'Selecionar imagem ou vídeo',
    uploadLink: 'Ou usa um exemplo',
    loadContent: 'Carregar o teu conteúdo',
    labelOpacity: 'Relevo da Interface',
    labelMask: 'Escurecer Zonas Críticas',
    labelGrid: 'Regra dos Terços',
    btnReset: 'Reset Canvas',
    bannerTiktok: 'A simular TikTok 9:16',
    bannerReels: 'A simular Instagram Reels 9:16',
    bannerShorts: 'A simular YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Seguindo',
    ttForYou: 'Para Você',
    ttDescription: 'Design de interface real para criadores de conteúdo. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Som Original',
    ttNavHome: 'Início',
    ttNavFriends: 'Amigos',
    ttNavInbox: 'Entrada',
    ttNavProfile: 'Perfil',
    reelsFollow: 'Seguir',
    reelsDescription: 'Esta interface é idêntica à real. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Áudio Original',
    shortsSubscribe: 'SUBSCREVER',
    shortsDislike: 'Não gosto',
    shortsShare: 'Partilhar',
    shortsRemix: 'Remix',
    shortsDescription: 'A simular interfaces reais para Shorts! #youtube #shorts',
  },
};
