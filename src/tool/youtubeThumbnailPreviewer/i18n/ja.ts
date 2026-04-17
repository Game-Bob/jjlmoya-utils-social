import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-thumbnail-previewer';
const title = 'YouTubeサムネイルプレビュー：クリック率（CTR）向上のための無料ツール';
const description =
  'サムネイル画像をアップロードして、モバイルやデスクトップの実際のYouTubeフィードでの見栄えを確認できます。ダークモードとライトモードのシミュレーターで、クリックを即座に最適化。';

const faqData = [
  {
    question: 'なぜYouTubeサムネイルのテストが重要なのですか？',
    answer:
      'ほとんどのユーザーはモバイルデバイスでYouTubeを視聴します。PCモニターで綺麗に見えるサムネイルでも、小さな画面では文字が読めないことがあります。シミュレーターでテストすることで、どんなサイズでもテキストが鮮明で、メインの被写体が際立つことを確認できます。',
  },
  {
    question: 'このプレビューツールを使うために登録は必要ですか？',
    answer:
      'いいえ。当ツールは100%無料で、ブラウザ上で直接動作します。サムネイルを最適化するために、アカウント作成やメールアドレスの提供は一切不要です。',
  },
  {
    question: 'デザインした画像はサーバーにアップロードされますか？',
    answer:
      'いいえ、決してアップロードされません。プライバシーを最優先に考えています。ファイルを選択すると、ブラウザのメモリ内に一時的なURLとしてローカルに読み込まれます。あなた以外の誰も、テスト中のデザインを見ることはできません。',
  },
  {
    question: 'このツールはどのようにCTR（クリック率）の向上に役立ちますか？',
    answer:
      'CTRとは、サムネイルを見た人のうち、実際にクリックした人の割合です。実際の環境（ダーク vs ライト背景、モバイル vs デスクトップ）をシミュレートすることで、公開前にコントラストや構成の問題を修正でき、クリック数を増やすことができます。',
  },
  {
    question: 'YouTube公式のダークモードに対応していますか？',
    answer:
      'はい。YouTube公式アプリの各モードで使用されている正確なカラーコードを再現したテーマセレクター（ライトとダーク）を搭載しています。',
  },
];

const howToData = [
  {
    name: 'デザインをアップロード',
    text: 'アップロードエリアをクリックするか、画像ファイル（PNG、JPG、またはWebP）を直接ツールにドラッグします。',
  },
  {
    name: 'コンテキストを設定',
    text: '動画のタイトルとチャンネル名を入力して、実際のフィードに近い、よりリアルなシミュレーションを行います。',
  },
  {
    name: 'デバイスを切り替える',
    text: '「デスクトップ」と「モバイル」の表示を切り替え、さまざまな画面サイズでの視認性を確認します。',
  },
  {
    name: 'コントラストを確認',
    text: '「ダーク」テーマを有効にして、YouTubeの黒い背景に対して色が正しく際立つかどうかをチェックします。',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '関連リファレンス',
  bibliography: [
    {
      name: 'YouTubeヘルプ: カスタム動画サムネイルを追加する',
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
      text: 'YouTubeサムネイルプレビュー：チャンネルのCTRをマスターする',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTubeのエコシステムにおいて、サムネイルはコンテンツへの玄関口です。世界最高の動画、ハリウッド級の編集、オスカー級の脚本があったとしても、誰もクリックしなければ、その作品はアルゴリズムから見えない存在になってしまいます。ここで重要になるのが<strong>CTR（クリック率）</strong>であり、サムネイルはその決定要因です。',
    },
    {
      type: 'title',
      text: 'アップロード前にサムネイルをテストすべき理由',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>リアルなプレビュー：</strong>YouTubeフィードに表示される際の状態を正確に確認できます。',
        '<strong>ダーク／ライトモード：</strong>どんなユーザー設定でも色が鮮やかに見えるか確認できます。',
        '<strong>デバイスシミュレーター：</strong>PCモニターと小さなモバイル画面の両方でテキストの読みやすさをチェックできます。',
        '<strong>CTR最適化：</strong>ネイティブのインターフェースと自身のデザインを比較し、クリックを最大化。',
        '<strong>登録不要：</strong>アカウント作成なしで、画像をアップロードしてすぐにテストできます。',
        '<strong>プライバシー保護：</strong>デザインはローカルで処理され、サーバーに送信されることはありません。',
      ],
    },
    {
      type: 'paragraph',
      html: '多くのクリエイターは、大きなモニターでデザインし、お気に入りのエディタで全画面表示して満足してしまうという間違いを犯しがちです。しかし、エンドユーザーがそのように見ることは稀です。ほとんどの人は、無限スクロール中のモバイルデバイスや、ダークモードに設定されたモニターの隅でサムネイルを目にします。当サイトの<strong>YouTubeサムネイルプレビュー</strong>は、その「デザイナーの錯覚」を打ち破り、フィード上の厳しい現実を見せてくれます。',
    },
    {
      type: 'title',
      text: '技術仕様とパフォーマンス',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0.2秒', body: '応答速度' },
        { title: '4K', body: '最大解像度' },
        { title: '100%', body: 'ローカルプライバシー' },
        { title: 'HD', body: 'ネイティブ品質' },
      ],
    },
    {
      type: 'title',
      text: 'クリックの心理学：なぜサムネイルは失敗するのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '人間の脳はテキストよりも数千倍速く画像を処理します。しかし、YouTubeの競争は熾烈です。サムネイルは単に「綺麗」なだけでは不十分で、<strong>読みやすさ</strong>と<strong>コントラスト</strong>が必要です。',
    },
    {
      type: 'paragraph',
      html: 'よくある間違いは、YouTubeの背景色に溶け込んでしまう色を使ってしまうことです。ダークグレーを多用し、視聴者がダークモードで視聴している場合、あなたの動画は周辺視野から消えてしまいます。このテスターを使えば、テーマを切り替えて、どんな状況でもデザインが「ポップ」に（際立って）見えるかを確認できます。',
    },
    {
      type: 'title',
      text: '直接比較：デザイン vs 現実',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'サムネイルのテストに30秒かける価値はあるでしょうか？答えは、圧倒的な「イエス」です。最適化されたサムネイルは、最初の24時間で視聴回数を倍増させることがあり、YouTubeのAIにそのコンテンツに「引き」があることを知らせます。',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Photoshop / Canvaでのデザイン',
          body: '実際のサイズ感の誤認 ・ アプリの背景とのコントラストを無視 ・ テキストは読めるように見える（実際は読めないことも） ・ UI要素（再生時間、アバター）が見えない',
        },
        {
          title: 'YouTubeサムネイルプレビュー',
          body: 'ホームフィードでの実際の見え方 ・ ダーク vs ライトモードでのコントラスト検証 ・ モバイルでのテキスト視認性を保証 ・ タイトルとチャンネル名のシミュレート',
        },
      ],
    },
    {
      type: 'title',
      text: 'CTR 10%超えを目指すサムネイルチェックリスト',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最終的なデザインを書き出す前に、プロ仕様のシミュレーターを使って以下のリストを確認してください。',
    },
    {
      type: 'list',
      items: [
        '小さなモバイル画面でもテキストは読めますか？',
        '背景とメインの被写体のコントラストは十分ですか？',
        'ダークモードの黒い背景でもサムネイルは綺麗に見えますか？',
        '動画のタイトルが画像の重要な情報を隠していませんか？',
        '再生時間の表示（黒いボックス）が重要なものを隠していませんか？',
        '顔やメインオブジェクトの表情が縮小サイズでも伝わりますか？',
      ],
    },
    {
      type: 'title',
      text: '高インパクトなサムネイルの構造',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '世界トップクラスのチャンネルの分析に基づくと、勝ち筋のサムネイルは通常、以下のような構造パターンに従っています。',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'メインの被写体',
          body: '注意を引く主役 ・ 輪郭をはっきりさせ、わずかな境界線や彩度の調整を活用。',
        },
        {
          title: 'テキスト（最大3単語）',
          body: '瞬時の文脈把握 ・ 太字のサンセリフ体と補色を使用。',
        },
        {
          title: 'ぼかした背景',
          body: '平面の分離 ・ 奥行きを加え、メインの被写体が画面から「飛び出す」ように演出。',
        },
        {
          title: '再生時間スペース',
          body: 'ミスを避ける ・ 右下隅に顔やテキストを配置しない。',
        },
      ],
    },
    {
      type: 'tip',
      title: 'デッドゾーンのトリック',
      html: '<p>YouTubeは常にサムネイルの右下隅にビデオの長さを表示する黒いボックスを配置します。何千ものクリエイターがそのゾーンに重要な要素を置いてしまい、アプリで隠れてしまうという失敗をしています。当ツールはこのボックスをシミュレートするので、最高のショットが隠れる心配はありません。</p>',
    },
    {
      type: 'title',
      text: 'ツールの利点と制限事項',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: '超高速で反応の良いインターフェース',
          body: '制限：画像編集機能はありません（CanvaやPSを使用してください）',
        },
        {
          title: '正確なアプリおよびWebのモックアップ',
          body: '制限：プレロール広告のシミュレートは行いません',
        },
        {
          title: '無料で煩わしい広告なし',
          body: '制限：ローカルファイルのみをサポート',
        },
      ],
    },
    {
      type: 'title',
      text: '「スプリット」モード（直接比較）の活用',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'これは目玉機能です。スプリットモードを有効にすると、ライトモードとダークモードの両方での見え方を同時に確認できます。カラーパレットがどんな設定でも通用するか、あるいは明るさやコントラストの調整が必要かを判断する決定的な方法です。',
    },
    {
      type: 'title',
      text: 'プライバシー：デザインはクラウドへ送信されません',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '公開前のサムネイルは、ローンチに向けた重要な戦略の一部であることを私たちは理解しています。そのため、このツールはブラウザエンジン内のみで動作するように設計されています。<strong>インターネットへのアップロードは行われません</strong>。選択したファイルは一時的なローカルURLで読み込まれ、タブを閉じると消去されます。知的財産は100%あなたの管理下にあります。',
    },
    {
      type: 'title',
      text: '結論：完璧なピクセルを保証',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '推測はやめて、検証を始めましょう。JJLMoyaの<strong>YouTubeサムネイルプレビュー</strong>は、アマチュアのクリエイターとプロの制作陣を分かつ無料ツールです。フォントサイズや被写体の位置を少し調整するだけで、埋もれてしまう動画と、バズる動画の分かれ道になります。',
    },
    {
      type: 'paragraph',
      html: '今すぐチャンネルの最適化を始め、動画にふさわしいクリック率を与えましょう！',
    },
  ],
  ui: {
    dropFeedTitle: 'サムネイルをドラッグ',
    dropFeedSub: 'PNG, JPG or WebP ・ 複数画像に対応',
    dropAvatarTitle: 'アバターをドラッグ',
    dropAvatarSub: 'チャンネルのプロフィール画像',
    labelTitle: '動画タイトル',
    labelChannel: 'チャンネル名',
    defaultTitle: 'ここに動画タイトルを入力',
    defaultChannel: 'チャンネル名',
    btnDesktop: 'デスクトップ',
    btnMobile: 'モバイル',
    btnClear: 'クリア',
    labelLight: 'ライト',
    labelDark: 'ダーク',
    views0: '120万回視聴 ・ 1時間前',
    views1: '45分前',
    views2: '25万回視聴 ・ 1日前',
    views3: '310万回視聴 ・ 1週間前',
  },
};
