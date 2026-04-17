import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'social-safe-zones';
const title = 'Social Safe Zones：TikTok、リール、Shorts用ビデオシミュレーター';
const description =
  '実際のソーシャルメディアのインターフェースで画像や動画をプレビューします。コンテンツが常に表示されるようにし、誤ったトリミングを避けます。';

const faqData = [
  {
    question: 'ソーシャルメディアの「セーフゾーン」とは何ですか？',
    answer:
      'ユーザー名、説明文、インタラクションボタン（いいね、共有）などのインターフェース要素によって隠されるリスクなく、コンテンツが表示される画面領域のことです。また、一部のデバイスで適用される自動トリミングも考慮されます。',
  },
  {
    question: 'TikTok動画が上下にトリミングされて見えるのはなぜですか？',
    answer:
      'TikTokは9:16のアスペクト比を使用しています。動画がそれより広い場合、アプリは画面いっぱいに表示するためにズームし、トリミングが発生します。また、下部のインターフェースが動画の一部を覆うため、重要な要素は中央に配置する必要があります。',
  },
  {
    question: 'リールとYouTube Shortsのセーフゾーンは同じですか？',
    answer:
      '非常に似ていますが、同一ではありません。YouTube Shortsのボタンはリールとは異なる位置に配置されています。当ツールでは、プラットフォームを切り替えて、すべてのプラットフォームでデザインを確認できます。',
  },
  {
    question: '右下隅にテキストを置くとどうなりますか？',
    answer:
      'そこにはプロフィール、ハート、コメントのアイコンがあるため、おそらく見えなくなるか、非常に読みにくくなります。理想的には、テキストや顔は中央上部のエリア（セーフゾーン）に配置してください。',
  },
];

const howToData = [
  {
    name: '画像または動画を読み込む',
    text: 'プレビューしたいファイルをアップロードします。処理はローカルでプライベートに行われ、インターネットにアップロードされることはありません。',
  },
  {
    name: 'プラットフォームを選択する',
    text: 'TikTok、リール、YouTube Shortsの中から選択して、対応するインターフェースオーバーレイを有効にします。',
  },
  {
    name: '読みやすさを確認する',
    text: 'テキスト、字幕、または主要なブランド要素がソーシャルネットワークのアイコンで覆われていないか検証します。',
  },
  {
    name: '調整してエクスポートする',
    text: '隠れているものがある場合は、元の動画エディタで要素を移動し、完璧に収まるまで再度テストします。',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '公式プラットフォームドキュメント',
  bibliography: [
    {
      name: 'TikTokクリエイターポータル：動画の最適化とセーフゾーン',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business：リールのベストプラクティス',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTubeヘルプ：YouTube Shortsを作成する',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators：動画のセーフゾーンとアスペクト比',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'セーフゾーンマスターガイド：リール、TikTok、Shortsを最適化する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '縦型コンテンツが飽和している世界では、第一印象は技術的なものです。クリエイターが犯す最大の過ちは、自分の<strong>動画や画像</strong>がプラットフォーム独自のインターフェースとどのように干渉するかを無視することです。各ソーシャルネットワーク（TikTok、リール、YouTube Shorts）は、ボタン、テキスト、プロフィールのレイヤーを重ねて表示するため、せっかくの構図の視覚的インパクトが損なわれる可能性があります。',
    },
    {
      type: 'paragraph',
      html: 'このツールを使用すると、メディアファイルを読み込み、フレームのどの部分がインターフェースによって隠されるかを正確にプレビューできます。これは単なる<strong>字幕</strong>の問題ではありません。動画の中の顔、製品、または主要なアクションが「いいね」ボタンや長い説明文の下に埋もれてしまわないようにするためのものです。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok：最も侵入的なインターフェース',
          html: '<p>TikTokは最も密度の高いインターフェースを持っています。右側には、幅の約15%を占めるアイコンの列があります。下部では、説明文が4〜5行に及ぶことがあり、下から画面のほぼ3分の1を覆います。</p><ul><li><strong>下部マージン：</strong>説明文とユーザー名のエリアを避けるため、下部250pxを空けておきます。</li><li><strong>右側マージン：</strong>右端から100px以内にはテキストを配置しないようにします。</li><li><strong>上部：</strong>「フォロー中」と「おすすめ」のボタンが上部中央の帯を占めています。</li></ul>',
        },
        {
          type: 'card',
          title: 'Instagramリール：フィード要因',
          html: '<p>TikTokとは異なり、リールをメインフィードから見る際、動画は4:5の形式にトリミングされます。つまり、9:16の動画の上下15%に不可欠な情報を配置すると、フィードでは消えてしまいます。</p><ul><li><strong>4:5の法則：</strong>フィードでの視認性を確保するため、タイトルや主要な要素は中央ゾーンに配置します。</li><li><strong>インターフェース：</strong>リールのアイコンはTikTokよりも控えめで、左右のマージンには少し余裕があります。</li><li><strong>オーディオボタン：</strong>右下に配置され、通常、TikTokの回転ディスクよりも覆われる範囲は非常に小さいです。</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts：右側に注意',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shortsは非対称なインターフェースを持っています。チャンネル登録ボタンは非常に目立ち、単色（通常は黒または白）であるため、右下に大きな視覚的死角を生み出します。',
    },
    {
      type: 'list',
      items: [
        '<strong>右側マージン：</strong>右下の20%エリアには、テキストや重要な要素を配置しないようにします。',
        '<strong>下部マージン：</strong>説明文とユーザー名を避けるため、下部150pxを空けておきます。',
        '<strong>上部：</strong>チャンネル登録ボタンやその他の要素が上部中央の帯を占めています。',
      ],
    },
    {
      type: 'title',
      text: '縦型デザインに関する重要な疑問',
      level: 2,
    },
    {
      type: 'title',
      text: '主要な要素（顔、テキスト、製品）はどこに配置すべきか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '主要なアクションの「ゴールデンゾーン」は、動画の中央3分の1です。人物を撮影する場合は、目と口がこのゾーン内に収まるようにしてください。重要なグラフィック要素は、下部の説明文を避けるため、幾何学的な中心からわずかに上にずらす必要があります。',
    },
    {
      type: 'title',
      text: 'アップロードすると動画がぼやけて見えるのはなぜか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '品質自体ではなく、スケーリングの問題であることが多いです。常に1080x1920、30または60fpsで記録してください。重いエフェクトを多用する場合は4Kを避けてください。プラットフォームは大きなファイルを強力に圧縮するためです。',
    },
    {
      type: 'title',
      text: 'スマートフォンのベゼルについて',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最近のスマートフォンには画面上にノッチやカメラホールがあることを忘れないでください。当ツールには上部の安全マージンが含まれているため、コンテンツが時計やシステムアイコン（バッテリー、信号）と重なることはありません。',
    },
    {
      type: 'title',
      text: 'バイラル動画の解剖学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ソーシャルメディア向けのデザインは単なる美学ではなく、<strong>ユーザビリティ</strong>です。プラットフォームのアイコンが邪魔でテキストを読むのに苦労する場合、ユーザーはすぐに次の動画にスワイプしてしまいます。視覚的な摩擦があると、維持率（視聴時間）は急激に低下します。',
    },
    {
      type: 'paragraph',
      html: '例えばYouTube Shortsでは、インターフェースが非対称です。登録ボタンは非常に目立ちます。このシミュレーターを使用して不透明度を調整することで、カラーパレットがネイティブのUIカラーとどのように干渉するかを理解できます。',
    },
    {
      type: 'tip',
      title: 'クリエイティブ・品質管理ツール',
      html: '<p>何事も運任せにしないクリエイターのために設計されました。</p>',
    },
  ],
  ui: {
    labelConfig: '設定',
    labelPlatform: '対象プラットフォーム',
    labelUpload: 'コンテンツのアップロード',
    uploadPrompt: '画像または動画を選択',
    uploadLink: 'または例を使用する',
    loadContent: 'コンテンツを読み込む',
    labelOpacity: 'インターフェースの透明度',
    labelMask: '注意が必要なゾーンをグレーアウト',
    labelGrid: '三分割法',
    btnReset: 'キャンバスをリセット',
    bannerTiktok: 'TikTok 9:16のシミュレーション',
    bannerReels: 'リール 9:16のシミュレーション',
    bannerShorts: 'YouTube Shorts 9:16のシミュレーション',
    nameTiktok: 'TikTok',
    nameReels: 'リール',
    nameShorts: 'YouTube Shorts',
    ttFollowing: 'フォロー中',
    ttForYou: 'おすすめ',
    ttDescription: 'コンテンツクリエイター向けの実際のインターフェースデザイン。 #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - オリジナル楽曲',
    ttNavHome: 'レコメンド',
    ttNavFriends: '友達',
    ttNavInbox: '受信箱',
    ttNavProfile: 'プロフィール',
    reelsFollow: 'フォローする',
    reelsDescription: '本物と同一のインターフェースです。 #reels #ux #simulator',
    reelsAudio: 'Trending Music - オリジナルオーディオ',
    shortsSubscribe: 'チャンネル登録',
    shortsDislike: '低評価',
    shortsShare: '共有',
    shortsRemix: 'リミックス',
    shortsDescription: 'Shortsの実際のインターフェースをシミュレート！ #youtube #shorts',
  },
};
