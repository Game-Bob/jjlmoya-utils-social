import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'formater-tekstu-reddit';
const title = 'Formater Tekstu Reddit: Czyszczenie i Naprawa Markdown';
const description =
  'Zaawansowane narzędzie do czyszczenia tekstu przed publikacją na Reddit. Naprawia brakujące podziały wierszy, usuwa wielokrotne spacje i ukryte znaki rwijące strukturę Markdown.';

const faqData = [
  {
    question: 'Dlaczego mój tekst na Reddit traci podziały linii?',
    answer:
      'Reddit używa Markdown, który wymaga postawienia dwóch spacji na końcu linii przed naciśnięciem Enter w celu uzyskania normalnego podziału lub dwukrotnego naciśnięcia Enter, aby utworzyć nowy akapit. Nasze narzędzie obsługuje to automatycznie, wstawiając podwójne podziały linii.',
  },
  {
    question: 'Co to są ukryte lub niewidoczne znaki?',
    answer:
      'Podczas kopiowania z rozbudowanych edytorów tekstu często dołączane są znaczniki formatowania o zerowej szerokości. Elementy te są niewidoczne na normalnych stronach internetowych, ale mogą psuć ekosystem Markdown.',
  },
  {
    question: 'Czy używanie tego narzędzia jest bezpieczne?',
    answer:
      'Całkowicie bezpieczne. Skrypt działa wyłącznie po stronie klienta (w Twojej przeglądarce). Twój tekst nigdy nie jest wysyłany na żaden serwer i nikt inny nie będzie miał dostępu do tego, co tutaj wklejasz.',
  },
  {
    question: 'Czy mogę używać tego do Twittera lub innych sieci?',
    answer:
      'Tak, oprócz poprawiania postów na Reddit, usuwanie wielokrotnych spacji i dziwnych znaków jest przydatne przy każdej publikacji na blogach, Twitterze, starych forach phpBB lub dowolnej innej platformie społecznościowej, gdzie potrzebujesz czystego, neutralnego tekstu.',
  },
];

const howToData = [
  {
    name: 'Wklej swój tekst',
    text: 'Skopiuj tekst z Worda, Google Docs lub dowolnego źródła i wklej go w pole wejściowe.',
  },
  {
    name: 'Wybierz opcje',
    text: 'Włącz lub wyłącz opcje w zależności od potrzeb: poprawianie akapitów, usuwanie spacji lub czyszczenie ukrytych znaków.',
  },
  {
    name: 'Sprawdź wynik',
    text: 'Czysty tekst pojawia się w czasie rzeczywistym w polu wynikowym, gotowy do publikacji.',
  },
  {
    name: 'Skopiuj i opublikuj',
    text: 'Kliknij „Kopiuj tekst” i wklej go bezpośrednio na Reddit lub dowolne forum.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'Pomoc Reddit: Formatowanie tekstu w postach i komentarzach',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Przewodnik po Markdown na Reddit',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Najlepsze narzędzie do formatowania dla Reddit i forów internetowych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tworzenie postów na Reddit lub dowolnej platformie opierającej się na Markdown może być frustrujące. Typowym problemem przy kopiowaniu i wklejaniu tekstu z rozbudowanych edytorów tekstu lub stron internetowych jest zmiana podziałów wierszy. Po przesłaniu treści często staje się ona zwartym, trudnym do odczytania blokiem, ignorującym oryginalną strukturę akapitów. Nasze narzędzie do formatowania rozwiązuje ten problem u źródła.',
    },
    {
      type: 'title',
      text: 'Jak działa czyścik tekstu Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Silnik przetwarzający uruchamia kilka filtrów na Twoim tekście w czasie rzeczywistym. Po pierwsze, zajmuje się podziałami linii. Reddit wymaga określonego formatu, w którym przerwa między akapitami wymaga dwóch nowych linii w kodzie źródłowym Markdown. Czyścik analizuje Twój tekst i automatycznie konwertuje pojedyncze podziały linii na podwójne, pozostawiając istniejące akapity nienaruszone, aby uniknąć generowania nadmiernych odstępów.',
    },
    {
      type: 'paragraph',
      html: 'Po drugie, narzędzie usuwa niewidoczne znaki i wielokrotne spacje. Podczas kopiowania tekstu ze stron internetowych często „przeciąga się” znaki o zerowej szerokości, które psują formatowanie lub powodują dziwne zachowanie na forach. Czyścik usuwa te intruzywne elementy i normalizuje powtarzające się spacje do pojedynczej, czystej spacji. Opcjonalnie możesz usunąć wszystkie surowe hiperłącza ze swojej treści, aby opublikować całkowicie neutralny tekst.',
    },
    {
      type: 'title',
      text: 'Korzyści z używania specjalistycznego czyścika tekstu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zoptymalizowana czytelność:</strong> Gwarantuje, że Twoi czytelnicy na Reddit zobaczą poprawnie ustrukturyzowany tekst zamiast onieśmielającej ściany słów.',
        '<strong>Oszczędność czasu:</strong> Zapomnij o setkach naciśnięć klawisza Enter w celu naprawy błędnego formatowania. Wklej swoją treść i skopiuj gotową w mniej niż sekundę.',
        '<strong>Usuwanie metadanych i śmieci internetowych:</strong> Chroni Twój post przed dziwnymi stylami lub pęknięciami spowodowanymi przez spacje o zerowej szerokości.',
        '<strong>Wysoka prywatność:</strong> Całe przetwarzanie odbywa się po stronie klienta. Tekst nigdy nie opuszcza Twojej przeglądarki ani nie jest przechowywany na zewnętrznych serwerach.',
      ],
    },
    {
      type: 'title',
      text: 'Problem z edytorami tekstu i Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aplikacje takie jak Microsoft Word czy Google Docs dodają niewidoczną warstwę bogatego formatowania do tekstu. Gdy kopiujesz i wklejasz tę treść bezpośrednio do podstawowego edytora lub trybu Markdown na Reddit, bogate formatowanie znika, a to, co pozostaje, to często bezkształtna mieszanina. Reddit używa dość rygorystycznego wariantu Markdown. Jeśli nie znasz składni Reddit lub po prostu chcesz usprawnić proces przenoszenia esejów lub opowiadań na forum, wcześniejsze wyczyszczenie tekstu tutaj zapobiega otrzymywaniu przez Twój post „downvote’ów” tylko dlatego, że nie da się go wygodnie przeczytać.',
    },
    {
      type: 'title',
      text: 'Najlepsze praktyki publikowania na forach',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prawidłowe formatowanie jest kluczowe dla generowania dyskusji i utrzymania uwagi społeczności. Posty z bardzo długimi liniami lub nieistniejącymi akapitami są często porzucane po kilku pierwszych zdaniach. Użyj tego narzędzia do czyszczenia, aby położyć fundamenty strukturalne. Następnie strategicznie dodaj formatowanie, takie jak pogrubienie i kursywa, w samym edytorze Reddit, aby podkreślić kluczowe idee. Zawsze sprawdzaj podgląd i korzystaj ze struktur list, aby wyliczyć ważne punkty lub szczegółowe przewodniki.',
    },
    {
      type: 'title',
      text: 'Przykład transformacji',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Przed i po formaterze',
      html: '<p><strong>Oryginalny wklejony tekst:</strong></p><pre>Cześć, to jest pierwsza linia\na to miała być druga linia\nale na Reddit wszystko się zlewa po wklejeniu.</pre><p><strong>Sformatowany tekst:</strong></p><pre>Cześć, to jest pierwsza linia\n\na to miała być druga linia\n\nale na Reddit wszystko się zlewa po wklejeniu.</pre>',
    },
    {
      type: 'title',
      text: 'Często zadawane pytania dotyczące formatera tekstu Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Znalezienie właściwych odpowiedzi na temat interakcji z zasadami redakcyjnymi Reddit nie zawsze jest oczywiste. Sprawdź sekcję FAQ, w której omawiamy główne pytania dotyczące poprawnych formatów i sposobów unikania kar za potężne „ściany tekstu”.',
    },
  ],
  ui: {
    labelInput: 'Oryginalny tekst',
    placeholderInput: 'Wklej tutaj swój oryginalny tekst...',
    labelOptions: 'Opcje formatowania',
    optionParagraphs: 'Napraw akapity w stylu Reddit',
    optionSpaces: 'Usuń wielokrotne spacje',
    optionInvisible: 'Wyczyść ukryte znaki internetowe',
    optionLinks: 'Wyodrębnij adresy URL (tylko tekst)',
    labelOutput: 'Czysty tekst',
    placeholderOutput: 'Wynik czyszczenia pojawi się tutaj...',
    btnCopy: 'Kopiuj tekst',
    btnCopied: 'Skopiowano',
  },
};
