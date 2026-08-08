import type { QuizQuestion } from "@/lib/types";

const quiz01: QuizQuestion[] = [
  {
    id: "q01-1",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Em que ano a Atlas Segurança e Inteligência Logística foi fundada?",
    options: [
      "1998",
      "2004",
      "2010",
      "2015",
    ],
    correctIndex: 1,
    explanation: "A empresa surgiu em 2004.",
    reference: "Módulo 1"
  },
  {
    id: "q01-2",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Qual o propósito declarado da empresa?",
    options: [
      "Ser a maior do Brasil",
      "Conectar pessoas e tecnologia gerando valor com segurança e inovação",
      "Reduzir o custo do frete",
      "Vender rastreadores",
    ],
    correctIndex: 1,
    explanation: "Esse é o propósito institucional.",
    reference: "Módulo 1"
  },
  {
    id: "q01-3",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Qual área da Diretoria é descrita como 'o coração da empresa'?",
    options: [
      "TI",
      "DHO",
      "Operações",
      "Comercial",
    ],
    correctIndex: 2,
    explanation: "Operações é onde o gerenciamento de risco acontece.",
    reference: "Módulo 1"
  },
  {
    id: "q01-4",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Qual das opções abaixo NÃO é um dos 5 valores da ATLASGR?",
    options: [
      "Transparência",
      "Atitude de Dono",
      "Competitividade",
      "Simplicidade",
    ],
    correctIndex: 2,
    explanation: "Os 5 valores são Perseverança, Transparência, Simplicidade, Atitude de Dono e Inovação.",
    reference: "Módulo 1"
  },
  {
    id: "q01-5",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Qual departamento é responsável por recrutar, treinar e reter talentos?",
    options: [
      "TI",
      "Comercial",
      "DHO",
      "Relações Institucionais",
    ],
    correctIndex: 2,
    explanation: "O DHO (Desenvolvimento Humano e Organizacional) cuida disso.",
    reference: "Módulo 1"
  },
  {
    id: "q01-6",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "O que a regra de tolerância zero diz sobre fotografar telas operacionais?",
    options: [
      "É permitido apenas para o WhatsApp da equipe",
      "É expressamente proibido e gera justa causa",
      "Pode, desde que borre a placa do caminhão",
      "Somente supervisores podem",
    ],
    correctIndex: 1,
    explanation: "Tolerância zero. Viola LGPD e compliance.",
    reference: "Módulo 1"
  },
  {
    id: "q01-7",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Para que serve a Universidade Corporativa da AtlasGR?",
    options: [
      "Para vender cursos ao público",
      "Apenas para líderes",
      "Para desenvolvimento contínuo e reciclagens regulares dos colaboradores",
      "É apenas um enfeite no onboarding",
    ],
    correctIndex: 2,
    explanation: "Foca no desenvolvimento contínuo dos colaboradores.",
    reference: "Módulo 1"
  },
  {
    id: "q01-8",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "Como o valor 'Atitude de Dono' é descrito na prática?",
    options: [
      "Mandar nos colegas",
      "Tratar o negócio e o cliente como se fossem seus",
      "Ignorar o protocolo do PGR sempre",
      "Chegar mais cedo no trabalho",
    ],
    correctIndex: 1,
    explanation: "Tratar o negócio como se fosse seu.",
    reference: "Módulo 1"
  },
  {
    id: "q01-9",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "O uso de IA generativa externa com dados da empresa é:",
    options: [
      "Proibido; deve-se usar o Assistente AtlasGR",
      "Recomendado para ganhar tempo",
      "Opcional",
      "Permitido apenas pelo gerente",
    ],
    correctIndex: 0,
    explanation: "Proibido usar IAs externas com dados da empresa.",
    reference: "Módulo 1"
  },
  {
    id: "q01-10",
    moduleSlug: "01-bem-vindo-atlasgr",
    question: "O que acontece aos 90 dias da jornada do colaborador?",
    options: [
      "Demissão automática",
      "Aumento salarial garantido",
      "Avaliação de performance e definição de PDI",
      "Treinamento avançado de TI",
    ],
    correctIndex: 2,
    explanation: "Avaliação e definição de Plano de Desenvolvimento Individual.",
    reference: "Módulo 1"
  },
];

const quiz02: QuizQuestion[] = [
  {
    id: "q02-1",
    moduleSlug: "02-mercado-logistica",
    question: "Quem é o 'Embarcador' na cadeia de suprimentos?",
    options: [
      "O dono da frota",
      "O motorista",
      "O dono da carga (fabricante/varejista)",
      "A seguradora",
    ],
    correctIndex: 2,
    explanation: "O embarcador é o dono da carga.",
    reference: "Módulo 2"
  },
  {
    id: "q02-2",
    moduleSlug: "02-mercado-logistica",
    question: "Quem é a 'Transportadora' na cadeia de suprimentos?",
    options: [
      "O dono da carga",
      "A seguradora",
      "A AtlasGR",
      "Quem executa o transporte (dono da frota)",
    ],
    correctIndex: 3,
    explanation: "A transportadora executa o frete.",
    reference: "Módulo 2"
  },
  {
    id: "q02-3",
    moduleSlug: "02-mercado-logistica",
    question: "O que um sistema TMS faz?",
    options: [
      "Emite notas fiscais",
      "Organiza fretes e rotas logísticas",
      "Rastreia caminhões via satélite apenas",
      "Calcula a folha de pagamento",
    ],
    correctIndex: 1,
    explanation: "TMS (Transport Management System) organiza o transporte e fretes.",
    reference: "Módulo 2"
  },
  {
    id: "q02-4",
    moduleSlug: "02-mercado-logistica",
    question: "Por que uma carga de eletrônicos possui regra de PGR diferente de uma carga de minério?",
    options: [
      "Porque eletrônico é mais leve",
      "Pela diferença na atratividade e risco de roubo",
      "Porque a lei de trânsito exige",
      "Porque o minério estraga rápido",
    ],
    correctIndex: 1,
    explanation: "O nível de risco muda pela atratividade para quadrilhas.",
    reference: "Módulo 2"
  },
  {
    id: "q02-5",
    moduleSlug: "02-mercado-logistica",
    question: "Qual a porcentagem aproximada do transporte rodoviário no Brasil?",
    options: [
      "30%",
      "45%",
      "65%",
      "90%",
    ],
    correctIndex: 2,
    explanation: "Cerca de 65% das cargas trafegam via rodovias.",
    reference: "Módulo 2"
  },
  {
    id: "q02-6",
    moduleSlug: "02-mercado-logistica",
    question: "O que o Atlas Connect usa para receber dados do TMS do cliente automaticamente?",
    options: [
      "Pen drives",
      "Ligações telefônicas",
      "E-mails diários",
      "APIs",
    ],
    correctIndex: 3,
    explanation: "APIs conectam os sistemas automaticamente.",
    reference: "Módulo 2"
  },
  {
    id: "q02-7",
    moduleSlug: "02-mercado-logistica",
    question: "Como são definidas as Áreas de Risco oficiais?",
    options: [
      "Por intuição do operador",
      "Por raios em km ao redor de metrópoles com histórico de roubo",
      "Pela cor do caminhão",
      "Apenas por pedidos do motorista",
    ],
    correctIndex: 1,
    explanation: "Raios matemáticos baseados em histórico criminal.",
    reference: "Módulo 2"
  },
  {
    id: "q02-8",
    moduleSlug: "02-mercado-logistica",
    question: "Qual é o foco principal de segurança numa carga perigosa (combustível)?",
    options: [
      "Evitar que a carga perca a validade",
      "Prevenir contaminação, explosão e acidentes (MOPP)",
      "Garantir o descarregamento rápido",
      "Evitar assaltos pequenos",
    ],
    correctIndex: 1,
    explanation: "Cargas perigosas têm alto risco de contaminação e explosão.",
    reference: "Módulo 2"
  },
  {
    id: "q02-9",
    moduleSlug: "02-mercado-logistica",
    question: "O que acontece, operacionalmente, quando um caminhão cruza o raio de uma Área de Risco?",
    options: [
      "Nada, é apenas um dado estatístico",
      "O motorista ganha folga",
      "O motor é desligado imediatamente",
      "Pode disparar regras do PGR como bloqueio de pernoite e alertas",
    ],
    correctIndex: 3,
    explanation: "Dispara protocolos automáticos como controle de pernoite e alertas no Connect.",
    reference: "Módulo 2"
  },
  {
    id: "q02-10",
    moduleSlug: "02-mercado-logistica",
    question: "Por que o mercado brasileiro depende tanto de Gerenciamento de Risco?",
    options: [
      "Porque o frete é barato",
      "Alta dependência de rodovias aliada à insegurança pública",
      "Porque a internet no Brasil é rápida",
      "Para agradar as montadoras",
    ],
    correctIndex: 1,
    explanation: "Pela alta dependência das rodovias (65%) combinada com índices de roubo.",
    reference: "Módulo 2"
  },
];

const quiz03: QuizQuestion[] = [
  {
    id: "q03-1",
    moduleSlug: "03-gerenciamento-risco",
    question: "Qual é a principal diferença entre Apólice e PGR?",
    options: [
      "Apólice é para roubo, PGR é para acidente",
      "Apólice é o contrato financeiro de seguro; PGR é o manual de regras operacionais de segurança",
      "PGR é emitido pelo Detran, Apólice pela Atlas",
      "São exatamente a mesma coisa",
    ],
    correctIndex: 1,
    explanation: "Apólice (Seguradora) = Contrato Financeiro; PGR (Atlas) = Manual de Regras Operacionais.",
    reference: "Módulo 3"
  },
  {
    id: "q03-2",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que configura um 'Roubo' em termos de sinistro?",
    options: [
      "Carga levada enquanto o motorista tomava café longe",
      "Subtração da carga mediante violência ou grave ameaça",
      "Dano físico à carga durante a viagem",
      "Atraso na entrega",
    ],
    correctIndex: 1,
    explanation: "Roubo exige violência ou grave ameaça.",
    reference: "Módulo 3"
  },
  {
    id: "q03-3",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que é 'Furto'?",
    options: [
      "Subtração sem violência, carga levada às escondidas",
      "Assalto a mão armada",
      "Tombamento do veículo",
      "Perda do sinal de satélite",
    ],
    correctIndex: 0,
    explanation: "Furto não envolve violência.",
    reference: "Módulo 3"
  },
  {
    id: "q03-4",
    moduleSlug: "03-gerenciamento-risco",
    question: "Qual é o termo para dano físico à carga (ex: tombamento)?",
    options: [
      "Roubo",
      "Furto",
      "Avaria",
      "Engenharia Social",
    ],
    correctIndex: 2,
    explanation: "Avaria é o termo técnico para danos físicos.",
    reference: "Módulo 3"
  },
  {
    id: "q03-5",
    moduleSlug: "03-gerenciamento-risco",
    question: "Qual é o principal foco do Gerenciamento de Risco (Atlas) em comparação ao Seguro?",
    options: [
      "Compensar financeiramente após o roubo",
      "Vender apólices mais caras",
      "Prevenção (evitar que a perda aconteça)",
      "Auditar notas fiscais do governo",
    ],
    correctIndex: 2,
    explanation: "O GR atua ativamente para prevenir a perda; o seguro paga depois.",
    reference: "Módulo 3"
  },
  {
    id: "q03-6",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que a Torre de Controle deve fazer ao desconfiar de um evento crítico (Nível 1)?",
    options: [
      "Esperar o motorista ligar",
      "Escalonar imediatamente para a CIA",
      "Desligar o sistema e reiniciar",
      "Enviar um e-mail para a seguradora",
    ],
    correctIndex: 1,
    explanation: "Eventos críticos e perdas de sinal graves devem ser passados à CIA.",
    reference: "Módulo 3"
  },
  {
    id: "q03-7",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que significa 'CIA' na estrutura da Atlas?",
    options: [
      "Central de Inteligência Artificial",
      "Centro de Integração e Armazenamento",
      "Companhia Independente de Automação",
      "Central de Inteligência Atlas",
    ],
    correctIndex: 3,
    explanation: "Central de Inteligência Atlas, a 'tropa de elite' para pronta resposta.",
    reference: "Módulo 3"
  },
  {
    id: "q03-8",
    moduleSlug: "03-gerenciamento-risco",
    question: "Por que não se deve reportar 'Roubo' nos relatórios sem confirmação?",
    options: [
      "Porque ofende o motorista",
      "Porque a Apólice pode não cobrir certos tipos de furto; exige-se rigor jurídico no uso do termo",
      "Para evitar que a polícia seja chamada",
      "Porque o sistema bloqueia a palavra",
    ],
    correctIndex: 1,
    explanation: "O uso da palavra errada pode impactar as coberturas jurídicas da apólice.",
    reference: "Módulo 3"
  },
  {
    id: "q03-9",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que a CIA faz que a Torre padrão não faz?",
    options: [
      "Anota placa",
      "Aciona polícia militar (190) e libera equipe tática de Pronta Resposta armada",
      "Digita CPF",
      "Liga para o cliente avisar do atraso",
    ],
    correctIndex: 1,
    explanation: "A CIA atua em recuperação e relacionamento policial.",
    reference: "Módulo 3"
  },
  {
    id: "q03-10",
    moduleSlug: "03-gerenciamento-risco",
    question: "O que é um Sinistro?",
    options: [
      "Uma viagem concluída",
      "O pagamento do frete",
      "O motorista de folga",
      "A materialização do risco (quando a perda/acidente efetivamente acontece)",
    ],
    correctIndex: 3,
    explanation: "É a ocorrência real do evento temido (roubo, avaria).",
    reference: "Módulo 3"
  },
];

const quiz04: QuizQuestion[] = [
  {
    id: "q04-1",
    moduleSlug: "04-produtos-atlasgr",
    question: "Quais são os quatro pilares do portfólio da ATLASGR?",
    options: [
      "Vendas, TI, DHO, Operações",
      "Profile, Connect, GR, Analytics",
      "TMS, ERP, WMS, CRM",
      "Caminhão, Motorista, Carga, Estrada",
    ],
    correctIndex: 1,
    explanation: "Os pilares são Profile, Connect, GR e Analytics.",
    reference: "Módulo 4"
  },
  {
    id: "q04-2",
    moduleSlug: "04-produtos-atlasgr",
    question: "O que o Atlas Profile resolve antes da viagem?",
    options: [
      "Define a rota no GPS",
      "Valida documentação, antecedentes e biometria do motorista e veículo",
      "Calcula o frete",
      "Aciona a pronta resposta",
    ],
    correctIndex: 1,
    explanation: "Valida quem vai transportar, bloqueando perfis de risco.",
    reference: "Módulo 4"
  },
  {
    id: "q04-3",
    moduleSlug: "04-produtos-atlasgr",
    question: "O que o Atlas Connect fornece à operação?",
    options: [
      "Punição para motoristas",
      "Apólice de seguros",
      "Visão em tempo real da viagem e gestão de alertas na Torre de Controle",
      "Contratação de frete",
    ],
    correctIndex: 2,
    explanation: "É o sistema operacional tático em tempo real.",
    reference: "Módulo 4"
  },
  {
    id: "q04-4",
    moduleSlug: "04-produtos-atlasgr",
    question: "O Atlas GR garante a aderência a qual documento?",
    options: [
      "Nota Fiscal (NF-e)",
      "Carteira de Trabalho",
      "Plano de Gerenciamento de Risco (PGR)",
      "Contrato Social da Empresa",
    ],
    correctIndex: 2,
    explanation: "Garante a execução das regras do PGR estipuladas pela apólice.",
    reference: "Módulo 4"
  },
  {
    id: "q04-5",
    moduleSlug: "04-produtos-atlasgr",
    question: "Qual a principal diferença entre Connect e Analytics?",
    options: [
      "Nenhuma",
      "Connect é o passado; Analytics é o futuro",
      "Connect é operacional/tempo real; Analytics é executivo/consolidação de dados históricos",
      "Connect é do motorista; Analytics é do corretor",
    ],
    correctIndex: 2,
    explanation: "Connect é para a operação diária; Analytics consolida KPIs para gestão.",
    reference: "Módulo 4"
  },
  {
    id: "q04-6",
    moduleSlug: "04-produtos-atlasgr",
    question: "No Case de 26% de economia (Embarcador de Suco), qual pilar foi fundamental para provar a ineficiência logística?",
    options: [
      "Atlas Profile",
      "Atlas Analytics",
      "Atlas GR",
      "Apenas o TMS do cliente",
    ],
    correctIndex: 1,
    explanation: "O Analytics provou, via dados históricos consolidados, as demoras em fazendas.",
    reference: "Módulo 4"
  },
  {
    id: "q04-7",
    moduleSlug: "04-produtos-atlasgr",
    question: "Em qual pilar a CIA (Central de Inteligência Atlas) atua diretamente?",
    options: [
      "Atlas Profile",
      "Atlas Analytics",
      "Atlas GR",
      "TMS",
    ],
    correctIndex: 2,
    explanation: "A CIA atua dentro do pilar do GR (intervenção na crise/quebra de PGR).",
    reference: "Módulo 4"
  },
  {
    id: "q04-8",
    moduleSlug: "04-produtos-atlasgr",
    question: "O que é o 'Custo Invisível' que o Atlas Profile tenta mitigar?",
    options: [
      "O pedágio",
      "A contratação de fraudadores que gerará um sinistro futuro grave",
      "O custo da internet na Central",
      "O pneu furado",
    ],
    correctIndex: 1,
    explanation: "Barrar a entrada de motoristas com histórico criminoso.",
    reference: "Módulo 4"
  },
  {
    id: "q04-9",
    moduleSlug: "04-produtos-atlasgr",
    question: "Para que serve a Biometria (FaceID) no Atlas Profile?",
    options: [
      "Para bater ponto",
      "Para garantir que a pessoa na portaria é realmente a do documento, prevenindo falsidade ideológica",
      "Para o motorista sorrir",
      "Para enviar ao Detran",
    ],
    correctIndex: 1,
    explanation: "Previne falsidade ideológica (golpista usando CNH roubada).",
    reference: "Módulo 4"
  },
  {
    id: "q04-10",
    moduleSlug: "04-produtos-atlasgr",
    question: "Por que a união dos 4 pilares é chamada de transformação do reativo para preventivo?",
    options: [
      "Porque é um slogan de marketing",
      "Porque agimos antes do motorista assumir a carga (Profile), acompanhamos ao vivo (Connect) e ajustamos a estratégia com dados (Analytics)",
      "Porque barateia o seguro",
      "Porque o cliente não precisa mais de seguro",
    ],
    correctIndex: 1,
    explanation: "Porque o ciclo cobre desde antes da viagem até o aprendizado após a viagem.",
    reference: "Módulo 4"
  },
];

const quiz05: QuizQuestion[] = [
  {
    id: "q05-1",
    moduleSlug: "05-software-logistico",
    question: "Como o Atlas Connect divide a sua tela principal (cockpit)?",
    options: [
      "Google Maps e YouTube",
      "Grade (status geral/passivo) e Fila de Alertas (problemas/ativo)",
      "Apenas em listas de motoristas",
      "Tela de Faturamento e Tela de Ponto",
    ],
    correctIndex: 1,
    explanation: "O Connect foca em gerir Exceções (Alertas) além de mostrar a Grade.",
    reference: "Módulo 5"
  },
  {
    id: "q05-2",
    moduleSlug: "05-software-logistico",
    question: "O que é uma SM?",
    options: [
      "Sistema Motorizado",
      "Serviço Mensal",
      "Sociedade de Motoristas",
      "Solicitação de Monitoramento (A Viagem em si)",
    ],
    correctIndex: 3,
    explanation: "SM é a sigla para a viagem monitorada no sistema.",
    reference: "Módulo 5"
  },
  {
    id: "q05-3",
    moduleSlug: "05-software-logistico",
    question: "Na Fila de Alertas, como o sistema organiza os eventos que piscam?",
    options: [
      "Por ordem alfabética",
      "Por quem chegou primeiro",
      "O motorista escolhe o alerta",
      "Por prioridade de risco (Níveis de 1 a 7) baseada no PGR",
    ],
    correctIndex: 3,
    explanation: "O motor de regras ordena a fila para que o risco maior fique no topo.",
    reference: "Módulo 5"
  },
  {
    id: "q05-4",
    moduleSlug: "05-software-logistico",
    question: "Um Alerta Nível 1 representa o quê?",
    options: [
      "Atraso de meia hora na entrega",
      "Nível Crítico (ex: Botão de Pânico ou Perda Grave)",
      "Bateria do rastreador caindo para 50%",
      "O motorista esqueceu o nome do cliente",
    ],
    correctIndex: 1,
    explanation: "Nível 1 é sempre Crítico e exige ação imediata.",
    reference: "Módulo 5"
  },
  {
    id: "q05-5",
    moduleSlug: "05-software-logistico",
    question: "O que é o maior erro de um operador ao olhar a fila de alertas?",
    options: [
      "Atender o Nível 1 rapidamente",
      "Tratar um alerta Nível 4 antes de um Nível 1 apenas porque é 'mais fácil'",
      "Ler o nome da transportadora",
      "Fazer pausa para café no intervalo",
    ],
    correctIndex: 1,
    explanation: "Nunca se subverte a priorização (Nível 1 antes de Nível 4).",
    reference: "Módulo 5"
  },
  {
    id: "q05-6",
    moduleSlug: "05-software-logistico",
    question: "Como a maioria das viagens (SMs) de grandes clientes deve ser criada idealmente?",
    options: [
      "Pelo motorista via WhatsApp",
      "Digitando tudo a mão uma a uma",
      "Injetada automaticamente via integração de API pelo sistema do cliente",
      "Apenas por telefone",
    ],
    correctIndex: 2,
    explanation: "APIs criam as viagens automaticamente evitando erro humano e lentidão.",
    reference: "Módulo 5"
  },
  {
    id: "q05-7",
    moduleSlug: "05-software-logistico",
    question: "Qual destes passos faz parte da criação de um SM (Nascimento de uma Viagem)?",
    options: [
      "Validar CNH no Serasa",
      "Testar (pingar) o rastreador físico para confirmar comunicação",
      "Pagar o pedágio na cancela",
      "Comprar o pneu",
    ],
    correctIndex: 1,
    explanation: "Sempre se testa a comunicação do hardware antes de iniciar a viagem.",
    reference: "Módulo 5"
  },
  {
    id: "q05-8",
    moduleSlug: "05-software-logistico",
    question: "A Grade de Viagens é usada de forma Ativa ou Passiva pelo operador de risco?",
    options: [
      "Ativa, ele clica lá para gerar alertas falsos",
      "Passiva, serve para consulta de status geral de bateria/ETA",
      "Não é usada",
      "Apenas pelo cliente",
    ],
    correctIndex: 1,
    explanation: "O operador ATUA na Fila de Alertas e CONSULTA a Grade.",
    reference: "Módulo 5"
  },
  {
    id: "q05-9",
    moduleSlug: "05-software-logistico",
    question: "O Atlas Connect foi desenhado para que os operadores não precisem...",
    options: [
      "Falar com motoristas",
      "Trabalhar à noite",
      "Ficar 'procurando problemas caçando pontinhos no mapa'",
      "Saber usar computador",
    ],
    correctIndex: 2,
    explanation: "O sistema aponta os problemas (alertas). O operador resolve os problemas.",
    reference: "Módulo 5"
  },
  {
    id: "q05-10",
    moduleSlug: "05-software-logistico",
    question: "O que um Alerta Nível 7 (Baixo) geralmente indica?",
    options: [
      "Tiroteio",
      "Informações logísticas ou avisos secundários (ex: Bateria de isca baixa)",
      "Desvio de Rota em área de Risco 200km",
      "Botão de coação",
    ],
    correctIndex: 1,
    explanation: "Níveis baixos são logísticos e de menor impacto de risco.",
    reference: "Módulo 5"
  },
];

const quiz06: QuizQuestion[] = [
  {
    id: "q06-1",
    moduleSlug: "06-atlas-profile",
    question: "Qual golpe clássico o Atlas Profile barra usando o FaceID?",
    options: [
      "Roubo com arma de fogo",
      "Falsidade Ideológica (uso de documentos falsos/roubados de motoristas limpos)",
      "Clonagem de cartão",
      "Furo de pneu",
    ],
    correctIndex: 1,
    explanation: "A prova de vida biométrica impede a fraude documental.",
    reference: "Módulo 6"
  },
  {
    id: "q06-2",
    moduleSlug: "06-atlas-profile",
    question: "Qual status o Profile NUNCA deve entregar a um cliente sobre o motorista?",
    options: [
      "Aprovado",
      "Requer Atenção",
      "Não Recomendado",
      "Detalhes criminais abertos (ex: 'Cumpriu pena por assalto')",
    ],
    correctIndex: 3,
    explanation: "Viola a LGPD entregar o histórico detalhado; damos apenas o 'Status' (Não Recomendado).",
    reference: "Módulo 6"
  },
  {
    id: "q06-3",
    moduleSlug: "06-atlas-profile",
    question: "Além do histórico criminal, o que mais o Atlas Profile pesquisa?",
    options: [
      "O saldo bancário",
      "O status da CNH, multas impeditivas do veículo e documentação no Detran",
      "As notas da escola",
      "Se o motorista tem filhos",
    ],
    correctIndex: 1,
    explanation: "A análise foca em documentação veicular e habilitação também.",
    reference: "Módulo 6"
  },
  {
    id: "q06-4",
    moduleSlug: "06-atlas-profile",
    question: "O que significa tratar 'Dados Sensíveis' no contexto da LGPD?",
    options: [
      "Que os servidores quebram fácil",
      "Que dados como biometria e crimes precisam ser protegidos e mascarados/apagados rigorosamente",
      "Que os dados não podem ser usados por IA",
      "Que a Atlas precisa pagar o governo",
    ],
    correctIndex: 1,
    explanation: "Dados sensíveis têm regras draconianas de proteção na LGPD.",
    reference: "Módulo 6"
  },
  {
    id: "q06-5",
    moduleSlug: "06-atlas-profile",
    question: "Como o Atlas Profile descobre o histórico em segundos sem uso de humanos digitando?",
    options: [
      "Ele adivinha",
      "Conexão direta com bases governamentais e tribunais via API",
      "Um robô liga no fórum",
      "Usa inteligência emocional",
    ],
    correctIndex: 1,
    explanation: "A velocidade vem das integrações via API com bases públicas e privadas.",
    reference: "Módulo 6"
  },
  {
    id: "q06-6",
    moduleSlug: "06-atlas-profile",
    question: "Se o cliente quiser ver a foto da tela do sistema com a ficha criminal do motorista, você deve:",
    options: [
      "Mandar por WhatsApp rapidamente",
      "Recusar e explicar que o procedimento e a LGPD proíbem terminantemente",
      "Mandar só metade da tela",
      "Pedir autorização ao DHO",
    ],
    correctIndex: 1,
    explanation: "A regra de LGPD e Compliance da Atlas proíbe o envio de prints.",
    reference: "Módulo 6"
  },
  {
    id: "q06-7",
    moduleSlug: "06-atlas-profile",
    question: "Qual a importância do 'Termo de Consentimento' (aceite) enviado ao motorista?",
    options: [
      "Nenhuma",
      "É uma exigência da LGPD; sem consentimento, não podemos consultar seus dados",
      "É apenas para marketing",
      "Para cobrar o frete",
    ],
    correctIndex: 1,
    explanation: "O tratamento de dados precisa do consentimento do titular (LGPD).",
    reference: "Módulo 6"
  },
  {
    id: "q06-8",
    moduleSlug: "06-atlas-profile",
    question: "O status 'Requer Atenção' pode significar o quê?",
    options: [
      "Que o caminhão está pegando fogo",
      "Que há uma pendência documental tratável (ex: CNH vence amanhã, veículo com licenciamento pendente de sistema)",
      "Que o motorista é um assassino procurado",
      "Que a Atlas falhou",
    ],
    correctIndex: 1,
    explanation: "É um meio termo que exige ação antes da liberação.",
    reference: "Módulo 6"
  },
  {
    id: "q06-9",
    moduleSlug: "06-atlas-profile",
    question: "Se um motorista recusa fazer a selfie (FaceID), o que ocorre?",
    options: [
      "Ele viaja normal",
      "O sistema pode bloquear o início da viagem por falha na validação de identidade (depende do PGR)",
      "A Atlas paga a ele",
      "O rastreador desliga",
    ],
    correctIndex: 1,
    explanation: "A quebra de validação impede a aprovação e, consequentemente, a viagem.",
    reference: "Módulo 6"
  },
  {
    id: "q06-10",
    moduleSlug: "06-atlas-profile",
    question: "Onde o Atlas Profile entra na Linha do Tempo da viagem?",
    options: [
      "No momento do roubo",
      "Durante o descarregamento",
      "No final do mês",
      "Antes do caminhão ser ligado (Aprovação pré-viagem)",
    ],
    correctIndex: 3,
    explanation: "O Profile é a defesa primária de portaria (Background Check).",
    reference: "Módulo 6"
  },
];

const quiz07: QuizQuestion[] = [
  {
    id: "q07-1",
    moduleSlug: "07-integracoes",
    question: "Na analogia do módulo, a API atua como um:",
    options: [
      "Segurança",
      "Cozinheiro",
      "Garçom, levando e trazendo dados entre sistemas",
      "Motorista",
    ],
    correctIndex: 2,
    explanation: "A API serve como mensageira entre o cliente e o banco de dados Atlas.",
    reference: "Módulo 7"
  },
  {
    id: "q07-2",
    moduleSlug: "07-integracoes",
    question: "Para a AtlasGR, por que integrar rastreadores físicos é um desafio superado?",
    options: [
      "Porque não existem rastreadores no Brasil",
      "Porque o Connect atua como um Tradutor Universal que converte os sinais de centenas de marcas de hardware para uma tela padronizada",
      "Porque a Atlas fabrica todos eles",
      "Porque o motorista avisa por SMS",
    ],
    correctIndex: 1,
    explanation: "Nós decodificamos as várias marcas do mercado (Sascar, Omnilink, etc).",
    reference: "Módulo 7"
  },
  {
    id: "q07-3",
    moduleSlug: "07-integracoes",
    question: "O que significa 'digitação dupla' ou retrabalho?",
    options: [
      "Digitar usando duas mãos",
      "O operador logístico ter que criar a NF no ERP e depois ir no Connect redigitar tudo para gerar a viagem manualmente",
      "A senha do sistema ter duas etapas",
      "Tirar foto da tela",
    ],
    correctIndex: 1,
    explanation: "A ausência de integração (API) obriga o redigitar humano.",
    reference: "Módulo 7"
  },
  {
    id: "q07-4",
    moduleSlug: "07-integracoes",
    question: "Como a integração beneficia a Torre de Controle da Atlas?",
    options: [
      "Deixa a tela mais bonita",
      "Permite que o operador envie comandos (ex: bloqueio de combustível) direto do Connect, sem logar no software do rastreador (Sascar/Omnilink)",
      "Faz o operador dormir",
      "Gera lucro direto para a TI",
    ],
    correctIndex: 1,
    explanation: "Comandos remotos bidirecionais economizam tempo vital (SLA).",
    reference: "Módulo 7"
  },
  {
    id: "q07-5",
    moduleSlug: "07-integracoes",
    question: "Se um cliente muda a rota no TMS dele, e há integração via API, o que ocorre?",
    options: [
      "A Atlas Connect não fica sabendo",
      "A viagem no Connect atualiza a rota automaticamente em milissegundos",
      "O sistema Connect trava",
      "O motorista precisa ligar para a Torre",
    ],
    correctIndex: 1,
    explanation: "A API garante a atualização sincronizada (espelhamento).",
    reference: "Módulo 7"
  },
  {
    id: "q07-6",
    moduleSlug: "07-integracoes",
    question: "O que a Atlas Connect envia DE VOLTA para o ERP do cliente?",
    options: [
      "Comprovantes de pedágio",
      "Músicas",
      "Eventos logísticos automatizados (Ex: Chegou no Alvo, ETA atualizado)",
      "Fotos do motorista",
    ],
    correctIndex: 2,
    explanation: "Enviamos posição, ETA e eventos logísticos automáticos.",
    reference: "Módulo 7"
  },
  {
    id: "q07-7",
    moduleSlug: "07-integracoes",
    question: "Por que as integrações são um forte argumento de vendas (comercial)?",
    options: [
      "Porque o nome API soa chique",
      "Porque dão menos trabalho para a TI",
      "Porque reduzem drasticamente o custo operacional e os erros humanos no cliente",
      "Para vender hardware caro",
    ],
    correctIndex: 2,
    explanation: "Menos digitação = Menos erro = Menos custo no backoffice do cliente.",
    reference: "Módulo 7"
  },
  {
    id: "q07-8",
    moduleSlug: "07-integracoes",
    question: "Qual a função do 'Tradutor Universal' no ecossistema AtlasGR?",
    options: [
      "Traduzir o sistema para inglês",
      "Decodificar as linguagens de Autotrac, OnixSat, Sascar etc., unificando-as no Connect",
      "Falar com o motorista",
      "Traduzir a LGPD",
    ],
    correctIndex: 1,
    explanation: "É o hub de decodificação de hardwares de terceiros.",
    reference: "Módulo 7"
  },
  {
    id: "q07-9",
    moduleSlug: "07-integracoes",
    question: "No cenário integrado, como nasce uma SM (Solicitação de Monitoramento)?",
    options: [
      "Automaticamente quando o cliente emite o faturamento da nota fiscal no ERP dele",
      "O motorista liga e pede",
      "A seguradora entra no sistema e cria",
      "O operador desenha no mapa",
    ],
    correctIndex: 0,
    explanation: "Integração plena permite a criação do SM (viagem) no ato do faturamento.",
    reference: "Módulo 7"
  },
  {
    id: "q07-10",
    moduleSlug: "07-integracoes",
    question: "Quais as duas pontas principais que a API conecta?",
    options: [
      "A Torre e o Motorista",
      "O Caminhão e o Posto",
      "Os Sistemas de Gestão do Cliente (TMS/ERP) e a Plataforma Atlas Connect",
      "A Seguradora e o Banco",
    ],
    correctIndex: 2,
    explanation: "API interliga os sistemas digitais (Cliente <-> Atlas).",
    reference: "Módulo 7"
  },
];

const quiz08: QuizQuestion[] = [
  {
    id: "q08-1",
    moduleSlug: "08-clientes",
    question: "Qual é a dor principal da Transportadora?",
    options: [
      "Criar relatórios bonitos",
      "Não cumprir o PGR, perder a cobertura do seguro e arcar com o prejuízo do roubo do próprio bolso",
      "Demorar a chegar no destino apenas",
      "Pagar pedágio",
    ],
    correctIndex: 1,
    explanation: "A transportadora precisa da proteção do GR para garantir o pagamento da apólice.",
    reference: "Módulo 8"
  },
  {
    id: "q08-2",
    moduleSlug: "08-clientes",
    question: "Qual é a preocupação principal do Embarcador (Dono da Carga)?",
    options: [
      "Gastar gasolina",
      "Visibilidade total (pois a frota não é dele) e o custo oculto de atrasos e retenções em docas",
      "Trocar o pneu do caminhão",
      "Multas de velocidade da PM",
    ],
    correctIndex: 1,
    explanation: "O embarcador foca na governança da carga terceirizada e na eficiência (SLA).",
    reference: "Módulo 8"
  },
  {
    id: "q08-3",
    moduleSlug: "08-clientes",
    question: "O Operador Logístico foca em qual ferramenta da Atlas?",
    options: [
      "Não usa a Atlas",
      "Apenas no Profile",
      "Nas duas frentes: Connect (Operacional) e Analytics (Executiva/SLA)",
      "Nenhuma das anteriores",
    ],
    correctIndex: 2,
    explanation: "Eles precisam gerir dezenas de terceiros em tempo real e consolidar os dados.",
    reference: "Módulo 8"
  },
  {
    id: "q08-4",
    moduleSlug: "08-clientes",
    question: "Qual argumento usar com um Embarcador sobre o Atlas Analytics?",
    options: [
      "Sua transportadora não vai tomar multa de trânsito",
      "Podemos mostrar por que seus motoristas passam 26% do tempo parados na fazenda/fábrica (Eficiência)",
      "O rastreador é de graça",
      "Sua apólice ficará sem efeito",
    ],
    correctIndex: 1,
    explanation: "Embarcadores adoram dados que mostram o 'custo oculto' e geram eficiência.",
    reference: "Módulo 8"
  },
  {
    id: "q08-5",
    moduleSlug: "08-clientes",
    question: "Por que as abordagens comerciais diferem entre Transportadora e Embarcador?",
    options: [
      "Não diferem",
      "Porque o Embarcador não entende de caminhão",
      "Porque as dores financeiras são diferentes: um quer proteção contra a seguradora, outro quer gestão de SLA logístico",
      "Porque um paga em dólar, o outro em real",
    ],
    correctIndex: 2,
    explanation: "As motivações de compra são diferentes (Proteção vs Governança).",
    reference: "Módulo 8"
  },
  {
    id: "q08-6",
    moduleSlug: "08-clientes",
    question: "No case de R$ 95 milhões economizados, qual era o tipo de cliente e a dor?",
    options: [
      "Embarcador de Combustível sofrendo roubos milionários diretos",
      "Transportadora quebrando caminhões",
      "Produtor de suco com filas",
      "Operador de celulares perdendo antenas",
    ],
    correctIndex: 0,
    explanation: "Combustível = Roubo Direto = Atuação do Atlas GR/Connect.",
    reference: "Módulo 8"
  },
  {
    id: "q08-7",
    moduleSlug: "08-clientes",
    question: "Quem geralmente determina as regras pesadas do PGR em um contrato grande?",
    options: [
      "O dono do posto",
      "A Seguradora aliada ao Embarcador de alto valor",
      "O motorista do caminhão",
      "O sindicato",
    ],
    correctIndex: 1,
    explanation: "Quem detém o poder sobre a carga (Embarcador e sua Seguradora) dita as regras.",
    reference: "Módulo 8"
  },
  {
    id: "q08-8",
    moduleSlug: "08-clientes",
    question: "Para uma Transportadora que diz 'meu motorista reclama do rastreador', o que a Atlas defende?",
    options: [
      "Desligar o rastreador",
      "O Connect não rastreia apenas, ele salva a vida do motorista em caso de coação (CIA) e protege o CNPJ da transportadora",
      "Mandar o motorista embora",
      "Deixar ele viajar sem seguro",
    ],
    correctIndex: 1,
    explanation: "A defesa foca na segurança da vida (Pânico/Coação) e do negócio.",
    reference: "Módulo 8"
  },
  {
    id: "q08-9",
    moduleSlug: "08-clientes",
    question: "Quem seria o 'consumidor final' do serviço Atlas Analytics em uma Transportadora grande?",
    options: [
      "O auxiliar administrativo",
      "O Operador da Torre da Atlas",
      "O Diretor/CEO buscando reduzir o custo de apólice mostrando baixa sinistralidade",
      "O porteiro da frota",
    ],
    correctIndex: 2,
    explanation: "Diretores usam os dados consolidados do Analytics para fechar negócios e renovar seguros.",
    reference: "Módulo 8"
  },
  {
    id: "q08-10",
    moduleSlug: "08-clientes",
    question: "O mesmo caminhão pode sofrer auditoria do Connect para duas empresas diferentes?",
    options: [
      "Não",
      "Nunca, o sistema trava",
      "Sim, pode cumprir a regra da transportadora e do embarcador ao mesmo tempo (Sobreposição de Regras)",
      "Apenas se for internacional",
    ],
    correctIndex: 2,
    explanation: "A torre valida as regras tanto do embarcador quanto da transportadora no mesmo veículo.",
    reference: "Módulo 8"
  },
];

const quiz09: QuizQuestion[] = [
  {
    id: "q09-1",
    moduleSlug: "09-processo-comercial",
    question: "O que é o ICP?",
    options: [
      "Índice de Carga Pesada",
      "Ideal Customer Profile (Perfil de Cliente Ideal)",
      "Investigação Criminal Policial",
      "Imposto de Cargas Perigosas",
    ],
    correctIndex: 1,
    explanation: "ICP define o alvo das vendas da empresa.",
    reference: "Módulo 9"
  },
  {
    id: "q09-2",
    moduleSlug: "09-processo-comercial",
    question: "Por que a objeção 'Já tenho rastreador' não impede a venda da AtlasGR?",
    options: [
      "Porque rastreador é de graça",
      "Porque a Atlas vende o PROCESSO de monitoramento com humanos e regras, não a caixa de plástico (rastreador)",
      "Porque vendemos caminhões",
      "Porque obrigamos a comprar",
    ],
    correctIndex: 1,
    explanation: "Rastreadores não ligam para o 190. A inteligência operacional é o diferencial.",
    reference: "Módulo 9"
  },
  {
    id: "q09-3",
    moduleSlug: "09-processo-comercial",
    question: "Qual destes é um Gatilho Clássico de compra?",
    options: [
      "Vontade de gastar dinheiro",
      "Sofrer um roubo recente ou a seguradora exigir PGR sob ameaça de não renovar a apólice",
      "Querer um mapa mais bonito",
      "Comprar um computador novo",
    ],
    correctIndex: 1,
    explanation: "Gatilhos nascem da dor aguda (roubo) ou obrigação (apólice).",
    reference: "Módulo 9"
  },
  {
    id: "q09-4",
    moduleSlug: "09-processo-comercial",
    question: "O que significa 'Todo mundo representa a marca'?",
    options: [
      "Que todos devem vender o produto",
      "Que um erro operacional da Torre (ex: tratar mal o cliente) derruba a renovação de contrato, estragando o esforço do Comercial",
      "Que todos ganham comissão",
      "Que todos usam camisa da empresa",
    ],
    correctIndex: 1,
    explanation: "O Atendimento Operacional é a retenção do cliente.",
    reference: "Módulo 9"
  },
  {
    id: "q09-5",
    moduleSlug: "09-processo-comercial",
    question: "O que é o CRM na jornada comercial?",
    options: [
      "O Controle de Relacionamento de Mercado",
      "O sistema (ex: Hubspot/Bitrix) onde se organiza o Funil de Vendas desde a ligação fria até o fechamento",
      "Um tipo de rastreador",
      "O botão de pânico",
    ],
    correctIndex: 1,
    explanation: "CRM é o software de gestão do relacionamento com os clientes.",
    reference: "Módulo 9"
  },
  {
    id: "q09-6",
    moduleSlug: "09-processo-comercial",
    question: "A 'Demonstração' (Demo) é a fase onde o Vendedor (Closer) faz o quê?",
    options: [
      "Liga frio para achar o cliente",
      "Apresenta tecnicamente o Atlas Connect ao vivo e defende o valor do produto",
      "Assina os papéis fiscais",
      "Instala o rastreador no caminhão",
    ],
    correctIndex: 1,
    explanation: "Na Demo, o valor do sistema é tangibilizado (mostrando na tela).",
    reference: "Módulo 9"
  },
  {
    id: "q09-7",
    moduleSlug: "09-processo-comercial",
    question: "Se o cliente acha o serviço da Atlas caro, qual o contra-argumento de valor ensinado?",
    options: [
      "Dar desconto imediato de 50%",
      "Lembrar quanto custou a ele o último sinistro de carga roubada ou atraso grave (O Barato Sai Caro)",
      "Dizer que a concorrência é pior",
      "Ignorar o cliente",
    ],
    correctIndex: 1,
    explanation: "O valor foca em ancorar o preço da Atlas na prevenção de perdas gigantescas.",
    reference: "Módulo 9"
  },
  {
    id: "q09-8",
    moduleSlug: "09-processo-comercial",
    question: "Qual a tríade do Diferencial Matador da AtlasGR?",
    options: [
      "Preço, Prazo e Software",
      "Processo (PGR) + Pessoas especializadas (CIA/Torre) + Tecnologia (Connect)",
      "Rastreador, Antena e Satélite",
      "Motorista, Pneu e Carga",
    ],
    correctIndex: 1,
    explanation: "Processo + Pessoas + Tecnologia formam o fosso competitivo.",
    reference: "Módulo 9"
  },
  {
    id: "q09-9",
    moduleSlug: "09-processo-comercial",
    question: "No Funil B2B, quem geralmente faz a Prospecção e Primeira Ligação?",
    options: [
      "O CEO",
      "O Closer",
      "O SDR (Sales Development Representative)",
      "O Operador da Torre",
    ],
    correctIndex: 2,
    explanation: "O SDR prospecta e qualifica; o Closer demonstra e fecha o negócio.",
    reference: "Módulo 9"
  },
  {
    id: "q09-10",
    moduleSlug: "09-processo-comercial",
    question: "Empresas com 2 caminhões rodando carga de baixo valor sem exigência de apólice estão...",
    options: [
      "Dentro do ICP",
      "Fora do ICP (Não devemos focar energia do time de vendas nelas)",
      "No topo do Funil",
      "Prontas para o Analytics",
    ],
    correctIndex: 1,
    explanation: "Elas não extrairão o valor do serviço pesado de GR.",
    reference: "Módulo 9"
  },
];

const quiz10: QuizQuestion[] = [
  {
    id: "q10-1",
    moduleSlug: "10-termos-tecnicos",
    question: "O que é uma Isca (Rastreador Móvel)?",
    options: [
      "Um tipo de peixe",
      "Um rastreador gigante fixado no teto",
      "Um dispositivo pequeno e autônomo, geralmente camuflado dentro das caixas da carga, imperceptível aos bandidos",
      "O software do celular",
    ],
    correctIndex: 2,
    explanation: "As iscas garantem rastreabilidade caso o rastreador principal seja arrancado do painel.",
    reference: "Módulo 10"
  },
  {
    id: "q10-2",
    moduleSlug: "10-termos-tecnicos",
    question: "O que é um Jammer?",
    options: [
      "Uma marca de caminhão",
      "Equipamento eletrônico (Chupa-Cabra) usado por quadrilhas para bloquear/derrubar o sinal de satélite e celular do caminhão",
      "Um botão de segurança",
      "Uma música de alarme",
    ],
    correctIndex: 1,
    explanation: "O Jammer é a principal arma eletrônica das quadrilhas de roubo.",
    reference: "Módulo 10"
  },
  {
    id: "q10-3",
    moduleSlug: "10-termos-tecnicos",
    question: "O que difere Jammer de 'Área de Sombra'?",
    options: [
      "O nome",
      "Jammer é roubo/ataque tecnológico; Sombra é quando o caminhão entra numa serra/túnel sem sinal de torre de celular. Confundi-los gera caos na Torre.",
      "Ambos são nomes para furto",
      "Sombra afeta a isca, jammer não",
    ],
    correctIndex: 1,
    explanation: "Anotar falsamente uso de Jammer dispara protocolos de roubo indevidamente.",
    reference: "Módulo 10"
  },
  {
    id: "q10-4",
    moduleSlug: "10-termos-tecnicos",
    question: "Qual a diferença de CT-e para NF-e?",
    options: [
      "Não tem",
      "CT-e é o documento do Produto; NF-e é o do Frete",
      "CT-e (Frete/Transporte) vs NF-e (Produto/Valor da Carga em si)",
      "Ambos são do motorista",
    ],
    correctIndex: 2,
    explanation: "A seguradora olha para o valor da NF-e para saber a exposição de risco da carga.",
    reference: "Módulo 10"
  },
  {
    id: "q10-5",
    moduleSlug: "10-termos-tecnicos",
    question: "O que é VSR?",
    options: [
      "Viagem Sem Retorno",
      "Veículo Sem Rastreador (Caminhão que depende 100% do celular ou iscas para ser monitorado)",
      "Valor Sob Risco",
      "Via Segura Rápida",
    ],
    correctIndex: 1,
    explanation: "VSR são veículos que não possuem hardware fixo de telemetria.",
    reference: "Módulo 10"
  },
  {
    id: "q10-6",
    moduleSlug: "10-termos-tecnicos",
    question: "No contexto da logística, o que é ETA?",
    options: [
      "Empresa de Transporte Aéreo",
      "Estimated Time of Arrival (Tempo Estimado de Chegada calculado pela IA do sistema)",
      "Um erro de tela",
      "Estado de Transporte Agudo",
    ],
    correctIndex: 1,
    explanation: "ETA é crucial para Embarcadores organizarem suas docas.",
    reference: "Módulo 10"
  },
  {
    id: "q10-7",
    moduleSlug: "10-termos-tecnicos",
    question: "O que é SLA?",
    options: [
      "Sem Lucro Algum",
      "Service Level Agreement (Acordo de Nível de Serviço) - Os limites de tempo (ex: 10 min) para a AtlasGR realizar uma tratativa",
      "Sistema de Localização Avançada",
      "Um tipo de apólice",
    ],
    correctIndex: 1,
    explanation: "O SLA é o que separa um serviço de excelência de uma quebra de contrato.",
    reference: "Módulo 10"
  },
  {
    id: "q10-8",
    moduleSlug: "10-termos-tecnicos",
    question: "Qual documento define o VALOR total da mercadoria sendo roubada?",
    options: [
      "O CRLV do caminhão",
      "O CT-e",
      "A NF-e (Nota Fiscal Eletrônica)",
      "O contrato do motorista",
    ],
    correctIndex: 2,
    explanation: "O valor averbado no risco sai do somatório das NFs transportadas.",
    reference: "Módulo 10"
  },
  {
    id: "q10-9",
    moduleSlug: "10-termos-tecnicos",
    question: "O que é OTD (On-Time Delivery)?",
    options: [
      "O motor do caminhão",
      "Indicador de desempenho que mede quantas entregas chegaram no prazo pactuado",
      "Um sistema de freios",
      "Uma taxa do Detran",
    ],
    correctIndex: 1,
    explanation: "OTD é a métrica rainha para Embarcadores logísticos.",
    reference: "Módulo 10"
  },
  {
    id: "q10-10",
    moduleSlug: "10-termos-tecnicos",
    question: "Se a palavra está sublinhada no portal AtlasGR (no treinamento), o que ela é?",
    options: [
      "Um erro de digitação",
      "Um link para vírus",
      "Um termo do Glossário Digital, basta passar o mouse para ver a definição técnica oficial",
      "Uma palavra em inglês",
    ],
    correctIndex: 2,
    explanation: "O Glossário Digital mantém a linguagem da equipe padronizada.",
    reference: "Módulo 10"
  },
];

const quiz11: QuizQuestion[] = [
  {
    id: "q11-1",
    moduleSlug: "11-operacao",
    question: "A AtlasGR faz Monitoramento ou Rastreamento?",
    options: [
      "Rastreamento passivo",
      "Monitoramento Ativo (trata alertas de exceções gerados pelo sistema, antecipando o problema)",
      "Os dois são rigorosamente iguais",
      "Nenhum dos dois",
    ],
    correctIndex: 1,
    explanation: "O monitoramento ativo age sobre o problema; o rastreamento apenas constata a posição.",
    reference: "Módulo 11"
  },
  {
    id: "q11-2",
    moduleSlug: "11-operacao",
    question: "Qual o SLA máximo obrigatório para um operador INICIAR a tratativa de um alerta?",
    options: [
      "1 hora",
      "45 minutos",
      "10 minutos",
      "No dia seguinte",
    ],
    correctIndex: 2,
    explanation: "O SLA limite para primeira ação (o 'click' inicial) é 10 minutos.",
    reference: "Módulo 11"
  },
  {
    id: "q11-3",
    moduleSlug: "11-operacao",
    question: "Qual o SLA máximo para RESOLVER (encerrar ou escalonar) um alerta?",
    options: [
      "10 minutos",
      "45 minutos",
      "2 horas",
      "6 horas",
    ],
    correctIndex: 1,
    explanation: "Aos 45 minutos o alerta deve estar finalizado ou repassado à CIA.",
    reference: "Módulo 11"
  },
  {
    id: "q11-4",
    moduleSlug: "11-operacao",
    question: "O que é 'Enforcar o Alerta' (erro fatal)?",
    options: [
      "Desligar o computador",
      "Deixar o alerta 'preso' em seu nome, sem tratá-lo dentro do SLA, expondo a carga a roubo real e mascarando a falha",
      "Excluir o alerta",
      "Pedir ajuda à CIA",
    ],
    correctIndex: 1,
    explanation: "Enforcar alerta é esconder um problema sem resolvê-lo em tempo hábil.",
    reference: "Módulo 11"
  },
  {
    id: "q11-5",
    moduleSlug: "11-operacao",
    question: "Quando o operador liga para o motorista para investigar um alerta crítico (Nível 1), o que é obrigatório?",
    options: [
      "Dizer 'Bom dia'",
      "Saber o time de futebol",
      "Solicitar e validar a CONTRA-SENHA de segurança (Verificação de Coação)",
      "Mandar ele ligar o rádio",
    ],
    correctIndex: 2,
    explanation: "Sem a contra-senha correta, presume-se que o motorista está com arma apontada à cabeça.",
    reference: "Módulo 11"
  },
  {
    id: "q11-6",
    moduleSlug: "11-operacao",
    question: "Você pode dar 'dicas' da contra-senha se o motorista esquecer?",
    options: [
      "Sim, para ajudar",
      "Apenas as primeiras letras",
      "NUNCA. Se ele esquecer, deve refazer o processo de recadastramento de segurança. Dar dicas anula o protocolo anti-sequestro.",
      "Sim, se ele for um senhor idoso",
    ],
    correctIndex: 2,
    explanation: "Dar dicas compromete a segurança de toda a carga.",
    reference: "Módulo 11"
  },
  {
    id: "q11-7",
    moduleSlug: "11-operacao",
    question: "Qual a diferença de Parada Eventual para Parada Longa?",
    options: [
      "Apenas o nome",
      "Eventual = até 15 minutos. Longa = Passou de 15 minutos em local não homologado (Nível Crítico).",
      "Longa é permitida, eventual não",
      "Apenas a vontade do motorista",
    ],
    correctIndex: 1,
    explanation: "Os sistemas da Atlas tratam paradas acima de 15min fora de base como alto risco.",
    reference: "Módulo 11"
  },
  {
    id: "q11-8",
    moduleSlug: "11-operacao",
    question: "Se a contra-senha for falada errada pelo motorista durante um evento suspeito, o que ocorre?",
    options: [
      "O operador desliga e tenta amanhã",
      "O operador abaixa o alerta",
      "Dispara-se o Protocolo de Bloqueio Físico Remoto do Caminhão e acionamento imediato da CIA (Suspeita de Rendição)",
      "O sistema trava",
    ],
    correctIndex: 2,
    explanation: "Senha errada sob suspeita = Protocolo Máximo de Segurança ativado.",
    reference: "Módulo 11"
  },
  {
    id: "q11-9",
    moduleSlug: "11-operacao",
    question: "Para onde vão os alertas gravíssimos quando o operador não consegue resolver/validar a segurança em 5 min?",
    options: [
      "Para o RH",
      "São deletados",
      "Escalonados imediatamente para a CIA (Central de Inteligência)",
      "Para a transportadora apenas",
    ],
    correctIndex: 2,
    explanation: "A CIA assume o comando em eventos confirmados de alto risco.",
    reference: "Módulo 11"
  },
  {
    id: "q11-10",
    moduleSlug: "11-operacao",
    question: "O Operador de Torre deve ficar 'caçando caminhões pontinhos no mapa' na Grade?",
    options: [
      "Sim, o dia todo",
      "Não, a prioridade absoluta dita pelo sistema é a Fila de Alertas piscando, tratada por Nível de Prioridade.",
      "Às vezes",
      "Depende do cliente",
    ],
    correctIndex: 1,
    explanation: "A gestão ativa é feita 100% orientada pelos Alertas da Fila.",
    reference: "Módulo 11"
  },
];

const quiz12: QuizQuestion[] = [
  {
    id: "q12-1",
    moduleSlug: "12-compliance",
    question: "A LGPD trata a 'Biometria Facial (FaceID)' e o 'Histórico Criminal' de motoristas como:",
    options: [
      "Dados públicos",
      "Dados irrelevantes",
      "Dados Sensíveis com proteção jurídica extrema e controle estrito de descarte",
      "Dados opcionais",
    ],
    correctIndex: 2,
    explanation: "LGPD classifica biometria e crimes como dados sensíveis (Art 5º).",
    reference: "Módulo 12"
  },
  {
    id: "q12-2",
    moduleSlug: "12-compliance",
    question: "Qual a regra sobre 'Tirar foto (print/celular) das telas da AtlasGR'?",
    options: [
      "Pode, se for para ajudar o cliente",
      "Proibição Total e Tolerância Zero. Viola a LGPD e a política de sigilo, passível de justa causa e ação criminal.",
      "Pode, se tampar os dados",
      "Pode para fins de estudo apenas",
    ],
    correctIndex: 1,
    explanation: "A captura de tela leva a vazamento direto de rotas e dados sensíveis.",
    reference: "Módulo 12"
  },
  {
    id: "q12-3",
    moduleSlug: "12-compliance",
    question: "O que é um ataque de 'Engenharia Social' na nossa operação?",
    options: [
      "Um hacker russo quebrando o servidor",
      "Um fraudador usando persuasão, agressividade ao telefone, ou falsa autoridade (Falso Diretor) para enganar o Operador a quebrar o protocolo e liberar senhas/veículos",
      "Uma falha no banco de dados",
      "Um vírus no e-mail",
    ],
    correctIndex: 1,
    explanation: "O 'hack' é feito na mente da pessoa (telefonema/WhatsApp), não no código do sistema.",
    reference: "Módulo 12"
  },
  {
    id: "q12-4",
    moduleSlug: "12-compliance",
    question: "Se alguém liga muito bravo, diz ser 'Dono da Transportadora' e exige o destravamento imediato de um caminhão sem fornecer senha técnica, você deve:",
    options: [
      "Obedecer porque o cliente tem razão",
      "Destravar mas anotar a placa",
      "Manter a calma, seguir a regra, negar o destravamento até que os protocolos rígidos de identificação via painel e contatos autorizados sejam compridos.",
      "Desligar o telefone",
    ],
    correctIndex: 2,
    explanation: "Nunca quebre protocolo por intimidação. A segurança da carga impera.",
    reference: "Módulo 12"
  },
  {
    id: "q12-5",
    moduleSlug: "12-compliance",
    question: "Compartilhar a sua senha individual do sistema com um colega porque ele 'precisa de ajuda' é permitido?",
    options: [
      "Sim, o importante é a agilidade",
      "Não, é falta grave que quebra o princípio da auditoria do sistema (Accountability)",
      "Sim, se for só por 5 minutos",
      "Depende da amizade",
    ],
    correctIndex: 1,
    explanation: "A senha é pessoal e intransferível.",
    reference: "Módulo 12"
  },
  {
    id: "q12-6",
    moduleSlug: "12-compliance",
    question: "O que é exigido do Operador ao levantar da sua mesa na Central?",
    options: [
      "Dar bom dia aos colegas",
      "Desligar o monitor",
      "Aplicar Bloqueio de Tela automático (Windows + L) para impedir acessos não autorizados físicos ao seu usuário",
      "Avisar o RH",
    ],
    correctIndex: 2,
    explanation: "Tela destravada sem presença do dono é violação de segurança cibernética.",
    reference: "Módulo 12"
  },
  {
    id: "q12-7",
    moduleSlug: "12-compliance",
    question: "Um despachante terceirizado liga perguntando o paradeiro de um caminhão alegando urgência logística. Como proceder?",
    options: [
      "Verifica no mapa e passa a posição no momento",
      "Avisa a ele que o caminhão sumiu",
      "Informa apenas contatos formalmente autorizados no Cadastro Oficial do Cliente (após dupla validação), negando ao despachante desconhecido.",
      "Manda ele ligar 190",
    ],
    correctIndex: 2,
    explanation: "Informações sigilosas (rotas) não são passadas para terceiros sem autorização prévia de sistema.",
    reference: "Módulo 12"
  },
  {
    id: "q12-8",
    moduleSlug: "12-compliance",
    question: "A AtlasGR pode mandar histórico criminal detalhado para o WhatsApp de clientes?",
    options: [
      "Sim",
      "Não, sob pena de infração direta à LGPD e ação por dano moral contra a empresa",
      "Às vezes",
      "Só se for em formato PDF",
    ],
    correctIndex: 1,
    explanation: "Repassa-se apenas o 'Status' (Não recomendado), nunca a ficha corrida.",
    reference: "Módulo 12"
  },
  {
    id: "q12-9",
    moduleSlug: "12-compliance",
    question: "Tolerância Zero na AtlasGR inclui atitudes de:",
    options: [
      "Atrasar no ponto 5 minutos",
      "Vestimenta fora do padrão de sexta-feira",
      "Assédio, Fraude, Compartilhamento de Senhas e Vazamento Intencional de Dados de Rotas (Compliance)",
      "Digitar lento no sistema",
    ],
    correctIndex: 2,
    explanation: "Tolerância Zero foca em infrações criminais, morais e de risco ao negócio.",
    reference: "Módulo 12"
  },
  {
    id: "q12-10",
    moduleSlug: "12-compliance",
    question: "Ao ver uma quebra de compliance grave de um colega (ex: fotografando senhas), você deve:",
    options: [
      "Ajudá-lo a esconder",
      "Reportar aos superiores ou usar os canais anônimos de Ética da empresa",
      "Publicar na internet",
      "Ignorar e cuidar do seu trabalho",
    ],
    correctIndex: 1,
    explanation: "A proteção do ambiente ético exige a notificação via canal oficial.",
    reference: "Módulo 12"
  },
];

const quiz13: QuizQuestion[] = [
  {
    id: "q13-1",
    moduleSlug: "13-tecnologia",
    question: "O Gerenciamento de Risco Preditivo responde a qual pergunta?",
    options: [
      "Quem bateu o caminhão?",
      "Quanto custou o seguro?",
      "O que vai acontecer nas próximas 2 horas e como podemos evitar?",
      "O que aconteceu ontem à noite?",
    ],
    correctIndex: 2,
    explanation: "Predição significa agir antes da materialização do evento.",
    reference: "Módulo 13"
  },
  {
    id: "q13-2",
    moduleSlug: "13-tecnologia",
    question: "Como o Sensor de Fadiga funciona na prática na cabine?",
    options: [
      "Pede para o motorista preencher um formulário",
      "Uma câmera com IA analisa os micro-movimentos do rosto (bocejo/olhos piscando) e gera alerta na Torre e vibração no banco",
      "Ele mede o peso do motorista",
      "Ele bloqueia a porta do caminhão",
    ],
    correctIndex: 1,
    explanation: "O sensor usa IA embarcada na câmera (Telemetria).",
    reference: "Módulo 13"
  },
  {
    id: "q13-3",
    moduleSlug: "13-tecnologia",
    question: "Qual o objetivo principal do Atlas Analytics?",
    options: [
      "Mandar e-mail para a polícia",
      "Bloquear o caminhão",
      "Criar um mapa bonito",
      "Consolidar milhões de eventos em painéis (Dashboards) para a diretoria descobrir gargalos e ineficiências históricas da operação",
    ],
    correctIndex: 3,
    explanation: "O Analytics gera inteligência de negócio olhando tendências passadas para consertar regras futuras.",
    reference: "Módulo 13"
  },
  {
    id: "q13-4",
    moduleSlug: "13-tecnologia",
    question: "A Inteligência Artificial vai substituir os operadores e a CIA?",
    options: [
      "Sim, completamente em 1 ano",
      "Não, a IA automatiza e filtra os 'falsos positivos', entregando aos humanos apenas as anomalias complexas que requerem decisão tática e negociação",
      "Apenas a CIA",
      "Vai substituir apenas os gerentes",
    ],
    correctIndex: 1,
    explanation: "A IA é uma ferramenta para escalar a precisão humana, não substitui a malícia e decisão crítica em crises.",
    reference: "Módulo 13"
  },
  {
    id: "q13-5",
    moduleSlug: "13-tecnologia",
    question: "O conceito de 'Risco' hoje na AtlasGR envolve apenas o Roubo de Carga?",
    options: [
      "Sim",
      "Não, envolve fortemente o 'Safety' (Segurança viária), pois evitar acidentes/tombamentos usando IA salva a carga, a vida do motorista e o ativo do cliente",
      "Envolve apenas chuva",
      "Só envolve cargas do exterior",
    ],
    correctIndex: 1,
    explanation: "Um acidente dá 'Perda Total' do mesmo jeito que um roubo.",
    reference: "Módulo 13"
  },
  {
    id: "q13-6",
    moduleSlug: "13-tecnologia",
    question: "O Analytics provou em um caso real (Sucos) que as transportadoras sofriam por:",
    options: [
      "Motoristas andando muito rápido",
      "Alto tempo de pátio em fazendas (esperando carga), não por roubos",
      "Rastreadores quebrando muito",
      "Combustível caro",
    ],
    correctIndex: 1,
    explanation: "Os dados provaram que a ineficiência logística era a verdadeira dor financeira do cliente.",
    reference: "Módulo 13"
  },
  {
    id: "q13-7",
    moduleSlug: "13-tecnologia",
    question: "O que é Telemetria?",
    options: [
      "Uma marca de celular",
      "Medição e transmissão remota de dados de sensores físicos e digitais do veículo (RPM, freada brusca, curva, fadiga)",
      "Um documento logístico",
      "Um modelo de rastreador obsoleto",
    ],
    correctIndex: 1,
    explanation: "Telemetria envolve dados mecânicos e de condução, não apenas o ponto GPS no mapa.",
    reference: "Módulo 13"
  },
  {
    id: "q13-8",
    moduleSlug: "13-tecnologia",
    question: "Por que a Inteligência Preditiva valoriza tanto o Motor de Regras do Connect?",
    options: [
      "Porque é caro",
      "Porque permite criar automações como: se (Caminhão A) entrar em (Zona B) de madrugada, então (Bloqueie Combustível) automaticamente.",
      "Porque ele desliga o caminhão à noite",
      "Porque ele envia SMS para o dono",
    ],
    correctIndex: 1,
    explanation: "Automações preditivas removem o tempo de reação humano da equação.",
    reference: "Módulo 13"
  },
  {
    id: "q13-9",
    moduleSlug: "13-tecnologia",
    question: "O modelo 'Reativo' da logística clássica funcionava como?",
    options: [
      "O cliente descobria pelo Jornal Nacional",
      "Prevenindo assaltos",
      "O cliente pagava seguro adiantado e sentava para chorar quando perdia a carga, apenas reportando o passado.",
      "Acompanhando milissegundo a milissegundo",
    ],
    correctIndex: 2,
    explanation: "Reativo = Esperar acontecer, rezar pelo seguro, mandar relatório.",
    reference: "Módulo 13"
  },
  {
    id: "q13-10",
    moduleSlug: "13-tecnologia",
    question: "Qual argumento vence a objeção: 'Sensores de fadiga são muito caros'?",
    options: [
      "Dizer que a vida é curta",
      "Dizer que são de graça no 1º mês",
      "Não há argumento",
      "Comparar o custo da implantação do hardware com o custo irreversível de R$ 2 Milhões da perda total de uma carreta tombada na rodovia + processos trabalhistas.",
    ],
    correctIndex: 3,
    explanation: "O custo da prevenção é minúsculo frente à catástrofe da perda (Custo Oculto).",
    reference: "Módulo 13"
  },
];

const quiz14: QuizQuestion[] = [
  {
    id: "q14-1",
    moduleSlug: "14-casos-reais",
    question: "No case 'Operação Carga Viva' de recuperação de eletrônicos, o que evitou o sucesso do roubo?",
    options: [
      "A Polícia já estava no posto bebendo café",
      "O Operador agiu rapidamente (dentro do SLA) e escalonou para a CIA sem perder tempo tentando infinitas ligações para o celular do motorista após falha na contra-senha",
      "O motorista fugiu correndo",
      "O rastreador piscou em azul",
    ],
    correctIndex: 1,
    explanation: "A rapidez no gatilho do escalonamento (SLA) salva cargas.",
    reference: "Módulo 14"
  },
  {
    id: "q14-2",
    moduleSlug: "14-casos-reais",
    question: "Por que a 'Isca Móvel' foi essencial no caso 'Carga Viva'?",
    options: [
      "Porque o rastreador principal foi destruído, mas a Isca, camuflada na carga, continuou emitindo sinal de GPS até o galpão abandonado",
      "Porque fez barulho e assustou os bandidos",
      "Porque o cliente pediu para ligá-la",
      "Porque ela tem câmera de vídeo interna",
    ],
    correctIndex: 0,
    explanation: "A isca é a redundância tecnológica vital quando o painel do caminhão é violado.",
    reference: "Módulo 14"
  },
  {
    id: "q14-3",
    moduleSlug: "14-casos-reais",
    question: "Qual foi o 'Erro Fatal' (Enforcamento) no caso da carga de Defensivos Agrícolas (R$ 800k perdidos)?",
    options: [
      "O sistema da Atlas caiu",
      "O caminhão pegou fogo acidentalmente",
      "O Operador acreditou na desculpa verbal do motorista, não solicitou a contra-senha de segurança e encerrou o alerta, enquanto o motorista estava rendido com uma arma",
      "A polícia demorou",
    ],
    correctIndex: 2,
    explanation: "Burlar o processo de validação de coação é a causa raiz da falha.",
    reference: "Módulo 14"
  },
  {
    id: "q14-4",
    moduleSlug: "14-casos-reais",
    question: "Como o 'Enforcamento de Alerta' mascarou o problema no caso dos defensivos agrícolas?",
    options: [
      "Escondeu que a empresa não tinha seguro",
      "Não mascarou nada",
      "O evento saiu da fila de prioridades, dando 3 horas de vantagem à quadrilha antes do cliente notar que a carga sumiu",
      "Disfarçou o erro do sistema",
    ],
    correctIndex: 2,
    explanation: "Baixar o alerta indevidamente ou ignorá-lo destrói a prevenção do PGR.",
    reference: "Módulo 14"
  },
  {
    id: "q14-5",
    moduleSlug: "14-casos-reais",
    question: "No Case Macro de Combustíveis (R$ 95M economizados), qual mudança cultural da transportadora gerou o resultado de ZERO roubos?",
    options: [
      "Passaram a transportar apenas de dia",
      "Pararam de transportar",
      "Eles começaram a pagar dobrado para o motorista",
      "Adotaram Profile Rígido (cortando maus motoristas na origem) + Atlas GR Implacável (sem tolerância para quebra de rotas)",
    ],
    correctIndex: 3,
    explanation: "A união do Pilar de Profile (Antes) com GR e Bloqueio automático erradicou os crimes de conluio.",
    reference: "Módulo 14"
  },
  {
    id: "q14-6",
    moduleSlug: "14-casos-reais",
    question: "Por que não podemos confiar 100% na 'entonação de voz' calma do motorista ao telefone numa Parada Não Programada?",
    options: [
      "Porque a ligação do rádio é ruim",
      "Porque a quadrilha ameaça as famílias dos motoristas, forçando-os a atuar de forma convincente. A contra-senha é a única prova sistêmica de normalidade.",
      "Porque o motorista mente sobre o frete",
      "Para aplicar mais multas ao cliente",
    ],
    correctIndex: 1,
    explanation: "A coação anula qualquer análise psicológica verbal via rádio.",
    reference: "Módulo 14"
  },
  {
    id: "q14-7",
    moduleSlug: "14-casos-reais",
    question: "A 'Cerca Eletrônica' usada no caso de sucos serve para:",
    options: [
      "Dar choque nos invasores",
      "Marcar o território do cliente num raio GPS; sempre que um caminhão entra ou sai dali, eventos de ETA, permanência e OTD são calculados",
      "Gastar mais bateria do rastreador",
      "Ouvir a conversa na cabine",
    ],
    correctIndex: 1,
    explanation: "Cercas virtuais geram inteligência de pátio (Logística Preditiva).",
    reference: "Módulo 14"
  },
  {
    id: "q14-8",
    moduleSlug: "14-casos-reais",
    question: "Qual a lição primordial tirada do laboratório de falhas operacionais?",
    options: [
      "O erro é culpa do software",
      "O Operador NUNCA deve colocar o próprio 'achismo' ou a 'empatia apressada' acima das regras engessadas do PGR.",
      "O cliente não se importa com a perda",
      "Devemos esperar sempre a ligação do cliente",
    ],
    correctIndex: 1,
    explanation: "Os protocolos existem porque sangue e milhões já foram perdidos no passado. Eles são a lei.",
    reference: "Módulo 14"
  },
  {
    id: "q14-9",
    moduleSlug: "14-casos-reais",
    question: "O caso dos Defensivos Agrícolas também reforça a importância da CIA, porque:",
    options: [
      "A CIA prendeu o ladrão",
      "A CIA emite a Nota Fiscal da carga",
      "Se escalonado imediatamente (suspeita de rendição), a CIA poderia ter bloqueado o caminhão antes dele entrar no cativeiro e acionado a PM",
      "A CIA pagou o seguro da carga",
    ],
    correctIndex: 2,
    explanation: "A velocidade no escalonamento para a Inteligência Tática previne a consolidação do roubo.",
    reference: "Módulo 14"
  },
  {
    id: "q14-10",
    moduleSlug: "14-casos-reais",
    question: "Como o Operador da Atlas deve ver o seu próprio trabalho frente a esses casos reais?",
    options: [
      "Como alguém que apenas clica em botões num software 24/7",
      "Como o último muro de defesa antes de um prejuízo catastrófico. O seu botão e seu SLA afetam diretamente a economia nacional.",
      "Como um burocrata sem importância real",
      "Como um despachante de fretes",
    ],
    correctIndex: 1,
    explanation: "A função tem impacto gigante na segurança e fluidez do país.",
    reference: "Módulo 14"
  },
];

const quiz15: QuizQuestion[] = [
  {
    id: "q15-1",
    moduleSlug: "15-preparacao-final",
    question: "Na revisão final do ciclo: O que garante que os motoristas são confiáveis ANTES da viagem?",
    options: [
      "Atlas Analytics",
      "O Sindicato dos motoristas",
      "A intuição do contratante",
      "Atlas Profile (Biometria e Background Check)",
    ],
    correctIndex: 3,
    explanation: "O Profile atua na Fundação/Origem (quem vai dirigir).",
    reference: "Módulo 15"
  },
  {
    id: "q15-2",
    moduleSlug: "15-preparacao-final",
    question: "Qual sistema é o 'cockpit' tático em Tempo Real que a Torre usa para tratar eventos (Durante a viagem)?",
    options: [
      "O ERP da Transportadora",
      "O Atlas Connect",
      "O WhatsApp da Polícia",
      "O Atlas Analytics",
    ],
    correctIndex: 1,
    explanation: "O Connect é o sistema orquestrador operacional ao vivo.",
    reference: "Módulo 15"
  },
  {
    id: "q15-3",
    moduleSlug: "15-preparacao-final",
    question: "Quando as regras do jogo (PGR) são quebradas e a crise vira real (roubo confirmado/perda de contato), quem entra em ação?",
    options: [
      "O DHO",
      "O Departamento Comercial da Atlas",
      "O Setor de TI da transportadora",
      "A CIA (Central de Inteligência Atlas) junto da Pronta Resposta",
    ],
    correctIndex: 3,
    explanation: "A CIA é a tropa de elite escalonada em sinistros/quebra crítica.",
    reference: "Módulo 15"
  },
  {
    id: "q15-4",
    moduleSlug: "15-preparacao-final",
    question: "Qual a função DEPOIS da viagem de produtos como Atlas Analytics?",
    options: [
      "Prender os ladrões via satélite",
      "Consolidar 1 milhão de eventos em dashboards para gerar inteligência, descobrir onde se perde dinheiro e corrigir gargalos futuros",
      "Pagar as multas de trânsito emitidas via API",
      "Apagar os registros para liberar espaço no servidor",
    ],
    correctIndex: 1,
    explanation: "Analytics atua na descoberta de padrões e inteligência estratégica.",
    reference: "Módulo 15"
  },
  {
    id: "q15-5",
    moduleSlug: "15-preparacao-final",
    question: "Qual é a base estrutural que pode gerar demissão por Justa Causa se quebrada, independentemente do sucesso das viagens?",
    options: [
      "Atrasar 5 minutos no ponto da manhã",
      "Regras Inegociáveis de Compliance: Quebra de Sigilo, envio de fotos de telas e vazamento de rotas (LGPD)",
      "Esquecer a senha de acesso ao portal e pedir o reset",
      "Não usar crachá",
    ],
    correctIndex: 1,
    explanation: "Vazamento de dados sensíveis e quebra de sigilo têm tolerância zero.",
    reference: "Módulo 15"
  },
  {
    id: "q15-6",
    moduleSlug: "15-preparacao-final",
    question: "Se na prova final cair uma situação de 'Sombra vs Jammer', você lembrará que:",
    options: [
      "Ambos indicam roubo confirmado pela Polícia",
      "São a mesma coisa, não afetam a SLA",
      "Sombra é um vazio natural de sinal na rodovia; Jammer é ação criminosa derrubando o sinal ativamente usando equipamento",
      "A Sombra só acontece à noite",
    ],
    correctIndex: 2,
    explanation: "Saber a distinção técnica evita o desespero indevido e garante ações assertivas.",
    reference: "Módulo 15"
  },
  {
    id: "q15-7",
    moduleSlug: "15-preparacao-final",
    question: "Quem define as REGRAS e o VALOR da carga no ecossistema (Quem dita o PGR principal)?",
    options: [
      "O Motorista terceirizado através do CT-e",
      "O Operador da Atlas",
      "A TI do cliente",
      "O Embarcador (Dono da carga) e a Seguradora, representados na Apólice/NF-e",
    ],
    correctIndex: 3,
    explanation: "O poder (e a regra do jogo) vêm de quem paga o prejuízo (Embarcador/Seguradora).",
    reference: "Módulo 15"
  },
  {
    id: "q15-8",
    moduleSlug: "15-preparacao-final",
    question: "Qual é a nota de aprovação (Corte) para obter a Certificação AtlasGR na Prova Final?",
    options: [
      "50% de acertos",
      "60% de acertos",
      "90% de acertos",
      "70% de acertos",
    ],
    correctIndex: 3,
    explanation: "A régua da qualidade exige conhecimento sólido (70%).",
    reference: "Módulo 15"
  },
  {
    id: "q15-9",
    moduleSlug: "15-preparacao-final",
    question: "O objetivo de vender os '4 Produtos' da AtlasGR juntos para um cliente é:",
    options: [
      "Para ele ter senhas demais e esquecer de usar",
      "Para cobrar o quádruplo do preço apenas pelo software vazio",
      "Porque eles criam o ciclo preditivo de fechamento das vulnerabilidades: Antes, Durante, Crise e Depois, transformando a logística reativa",
      "Para o cliente fechar a transportadora e abrir uma pizzaria",
    ],
    correctIndex: 2,
    explanation: "O ecossistema anula o risco cobrindo a jornada completa.",
    reference: "Módulo 15"
  },
  {
    id: "q15-10",
    moduleSlug: "15-preparacao-final",
    question: "O que vem IMEDIATAMENTE após a conclusão teórica da Universidade Corporativa?",
    options: [
      "Um prêmio em dinheiro",
      "O PDI (Plano de Desenvolvimento Individual), acompanhamento dos 90 dias e a Imersão Prática nos sistemas da Torre ou do Backoffice",
      "A aposentadoria na empresa",
      "Fim dos treinamentos para o resto da vida",
    ],
    correctIndex: 1,
    explanation: "A fundação teórica é o estopim para a execução prática tutorada.",
    reference: "Módulo 15"
  },
];

export const quizzesByModule: Record<string, QuizQuestion[]> = {
  "01-bem-vindo-atlasgr": quiz01,
  "02-mercado-logistica": quiz02,
  "03-gerenciamento-risco": quiz03,
  "04-produtos-atlasgr": quiz04,
  "05-software-logistico": quiz05,
  "06-atlas-profile": quiz06,
  "07-integracoes": quiz07,
  "08-clientes": quiz08,
  "09-processo-comercial": quiz09,
  "10-termos-tecnicos": quiz10,
  "11-operacao": quiz11,
  "12-compliance": quiz12,
  "13-tecnologia": quiz13,
  "14-casos-reais": quiz14,
  "15-preparacao-final": quiz15,
};

export function getQuizForModule(slug: string): QuizQuestion[] {
  return quizzesByModule[slug] ?? [];
}

export function getAllBuiltQuestions(): QuizQuestion[] {
  return [
    ...quiz01,
    ...quiz02,
    ...quiz03,
    ...quiz04,
    ...quiz05,
    ...quiz06,
    ...quiz07,
    ...quiz08,
    ...quiz09,
    ...quiz10,
    ...quiz11,
    ...quiz12,
    ...quiz13,
    ...quiz14,
    ...quiz15,
  ];
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
