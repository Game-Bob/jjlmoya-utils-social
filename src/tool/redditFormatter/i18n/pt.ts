import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'formatador-texto-reddit';
const title = 'Formatador de Texto para Reddit: Limpeza e Correção de Markdown';
const description =
  'Limpador de texto avançado para postar no Reddit. Corrige quebras de linha ausentes, remove espaços múltiplos e caracteres ocultos que quebram o Markdown.';

const faqData = [
  {
    question: 'Por que o meu texto no Reddit perde as quebras de linha?',
    answer:
      'O Reddit utiliza Markdown, que requer que primes o espaço duplo no final de uma linha antes de premires Enter para uma quebra de linha normal, ou premires Enter duas vezes para criar um novo parágrafo. A nossa ferramenta lida com isto automaticamente inserindo quebras de linha duplas.',
  },
  {
    question: 'O que são caracteres ocultos ou invisíveis?',
    answer:
      'Ao copiar de processadores de texto complexos, marcadores de formatação de largura zero são frequentemente anexados. Estes elementos são invisíveis em páginas web normais, mas podem quebrar o ecossistema Markdown.',
  },
  {
    question: 'É seguro usar este limpador de texto?',
    answer:
      'Completamente seguro. O script corre inteiramente no lado do cliente (no teu próprio navegador). O teu texto nunca é enviado para nenhum servidor e ninguém mais terá acesso ao que colas aqui.',
  },
  {
    question: 'Posso usar isto para o Twitter ou outras redes?',
    answer:
      'Sim, além de corrigir posts do Reddit, remover espaços múltiplos e caracteres estranhos é útil para qualquer publicação em blogs, Twitter, fóruns phpBB antigos ou qualquer outra plataforma social onde precises de um texto limpo e neutro.',
  },
];

const howToData = [
  {
    name: 'Cola o teu texto',
    text: 'Copia o teu texto do Word, Google Docs ou qualquer fonte e cola-o no campo de entrada.',
  },
  {
    name: 'Escolhe as opções',
    text: 'Ativa ou desativa as opções dependendo do que precisas: corrigir parágrafos, remover espaços ou limpar caracteres ocultos.',
  },
  {
    name: 'Revisa o resultado',
    text: 'O texto limpo aparece em tempo real no campo de saída, pronto para publicar.',
  },
  {
    name: 'Copia e posta',
    text: 'Clica em "Copiar Texto" e cola-o diretamente no Reddit ou em qualquer fórum.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'Ajuda do Reddit: Formatação de texto em posts e comentários',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Guia de Markdown do Reddit',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Ferramenta de Formatação Definitiva para Reddit e Fóruns Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Criar posts no Reddit ou em qualquer plataforma que dependa do Markdown pode ser frustrante. Um problema comum ao copiar e colar texto de processadores de texto complexos ou páginas web é que as quebras de linha são alteradas. Quando submetes o conteúdo, transforma-se frequentemente num bloco sólido e difícil de ler, ignorando a estrutura original dos parágrafos. A nossa ferramenta de formatação resolve este problema na raiz.',
    },
    {
      type: 'title',
      text: 'Como funciona o Limpador de Texto para Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O motor de processamento executa vários filtros no teu texto em tempo real. Primeiro, aborda as quebras de linha. O Reddit requer um formato específico onde uma quebra de parágrafo precisa de duas novas linhas no código fonte Markdown. O limpador analisa o teu texto e converte automaticamente quebras de linha simples em quebras duplas, mantendo os parágrafos existentes intactos para evitar a produção de espaçamento excessivo.',
    },
    {
      type: 'paragraph',
      html: 'Segundo, a ferramenta remove caracteres invisíveis e espaços múltiplos. Ao copiar texto de websites, é comum arrastar caracteres de largura zero que quebram a formatação ou causam comportamentos estranhos em fóruns. O limpador purga estes elementos web intrusivos e normaliza espaços repetidos num único espaço limpo. Opcionalmente, podes remover todos os hyperlinks brutos do teu conteúdo para postar um texto completamente neutro.',
    },
    {
      type: 'title',
      text: 'Benefícios de usar um Limpador de Texto Especializado',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Leitura Otimizada:</strong> Garante que os teus leitores no Reddit vejam texto devidamente estruturado em vez de um muro de palavras intimidante.',
        '<strong>Poupança de Tempo:</strong> Esquece o clicar Enter centenas de vezes para corrigir formatação quebrada. Cola o teu conteúdo e copia-o pronto em menos de um segundo.',
        '<strong>Remoção de Metadados e Lixo Web:</strong> Protege o teu post de estilos estranhos ou quebras causadas por espaços de largura zero.',
        '<strong>Privacidade Elevada:</strong> Todo o processamento é feito no lado do cliente. O texto nunca sai do teu navegador nem é armazenado em servidores externos.',
      ],
    },
    {
      type: 'title',
      text: 'O Problema com Processadores de Texto e o Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aplicações como o Microsoft Word ou o Google Docs adicionam uma camada invisível de formatação rica sobre o seu texto. Quando copias e colas esse conteúdo diretamente no editor básico ou no modo Markdown do Reddit, a formatação rica desaparece e o que resta é muitas vezes uma amálgama sem estrutura. O Reddit utiliza uma variante de Markdown bastante rigorosa. Se não estás familiarizado com a sintaxe do Reddit ou simplesmente desejas um processo mais suave ao transferir ensaios ou histórias para o fórum, limpar o texto aqui primeiro evita que o teu post receba downvotes simplesmente por ser impossível de ler confortavelmente.',
    },
    {
      type: 'title',
      text: 'Boas Práticas para Postar em Fóruns',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A formatação correta é vital para gerar discussão e manter a atenção da comunidade. Posts com linhas muito longas ou parágrafos inexistentes são frequentemente abandonados após as primeiras frases. Usa esta ferramenta de limpeza para lançar as bases estruturais. Depois, adiciona formatação como negrito e itálico estrategicamente dentro do próprio editor do Reddit para destacar ideias-chave. Revisa sempre a pré-visualização e tira partido das listas estruturadas para enumerar pontos importantes ou guias detalhados.',
    },
    {
      type: 'title',
      text: 'Exemplo de Transformação',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Antes e depois do formatador',
      html: '<p><strong>Texto original colado:</strong></p><pre>Olá esta é a primeira linha\ne esta devia ser a segunda\nmas no Reddit tudo fica junto quando colas.</pre><p><strong>Texto formatado:</strong></p><pre>Olá esta é a primeira linha\n\ne esta devia ser a segunda\n\nmas no Reddit tudo fica junto quando colas.</pre>',
    },
    {
      type: 'title',
      text: 'Perguntas Frequentes sobre o Formatador de Texto para Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Encontrar as respostas certas sobre como interagir com as regras editoriais do Reddit não é sempre óbvio. Verifica a secção de FAQ onde abordamos as principais questões sobre formatos válidos e como evitar ser penalizado por muros de texto massivos.',
    },
  ],
  ui: {
    labelInput: 'Texto Original',
    placeholderInput: 'Cola o teu texto original aqui...',
    labelOptions: 'Opções de Formatação',
    optionParagraphs: 'Corrigir Parágrafos ao estilo Reddit',
    optionSpaces: 'Remover espaços múltiplos',
    optionInvisible: 'Limpar caracteres web ocultos',
    optionLinks: 'Extrair URLs (Apenas texto)',
    labelOutput: 'Texto Limpo',
    placeholderOutput: 'O resultado da limpeza aparecerá aqui...',
    btnCopy: 'Copiar Texto',
    btnCopied: 'Copiado',
  },
};
