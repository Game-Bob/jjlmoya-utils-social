import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-thumbnail-extractor';
const title = 'YouTube サムネイル保存・抽出 (HD対応)';
const description =
  'YouTube動画のURLを入力するだけで、オリジナルのサムネイル画像を最高解像度（1080p/720p）で抽出・ダウンロードできます。透かしなしで保存可能です。';

const faqData = [
  {
    question: '抽出されるサムネイルの解像度はどれくらいですか？',
    answer:
      "このツールは、動画投稿者がアップロードした最高品質の状態である 'MaxRes'（1280x720 または 1920x1080）の取得を常に試みます。HD解像度のサムネイルがアップロードされていない場合は、利用可能な次の高解像度が自動的に表示されます。",
  },
  {
    question: 'どのようなURL形式に対応していますか？',
    answer:
      '通常の youtube.com/watch 形式に加え、短縮URLの youtu.be、モバイル版リンク、さらには YouTube ショート（Shorts）のURLにも完全対応しています。',
  },
  {
    question: 'YouTubeのサムネイルをダウンロードすることは合法ですか？',
    answer:
      'はい、個人利用、デザインの参考、パロディ、引用（フェアユース）目的でのダウンロードは完全に合法です。ただし、著作権で保護された画像を純粋に商用目的で使用する場合は、動画のライセンスを確認するなど注意が必要です。',
  },
  {
    question: '1日の利用制限はありますか？',
    answer:
      '月間や日間の制限は一切ありません。このソフトウェアはブラウザ内でURLパターンを解析するクライアントサイド方式を採用しているため、API制限を気にせずお使いいただけます。',
  },
];

const howToData = [
  {
    name: '動画のURLをコピー',
    text: 'YouTubeを開き、ブラウザのURL欄または「共有」ボタンから動画のリンクをコピーします。',
  },
  {
    name: 'リンクを貼り付け',
    text: '抽出ツールの入力フィールドにURLを入力するか、クリップボードから貼り付けます。',
  },
  {
    name: '画質を選択',
    text: 'ツールが最高画質（1080p/720p）から低画質まで、利用可能なすべての解像度を表示します。',
  },
  {
    name: '画像をダウンロード',
    text: '「ダウンロード」ボタンをクリックして、デバイスにサムネイルを保存します。',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'ドキュメントと参照先',
  bibliography: [
    {
      name: 'YouTube ヘルプ: 動画のカスタム サムネイルを追加する',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube クリエイター アカデミー: 効果的なサムネイルの作成',
      url: 'https://creatoracademy.youtube.com/',
    },
    {
      name: 'Google Developers: YouTube Data API — Thumbnails',
      url: 'https://developers.google.com/youtube/v3/docs/thumbnails',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'YouTube サムネイルをHD画質で無料ダウンロード',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube動画のサムネイルを<strong>オリジナルサイズや最高画質（Full HD または 4K）でダウンロード</strong>したい場合、この無料ツールが最も素早い解決策です。インスピレーションを得たり、自作のデザインの参考にしたり、プレゼンテーションで使用するために、あらゆるチャンネルのカバー画像を取得できます。',
    },
    {
      type: 'tip',
      title: 'ソフト不要でカバー画像を抽出',
      html: '<p>ソフトウェアのインストールや会員登録は不要です。動画のリンクをコピーして貼り付けるだけで、<strong>YouTubeのサムネイルを保存</strong>し、パソコンやスマートフォンに直接書き出すことができます。</p>',
    },
    {
      type: 'title',
      text: 'YouTube動画のサムネイルを取得する方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube動画から<strong>画像を取り出すプロセス</strong>は非常にシンプルです。以下の手順に従って、数秒で画像を手に入れましょう：',
    },
    {
      type: 'list',
      items: [
        '<strong>1. URLをコピー：</strong> YouTubeを開き、動画のリンク（ブラウザのアドレスバーまたは共有ボタンから）をコピーします。',
        '<strong>2. リンクを貼り付け：</strong> サムネイル抽出ツールの検索欄にURLを入力します。',
        '<strong>3. 画質を選択：</strong> 最高画質（1080p）から低画質（360p）まで、利用可能なすべての解像度が表示されます。',
        '<strong>4. 画像をダウンロード：</strong> ダウンロードボタンをクリックして、デバイスに画像を保存します。',
      ],
    },
    {
      type: 'title',
      text: '対応している形式と解像度',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTubeビデオのカバーダウンロードが、かつてないほど簡単になりました。このツールは、YouTuberがPhotoshopなどで作成した高品質なデザインである<strong>maxresdefault</strong>（最大解像度の画像）を自動的に検索します。HD画像がアップロードされていない場合は、次に最適なオプション（<strong>hqdefault</strong> や <strong>mqdefault</strong>）を提供します。',
    },
    {
      type: 'paragraph',
      html: 'このユーティリティは、コミュニティマネージャー、グラフィックデザイナー、コンテンツクリエイター、またはプロジェクトで<strong>動画のカバー画像をダウンロード</strong>する必要があるすべての人に最適です。また、<strong>YouTube ショート（Shorts）</strong>にも対応しているため、ショート動画のサムネイルも同様に取得可能です。',
    },
    {
      type: 'title',
      text: 'YouTubeサムネイルの専門的な活用法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTubeのサムネイルは価値の高いビジュアル資産です。これらはクリエイターによる何時間ものデザインワーク、A/Bテスト、CTR（クリック率）最適化の結果です。これらにアクセスしてダウンロードする方法を知ることで、専門的な活用の幅が広がります。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'コンテンツクリエイター',
          html: '<p>自分のジャンルのバズっている動画のサムネイルを分析し、どのような視覚的要素（フォント、配色、人物の配置、テキストなど）が高いクリック率を生んでいるかを理解しましょう。</p><ul><li><strong>ビジュアル・ベンチマーク:</strong> 業界リーダーと自分の画像を比較する。</li><li><strong>デザイン制作の参考に:</strong> 画像をダウンロードして、PhotoshopやCanvaでのデザインのヒントにする。</li><li><strong>インスピレーションの収集:</strong> 高コンバージョンなサムネイルのライブラリを構築する。</li></ul>',
        },
        {
          type: 'card',
          title: 'デザイナー & マーケター',
          html: '<p>グラフィックデザイナーやSNSマネージャーにとって、YouTubeのサムネイルに素早くアクセスできることは、プレゼンテーションや競合分析において不可欠です。</p><ul><li><strong>クライアント提案:</strong> 競合の実際の事例を提案資料に組み込む。</li><li><strong>ブランド監査:</strong> チャンネルの視覚的な一貫性を評価する。</li><li><strong>ムードボード:</strong> ぼやけたスクリーンショットではなく、高品質なビジュアル素材を収集する。</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube ショートへの対応',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'この抽出ツールは、<strong>YouTube ショート</strong>でも完全に動作します。ショート動画には、動画から自動生成される特有の縦長（9:16）フォーマットがあります。当ツールはショートのURL（<code>youtube.com/shorts/ID</code>）を自動認識し、標準の動画と同様に最適なサムネイルを抽出します。',
    },
    {
      type: 'tip',
      title: 'プライバシー保証',
      html: '<p>すべての抽出プロセスはお使いのブラウザ内で行われます。URLやデータが外部サーバーに送信されることはありません。</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'YouTubeのリンクをここに貼り付け...',
    pasteAriaLabel: 'クリップボードから貼り付け',
    helperText: '対応形式: youtube.com, youtu.be, shorts.',
    ribbonLabel: '最高画質',
    downloadBtn: '最高解像度でダウンロード',
    qualityMedium: '中画質',
    qualityStandard: '標準画質',
    qualityLow: '低画質',
    viewImage: '画像を表示',
    errorInvalid: '無効なYouTube URLです。確認してください。',
    imgAlt: 'YouTube HD サムネイル',
  },
};
