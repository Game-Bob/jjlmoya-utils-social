import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-photo-optimizer';
const title = 'Tinder 사진 최적화 도구: 얼굴 분석 및 구도 진단';
const description =
  '알고리즘 기반 얼굴 분석으로 Tinder 사진을 최적화하세요. 2026년 인터페이스 시뮬레이션, 과학적 프레이밍 및 시선 분석을 통해 매칭률을 극대화하는 완벽한 9:16 인물 사진을 제작합니다.';

const faqData = [
  {
    question: '이 도구가 어떻게 Tinder 매칭률을 높여주나요?',
    answer:
      '이 도구는 얼굴 크기 비율(이상적 범위 30-50%), 상단 1/3 지점 대비 눈 위치, 프레이밍 커버리지, 그리고 Tinder UI의 데드존과 같은 핵심 기술 요소를 분석합니다. 이러한 매개변수를 조정함으로써 사진에 더 큰 신뢰감을 심어주고 알고리즘의 시각적 필터를 효과적으로 통과할 수 있게 합니다.',
  },
  {
    question: '내 사진을 여기에 업로드해도 안전한가요?',
    answer:
      '완전하게 안전합니다. 모든 처리는 브라우저의 Canvas API를 사용하여 로컬에서 이루어집니다. 사진은 어떠한 서버로도 전송되지 않으며 어디에도 저장되지 않습니다.',
  },
  {
    question: 'AI 얼굴 감지는 정확히 무엇을 분석하나요?',
    answer:
      'face-api.js를 사용하여 68개의 얼굴 참조 포인트를 감지하고 표정(웃음, 진지함), 눈 위치 평가, 머리 기울기 측정 등을 수행합니다. 모든 분석은 기기 내에서 로컬로 실행됩니다.',
  },
  {
    question: '왜 1.2배 줌을 권장하나요?',
    answer:
      '스마트폰 전면 카메라는 광각 렌즈(24mm)를 사용하여 배럴 왜곡 현상으로 얼굴이 실제보다 왜곡되어 보일 수 있습니다. 1.2배 줌은 50-85mm 초점 거리를 시뮬레이션하여 왜곡을 제거하고 더 자연스럽고 매력적인 얼굴 비율을 제공합니다.',
  },
];

const howToData = [
  {
    name: '사진 업로드',
    text: 'Tinder 시뮬레이터로 이미지를 드래그하거나 클릭하여 불러옵니다.',
  },
  {
    name: '구도 분석',
    text: 'AI가 자동으로 얼굴을 감지하고 얼굴 크기, 시선, 커버리지 및 표정 지표를 보여줍니다.',
  },
  {
    name: '정밀 조정',
    text: '줌 및 밝기 조절 기능을 사용하거나 오토 프레이밍을 활성화하고 시뮬레이터 내에서 수동으로 드래그하여 조정합니다.',
  },
  {
    name: '최적화된 다운로드',
    text: '클린 메타데이터와 함께 Tinder에 최적화된 1080x1920 기본 형식으로 사진을 저장합니다.',
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

const howToSchema: WithContext<HowTo> = {
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

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tinder 사진 최적화: 과학적/기술적 가이드 완벽판 (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '디지털 데이팅 생태계에서 귀하의 Tinder 프로필은 두 가지 알고리즘에 의해 동시에 처리됩니다. 하나는 플랫폼 자체의 고도화된 비전 알고리즘이며, 다른 하나는 스와이프하는 사용자의 뇌입니다. 본 도구는 <strong>진화 심리학</strong>, <strong>안면 생체 인식</strong>, <strong>디지털 신호 처리</strong> 원리를 통합하여 귀하의 이미지가 최대의 사회적 가치와 기술적 매력을 발산하도록 보장합니다.',
    },
    {
      type: 'title',
      text: '첫인상의 심리학: 1.2초의 효과',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '신경과학 연구에 따르면 인간의 뇌가 상대방의 신뢰성에 기반한 첫인상을 형성하는 데 걸리는 시간은 약 10분의 1초에 불과합니다. Tinder에서는 다음 스와이프 전까지 주어지는 시간은 고작 1초 남짓입니다. 본 도구는 긍정적인 의사결정을 가속화하는 요소를 분석합니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>아이컨택과 시선 처리:</strong> 직접적인 시선은 사회적 보상과 관련된 뇌 영역을 활성화합니다. 눈을 상단 1/3 지점에 배치하면 사용자가 이름을 읽기 전에 귀하의 눈빛에서 손가락을 멈출 확률이 극대화됩니다.',
        '<strong>비대칭성과 포즈:</strong> 약간의 기울임은 공격적인 인상을 완화할 수 있지만, 과도한 기울임은 불안정함을 전달합니다. 알고리즘이 정확한 각도를 측정하여 신뢰받는 범위 내에 머물게 합니다.',
        '<strong>인물-배경 대비:</strong> 피사체가 배경과 명확하게 분리된 사진이 좋은 점수를 받습니다. 잘 정의된 기술적 프로필은 렌더링 엔진이 수많은 경쟁자 중에서 귀하의 얼굴을 돋보이게 하는 데 도움을 줍니다.',
      ],
    },
    {
      type: 'title',
      text: '렌즈의 기술적 분석: 광각 렌즈의 문제점',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '대부분의 프로필 사진은 스마트폰으로 촬영되는데, 스마트폰 전면 카메라는 광각 렌즈입니다. 가장 흔한 실수는 기기에 너무 가까이 다가가는 것입니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>배럴 왜곡(Barrel Distortion):</strong> 1미터 이내의 거리에서는 24mm 렌즈(스마트폰 표준)가 이미지 중앙을 팽창시킵니다. 이로 인해 코가 실제보다 크게 보이고 얼굴이 둥글게 보일 수 있습니다. 본 도구의 <strong>1.2배 줌</strong> 권장은 보정 차원입니다. 약간의 디지털 크롭을 통해 50mm에서 85mm의 초점 거리를 시뮬레이션합니다. 이는 패션 사진작가들이 얼굴을 갸름하게 보이고 실제 비율을 유지하기 위해 사용하는 "황금 초점 거리"입니다.',
    },
    {
      type: 'title',
      text: 'Tinder 인터페이스: 데드존의 과학',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '수많은 훌륭한 사진들이 Tinder가 그 위에 씌우는 소프트웨어 레이어(UI)를 무시하여 실패합니다. 평균적인 사용자는 귀하의 사진만을 보는 것이 아니라, 버튼, 그라데이션, 텍스트가 섞인 화면 전체를 봅니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>타이틀 존 (상단 15%):</strong> 진행 상태 표시줄과 상태 표시줄이 위치하는 곳입니다. 이마나 눈이 여기에 위치하면 인터페이스가 시각적으로 머리 윗부분을 잘라버리는 결과를 낳습니다.',
        '<strong>액션 존 (버튼부):</strong> Like, Nope, Boost 아이콘이 하단 양옆을 차지합니다. 손이나 스타일 요소가 여기에 위치하면 완전히 가려지게 됩니다.',
        '<strong>가독성 그라데이션 (하단 28%):</strong> Tinder는 이름과 나이를 잘 읽히게 하기 위해 검은색 페이드를 적용합니다. 얼굴이 이 영역에 들어가면 텍스트가 얼굴の特徴과 겹쳐 프로필 미관을 해치게 됩니다.',
      ],
    },
    {
      type: 'title',
      text: '실시간 비전 분석: 알고리즘의 해독',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '본 도구는 <strong>최신 세대 컴퓨터 비전 모델</strong>을 사용하여 Tinder의 자동 모더레이터가 수행하는 것처럼 이미지를 정밀 진단합니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>랜드마크 감지:</strong> 68개의 얼굴 포인트를 매핑하여 대칭성과 눈의 개방 정도를 분석합니다. 크고 선명하게 노출된 눈은 인식되는 외향성 수준과 양의 상관관계를 가집니다.',
        '<strong>감정 평가:</strong> 옅은 미소는 보는 사람의 미러 뉴런을 활성화합니다. 안면 표정의 강도를 감지하여 너무 딱딱하거나 다가가기 힘든 인상이 아닌지 확인합니다.',
        '<strong>조명 품질:</strong> 감지 신뢰도를 평가합니다. 점수가 낮을 경우 사진에 노이즈가 많거나 강한 그림자가 있어 Tinder 알고리즘이 저품질 콘텐츠로 분류할 가능성이 있습니다.',
      ],
    },
    {
      type: 'title',
      text: 'Tinder에 최적화된 메타데이터 및 내보내기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이미지 용량이 알고리즘에 영향을 준다는 사실을 알고 계셨나요? 데이팅 앱은 사용자 흐름을 방해하지 않기 위해 로딩이 빠른 콘텐츠를 우선적으로 노출합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>메타데이터 제거 (개인정보 및 SEO):</strong> EXIF 기록을 제거합니다. 깔끔한 사진은 플랫폼 알고리즘에게 "새로운 도화지"와 같은 역할을 합니다.',
        '<strong>지능형 무손실 압축:</strong> iOS 및 Android 고유의 sRGB 색 공간을 유지하면서 JPG 파일 용량을 줄입니다. 통신 환경이 좋지 않은 곳에서도 귀하의 사진은 생생하게 표시될 것입니다.',
        '<strong>몰입형 9:16 형식:</strong> 정확히 1080x1920 픽셀로 제공하여 이미지 아티팩트를 유발하는 Tinder 고유의 공격적인 압축 알고리즘이 적용되는 것을 방지합니다.',
      ],
    },
    {
      type: 'tip',
      title: '전문가 팁',
      html: '<p>첫 번째 사진은 항상 어깨 위로 얼굴이 선명하게 나온 인물 사진이어야 합니다. 전신 사진이나 활동적인 사진은 3번이나 4번 슬롯에 배치하세요. 첫인상에서 시선이 가려지지 않고 얼굴 크기가 최적인지(30-50%) 확인하십시오.</p>',
    },
    {
      type: 'title',
      text: '처리 보안 및 윤리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '귀하의 사진은 소중한 사생활임을 잘 알고 있습니다. 이 최적화 도구는 <strong>클라이언트 사이드 기술</strong>을 사용합니다. 이미지는 로컬 브라우저의 canvas 엔진에 의해 처리됩니다. 어떠한 데이터도 기기 외부로 유출되지 않습니다. 사생활 침해 걱정 없이 프로필을 최적화하는 가장 안전하고 빠른 방법입니다.',
    },
  ],
  ui: {
    uploadTitle: '사진 최적화',
    uploadSubtitle: '드래그하거나 클릭하여 시작',
    btnDownload: '최적화된 사진 다운로드',
    btnRescan: '얼굴 재스캔',
    btnAutoFocus: '오토 프레이밍',
    btnMarkFace: '얼굴 표시',
    panelManual: '수동 조정',
    panelVisualization: '고급 시각화',
    panelMetrics: '구도 분석',
    panelExport: 'Tinder 2026용 저장',
    panelExportDesc: '1080x1920 자동 크롭 및 메타데이터 최적화.',
    labelZoom: '줌',
    labelBrightness: '밝기',
    toggleGrid: '3분할 그리드',
    toggleGridDesc: '전통적인 구도 조정',
    toggleDeadzones: '위험 구역',
    toggleDeadzonesDesc: 'UI가 얼굴을 가리지 않도록 방지',
    toggleFaceBox: '감지된 얼굴 보기',
    toggleFaceBoxDesc: '랜드마크 및 감지 영역',
    metricFaceSize: '얼굴 비율',
    metricEyeLine: '시선 처리',
    metricCoverage: '커버리지',
    metricMood: '표정',
    metricQuality: '신뢰도',
    analysisSuccess: '성공 요인',
    analysisWarning: '최적화 필요',
    analysisError: '심각한 오류',
    deadzoneTop: '상단 UI 영역',
    deadzoneBottom: '정보 영역',
    loaderAnalyzing: '구도 분석 중...',
    loaderModels: '비전 모델 로드 중...',
    simulatorName: '이름, 25',
    simulatorJob: '직업',
    simulatorCity: '한국 거주',
    simulatorDistance: '5 km 이내',
    statusOptimal: '최적',
    statusIncorrect: '부적절',
    statusHigh: '높음',
    statusMedium: '보통',
    statusLow: '낮음',
    statusPositive: '긍정적',
    statusNeutral: '중립적',
    alertExcellent: '기술적인 구도가 훌륭합니다.',
    alertEmptySpaces: '여백 발생: 이미지가 화면을 다 채우지 못했습니다. 줌이나 위치를 조정하세요.',
    alertAlmostInvisible: '거의 안 보임: 너무 멀리 있습니다. 얼굴이 화면의 최소 1/3을 차지할 때까지 확대하세요.',
    alertTooClose: '너무 가까움: 극단적인 클로즈업은 공격적인 인상을 줄 수 있습니다.',
    alertPerfectSize: '완벽한 크기: 신뢰감을 주는 가장 이상적인 얼굴 비율입니다.',
    alertImpactfulLook: '강렬한 눈빛: 눈이 최대 주목 라인에 위치해 매력적입니다.',
    alertEyeLineMoveUp: '시선 위치: 전문적인 구도를 위해 얼굴을 위쪽 라인까지 조금 더 올려주세요.',
    alertEyeLineMoveDown: '시선 위치: 전문적인 구도를 위해 얼굴을 위쪽 라인까지 조금 더 내려주세요.',
    alertTiltedHead: '비뚤어진 머리: 너무 기울어진 자세는 불안정해 보일 수 있습니다.',
    alertSmileDetected: '미소 감지: 웃는 표정은 매칭률을 상당히 높여줍니다.',
    alertSevereExpression: '딱딱한 표정: 조금 더 부드러운 인상의 사진을 사용해 보세요.',
    alertObstructedTop: '가려짐: 상태 표시줄이 얼굴을 가리고 있습니다.',
    alertObstructedBottom: '가려짐: 정보 블록이 얼굴을 가리고 있습니다.',
    alertLowLight: '조명 부족: AI가 얼굴을 인식하기 어렵습니다. 더 밝은 사진을 찾아보세요.',
    alertCutOff: '잘림: 얼굴이 세로 프레임 밖으로 벗어났습니다.',
    alertProTip: '전문가 팁: 셀카인 경우, 렌즈 왜곡을 막기 위해 줌(1.2배) 기능을 꼭 활용하세요.',
    canvasFaceDetected: '얼굴 감지됨',
  },
};
