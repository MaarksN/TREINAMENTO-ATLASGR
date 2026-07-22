import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("13-tecnologia")!;

export const module13: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 5 — Software Logístico (Atlas Connect, BI de indicadores, sensores de fadiga)",
    "Showcase de produto Atlas Analytics (/produtos/analytics)",
  ],
  objectives: [
    "Reconhecer como IA e analytics já aparecem na operação atual da Atlas.",
    "Diferenciar monitoramento reativo de prevenção baseada em dados.",
    "Explicar o papel do sensor de fadiga (Safety) como exemplo de tecnologia preditiva.",
    "Situar o Atlas Analytics como a camada que transforma eventos em decisão executiva.",
  ],
  sections: [
    {
      id: "do-reativo-ao-preditivo",
      title: "De reativo para preditivo",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Por muito tempo, gerenciamento de risco significou reagir depois que algo já tinha acontecido: um alerta disparava, o operador tratava, e só depois a liderança analisava o que deu errado. A tendência do mercado — e da própria Atlas — é migrar para uma postura preventiva: usar dados para antecipar onde o risco é maior antes que o evento aconteça.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Monitoramento reativo x Prevenção baseada em dados",
          left: {
            label: "Reativo",
            points: [
              "Alerta dispara, operador trata.",
              "Análise acontece depois do evento.",
              "Decisão baseada em um caso isolado.",
            ],
          },
          right: {
            label: "Preditivo",
            points: [
              "Padrões históricos apontam onde o risco é maior antes da viagem.",
              "Indicadores acompanhados continuamente (Atlas Analytics).",
              "Decisão baseada em tendência, não em um caso isolado.",
            ],
          },
        },
      ],
    },
    {
      id: "safety-como-exemplo",
      title: "Safety: um exemplo de tecnologia já em uso",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O sensor de ",
              { term: "safety" },
              " é um bom exemplo de tecnologia preditiva já aplicada na operação: em vez de esperar um acidente por fadiga, o sistema identifica sinais de risco (bocejo, olhos fechados, uso de celular) em tempo real e gera um alerta antes que o pior aconteça.",
            ],
            [
              "Quando esses eventos são consolidados ao longo do tempo, viram indicador de tendência: qual motorista, rota ou horário concentra mais eventos de fadiga — informação valiosa tanto para a Central quanto para a gestão do cliente.",
            ],
          ],
        },
      ],
    },
    {
      id: "analytics-e-ia",
      title: "Atlas Analytics e o papel da IA",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Atlas Analytics consolida eventos, alertas e indicadores de ",
              { term: "kpi" },
              " em painéis executivos: mapa de risco por região, ranking de ofensores de safety, tempo de permanência em alvos. É essa camada de análise que aponta tendência, e não apenas o histórico bruto de eventos.",
            ],
            [
              "Tecnologias de inteligência artificial aplicadas a esse tipo de dado — reconhecimento de padrões em grandes volumes de eventos, por exemplo — são uma tendência clara do setor de gerenciamento de risco logístico, e o caminho natural de evolução para tornar a prevenção ainda mais precisa.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Tecnologia não substitui processo",
          text: [
            "Nenhuma tecnologia de análise de dados substitui um PGR bem desenhado ou uma CIA bem treinada — ela existe para tornar esse processo mais preciso e mais rápido, não para substituí-lo.",
          ],
        },
      ],
    },
  ],
  summary: [
    "O mercado de gerenciamento de risco está migrando de monitoramento reativo para prevenção baseada em dados.",
    "O sensor de Safety é um exemplo já em uso de tecnologia preditiva, identificando risco antes do acidente.",
    "O Atlas Analytics consolida eventos em indicadores de tendência — mapa de risco, ranking de ofensores, tempo em alvos.",
    "Inteligência artificial aplicada a grandes volumes de eventos é uma tendência natural de evolução do setor.",
    "Tecnologia não substitui PGR nem CIA — ela torna o processo mais preciso e mais rápido.",
  ],
  finalChecklist: [
    "Sei diferenciar monitoramento reativo de prevenção baseada em dados.",
    "Consigo explicar o papel do sensor de Safety como exemplo de tecnologia preditiva.",
    "Sei o que o Atlas Analytics consolida e para quem serve.",
    "Entendo por que tecnologia não substitui processo (PGR/CIA).",
  ],
  mindMap: {
    root: "Tecnologia",
    branches: [
      { label: "Tendência", items: ["Reativo → preditivo", "Prevenção baseada em dados"] },
      { label: "Safety", items: ["Bocejo", "Olhos fechados", "Uso de celular", "Indicador de tendência"] },
      { label: "Analytics", items: ["Mapa de risco", "Ranking de ofensores", "Tempo em alvos", "KPI"] },
      { label: "IA", items: ["Reconhecimento de padrões", "Não substitui PGR nem CIA"] },
    ],
  },
};
