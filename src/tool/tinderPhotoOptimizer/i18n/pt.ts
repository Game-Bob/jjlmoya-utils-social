import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'otimizador-fotos-tinder';
const title = 'Otimizador de Fotos para Tinder: Análise de Rosto e Composição';
const description =
  'Otimize as suas fotos para o Tinder com análise algorítmica de rosto. Simule a interface do Tinder 2026, analise o enquadramento científico e a linha dos olhos, e exporte retratos 9:16 perfeitos para maximizar os matches.';

const faqData = [
  {
    question: 'Como é que esta ferramenta melhora os meus matches no Tinder?',
    answer:
      'A ferramenta analisa fatores técnicos fundamentais: o rácio do tamanho facial (idealmente entre 30-50%), a posição da linha dos olhos em relação ao terço superior, a cobertura do enquadramento e as zonas mortas da interface do Tinder. Ao ajustar estes parâmetros, a sua foto projeta mais confiança e supera os filtros visuais do algoritmo.',
  },
  {
    question: 'É seguro carregar as minhas fotos aqui?',
    answer:
      'Completamente seguro. Todo o processamento é realizado no seu navegador através da Canvas API. As suas fotos nunca são enviadas para nenhum servidor nem armazenadas em qualquer lugar.',
  },
  {
    question: 'O que faz exatamente a deteção de rosto com IA?',
    answer:
      'Utiliza face-api.js para detetar 68 pontos de referência faciais, analisar a expressão (sorriso, expressão séria), avaliar a posição dos olhos e medir a inclinação da cabeça. Toda a análise ocorre localmente no seu dispositivo.',
  },
  {
    question: 'Por que recomendam o zoom a 1.2x?',
    answer:
      'As câmaras frontais dos smartphones usam óticas grande angulares (24mm) que distorcem o rosto com a aberração de barril. Um zoom de 1.2x simula uma focal de 50-85mm, eliminando a distorção e proporcionando proporções faciais mais naturais e atraentes.',
  },
];

const howToData = [
  {
    name: 'Carregue a sua foto',
    text: 'Arraste ou clique no simulador do Tinder para carregar a sua imagem.',
  },
  {
    name: 'Analise a composição',
    text: 'A IA deteta o seu rosto automaticamente e mostra métricas de tamanho facial, linha dos olhos, cobertura e expressão.',
  },
  {
    name: 'Ajuste com precisão',
    text: 'Use os controlos de zoom e brilho, ative o auto-enquadramento ou arraste manualmente a imagem dentro do simulador.',
  },
  {
    name: 'Download otimizado',
    text: 'Exporte a sua foto no formato nativo 1080x1920 otimizado para o Tinder, com metadados limpos.',
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

const howToSchema: WithContext<HowTo> = {
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

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Otimizador de Fotos para Tinder: O Guia Científico e Técnico Definitivo (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No ecossistema dos encontros digitais, o seu perfil do Tinder é processado por dois algoritmos simultaneamente: o algoritmo de visão avançada da própria plataforma e o cérebro humano do utilizador que desliza. A nossa ferramenta integra princípios de <strong>psicologia evolucionista</strong>, <strong>biometria facial</strong> e <strong>processamento de sinais digitais</strong> para garantir que a sua imagem projeta o valor social máximo e atração técnica.',
    },
    {
      type: 'title',
      text: 'A Psicologia da Primeira Impressão: O Efeito de 1.2 Segundos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Estudos neurocientíficos indicam que o cérebro humano demora aproximadamente 1/10 de segundo a formar uma impressão inicial sobre a confiança que alguém projeta. No Tinder, dispõe de pouco mais de um segundo antes do swipe seguinte. A nossa ferramenta analisa os fatores que aceleram a tomada de decisão positiva:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contacto Visual e Linha de Olhar:</strong> O olhar direto ativa regiões do cérebro relacionadas com a recompensa social. Posicionar os olhos no terço superior maximiza a probabilidade de o utilizador parar no seu olhar antes de ler o seu nome.',
        '<strong>Assimetria e Postura:</strong> Uma ligeira inclinação pode suavizar traços agressivos, mas uma inclinação excessiva transmite instabilidade. O nosso algoritmo mede o ângulo exato para o manter no intervalo de confiança.',
        '<strong>Contraste Figura-Fundo:</strong> O sistema premeia as fotos onde o sujeito está claramente separado do fundo. Um perfil técnico bem definido ajuda o motor de renderização a destacar o seu rosto em relação à concorrência.',
      ],
    },
    {
      type: 'title',
      text: 'Análise Técnica da Lente: O Problema da Grande Angular',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quase todas as fotos de perfil são tiradas com smartphones, cujas câmaras frontais são de grande angular. O erro mais comum é aproximar-se demasiado do dispositivo.',
    },
    {
      type: 'paragraph',
      html: '<strong>A Aberração de Barril:</strong> A menos de um metro de distância, uma lente de 24mm (padrão nos telemóveis) expande o centro da imagem. Isto faz com que os narizes pareçam maiores e a cara mais redonda do que é na realidade. A nossa recomendação de <strong>Zoom 1.2x</strong> é corretiva: ao aplicar um ligeiro recorte digital, simula uma focal de 50mm a 85mm, a distância focal dourada que os fotógrafos de moda usam para emagrecer o rosto e manter as proporções reais.',
    },
    {
      type: 'title',
      text: 'Interface do Tinder: A Ciência das Zonas Mortas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitas fotos excelentes falham porque ignoram a camada de software (UI) que o Tinder coloca por cima. Um utilizador médio não vê a sua foto limpa; vê uma amálgama de botões, gradientes e texto.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zona de Títulos (Superior 15%):</strong> Aqui residem os indicadores de progresso e a barra de estado. Se a sua testa ou os seus olhos estiverem aqui, a interface corta a sua cabeça visualmente.',
        '<strong>Zona de Ação (Botões):</strong> Os ícones de Like, Nope e Boost ocupam as laterais inferiores. Se as suas mãos ou elementos de estilo estiverem lá, perdem-se totalmente.',
        '<strong>O Gradiente de Legibilidade (Inferior 28%):</strong> O Tinder aplica um gradiente preto para que o seu nome e idade sejam lidos. Se o seu rosto cair nesta zona, o texto sobrepor-se-á às suas feições, arruinando a estética do perfil.',
      ],
    },
    {
      type: 'title',
      text: 'Análise de Visão em Tempo Real: Traduzindo o Algoritmo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A nossa ferramenta utiliza modelos de <strong>Computer Vision de última geração</strong> para auditar a sua imagem como o fariam os moderadores automáticos do Tinder:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark Detection:</strong> Mapeamos 68 pontos faciais para analisar a simetria e a abertura dos olhos. Olhos bem abertos e visíveis correlacionam-se com níveis mais altos de extroversão percebida.',
        '<strong>Mood Evaluation:</strong> Um sorriso ligeiro ativa neurónios espelho em quem o olha. Detetamos a intensidade da expressão facial para nos assegurarmos de que não parece demasiado sério ou inacessível.',
        '<strong>Qualidade de Iluminação:</strong> O sistema avalia a confiança da deteção. Se o score for baixo, a foto tem ruído visual ou sombras duras que o algoritmo do Tinder poderia marcar como conteúdo de baixa qualidade.',
      ],
    },
    {
      type: 'title',
      text: 'Metadados e Exportação Otimizada para o Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sabia que o peso da sua imagem influencia o algoritmo? As apps de encontros priorizam o conteúdo que carrega rápido para não interromper o fluxo do utilizador.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata Stripping (Privacidade e SEO):</strong> Eliminamos os registos EXIF. Uma foto limpa dá-lhe uma tela nova para o algoritmo da plataforma.',
        '<strong>Compressão Inteligente sem Perda:</strong> Reduzimos o peso do ficheiro JPG mantendo o espaço de cor sRGB nativo de iOS e Android. A sua foto parecerá vibrante mesmo com pouca cobertura.',
        '<strong>Formato 9:16 Imersivo:</strong> Ao entregar exatamente 1080x1920 píxeis, evitamos que o Tinder aplique o seu próprio algoritmo de compressão agressivo que gera artefactos de imagem.',
      ],
    },
    {
      type: 'tip',
      title: 'Conselho de Especialista',
      html: '<p>A primeira foto deve ser SEMPRE um retrato claro dos ombros para cima. Guarde as fotos de corpo inteiro ou de atividades para a 3ª ou 4ª posição. Certifique-se de que nessa primeira impressão, o seu olhar está livre de obstáculos e o seu rosto tem o tamanho ótimo (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Segurança e Ética de Processamento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entendemos que as suas fotos são privadas. Este otimizador utiliza <strong>tecnologia Client-Side</strong>: as imagens são processadas através de um motor de canvas no seu navegador local. Nenhum dado sai do seu dispositivo. É a forma mais segura e rápida de otimizar o seu perfil sem comprometer a sua intimidade.',
    },
  ],
  ui: {
    uploadTitle: 'Otimizar Foto',
    uploadSubtitle: 'Arraste ou clique para começar',
    btnDownload: 'Descarregar Foto Otimizada',
    btnRescan: 'Repassar Rosto',
    btnAutoFocus: 'Auto-Enquadramento',
    btnMarkFace: 'Marcar Rosto',
    panelManual: 'Ajustes Manuais',
    panelVisualization: 'Visualização Avançada',
    panelMetrics: 'Analítica de Composição',
    panelExport: 'Exportar para o Tinder 2026',
    panelExportDesc: 'Recorte automático para 1080x1920 com metadados otimizados.',
    labelZoom: 'Zoom',
    labelBrightness: 'Brilho',
    toggleGrid: 'Grelha de Terços',
    toggleGridDesc: 'Ajuste de composição clássica',
    toggleDeadzones: 'Zonas de Perigo',
    toggleDeadzonesDesc: 'Evita que a UI oculte o seu rosto',
    toggleFaceBox: 'Ver Rosto Detetado',
    toggleFaceBoxDesc: 'Marcos e área de deteção',
    metricFaceSize: 'Rácio de Rosto',
    metricEyeLine: 'Linha de Olhar',
    metricCoverage: 'Cobertura',
    metricMood: 'Expressão',
    metricQuality: 'Confiança',
    analysisSuccess: 'Fatores de Sucesso',
    analysisWarning: 'Otimização',
    analysisError: 'Erros Críticos',
    deadzoneTop: 'Zona de UI Superior',
    deadzoneBottom: 'Zona de Informação',
    loaderAnalyzing: 'A analisar composição...',
    loaderModels: 'A carregar modelos de visão...',
    simulatorName: 'O Seu Nome, 25',
    simulatorJob: 'A Sua Profissão',
    simulatorCity: 'Vive em Portugal',
    simulatorDistance: 'A 5 km de si',
    statusOptimal: 'ÓTIMA',
    statusIncorrect: 'INCORRETA',
    statusHigh: 'ALTA',
    statusMedium: 'MÉDIA',
    statusLow: 'BAIXA',
    statusPositive: 'POSITIVO',
    statusNeutral: 'NEUTRO',
    alertExcellent: 'Composição técnica excelente.',
    alertEmptySpaces: 'ESPAÇOS VAZIOS: A imagem não cobre todo o enquadramento. Ajuste o zoom ou a posição.',
    alertAlmostInvisible: 'QUASE INVISÍVEL: Está muito longe. Aumente o zoom até que o seu rosto ocupe pelo menos um terço do ecrã.',
    alertTooClose: 'DEMASIADO PERTO: Primeiros planos extremos podem parecer agressivos.',
    alertPerfectSize: 'TAMANHO PERFEITO: O seu rosto tem o rácio ideal para transmitir confiança.',
    alertImpactfulLook: 'OLHAR IMPACTANTE: Os seus olhos estão na linha de atenção máxima.',
    alertEyeLineMoveUp: 'LINHA DOS OLHOS: Para um enquadramento profissional, suba um pouco o rosto até à linha superior.',
    alertEyeLineMoveDown: 'LINHA DOS OLHOS: Para um enquadramento profissional, desça um pouco o rosto até à linha superior.',
    alertTiltedHead: 'CABEÇA INCLINADA: Uma postura demasiado torta pode transmitir instabilidade.',
    alertSmileDetected: 'SORRISO DETETADO: Sorrisos aumentam a taxa de match significativamente.',
    alertSevereExpression: 'EXPRESSÃO SEVERA: Tente usar uma foto com um gesto mais amável.',
    alertObstructedTop: 'OBSTRUÍDO: A barra de progresso tapa o seu rosto.',
    alertObstructedBottom: 'OBSTRUÍDO: O bloco de informação tapa o seu rosto.',
    alertLowLight: 'ILUMINAÇÃO DEFICIENTE: A IA tem dificuldade em vê-lo. Procure uma foto com melhor luz.',
    alertCutOff: 'CORTADO: O rosto sai do enquadramento vertical.',
    alertProTip: 'CONSELHO PRO: Se for uma selfie, use o Zoom (1.2x) para evitar distorções de lente.',
    canvasFaceDetected: 'Rosto detetado',
  },
};
