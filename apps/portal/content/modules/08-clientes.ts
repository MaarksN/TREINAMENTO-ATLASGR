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
    "Reconhecer os três principais perfis de cliente atendidos pela Atlas.",
    "Explicar como a dor de cada perfil muda o que a Atlas entrega e como argumentar.",
    "Relacionar cada perfil de cliente a exemplos reais de resultado operacional (cases).",
    "Compreender a dinâmica de poder entre Embarcador e Transportadora.",
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
              "Não existe um 'cliente padrão'. Quem liga para a Atlas pode ser o dono de uma transportadora buscando cumprir a apólice ou o diretor de um embarcador multinacional buscando dados táticos. Você precisa saber com quem está falando.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Intermediário (Negócios)",
            "Pré-requisitos: Módulo 02 e Módulo 04",
            "Tempo estimado: 30 minutos",
            "Competências desenvolvidas: Inteligência de Mercado, Empatia Comercial, Perfilamento",
            "Gamificação: +400 XP, Badge 'Analista de Perfis'",
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Dica de Ouro",
          text: [
            "A linguagem muda o jogo. Ao falar com Transportadoras, fale em 'Prejuízo Evitado' e 'Conformidade de Apólice'. Ao falar com Embarcadores, fale em 'SLA de Entrega', 'Visibilidade' e 'Eficiência'.",
          ],
        },
      ],
    },
    {
      id: "perfis-de-cliente",
      title: "Quem contrata a AtlasGR?",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Atlas atende três grandes perfis, cada um com uma dor principal muito específica.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "As Dores Diferentes",
          left: {
            label: "A Transportadora",
            points: [
              "Foco: Custos Diretos e Apólice.",
              "Dor: O seguro não vai pagar o roubo se o PGR não for cumprido.",
              "Precisa de: Atlas Profile para evitar motoristas ruins e Atlas GR para cumprir a regra.",
            ],
          },
          right: {
            label: "O Embarcador (Dono da Carga)",
            points: [
              "Foco: Prazo de Entrega e Custo Oculto.",
              "Dor: A transportadora terceirizada perdeu a carga ou atrasou a entrega.",
              "Precisa de: Atlas Connect para ver todos os terceirizados na mesma tela e Analytics para medir quem é melhor.",
            ],
          },
        },
        {
          type: "text",
          heading: "O Terceiro Jogador: Operador Logístico",
          paragraphs: [
            [
              "O operador logístico (como uma DHL ou Julio Simões) não é nem o dono da carga nem, muitas vezes, o dono do caminhão. Ele organiza o jogo. Para ele, a dor é a gestão gigantesca. Eles são os maiores consumidores do Atlas Analytics.",
            ],
          ],
        },
      ],
    },
    {
      id: "dores-reais",
      title: "As Dores Traduzidas em Números",
      blocks: [
        {
          type: "case",
          title: "Case Embarcador de Combustível (A Dor do Roubo)",
          text: "Um grande embarcador focado na distribuição de combustíveis sofria com desvios em rodovias remotas. A implantação do Atlas GR aliado a sensores de abertura de válvula impediu R$ 95 milhões em perdas em 2 anos.",
          source: "Arquivo Comercial AtlasGR",
        },
        {
          type: "case",
          title: "Case Embarcador de Suco (A Dor da Ineficiência)",
          text: "Neste caso, não havia roubo. A dor era o tempo. O cliente descobriu via Atlas Analytics que os caminhões ficavam dias parados nas fazendas de laranja aguardando carregamento. A Atlas reduziu o tempo de pátio em 26%.",
          source: "Arquivo Comercial AtlasGR",
        },
      ],
    },
  ],
  summary: [
    "Identificar se o cliente é Transportadora, Embarcador ou Operador muda a sua abordagem e linguagem.",
    "A Transportadora quer cumprir o seguro. O Embarcador quer gerir prazos e visão global.",
    "O mesmo portfólio de produtos Atlas resolve ambas as dores, se a argumentação for ajustada.",
    "Resultados práticos (Cases) são a melhor forma de tangibilizar o valor do nosso serviço.",
  ],
  finalChecklist: [
    "Diferencio Transportadora de Embarcador com base em dores operacionais.",
    "Entendo qual produto oferecer baseado na dor inicial do cliente.",
    "Consigo explicar pelo menos um case real de sucesso (Combustível ou Suco).",
  ],
  mindMap: {
    root: "Perfis de Cliente",
    branches: [
      { label: "Transportadora", items: ["Seguro", "Prejuízo", "GR e Profile"] },
      { label: "Embarcador", items: ["Visibilidade", "Tempo de Pátio", "Connect e Analytics"] },
      { label: "Operador Logístico", items: ["Gestão Macro", "SLA", "Analytics"] },
    ],
  },
  scenario:
    "Você atende a ligação de um diretor da Coca-Cola (Embarcador). Ele diz que está perdendo cargas porque as transportadoras dele são ineficientes. Você vai focar em vender a Apólice (GR) ou a Visibilidade (Connect)? Por quê?",
  diagram: {
    title: "Mapeamento de Valor",
    chart: "graph LR\n  A[Transportadora] -->|Busca Proteção| B[Atlas GR / Profile]\n  C[Embarcador] -->|Busca Visão Geral| D[Atlas Connect / Analytics]",
  },
};
