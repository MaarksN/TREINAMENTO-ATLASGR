import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("14-casos-reais")!;

export const module14: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Cases de Recuperação e Relatórios de Sinistro",
    "Estudos de Casos Comerciais",
  ],
  objectives: [
    "Analisar ocorrências reais (sinistros e recuperações) para conectar teoria e prática.",
    "Identificar os fatores críticos de sucesso (SLA, CIA) e de falha (Enforcamento) em um evento.",
    "Consolidar a percepção de valor que entregamos aos grandes embarcadores.",
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
              "A guerra logística é ganha nos detalhes. Este módulo não ensina novos conceitos; ele mostra como tudo o que você aprendeu nos módulos anteriores foi usado para salvar milhões em cargas ou onde as coisas deram errado.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Avançado (Laboratório Prático)",
            "Pré-requisitos: Módulo 11 (Operação)",
            "Tempo estimado: 30 minutos",
            "Competências desenvolvidas: Análise de Causa Raiz, Pensamento Tático, Resolução Crítica",
            "Gamificação: +500 XP, Badge 'Investigador'",
          ],
        },
      ],
    },
    {
      id: "sucesso-recuperacao",
      title: "O Sucesso: Operação Carga Viva",
      blocks: [
        {
          type: "text",
          heading: "O Cenário",
          paragraphs: [
            [
              "Caminhão transportando eletroeletrônicos (Valor: R$ 1.5M). Viagem de São Paulo para Curitiba. Às 03:15 da manhã, o Connect aciona Alerta Nível 1: 'Perda do Rastreador Principal'. O motorista não atende o celular.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Cronologia da Recuperação",
          items: [
            { label: "03:15", text: "Alerta cai na tela. Operador inicia tratativa imediatamente (Dentro do SLA de 10 min)." },
            { label: "03:18", text: "Macro de bloqueio e sirene enviados. Celular do motorista desligado. Operador não hesita e passa para a CIA." },
            { label: "03:22", text: "CIA rastreia a ISCA móvel (que não foi achada pelos bandidos). Posição aponta um galpão abandonado a 10km da Dutra." },
            { label: "03:25", text: "CIA aciona viaturas da PM mais próximas via rádio direto e aciona Pronta Resposta." },
            { label: "03:45", text: "PM intercepta a carreta no galpão. Carga intacta. Motorista liberado." },
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "O Ponto de Virada",
          text: [
            "O Sucesso ocorreu porque o Operador NÃO demorou para acionar a CIA. Se ele esperasse 20 minutos 'tentando o celular', o caminhão teria entrado em um local onde a Isca também perderia o sinal.",
          ],
        },
      ],
    },
    {
      id: "falha-enforcamento",
      title: "A Falha: O Preço do 'Enforcamento'",
      blocks: [
        {
          type: "text",
          heading: "O Cenário (O Que Não Fazer)",
          paragraphs: [
            [
              "Carga de defensivos agrícolas (R$ 800k). Alerta gerado: 'Parada Indevida' no interior de MG. Nível de prioridade Alto.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Cronologia da Falha",
          items: [
            { label: "14:00", text: "Alerta gerado no Connect." },
            { label: "14:15", text: "Operador inicia a tratativa (Fora do SLA de 10 min). Liga para o motorista." },
            { label: "14:18", text: "Motorista atende calmo e diz: 'Parei para almoçar, tô voltando já'. Operador confia na voz e encerra a tratativa SEM pedir a contra-senha." },
            { label: "17:00", text: "Cliente liga perguntando por que o caminhão sumiu do mapa há 2 horas. A carga foi 100% roubada. O motorista estava rendido com uma arma nas costas durante a ligação das 14:18." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A Causa Raiz",
          text: [
            "O Operador 'Burlou' o processo. Deixou a empatia ou a preguiça vencer o PGR. Não validar a contra-senha é um erro fatal que custou R$ 800 mil à seguradora (e manchou a imagem da Atlas).",
          ],
        },
      ],
    },
    {
      id: "cases-macro",
      title: "Resultados Macro (O Valor para o Diretoria)",
      blocks: [
        {
          type: "case",
          title: "95 Milhões Economizados",
          text: "Um cliente de combustíveis mudou totalmente sua cultura. Adotando Atlas Profile rígido + Atlas GR implacável, o número de roubos caiu de 40 no ano para ZERO em dois anos seguidos. Isso representa R$ 95 Milhões em perdas diretas evitadas.",
          source: "Case Comercial Combustíveis (2024)",
        },
        {
          type: "case",
          title: "-26% em Tempo de Pátio",
          text: "O cliente de sucos não tinha problemas de roubo. O problema era que motoristas dormiam no pátio da fazenda. Usando a cerca eletrônica do Connect e os dashboards do Analytics, o cliente provou para a fazenda que eles eram lentos. O tempo de carregamento caiu 26%, aumentando os lucros da transportadora brutalmente.",
          source: "Case Comercial Sucos (2025)",
        },
      ],
    },
  ],
  summary: [
    "A velocidade no SLA de primeira ação (10 minutos) é a diferença entre sucesso e fracasso no acionamento policial.",
    "Regras processuais (como pedir contra-senha) não podem ser puladas baseado na 'entonação de voz' do motorista.",
    "O valor entregue pela Atlas se traduz em grandes cases focados na anulação do roubo (combustível) ou ganho de eficiência (sucos).",
  ],
  finalChecklist: [
    "Entendo o peso real de seguir o PGR sob pressão.",
    "Sei os fatores que salvaram a carga de eletrônicos.",
    "Entendo o erro crítico que causou a perda da carga de defensivos.",
  ],
  mindMap: {
    root: "Laboratório de Casos",
    branches: [
      { label: "Fatores de Sucesso", items: ["SLA Rápido", "Acionamento CIA", "Isca Móvel"] },
      { label: "Erros Fatais", items: ["Enforcar Alertas", "Ignorar Contra-senha", "Fugir do PGR"] },
      { label: "Cases Macro", items: ["R$ 95M Combustíveis", "-26% Pátio de Sucos"] },
    ],
  },
  scenario:
    "Analisando o case do roubo dos defensivos, se você fosse o supervisor desse operador, o que diria a ele na reunião de feedback pós-incidente sobre a importância das regras engessadas em momentos de crise?",
  diagram: {
    title: "O Ponto de Decisão",
    chart: "graph TD\n  A[Alerta na Tela] --> B{Operador segue PGR?}\n  B -- Sim --> C[Velocidade, CIA, Recuperação]\n  B -- Não --> D[Quebra de SLA, Confiança Cega, Roubo Total]",
  },
};
