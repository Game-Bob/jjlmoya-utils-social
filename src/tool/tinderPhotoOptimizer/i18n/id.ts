import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'pengoptimasi-foto-tinder';
const title = 'Pengoptimasi Foto untuk Tinder: Analisis Wajah dan Komposisi';
const description =
  'Optimalkan foto Tinder Anda dengan analisis wajah algoritmik. Simulasikan antarmuka Tinder 2026, analisis framing ilmiah dan garis mata, ekspor potret 9:16 yang sempurna untuk memaksimalkan match.';

const faqData = [
  {
    question: 'Bagaimana alat ini meningkatkan match saya di Tinder?',
    answer:
      'Alat ini menganalisis faktor teknis utama: rasio ukuran wajah (ideal 30-50%), posisi garis mata terhadap sepertiga atas, cakupan framing, dan zona mati antarmuka Tinder. Dengan menyesuaikan parameter ini, foto Anda memproyeksikan lebih banyak kepercayaan dan melampaui filter visual algoritma.',
  },
  {
    question: 'Apakah aman mengunggah foto saya di sini?',
    answer:
      'Sangat aman. Semua pemrosesan dilakukan di browser Anda menggunakan Canvas API. Foto Anda tidak pernah dikirim ke server mana pun atau disimpan di mana pun.',
  },
  {
    question: 'Apa sebenarnya yang dilakukan deteksi wajah AI?',
    answer:
      'Ini menggunakan face-api.js untuk mendeteksi 68 titik referensi wajah, menganalisis ekspresi (senyum, ekspresi serius), mengevaluasi posisi mata, dan mengukur kemiringan kepala. Semua analisis terjadi secara lokal di perangkat Anda.',
  },
  {
    question: 'Mengapa merekomendasikan zoom pada 1,2x?',
    answer:
      'Kamera depan smartphone menggunakan optik sudut lebar (24mm) yang mendistorsi wajah dengan aberasi barel. Zoom 1,2x mensimulasikan fokus 50-85mm, menghilangkan distorsi dan memberikan proporsi wajah yang lebih alami dan menarik.',
  },
];

const howToData = [
  {
    name: 'Unggah foto Anda',
    text: 'Seret atau klik simulator Tinder untuk memuat gambar Anda.',
  },
  {
    name: 'Analisis komposisi',
    text: 'AI mendeteksi wajah Anda secara otomatis dan menunjukkan metrik ukuran wajah, garis mata, cakupan, dan ekspresi.',
  },
  {
    name: 'Sesuaikan dengan presisi',
    text: 'Gunakan kontrol zoom dan kecerahan, aktifkan auto-framing, atau seret gambar secara manual di dalam simulator.',
  },
  {
    name: 'Unduhan yang dioptimalkan',
    text: 'Ekspor foto Anda dalam format asli 1080x1920 yang dioptimalkan untuk Tinder, dengan metadata bersih.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pengoptimasi Foto untuk Tinder: Panduan Ilmiah dan Teknis Definitif (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam ekosistem kencan digital, profil Tinder Anda diproses oleh dua algoritma secara bersamaan: algoritme visi canggih dari platform itu sendiri dan otak manusia pengguna yang menggeser. Alat kami mengintegrasikan prinsip-prinsip <strong>psikologi evolusioner</strong>, <strong>biometrik wajah</strong>, dan <strong>pemrosesan sinyal digital</strong> untuk memastikan gambar Anda memproyeksikan nilai sosial dan daya tarik teknis yang maksimal.',
    },
    {
      type: 'title',
      text: 'Psikologi Kesan Pertama: Efek 1,2 Detik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Studi neurosains menunjukkan bahwa otak manusia membutuhkan sekitar 1/10 detik untuk membentuk kesan awal tentang kepercayaan yang diproyeksikan seseorang. Di Tinder, Anda memiliki sedikit lebih dari satu detik sebelum geseran berikutnya. Alat kami menganalisis faktor-faktor yang mempercepat pengambilan keputusan positif:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kontak Mata dan Garis Pandang:</strong> Tatapan langsung mengaktifkan wilayah otak yang terkait dengan penghargaan sosial. Memposisikan mata di sepertiga atas memaksimalkan kemungkinan pengguna berhenti pada tatapan Anda sebelum membaca nama Anda.',
        '<strong>Asimetri dan Postur:</strong> Sedikit kemiringan dapat menghaluskan fitur agresif, tetapi kemiringan berlebihan menyampaikan ketidakstabilan. Algoritme kami mengukur sudut yang tepat untuk menjaga Anda tetap dalam rentang kepercayaan.',
        '<strong>Kontras Figur-Latar Belakang:</strong> Sistem menghargai foto di mana subjek dipisahkan dengan jelas dari latar belakang. Profil teknis yang terdefinisi dengan baik membantu mesin render menonjolkan wajah Anda dibandingkan dengan kompetitor.',
      ],
    },
    {
      type: 'title',
      text: 'Analisis Teknis Lensa: Masalah Sudut Lebar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hampir semua foto profil diambil dengan smartphone, yang kamera depannya bersudut lebar. Kesalahan paling umum adalah terlalu dekat dengan perangkat.',
    },
    {
      type: 'paragraph',
      html: '<strong>Aberasi Barel:</strong> Pada jarak kurang dari satu meter, lensa 24mm (standar pada ponsel) memperluas bagian tengah gambar. Ini membuat hidung tampak lebih besar dan wajah lebih bulat dari kenyataannya. Rekomendasi <strong>Zoom 1,2x</strong> kami bersifat korektif: dengan menerapkan sedikit pemotongan digital, Anda mensimulasikan fokus 50mm hingga 85mm, panjang fokus emas yang digunakan fotografer fesyen untuk merampingkan wajah dan menjaga proporsi nyata.',
    },
    {
      type: 'title',
      text: 'Antarmuka Tinder: Ilmu Zona Mati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Banyak foto luar biasa gagal karena mengabaikan lapisan perangkat lunak (UI) yang ditempatkan Tinder di atasnya. Pengguna rata-rata tidak melihat foto bersih Anda; mereka melihat perpaduan tombol, gradien, dan teks.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zona Judul (Atas 15%):</strong> Di sinilah indikator kemajuan dan bilah status berada. Jika dahi atau mata Anda ada di sini, antarmuka memotong kepala Anda secara visual.',
        '<strong>Zona Aksi (Tombol):</strong> Ikon Like, Nope, dan Boost menempati sisi bawah. Jika tangan atau elemen gaya Anda ada di sana, mereka akan hilang sama sekali.',
        '<strong>Gradien Keterbacaan (Bawah 28%):</strong> Tinder menerapkan gradasi hitam agar nama dan usia Anda terbaca. Jika wajah Anda jatuh di zona ini, teks akan menumpuk pada fitur wajah Anda, merusak estetika profil.',
      ],
    },
    {
      type: 'title',
      text: 'Analisis Visi Real-Time: Menerjemahkan Algoritme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat kami menggunakan model <strong>Computer Vision generasi terbaru</strong> untuk mengaudit gambar Anda seperti yang dilakukan moderator otomatis Tinder:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark Detection:</strong> Kami memetakan 68 titik wajah untuk menganalisis simetri dan keterbukaan mata. Mata yang terbuka lebar dan terlihat berkorelasi dengan tingkat ekstroversi yang dirasakan lebih tinggi.',
        '<strong>Mood Evaluation:</strong> Senyum tipis mengaktifkan neuron cermin pada orang yang melihat Anda. Kami mendeteksi intensitas ekspresi wajah untuk memastikan Anda tidak terlihat terlalu serius atau tidak dapat didekati.',
        '<strong>Kualitas Pencahayaan:</strong> Sistem mengevaluasi kepercayaan deteksi. Jika skor rendah, foto memiliki noise visual atau bayangan keras yang dapat ditandai oleh algoritme Tinder sebagai konten berkualitas rendah.',
      ],
    },
    {
      type: 'title',
      text: 'Metadata dan Ekspor yang Dioptimalkan untuk Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tahukah Anda bahwa ukuran gambar Anda memengaruhi algoritme? Aplikasi kencan memprioritaskan konten yang memuat cepat agar tidak mengganggu alur pengguna.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata Stripping (Privasi dan SEO):</strong> Kami menghapus rekaman EXIF. Foto yang bersih memberi Anda kanvas baru untuk algoritme platform.',
        '<strong>Kompresi Pintar Tanpa Kehilangan:</strong> Kami mengurangi ukuran file JPG dengan tetap menjaga ruang warna sRGB asli iOS dan Android. Foto Anda akan terlihat semarak bahkan dengan koneksi buruk.',
        '<strong>Format 9:16 Imersif:</strong> Dengan memberikan tepat 1080x1920 piksel, kami mencegah Tinder menerapkan algoritme kompresi agresifnya sendiri yang menghasilkan artefak gambar.',
      ],
    },
    {
      type: 'tip',
      title: 'Saran Ahli',
      html: '<p>Foto pertama harus SELALU berupa potret jelas dari bahu ke atas. Simpan foto seluruh tubuh atau foto aktivitas untuk posisi ke-3 atau ke-4. Pastikan dalam kesan pertama itu, tatapan Anda bebas dari rintangan dan wajah Anda memiliki ukuran optimal (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Keamanan dan Etika Pemrosesan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kami memahami bahwa foto Anda bersifat pribadi. Pengoptimal ini menggunakan <strong>teknologi Client-Side</strong>: gambar diproses melalui mesin canvas di browser lokal Anda. Tidak ada data yang keluar dari perangkat Anda. Ini adalah cara teraman dan tercepat untuk mengoptimalkan profil Anda tanpa mengorbankan privasi Anda.',
    },
  ],
  ui: {
    uploadTitle: 'Optimalkan Foto',
    uploadSubtitle: 'Seret atau klik untuk memulai',
    btnDownload: 'Unduh Foto yang Dioptimalkan',
    btnRescan: 'Pindai Ulang Wajah',
    btnAutoFocus: 'Auto-Framing',
    btnMarkFace: 'Tandai Wajah',
    panelManual: 'Penyesuaian Manual',
    panelVisualization: 'Visualisasi Lanjutan',
    panelMetrics: 'Analisis Komposisi',
    panelExport: 'Ekspor untuk Tinder 2026',
    panelExportDesc: 'Pemotongan otomatis ke 1080x1920 dengan metadata yang dioptimalkan.',
    labelZoom: 'Zoom',
    labelBrightness: 'Kecerahan',
    toggleGrid: 'Kisi Sepertiga',
    toggleGridDesc: 'Penyesuaian komposisi klasik',
    toggleDeadzones: 'Zona Bahaya',
    toggleDeadzonesDesc: 'Mencegah UI menyembunyikan wajah Anda',
    toggleFaceBox: 'Lihat Wajah Terdeteksi',
    toggleFaceBoxDesc: 'Landmark dan area deteksi',
    metricFaceSize: 'Rasio Wajah',
    metricEyeLine: 'Garis Pandang',
    metricCoverage: 'Cakupan',
    metricMood: 'Ekspresi',
    metricQuality: 'Kepercayaan',
    analysisSuccess: 'Faktor Sukses',
    analysisWarning: 'Optimasi',
    analysisError: 'Kesalahan Kritis',
    deadzoneTop: 'Zona UI Atas',
    deadzoneBottom: 'Zona Informasi',
    loaderAnalyzing: 'Menganalisis komposisi...',
    loaderModels: 'Memuat model visi...',
    simulatorName: 'Nama Anda, 25',
    simulatorJob: 'Pekerjaan Anda',
    simulatorCity: 'Tinggal di Indonesia',
    simulatorDistance: '5 km dari Anda',
    statusOptimal: 'OPTIMAL',
    statusIncorrect: 'TIDAK BENAR',
    statusHigh: 'TINGGI',
    statusMedium: 'SEDANG',
    statusLow: 'RENDAH',
    statusPositive: 'POSITIF',
    statusNeutral: 'NETRAL',
    alertExcellent: 'Komposisi teknis yang sangat baik.',
    alertEmptySpaces: 'RUANG KOSONG: Gambar tidak menutupi seluruh bingkai. Sesuaikan zoom atau posisi.',
    alertAlmostInvisible: 'HAMPIR TIDAK TERLIHAT: Anda sangat jauh. Perbesar hingga wajah Anda menempati setidaknya sepertiga layar.',
    alertTooClose: 'TERLALU DEKAT: Close-up ekstrem dapat terlihat agresif.',
    alertPerfectSize: 'UKURAN SEMPURNA: Wajah Anda memiliki rasio ideal untuk memproyeksikan kepercayaan.',
    alertImpactfulLook: 'TATAPAN BERDAMPAK: Mata Anda berada pada garis perhatian maksimal.',
    alertEyeLineMoveUp: 'GARIS MATA: Untuk framing profesional, naikkan wajah sedikit ke garis atas.',
    alertEyeLineMoveDown: 'GARIS MATA: Untuk framing profesional, turunkan wajah sedikit ke garis atas.',
    alertTiltedHead: 'KEPALA MIRING: Postur yang terlalu miring dapat menyampaikan ketidakstabilan.',
    alertSmileDetected: 'SENYUM TERDETEKSI: Senyuman meningkatkan tingkat match secara signifikan.',
    alertSevereExpression: 'EKSPRESI SERIUS: Coba gunakan foto dengan gestur yang lebih ramah.',
    alertObstructedTop: 'TERHALANG: Bilah kemajuan menutupi wajah Anda.',
    alertObstructedBottom: 'TERHALANG: Blok informasi menutupi wajah Anda.',
    alertLowLight: 'PENCAHAYAAN BURUK: AI kesulitan melihat Anda. Cari foto dengan cahaya yang lebih baik.',
    alertCutOff: 'TERPOTONG: Wajah berada di luar bingkai vertikal.',
    alertProTip: 'TIPS PRO: Jika ini selfie, gunakan Zoom (1,2x) untuk menghindari distorsi lensa.',
    canvasFaceDetected: 'Wajah terdeteksi',
  },
};
