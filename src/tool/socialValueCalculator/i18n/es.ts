import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'calculadora-valor-cuenta-redes-sociales';
const title = 'Calculadora de Valor de Cuenta TikTok & Instagram : Precios';
const description =
  'Descubre cuánto cobrar por tus publicaciones patrocinadas. Nuestra calculadora analiza seguidores, engagement y nicho para darte un valor de mercado justo.';

const faqData = [
  {
    question: '¿Es gratis usar la calculadora de valor de cuenta?',
    answer:
      'Sí, nuestra herramienta es 100% gratuita y no requiere registro ni conexión con tus redes sociales para funcionar. Solo necesitas introducir tus métricas públicas.',
  },
  {
    question: '¿Por qué el valor de TikTok es diferente al de Instagram?',
    answer:
      'TikTok se basa enormemente en el alcance algorítmico y visualizaciones, mientras que Instagram todavía tiene un fuerte peso en el tamaño de la comunidad y la fidelidad de los seguidores.',
  },
  {
    question: '¿Qué es un buen engagement rate para cobrar más?',
    answer:
      "Generalmente, un engagement por encima del 3% se considera saludable. Cuentas con más del 10% de engagement son consideradas 'perfiles premium' y pueden cobrar un recargo significativo.",
  },
  {
    question: '¿El nicho realmente afecta tanto al precio?',
    answer:
      'Totalmente. Un seguidor interesado en finanzas o software de gestión tiene un valor de conversión mucho mayor para una marca que un seguidor que busca entretenimiento rápido o memes.',
  },
];

const howToData = [
  {
    name: 'Elige tu plataforma',
    text: 'Selecciona si quieres calcular el valor de una cuenta de TikTok o una de Instagram.',
  },
  {
    name: 'Introduce tus métricas',
    text: 'Ingresa tu número de seguidores y el promedio de visualizaciones y likes de tus últimos 10 posts.',
  },
  {
    name: 'Selecciona tu nicho',
    text: 'Elige la categoría que mejor describa tu contenido para ajustar el valor según la demanda del mercado.',
  },
  {
    name: 'Obtén tu presupuesto',
    text: 'Recibe un rango estimado de lo que deberías cobrar por una colaboración profesional.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Estudios de Mercado',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: Reporte de Engagement en TikTok e Instagram',
      url: 'https://hypeauditor.com/es/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Estadísticas de Redes Sociales',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'En esta guía aprenderás',
      html: '<ul><li>Tu <strong>valor real de mercado</strong> basado en datos 2026.</li><li>A diferenciar el impacto entre <strong>TikTok e Instagram</strong>.</li><li>Cómo el <strong>nicho</strong> afecta drásticamente a tu CPM.</li><li>Una plantilla profesional para <strong>negociar con marcas</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Calculadora de Valor de Cuenta: ¿Cuánto cobrar por una promoción en TikTok o Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si eres creador de contenido, influencer o simplemente tienes una comunidad activa en redes sociales, es muy probable que en algún momento te hayas preguntado: <strong>¿cuánto vale realmente mi cuenta?</strong> o <strong>¿cuánto debería pedir por una colaboración con una marca?</strong>.',
    },
    {
      type: 'title',
      text: 'El auge de la economía de los creadores',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El marketing de influencia ha madurado y ya no se trata solo de seguidores. Las marcas buscan resultados y una conexión profunda. Nuestra herramienta ofrece un punto de partida sólido basado en datos de mercado reales.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Crecimiento anual en inversión de Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3,2%',
          html: '<p>Engagement Rate promedio considerado saludable</p>',
        },
        {
          type: 'card',
          title: '15 €–50 €',
          html: '<p>CPM promedio en nichos de alto valor (estable)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Factores que determinan cuánto vale tu cuenta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A diferencia de lo que se creía hace unos años, el número de seguidores es solo la punta del iceberg. Aquí te explicamos los componentes fundamentales:',
    },
    {
      type: 'title',
      text: '1. El Engagement Rate (Tasa de Interacción)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es la métrica reina. Mide qué porcentaje de tu comunidad interactúa activamente con tu contenido. Una cuenta pequeña con alta interacción es mucho más valiosa que una grande "fantasma".',
    },
    {
      type: 'tip',
      title: 'Truco para tu Engagement',
      html: '<p>Intenta responder a los comentarios en las primeras horas tras publicar para enviar señales positivas al algoritmo.</p>',
    },
    {
      type: 'title',
      text: '2. El Alcance Promedio (Reach)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En TikTok, el alcance es volátil por su algoritmo de recomendación. En Instagram, los Reels han ganado peso frente a las fotos estáticas para captar nueva audiencia.',
    },
    {
      type: 'title',
      text: '3. El Nicho o Categoría',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No todas las audiencias valen lo mismo. Un creador de tecnología o finanzas puede cobrar tarifas mucho más altas que uno de humor generalista por el valor del cliente final.',
    },
    {
      type: 'title',
      text: 'Categorías con mayor retorno (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finanzas y Negocios:</strong> El nicho mejor pagado por post.',
        '<strong>Tecnología y Gadgets:</strong> Alta intención de compra inmediata.',
        '<strong>Salud y Fitness:</strong> Gran mercado para equipamiento y apps.',
        '<strong>Reformas y Hogar:</strong> Alto coste de proyectos y ROI elevado.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: ¿Dónde está el dinero?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aunque ambas usan video vertical, su forma de monetizar es distinta. Instagram es branding; TikTok es rendimiento puro.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Enfoque en branding, estética y fidelidad. Ideal para campañas de largo plazo y lealtad de marca.</p><ul><li>Valora el tamaño de comunidad</li><li>Historias con venta directa</li><li>Crecimiento estable</li><li>Público con mayor madurez</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Tierra de la viralidad extrema. El algoritmo manda sobre los seguidores. ROI explosivo a corto plazo.</p><ul><li>Valora el alcance masivo</li><li>Potencial viral absoluto</li><li>Bajos costes de producción</li><li>Audiencia muy activa</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar los resultados para negociar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obtén el rango de precios de nuestra herramienta y utilízalo como guía. Presenta tus métricas con confianza usando este modelo:',
    },
    {
      type: 'tip',
      title: 'Plantilla de negociación',
      html: '<p>Hola [Nombre de la Marca], gracias por contactarme. Basándome en mis métricas actuales de alcance (promedio de [X] views) y mi tasa de engagement del [X]%, mi tarifa para una integración en [Reel/TikTok] es de [Precio €]. Incluye: guionización y producción del video, 1 link en bio 24h, 2 Stories de amplificación, derechos de uso 30 días.</p>',
    },
    {
      type: 'title',
      text: 'Estrategias para subir tu precio',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Fomenta la interacción:</strong> Responde cada comentario.',
        '<strong>Sube la calidad:</strong> El audio es el 50% de un buen video.',
        "<strong>Especialízate:</strong> Ser 'el experto' te permite pedir más.",
        '<strong>Crea un Media Kit:</strong> Documenta tus éxitos con datos.',
      ],
    },
    {
      type: 'title',
      text: '¿Es fiable el valor estimado?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora utiliza datos agregados de agencias internacionales. Sin embargo, factores como la estacionalidad (Navidad paga más) pueden variar el precio final.',
    },
    {
      type: 'tip',
      title: 'Nota para Creadores',
      html: '<p>Esta herramienta es una estimación. Siempre ajusta el precio según la complejidad del contenido solicitado por la marca.</p>',
    },
    {
      type: 'paragraph',
      html: 'En conclusión, conocer tu valor es el primer paso para profesionalizar tu carrera como creador. Realiza pruebas periódicas con esta calculadora a medida que tu cuenta crezca para mantener tus precios siempre actualizados.',
    },
  ],
  ui: {
    sectionTag: 'Parámetros de Auditoría',
    labelFollowers: 'Comunidad (Seguidores)',
    labelAvgViewsTiktok: 'Impacto (Views por Video)',
    labelAvgViewsIg: 'Alcance (Reach del Perfil)',
    tooltipViews: 'Suma las visualizaciones de tus últimos 10 vídeos y divide entre 10 para obtener la media real.',
    labelEngagement: 'Fidelidad (Likes + Comm)',
    tooltipEngagement: 'Suma los likes y comentarios totales de tus últimos 10 contenidos y divide entre 10.',
    labelNiche: 'Vertical de Mercado',
    nicheEntertainment: 'Entretenimiento',
    nicheFinance: 'Finanzas & Real Estate',
    nicheTech: 'Tecnología & SaaS',
    nicheFitness: 'Lifestyle & Health',
    nicheFashion: 'Moda & Estética',
    nicheTravel: 'Turismo & Viajes',
    nicheFood: 'Gastronomía',
    nicheGaming: 'Gaming & eSports',
    nicheHome: 'Reformas & Hogar',
    btnCalculate: 'Generar Informe de Valor',
    emptyTitle: 'Análisis de Viabilidad Comercial',
    emptyDesc: 'Introduce las métricas del perfil para proyectar el valor de mercado actual.',
    roiLabel: 'Evaluación de Tarifa Sugerida',
    rangeLabel: 'Rango sugerido:',
    audienceQuality: 'Calidad de Audiencia',
    metricER: 'Engagement Rate',
    investmentEfficiency: 'Eficiencia de Inversión',
    metricCPM: 'CPM Proyectado',
    insightText: 'Esta valoración se basa en el CPM medio del mercado español (2026).',
    currencySymbol: '€',
    numberLocale: 'es-ES',
  },
};
