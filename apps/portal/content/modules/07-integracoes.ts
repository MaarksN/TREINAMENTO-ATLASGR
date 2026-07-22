import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("07-integracoes")!;

export const module07: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 5 — Software Logístico (tecnologias de rastreamento atendidas pela Atlas)",
    "Módulo 2 — Mercado de Logística (TMS, ERP e API)",
  ],
  objectives: [
    "Explicar por que o Atlas Connect precisa conversar com sistemas de terceiros.",
    "Listar as principais tecnologias de rastreamento integradas à Atlas.",
    "Diferenciar integração com rastreador de integração com TMS/ERP do cliente.",
    "Reconhecer os pontos mais comuns de falha de integração e como isolá-los.",
  ],
  sections: [
    {
      id: "por-que-integrar",
      title: "Por que o Connect precisa conversar com outros sistemas",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Atlas não fabrica o equipamento instalado no veículo — ela integra com rastreadores de diferentes fabricantes para captar posição, eventos e comandos, e organiza tudo isso dentro do ",
              { term: "connect" },
              ".",
            ],
            [
              "Ao mesmo tempo, o cliente muitas vezes já tem um ",
              { term: "tms" },
              " ou um ",
              { term: "erp" },
              " rodando a operação dele. Quanto mais esses sistemas conversam entre si via ",
              { term: "api" },
              ", menos trabalho manual e menos chance de erro humano na troca de informação.",
            ],
          ],
        },
      ],
    },
    {
      id: "tecnologias-de-rastreamento",
      title: "Tecnologias de rastreamento integradas",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Atlas atende clientes com diferentes marcas de equipamento instalado no veículo — cada fabricante tem seu próprio portal e sua própria forma de enviar comandos e receber eventos.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Principais tecnologias atendidas",
          items: [
            "Sascar / Sighra",
            "Onix / Omnilink",
            "Pósitron / Autotrac",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Três competências por tecnologia",
          text: [
            "Para cada uma dessas tecnologias, o operador precisa dominar três competências: envio de comandos (bloqueio, sirene), desbloqueio manual em caso de falha, e leitura de relatórios de eventos — a lógica muda pouco de fabricante para fabricante, mas a tela e os nomes dos botões, sim.",
          ],
        },
      ],
    },
    {
      id: "dois-tipos-de-integracao",
      title: "Dois tipos de integração, dois tipos de risco",
      blocks: [
        {
          type: "comparison",
          title: "Integração com rastreador x Integração com TMS/ERP",
          left: {
            label: "Rastreador (Sascar, Onix, Pósitron...)",
            points: [
              "Fonte primária de posição e eventos do veículo.",
              "Falha aqui gera perda de sinal — evento tratado diretamente pela CIA conforme o PGR.",
              "Cada fabricante tem seu próprio portal de comandos.",
            ],
          },
          right: {
            label: "TMS / ERP do cliente",
            points: [
              "Recebe dados já processados pelo Connect (ex.: ETA, status de entrega).",
              "Falha aqui não impede o monitoramento — só atrasa a visibilidade do cliente sobre o próprio sistema.",
              "Integração via API, geralmente configurada uma vez pela Implantação.",
            ],
          },
        },
        {
          type: "faq",
          items: [
            { q: "Se a integração com o TMS do cliente cair, a operação de risco para?", a: "Não. O monitoramento continua normalmente pelo Atlas Connect — só o reflexo automático de dados no TMS do cliente fica temporariamente indisponível." },
            { q: "E se o rastreador perder sinal?", a: "Esse é um evento crítico, tratado dentro do próprio fluxo de gerenciamento de risco (perda de sinal por mais de 2 horas é escalada para a CIA II)." },
          ],
        },
      ],
    },
  ],
  summary: [
    "O Atlas Connect integra com rastreadores de diferentes fabricantes (Sascar/Sighra, Onix/Omnilink, Pósitron/Autotrac) para captar posição, eventos e comandos.",
    "O cliente pode ter TMS e ERP próprios; a integração via API evita retrabalho manual e erro humano.",
    "Integração com rastreador é crítica para a operação de risco; integração com TMS/ERP do cliente é sobre visibilidade, não sobre segurança.",
    "Falha de sinal do rastreador segue o fluxo normal de gerenciamento de risco; falha de integração com TMS/ERP não interrompe o monitoramento.",
  ],
  finalChecklist: [
    "Sei explicar por que o Connect integra com sistemas de terceiros.",
    "Consigo nomear pelo menos 3 tecnologias de rastreamento atendidas pela Atlas.",
    "Sei diferenciar o impacto de uma falha de integração com rastreador e com TMS/ERP.",
  ],
  mindMap: {
    root: "Integrações",
    branches: [
      { label: "Por que integrar", items: ["Evitar retrabalho manual", "Reduzir erro humano", "API"] },
      { label: "Rastreadores", items: ["Sascar/Sighra", "Onix/Omnilink", "Pósitron/Autotrac"] },
      { label: "Sistemas do cliente", items: ["TMS", "ERP", "ETA automático"] },
      { label: "Risco de falha", items: ["Perda de sinal → CIA", "Falha de API → só visibilidade"] },
    ],
  },
};
