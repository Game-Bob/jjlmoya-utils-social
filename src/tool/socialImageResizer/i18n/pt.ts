import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'redimensionar-fotos-redes-sociais';
const title = 'Social Media Image Resizer: Cortar e Redimensionar para todas as plataformas';
const description =
  'Redimensiona e corta as tuas fotos para Instagram, TikTok, YouTube e muito mais. Corte inteligente com dimensões oficiais atualizadas para 2026.';

const faqData = [
  {
    question: 'A qualidade da imagem será perdida ao redimensionar?',
    answer:
      'Não, utilizamos algoritmos de suavização de alta qualidade. Recomenda-se carregar uma imagem original com uma resolução igual ou superior ao formato de destino.',
  },
  {
    question: 'É seguro carregar as minhas fotos aqui?',
    answer:
      'Completamente. O processamento é feito localmente no teu navegador através da Canvas API. As tuas fotos nunca são enviadas para nenhum servidor.',
  },
  {
    question: 'Quais os formatos suportados?',
    answer:
      'Suportamos o carregamento de JPG, PNG, WebP e AVIF. Os downloads são otimizados como JPG de alta qualidade para a máxima compatibilidade.',
  },
];

const howToData = [
  {
    name: 'Carrega a tua imagem',
    text: 'Arrasta o teu ficheiro ou pesquisa no teu dispositivo para iniciar o processo.',
  },
  {
    name: 'Escolhe o formato',
    text: 'Seleciona a rede social e o tipo de publicação que precisas no menu lateral.',
  },
  {
    name: 'Ajusta e descarrega',
    text: 'Enquadra a tua foto arrastando-a e usa o zoom para um corte perfeito. Quando terminares, clica em descarregar.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Guia de Tamanhos de Imagem para Redes Sociais 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Redimensionador de fotos para Redes Sociais em todas as plataformas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No ecossistema digital de hoje, a primeira impressão é visual. Cada rede social funciona sob algoritmos específicos que privilegiam conteúdos nativamente adaptados às suas proporções. O nosso redimensionador não é apenas uma ferramenta técnica — é o teu aliado para garantir que a tua mensagem chega sem cortes indesejados ou perda de qualidade.',
    },
    {
      type: 'paragraph',
      html: 'Seja para converter uma foto de paisagem num vertical impactante para as Instagram Stories ou adaptar um design para um banner complexo de YouTube, a nossa utilidade usa um sistema de corte inteligente que te permite posicionar e escalar a tua imagem com precisão diretamente no teu navegador.',
    },
    {
      type: 'title',
      text: 'Tamanhos Oficiais de Imagem para Redes Sociais 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Post Quadrado', body: '1080 × 1080 px · Proporção 1:1' },
        { title: 'Instagram — Post Vertical', body: '1080 × 1350 px · Proporção 4:5' },
        { title: 'TikTok / Reels — Vertical', body: '1080 × 1920 px · Proporção 9:16' },
        { title: 'YouTube — Miniatura', body: '1280 × 720 px · Proporção 16:9' },
        { title: 'YouTube — Banner de Canal', body: '2560 × 1440 px · Proporção 16:9' },
        { title: 'X (Twitter) — Post Padrão', body: '1200 × 675 px · Proporção 16:9' },
        { title: 'LinkedIn — Capa de Perfil', body: '1584 × 396 px · Proporção 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'O formato quadrado 1:1 continua a ser um clássico, mas o vertical 4:5 ocupa mais espaço no ecrã e gera até 30% mais engagement no feed de notícias.',
        },
        {
          title: 'Conteúdo de Formato Curto',
          body: 'Para TikTok e Reels, o padrão é 9:16. Este formato imersivo requer que o ponto focal esteja perfeitamente alinhado para evitar ser coberto pela UI da aplicação.',
        },
        {
          title: 'Engagement Visual',
          body: 'Desde miniaturas a banners, cada elemento gráfico tem um peso específico na taxa de cliques. Um corte preciso garante que o texto e os elementos chave sejam sempre legíveis.',
        },
        {
          title: 'Branding Profissional',
          body: 'Em redes profissionais como o LinkedIn, a nitidez é autoridade. Os cabeçalhos requerem proporções específicas para evitar aparecerem pixelizados em ecrãs de alta densidade.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Porque é que a Proporção de Aspeto é importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A proporção de aspeto é a relação proporcional entre a largura e a altura de uma imagem. Ignorá-la força as plataformas a aplicar zoom ou adicionar barras pretas, o que penaliza a estética e o alcance orgânico.',
    },
    {
      type: 'list',
      items: [
        'Evita que textos ou logótipos sejam cortados pelos ícones nativos das apps.',
        'Mantém a densidade de píxeis ideal sem distorcer ou esticar a foto original.',
        'Poupa tempo ao centralizar todas as medidas oficiais numa única ferramenta web.',
        'Melhora a velocidade de carregamento ao gerar ficheiros com o peso e dimensões exatos.',
      ],
    },
    {
      type: 'tip',
      title: 'Dica de Composição',
      html: '<p>Ao usar a nossa funcionalidade de arrastamento manual, tenta colocar o assunto principal da tua foto num dos pontos de interseção da grelha. Isto cria composições mais dinâmicas e profissionais para as tuas redes sociais.</p>',
    },
    {
      type: 'title',
      text: 'Passos para um Corte Perfeito',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Seleciona o teu formato: Escolhe a plataforma e o tipo de publicação no menu lateral.',
        'Carrega a imagem: Arrasta o teu ficheiro ou usa o seletor para importar a tua foto.',
        'Ajusta o enquadramento: Arrasta a foto dentro da área visível e usa o zoom para precisão.',
        'Exportação instantânea: Clica em descarregar para teres a tua imagem pronta para publicar.',
      ],
    },
    {
      type: 'title',
      text: 'Privacidade e Processamento Local',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A tua privacidade é absoluta. Este redimensionador processa imagens localmente no teu navegador usando a Canvas API. As tuas fotos nunca são carregadas para nenhum servidor externo, garantindo segurança total e velocidade de processamento instantânea.',
    },
    {
      type: 'title',
      text: 'Otimização Profissional para Redes Sociais',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Adaptar o teu conteúdo visual de forma profissional é uma estratégia de crescimento direto. A nossa ferramenta simplifica o fluxo de trabalho para criadores e gestores de comunidade, garantindo que cada post parece perfeito em qualquer dispositivo e plataforma.',
    },
  ],
  ui: {
    sidebarTitle: 'Formatos Sociais',
    uploadTitle: 'Carregar Imagem',
    uploadSubtitle: 'Arrasta a tua foto para aqui ou clica para procurar',
    btnReset: 'Repor',
    btnDownload: 'Descarregar Imagem',
  },
};
