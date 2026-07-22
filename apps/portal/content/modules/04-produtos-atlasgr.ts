import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("04-produtos-atlasgr")!;

export const module04: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 3 — Gerenciamento de Risco (PGR, apólice, CIA)",
    "Módulo 5 — Software Logístico (Atlas Connect)",
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
      id: "quatro-pilares",
      title: "Os quatro pilares do portfólio",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A ATLASGR entrega muito mais do que \"rastrear um caminhão\". O portfólio é organizado em quatro pilares que se complementam: quem vai dirigir (",
              { term: "perfil-securitario" },
              "), o que fazer se algo sair do combinado (",
              { term: "gr" },
              "), como a operação enxerga tudo isso em tempo real (",
              { term: "connect" },
              ") e o que os números da operação revelam depois (Analytics).",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Como os quatro pilares aparecem na linha do tempo de uma viagem",
          items: [
            { label: "Antes da viagem", text: "Atlas Profile valida o motorista e o veículo (documentação, antecedentes, biometria)." },
            { label: "Durante a viagem", text: "Atlas Connect acompanha a Torre de Controle e Atlas GR trata qualquer alerta conforme o PGR." },
            { label: "Se algo sai do combinado", text: "A CIA, dentro do pilar GR, decide sobre acionamento de pronta resposta ou polícia." },
            { label: "Depois da viagem", text: "Atlas Analytics consolida os indicadores da operação para a gestão do cliente." },
          ],
        },
      ],
    },
    {
      id: "atlas-profile",
      title: "Atlas Profile — Background Check",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Resolve o \"custo invisível\" da contratação: motoristas ou parceiros com pendências documentais ou histórico de risco que só aparecem depois de um problema grave. O Atlas Profile cruza dados documentais, processos e biometria (",
              { term: "faceid" },
              ") para aprovar — ou barrar — um cadastro antes da viagem começar.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Por que isso é tratado como prioridade",
          text: [
            "Uma contratação irregular não tratada no Profile pode se transformar, semanas depois, em um sinistro grave — ou pior, em um acidente. É por isso que o time de ",
            { term: "perfil-securitario" },
            " trata pendências como \"Requer Atenção\" antes de liberar a operação.",
          ],
        },
      ],
    },
    {
      id: "atlas-gr",
      title: "Atlas GR — Aderência à apólice e CIA",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "É o núcleo histórico da empresa: o pilar que garante que a operação segue o que foi combinado na apólice e no ",
              { term: "pgr" },
              ", e que qualquer desvio é tratado pela ",
              { term: "cia" },
              " com o protocolo correto — do primeiro alerta ao relatório final de sinistro.",
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
          type: "text",
          paragraphs: [
            [
              "O ",
              { term: "connect" },
              " é a Torre de Controle: onde a operação acontece em tempo real, evento a evento. O Atlas Analytics olha para trás — transforma o histórico de eventos, alertas e ",
              { term: "sla" },
              " em painéis executivos: mapa de risco por região, ranking de ofensores de safety, tempo de permanência em alvos.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Connect x Analytics",
          left: {
            label: "Atlas Connect",
            points: ["Tempo real", "Foco operacional (o que fazer agora)", "Usado por Operadores e CIA"],
          },
          right: {
            label: "Atlas Analytics",
            points: ["Consolidado / histórico", "Foco executivo (o que aprender e decidir)", "Usado por gestão do cliente e liderança Atlas"],
          },
        },
        {
          type: "case",
          title: "O impacto real dos quatro pilares combinados",
          text:
            "Clientes que combinam os quatro pilares relatam resultados como R$ 95M economizados em perdas (embarcador de combustível) e -26% no tempo de permanência em fazendas (embarcador de suco) — porque a decisão deixa de ser reativa (\"o que aconteceu?\") e passa a ser preventiva (\"o que está prestes a acontecer?\").",
          source: "Cases de cliente apresentados nos showcases de produto do portal",
        },
      ],
    },
  ],
  summary: [
    "O portfólio ATLASGR tem quatro pilares: Profile (quem dirige), GR (o que fazer se sair do combinado), Connect (tempo real) e Analytics (histórico e indicadores).",
    "Atlas Profile reduz o custo invisível da contratação irregular, validando documentação, antecedentes e biometria antes da viagem.",
    "Atlas GR é o núcleo histórico: garante aderência ao PGR e à apólice, com a CIA tratando qualquer desvio.",
    "Atlas Connect é operacional e em tempo real; Atlas Analytics é executivo e retrospectivo.",
    "Os quatro pilares combinados transformam a operação de reativa em preventiva.",
  ],
  finalChecklist: [
    "Sei nomear os quatro pilares do portfólio ATLASGR.",
    "Consigo explicar em uma frase o que cada pilar resolve.",
    "Sei em qual pilar mencionar diante de uma dor específica do cliente (ex.: contratação, sinistro, visibilidade, indicadores).",
  ],
  mindMap: {
    root: "Produtos ATLASGR",
    branches: [
      { label: "Atlas Profile", items: ["Background check", "FaceID", "Perfil Securitário"] },
      { label: "Atlas GR", items: ["PGR", "Apólice", "CIA"] },
      { label: "Atlas Connect", items: ["Torre de Controle", "Tempo real", "Checklist"] },
      { label: "Atlas Analytics", items: ["Mapa de risco", "Ranking de ofensores", "SLA em alvos"] },
    ],
  },
};
