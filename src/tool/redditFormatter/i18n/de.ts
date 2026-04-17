import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-text-formatierer';
const title = 'Reddit Text Formatierer: Bereinigung und Markdown Fixer';
const description =
  'Fortgeschrittener Text-Cleaner für Posts auf Reddit. Korrigiert fehlende Zeilenumbrüche, entfernt mehrfache Leerzeichen und versteckte Zeichen, die Markdown stören.';

const faqData = [
  {
    question: 'Warum verliert mein Text auf Reddit seine Zeilenumbrüche?',
    answer:
      'Reddit verwendet Markdown. Das bedeutet, dass Sie am Ende einer Zeile zwei Leerzeichen eingeben müssen, bevor Sie die Eingabetaste für einen normalen Zeilenumbruch drücken, oder die Eingabetaste zweimal drücken müssen, um einen neuen Absatz zu erstellen. Unser Tool erledigt das automatisch, indem es doppelte Zeilenumbrüche einfügt.',
  },
  {
    question: 'Was sind versteckte oder unsichtbare Zeichen?',
    answer:
      'Beim Kopieren aus komplexen Textverarbeitungsprogrammen werden oft Formatierungshilfen mit einer Breite von Null angehängt. Diese Zeichen sind auf normalen Webseiten unsichtbar, können aber das Markdown-Ökosystem stören.',
  },
  {
    question: 'Ist die Verwendung dieses Text-Cleaners sicher?',
    answer:
      'Völlig sicher. Das Skript läuft vollständig clientseitig (in Ihrem eigenen Browser). Ihr Text wird niemals an einen Server gesendet, und niemand sonst hat jemals Zugriff auf das, was Sie hier einfügen.',
  },
  {
    question: 'Kann ich das auch für Twitter oder andere Netzwerke verwenden?',
    answer:
      'Ja, neben der Korrektur von Reddit-Posts ist das Entfernen von mehrfachen Leerzeichen und seltsamen Zeichen nützlich für jede Veröffentlichung in Blogs, auf Twitter, in alten phpBB-Foren oder auf jeder anderen sozialen Plattform, auf der Sie sauberen, neutralen Text benötigen.',
  },
];

const howToData = [
  {
    name: 'Text einfügen',
    text: 'Kopieren Sie Ihren Text aus Word, Google Docs oder einer anderen Quelle und fügen Sie ihn in das Eingabefeld ein.',
  },
  {
    name: 'Optionen wählen',
    text: 'Schalten Sie die Optionen je nach Bedarf ein oder aus: Absätze korrigieren, Leerzeichen entfernen oder versteckte Zeichen bereinigen.',
  },
  {
    name: 'Ergebnis prüfen',
    text: 'Der bereinigte Text erscheint in Echtzeit im Ausgabefeld und ist bereit zur Veröffentlichung.',
  },
  {
    name: 'Kopieren und posten',
    text: 'Klicken Sie auf "Text kopieren" und fügen Sie ihn direkt in Reddit oder ein beliebiges Forum ein.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    {
      name: 'Reddit Hilfe: Text in Beiträgen und Kommentaren formatieren',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown Leitfaden',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Das ultimative Formatierungs-Tool für Reddit und Webforen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beiträge auf Reddit oder einer anderen Plattform zu erstellen, die auf Markdown setzt, kann frustrierend sein. Ein häufiges Problem beim Kopieren und Einfügen von Text aus komplexen Textverarbeitungsprogrammen oder Webseiten ist, dass Zeilenumbrüche verändert werden. Wenn Sie den Inhalt absenden, wird er oft zu einem soliden, schwer lesbaren Block, der die ursprüngliche Absatzstruktur ignoriert. Unser Formatierungs-Tool löst dieses Problem an der Wurzel.',
    },
    {
      type: 'title',
      text: 'So funktioniert der Reddit Text Cleaner',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Verarbeitungs-Engine wendet in Echtzeit mehrere Filter auf Ihren Text an. Zuerst kümmert sie sich um Zeilenumbrüche. Reddit erfordert ein spezielles Format, bei dem ein Absatzumbruch zwei neue Zeilen im Markdown-Quellcode benötigt. Der Cleaner analysiert Ihren Text und wandelt einzelne Zeilenumbrüche automatisch in doppelte Umbrüche um, wobei bestehende Absätze intakt bleiben, um übermäßige Abstände zu vermeiden.',
    },
    {
      type: 'paragraph',
      html: 'Zweitens entfernt das Tool unsichtbare Zeichen und mehrfache Leerzeichen. Beim Kopieren von Text von Webseiten ist es üblich, Zeichen mit einer Breite von Null mitzuziehen, die die Formatierung stören oder seltsames Verhalten in Foren verursachen. Der Cleaner entfernt diese störenden Web-Elemente und normalisiert wiederholte Leerzeichen zu einem einzigen sauberen Leerzeichen. Optional können Sie alle rohen Hyperlinks aus Ihrem Inhalt entfernen, um einen völlig neutralen Text zu posten.',
    },
    {
      type: 'title',
      text: 'Vorteile der Verwendung eines spezialisierten Text-Cleaners',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Optimierte Lesbarkeit:</strong> Stellt sicher, dass Ihre Leser auf Reddit properly strukturierten Text sehen anstatt einer einschüchternden Textwand.',
        '<strong>Zeitersparnis:</strong> Vergessen Sie das hunderte Male Drücken der Eingabetaste, um eine fehlerhafte Formatierung zu korrigieren. Fügen Sie Ihren Inhalt ein und kopieren Sie ihn in weniger als einer Sekunde bereit.',
        '<strong>Entfernung von Metadaten und Web-Müll:</strong> Schützt Ihren Post vor seltsamen Stilen oder Brüchen, die durch Nullbreiten-Leerzeichen verursacht werden.',
        '<strong>Hoher Datenschutz:</strong> Alle Verarbeitungen finden clientseitig statt. Der Text verlässt niemals Ihren Browser und wird nicht auf externen Servern gespeichert.',
      ],
    },
    {
      type: 'title',
      text: 'Das Problem mit Textverarbeitungsprogrammen und Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Anwendungen wie Microsoft Word oder Google Docs fügen ihrem Text eine unsichtbare Ebene mit Rich-Formatting hinzu. Wenn Sie diesen Inhalt direkt in den Basis-Editor oder den Markdown-Modus von Reddit kopieren, verschwindet die Rich-Formatierung und was übrig bleibt, ist oft ein strukturloses Amalgam. Reddit verwendet eine ziemlich strikte Markdown-Variante. Wenn Sie mit der Syntax von Reddit nicht vertraut sind oder einfach einen reibungsloseren Ablauf beim Übertragen von Aufsätzen oder Geschichten in das Forum wünschen, verhindert das vorherige Bereinigen des Textes hier, dass Ihr Post Downvotes erhält, nur weil er unmöglich bequem zu lesen ist.',
    },
    {
      type: 'title',
      text: 'Best Practices für das Posten in Foren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die richtige Formatierung ist entscheidend, um Diskussionen anzuregen und die Aufmerksamkeit der Community zu halten. Posts mit sehr langen Zeilen oder nicht vorhandenen Absätzen werden oft nach den ersten Sätzen abgebrochen. Verwenden Sie dieses Reinigungs-Tool, um die strukturellen Grundlagen zu legen. Fügen Sie dann Formatierungen wie Fett- und Kursivdruck strategisch im Reddit-Editor selbst hinzu, um Schlüsselideen hervorzuheben. Überprüfen Sie immer die Vorschau und nutzen Sie strukturierte Listen, um wichtige Punkte oder detaillierte Anleitungen aufzuführen.',
    },
    {
      type: 'title',
      text: 'Transformationsbeispiel',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Vorher und nachher mit dem Formatierer',
      html: '<p><strong>Ursprünglich eingefügter Text:</strong></p><pre>Hallo, das ist die erste Zeile\nund das hier sollte eigentlich die zweite sein\naber auf Reddit läuft alles zusammen, wenn man es einfügt.</pre><p><strong>Formatierter Text:</strong></p><pre>Hallo, das ist die erste Zeile\n\nund das hier sollte eigentlich die zweite sein\n\naber auf Reddit läuft alles zusammen, wenn man es einfügt.</pre>',
    },
    {
      type: 'title',
      text: 'Häufig gestellte Fragen zum Reddit Text Formatierer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die richtigen Antworten darauf zu finden, wie man mit den Redaktionsregeln von Reddit interagiert, ist nicht immer offensichtlich. Schauen Sie in den FAQ-Bereich, wo wir die wichtigsten Fragen zu gültigen Formaten und zur Vermeidung von massiven Textwänden beantworten.',
    },
  ],
  ui: {
    labelInput: 'Originaltext',
    placeholderInput: 'Fügen Sie hier Ihren Originaltext ein...',
    labelOptions: 'Formatierungsoptionen',
    optionParagraphs: 'Reddit-Absätze korrigieren',
    optionSpaces: 'Mehrfache Leerzeichen entfernen',
    optionInvisible: 'Versteckte Web-Zeichen bereinigen',
    optionLinks: 'URLs extrahieren (nur Text)',
    labelOutput: 'Bereinigter Text',
    placeholderOutput: 'Das Ergebnis der Bereinigung erscheint hier...',
    btnCopy: 'Text kopieren',
    btnCopied: 'Kopiert',
  },
};
