import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("06-atlas-profile")!;

export const module06: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Showcase de produto Atlas Profile (/produtos/profile)",
    "LGPD (Lei nº 13.709/2018)",
  ],
  objectives: [
    "Explicar o que o Atlas Profile verifica antes de aprovar um motorista ou veículo.",
    "Descrever o papel da biometria facial (FaceID) na validação de identidade.",
    "Reconhecer o que significa um cadastro classificado como 'Requer Atenção'.",
    "Relacionar o Atlas Profile às exigências da LGPD no tratamento de dados.",
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
              "A fraude não começa na estrada; começa na portaria. Este módulo explora como o Atlas Profile age como nosso escudo inicial, impedindo que veículos e pessoas irregulares tenham acesso a cargas valiosas.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Básico (Produto)",
            "Pré-requisitos: Módulo 04",
            "Tempo estimado: 35 minutos",
            "Competências desenvolvidas: Análise de Perfis de Risco, Compreensão de LGPD, Prevenção a Fraudes",
            "Gamificação: +500 XP, Badge 'Inspetor de Identidade'",
          ],
        },
      ],
    },
    {
      id: "custo-invisivel",
      title: "O Custo Invisível da Contratação",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A maioria dos roubos que envolvem conluio (quando o motorista facilita o crime) poderia ter sido evitada com uma checagem básica. O ",
              { term: "perfil-securitario" },
              " existe para não deixar que o criminoso seja contratado.",
            ],
            [
              "Mas o Profile não checa só crimes. Ele verifica se a CNH está vencida, se o caminhão tem licenciamento atrasado ou multas impeditivas. Um caminhão retido na Polícia Rodoviária por IPVA atrasado é um 'custo invisível' que prejudica o cliente.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Urgência Operacional",
          text: [
            "Uma contratação irregular que escapa pelo sistema pode se transformar em um sinistro irreversível 24 horas depois.",
          ],
        },
      ],
    },
    {
      id: "como-funciona",
      title: "Como o Motor Funciona",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O sistema não depende de humanos digitando CPFs no Google. O Atlas Profile é conectado via ",
              { term: "api" },
              " com bases governamentais e tribunais de justiça. A resposta (Aprovado, Reprovado ou 'Requer Atenção') é gerada em segundos.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Triagem",
          items: [
            { label: "Passo 1", text: "Cliente insere CPF e Placa no sistema." },
            { label: "Passo 2", text: "O Profile varre bancos de dados (Tribunais, Detran, ANTT)." },
            { label: "Passo 3", text: "O motorista recebe um link no celular para capturar a Biometria Facial (FaceID)." },
            { label: "Passo 4", text: "O sistema compara o rosto com o documento oficial e emite o parecer." },
          ],
        },
      ],
    },
    {
      id: "faceid-e-fraudes",
      title: "Biometria e Falsidade Ideológica",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O golpe mais comum na logística é a Falsidade Ideológica. Um fraudador aluga um caminhão usando documentos falsos perfeitos. O banco de dados vai aprovar o documento. É aqui que entra o ",
              { term: "faceid" },
              ".",
            ],
          ],
        },
        {
          type: "case",
          title: "O Falso Motorista",
          text: "Um fraudador enviou foto de uma CNH real (roubada). O banco de dados aprovou. Mas, ao ser exigida a prova de vida com selfie piscando (FaceID), o sistema apontou 'Divergência Biométrica'. O roubo de uma carga de R$ 3 Milhões de celulares foi evitado na portaria.",
          source: "Case Real Atlas Profile (2024)",
        },
      ],
    },
    {
      id: "lgpd",
      title: "Atenção Total à LGPD",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Tratar antecedentes criminais e biometria facial significa tratar 'Dados Sensíveis' aos olhos da Lei Geral de Proteção de Dados (LGPD). O Atlas Profile foi desenhado para apagar esses dados ou mascará-los assim que o período legal expira.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Posso falar para a transportadora o crime exato que o motorista cometeu?", a: "NÃO. A transportadora recebe apenas o status 'Não Recomendado'. Expor a ficha criminal viola a LGPD e gera processo por dano moral." },
            { q: "O motorista precisa consentir?", a: "Sim. O link de biometria possui um Termo de Consentimento claro. Sem aceite, sem checagem, sem viagem." },
          ],
        },
      ],
    },
  ],
  summary: [
    "O Profile é a defesa primária contra fraudes, conluio e veículos irregulares.",
    "A análise é automatizada, integrando bases federais, de trânsito e judiciais em segundos.",
    "A Biometria (FaceID) é essencial para barrar a falsidade ideológica que documentos falsos conseguem burlar.",
    "O tratamento desses dados exige absoluto respeito à LGPD, não repassando detalhes criminais abertos aos clientes.",
  ],
  finalChecklist: [
    "Entendo o que o Profile busca (crimes, validade de CNH, documentação do veículo).",
    "Sei como o FaceID evita golpes de falsidade ideológica.",
    "Compreendo o significado de 'Requer Atenção'.",
    "Sei por que nunca devo relatar o teor de um crime para o dono da transportadora.",
  ],
  mindMap: {
    root: "Atlas Profile",
    branches: [
      { label: "Análise", items: ["CPF", "Placa", "Tribunais", "Detran"] },
      { label: "Prevenção", items: ["FaceID", "Prova de Vida", "Anti-Fraude"] },
      { label: "Parecer", items: ["Aprovado", "Não Recomendado", "Requer Atenção"] },
      { label: "Regras", items: ["LGPD", "Dados Sensíveis", "Sem Exposição"] },
    ],
  },
  scenario:
    "Você analisa um perfil 'Não Recomendado' por histórico de furto de carga. O cliente te liga furioso: 'Me diga exatamente qual crime ele cometeu, eu preciso saber quem estou contratando!'. Como você responde, mantendo a postura AtlasGR e respeitando a LGPD?",
  diagram: {
    title: "O Funil de Aprovação",
    chart: "graph TD\n  A[Input de Dados] --> B{Bases Legais OK?}\n  B -- Não --> C[Reprovado Documental]\n  B -- Sim --> D{FaceID Bate?}\n  D -- Não --> E[Reprovado Fraude]\n  D -- Sim --> F[Aprovado para Viagem]",
  },
};
