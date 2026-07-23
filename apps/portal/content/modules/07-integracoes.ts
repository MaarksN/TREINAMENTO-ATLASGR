import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("07-integracoes")!;

export const module07: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Documentação de Integração de API AtlasGR",
  ],
  objectives: [
    "Compreender o conceito de integração de sistemas na logística.",
    "Explicar como as APIs conectam o Atlas Connect aos TMS e ERPs dos clientes.",
    "Descrever o desafio técnico de integrar rastreadores de múltiplos fabricantes.",
    "Identificar os benefícios operacionais das integrações (redução de retrabalho).",
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
              "Um sistema isolado é um sistema morto. A força da AtlasGR está na sua capacidade de falar a língua de centenas de outros softwares simultaneamente. Neste módulo, traduziremos o 'tecniquês' das integrações para o dia a dia operacional.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Intermediário (Tecnologia)",
            "Pré-requisitos: Módulo 05",
            "Tempo estimado: 30 minutos",
            "Competências desenvolvidas: Compreensão de Ecossistemas de TI, Fluxo de Dados",
            "Gamificação: +400 XP, Badge 'Conector'",
          ],
        },
      ],
    },
    {
      id: "o-que-e-api",
      title: "O que é API, afinal?",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "API (Interface de Programação de Aplicações) é um garçom. O seu sistema (cliente) faz um pedido, a API leva até a cozinha (banco de dados da Atlas), e traz o prato pronto (dados da viagem) de volta para a sua mesa, em milissegundos.",
            ],
            [
              "Na prática: Quando o Atlas Connect gera um evento de 'Entrada no Cliente', a ",
              { term: "api" },
              " avisa o ",
              { term: "tms" },
              " da transportadora, que avisa o ",
              { term: "erp" },
              " do embarcador. Tudo sem nenhuma intervenção humana.",
            ],
          ],
        },
      ],
    },
    {
      id: "integracao-de-rastreadores",
      title: "O Desafio dos Rastreadores",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Existem centenas de fabricantes de rastreadores físicos no Brasil (Omnilink, Sascar, Autotrac, OnixSat, etc). Cada um fala um 'idioma' diferente.",
            ],
            [
              "O Connect funciona como um Tradutor Universal. Ele recebe os sinais crús dessas centenas de marcas, traduz para um formato único, e exibe tudo padronizado na tela do Operador. Para o operador da AtlasGR, não importa a marca do rastreador, a interface é a mesma.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Comandos e Macros",
          text: [
            "Através da integração bidirecional, o operador não apenas recebe a posição, mas consegue enviar comandos (Bloquear Combustível, Disparar Sirene) diretamente pela tela do Connect, sem precisar abrir o sistema da Sascar ou Omnilink.",
          ],
        },
      ],
    },
    {
      id: "beneficios-praticos",
      title: "Por que isso vende tão bem?",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Integração é um dos nossos maiores argumentos comerciais. Ela elimina o 'retrabalho' e a 'digitação dupla'.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Sem Integração x Com Integração",
          left: {
            label: "Operação Sem API",
            points: ["Assistente digita dados da NF no TMS.", "Depois abre o Connect e digita tudo de novo para criar a viagem.", "Se o destino muda, tem que alterar nos dois sistemas."],
          },
          right: {
            label: "Operação Integrada (AtlasGR)",
            points: ["Sistema do cliente fatura a NF.", "A viagem nasce sozinha no Connect.", "Se algo muda, atualiza em tempo real em todos os lugares."],
          },
        },
      ],
    },
  ],
  summary: [
    "APIs são pontes de comunicação invisíveis entre o Atlas Connect e os sistemas dos clientes (TMS/ERP).",
    "O Connect atua como um tradutor universal, recebendo dados de centenas de fabricantes de rastreadores diferentes e padronizando-os.",
    "A integração permite que operadores enviem comandos de bloqueio sem sair da nossa plataforma.",
    "Para o cliente, integração significa fim do retrabalho e da digitação dupla.",
  ],
  finalChecklist: [
    "Consigo explicar o que é uma API com minhas palavras (ou usando a metáfora do garçom).",
    "Entendo por que conectar diferentes rastreadores é um diferencial técnico da AtlasGR.",
    "Sei os benefícios operacionais e comerciais de um ambiente 100% integrado.",
  ],
  mindMap: {
    root: "Integrações",
    branches: [
      { label: "APIs", items: ["Comunicação", "TMS", "ERP"] },
      { label: "Hardware", items: ["Tradutor Universal", "Sascar/Omnilink", "Comandos Remotos"] },
      { label: "Valor", items: ["Sem Retrabalho", "Automação de Viagens", "Velocidade"] },
    ],
  },
  scenario:
    "Um cliente reclama: 'Toda vez que emito uma nota, tenho que logar na Atlas para criar a viagem de risco, perco muito tempo'. Qual produto/recurso você oferece a ele e como você explica o funcionamento?",
  diagram: {
    title: "A Centralização",
    chart: "graph TD\n  A[Hardware Sascar] --> D[Atlas Connect]\n  B[Hardware Omnilink] --> D\n  C[Hardware Autotrac] --> D\n  D --> E[TMS Cliente A]\n  D --> F[ERP Cliente B]",
  },
};
