import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'social-account-value-calculator';
const title = 'ソーシャルメディアアカウント価値計算機：TikTok＆Instagramの価格設定';
const description =
  'スポンサー投稿の適正な料金を確認しましょう。当社の計算機は、フォロワー数、エンゲージメント、ジャンルを分析し、適切な市場価値を算出します。';

const faqData = [
  {
    question: 'アカウント価値計算機は無料ですか？',
    answer:
      'はい、このツールは100%無料です。会員登録やソーシャルメディアアカウントとの連携も不要です。公開されている指標を入力するだけで利用できます。',
  },
  {
    question: 'なぜTikTokの価値はInstagramと異なるのですか？',
    answer:
      'TikTokはアルゴリズムによるリーチや再生回数に大きく依存していますが、Instagramは依然としてコミュニティの規模やフォロワーの忠誠心に強い重みを置いています。',
  },
  {
    question: '料金を高く設定するための良いエンゲージメント率はどれくらいですか？',
    answer:
      '一般的に、3%以上のエンゲージメント率は健全であると見なされます。10%を超えるアカウントは「プレミアムプロフィール」と見なされ、大幅なプレミアム料金を設定できる可能性があります。',
  },
  {
    question: 'ジャンルによって価格はそんなに変わるのですか？',
    answer:
      'もちろんです。金融や管理ソフトに興味があるフォロワーは、娯楽やミームを求めているフォロワーよりも、ブランドにとってのコンバージョン価値がはるかに高くなります。',
  },
];

const howToData = [
  {
    name: 'プラットフォームを選択する',
    text: 'TikTokまたはInstagram、どちらのアカウント価値を計算するか選択します。',
  },
  {
    name: '指標を入力する',
    text: 'フォロワー数、および直近10件の投稿の平均再生回数と「いいね」数を入力します。',
  },
  {
    name: 'ジャンルを選択する',
    text: 'コンテンツを最もよく表すカテゴリを選択し、市場の需要に基づいて価値を調整します。',
  },
  {
    name: '予算を確認する',
    text: 'プロフェッショナルなコラボレーションのために請求すべき推定範囲が表示されます。',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典＆市場調査',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: 2026年インフルエンサー料金',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: TikTok＆Instagram エンゲージメントレポート',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: ソーシャルメディア統計',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'このガイドで学べること',
      html: '<ul><li>2026年のデータに基づくあなたの<strong>真の市場価値</strong>。</li><li><strong>TikTok対Instagram</strong>の影響の違い。</li><li><strong>ジャンル</strong>がCPMにどのように劇的な影響を与えるか。</li><li>ブランドと<strong>交渉するためのプロフェッショナルなテンプレート</strong>。</li></ul>',
    },
    {
      type: 'title',
      text: 'アカウント価値計算機：TikTokやInstagramのスポンサー投稿でいくら請求すべきか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'あなたがコンテンツクリエイター、インフルエンサー、あるいは単にソーシャルメディアでアクティブなコミュニティを持っているなら、一度はこう思ったことがあるはずです。「<strong>私のアカウントには実際どれくらいの価値があるのか？</strong>」あるいは「<strong>ブランドとのコラボレーションでいくら請求すべきか？</strong>」と。',
    },
    {
      type: 'title',
      text: 'クリエイターエコノミーの台頭',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'インフルエンサーマーケティングは成熟し、もはやフォロワー数だけが重要ではありません。ブランドは結果と深い繋がりを求めています。当社のツールは、実際の市場データに基づいた確かな出発点を提供します。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>インフルエンサーマーケティング投資の年間成長率</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>健全と見なされる平均エンゲージメント率</p>',
        },
        {
          type: 'card',
          title: '¥2,000–¥7,000',
          html: '<p>価値の高いジャンルにおける平均CPM（推定）</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'アカウントの価値を決定する要因',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '数年前に信じられていたこととは異なり、フォロワー数は氷山の一角にすぎません。以下が基本的な構成要素です：',
    },
    {
      type: 'title',
      text: '1. エンゲージメント率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'これが重要な指標です。コミュニティの何パーセントがあなたのコンテンツと積極的に交流しているかを測定します。活発な交流がある小さなアカウントは、交流のない大きな「ゴースト」アカウントよりもはるかに価値があります。',
    },
    {
      type: 'tip',
      title: 'エンゲージメントのヒント',
      html: '<p>アルゴリズムにポジティブなシグナルを送るために、投稿後数時間はコメントに返信するようにしましょう。</p>',
    },
    {
      type: 'title',
      text: '2. 平均リーチ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'TikTokでは、レコメンデーションアルゴリズムによりリーチが変動しやすくなっています。Instagramでは、新しいオーディエンスを獲得するために、静止画よりもリール動画が重視されるようになっています。',
    },
    {
      type: 'title',
      text: '3. ジャンルまたはカテゴリ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'すべてのオーディエンスが同じ価値を持つわけではありません。テック系や金融系のクリエイターは、最終顧客の価値が高いため、一般向け娯楽系クリエイターよりもはるかに高い料金を設定できます。',
    },
    {
      type: 'title',
      text: '高単価なカテゴリ（CPM）',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>金融＆ビジネス：</strong> 1投稿あたりの報酬が最も高いジャンル。',
        '<strong>テクノロジー＆ガジェット：</strong> 即座の購入意欲が高い。',
        '<strong>ヘルス＆フィットネス：</strong> 機器やアプリの市場が大きい。',
        '<strong>住宅リノベーション：</strong> プロジェクト単価が高く、ROIが高い。',
      ],
    },
    {
      type: 'title',
      text: 'TikTok対Instagram：どこにチャンスがある？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'どちらも縦型動画を使用していますが、収益化モデルは異なります。Instagramはブランディング、TikTokは純粋なパフォーマンスです。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>ブランディング、美学、忠誠心に焦点を当てます。長期的なキャンペーンに最適です。</p><ul><li>コミュニティ規模を重視</li><li>直接販売につながるストーリーズ</li><li>安定した成長</li><li>成熟したオーディエンス</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>極限の拡散の世界。アルゴリズムがフォロワーを支配します。短期的な爆発的ROI。</p><ul><li>大規模なリーチを重視</li><li>圧倒的な拡散ポテンシャル</li><li>低い制作コスト</li><li>非常にアクティブな視聴者</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '結果を交渉に活かす方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当社のツールから得られた価格帯をガイドとして利用してください。このテンプレートを使用して、自信を持って指標を提示しましょう：',
    },
    {
      type: 'tip',
      title: '交渉用テンプレート',
      html: '<p>[ブランド名]様、ご連絡ありがとうございます。現在のリーチ指標（平均[X]再生）と[X]%のエンゲージメント率に基づき、[リール/TikTok]への統合料金は[価格 ¥]となります。これには、スクリプト作成、動画制作、24時間のバイオリンク、2本の拡散用ストーリーズ、30日間の使用権が含まれます。</p>',
    },
    {
      type: 'title',
      text: '単価を上げるための戦略',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>交流を促す：</strong> すべてのコメントに返信しましょう。',
        '<strong>質を高める：</strong> 音声は良い動画の50%を占めます。',
        '<strong>専門化する：</strong> 「専門家」になることで、より高い料金を請求できます。',
        '<strong>メディアキットを作成する：</strong> データを基に成功実績を文書化しましょう。',
      ],
    },
    {
      type: 'title',
      text: '推定価値は信頼できますか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当社の計算機は、国際的なエージェンシーからの集約データを使用しています。ただし、季節性（クリスマスキャンペーンは高単価になるなど）などの要因によって最終的な価格は変動する場合があります。',
    },
    {
      type: 'tip',
      title: 'クリエイターへの注意',
      html: '<p>このツールは推定値です。常にブランドから依頼されたコンテンツの複雑さに合わせて価格を調整してください。</p>',
    },
  ],
  ui: {
    sectionTag: '監査パラメータ',
    labelFollowers: 'コミュニティ（フォロワー）',
    labelAvgViewsTiktok: 'インパクト（動画あたりの再生数）',
    labelAvgViewsIg: 'リーチ（プロフィールリーチ）',
    tooltipViews: '直近10本の動画の再生回数を合計し、10で割った数値です。',
    labelEngagement: 'ロイヤリティ（いいね+コメント）',
    tooltipEngagement: '直近10件の投稿のいいね数とコメント数の合計を10で割った数値です。',
    labelNiche: '市場ジャンル',
    nicheEntertainment: 'エンターテインメント',
    nicheFinance: '金融＆不動産',
    nicheTech: 'テクノロジー＆SaaS',
    nicheFitness: 'ライフスタイル＆健康',
    nicheFashion: 'ファッション＆美容',
    nicheTravel: '観光＆旅行',
    nicheFood: '料理＆グルメ',
    nicheGaming: 'ゲーム＆eスポーツ',
    nicheHome: '住宅＆リフォーム',
    btnCalculate: '価値レポートを生成',
    emptyTitle: '商業的実現可能性分析',
    emptyDesc: 'プロフィールの指標を入力して、現在の市場価値を予測します。',
    roiLabel: '推奨料金の評価',
    rangeLabel: '推奨範囲：',
    audienceQuality: 'オーディエンスの質',
    metricER: 'エンゲージメント率',
    investmentEfficiency: '投資効率',
    metricCPM: '予測CPM',
    insightText: 'この評価は、日本市場の平均CPM（2026年）に基づいています。',
    currencySymbol: '¥',
    numberLocale: 'ja-JP',
  },
};
