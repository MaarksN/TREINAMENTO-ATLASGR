import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("02-mercado-logistica")!;

export const module02: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado (content/modules/meta.ts)",
    "Dados ANTT e CNT 2024",
    "Treinamento Operacional Avançado AtlasGR",
  ],
  objectives: [
    "Dominar a topologia complexa da cadeia de suprimentos e as vulnerabilidades de seus elos críticos.",
    "Categorizar de forma impecável o Embarcador, a Transportadora e o Operador Logístico no ecossistema.",
    "Correlacionar tipologias de carga com curvas de atratividade criminal e vetores de ataque.",
    "Mapear zonas de exclusão, clusters de risco e arquitetura de sistemas integradores logísticos.",
    "Diagnosticar os impactos catastróficos de rupturas de cadeia em modais estruturais sobre o fluxo do gerenciamento de risco.",
      "Dominar a tríade metodológica da AtlasGR (Contexto, Problema, Solução) para resolução de problemas complexos.",
      "Incorporar a visão de longo prazo e as exigências corporativas de nível Enterprise em todas as tratativas."
],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Tabuleiro Estratégico da Logística",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "text",
          heading: "Visão Macro e Modelagem de Cenários",
          paragraphs: [
            [
              "Para forjar-se como especialista em mitigação de riscos, a compreensão prévia das peças do tabuleiro logístico é inegociável. O Brasil, de dimensões continentais, escoa cerca de 65% de suas riquezas via matriz rodoviária.",
            ],
            [
              "A AtlasGR opera como o árbitro implacável de segurança neste ecossistema de alto atrito, assegurando a conformidade rígida das regras entre a indústria produtora, a transportadora operadora e a seguradora financeira.",
            ],
          ],
        },
        {
          type: "quote",
          text: "A logística não é apenas movimentar caixas; é o sistema circulatório da economia global. O risco não gerenciado é um infarto iminente.",
          author: "Especialista em Logística"
        },
        {
          type: "callout",
          variant: "info",
          title: "A Complexidade Operacional Oculta",
          text: [
            "Um único comboio pode transportar eletrônicos de múltiplas indústrias, protegido por diferentes apólices e regido por PGRs conflitantes. O motor algorítmico do Atlas Connect é a chave para desatar esse nó logístico dinamicamente.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-atores",
      title: "Capítulo 1: Os Atores da Cadeia de Suprimentos",
      blocks: [
        {
          type: "comparison",
          title: "Mapeamento dos Players",
          left: {
            label: "O Embarcador (Indústria/Varejo)",
            points: [
              "É o proprietário legal da carga (Ex: Samsung, Mercado Livre).",
              "Exigência Core: Aderência absoluta ao SLA de entrega e integridade do ativo.",
              "Vulnerabilidade Crítica: Atrasos sistêmicos, avarias térmicas e desvios que corrompem a cadeia de estoque.",
            ],
          },
          right: {
            label: "A Transportadora",
            points: [
              "Proprietária ou gestora da frota e do recurso humano tracionador.",
              "Exigência Core: Maximização de produtividade da frota e conformidade para não anular coberturas securitárias.",
              "Vulnerabilidade Crítica: Ociosidade, acidentes catastróficos e sinistros totais de equipamentos.",
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            [
              "Destaca-se ainda o Operador Logístico, um maestro sem frota própria ou posse de carga, que orquestra galpões e quarteriza fluxos. Para estes orquestradores, o valor supremo reside na visibilidade panóptica e na previsibilidade entregue pelo Atlas Connect.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-2-cargas",
      title: "Capítulo 2: Tipologia de Ativos e Taxonomia de Risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A natureza do protocolo de resposta tática varia drasticamente em função do conteúdo do baú. Essa variável define o índice de 'Atratividade Criminal'.",
            ],
          ],
        },
        {
          type: "stat",
          items: [
            { value: "Altíssima", label: "Atratividade para Eletrônicos e Fármacos (Alvo de quadrilhas especializadas)" },
            { value: "Alta", label: "Atratividade para Alimentos e Bebidas e Bens de Consumo" },
            { value: "Baixa", label: "Atratividade para Graneis brutos (Risco maior de desvios operacionais e micro-furtos)" }
          ]
        },
        {
          type: "checklist",
          title: "Matriz Qualitativa de Risco",
          items: [
            "Alto Valor / Alta Atratividade: Eletrônicos, Fármacos, Tênis de grife. (Alvo de crime organizado hiper-especializado. SLA de tolerância zero para anomalias de parada. Iscas eletrônicas mandatórias).",
            "Carga Perigosa (Hazmat): Combustíveis, Químicos. (O foco principal transmuta do roubo para a catástrofe ambiental e risco de explosão).",
            "Carga Perecível (Cold Chain): Carnes de exportação, vacinas. (Risco máximo de avaria financeira em caso de quebra de refrigeração ou atrasos no trânsito).",
            "Granel Bruto: Commodities. (Menor atratividade para grandes arrastões; o PGR foca na mitigação de desvios crônicos e micro-furtos).",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-sistemas",
      title: "Capítulo 3: Integração Sistêmica e Interoperabilidade (TMS/ERP)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A interoperabilidade é o alicerce da eficiência. O ",
              { term: "tms" },
              " (Transport Management System) é a espinha dorsal de faturamento e roteirização do cliente. O Atlas Connect se acopla via APIs de alta performance ao TMS, injetando uma camada de segurança preditiva em tempo real.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "O TMS pode substituir as funcionalidades do Atlas Connect?", a: "Jamais. O TMS é desenhado para otimizar faturamento e logística. O Atlas Connect é uma suíte de guerra desenhada para Governança de Risco em tempo real e prevenção a sinistros." },
            { q: "Qual o benefício crítico dessa integração via API?", a: "Automação extrema. Elimina a dupla digitação, suprime a margem de erro humano no cadastro de espelhos de viagem e acelera exponencialmente o SLA de liberação." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso Forense: O Viés de Classificação",
      blocks: [
        {
          type: "case",
          title: "O Cobre que Camuflou-se de Granel",
          text: "Análise forense: Um cliente recente iniciou o transporte de fios de cobre virgem, erroneamente mapeando o ativo como 'Granel / Baixo Risco' no seu TMS. Durante um descanso em área erma, a Torre tratou a anomalia seguindo o protocolo de baixo risco. O ativo (avaliado em R$ 1 Milhão) foi subtraído com facilidade. O diagnóstico não apontou falha no Connect, mas um viés grave na calibração inicial do PGR. Este case sedimenta a necessidade da consultoria arquitetônica da AtlasGR para alinhar perfeitamente o perfil de atratividade às contingências sistêmicas.",
          source: "Auditorias de Gestão de Risco Avançado"
        },
      ],
    },
    {
      id: "capitulo-4-modais-e-rupturas",
      title: "Capítulo 4: Modais Estruturais e Rupturas de Cadeia",
      blocks: [
        {
          type: "text",
          heading: "A Vulnerabilidade do Asfalto",
          paragraphs: [
            [
              "A aposta histórica do Brasil na malha rodoviária gerou uma matriz onde o escoamento industrial depende de eixos de asfalto altamente expostos, ao invés de modais mais protegidos como a ferrovia.",
            ],
            [
              "Este não é apenas um detalhe estatístico; é a razão de ser da AtlasGR. Diferente da ferrovia, com acessos rigidamente controlados, a rodovia expõe o ativo em milhares de quilômetros de acostamentos vulneráveis, postos não homologados e zonas de intercepção tática.",
            ],
          ],
        },
        {
          type: "stat",
          items: [
            { value: "~65%", label: "Matriz Rodoviária Nacional" },
            { value: "~15%", label: "Matriz Ferroviária Nacional" },
            { value: "~20%", label: "Cabotagem, Dutoviário e Aeroviário" },
          ],
        },
        {
          type: "comparison",
          title: "Análise de Trade-offs: Rodoviário vs. Ferroviário",
          left: {
            label: "Rodoviário (Alta Flexibilidade, Alta Exposição)",
            points: [
              "Dinâmica porta a porta sem necessidade de baldeação complexa.",
              "Malha hiperpeneável.",
              "Exposição severa: o ativo transita isolado, suscetível a múltiplas ameaças externas.",
              "Exige a sobreposição de inteligência (Atlas Connect) para neutralizar a fragilidade física do modal.",
            ],
          },
          right: {
            label: "Ferroviário (Baixa Flexibilidade, Alta Blindagem)",
            points: [
              "Otimização extrema de custo por tonelada transportada em longos eixos.",
              "Risco de intercepção armada estatisticamente irrisório em comparação ao asfalto.",
              "Vulnerável na dependência de transbordo (o 'último quilômetro' rodo-dependente).",
            ],
          },
        },
        {
          type: "case",
          title: "O Choque Sistêmico de Maio de 2018",
          text: "A paralisia rodoviária de 2018 expôs a fragilidade letal de uma cadeia sem resiliência modal. Com as artérias rodoviárias estranguladas, o país enfrentou colapso no abastecimento em dias. Para a gestão de risco de elite, o evento foi pedagógico: um PGR robusto deve antecipar contingências de escala sistêmica, não apenas incidentes pontuais. Rotas de evasão, checkpoints de refúgio e protocolos dinâmicos de parada sob crise tornaram-se o novo padrão ouro.",
          source: "Modelagem de Crise AtlasGR"
        },
        {
          type: "callout",
          variant: "warning",
          title: "O Insight do Analista",
          text: [
            "A dependência crítica de um modal único transforma qualquer fricção local — uma greve, um bloqueio tático — em um colapso em cadeia de nível nacional.",
          ],
        },
      ],
    },
      {
            id: "analise-arquitetura-solucao",
            title: "Arquitetura da Solução: A Tríade de Alta Performance",
            blocks: [
              {
                type: "text",
                heading: "Metodologia Aplicada AtlasGR",
                paragraphs: [
                  [
                    "Para compreendermos a magnitude da nossa operação, aplicamos a estrutura de raciocínio lógico que guia o desenvolvimento de nossos produtos e processos. Esta é a visão corporativa exigida de todos os especialistas da AtlasGR."
                  ]
                ]
              },
              {
                type: "comparison",
                title: "Desconstrução Estratégica (Contexto vs. Solução)",
                left: {
                  label: "O Cenário e a Ameaça",
                  points: [
                    "**Contexto Operacional:** A cadeia de suprimentos depende da sincronia perfeita entre Embarcadores, Transportadoras e Operadores Logísticos.",
                    "**O Problema (Dor do Cliente):** Rupturas de visibilidade, roubos e acidentes geram perdas catastróficas e quebra de SLAs."
                  ]
                },
                right: {
                  label: "A Resposta AtlasGR",
                  points: [
                    "**A Solução Tecnológica/Processual:** O ecossistema AtlasGR integra TMS, monitoramento e inteligência preditiva para blindar o ativo e garantir o 'On Time Delivery'.",
                    "**Impacto Gerado:** Redução drástica de perdas, garantia de SLA e proteção absoluta do ecossistema logístico."
                  ]
                }
              },
              {
                type: "faq",
                items: [
                  { q: "Como essa metodologia se aplica na minha rotina?", a: "Toda decisão que você tomar deve ser guiada por esta lógica: entender o contexto da viagem, identificar rapidamente o problema (anomalia) e aplicar a solução (protocolo) com precisão milimétrica." },
                  { q: "O que acontece se pularmos a etapa do problema e formos direto à solução?", a: "Agir sem entender a real 'dor' ou causa raiz gera falsos positivos e atrito com o cliente. A análise pericial é inegociável." }
                ]
              }
            ]
          },
    {
      id: "materiais-complementares",
      title: "Recursos Complementares e Consolidação",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "As Áreas de Risco (Zonas de Exclusão) são geofences críticas configuradas no Connect. Polígonos de até 200km ao redor das grandes metrópoles forçam a elevação drástica dos níveis de alerta e proíbem pernoites não homologados.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Próxima Etapa Operacional",
          items: [
            "Avance para a validação teórica do simulador.",
            "Inicie o Módulo 03 para um mergulho profundo nas táticas de Gerenciamento de Risco.",
          ],
        },
      ],
    },
  ],
  summary: [
    "O ecossistema é balanceado entre a indústria (SLA e Integridade) e a transportadora (Custo e Apólice).",
    "A atratividade do ativo dita o grau de blindagem exigido pelo PGR.",
    "A orquestração logística opera sobre integrações de altíssimo desempenho (TMS + Atlas Connect).",
    "As geofences de metrópoles atuam como disparadores de contingências automatizadas.",
      "A metodologia de Contexto-Problema-Solução assegura que a tecnologia atue como um facilitador estratégico.",
      "Nossos padrões seguem frameworks rigorosos de governança Enterprise, onde falhas processuais não têm espaço."
],
  finalChecklist: [
    "Distingo com precisão o papel tático do Embarcador, Transportadora e Operador.",
    "Compreendo a necessidade crítica de iscas secundárias em ativos de alta atratividade.",
    "Domino o conceito e a funcionalidade de um TMS integrado à AtlasGR.",
  ],
  mindMap: {
    root: "O Mercado Logístico Avançado",
    branches: [
      { label: "Atores", items: ["Embarcador", "Transportadora", "Operador Logístico", "Modais de Impacto"] },
      { label: "Taxonomia de Ativos", items: ["Alta Atratividade", "Cold Chain", "Hazmat"] },
      { label: "Ecossistema Digital", items: ["TMS", "ERP", "Atlas Connect"] },
    ],
  },
  scenario:
    "Cenário Prático: Diante de um severo engarrafamento, a central de uma transportadora solicita o desligamento das travas de baú de uma carga de fármacos para 'otimizar o tempo'. Qual é a tratativa exigida pela AtlasGR à luz das normativas do PGR?",
  diagram: {
    title: "Cadeia de Suprimentos Básica",
    chart: "graph LR\n  Fabrica --> Embarcador\n  Embarcador --> OperadorLogistico\n  OperadorLogistico --> Transportadora\n  Transportadora --> ClienteFinal",
  },
};
