import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'descarregar-miniaturas-youtube-hd';
const title = 'Descarregador de Miniaturas do YouTube (HD)';
const description =
  'Extraia e descarregue a imagem em miniatura original de qualquer vídeo do YouTube na resolução máxima e sem marcas de água usando apenas o URL.';

const faqData = [
  {
    question: 'Em que resolução são extraídas as miniaturas?',
    answer:
      "A ferramenta tenta sempre obter a imagem na resolução 'MaxRes' (1280x720 ou 1920x1080), que é a qualidade original carregada pelo criador do vídeo. Se o autor não carregou uma miniatura em HD, mostrará automaticamente a resolução mais alta seguinte disponível.",
  },
  {
    question: 'Que tipos de links suporta?',
    answer:
      'Suporta URLs tradicionais de youtube.com/watch, links curtos de youtu.be, links móveis e até URLs do YouTube Shorts de forma transparente.',
  },
  {
    question: 'É legal descarregar miniaturas do YouTube?',
    answer:
      'Sim, o descarregamento é completamente legal para uso pessoal, design, paródias e inspiração (Fair Use). Tenha cuidado se pretender utilizar miniaturas protegidas por direitos de autor para fins puramente comerciais; nesses casos, é importante consultar a licença do vídeo.',
  },
  {
    question: 'Existe algum limite de utilização diária?',
    answer:
      'Não há limites mensais nem diários. Como este software funciona do lado do cliente, resolvendo o padrão do URL internamente no seu navegador, não interagimos com as APIs restritivas tradicionais.',
  },
];

const howToData = [
  {
    name: 'Copie o URL do vídeo',
    text: 'Vá ao YouTube e copie o link do vídeo da barra do navegador ou do botão de partilha.',
  },
  {
    name: 'Cole o link',
    text: 'Introduza o URL no campo do extrator ou utilize o botão para colar da área de transferência.',
  },
  {
    name: 'Selecione a qualidade',
    text: 'A ferramenta mostrará todas as resoluções disponíveis, desde a qualidade máxima (1080p) até à mais baixa.',
  },
  {
    name: 'Descarregue a imagem',
    text: 'Clique no botão de descarregar para guardar a miniatura no seu dispositivo.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Documentação e Referências',
  bibliography: [
    {
      name: 'Ajuda do YouTube: Adicionar uma imagem em miniatura personalizada',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Como criar miniaturas eficazes',
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
      text: 'Descarregar Miniaturas do YouTube em HD Grátis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se precisar de <strong>descarregar a miniatura de um vídeo do YouTube</strong> no seu tamanho original ou na qualidade máxima (Full HD ou 4K), esta ferramenta gratuita é a solução mais rápida. Poderá obter a imagem de capa de qualquer canal para se inspirar, criar os seus próprios designs ou utilizá-la em apresentações.',
    },
    {
      type: 'tip',
      title: 'Extrair Foto de Capa sem Programas',
      html: '<p>Não é necessário instalar software nem registar-se. Só tem de copiar e colar o link do vídeo e poderá <strong>guardar a miniatura do YouTube</strong> diretamente no seu computador ou telemóvel.</p>',
    },
    {
      type: 'title',
      text: 'Como obter a miniatura de um vídeo do YouTube?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O processo para <strong>tirar a foto de um vídeo do YouTube</strong> é muito simples. Siga estes passos para obter a imagem em segundos:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Copie o URL:</strong> Vá ao YouTube e copie o link do vídeo (seja da barra do navegador ou do botão de partilha).',
        '<strong>2. Cole o link:</strong> Introduza o URL no campo de pesquisa do nosso extrator de miniaturas.',
        '<strong>3. Selecione a qualidade:</strong> Mostraremos todas as resoluções disponíveis, desde a qualidade máxima (1080p) até à mais baixa (360p).',
        '<strong>4. Descarregue a imagem:</strong> Clique no botão de descarregar para guardar a <i>thumbnail</i> no seu dispositivo.',
      ],
    },
    {
      type: 'title',
      text: 'Formatos e Resoluções Suportados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Descarregar capas de vídeos do YouTube nunca foi tão fácil. A ferramenta procura automaticamente a melhor imagem possível (conhecida como <strong>maxresdefault</strong>), que costumam ser designs trabalhados em Photoshop pelos YouTubers. Se o criador não carregou uma imagem em HD, daremos a opção seguinte melhor (<strong>hqdefault</strong> ou <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Esta utilidade é perfeita para <i>Community Managers</i>, designers gráficos, criadores de conteúdo, criadores de memes ou qualquer pessoa que precise de <strong>descarregar a capa de um vídeo</strong> para os seus projetos. Além disso, é compatível com os <strong>YouTube Shorts</strong>, pelo que também poderá obter as suas miniaturas da mesma forma.',
    },
    {
      type: 'title',
      text: 'Usos Profissionais das Miniaturas do YouTube',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As miniaturas do YouTube são ativos visuais de alto valor. Representam horas de trabalho de design, testes A/B e otimização de CTR por parte dos criadores. Saber como aceder a elas e descarregá-las abre um leque de possibilidades profissionais.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Criadores de Conteúdo',
          html: '<p>Analise as miniaturas de vídeos virais no seu nicho para entender que elementos visuais geram mais cliques: tipografia, cores dominantes, uso de rostos ou texto.</p><ul><li><strong>Benchmarking visual:</strong> Compare as suas miniaturas com as dos líderes do seu setor.</li><li><strong>Iteração de design:</strong> Descarregue e use miniaturas como referência no Photoshop ou Canva.</li><li><strong>Arquivo de inspiração:</strong> Construa uma biblioteca de thumbnails de alta conversão.</li></ul>',
        },
        {
          type: 'card',
          title: 'Designers e Marketers',
          html: '<p>Para um designer gráfico ou um <i>social media manager</i>, aceder rapidamente às miniaturas do YouTube é essencial para apresentações, propostas de cliente e auditorias visuais.</p><ul><li><strong>Apresentações de cliente:</strong> Inclua capturas reais da concorrência nas suas propostas.</li><li><strong>Auditorias de marca:</strong> Avalie a coerência visual de um canal do YouTube.</li><li><strong>Moodboards:</strong> Reúna referências visuais de alta qualidade sem capturas de ecrã desfocadas.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compatibilidade com YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O extrator funciona perfeitamente com os <strong>YouTube Shorts</strong>. Os Shorts têm o seu próprio formato de miniatura vertical (9:16) que é gerado automaticamente a partir do vídeo. Esta ferramenta reconhece os URLs de Shorts (<code>youtube.com/shorts/ID</code>) e extrai a melhor miniatura disponível da mesma forma que nos vídeos padrão.',
    },
    {
      type: 'tip',
      title: 'Privacidade Garantida',
      html: '<p>Toda a extração ocorre no seu navegador. Não são enviados URLs nem dados para nenhum servidor externo.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Cole o link do YouTube aqui...',
    pasteAriaLabel: 'Colar da área de transferência',
    helperText: 'Formatos suportados: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Qualidade Máxima',
    downloadBtn: 'Descarregar na Resolução Máxima',
    qualityMedium: 'Qualidade Média',
    qualityStandard: 'Qualidade Estágio',
    qualityLow: 'Qualidade Baixa',
    viewImage: 'Ver Imagem',
    errorInvalid: 'URL do YouTube inválido. Por favor, verifique-o.',
    imgAlt: 'Miniatura HD do YouTube',
  },
};
