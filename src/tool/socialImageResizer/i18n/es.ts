import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'redimensionador-imagenes-rrss';
const title = 'Redimensionador de Imágenes para Redes Sociales';
const description =
  'Adapta y recorta tus fotos para Instagram, TikTok, YouTube y más. Recorte inteligente y medidas oficiales actualizadas para 2026.';

const faqData = [
  {
    question: '¿Se pierde calidad al redimensionar la imagen?',
    answer:
      'No, utilizamos algoritmos de suavizado de alta calidad. Se recomienda subir una imagen original con resolución igual o superior a la del formato de destino.',
  },
  {
    question: '¿Es seguro subir mis fotos aquí?',
    answer:
      'Totalmente. El procesamiento se realiza localmente en tu navegador mediante la API de Canvas. Tus fotos nunca se envían a ningún servidor.',
  },
  {
    question: '¿Qué formatos son compatibles?',
    answer:
      'Soportamos JPG, PNG, WebP y AVIF para la carga. La descarga se optimiza en formato JPG de alta calidad para máxima compatibilidad.',
  },
];

const howToData = [
  {
    name: 'Carga tu imagen',
    text: 'Arrastra tu archivo o búscalo en tu dispositivo para comenzar el proceso.',
  },
  {
    name: 'Elige el formato',
    text: 'Selecciona en el menú lateral la red social y el tipo de publicación que necesitas.',
  },
  {
    name: 'Ajusta y descarga',
    text: 'Encuadra tu foto arrastrándola y usa el zoom para un recorte perfecto. Al terminar, haz clic en descargar.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/es/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Social Media Image Sizes Guide 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Redimensionador de Imágenes para Redes Sociales',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el ecosistema digital actual, la primera impresión es visual. Cada red social opera bajo algoritmos específicos que priorizan el contenido adaptado nativamente a sus proporciones. Nuestro redimensionador de imágenes para RRSS no es solo una herramienta técnica, es tu aliada para garantizar que tu mensaje llegue sin recortes indeseados ni pérdida de calidad.',
    },
    {
      type: 'paragraph',
      html: 'Ya sea que necesites convertir una foto horizontal en un vertical impactante para Instagram Stories o ajustar un diseño para el complejo banner de YouTube, nuestra utilidad utiliza un sistema de recorte inteligente que te permite posicionar y escalar tu imagen con precisión directamente en tu navegador.',
    },
    {
      type: 'title',
      text: 'Medidas Oficiales para Redes Sociales 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Post Cuadrado', body: '1080 × 1080 px · Ratio 1:1' },
        { title: 'Instagram — Post Vertical', body: '1080 × 1350 px · Ratio 4:5' },
        { title: 'TikTok / Reels — Vertical', body: '1080 × 1920 px · Ratio 9:16' },
        { title: 'YouTube — Miniatura', body: '1280 × 720 px · Ratio 16:9' },
        { title: 'YouTube — Banner de Canal', body: '2560 × 1440 px · Ratio 16:9' },
        { title: 'X (Twitter) — Post Estándar', body: '1200 × 675 px · Ratio 16:9' },
        { title: 'LinkedIn — Portada de Perfil', body: '1584 × 396 px · Ratio 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'El formato 1:1 sigue siendo un clásico, pero el 4:5 (Vertical) ocupa más espacio en pantalla y genera hasta un 30% más de interacción en el feed de noticias.',
        },
        {
          title: 'Short Form Content',
          body: 'Para TikTok y Reels, el estándar es 9:16. Este formato inmersivo requiere que el centro de atención esté perfectamente alineado para evitar ser tapado por la UI.',
        },
        {
          title: 'Visual Engagement',
          body: 'Desde miniaturas hasta banners, cada asset tiene un peso específico en el clic. El recorte preciso garantiza que los textos y elementos clave sean siempre legibles.',
        },
        {
          title: 'Branding Profesional',
          body: 'En redes profesionales como LinkedIn, la nitidez es autoridad. Los encabezados requieren ratios específicos para no aparecer pixelados en pantallas de alta densidad.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Por qué importa el Aspect Ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El Aspect Ratio es la proporción entre el ancho y el alto de una imagen. Ignorar esto obliga a las plataformas a forzar un zoom o añadir barras negras, lo que penaliza la estética y el alcance orgánico del contenido.',
    },
    {
      type: 'list',
      items: [
        'Evita que los textos o logos sean cortados por los iconos nativos de la aplicación.',
        'Mantiene la densidad de píxeles óptima sin deformar o estirar la fotografía original.',
        'Ahorra tiempo al centralizar todas las medidas oficiales en una sola herramienta web.',
        'Mejora la velocidad de carga al generar archivos con el peso y dimensiones exactas.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo de Composición',
      html: '<p>Al usar nuestra función de arrastre manual, intenta situar el elemento principal de tu foto en uno de los puntos de intersección de la cuadrícula. Esto crea composiciones más dinámicas y profesionales para tus redes.</p>',
    },
    {
      type: 'title',
      text: 'Pasos para un Recorte Perfecto',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Selecciona tu formato: Elige en el menú lateral la plataforma y el tipo de publicación.',
        'Carga la imagen: Arrastra tu archivo o utiliza el selector para importar tu fotografía.',
        'Ajusta el encuadre: Arrastra la foto dentro del área visible y usa el zoom para mayor precisión.',
        'Exportación inmediata: Haz clic en descargar para obtener tu imagen lista para publicar.',
      ],
    },
    {
      type: 'title',
      text: 'Privacidad y Rendimiento Local',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tu privacidad es absoluta. Este redimensionador procesa las imágenes localmente en tu navegador mediante Canvas API. Tus fotografías nunca se suben a ningún servidor externo, lo que garantiza una seguridad total y una velocidad de procesamiento instantánea.',
    },
    {
      type: 'title',
      text: 'Optimización Profesional para Redes Sociales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Adaptar tu contenido visual de forma profesional es una estrategia de crecimiento directo. Nuestra herramienta simplifica el flujo de trabajo de creadores y community managers, asegurando que cada post luzca perfecto en cualquier dispositivo y plataforma.',
    },
  ],
  ui: {
    sidebarTitle: 'Formatos RRSS',
    uploadTitle: 'Cargar Imagen',
    uploadSubtitle: 'Arrastra tu foto aquí o haz clic para explorar',
    btnReset: 'Reiniciar',
    btnDownload: 'Descargar Imagen',
  },
};
