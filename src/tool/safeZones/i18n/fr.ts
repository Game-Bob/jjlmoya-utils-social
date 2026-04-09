import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'simulateur-reseaux';
const title = 'Safe Zones Réseaux Sociaux : Simulateur Vidéo TikTok, Reels et Shorts';
const description =
  'Prévisualisez vos images et vidéos avec la vraie interface des réseaux sociaux. Assurez-vous que votre contenu est toujours visible et évitez les recadrages accidentels.';

const faqData = [
  {
    question: "Que sont les 'Safe Zones' sur les réseaux sociaux ?",
    answer:
      "Ce sont les zones de l'écran où le contenu est visible sans risque d'être recouvert par des éléments d'interface, tels que le nom d'utilisateur, la description, les boutons d'interaction ou le recadrage automatique.",
  },
  {
    question: 'Pourquoi ma vidéo TikTok est-elle coupée en haut et en bas ?',
    answer:
      "TikTok utilise un format 9:16. Si votre vidéo est plus large, l'application fera un zoom pour remplir l'écran, provoquant des recadrages. De plus, l'interface inférieure couvre une partie de la vidéo, les éléments importants doivent donc être centrés.",
  },
  {
    question: "La zone sécurisée est-elle la même pour Instagram Reels et YouTube Shorts ?",
    answer:
      "Elles sont très similaires mais pas identiques. Les boutons de YouTube Shorts sont positionnés différemment de ceux de Reels. Notre outil permet de basculer entre les plateformes pour vérifier votre design sur chacune d'elles.",
  },
  {
    question: "Que se passe-t-il si je place du texte dans le coin inférieur droit ?",
    answer:
      "Il sera probablement invisible ou très difficile à lire, car c'est là que se trouvent les icônes de profil, cœur et commentaires. Il est idéal de garder les textes et visages dans la zone centrale-supérieure (Safe Zone).",
  },
];

const howToData = [
  {
    name: 'Charger votre image ou vidéo',
    text: "Téléchargez le fichier que vous souhaitez prévisualiser. Le traitement est local et privé — rien n'est envoyé sur internet.",
  },
  {
    name: 'Sélectionner la plateforme',
    text: "Choisissez entre TikTok, Instagram Reels ou YouTube Shorts pour activer l'overlay d'interface correspondant.",
  },
  {
    name: 'Vérifier la lisibilité',
    text: "Vérifiez si les textes, sous-titres ou éléments clés de votre marque sont couverts par les icônes du réseau social.",
  },
  {
    name: 'Ajuster et exporter',
    text: "Si quelque chose est caché, déplacez l'élément dans votre éditeur vidéo original et retestez jusqu'à ce que ce soit parfait.",
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Documentation Officielle des Plateformes',
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
      text: 'Guide Maître des Zones Sécurisées : Optimisez vos Reels, TikToks et Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans le monde saturé du contenu vertical, la première impression est technique. La plus grande erreur des créateurs est d'ignorer comment leur <strong>vidéo ou image</strong> interagit avec l'interface native de la plateforme. Chaque réseau social (TikTok, Instagram Reels et YouTube Shorts) superpose des couches de boutons, de textes et de profils qui peuvent annuler l'impact visuel de votre composition.",
    },
    {
      type: 'paragraph',
      html: "Cet outil vous permet de charger vos fichiers multimédias et de prévisualiser exactement quelles parties de votre cadrage seront absorbées par l'interface. Il ne s'agit pas seulement des <strong>sous-titres</strong> ; il s'agit de s'assurer que les visages, les produits ou les actions principales de votre vidéo ne se retrouvent pas enfouis sous un bouton \"J'aime\" ou une description interminable.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: "TikTok : L'interface la plus invasive",
          html: "<p>TikTok possède l'interface la plus dense. Sur la droite, une colonne d'icônes occupe environ 15% de la largeur. En bas, la description peut s'étendre sur 4 ou 5 lignes si elle est longue, couvrant presque un tiers de l'écran depuis le bas.</p><ul><li><strong>Marge inférieure :</strong> Laissez libres les 250 derniers pixels pour éviter le texte de la description et le nom d'utilisateur.</li><li><strong>Marge droite :</strong> Évitez de placer du texte à moins de 100px du bord droit.</li><li><strong>Haut :</strong> Les boutons « Abonnements » et « Pour toi » occupent la bande supérieure centrale.</li></ul>",
        },
        {
          type: 'card',
          title: 'IG Reels : Le facteur du fil',
          html: "<p>Contrairement à TikTok, Instagram Reels recadre la vidéo au format 4:5 lorsqu'elle est visualisée depuis le fil principal (pas depuis l'onglet Reels). Cela signifie que si vous placez des informations vitales dans les 15% supérieurs ou inférieurs de votre vidéo 9:16, elles disparaîtront dans le fil.</p><ul><li><strong>La règle du 4:5 :</strong> Gardez les titres et éléments clés dans la zone centrale pour assurer la visibilité dans le fil.</li><li><strong>Interface :</strong> Les icônes de Reels sont plus subtiles que celles de TikTok, permettant un peu plus de marge latérale.</li><li><strong>Bouton audio :</strong> Situé en bas à droite, il couvre généralement bien moins que le disque tournant de TikTok.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts : Attention à la droite',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "YouTube Shorts a une interface asymétrique. Le bouton d'abonnement est très proéminent et de couleur unie (généralement noir ou blanc), ce qui crée un point aveugle visuel important en bas à droite.",
    },
    {
      type: 'list',
      items: [
        '<strong>Marge droite :</strong> Évitez de placer du texte ou des éléments importants dans les 20% inférieurs droits.',
        "<strong>Marge inférieure :</strong> Laissez libres les 150 derniers pixels pour éviter le texte de la description et le nom d'utilisateur.",
        "<strong>Haut :</strong> Les boutons « S'abonner » et « Plus » occupent la bande supérieure centrale.",
      ],
    },
    {
      type: 'title',
      text: 'Questions Critiques sur le Design Vertical',
      level: 2,
    },
    {
      type: 'title',
      text: 'Où placer les éléments clés (visages, texte, produit) ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La « Zone d\'Or » pour l\'action principale est le tiers central de la vidéo. Si vous filmez une personne, assurez-vous que ses yeux et sa bouche se trouvent dans cette zone. Les éléments graphiques importants doivent être légèrement décalés vers le haut par rapport au centre géométrique pour éviter la description inférieure.',
    },
    {
      type: 'title',
      text: 'Pourquoi ma vidéo est-elle floue une fois uploadée ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Ce n'est souvent pas la qualité, mais le redimensionnement. Filmez toujours en 1080x1920 à 30 ou 60 fps. Évitez le 4K si vous appliquez de nombreux effets lourds, car les plateformes compressent agressivement les fichiers volumineux.",
    },
    {
      type: 'title',
      text: 'Que se passe-t-il avec les bords des téléphones ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rappelez-vous que les téléphones modernes ont des « encoches » ou des trous de caméra à l\'écran. Cet outil inclut une marge de sécurité supérieure pour que votre contenu n\'entre pas en conflit avec l\'horloge ou les icônes système (batterie, signal).',
    },
    {
      type: 'title',
      text: "Anatomie d'une Vidéo Virale",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Concevoir pour les réseaux sociaux n'est pas seulement esthétique — c'est de l'<strong>utilisabilité</strong>. Si un utilisateur doit faire un effort pour lire un texte parce que les icônes de la plateforme le couvrent, il passera simplement à la vidéo suivante. La rétention (Watch Time) chute brutalement en cas de friction visuelle.",
    },
    {
      type: 'paragraph',
      html: "Sur YouTube Shorts, par exemple, l'interface est asymétrique. Le bouton d'abonnement est très proéminent et de couleur unie (généralement noir ou blanc), ce qui crée un point aveugle visuel important. En utilisant ce simulateur, vous pouvez ajuster l'opacité pour comprendre comment votre palette de couleurs interagit avec les couleurs de l'UI native.",
    },
    {
      type: 'tip',
      title: 'Outil de Contrôle Qualité Créatif',
      html: '<p>Conçu pour les créateurs qui ne laissent rien au hasard.</p>',
    },
  ],
  ui: {
    labelConfig: 'Configuration',
    labelPlatform: 'Plateforme cible',
    labelUpload: 'Charger le contenu',
    uploadPrompt: 'Sélectionner une image ou vidéo',
    uploadLink: 'Ou utiliser un exemple',
    loadContent: 'Chargez votre contenu',
    labelOpacity: "Relief d'interface",
    labelMask: 'Griser les zones critiques',
    labelGrid: 'Règle des tiers',
    btnReset: 'Réinitialiser le canvas',
    bannerTiktok: 'Simulation TikTok 9:16',
    bannerReels: 'Simulation Instagram Reels 9:16',
    bannerShorts: 'Simulation YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Abonnements',
    ttForYou: 'Pour toi',
    ttDescription: 'Design d\'interfaces réelles pour créateurs de contenu. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Son Original',
    ttNavHome: 'Accueil',
    ttNavFriends: 'Amis',
    ttNavInbox: 'Boîte',
    ttNavProfile: 'Profil',
    reelsFollow: 'Suivre',
    reelsDescription: 'Cette interface est identique à la vraie. #reels #ux #simulateur',
    reelsAudio: 'Musique Tendance - Audio Original',
    shortsSubscribe: "S'ABONNER",
    shortsDislike: 'Je n\'aime pas',
    shortsShare: 'Partager',
    shortsRemix: 'Remix',
    shortsDescription: 'Simulation d\'interfaces réelles pour Shorts ! #youtube #shorts',
  },
};
