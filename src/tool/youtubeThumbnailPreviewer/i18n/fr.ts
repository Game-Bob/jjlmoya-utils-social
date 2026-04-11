import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'apercu-miniatures-youtube';
const title = 'Aperçu des Miniatures YouTube en Ligne : Améliorez votre CTR Gratuitement';
const description =
  'Téléchargez votre miniature et visualisez comment elle apparaît dans le vrai feed YouTube mobile et desktop. Simulateur mode sombre et clair pour optimiser les clics instantanément.';

const faqData = [
  {
    question: 'Pourquoi est-il important de tester les miniatures YouTube ?',
    answer:
      "La plupart des utilisateurs regardent YouTube sur des appareils mobiles. Une miniature qui s'affiche bien sur votre moniteur peut être illisible sur un petit écran. La tester dans un simulateur garantit que le texte est clair et que le sujet principal ressort à n'importe quelle taille.",
  },
  {
    question: 'Dois-je m\'inscrire pour utiliser cet outil ?',
    answer:
      "Non. Notre outil est 100% gratuit et fonctionne directement dans votre navigateur. Vous n'avez pas besoin de créer un compte ni de laisser votre adresse e-mail pour optimiser vos miniatures.",
  },
  {
    question: 'Mes designs sont-ils téléchargés sur votre serveur ?',
    answer:
      "Absolument pas. La confidentialité est notre priorité absolue. Lorsque vous sélectionnez un fichier, il est chargé localement dans la mémoire de votre navigateur via une URL temporaire. Personne sauf vous ne peut voir le design que vous testez.",
  },
  {
    question: 'Comment cet outil aide-t-il à améliorer mon CTR ?',
    answer:
      "Le CTR (taux de clics) est le pourcentage de personnes qui cliquent en voyant votre miniature. En simulant l'environnement réel (fond noir vs blanc, mobile vs PC), vous pouvez corriger les erreurs de contraste et de composition avant de publier, augmentant ainsi vos clics.",
  },
  {
    question: 'Fonctionne-t-il avec le mode sombre officiel de YouTube ?',
    answer:
      "Oui. Nous avons inclus un sélecteur de thèmes (Clair et Sombre) qui imite exactement les couleurs hexadécimales utilisées par l'application officielle YouTube dans les deux modes.",
  },
];

const howToData = [
  {
    name: 'Téléchargez votre design',
    text: "Cliquez sur la zone de dépôt ou faites glisser votre fichier image (PNG, JPG ou WebP) directement dans l'outil.",
  },
  {
    name: 'Définissez le contexte',
    text: 'Tapez le titre de votre vidéo et le nom de votre chaîne pour que la simulation soit aussi réaliste que possible.',
  },
  {
    name: "Changez d'appareil",
    text: "Alternez entre la vue 'Desktop' et 'Mobile' pour vérifier la lisibilité sur des écrans de différentes tailles.",
  },
  {
    name: 'Testez le contraste',
    text: "Activez le thème 'Sombre' pour vérifier si les couleurs ressortent correctement sur le fond noir de YouTube.",
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
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
      text: 'Aperçu des Miniatures YouTube : Maîtrisez le CTR de votre Chaîne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans l'écosystème YouTube, la miniature (ou thumbnail) est la porte d'entrée de votre contenu. Vous pouvez avoir la meilleure vidéo du monde, avec un montage Hollywood et un scénario digne d'un Oscar, mais si personne ne clique, votre travail sera invisible pour l'algorithme. C'est là qu'intervient le <strong>CTR (taux de clics)</strong>, et la miniature est le facteur déterminant.",
    },
    {
      type: 'title',
      text: 'Pourquoi tester vos miniatures avant de les publier',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Aperçu Réel :</strong> Voyez votre miniature telle qu\'elle apparaîtra dans le feed YouTube.',
        '<strong>Mode Sombre et Clair :</strong> Assurez-vous que les couleurs ressortent dans n\'importe quelle configuration utilisateur.',
        '<strong>Simulateur d\'Appareils :</strong> Vérifiez la lisibilité du texte sur les moniteurs et les petits mobiles.',
        '<strong>Optimisation du CTR :</strong> Comparez votre design avec l\'interface native pour maximiser les clics.',
        '<strong>Sans Inscription :</strong> Téléchargez votre image et testez-la instantanément sans créer de compte.',
        '<strong>Confidentialité Garantie :</strong> Vos designs sont traités localement et ne sont jamais envoyés vers des serveurs.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Beaucoup de créateurs font l\'erreur de concevoir leurs miniatures sur de grands moniteurs, en les voyant en plein écran dans leurs éditeurs favoris. Le problème est que l\'utilisateur final les voit rarement ainsi. La plupart les consomment sur un appareil mobile en faisant défiler infiniment, ou dans un coin du moniteur en mode sombre. Notre <strong>Aperçu de Miniatures YouTube</strong> vous permet de briser cette "illusion du designer" et de voir la réalité chirurgicale du feed.',
    },
    {
      type: 'title',
      text: 'Métriques Techniques et Performance',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 s', body: 'Temps de Réponse' },
        { title: '4K', body: 'Résolution Maximale' },
        { title: '100%', body: 'Confidentialité Locale' },
        { title: 'HD', body: 'Qualité Native' },
      ],
    },
    {
      type: 'title',
      text: 'La Psychologie du Clic : Pourquoi les miniatures échouent-elles ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le cerveau humain traite les images des milliers de fois plus vite que le texte. Pourtant, sur YouTube, la concurrence est brutale. Votre miniature ne doit pas seulement être "jolie", elle doit être <strong>lisible</strong> et avoir du <strong>contraste</strong>.',
    },
    {
      type: 'paragraph',
      html: "Une erreur courante est d'utiliser des couleurs qui se fondent dans le fond de YouTube. Si vous utilisez des gris foncés et que votre spectateur est en mode sombre, votre vidéo disparaîtra simplement de sa vision périphérique. En utilisant ce testeur, vous pouvez alterner entre les thèmes et vous assurer que votre design \"pop\" (ressort) dans n'importe quel scénario.",
    },
    {
      type: 'title',
      text: 'Comparaison Directe : Design vs. Réalité',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Vaut-il la peine de passer 30 secondes à tester la miniature ? La réponse est un OUI catégorique. Une miniature optimisée peut doubler vos vues dans les premières 24 heures, ce qui indique à l'IA de YouTube que votre contenu a de l'\"accroche\".",
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Conception dans Photoshop / Canva',
          body: "Fausse impression de taille réelle · Ignore le contraste avec le fond de l'App · Le texte semble lisible mais peut ne pas l'être · Vous ne voyez pas les éléments de l'UI (durée, avatars)",
        },
        {
          title: 'Aperçu de Miniatures YouTube',
          body: 'Vue réelle dans le feed principal (Home) · Contraste vérifié en mode sombre vs clair · Lisibilité du texte garantie sur mobile · Simulation des titres et noms de chaîne',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist pour une Miniature avec un CTR Supérieur à 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Avant d\'exporter votre design final, assurez-vous de parcourir cette liste de contrôle avec notre simulateur professionnel :',
    },
    {
      type: 'list',
      items: [
        'Le texte est-il lisible sur un petit écran de mobile ?',
        "Y a-t-il suffisamment de contraste entre le fond et le sujet principal ?",
        'La miniature est-elle belle sur le fond noir du Mode Sombre ?',
        'Le titre de la vidéo cache-t-il des informations vitales de l\'image ?',
        'La durée de la vidéo (le petit carré noir) cache-t-elle quelque chose d\'important ?',
        'Le visage ou l\'objet principal transmet-il l\'émotion souhaitée à taille réduite ?',
      ],
    },
    {
      type: 'title',
      text: "Anatomie d'une Miniature à Fort Impact",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "D'après l'analyse des plus grandes chaînes du monde, une miniature gagnante suit généralement ce schéma structurel :",
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Sujet Principal',
          body: "Foyer d'attention primaire · Utilisez des découpes nettes avec un léger bord ou une saturation supplémentaire.",
        },
        {
          title: 'Texte (Max 3 mots)',
          body: 'Contexte instantané · Utilisez des polices Sans Serif grasses et des couleurs complémentaires.',
        },
        {
          title: 'Fond Flou',
          body: 'Séparation des plans · Ajoute de la profondeur pour que le sujet principal "saute" de l\'écran.',
        },
        {
          title: 'Espace de Durée',
          body: "Éviter les erreurs · Ne placez pas de visages ou de texte dans le coin inférieur droit.",
        },
      ],
    },
    {
      type: 'tip',
      title: 'L\'Astuce de la Zone Morte',
      html: "<p>YouTube place toujours un encadré noir avec la durée de la vidéo dans le coin inférieur droit de la miniature. Des milliers de créateurs mettent des éléments vitaux dans cette zone, pour découvrir ensuite que l'App les couvre. Notre outil simule cet encadré pour que vous ne couvriez jamais votre meilleur plan.</p>",
    },
    {
      type: 'title',
      text: "Avantages et Limites de l'Outil",
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Interface ultra rapide et réactive',
          body: "Limitation : Ne permet pas l'édition d'image (utiliser Canva/PS)",
        },
        {
          title: 'Maquettes exactes de l\'App et du Web',
          body: 'Limitation : Ne simule pas les publicités Pre-roll',
        },
        {
          title: 'Gratuit et sans publicité intrusive',
          body: 'Limitation : Prend uniquement en charge les fichiers locaux',
        },
      ],
    },
    {
      type: 'title',
      text: "Utilisation du Mode 'Split' (Comparaison Directe)",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "C'est la fonction phare. En activant le mode Split, vous verrez votre miniature sous le prisme du Mode Clair et du Mode Sombre simultanément. C'est la façon définitive de vérifier si votre palette de couleurs est universelle ou si elle nécessite des ajustements de luminosité et de contraste.",
    },
    {
      type: 'title',
      text: 'Confidentialité : Vos Designs ne sont pas Téléchargés dans le Cloud',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Nous savons que vos miniatures font partie de votre stratégie secrète avant un lancement. C'est pourquoi nous avons conçu cet outil pour qu'il fonctionne exclusivement dans le moteur de votre navigateur. <strong>Rien n'est envoyé sur internet</strong>. Le fichier que vous sélectionnez est chargé via une URL locale temporaire qui disparaît lorsque vous fermez l'onglet. Votre propriété intellectuelle est 100% sous votre contrôle.",
    },
    {
      type: 'title',
      text: 'Conclusion : Le Pixel Parfait Garanti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Arrêtez de deviner et commencez à valider. L'<strong>Aperçu de Miniatures YouTube</strong> de JJLMoya est l'outil gratuit qui sépare les créateurs amateurs des professionnels du contenu. Un petit ajustement dans la taille d'une police ou dans la position du sujet peut faire la différence entre une vidéo qui passe inaperçue et un succès viral.",
    },
    {
      type: 'paragraph',
      html: 'Commencez à optimiser votre chaîne maintenant et donnez à vos vidéos le taux de clics qu\'elles méritent !',
    },
  ],
  ui: {
    dropFeedTitle: 'Déposez votre Miniature',
    dropFeedSub: 'PNG, JPG ou WebP · Images multiples',
    dropAvatarTitle: 'Déposez votre Avatar',
    dropAvatarSub: 'Photo de profil de la chaîne',
    labelTitle: 'Titre de la vidéo',
    labelChannel: 'Nom de la chaîne',
    defaultTitle: 'Votre Titre de Vidéo Ici',
    defaultChannel: 'Nom de la Chaîne',
    btnDesktop: 'Ordinateur',
    btnMobile: 'Mobile',
    btnClear: 'Effacer',
    labelLight: 'Clair',
    labelDark: 'Sombre',
    views0: '1,2 M de vues · il y a 1 heure',
    views1: 'Il y a 45 minutes',
    views2: '250 000 vues · il y a 1 jour',
    views3: '3,1 M de vues · il y a 1 semaine',
  },
};
