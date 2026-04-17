import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'sosyal-medya-hesap-degeri-hesaplayici';
const title = 'Sosyal Medya Hesap Değeri Hesaplayıcı: TikTok ve Instagram Fiyatlandırması';
const description =
  'Sponsorlu gönderiler için ne kadar ücret almanız gerektiğini öğrenin. Hesaplayıcımız, size makul bir piyasa değeri sunmak için takipçileri, etkileşimi ve nişi analiz eder.';

const faqData = [
  {
    question: 'Hesap değeri hesaplayıcısı ücretsiz mi?',
    answer:
      'Evet, aracımız %100 ücretsizdir ve herhangi bir kayıt veya sosyal medya hesaplarınıza bağlantı gerektirmez. Sadece halka açık metriklerinizi girmeniz yeterlidir.',
  },
  {
    question: 'TikTok değeri neden Instagram\'dan farklı?',
    answer:
      'TikTok büyük ölçüde algoritmik erişime ve görüntülemelere dayanırken, Instagram hala topluluk boyutuna ve takipçi sadakatine büyük önem vermektedir.',
  },
  {
    question: 'Daha fazla ücret almak için iyi bir etkileşim oranı nedir?',
    answer:
      'Genellikle %3\'ün üzerindeki etkileşim oranı sağlıklı kabul edilir. %10\'dan fazla etkileşime sahip hesaplar "premium profiller" olarak kabul edilir ve önemli bir prim ücreti talep edebilirler.',
  },
  {
    question: 'Niş gerçekten fiyatı o kadar etkiliyor mu?',
    answer:
      'Kesinlikle. Finans veya yönetim yazılımıyla ilgilenen bir takipçinin bir marka için dönüşüm değeri, hızlı eğlence oder içerik arayan bir takipçiden çok daha yüksektir.',
  },
];

const howToData = [
  {
    name: 'Platformunuzu seçin',
    text: 'TikTok veya Instagram hesap değerini hesaplamak isteyip istemediğinizi seçin.',
  },
  {
    name: 'Metriklerinizi girin',
    text: 'Takipçi sayınızı ve son 10 gönderinizin ortalama görüntülenme ve beğeni sayılarını girin.',
  },
  {
    name: 'Nişinizi seçin',
    text: 'Piyasa talebine göre değeri ayarlamak için içeriğinizi en iyi tanımlayan kategoriyi seçin.',
  },
  {
    name: 'Bütçenizi öğrenin',
    text: 'Profesyonel bir iş birliği için ne kadar ücret almanız gerektiğine dair tahmini bir aralık alın.',
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

const howToSchema: WithContext<HowTo> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Piyasa Araştırmaları',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Ücretleri 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: TikTok ve Instagram Etkileşim Raporu',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Sosyal Medya İstatistikleri',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'Bu kılavuzda şunları öğreneceksiniz',
      html: '<ul><li>2026 verilerine dayalı <strong>gerçek piyasa değeriniz</strong>.</li><li><strong>TikTok vs Instagram</strong> etkisinin nasıl ayırt edileceği.</li><li><strong>Nişinizin</strong> CPM\'nizi nasıl dramatik bir şekilde etkilediği.</li><li>Markalarla <strong>pazarlık yapmak için profesyonel bir şablon</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Hesap Değeri Hesaplayıcı: TikTok veya Instagram\'da Sponsorlu Gönderi İçin Ne Kadar Ücret Alınmalı?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eğer bir içerik üreticisi, influencer iseniz veya sosyal medyada aktif bir topluluğunuz varsa, muhtemelen bir noktada şunu merak etmişsinizdir: <strong>Hesabım aslında ne kadar ediyor?</strong> veya <strong>Bir marka iş birliği için ne kadar istemeliyim?</strong>.',
    },
    {
      type: 'title',
      text: 'Üretici ekonomisinin yükselişi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Influencer pazarlaması olgunlaştı ve artık sadece takipçi sayısından ibaret değil. Markalar sonuç ve derin bir bağ arıyor. Aracımız, gerçek piyasa verilerine dayalı sağlam bir başlangıç noktası sunar.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+%45',
          html: '<p>Influencer Pazarlama yatırımında yıllık büyüme</p>',
        },
        {
          type: 'card',
          title: '%3.2',
          html: '<p>Sağlıklı kabul edilen ortalama etkileşim oranı</p>',
        },
        {
          type: 'card',
          title: '300₺–1000₺',
          html: '<p>Yüksek değerli nişlerde ortalama CPM (tahmini)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hesabınızın değerini belirleyen faktörler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Birkaç yıl öncesine kadar inanılanın aksine, takipçi sayısı buzdağının sadece görünen kısmıdır. İşte temel bileşenler:',
    },
    {
      type: 'title',
      text: '1. Etkileşim Oranı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu en önemli metriktir. Topluluğunuzun yüzde kaçının içeriğinizle aktif olarak etkileşime girdiğini ölçer. Yüksek etkileşime sahip küçük bir hesap, büyük bir "hayalet" hesaptan çok daha değerlidir.',
    },
    {
      type: 'tip',
      title: 'Etkileşim ipucu',
      html: '<p>Algoritmaya olumlu sinyaller göndermek için paylaşımdan sonraki ilk birkaç saat içinde yorumlara cevap vermeye çalışın.</p>',
    },
    {
      type: 'title',
      text: '2. Ortalama Erişimi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "TikTok'ta erişim, öneri algoritması nedeniyle değişkendir. Instagram'da Reels, yeni kitlelere ulaşmak için statik fotoğraflardan daha fazla önem kazanmıştır.",
    },
    {
      type: 'title',
      text: '3. Niş veya Kategori',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tüm kitleler aynı değerde değildir. Bir teknoloji veya finans üreticisi, nihai müşterinin yüksek değeri nedeniyle genel bir eğlence üreticisinden çok daha yüksek ücretler talep edebilir.',
    },
    {
      type: 'title',
      text: 'En yüksek ödeme yapan kategoriler (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finans ve İş:</strong> Gönderi başına en iyi ödeme yapan niş.',
        '<strong>Teknoloji ve Gadgetlar:</strong> Yüksek anında satın alma niyeti.',
        '<strong>Sağlık ve Fitness:</strong> Ekipman ve uygulamalar için büyük pazar.',
        '<strong>Ev Yenileme:</strong> Yüksek proje maliyetleri ve yüksek ROI.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Para nerede?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her ikisi de dikey video kullansa da para kazanma modelleri farklılık gösterir. Instagram markalaşmadır; TikTok ise doğrudan performanstır.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Markalaşma, estetik ve sadakate odaklanır. Uzun vadeli kampanyalar için idealdir.</p><ul><li>Topluluk boyutuna değer verir</li><li>Doğrudan satış içeren Hikayeler</li><li>İstikrarlı büyüme</li><li>Daha olgun kitle</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Ekstrem viralite ülkesi. Algoritma takipçilere hükmeder. Patlayıcı kısa vadeli ROI.</p><ul><li>Kitlesel erişime değer verir</li><li>Mutlak viral potansiyel</li><li>Düşük üretim maliyetleri</li><li>Çok aktif izleyici kitlesi</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Müzakerelerde sonuçları nasıl kullanmalısınız?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aracımızdan fiyat aralığını alın ve rehber olarak kullanın. Bu şablonu kullanarak metriklerinizi güvenle sunun:',
    },
    {
      type: 'tip',
      title: 'Pazarlık şablonu',
      html: '<p>Merhaba [Marka Adı], ulaştığınız için teşekkürler. Mevcut erişim metriklerime (ortalama [X] görüntüleme) ve % [X] etkileşim oranına dayanarak, bir [Reel/TikTok] entegrasyonu için ücretim [Fiyat ₺]. Şunları içerir: senaryo ve video üretimi, 24 saatlik 1 bio bağlantısı, 2 destekleyici Story, 30 günlük kullanım hakları.</p>',
    },
    {
      type: 'title',
      text: 'Ücretinizi yükseltmek için stratejiler',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Etkileşimi teşvik edin:</strong> Her yoruma cevap verin.',
        '<strong>Kaliteyi yükseltin:</strong> Ses, iyi bir videonun %50\'sidir.',
        '<strong>Uzmanlaşın:</strong> "Uzman" olmak, daha fazla ücret istemenize olanak tanır.',
        '<strong>Bir Medya Kiti oluşturun:</strong> Başarılarınızı verilerle belgeleyin.',
      ],
    },
    {
      type: 'title',
      text: 'Tahmini değer güvenilir mi?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcımız uluslararası ajanslardan gelen toplu verileri kullanır. Ancak mevsimsellik (Noel kampanyaları daha fazla öder) gibi faktörler nihai fiyatı değiştirebilir.',
    },
    {
      type: 'tip',
      title: 'Üreticiler için Not',
      html: '<p>Bu araç bir tahmindir. Fiyatı her zaman marka tarafından talep edilen içeriğin karmaşıklığına göre ayarlayın.</p>',
    },
  ],
  ui: {
    sectionTag: 'Denetim Parametreleri',
    labelFollowers: 'Topluluk (Takipçiler)',
    labelAvgViewsTiktok: 'Etki (Video Başına İzlenme)',
    labelAvgViewsIg: 'Erişim (Profil Erişimi)',
    tooltipViews: 'Son 10 videonuzun görüntülenme sayısını toplayın ve 10\'a bölün.',
    labelEngagement: 'Sadakat (Beğeniler + Yorumlar)',
    tooltipEngagement: 'Son 10 gönderinizdeki toplam beğeni ve yorumları 10\'a bölün.',
    labelNiche: 'Pazar Dikey',
    nicheEntertainment: 'Eğlence',
    nicheFinance: 'Finans ve Emlak',
    nicheTech: 'Teknoloji ve SaaS',
    nicheFitness: 'Yaşam Tarzı ve Sağlık',
    nicheFashion: 'Moda ve Güzellik',
    nicheTravel: 'Turizm ve Seyahat',
    nicheFood: 'Yemek ve Gastronomi',
    nicheGaming: 'Oyun ve eSpor',
    nicheHome: 'Ev ve Yenileme',
    btnCalculate: 'Değer Raporu Oluştur',
    emptyTitle: 'Ticari Fizibilite Analizi',
    emptyDesc: 'Mevcut piyasa değerini hesaplamak için profil metriklerini girin.',
    roiLabel: 'Önerilen Ücret Değerlendirmesi',
    rangeLabel: 'Önerilen aralık:',
    audienceQuality: 'Kitle Kalitesi',
    metricER: 'Etkileşim Oranı',
    investmentEfficiency: 'Yatırım Verimliliği',
    metricCPM: 'Tahmini CPM',
    insightText: 'Bu değerleme Türkiye pazarının ortalama CPM\'ine (2026) dayanmaktadır.',
    currencySymbol: '₺',
    numberLocale: 'tr-TR',
  },
};
