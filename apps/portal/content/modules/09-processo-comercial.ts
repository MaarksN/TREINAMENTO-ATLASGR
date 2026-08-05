import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("09-processo-comercial")!;

export const module09: ModuleContentFull = {
  ...meta,
  sources: [
    "Playbook Comercial AtlasGR 2026",
    "Módulo 8 — Clientes (Revisão)",
  ],
  objectives: [
    "Entender o ciclo de vendas B2B Complexas.",
    "Definir e utilizar o conceito de ICP (Ideal Customer Profile).",
    "Aprender a contornar as objeções financeiras e operacionais mais duras.",
    "Compreender que o atendimento da Torre é o maior vendedor de renovação da empresa.",
    "Reconhecer sinais de alerta de churn e agir antes que o cliente ameace cancelar o contrato.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: A Arte da Guerra B2B",
      blocks: [
        {
          type: "text",
          heading: "Venda Complexa",
          paragraphs: [
            [
              "Vender AtlasGR não é vender sapato no shopping. É uma venda B2B (Business to Business) complexa. Demora de 3 a 6 meses para fechar um contrato. Envolve o CEO, o Diretor de TI, o Gerente de Operações e o Sindicato dos Motoristas do cliente.",
            ],
            [
              "Este módulo vai mapear o funil de vendas, desde o primeiro 'Alô' até a assinatura do contrato milionário.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "O Vendedor Silencioso",
          text: [
            "Não existe comercial bom o suficiente para segurar um cliente que é mal atendido pela Torre de Controle. A operação é a verdadeira área de vendas de renovação.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-icp",
      title: "Capítulo 1: ICP e Persona",
      blocks: [
        {
          type: "comparison",
          title: "O Alvo Comercial",
          left: {
            label: "O ICP (Perfil de Cliente Ideal)",
            points: [
              "Frotas acima de 50 caminhões ou embarcadores de alto volume.",
              "Cargas de alto valor agregado com PGR complexo.",
              "Empresas sofrendo pressão de seguradoras para melhorar a segurança.",
            ],
          },
          right: {
            label: "O Fora do ICP (Não Vender)",
            points: [
              "Caminhoneiro autônomo com apenas 1 caminhão.",
              "Cargas locais de cimento sem exigência de apólice.",
              "Empresas sem caixa para investir em tecnologia embarcada.",
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-2-gatilhos",
      title: "Capítulo 2: Gatilhos e Dores",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Empresas não compram software por diversão. Elas compram porque sentiram dor.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Os 3 Gatilhos Principais:",
          items: [
            "A Tragédia: Sofreram um assalto armado e perderam R$ 3 Milhões de carga em uma noite.",
            "A Parede da Seguradora: A seguradora se recusou a renovar a apólice sem um gerenciador de risco homologado.",
            "A Exigência do Gigante: A transportadora quer fechar contrato de frete com a Samsung, mas a Samsung exige APIs e Torre de Controle.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-objecoes",
      title: "Capítulo 3: O Combate às Objeções",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "Objeção: 'Vocês são caros. O Zezinho do Rastreador me cobra 10 reais.'", a: "Defesa: 'O Zezinho não aciona a polícia de madrugada. Nós vendemos a certeza de que a seguradora vai pagar o seu prejuízo. Quanto custa o seu CNPJ quebrar amanhã por uma carga negada na apólice?'" },
            { q: "Objeção: 'Eu já tenho o Connect, pra que pagar pelo Analytics?'", a: "Defesa: 'Porque com o Connect você apaga incêndios. Com o Analytics você vai descobrir quem está colocando fogo na sua casa e parar de perder dinheiro com horas extras.'" },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: O Funil no CRM",
      blocks: [
        {
          type: "case",
          title: "Do SDR ao Closer",
          text: "Um vendedor inicial (SDR) mapeia transportadoras de alto valor (ICP). Ele faz ligação fria e acha uma que perdeu o seguro (Gatilho). Ele qualifica o lead e passa para o Executivo de Contas (Closer). O Closer faz a demonstração do Atlas Connect e prova que a empresa será aceita pela seguradora novamente. Ele contorna a objeção de preço ('o barato sai caro'), envia o contrato e fecha o negócio no sistema (CRM). Todo esse processo deve ser registrado no Bitrix24/Hubspot de forma milimétrica.",
          source: "Diretrizes Comerciais AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-renovacao-churn",
      title: "Capítulo 4: Renovação de Contrato e Prevenção de Churn",
      blocks: [
        {
          type: "text",
          heading: "A Venda Não Termina na Assinatura",
          paragraphs: [
            [
              "O contrato assinado não é o fim da venda, é o começo do risco. Renovação não se negocia em uma ligação de 15 minutos no mês 11 — ela é construída (ou destruída) todos os dias, ticket a ticket, na Central de Monitoramento. Se a Torre atende mal, nenhum desconto de renovação segura o cliente.",
            ],
            [
              "Por isso a taxa de renovação da AtlasGR depende muito mais da Central de Operações do que do time comercial: é lá que o cliente sente, todo santo dia, se a promessa vendida na demo virou realidade operacional.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Sinais de Alerta de Churn (aja nos primeiros dois)",
          items: [
            "O gestor do cliente para de responder e-mails de acompanhamento mensal.",
            "Aumento repentino de chamados reclamando de lentidão ou falha no acionamento da Central 24/7.",
            "O contato principal do cliente foi trocado e o novo gestor não conhece o histórico do contrato.",
            "Concorrente foi visto fazendo prospecção ou visita técnica na base do cliente.",
            "Cliente começou a questionar valores de sublimite e LMI 'só por questionar', sem sinistro recente.",
          ],
        },
        {
          type: "case",
          title: "A Renovação que Quase Foi Perdida",
          text: "Um cliente do ICP (frota de 80 caminhões) avisou no mês 10 que 'estava avaliando propostas concorrentes' porque, na visão dele, pagava caro por um serviço que só usava 'quando dava problema'. O Closer ligou em pânico, mas quem reverteu o cancelamento foi a Central de Operações: levantou o histórico e mostrou, em números, que a C.I.A. havia evitado 4 sinistros de grande porte naquele ano, com acionamento médio de 3 minutos. O cliente renovou com upgrade para o Atlas Analytics, porque viu prova operacional, não promessa comercial.",
          source: "Diretrizes Comerciais AtlasGR",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Cliente Ameaçando Cancelar? Faça Isto",
          text: [
            "Não empurre desconto na primeira ligação. Primeiro, puxe o histórico de acionamentos e SLA da Central junto ao time de operações, agende uma reunião de 'prestação de contas' mostrando sinistros evitados e, só então, negocie condições comerciais. Desconto sem prova de valor apenas adia o cancelamento.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Fechamento",
      blocks: [
        {
          type: "checklist",
          title: "Próximos Passos",
          items: [
            "Revise as metodologias SPIN Selling e BANT na intranet da AtlasGR.",
            "Prepare-se para o Módulo 10, onde o foco deixará as vendas e focará puramente no 'tecniquês' da operação.",
          ],
        },
      ],
    },
  ],
  summary: [
    "O ICP foca o tempo do time comercial onde há real probabilidade de conversão.",
    "A venda nasce de gatilhos críticos (roubos, recusas de seguro).",
    "Objeções de preço são rebatidas ancorando o valor na prevenção do prejuízo (o caminhão roubado).",
    "A venda é dividida em etapas (SDR, Qualificação, Demo e Closer).",
  ],
  finalChecklist: [
    "Sei o que é ICP e como ele evita perda de tempo comercial.",
    "Identifico a diferença entre Venda Transacional (sapato) e Venda B2B Complexa (Risco).",
    "Posso contra-argumentar a objeção clássica 'vocês são muito caros'.",
  ],
  mindMap: {
    root: "Comercial B2B",
    branches: [
      { label: "Público", items: ["ICP", "Frotas +50", "Carga Alta Risco"] },
      { label: "Jornada", items: ["Gatilhos", "SDR", "Demo", "CRM", "Renovação"] },
      { label: "Defesa", items: ["Valor vs Preço", "Custo do Sinistro"] },
    ],
  },
  scenario:
    "Cenário: O dono de uma pequena frota de cimento (ICP fraco) implora por um desconto inviável. Você foca em reverter o desconto ou prefere gastar sua tarde ligando para uma frota de 100 caminhões de eletrônicos que sofreu um assalto ontem?",
  diagram: {
    title: "O Funil de Conversão",
    chart: "graph TD\n  Leads[Pesquisa Fria] --> SDR[SDR Qualifica a Dor]\n  SDR --> Demo[Closer Faz Demo]\n  Demo --> Contorno[Contorno de Objeções]\n  Contorno --> Fechamento[Assinatura B2B]",
  },
};
