import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'social-media-image-resizer';
const title = 'ソーシャルメディア画像リサイザー：全プラットフォーム対応の切り抜き＆リサイズ';
const description =
  'Instagram、TikTok、YouTubeなどのために写真をリサイズし、切り抜きます。2026年最新の公式サイズに対応したスマートな切り抜きが可能です。';

const faqData = [
  {
    question: 'リサイズ時に画質は低下しますか？',
    answer:
      'いいえ、高品質なスムージングアルゴリズムを使用しています。ターゲットフォーマット以上の解像度を持つ元の画像をアップロードすることをお勧めします。',
  },
  {
    question: 'ここに写真をアップロードしても安全ですか？',
    answer:
      '完全に安全です。処理はブラウザ内でCanvas APIを使用してローカルに行われます。写真はサーバーに送信されることはありません。',
  },
  {
    question: '対応している形式を教えてください。',
    answer:
      'アップロードにはJPG、PNG、WebP、AVIFに対応しています。ダウンロードは互換性を最大化するため、高品質なJPGとして最適化されます。',
  },
];

const howToData = [
  {
    name: '画像をアップロードする',
    text: 'ファイルをドラッグするか、デバイスから選択して開始します。',
  },
  {
    name: '形式を選択する',
    text: 'サイドメニューから、必要なソーシャルネットワークと投稿タイプを選択します。',
  },
  {
    name: '調整してダウンロードする',
    text: '写真をドラッグして枠に合わせ、ズームを使用して完璧に切り抜きます。完了したらダウンロードをクリックしてください。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: 2026年ソーシャルメディア画像サイズガイド',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '全プラットフォーム対応のソーシャルメディア画像リサイザー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '今日のデジタルエコシステムにおいて、第一印象は視覚的なものです。各ソーシャルネットワークは、その比率にネイティブに適応したコンテンツを優先する特定のアルゴリズムの下で動作しています。当社のソーシャルメディア画像リサイザーは単なる技術的なツールではありません。意図しない切り抜きや画質の低下を招くことなく、メッセージを確実に届けるためのパートナーです。',
    },
    {
      type: 'paragraph',
      html: '風景写真をInstagramストーリーズ用の印象的な縦型に変換する場合でも、複雑なYouTubeバナー用にデザインを適応させる場合でも、当社のユーティリティはブラウザ上で直接、正確に配置とスケーリングができるスマートな切り抜きシステムを使用しています。',
    },
    {
      type: 'title',
      text: '2026年公式ソーシャルメディア画像サイズ',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — 正方形投稿', body: '1080 × 1080 px · 比率 1:1' },
        { title: 'Instagram — 縦長投稿', body: '1080 × 1350 px · 比率 4:5' },
        { title: 'TikTok / リール — 縦長', body: '1080 × 1920 px · 比率 9:16' },
        { title: 'YouTube — サムネイル', body: '1280 × 720 px · 比率 16:9' },
        { title: 'YouTube — チャンネルバナー', body: '2560 × 1440 px · 比率 16:9' },
        { title: 'X (Twitter) — 標準投稿', body: '1200 × 675 px · 比率 16:9' },
        { title: 'LinkedIn — プロフィールカバー', body: '1584 × 396 px · 比率 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: '1:1の正方形形式は依然として定番ですが、4:5の縦型はより広い画面スペースを占有し、ニュースフィードで最大30%多くのエンゲージメントを生み出します。',
        },
        {
          title: 'ショート動画コンテンツ',
          body: 'TikTokやリールの場合、標準は9:16です。この没入型フォーマットでは、アプリのUIで隠れないようにフォーカルポイントを完璧に合わせる必要があります。',
        },
        {
          title: 'ビジュアルエンゲージメント',
          body: 'サムネイルからバナーまで、すべての資産はクリック率において特定の重みを持ちます。正確な切り抜きにより、テキストや主要な要素が常に読み取れるようになります。',
        },
        {
          title: 'プロフェッショナルなブランディング',
          body: 'LinkedInのようなビジネスネットワークでは、鮮明さは信頼性につながります。高密度ディスプレイでピクセル化して見えないように、ヘッダーには特定の比率が必要です。',
        },
      ],
    },
    {
      type: 'title',
      text: 'アスペクト比が重要な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'アスペクト比とは、画像の幅と高さの比率のことです。これを無視すると、プラットフォーム側でズームされたり黒い帯が追加されたりすることになり、美観やオーガニックなリーチが損なわれます。',
    },
    {
      type: 'list',
      items: [
        'テキストやロゴがアプリのアイコンで切り取られるのを防ぎます。',
        '元の写真を歪ませたり引き伸ばしたりすることなく、最適なピクセル密度を維持します。',
        'すべての公式サイズを1つのウェブツールに集約することで時間を節約します。',
        '正確な寸法と容量のファイルを生成することで、読み込み速度を向上させます。',
      ],
    },
    {
      type: 'tip',
      title: '構図のヒント',
      html: '<p>手動ドラッグ機能を使用する際は、写真のメインの被写体をグリッドの交差点のいずれかに配置してみてください。これにより、ソーシャルネットワーク向けによりダイナミックでプロフェッショナルな構図を作成できます。</p>',
    },
    {
      type: 'title',
      text: '完璧な切り抜きのためのステップ',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '形式を選択する：サイドメニューからプラットフォームと投稿タイプを選択します。',
        '画像をアップロードする：ファイルをドラッグするか、ファイル選択を使用して写真をインポートします。',
        '枠を調整する：表示領域内で写真をドラッグし、ズームを使用して精密に調整します。',
        '即時書き出し：ダウンロードをクリックして、すぐに投稿できる状態の画像を取得します。',
      ],
    },
    {
      type: 'title',
      text: 'プライバシーとローカル処理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'プライバシーは完全に守られます。このリサイザーはCanvas APIを使用してブラウザ内でローカルに画像を処理します。写真は外部サーバーにアップロードされることはなく、完全なセキュリティと即時の処理速度を保証します。',
    },
    {
      type: 'title',
      text: 'ソーシャルメディア向けのプロフェッショナルな最適化',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ビジュアルコンテンツをプロフェッショナルに適応させることは、直接的な成長戦略です。当ツールはクリエイターやコミュニティマネージャーのワークフローを簡素化し、すべての投稿があらゆるデバイスとプラットフォームで完璧に見えるようにします。',
    },
  ],
  ui: {
    sidebarTitle: 'ソーシャル形式',
    uploadTitle: '画像をアップロード',
    uploadSubtitle: 'ここに写真をドラッグするか、クリックして選択',
    btnReset: 'リセット',
    btnDownload: '画像をダウンロード',
  },
};
