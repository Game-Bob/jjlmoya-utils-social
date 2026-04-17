import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'podglad-miniaturek-youtube';
const title = 'Podgląd Miniaturek YouTube Online: Popraw swój CTR za darmo';
const description =
  'Wgraj swoją miniaturkę i zobacz, jak prezentuje się w prawdziwym kanale YouTube na urządzeniach mobilnych i komputerach. Symulator trybu ciemnego i jasnego do natychmiastowej optymalizacji kliknięć.';

const faqData = [
  {
    question: 'Dlaczego testowanie miniaturek YouTube jest kluczowe?',
    answer:
      'Większość użytkowników ogląda YouTube na urządzeniach mobilnych. Miniaturka, która wygląda świetnie na Twoim monitorze, może być nieczytelna na małym ekranie. Testowanie jej w symulatorze daje pewność, że tekst jest wyraźny, a główny motyw wyróżnia się w każdym rozmiarze.',
  },
  {
    question: 'Czy muszę się rejestrować, aby korzystać z tego podglądu?',
    answer:
      'Nie. Nasze narzędzie jest w 100% darmowe i działa bezpośrednio w przeglądarce. Nie musisz zakładać konta ani podawać adresu e-mail, aby optymalizować swoje miniaturki.',
  },
  {
    question: 'Czy moje projekty są wgrywane na wasz serwer?',
    answer:
      'Absolutnie nie. Prywatność jest naszym priorytetem. Po wybraniu pliku jest on ładowany lokalnie w pamięci Twojej przeglądarki poprzez tymczasowy adres URL. Nikt poza Tobą nie może zobaczyć projektu, który testujesz.',
  },
  {
    question: 'Jak to narzędzie pomaga poprawić mój CTR?',
    answer:
      'CTR (Click-Through Rate) to odsetek osób, które klikają po zobaczeniu miniaturki. Symulując prawdziwe środowisko (ciemne vs jasne tło, telefon vs komputer), możesz poprawić błędy w kontraście i kompozycji jeszcze przed publikacją, co zwiększy liczbę kliknięć.',
  },
  {
    question: 'Czy to działa z oficjalnym trybem ciemnym YouTube?',
    answer:
      'Tak. Dodaliśmy przełącznik motywów (Jasny i Ciemny), który dokładnie odwzorowuje kolory używane przez oficjalną aplikację YouTube w obu trybach.',
  },
];

const howToData = [
  {
    name: 'Wgraj swój projekt',
    text: 'Kliknij w obszar wgrywania lub przeciągnij plik obrazu (PNG, JPG lub WebP) bezpośrednio do narzędzia.',
  },
  {
    name: 'Ustaw kontekst',
    text: 'Wpisz tytuł swojego filmu i nazwę kanału, aby symulacja była jak najbardziej zbliżona do rzeczywistości.',
  },
  {
    name: 'Zmień urządzenie',
    text: 'Przełączaj się między widokiem na komputer i telefon, aby zweryfikować czytelność na ekranach o różnych rozmiarach.',
  },
  {
    name: 'Przetestuj kontrast',
    text: 'Włącz tryb ciemny, aby sprawdzić, czy kolory odpowiednio wyróżniają się na czarnym tle YouTube.',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i referencje',
  bibliography: [
    {
      name: 'Pomoc YouTube: Tworzenie niestandardowych miniaturek filmów',
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
      text: 'Podgląd miniaturek YouTube: Opanuj CTR swojego kanału',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W ekosystemie YouTube miniaturka to brama do Twoich treści. Możesz mieć najlepszy film na świecie — z hollywoodzkim montażem i scenariuszem godnym Oscara — ale jeśli nikt w niego nie kliknie, Twoja praca pozostanie niewidoczna dla algorytmu. To tutaj kluczową rolę odgrywa <strong>CTR (Click-Through Rate)</strong>, a miniaturka jest czynnikiem decydującym.',
    },
    {
      type: 'title',
      text: 'Dlaczego musisz testować miniaturki przed ich wgraniem',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Prawdziwy podgląd:</strong> Zobacz swoją miniaturkę dokładnie tak, jak pojawi się w kanale YouTube.',
        '<strong>Tryb jasny i ciemny:</strong> Upewnij się, że kolory współgrają z każdym ustawieniem użytkownika.',
        '<strong>Symulator urządzeń:</strong> Sprawdź czytelność tekstu zarówno na monitorach, jak i małych ekranach telefonów.',
        '<strong>Optymalizacja CTR:</strong> Porównaj swój projekt z natywnym interfejsem, aby zmaksymalizować kliknięcia.',
        '<strong>Bez rejestracji:</strong> Wgraj obraz i przetestuj go natychmiast, bez zakładania konta.',
        '<strong>Gwarancja prywatności:</strong> Twoje projekty są przetwarzane lokalnie i nigdy nie trafiają na serwery.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Wielu twórców popełnia błąd, projektując miniaturki na dużych monitorach i oglądając je w trybie pełnoekranowym w swoich ulubionych edytorach. Problem polega na tym, że użytkownik końcowy rzadko widzi je w ten sposób. Większość osób przegląda treści na telefonie podczas przewijania lub w rogu monitora w trybie ciemnym. Nasz <strong>Podgląd Miniaturek YouTube</strong> pozwala przełamać tę „iluzję projektanta” i zobaczyć surową rzeczywistość kanału.',
    },
    {
      type: 'title',
      text: 'Metryki techniczne i wydajność',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 s', body: 'Czas reakcji' },
        { title: '4K', body: 'Maksymalna rozdzielczość' },
        { title: '100%', body: 'Lokalna prywatność' },
        { title: 'HD', body: 'Jakość natywna' },
      ],
    },
    {
      type: 'title',
      text: 'Psychologia kliknięcia: Dlaczego miniaturki zawodzą?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ludzki mózg przetwarza obrazy tysiące razy szybciej niż tekst. Jednak na YouTube konkurencja jest mordercza. Twoja miniaturka nie może być tylko „ładna” — musi być <strong>czytelna</strong> i mieć <strong>kontrast</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Częstym błędem jest używanie kolorów, które zlewają się z tłem YouTube. Jeśli użyjesz ciemnych szarości, a widz korzysta z trybu ciemnego, Twój film po prostu zniknie z jego pola widzenia. Korzystając z tego testera, możesz przełączać motywy i upewnić się, że Twój projekt „podbija” (wyróżnia się) w każdych warunkach.',
    },
    {
      type: 'title',
      text: 'Bezpośrednie porównanie: Projekt vs Rzeczywistość',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Czy warto poświęcić 30 sekund na przetestowanie miniaturki? Odpowiedź brzmi: zdecydowanie TAK. Zoptymalizowana miniaturka może podwoić liczbę wyświetleń w ciągu pierwszych 24 godzin, co daje systemom AI YouTube sygnał, że Twój materiał przyciąga uwagę.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Projektowanie w Photoshopie / Canvie',
          body: 'Złudne poczucie rzeczywistego rozmiaru · Ignorowanie kontrastu z tłem aplikacji · Tekst wydaje się czytelny, choć może taki nie być · Brak widocznych elementów UI (czas trwania, awatary)',
        },
        {
          title: 'Podgląd miniaturek YouTube',
          body: 'Rzeczywisty widok w kanale głównym · Kontrast zweryfikowany w trybach Dark i Light · Gwarantowana czytelność tekstu na mobile · Symulacja tytułów i nazw kanałów',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklista dla miniaturki z CTR powyżej 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przed wyeksportowaniem ostatecznego projektu sprawdź tę listę za pomocą naszego profesjonalnego symulatora:',
    },
    {
      type: 'list',
      items: [
        'Czy tekst jest czytelny na małym ekranie telefonu?',
        'Czy jest wystarczający kontrast między tłem a głównym motywem?',
        'Czy miniaturka dobrze wygląda na czarnym tle w trybie ciemnym?',
        'Czy tytuł filmu nie zasłania ważnych informacji na obrazku?',
        'Czy znaczek czasu trwania (czarny prostokąt) nie ukrywa czegoś istotnego?',
        'Czy twarz lub główny przedmiot przekazują pożądane emocje w pomniejszeniu?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomia miniaturki o dużym wpływie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na podstawie analiz największych kanałów na świecie, zwycięska miniaturka zazwyczaj opiera się na tym wzorcu strukturalnym:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Główny motyw',
          body: 'Pierwszoplanowy punkt uwagi · Używaj ostrych wycięć z lekkim obrysem lub dodatkowym nasyceniem.',
        },
        {
          title: 'Tekst (maks. 3 słowa)',
          body: 'Błyskawiczny kontekst · Wybieraj grube czcionki bezszeryfowe i dopełniające się kolory.',
        },
        {
          title: 'Rozmyte tło',
          body: 'Separacja planów · Dodaje głębi, sprawiając, że główny motyw „wyskakuje” z ekranu.',
        },
        {
          title: 'Miejsce na czas trwania',
          body: 'Unikanie błędów · Nie umieszczaj twarzy ani tekstu w prawym dolnym rogu.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik z „martwą strefą”',
      html: '<p>YouTube zawsze umieszcza czarny prostokąt z czasem trwania filmu w prawym dolnym rogu miniaturki. Tysiące twórców umieszcza tam kluczowe elementy, po czym okazuje się, że aplikacja je zasłania. Nasze narzędzie symuluje ten prostokąt, abyś nigdy nie zasłaniał swojego najlepszego ujęcia.</p>',
    },
    {
      type: 'title',
      text: 'Zalety i ograniczenia narzędzia',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ultraszybki i responsywny interfejs',
          body: 'Ograniczenie: Brak funkcji edycji obrazu (używaj Canvy/PS)',
        },
        {
          title: 'Dokładne makiety aplikacji i strony www',
          body: 'Ograniczenie: Brak symulacji reklam Pre-roll',
        },
        {
          title: 'Darmowy i bez uciążliwych reklam',
          body: 'Ograniczenie: Obsługuje tylko pliki lokalne',
        },
      ],
    },
    {
      type: 'title',
      text: 'Korzystanie z trybu „Split” (bezpośrednie porównanie)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To nasza flagowa funkcja. Aktywując tryb Split, zobaczysz swoją miniaturkę jednocześnie w trybie jasnym i ciemnym. To ostateczny sposób na sprawdzenie, czy Twoja paleta barw jest uniwersalna, czy wymaga korekty jasności i kontrastu.',
    },
    {
      type: 'title',
      text: 'Prywatność: Twoje projekty nie są wysyłane do chmury',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wiemy, że Twoje miniaturki to część tajnej strategii przed premierą. Dlatego zaprojektowaliśmy to narzędzie tak, aby działało wyłącznie w Twojej przeglądarce. <strong>Nic nie jest wysyłane do Internetu</strong>. Wybrany plik jest ładowany przez lokalny tymczasowy adres URL, który znika po zamknięciu karty. Twoja własność intelektualna jest w 100% pod Twoją kontrolą.',
    },
    {
      type: 'title',
      text: 'Podsumowanie: Gwarancja idealnego piksela',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przestań zgadywać, zacznij sprawdzać. <strong>Podgląd Miniaturek YouTube</strong> od JJLMoya to darmowe narzędzie, które odróżnia amatorów od profesjonalistów. Mała zmiana rozmiaru czcionki lub pozycji motywu może być różnicą między filmem, który przejdzie bez echa, a wiralowym sukcesem.',
    },
    {
      type: 'paragraph',
      html: 'Zacznij optymalizować swój kanał już teraz i zapewnij swoim filmom klikalność, na jaką zasługują!',
    },
  ],
  ui: {
    dropFeedTitle: 'Przeciągnij miniaturkę',
    dropFeedSub: 'PNG, JPG lub WebP · Wiele obrazów',
    dropAvatarTitle: 'Przeciągnij awatar',
    dropAvatarSub: 'Zdjęcie profilowe kanału',
    labelTitle: 'Tytuł filmu',
    labelChannel: 'Nazwa kanału',
    defaultTitle: 'Twój tytuł filmu tutaj',
    defaultChannel: 'Nazwa kanału',
    btnDesktop: 'Komputer',
    btnMobile: 'Telefon',
    btnClear: 'Wyczyść',
    labelLight: 'Jasny',
    labelDark: 'Ciemny',
    views0: '1,2 mln wyświetleń · godzinę temu',
    views1: '45 minut temu',
    views2: '250 tys. wyświetleń · dzień temu',
    views3: '3,1 mln wyświetleń · tydzień temu',
  },
};
