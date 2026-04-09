import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'redimensionneur-images-reseaux-sociaux';
const title = "Redimensionneur d'Images pour les Réseaux Sociaux";
const description =
  "Adaptez et recadrez vos photos pour Instagram, TikTok, YouTube et plus encore. Recadrage intelligent avec les dimensions officielles mises à jour pour 2026.";

const faqData = [
  {
    question: "La qualité est-elle perdue lors du redimensionnement ?",
    answer:
      "Non, nous utilisons des algorithmes de lissage de haute qualité. Il est recommandé de télécharger une image originale avec une résolution égale ou supérieure à celle du format cible.",
  },
  {
    question: "Est-il sûr de télécharger mes photos ici ?",
    answer:
      "Complètement. Le traitement est effectué localement dans votre navigateur via l'API Canvas. Vos photos ne sont jamais envoyées à un serveur.",
  },
  {
    question: "Quels formats sont pris en charge ?",
    answer:
      "Nous prenons en charge JPG, PNG, WebP et AVIF pour le chargement. Les téléchargements sont optimisés en JPG haute qualité pour une compatibilité maximale.",
  },
];

const howToData = [
  {
    name: "Chargez votre image",
    text: "Faites glisser votre fichier ou parcourez votre appareil pour commencer le processus.",
  },
  {
    name: "Choisissez le format",
    text: "Sélectionnez le réseau social et le type de publication dont vous avez besoin dans le menu latéral.",
  },
  {
    name: "Ajustez et téléchargez",
    text: "Cadrez votre photo en la faisant glisser et utilisez le zoom pour un recadrage parfait. Une fois terminé, cliquez sur télécharger.",
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/Canvas_API',
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
      text: "Redimensionneur d'Images pour les Réseaux Sociaux",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans l'écosystème numérique actuel, la première impression est visuelle. Chaque réseau social fonctionne selon des algorithmes spécifiques qui privilégient le contenu adapté nativement à ses proportions. Notre redimensionneur d'images pour les réseaux sociaux n'est pas seulement un outil technique, c'est votre allié pour garantir que votre message arrive sans recadrages indésirables ni perte de qualité.",
    },
    {
      type: 'paragraph',
      html: "Que vous ayez besoin de convertir une photo paysage en un vertical percutant pour Instagram Stories ou d'adapter un design pour la bannière complexe de YouTube, notre utilitaire utilise un système de recadrage intelligent qui vous permet de positionner et de redimensionner votre image avec précision directement dans votre navigateur.",
    },
    {
      type: 'title',
      text: 'Dimensions Officielles pour les Réseaux Sociaux 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Post Carré', body: '1080 × 1080 px · Ratio 1:1' },
        { title: 'Instagram — Post Vertical', body: '1080 × 1350 px · Ratio 4:5' },
        { title: 'TikTok / Reels — Vertical', body: '1080 × 1920 px · Ratio 9:16' },
        { title: 'YouTube — Miniature', body: '1280 × 720 px · Ratio 16:9' },
        { title: 'YouTube — Bannière de Chaîne', body: '2560 × 1440 px · Ratio 16:9' },
        { title: 'X (Twitter) — Post Standard', body: '1200 × 675 px · Ratio 16:9' },
        { title: 'LinkedIn — Couverture de Profil', body: '1584 × 396 px · Ratio 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: "Le format carré 1:1 reste un classique, mais le 4:5 (vertical) occupe plus d'espace à l'écran et génère jusqu'à 30% d'engagement supplémentaire dans le fil d'actualité.",
        },
        {
          title: 'Short Form Content',
          body: "Pour TikTok et Reels, le standard est le 9:16. Ce format immersif exige que le centre d'attention soit parfaitement aligné pour éviter d'être caché par l'interface de l'application.",
        },
        {
          title: 'Visual Engagement',
          body: "Des miniatures aux bannières, chaque asset a un poids spécifique sur le taux de clics. Un recadrage précis garantit que les textes et éléments clés sont toujours lisibles.",
        },
        {
          title: 'Branding Professionnel',
          body: "Sur les réseaux professionnels comme LinkedIn, la netteté est synonyme d'autorité. Les en-têtes nécessitent des ratios spécifiques pour ne pas apparaître pixelisés sur les écrans haute densité.",
        },
      ],
    },
    {
      type: 'title',
      text: "Pourquoi le Ratio d'Aspect est Important",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le ratio d'aspect est la relation proportionnelle entre la largeur et la hauteur d'une image. L'ignorer oblige les plateformes à zoomer ou à ajouter des barres noires, ce qui pénalise l'esthétique et la portée organique du contenu.",
    },
    {
      type: 'list',
      items: [
        "Évite que les textes ou logos soient coupés par les icônes natives de l'application.",
        "Maintient une densité de pixels optimale sans déformer ni étirer la photo originale.",
        "Fait gagner du temps en centralisant toutes les mesures officielles dans un seul outil web.",
        "Améliore la vitesse de chargement en générant des fichiers avec le poids et les dimensions exacts.",
      ],
    },
    {
      type: 'tip',
      title: 'Conseil de Composition',
      html: "<p>Lors de l'utilisation de notre fonction de glissement manuel, essayez de placer le sujet principal de votre photo sur l'un des points d'intersection de la grille. Cela crée des compositions plus dynamiques et professionnelles pour vos réseaux sociaux.</p>",
    },
    {
      type: 'title',
      text: 'Étapes pour un Recadrage Parfait',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Sélectionnez votre format : Choisissez la plateforme et le type de publication dans le menu latéral.",
        "Chargez l'image : Faites glisser votre fichier ou utilisez le sélecteur pour importer votre photo.",
        "Ajustez le cadre : Faites glisser la photo dans la zone visible et utilisez le zoom pour plus de précision.",
        "Export immédiat : Cliquez sur télécharger pour obtenir votre image prête à publier.",
      ],
    },
    {
      type: 'title',
      text: 'Confidentialité et Traitement Local',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Votre confidentialité est absolue. Ce redimensionneur traite les images localement dans votre navigateur via l'API Canvas. Vos photos ne sont jamais téléchargées sur un serveur externe, garantissant une sécurité totale et une vitesse de traitement instantanée.",
    },
    {
      type: 'title',
      text: 'Optimisation Professionnelle pour les Réseaux Sociaux',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Adapter votre contenu visuel de manière professionnelle est une stratégie de croissance directe. Notre outil simplifie le flux de travail des créateurs et des community managers, garantissant que chaque post soit parfait sur n'importe quel appareil et plateforme.",
    },
  ],
  ui: {
    sidebarTitle: 'Formats Sociaux',
    uploadTitle: 'Charger une Image',
    uploadSubtitle: 'Faites glisser votre photo ici ou cliquez pour parcourir',
    btnReset: 'Réinitialiser',
    btnDownload: "Télécharger l'Image",
  },
};
