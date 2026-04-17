import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-tekst-formateerder';
const title = 'Reddit Tekst Formateerder: Cleaner en Markdown Fixer';
const description =
  'Geavanceerde teksthersteller voor publicaties op Reddit. Herstelt ontbrekende regelafbrekingen, verwijdert dubbele spaties en verborgen tekens die Markdown verstoren.';

const faqData = [
  {
    question: 'Waarom verdwijnen de regeleinden in mijn tekst op Reddit?',
    answer:
      'Reddit gebruikt Markdown. Dit vereist dat u een dubbele spatie aan het einde van een regel typt voordat u op Enter drukt voor een normale regelafbreking, of dat u twee keer op Enter drukt om een nieuwe paragraaf te maken. Onze tool regelt dit automatisch door dubbele regeleinden in te voegen.',
  },
  {
    question: 'Wat zijn verborgen of onzichtbare tekens?',
    answer:
      'Bij het kopiëren uit complexe tekstverwerkers worden vaak onzichtbare opmaaksymbolen (zero-width markers) meegekopieerd. Deze elementen zijn onzichtbaar op normale webpagina\'s, maar kunnen het Markdown-systeem verstoren.',
  },
  {
    question: 'Is het veilig om deze tekst cleaner te gebruiken?',
    answer:
      'Volledig veilig. Het script draait volledig aan de client-side (in uw eigen browser). Uw tekst wordt nooit naar een server verzonden en niemand anders heeft toegang tot wat u hier plakt.',
  },
  {
    question: 'Kan ik dit ook voor Twitter of andere netwerken gebruiken?',
    answer:
      'Ja, naast het herstellen van Reddit-posts is het verwijderen van overtollige spaties en vreemde tekens nuttig voor elke publicatie op blogs, Twitter, oude phpBB-forums of elk ander social platform waar u schone, neutrale tekst nodig heeft.',
  },
];

const howToData = [
  {
    name: 'Plak uw tekst',
    text: 'Kopieer uw tekst uit Word, Google Docs of een andere bron en plak deze in het invoerveld.',
  },
  {
    name: 'Kies de opties',
    text: 'Schakel opties in of uit afhankelijk van wat u nodig heeft: herstel paragrafen, verwijder spaties of verwijder verborgen tekens.',
  },
  {
    name: 'Controleer het resultaat',
    text: 'De opgeschoonde tekst verschijnt direct in het uitvoerveld, klaar om te publiceren.',
  },
  {
    name: 'Kopieer en plaats',
    text: 'Klik op "Tekst Kopiëren" en plak het direct in Reddit of een forum.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    {
      name: 'Reddit Help: Tekst opmaken in berichten en reacties',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown gids',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De Ultieme Opmakingstool voor Reddit en Webfora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het plaatsen van berichten op Reddit of een ander platform dat gebruikmaakt van Markdown kan frustrerend zijn. Een veelvoorkomend probleem bij het kopiëren en plakken van tekst uit complexe tekstverwerkers of webpagina\'s is dat regeleinden worden gewijzigd. Wanneer u de inhoud plaatst, wordt het vaak een massief, onleesbaar blok tekst waarbij de originele alineastructuur verloren gaat. Onze formateerder lost dit probleem bij de bron op.',
    },
    {
      type: 'title',
      text: 'Hoe de Reddit Tekst Cleaner Werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het systeem voert in realtime meerdere filters uit op uw tekst. Ten eerste worden de regeleinden aangepakt. Reddit vereist een specifiek formaat waarbij een alinea-onderbreking twee nieuwe regels in de Markdown-broncode nodig heeft. De cleaner analyseert uw tekst en zet enkele regeleinden automatisch om in dubbele regeleinden, terwijl bestaande alinea\'s intact blijven om overmatige witruimte te voorkomen.',
    },
    {
      type: 'paragraph',
      html: 'Ten tweede verwijdert de tool onzichtbare tekens en dubbele spaties. Bij het kopiëren van tekst van websites worden vaak zero-width tekens meegenomen die de opmaak verstoren of vreemd gedrag op fora veroorzaken. De cleaner verwijdert deze storende webelementen en normaliseert herhaalde spaties naar één enkele spatie. Optioneel kunt u alle rauwe hyperlinks uit uw inhoud verwijderen om volledig neutrale tekst te plaatsen.',
    },
    {
      type: 'title',
      text: 'Voordelen van een Gespecialiseerde Tekst Cleaner',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Geoptimaliseerde Leesbaarheid:</strong> Zorgt ervoor dat uw lezers op Reddit goed gestructureerde tekst zien in plaats van een ontmoedigende muur van woorden.',
        '<strong>Tijdbesparing:</strong> Vergeet het honderden keren op Enter drukken om kapotte opmaak te herstellen. Plak uw inhoud en kopieer het resultaat binnen een seconde.',
        '<strong>Verwijdering van Metadata en Web-rommel:</strong> Beschermt uw bericht tegen vreemde stijlen of verspringingen veroorzaakt door zero-width spaties.',
        '<strong>Hoge Privacy:</strong> Alle verwerking vindt plaats in uw browser. De tekst verlaat nooit uw apparaat en wordt niet opgeslagen op externe servers.',
      ],
    },
    {
      type: 'title',
      text: 'Het Probleem met Tekstverwerkers en Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Programma\'s zoals Microsoft Word of Google Docs voegen een onzichtbare laag rijke opmaak toe aan hun tekst. Wanneer u die inhoud direct kopieert en plakt in de basis-editor of Markdown-modus van Reddit, verdwijnt die rijke opmaak en blijft er vaak een structuurloze massa over. Reddit gebruikt een vrij strikte variant van Markdown. Als u niet bekend bent met de syntaxis van Reddit of gewoon een soepeler proces wilt bij het overzetten van teksten naar het forum, voorkomt het vooraf opschonen van de tekst dat uw bericht downvotes krijgt omdat het simpelweg onleesbaar is.',
    },
    {
      type: 'title',
      text: 'Best Practices voor Posten op Fora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Correcte opmaak is essentieel voor het uitlokken van discussie en het vasthouden van de aandacht van de community. Berichten met zeer lange regels of ontbrekende alinea\'s worden vaak na de eerste paar zinnen afgehaakt. Gebruik deze tool om de structurele basis te leggen. Voeg vervolgens strategisch opmaak toe zoals vetgedrukt en cursief binnen de Reddit-editor zelf om kernideeën te markeren. Controleer altijd het voorbeeld en maak gebruik van lijsten om belangrijke punten of details te benadrukken.',
    },
    {
      type: 'title',
      text: 'Voorbeeld van Transformatie',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Vóór en na de formateerder',
      html: '<p><strong>Originele geplakte tekst:</strong></p><pre>Hallo dit is de eerste regel\nen dit zou de tweede moeten zijn\nmaar op Reddit loopt alles door elkaar als je het plakt.</pre><p><strong>Geformatteerde tekst:</strong></p><pre>Hallo dit is de eerste regel\n\nen dit zou de tweede moeten zijn\n\nmaar op Reddit loopt alles door elkaar als je het plakt.</pre>',
    },
    {
      type: 'title',
      text: 'Veelgestelde vragen over de Reddit Tekst Formateerder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het vinden van de juiste antwoorden over de opmaakregels van Reddit is niet altijd eenvoudig. Bekijk de FAQ-sectie waar we de belangrijkste vragen beantwoorden over geldige formaten en hoe u kunt voorkomen dat uw bericht wordt genegeerd door te lange stukken tekst.',
    },
  ],
  ui: {
    labelInput: 'Originele Tekst',
    placeholderInput: 'Plak hier uw originele tekst...',
    labelOptions: 'Opmaakopties',
    optionParagraphs: 'Herstel Reddit-stijl Alinea\'s',
    optionSpaces: 'Verwijder dubbele spaties',
    optionInvisible: 'Verwijder verborgen webelementen',
    optionLinks: 'Extraheer URL\'s (Alleen tekst)',
    labelOutput: 'Schone Tekst',
    placeholderOutput: 'Het resultaat verschijnt hier...',
    btnCopy: 'Tekst Kopiëren',
    btnCopied: 'Gekopieerd',
  },
};
