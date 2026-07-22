import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("10-termos-tecnicos")!;

export const module10: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Glossário consolidado do portal (content/glossary.ts)",
    "Módulos 1, 3 e 5 — primeira aparição da maioria dos termos operacionais",
  ],
  objectives: [
    "Consolidar os termos técnicos já vistos nos módulos anteriores em quatro categorias.",
    "Usar o Glossário do portal como referência rápida durante o estudo dos demais módulos.",
    "Reconhecer siglas de mercado (TMS, ERP, KPI, SLA) e siglas internas da Atlas (CIA, PGR, SM) sem confundi-las.",
  ],
  sections: [
    {
      id: "por-que-um-hub",
      title: "Por que este módulo existe",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Cada módulo da trilha introduz termos técnicos no contexto em que eles aparecem — o que é ótimo para entender o significado, mas difícil para lembrar todos de uma vez. Este módulo funciona como um hub de revisão: reúne os termos já vistos em quatro categorias e aponta para o ",
              "Glossário",
              " do portal, disponível a qualquer momento pelo menu principal.",
            ],
          ],
        },
      ],
    },
    {
      id: "termos-de-risco-e-seguro",
      title: "Termos de risco e seguro",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Do universo de gerenciamento de risco e seguro: ",
              { term: "pgr" },
              ", ",
              { term: "sinistro" },
              ", ",
              { term: "sublimite" },
              " e ",
              { term: "rcf-dc" },
              " — todos vistos em detalhe no Módulo 3.",
            ],
          ],
        },
      ],
    },
    {
      id: "termos-operacionais",
      title: "Termos operacionais da Central",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Do dia a dia da Central: ",
              { term: "connect" },
              ", ",
              { term: "torre-de-controle" },
              ", ",
              { term: "sm" },
              ", ",
              { term: "checklist" },
              ", ",
              { term: "sensores-atuadores" },
              ", ",
              { term: "botao-de-panico" },
              ", ",
              { term: "macro" },
              ", ",
              { term: "malicia" },
              " e ",
              { term: "cia" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "termos-de-mercado",
      title: "Termos de mercado e tecnologia",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Termos de uso mais amplo no mercado de logística e tecnologia: ",
              { term: "tms" },
              ", ",
              { term: "erp" },
              ", ",
              { term: "api" },
              ", ",
              { term: "eta" },
              ", ",
              { term: "kpi" },
              ", ",
              { term: "sla" },
              " e ",
              { term: "geofencing" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "termos-regulatorios",
      title: "Termos regulatórios e institucionais",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Órgãos e normas citados ao longo da trilha: ",
              { term: "antt" },
              ", ",
              { term: "cnt" },
              ", ",
              { term: "susep" },
              ", ",
              { term: "lgpd" },
              " e ",
              { term: "iso-31000" },
              ".",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Onde encontro a definição completa de cada termo?", a: "No Glossário do portal (menu principal), com busca e explicação detalhada de cada um." },
            { q: "Por que algumas siglas são internas da Atlas e outras são de mercado?", a: "Siglas como PGR, SM e CIA são específicas da forma como a Atlas organiza seu trabalho; siglas como TMS, ERP, KPI e SLA são usadas amplamente no mercado de logística e gestão." },
          ],
        },
      ],
    },
  ],
  summary: [
    "Este módulo reúne os termos técnicos já vistos, organizados em 4 categorias: risco/seguro, operação da Central, mercado/tecnologia e regulatório.",
    "O Glossário do portal é a referência rápida para consultar qualquer termo a qualquer momento.",
    "Siglas internas da Atlas (PGR, SM, CIA) não devem ser confundidas com siglas de mercado (TMS, ERP, KPI, SLA).",
  ],
  finalChecklist: [
    "Sei em qual categoria (risco/seguro, operação, mercado, regulatório) cada termo técnico se encaixa.",
    "Sei onde consultar o Glossário do portal a qualquer momento.",
    "Não confundo mais siglas internas da Atlas com siglas de mercado.",
  ],
  mindMap: {
    root: "Termos Técnicos",
    branches: [
      { label: "Risco e seguro", items: ["PGR", "Sinistro", "Sublimite", "RCF-DC"] },
      { label: "Operação da Central", items: ["Connect", "Torre de Controle", "SM", "Checklist", "CIA"] },
      { label: "Mercado e tecnologia", items: ["TMS", "ERP", "API", "ETA", "KPI", "SLA"] },
      { label: "Regulatório", items: ["ANTT", "CNT", "SUSEP", "LGPD", "ISO 31000"] },
    ],
  },
  scenario:
    "Um colega novo, no segundo dia de operação, ouve um supervisor falar 'a SM tá com nível 6 e o PGR já autorizou a Pronta' — e não entende metade da frase. Quantos desses termos você consegue traduzir sem abrir o Glossário?",
  diagram: {
    title: "Categorias de termos técnicos",
    chart: "graph TD\n  A[Termos tecnicos] --> B[Risco e seguro]\n  A --> C[Operacao da Central]\n  A --> D[Mercado e tecnologia]\n  A --> E[Regulatorio]",
  },
};
