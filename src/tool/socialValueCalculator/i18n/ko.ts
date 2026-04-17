import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'social-account-value-calculator';
const title = '소셜 미디어 계정 가치 계산기: 틱톡 및 인스타그램 단가 확인';
const description =
  '스폰서 포스팅 단가를 확인해 보세요. 저희 계산기는 팔로워, 참여도, 분야를 분석하여 공정한 시장 가치를 산출합니다.';

const faqData = [
  {
    question: '계정 가치 계산기는 무료인가요?',
    answer:
      '네, 저희 도구는 100% 무료이며 회원가입이나 소셜 미디어 계정 연동이 필요하지 않습니다. 공개된 지표만 입력하면 바로 이용할 수 있습니다.',
  },
  {
    question: '왜 틱톡의 가치가 인스타그램과 다른가요?',
    answer:
      '틱톡은 알고리즘에 의한 도달 범위와 조회수에 크게 의존하는 반면, 인스타그램은 여전히 커뮤니티 규모와 팔로워 충성도에 비중을 많이 둡니다.',
  },
  {
    question: '단가를 더 높게 책정하기 위한 좋은 참여율은 얼마인가요?',
    answer:
      '일반적으로 3% 이상의 참여율은 건강한 것으로 간주됩니다. 참여율이 10%를 넘는 계정은 \'프리미엄 프로필\'로 분류되어 더 높은 단가를 제안할 수 있습니다.',
  },
  {
    question: '분야가 가격에 정말 큰 영향을 미치나요?',
    answer:
      '물론입니다. 금융이나 협업 툴에 관심 있는 팔로워는 단순 오락이나 밈을 소비하는 팔로워보다 브랜드 입장에서 훨씬 높은 전환 가치를 가집니다.',
  },
];

const howToData = [
  {
    name: '플랫폼 선택',
    text: '가치를 확인하고 싶은 플랫폼(틱톡 또는 인스타그램)을 선택하세요.',
  },
  {
    name: '지표 입력',
    text: '팔로워 수와 최근 게시물 10개의 평균 조회수 및 좋아요 수를 입력하세요.',
  },
  {
    name: '분야 선택',
    text: '콘텐츠를 가장 잘 나타내는 카테고리를 선택하여 시장 수요에 따른 가치를 조정하세요.',
  },
  {
    name: '단가 확인',
    text: '전문적인 협업을 위해 제안할 수 있는 예상 단가 범위를 확인하세요.',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 시장 조사',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: 2026년 인플루언서 단가',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: 틱톡 및 인스타그램 참여도 리포트',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: 소셜 미디어 통계',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: '이 가이드에서 배울 수 있는 내용',
      html: '<ul><li>2026년 데이터 기준 당신의 <strong>실제 시장 가치</strong>.</li><li><strong>틱톡 vs 인스타그램</strong>의 영향력 차이.</li><li><strong>분야(Niche)</strong>가 CPM에 미치는 극적인 영향.</li><li>브랜드와의 <strong>협상을 위한 전문 템플릿</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: '계정 가치 계산기: 틱톡 또는 인스타그램 광고 포스팅 비용은 얼마가 적당할까?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '콘텐츠 크리에이터, 인플루언서이거나 소셜 미디어에서 활동적인 커뮤니티를 가지고 있다면 한 번쯤 궁금해했을 것입니다. <strong>"내 계정의 실제 가치는 얼마일까?"</strong> 또는 <strong>"브랜드 협업 시 얼마를 제안해야 할까?"</strong>.',
    },
    {
      type: 'title',
      text: '크리에이터 이코노미의 부상',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '인플루언서 마케팅은 성숙해졌으며 더 이상 단순히 팔로워 수만으로 평가받지 않습니다. 브랜드는 실질적인 결과와 깊은 유대감을 원합니다. 저희 도구는 실제 시장 데이터를 기반으로 신뢰할 수 있는 시작점을 제공합니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>인플루언서 마케팅 투자 연간 성장률</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>건강하다고 간주되는 평균 참여율</p>',
        },
        {
          type: 'card',
          title: '₩15,000–₩50,000',
          html: '<p>고부가가치 분야의 평균 CPM(추정치)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '계정 가치를 결정하는 핵심 요소',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '몇 년 전까지 믿어왔던 것과 달리, 팔로워 수는 빙산의 일각일 뿐입니다. 다음은 가치 산출의 핵심 요소입니다.',
    },
    {
      type: 'title',
      text: '1. 참여율 (Engagement Rate)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가장 중요한 지표입니다. 커뮤니티의 몇 퍼센트가 콘텐츠와 활발하게 상호작용하는지를 측정합니다. 소통이 활발한 소규모 계정이 반응 없는 대형 계정보다 훨씬 가치 있습니다.',
    },
    {
      type: 'tip',
      title: '참여도 높이기 팁',
      html: '<p>게시 후 처음 몇 시간 동안 달리는 댓글에 최대한 답변하여 알고리즘에 긍정적인 신호를 보내세요.</p>',
    },
    {
      type: 'title',
      text: '2. 평균 도달 범위',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "틱톡은 추천 알고리즘에 의해 도달 범위가 유동적입니다. 인스타그램은 새로운 관객을 확보하기 위해 정적인 사진보다 릴스의 비중이 커졌습니다.",
    },
    {
      type: 'title',
      text: '3. 분야 (Niche) 또는 카테고리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모든 오디언스가 같은 가치를 가지지는 않습니다. 기술이나 금융 크리에이터는 최종 고객의 가치가 높기 때문에 일반 엔터테인먼트 크리에이터보다 훨씬 높은 단가를 제시할 수 있습니다.',
    },
    {
      type: 'title',
      text: '수익성이 높은 카테고리 (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>금융 및 비즈니스:</strong> 게시물당 단가가 가장 높은 분야.',
        '<strong>테크 및 가젯:</strong> 즉각적인 구매 의사가 높은 분야.',
        '<strong>상태 및 피트니스:</strong> 장비 및 앱 시장이 큰 분야.',
        '<strong>인테리어 및 리모델링:</strong> 프로젝트 비용이 높고 ROI가 높은 분야.',
      ],
    },
    {
      type: 'title',
      text: '틱톡 vs 인스타그램: 어디에 기회가 있을까?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '두 플랫폼 모두 세로형 영상을 사용하지만 수익화 모델은 다릅니다. 인스타그램은 브랜딩, 틱톡은 성과 위주입니다.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '인스타그램',
          html: '<p>브랜딩, 미학, 충성도에 집중합니다. 장기 캠페인에 적합합니다.</p><ul><li>커뮤니티 규모 중시</li><li>직접 판매로 이어지는 스토리</li><li>안정적인 성장</li><li>성숙한 오디언스 기반</li></ul>',
        },
        {
          type: 'card',
          title: '틱톡',
          html: '<p>극강의 바이럴 가능성. 알고리즘이 팔로워를 지배합니다. 단기 ROI 폭발.</p><ul><li>대규모 도달 범위 중시</li><li>압도적인 바이럴 잠재력</li><li>낮은 제작 비용</li><li>매우 활동적인 시청층</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '결과를 협상에 활용하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '저희 도구에서 산출된 가격 범위를 가이드로 활용하세요. 다음 템플릿을 사용하여 자신 있게 지표를 제시할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '협상용 템플릿',
      html: '<p>안녕하세요 [브랜드명], 연락 주셔서 감사합니다. 현재 제 도달 지표(평균 [X]회 조회수)와 참여율 [X]%를 기준으로, [릴스/틱톡] 광고 삽입 단가는 [가격 ₩]입니다. 여기에는 스크립트 작성 및 영상 제작, 24시간 프로필 링크, 2건의 홍보 스토리, 30일간의 저작권 사용이 포함됩니다.</p>',
    },
    {
      type: 'title',
      text: '단가를 높이기 위한 전략',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>소통 활성화:</strong> 모든 댓글에 답변하세요.',
        '<strong>품질 향상:</strong> 오디오는 좋은 영상의 50%를 차지합니다.',
        '<strong>전문화:</strong> 특정 분야의 \'전문가\'가 되면 더 높은 단가를 받을 수 있습니다.',
        '<strong>미디어 키트 제작:</strong> 성공 사례를 데이터와 함께 문서화하세요.',
      ],
    },
    {
      type: 'title',
      text: '추정 가치는 신뢰할 수 있나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '저희 계산기는 국제 대행사들의 집계 데이터를 사용합니다. 다만 계절성(크리스마스 캠페인은 더 높은 단가) 등의 요소에 따라 최종 가격은 달라질 수 있습니다.',
    },
    {
      type: 'tip',
      title: '크리에이터를 위한 참고 사항',
      html: '<p>이 도구는 추정치입니다. 브랜드가 요청하는 콘텐츠의 복잡도에 따라 가격을 항상 조정하십시오.</p>',
    },
  ],
  ui: {
    sectionTag: '검토 파라미터',
    labelFollowers: '커뮤니티 (팔로워)',
    labelAvgViewsTiktok: '영향력 (영상당 조회수)',
    labelAvgViewsIg: '도달 (프로필 도달)',
    tooltipViews: '최근 영상 10개의 조회수를 합산하여 10으로 나눈 수치입니다.',
    labelEngagement: '충성도 (좋아요 + 댓글)',
    tooltipEngagement: '최근 게시물 10개의 좋아요와 댓글 합계를 10으로 나눈 수치입니다.',
    labelNiche: '시장 카테고리',
    nicheEntertainment: '엔터테인먼트',
    nicheFinance: '금융 및 부동산',
    nicheTech: '기술 및 SaaS',
    nicheFitness: '라이프스타일 및 건강',
    nicheFashion: '패션 및 뷰티',
    nicheTravel: '관광 및 여행',
    nicheFood: '요리 및 가스트로노미',
    nicheGaming: '게이밍 및 e스포츠',
    nicheHome: '인테리어 및 리모델링',
    btnCalculate: '가치 리포트 생성',
    emptyTitle: '상업적 타당성 분석',
    emptyDesc: '현재 시장 가치를 추정하기 위해 프로필 지표를 입력하세요.',
    roiLabel: '권장 단가 평가',
    rangeLabel: '권장 범위:',
    audienceQuality: '오디언스 품질',
    metricER: '참여율',
    investmentEfficiency: '투자 효율성',
    metricCPM: '예상 CPM',
    insightText: '이 평가는 한국 시장 평균 CPM(2026년)을 기준으로 합니다.',
    currencySymbol: '₩',
    numberLocale: 'ko-KR',
  },
};
