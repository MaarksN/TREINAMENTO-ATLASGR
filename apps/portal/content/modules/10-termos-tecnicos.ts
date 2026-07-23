import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("10-termos-tecnicos")!;

export const module10: ModuleContentFull = {
  ...meta,
  sources: [
    "Glossário Oficial AtlasGR",
    "Manuais Operacionais",
    "Treinamentos de Implantação",
  ],
  objectives: [
    "Dominar a linguagem técnica e as siglas usadas internamente e pelo mercado logístico.",
    "Prevenir erros operacionais causados por má interpretação de termos técnicos (ex: Jammer vs Sombra).",
    "Garantir a uniformidade da comunicação com clientes, seguradoras e forças policiais.",
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
              "Bem-vindo ao Dicionário AtlasGR. Você não pode jogar o jogo se não souber o nome das peças. O linguajar logístico e de risco é cheio de siglas que, se confundidas, podem atrasar a CIA ou irritar o cliente.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Básico (Referência)",
            "Pré-requisitos: Nenhum",
            "Tempo estimado: 30 minutos",
            "Competências desenvolvidas: Comunicação Corporativa, Precisão Técnica",
            "Gamificação: +300 XP, Badge 'Tradutor'",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "O Glossário Digital",
          text: [
            "Sempre que você vir uma palavra sublinhada ao longo da Universidade Corporativa, basta passar o mouse (ou clicar) para ver a definição imediata.",
          ],
        },
      ],
    },
    {
      id: "tecnologia-e-rastreamento",
      title: "Siglas de Tecnologia e Equipamentos",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A torre lida o tempo todo com hardware embarcado. É essencial distinguir as tecnologias.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Hardwares Comuns",
          items: [
            "VSR (Veículo Sem Rastreador): Caminhão que opera 'às cegas' no sistema principal, dependendo de iscas.",
            "Isca (Rastreador Móvel): Dispositivo autônomo a bateria, geralmente escondido dentro da carga, indetectável no painel do caminhão.",
            "Jammer (Chupa-Cabra): Aparelho usado por quadrilhas para derrubar o sinal GSM/GPS do rastreador.",
            "Área de Sombra: Região de rodovia onde o sinal cai naturalmente (buraco de cobertura de celular), não devendo ser confundido com ação de Jammer.",
          ],
        },
      ],
    },
    {
      id: "processos-e-documentos",
      title: "Documentação Logística",
      blocks: [
        {
          type: "comparison",
          title: "Conhecimentos e Notas",
          left: {
            label: "CT-e (Conhecimento de Transporte Eletrônico)",
            points: ["O documento do FRETE.", "Emitido pela transportadora.", "Relaciona quem transporta e qual a placa."],
          },
          right: {
            label: "NF-e (Nota Fiscal Eletrônica)",
            points: ["O documento do PRODUTO.", "Emitido pelo vendedor/embarcador.", "Relaciona valor, quantidade e tipo de carga."],
          },
        },
        {
          type: "text",
          paragraphs: [
            [
              "Você não bloqueia um caminhão por erro de NF-e, mas a ausência do valor correto da nota pode violar a Apólice.",
            ],
          ],
        },
      ],
    },
    {
      id: "indicadores-de-desempenho",
      title: "As Métricas (KPIs)",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "O que é SLA?", a: "Service Level Agreement (Acordo de Nível de Serviço). O tempo máximo que temos para fazer algo. Ex: SLA de Atendimento de Alerta Crítico é de 10 minutos." },
            { q: "O que é ETA?", a: "Estimated Time of Arrival (Tempo Estimado de Chegada). A inteligência artificial calculando que horas o caminhão vai entregar a carga." },
            { q: "O que é OTD?", a: "On-Time Delivery. O indicador do cliente de quantas entregas chegaram no prazo." },
          ],
        },
      ],
    },
  ],
  summary: [
    "A comunicação precisa evita falsos positivos (ex: reportar um Jammer quando era só uma Área de Sombra).",
    "Iscas são equipamentos autônomos dentro da carga, essenciais se o rastreador principal for destruído.",
    "CT-e é o imposto do frete, NF-e é o imposto do produto. O valor total da carga em risco vem da NF-e.",
    "KPIs como SLA e ETA são as métricas pelas quais o mercado avalia a eficiência da AtlasGR e da transportadora.",
  ],
  finalChecklist: [
    "Sei a diferença entre ação de Jammer e Área de Sombra.",
    "Consigo explicar para um cliente a diferença entre Rastreador Principal e Isca Móvel.",
    "Sei o significado de SLA.",
  ],
  mindMap: {
    root: "Termos Técnicos",
    branches: [
      { label: "Equipamentos", items: ["Jammer", "Sombra", "Isca", "VSR"] },
      { label: "Documentos", items: ["NF-e", "CT-e", "PGR"] },
      { label: "Métricas", items: ["SLA", "ETA", "OTD"] },
    ],
  },
  scenario:
    "O motorista entra em uma serra famosa por não ter torre de celular e o sinal cai. O sistema alerta. Você anota no relatório 'Suspeita de Uso de Jammer'. Por que isso é um erro gravíssimo de nomenclatura?",
  diagram: {
    title: "Relação de Documentos",
    chart: "graph LR\n  A[Embarcador] -->|Emite| B[NF-e (Valor da Carga)]\n  C[Transportadora] -->|Emite| D[CT-e (Valor do Frete)]\n  B --> E[Sistema Atlas]\n  D --> E",
  },
};
