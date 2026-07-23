import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("15-preparacao-final")!;

export const module15: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulos 1 a 14 — revisão consolidada de toda a trilha",
  ],
  objectives: [
    "Revisar, em uma visão executiva única, todos os pilares ensinados no Onboarding.",
    "Identificar lacunas de conhecimento antes da Prova Final de Certificação.",
    "Sintetizar o papel estratégico de cada colaborador dentro da AtlasGR.",
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
              "Este é o seu momento de concentração final. Você passou pela fundação cultural da AtlasGR, entendeu o mercado, mergulhou nos softwares e operou a Torre de Controle. Este módulo não traz informações novas, ele amarra todos os fios soltos para a sua Certificação.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Revisão Executiva",
            "Pré-requisitos: Módulos 01 ao 14 concluídos com aprovação",
            "Tempo estimado: 30 minutos",
            "Competências desenvolvidas: Consolidação do Conhecimento, Preparação para Avaliação",
            "Gamificação: +200 XP, Badge 'A Caminho da Elite'",
          ],
        },
      ],
    },
    {
      id: "revisao-pilares",
      title: "O Grande Resumo: Os Pilares da AtlasGR",
      blocks: [
        {
          type: "timeline",
          title: "O Ciclo Logístico Completo",
          items: [
            { label: "1. A Fundação (Mod 1 e 12)", text: "Agimos com Atitude de Dono, protegendo dados (LGPD) e seguindo as regras da casa." },
            { label: "2. O Negócio (Mod 2, 8 e 9)", text: "Atendemos Transportadoras e Embarcadores. Resolvemos dores de roubos milionários ou ineficiência usando Integração e APIs (Mod 7)." },
            { label: "3. O Manual do Jogo (Mod 3 e 10)", text: "A Seguradora manda na Apólice, e nós executamos a Proteção via PGR usando Termos Precisos." },
            { label: "4. A Execução Tática (Mod 4, 5 e 6)", text: "Profile aprova motoristas. Connect orquestra a viagem. A Torre atua em cima dos Alertas." },
            { label: "5. A Crise (Mod 11 e 14)", text: "Se o protocolo quebra e a coisa fica grave (sem SLA furado), escalonamos para a CIA intervir imediatamente." },
            { label: "6. O Futuro (Mod 13)", text: "O Analytics e os Sensores de Fadiga (IA) param de olhar para trás e começam a prever e prevenir acidentes antes de acontecerem." },
          ],
        },
      ],
    },
    {
      id: "pre-prova",
      title: "Como a Prova Final Funciona",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A avaliação final (Simulador de Decisão Master) testa o seu julgamento. Você enfrentará 15 questões que exigem análise de cenário, não apenas decoreba de conceitos.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Qual a nota de corte?", a: "Você precisa de 70% de acertos para ser certificado e emitir o seu diploma digital na AtlasGR Training Platform." },
            { q: "Se eu falhar?", a: "Você poderá revisar o conteúdo e tentar novamente. O importante é o aprendizado." },
            { q: "O que acontece depois da certificação?", a: "O seu Gestor e o DHO vão alinhar o seu Plano dos Primeiros 30 Dias (PDI Operacional) para atuação prática no seu setor." },
          ],
        },
      ],
    },
    {
      id: "mensagem-final",
      title: "Mensagem da Diretoria",
      blocks: [
        {
          type: "quote",
          text: "Vocês não operam botões ou vendem telas; vocês protegem motoristas, preservam o abastecimento do país e garantem que a nossa promessa ('Conectar pessoas e tecnologia gerando valor com segurança') seja cumprida diariamente.",
          author: "Diretoria AtlasGR",
        },
      ],
    },
  ],
  summary: [
    "Todos os 14 módulos formam um ecossistema único: o Comercial vende, a TI integra, o Profile filtra, a Torre monitora e a CIA age.",
    "O seu certificado marca o fim da teoria base e o início da sua trilha de desenvolvimento prático na AtlasGR.",
  ],
  finalChecklist: [
    "Estou seguro sobre os conceitos de Profile, Connect, GR, Analytics, PGR e CIA.",
    "Reconheço que falhas de conformidade (LGPD, Sigilo, SLA) são inegociáveis.",
    "Estou pronto para a Prova de Certificação.",
  ],
  mindMap: {
    root: "Preparação Final",
    branches: [
      { label: "Visão Macro", items: ["Cultura", "Produtos", "Mercado", "Tecnologia"] },
      { label: "A Prova", items: ["15 Questões", "Cenários Táticos", "70% de Corte"] },
      { label: "Próximos Passos", items: ["Certificação", "PDI", "Atuação Real"] },
    ],
  },
  scenario:
    "Respire fundo. Revise mentalmente o diagrama do ecossistema AtlasGR. Se sentir qualquer dúvida (como 'Qual a diferença entre TMS e Connect?' ou 'Quem eu aciono no Nível 1?'), volte nos módulos. Se estiver confiante, boa sorte na Avaliação de Certificação.",
  diagram: {
    title: "Sua Trilha de Evolução",
    chart: "graph LR\n  A[Onboarding] --> B[Certificação Final]\n  B --> C[Planos 30-60-90 Dias]\n  C --> D[Operador Especialista]",
  },
};
