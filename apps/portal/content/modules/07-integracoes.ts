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
    "Aplicar o checklist de homologação técnica para evitar que erros de integração cheguem à produção.",
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
      id: "capitulo-4-onboarding-tecnico",
      title: "Capítulo 4: Homologação e os Erros que Derrubam uma Integração",
      blocks: [
        {
          type: "text",
          heading: "Integração Não é 'Plugou, Funcionou'",
          paragraphs: [
            [
              "Todo cliente novo acha que ligar o Connect ao ERP dele é como conectar um fone Bluetooth. Não é. Antes de qualquer integração ir para produção, existe uma fase de homologação — e é justamente essa fase que separa uma Torre de Controle confiável de uma Torre que gera sinistro por falha de dado.",
            ],
            [
              "Um evento de posição errado não é só um detalhe técnico: se a carga sofrer um sinistro e o log do rastreador estiver com o horário trocado, a seguradora e a SUSEP vão questionar a apólice inteira. Por isso o onboarding técnico é tratado com o mesmo rigor de um PGR.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Checklist de Homologação Pré-Produção",
          items: [
            "Validar o fuso horário (timezone) de cada fonte de dado — ERP, TMS e cada fabricante de rastreador enviam timestamp do jeito que bem entendem.",
            "Conferir a ordem das coordenadas GPS (latitude/longitude) recebidas do fabricante antes de plotar no mapa do Connect.",
            "Rodar um lote de teste com eventos duplicados de propósito, para confirmar que o Connect deduplica e não abre duas viagens para a mesma NF.",
            "Simular queda de sinal do rastreador e verificar se o alerta de 'perda de comunicação' dispara corretamente na Central 24/7.",
            "Testar o envio de comando bidirecional (bloqueio/sirene) em ambiente controlado antes de liberar para o operador em campo.",
            "Validar de ponta a ponta o vínculo Isca/Placa/NF para garantir que nenhum evento fique órfão no sistema.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Os Três Vilões da Integração",
          text: [
            "Na prática, 90% dos chamados de 'o rastreador está mentindo' se resumem a três causas: fuso horário configurado errado no fabricante (a carreta 'viaja no tempo'), latitude e longitude invertidas (o caminhão aparece dirigindo no meio do oceano) e duplicidade de eventos (a mesma viagem é criada duas vezes e a operação vê 'fantasmas' no mapa). Nenhuma dessas é falha do Connect — é dado ruim entrando por uma porta que a gente não fechou direito.",
          ],
        },
        {
          type: "faq",
          items: [
            {
              q: "Por que não colocamos a integração direto em produção, já que o cliente tem pressa?",
              a: "Porque um erro de fuso horário só aparece quando alguém compara o horário do evento com o horário real do sinistro — e nesse ponto já é tarde. Homologar antes é mais barato do que explicar depois.",
            },
            {
              q: "Quem faz esse checklist, o comercial ou a TI?",
              a: "A TI executa os testes técnicos, mas o time comercial/CS precisa saber que ele existe para não prometer 'integração pronta em 1 dia' para o cliente.",
            },
            {
              q: "E se o fabricante do rastreador não seguir nenhum padrão?",
              a: "É basicamente todos eles. Por isso a Atlas mantém uma camada de tradução própria para cada fabricante homologado — é trabalho de tradutor, não de milagre.",
            },
          ],
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
      { label: "Ações", items: ["Receber Posicionamento", "Enviar Bloqueio", "Zero Digitação", "Homologar Antes de Produção"] },
    ],
  },
  scenario:
    "Cenário Prático: O cliente diz que o Operador dele prefere usar o sistema do rastreador direto do que o Connect. Explique a ele por que o sistema do rastreador não ajuda em nada quando a apólice de seguro entra na jogada.",
  diagram: {
    title: "O Hub Omnicanal",
    chart: "graph TD\n  SistCliente[ERP/TMS Cliente] <-->|APIs de NF/Frete| Connect((Atlas Connect))\n  Rastreador1[Hardware Sascar] -->|Posição GPS| Connect\n  Rastreador2[Hardware Omnilink] -->|Posição GPS| Connect\n  Connect -->|Comandos de Bloqueio| Rastreador1",
  },
};
