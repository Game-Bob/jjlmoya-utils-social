import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'social-safe-zones';
const title = '소셜 세이프 존: 틱톡, 릴스 및 쇼츠용 동영상 시뮬레이터';
const description =
  '실제 소셜 미디어 인터페이스를 통해 이미지와 동영상을 미리 확인하세요. 콘텐츠가 항상 잘 보이도록 하고 의도치 않은 잘림을 방지하세요.';

const faqData = [
  {
    question: "소셜 미디어의 '세이프 존(Safe Zone)'이란 무엇인가요?",
    answer:
      "사용자 이름, 설명, 상호작용 버튼(좋아요, 공유)과 같은 인터페이스 요소에 가려지거나 일부 기기에서 적용되는 자동 잘림 현상 없이 콘텐츠가 안전하게 보일 수 있는 화면 영역을 말합니다.",
  },
  {
    question: '왜 내 틱톡 영상의 상하단이 잘려 보이나요?',
    answer:
      '틱톡은 9:16 화면비를 사용합니다. 동영상이 이보다 가로로 넓으면 앱이 화면을 채우기 위해 확대하여 잘림이 발생합니다. 또한 하단 인터페이스가 영상의 일부를 가리므로 중요한 요소는 중앙에 배치해야 합니다.',
  },
  {
    question: '인스타그램 릴스와 유튜브 쇼츠의 세이프 존은 동일한가요?',
    answer:
      '매우 유사하지만 동일하지는 않습니다. 유튜브 쇼츠 버튼은 릴스와 위치가 다릅니다. 저희 도구를 사용하면 플랫폼 간에 전환하여 모든 플랫폼에서 디자인을 검증할 수 있습니다.',
  },
  {
    question: '오른쪽 하단 모서리에 텍스트를 넣으면 어떻게 되나요?',
    answer:
      '그곳에는 프로필, 하트, 댓글 아이콘이 위치하므로 텍스트가 보이지 않거나 읽기 매우 어려워질 가능성이 높습니다. 이상적으로는 텍스트와 얼굴을 중앙 상단 영역(세이프 존)에 배치하는 것이 좋습니다.',
  },
];

const howToData = [
  {
    name: '이미지 또는 동영상 불러오기',
    text: '미리 확인하고 싶은 파일을 업로드하세요. 프로세싱은 로컬에서 비공개로 이루어지며 인터넷으로 전송되지 않습니다.',
  },
  {
    name: '플랫폼 선택',
    text: '틱톡, 인스타그램 릴스, 또는 유튜브 쇼츠 중에서 선택하여 해당 인터페이스 오버레이를 활성화하세요.',
  },
  {
    name: '가독성 확인',
    text: '텍스트, 자막 또는 주요 브랜드 요소가 소셜 네트워크 아이콘에 가려지지 않는지 확인하세요.',
  },
  {
    name: '조정 및 내보내기',
    text: '가려지는 부분이 있다면 원본 동영상 편집기에서 요소를 이동하고 완벽하게 맞을 때까지 다시 테스트하세요.',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '공식 플랫폼 문서',
  bibliography: [
    {
      name: '틱톡 크리에이터 포털: 동영상 최적화 및 세이프 존',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: '인스타그램 비즈니스: 릴스를 위한 모범 사례',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: '유튜브 고객센터: 유튜브 쇼츠 만들기',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: '메타 크리에이터: 동영상의 세이프 존 및 화면비',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '세이프 존 마스터 가이드: 릴스, 틱톡 및 쇼츠 최적화하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '세로형 콘텐츠가 넘쳐나는 세상에서 첫인상은 기술적인 부분에서 결정됩니다. 제작자들이 하는 가장 큰 실수는 자신의 <strong>동영상이나 이미지</strong>가 플랫폼 고유의 인터페이스와 어떻게 상호작용하는지 무시하는 것입니다. 각 소셜 네트워크(틱톡, 인스타그램 릴스 및 유튜브 쇼츠)는 버튼, 텍스트, 프로필 레이어를 겹쳐서 표시하며, 이는 구성의 시각적 효과를 무효화할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구를 사용하면 미디어 파일을 불러와서 프레임의 어느 부분이 인터페이스에 의해 가려지는지 정확하게 확인할 수 있습니다. 이는 단순히 <strong>자막</strong>의 문제가 아닙니다. 동영상의 얼굴, 제품 또는 주요 동작이 "좋아요" 버튼이나 긴 설명 아래에 묻히지 않도록 하는 것입니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '틱톡: 가장 침습적인 인터페이스',
          html: '<p>틱톡은 가장 밀도 높은 인터페이스를 가지고 있습니다. 오른쪽에는 너비의 약 15%를 차지하는 아이콘 열이 있습니다. 하단에는 설명이 4~5줄까지 늘어날 수 있어 아래에서 화면의 거의 1/3을 가립니다.</p><ul><li><strong>하단 마진:</strong> 설명 텍스트와 사용자 이름을 피하기 위해 하단 250px를 비워두세요.</li><li><strong>오른쪽 마진:</strong> 오른쪽 끝에서 100px 이내에는 텍스트를 배치하지 마세요.</li><li><strong>상단:</strong> "팔로잉" 및 "추천" 버튼이 상단 중앙 띠를 차지합니다.</li></ul>',
        },
        {
          type: 'card',
          title: '인스타그램 릴스: 피드 요인',
          html: '<p>틱톡과 달리 인스타그램 릴스는 메인 피드에서 볼 때 동영상을 4:5 비율로 자릅니다. 즉, 9:16 동영상의 상하단 15%에 중요한 정보를 배치하면 피드에서는 보이지 않게 됩니다.</p><ul><li><strong>4:5 규칙:</strong> 피드 가시성을 위해 제목과 핵심 요소를 중앙 영역에 유지하세요.</li><li><strong>인터페이스:</strong> 릴스 아이콘은 틱톡보다 덜 침습적이며 측면 마진이 약간 더 여유롭습니다.</li><li><strong>오디오 버튼:</strong> 오른쪽 하단에 위치하며, 보통 틱톡의 회전하는 디스크보다 훨씬 적은 영역을 가립니다.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '유튜브 쇼츠: 오른쪽을 주의하세요',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '유튜브 쇼츠는 비대칭 인터페이스를 가지고 있습니다. 구독 버튼은 매우 눈에 띄고 단색(주로 검정 또는 흰색)으로 되어 있어 오른쪽 하단에 중요한 시각적 사각지대를 만듭니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>오른쪽 마진:</strong> 오른쪽 하단 20% 영역에는 텍스트나 중요한 요소를 배치하지 마세요.',
        '<strong>하단 마진:</strong> 설명 텍스트와 사용자 이름을 피하기 위해 하단 150px를 비워두세요.',
        '<strong>상단:</strong> 구독 및 기타 버튼들이 상단 중앙 띠를 차지합니다.',
      ],
    },
    {
      type: 'title',
      text: '세어로형 디자인에 대한 핵심 질문',
      level: 2,
    },
    {
      type: 'title',
      text: '주요 요소(얼굴, 텍스트, 제품)를 어디에 배치해야 하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '주요 동작을 위한 "골든 존"은 동영상의 중앙 1/3 지역입니다. 인물을 촬영하는 경우 눈과 입이 이 구역 안에 있도록 하세요. 중요한 그래픽 요소는 하단 설명을 피하기 위해 기하학적 중심에서 약간 위로 이동시켜야 합니다.',
    },
    {
      type: 'title',
      text: '업로드한 후 동영상이 왜 흐릿하게 보이나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '대부분 품질 문제가 아니라 스케일링 문제입니다. 항상 1080x1920 해상도에서 30 또는 60fps로 녹화하세요. 무거운 효과를 많이 사용하는 경우 4K는 피하세요. 플랫폼이 대용량 파일을 공격적으로 압축하기 때문입니다.',
    },
    {
      type: 'title',
      text: '휴대전화 베젤은 어떤가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '최신 휴대전화에는 화면에 노치나 카메라 구멍이 있다는 점을 기억하세요. 이 도구는 콘텐츠가 시계나 시스템 아이콘(배터리, 신호)과 충돌하지 않도록 상단 안전 마진을 포함하고 있습니다.',
    },
    {
      type: 'title',
      text: '바이럴 동영상의 해부학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '소셜 미디어를 위한 디자인은 단순한 미학적 요소가 아니라 <strong>사용성</strong>의 문제입니다. 플랫폼 아이콘 때문에 텍스트를 읽기 힘들다면 사용자는 바로 다음 영상으로 넘겨버릴 것입니다. 시각적 불편함이 있을 때 시청 유지 시간(Watch Time)은 급격히 떨어집니다.',
    },
    {
      type: 'paragraph',
      html: '예를 들어 유튜브 쇼츠의 경우 인터페이스가 비대칭입니다. 구독 버튼이 매우 명확합니다. 이 시뮬레이터를 사용하여 불투명도를 조정함으로써 색상 팔레트가 네이티브 UI 색상과 어떻게 상호작용하는지 이해할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '크리에이티브 품질 관리 도구',
      html: '<p>어떤 것도 우연에 맡기지 않는 크리에이터들을 위해 설계되었습니다.</p>',
    },
  ],
  ui: {
    labelConfig: '설정',
    labelPlatform: '대상 플랫폼',
    labelUpload: '콘텐츠 업로드',
    uploadPrompt: '이미지 또는 동영상 선택',
    uploadLink: '또는 예시 사용',
    loadContent: '콘텐츠 불러오기',
    labelOpacity: '인터페이스 투명도',
    labelMask: '위험 지역 어둡게 표시',
    labelGrid: '3등분 법칙',
    btnReset: '캔버스 초기화',
    bannerTiktok: '틱톡 9:16 시뮬레이션 중',
    bannerReels: '인스타그램 릴스 9:16 시뮬레이션 중',
    bannerShorts: '유튜브 쇼츠 9:16 시뮬레이션 중',
    nameTiktok: '틱톡',
    nameReels: '인스타 릴스',
    nameShorts: '유튜브 쇼츠',
    ttFollowing: '팔로잉',
    ttForYou: '추천',
    ttDescription: '콘텐츠 크리에이터를 위한 실제 인터페이스 디자인. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - 원본 버전',
    ttNavHome: '홈',
    ttNavFriends: '친구',
    ttNavInbox: '수신함',
    ttNavProfile: '프로필',
    reelsFollow: '팔로우',
    reelsDescription: '이 인터페이스는 실제와 동일합니다. #reels #ux #simulator',
    reelsAudio: 'Trending Music - 원본 오디오',
    shortsSubscribe: '구독',
    shortsDislike: '싫어요',
    shortsShare: '공유',
    shortsRemix: '리믹스',
    shortsDescription: '쇼츠 실제 인터페이스 시뮬레이션! #youtube #shorts',
  },
};
