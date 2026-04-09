import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'extractor-miniaturas-youtube';
const title = 'Extractor de Miniaturas de YouTube (HD)';
const description =
  'Extrae y descarga la imagen en miniatura original de cualquier vídeo de YouTube a máxima resolución y sin marcas de agua usando solo la URL.';

const faqData = [
  {
    question: '¿A qué resolución se extraen las miniaturas?',
    answer:
      "La herramienta intenta siempre obtener la imagen en resolución 'MaxRes' (1280x720 o 1920x1080), que es la calidad original subida por el creador del video. Si el autor no subió una miniatura en HD, automáticamente mostrará la siguiente resolución más alta disponible.",
  },
  {
    question: '¿Qué tipos de enlaces soporta?',
    answer:
      'Soporta URLs tradicionales de youtube.com/watch, enlaces cortos de youtu.be, enlaces desde el móvil, e incluso URLs de YouTube Shorts de manera transparente.',
  },
  {
    question: '¿Es legal descargar miniaturas de YouTube?',
    answer:
      'Sí, la descarga es completamente legal para uso personal, diseño, parodias e inspiración (Fair Use). Ten cuidado si vas a utilizar miniaturas protegidas con derechos de autor con fines puramente comerciales, en esos casos es importante consultar la licencia del video.',
  },
  {
    question: '¿Hay algún límite de uso diario?',
    answer:
      'No hay límites mensuales ni diarios. Como este software opera de forma client-side resolviendo el patrón de URL internamente en tu navegador, no interactuamos con las APIs restrictivas tradicionales.',
  },
];

const howToData = [
  {
    name: 'Copia la URL del vídeo',
    text: 'Ve a YouTube y copia el enlace del vídeo desde la barra del navegador o desde el botón de compartir.',
  },
  {
    name: 'Pega el enlace',
    text: 'Introduce la URL en el campo del extractor o usa el botón de pegar desde portapapeles.',
  },
  {
    name: 'Selecciona la calidad',
    text: 'La herramienta mostrará todas las resoluciones disponibles, desde la máxima calidad (1080p) hasta la más baja.',
  },
  {
    name: 'Descarga la imagen',
    text: "Haz clic en el botón de descargar para guardar la miniatura en tu dispositivo.",
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Documentación y Referencias',
  bibliography: [
    {
      name: 'YouTube Help: Añadir una imagen en miniatura personalizada',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Cómo crear miniaturas efectivas',
      url: 'https://creatoracademy.youtube.com/',
    },
    {
      name: 'Google Developers: YouTube Data API — Thumbnails',
      url: 'https://developers.google.com/youtube/v3/docs/thumbnails',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Descargar Miniaturas de YouTube en HD Gratis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si necesitas <strong>descargar la miniatura de un vídeo de YouTube</strong> en su tamaño original o máxima calidad (Full HD o 4K), esta herramienta gratuita es la solución más rápida. Podrás obtener la imagen de portada de cualquier canal para inspirarte, crear tus propios diseños o utilizarla en presentaciones.',
    },
    {
      type: 'tip',
      title: 'Extraer Foto de Portada sin Programas',
      html: '<p>No hace falta instalar software ni registrarse. Solo tienes que copiar y pegar el enlace del vídeo y podrás <strong>guardar la miniatura de YouTube</strong> directamente en tu ordenador o móvil.</p>',
    },
    {
      type: 'title',
      text: '¿Cómo conseguir la miniatura de un vídeo de YouTube?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El proceso para <strong>sacar la foto a un vídeo de YouTube</strong> es muy sencillo. Sigue estos pasos para obtener la imagen en segundos:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Copia la URL:</strong> Ve a YouTube y copia el enlace del vídeo (ya sea desde la barra del navegador o desde el botón de compartir).',
        '<strong>2. Pega el enlace:</strong> Introduce la URL en el buscador de nuestro extractor de miniaturas.',
        '<strong>3. Selecciona la calidad:</strong> Te mostraremos todas las resoluciones disponibles, desde la máxima calidad (1080p) hasta la más baja (360p).',
        '<strong>4. Descarga la imagen:</strong> Haz clic en el botón de descargar para guardar la <i>thumbnail</i> en tu dispositivo.',
      ],
    },
    {
      type: 'title',
      text: 'Formatos y Resoluciones Soportadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Descargar portadas de vídeos de YouTube nunca fue tan fácil. La herramienta busca automáticamente la mejor imagen posible (conocida como <strong>maxresdefault</strong>), que suelen ser diseños trabajados en Photoshop por los YouTubers. Si el creador no subió una imagen en HD, te daremos la siguiente mejor opción (<strong>hqdefault</strong> o <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Esta utilidad es perfecta para <i>Community Managers</i>, diseñadores gráficos, creadores de contenido, creadores de memes, o cualquier persona que necesite <strong>descargar la carátula de un vídeo</strong> para sus proyectos. Además, es compatible con los <strong>YouTube Shorts</strong>, por lo que también podrás conseguir sus miniaturas de igual forma.',
    },
    {
      type: 'title',
      text: 'Usos Profesionales de las Miniaturas de YouTube',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las miniaturas de YouTube son activos visuales de alto valor. Representan horas de trabajo de diseño, pruebas A/B y optimización de CTR por parte de los creadores. Saber cómo acceder a ellas y descargarlas abre un abanico de posibilidades profesionales.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Creadores de Contenido',
          html: '<p>Analiza las miniaturas de vídeos virales en tu nicho para entender qué elementos visuales generan más clics: tipografía, colores dominantes, uso de rostros o texto.</p><ul><li><strong>Benchmarking visual:</strong> Compara tus miniaturas con las de los líderes de tu sector.</li><li><strong>Iteración de diseño:</strong> Descarga y usa miniaturas como referencia en Photoshop o Canva.</li><li><strong>Archivo de inspiración:</strong> Construye una biblioteca de thumbnails de alta conversión.</li></ul>',
        },
        {
          type: 'card',
          title: 'Diseñadores y Marketers',
          html: '<p>Para un diseñador gráfico o un <i>social media manager</i>, acceder rápidamente a las miniaturas de YouTube es esencial para presentaciones, propuestas de cliente y auditorías visuales.</p><ul><li><strong>Presentaciones de cliente:</strong> Incluye capturas reales de la competencia en tus propuestas.</li><li><strong>Auditorías de marca:</strong> Evalúa la coherencia visual de un canal de YouTube.</li><li><strong>Moodboards:</strong> Recopila referencias visuales de alta calidad sin capturas de pantalla borrosas.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compatibilidad con YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El extractor funciona perfectamente con <strong>YouTube Shorts</strong>. Los Shorts tienen su propio formato de miniatura vertical (9:16) que se genera automáticamente desde el vídeo. Esta herramienta reconoce las URLs de Shorts (<code>youtube.com/shorts/ID</code>) y extrae la mejor miniatura disponible de la misma manera que con los vídeos estándar.',
    },
    {
      type: 'tip',
      title: 'Privacidad Garantizada',
      html: '<p>Toda la extracción ocurre en tu navegador. No se envían URLs ni datos a ningún servidor externo.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Pega el enlace de YouTube aquí...',
    pasteAriaLabel: 'Pegar desde portapapeles',
    helperText: 'Formatos soportados: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Máxima Calidad',
    downloadBtn: 'Descargar en Máxima Resolución',
    qualityMedium: 'Calidad Media',
    qualityStandard: 'Calidad Estándar',
    qualityLow: 'Baja Calidad',
    viewImage: 'Ver Imagen',
    errorInvalid: 'URL de YouTube no válida. Por favor, compruébala.',
    imgAlt: 'Miniatura HD de YouTube',
  },
};
