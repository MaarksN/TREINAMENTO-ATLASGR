import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("08-clientes")!;

export const module08: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 2 — Mercado de Logística (embarcador x transportadora)",
    "Cases de cliente apresentados nos showcases de produto do portal",
  ],
  objectives: [
    "Reconhecer os principais perfis de cliente atendidos pela Atlas.",
    "Explicar como a dor de cada perfil muda o que a Atlas entrega.",
    "Relacionar cada perfil de cliente a exemplos de resultado (cases).",
  ],
  sections: [
    {
      id: "perfis-de-cliente",
      title: "Quem contrata a Atlas",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Atlas atende três grandes perfis de cliente, cada um com uma dor principal diferente — e reconhecer qual perfil está do outro lado da conversa muda como o colaborador explica o valor da Atlas.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Transportadora x Embarcador",
          left: {
            label: "Transportadora",
            points: [
              "Precisa cumprir exigências de apólice para manter a cobertura de seguro válida.",
              "Quer reduzir o próprio prejuízo direto com sinistros (indenização, multa, reputação).",
              "Costuma ter contato mais frequente com a operação do dia a dia da Central.",
            ],
          },
          right: {
            label: "Embarcador",
            points: [
              "Quer visibilidade sobre a carga, mesmo transportada por terceiros.",
              "Preocupa-se com o custo total da operação — inclusive tempo parado (ex.: tempo em fazendas ou fábricas).",
              "Costuma acompanhar a operação por indicadores e relatórios executivos (Atlas Analytics).",
            ],
          },
        },
        {
          type: "text",
          heading: "Operador logístico",
          paragraphs: [
            [
              "Um terceiro perfil, o operador logístico, atua entre os dois: contrata frota e serviços de transporte por conta de um ou mais embarcadores, e costuma precisar tanto da visão operacional (Connect) quanto da visão executiva (Analytics).",
            ],
          ],
        },
      ],
    },
    {
      id: "dor-por-perfil",
      title: "A dor de cada perfil, na prática",
      blocks: [
        {
          type: "case",
          title: "Embarcador de combustível",
          text:
            "Um embarcador de combustível relatou R$ 95 milhões economizados em perdas ao adotar o gerenciamento de risco da Atlas — a dor principal, nesse caso, era o prejuízo direto com roubo de carga de alto valor.",
          source: "Case de cliente apresentado no showcase de produto Atlas Profile",
        },
        {
          type: "case",
          title: "Embarcador de suco",
          text:
            "Um embarcador do setor de suco reduziu em 26% o tempo de permanência de veículos em fazendas — nesse caso, a dor não era roubo de carga, mas custo operacional invisível: tempo parado que não aparecia como prioridade até ser medido.",
          source: "Case de cliente apresentado no showcase de produto Atlas Connect / GR",
        },
        {
          type: "callout",
          variant: "info",
          title: "O mesmo produto, dores diferentes",
          text: [
            "O Atlas Connect e o Atlas Analytics são os mesmos produtos nos dois cases acima — o que muda é qual indicador o cliente mais valoriza: perda evitada ou tempo economizado.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A Atlas atende três perfis principais: transportadora, embarcador e operador logístico.",
    "Transportadora foca em cumprir apólice e reduzir prejuízo direto com sinistro.",
    "Embarcador foca em visibilidade da carga e custo total da operação, incluindo tempo parado.",
    "Operador logístico combina as duas visões, operacional e executiva.",
    "O mesmo produto pode resolver dores diferentes dependendo do perfil do cliente — por isso a Atlas usa cases distintos para cada um.",
  ],
  finalChecklist: [
    "Sei nomear os três perfis de cliente atendidos pela Atlas.",
    "Consigo explicar a dor principal de cada perfil.",
    "Sei relacionar cada perfil a um exemplo de resultado (case).",
  ],
  mindMap: {
    root: "Clientes",
    branches: [
      { label: "Transportadora", items: ["Cumprir apólice", "Reduzir prejuízo com sinistro"] },
      { label: "Embarcador", items: ["Visibilidade da carga", "Custo total da operação"] },
      { label: "Operador logístico", items: ["Visão operacional", "Visão executiva"] },
      { label: "Cases", items: ["R$ 95M economizados (combustível)", "-26% tempo em fazendas (suco)"] },
    ],
  },
  scenario:
    "Na mesma manhã, você atende uma transportadora preocupada com o custo de um sinistro recente e, depois, um embarcador perguntando sobre tempo parado em fazendas. Dores completamente diferentes — como isso muda sua resposta em cada ligação?",
  diagram: {
    title: "Perfis de cliente atendidos pela Atlas",
    chart: "graph LR\n  A[Transportadora] --> D[Atlas]\n  B[Embarcador] --> D\n  C[Operador logistico] --> D",
  },
};
