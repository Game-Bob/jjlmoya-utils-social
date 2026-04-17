import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-kucuk-resim-onizleme';
const title = 'YouTube Küçük Resim Önizleme Online: CTR\'ı Ücretsiz Artırın';
const description =
  'Küçük resminizi yükleyin ve mobil ile masaüstü gerçek YouTube akışında nasıl göründüğünü izleyin. Tıklamaları anında optimize etmek için karanlık ve aydınlık mod simülatörü.';

const faqData = [
  {
    question: 'YouTube küçük resimlerini test etmek neden hayatidir?',
    answer:
      'Kullanıcıların çoğu YouTube\'u mobil cihazlarda izliyor. Monitörünüzde harika görünen bir küçük resim, küçük bir ekranda okunamaz olabilir. Bunu bir simülatörde test etmek, metnin net olmasını ve ana konunun her boyutta öne çıkmasını sağlar.',
  },
  {
    question: 'Bu Önizleyiciyi kullanmak için kayıt olmam gerekiyor mu?',
    answer:
      'Hayır. Aracımız %100 ücretsizdir ve doğrudan tarayıcınızda çalışır. Küçük resimlerinizi optimize etmek için hesap oluşturmanız veya e-postanızı bırakmanız gerekmez.',
  },
  {
    question: 'Tansarımlarım sunucunuza yükleniyor mu?',
    answer:
      'Kesinlikle hayır. Gizlilik bizim bir numaralı önceliğimizdir. Bir dosya seçtiğinizde, bu dosya geçici bir URL aracılığıyla tarayıcınızın belleğine yerel olarak yüklenir. Test ettiğiniz tasarımı sizden başka kimse göremez.',
  },
  {
    question: 'Bu araç Tıklama Oranımı (CTR) geliştirmeye nasıl yardımcı olur?',
    answer:
      'CTR (Click-Through Rate), küçük resmi gören kişilerin tıklama yüzdesidir. Gerçek ortamı simüle ederek (karanlık vs aydınlık arka plan, mobil vs PC), yayınlamadan önce kontrast ve kompozisyon hatalarını düzeltebilir, böylece tıklamalarınızı artırabilirsiniz.',
  },
  {
    question: 'YouTube\'un resmi Karanlık Modu ile çalışıyor mu?',
    answer:
      'Evet. Resmi YouTube uygulamasının her iki modda kullandığı onaltılık (hex) renkleri birebir taklit eden bir tema seçici (Aydınlık ve Karanlık) ekledik.',
  },
];

const howToData = [
  {
    name: 'Tasarımınızı yükleyin',
    text: 'Yükleme alanına tıklayın veya resim dosyanızı (PNG, JPG veya WebP) doğrudan araca sürükleyin.',
  },
  {
    name: 'Bağlamı ayarlayın',
    text: 'Simülasyonun gerçek akışa karşı mümkün olduğunca gerçekçi olması için video başlığınızı ve kanal adınızı yazın.',
  },
  {
    name: 'Cihaz değiştirin',
    text: "Farklı boyutlardaki ekranlarda okunabilirliği doğrulamak için 'Masaüstü' ve 'Mobil' görünümü arasında geçiş yapın.",
  },
  {
    name: 'Kontrastı test edin',
    text: "Renklerin YouTube'un siyah arka planına karşı doğru şekilde öne çıkıp çıkmadığını görmek için 'Karanlık' temayı etkinleştirin.",
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'YouTube Yardımı: Özel video küçük resimleri oluşturma',
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
      text: 'YouTube İçin Küçük Resim Önizleyici: Kanalınızın CTR\'ına Hakim Olun',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube ekosisteminde küçük resim (thumbnail), içeriğinize açılan kapıdır. Dünyanın en iyi videosuna, Hollywood düzeyinde kurguya ve Oscar\'lık bir senaryoya sahip olabilirsiniz; ancak kimse tıklamazsa, çalışmanız algoritma için görünmez kalacaktır. İşte burada <strong>CTR (Tıklama Oranı)</strong> devreye girer ve küçük resim belirleyici faktördür.',
    },
    {
      type: 'title',
      text: 'Küçük Resimlerinizi Yüklemeden Önce Neden Test Etmelisiniz?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Gerçek Önizleme:</strong> Küçük resminizi tam olarak YouTube akışında görüneceği haliyle görün.',
        '<strong>Karanlık ve Aydınlık Mod:</strong> Renklerin her türlü kullanıcı yapılandırmasında öne çıktığından emin olun.',
        '<strong>Cihaz Simülatörü:</strong> Hem monitörlerde hem de küçük mobil ekranlarda metin okunabilirliğini kontrol edin.',
        '<strong>CTR Optimizasyonu:</strong> Tıklamaları en üst düzeye çıkarmak için tasarımınızı yerel arayüzle karşılaştırın.',
        '<strong>Kayıt Gerekmez:</strong> Görselinizi yükleyin ve hesap oluşturmadan anında test edin.',
        '<strong>Gizlilik Garantili:</strong> Tasarımlarınız yerel olarak işlenir ve asla sunuculara yüklenmez.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Pek çok içerik üreticisi, küçük resimlerini büyük monitörlerde tasarlayıp favori editörlerinde tam ekran izleme hatasına düşer. Sorun şu ki, son kullanıcı bunu nadiren böyle görür. Çoğu kişi içeriği sonsuz kaydırma yaparken bir mobil cihazda veya karanlık moddaki monitörün bir köşesinde tüketir. <strong>YouTube Küçük Resim Önizleyicimiz</strong>, bu "tasarımcı illüzyonunu" kırmanıza ve akışın cerrahi gerçekliğini görmenize olanak tanır.',
    },
    {
      type: 'title',
      text: 'Teknik Metrikler ve Performans',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 sn', body: 'Yanıt Süresi' },
        { title: '4K', body: 'Maksimum Çözünürlük' },
        { title: '100%', body: 'Yerel Gizlilik' },
        { title: 'HD', body: 'Yerel Kalite' },
      ],
    },
    {
      type: 'title',
      text: 'Tıklama Psikolojisi: Küçük Resimler Neden Başarısız Olur?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İnsan beyni görüntüleri metinden binlerce kat daha hızlı işler. Ancak YouTube\'da rekabet acımasızdır. Küçük resminiz sadece "güzel" olmamalı; <strong>okunabilir</strong> olmalı ve <strong>kontrasta</strong> sahip olmalıdır.',
    },
    {
      type: 'paragraph',
      html: 'Yaygın bir hata, YouTube arka planıyla iç içe geçen renkler kullanmaktır. Koyu griler kullanırsanız ve izleyiciniz karanlık moddaysa, videonuz çevresel görüşlerinden öylece kaybolup gidecektir. Bu test cihazını kullanarak temalar arasında geçiş yapabilir ve tasarımınızın her senaryoda "patladığından" (öne çıktığından) emin olabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Doğrudan Karşılaştırma: Tasarım vs. Gerçeklik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Küçük resmi test etmek için 30 saniye harcamaya değer mi? Cevap kesinlikle EVET. Optimize edilmiş bir küçük resim, ilk 24 saatteki izlenme sayınızı ikiye katlayabilir ve YouTube yapay zekasına içeriğinizin bir "oltası" olduğu sinyalini verebilir.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Photoshop / Canva\'da Tasarım',
          body: 'Gerçek boyut hakkında yanlış hissi · Uygulama arka planıyla kontrastı görmezden gelir · Metin okunabilir görünür ama olmayabilir · Kullanıcı arayüzü öğlerini (süre, avatarlar) görmezsiniz',
        },
        {
          title: 'YouTube Küçük Resim Önizleyici',
          body: 'Ana akışta gerçek görünüm · Karanlık vs Aydınlık Modda doğrulanmış kontrast · Mobilde garantili metin okunabilirliği · Başlık ve kanal adı simülasyonu',
        },
      ],
    },
    {
      type: 'title',
      text: '%%%10\'un Üzerinde CTR İçin Bir Küçük Resim Kontrol Listesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nihai tasarımınızı dışa aktarmadan önce profesyonel simülatörümüzü kullanarak bu kontrol listesinden geçtiğinizden emin olun:',
    },
    {
      type: 'list',
      items: [
        'Metin küçük bir mobil ekranda okunabiliyor mu?',
        'Arka plan ile ana konu arasında yeterli kontrast var mı?',
        'Küçük resim, Karanlık Modun siyah arka planı üzerinde iyi görünüyor mu?',
        'Video başlığı görseldeki hayati bilgileri kapatıyor mu?',
        'Video süresi (siyah kutucuk) önemli bir şeyi gizliyor mu?',
        'Yüz veya ana nesne, küçültülmüş boyutta istenilen duyguyu aktarıyor mu?',
      ],
    },
    {
      type: 'title',
      text: 'Yüksek Etkili Bir Küçük Resmin Anatomisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dünyanın en büyük kanallarının analizlerine dayanarak, kazanan bir küçük resim genellikle şu yapısal modeli izler:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ana Konu',
          body: 'Birincil odak noktası · Hafif bir kenarlık veya ekstra doygunluk içeren keskin dekupe kullanın.',
        },
        {
          title: 'Metin (Maksimum 3 kelime)',
          body: 'Anında bağlam · Kalın Sans Serif yazı tipleri ve tamamlayıcı renkler kullanın.',
        },
        {
          title: 'Bulanık Arka Plan',
          body: 'Plan ayrımı · Ana konunun ekrandan "fırlaması" için derinlik katar.',
        },
        {
          title: 'Süre Alanı',
          body: 'Hatalardan kaçının · Sağ alt köşeye yüz veya metin koymayın.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Ölü Bölge Hilesi',
      html: '<p>YouTube, küçük resmin sağ alt köşesine her zaman video süresini içeren siyah bir kutucuk yerleştirir. Binlerce üretici o bölgeye hayati öğeler koyar, ancak Uygulamanın bunları kapattığını fark eder. Aracımız bu kutucuğu simüle eder, böylece en iyi çekiminizi asla kapatmazsınız.</p>',
    },
    {
      type: 'title',
      text: 'Aracın Avantajları ve Sınırlamaları',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ultra hızlı ve duyarlı arayüz',
          body: 'Sınırlama: Resim düzenlemeye izin vermez (Canva/PS kullanın)',
        },
        {
          title: 'Birebir Uygulama ve Web mockup\'ları',
          body: 'Sınırlama: Video öncesi reklamları simüle etmez',
        },
        {
          title: 'Ücretsiz ve müdahaleci reklamlar olmadan',
          body: 'Sınırlama: Yalnızca yerel dosyaları destekler',
        },
      ],
    },
    {
      type: 'title',
      text: "\"Split\" Modunun Kullanımı (Doğrudan Karşılaştırma)",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu, yıldız özelliğimizdir. Split modunu etkinleştirerek küçük resminizi aynı anda hem Aydınlık hem de Karanlık Mod merceğinden göreceksiniz. Renk paletinizin evrensel olup olmadığını veya parlaklık ve kontrast ayarlarına ihtiyaç duyup duymadığını kontrol etmenin kesin yoludur.',
    },
    {
      type: 'title',
      text: 'Gizlilik: Tasarımlarınız Buluta Yüklenmez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Küçük resimlerinizin bir lansman öncesindeki gizli stratejinizin bir parçası olduğunu biliyoruz. Bu nedenle, bu yardımcı programı yalnızca tarayıcı motorunuzda çalışacak şekilde tasarladık. <strong>İnternete hiçbir şey yüklenmez</strong>. Seçtiğiniz dosya, sekmeyi kapattığınızda kaybolan yerel geçici bir URL aracılığıyla yüklenir. Fikri mülkiyetiniz %100 sizin kontrolünüzdedir.',
    },
    {
      type: 'title',
      text: 'Sonuç: Mükemmel Piksel Garantili',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tahmin etmeyi bırakın ve doğrulamaya başlayın. JJLMoya\'nın <strong>YouTube Küçük Resim Önizleyicisi</strong>, amatör üreticileri profesyonel içerik oluşturuculardan ayıran ücretsiz bir araçtır. Yazı tipi boyutunda veya konu konumunda yapılan küçük bir ayarlama, fark edilmeyen bir video ile viral bir başarı arasındaki fark olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Kanalınızı şimdi optimize etmeye başlayın ve videolarınıza hak ettikleri tıklama oranını verin!',
    },
  ],
  ui: {
    dropFeedTitle: 'Küçük Resminizi Sürükleyin',
    dropFeedSub: 'PNG, JPG veya WebP · Birden fazla resim',
    dropAvatarTitle: 'Avatarınızı Sürükleyin',
    dropAvatarSub: 'Kanal profil resmi',
    labelTitle: 'Video başlığı',
    labelChannel: 'Kanal adı',
    defaultTitle: 'Video Başlığınız Buraya',
    defaultChannel: 'Kanal Adı',
    btnDesktop: 'Masaüstü',
    btnMobile: 'Mobil',
    btnClear: 'Temizle',
    labelLight: 'Aydınlık',
    labelDark: 'Karanlık',
    views0: '1,2 Mn görüntüleme · 1 saat önce',
    views1: '45 dakika önce',
    views2: '250 Bin görüntüleme · 1 gün önce',
    views3: '3,1 Mn görüntüleme · 1 hafta önce',
  },
};
