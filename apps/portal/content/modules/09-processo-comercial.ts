import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("09-processo-comercial")!;

export const module09: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 8 — Clientes (perfis de cliente atendidos)",
    "Módulo 1 — Estrutura organizacional (área Comercial)",
    "Playbook Comercial AtlasGR 2026",
  ],
  objectives: [
    "Explicar o conceito de ICP (Ideal Customer Profile) e Persona.",
    "Reconhecer as dores e gatilhos que levam um cliente a buscar a AtlasGR.",
    "Identificar e contornar as objeções mais comuns com argumentação de valor.",
    "Compreender a jornada comercial desde o primeiro contato até o fechamento (CRM).",
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
              "Vender gerenciamento de risco não é vender software de prateleira; é vender uma mudança estrutural (e às vezes dolorosa) na empresa do cliente. Este módulo detalha a engenharia do nosso processo de vendas.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Avançado (Comercial)",
            "Pré-requisitos: Módulo 08",
            "Tempo estimado: 40 minutos",
            "Competências desenvolvidas: Vendas B2B Complexas, Contorno de Objeções, Uso de CRM",
            "Gamificação: +600 XP, Badge 'Closer', Conquista 'Funil Dominado'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "O Vendedor Silencioso",
          text: [
            "Lembre-se: todo colaborador, do operador ao time de TI, representa a marca. Um atendimento de qualidade da Torre de Controle é o melhor argumento de retenção comercial que existe.",
          ],
        },
      ],
    },
    {
      id: "icp-e-persona",
      title: "O Alvo: ICP e Persona",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O tempo do comercial é caro. Não podemos prospectar empresas que não precisam da Atlas. Para isso usamos o ",
              { term: "icp" },
              " (Ideal Customer Profile - Perfil de Cliente Ideal).",
            ],
          ],
        },
        {
          type: "comparison",
          title: "O Alvo Certo",
          left: {
            label: "Fora do ICP (Não focar)",
            points: ["Frota minúscula (1-2 caminhões).", "Cargas de baixo risco e zero exigência de seguradora.", "Sem orçamento para tecnologia."],
          },
          right: {
            label: "Dentro do ICP (Focar)",
            points: ["Frotas médias e grandes (+50 caminhões).", "Alto volume de perdas recentes ou exigência forte de PGR.", "Operam com alto valor agregado."],
          },
        },
      ],
    },
    {
      id: "dores-e-gatilhos",
      title: "Gatilhos de Compra",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Ninguém acorda e pensa 'Vou contratar um GR hoje'. O cliente vem até nós por causa de um 'Gatilho'.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Gatilhos Clássicos",
          items: [
            "Gatilho do Medo: Sofreram um roubo milionário ontem e a diretoria exigiu mudança imediata.",
            "Gatilho Contratual: A seguradora se recusou a renovar a apólice sem um GR homologado.",
            "Gatilho de Expansão: Ganharam um grande embarcador (como a Samsung), que exige tecnologia que eles não têm.",
          ],
        },
      ],
    },
    {
      id: "objecoes-classicas",
      title: "Contornando Objeções",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "Objeção: 'Já tenho rastreador, pra que pagar a Atlas?'", a: "Resposta: O rastreador é só o ferro e o plástico. Ele diz onde o caminhão está. A Atlas diz o que fazer quando ele está onde não deveria. Rastreador não liga para a polícia, a Atlas sim." },
            { q: "Objeção: 'O serviço de vocês é mais caro que o concorrente X.'", a: "Resposta: 'Quanto custou o seu último roubo?' Nós não vendemos software, vendemos uma Central 24/7 com CIA especializada e infraestrutura redundante. O barato na logística sai pelo preço de uma carreta roubada." },
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "O Diferencial Matador",
          text: [
            "Concorrentes vendem software OR pessoas. A AtlasGR vende Processo (PGR) + Pessoas (CIA) + Tecnologia (Connect). Essa tríade é nosso fosso competitivo.",
          ],
        },
      ],
    },
    {
      id: "jornada-no-crm",
      title: "O Funil de Vendas (CRM)",
      blocks: [
        {
          type: "timeline",
          title: "O Ciclo B2B",
          items: [
            { label: "1. Prospecção (SDR)", text: "Mapeamento do ICP e primeira ligação (Frio)." },
            { label: "2. Qualificação", text: "Entender se a dor bate com os gatilhos e se há orçamento." },
            { label: "3. Demonstração (Closer)", text: "Apresentação técnica do Connect e defesa de valor." },
            { label: "4. Negociação e Fechamento", text: "Assinatura do contrato e passagem de bastão para Implantação." },
          ],
        },
      ],
    },
  ],
  summary: [
    "ICP (Perfil de Cliente Ideal) evita que o Comercial gaste tempo com empresas que não extrairão valor da Atlas.",
    "O cliente compra quando é forçado por um gatilho (roubo, seguradora, novo contrato).",
    "A maior objeção ('já tenho rastreador') é quebrada separando 'equipamento' de 'inteligência e pronta resposta'.",
    "O ciclo de vendas B2B exige uso rigoroso do CRM, da Prospecção ao Fechamento.",
  ],
  finalChecklist: [
    "Sei descrever o ICP da AtlasGR.",
    "Identifico os 3 gatilhos principais que geram vendas.",
    "Consigo rebater a objeção de preço usando o argumento do Custo Oculto/Roubo.",
    "Compreendo as fases do funil no CRM.",
  ],
  mindMap: {
    root: "Comercial B2B",
    branches: [
      { label: "Alvo", items: ["ICP", "Persona", "Fit Comercial"] },
      { label: "Gatilhos", items: ["Roubo", "Seguradora", "Novo Embarcador"] },
      { label: "Objeções", items: ["Preço", "Já tem Rastreador", "Foco no Valor"] },
      { label: "Processo", items: ["CRM", "SDR", "Closer", "Implantação"] },
    ],
  },
  scenario:
    "Role Play: 'Eu ligo para vocês se eu perder o caminhão, não preciso de monitoramento constante'. Responda a essa objeção focando na prevenção exigida pela Apólice.",
  diagram: {
    title: "Funil Comercial",
    chart: "graph TD\n  A[Leads] --> B[SDR Qualifica]\n  B --> C[Closer Demonstra]\n  C --> D[Contrato]\n  D --> E[Implantação CS]",
  },
};
