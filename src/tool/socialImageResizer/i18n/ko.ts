import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'social-media-image-resizer';
const title = '소셜 미디어 이미지 리사이저: 모든 플랫폼을 위한 자르기 및 크기 조정';
const description =
  '인스타그램, 틱톡, 유튜브 등을 위해 사진 크기를 조정하고 자르세요. 2026년 최신 공식 규격에 맞춘 스마트 자르기 기능을 제공합니다.';

const faqData = [
  {
    question: '크기를 조정할 때 화질 저하가 발생하나요?',
    answer:
      '아니요, 고품질 스무딩 알고리즘을 사용합니다. 대상 형식과 같거나 그 이상의 해상도를 가진 원본 이미지를 업로드하는 것이 좋습니다.',
  },
  {
    question: '여기에 제 사진을 업로드해도 안전한가요?',
    answer:
      '완전하게 안전합니다. 모든 처리는 브라우저 내에서 Canvas API를 사용하여 로컬에서 이루어집니다. 사진은 절대로 서버로 전송되지 않습니다.',
  },
  {
    question: '어떤 형식이 지원되나요?',
    answer:
      '업로드 시 JPG, PNG, WebP, AVIF를 지원합니다. 다운로드는 최대의 호환성을 위해 고품질 JPG로 최적화됩니다.',
  },
];

const howToData = [
  {
    name: '이미지 업로드',
    text: '파일을 드래그하거나 장치에서 검색하여 프로세스를 시작하세요.',
  },
  {
    name: '형식 선택',
    text: '사이드 메뉴에서 필요한 소셜 네트워크와 게시물 유형을 선택하세요.',
  },
  {
    name: '조정 및 다운로드',
    text: '사진을 드래그하여 구도를 잡고 줌을 사용하여 완벽하게 자르세요. 완료되면 다운로드를 클릭하세요.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: 2026년 소셜 미디어 이미지 크기 가이드',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '모든 플랫폼을 위한 소셜 미디어 이미지 리사이저',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '오늘날의 디지털 생태계에서 첫인상은 시각적으로 결정됩니다. 각 소셜 네트워크는 고유의 비율에 맞게 최적화된 콘텐츠를 우선시하는 특정 알고리즘에 따라 작동합니다. 저희의 소셜 미디어 이미지 리사이저는 단순한 기술 도구가 아닙니다. 당신의 메시지가 원치 않는 잘림이나 화질 저하 없이 제대로 전달되도록 돕는 든든한 조력자입니다.',
    },
    {
      type: 'paragraph',
      html: '가로 사진을 인스타그램 스토리를 위한 강렬한 세로형으로 변환하거나, 복잡한 유튜브 배너 규격에 맞게 디자인을 수정해야 할 때, 저희 유틸리티는 브라우저에서 직접 정밀하게 위치를 잡고 크기를 조절할 수 있는 스마트 자르기 시스템을 제공합니다.',
    },
    {
      type: 'title',
      text: '2026년 공식 소셜 미디어 이미지 크기',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '인스타그램 — 정사각형 게시물', body: '1080 × 1080 px · 비율 1:1' },
        { title: '인스타그램 — 세로형 게시물', body: '1080 × 1350 px · 비율 4:5' },
        { title: '틱톡 / 릴스 — 세로형', body: '1080 × 1920 px · 비율 9:16' },
        { title: '유튜브 — 썸네일', body: '1280 × 720 px · 비율 16:9' },
        { title: '유튜브 — 채널 배너', body: '2560 × 1440 px · 비율 16:9' },
        { title: 'X (트위터) — 표준 게시물', body: '1200 × 675 px · 비율 16:9' },
        { title: '링크드인 — 프로필 커버', body: '1584 × 396 px · 비율 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: '인스타그램',
          body: '1:1 정사각형 형식은 여전히 클래식이지만, 4:5 세로형은 화면 공간을 더 많이 차지하며 뉴스 피드에서 최대 30% 더 높은 참여도를 이끌어냅니다.',
        },
        {
          title: '숏폼 콘텐츠',
          body: '틱톡과 릴스의 표준은 9:16입니다. 이 몰입형 형식은 앱 UI에 가려지지 않도록 핵심 피사체를 완벽하게 정렬하는 것이 매우 중요합니다.',
        },
        {
          title: '비주얼 인게이지먼트',
          body: '썸네일부터 배너까지, 모든 이미지는 클릭률에 큰 영향을 미칩니다. 정밀한 자르기는 텍스트와 핵심 요소가 항상 잘 보이도록 보장합니다.',
        },
        {
          title: '전문적인 브랜딩',
          body: '링크드인과 같은 비즈니스 네트워크에서 선명도는 곧 전문성입니다. 고해상도 화면에서 이미지가 깨져 보이지 않으려면 헤더에 정확한 비율이 필요합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '가로세로 비율이 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가로세로 비율은 이미지 너비와 높이 사이의 비례 관계입니다. 이를 무시하면 플랫폼에서 강제로 줌을 하거나 검은 막대가 추가되어 미적 감각과 유기적 도달 범위가 훼손됩니다.',
    },
    {
      type: 'list',
      items: [
        '텍스트나 로고가 앱의 아이콘에 의해 잘리는 것을 방지합니다.',
        '원본 사진의 왜곡이나 늘어짐 없이 최적의 픽셀 밀도를 유지합니다.',
        '모든 공식 규격을 하나의 웹 도구에 모아 시간을 절약해 줍니다.',
        '정확한 용량과 규격의 파일을 생성하여 이미지 로딩 속도를 개선합니다.',
      ],
    },
    {
      type: 'tip',
      title: '구도 팁',
      html: '<p>수동 드래그 기능을 사용할 때 사진의 주요 피사체를 격자선의 교차점 중 하나에 배치해 보세요. 이를 통해 소셜 네트워크용으로 더욱 역동적이고 전문적인 구도를 만들 수 있습니다.</p>',
    },
    {
      type: 'title',
      text: '완벽한 자르기를 위한 단계',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '형식 선택: 사이드 메뉴에서 플랫폼과 게시물 유형을 선택합니다.',
        '이미지 업로드: 파일을 드래그하거나 이미지 선택기를 사용하여 사진을 가져옵니다.',
        '프레임 조정: 가시 영역 내에서 사진을 드래그하고 줌을 사용하여 정밀하게 맞춥니다.',
        '즉시 내보내기: 다운로드를 클릭하여 바로 게시할 수 있는 이미지를 받습니다.',
      ],
    },
    {
      type: 'title',
      text: '개인정보 보호 및 로컬 처리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '당신의 개인정보는 철저히 보호됩니다. 이 리사이저는 Canvas API를 사용하여 브라우저에서 로컬로 이미지를 처리합니다. 당신의 사진은 외부 서버로 업로드되지 않으므로 보안이 보장되며 처리 속도 또한 즉각적입니다.',
    },
    {
      type: 'title',
      text: '소셜 미디어를 위한 전문적인 최적화',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '시각적 콘텐츠를 전문적으로 최적화하는 것은 직접적인 성장 전략입니다. 저희 도구는 크리에이터와 커뮤니티 매니저의 작업 흐름을 단순화하여 모든 게시물이 어떤 기기와 플랫폼에서도 완벽하게 보이도록 보장합니다.',
    },
  ],
  ui: {
    sidebarTitle: '소셜 형식',
    uploadTitle: '이미지 업로드',
    uploadSubtitle: '사진을 여기로 드래그하거나 클릭하여 선택',
    btnReset: '초기화',
    btnDownload: '이미지 다운로드',
  },
};
