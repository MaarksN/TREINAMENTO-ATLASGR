import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("04-produtos-atlasgr")!;

export const module04: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 3 — Gerenciamento de Risco (PGR, apólice, CIA)",
    "Showcases de produto do portal (/produtos/profile, /produtos/connect, /produtos/gr, /produtos/analytics)",
  ],
  objectives: [
    "Listar os quatro pilares do portfólio ATLASGR: Profile, GR, Connect e Analytics.",
    "Explicar em uma frase o que cada produto resolve para o cliente.",
    "Reconhecer como os produtos se conectam entre si no dia a dia da operação.",
    "Identificar qual produto mencionar diante de uma dor específica do cliente.",
  ],
  sections: [
    {
      id: "guia-do-modulo",
      title: "Guia Estratégico do Módulo",
      blocks: [
        {
          type: "text",
          heading: "Visão Geral",
          paragraphs: [
            [
              "Nosso portfólio não é um 'cardápio de softwares', mas um ecossistema. Neste módulo, você entenderá como nossas quatro soluções principais se conectam para transformar uma operação vulnerável em uma fortaleza logística.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Intermediário (Produto)",
            "Pré-requisitos: Módulo 03",
            "Tempo estimado: 45 minutos",
            "Competências desenvolvidas: Conhecimento de Portfólio, Argumentação Comercial, Visão Sistêmica",
            "Gamificação: +700 XP, Badge 'Especialista de Produto', Conquista 'Os 4 Pilares'",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "IA Educacional — Simulador",
          text: [
            "Ao final do módulo, nosso assistente virtual fará o papel de um cliente e perguntará: 'Por que eu preciso de 4 produtos em vez de 1?' Prepare-se para responder com base na jornada do motorista.",
          ],
        },
      ],
    },
    {
      id: "quatro-pilares",
      title: "Os Quatro Pilares do Portfólio",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A ATLASGR entrega muito mais do que \"rastrear um caminhão\". Nós entregamos previsibilidade. Para isso, usamos quatro pilares: quem vai dirigir (",
              { term: "perfil-securitario" },
              "), o que fazer se algo sair do combinado (",
              { term: "gr" },
              "), como enxergar tudo em tempo real (",
              { term: "connect" },
              ") e o que os números revelam no final (Analytics).",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Linha do Tempo da Operação",
          items: [
            { label: "Antes da viagem (Atlas Profile)", text: "Validação documental, checagem criminal e biometria facial do motorista." },
            { label: "Durante a viagem (Atlas Connect)", text: "A Torre de Controle monitora a viagem evento a evento." },
            { label: "Na Crise (Atlas GR / CIA)", text: "Intervenção ativa caso um protocolo do PGR seja quebrado." },
            { label: "Depois da viagem (Atlas Analytics)", text: "Consolidação de dados para mostrar ao cliente onde ele está perdendo dinheiro." },
          ],
        },
      ],
    },
    {
      id: "atlas-profile",
      title: "Atlas Profile — O Filtro Inicial",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Muitos prejuízos nascem antes de o caminhão ser ligado. O Atlas Profile ataca o 'custo invisível' da contratação malfeita. Ele usa ",
              { term: "faceid" },
              " (biometria facial) e cruza dados para barrar motoristas irregulares.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Risco Reputacional",
          text: [
            "Contratar alguém com mandado de prisão em aberto ou CNH falsa não é só risco de roubo; é um risco criminal e reputacional gigantesco para o nosso cliente.",
          ],
        },
      ],
    },
    {
      id: "atlas-gr",
      title: "Atlas GR — A Execução do PGR",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "É o núcleo histórico da empresa. O pilar que garante que a operação segue milimetricamente o ",
              { term: "pgr" },
              ". Se houver desvio, a ",
              { term: "cia" },
              " é acionada.",
            ],
          ],
        },
      ],
    },
    {
      id: "atlas-connect-analytics",
      title: "Atlas Connect e Atlas Analytics",
      blocks: [
        {
          type: "comparison",
          title: "Connect x Analytics",
          left: {
            label: "Atlas Connect (O Presente)",
            points: ["Tempo real (Agora).", "Foco operacional (Torre de Controle).", "Visão de 'O que está acontecendo?'"],
          },
          right: {
            label: "Atlas Analytics (O Passado e o Futuro)",
            points: ["Consolidado (Mês/Ano).", "Foco executivo (Diretoria).", "Visão de 'Onde estamos errando?'"],
          },
        },
        {
          type: "case",
          title: "Estudo de Caso: Economia Real",
          text: "Um cliente combinou Connect e Analytics e descobriu que seus caminhões passavam 26% do tempo parados em fazendas esperando carga. O problema não era roubo, era ineficiência. A Atlas provou o valor com dados.",
          source: "Showcase Atlas Analytics",
        },
      ],
    },
  ],
  summary: [
    "O portfólio possui quatro pilares: Profile (antes), Connect (durante), GR (crise) e Analytics (depois).",
    "Atlas Profile usa biometria e checagens legais para evitar contratações de risco.",
    "Atlas GR é a garantia de que as regras da apólice (PGR) serão executadas sem falhas.",
    "Atlas Connect é a ferramenta tática em tempo real para operadores e clientes.",
    "Atlas Analytics é a ferramenta estratégica para tomada de decisões e correção de rotas logísticas.",
  ],
  finalChecklist: [
    "Sei os nomes e funções dos quatro pilares.",
    "Consigo explicar o que é o Atlas Profile e por que ele previne sinistros.",
    "Diferencio claramente o Connect (operacional) do Analytics (executivo).",
    "Entendo que os produtos funcionam juntos em uma linha do tempo lógica.",
  ],
  mindMap: {
    root: "Produtos AtlasGR",
    branches: [
      { label: "Profile", items: ["Biometria", "Antecedentes", "Prevenção"] },
      { label: "Connect", items: ["Tempo Real", "Alertas", "Torre"] },
      { label: "GR", items: ["PGR", "Apólice", "Tratativa", "CIA"] },
      { label: "Analytics", items: ["Dashboards", "Eficiência", "Estratégia"] },
    ],
  },
  scenario:
    "Um cliente quer cancelar o Atlas Profile alegando que 'ele mesmo puxa a ficha do motorista no site do Detran'. Como você usa o argumento da Biometria Facial e do histórico criminal para convencê-lo de que ele está correndo perigo?",
  diagram: {
    title: "O Ecossistema Atlas",
    chart: "graph LR\n  Profile[Atlas Profile] -->|Libera Viagem| Connect[Atlas Connect]\n  Connect -->|Desvio Grave| GR[Atlas GR / CIA]\n  Connect -->|Dados Históricos| Analytics[Atlas Analytics]",
  },
};
