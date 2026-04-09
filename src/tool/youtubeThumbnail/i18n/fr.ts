import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'extracteur-miniatures-youtube';
const title = 'Extracteur de Miniatures YouTube (HD)';
const description =
  "Extrayez et téléchargez l'image miniature originale de n'importe quelle vidéo YouTube en résolution maximale et sans filigrane, en utilisant uniquement l'URL.";

const faqData = [
  {
    question: 'À quelle résolution les miniatures sont-elles extraites ?',
    answer:
      "L'outil tente toujours d'obtenir l'image en résolution 'MaxRes' (1280x720 ou 1920x1080), qui est la qualité originale téléversée par le créateur de la vidéo. Si l'auteur n'a pas téléversé de miniature en HD, la résolution disponible suivante sera affichée automatiquement.",
  },
  {
    question: "Quels types de liens sont pris en charge ?",
    answer:
      "Il prend en charge les URLs traditionnelles youtube.com/watch, les liens courts youtu.be, les liens mobiles, ainsi que les URLs YouTube Shorts de manière transparente.",
  },
  {
    question: "Est-il légal de télécharger des miniatures YouTube ?",
    answer:
      "Oui, le téléchargement est tout à fait légal pour un usage personnel, la conception, les parodies et l'inspiration (Fair Use). Soyez prudent si vous prévoyez d'utiliser des miniatures protégées par le droit d'auteur à des fins purement commerciales — dans ces cas, il est important de vérifier la licence de la vidéo.",
  },
  {
    question: "Y a-t-il une limite d'utilisation quotidienne ?",
    answer:
      "Il n'y a pas de limites mensuelles ni quotidiennes. Ce logiciel fonctionnant côté client en résolvant le schéma d'URL directement dans votre navigateur, nous n'interagissons pas avec les APIs restrictives traditionnelles.",
  },
];

const howToData = [
  {
    name: "Copiez l'URL de la vidéo",
    text: "Rendez-vous sur YouTube et copiez le lien de la vidéo depuis la barre d'adresse du navigateur ou le bouton de partage.",
  },
  {
    name: 'Collez le lien',
    text: "Entrez l'URL dans le champ de l'extracteur ou utilisez le bouton pour coller depuis le presse-papiers.",
  },
  {
    name: 'Sélectionnez la qualité',
    text: "L'outil affichera toutes les résolutions disponibles, de la qualité maximale (1080p) jusqu'à la plus basse.",
  },
  {
    name: "Téléchargez l'image",
    text: 'Cliquez sur le bouton de téléchargement pour enregistrer la miniature sur votre appareil.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Documentation et Références',
  bibliography: [
    {
      name: 'YouTube Aide : Ajouter une miniature personnalisée',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy : Créer de bonnes miniatures',
      url: 'https://creatoracademy.youtube.com/',
    },
    {
      name: 'Google Developers : YouTube Data API — Thumbnails',
      url: 'https://developers.google.com/youtube/v3/docs/thumbnails',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Télécharger des Miniatures YouTube en HD Gratuitement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Si vous avez besoin de <strong>télécharger la miniature d'une vidéo YouTube</strong> dans sa taille originale ou en qualité maximale (Full HD ou 4K), cet outil gratuit est la solution la plus rapide. Vous pouvez obtenir l'image de couverture de n'importe quelle chaîne pour vous inspirer, créer vos propres designs ou l'utiliser dans des présentations.",
    },
    {
      type: 'tip',
      title: 'Extraire des Images de Couverture sans Logiciel',
      html: "<p>Pas besoin d'installer un logiciel ni de s'inscrire. Il suffit de copier et coller le lien de la vidéo pour <strong>enregistrer la miniature YouTube</strong> directement sur votre ordinateur ou téléphone.</p>",
    },
    {
      type: 'title',
      text: "Comment Obtenir la Miniature d'une Vidéo YouTube ?",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le processus pour <strong>récupérer l'image d'une vidéo YouTube</strong> est très simple. Suivez ces étapes pour obtenir l'image en quelques secondes :",
    },
    {
      type: 'list',
      items: [
        "<strong>1. Copiez l'URL :</strong> Rendez-vous sur YouTube et copiez le lien de la vidéo (depuis la barre d'adresse du navigateur ou le bouton de partage).",
        "<strong>2. Collez le lien :</strong> Entrez l'URL dans le champ de recherche de notre extracteur de miniatures.",
        "<strong>3. Sélectionnez la qualité :</strong> Nous afficherons toutes les résolutions disponibles, de la qualité maximale (1080p) jusqu'à la plus basse (360p).",
        "<strong>4. Téléchargez l'image :</strong> Cliquez sur le bouton de téléchargement pour enregistrer la <i>thumbnail</i> sur votre appareil.",
      ],
    },
    {
      type: 'title',
      text: 'Formats et Résolutions Pris en Charge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Télécharger les images de couverture de vidéos YouTube n'a jamais été aussi simple. L'outil récupère automatiquement la meilleure image possible (connue sous le nom de <strong>maxresdefault</strong>), généralement des designs réalisés sous Photoshop par les YouTubeurs. Si le créateur n'a pas téléversé d'image en HD, vous obtiendrez la meilleure option disponible (<strong>hqdefault</strong> ou <strong>mqdefault</strong>).",
    },
    {
      type: 'paragraph',
      html: "Cet outil est parfait pour les <i>Community Managers</i>, les graphistes, les créateurs de contenu, les créateurs de mèmes, ou toute personne ayant besoin de <strong>télécharger la jaquette d'une vidéo</strong> pour ses projets. Il est également compatible avec les <strong>YouTube Shorts</strong>, ce qui vous permet d'en obtenir les miniatures de la même manière.",
    },
    {
      type: 'title',
      text: 'Utilisations Professionnelles des Miniatures YouTube',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les miniatures YouTube sont des actifs visuels de grande valeur. Elles représentent des heures de travail de design, des tests A/B et une optimisation du CTR de la part des créateurs. Savoir comment y accéder et les télécharger ouvre un large éventail de possibilités professionnelles.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Créateurs de Contenu',
          html: "<p>Analysez les miniatures de vidéos virales dans votre niche pour comprendre quels éléments visuels génèrent le plus de clics : typographie, couleurs dominantes, utilisation de visages ou de texte.</p><ul><li><strong>Benchmarking visuel :</strong> Comparez vos miniatures avec celles des leaders de votre secteur.</li><li><strong>Itération de design :</strong> Téléchargez des miniatures comme références dans Photoshop ou Canva.</li><li><strong>Archive d'inspiration :</strong> Constituez une bibliothèque de thumbnails à fort taux de conversion.</li></ul>",
        },
        {
          type: 'card',
          title: 'Designers et Marketeurs',
          html: "<p>Pour un graphiste ou un <i>social media manager</i>, accéder rapidement aux miniatures YouTube est essentiel pour les présentations, les propositions clients et les audits visuels.</p><ul><li><strong>Présentations client :</strong> Incluez de vraies captures de la concurrence dans vos propositions.</li><li><strong>Audits de marque :</strong> Évaluez la cohérence visuelle d'une chaîne YouTube.</li><li><strong>Moodboards :</strong> Collectez des références visuelles de qualité sans captures d'écran floues.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'Compatibilité avec YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "L'extracteur fonctionne parfaitement avec les <strong>YouTube Shorts</strong>. Les Shorts ont leur propre format de miniature vertical (9:16) qui est généré automatiquement depuis la vidéo. Cet outil reconnaît les URLs de Shorts (<code>youtube.com/shorts/ID</code>) et extrait la meilleure miniature disponible exactement de la même manière que pour les vidéos standard.",
    },
    {
      type: 'tip',
      title: 'Confidentialité Garantie',
      html: "<p>Toute l'extraction se fait dans votre navigateur. Aucune URL ni donnée n'est envoyée à un serveur externe.</p>",
    },
  ],
  ui: {
    urlPlaceholder: 'Collez le lien YouTube ici...',
    pasteAriaLabel: 'Coller depuis le presse-papiers',
    helperText: 'Formats supportés : youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Qualité Maximale',
    downloadBtn: 'Télécharger en Résolution Maximale',
    qualityMedium: 'Qualité Moyenne',
    qualityStandard: 'Qualité Standard',
    qualityLow: 'Qualité Basse',
    viewImage: "Voir l'Image",
    errorInvalid: "URL YouTube invalide. Veuillez vérifier et réessayer.",
    imgAlt: 'Miniature YouTube HD',
  },
};
