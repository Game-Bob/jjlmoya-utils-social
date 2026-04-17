import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'sosyal-guvenli-bolgeler';
const title = 'Sosyal Güvenli Bölgeler: TikTok, Reels ve Shorts İçin Video Simülatörü';
const description =
  'Görsellerinizi ve videolarınızı gerçek sosyal medya arayüzü ile önizleyin. İçeriğinizin her zaman görünür olduğundan emin olun ve yanlışlıkla kırpılmasını önleyin.';

const faqData = [
  {
    question: "Sosyal medyada 'Güvenli Bölgeler' nedir?",
    answer:
      "Kullanıcı adı, açıklama, etkileşim düğmeleri (beğen, paylaş) gibi arayüz öğeleri tarafından kapatılma veya bazı cihazlar tarafından uygulanan otomatik kırpılma riski olmadan içeriğin görünür olduğu ekran alanlarıdır.",
  },
  {
    question: 'TikTok videom neden üstten ve alttan kırpılmış görünüyor?',
    answer:
      "TikTok 9:16 en boy oranını kullanır. Videonuz daha genişse uygulama ekranı doldurmak için yakınlaştırma yapar ve bu da kırpılmaya neden olur. Ayrıca alt arayüz videonun bir kısmını kaplar, bu nedenle önemli öğeler merkeze yerleştirilmelidir.",
  },
  {
    question: 'Güvenli bölge Instagram Reels ve YouTube Shorts için aynı mı?',
    answer:
      "Çok benzerdirler ancak özdeş değildirler. YouTube Shorts düğmeleri Reels'tan farklı konumlandırılmıştır. Aracımız, tasarımınızı her birinde doğrulamak için platformlar arasında geçiş yapmanıza olanak tanır.",
  },
  {
    question: 'Sağ alt köşeye metin koyarsam ne olur?',
    answer:
      "Muhtemelen görünmez olur veya okunması çok zorlaşır, çünkü profil, kalp ve yorum simgeleri orada bulunur. İdeal olarak, metinleri ve yüzleri merkez-üst alanda (Güvenli Bölge) tutun.",
  },
];

const howToData = [
  {
    name: 'Görselinizi veya videonuzu yükleyin',
    text: "Önizlemek istediğiniz dosyayı yükleyin. İşleme yerel ve gizlidir; internete hiçbir şey yüklenmez.",
  },
  {
    name: 'Platformu seçin',
    text: "İlgili arayüz katmanını etkinleştirmek için TikTok, Instagram Reels veya YouTube Shorts arasında seçim yapın.",
  },
  {
    name: 'Okunabilirliği kontrol edin',
    text: "Metinlerin, altyazıların veya ana marka öğelerinin sosyal ağın simgeleri tarafından kapatılıp kapatılmadığını doğrulayın.",
  },
  {
    name: 'Ayarlayın ve dışa aktarın',
    text: "Bir şey gizlenmişse orijinal video düzenleyicinizde öğeyi taşıyın ve mükemmel şekilde oturana kadar tekrar test edin.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Resmi Platform Dokümantasyonu',
  bibliography: [
    {
      name: 'TikTok İçerik Üretici Portalı: Video optimizasyonu ve güvenli bölgeler',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Reels için en iyi uygulamalar',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube Yardımı: YouTube Shorts oluşturma',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Videolar için güvenli bölgeler ve en boy oranları',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Güvenli Bölgeler Ana Kılavuzu: Reels, TikTok ve Shorts\'unuzu Optimize Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dikey içeriğin doygun olduğu dünyada ilk izlenim tekniktir. İçerik üreticilerinin yaptığı en büyük hata, <strong>videolarının veya görsellerinin</strong> platformun yerel arayüzüyle nasıl etkileşime girdiğini görmezden gelmektir. Her sosyal ağ (TikTok, Instagram Reels ve YouTube Shorts), kompozisyonunuzun görsel etkisini yok edebilecek düğme, metin ve profil katmanlarını videonun üzerine yerleştirir.",
    },
    {
      type: 'paragraph',
      html: "Bu araç, medya dosyalarınızı yüklemenize ve karenizin tam olarak hangi kısımlarının arayüz tarafından kapatılacağını önizlemenize olanak tanır. Bu sadece <strong>altyazılarla</strong> ilgili değildir; videonuzdaki yüzlerin, ürünlerin veya ana eylemlerin bir \"Beğen\" düğmesinin veya uzun bir açıklamanın altında kalmamasını sağlamakla ilgilidir.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: En istilacı arayüz',
          html: "<p>TikTok en yoğun arayüze sahiptir. Sağ tarafta, genişliğin yaklaşık %15'ini kaplayan bir simge sütunu vardır. Alt kısımda açıklama 4 veya 5 satıra kadar uzayabilir ve ekranın neredeyse üçte birini alttan kapatabilir.</p><ul><li><strong>Alt kenar boşluğu:</strong> Açıklama metni ve kullanıcı adından kaçınmak için son 250 pikseli boş bırakın.</li><li><strong>Sağ kenar boşluğu:</strong> Sağ kenardan 100 piksel mesafe içine metin yerleştirmekten kaçının.</li><li><strong>Üst:</strong> \"Takip Edilenler\" ve \"Sizin İçin\" düğmeleri üst orta şeridi kaplar.</li></ul>",
        },
        {
          type: 'card',
          title: 'IG Reels: Akış faktörü',
          html: "<p>TikTok'un aksine Instagram Reels, ana akıştan görüntülendiğinde videoyu 4:5 formatına kırpar. Bu, 9:16 videonuzun üst veya alt %15'lik kısmına hayati bilgiler yerleştirirseniz bunların akışta kaybolacağı anlamına gelir.</p><ul><li><strong>4:5 kuralı:</strong> Akış görünürlüğü için başlıkları ve anahtar öğeleri merkezi bölgede tutun.</li><li><strong>Arayüz:</strong> Reels simgeleri TikTok'unkinden daha incedir ve biraz daha fazla yanal kenar boşluğuna izin verir.</li><li><strong>Ses simgesi:</strong> Sağ altta bulunur, genellikle TikTok'un dönen diskinden çok daha az yer kaplar.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Sağ tarafa dikkat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "YouTube Shorts asimetrik bir arayüze sahiptir. Abone ol düğmesi çok belirgindir ve düz renklidir (genellikle siyah veya beyaz), bu da sağ altta önemli bir görsel kör nokta oluşturur.",
    },
    {
      type: 'list',
      items: [
        '<strong>Sağ kenar boşluğu:</strong> Sağ alt %20\'lik alana metin veya önemli öğeler yerleştirmekten kaçının.',
        '<strong>Alt kenar boşluğu:</strong> Açıklama metni ve kullanıcı adından kaçınmak için son 150 pikseli boş bırakın.',
        '<strong>Üst:</strong> Abone ol ve diğer düğmeler üst orta şeridi kaplar.',
      ],
    },
    {
      type: 'title',
      text: 'Dikey Tasarım Hakkında Kritik Sorular',
      level: 2,
    },
    {
      type: 'title',
      text: 'Anahtar öğeler (yüzler, metin, ürün) nereye yerleştirilmeli?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Ana eylem için \"Altın Bölge\" videonun orta üçte birlik kısmıdır. Bir kişiyi filme alıyorsanız gözlerinin ve ağzının bu bölge içinde olduğundan emin olun. Önemli grafik öğeleri, alt açıklamadan kaçınmak için geometrik merkezden hafifçe yukarı kaydırılmalıdır.",
    },
    {
      type: 'title',
      text: 'Videom yüklendikten sonra neden bulanık görünüyor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Çoğu zaman sorun kalite değil, ölçeklemedir. Her zaman 30 veya 60 fps'de 1080x1920 olarak kaydedin. Platformlar büyük dosyaları agresif bir şekilde sıkıştırdığından, çok fazla ağır efekt uyguluyorsanız 4K'dan kaçının.",
    },
    {
      type: 'title',
      text: 'Telefon çerçeveleri ne olacak?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Modern telefonların ekranında çentikler veya kamera delikleri olduğunu unutmayın. Bu araç, içeriğinizin saat veya sistem simgeleriyle (pil, sinyal) çakışmaması için bir üst güvenlik payı içerir.",
    },
    {
      type: 'title',
      text: 'Viral Videonun Anatomisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Sosyal medya için tasarım yapmak sadece estetik değil, bir <strong>kullanılabilirlik</strong> meselesidir. Bir kullanıcı platformun simgeleri kapattığı için metni okumakta zorlanırsa, hemen bir sonraki videoya kaydıracaktır. Görsel bir engel olduğunda izlenme süresi (Watch Time) keskin bir şekilde düşer.",
    },
    {
      type: 'paragraph',
      html: "Örneğin YouTube Shorts'ta arayüz asimetriktir. Abone ol düğmesi çok belirgindir. Bu simülatörü kullanarak, renk paletinizin yerel kullanıcı arayüzü renkleriyle nasıl etkileşime girdiğini anlamak için opaklığı ayarlayabilirsiniz.",
    },
    {
      type: 'tip',
      title: 'Yaratıcı Kalite Kontrol Aracı',
      html: '<p>Hiçbir şeyi şansa bırakmayan içerik üreticileri için tasarlandı.</p>',
    },
  ],
  ui: {
    labelConfig: 'Ayarlar',
    labelPlatform: 'Hedef Platform',
    labelUpload: 'İçerik Yükle',
    uploadPrompt: 'Görsel veya video seçin',
    uploadLink: 'Veya bir örnek kullanın',
    loadContent: 'İçeriğinizi yükleyin',
    labelOpacity: 'Arayüz Belirginliği',
    labelMask: 'Kritik Bölgeleri Karart',
    labelGrid: 'Üçler Kuralı',
    btnReset: 'Tuvali Sıfırla',
    bannerTiktok: 'TikTok 9:16 Simüle Ediliyor',
    bannerReels: 'Instagram Reels 9:16 Simüle Ediliyor',
    bannerShorts: 'YouTube Shorts 9:16 Simüle Ediliyor',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Takip Edilenler',
    ttForYou: 'Sizin İçin',
    ttDescription: 'İçerik üreticileri için gerçek arayüz tasarımı. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Orijinal Ses',
    ttNavHome: 'Ana Sayfa',
    ttNavFriends: 'Arkadaşlar',
    ttNavInbox: 'Gelen Kutusu',
    ttNavProfile: 'Profil',
    reelsFollow: 'Takip Et',
    reelsDescription: 'Bu arayüz gerçek olanla birebir aynıdır. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Orijinal Ses',
    shortsSubscribe: 'ABONE OL',
    shortsDislike: 'Beğenmedim',
    shortsShare: 'Paylaş',
    shortsRemix: 'Remix',
    shortsDescription: 'Shorts için gerçek arayüzleri simüle etme! #youtube #shorts',
  },
};
