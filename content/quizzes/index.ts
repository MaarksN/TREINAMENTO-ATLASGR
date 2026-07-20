import type { QuizQuestion } from "@/lib/types";

const quiz01: QuizQuestion[] = [
  {
    id: "q01-1",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Em que ano a Atlas Segurança e Inteligência Logística foi fundada?",
    options: ["1998", "2004", "2010", "2015"],
    correctIndex: 1,
    explanation: "A Política Organizacional e Ética afirma que a empresa surgiu em 2004 com o propósito de gerenciar riscos em processos logísticos.",
    reference: "Módulo 1 — Quem é a ATLASGR",
  },
  {
    id: "q01-2",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Qual área da Diretoria é descrita como 'o coração da empresa'?",
    options: ["TI", "DHO", "Operações", "Comercial"],
    correctIndex: 2,
    explanation: "Operações é onde as operações de gerenciamento de risco dos clientes efetivamente acontecem — por isso é chamada de coração da empresa.",
    reference: "Módulo 1 — Estrutura Organizacional",
  },
  {
    id: "q01-3",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Qual das opções abaixo NÃO é um dos 5 valores da ATLASGR?",
    options: ["Transparência", "Atitude de Dono", "Competitividade", "Simplicidade"],
    correctIndex: 2,
    explanation: "Os 5 valores são Perseverança, Transparência, Simplicidade, Atitude de Dono e Inovação — 'Competitividade' não está entre eles.",
    reference: "Módulo 1 — Quem é a ATLASGR",
  },
  {
    id: "q01-4",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "De quanto em quanto tempo o Treinamento de Reciclagem é obrigatório, como regra geral?",
    options: ["A cada 1 ano", "A cada 2 anos", "A cada 3 anos", "Apenas uma vez, na admissão"],
    correctIndex: 2,
    explanation: "A reciclagem é obrigatória a cada 3 anos, contados do Treinamento Inicial ou da última reciclagem, podendo ser antecipada em caso de mudanças relevantes.",
    reference: "Módulo 1 — Cultura, ética e conduta",
  },
  {
    id: "q01-5",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "O uso de celular pessoal é permitido na sala de operação?",
    options: ["Sim, sem restrições", "Não, é expressamente proibido", "Sim, apenas para supervisores", "Sim, apenas durante o intervalo"],
    correctIndex: 1,
    explanation: "A Política Organizacional e Ética proíbe expressamente o uso de celular pessoal na sala de operação.",
    reference: "Módulo 1 — Cultura, ética e conduta",
  },
];

const quiz03: QuizQuestion[] = [
  {
    id: "q03-1",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que é o PGR?",
    options: [
      "Um relatório financeiro mensal",
      "O Plano de Gerenciamento de Risco, com as regras de segurança da operação",
      "Um tipo de sensor do veículo",
      "O nome do sistema de rastreamento",
    ],
    correctIndex: 1,
    explanation: "O PGR define rotas permitidas, horários de risco, pontos de parada e o passo a passo da Central diante de cada tipo de alerta.",
    reference: "Módulo 3 — O que é gerenciamento de risco",
  },
  {
    id: "q03-2",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que é 'sublimite' em uma apólice de seguro?",
    options: [
      "O valor total da apólice",
      "O teto de indenização para uma cobertura específica, dentro do limite geral (LMI)",
      "O nome do relatório de sinistro",
      "Um tipo de alerta do rastreador",
    ],
    correctIndex: 1,
    explanation: "Sublimite é o valor máximo de indenização para uma cobertura específica, dentro do Limite Máximo de Indenização (LMI) geral da apólice.",
    reference: "Módulo 3 — Apólice, sinistro e sublimite",
  },
  {
    id: "q03-3",
    moduleSlug: "03-gerenciamento-risco",
    question: "Quantas permissões uma Gerenciadora de Risco (GR) pode ter ao ser associada a um veículo no portal do fabricante do rastreador?",
    options: ["2", "3", "4", "6"],
    correctIndex: 2,
    explanation: "São 4 permissões: GR Principal, Comando Disponível, Ação Embarcada Disponível e Alerta Compartilhado.",
    reference: "Módulo 3 — A GR dentro do equipamento de rastreamento",
  },
  {
    id: "q03-4",
    moduleSlug: "03-gerenciamento-risco",
    question: "Quantas Gerenciadoras de Risco podem ser marcadas como 'GR Principal' em um mesmo veículo?",
    options: ["Nenhuma", "Apenas uma", "Até duas", "Todas as associadas"],
    correctIndex: 1,
    explanation: "Apenas uma GR pode ser a GR Principal por veículo — ela é responsável pela configuração e gestão do equipamento.",
    reference: "Módulo 3 — A GR dentro do equipamento de rastreamento",
  },
  {
    id: "q03-5",
    moduleSlug: "03-gerenciamento-risco",
    question: "No treinamento de Malícia, o que é a 'senha de coação'?",
    options: [
      "A senha de acesso ao Atlas Connect",
      "Uma palavra combinada previamente para indicar discretamente que o motorista está sendo forçado a agir contra sua vontade",
      "O código do checklist do veículo",
      "A senha do rastreador instalado no veículo",
    ],
    correctIndex: 1,
    explanation: "A senha de coação é combinada entre motorista e Central para sinalizar uma situação de coação sem alertar quem estiver forçando o motorista.",
    reference: "Módulo 3 — Do PGR ao dia a dia da Central",
  },
];

const quiz05: QuizQuestion[] = [
  {
    id: "q05-1",
    moduleSlug: "05-software-logistico",
    question: "Qual afirmação descreve corretamente o Atlas Connect?",
    options: [
      "Ele substitui totalmente o equipamento de rastreamento instalado no veículo",
      "Ele centraliza cadastros, PGR, checklist e eventos, mas não substitui o rastreador",
      "Ele é usado apenas pelo setor Comercial",
      "Ele só funciona para clientes da tecnologia Sascar",
    ],
    correctIndex: 1,
    explanation: "O Connect centraliza o fluxo de trabalho da Central, mas o operador ainda precisa interagir com o equipamento/portal do fabricante do rastreador.",
    reference: "Módulo 5 — O que é o Atlas Connect",
  },
  {
    id: "q05-2",
    moduleSlug: "05-software-logistico",
    question: "Onde o operador solicita um checklist para uma placa específica?",
    options: [
      "Em Usuários do sistema",
      "Em Cadastros Gerais → Veículo → Veículo, no botão 'Solicitar CheckList'",
      "Na Torre de Controle",
      "No Dashboard",
    ],
    correctIndex: 1,
    explanation: "A solicitação é feita a partir do cadastro do veículo, informando responsável e telefone de contato.",
    reference: "Módulo 5 — Fluxo de checklist no Connect",
  },
  {
    id: "q05-3",
    moduleSlug: "05-software-logistico",
    question: "Onde o operador valida item a item os sensores e atuadores testados em um checklist?",
    options: [
      "Em Monitoramento → Operador CheckList",
      "Em Cliente",
      "Em Localização",
      "No menu Logística",
    ],
    correctIndex: 0,
    explanation: "Em Operador CheckList, cada item (bloqueio, sirene, sensores etc.) pode ser aprovado ou reprovado, com campo de observação.",
    reference: "Módulo 5 — Fluxo de checklist no Connect",
  },
  {
    id: "q05-4",
    moduleSlug: "05-software-logistico",
    question: "Quais 3 competências são treinadas em cada tecnologia de rastreamento atendida pela Atlas (ex.: Sascar, Onix, Pósitron)?",
    options: [
      "Vendas, marketing e financeiro",
      "Envio de comandos, desbloqueio manual e análise de relatórios",
      "Instalação física, manutenção e garantia",
      "Cadastro de clientes, faturamento e cobrança",
    ],
    correctIndex: 1,
    explanation: "O cronograma de treinamentos mostra que cada tecnologia (Sascar/Sighra, Onix/Omnilink, Pósitron/Autotrac) é treinada nessas 3 competências.",
    reference: "Módulo 5 — Integração com tecnologias de rastreamento",
  },
  {
    id: "q05-5",
    moduleSlug: "05-software-logistico",
    question: "O que é o 'Consolidado SM' no Atlas Connect?",
    options: [
      "Um relatório de folha de pagamento",
      "A tela que reúne o fechamento das viagens monitoradas (SMs) já concluídas",
      "O cadastro de novos clientes",
      "A lista de sensores de um veículo",
    ],
    correctIndex: 1,
    explanation: "É usada pela liderança para conferir o fechamento das SMs concluídas.",
    reference: "Módulo 5 — Tour pelo menu principal",
  },
];

export const quizzesByModule: Record<string, QuizQuestion[]> = {
  "01-bem-vindo-atlasgr": quiz01,
  "03-gerenciamento-risco": quiz03,
  "05-software-logistico": quiz05,
};

export function getQuizForModule(slug: string): QuizQuestion[] {
  return quizzesByModule[slug] ?? [];
}

export function getAllBuiltQuestions(): QuizQuestion[] {
  return [...quiz01, ...quiz03, ...quiz05];
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
