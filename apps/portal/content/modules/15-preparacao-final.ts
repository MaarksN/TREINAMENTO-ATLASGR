import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("15-preparacao-final")!;

export const module15: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulos 1 a 14 — revisão consolidada de toda a trilha",
  ],
  objectives: [
    "Revisar, em uma visão única, os pontos-chave de todos os módulos da trilha.",
    "Identificar lacunas de conhecimento antes de realizar a Prova Final.",
    "Reconhecer a ligação entre os quatro pilares do portfólio e o dia a dia da Central.",
  ],
  sections: [
    {
      id: "revisao-por-bloco",
      title: "Revisão por bloco de conteúdo",
      blocks: [
        {
          type: "text",
          heading: "Bloco 1 — Empresa e mercado (Módulos 1, 2, 8, 9)",
          paragraphs: [
            [
              "A ATLASGR nasceu em 2004 para tirar operações do modo reativo e trazer governança ao gerenciamento de risco. Atua entre transportadoras e embarcadores, cada um com dores diferentes, e o processo comercial conecta essas dores aos quatro pilares do portfólio.",
            ],
          ],
        },
        {
          type: "text",
          heading: "Bloco 2 — Gerenciamento de risco e produtos (Módulos 3, 4, 6)",
          paragraphs: [
            [
              "O PGR traduz o gerenciamento de risco em regras operacionais concretas. O portfólio se organiza em quatro pilares: Atlas Profile (quem dirige), Atlas GR (aderência à apólice e CIA), Atlas Connect (tempo real) e Atlas Analytics (indicadores e tendência).",
            ],
          ],
        },
        {
          type: "text",
          heading: "Bloco 3 — Tecnologia e operação (Módulos 5, 7, 11, 13)",
          paragraphs: [
            [
              "O Atlas Connect centraliza o fluxo de trabalho da Central e integra com diferentes tecnologias de rastreamento. A rotina operacional segue o princípio de gestão por exceção, e a tendência do setor é migrar de reativo para preditivo.",
            ],
          ],
        },
        {
          type: "text",
          heading: "Bloco 4 — Governança e casos (Módulos 10, 12, 14)",
          paragraphs: [
            [
              "Termos técnicos, compliance e LGPD sustentam a operação com segurança jurídica, enquanto os casos reais documentam o impacto concreto de tudo isso: economia de perdas, redução de tempo parado e aderência à apólice.",
            ],
          ],
        },
      ],
    },
    {
      id: "mapa-mental-geral",
      title: "Mapa mental geral da trilha",
      blocks: [
        {
          type: "timeline",
          title: "Do primeiro ao último módulo",
          items: [
            { label: "1 — Bem-vindo à ATLASGR", text: "História, propósito, valores e estrutura organizacional." },
            { label: "2 — Mercado de Logística", text: "Cadeia de suprimentos, tipos de carga, TMS/ERP." },
            { label: "3 — Gerenciamento de Risco", text: "PGR, apólice, sinistro, fluxo até a CIA." },
            { label: "4 — Produtos ATLASGR", text: "Profile, GR, Connect e Analytics." },
            { label: "5 — Software Logístico", text: "Atlas Connect na prática." },
            { label: "6 — Atlas Profile", text: "Background check, FaceID, compliance." },
            { label: "7 — Integrações", text: "Rastreadores, TMS, ERP, API." },
            { label: "8 — Clientes", text: "Transportadora, embarcador, operador logístico." },
            { label: "9 — Processo Comercial", text: "ICP, persona, dores, objeções." },
            { label: "10 — Termos Técnicos", text: "Consolidação do glossário." },
            { label: "11 — Operação", text: "Rotina da Central, alertas, SLA." },
            { label: "12 — Compliance", text: "LGPD, sigilo, boas práticas." },
            { label: "13 — Tecnologia", text: "De reativo a preditivo, Safety, Analytics." },
            { label: "14 — Casos Reais", text: "Resultados documentados e cenário ilustrativo." },
            { label: "15 — Preparação Final", text: "Você está aqui." },
          ],
        },
      ],
    },
    {
      id: "antes-da-prova",
      title: "Antes de fazer a Prova Final",
      blocks: [
        {
          type: "checklist",
          title: "Checklist de autoavaliação",
          items: [
            "Consigo explicar o que é PGR, apólice, sinistro e sublimite sem consultar o glossário.",
            "Sei nomear os quatro pilares do portfólio ATLASGR e o que cada um resolve.",
            "Sei descrever o fluxo de escalonamento de um alerta até a CIA.",
            "Reconheço as principais siglas de mercado (TMS, ERP, API, KPI, SLA) e internas da Atlas (SM, CIA, PGR).",
            "Entendo minha responsabilidade individual com compliance e LGPD.",
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Pronto para a Prova Final",
          text: [
            "A Prova Final reúne perguntas de todos os módulos com conteúdo completo, embaralhadas e com tempo limite. A aprovação exige 70% de acerto — revise o glossário e os resumos de cada módulo antes de começar.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A trilha cobre quatro blocos: empresa e mercado, gerenciamento de risco e produtos, tecnologia e operação, e governança e casos.",
    "O fio condutor de toda a trilha é: PGR define a regra, Connect e Profile aplicam no dia a dia, CIA trata a exceção, Analytics mede o resultado.",
    "Antes da Prova Final, revise o glossário e os resumos de cada módulo já concluído.",
  ],
  finalChecklist: [
    "Revisei o resumo de todos os módulos com conteúdo completo.",
    "Sei explicar o fluxo PGR → Connect/Profile → CIA → Analytics de ponta a ponta.",
    "Estou pronto para iniciar a Prova Final.",
  ],
  mindMap: {
    root: "Preparação Final",
    branches: [
      { label: "Empresa e mercado", items: ["Módulo 1", "Módulo 2", "Módulo 8", "Módulo 9"] },
      { label: "Risco e produtos", items: ["Módulo 3", "Módulo 4", "Módulo 6"] },
      { label: "Tecnologia e operação", items: ["Módulo 5", "Módulo 7", "Módulo 11", "Módulo 13"] },
      { label: "Governança e casos", items: ["Módulo 10", "Módulo 12", "Módulo 14"] },
    ],
  },
  scenario:
    "Faltam 10 minutos para a Prova Final abrir. Você revisou os 14 módulos anteriores, mas ainda não tem certeza se consegue explicar o fluxo completo, do PGR ao Analytics, sem parar para pensar. O que vale mais a pena revisar agora, nos minutos que restam?",
  diagram: {
    title: "O fio condutor da trilha completa",
    chart: "graph LR\n  A[PGR define a regra] --> B[Connect / Profile aplicam]\n  B --> C[CIA trata a excecao]\n  C --> D[Analytics mede o resultado]",
  },
};
