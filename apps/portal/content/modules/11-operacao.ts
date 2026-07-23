import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("11-operacao")!;

export const module11: ModuleContentFull = {
  ...meta,
  sources: [
    "Apostila de Treinamento Inicial (v. 4.0) — Procedimentos Atlas GR",
    "Treinamento Connect — Níveis de prioridade de alerta",
    "Treinamento Operacional 2022 (SLA, Paradas, Erros)",
    "Manual de Check list Central",
  ],
  objectives: [
    "Descrever a rotina de execução na Torre de Controle de Monitoramento 24h.",
    "Diferenciar Monitoramento Ativo, Rastreador Passivo e atuação por Alertas.",
    "Aplicar o SLA real de tratativa: 10 minutos para iniciar, 45 minutos para resolver.",
    "Reconhecer os erros operacionais críticos que levam a quebra de confiança do cliente.",
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
              "A teoria acabou. Este módulo é a prática crua do que acontece na Central 24 horas (O Coração da AtlasGR). Se você vai atuar na Operação, estas são as regras de ouro do seu dia a dia.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Avançado (Operacional)",
            "Pré-requisitos: Módulo 03 e Módulo 05",
            "Tempo estimado: 45 minutos",
            "Competências desenvolvidas: Execução Sob Pressão, Multitarefas, Tomada de Decisão",
            "Gamificação: +1000 XP, Badge 'Operador Tático', Missão 'O Turno Perfeito'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Alerta de SLA",
          text: [
            "10 Minutos. Esse é o SLA limite para você iniciar a tratativa de um alerta que cai na sua tela. Passou disso, a segurança da carga está severamente comprometida.",
          ],
        },
      ],
    },
    {
      id: "monitoramento-vs-rastreamento",
      title: "O Paradigma Operacional",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Qualquer um pode comprar um ",
              { term: "tms" },
              " e rastrear um caminhão passivamente no mapa. A AtlasGR vende MONITORAMENTO. Isso significa atuação humana e sistêmica sobre exceções.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "A Diferença",
          left: {
            label: "Rastreamento",
            points: ["Saber ONDE o caminhão está.", "Olhar mapas passivamente.", "Só agir quando o cliente liga perguntando."],
          },
          right: {
            label: "Monitoramento Ativo (AtlasGR)",
            points: ["Saber O QUE ele está fazendo.", "Tratar alertas gerados pelo motor de regras.", "Agir preventivamente antes do cliente notar o erro."],
          },
        },
      ],
    },
    {
      id: "rotina-e-sla",
      title: "O Ciclo do Alerta e o Relógio",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Um evento piscou vermelho (Ex: Parada Indevida de Carreta de Alto Valor). O cronômetro começa a rodar. A sua ação define o sucesso.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "O SLA de Tratativa (A Regra de Ouro)",
          items: [
            { label: "0 a 10 minutos", text: "Você DEVE iniciar o atendimento (clicar no alerta e disparar primeira macro/ligação)." },
            { label: "10 a 30 minutos", text: "Fase de investigação. Contato com motorista via rádio, envio de comando de sirene, tentativa no celular." },
            { label: "Em até 45 minutos", text: "O alerta DEVE estar resolvido (Falso Positivo baixado, ou Escalonado para a CIA como Evento Crítico)." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Parada Eventual x Parada Longa",
          text: [
            "Não existe 'dar um pulinho no posto'. O PGR define paradas. Se a carreta parar onde não devia, aos 5 minutos o sistema alerta Parada Eventual. Passou de 15 minutos, vira Parada Longa (Nível Crítico).",
          ],
        },
      ],
    },
    {
      id: "erros-fatais",
      title: "Erros que Quebram a Confiança",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Na Torre de Controle, o descuido custa caro.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Qual o maior erro de comunicação?", a: "Desativar um alerta Nível 1 baseado APENAS na palavra do motorista por telefone sem exigir contra-senha de segurança. Ele pode estar sob ameaça no painel do caminhão." },
            { q: "O que é 'Enforcar o Alerta'?", a: "Deixar o alerta no seu nome por mais de 45 minutos sem resolução nem escalonamento, enquanto você vai tomar café. A carga fica vulnerável e a SLA do cliente é estourada." },
            { q: "Posso dar dica da senha para o motorista?", a: "NUNCA. Se ele esqueceu a senha de viagem/coação, ele deve fazer o recadastramento seguindo o processo. Dar dica anula a utilidade da senha anti-sequestro." },
          ],
        },
      ],
    },
  ],
  summary: [
    "Monitorar é agir sobre alertas; rastrear é apenas olhar o mapa.",
    "SLA de Trativa: Começar em menos de 10 min, resolver em até 45 min.",
    "Nunca encerre um alerta crítico sem validar contra-senhas; o motorista pode estar sob coação.",
    "Atrasar tratativas ('enforcar alertas') quebra o PGR do cliente e expõe a AtlasGR a multas ou processos em caso de roubo.",
  ],
  finalChecklist: [
    "Diferencio perfeitamente rastreamento (passivo) de monitoramento (ativo).",
    "Sei de cor os tempos de SLA: 10m inicial, 45m final.",
    "Conheço a regra da contra-senha para motoristas.",
  ],
  mindMap: {
    root: "Operação na Torre",
    branches: [
      { label: "Filosofia", items: ["Monitoramento Ativo", "Gestão por Alertas", "Velocidade"] },
      { label: "SLA", items: ["<10min Início", "<45min Fim", "Escalonamento"] },
      { label: "Segurança", items: ["Contra-senha", "Coação", "Bloqueios"] },
    ],
  },
  scenario:
    "Alerta: Parada Não Programada. Você liga para o motorista. A voz dele está trêmula, ele diz 'Parei para verificar o pneu'. Você pede a contra-senha. Ele diz 'Esqueci, cara, libera aí que tá tudo certo'. O que o protocolo manda você fazer imediatamente?",
  diagram: {
    title: "Escalonamento Rápido",
    chart: "graph TD\n  A[Alerta na Tela] --> B{Contato com Motorista}\n  B -- Responde com Senha --> C[Baixa Alerta]\n  B -- Sem Senha/Nervoso --> D[Bloqueio + CIA 190]\n  B -- Sem Sinal --> D",
  },
};
