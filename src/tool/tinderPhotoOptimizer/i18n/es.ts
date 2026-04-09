import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'optimizador-fotos-tinder';
const title = 'Optimizador de Fotos para Tinder: Análisis de Rostro y Composición';
const description =
  'Optimiza tus fotos para Tinder con análisis algorítmico de rostro. Simula la interfaz 2026, analiza el encuadre científico y la línea de ojos, exporta retratos 9:16 perfectos para maximizar matches.';

const faqData = [
  {
    question: '¿Cómo mejora esta herramienta mis matches en Tinder?',
    answer:
      'La herramienta analiza factores técnicos clave: el ratio de tamaño facial (ideal 30-50%), la posición de la línea de ojos respecto al tercio superior, la cobertura del encuadre y las zonas muertas de la interfaz de Tinder. Ajustando estos parámetros, tu foto proyecta más confianza y supera los filtros visuales del algoritmo.',
  },
  {
    question: '¿Es seguro subir mis fotos aquí?',
    answer:
      'Completamente seguro. Todo el procesamiento se realiza en tu navegador mediante Canvas API. Tus fotos nunca se envían a ningún servidor ni se almacenan en ningún lugar.',
  },
  {
    question: '¿Qué hace exactamente la detección de rostro con IA?',
    answer:
      'Utiliza face-api.js para detectar 68 puntos de referencia facial, analizar la expresión (sonrisa, expresión seria), evaluar la posición de los ojos y medir la inclinación de la cabeza. Todo el análisis ocurre localmente en tu dispositivo.',
  },
  {
    question: '¿Por qué recomienda el zoom al 1.2x?',
    answer:
      'Las cámaras frontales de smartphone usan ópticas gran angular (24mm) que distorsionan el rostro con la aberración de barril. Un zoom de 1.2x simula una focal de 50-85mm, eliminando la distorsión y proporcionando proporciones faciales más naturales y atractivas.',
  },
];

const howToData = [
  {
    name: 'Sube tu foto',
    text: 'Arrastra o haz clic en el simulador de Tinder para cargar tu imagen.',
  },
  {
    name: 'Analiza la composición',
    text: 'La IA detecta tu rostro automáticamente y muestra métricas de tamaño facial, línea de ojos, cobertura y expresión.',
  },
  {
    name: 'Ajusta con precisión',
    text: 'Usa los controles de zoom y brillo, activa el auto-encuadre o arrastra manualmente la imagen dentro del simulador.',
  },
  {
    name: 'Descarga optimizada',
    text: 'Exporta tu foto en formato nativo 1080x1920 optimizado para Tinder, con metadatos limpios.',
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

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/es/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Optimizador de Fotos para Tinder: La Guía Científica y Técnica Definitiva (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el ecosistema de las citas digitales, tu perfil de Tinder es procesado por dos algoritmos simultáneamente: el algoritmo de visión avanzada de la propia plataforma y el cerebro humano del usuario que desliza. Nuestra herramienta integra principios de <strong>psicología evolucionista</strong>, <strong>biometría facial</strong> y <strong>procesamiento de señales digitales</strong> para garantizar que tu imagen proyecte el máximo valor social y atractivo técnico.',
    },
    {
      type: 'title',
      text: 'La Psicología de la Primera Impresión: El Efecto de los 1.2 Segundos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Estudios neurocientíficos indican que el cerebro humano tarda aproximadamente 1/10 de segundo en formarse una impresión inicial sobre la confianza que alguien proyecta. En Tinder, dispones de poco más de un segundo antes del siguiente swipe. Nuestra herramienta analiza los factores que aceleran la toma de decisiones positiva:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contacto Visual y Línea de Mirada:</strong> La mirada directa activa regiones del cerebro relacionadas con la recompensa social. Posicionar los ojos en el tercio superior maximiza la probabilidad de que el usuario se detenga en tu mirada antes de leer tu nombre.',
        '<strong>Asimetría y Postura:</strong> Una ligera inclinación puede suavizar rasgos agresivos, pero un roll excesivo transmite inestabilidad. Nuestro algoritmo mide el ángulo exacto para mantenerte en el rango de confianza.',
        '<strong>Contraste Figura-Fondo:</strong> El sistema premia las fotos donde el sujeto está claramente separado del fondo. Un perfil técnico bien definido ayuda a que el motor de renderizado resalte tu rostro frente al de la competencia.',
      ],
    },
    {
      type: 'title',
      text: 'Análisis Técnico de la Lente: El Problema del Gran Angular',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Casi todas las fotos de perfil se toman con smartphones, cuyas cámaras frontales son de gran angular. El error más común es acercarse demasiado al dispositivo.',
    },
    {
      type: 'paragraph',
      html: '<strong>La Aberración de Barril:</strong> A menos de un metro de distancia, una lente de 24mm (estándar en móviles) expande el centro de la imagen. Esto hace que las narices parezcan más grandes y la cara más redonda de lo que es en la realidad. Nuestra recomendación de <strong>Zoom 1.2x</strong> es correctiva: al aplicar un ligero recorte digital, simulas una focal de 50mm a 85mm, la distancia focal dorada que los fotógrafos de moda usan para adelgazar el rostro y mantener las proporciones reales.',
    },
    {
      type: 'title',
      text: 'Interfaz de Tinder: La Ciencia de las Zonas Muertas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muchas fotos excelentes fallan porque ignoran la capa de software (UI) que Tinder coloca encima. Un usuario medio no ve tu foto limpia; ve una amalgama de botones, gradientes y texto.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zona de Títulos (Superior 15%):</strong> Aquí residen los indicadores de progreso y la barra de estado. Si tu frente o tus ojos están aquí, la interfaz corta tu cerebro visualmente.',
        '<strong>Zona de Acción (Botones):</strong> Los iconos de Like, Nope y Boost ocupan los laterales inferiores. Si tus manos o elementos de estilo están ahí, se pierden totalmente.',
        '<strong>El Gradiente de Legibilidad (Inferior 28%):</strong> Tinder aplica un fundido negro para que tu nombre y edad se lean. Si tu rostro cae en esta zona, el texto se superpondrá a tus facciones, arruinando la estética del perfil.',
      ],
    },
    {
      type: 'title',
      text: 'Análisis de Visión en Tiempo Real: Traduciendo el Algoritmo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta utiliza modelos de <strong>Computer Vision de última generación</strong> para auditar tu imagen como lo harían los moderadores automáticos de Tinder:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark Detection:</strong> Mapeamos 68 puntos faciales para analizar la simetría y la apertura de los ojos. Unos ojos bien abiertos y visibles se correlacionan con niveles más altos de extroversión percibida.',
        '<strong>Mood Evaluation:</strong> Una sonrisa ligera activa neuronas espejo en quien te mira. Detectamos la intensidad de la expresión facial para asegurarnos de que no parezcas demasiado serio o inaccesible.',
        '<strong>Calidad de Iluminación:</strong> El sistema evalúa la confianza de detección. Si el score es bajo, la foto tiene ruido visual o sombras duras que el algoritmo de Tinder podría marcar como contenido de baja calidad.',
      ],
    },
    {
      type: 'title',
      text: 'Metadatos y Exportación Optimizada para Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '¿Sabías que el peso de tu imagen influye en el algoritmo? Las apps de citas priorizan el contenido que carga rápido para no interrumpir el flujo del usuario.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata Stripping (Privacidad y SEO):</strong> Eliminamos los registros EXIF. Una foto limpia te da un lienzo nuevo para el algoritmo de la plataforma.',
        '<strong>Compresión Inteligente sin Pérdida:</strong> Reducimos el peso del archivo JPG manteniendo el espacio de color sRGB nativo de iOS y Android. Tu foto se verá vibrante incluso con poca cobertura.',
        '<strong>Formato 9:16 Inmersivo:</strong> Al entregar exactamente 1080x1920 píxeles, evitamos que Tinder aplique su propio algoritmo de compresión agresivo que genera artefactos de imagen.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo de Experto',
      html: '<p>La primera foto debe ser SIEMPRE un retrato claro de hombros para arriba. Guarda las fotos de cuerpo entero o de actividades para la 3ª o 4ª posición. Asegúrate de que en esa primera impresión, tu mirada esté libre de obstáculos y tu rostro tenga el tamaño óptimo (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Seguridad y Ética de Procesado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entendemos que tus fotos son privadas. Este optimizador utiliza <strong>tecnología Client-Side</strong>: las imágenes se procesan mediante un motor de canvas en tu navegador local. Ningún dato sale de tu dispositivo. Es la forma más segura y rápida de optimizar tu perfil sin comprometer tu intimidad.',
    },
  ],
  ui: {
    uploadTitle: 'Optimizar Foto',
    uploadSubtitle: 'Arrastra o haz clic para empezar',
    btnDownload: 'Descargar Foto Optimizada',
    btnRescan: 'Reescanear Rostro',
    btnAutoFocus: 'Auto-Encuadre',
    btnMarkFace: 'Marcar Rostro',
    panelManual: 'Ajustes Manuales',
    panelVisualization: 'Visualización Avanzada',
    panelMetrics: 'Analítica de Composición',
    panelExport: 'Exportar para Tinder 2026',
    panelExportDesc: 'Recorte automático a 1080x1920 con metadatos optimizados.',
    labelZoom: 'Zoom',
    labelBrightness: 'Brillo',
    toggleGrid: 'Rejilla de Tercios',
    toggleGridDesc: 'Ajuste de composición clásica',
    toggleDeadzones: 'Zonas de Peligro',
    toggleDeadzonesDesc: 'Evita que la UI oculte tu cara',
    toggleFaceBox: 'Ver Rostro Detectado',
    toggleFaceBoxDesc: 'Landmarks y área de detección',
    metricFaceSize: 'Ratio de Rostro',
    metricEyeLine: 'Línea de Mirada',
    metricCoverage: 'Cobertura',
    metricMood: 'Expresión',
    metricQuality: 'Confianza',
    analysisSuccess: 'Factores de Éxito',
    analysisWarning: 'Optimización',
    analysisError: 'Errores Críticos',
    deadzoneTop: 'Zona de UI Superior',
    deadzoneBottom: 'Zona de Información',
    loaderAnalyzing: 'Analizando composición...',
    loaderModels: 'Cargando modelos de visión...',
    simulatorName: 'Tu Nombre, 25',
    simulatorJob: 'Tu Profesión',
    simulatorCity: 'Vive en España',
    simulatorDistance: 'A 5 km de ti',
  },
};
