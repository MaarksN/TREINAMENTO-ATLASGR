import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("07-integracoes")!;

export const module07: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Módulo 5 — Software Logístico (tecnologias de rastreamento atendidas pela Atlas)",
    "Módulo 2 — Mercado de Logística (TMS, ERP e API)",
    "Treinamento Tratativa de Alertas — SM Iniciada (particularidades de ativação de sensores por tecnologia)",
    "Manuais de checklist por tecnologia (Onix, Positron, Omnilink) — pré-requisitos e diferenças de leitura entre fabricantes",
  ],
  objectives: [
    "Explicar por que o Atlas Connect precisa conversar com sistemas de terceiros.",
    "Listar as principais tecnologias de rastreamento integradas à Atlas.",
    "Diferenciar integração com rastreador de integração com TMS/ERP do cliente.",
    "Reconhecer os pontos mais comuns de falha de integração e como isolá-los.",
    "Reconhecer pré-requisitos que travam o checklist em tecnologias específicas antes de começar o teste.",
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
        {
          type: "text",
          heading: "Onde cada fabricante guarda a ativação de sensores",
          paragraphs: [
            [
              "Um exemplo concreto de como a tela muda entre fabricantes: na Sighra, os sensores ficam agrupados em uma única lista (\"Sensores Ativos\"); na Onix, cada sensor é habilitado individualmente (porta do motorista, porta do carona, painel, desengate); no Pósitron, a ativação é feita item a item em \"Comandos\"; e no Autotrac, os sensores ficam distribuídos por níveis dentro do menu \"Geral\".",
            ],
          ],
        },
        {
          type: "case",
          title: "Habilitando sensores no Autotrac, na prática",
          text:
            "No menu Geral, o operador localiza o veículo pelo MCT/ID Primário (copiado do Connect) e envia o comando padrão: proibir carona, desengate e painel nível 3 — é essa combinação que faz o evento subir e bloquear o veículo em caso de violação. Depois de confirmar que a macro chegou ao sistema, o operador conclui a checagem em Históricos → Alertas OBC, conferindo na tabela se cada violação testada realmente gerou o alerta esperado antes de liberar o veículo.",
          source: "Manual de Checklist Autotrac",
        },
        {
          type: "callout",
          variant: "warning",
          title: "\"Nível\" no Autotrac não é o mesmo \"nível\" do Atlas Connect",
          text: [
            "Cuidado com a coincidência de nomes: o \"nível 3\" de um comando do Autotrac é uma configuração interna do próprio rastreador (intensidade/tipo de bloqueio do sensor), e não tem relação com os 7 níveis de prioridade de alerta do Atlas Connect (Módulo 11). São duas escalas completamente diferentes que só coincidem no nome.",
          ],
        },
      ],
    },
    {
      id: "pre-requisitos-e-armadilhas",
      title: "Pré-requisitos e armadilhas por tecnologia",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Nem todo checklist começa direto no teste dos sensores. Algumas tecnologias têm um pré-requisito que precisa ser resolvido antes — ignorá-lo não trava só o checklist, trava a segurança da viagem inteira.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que trava o início do checklist",
          items: [
            "Onix — Inteligência Embarcada (I.E.): sem I.E. cadastrada e vinculada a um CNPJ da Atlas (verificado no sistema Onix e no Onix Connect), o checklist não pode começar; o motorista é orientado a acionar a transportadora para providenciar o espelhamento.",
            "Onix — macro genérica: se o veículo estiver rodando com a macro padrão \"Trucks Control\" (ou outra macro genérica da fabricante), ela precisa ser trocada pela macro correta antes do checklist — a macro genérica não tem ação de bloqueio, então uma violação real não bloquearia o veículo.",
            "Omnilink — status EM TRÂNSITO: o motorista precisa informar saída pelo menu do próprio equipamento antes que o checklist seja liberado; sem esse status, o teste não roda.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A mesma cor não significa a mesma coisa em todo sistema",
          text: [
            "No Onix, o Grid usa verde para sensor fechado/normal e vermelho para aberto/violação. No Positron a lógica é diferente: verde indica que o sensor está acusando violação (porta aberta, veículo desbloqueado ou desengatado), cinza indica ausência de violação, e azul sinaliza modo satélite — condição em que o checklist não deve ser realizado. Quem atende mais de uma tecnologia precisa checar a legenda de cada sistema antes de confiar só na cor.",
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
    "Algumas tecnologias têm pré-requisitos que travam o início do checklist (I.E. no Onix, macro genérica sem bloqueio, status EM TRÂNSITO no Omnilink) — e a cor de um sensor no Grid não significa a mesma coisa em todo sistema.",
  ],
  finalChecklist: [
    "Sei explicar por que o Connect integra com sistemas de terceiros.",
    "Consigo nomear pelo menos 3 tecnologias de rastreamento atendidas pela Atlas.",
    "Sei diferenciar o impacto de uma falha de integração com rastreador e com TMS/ERP.",
    "Sei reconhecer os pré-requisitos que travam o checklist no Onix e no Omnilink antes de começar o teste.",
  ],
  mindMap: {
    root: "Integrações",
    branches: [
      { label: "Por que integrar", items: ["Evitar retrabalho manual", "Reduzir erro humano", "API"] },
      { label: "Rastreadores", items: ["Sascar/Sighra", "Onix/Omnilink", "Pósitron/Autotrac"] },
      { label: "Pré-requisitos", items: ["I.E. (Onix)", "Macro genérica sem bloqueio (Onix)", "EM TRÂNSITO (Omnilink)"] },
      { label: "Sistemas do cliente", items: ["TMS", "ERP", "ETA automático"] },
      { label: "Risco de falha", items: ["Perda de sinal → CIA", "Falha de API → só visibilidade"] },
    ],
  },
  scenario:
    "Durante uma auditoria, o cliente reclama que o ETA não aparece no TMS dele. Antes de entrar em pânico, você precisa diagnosticar: o problema está no rastreador (crítico) ou na integração com o TMS (visibilidade)?",
  diagram: {
    title: "Onde a informação trafega",
    chart: "graph LR\n  A[Rastreador] --> B[Atlas Connect]\n  B --> C[TMS / ERP do cliente]\n  B --> D[Torre de Controle]",
  },
};
