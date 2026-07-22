import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("06-atlas-profile")!;

export const module06: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 1 — Estrutura organizacional (setor de Perfil Securitário)",
    "Showcase de produto Atlas Profile (/produtos/profile)",
    "LGPD (Lei nº 13.709/2018)",
  ],
  objectives: [
    "Explicar o que o Atlas Profile verifica antes de aprovar um motorista ou veículo.",
    "Descrever o papel da biometria facial (FaceID) na validação de identidade.",
    "Reconhecer o que significa um cadastro classificado como \"Requer Atenção\".",
    "Relacionar o Atlas Profile às exigências da LGPD no tratamento de dados pessoais.",
  ],
  sections: [
    {
      id: "custo-invisivel",
      title: "O custo invisível da contratação",
      blocks: [
        {
          type: "text",
          heading: "Um risco que não aparece na planilha",
          paragraphs: [
            [
              "A maioria dos prejuízos graves de uma operação de transporte não vem de um caminhão quebrado — vem de uma contratação malfeita: um motorista com histórico de risco, documentação irregular, ou pior, um impostor dirigindo no lugar de quem foi de fato contratado.",
            ],
            [
              "Esse é o \"custo invisível\": ele não aparece em nenhum relatório até o dia em que vira um sinistro grave, um acidente ou uma investigação. O Atlas Profile existe para tornar esse risco visível antes da viagem começar.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Por que isso é tratado com urgência",
          text: [
            "Colocar em rota um motorista ou veículo com pendência não tratada é o tipo de falha que o restante do gerenciamento de risco (PGR, monitoramento, CIA) não consegue compensar depois — por isso o Profile atua antes da viagem, não durante.",
          ],
        },
      ],
    },
    {
      id: "o-que-verifica",
      title: "O que o Atlas Profile verifica",
      blocks: [
        {
          type: "checklist",
          title: "Camadas de verificação de um cadastro",
          items: [
            "Documentação do motorista — CNH regular, categoria compatível com o veículo e a carga.",
            "Histórico de processos — resumo de processos judiciais relevantes, quando aplicável.",
            "Validação biométrica — confirmação de que a pessoa é quem diz ser, via FaceID.",
            "Documentação do veículo — regularidade, categoria e compatibilidade com o tipo de carga (ex.: MOPP para cargas perigosas).",
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "A validação por ",
              { term: "faceid" },
              " é o que fecha o ciclo: de nada adianta a documentação estar em ordem se a pessoa que vai dirigir não é a mesma que foi cadastrada e aprovada.",
            ],
          ],
        },
      ],
    },
    {
      id: "requer-atencao",
      title: "Quando um cadastro é classificado como \"Requer Atenção\"",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Nem toda pendência bloqueia automaticamente a operação. O setor de ",
              { term: "perfil-securitario" },
              " analisa cada caso classificado como \"Requer Atenção\" — uma documentação vencida, um processo judicial que precisa de contexto — antes de decidir se libera, condiciona ou nega a aprovação.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "\"Requer Atenção\" significa que o motorista está automaticamente reprovado?", a: "Não. Significa que um analista humano precisa avaliar o caso antes de qualquer decisão — o sistema sinaliza, mas não decide sozinho." },
            { q: "O que acontece se a operação não esperar essa análise?", a: "É exatamente esse atalho que gera o tipo de risco que o Atlas Profile foi criado para eliminar — decisões tomadas sob pressão, sem checagem completa." },
          ],
        },
        {
          type: "case",
          title: "Por que essa etapa não pode ser pulada",
          text:
            "Acidentes graves envolvendo veículos de carga em rodovias brasileiras frequentemente têm, na origem, uma falha de contratação que passou despercebida — documentação vencida, motorista sem o treinamento exigido para aquele tipo de carga, ou histórico que deveria ter sido investigado antes da liberação.",
          source: "Contexto de mercado sobre acidentes rodoviários envolvendo veículos de carga",
        },
      ],
    },
    {
      id: "lgpd-e-profile",
      title: "Atlas Profile e a LGPD",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Atlas Profile lida com dados pessoais sensíveis — documentos, biometria, histórico de processos. Toda essa informação está sujeita à ",
              { term: "lgpd" },
              ": precisa de finalidade clara, consentimento quando aplicável, e cuidado redobrado no armazenamento e no acesso.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "SLA e confiança andam juntos",
          text: [
            "O compromisso de retorno em poucos minutos só tem valor se a análise for feita com rigor e dentro da lei — velocidade sem compliance vira risco jurídico, não vantagem competitiva.",
          ],
        },
      ],
    },
  ],
  summary: [
    "O Atlas Profile ataca o \"custo invisível\" da contratação: riscos que só aparecem depois de um problema grave.",
    "A verificação combina documentação do motorista e do veículo, histórico de processos e validação biométrica (FaceID).",
    "Um cadastro \"Requer Atenção\" precisa de análise humana do Perfil Securitário antes de qualquer decisão.",
    "Falhas de contratação não tratadas estão na origem de muitos acidentes graves envolvendo cargas.",
    "Todo o processo do Atlas Profile precisa respeitar a LGPD, já que lida com dados pessoais sensíveis.",
  ],
  finalChecklist: [
    "Sei explicar o que o Atlas Profile verifica antes de aprovar um cadastro.",
    "Sei o papel do FaceID na validação de identidade.",
    "Entendo o que significa um cadastro \"Requer Atenção\" e por que ele não é uma reprovação automática.",
    "Relaciono o Atlas Profile às exigências da LGPD.",
  ],
  mindMap: {
    root: "Atlas Profile",
    branches: [
      { label: "Problema", items: ["Custo invisível da contratação", "Risco que não aparece na planilha"] },
      { label: "Verificação", items: ["Documentação do motorista", "Histórico de processos", "FaceID", "Documentação do veículo"] },
      { label: "Decisão", items: ["Aprovado", "Requer Atenção (análise humana)", "Reprovado"] },
      { label: "Compliance", items: ["LGPD", "Consentimento", "Finalidade clara"] },
    ],
  },
  scenario:
    "Faltam 40 minutos para um motorista sair em viagem e o cadastro dele aparece como 'Requer Atenção' no Atlas Profile. A transportadora pressiona para liberar agora. O que a análise do Perfil Securitário — e não a pressão do cliente — deve decidir aqui?",
  diagram: {
    title: "Da documentação à aprovação",
    chart:
      "graph LR\n  A[Documentacao e antecedentes] --> B[FaceID]\n  B --> C{Requer Atencao?}\n  C -->|Sim| D[Analise do Perfil Securitario]\n  C -->|Nao| E[Aprovado]\n  D --> E\n  D --> F[Reprovado]",
  },
};
