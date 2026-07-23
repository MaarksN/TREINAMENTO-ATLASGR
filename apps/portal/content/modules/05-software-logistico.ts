import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("05-software-logistico")!;

export const module05: ModuleContentFull = {
  ...meta,
  sources: [
    "Treinamento Operacional 2022 — Atlas Connect",
    "Manuais de Navegação do Sistema Atlas Connect",
  ],
  objectives: [
    "Reconhecer as telas principais do Atlas Connect e suas funções.",
    "Explicar o fluxo de criação de uma viagem no sistema.",
    "Entender como os alertas são priorizados na tela do operador.",
    "Compreender a integração do Connect com rastreadores físicos.",
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
              "O Atlas Connect é o seu 'cockpit'. É através desta tela que milhares de veículos são monitorados simultaneamente. Este módulo fará você entender a lógica por trás da interface do nosso sistema.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Intermediário (Sistema)",
            "Pré-requisitos: Módulo 04",
            "Tempo estimado: 50 minutos",
            "Competências desenvolvidas: Operação de Software, Gestão Visual de Alertas",
            "Gamificação: +800 XP, Badge 'Piloto de Connect'",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Ambiente de Simulação",
          text: [
            "Não se preocupe em decorar botões. Foque em entender o 'Fluxo da Informação'. Ao final do treinamento, você passará por um simulador hands-on da tela de alertas.",
          ],
        },
      ],
    },
    {
      id: "a-tela-principal",
      title: "O Cockpit do Operador: Grade e Alertas",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A tela principal do ",
              { term: "connect" },
              " é dividida em Grade (a lista de todos os veículos em viagem) e a Fila de Alertas (os problemas que precisam de resolução imediata).",
            ],
            [
              "A regra número um da Torre de Controle é: a Fila de Alertas dita o seu trabalho. Você não fica 'olhando pontinhos no mapa', você trata os alertas que o sistema gera.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Grade x Alertas",
          left: {
            label: "Grade de Viagens",
            points: ["Mostra status geral.", "Usada para consultas passivas.", "Exibe o nível de bateria e ETA."],
          },
          right: {
            label: "Fila de Alertas",
            points: ["Exige ação imediata.", "Piscando e com alarme sonoro.", "Fila ordenada por prioridade do PGR."],
          },
        },
      ],
    },
    {
      id: "criacao-de-viagem",
      title: "A Criação da Viagem (O SM)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Uma viagem no Connect é chamada de SM (Solicitação de Monitoramento). Ela pode ser criada manualmente pelo operador ou, preferencialmente, ser injetada automaticamente via ",
              { term: "api" },
              " pelo sistema do cliente.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "O Nascimento de um SM",
          items: [
            { label: "1. Veículo e Motorista", text: "O sistema valida se ambos estão aprovados no Atlas Profile." },
            { label: "2. Rota e PGR", text: "O sistema atrela a viagem ao PGR correto (ex: exige escolta?)." },
            { label: "3. Comunicação", text: "O Connect testa ('pinga') o rastreador físico do caminhão para ver se ele responde." },
            { label: "4. Início de Viagem", text: "O SM é ativado. A partir daqui, qualquer desvio gera um alerta." },
          ],
        },
      ],
    },
    {
      id: "niveis-de-alerta",
      title: "Sistemática de Alertas e Níveis",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Atlas Connect classifica os eventos em 7 Níveis de Prioridade. Um Alerta de Nível 1 (Desvio de Rota em Carga de Alto Valor) vai pular na frente de um Alerta de Nível 6 (Atraso Logístico).",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Exemplos de Níveis",
          items: [
            "Nível 1 (Crítico): Botão de Pânico acionado. (Ação Imediata: Ligar CIA).",
            "Nível 2 (Alto): Perda de sinal por mais de 10 minutos em área de risco.",
            "Nível 4 (Médio): Desvio de rota simples.",
            "Nível 7 (Baixo): Bateria do rastreador isca abaixo de 20%.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "O Erro Fatal",
          text: [
            "O maior erro que um operador pode cometer é tratar um Alerta Nível 4 antes de um Nível 1 só porque o Nível 4 'é mais fácil de resolver'. O sistema já ordena o risco para você. Confie na máquina.",
          ],
        },
      ],
    },
  ],
  summary: [
    "O Atlas Connect separa o monitoramento em 'Grade' (passivo) e 'Alertas' (ativo).",
    "A criação de um SM (Solicitação de Monitoramento) valida motorista, rota e tecnologia antes da partida.",
    "Alertas são priorizados em 7 níveis, do crítico (Pânico) ao logístico (Bateria).",
    "O operador não 'caça problemas no mapa', ele responde à inteligência preditiva do sistema.",
  ],
  finalChecklist: [
    "Entendo a diferença entre a Grade de Viagens e a Fila de Alertas.",
    "Sei o que é um SM e os 4 passos de criação.",
    "Compreendo a lógica dos 7 Níveis de Prioridade.",
    "Entendo por que devo sempre tratar o alerta que está no topo da fila.",
  ],
  mindMap: {
    root: "Atlas Connect",
    branches: [
      { label: "Interface", items: ["Grade (Passiva)", "Fila de Alertas (Ativa)", "Mapa Integrado"] },
      { label: "SM (Viagem)", items: ["Validação Profile", "Teste Rastreador", "Ativação PGR"] },
      { label: "Priorização", items: ["7 Níveis", "Pânico (N1)", "Logístico (N7)"] },
    ],
  },
  scenario:
    "A tela pisca vermelho. Você tem dois alertas: (A) Botão de pânico acionado [Nível 1] e (B) Perda de sinal há 30 min [Nível 2]. O (B) chegou 5 minutos antes. Qual você atende primeiro e por quê?",
  diagram: {
    title: "Fluxo de Alerta",
    chart: "graph LR\n  A[Rastreador] -->|Pânico| B[Motor de Regras Connect]\n  B -->|Classifica Nível 1| C[Topo da Fila do Operador]\n  C -->|Operador Clica| D[Protocolo de Atendimento]",
  },
};
