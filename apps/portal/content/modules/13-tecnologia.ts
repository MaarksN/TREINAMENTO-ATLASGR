import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("13-tecnologia")!;

export const module13: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Showcase de produto Atlas Analytics (/produtos/analytics)",
    "Visão Estratégica AtlasGR 2026",
  ],
  objectives: [
    "Compreender a virada do modelo Reativo para o modelo Preditivo na logística.",
    "Explicar como sensores embarcados (ex: Fadiga) alimentam a nossa Inteligência Artificial.",
    "Reconhecer que a IA e os dados não substituem os operadores, mas os tornam taticamente superiores.",
    "Descrever o valor do Atlas Analytics para a diretoria dos nossos clientes.",
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
              "Historicamente, o gerenciamento de risco foi baseado na pergunta 'O que aconteceu?'. Hoje, a tecnologia que construímos na AtlasGR responde à pergunta 'O que vai acontecer nas próximas 2 horas?'. Este módulo foca no futuro.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Intermediário (Tecnologia/Dados)",
            "Pré-requisitos: Módulo 04 e Módulo 05",
            "Tempo estimado: 35 minutos",
            "Competências desenvolvidas: Pensamento Analítico, Fluência em IA Aplicada",
            "Gamificação: +500 XP, Badge 'Mente Preditiva'",
          ],
        },
      ],
    },
    {
      id: "reativo-vs-preditivo",
      title: "A Virada de Chave: Do Reativo ao Preditivo",
      blocks: [
        {
          type: "comparison",
          title: "Os Dois Mundos",
          left: {
            label: "O Risco Reativo (Passado)",
            points: ["O caminhão é roubado.", "O cliente liga para perguntar o que houve.", "Envia-se um relatório contando a tragédia e acionando o seguro."],
          },
          right: {
            label: "O Risco Preditivo (AtlasGR Hoje)",
            points: ["A IA detecta que o motorista entrou em uma região onde houve 5 furtos esta semana e parou o veículo de forma anômala.", "A Torre bloqueia o baú remotamente.", "O cliente é avisado da prevenção bem sucedida."],
          },
        },
      ],
    },
    {
      id: "telemetria-avancada",
      title: "Telemetria e Sensores de Safety (Segurança)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Antigamente, risco era só 'roubo'. Hoje, risco é 'acidente'. Um acidente na serra destrói a carga, o caminhão e tira vidas. É aí que entram as câmeras com Inteligência Artificial embarcada (Telemetria Avançada).",
            ],
          ],
        },
        {
          type: "timeline",
          title: "O Ciclo do Sensor de Fadiga",
          items: [
            { label: "Cabine", text: "A câmera detecta o motorista bocejando três vezes ou fechando o olho por 2 segundos." },
            { label: "Bordo", text: "O sensor apita alto dentro da cabine e vibra o banco (alerta local)." },
            { label: "Connect", text: "O evento de Fadiga sobe para a tela da AtlasGR." },
            { label: "Torre", text: "O Operador liga para o motorista ordenando a parada na próxima base segura para descanso mandatório." },
          ],
        },
      ],
    },
    {
      id: "o-poder-dos-dados",
      title: "Atlas Analytics e a Visão do CEO",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Torre de Controle apaga o incêndio de hoje. O ",
              { term: "analytics" },
              " descobre por que a casa está pegando fogo todos os dias.",
            ],
            [
              "Nós pegamos 1 milhão de pontos de GPS, 50 mil eventos de fadiga, 10 mil perdas de sinal, cruzamos tudo e entregamos um painel visual para o CEO do cliente.",
            ],
          ],
        },
        {
          type: "case",
          title: "A Descoberta de Padrões",
          text: "O Analytics mostrou que 80% das avarias de carga de uma transportadora aconteciam com 5 motoristas específicos, num trecho de serra, de madrugada. Solução: Trocar a rota ou reciclar esses 5 motoristas. Isso é impossível de ver apenas olhando a Grade diária.",
          source: "Showcase Atlas Analytics",
        },
      ],
    },
    {
      id: "ia-e-humanos",
      title: "A Máquina Substitui o Operador?",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A resposta é NÃO. A inteligência artificial não substitui o julgamento humano crítico (a malícia) de um operador experiente ou da CIA. A tecnologia filtra o 'lixo' (falsos positivos) para que os humanos foquem apenas nas anomalias complexas que requerem decisão criativa e negociação.",
            ],
          ],
        },
      ],
    },
  ],
  summary: [
    "A evolução do negócio saiu de avisar sobre roubos (Reativo) para antecipar acidentes e furtos (Preditivo).",
    "Sensores de fadiga analisam o comportamento humano em tempo real usando câmeras de bordo.",
    "O Atlas Analytics converte milhões de eventos caóticos em indicadores visuais para a gestão do cliente.",
    "Tecnologia não demite pessoas boas; ela corta o trabalho robótico e eleva o nível estratégico da equipe humana.",
  ],
  finalChecklist: [
    "Sei a diferença entre modelo reativo e modelo preditivo.",
    "Posso explicar como um sensor de fadiga funciona.",
    "Entendo que o Atlas Analytics foca no histórico/tendência, não no despacho em tempo real.",
  ],
  mindMap: {
    root: "Tecnologia e Dados",
    branches: [
      { label: "Visão Preditiva", items: ["Antecipação", "IA", "Padrões Históricos"] },
      { label: "Safety", items: ["Fadiga", "Câmeras Bordo", "Prevenção de Acidentes"] },
      { label: "Analytics", items: ["Visão Executiva", "Raio-X da Frota", "Indicadores de Diretoria"] },
    ],
  },
  scenario:
    "O cliente acha que 'pagar por sensores de fadiga é caro'. Como você argumenta, usando a lógica preditiva e os custos (visíveis e invisíveis) de um tombamento de carreta com perda total na serra?",
  diagram: {
    title: "O Loop Preditivo",
    chart: "graph LR\n  A[Sensores no Veículo] -->|Gera Dados| B[IA Detecta Padrão]\n  B -->|Alerta Operador| C[Ação Preventiva]\n  C -->|Alimenta Banco| D[Atlas Analytics (Gráficos)]\n  D -->|Cliente Muda Rota| A",
  },
};
