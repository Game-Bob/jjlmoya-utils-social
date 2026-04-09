import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'simulador-redes';
const title = 'Social Safe Zones: Simulador de Video para TikTok, Reels y Shorts';
const description =
  'Previsualiza tus imágenes y videos con la interfaz real de las redes sociales. Asegura que tu contenido sea siempre visible y evita recortes accidentales.';

const faqData = [
  {
    question: "¿Qué son las 'Safe Zones' en redes sociales?",
    answer:
      'Son las áreas de la pantalla donde el contenido es visible sin riesgo de ser tapado por elementos de la interfaz, como el nombre de usuario, la descripción, los botones de interacción (like, compartir) o el recorte automático que aplican algunos dispositivos.',
  },
  {
    question: '¿Por qué mi video de TikTok se ve cortado arriba y abajo?',
    answer:
      'TikTok utiliza una relación de aspecto 9:16. Si tu video es más ancho, la app hará zoom para llenar la pantalla, lo que provoca recortes. Además, la interfaz inferior tapa parte del video, por lo que los elementos importantes deben estar centrados.',
  },
  {
    question: '¿Es la misma zona segura para Instagram Reels que para YouTube Shorts?',
    answer:
      'Son muy parecidas pero no idénticas. Los botones de YouTube Shorts están posicionados de forma diferente a los de Reels. Nuestra herramienta permite cambiar entre plataformas para que verifiques tu diseño en todas ellas.',
  },
  {
    question: '¿Qué pasa si pongo texto en la esquina inferior derecha?',
    answer:
      'Probablemente sea invisible o muy difícil de leer, ya que es donde se sitúan los iconos de perfil, corazón y comentarios. Lo ideal es mantener los textos y caras en la zona central-superior (Safe Zone).',
  },
];

const howToData = [
  {
    name: 'Cargar tu imagen o video',
    text: 'Sube el archivo que quieres previsualizar. El procesamiento es local y privado, nada se sube a internet.',
  },
  {
    name: 'Seleccionar la plataforma',
    text: 'Elige entre TikTok, Instagram Reels o YouTube Shorts para activar el overlay de interfaz correspondiente.',
  },
  {
    name: 'Verificar la legibilidad',
    text: 'Comprueba si los textos, subtítulos o elementos clave de tu marca quedan tapados por los iconos de la red social.',
  },
  {
    name: 'Ajustar y exportar',
    text: 'Si ves que algo queda oculto, mueve el elemento en tu editor de video original y vuelve a probar hasta que encaje perfectamente.',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Documentación Oficial de Plataformas',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Video optimization and safe zones',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Best practices for Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube Help: Create YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Safe zones and aspect ratios for video',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guía Maestra de Zonas Seguras: Optimiza tus Reels, TikToks y Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el saturado mundo del contenido vertical, la primera impresión es técnica. El mayor error de los creadores es ignorar cómo interactúa su <strong>vídeo o imagen</strong> con la interfaz nativa de la plataforma. Cada red social (TikTok, Instagram Reels y YouTube Shorts) superpone capas de botones, textos y perfiles que pueden anular el impacto visual de tu composición.',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta te permite cargar tus archivos multimedia y previsualizar exactamente qué partes de tu encuadre serán devoradas por la interfaz. No se trata solo de <strong>subtítulos</strong>; se trata de asegurar que los rostros, productos o acciones principales de tu vídeo no queden enterrados bajo un botón de "Like" o una descripción kilométrica.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: La interfaz más invasiva',
          html: '<p>TikTok posee la interfaz más densa. En la parte derecha, tenemos una columna de iconos que ocupa aproximadamente el 15% del ancho. En la parte inferior, la descripción puede extenderse hasta 4 o 5 líneas si es larga, tapando casi un tercio de la pantalla desde abajo.</p><ul><li><strong>Margen Inferior:</strong> Deja libre los últimos 250px para evitar el texto de la descripción y el nombre de usuario.</li><li><strong>Margen Derecho:</strong> Evita colocar texto a menos de 100px del borde derecho.</li><li><strong>Cénit:</strong> Los botones de "Siguiendo" y "Para ti" ocupan la franja superior central.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels: El factor del feed',
          html: '<p>A diferencia de TikTok, Instagram Reels recorta el video a un formato 4:5 cuando se visualiza desde el feed principal (no desde la pestaña de Reels). Esto significa que si pones información vital en el 15% superior o inferior de tu video 9:16, desaparecerá en el feed.</p><ul><li><strong>La regla del 4:5:</strong> Mantén los títulos y elementos clave dentro de la zona central para asegurar visibilidad en el feed.</li><li><strong>Interfaz:</strong> Los iconos de Reels son más sutiles que los de TikTok, permitiendo un poco más de margen lateral.</li><li><strong>Botón de Audio:</strong> Situado abajo a la derecha, suele tapar mucho menos que el disco giratorio de TikTok.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Cuidado con la derecha',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts tiene una interfaz asimétrica. El botón de suscripción es muy prominente y de color sólido (usualmente negro o blanco), lo que crea un punto ciego visual importante en la parte inferior derecha.',
    },
    {
      type: 'list',
      items: [
        '<strong>Margen Derecho:</strong> Evita colocar texto o elementos importantes en el 20% inferior derecho.',
        '<strong>Margen Inferior:</strong> Deja libre los últimos 150px para evitar el texto de la descripción y el nombre de usuario.',
        '<strong>Cénit:</strong> Los botones de "Suscribirse" y "Más" ocupan la franja superior central.',
      ],
    },
    {
      type: 'title',
      text: 'Preguntas Críticas sobre Diseño Vertical',
      level: 2,
    },
    {
      type: 'title',
      text: '¿Dónde colocar los elementos clave (rostros, texto, producto)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La "Zona de Oro" para la acción principal es el tercio central del video. Si grabas a una persona, asegúrate de que sus ojos y boca estén en esta zona. Los elementos gráficos importantes deben estar ligeramente desplazados hacia arriba desde el centro geométrico para evitar la descripción inferior.',
    },
    {
      type: 'title',
      text: '¿Por qué mi video se ve borroso al subirlo?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muchas veces no es la calidad, sino el escalado. Graba siempre en 1080x1920 a 30 o 60 fps. Evita el 4K si vas a aplicar muchos efectos pesados, ya que las plataformas comprimen agresivamente los archivos de gran tamaño.',
    },
    {
      type: 'title',
      text: '¿Qué pasa con los marcos de los teléfonos?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Recuerda que los teléfonos modernos tienen "notches" (cejas) o agujeros de cámara en pantalla. Esta herramienta incluye un margen de seguridad superior para que tu contenido no choque con el reloj o los iconos del sistema (batería, señal).',
    },
    {
      type: 'title',
      text: 'Anatomía de un Video Viral',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El diseño para redes sociales no es solo estética, es <strong>usabilidad</strong>. Si un usuario tiene que esforzarse para leer un texto porque los iconos de la plataforma lo tapan, simplemente pasará al siguiente video. La retención (Watch Time) cae en picado cuando hay fricción visual.',
    },
    {
      type: 'paragraph',
      html: 'En YouTube Shorts, por ejemplo, la interfaz es asimétrica. El botón de suscripción es muy prominente y de color sólido (usualmente negro o blanco), lo que crea un punto ciego visual importante. Al usar este simulador, puedes ajustar la opacidad para entender cómo tu paleta de colores interactúa con los colores de la UI nativa.',
    },
    {
      type: 'tip',
      title: 'Herramienta de Control de Calidad Creativa',
      html: '<p>Diseñado para creadores que no dejan nada al azar.</p>',
    },
  ],
  ui: {
    labelConfig: 'Configuración',
    labelPlatform: 'Plataforma de Destino',
    labelUpload: 'Subir Contenido',
    uploadPrompt: 'Selecciona imagen o video',
    uploadLink: 'O usa un ejemplo',
    loadContent: 'Carga tu contenido',
    labelOpacity: 'Relieve de Interfaz',
    labelMask: 'Grisar Zonas Críticas',
    labelGrid: 'Regla de Tercios',
    btnReset: 'Refrescar Canvas',
    bannerTiktok: 'Simulando TikTok 9:16',
    bannerReels: 'Simulando Instagram Reels 9:16',
    bannerShorts: 'Simulando YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Siguiendo',
    ttForYou: 'Para ti',
    ttDescription: 'Diseño de interfaces reales para creadores de contenido. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Sonido Original',
    ttNavHome: 'Inicio',
    ttNavFriends: 'Amigos',
    ttNavInbox: 'Bandeja',
    ttNavProfile: 'Perfil',
    reelsFollow: 'Seguir',
    reelsDescription: 'Esta interfaz es idéntica a la real. #reels #ux #simulador',
    reelsAudio: 'Música Tendencia - Audio Original',
    shortsSubscribe: 'SUSCRIBIRSE',
    shortsDislike: 'No me gusta',
    shortsShare: 'Compartir',
    shortsRemix: 'Remix',
    shortsDescription: '¡Simulando interfaces reales para Shorts! #youtube #shorts',
  },
};
