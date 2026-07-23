import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("03-gerenciamento-risco")!;

export const module03: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Apólice de Seguro de Transporte e RCTR-C",
    "Manual de Estruturação de PGR",
    "Protocolos de CIA - Central de Inteligência Atlas",
  ],
  objectives: [
    "Definir o que é Gerenciamento de Risco, Apólice e PGR.",
    "Entender a diferença jurídica e operacional entre Roubo, Furto, Sinistro e Avaria.",
    "Descrever o papel vital da CIA em eventos críticos.",
    "Entender a estrutura básica de um PGR e como ele dita o comportamento da Torre de Controle.",
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
              "Este é o núcleo da nossa existência. O Gerenciamento de Risco (GR) é o que fazemos. Aqui você aprenderá as regras do jogo: como seguradoras ditam normas, como o PGR as traduz, e como a nossa CIA executa a proteção final.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Intermediário",
            "Pré-requisitos: Módulo 01 e Módulo 02",
            "Tempo estimado: 55 minutos",
            "Competências desenvolvidas: Análise de Risco, Compreensão Jurídica Básica, Gestão de Crises",
            "Gamificação: +800 XP, Badge 'Guardião da Carga', Missão 'Leitor de PGR'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Desafio de Aprendizagem",
          text: [
            "O termo 'PGR' vai aparecer dezenas de vezes. Toda vez que lê-lo, traduza na sua mente para: 'O Livro de Regras do Jogo daquele caminhão específico'.",
          ],
        },
      ],
    },
    {
      id: "apolice-e-pgr",
      title: "Apólice e PGR: As Regras do Jogo",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A transportadora compra um seguro (a Apólice). Para esse seguro ter validade, a seguradora exige que a transportadora siga um conjunto estrito de regras de segurança. Esse manual de regras é o ",
              { term: "pgr" },
              " (Plano de Gerenciamento de Risco).",
            ],
            [
              "O papel da AtlasGR não é ser a seguradora, e sim ser a auditora e executora em tempo real. Nós usamos a tecnologia e nossos operadores para garantir que o caminhão não quebre o PGR.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Apólice x PGR",
          left: {
            label: "Apólice de Seguro",
            points: [
              "É o contrato comercial e financeiro.",
              "Diz QUANTO vai ser pago em caso de perda.",
              "Gerido pela Corretora/Seguradora.",
            ],
          },
          right: {
            label: "PGR (Plano de Gerenciamento de Risco)",
            points: [
              "É o manual tático e operacional.",
              "Diz O QUE TEM QUE SER FEITO para evitar a perda.",
              "Gerido pela AtlasGR.",
            ],
          },
        },
      ],
    },
    {
      id: "sinistros-e-tipos",
      title: "Quando o pior acontece: Sinistros",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Um ",
              { term: "sinistro" },
              " é a materialização do risco. É o momento em que o pior acontece. No mercado, existem terminologias muito estritas para isso.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Termos Técnicos Obrigatórios",
          items: [
            "Roubo: Subtração da carga mediante violência ou grave ameaça (ex: assalto armado).",
            "Furto: Subtração da carga sem violência (ex: carga levada enquanto o motorista dormia).",
            "Avaria: Dano físico à carga (ex: tombamento do caminhão quebrou os produtos).",
            "Perda de Sinal: O rastreador parou de comunicar (pode ser área de sombra ou uso de Jammer).",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A Importância Jurídica",
          text: [
            "Para a AtlasGR, usar a palavra certa nos relatórios muda tudo. Uma Apólice pode ter cobertura para Roubo mas não para Furto Simples. Nunca escreva 'Roubo' em um evento se não houver confirmação de violência; use termos neutros como 'ocorrência' ou 'suspeita' até a confirmação policial.",
          ],
        },
      ],
    },
    {
      id: "o-papel-da-cia",
      title: "A Central de Inteligência Atlas (CIA)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Quando a Torre de Controle (o operador padrão) detecta uma quebra de PGR gravíssima ou uma suspeita real de roubo, o evento sai do atendimento normal e é escalonado para a ",
              { term: "cia" },
              ".",
            ],
            [
              "A CIA é a nossa 'tropa de elite'. São especialistas treinados para falar com a polícia, acionar pronta resposta armada (se contratado), e iniciar a recuperação de carga.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Cronologia de um Escalonamento para a CIA",
          items: [
            { label: "Minuto 0", text: "Veículo de Alto Valor desvia da rota padrão e rastreador principal perde sinal." },
            { label: "Minuto 2", text: "Operador aciona bloqueio de combustível preventivo e liga no celular." },
            { label: "Minuto 5", text: "Celular desligado. Sem resposta de redundância. Operador aciona a CIA imediatamente." },
            { label: "Minuto 6", text: "CIA assume o alvo. Aciona 190. Libera equipe tática de Pronta Resposta." },
          ],
        },
      ],
    },
  ],
  summary: [
    "O GR foca em prevenção. A Apólice foca em compensação financeira.",
    "O PGR é o livro de regras que a AtlasGR precisa fazer cumprir.",
    "Roubo (violência) é diferente de furto (sem violência) - a precisão dos relatórios é vital.",
    "A CIA atua quando a prevenção falha ou há ameaça iminente; a Torre atua na prevenção diária.",
  ],
  finalChecklist: [
    "Diferencio Apólice de PGR sem problemas.",
    "Sei exatamente a diferença entre roubo, furto e avaria.",
    "Consigo explicar qual é o gatilho para chamar a CIA.",
    "Entendo que minha digitação nos relatórios tem impacto jurídico nas seguradoras.",
  ],
  mindMap: {
    root: "Gerenciamento de Risco",
    branches: [
      { label: "Regras", items: ["Apólice", "PGR", "Seguradora"] },
      { label: "Eventos Reais", items: ["Roubo (com violência)", "Furto (sem violência)", "Avaria (dano)", "Perda de Sinal"] },
      { label: "O Resgate", items: ["CIA", "Pronta Resposta", "Polícia", "Recuperação"] },
    ],
  },
  scenario:
    "Motorista avisa: 'Pararam do meu lado no posto enquanto eu estava na lanchonete e levaram duas caixas de trás do baú. Ninguém viu, nem eu.' Você reporta isso para a CIA como Roubo ou Furto? E por que?",
  diagram: {
    title: "O Ciclo da Proteção",
    chart: "graph TD\n  A[Seguradora exige PGR] --> B[AtlasGR cadastra regras]\n  B --> C[Torre de Controle Monitora]\n  C -- Regra Quebrada --> D{Gravidade}\n  D -- Leve --> E[Contato com Motorista]\n  D -- Grave/Sem Contato --> F[CIA/Pronta Resposta]",
  },
};
