import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'pre-visualizador-miniaturas-youtube';
const title = 'Pré visualizador de Miniaturas YouTube Online: Melhore o seu CTR Grátis';
const description =
  'Carregue a sua miniatura e visualize como fica no feed real do YouTube em dispositivos móveis e desktop. Simulador de modo escuro e claro para otimizar cliques instantaneamente.';

const faqData = [
  {
    question: 'Porque é que é vital testar as miniaturas do YouTube?',
    answer:
      'A maioria dos utilizadores vê o YouTube em dispositivos móveis. Uma miniatura que parece bem no seu monitor pode ser ilegível num ecrã pequeno. Testá-la num simulador garante que o texto é claro e que o tema principal se destaca em qualquer tamanho.',
  },
  {
    question: 'Tenho de me registar para usar este Pré visualizador?',
    answer:
      'Não. A nossa ferramenta é 100% gratuita e funciona diretamente no seu navegador. Não precisa de criar uma conta nem de deixar o seu e-mail para otimizar as suas miniaturas.',
  },
  {
    question: 'Os meus designs são carregados para o vosso servidor?',
    answer:
      'Absolutamente não. A privacidade é a nossa prioridade número um. Ao selecionar um ficheiro, este é carregado localmente na memória do seu navegador através de um URL temporário. Ninguém, exceto você, pode ver o design que está a testar.',
  },
  {
    question: 'Como é que esta ferramenta ajuda a melhorar o meu CTR?',
    answer:
      'O CTR (Click-Through Rate) é a percentagem de pessoas que clicam ao ver a miniatura. Ao simular o ambiente real (fundo preto vs branco, móvel vs PC), pode corrigir erros de contraste e composição antes de publicar, aumentando os seus cliques.',
  },
  {
    question: 'Funciona com o Modo Escuro oficial do YouTube?',
    answer:
      'Sim. Incluímos um seletor de temas (Claro e Escuro) que imita exatamente as cores hexadecimais utilizadas pela aplicação oficial do YouTube em ambos os modos.',
  },
];

const howToData = [
  {
    name: 'Carregue o seu design',
    text: 'Clique na área de carregamento ou arraste o seu ficheiro de imagem (PNG, JPG ou WebP) diretamente para a ferramenta.',
  },
  {
    name: 'Ajuste o contexto',
    text: 'Escreva o título do seu vídeo e o nome do seu canal para que a simulação seja o mais realista possível face ao feed real.',
  },
  {
    name: 'Mude de dispositivo',
    text: "Alterne entre a vista de 'Desktop' e 'Móvel' para verificar a legibilidade em ecrãs de diferentes tamanhos.",
  },
  {
    name: 'Teste o contraste',
    text: "Ative o tema 'Escuro' para ver se as cores se destacam corretamente contra o fundo preto do YouTube.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'YouTube Help: Create custom video thumbnails',
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
      text: 'Pré visualizador de Miniaturas para YouTube: Domine o CTR do seu Canal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No ecossistema do YouTube, a miniatura (ou thumbnail) é a porta de entrada para o seu conteúdo. Pode ter o melhor vídeo do mundo, com uma edição de Hollywood e um guião digno de um Oscar, mas se ninguém clicar, o seu trabalho será invisível para o algoritmo. É aqui que entra em jogo o <strong>CTR (Click-Through Rate)</strong>, e a miniatura é o fator determinante.',
    },
    {
      type: 'title',
      text: 'Porque precisa de testar as suas miniaturas antes de as carregar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pré-visualização Real:</strong> Veja a sua miniatura tal como aparecerá no feed do YouTube.',
        '<strong>Modo Escuro e Claro:</strong> Garanta que as cores se destacam em qualquer configuração do utilizador.',
        '<strong>Simulador de Dispositivos:</strong> Verifique a legibilidade do texto tanto em monitores como em telemóveis pequenos.',
        '<strong>Otimização de CTR:</strong> Compare o seu design com a interface nativa para maximizar os cliques.',
        '<strong>Sem Registo:</strong> Carregue a sua imagem e teste-a instantaneamente sem criar contas.',
        '<strong>Privacidade Garantida:</strong> Os seus designs são processados localmente e nunca são carregados nos servidores.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Muitos criadores cometem o erro de desenhar as suas miniaturas em monitores grandes, vendo-as em ecrã inteiro nos seus editores favoritos. O problema é que o utilizador final raramente as vê assim. A maioria consome-as num dispositivo móvel enquanto faz scroll infinito, ou num canto do monitor em modo escuro. O nosso <strong>Pré visualizador de Miniaturas de YouTube</strong> permite-lhe quebrar essa "ilusão do designer" e ver a realidade cirúrgica do feed.',
    },
    {
      type: 'title',
      text: 'Métricas Técnicas e Desempenho',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 s', body: 'Tempo de Resposta' },
        { title: '4K', body: 'Resolução Máxima' },
        { title: '100%', body: 'Privacidade Local' },
        { title: 'HD', body: 'Qualidade Nativa' },
      ],
    },
    {
      type: 'title',
      text: 'A Psicologia do Clique: Porque é que as miniaturas falham?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O cérebro humano processa imagens milhares de vezes mais rápido do que o texto. No entanto, no YouTube, a concorrência é brutal. A sua miniatura não deve apenas ser "bonita", deve ser <strong>legível</strong> e ter <strong>contraste</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Um erro comum é usar cores que se mimetizam com o fundo do YouTube. Se usar cinzentos escuros e o seu espectador estiver em modo escuro, o seu vídeo simplesmente desaparecerá da sua visão periférica. Ao usar este tester, pode alternar entre temas e garantir que o seu design "salta" em qualquer cenário.',
    },
    {
      type: 'title',
      text: 'Comparativa Direta: Design vs. Realidade',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vale a pena perder 30 segundos a testar a miniatura? A resposta é um rotundo SIM. Uma miniatura otimizada pode duplicar as suas visualizações nas primeiras 24 horas, o que indica à IA do YouTube que o seu conteúdo tem "gancho".',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Design em Photoshop / Canva',
          body: 'Falsa sensação de tamanho real · Ignora o contraste com o fundo da App · O texto parece legível mas talvez não seja · Não vê os elementos da UI (duração, avatars)',
        },
        {
          title: 'Pré visualizador de Miniaturas YouTube',
          body: 'Vista real no feed de início (Home) · Contraste verificado em Dark vs Light Mode · Legibilidade de texto garantida em mobile · Simulação de títulos e nomes de canal',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist para uma Miniatura com CTR Superior a 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de exportar o seu design final, certifique-se de passar por esta lista de controlo utilizando o nosso simulador profissional:',
    },
    {
      type: 'list',
      items: [
        'O texto é legível num ecrã de telemóvel pequeno?',
        'Há contraste suficiente entre o fundo e o tema principal?',
        'A miniatura vê-se bem sobre o fundo preto do Modo Escuro?',
        'O título do vídeo tapa informação vital da imagem?',
        'A duração do vídeo (o quadradinho preto) oculta algo importante?',
        'O rosto ou o objeto principal transmitem a emoção desejada em tamanho reduzido?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomia de uma Miniatura de Alto Impacto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Baseando-nos em análises dos maiores canais do mundo, uma miniatura vencedora costuma seguir este padrão estrutural:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Tema Principal',
          body: 'Foco de atenção primária · Use recortes nítidos com um ligeiro contorno ou saturação extra.',
        },
        {
          title: 'Texto (Máx 3 palavras)',
          body: 'Contexto instantâneo · Use fontes Sans Serif grossas e cores complementares.',
        },
        {
          title: 'Fundo Desfocado',
          body: 'Separação de planos · Adicione profundidade para que o tema principal "salte" do ecrã.',
        },
        {
          title: 'Espaço de Duração',
          body: 'Evitar erros · Não coloque rostos ou texto no canto inferior direito.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'O Truque da Zona Morta',
      html: '<p>O YouTube coloca sempre um recuadro preto com a duração do vídeo no canto inferior direito da miniatura. Milhares de criadores colocam elementos vitais nessa zona, apenas para descobrir que a App os tapa. A nossa ferramenta simula este recuadro para que nunca tape o seu melhor plano.</p>',
    },
    {
      type: 'title',
      text: 'Vantagens e Limitações da Ferramenta',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Interface ultrarrápida e reativa',
          body: 'Limitação: Não permite edição de imagem (usar Canva/PS)',
        },
        {
          title: 'Mockups exatos da App e Web',
          body: 'Limitação: Não simula anúncios Pre-roll',
        },
        {
          title: 'Grátis e sem publicidade intrusiva',
          body: 'Limitação: Apenas suporta ficheiros locais',
        },
      ],
    },
    {
      type: 'title',
      text: "Uso do Modo 'Split' (Comparação Direta)",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta é a função estrela. Ao ativar o modo Split, verá a sua miniatura sob o prisma do Modo Claro e do Modo Escuro ao mesmo tempo. É a forma definitiva de verificar se a sua paleta de cores é universal ou se precisa de ajustes de brilho e contraste.',
    },
    {
      type: 'title',
      text: 'Privacidade: Os seus Designs não são Carregados para a Nuvem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sabemos que as suas miniaturas são parte da sua estratégia secreta antes de um lançamento. Por isso, desenhámos esta utilidade para que trabalhe exclusivamente no motor do seu navegador. <strong>Nada é carregado para a internet</strong>. O ficheiro que seleciona é carregado através de um URL local temporário que desaparece ao fechar o separador. A sua propriedade intelectual está 100% sob o seu controlo.',
    },
    {
      type: 'title',
      text: 'Conclusão: O Píxel Perfeito Garantido',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deixe de adivinhar e comece a validar. O <strong>Pré visualizador de Miniaturas para YouTube</strong> de JJLMoya é a ferramenta gratuita que separa os criadores amadores dos profissionais do conteúdo. Um pequeno ajuste no tamanho de uma fonte ou na posição do tema pode ser a diferença entre um vídeo que passa despercebido e um sucesso viral.',
    },
    {
      type: 'paragraph',
      html: 'Comece a otimizar o seu canal agora e dê aos seus vídeos a taxa de cliques que eles merecem!',
    },
  ],
  ui: {
    dropFeedTitle: 'Arraste a sua Miniatura',
    dropFeedSub: 'PNG, JPG ou WebP · Múltiplas imagens',
    dropAvatarTitle: 'Arraste o seu Avatar',
    dropAvatarSub: 'Imagem de perfil do canal',
    labelTitle: 'Título do vídeo',
    labelChannel: 'Nome do canal',
    defaultTitle: 'O seu Título de Vídeo Aqui',
    defaultChannel: 'Nome do Canal',
    btnDesktop: 'Desktop',
    btnMobile: 'Móvel',
    btnClear: 'Limpar',
    labelLight: 'Claro',
    labelDark: 'Escuro',
    views0: '1,2 M de visualizações · há 1 hora',
    views1: 'Há 45 minutos',
    views2: '250.000 visualizações · há 1 dia',
    views3: '3,1 M de visualizações · há 1 semana',
  },
};
