import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("09-processo-comercial")!;

export const module09: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 8 — Clientes (perfis de cliente atendidos)",
    "Módulo 1 — Estrutura organizacional (área Comercial)",
  ],
  objectives: [
    "Explicar o conceito de ICP e como ele orienta a prospecção.",
    "Reconhecer as dores mais comuns que levam um cliente a contratar a Atlas.",
    "Identificar objeções comuns e como elas se relacionam ao valor entregue.",
    "Entender por que todo colaborador — não só o time comercial — representa o discurso da marca.",
  ],
  sections: [
    {
      id: "icp-e-persona",
      title: "ICP e persona: para quem a Atlas vende",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Antes de vender, o time comercial precisa saber para quem vender. O ",
              { term: "icp" },
              " descreve o tipo de empresa ideal — porte, segmento, tipo de carga, maturidade em gestão de risco — e a persona descreve a pessoa dentro dessa empresa que toma ou influencia a decisão de compra.",
            ],
            [
              "Uma transportadora de cargas de alto valor com histórico recente de sinistro, por exemplo, tende a se encaixar melhor no ICP da Atlas do que uma empresa pequena sem exigência contratual de rastreamento.",
            ],
          ],
        },
      ],
    },
    {
      id: "dores-e-argumentacao",
      title: "Dores comuns e argumentação",
      blocks: [
        {
          type: "checklist",
          title: "Dores que costumam abrir a conversa comercial",
          items: [
            "Exigência contratual de rastreamento e PGR por parte do embarcador ou da seguradora.",
            "Histórico recente de sinistro (roubo, furto ou acidente) que expôs uma lacuna na operação.",
            "Falta de visibilidade sobre a carga durante o transporte, especialmente com terceiros.",
            "Custo operacional invisível — tempo parado, retrabalho, decisões tomadas \"no escuro\".",
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "A argumentação comercial eficaz conecta a dor específica do cliente a um dos quatro pilares do portfólio: uma dor de contratação leva a Atlas Profile, uma dor de aderência a apólice leva a Atlas GR, uma dor de visibilidade leva a Atlas Connect, e uma dor de indicadores leva a Atlas Analytics.",
            ],
          ],
        },
      ],
    },
    {
      id: "objecoes",
      title: "Objeções mais comuns",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "\"Já temos rastreador, para que contratar a Atlas?\"", a: "Rastreador capta posição e eventos; a Atlas transforma isso em gerenciamento de risco — PGR, tratativa 24h, CIA, análise de tendência. O equipamento é só o ponto de partida." },
            { q: "\"Isso não é um custo alto para o que já fazemos internamente?\"", a: "O custo de manter uma central própria 24h, com CIA treinada e processo de sinistro estruturado, costuma ser maior do que contratar um especialista — e o risco de uma central improvisada é maior ainda." },
            { q: "\"Como sei que o investimento compensa?\"", a: "É por isso que cases reais (como economia de R$ 95M em perdas ou -26% em tempo parado) são usados na argumentação: eles tornam o retorno tangível, não teórico." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Diferencial competitivo",
          text: [
            "O diferencial da Atlas não é só tecnologia — é a combinação de tecnologia (Connect), pessoas especializadas (CIA) e processo estruturado (PGR). Concorrentes podem ter uma dessas partes; poucos têm as três, funcionando como um mesmo produto.",
          ],
        },
      ],
    },
    {
      id: "todo-mundo-representa-a-marca",
      title: "Todo colaborador representa a marca",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Mesmo quem não trabalha no time Comercial acaba, em algum momento, conversando com um cliente — em uma ligação de tratativa, em um suporte, em uma visita técnica. Entender o discurso comercial evita contradições: um operador que promete algo que o contrato não cobre, por exemplo, cria um problema que o Comercial vai precisar resolver depois.",
            ],
          ],
        },
      ],
    },
  ],
  summary: [
    "ICP descreve o cliente ideal; persona descreve quem decide dentro dessa empresa.",
    "As dores mais comuns são: exigência contratual, histórico de sinistro, falta de visibilidade e custo operacional invisível.",
    "Cada dor se conecta a um pilar do portfólio: Profile, GR, Connect ou Analytics.",
    "As objeções mais comuns giram em torno de \"já temos rastreador\" e \"isso é caro\" — respondidas com o diferencial de pessoas + processo + tecnologia.",
    "Todo colaborador representa a marca perante o cliente, não só o time Comercial.",
  ],
  finalChecklist: [
    "Sei explicar o que é ICP e persona.",
    "Reconheço pelo menos 3 dores comuns que levam à contratação da Atlas.",
    "Sei responder às duas objeções mais comuns.",
    "Entendo por que o discurso comercial importa para todos os colaboradores.",
  ],
  mindMap: {
    root: "Processo Comercial",
    branches: [
      { label: "Público-alvo", items: ["ICP", "Persona"] },
      { label: "Dores", items: ["Exigência contratual", "Histórico de sinistro", "Falta de visibilidade", "Custo invisível"] },
      { label: "Objeções", items: ["\"Já temos rastreador\"", "\"É caro\""] },
      { label: "Diferencial", items: ["Tecnologia (Connect)", "Pessoas (CIA)", "Processo (PGR)"] },
    ],
  },
  scenario:
    "Um prospect responde: 'já temos rastreador instalado, não precisamos de mais nada'. Você tem 30 segundos para virar essa objeção em uma conversa real sobre risco — o que você diz primeiro?",
  diagram: {
    title: "Da dor ao fechamento",
    chart: "graph LR\n  A[ICP e persona] --> B[Dor identificada]\n  B --> C[Pilar do portfolio]\n  C --> D[Objecao respondida]\n  D --> E[Fechamento]",
  },
};
