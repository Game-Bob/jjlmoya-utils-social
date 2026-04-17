import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'previsualisasi-thumbnail-youtube';
const title = 'Previsualisasi Thumbnail YouTube Online: Tingkatkan CTR Gratis';
const description =
  'Unggah thumbnail Anda dan lihat tampilannya di feed YouTube asli pada seluler dan desktop. Simulator mode gelap dan terang untuk mengoptimalkan klik secara instan.';

const faqData = [
  {
    question: 'Mengapa penting untuk menguji thumbnail YouTube?',
    answer:
      'Sebagian besar pengguna menonton YouTube di perangkat seluler. Thumbnail yang tampak bagus di monitor Anda mungkin tidak terbaca di layar kecil. Mengujinya dalam simulator memastikan teks jelas dan subjek utama menonjol dalam ukuran apa pun.',
  },
  {
    question: 'Apakah saya harus mendaftar untuk menggunakan Previewer ini?',
    answer:
      'Tidak. Alat kami 100% gratis dan bekerja langsung di browser Anda. Anda tidak perlu membuat akun atau memberikan email untuk mengoptimalkan thumbnail Anda.',
  },
  {
    question: 'Apakah desain saya diunggah ke server Anda?',
    answer:
      'Sama sekali tidak. Privasi adalah prioritas utama kami. Saat Anda memilih file, file tersebut dimuat secara lokal di memori browser Anda melalui URL sementara. Tidak ada orang lain selain Anda yang dapat melihat desain yang Anda uji.',
  },
  {
    question: 'Bagaimana alat ini membantu meningkatkan CTR saya?',
    answer:
      'CTR (Click-Through Rate) adalah persentase orang yang mengklik saat mereka melihat thumbnail Anda. Dengan mensimulasikan lingkungan nyata (latar belakang gelap vs terang, seluler vs desktop), Anda dapat memperbaiki masalah kontras dan komposisi sebelum mempublikasikannya, sehingga meningkatkan klik Anda.',
  },
  {
    question: 'Apakah ini berfungsi dengan Mode Gelap resmi YouTube?',
    answer:
      'Ya. Kami telah menyertakan pemilih tema (Terang dan Gelap) yang meniru persis warna hex yang digunakan oleh aplikasi resmi YouTube di kedua mode tersebut.',
  },
];

const howToData = [
  {
    name: 'Unggah desain Anda',
    text: 'Klik area unggah atau seret file gambar Anda (PNG, JPG, atau WebP) langsung ke alat ini.',
  },
  {
    name: 'Atur konteks',
    text: 'Ketik judul video dan nama saluran Anda agar simulasi terasa serealistis mungkin terhadap feed asli.',
  },
  {
    name: 'Ganti perangkat',
    text: 'Beralih antara tampilan Desktop dan Seluler untuk memverifikasi keterbacaan pada layar dengan berbagai ukuran.',
  },
  {
    name: 'Uji kontras',
    text: 'Aktifkan tema Gelap untuk memeriksa apakah warna menonjol dengan benar terhadap latar belakang hitam YouTube.',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Bantuan YouTube: Membuat thumbnail video kustom',
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
      text: 'Previewer Thumbnail YouTube: Kuasai CTR Saluran Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam ekosistem YouTube, thumbnail adalah pintu gerbang menuju konten Anda. Anda bisa memiliki video terbaik di dunia — pengeditan tingkat Hollywood, skrip layak Oscar — namun jika tidak ada yang mengklik, karya Anda tidak akan terlihat oleh algoritma. Di sinilah <strong>CTR (Click-Through Rate)</strong> berperan, dan thumbnail adalah faktor penentunya.',
    },
    {
      type: 'title',
      text: 'Mengapa Anda Perlu Menguji Thumbnail Sebelum Mengunggah',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pratinjau Nyata:</strong> Lihat thumbnail Anda persis seperti yang akan muncul di feed YouTube.',
        '<strong>Mode Gelap dan Terang:</strong> Pastikan warna menonjol dalam konfigurasi pengguna mana pun.',
        '<strong>Simulator Perangkat:</strong> Periksa keterbacaan teks di monitor maupun layar seluler kecil.',
        '<strong>Optimasi CTR:</strong> Bandingkan desain Anda dengan antarmuka asli untuk memaksimalkan klik.',
        '<strong>Tidak Perlu Daftar:</strong> Unggah gambar Anda dan uji secara instan tanpa membuat akun.',
        '<strong>Privasi Terjamin:</strong> Desain Anda diproses secara lokal dan tidak pernah diunggah ke server.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Banyak kreator melakukan kesalahan dengan mendesain thumbnail di monitor besar, melihatnya dalam layar penuh di editor favorit mereka. Masalahnya adalah pengguna akhir jarang melihatnya seperti itu. Sebagian besar mengonsumsi konten di perangkat seluler sambil melakukan scroll tanpa henti, atau di sudut monitor dalam mode gelap. <strong>Previewer Thumbnail YouTube</strong> kami memungkinkan Anda menghentikan "ilusi desainer" tersebut dan melihat realitas feed yang sebenarnya.',
    },
    {
      type: 'title',
      text: 'Metrik Teknis dan Performa',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 detik', body: 'Waktu Respons' },
        { title: '4K', body: 'Resolusi Maksimum' },
        { title: '100%', body: 'Privasi Lokal' },
        { title: 'HD', body: 'Kualitas Asli' },
      ],
    },
    {
      type: 'title',
      text: 'Psikologi Klik: Mengapa Thumbnail Gagal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Otak manusia memproses gambar ribuan kali lebih cepat daripada teks. Namun di YouTube, persaingannya sangat sengit. Thumbnail Anda tidak hanya harus "cantik" — ia harus <strong>terbaca</strong> dan memiliki <strong>kontras</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Kesalahan umum adalah menggunakan warna yang menyatu dengan latar belakang YouTube. Jika Anda menggunakan abu-abu gelap dan penonton Anda dalam mode gelap, video Anda akan menghilang begitu saja dari pandangan periferi mereka. Menggunakan alat uji ini, Anda dapat beralih antar tema dan memastikan desain Anda "menonjol" dalam skenario apa pun.',
    },
    {
      type: 'title',
      text: 'Perbandingan Langsung: Desain vs Realitas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Apakah layak menghabiskan 30 detik untuk menguji thumbnail? Jawabannya adalah YA. Thumbnail yang dioptimalkan dapat menggandakan penayangan Anda dalam 24 jam pertama, memberi sinyal ke AI YouTube bahwa konten Anda memiliki daya tarik.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Mendesain di Photoshop / Canva',
          body: 'Sensasi palsu akan ukuran asli · Mengabaikan kontras dengan latar belakang aplikasi · Teks tampak terbaca padahal mungkin tidak · Melewatkan elemen UI (durasi, avatar)',
        },
        {
          title: 'Previewer Thumbnail YouTube',
          body: 'Tampilan nyata di feed Beranda · Kontras diverifikasi di Mode Gelap vs Terang · Keterbacaan teks terjamin di seluler · Simulasi judul dan nama saluran',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist untuk Thumbnail dengan CTR di Atas 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebelum mengekspor desain akhir Anda, pastikan untuk memeriksa daftar ini menggunakan simulator profesional kami:',
    },
    {
      type: 'list',
      items: [
        'Apakah teks terbaca di layar seluler kecil?',
        'Apakah ada cukup kontras antara latar belakang dan subjek utama?',
        'Apakah thumbnail terlihat bagus di latar belakang hitam Mode Gelap?',
        'Apakah judul video menutupi informasi penting dalam gambar?',
        'Apakah lencana durasi video (kotak hitam) menyembunyikan sesuatu yang penting?',
        'Apakah wajah atau objek utama menyampaikan emosi yang diinginkan pada ukuran yang diperkecil?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomi Thumbnail Berdampak Tinggi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Berdasarkan analisis saluran terbesar di dunia, thumbnail pemenang biasanya mengikuti pola struktural ini:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Subjek Utama',
          body: 'Fokus utama · Gunakan potongan tajam dengan sedikit garis tepi atau saturasi ekstra.',
        },
        {
          title: 'Teks (Maks 3 kata)',
          body: 'Konteks instan · Gunakan font Sans Serif tebal dan warna pelengkap.',
        },
        {
          title: 'Latar Belakang Buram',
          body: 'Pemisahan bidang · Menambah kedalaman sehingga subjek utama seolah "melompat" dari layar.',
        },
        {
          title: 'Ruang Durasi',
          body: 'Hindari kesalahan · Jangan letakkan wajah atau teks di sudut kanan bawah.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik Zona Mati',
      html: '<p>YouTube selalu menempatkan kotak hitam dengan durasi video di sudut kanan bawah thumbnail. Ribuan kreator meletakkan elemen penting di zona itu, hanya untuk menemukan bahwa aplikasi menutupinya. Alat kami mensimulasikan kotak ini sehingga Anda tidak pernah menutupi bagian terbaik Anda.</p>',
    },
    {
      type: 'title',
      text: 'Keuntungan dan Batasan Alat',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Antarmuka ultra cepat dan responsif',
          body: 'Batasan: Tidak memungkinkan pengeditan gambar (gunakan Canva/PS)',
        },
        {
          title: 'Mockup aplikasi dan web yang akurat',
          body: 'Batasan: Tidak mensimulasikan iklan Pre-roll',
        },
        {
          title: 'Gratis dan tanpa iklan yang mengganggu',
          body: 'Batasan: Hanya mendukung file lokal',
        },
      ],
    },
    {
      type: 'title',
      text: 'Menggunakan Mode "Split" (Perbandingan Langsung)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah fitur unggulan. Dengan mengaktifkan mode Split, Anda akan melihat thumbnail Anda melalui lensa Mode Terang dan Mode Gelap secara bersamaan. Ini adalah cara definitif untuk memeriksa apakah palet warna Anda universal atau memerlukan penyesuaian kecerahan dan kontras.',
    },
    {
      type: 'title',
      text: 'Privasi: Desain Anda Tidak Diunggah ke Cloud',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kami tahu thumbnail Anda adalah bagian dari strategi rahasia sebelum peluncuran. Itulah sebabnya kami merancang utilitas ini untuk bekerja secara eksklusif di mesin browser Anda. <strong>Tidak ada yang diunggah ke internet</strong>. File yang Anda pilih dimuat melalui URL sementara lokal yang hilang saat Anda menutup tab. Kekayaan intelektual Anda 100% di bawah kendali Anda.',
    },
    {
      type: 'title',
      text: 'Kesimpulan: Piksel Sempurna Terjamin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Berhenti menebak dan mulailah memvalidasi. <strong>Previewer Thumbnail YouTube</strong> dari JJLMoya adalah alat gratis yang membedakan kreator amatir dari pembuat konten profesional. Penyesuaian kecil pada ukuran font atau posisi subjek dapat menjadi pembeda antara video yang terabaikan dan kesuksesan viral.',
    },
    {
      type: 'paragraph',
      html: 'Mulai optimalkan saluran Anda sekarang dan berikan video Anda rasio klik-tayang yang layak mereka dapatkan!',
    },
  ],
  ui: {
    dropFeedTitle: 'Seret Thumbnail Anda',
    dropFeedSub: 'PNG, JPG atau WebP · Banyak gambar',
    dropAvatarTitle: 'Seret Avatar Anda',
    dropAvatarSub: 'Foto profil saluran',
    labelTitle: 'Judul video',
    labelChannel: 'Nama saluran',
    defaultTitle: 'Judul Video Anda di Sini',
    defaultChannel: 'Nama Saluran',
    btnDesktop: 'Desktop',
    btnMobile: 'Seluler',
    btnClear: 'Bersihkan',
    labelLight: 'Terang',
    labelDark: 'Gelap',
    views0: '1,2 jt kali ditonton · 1 jam yang lalu',
    views1: '45 menit yang lalu',
    views2: '250 rb kali ditonton · 1 hari yang lalu',
    views3: '3,1 jt kali ditonton · 1 minggu yang lalu',
  },
};
