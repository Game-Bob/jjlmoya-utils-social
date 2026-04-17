import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'kalkulator-nilai-akun-sosial';
const title = 'Kalkulator Nilai Akun Media Sosial: Harga TikTok & Instagram';
const description =
  'Cari tahu berapa biaya yang harus dikenakan untuk postingan bersponsor. Kalkulator kami menganalisis pengikut, keterlibatan, dan ceruk untuk memberi Anda nilai pasar yang adil.';

const faqData = [
  {
    question: 'Apakah kalkulator nilai akun ini gratis?',
    answer:
      'Ya, alat kami 100% gratis dan tidak memerlukan pendaftaran atau koneksi ke akun media sosial Anda. Anda hanya perlu memasukkan metrik publik Anda.',
  },
  {
    question: 'Mengapa nilai TikTok berbeda dari Instagram?',
    answer:
      'TikTok sangat bergantung pada jangkauan algoritma dan penayangan, sedangkan Instagram masih memberikan bobot yang kuat pada ukuran komunitas dan loyalitas pengikut.',
  },
  {
    question: 'Berapa tingkat keterlibatan yang baik untuk mengenakan biaya lebih?',
    answer:
      'Umumnya, keterlibatan di atas 3% dianggap sehat. Akun dengan keterlibatan lebih dari 10% dianggap sebagai "profil premium" dan dapat mengenakan biaya premium yang signifikan.',
  },
  {
    question: 'Apakah ceruk benar-benar mempengaruhi harga sebanyak itu?',
    answer:
      'Tentu saja. Seorang pengikut yang tertarik pada keuangan atau perangkat lunak manajemen memiliki nilai konversi yang jauh lebih tinggi bagi sebuah merek daripada pengikut yang mencari hiburan cepat atau meme.',
  },
];

const howToData = [
  {
    name: 'Pilih platform Anda',
    text: 'Pilih apakah Anda ingin menghitung nilai akun TikTok atau Instagram.',
  },
  {
    name: 'Masukkan metrik Anda',
    text: 'Masukkan jumlah pengikut Anda serta rata-rata penayangan dan suka dari 10 postingan terakhir Anda.',
  },
  {
    name: 'Pilih ceruk Anda',
    text: 'Pilih kategori yang paling menggambarkan konten Anda untuk menyesuaikan nilai berdasarkan permintaan pasar.',
  },
  {
    name: 'Dapatkan anggaran Anda',
    text: 'Terima perkiraan kisaran biaya yang harus Anda kenakan untuk kolaborasi profesional.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber & Studi Pasar',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: Laporan Keterlibatan TikTok & Instagram',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Statistik Media Sosial',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'Dalam panduan ini Anda akan mempelajari',
      html: '<ul><li><strong>Nilai pasar nyata</strong> Anda berdasarkan data 2026.</li><li>Cara membedakan dampak <strong>TikTok vs Instagram</strong>.</li><li>Bagaimana <strong>ceruk</strong> Anda secara dramatis mempengaruhi CPM Anda.</li><li>Templat profesional untuk <strong>bernegosiasi dengan merek</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Kalkulator Nilai Akun: Berapa Biaya Postingan Bersponsor di TikTok atau Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda seorang pencipta konten, influencer, atau sekadar memiliki komunitas aktif di media sosial, Anda mungkin pernah bertanya-tanya: <strong>berapa sebenarnya nilai akun saya?</strong> atau <strong>berapa harga yang harus saya tawarkan untuk kolaborasi merek?</strong>.',
    },
    {
      type: 'title',
      text: 'Kebangkitan ekonomi kreator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pemasaran influencer telah matang dan bukan lagi sekadar jumlah pengikut. Merek mencari hasil dan koneksi yang mendalam. Alat kami menyediakan titik awal yang kuat berdasarkan data pasar nyata.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Pertumbuhan tahunan dalam investasi Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Rata-rata tingkat keterlibatan yang dianggap sehat</p>',
        },
        {
          type: 'card',
          title: 'Rp15rb–Rp50rb',
          html: '<p>Rata-rata CPM di ceruk bernilai tinggi (per 1.000 tayangan)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Faktor-faktor yang menentukan nilai akun Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Berbeda dengan apa yang dipercaya beberapa tahun lalu, jumlah pengikut hanyalah puncak gunung es. Berikut adalah komponen fundamentalnya:',
    },
    {
      type: 'title',
      text: '1. Tingkat Keterlibatan (Engagement Rate)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah metrik kunci. Ini mengukur persentase komunitas Anda yang berinteraksi secara aktif dengan konten Anda. Akun kecil dengan interaksi tinggi jauh lebih berharga daripada akun besar yang "berhantu".',
    },
    {
      type: 'tip',
      title: 'Tips keterlibatan',
      html: '<p>Cobalah untuk membalas komentar dalam beberapa jam pertama setelah memposting untuk mengirim sinyal positif ke algoritma.</p>',
    },
    {
      type: 'title',
      text: '2. Jangkauan Rata-rata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Di TikTok, jangkauan bersifat volatil karena algoritma rekomendasinya. Di Instagram, Reels telah mendapatkan bobot lebih dibandingkan foto statis untuk menangkap audiens baru.",
    },
    {
      type: 'title',
      text: '3. Ceruk atau Kategori',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua audiens memiliki nilai yang sama. Seorang kreator teknologi atau keuangan dapat mengenakan tarif yang jauh lebih tinggi daripada kreator hiburan umum, karena nilai pelanggan akhir yang lebih tinggi.',
    },
    {
      type: 'title',
      text: 'Kategori dengan bayaran tertinggi (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Keuangan & Bisnis:</strong> Ceruk dengan bayaran terbaik per postingan.',
        '<strong>Teknologi & Gadget:</strong> Niat beli langsung yang tinggi.',
        '<strong>Kesehatan & Kebugaran:</strong> Pasar besar untuk peralatan dan aplikasi.',
        '<strong>Renovasi Rumah:</strong> Biaya proyek tinggi dan ROI tinggi.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Di mana uangnya?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Meskipun keduanya menggunakan video vertikal, model monetisasinya berbeda. Instagram adalah branding; TikTok adalah performa murni.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Fokus pada branding, estetika, dan loyalitas. Ideal untuk kampanye jangka panjang.</p><ul><li>Menilai ukuran komunitas</li><li>Stories dengan penjualan langsung</li><li>Pertumbuhan stabil</li><li>Audiens lebih matang</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Negeri viralitas ekstrem. Algoritma berkuasa atas pengikut. ROI jangka pendek yang eksplosif.</p><ul><li>Menilai jangkauan besar</li><li>Potensi viral absolut</li><li>Biaya produksi rendah</li><li>Audiens sangat aktif</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara menggunakan hasil untuk bernegosiasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dapatkan rentang harga dari alat kami dan gunakan sebagai panduan. Sajikan metrik Anda dengan percaya diri menggunakan templat ini:',
    },
    {
      type: 'tip',
      title: 'Templat negosiasi',
      html: '<p>Halo [Nama Merek], terima kasih telah menghubungi. Berdasarkan metrik jangkauan saya saat ini (rata-rata [X] penayangan) dan tingkat keterlibatan saya sebesar [X]%, tarif saya untuk integrasi dalam [Reel/TikTok] adalah [Harga Rp]. Ini termasuk: skrip dan produksi video, 1 tautan bio selama 24 jam, 2 Stories amplifikasi, hak penggunaan 30 hari.</p>',
    },
    {
      type: 'title',
      text: 'Strategi untuk meningkatkan tarif Anda',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tumbuhkan interaksi:</strong> Balas setiap komentar.',
        '<strong>Tingkatkan kualitas:</strong> Audio adalah 50% dari video yang bagus.',
        '<strong>Spesialisasi:</strong> Menjadi "ahli" memungkinkan Anda mengenakan biaya lebih banyak.',
        '<strong>Buat Media Kit:</strong> Dokumentasikan kesuksesan Anda dengan data.',
      ],
    },
    {
      type: 'title',
      text: 'Apakah nilai perkiraan dapat diandalkan?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator kami menggunakan data agregat dari agensi internasional. Namun, faktor-faktor seperti musiman (kampanye Natal membayar lebih banyak) dapat mengubah harga akhir.',
    },
    {
      type: 'tip',
      title: 'Catatan untuk Kreator',
      html: '<p>Alat ini adalah perkiraan. Selalu sesuaikan harga berdasarkan kompleksitas konten yang diminta oleh merek.</p>',
    },
  ],
  ui: {
    sectionTag: 'Parameter Audit',
    labelFollowers: 'Komunitas (Pengikut)',
    labelAvgViewsTiktok: 'Dampak (Tayangan per Video)',
    labelAvgViewsIg: 'Jangkauan (Jangkauan Profil)',
    tooltipViews: 'Jumlahkan penayangan dari 10 video terakhir Anda dan bagi dengan 10.',
    labelEngagement: 'Loyalitas (Suka + Komentar)',
    tooltipEngagement: 'Jumlahkan total suka dan komentar dari 10 postingan terakhir dan bagi dengan 10.',
    labelNiche: 'Vertikal Pasar',
    nicheEntertainment: 'Hiburan',
    nicheFinance: 'Keuangan & Real Estat',
    nicheTech: 'Teknology & SaaS',
    nicheFitness: 'Gaya Hidup & Kesehatan',
    nicheFashion: 'Mode & Kecantikan',
    nicheTravel: 'Pariwisata & Perjalanan',
    nicheFood: 'Makanan & Gastronomi',
    nicheGaming: 'Gaming & eSports',
    nicheHome: 'Rumah & Renovasi',
    btnCalculate: 'Hasilkan Laporan Nilai',
    emptyTitle: 'Analisis Kelayakan Komersial',
    emptyDesc: 'Masukkan metrik profil untuk memproyeksikan nilai pasar saat ini.',
    roiLabel: 'Evaluasi Tarif yang Disarankan',
    rangeLabel: 'Kisaran yang disarankan:',
    audienceQuality: 'Kualitas Audiens',
    metricER: 'Tingkat Keterlibatan',
    investmentEfficiency: 'Efisiensi Investasi',
    metricCPM: 'Proyeksi CPM',
    insightText: 'Valuasi ini didasarkan pada rata-rata CPM pasar internasional (2026).',
    currencySymbol: 'Rp',
    numberLocale: 'id-ID',
  },
};
