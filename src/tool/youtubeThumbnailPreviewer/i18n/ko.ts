import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-thumbnail-previewer';
const title = '유튜브 썸네일 미리보기: CTR 무료 개선 도구';
const description =
  '유튜브 썸네일을 업로드하고 모바일과 데스크톱 실제 피드에서 어떻게 보이는지 확인해보세요. 다크 모드와 라이트 모드 시뮬레이터로 클릭률을 즉시 최적화할 수 있습니다.';

const faqData = [
  {
    question: '유튜브 썸네일을 미리 테스트해보는 것이 왜 중요한가요?',
    answer:
      '대부분의 사용자는 모바일 기기로 유튜브를 시청합니다. 큰 모니터에서 멋져 보이던 썸네일이 작은 화면에서는 글자를 읽기 힘들 수도 있습니다. 시뮬레이터에서 테스트하면 어떤 크기에서도 텍스트가 선명하고 주요 피사체가 돋보이는지 확인할 수 있습니다.',
  },
  {
    question: '이 미리보기 도구를 사용하려면 가입해야 하나요?',
    answer:
      '아니요. 저희 도구는 100% 무료이며 브라우저에서 바로 작동합니다. 썸네일을 최적화하기 위해 계정을 만들거나 이메일을 제공할 필요가 전혀 없습니다.',
  },
  {
    question: '제 디자인이 서버에 업로드되나요?',
    answer:
      '절대 아닙니다. 개인정보 보호는 저희의 최우선 과제입니다. 파일을 선택하면 임시 URL을 통해 브라우저 메모리에 로컬로 로드됩니다. 사용자 본인 외에는 그 누구도 테스트 중인 디자인을 볼 수 없습니다.',
  },
  {
    question: '이 도구가 CTR(클릭률) 개선에 어떻게 도움이 되나요?',
    answer:
      'CTR(Click-Through Rate)은 썸네일을 본 사람 중 클릭한 사람의 비율입니다. 실제 환경(다크 vs 라이트 배경, 모바일 vs 데스크톱)을 시뮬레이션함으로써, 게시 전에 대비나 구성 문제를 수정하여 클릭수를 높일 수 있습니다.',
  },
  {
    question: '유튜브 공식 다크 모드와 동일하게 작동하나요?',
    answer:
      '네. 유튜브 공식 앱의 두 가지 모드에서 사용하는 정확한 색상 코드를 반영한 테마 선택기(라이트 및 다크)를 포함하고 있습니다.',
  },
];

const howToData = [
  {
    name: '디자인 업로드',
    text: '업로드 영역을 클릭하거나 이미지 파일(PNG, JPG 또는 WebP)을 도구로 직접 드래그하세요.',
  },
  {
    name: '컨텍스트 설정',
    text: '비디오 제목과 채널명을 입력하여 실제 피드와 최대한 유사한 환경에서 시뮬레이션하세요.',
  },
  {
    name: '기기 전환',
    text: '데스크톱과 모바일 뷰를 전환하며 다양한 화면 크기에서의 가독성을 확인하세요.',
  },
  {
    name: '대비 테스트',
    text: '다크 테마를 활성화하여 유튜브의 검은색 배경에서 색상이 제대로 돋보이는지 체크하세요.',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    {
      name: '유튜브 고객센터: 맞춤 동영상 썸네일 만들기',
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
      text: '유튜브 썸네일 미리보기: 채널 CTR 마스터하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '유튜브 생태계에서 썸네일은 콘텐츠로 들어가는 현관문과 같습니다. 세계 최고의 영상, 할리우드급 편집, 오스카급 각본을 갖췄더라도 아무도 클릭하지 않는다면 당신의 노력은 알고리즘의 눈에 띄지 않을 것입니다. 여기서 <strong>CTR(클릭률)</strong>이 등장하며, 그 결정적인 요인이 바로 썸네일입니다.',
    },
    {
      type: 'title',
      text: '업로드 전 썸네일 테스트가 필수인 이유',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>실제 미리보기:</strong> 유튜브 피드에 나타날 모습 그대로 썸네일을 확인하세요.',
        '<strong>다크 및 라이트 모드:</strong> 어떤 사용자 설정에서도 색상이 눈에 띄는지 확인하세요.',
        '<strong>기기 시뮬레이터:</strong> 모니터와 작은 모바일 화면 모두에서 텍스트 가독성을 체크하세요.',
        '<strong>CTR 최적화:</strong> 기본 인터페이스와 디자인을 비교하여 클릭을 극대화하세요.',
        '<strong>가입 불필요:</strong> 계정 생성 없이 이미지를 업로드하고 즉시 테스트하세요.',
        '<strong>개인정보 보장:</strong> 디자인은 로컬에서 처리되며 서버로 전송되지 않습니다.',
      ],
    },
    {
      type: 'paragraph',
      html: '많은 제작자가 큰 모니터에서 디자인하고 즐겨 쓰는 편집기에서 전체 화면으로 보며 만족하는 실수를 범합니다. 문제는 실제 사용자가 그렇게 보는 경우가 드물다는 점입니다. 대부분은 무한 스크롤을 하며 모바일로 보거나, 다크 모드로 설정된 모니터 구석에서 썸네일을 접합니다. 저희의 <strong>유튜브 썸네일 미리보기</strong>는 이러한 "디자이너의 착각"을 깨고 피드의 냉혹한 현실을 보여줍니다.',
    },
    {
      type: 'title',
      text: '기술적 지표 및 성능',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0.2초', body: '응답 시간' },
        { title: '4K', body: '최대 해상도' },
        { title: '100%', body: '로컬 개인정보 보호' },
        { title: 'HD', body: '기본 품질' },
      ],
    },
    {
      type: 'title',
      text: '클릭의 심리학: 썸네일이 실패하는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '인간의 뇌는 텍스트보다 이미지를 수천 배 더 빠르게 처리합니다. 하지만 유튜브의 경쟁은 치열합니다. 썸네일은 단순히 "예쁜" 것이 아니라 <strong>읽기 쉬워야</strong> 하며 <strong>대비</strong>가 뚜렷해야 합니다.',
    },
    {
      type: 'paragraph',
      html: '흔한 실수는 유튜브 배경과 어울리지 않는 색상을 사용하는 것입니다. 어두운 회색을 사용하고 시청자가 다크 모드라면, 당신의 영상은 그들의 주변 시야에서 사라져 버릴 것입니다. 이 테스터를 사용하면 테마를 전환하며 어떤 상황에서도 디자인이 "튀는지" 확인할 수 있습니다.',
    },
    {
      type: 'title',
      text: '직접 비교: 디자인 vs 실제',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '썸네일 테스트에 30초를 투자할 가치가 있을까요? 답은 "그렇다"입니다. 최적화된 썸네일은 첫 24시간 동안 조회수를 두 배로 늘릴 수 있으며, 이는 유튜브 AI에 해당 콘텐츠에 "매력(Hook)"이 있다는 신호를 보냅니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: '포토샵 / 캔바 작업 시',
          body: '실제 크기에 대한 착각 · 앱 배경과의 대비 간과 · 텍스트가 읽기 쉬워 보임(실제로는 아닐 수 있음) · UI 요소(영상 길이, 아바타)를 고려하지 않음',
        },
        {
          title: '유튜브 썸네일 미리보기 사용 시',
          body: '홈 피드에서의 실제 모습 확인 · 다크 vs 라이트 모드 대비 검증 · 모바일 텍스트 가독성 보장 · 제목 및 채널명 시뮬레이션',
        },
      ],
    },
    {
      type: 'title',
      text: 'CTR 10% 이상을 위한 썸네일 체크리스트',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '최종 디자인을 내보내기 전에 저희 시뮬레이터를 사용하여 다음 항목을 확인하세요.',
    },
    {
      type: 'list',
      items: [
        '소형 모바일 화면에서도 텍스트를 읽을 수 있나요?',
        '배경과 주요 피사체 사이에 충분한 대비가 있나요?',
        '다크 모드의 검은 배경에서도 썸네일이 돋보이나요?',
        '영상 제목이 이미지의 중요한 정보를 가리지는 않나요?',
        '영상 길이 표시(검은 박스)가 중요한 부분을 숨기고 있지는 않나요?',
        '축소된 크기에서도 얼굴이나 물체가 원하는 감정을 전달하나요?',
      ],
    },
    {
      type: 'title',
      text: '고영향력 썸네일의 구조',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '세계 최대 채널들의 분석에 따르면, 성공하는 썸네일은 대개 다음과 같은 구조적 패턴을 따릅니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: '주요 피사체',
          body: '1차 집중 포인트 · 선명한 외곽선 처리와 약간의 테두리 또는 채도 조절을 활용하세요.',
        },
        {
          title: '텍스트 (최대 3단어)',
          body: '즉각적인 맥락 파악 · 굵은 산세리프 폰트와 보색을 사용하세요.',
        },
        {
          title: '흐릿한 배경',
          body: '피사체 분리 · 깊이감을 더해 주요 피사체가 화면 밖으로 "튀어나오게" 만듭니다.',
        },
        {
          title: '재생 시간 공간',
          body: '실수 방지 · 오른쪽 하단 모서리에 얼굴이나 텍스트를 배치하지 마세요.',
        },
      ],
    },
    {
      type: 'tip',
      title: '데드 존(Dead Zone) 트릭',
      html: '<p>유튜브는 항상 썸네일 오른쪽 하단에 영상 길이를 표시하는 검은 박스를 둡니다. 수많은 제작자가 그 자리에 중요한 요소를 배치했다가 앱에서 가려지는 실수를 합니다. 저희 도구는 이 박스를 시뮬레이션하여 가장 중요한 장면이 가려지지 않게 도와줍니다.</p>',
    },
    {
      type: 'title',
      text: '도구의 장점 및 제한 사항',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: '매우 빠르고 반응성이 뛰어난 인터페이스',
          body: '제한: 이미지 편집 기능은 없습니다 (캔바/포토샵 사용 권장)',
        },
        {
          title: '정확한 앱 및 웹 목업',
          body: '제한: 프리롤 광고는 시뮬레이션하지 않습니다',
        },
        {
          title: '무료 및 광고 없음',
          body: '제한: 로컬 파일만 지원합니다',
        },
      ],
    },
    {
      type: 'title',
      text: '"분할(Split)" 모드 사용 (직접 비교)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구의 핵심 기능입니다. 분할 모드를 활성화하면 라이트 모드와 다크 모드에서의 모습을 동시에 확인할 수 있습니다. 사용 중인 색상 조합이 범용적인지, 아니면 밝기나 대비 조정이 필요한지 판단하는 가장 확실한 방법입니다.',
    },
    {
      type: 'title',
      text: '개인정보 보호: 디자인이 클라우드에 업로드되지 않습니다',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '업로드 전의 썸네일은 민감한 전략의 일부라는 점을 잘 알고 있습니다. 그래서 이 도구는 브라우저 엔진 내에서만 작동하도록 설계되었습니다. <strong>어떠한 데이터도 인터넷으로 전송되지 않습니다</strong>. 선택한 파일은 로컬 임시 URL을 통해 로드되며 탭을 닫으면 사라집니다. 지적 재산은 100% 여러분의 통제 하에 있습니다.',
    },
    {
      type: 'title',
      text: '결론: 완벽한 픽셀 보장',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '추측은 멈추고 검증을 시작하세요. JJLMoya의 <strong>유튜브 썸네일 미리보기</strong>는 아마추어와 프로를 가르는 무료 도구입니다. 폰트 크기나 피사체 위치의 작은 조정이 눈에 띄지 않는 영상과 조회수 폭발을 가르는 결정적 차이가 될 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '지금 바로 채널 최적화를 시작하고 여러분의 영상에 걸맞은 클릭률을 확보하세요!',
    },
  ],
  ui: {
    dropFeedTitle: '썸네일 드래그 앤 드롭',
    dropFeedSub: 'PNG, JPG 또는 WebP · 여러 이미지 가능',
    dropAvatarTitle: '아바타 드래그 앤 드롭',
    dropAvatarSub: '채널 프로필 이미지',
    labelTitle: '비디오 제목',
    labelChannel: '채널명',
    defaultTitle: '비디오 제목을 입력하세요',
    defaultChannel: '채널명',
    btnDesktop: '데스크톱',
    btnMobile: '모바일',
    btnClear: '초기화',
    labelLight: '라이트',
    labelDark: '다크',
    views0: '조회수 120만회 · 1시간 전',
    views1: '45분 전',
    views2: '조회수 25만회 · 1일 전',
    views3: '조회수 310만회 · 1주일 전',
  },
};
