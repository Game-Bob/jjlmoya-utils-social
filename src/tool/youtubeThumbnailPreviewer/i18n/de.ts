import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-thumbnail-vorschau';
const title = 'YouTube Thumbnail Vorschau Online: CTR kostenlos verbessern';
const description =
  'Laden Sie Ihr Thumbnail hoch und sehen Sie, wie es im echten YouTube-Feed auf dem Handy und Desktop aussieht. Simulator für Dark und Light Mode zur sofortigen Klick-Optimierung.';

const faqData = [
  {
    question: 'Warum ist es wichtig, YouTube-Thumbnails zu testen?',
    answer:
      'Die meisten Nutzer schauen YouTube auf mobilen Geräten. Ein Thumbnail, das auf Ihrem Monitor großartig aussieht, kann auf einem kleinen Bildschirm unleserlich sein. Der Test in einem Simulator stellt sicher, dass der Text klar ist und das Hauptmotiv in jeder Größe hervorsticht.',
  },
  {
    question: 'Muss ich mich registrieren, um diesen Previewer zu nutzen?',
    answer:
      'Nein. Unser Tool ist zu 100 % kostenlos und funktioniert direkt in Ihrem Browser. Sie müssen kein Konto erstellen oder Ihre E-Mail-Adresse angeben, um Ihre Thumbnails zu optimieren.',
  },
  {
    question: 'Werden meine Designs auf euren Server hochgeladen?',
    answer:
      'Absolut nicht. Privatsphäre ist unsere oberste Priorität. Wenn Sie eine Datei auswählen, wird diese lokal im Speicher Ihres Browsers über eine temporäre URL geladen. Niemand außer Ihnen kann das Design sehen, das Sie gerade testen.',
  },
  {
    question: 'Wie hilft dieses Tool, meine CTR zu verbessern?',
    answer:
      'Die CTR (Click-Through-Rate) ist der Prozentsatz der Personen, die klicken, wenn sie Ihr Thumbnail sehen. Durch die Simulation der realen Umgebung (dunkler vs. heller Hintergrund, Handy vs. Desktop) können Sie Kontrast- und Kompositionsprobleme vor der Veröffentlichung beheben und so Ihre Klicks steigern.',
  },
  {
    question: 'Funktioniert es mit dem offiziellen Dark Mode von YouTube?',
    answer:
      'Ja. Wir haben einen Theme-Selector (Hell und Dunkel) integriert, der exakt die Hex-Farben imitiert, die von der offiziellen YouTube-App in beiden Modi verwendet werden.',
  },
];

const howToData = [
  {
    name: 'Design hochladen',
    text: 'Klicken Sie auf den Upload-Bereich oder ziehen Sie Ihre Bilddatei (PNG, JPG oder WebP) direkt in das Tool.',
  },
  {
    name: 'Kontext festlegen',
    text: 'Geben Sie Ihren Videotitel und Kanalnamen ein, damit die Simulation im Vergleich zum echten Feed so realistisch wie möglich ist.',
  },
  {
    name: 'Gerät wechseln',
    text: 'Schalten Sie zwischen der Desktop- und Mobilansicht um, um die Lesbarkeit auf Bildschirmen unterschiedlicher Größe zu prüfen.',
  },
  {
    name: 'Kontrast testen',
    text: 'Aktivieren Sie das dunkle Design, um zu prüfen, ob die Farben vor dem schwarzen YouTube-Hintergrund korrekt hervorstechen.',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    {
      name: 'YouTube-Hilfe: Eigene Video-Thumbnails erstellen',
      url: 'https://support.google.com/youtube/answer/141805',
    },
    {
      name: 'Nielsen Norman Group: Visuelle Verarbeitung und UX-Design',
      url: 'https://www.nngroup.com/articles/visual-processing/',
    },
    {
      name: 'Derral Eves: Die YouTube-Formel (Thumbnail-Strategie)',
      url: 'https://derraleves.com/the-youtube-formula/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'YouTube Thumbnail Vorschau: Meistern Sie die CTR Ihres Kanals',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im YouTube-Ökosystem ist das Thumbnail das Tor zu Ihrem Inhalt. Sie können das beste Video der Welt haben – Schnitt auf Hollywood-Niveau, ein oscarreifes Skript –, aber wenn niemand klickt, bleibt Ihre Arbeit für den Algorithmus unsichtbar. Hier kommt die <strong>CTR (Click-Through-Rate)</strong> ins Spiel, und das Thumbnail ist der entscheidende Faktor.',
    },
    {
      type: 'title',
      text: 'Warum Sie Thumbnails vor dem Hochladen testen müssen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Echte Vorschau:</strong> Sehen Sie Ihr Thumbnail exakt so, wie es im YouTube-Feed erscheinen wird.',
        '<strong>Dark und Light Mode:</strong> Stellen Sie sicher, dass die Farben bei jeder Benutzereinstellung hervorstechen.',
        '<strong>Gerätesimulator:</strong> Prüfen Sie die Lesbarkeit von Texten sowohl auf Monitoren als auch auf kleinen Handybildschirmen.',
        '<strong>CTR-Optimierung:</strong> Vergleichen Sie Ihr Design mit der nativen Benutzeroberfläche, um Klicks zu maximieren.',
        '<strong>Keine Registrierung erforderlich:</strong> Laden Sie Ihr Bild hoch und testen Sie es sofort, ohne ein Konto zu erstellen.',
        '<strong>Privatsphäre garantiert:</strong> Ihre Designs werden lokal verarbeitet und niemals auf Server hochgeladen.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Viele Creator machen den Fehler, Thumbnails auf großen Monitoren zu entwerfen und sie in ihren bevorzugten Editoren im Vollbildmodus zu betrachten. Das Problem ist, dass der Endnutzer sie selten so sieht. Die meisten konsumieren Inhalte auf einem mobilen Gerät beim endlosen Scrollen oder in einer Ecke des Monitors im Dark Mode. Unser <strong>YouTube Thumbnail Previewer</strong> ermöglicht es Ihnen, diese „Designer-Illusion“ zu durchbrechen und die chirurgische Realität des Feeds zu sehen.',
    },
    {
      type: 'title',
      text: 'Technische Metriken und Leistung',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2s', body: 'Reaktionszeit' },
        { title: '4K', body: 'Maximale Auflösung' },
        { title: '100%', body: 'Lokale Privatsphäre' },
        { title: 'HD', body: 'Native Qualität' },
      ],
    },
    {
      type: 'title',
      text: 'Die Psychologie des Klicks: Warum Thumbnails scheitern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das menschliche Gehirn verarbeitet Bilder tausendmal schneller als Text. Doch auf YouTube ist die Konkurrenz brutal. Ihr Thumbnail muss nicht nur „schön“ sein – es muss <strong>lesbar</strong> sein und <strong>Kontrast</strong> haben.',
    },
    {
      type: 'paragraph',
      html: 'Ein häufiger Fehler ist die Verwendung von Farben, die mit dem YouTube-Hintergrund verschmelzen. Wenn Sie dunkle Grautöne verwenden und Ihr Zuschauer im Dark Mode ist, verschwindet Ihr Video einfach aus seiner peripheren Wahrnehmung. Mit diesem Tester können Sie zwischen den Themes wechseln und sicherstellen, dass Ihr Design in jedem Szenario „auffällt“.',
    },
    {
      type: 'title',
      text: 'Direkter Vergleich: Design vs. Realität',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lohnt es sich, 30 Sekunden in das Testen des Thumbnails zu investieren? Die Antwort ist ein klares JA. Ein optimiertes Thumbnail kann Ihre Aufrufe in den ersten 24 Stunden verdoppeln und der YouTube-KI signalisieren, dass Ihr Inhalt einen „Hook“ hat.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Design in Photoshop / Canva',
          body: 'Falsches Gefühl für die reale Größe · Ignoriert den Kontrast zum App-Hintergrund · Text wirkt lesbar, ist es aber vielleicht nicht · UI-Elemente fehlen (Dauer-Badge, Avatare)',
        },
        {
          title: 'YouTube Thumbnail Previewer',
          body: 'Echte Ansicht im Home-Feed · Kontrast in Dark vs. Light Mode verifiziert · Textlesbarkeit auf dem Handy garantiert · Titel- und Kanalnamensimulation',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checkliste für ein Thumbnail mit einer CTR über 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bevor Sie Ihr endgültiges Design exportieren, sollten Sie diese Checkliste mit unserem professionellen Simulator durchgehen:',
    },
    {
      type: 'list',
      items: [
        'Ist der Text auf einem kleinen Handybildschirm lesbar?',
        'Gibt es genügend Kontrast zwischen dem Hintergrund und dem Hauptmotiv?',
        'Sieht das Thumbnail vor dem schwarzen Hintergrund des Dark Mode gut aus?',
        'Verdeckt der Videotitel wichtige Informationen im Bild?',
        'Verdeckt das Dauer-Badge (der schwarze Kasten) etwas Wichtiges?',
        'Vermittelt das Gesicht oder das Hauptobjekt bei reduzierter Größe die gewünschte Emotion?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomie eines hochwirksamen Thumbnails',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Basierend auf der Analyse der größten Kanäle der Welt folgt ein gewinnbringendes Thumbnail meist diesem strukturellen Muster:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Hauptmotiv',
          body: 'Primärer Fokus · Verwenden Sie scharfe Ausschnitte mit einem leichten Rand oder zusätzlicher Sättigung.',
        },
        {
          title: 'Text (max. 3 Wörter)',
          body: 'Sofortiger Kontext · Verwenden Sie fettgedruckte Sans-Serif-Schriftarten und Komplementärfarben.',
        },
        {
          title: 'Verschwommener Hintergrund',
          body: 'Ebenentrennung · Fügt Tiefe hinzu, sodass das Hauptmotiv aus dem Bildschirm „springt“.',
        },
        {
          title: 'Platz für die Dauer',
          body: 'Fehler vermeiden · Platzieren Sie keine Gesichter oder Texte in der unteren rechten Ecke.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Der Trick mit der „toten Zone“',
      html: '<p>YouTube platziert in der unteren rechten Ecke des Thumbnails immer einen schwarzen Kasten mit der Videodauer. Tausende Creator platzieren wichtige Elemente in dieser Zone, nur um festzustellen, dass die App sie verdeckt. Unser Tool simuliert diesen Kasten, damit Sie niemals Ihre beste Aufnahme verdecken.</p>',
    },
    {
      type: 'title',
      text: 'Vorteile und Grenzen des Tools',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ultraschnelle und reaktionsstarke Oberfläche',
          body: 'Einschränkung: Erlaubt keine Bildbearbeitung (Canva/PS nutzen)',
        },
        {
          title: 'Exakte App und Web Mockups',
          body: 'Einschränkung: Simuliert keine Pre-Roll-Anzeigen',
        },
        {
          title: 'Kostenlos und ohne aufdringliche Werbung',
          body: 'Einschränkung: Unterstützt nur lokale Dateien',
        },
      ],
    },
    {
      type: 'title',
      text: 'Nutzung des „Split“-Modus (Direkter Vergleich)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dies ist das Highlight-Feature. Durch Aktivieren des Split-Modus sehen Sie Ihr Thumbnail gleichzeitig durch die Brille des Light Mode und des Dark Mode. Dies ist der definitive Weg, um zu prüfen, ob Ihre Farbpalette universell ist oder ob Helligkeit und Kontrast angepasst werden müssen.',
    },
    {
      type: 'title',
      text: 'Privatsphäre: Ihre Designs werden nicht in die Cloud hochgeladen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wir wissen, dass Ihre Thumbnails Teil Ihrer geheimen Strategie vor einem Launch sind. Deshalb haben wir dieses Utility so konzipiert, dass es ausschließlich in Ihrer Browser-Engine arbeitet. <strong>Nichts wird ins Internet hochgeladen</strong>. Die von Ihnen ausgewählte Datei wird über eine lokale temporäre URL geladen, die verschwindet, wenn Sie den Tab schließen. Ihr geistiges Eigentum bleibt zu 100 % unter Ihrer Kontrolle.',
    },
    {
      type: 'title',
      text: 'Fazit: Der perfekte Pixel garantiert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hören Sie auf zu raten und fangen Sie an zu validieren. Der <strong>YouTube Thumbnail Previewer</strong> von JJLMoya ist das kostenlose Tool, das Amateur-Creator von professionellen Content-Machern unterscheidet. Eine kleine Anpassung der Schriftgröße oder der Motivposition kann den Unterschied zwischen einem Video, das unbemerkt bleibt, und einem viralen Erfolg ausmachen.',
    },
    {
      type: 'paragraph',
      html: 'Optimieren Sie Ihren Kanal jetzt und geben Sie Ihren Videos die Klickrate, die sie verdienen!',
    },
  ],
  ui: {
    dropFeedTitle: 'Thumbnail hierher ziehen',
    dropFeedSub: 'PNG, JPG oder WebP · Mehrere Bilder',
    dropAvatarTitle: 'Avatar hierher ziehen',
    dropAvatarSub: 'Kanalprofilbild',
    labelTitle: 'Videotitel',
    labelChannel: 'Kanalname',
    defaultTitle: 'Ihr Videotitel hier',
    defaultChannel: 'Kanalname',
    btnDesktop: 'Desktop',
    btnMobile: 'Mobil',
    btnClear: 'Leeren',
    labelLight: 'Hell',
    labelDark: 'Dunkel',
    views0: '1,2 Mio. Aufrufe · vor 1 Stunde',
    views1: 'vor 45 Minuten',
    views2: '250.000 Aufrufe · vor 1 Tag',
    views3: '3,1 Mio. Aufrufe · vor 1 Woche',
  },
};
