import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'kalkulator-wartosci-konta-social-media';
const title = 'Kalkulator wartości konta social media: Cennik TikTok i Instagram';
const description =
  'Dowiedz się, ile brać za posty sponsorowane. Nasz kalkulator analizuje liczbę obserwujących, zaangażowanie i niszę, aby podać Ci uczciwą wartość rynkową.';

const faqData = [
  {
    question: 'Czy kalkulator wartości konta jest darmowy?',
    answer:
      'Tak, nasze narzędzie jest w 100% darmowe i nie wymaga rejestracji ani łączenia się z Twoimi kontami w mediach społecznościowych. Wystarczy wpisać swoje publiczne statystyki.',
  },
  {
    question: 'Dlaczego wartość na TikToku różni się od Instagrama?',
    answer:
      'TikTok opiera się głównie na zasięgu algorytmicznym i wyświetleniach, podczas gdy Instagram nadal kładzie duży nacisk na wielkość społeczności i lojalność obserwujących.',
  },
  {
    question: 'Jaki wskaźnik zaangażowania pozwala na wyższe stawki?',
    answer:
      'Ogólnie zaangażowanie powyżej 3% uważa się za zdrowe. Konta z zaangażowaniem ponad 10% są uznawane za "profile premium" i mogą żądać znacznej dopłaty.',
  },
  {
    question: 'Czy nisza naprawdę aż tak wpływa na cenę?',
    answer:
      'Zdecydowanie. Obserwator zainteresowany finansami lub oprogramowaniem dla firm ma znacznie wyższą wartość konwersji dla marki niż osoba szukająca szybkiej rozrywki lub memów.',
  },
];

const howToData = [
  {
    name: 'Wybierz platformę',
    text: 'Wybierz, czy chcesz obliczyć wartość konta na TikToku czy Instagramie.',
  },
  {
    name: 'Wpisz swoje dane',
    text: 'Podaj liczbę obserwujących oraz średnią liczbę wyświetleń i polubień z Twoich ostatnich 10 postów.',
  },
  {
    name: 'Wybierz niszę',
    text: 'Wybierz kategorię, która najlepiej opisuje Twoje treści, aby dostosować wartość do popytu rynkowego.',
  },
  {
    name: 'Otrzymaj wycenę',
    text: 'Otrzymaj szacunkowy zakres stawek, jakie powinieneś stosować przy profesjonalnych współpracach.',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i badania rynku',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Stawki influencerów 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: Raport zaangażowania TikTok i Instagram',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Statystyki mediów społecznościowych',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'Z tego przewodnika dowiesz się',
      html: '<ul><li>Jaka jest Twoja <strong>realna wartość rynkowa</strong> według danych na rok 2026.</li><li>Jak odróżnić wpływ <strong>TikToka od Instagrama</strong>.</li><li>Jak Twoja <strong>nisza</strong> drastycznie wpływa na wskaźnik CPM.</li><li>Profesjonalny szablon do <strong>negocjacji z markami</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Kalkulator wartości konta: Ile brać za post sponsorowany na TikToku lub Instagramie?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli jesteś twórcą treści, influencerem lub po prostu masz aktywną społeczność w mediach społecznościowych, pewnie nie raz zastanawiałeś się: <strong>ile faktycznie warte jest moje konto?</strong> lub <strong>ile powinienem krzyknąć za współpracę z marką?</strong>.',
    },
    {
      type: 'title',
      text: 'Rozkwit ekonomii twórców (Creator Economy)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Influencer marketing dojrzał i nie chodzi już tylko o liczbę obserwujących. Marki szukają wyników i głębokiej relacji. Nasze narzędzie stanowi solidny punkt wyjścia oparty na realnych danych rynkowych.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Roczny wzrost inwestycji w Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Średni wskaźnik zaangażowania uznawany za zdrowy</p>',
        },
        {
          type: 'card',
          title: '60zł–200zł',
          html: '<p>Średni CPM w niszach o wysokiej wartości (stabilny)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Czynniki określające wartość Twojego konta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W przeciwieństwie do tego, co sądzono kilka lat temu, liczba obserwujących to tylko wierzchołek góry lodowej. Oto kluczowe składowe:',
    },
    {
      type: 'title',
      text: '1. Wskaźnik zaangażowania (Engagement Rate)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To najważniejsza metryka. Mierzy, jaki procent Twojej społeczności aktywnie wchodzi w interakcję z treściami. Małe konto z wysoką interakcją jest znacznie cenniejsze niż wielkie konto "widmo".',
    },
    {
      type: 'tip',
      title: 'Wskazówka dotycząca zaangażowania',
      html: '<p>Staraj się odpowiadać na komentarze w ciągu pierwszych godzin od publikacji, aby wysyłać pozytywne sygnały do algorytmu.</p>',
    },
    {
      type: 'title',
      text: '2. Średni zasięg',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Na TikToku zasięg jest zmienny ze względu na algorytm rekomendacji. Na Instagramie Rolki zyskały na znaczeniu kosztem statycznych zdjęć w docieraniu do nowej widowni.",
    },
    {
      type: 'title',
      text: '3. Nisza lub Kategoria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nie każda widownia jest warta tyle samo. Twórca z branży tech lub finansowej może żądać znacznie wyższych stawek niż twórca ogólnej rozrywki, ze względu na większą wartość klienta końcowego.',
    },
    {
      type: 'title',
      text: 'Najlepiej płatne kategorie (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finanse i Biznes:</strong> Najlepiej płatna nisza za post.',
        '<strong>Technologia i Gadżety:</strong> Wysoka skłonność do natychmiastowego zakupu.',
        '<strong>Zdrowie i Fitness:</strong> Duży rynek sprzętu i aplikacji.',
        '<strong>Renowacja Domu:</strong> Wysokie koszty projektów i duży ROI.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Gdzie są pieniądze?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mimo że obie platformy stawiają na wideo pionowe, ich modele monetyzacji się różnią. Instagram to branding, TikTok to czysta efektywność (performance).',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Skupienie na brandingu, estetyce i lojalności. Idealny dla długofalowych kampanii.</p><ul><li>Ceni wielkość społeczności</li><li>Stories ze sprzedażą bezpośrednią</li><li>Stabilny wzrost</li><li>Dojrzalsza widownia</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Kraina ekstremalnej wiralowości. Algorytm ważniejszy niż followersi. Ekspresowy zwrot z inwestycji.</p><ul><li>Ceni masowy zasięg</li><li>Potencjał wiralowy</li><li>Niskie koszty produkcji</li><li>Bardzo aktywna widownia</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak wykorzystać wyniki do negocjacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Weź zakres cenowy z naszego narzędzia i potraktuj go jako bazę. Zaprezentuj swoje statystyki z pewnością siebie, korzystając z tego szablonu:',
    },
    {
      type: 'tip',
      title: 'Szablon negocjacyjny',
      html: '<p>Cześć [Nazwa Marki], dziękuję za kontakt. Biorąc pod uwagę moje obecne zasięgi (średnio [X] wyświetleń) oraz wskaźnik zaangażowania na poziomie [X]%, moja stawka za lokowanie w [Rolce/TikToku] wynosi [Cena zł]. Obejmuje to: przygotowanie scenariusza i produkcję wideo, link w bio na 24h, 2 Stories promocyjne, prawa do wykorzystania przez 30 dni.</p>',
    },
    {
      type: 'title',
      text: 'Strategie na podniesienie stawek',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Buduj interakcję:</strong> Odpowiadaj na każdy komentarz.',
        '<strong>Podnieś jakość:</strong> Dźwięk to 50% dobrego filmu.',
        '<strong>Specjalizuj się:</strong> Bycie "ekspertem" pozwala brać więcej.',
        '<strong>Stwórz Media Kit:</strong> Dokumentuj swoje sukcesy danymi.',
      ],
    },
    {
      type: 'title',
      text: 'Czy szacunkowa wartość jest wiarygodna?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator wykorzystuje dane zagregowane z międzynarodowych agencji. Jednak czynniki takie jak sezonowość (kampanie świąteczne płacą więcej) mogą wpłynąć na ostateczną cenę.',
    },
    {
      type: 'tip',
      title: 'Notka dla twórców',
      html: '<p>To narzędzie podaje szacunki. Zawsze dostosowuj cenę do poziomu trudności materiału, o który prosi marka.</p>',
    },
  ],
  ui: {
    sectionTag: 'Parametry audytu',
    labelFollowers: 'Społeczność (Followersi)',
    labelAvgViewsTiktok: 'Impakt (Widoki na film)',
    labelAvgViewsIg: 'Zasięg (Zasięg profilu)',
    tooltipViews: 'Zsumuj wyświetlenia z ostatnich 10 filmów i podziel przez 10.',
    labelEngagement: 'Lojalność (Lajki + Komentarze)',
    tooltipEngagement: 'Suma lajków i komentarzy z ostatnich 10 postów podzielona przez 10.',
    labelNiche: 'Branża (Vertical)',
    nicheEntertainment: 'Rozrywka',
    nicheFinance: 'Finanse i Nieruchomości',
    nicheTech: 'Technologia i SaaS',
    nicheFitness: 'Lifestyle i Zdrowie',
    nicheFashion: 'Moda i Uroda',
    nicheTravel: 'Turystyka i Podróże',
    nicheFood: 'Kuchnia i Gastronomia',
    nicheGaming: 'Gaming i eSport',
    nicheHome: 'Dom i Wnętrza',
    btnCalculate: 'Generuj raport wartości',
    emptyTitle: 'Analiza potencjału komercyjnego',
    emptyDesc: 'Wpisz dane profilu, aby oszacować aktualną wartość rynkową.',
    roiLabel: 'Ocena sugerowanej stawki',
    rangeLabel: 'Sugerowany zakres:',
    audienceQuality: 'Jakość widowni',
    metricER: 'Wskaźnik zaangażowania',
    investmentEfficiency: 'Efektywność inwestycji',
    metricCPM: 'Prognozowany CPM',
    insightText: 'Wycena oparta na średnim CPM rynku polskiego (2026).',
    currencySymbol: 'zł',
    numberLocale: 'pl-PL',
  },
};
