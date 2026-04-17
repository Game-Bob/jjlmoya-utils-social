import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-text-formatter';
const title = 'Reddit 텍스트 포맷터: 클리너 및 마크다운 수정 도구';
const description =
  'Reddit 게시물을 위한 고급 텍스트 클리너입니다. 누락된 줄 바꿈을 수정하고, 마크다운을 깨뜨리는 다중 공백 및 숨겨진 문자를 제거합니다.';

const faqData = [
  {
    question: 'Reddit에서 내 텍스트의 줄 바꿈이 왜 사라지나요?',
    answer:
      'Reddit은 마크다운을 사용합니다. 일반적인 줄 바꿈을 위해서는 줄 끝에 공백을 두 번 입력한 후 Enter를 누르거나, 새 단락을 만들려면 Enter를 두 번 눌러야 합니다. 저희 도구는 이중 줄 바꿈을 삽입하여 이를 자동으로 처리합니다.',
  },
  {
    question: '숨겨진 문자 또는 보이지 않는 문자란 무엇인가요?',
    answer:
      '복잡한 워드 프로세서에서 복사할 때 너비가 0인 서식 마커가 함께 붙는 경우가 많습니다. 이러한 요소는 일반 웹 페이지에서는 보이지 않지만 마크다운 생태계를 깨뜨릴 수 있습니다.',
  },
  {
    question: '이 텍스트 클리너를 사용하는 것이 안전한가요?',
    answer:
      '완전히 안전합니다. 스크립트는 전적으로 클라이언트 측(사용자 브라우저)에서 실행됩니다. 귀하의 텍스트는 서버로 전송되지 않으며 다른 누구도 귀하가 여기에 붙여넣은 내용에 액세스할 수 없습니다.',
  },
  {
    question: '트위터나 다른 네트워크에서도 사용할 수 있나요?',
    answer:
      '네, Reddit 게시물 수정 외에도 다중 공백 및 이상한 문자를 제거하는 기능은 블로그, 트위터, 오래된 phpBB 포럼 또는 깨끗하고 중립적인 텍스트가 필요한 모든 소셜 플랫폼에 게시할 때 유용합니다.',
  },
];

const howToData = [
  {
    name: '텍스트 붙여넣기',
    text: '워드, 구글 문서 또는 기타 소스에서 텍스트를 복사하여 입력 필드에 붙여넣습니다.',
  },
  {
    name: '옵션 선택',
    text: '단락 수정, 공백 제거, 숨겨진 문자 제거 등 필요에 따라 옵션을 켜거나 끕니다.',
  },
  {
    name: '결과 검토',
    text: '깨끗해진 텍스트가 출력 필드에 실시간으로 표시되며, 게시할 준비가 됩니다.',
  },
  {
    name: '복사 및 게시',
    text: '"텍스트 복사"를 클릭하고 Reddit 또는 포럼에 직접 붙여넣습니다.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Reddit 도움말: 게시물 및 댓글의 텍스트 서식 지정',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit 마크다운 가이드',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Reddit 및 웹 포럼을 위한 궁극의 포맷팅 도구',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '마크다운을 사용하는 Reddit이나 다른 플랫폼에서 게시물을 작성하는 것은 실망스러울 수 있습니다. 복잡한 워드 프로세서나 웹 페이지에서 텍스트를 복사하여 붙여넣을 때 발생하는 일반적인 문제는 줄 바꿈이 변경된다는 것입니다. 콘텐츠를 제출하면 원래의 단락 구조가 무시되어 읽기 힘든 덩어리가 되는 경우가 많습니다. 저희 포맷팅 도구는 이 문제를 근본적으로 해결합니다.',
    },
    {
      type: 'title',
      text: 'Reddit 텍스트 클리너 작동 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '처리 엔진은 텍스트에 대해 여러 필터를 실시간으로 실행합니다. 먼저 줄 바꿈 문제를 해결합니다. Reddit은 단락 구분을 위해 마크다운 소스 코드에 두 개의 빈 줄이 필요한 특정 형식을 요구합니다. 클리너는 텍스트를 분석하고 단일 줄 바꿈을 자동으로 이중 줄 바꿈으로 변환하여 기존 단락을 그대로 유지하면서 과도한 간격이 발생하는 것을 방지합니다.',
    },
    {
      type: 'paragraph',
      html: '둘째, 이 도구는 보이지 않는 문자 및 다중 공백을 제거합니다. 웹사이트에서 텍스트를 복사할 때 포맷팅을 깨뜨리거나 포럼에서 이상한 동작을 유발하는 너비가 0인 문자가 포함되는 경우가 많습니다. 클리너는 이러한 방해 요소를 제거하고 반복되는 공백을 하나의 깨끗한 공백으로 정규화합니다. 선택적으로 콘텐츠에서 모든 원시 하이퍼링크를 제거하여 완전히 중립적인 텍스트를 게시할 수도 있습니다.',
    },
    {
      type: 'title',
      text: '전문 텍스트 클리너 사용의 장점',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>가독성 최적화:</strong> Reddit의 독자들이 위협적인 텍스트 장벽 대신 적절하게 구조화된 텍스트를 볼 수 있도록 보장합니다.',
        '<strong>시간 절약:</strong> 깨진 서식을 수정하기 위해 Enter 키를 수백 번 누르는 수고를 덜어줍니다. 콘텐츠를 붙여넣으면 1초 이내에 준비가 완료됩니다.',
        '<strong>메타데이터 및 웹 정크 제거:</strong> 너비가 0인 공백으로 인해 발생하는 이상한 스타일이나 깨짐으로부터 게시물을 보호합니다.',
        '<strong>높은 개인정보 보호:</strong> 모든 처리는 클라이언트 측에서 이루어집니다. 텍스트는 브라우저를 떠나지 않으며 외부 서버에 저장되지 않습니다.',
      ],
    },
    {
      type: 'title',
      text: '워드 프로세서와 Reddit의 문제',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microsoft Word 또는 Google 문서와 같은 애플리케이션은 텍스트에 보이지 않는 서식 레이어를 추가합니다. 해당 콘텐츠를 기본 에디터나 Reddit의 마크다운 모드에 직접 붙여넣으면 서식이 사라지고 구조 없는 혼합물만 남는 경우가 많습니다. Reddit은 상당히 엄격한 마크다운 규칙을 사용합니다. Reddit 구문에 익숙하지 않거나 단순히 에세이나 이야기를 포럼으로 옮기는 과정을 더 매끄럽게 만들고 싶다면, 여기서 먼저 텍스트를 정리하여 가독성 문제로 인해 게시물이 비추천을 받는 것을 방지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '포럼 게시를 위한 모범 사례',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '올바른 서식 지정은 토론을 유도하고 커뮤니티의 관심을 유지하는 데 필수적입니다. 줄이 매우 길거나 단락이 없는 게시물은 보통 처음 몇 문장 이후에 외면받습니다. 이 정리 도구를 사용하여 구조적 기반을 마련하세요. 그런 다음 Reddit 에디터 내에서 굵게 및 기울임꼴과 같은 서식을 전략적으로 추가하여 핵심 아이디어를 강조하세요. 항상 미리보기를 확인하고 구조화된 목록을 활용하여 중요한 포인트나 자세한 가이드를 나열하세요.',
    },
    {
      type: 'title',
      text: '변환 예시',
      level: 3,
    },
    {
      type: 'tip',
      title: '포맷터 사용 전후',
      html: '<p><strong>원본 텍스트:</strong></p><pre>안녕하세요 첫 번째 줄입니다\n두 번째 줄이 되어야 할 부분입니다\n하지만 Reddit에 그냥 붙여넣으면 모두 붙어서 나옵니다.</pre><p><strong>포맷팅된 텍스트:</strong></p><pre>안녕하세요 첫 번째 줄입니다\n\n두 번째 줄이 되어야 할 부분입니다\n\n하지만 Reddit에 그냥 붙여넣으면 모두 붙어서 나옵니다.</pre>',
    },
    {
      type: 'title',
      text: 'Reddit 텍스트 포맷터에 대한 자주 묻는 질문',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reddit의 편집 규칙을 따르는 올바른 방법은 항상 명확한 것은 아닙니다. 유효한 형식과 텍스트 장벽으로 인한 불이익을 피하는 방법에 대한 주요 질문을 다루는 FAQ 섹션을 확인하세요.',
    },
  ],
  ui: {
    labelInput: '원본 텍스트',
    placeholderInput: '여기에 원본 텍스트를 붙여넣으세요...',
    labelOptions: '포맷팅 옵션',
    optionParagraphs: 'Reddit 스타일 단락 수정',
    optionSpaces: '다중 공백 제거',
    optionInvisible: '숨겨진 웹 문자 제거',
    optionLinks: 'URL 추출 (텍스트만)',
    labelOutput: '정리된 텍스트',
    placeholderOutput: '정리된 결과가 여기에 표시됩니다...',
    btnCopy: '텍스트 복사',
    btnCopied: '복사됨',
  },
};
