import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("13-tecnologia")!;

export const module13: ModuleContentFull = {
  ...meta,
  sources: [
    "Visão Estratégica AtlasGR 2026",
    "Showcase de produto Atlas Analytics",
    "Manuais de Telemetria Avançada",
  ],
  objectives: [
    "Diferenciar de forma definitiva a logística Reativa da logística Preditiva.",
    "Compreender a revolução das câmeras embarcadas com IA (Sensores de Safety e Fadiga).",
    "Descrever como o Atlas Analytics entrega valor executivo e gera retenção.",
    "Entender que a IA não demite o bom operador, mas potencializa sua eficiência.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Fim do Achismo",
      blocks: [
        {
          type: "text",
          heading: "A Decisão Baseada em Dados",
          paragraphs: [
            [
              "Na década passada, a logística era gerida por intuição. O gerente de frota 'achava' que a rota X era ruim. Hoje, a AtlasGR transformou o gerenciamento de risco em uma ciência exata.",
            ],
            [
              "Através de algoritmos preditivos e Inteligência Artificial embarcada dentro dos caminhões (Telemetria), nós antecipamos o acidente antes que ele quebre a carga. Neste módulo, olhamos para o futuro das operações.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "O Conceito Chave",
          text: [
            "Preditivo significa 'dizer antes que aconteça'. O objetivo supremo da AtlasGR é que o botão de pânico nunca precise ser apertado.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-reativo-vs-preditivo",
      title: "Capítulo 1: A Era da Predição",
      blocks: [
        {
          type: "comparison",
          title: "Evolução do Mercado",
          left: {
            label: "O Passado (Reativo)",
            points: ["O acidente/roubo acontece.", "A empresa aciona o seguro depois do fato.", "Prejuízo inevitável, foco na indenização tardia."],
          },
          right: {
            label: "A AtlasGR (Preditivo)",
            points: ["A IA detecta anomalia no comportamento da viagem.", "O sistema bloqueia e atua preventivamente.", "Prejuízo evitado, foco na manutenção da operação."],
          },
        },
      ],
    },
    {
      id: "capitulo-2-safety",
      title: "Capítulo 2: Safety, Telemetria e Fadiga",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O maior inimigo da carga na serra não é o assaltante armado; é o sono. As câmeras de bordo equipadas com Inteligência Artificial analisam o rosto do motorista 30 quadros por segundo.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Como a IA atua na Cabine:",
          items: [
            "Fadiga: O algoritmo detecta padrões de piscada longa. O banco treme e a cabine apita, acordando o motorista, enquanto o Connect avisa a Torre.",
            "Distração: Uso de celular na direção ativa gravação e notificação gerencial imediata.",
            "Cercas Virtuais: O caminhão freia bruscamente 3 vezes no mesmo trecho; a IA mapeia a zona como área de neblina/perigo temporário.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-analytics",
      title: "Capítulo 3: O Cérebro do Negócio (Analytics)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Um evento de pneu furado é um problema do motorista. Mil eventos de pneu furado na mesma rodovia é um problema logístico estratégico. O ",
              { term: "analytics" },
              " é o que transforma o micro no macro.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "O Ciclo de Geração de Valor",
          items: [
            { label: "1. Captação", text: "O Connect gera milhares de eventos diários (Atrasos, Sensores, Bloqueios)." },
            { label: "2. Processamento", text: "O algoritmo de IA limpa o ruído e consolida tendências." },
            { label: "3. Entrega", text: "O CEO do Embarcador recebe um painel provando matematicamente quais rotas dão lucro e quais dão prejuízo oculto." },
            { label: "4. Ação", text: "A diretoria altera a logística de distribuição inteira da empresa baseada nos dados da AtlasGR." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: O Custo da Recusa Tecnológica",
      blocks: [
        {
          type: "case",
          title: "A Carreata Tombada",
          text: "Uma transportadora tradicional recusou o 'Adicional de Safety' (Câmeras de Fadiga) alegando ser um custo alto. Dois meses depois, em uma viagem de R$ 2.5 Milhões de peças automotivas, o motorista adormeceu. O caminhão deu perda total. A carga foi destruída. A seguradora demorou meses para indenizar a carga, mas o ativo (Caminhão) e os processos civis recaíram sobre o dono da frota. Se o sensor estivesse lá, a cabine vibraria 5 segundos antes do sono pesado. A recusa tecnológica saiu 500 vezes mais cara que a mensalidade do sistema de inteligência da AtlasGR.",
          source: "Case Interno de Argumentação Comercial",
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Fechamento",
      blocks: [
        {
          type: "checklist",
          title: "Reta Final",
          items: [
            "Revise as funcionalidades de dashboards na aba /produtos/analytics.",
            "Nosso penúltimo módulo (14) trará um laboratório final de casos reais que você resolverá usando toda a teoria vista até aqui.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A IA aplicada substitui a gestão de frota baseada em 'achismos' por certeza matemática.",
    "Câmeras de fadiga salvam vidas (e cargas) agindo antes do cérebro humano desligar (Safety).",
    "O Atlas Analytics é o produto de maior valor agregado da empresa, focando na C-Level (Diretores).",
    "Tecnologia e Operador não competem; a IA faz o trabalho braçal e o Operador toma a decisão de crise.",
  ],
  finalChecklist: [
    "Sei a diferença entre a logística reativa do passado e a preditiva da AtlasGR.",
    "Consigo explicar como um sensor de fadiga funciona na prática.",
    "Entendo que o Atlas Analytics é feito para descobrir tendências e gerar dashboards executivos.",
  ],
  mindMap: {
    root: "Tecnologia AtlasGR",
    branches: [
      { label: "A Mente", items: ["Preditivo", "IA Embarcada", "Automação"] },
      { label: "Safety (Cabine)", items: ["Sensor Fadiga", "Alerta Celular", "Vibração"] },
      { label: "Analytics (Diretoria)", items: ["Tendências", "Indicadores", "Foco no Custo Oculto"] },
    ],
  },
  scenario:
    "Cenário Prático: O motorista coloca um esparadrapo na lente da câmera de fadiga porque 'se sente vigiado'. O sistema Connect acusa 'Câmera Obstruída'. Qual o protocolo baseando-se no fato de que o PGR de Safety foi violado de propósito?",
  diagram: {
    title: "O Padrão Preditivo",
    chart: "graph LR\n  Caminhao[Sensores no Caminhão] --> IA[IA Identifica Anomalia]\n  IA --> Torre[Torre Bloqueia Preventivamente]\n  Torre --> DB[Banco de Dados]\n  DB --> Analytics[Analytics Gera Dashboards para o CEO]",
  },
};
