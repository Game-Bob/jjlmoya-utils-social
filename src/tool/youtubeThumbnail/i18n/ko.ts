import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-thumbnail-extractor';
const title = 'YouTube 썸네일 추출기 (HD 지원)';
const description =
  'YouTube 동영상 URL만으로 모든 영상의 원본 썸네일 이미지를 최고 해상도로 추출하고 워터마크 없이 다운로드할 수 있는 온라인 도구입니다.';

const faqData = [
  {
    question: '어떤 해상도로 썸네일이 추출되나요?',
    answer:
      "이 도구는 항상 영상 제작자가 업로드한 원본 품질인 'MaxRes'(1280x720 또는 1920x1080) 해상도 획득을 시도합니다. 만약 제작자가 HD 썸네일을 업로드하지 않은 경우, 자동으로 이용 가능한 다음으로 높은 해상도를 보여줍니다.",
  },
  {
    question: '어떤 유형의 링크를 지원하나요?',
    answer:
      '기존의 youtube.com/watch URL, 단축 링크인 youtu.be, 모바일 링크, 그리고 YouTube 쇼츠(Shorts) URL까지 완벽하게 지원합니다.',
  },
  {
    question: 'YouTube 썸네일을 다운로드하는 것이 합법인가요?',
    answer:
      '네, 개인적인 학습, 디자인 참고, 패러디 및 인용(공정 이용) 목적으로 다운로드하는 것은 완전히 합법입니다. 다만, 저작권이 있는 이미지를 순수 상업적 목적으로 사용할 경우 영상의 라이선스를 확인하는 등 주의가 필요합니다.',
  },
  {
    question: '하루 이용 제한이 있나요?',
    answer:
      '월간 또는 일일 제한이 전혀 없습니다. 이 소프트웨어는 브라우저 내에서 URL 패턴을 해석하는 클라이언트 사이드 방식을 사용하므로 API 제한 없이 자유롭게 사용하실 수 있습니다.',
  },
];

const howToData = [
  {
    name: '동영상 URL 복사',
    text: 'YouTube에서 브라우저 주소창이나 공유 버튼을 통해 동영상 링크를 복사합니다.',
  },
  {
    name: '링크 붙여넣기',
    text: '추출 도구의 입력 필드에 URL을 입력하거나 클립보드에서 붙여넣기 버튼을 사용합니다.',
  },
  {
    name: '화질 선택',
    text: '도구가 최고 화질(1080p)부터 저화질까지 이용 가능한 모든 해상도를 표시합니다.',
  },
  {
    name: '이미지 다운로드',
    text: '다운로드 버튼을 클릭하여 기기에 썸네일을 저장합니다.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'YouTube 고객센터: 맞춤 동영상 썸네일 만들기',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube 크리에이터 아카데미: 효과적인 썸네일 제작법',
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
      text: 'YouTube 썸네일 HD 고화질 무료 다운로드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube 동영상의 썸네일을 <strong>원본 크기나 최고 해상도(Full HD 또는 4K)로 다운로드</strong>해야 한다면, 이 무료 도구가 가장 빠른 해결책입니다. 디자인 영감을 얻거나 자작 디자인 참고용, 또는 프레젠테이션에 사용하기 위해 모든 채널의 커버 이미지를 가져올 수 있습니다.',
    },
    {
      type: 'tip',
      title: '프로그램 설치 없이 고화질 커버 이미지 추출',
      html: '<p>별도의 소프트웨어 설치나 회원가입이 필요 없습니다. 동영상 링크만 복사해서 붙여넣으면 <strong>YouTube 썸네일을 저장</strong>하여 컴퓨터나 스마트폰에 직접 담을 수 있습니다.</p>',
    },
    {
      type: 'title',
      text: 'YouTube 영상 썸네일 가져오는 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube 영상에서 <strong>사진을 추출하는 과정</strong>은 매우 간단합니다. 다음 단계에 따라 몇 초 만에 이미지를 획득하세요:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. URL 복사:</strong> YouTube에서 영상 링크를 복사합니다(주소창 또는 공유 버튼 이용).',
        '<strong>2. 링크 붙여넣기:</strong> 썸네일 추출기의 검색창에 URL을 입력합니다.',
        '<strong>3. 화질 선택:</strong> 최고 화질(1080p)부터 저화질(360p)까지 모든 해상도 옵션이 표시됩니다.',
        '<strong>4. 이미지 다운로드:</strong> 다운로드 버튼을 클릭하여 기기에 <i>썸네일</i>을 저장합니다.',
      ],
    },
    {
      type: 'title',
      text: '지원 형식 및 해상도 안내',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube 동영상 커버 다운로드가 이보다 쉬울 수 없습니다. 이 도구는 크리에이터가 포토샵 등으로 정성껏 제작한 고품질 디자인인 <strong>maxresdefault</strong>(최대 해상도 이미지)를 자동으로 찾습니다. 만약 HD 이미지가 없는 경우, 그 다음으로 좋은 옵션(<strong>hqdefault</strong> 또는 <strong>mqdefault</strong>)을 제공합니다.',
    },
    {
      type: 'paragraph',
      html: '이 유틸리티는 커뮤니티 매니저, 그래픽 디자이너, 콘텐츠 크리에이터, 밈 제작자 등 프로젝트를 위해 <strong>동영상 커버 사진 다운로드</strong>가 필요한 모든 분께 최적화되어 있습니다. 또한 <strong>YouTube 쇼츠(Shorts)</strong>와도 호환되므로, 쇼츠의 썸네일도 동일한 방식으로 추출할 수 있습니다.',
    },
    {
      type: 'title',
      text: 'YouTube 썸네일의 전문적 활용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube 썸네일은 높은 가치를 지닌 시각적 자산입니다. 이는 크리에이터들이 투입한 수시간의 디자인 작업, A/B 테스트, 그리고 CTR(클릭률) 최적화의 결과물입니다. 이를 추출하고 다운로드하는 방법을 알면 다양한 전문적 기회가 열립니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '콘텐츠 크리에이터',
          html: '<p>자신의 니즈에 맞는 인기 영상의 썸네일을 분석하여 타이포그래피, 주요 색상, 인물 또는 텍스트 사용 등 어떤 시각적 요소가 더 많은 클릭을 유도하는지 파악하세요.</p><ul><li><strong>시각적 벤치마킹:</strong> 업계 리더들의 이미지와 자신의 이미지를 비교 분석합니다.</li><li><strong>디자인 제작 참고:</strong> 이미지를 다운로드하여 포토샵이나 캔바에서 디자인 가이드로 활용합니다.</li><li><strong>인스피레이션 아카이브:</strong> 전환율이 높은 썸네일 라이브러리를 구축합니다.</li></ul>',
        },
        {
          type: 'card',
          title: '디자이너 및 마케터',
          html: '<p>그래픽 디자이너나 소셜 미디어 매니저에게 YouTube 썸네일에 빠르게 접근하는 것은 제안서 작성, 고객 브리핑, 시각적 감사를 위해 필수적입니다.</p><ul><li><strong>고객 제안서:</strong> 제안서에 경쟁사의 실제 사례 이미지를 포함시켜 설득력을 높입니다.</li><li><strong>브랜드 점검:</strong> 특정 채널의 시각적 일관성을 평가합니다.</li><li><strong>무드보드 제작:</strong> 흐릿한 스크린샷 대신 고화질 시각 자료를 수집합니다.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube 쇼츠(Shorts) 완벽 호환',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 추출기는 <strong>YouTube 쇼츠</strong>에서도 완벽하게 작동합니다. 쇼츠는 영상에서 자동으로 생성되는 특유의 세로형(9:16) 썸네일 형식을 가집니다. 본 도구는 쇼츠 URL(<code>youtube.com/shorts/ID</code>)을 인식하여 일반 영상과 마찬가지로 최상의 썸네일을 추출해냅니다.',
    },
    {
      type: 'tip',
      title: '개인정보 보호 보장',
      html: '<p>모든 추출 과정은 사용자의 브라우저 내에서 이루어집니다. URL이나 어떤 데이터도 외부 서버로 전송되지 않습니다.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'YouTube 링크를 여기에 붙여넣으세요...',
    pasteAriaLabel: '클립보드에서 붙여넣기',
    helperText: '지원 형식: youtube.com, youtu.be, shorts.',
    ribbonLabel: '최고 화질',
    downloadBtn: '최고 해상도로 다운로드',
    qualityMedium: '중간 화질',
    qualityStandard: '표준 화질',
    qualityLow: '저화질',
    viewImage: '이미지 보기',
    errorInvalid: '유효하지 않은 YouTube URL입니다. 다시 확인해 주세요.',
    imgAlt: 'YouTube HD 썸네일',
  },
};
