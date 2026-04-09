import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'formateador-reddit';
const title = 'Formateador Reddit - Limpiador y Adaptador de Texto';
const description =
  'Limpiador avanzado de texto para publicar en Reddit. Arregla los saltos de línea perdidos, elimina espacios múltiples y caracteres ocultos que rompen el Markdown.';

const faqData = [
  {
    question: '¿Por qué mi texto en Reddit pierde los saltos de línea?',
    answer:
      'Reddit utiliza Markdown, que requiere que presiones doble espacio al final de una línea antes de pulsar Intro para crear un salto normal, o que pulses Intro dos veces para crear un nuevo párrafo. Nuestra herramienta ajusta esto automáticamente insertando dobles saltos de línea.',
  },
  {
    question: '¿Qué son los caracteres ocultos o invisibles?',
    answer:
      'Muchas veces, al copiar de procesadores de texto complejos, se adhieren marcadores de formato de longitud cero. Estos elementos son invisibles en la web normal pero pueden romper el ecosistema de Markdown.',
  },
  {
    question: '¿Es seguro usar este limpiador de texto?',
    answer:
      'Completamente seguro. El script se ejecuta enteramente en el lado del cliente (en tu propio navegador). Tus textos no son enviados a ningún servidor y nunca nadie más tendrá acceso a lo que copies aquí.',
  },
  {
    question: '¿Puedo usar esto para Twitter u otras redes?',
    answer:
      'Sí, además de arreglar Reddit, remover espacios múltiples y caracteres extraños es útil para cualquier publicación en blogs, Twitter, foros phpBB antiguos o cualquier otra plataforma social donde necesites texto neutro y muy limpio.',
  },
];

const howToData = [
  {
    name: 'Pega tu texto',
    text: 'Copia tu texto desde Word, Google Docs o cualquier fuente y pégalo en el campo de entrada.',
  },
  {
    name: 'Elige las opciones',
    text: 'Activa o desactiva las opciones según lo que necesites: arreglar párrafos, eliminar espacios o limpiar caracteres ocultos.',
  },
  {
    name: 'Revisa el resultado',
    text: 'El texto limpio aparece en tiempo real en el campo de salida, listo para publicar.',
  },
  {
    name: 'Copia y publica',
    text: 'Haz clic en "Copiar Texto" y pégalo directamente en Reddit o cualquier foro.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'Reddit Help: Formatting text in posts and comments',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown guide',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Herramienta Definitiva de Formateo para Reddit y Foros Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Crear publicaciones en Reddit o en cualquier plataforma que dependa de Markdown puede resultar frustrante. Un error frecuente al copiar y pegar texto desde procesadores de texto complejos o páginas web es la alteración de los saltos de línea. Al enviar el contenido, este suele convertirse en un bloque sólido y difícil de leer, ignorando la estructura original de los párrafos. Nuestra herramienta de formateo resuelve este problema de raíz.',
    },
    {
      type: 'title',
      text: 'Cómo Funciona el Limpiador de Textos para Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El motor de procesamiento ejecuta múltiples filtros sobre tu texto en tiempo real. En primer lugar, aborda los saltos de línea. Reddit requiere un formato específico donde un salto de párrafo necesita dos líneas nuevas en el código fuente Markdown. El limpiador analiza tu texto y convierte automáticamente los saltos de línea simples en saltos dobles, manteniendo intactos los párrafos existentes para no generar espacios excesivos.',
    },
    {
      type: 'paragraph',
      html: 'En segundo lugar, la herramienta elimina los caracteres invisibles y los espacios múltiples. Al copiar texto de sitios web, es común arrastrar caracteres sin ancho que rompen el formato o causan comportamientos extraños en los foros. El limpiador purga estos elementos web intrusivos y normaliza los espacios repetidos en un solo espacio limpio. De manera opcional, puedes extraer y eliminar todos los enlaces hipertextuales en crudo de tu contenido para publicar texto completamente neutro.',
    },
    {
      type: 'title',
      text: 'Ventajas de Usar un Limpiador de Textos Especializado',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Legibilidad Optimizada:</strong> Asegura que tus lectores en Reddit vean un texto estructurado correctamente en lugar de un bloque intimidante.',
        '<strong>Ahorro de Tiempo:</strong> Olvídate de pulsar Enter cientos de veces para arreglar formato roto. Pega tu información y cópiala ya lista en menos de un segundo.',
        '<strong>Eliminación de Metadatos y Basura Web:</strong> Protege tu publicación de estilos raros o roturas causadas por el espacio sin ancho.',
        '<strong>Alta Privacidad:</strong> Todo el procesamiento es client-side. El texto nunca abandona tu navegador ni se almacena en servidores externos.',
      ],
    },
    {
      type: 'title',
      text: 'El Problema con los Procesadores de Texto y Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aplicaciones como Microsoft Word o Google Docs añaden una capa invisible de formato rico sobre su texto. Cuando copias y pegas ese contenido directamente en el editor básico o en el modo Markdown de Reddit, el formato rico desaparece y lo que queda muchas veces es una amalgama sin estructura. Reddit utiliza una variante de Markdown bastante estricta. Si no estás familiarizado con la sintaxis de Reddit o simplemente quieres un proceso más fluido al trasladar ensayos o historias al foro, limpiar el texto aquí primero previene que tu publicación reciba votos negativos simplemente por ser imposible de leer de forma cómoda y natural.',
    },
    {
      type: 'title',
      text: 'Buenas Prácticas para Publicar en Foros',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un formato correcto es vital para generar debate y mantener la atención de la comunidad. Las publicaciones con líneas muy largas o párrafos inexistentes suelen ser abandonadas en las primeras oraciones. Utiliza esta herramienta de limpieza para asentar las bases estructurales. Luego, añade formato como negritas y cursivas de manera estratégica dentro del propio editor de Reddit para destacar ideas clave. Recuerda revisar siempre la vista previa y aprovechar las listas estructuradas para enumerar puntos importantes o guías detalladas.',
    },
    {
      type: 'title',
      text: 'Ejemplo de Transformación',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Antes y después del formateador',
      html: '<p><strong>Texto original pegado:</strong></p><pre>Hola esto es la primera linea\ny esta pensaba que era la segunda\npero en reddit sale todo junto si lo pegas.</pre><p><strong>Texto formateado:</strong></p><pre>Hola esto es la primera linea\n\ny esta pensaba que era la segunda\n\npero en reddit sale todo junto si lo pegas.</pre>',
    },
    {
      type: 'title',
      text: 'Preguntas Frecuentes sobre el Formateador de Textos de Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Encontrar las respuestas correctas sobre cómo interactuar con las normas editoriales de Reddit no siempre es obvio. Revisa la sección de FAQ donde resolvemos las dudas principales sobre los formatos válidos y cómo evitar ser penalizado por bloques de texto masivos.',
    },
  ],
  ui: {
    labelInput: 'Texto Original',
    placeholderInput: 'Pega tu texto original aquí...',
    labelOptions: 'Opciones de Formateo',
    optionParagraphs: 'Arreglar Párrafos al estilo Reddit',
    optionSpaces: 'Eliminar espacios múltiples',
    optionInvisible: 'Limpiar caracteres web ocultos',
    optionLinks: 'Extraer URLs (Dejar solo texto)',
    labelOutput: 'Texto Limpio',
    placeholderOutput: 'El resultado de la limpieza se verá aquí...',
    btnCopy: 'Copiar Texto',
    btnCopied: 'Copiado',
  },
};
