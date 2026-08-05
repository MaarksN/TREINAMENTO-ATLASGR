import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("02-mercado-logistica")!;

export const module02: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado (content/modules/meta.ts)",
    "Dados ANTT e CNT 2024",
    "Treinamento Operacional AtlasGR",
  ],
  objectives: [
    "Dominar o conceito da cadeia de suprimentos e seus elos críticos.",
    "Diferenciar perfeitamente Embarcador, Transportadora e Operador Logístico.",
    "Categorizar os tipos de carga e associá-los ao nível de atratividade criminal.",
    "Mapear as zonas de risco e os sistemas integradores da logística.",
    "Comparar os modais de transporte do Brasil e entender como uma ruptura de cadeia (como uma greve de caminhoneiros) impacta diretamente a operação de gerenciamento de risco.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Tabuleiro da Logística",
      blocks: [
        {
          type: "text",
          heading: "Visão Geral do Cenário",
          paragraphs: [
            [
              "Para ser um especialista em risco, você precisa primeiro entender as peças do tabuleiro logístico. O Brasil é um país continental com 65% de suas mercadorias fluindo pelo asfalto.",
            ],
            [
              "A AtlasGR é o árbitro de segurança nesse jogo, garantindo que as regras entre a indústria (quem produz), a transportadora (quem move) e a seguradora (quem protege o financeiro) sejam cumpridas à risca.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A Complexidade Oculta",
          text: [
            "Um único caminhão pode carregar eletrônicos de 3 empresas diferentes, possuir 2 seguros distintos, e ser exigido por 3 PGRs conflitantes. Nosso sistema desata esse nó diariamente.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-atores",
      title: "Capítulo 1: Os Jogadores e a Cadeia de Suprimentos",
      blocks: [
        {
          type: "comparison",
          title: "Quem é Quem?",
          left: {
            label: "O Embarcador (Indústria/Varejo)",
            points: [
              "É o dono da carga. Ex: Samsung, Coca-Cola, Mercado Livre.",
              "Exige: Prazos rigorosos (SLA de entrega) e integridade do produto.",
              "Ameaça primária: Atrasos, avarias de temperatura, roubo que fura estoque.",
            ],
          },
          right: {
            label: "A Transportadora",
            points: [
              "É o dono do meio de transporte (caminhões e motoristas).",
              "Exige: Produtividade da frota e conformidade para não perder o seguro.",
              "Ameaça primária: Custos de combustível, acidentes, perda de caminhões.",
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            [
              "Existe também o Operador Logístico, que não é dono da carga nem do caminhão. Ele orquestra os galpões e quarteiriza o frete. Para eles, a visibilidade macro oferecida pelo Atlas Connect é o produto mais valioso.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-2-cargas",
      title: "Capítulo 2: Tipos de Carga e Níveis de Risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O protocolo de reação a um alerta muda drasticamente dependendo do que está dentro da carreta. A isso damos o nome de Atratividade.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Matriz de Classificação de Risco",
          items: [
            "Alto Valor / Alta Atratividade: Eletrônicos, Fármacos, Tênis de grife. (Alvo de quadrilhas super especializadas. Tolerância zero para paradas. Uso de iscas obrigatório).",
            "Carga Perigosa: Combustíveis, Produtos Químicos. (O risco de roubo existe, mas o risco ambiental e explosão em caso de acidente é a maior dor).",
            "Carga Perecível (Frigorificada): Carnes de exportação. (Risco extremo de avaria se o refrigerador falhar ou a viagem atrasar).",
            "Granel Bruto: Grãos, Minério de Ferro. (Baixíssima atratividade para roubo armado, foca-se na prevenção de desvios pontuais).",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-sistemas",
      title: "Capítulo 3: A Integração Sistêmica (TMS/ERP)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Você ouvirá a sigla ",
              { term: "tms" },
              " diariamente. O Transport Management System é onde o cliente cria rotas, emite fretes e paga motoristas. O Connect interliga via API o TMS do cliente à nossa torre.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "TMS substitui o Atlas Connect?", a: "Nunca. O TMS foca no Faturamento. O Connect foca na Segurança e Gestão de Risco em Tempo Real." },
            { q: "Por que integramos?", a: "Para que o cliente não precise digitar a mesma placa e NF duas vezes. A integração evita erros humanos e acelera a liberação da viagem." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: O Erro de Classificação",
      blocks: [
        {
          type: "case",
          title: "O Cobre que virou Eletrônico",
          text: "Um novo cliente começou a enviar cargas de fios de cobre puro, mas no sistema as cadastrou como 'Granel / Baixo Risco'. O motorista parou em um local ermo, a torre tratou como rotina de nível baixo. A carga (avaliada em 1 milhão de reais) foi roubada. A falha não foi do Connect, foi do cadastro da Matriz de Risco do cliente. Esse case reforça a importância da consultoria inicial da AtlasGR: alinhar o PGR à atratividade real da carga.",
          source: "Relatórios de Gestão de Risco",
        },
      ],
    },
    {
      id: "capitulo-4-modais-e-rupturas",
      title: "Capítulo 4: Modais de Transporte e Rupturas na Cadeia",
      blocks: [
        {
          type: "text",
          heading: "Por Que Tudo Depende do Asfalto",
          paragraphs: [
            [
              "O Brasil construiu sua matriz de transporte de carga nas décadas de 1950 e 1970, apostando quase todas as fichas na malha rodoviária. O resultado, décadas depois, é um país que movimenta a maior parte da sua produção industrial e agrícola dentro de uma carreta — e não dentro de um vagão.",
            ],
            [
              "Para a gestão de risco, isso não é um detalhe técnico: é o motivo pelo qual a AtlasGR existe. Ferrovia tem trilho fixo, poucos pontos de acesso e vigilância concentrada. Rodovia tem milhares de quilômetros de acostamento, postos de combustível, balanças e paradas obrigatórias — ou seja, milhares de oportunidades de exposição.",
            ],
          ],
        },
        {
          type: "stat",
          items: [
            { value: "~65%", label: "da carga nacional roda pelo modal rodoviário" },
            { value: "~15%", label: "trafega pelo modal ferroviário" },
            { value: "~20%", label: "divide-se entre cabotagem, dutoviário e aéreo" },
          ],
        },
        {
          type: "comparison",
          title: "Rodoviário vs. Ferroviário: Trade-offs de Risco",
          left: {
            label: "Rodoviário",
            points: [
              "Flexibilidade total: porta a porta, sem necessidade de baldeação.",
              "Malha extensa e capilar, chega onde a ferrovia nunca vai chegar.",
              "Exposição alta: motorista sozinho, rota aberta, múltiplos pontos de parada vulneráveis a assalto e desvio de rota.",
              "É o motivo pelo qual o Atlas Connect existe: rastreamento contínuo compensa a exposição estrutural do modal.",
            ],
          },
          right: {
            label: "Ferroviário",
            points: [
              "Custo por tonelada mais baixo em grandes distâncias e cargas homogêneas (minério, grãos, combustível).",
              "Risco de assalto armado praticamente irrelevante comparado à rodovia.",
              "Baixíssima flexibilidade: depende de terminais fixos e integração rodoviária na ponta (o chamado 'último quilômetro').",
              "Investimento e malha ainda muito aquém da demanda, o que trava a migração de carga para o modal.",
            ],
          },
        },
        {
          type: "case",
          title: "Maio de 2018: Quando o Brasil Parou",
          text: "A greve dos caminhoneiros de 2018 paralisou o país em poucos dias porque não havia plano B: com quase dois terços da carga nacional dependente de estradas, o desabastecimento de combustível, remédios e alimentos se espalhou em tempo recorde. Para as operações de gerenciamento de risco, o episódio virou um divisor de águas — mostrou que um PGR não pode tratar apenas de roubo de carga. Ele precisa prever cenários de ruptura sistêmica: rotas alternativas mapeadas, protocolos de comunicação com o embarcador em tempo real e critérios claros para decidir quando um caminhão deve parar (arriscando saque de manifestantes) ou seguir viagem (arriscando bloqueios e acidentes). Quem já tinha esses cenários desenhados perdeu dias; quem não tinha, perdeu contratos inteiros.",
          source: "Análise de Continuidade Operacional AtlasGR",
        },
        {
          type: "callout",
          variant: "warning",
          title: "A Lição para o Analista de Risco",
          text: [
            "Dependência de modal único é, em si, um risco de gerenciamento de risco. Quando 65% do país se move por um único tipo de estrada, qualquer bloqueio, greve ou pedágio de facção vira um evento de escala nacional — não um incidente isolado que um único PGR resolve sozinho.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Zonas de Risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Áreas de Risco são mapeamentos de polígonos nas rodovias. SP, RJ e Salvador possuem raios de 200km onde protocolos extras (como contato frequente e proibição de pernoite) são mandatórios.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Próximos Passos",
          items: [
            "Conclua a simulação de tomada de decisão abaixo.",
            "Prepare-se para o Módulo 03: Gerenciamento de Risco Aprofundado.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A indústria (embarcador) foca no SLA de entrega e segurança; a transportadora foca no custo e cumprimento da apólice.",
    "A atratividade da carga (eletrônicos vs granel) dita o rigor do PGR.",
    "A logística depende de integrações sólidas entre TMS, ERP e o nosso Atlas Connect.",
    "O mapeamento de áreas de risco em raios de até 200km ao redor de metrópoles dispara protocolos automáticos.",
  ],
  finalChecklist: [
    "Diferencio Embarcador de Transportadora.",
    "Sei explicar por que eletrônicos exigem iscas e não apenas rastreamento primário.",
    "Entendo o que um TMS faz e por que ele precisa da Atlas.",
  ],
  mindMap: {
    root: "Mercado Logístico",
    branches: [
      { label: "Jogadores", items: ["Embarcador", "Transportadora", "Operador", "Modal Rodoviário x Ferroviário"] },
      { label: "Tipos de Carga", items: ["Alto Valor", "Perecível", "Perigosa"] },
      { label: "Sistemas", items: ["TMS", "ERP", "Connect"] },
    ],
  },
  scenario:
    "Cenário: Uma transportadora liga pedindo para desativar os protocolos de 'Alto Risco' de uma carga de remédios para ganhar tempo de viagem. Qual a postura da AtlasGR baseada no PGR?",
  diagram: {
    title: "Cadeia Básica",
    chart: "graph LR\n  Fabrica --> Embarcador\n  Embarcador --> OperadorLogistico\n  OperadorLogistico --> Transportadora\n  Transportadora --> ClienteFinal",
  },
};
