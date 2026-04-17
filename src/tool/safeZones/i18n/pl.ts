import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'strefy-bezpieczne-social';
const title = 'Social Safe Zones: Symulator wideo dla TikTok, Reels i Shorts';
const description =
  'Podglądaj swoje zdjęcia i filmy z prawdziwym interfejsem mediów społecznościowych. Upewnij się, że Twoje treści są zawsze widoczne i unikaj przypadkowego przycięcia.';

const faqData = [
  {
    question: "Czym są „strefy bezpieczne” (Safe Zones) w mediach społecznościowych?",
    answer:
      "Są to obszary ekranu, w których treść jest widoczna bez ryzyka zasłonięcia przez elementy interfejsu, takie jak nazwa użytkownika, opis, przyciski interakcji (polubienie, udostępnienie) lub automatyczne przycięcia stosowane przez niektóre urządzenia.",
  },
  {
    question: 'Dlaczego mój film na TikTok wygląda na przycięty od góry i od dołu?',
    answer:
      "TikTok używa proporcji 16:9. Jeśli Twój film jest szerszy, aplikacja powiększy go, aby wypełnić ekran, co spowoduje przycięcie. Ponadto dolny interfejs zasłania część filmu, więc ważne elementy powinny być wyśrodkowane.",
  },
  {
    question: 'Czy strefa bezpieczna jest taka sama dla Instagram Reels i YouTube Shorts?',
    answer:
      "Są bardzo podobne, ale nie identyczne. Przyciski YouTube Shorts są umieszczone inaczej niż w Reels. Nasze narzędzie pozwala przełączać się między platformami, aby zweryfikować projekt na każdej z nich.",
  },
  {
    question: 'Co się stanie, jeśli umieszczę tekst w prawym dolnym rogu?',
    answer:
      "Prawdopodobnie będzie on niewidoczny lub bardzo trudny do odczytania, ponieważ tam znajdują się ikony profilu, serca i komentarzy. Idealnie jest trzymać teksty i twarze w środkowo-górnej strefie (Safe Zone).",
  },
];

const howToData = [
  {
    name: 'Wczytaj zdjęcie lub film',
    text: "Prześlij plik, który chcesz podejrzeć. Przetwarzanie odbywa się lokalnie i prywatnie — nic nie jest wysyłane do Internetu.",
  },
  {
    name: 'Wybierz platformę',
    text: "Wybierz TikTok, Instagram Reels lub YouTube Shorts, aby aktywować odpowiednią nakładkę interfejsu.",
  },
  {
    name: 'Sprawdź czytelność',
    text: "Zweryfikuj, czy teksty, napisy lub kluczowe elementy marki nie są zasłonięte przez ikony sieci społecznościowej.",
  },
  {
    name: 'Dostosuj i eksportuj',
    text: "Jeśli coś jest ukryte, przesuń element w oryginalnym edytorze wideo i testuj ponownie, aż wszystko będzie idealnie pasować.",
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Oficjalna dokumentacja platformy',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Video optimization and safe zones',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Najlepsze praktyki dla Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'Pomoc YouTube: Tworzenie YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Strefy bezpieczne i proporcje wideo',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mistrzowski Przewodnik po Strefach Bezpiecznych: Optymalizuj swoje Reels, TikToki i Shortsy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "W nasyconym świecie treści pionowych pierwsze wrażenie ma charakter techniczny. Największym błędem twórców jest ignorowanie faktu, jak ich <strong>film lub zdjęcie</strong> współgra z natywnym interfejsem platformy. Każda sieć społecznościowa (TikTok, Instagram Reels i YouTube Shorts) nakłada warstwy przycisków, tekstu i profili, które mogą zniweczyć wizualny efekt Twojej kompozycji.",
    },
    {
      type: 'paragraph',
      html: "To narzędzie pozwala wczytać pliki multimedialne i podejrzeć dokładnie, które części kadru zostaną pochłonięte przez interfejs. Nie chodzi tylko o <strong>napisy</strong>; chodzi o upewnienie się, że twarze, produkty lub główne akcje w Twoim filmie nie zostaną pogrzebane pod przyciskiem „Lubię to” lub długim opisem.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: Najbardziej inwazyjny interfejs',
          html: "<p>TikTok posiada najbardziej zagęszczony interfejs. Po prawej stronie znajduje się kolumna ikon zajmująca około 15% szerokości. Na dole opis może rozciągać się na 4 lub 5 linii, zakrywając od dołu prawie jedną trzecią ekranu.</p><ul><li><strong>Dolny margines:</strong> Pozostaw ostatnie 250px wolne, aby uniknąć tekstu opisu i nazwy użytkownika.</li><li><strong>Prawy margines:</strong> Unikaj umieszczania tekstu w odległości mniejszej niż 100px od prawej krawędzi.</li><li><strong>Góra:</strong> Przyciski „Obserwujesz” i „Dla Ciebie” zajmują górny środkowy pas.</li></ul>",
        },
        {
          type: 'card',
          title: 'IG Reels: Czynnik feedu',
          html: "<p>W przeciwieństwie do TikToka, Instagram Reels przycina wideo do formatu 4:5, gdy jest ono przeglądane w głównym feedzie. Oznacza to, że jeśli umieścisz istotne informacje w górnych lub dolnych 15% swojego wideo 9:16, znikną one w feedzie.</p><ul><li><strong>Zasada 4:5:</strong> Trzymaj tytuły i kluczowe elementy w strefie centralnej dla widoczności w feedzie.</li><li><strong>Interfejs:</strong> Ikony Reels są subtelniejsze niż na TikToku, co pozwala na nieco większy margines boczny.</li><li><strong>Przycisk audio:</strong> Znajduje się w prawym dolnym rogu, zazwyczaj zasłania znacznie mniej niż obracająca się płyta na TikToku.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Pilnuj prawej strony',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "YouTube Shorts ma asymetryczny interfejs. Przycisk subskrypcji jest bardzo widoczny i ma jednolity kolor (zazwyczaj czarny lub biały), co tworzy ważną wizualną martwą strefę w prawym dolnym rogu.",
    },
    {
      type: 'list',
      items: [
        '<strong>Prawy margines:</strong> Unikaj umieszczania tekstu lub ważnych elementów w prawym dolnym obszarze 20%.',
        '<strong>Dolny margines:</strong> Pozostaw ostatnie 150px wolne, aby uniknąć tekstu opisu i nazwy użytkownika.',
        '<strong>Góra:</strong> Przyciski „Subskrybuj” i inne zajmują górny środkowy pas.',
      ],
    },
    {
      type: 'title',
      text: 'Kluczowe pytania dotyczące projektowania pionowego',
      level: 2,
    },
    {
      type: 'title',
      text: 'Gdzie umieścić kluczowe elementy (twarze, tekst, produkt)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '„Złota Strefa” dla głównej akcji to środkowa jedna trzecia filmu. Jeśli filmujesz osobę, upewnij się, że jej oczy i usta znajdują się w tej strefie. Ważne elementy graficzne powinny być nieco przesunięte w górę od geometrycznego środka, aby uniknąć dolnego opisu.',
    },
    {
      type: 'title',
      text: 'Dlaczego mój film po przesłaniu wydaje się niewyraźny?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Często nie chodzi o jakość, ale o skalowanie. Zawsze nagrywaj w rozdzielczości 1080x1920 przy 30 lub 60 kl./s. Unikaj 4K, jeśli stosujesz wiele ciężkich efektów, ponieważ platformy agresywnie kompresują duże pliki.",
    },
    {
      type: 'title',
      text: 'A co z ramkami telefonu?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Pamiętaj, że nowoczesne telefony mają wcięcia (notche) lub otwory na aparat w ekranie. To narzędzie zawiera górny margines bezpieczeństwa, aby Twoje treści nie kolidowały z zegarem ani ikonami systemowymi (bateria, sygnał).",
    },
    {
      type: 'title',
      text: 'Anatomia wiralowego wideo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Projektowanie dla mediów społecznościowych to nie tylko estetyka — to <strong>użyteczność</strong>. Jeśli użytkownik musi walczyć o przeczytanie tekstu, ponieważ ikony platformy go zasłaniają, po prostu przejdzie do następnego filmu. Retencja (Watch Time) gwałtownie spada, gdy pojawia się wizualne tarcie.",
    },
    {
      type: 'paragraph',
      html: "Na przykład na YouTube Shorts interfejs jest asymetryczny. Przycisk subskrypcji jest bardzo wyraźny. Korzystając z tego symulatora, możesz dostosować nieprzezroczystość, aby zrozumieć, jak Twoja paleta kolorów współgra z natywnymi kolorami interfejsu użytkownika.",
    },
    {
      type: 'tip',
      title: 'Narzędzie Kreatywnej Kontroli Jakości',
      html: '<p>Zaprojektowane dla twórców, którzy niczego nie zostawiają przypadkowi.</p>',
    },
  ],
  ui: {
    labelConfig: 'Ustawienia',
    labelPlatform: 'Platforma docelowa',
    labelUpload: 'Prześlij treść',
    uploadPrompt: 'Wybierz zdjęcie lub film',
    uploadLink: 'Lub użyj przykładu',
    loadContent: 'Wczytaj swoją treść',
    labelOpacity: 'Widoczność interfejsu',
    labelMask: 'Zaciemnij strefy krytyczne',
    labelGrid: 'Reguła trójpodziału',
    btnReset: 'Resetuj płótno',
    bannerTiktok: 'Symulacja TikTok 9:16',
    bannerReels: 'Symulacja Instagram Reels 9:16',
    bannerShorts: 'Symulacja YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Obserwujesz',
    ttForYou: 'Dla Ciebie',
    ttDescription: 'Prawdziwy projekt interfejsu dla twórców treści. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Oryginalny dźwięk',
    ttNavHome: 'Główna',
    ttNavFriends: 'Znajomi',
    ttNavInbox: 'Skrzynka',
    ttNavProfile: 'Profil',
    reelsFollow: 'Obserwuj',
    reelsDescription: 'Ten interfejs jest identyczny z prawdziwym. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Oryginalny dźwięk',
    shortsSubscribe: 'SUBSKRYBUJ',
    shortsDislike: 'Nie podoba mi się',
    shortsShare: 'Udostępnij',
    shortsRemix: 'Remiks',
    shortsDescription: 'Symulacja prawdziwych interfejsów dla Shorts! #youtube #shorts',
  },
};
