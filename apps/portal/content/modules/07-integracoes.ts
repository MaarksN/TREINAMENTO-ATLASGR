import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("07-integracoes")!;

export const module07: ModuleContentFull = {
  ...meta,
  sources: [
    "Documentação de Integração de API AtlasGR",
    "Manuais de Tecnologias Embarcadas (Hardwares)",
  ],
  objectives: [
    "Desmistificar o conceito técnico de APIs e integração de dados B2B.",
    "Compreender como a Atlas atua como 'Tradutor Universal' de hardwares de terceiros.",
    "Explicar o benefício comercial de 'zero digitação' proporcionado pela integração.",
    "Dominar o conceito de comandos remotos bidirecionais (enviar e receber dados).",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Hub Logístico",
      blocks: [
        {
          type: "text",
          heading: "Falando Todas as Línguas",
          paragraphs: [
            [
              "Imagine uma sala cheia de pessoas de países diferentes. A transportadora fala Japonês (usando o sistema SSW), o embarcador fala Alemão (usando SAP), o rastreador da carreta fala Mandarim (Sascar) e a isca dentro da carga fala Árabe (Isca Gold). A AtlasGR é o Tradutor Simultâneo.",
            ],
            [
              "A capacidade de conectar todos esses sistemas dispersos em uma única tela (O Connect) e fazê-los trabalhar juntos é o que nos torna essenciais. Sem nós, o cliente precisaria de 15 pessoas digitando dados o dia todo.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "O Apelo Comercial",
          text: [
            "Integração é a nossa arma de vendas mais letal. Quando dizemos a um CEO que ele poderá demitir planilhas de Excel e erros de digitação, a venda é fechada.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-apis",
      title: "Capítulo 1: A Magia das APIs",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Você não precisa ser programador para entender uma ",
              { term: "api" },
              ". A API (Interface de Programação de Aplicações) é um mensageiro.",
            ],
            [
              "A transportadora fatura a Nota Fiscal no sistema financeiro dela. Imediatamente, a API da Atlas 'bate na porta' do sistema deles, copia a Nota Fiscal, traz para o Connect e CRIA a viagem automaticamente. Zero cliques humanos.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "O Antes e o Depois",
          left: {
            label: "Mundo Sem API (O Passado)",
            points: ["Assistente imprime a NF no galpão.", "Lê os dados e redigita (e erra a placa) no sistema de rastreamento.", "Avisa o motorista por WhatsApp."],
          },
          right: {
            label: "Mundo AtlasGR (O Presente)",
            points: ["Botão de Faturar pressionado.", "Connect puxa os dados e cruza com a PGR e o Profile em 2 segundos.", "Torre assume o controle da viagem."],
          },
        },
      ],
    },
    {
      id: "capitulo-2-hardwares",
      title: "Capítulo 2: O Tradutor de Hardwares (Agnosticismo)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A AtlasGR é 'Agnóstica de Hardware'. Isso significa que nós não obrigamos o cliente a jogar os rastreadores dele fora para comprar o nosso. Nós integramos todos eles.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Como funciona a centralização:",
          items: [
            "Um cliente tem uma frota misturada: Caminhões novos com 'Sascar' e antigos com 'OnixSat'.",
            "Para o cliente rastrear antes da Atlas, ele abria o site da Sascar no Monitor 1 e o site da Onixsat no Monitor 2.",
            "O Atlas Connect recebe a longitude/latitude dos dois fornecedores e coloca TUDO NA MESMA TELA, no mesmo formato.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-bidirecionalidade",
      title: "Capítulo 3: Comandos Bidirecionais",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A integração não é uma rua de mão única (onde só recebemos dados). Ela é bidirecional. O Operador da Atlas pode, através da NOSSA tela, enviar comandos que vão bater no satélite e chegar no hardware do fabricante terceiro.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Exemplo Prático de Bloqueio",
          items: [
            { label: "Torre Atlas", text: "O operador aperta o botão 'Bloquear Combustível' no Atlas Connect." },
            { label: "API Atlas", text: "O nosso sistema traduz o comando para a linguagem específica daquele fabricante (ex: Autotrac)." },
            { label: "Satélite", text: "A rede da Autotrac envia o comando." },
            { label: "Caminhão", text: "O motor do caminhão corta o diesel a milhares de quilômetros de distância." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Falha Humana Banida",
      blocks: [
        {
          type: "case",
          title: "O Fator Humano Removido",
          text: "Em 2022, um grande cliente perdia em média 2 cargas por mês. O motivo? Os assistentes de logística esqueciam de vincular o equipamento 'Isca Móvel' à placa da carreta durante a correria da expedição. Se o rastreador principal fosse derrubado, a isca estava ligada, mas o sistema não sabia em qual carreta ela estava. A Atlas implantou a integração API pesada. A partir de então, a leitura do código de barras da caixa amarrava a Isca à NF e à Placa simultaneamente no Connect. Em 12 meses, os roubos caíram a zero. Retirar a digitação manual tira a principal fonte de erros da segurança.",
          source: "Laboratório de Integração Tecnológica - TI Atlas",
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Fechamento",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Você não precisa aprender a programar integrações, mas precisa saber vender a ideia delas (o benefício do tempo economizado) com paixão e firmeza.",
            ],
          ],
        },
      ],
    },
  ],
  summary: [
    "APIs conectam sistemas, removendo a necessidade de digitação humana.",
    "Ser agnóstico significa aceitar e centralizar dados de qualquer hardware/rastreador do mercado no Atlas Connect.",
    "Bidirecionalidade permite que a Torre Atlas gerencie bloqueios sem sair da própria ferramenta.",
    "A maior causa de falha em PGRs é o erro humano na digitação/atribuição. A API mata esse erro.",
  ],
  finalChecklist: [
    "Posso explicar o que é uma API para uma pessoa leiga.",
    "Compreendo o valor comercial de ter uma frota com múltiplos rastreadores em uma só tela.",
    "Entendo como funciona o envio de comandos remotos (sirene/bloqueio) via API.",
  ],
  mindMap: {
    root: "Integrações AtlasGR",
    branches: [
      { label: "Softwares", items: ["APIs", "ERP (Nota Fiscal)", "TMS (Fretes)"] },
      { label: "Hardwares", items: ["Agnóstico", "Fabricantes (Sascar/etc)"] },
      { label: "Ações", items: ["Receber Posicionamento", "Enviar Bloqueio", "Zero Digitação"] },
    ],
  },
  scenario:
    "Cenário Prático: O cliente diz que o Operador dele prefere usar o sistema do rastreador direto do que o Connect. Explique a ele por que o sistema do rastreador não ajuda em nada quando a apólice de seguro entra na jogada.",
  diagram: {
    title: "O Hub Omnicanal",
    chart: "graph TD\n  SistCliente[ERP/TMS Cliente] <-->|APIs de NF/Frete| Connect((Atlas Connect))\n  Rastreador1[Hardware Sascar] -->|Posição GPS| Connect\n  Rastreador2[Hardware Omnilink] -->|Posição GPS| Connect\n  Connect -->|Comandos de Bloqueio| Rastreador1",
  },
};
