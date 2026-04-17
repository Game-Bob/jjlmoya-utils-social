import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-text-formatter';
const title = 'Redditテキスト整形ツール：クリーンアップとMarkdown修正';
const description =
  'Reddit投稿用の高度なテキストクリーナー。欠落している改行を修正し、Markdownを壊す連続したスペースや隠し文字を削除します。';

const faqData = [
  {
    question: 'なぜRedditでテキストの改行が消えてしまうのですか？',
    answer:
      'RedditはMarkdownを使用しています。通常の改行には行末でスペースを2回入力してからEnterを押すか、新しい段落を作成するためにEnterを2回押す必要があります。当ツールは、自動的に2重改行を挿入することでこれを処理します。',
  },
  {
    question: '隠し文字や不可視文字とは何ですか？',
    answer:
      '複雑なワープロからコピーすると、ゼロ幅の書式設定マーカーが付着することがよくあります。これらの要素は通常のウェブページでは見えませんが、Markdownのエコシステムを壊す可能性があります。',
  },
  {
    question: 'このテキストクリーナーを使用するのは安全ですか？',
    answer:
      '完全に安全です。スクリプトはすべてクライアント側（ブラウザ内）で実行されます。テキストがサーバーに送信されることはなく、ここに貼り付けた内容に他の人がアクセスすることもありません。',
  },
  {
    question: 'Twitterや他のSNSにも使えますか？',
    answer:
      'はい。Redditの投稿修正以外にも、連続したスペースや奇妙な文字の削除は、ブログ、Twitter、古いフォーラムなど、クリーンでニュートラルなテキストが必要なあらゆるソーシャルプラットフォームでの公開に役立ちます。',
  },
];

const howToData = [
  {
    name: 'テキストを貼り付ける',
    text: 'Word、Googleドキュメント、または任意のソースからテキストをコピーし、入力フィールドに貼り付けます。',
  },
  {
    name: 'オプションを選択する',
    text: '段落の修正、スペースの削除、隠し文字のクリーンアップなど、必要に応じてオプションをオンまたはオフにします。',
  },
  {
    name: '結果を確認する',
    text: 'クリーンアップされたテキストが出力フィールドにリアルタイムで表示され、公開できる状態になります。',
  },
  {
    name: 'コピーして投稿する',
    text: '「テキストをコピー」をクリックし、Redditやフォーラムに直接貼り付けます。',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Redditヘルプ：投稿やコメントでのテキストの書式設定',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdownガイド',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Redditおよびウェブフォーラム向けの究極の整形ツール',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Markdownに依存するRedditなどのプラットフォームで投稿を作成するのは、フラストレーションが溜まることがあります。複雑なワープロやウェブページからテキストをコピーして貼り付ける際の一般的な問題は、改行が変更されてしまうことです。提出すると、元の段落構造が無視され、読みにくい固まりになってしまうことがよくあります。当整形ツールはこの問題を根本から解決します。',
    },
    {
      type: 'title',
      text: 'Redditテキストクリーナーの仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '処理エンジンは、テキストに対して複数のフィルタをリアルタイムで実行します。まず、改行に対処します。Redditでは、段落の区切りにMarkdownソースコードで2つの新しい行が必要な特定の形式が要求されます。クリーナーはテキストを分析し、単一の改行を自動的に2重改行に変換し、既存の段落を損なうことなく過度なスペースの発生を防ぎます。',
    },
    {
      type: 'paragraph',
      html: '次に、不可視文字や連続したスペースを削除します。ウェブサイトからテキストをコピーすると、フォーマットを壊したりフォーラムで奇妙な動作を引き起こしたりするゼロ幅文字を一緒に引きずってくることがよくあります。クリーナーはこれらの侵入的なウェブ要素を排除し、繰り返されるスペースを1つのクリーンなスペースに正規化します。オプションで、コンテンツからすべての生のハイパーリンクを取り除き、完全にニュートラルなテキストを投稿することもできます。',
    },
    {
      type: 'title',
      text: '専用テキストクリーナーを使用するメリット',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>読みやすさの最適化：</strong> Redditの読者が、威圧的な言葉の壁ではなく、適切に構造化されたテキストを確実に目にできるようにします。',
        '<strong>時間の節約：</strong> 壊れたフォーマットを修正するために何百回もEnterを押す必要はもうありません。コンテンツを貼り付ければ、1秒以内に出力準備が整います。',
        '<strong>メタデータとウェブジャンクの削除：</strong> ゼロ幅スペースによって引き起こされる奇妙なスタイルや崩れから投稿を保護します。',
        '<strong>高度なプライバシー：</strong> すべての処理はクライアント側で行われます。テキストがブラウザの外に出たり、外部サーバーに保存されたりすることはありません。',
      ],
    },
    {
      type: 'title',
      text: 'ワープロとRedditの問題',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microsoft WordやGoogleドキュメントなどのアプリケーションは、テキストの上にリッチな書式の不可視レイヤーを追加します。その内容をそのまま基本エディタやRedditのMarkdownモードに貼り付けると、リッチな書式が消え、構造のない混合物が残ることがよくあります。Redditはかなり厳格なMarkdownの変種を使用しています。Redditの構文に慣れていない場合や、エッセイやストーリーをフォーラムに転送するプロセスをスムーズにしたい場合、まずここでテキストをクリーンアップすることで、単に読みにくいという理由で投稿が低評価を受けることを防げます。',
    },
    {
      type: 'title',
      text: 'フォーラムでの投稿に関するベストプラクティス',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '議論を呼び起こし、コミュニティの注目を維持するためには、正しい書式設定が不可欠です。行が非常に長い、または段落が存在しない投稿は、最初の数文で放棄されることがよくあります。このクリーニングツールを使用して、構造的な基盤を築いてください。次に、太字や斜体などの書式をRedditエディタ自体の中で戦略的に追加し、重要なアイデアを強調します。常にプレビューを確認し、構造化されたリストを活用して重要なポイントや詳細なガイドを列挙してください。',
    },
    {
      type: 'title',
      text: '変換例',
      level: 3,
    },
    {
      type: 'tip',
      title: '整形の前後',
      html: '<p><strong>元の貼り付けられたテキスト：</strong></p><pre>こんにちは。これは1行目です。\nそしてこれが2行目になるはずでした。\nでもRedditでは貼り付けるとすべてが繋がってしまいます。</pre><p><strong>整形後のテキスト：</strong></p><pre>こんにちは。これは1行目です。\n\nそしてこれが2行目になるはずでした。\n\nでもRedditでは貼り付けるとすべてが繋がってしまいます。</pre>',
    },
    {
      type: 'title',
      text: 'Redditテキスト整形ツールに関するよくある質問',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Redditの編集ルールとどのように関わるべきかについて、正しい答えを見つけるのは必ずしも簡単ではありません。有効な形式や、膨大なテキストの塊によるペナルティを回避する方法について、FAQセクションで主な質問にお答えしています。',
    },
  ],
  ui: {
    labelInput: '原文',
    placeholderInput: 'ここに原文を貼り付けてください...',
    labelOptions: '整形オプション',
    optionParagraphs: 'Reddit形式の段落を修正する',
    optionSpaces: '連続したスペースを削除する',
    optionInvisible: '隠れたウェブ文字をクリーンアップする',
    optionLinks: 'URLを抽出する（テキストのみ）',
    labelOutput: 'クリーンなテキスト',
    placeholderOutput: 'クリーンアップ結果がここに表示されます...',
    btnCopy: 'テキストをコピー',
    btnCopied: 'コピー済み',
  },
};
