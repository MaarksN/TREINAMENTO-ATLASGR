import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("02-mercado-logistica")!;

export const module02: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Dados públicos de transporte de cargas — ANTT e CNT (Pesquisa Rodoviária)",
    "Treinamento Operacional 2022 — Área de risco (raio por região metropolitana)",
  ],
  objectives: [
    "Descrever os elos da cadeia de suprimentos e onde a Atlas atua nela.",
    "Diferenciar transportadora, embarcador e operador logístico.",
    "Reconhecer os principais tipos de carga e como cada um muda o perfil de risco.",
    "Explicar o que são TMS e ERP e como eles se conectam ao rastreamento.",
    "Situar o Brasil no contexto do transporte rodoviário de cargas usando dados públicos.",
    "Reconhecer como o raio de área de risco de uma região entra no PGR de um cliente.",
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
              "Bem-vindo ao Módulo 02. Para gerenciar risco com excelência, você precisa antes entender o ecossistema onde nossos clientes operam. Este módulo mapeia as regras do jogo do mercado logístico nacional.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Iniciante (Mercado)",
            "Pré-requisitos: Módulo 01",
            "Tempo estimado: 35 minutos",
            "Competências desenvolvidas: Visão de Negócio Logístico, Conhecimento de Supply Chain",
            "Gamificação: +500 XP, Badge 'Visão de Águia', Missão 'Raio X da Carga'",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Dica do Assistente IA",
          text: [
            "Durante a leitura sobre TMS e ERP, se você não for de TI e ficar confuso, peça ao Assistente de IA para explicar com uma analogia do dia a dia. Isso ajuda a fixar o conceito rapidamente.",
          ],
        },
      ],
    },
    {
      id: "cadeia-de-suprimentos",
      title: "A cadeia de suprimentos e seus elos",
      blocks: [
        {
          type: "text",
          heading: "Do fabricante à prateleira",
          paragraphs: [
            [
              "A cadeia de suprimentos (supply chain) é o caminho que um produto faz desde o campo (ou da fábrica) até chegar à sua casa. A AtlasGR não fabrica produtos nem tem caminhões; nós atuamos como os 'fiscais e guardiões' dessa cadeia para que nada se perca ou seja roubado no caminho.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Embarcador x Transportadora",
          left: {
            label: "Embarcador",
            points: [
              "É o dono da carga: fabricante, distribuidor ou varejista.",
              "Contrata a Atlas para monitorar cargas transportadas por terceiros.",
              "Tem exigências focadas na qualidade do produto (ex: temperatura).",
            ],
          },
          right: {
            label: "Transportadora",
            points: [
              "É quem executa o transporte: possui a frota e os motoristas.",
              "Contrata a Atlas para cumprir regras de seguro (PGR).",
              "Pode atender dezenas de embarcadores diferentes ao mesmo tempo.",
            ],
          },
        },
        {
          type: "callout",
          variant: "warning",
          title: "Atenção: Regras Sobrepostas",
          text: [
            "É extremamente comum que um mesmo caminhão, no Connect, possua regras de segurança vindas da transportadora E regras adicionais vindas do embarcador.",
          ],
        },
      ],
    },
    {
      id: "tipos-de-carga",
      title: "Tipos de carga e perfil de risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Um carregamento de 10 toneladas de areia tem um risco diferente de 10 toneladas de iPhones. O que muda o risco e o ",
              { term: "pgr" },
              " é o que chamamos de Atratividade e Custo Agregado da carga.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Categorias e Níveis de Risco",
          items: [
            "Alto valor (Eletrônicos, Remédios): Risco Máximo de roubo. Exige escolta armada armada.",
            "Carga Perigosa (Combustível, Químicos): Risco Alto de contaminação e explosão. Exige MOPP.",
            "Perecível (Carne Frigorificada): Risco Moderado de roubo, mas Risco Alto de perda por temperatura/atraso.",
            "Granel e Minérios: Risco Baixo de roubo (difícil repasse), mas com foco em controle de desvio de rotas.",
          ],
        },
      ],
    },
    {
      id: "sistemas-de-gestao",
      title: "Sistemas de gestão: A Torre de Babel",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Na logística, ninguém trabalha com um sistema só. O cliente usa o ",
              { term: "tms" },
              " para organizar fretes, e o ",
              { term: "erp" },
              " para emitir nota fiscal.",
            ],
            [
              "A AtlasGR conecta essas informações no Atlas Connect usando ",
              { term: "api" },
              ". Quando os sistemas conversam, o ",
              { term: "eta" },
              " atualiza sozinho no painel do cliente, sem necessidade de enviar e-mails de posição.",
            ],
          ],
        },
      ],
    },
    {
      id: "panorama-brasil",
      title: "O cenário logístico do Brasil",
      blocks: [
        {
          type: "stat",
          items: [
            { value: "65%", label: "das cargas no Brasil são transportadas via rodovias" },
            { value: "1.7M+", label: "veículos registrados na ANTT" },
            { value: "Nº 1", label: "O Brasil tem índices altíssimos de roubo de cargas na América Latina" },
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "É essa extrema dependência de estradas misturada com desigualdade social e problemas de segurança pública que torna o Gerenciamento de Risco da AtlasGR não um luxo, mas um requisito vital de sobrevivência para empresas de transporte.",
            ],
          ],
        },
      ],
    },
    {
      id: "areas-de-risco",
      title: "A Geografia do Risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O que define uma área de risco não é 'achismo'. São raios matemáticos em torno de metrópoles, baseados em histórico de sinistros, configurados diretamente no motor de regras.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Zonas Quentes (Raios Oficiais)",
          items: [
            "São Paulo (SP) e Rio de Janeiro (RJ): Raio de 200 km",
            "Salvador (BA), Fortaleza (CE) e Porto Alegre (RS): Raio de 200 km",
            "Belo Horizonte (MG), Recife (PE): Raio de 150 km",
            "Curitiba (PR), Vitória (ES): Raio de 100 km",
          ],
        },
        {
          type: "case",
          title: "Por que o Raio importa",
          text: "Se um caminhão de eletrônicos cruza o raio de 200km de SP (Eventos de Área de Risco), o sistema automaticamente exige comunicação com a Central a cada 30 minutos e bloqueia pernoite em locais não homologados.",
          source: "Manual de Operação AtlasGR",
        },
      ],
    },
  ],
  summary: [
    "A cadeia liga embarcador (dono) e transportadora (frota), e a Atlas atua gerenciando as regras de ambos.",
    "O nível de risco muda com base no que está dentro do caminhão (atratividade, periculosidade).",
    "TMS e ERP são de gestão logística; o Connect cuida da gestão de riscos de forma integrada via API.",
    "O Brasil é 65% rodoviário, tornando a segurança na estrada o principal gargalo econômico do transporte.",
    "Áreas de Risco são mapeadas matematicamente em raios quilométricos para disparar protocolos automáticos.",
  ],
  finalChecklist: [
    "Diferencio embarcador e transportadora.",
    "Entendo que cada tipo de carga aciona uma regra de segurança diferente.",
    "Sei a diferença entre um TMS (logística) e o Connect (risco).",
    "Consigo explicar por que o Brasil demanda gerenciamento de risco agressivo.",
    "Entendo o que acontece operacionalmente quando um caminhão cruza um raio de Área de Risco.",
  ],
  mindMap: {
    root: "Mercado Logístico",
    branches: [
      { label: "Jogadores", items: ["Embarcador", "Transportadora", "Operador"] },
      { label: "O Perigo", items: ["Alto Valor", "Perigoso", "Perecível"] },
      { label: "Sistemas", items: ["TMS", "ERP", "Connect", "APIs"] },
      { label: "Zonas Quentes", items: ["Raios 100 a 200km", "Controle de Pernoite", "Eventos de Risco"] },
    ],
  },
  scenario:
    "Um cliente de Alto Valor te liga pedindo para liberar um pernoite a 50km do Rio de Janeiro sem escolta. Sabendo que o raio de risco lá é de 200km, como você justifica comercial e operacionalmente que isso precisa passar pelo aval da Seguradora e da CIA primeiro?",
  diagram: {
    title: "Ecossistema Logístico",
    chart: "graph LR\n  A[Embarcador/Dono] --> B[Transportadora]\n  B --> C[TMS/ERP]\n  C --> D[Atlas Connect (API)]\n  D --> E[Torre de Controle]",
  },
};
