import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("10-termos-tecnicos")!;

export const module10: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Glossário consolidado do portal (content/glossary.ts)",
    "Módulos 1, 3 e 5 — primeira aparição da maioria dos termos operacionais",
    "Nomenclatura no Grid (documento interno) — abreviações padronizadas de registro de eventos",
  ],
  objectives: [
    "Consolidar os termos técnicos já vistos nos módulos anteriores em cinco categorias.",
    "Usar o Glossário do portal como referência rápida durante o estudo dos demais módulos.",
    "Reconhecer siglas de mercado (TMS, ERP, KPI, SLA) e siglas internas da Atlas (CIA, PGR, SM) sem confundi-las.",
    "Decodificar as abreviações mais comuns usadas no registro de eventos no Grid da Central.",
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
              "Cada módulo da trilha introduz termos técnicos no contexto em que eles aparecem — o que é ótimo para entender o significado, mas difícil para lembrar todos de uma vez. Este módulo funciona como um hub de revisão: reúne os termos já vistos em cinco categorias e aponta para o ",
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
          type: "checklist",
          title: "Vocabulário que orienta a decisão",
          items: [
            "PGR — conjunto de regras e procedimentos que define como o risco de cada operação será tratado.",
            "Sinistro — ocorrência coberta pela apólice que pode gerar perda, dano ou indenização.",
            "Sublimite — limite específico de cobertura dentro do valor total previsto na apólice.",
            "RCF-DC — seguro de responsabilidade civil por desaparecimento de carga.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "O termo só faz sentido dentro do contexto",
          text: [
            "Antes de agir, identifique se a expressão está sendo usada como regra do PGR, condição da apólice ou registro operacional. Essa leitura evita decisões baseadas apenas na sigla.",
          ],
        },
      ],
    },
    {
      id: "termos-operacionais",
      title: "Termos operacionais da Central",
      blocks: [
        {
          type: "timeline",
          title: "Da preparação ao tratamento do alerta",
          items: [
            { label: "Preparar", text: "SM, checklist e regras do PGR organizam a viagem antes do início." },
            { label: "Monitorar", text: "Atlas Connect, Torre de Controle e sensores mostram o contexto da operação." },
            { label: "Intervir", text: "Macro, botão de pânico e atuadores apoiam a resposta ao evento." },
            { label: "Registrar", text: "CIA e códigos do Grid preservam o histórico para a continuidade do atendimento." },
          ],
        },
      ],
    },
    {
      id: "codigos-do-grid",
      title: "Códigos e abreviações do Grid",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Além dos termos \"falados\" na operação, a Central usa um conjunto de abreviações padronizadas para registrar eventos no Grid — a grade que mostra a situação de cada veículo. Padronizar essas abreviações é o que permite que qualquer operador leia o histórico de um veículo e entenda rapidamente o que já aconteceu, mesmo sem ter acompanhado o turno anterior.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Principais códigos",
          items: [
            "#CONF — confirmação com motorista ou responsável, sempre com data, hora, meio de contato (telefone ou WhatsApp) e a informação confirmada.",
            "#AUT — autorização do responsável para reset, desengate ou desativação de sensor, com data, hora e prazo.",
            "@Conf — marca que uma confirmação foi registrada; @@@ separa veículos diferentes dentro da mesma grade.",
            "? Pa / ? Local / ? Pa-Local — motivo da parada, local da parada, ou os dois, cobrados do motorista via mensagem.",
            "GPS / Reset-Script / Setas-Sirene — ações remotas enviadas ao veículo (reset de GPS, reset acompanhado de script, ativação de setas e sirene).",
            "**** — mensagem enviada ao veículo por perda de sinal ou de comunicação.",
            "@ Porta / @ Painel / @ Baú / @ Desengate / @ Âncora / @ BP — alarmes por tipo de sensor (porta, painel, baú, desengate, âncora, botão de pânico).",
            "Abast / WC / HP / Ref / Manifesto — motivo de parada informado pelo motorista (abastecimento, banheiro, higiene pessoal, refeição, manifesto).",
            "Pel / Pmec — problema elétrico ou mecânico relatado pelo motorista.",
            "Pe / Re — pernoite / previsão de reinício da viagem.",
            "CR — indica que, ao final da viagem, uma nova rota precisa ser cadastrada no sistema.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Decodificando uma linha do Grid",
          text: [
            "\"@ Porta [Cidade A]=>[Cidade B]\" significa que o veículo, em trânsito entre essas duas cidades, gerou um alarme de porta. \"? Pa Local [Cidade A]=>[Cidade B]\" significa que o operador cobrou do motorista o motivo e o local da parada. Toda manutenção, parada fora do autorizado ou circulação fora do horário permitido deve ser confirmada com o cliente antes de ser liberada.",
          ],
        },
      ],
    },
    {
      id: "termos-de-mercado",
      title: "Termos de mercado e tecnologia",
      blocks: [
        {
          type: "comparison",
          title: "Linguagem interna e linguagem de mercado",
          left: {
            label: "Contexto ATLASGR",
            points: ["PGR, SM e CIA organizam regras e rotinas internas.", "Connect e Torre de Controle sustentam o acompanhamento operacional."],
          },
          right: {
            label: "Mercado e tecnologia",
            points: ["TMS, ERP e API conectam dados e sistemas.", "ETA, KPI, SLA e geofencing medem e orientam a operação."],
          },
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
    "Este módulo reúne os termos técnicos já vistos, organizados em 5 categorias: risco/seguro, operação da Central, códigos do Grid, mercado/tecnologia e regulatório.",
    "O Glossário do portal é a referência rápida para consultar qualquer termo a qualquer momento.",
    "Siglas internas da Atlas (PGR, SM, CIA) não devem ser confundidas com siglas de mercado (TMS, ERP, KPI, SLA).",
  ],
  finalChecklist: [
    "Sei em qual categoria (risco/seguro, operação, códigos do Grid, mercado, regulatório) cada termo técnico se encaixa.",
    "Sei onde consultar o Glossário do portal a qualquer momento.",
    "Não confundo mais siglas internas da Atlas com siglas de mercado.",
  ],
  mindMap: {
    root: "Termos Técnicos",
    branches: [
      { label: "Risco e seguro", items: ["PGR", "Sinistro", "Sublimite", "RCF-DC"] },
      { label: "Operação da Central", items: ["Connect", "Torre de Controle", "SM", "Checklist", "CIA"] },
      { label: "Códigos do Grid", items: ["#CONF", "#AUT", "? Pa/Local", "CR"] },
      { label: "Mercado e tecnologia", items: ["TMS", "ERP", "API", "ETA", "KPI", "SLA"] },
      { label: "Regulatório", items: ["ANTT", "CNT", "SUSEP", "LGPD", "ISO 31000"] },
    ],
  },
  scenario:
    "Um colega novo, no segundo dia de operação, ouve um supervisor falar 'a SM tá com nível 6 e o PGR já autorizou a Pronta' — e não entende metade da frase. Quantos desses termos você consegue traduzir sem abrir o Glossário?",
  diagram: {
    title: "Categorias de termos técnicos",
    chart: "graph TD\n  A[Termos tecnicos] --> B[Risco e seguro]\n  A --> C[Operacao da Central]\n  A --> F[Codigos do Grid]\n  A --> D[Mercado e tecnologia]\n  A --> E[Regulatorio]",
  },
};
