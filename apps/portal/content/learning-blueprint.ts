export interface PracticeLab {
  mission: string;
  scenario: string;
  deliverable: string;
  rubric: string[];
  recallPrompts: string[];
  transferQuestion: string;
}

export interface RoleTrack {
  id: string;
  label: string;
  description: string;
  prioritySlugs: string[];
}

export const practiceLabs: Record<string, PracticeLab> = {
  "01-bem-vindo-atlasgr": {
    mission: "Explique a ATLASGR em 60 segundos sem recorrer a frases genéricas.",
    scenario: "Um novo parceiro pergunta, no elevador, o que torna a ATLASGR diferente de uma empresa que apenas monitora veículos.",
    deliverable: "Prepare um pitch de até 60 segundos conectando propósito, cultura, segurança logística e geração de valor.",
    rubric: [
      "Explica o propósito da empresa com linguagem própria.",
      "Conecta cultura e comportamento esperado no dia a dia.",
      "Mostra a diferença entre tecnologia isolada e inteligência logística aplicada.",
    ],
    recallPrompts: [
      "Quais ideias você precisa lembrar sem consultar o material?",
      "Que comportamento demonstra, na prática, a cultura ATLASGR?",
      "Como você explicaria a empresa para alguém de fora do setor?",
    ],
    transferQuestion: "O que você faria diferente amanhã para representar melhor a cultura da ATLASGR?",
  },
  "02-mercado-logistica": {
    mission: "Mapeie uma operação logística do embarcador ao destino e identifique onde o risco nasce.",
    scenario: "Uma carga de alto valor sai de um centro de distribuição e percorre múltiplos estados com transportadora terceirizada.",
    deliverable: "Desenhe mentalmente a cadeia, identifique pelo menos 4 atores e 3 pontos de vulnerabilidade.",
    rubric: [
      "Distingue embarcador, transportador, motorista e demais agentes.",
      "Relaciona tipo de operação com exposição a risco.",
      "Consegue explicar impacto operacional de uma falha em qualquer elo.",
    ],
    recallPrompts: [
      "Qual é a diferença prática entre embarcador e transportadora?",
      "Quais variáveis mudam o risco de uma viagem?",
      "Onde informação ruim gera decisão ruim na cadeia logística?",
    ],
    transferQuestion: "Que pergunta você faria primeiro ao receber uma operação que nunca viu?",
  },
  "03-gerenciamento-risco": {
    mission: "Tome uma decisão de risco antes que um evento vire sinistro.",
    scenario: "Uma viagem crítica apresenta desvio de rota, parada não programada e perda momentânea de comunicação.",
    deliverable: "Defina a ordem das ações, quais evidências precisam ser confirmadas e quando escalar o evento.",
    rubric: [
      "Prioriza segurança e protocolo acima de improviso.",
      "Diferencia indício, evento e sinistro.",
      "Usa PGR e regras operacionais como base de decisão.",
    ],
    recallPrompts: [
      "Qual é o papel real de um PGR?",
      "O que transforma monitoramento em gerenciamento de risco?",
      "Que sinais exigem escalonamento imediato?",
    ],
    transferQuestion: "Como você evitaria que a pressão por velocidade prejudicasse uma decisão de risco?",
  },
  "04-produtos-atlasgr": {
    mission: "Monte a solução certa para a dor certa, sem vender um catálogo.",
    scenario: "Um cliente tem fraude cadastral, baixa visibilidade das viagens e perdas recorrentes em rotas críticas.",
    deliverable: "Associe cada dor a uma solução ATLASGR e explique a lógica da combinação em linguagem de negócio.",
    rubric: [
      "Escolhe soluções pelo problema, não pelo nome do produto.",
      "Mostra como as soluções se complementam.",
      "Traduz funcionalidades em impacto operacional e financeiro.",
    ],
    recallPrompts: [
      "Quais dores cada solução resolve melhor?",
      "Onde duas soluções atuam de forma complementar?",
      "Que benefício o cliente percebe antes de perceber a tecnologia?",
    ],
    transferQuestion: "Qual produto você nunca deveria apresentar sem antes entender o contexto do cliente? Por quê?",
  },
  "05-software-logistico": {
    mission: "Conduza uma viagem no Atlas Connect do início ao tratamento de exceção.",
    scenario: "Uma operação inicia normalmente, mas surge um alerta crítico durante a rota.",
    deliverable: "Descreva o fluxo de trabalho no sistema, do acompanhamento à decisão e ao registro do tratamento.",
    rubric: [
      "Entende o fluxo operacional, não apenas telas isoladas.",
      "Sabe onde procurar contexto antes de agir.",
      "Registra a decisão de forma rastreável.",
    ],
    recallPrompts: [
      "Qual informação precisa estar visível antes de tratar um alerta?",
      "Que ação nunca deve ficar sem registro?",
      "Como o sistema ajuda a reduzir tempo de resposta?",
    ],
    transferQuestion: "O que você verificaria em 30 segundos antes de escalar um evento?",
  },
  "06-atlas-profile": {
    mission: "Analise um cadastro sem confundir dado disponível com decisão segura.",
    scenario: "Um motorista apresenta documentação regular, mas existem sinais de inconsistência em dados cadastrais e histórico.",
    deliverable: "Liste os pontos que precisam ser validados e explique o que exigiria análise adicional antes da liberação.",
    rubric: [
      "Distingue validação cadastral de julgamento pessoal.",
      "Usa evidência, biometria e critérios de compliance.",
      "Evita conclusões além do que os dados suportam.",
    ],
    recallPrompts: [
      "Por que background check não é apenas consulta documental?",
      "Quais inconsistências merecem segunda checagem?",
      "Como reduzir falso positivo sem reduzir segurança?",
    ],
    transferQuestion: "Como você explicaria uma reprovação cadastral sem expor informação indevida?",
  },
  "07-integracoes": {
    mission: "Explique uma integração para quem precisa do resultado, não da sigla.",
    scenario: "O cliente usa TMS próprio, rastreadores de fabricantes diferentes e quer eliminar digitação duplicada.",
    deliverable: "Descreva um fluxo de integração simples, indicando origem, destino, dado crítico e benefício operacional.",
    rubric: [
      "Diferencia sistemas e responsabilidades.",
      "Explica o caminho do dado de ponta a ponta.",
      "Relaciona integração com redução de erro e ganho de velocidade.",
    ],
    recallPrompts: [
      "O que uma API resolve neste contexto?",
      "Qual é o risco de uma integração sem governança de dados?",
      "Que dado precisa ter uma fonte da verdade definida?",
    ],
    transferQuestion: "Que pergunta técnica simples evita prometer uma integração impossível?",
  },
  "08-clientes": {
    mission: "Identifique o perfil do cliente antes de falar de solução.",
    scenario: "Duas empresas têm o mesmo volume de viagens, mas uma é embarcadora e a outra transportadora com operação pulverizada.",
    deliverable: "Explique como as prioridades, dores e critérios de decisão podem mudar entre os dois perfis.",
    rubric: [
      "Reconhece diferenças de contexto mesmo com volumes semelhantes.",
      "Conecta perfil com dores prováveis sem tratar hipótese como fato.",
      "Formula perguntas de descoberta específicas para cada cliente.",
    ],
    recallPrompts: [
      "O que muda na conversa com embarcador versus transportadora?",
      "Qual dado ajuda a estimar complexidade operacional?",
      "Que hipótese sempre precisa ser validada com o cliente?",
    ],
    transferQuestion: "Que três perguntas você faria antes de apresentar qualquer solução?",
  },
  "09-processo-comercial": {
    mission: "Conduza uma descoberta curta que gere próxima ação concreta.",
    scenario: "Um diretor de logística atende com pouco tempo e diz que já possui gerenciadora de risco.",
    deliverable: "Construa uma abordagem de até 90 segundos com contexto, duas perguntas de diagnóstico e um próximo passo claro.",
    rubric: [
      "É objetivo e respeita o tempo do decisor.",
      "Investiga impacto antes de argumentar produto.",
      "Fecha com próximo passo específico e proporcional ao interesse.",
    ],
    recallPrompts: [
      "Qual é a diferença entre objeção e falta de contexto?",
      "O que torna uma pergunta de descoberta realmente útil?",
      "Quando insistir reduz, em vez de aumentar, a chance de avanço?",
    ],
    transferQuestion: "Como você adaptaria sua abordagem para um decisor que só tem 30 segundos?",
  },
  "10-termos-tecnicos": {
    mission: "Traduza linguagem técnica para uma comunicação que qualquer área consiga executar.",
    scenario: "Um alerta operacional contém termos técnicos corretos, mas o cliente não entende a ação esperada.",
    deliverable: "Escolha cinco termos do módulo e reescreva cada um em linguagem simples, mantendo precisão.",
    rubric: [
      "Mantém significado técnico sem jargão desnecessário.",
      "Explica a consequência prática do termo.",
      "Sabe quando o termo técnico precisa ser preservado por precisão.",
    ],
    recallPrompts: [
      "Quais termos parecem semelhantes, mas significam coisas diferentes?",
      "Que sigla você não deveria usar sem explicar?",
      "Qual termo muda uma decisão operacional se for interpretado errado?",
    ],
    transferQuestion: "Qual expressão do seu dia a dia você pode tornar mais clara a partir de hoje?",
  },
  "11-operacao": {
    mission: "Gerencie simultaneamente prioridade, tempo e registro durante um evento crítico.",
    scenario: "Há múltiplos alertas ativos e um deles apresenta sinais de risco elevado. O cliente pede atualização imediata.",
    deliverable: "Defina prioridade, sequência de tratamento, comunicação e registro até o encerramento do evento.",
    rubric: [
      "Prioriza por criticidade e não por ordem de chegada.",
      "Mantém comunicação objetiva durante o tratamento.",
      "Fecha o ciclo com evidência e rastreabilidade.",
    ],
    recallPrompts: [
      "O que define prioridade em uma fila de eventos?",
      "Que informação precisa constar no registro final?",
      "Qual é o custo de uma atividade crítica sem responsável claro?",
    ],
    transferQuestion: "Como você reduziria tempo de resposta sem pular etapas de segurança?",
  },
  "12-compliance": {
    mission: "Escolha a ação correta quando o caminho mais rápido cria risco de compliance.",
    scenario: "Um parceiro solicita por mensagem dados pessoais de motorista alegando urgência operacional.",
    deliverable: "Explique o que pode ser feito, o que precisa ser validado e como responder mantendo segurança e continuidade da operação.",
    rubric: [
      "Aplica necessidade, finalidade e mínimo acesso possível.",
      "Reconhece informação sensível e canal inadequado.",
      "Escala quando a decisão excede sua alçada.",
    ],
    recallPrompts: [
      "Qual é a diferença entre ter acesso e ter autorização para compartilhar?",
      "Que dados merecem proteção reforçada?",
      "Quando urgência não justifica exceção?",
    ],
    transferQuestion: "Que hábito simples pode reduzir exposição de dados na sua rotina?",
  },
  "13-tecnologia": {
    mission: "Avalie uma automação pelo valor e pelo risco, não pelo efeito novidade.",
    scenario: "Uma nova IA promete classificar alertas automaticamente e reduzir esforço da Central.",
    deliverable: "Defina critérios para testar a solução, incluindo qualidade, erro aceitável, supervisão humana e métrica de impacto.",
    rubric: [
      "Distingue automação útil de automação apenas impressionante.",
      "Define métrica de sucesso antes da implantação.",
      "Mantém supervisão humana em decisões sensíveis.",
    ],
    recallPrompts: [
      "Que problema deve existir antes de escolher uma tecnologia?",
      "Qual erro de IA é mais perigoso para a operação?",
      "Que indicador prova ganho real de uma automação?",
    ],
    transferQuestion: "Que tarefa repetitiva da sua rotina merece ser analisada para automação e por quê?",
  },
  "14-casos-reais": {
    mission: "Extraia um padrão operacional de um caso real sem transformar exceção em regra.",
    scenario: "Um caso de recuperação bem-sucedida chama atenção pelo resultado, mas envolveu condições específicas.",
    deliverable: "Separe contexto, decisão, evidência, resultado e lições replicáveis do caso.",
    rubric: [
      "Diferencia fato, interpretação e aprendizado.",
      "Identifica o que foi decisivo para o resultado.",
      "Evita copiar uma ação sem validar o contexto.",
    ],
    recallPrompts: [
      "Qual decisão mudou o rumo do caso?",
      "Que dado chegou no momento certo?",
      "O que não pode ser generalizado a partir deste caso?",
    ],
    transferQuestion: "Que lição desse tipo de caso pode virar procedimento, checklist ou alerta preventivo?",
  },
  "15-preparacao-final": {
    mission: "Prove que você consegue integrar conhecimento, não apenas lembrar respostas.",
    scenario: "Você precisa explicar uma operação completa para uma pessoa nova, conectando cliente, risco, tecnologia, processo e compliance.",
    deliverable: "Faça uma síntese de 5 minutos cobrindo o fluxo ponta a ponta e os pontos de decisão mais críticos.",
    rubric: [
      "Conecta conceitos de módulos diferentes.",
      "Prioriza os conhecimentos que mudam decisões.",
      "Explica com clareza, sem depender de decorar frases.",
    ],
    recallPrompts: [
      "Quais são os cinco conceitos que mais mudam a qualidade da sua decisão?",
      "Onde você ainda precisa revisar antes da prova?",
      "Que erro você agora saberia evitar no primeiro dia de operação?",
    ],
    transferQuestion: "Qual conhecimento deste treinamento terá maior impacto no seu trabalho real?",
  },
};

export const roleTracks: RoleTrack[] = [
  {
    id: "comercial",
    label: "Comercial e Relacionamento",
    description: "Prioriza leitura de cliente, portfólio, descoberta, argumentação e visão de negócio.",
    prioritySlugs: ["01-bem-vindo-atlasgr", "04-produtos-atlasgr", "08-clientes", "09-processo-comercial", "03-gerenciamento-risco", "05-software-logistico"],
  },
  {
    id: "operacao",
    label: "Operação e Monitoramento",
    description: "Prioriza risco, sistemas, procedimentos, resposta a eventos e disciplina operacional.",
    prioritySlugs: ["01-bem-vindo-atlasgr", "03-gerenciamento-risco", "05-software-logistico", "11-operacao", "12-compliance", "10-termos-tecnicos"],
  },
  {
    id: "tecnologia",
    label: "Tecnologia e Integrações",
    description: "Prioriza arquitetura de informação, integrações, produtos digitais, dados e automações.",
    prioritySlugs: ["01-bem-vindo-atlasgr", "05-software-logistico", "07-integracoes", "13-tecnologia", "12-compliance", "03-gerenciamento-risco"],
  },
  {
    id: "gestao",
    label: "Gestão e Liderança",
    description: "Prioriza visão sistêmica, risco, clientes, operação, compliance e tomada de decisão.",
    prioritySlugs: ["01-bem-vindo-atlasgr", "02-mercado-logistica", "03-gerenciamento-risco", "08-clientes", "11-operacao", "12-compliance", "14-casos-reais"],
  },
  {
    id: "geral",
    label: "Formação Essencial",
    description: "Rota equilibrada para quem precisa construir visão completa do ecossistema ATLASGR.",
    prioritySlugs: ["01-bem-vindo-atlasgr", "02-mercado-logistica", "03-gerenciamento-risco", "04-produtos-atlasgr", "05-software-logistico", "11-operacao"],
  },
];

export function getPracticeLab(slug: string): PracticeLab | undefined {
  return practiceLabs[slug];
}

export function getRoleTrack(cargo?: string, departamento?: string): RoleTrack {
  const haystack = `${cargo || ""} ${departamento || ""}`.toLocaleLowerCase("pt-BR");

  if (/comercial|vendas|sdr|bdr|executiv|account|marketing|relacionamento|customer/.test(haystack)) {
    return roleTracks.find((track) => track.id === "comercial")!;
  }
  if (/opera[cç][aã]o|monitor|central|risco|log[ií]stic|pronta resposta/.test(haystack)) {
    return roleTracks.find((track) => track.id === "operacao")!;
  }
  if (/tecnologia|ti\b|desenvol|produto|dados|analytics|integra[cç][aã]o|sistema/.test(haystack)) {
    return roleTracks.find((track) => track.id === "tecnologia")!;
  }
  if (/gest[aã]o|gestor|lider|l[ií]der|diretor|coordena|supervis|rh|people|diretoria/.test(haystack)) {
    return roleTracks.find((track) => track.id === "gestao")!;
  }

  return roleTracks.find((track) => track.id === "geral")!;
}
