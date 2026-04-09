import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'previsualizador-miniaturas-youtube';
const title = 'Previsualizador de Miniaturas YouTube Online - Mejora tu CTR Gratis';
const description =
  'Sube tu miniatura y visualiza cómo queda en el feed real de YouTube móvil y desktop. Simulador de modo oscuro y claro para optimizar clics instantáneos.';

const faqData = [
  {
    question: '¿Por qué es vital probar las miniaturas de YouTube?',
    answer:
      'La mayoría de los usuarios ven YouTube en dispositivos móviles. Una miniatura que se ve bien en tu monitor puede ser ilegible en una pantalla pequeña. Probarla en un simulador asegura que el texto sea claro y el sujeto principal destaque en cualquier tamaño.',
  },
  {
    question: '¿Tengo que registrarme para usar este Previsualizador?',
    answer:
      'No. Nuestra herramienta es 100% gratuita y funciona directamente en tu navegador. No necesitas crear una cuenta ni dejar tu correo electrónico para optimizar tus miniaturas.',
  },
  {
    question: '¿Mis diseños se suben a vuestro servidor?',
    answer:
      'Absolutamente no. La privacidad es nuestra prioridad número uno. Al seleccionar un archivo, este se carga localmente en la memoria de tu navegador mediante una URL temporal. Nadie, excepto tú, puede ver el diseño que estás probando.',
  },
  {
    question: '¿Cómo ayuda esta herramienta a mejorar mi CTR?',
    answer:
      'El CTR (Click-Through Rate) es el porcentaje de personas que hacen clic al ver la miniatura. Al simular el entorno real (fondo negro vs blanco, móvil vs PC), puedes corregir errores de contraste y composición antes de publicar, aumentando tus clics.',
  },
  {
    question: '¿Funciona con el Modo Oscuro oficial de YouTube?',
    answer:
      'Sí. Hemos incluido un selector de temas (Claro y Oscuro) que imita exactamente los colores hexadecimales que utiliza la aplicación oficial de YouTube en ambos modos.',
  },
];

const howToData = [
  {
    name: 'Sube tu diseño',
    text: 'Haz clic en el área de carga o arrastra tu archivo de imagen (PNG, JPG o WebP) directamente a la herramienta.',
  },
  {
    name: 'Ajusta el contexto',
    text: 'Escribe el título de tu vídeo y el nombre de tu canal para que la simulación sea lo más realista posible frente al feed real.',
  },
  {
    name: 'Cambia de dispositivo',
    text: "Alterna entre la vista de 'Escritorio' y 'Móvil' para verificar la legibilidad en pantallas de diferentes tamaños.",
  },
  {
    name: 'Prueba el contraste',
    text: "Activa el tema 'Oscuro' para ver si los colores resaltan correctamente contra el fondo negro de YouTube.",
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'YouTube Help: Create custom video thumbnails',
      url: 'https://support.google.com/youtube/answer/141805',
    },
    {
      name: 'Nielsen Norman Group: Visual Processing and UX Design',
      url: 'https://www.nngroup.com/articles/visual-processing/',
    },
    {
      name: 'Derral Eves: The YouTube Formula (Thumbnail Strategy)',
      url: 'https://derraleves.com/the-youtube-formula/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Previsualizador de Miniaturas para YouTube: Domina el CTR de tu Canal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el ecosistema de YouTube, la miniatura (o thumbnail) es la puerta de entrada a tu contenido. Puedes tener el mejor vídeo del mundo, con una edición de Hollywood y un guion digno de un Oscar, pero si nadie hace clic, tu trabajo será invisible para el algoritmo. Aquí es donde entra en juego el <strong>CTR (Click-Through Rate)</strong>, y la miniatura es el factor determinante.',
    },
    {
      type: 'title',
      text: 'Por qué necesitas probar tus miniaturas antes de subirlas',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Previsualización Real:</strong> Mira tu miniatura tal como aparecerá en el feed de YouTube.',
        '<strong>Modo Oscuro y Claro:</strong> Asegura que los colores resalten en cualquier configuración del usuario.',
        '<strong>Simulador de Dispositivos:</strong> Comprueba la legibilidad del texto tanto en monitores como en móviles pequeños.',
        '<strong>Optimización de CTR:</strong> Compara tu diseño con la interfaz nativa para maximizar los clics.',
        '<strong>Sin Registro:</strong> Sube tu imagen y pruébala al instante sin crear cuentas.',
        '<strong>Privacidad Garantizada:</strong> Tus diseños se procesan localmente y nunca se suben a servidores.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Muchos creadores cometen el error de diseñar sus miniaturas en monitores grandes, viéndolas a pantalla completa en sus editores favoritos. El problema es que el usuario final rara vez la ve así. La mayoría la consume en un dispositivo móvil mientras hace scroll infinito, o en una esquina del monitor en modo oscuro. Nuestro <strong>Previsualizador de Miniaturas de YouTube</strong> te permite romper esa "ilusión del diseñador" y ver la realidad quirúrgica del feed.',
    },
    {
      type: 'title',
      text: 'Métricas Técnicas y Rendimiento',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 s', body: 'Tiempo de Respuesta' },
        { title: '4K', body: 'Resolución Máxima' },
        { title: '100%', body: 'Privacidad Local' },
        { title: 'HD', body: 'Calidad Nativa' },
      ],
    },
    {
      type: 'title',
      text: 'La Psicología del Clic: ¿Por qué fallan las miniaturas?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El cerebro humano procesa imágenes miles de veces más rápido que el texto. Sin embargo, en YouTube, la competencia es brutal. Tu miniatura no solo debe ser "bonita", debe ser <strong>legible</strong> y tener <strong>contraste</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Un error común es usar colores que se mimetizan con el fondo de YouTube. Si usas grises oscuros y tu espectador está en modo oscuro, tu vídeo simplemente desaparecerá de su vista periférica. Al usar este tester, puedes alternar entre temas y asegurarte de que tu diseño "pop" (resalte) en cualquier escenario.',
    },
    {
      type: 'title',
      text: 'Comparativa Directa: Diseño vs. Realidad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '¿Merece la pena perder 30 segundos probando la miniatura? La respuesta es un rotundo SÍ. Una miniatura optimizada puede duplicar tus visualizaciones en las primeras 24 horas, lo que le indica a la IA de YouTube que tu contenido tiene "gancho".',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Diseño en Photoshop / Canva',
          body: 'Falsa sensación de tamaño real · Ignora el contraste con el fondo de la App · El texto parece legible pero quizás no · No ves los elementos de la UI (duración, avatares)',
        },
        {
          title: 'Previsualizador de Miniaturas YouTube',
          body: 'Vista real en el feed de inicio (Home) · Contraste verificado en Dark vs Light Mode · Legibilidad de texto garantizada en mobile · Simulación de títulos y nombres de canal',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist para una Miniatura con CTR Superior al 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de exportar tu diseño final, asegúrate de pasar por esta lista de control utilizando nuestro simulador profesional:',
    },
    {
      type: 'list',
      items: [
        '¿Es el texto legible en una pantalla de móvil pequeña?',
        '¿Hay suficiente contraste entre el fondo y el sujeto principal?',
        '¿La miniatura se ve bien sobre el fondo negro del Modo Oscuro?',
        '¿El título del vídeo tapa información vital de la imagen?',
        '¿La duración del vídeo (el cuadradito negro) oculta algo importante?',
        '¿La cara o el objeto principal transmiten la emoción deseada a tamaño reducido?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomía de una Miniatura de Alto Impacto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Basándonos en análisis de los canales más grandes del mundo, una miniatura ganadora suele seguir este patrón estructural:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Sujeto Principal',
          body: 'Foco de atención primaria · Usa recortes nítidos con un ligero borde o saturación extra.',
        },
        {
          title: 'Texto (Máx 3 palabras)',
          body: 'Contexto instantáneo · Usa fuentes Sans Serif gruesas y colores complementarios.',
        },
        {
          title: 'Fondo Desenfocado',
          body: 'Separación de planos · Añade profundidad para que el sujeto principal "salte" de la pantalla.',
        },
        {
          title: 'Espacio de Duración',
          body: 'Evitar errores · No pongas caras o texto en la esquina inferior derecha.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'El Truco de la Zona Muerta',
      html: '<p>YouTube coloca siempre un recuadro negro con la duración del vídeo en la esquina inferior derecha de la miniatura. Miles de creadores ponen elementos vitales en esa zona, solo para descubrir que la App los tapa. Nuestra herramienta simula este recuadro para que nunca tapes tu mejor cara.</p>',
    },
    {
      type: 'title',
      text: 'Ventajas y Limitaciones de la Herramienta',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Interfaz ultra rápida y reactiva',
          body: 'Limitación: No permite edición de imagen (usar Canva/PS)',
        },
        {
          title: 'Mockups exactos de la App y Web',
          body: 'Limitación: No simula anuncios Pre-roll',
        },
        {
          title: 'Gratis y sin publicidad intrusiva',
          body: 'Limitación: Solo soporta archivos locales',
        },
      ],
    },
    {
      type: 'title',
      text: "Uso del Modo 'Split' (Comparación Directa)",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta es la función estrella. Al activar el modo Split, verás tu miniatura bajo el prisma del Modo Claro y el Modo Oscuro al mismo tiempo. Es la forma definitiva de comprobar si tu paleta de colores es universal o si necesita ajustes de brillo y contraste.',
    },
    {
      type: 'title',
      text: 'Privacidad: Tus Diseños no se Suben a la Nube',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sabemos que tus miniaturas son parte de tu estrategia secreta antes de un lanzamiento. Por eso, hemos diseñado esta utilidad para que trabaje exclusivamente en el motor de tu navegador. <strong>Nada se sube a internet</strong>. El archivo que seleccionas se carga mediante una URL local temporal que desaparece al cerrar la pestaña. Tu propiedad intelectual está 100% bajo tu control.',
    },
    {
      type: 'title',
      text: 'Conclusión: El Píxel Perfecto Garantizado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deja de adivinar y empieza a validar. El <strong>Previsualizador de Miniaturas para YouTube</strong> de JJLMoya es la herramienta gratuita que separa a los creadores aficionados de los profesionales del contenido. Un pequeño ajuste en el tamaño de una fuente o en la posición del sujeto puede ser la diferencia entre un vídeo que pasa desapercibido y un éxito viral.',
    },
    {
      type: 'paragraph',
      html: '¡Empieza a optimizar tu canal ahora y dale a tus vídeos la tasa de clics que se merecen!',
    },
  ],
  ui: {
    dropFeedTitle: 'Arrastra tu Miniatura',
    dropFeedSub: 'PNG, JPG o WebP · Múltiples imágenes',
    dropAvatarTitle: 'Arrastra tu Avatar',
    dropAvatarSub: 'Imagen de perfil del canal',
    labelTitle: 'Título del vídeo',
    labelChannel: 'Nombre del canal',
    defaultTitle: 'Tu Título de Vídeo Aquí',
    defaultChannel: 'Nombre del Canal',
    btnDesktop: 'Escritorio',
    btnMobile: 'Móvil',
    btnClear: 'Limpiar',
    labelLight: 'Claro',
    labelDark: 'Oscuro',
    views0: '1,2 M de visualizaciones · hace 1 hora',
    views1: 'Hace 45 minutos',
    views2: '250.000 visualizaciones · hace 1 día',
    views3: '3,1 M de visualizaciones · hace 1 semana',
  },
};
