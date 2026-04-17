import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'calculadora-valor-conta-social';
const title = 'Calculadora de Valor de Conta de Redes Sociais: Preços TikTok e Instagram';
const description =
  'Descubra quanto cobrar por posts patrocinados. A nossa calculadora analisa seguidores, engagement e nicho para lhe dar um valor de mercado justo.';

const faqData = [
  {
    question: 'A calculadora de valor de conta é gratuita?',
    answer:
      'Sim, a nossa ferramenta é 100% gratuita e não requer registo ou ligação às suas contas de redes sociais. Só precisa de introduzir as suas métricas públicas.',
  },
  {
    question: 'Porque é que o valor do TikTok é diferente do Instagram?',
    answer:
      'O TikTok depende fortemente do alcance algorítmico e das visualizações, enquanto o Instagram ainda dá um peso forte ao tamanho da comunidade e à lealdade dos seguidores.',
  },
  {
    question: 'Qual é uma boa taxa de engagement para cobrar mais?',
    answer:
      'Geralmente, um engagement acima de 3% é considerado saudável. Contas com mais de 10% de engagement são consideradas "perfis premium" e podem cobrar um valor significativamente superior.',
  },
  {
    question: 'O nicho afeta assim tanto o preço?',
    answer:
      'Absolutamente. Um seguidor interessado em finanças ou software de gestão tem um valor de conversão muito superior para uma marca do que um seguidor que procura entretenimento rápido ou memes.',
  },
];

const howToData = [
  {
    name: 'Escolha a sua plataforma',
    text: 'Selecione se deseja calcular o valor de uma conta TikTok ou Instagram.',
  },
  {
    name: 'Introduza as suas métricas',
    text: 'Introduza o seu número de seguidores e a média de visualizações e likes dos seus últimos 10 posts.',
  },
  {
    name: 'Selecione o seu nicho',
    text: 'Escolha a categoria que melhor descreve o seu conteúdo para ajustar o valor com base na procura do mercado.',
  },
  {
    name: 'Obtenha o seu orçamento',
    text: 'Receba um intervalo estimado de quanto deve cobrar por uma colaboração profissional.',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes e Estudos de Mercado',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: Relatório de Engagement TikTok e Instagram',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Estatísticas de Redes Sociais',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'Neste guia irá aprender',
      html: '<ul><li>O seu <strong>valor real de mercado</strong> com base em dados de 2026.</li><li>Como diferenciar o impacto do <strong>TikTok vs Instagram</strong>.</li><li>Como o seu <strong>nicho</strong> afeta dramaticamente o seu CPM.</li><li>Um template profissional para <strong>negociar com marcas</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Calculadora de Valor de Conta: Quanto Cobrar por um Post Patrocinado no TikTok ou Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se é um criador de conteúdo, influencer ou simplesmente tem uma comunidade ativa nas redes sociais, provavelmente já se perguntou: <strong>quanto vale realmente a minha conta?</strong> ou <strong>quanto devo pedir por uma colaboração com uma marca?</strong>.',
    },
    {
      type: 'title',
      text: 'A ascensão da creator economy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O marketing de influência amadureceu e já não se trata apenas de número de seguidores. As marcas procuram resultados e uma ligação profunda. A nossa ferramenta fornece um ponto de partida sólido com base em dados reais de mercado.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Crescimento anual no investimento em Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Taxa média de engagement considerada saudável</p>',
        },
        {
          type: 'card',
          title: '15€–50€',
          html: '<p>CPM médio em nichos de alto valor (estável)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Fatores que determinam quanto vale a sua conta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao contrário do que se acreditava há uns anos, o número de seguidores é apenas a ponta do icebergue. Aqui estão os componentes fundamentais:',
    },
    {
      type: 'title',
      text: '1. Taxa de Engagement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'É a métrica chave. Mede qual a percentagem da sua comunidade interage ativamente com o seu conteúdo. Uma conta pequena com alta interação é muito mais valiosa do que uma conta grande "fantasma".',
    },
    {
      type: 'tip',
      title: 'Dica de engagement',
      html: '<p>Tente responder aos comentários nas primeiras horas após a publicação para enviar sinais positivos ao algoritmo.</p>',
    },
    {
      type: 'title',
      text: '2. Alcance Médio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "No TikTok, o alcance é volátil devido ao seu algoritmo de recomendação. No Instagram, os Reels ganharam peso sobre as fotos estáticas para captar novas audiências.",
    },
    {
      type: 'title',
      text: '3. Nicho ou Categoria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nem todas as audiências valem o mesmo. Um criador de tech ou finanças pode cobrar taxas muito superiores a um criador de entretenimento geral, devido ao maior valor do cliente final.',
    },
    {
      type: 'title',
      text: 'Categorias que pagam melhor (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finanças e Negócios:</strong> O nicho mais bem pago por post.',
        '<strong>Tecnologia e Gadgets:</strong> Alta intenção de compra imediata.',
        '<strong>Saúde e Fitness:</strong> Grande mercado para equipamentos e apps.',
        '<strong>Renovação de Casa:</strong> Altos custos de projeto e ROI elevado.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Onde está o dinheiro?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Embora ambos usem vídeo vertical, os seus modelos de monetização diferem. O Instagram é branding; o TikTok é pura performance.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Foco no branding, estética e lealdade. Ideal para campanhas de longo prazo.</p><ul><li>Valoriza tamanho da comunidade</li><li>Stories com venda direta</li><li>Crescimento estável</li><li>Audiência mais madura</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>A terra da viralidade extrema. O algoritmo sobrepõe-se aos seguidores. ROI explosivo a curto prazo.</p><ul><li>Valoriza alcance massivo</li><li>Potencial viral absoluto</li><li>Baixos custos de produção</li><li>Audiência muito ativa</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Como usar os resultados para negociar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obtenha o intervalo de preço da nossa ferramenta e use-o como guia. Apresente as suas métricas com confiança usando este template:',
    },
    {
      type: 'tip',
      title: 'Template de negociação',
      html: '<p>Olá [Nome da Marca], obrigado pelo contacto. Com base nas minhas atuais métricas de alcance (média de [X] visualizações) e na minha taxa de engagement de [X]%, o meu valor para uma integração num [Reel/TikTok] é [Preço €]. Isto inclui: escrita de guião e produção de vídeo, 1 link na bio por 24h, 2 Stories de amplificação, direitos de uso por 30 dias.</p>',
    },
    {
      type: 'title',
      text: 'Estratégias para subir o seu valor',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Fomente a interação:</strong> Responda a todos os comentários.',
        '<strong>Suba a qualidade:</strong> O áudio é 50% de um bom vídeo.',
        '<strong>Especialize-se:</strong> Ser "o especialista" permite-lhe cobrar mais.',
        '<strong>Crie um Media Kit:</strong> Documente os seus sucessos com dados.',
      ],
    },
    {
      type: 'title',
      text: 'O valor estimado é fiável?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A nossa calculadora usa dados agregados de agências internacionais. No entanto, fatores como a sazonalidade (campanhas de Natal pagam mais) podem variar o preço final.',
    },
    {
      type: 'tip',
      title: 'Nota para Criadores',
      html: '<p>Esta ferramenta é uma estimativa. Ajuste sempre o preço com base na complexidade do conteúdo solicitado pela marca.</p>',
    },
  ],
  ui: {
    sectionTag: 'Parâmetros de Auditoria',
    labelFollowers: 'Comunidade (Seguidores)',
    labelAvgViewsTiktok: 'Impacto (Visualizações por Vídeo)',
    labelAvgViewsIg: 'Alcance (Alcance do Perfil)',
    tooltipViews: 'Some as visualizações dos seus últimos 10 vídeos e divida por 10.',
    labelEngagement: 'Lealdade (Likes + Comentários)',
    tooltipEngagement: 'Soma de likes e comentários totais dos seus últimos 10 posts a dividir por 10.',
    labelNiche: 'Vertical de Mercado',
    nicheEntertainment: 'Entretenimento',
    nicheFinance: 'Finanças e Imobiliário',
    nicheTech: 'Tecnologia e SaaS',
    nicheFitness: 'Lifestyle e Saúde',
    nicheFashion: 'Moda e Beleza',
    nicheTravel: 'Turismo e Viagens',
    nicheFood: 'Comida e Gastronomia',
    nicheGaming: 'Gaming e eSports',
    nicheHome: 'Casa e Renovação',
    btnCalculate: 'Gerar Relatório de Valor',
    emptyTitle: 'Análise de Viabilidade Comercial',
    emptyDesc: 'Introduza as métricas do perfil para projetar o valor de mercado atual.',
    roiLabel: 'Avaliação da Taxa Sugerida',
    rangeLabel: 'Intervalo sugerido:',
    audienceQuality: 'Qualidade da Audiência',
    metricER: 'Taxa de Engagement',
    investmentEfficiency: 'Eficiência de Investimento',
    metricCPM: 'CPM Projetado',
    insightText: 'Esta avaliação baseia-se no CPM médio do mercado europeu (2026).',
    currencySymbol: '€',
    numberLocale: 'pt-PT',
  },
};
