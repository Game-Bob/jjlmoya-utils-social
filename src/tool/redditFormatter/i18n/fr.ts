import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'formateur-reddit';
const title = "Formateur Reddit - Nettoyeur et Adaptateur de Texte";
const description =
  "Nettoyeur avancé de texte pour publier sur Reddit. Corrige les sauts de ligne manquants, supprime les espaces multiples et les caractères cachés qui cassent le Markdown.";

const faqData = [
  {
    question: "Pourquoi mon texte sur Reddit perd-il ses sauts de ligne ?",
    answer:
      "Reddit utilise Markdown, qui requiert d'appuyer deux fois sur Espace en fin de ligne avant d'appuyer sur Entrée pour un saut normal, ou d'appuyer deux fois sur Entrée pour créer un nouveau paragraphe. Notre outil gère cela automatiquement en insérant des doubles sauts de ligne.",
  },
  {
    question: "Que sont les caractères cachés ou invisibles ?",
    answer:
      "Lors d'une copie depuis des traitements de texte complexes, des marqueurs de format de largeur nulle s'attachent souvent au texte. Ces éléments sont invisibles sur le web normal mais peuvent casser l'écosystème Markdown.",
  },
  {
    question: "Est-il sûr d'utiliser ce nettoyeur de texte ?",
    answer:
      "Complètement sûr. Le script s'exécute entièrement côté client (dans votre propre navigateur). Vos textes ne sont jamais envoyés à un serveur et personne d'autre n'aura accès à ce que vous collez ici.",
  },
  {
    question: "Puis-je l'utiliser pour Twitter ou d'autres réseaux ?",
    answer:
      "Oui, en plus de corriger les publications Reddit, supprimer les espaces multiples et les caractères étranges est utile pour toute publication sur des blogs, Twitter, d'anciens forums phpBB ou toute autre plateforme sociale où vous avez besoin d'un texte neutre et très propre.",
  },
];

const howToData = [
  {
    name: "Collez votre texte",
    text: "Copiez votre texte depuis Word, Google Docs ou toute autre source et collez-le dans le champ de saisie.",
  },
  {
    name: "Choisissez les options",
    text: "Activez ou désactivez les options selon vos besoins : corriger les paragraphes, supprimer les espaces ou nettoyer les caractères cachés.",
  },
  {
    name: "Vérifiez le résultat",
    text: "Le texte propre apparaît en temps réel dans le champ de sortie, prêt à être publié.",
  },
  {
    name: "Copiez et publiez",
    text: 'Cliquez sur "Copier le Texte" et collez-le directement sur Reddit ou dans n\'importe quel forum.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
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
      text: "L'Outil de Mise en Forme Ultime pour Reddit et les Forums Web",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Créer des publications sur Reddit ou sur toute plateforme qui repose sur Markdown peut être frustrant. Un problème courant lors du copier-coller de texte depuis des traitements de texte complexes ou des pages web est l'altération des sauts de ligne. Lors de l'envoi du contenu, il devient souvent un bloc solide difficile à lire, ignorant la structure originale des paragraphes. Notre outil de mise en forme résout ce problème à la racine.",
    },
    {
      type: 'title',
      text: 'Comment fonctionne le nettoyeur de texte Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le moteur de traitement applique plusieurs filtres sur votre texte en temps réel. Premièrement, il s'occupe des sauts de ligne. Reddit requiert un format spécifique où un saut de paragraphe nécessite deux nouvelles lignes dans le code source Markdown. Le nettoyeur analyse votre texte et convertit automatiquement les sauts de ligne simples en doubles sauts, en conservant intacts les paragraphes existants pour éviter les espaces excessifs.",
    },
    {
      type: 'paragraph',
      html: "Deuxièmement, l'outil supprime les caractères invisibles et les espaces multiples. Lors de la copie de texte depuis des sites web, il est courant d'entraîner des caractères sans largeur qui cassent le formatage ou provoquent des comportements étranges dans les forums. Le nettoyeur purge ces éléments web intrusifs et normalise les espaces répétés en un seul espace propre. En option, vous pouvez extraire et supprimer tous les hyperliens bruts de votre contenu pour publier un texte complètement neutre.",
    },
    {
      type: 'title',
      text: "Avantages d'utiliser un nettoyeur de texte spécialisé",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Lisibilité Optimisée :</strong> Garantit que vos lecteurs sur Reddit voient un texte correctement structuré plutôt qu'un bloc intimidant.",
        "<strong>Gain de Temps :</strong> Oubliez d'appuyer sur Entrée des centaines de fois pour corriger un formatage cassé. Collez votre contenu et copiez-le prêt en moins d'une seconde.",
        '<strong>Suppression des Métadonnées et Parasites Web :</strong> Protège votre publication des styles étranges ou des ruptures causées par les espaces sans largeur.',
        "<strong>Haute Confidentialité :</strong> Tout le traitement est côté client. Le texte ne quitte jamais votre navigateur ni n'est stocké sur des serveurs externes.",
      ],
    },
    {
      type: 'title',
      text: 'Le Problème avec les Traitements de Texte et Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Des applications comme Microsoft Word ou Google Docs ajoutent une couche invisible de formatage riche sur leur texte. Lorsque vous copiez et collez ce contenu directement dans l'éditeur basique ou le mode Markdown de Reddit, le formatage riche disparaît et ce qui reste est souvent une amalgame sans structure. Reddit utilise une variante de Markdown assez stricte. Si vous n'êtes pas familier avec la syntaxe Reddit ou si vous souhaitez simplement un processus plus fluide pour transférer des essais ou des histoires vers le forum, nettoyer le texte ici en premier empêche votre publication de recevoir des votes négatifs simplement parce qu'elle est impossible à lire confortablement.",
    },
    {
      type: 'title',
      text: 'Bonnes Pratiques pour Publier dans les Forums',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Un formatage correct est vital pour générer du débat et maintenir l'attention de la communauté. Les publications avec des lignes très longues ou des paragraphes inexistants sont souvent abandonnées après les premières phrases. Utilisez cet outil de nettoyage pour établir les bases structurelles. Ensuite, ajoutez du formatage comme le gras et l'italique de manière stratégique dans l'éditeur Reddit lui-même pour mettre en valeur les idées clés. Pensez toujours à vérifier l'aperçu et à profiter des listes structurées pour énumérer les points importants ou les guides détaillés.",
    },
    {
      type: 'title',
      text: 'Exemple de Transformation',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Avant et après le formateur',
      html: "<p><strong>Texte original collé :</strong></p><pre>Bonjour c'est la première ligne\net celle-ci était censée être la deuxième\nmais sur Reddit tout s'affiche ensemble si vous le collez.</pre><p><strong>Texte formaté :</strong></p><pre>Bonjour c'est la première ligne\n\net celle-ci était censée être la deuxième\n\nmais sur Reddit tout s'affiche ensemble si vous le collez.</pre>",
    },
    {
      type: 'title',
      text: 'Questions Fréquentes sur le Formateur de Texte Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Trouver les bonnes réponses sur la façon d'interagir avec les règles éditoriales de Reddit n'est pas toujours évident. Consultez la section FAQ où nous répondons aux principales questions sur les formats valides et comment éviter d'être pénalisé pour des blocs de texte massifs.",
    },
  ],
  ui: {
    labelInput: 'Texte Original',
    placeholderInput: 'Collez votre texte original ici...',
    labelOptions: 'Options de Formatage',
    optionParagraphs: 'Corriger les paragraphes style Reddit',
    optionSpaces: 'Supprimer les espaces multiples',
    optionInvisible: 'Nettoyer les caractères web cachés',
    optionLinks: 'Extraire les URLs (Texte uniquement)',
    labelOutput: 'Texte Propre',
    placeholderOutput: 'Le résultat du nettoyage apparaîtra ici...',
    btnCopy: 'Copier le Texte',
    btnCopied: 'Copié',
  },
};
