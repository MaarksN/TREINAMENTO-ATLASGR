import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("13-tecnologia")!;

export const module13: ModuleContentFull = {
  ...meta,
  sources: [
    "Visão Estratégica AtlasGR 2026",
    "Showcase de produto Atlas Analytics",
    "Manuais de Telemetria Avançada",
  ],
  objectives: [
    "Diferenciar de forma definitiva a logística Reativa da logística Preditiva.",
    "Compreender a revolução das câmeras embarcadas com IA (Sensores de Safety e Fadiga).",
    "Descrever como o Atlas Analytics entrega valor executivo e gera retenção.",
    "Entender que a IA não demite o bom operador, mas potencializa sua eficiência.",
    "Reconhecer os limites da IA (falso positivo e viés de dados) e por que a decisão final é sempre humana.",
      "Dominar a tríade metodológica da AtlasGR (Contexto, Problema, Solução) para resolução de problemas complexos.",
      "Incorporar a visão de longo prazo e as exigências corporativas de nível Enterprise em todas as tratativas."
],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Fim do Achismo Logístico",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Monitoramento por inteligência artificial, processamento de milhões de dados em tempo real."
        },
        {
          type: "text",
          heading: "A Decisão Balizada por Dados",
          paragraphs: [
            [
              "Na década passada, a logística global operava essencialmente na base da intuição. Gestores de frotas determinavam padrões pautando-se em 'achismos' históricos (ex: 'eu acho que a rota X gera mais acidentes no inverno'). Hoje, a AtlasGR obliterou a especulação e transformou a gestão de risco em uma disciplina científica incontestável.",
            ],
            [
              "Operando algoritmos de detecção preditiva e inserindo modelos avançados de Inteligência Artificial no habitáculo do motorista através da moderna Telemetria, antecipamos falhas críticas antes da ocorrência do sinistro. Este módulo é a imersão na mais alta tecnologia do transporte global.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Inteligência Artificial na logística não prevê o futuro, mas lê o presente de forma tão rápida que o acidente torna-se um mero erro contornável.",
          author: "Inovação Técnica AtlasGR"
        },
        {
          type: "callout",
          variant: "info",
          title: "O Paradigma Central",
          text: [
            "Atuar de modo PREDITIVO significa literalmente interceder ANTES que a disfunção aconteça. O ápice do sucesso de um contrato da AtlasGR ocorre quando todo o nosso ecossistema opera silenciosamente sem jamais necessitar o acionamento emergencial da Torre de Controle.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-reativo-vs-preditivo",
      title: "Capítulo 1: A Consolidação da Era da Predição",
      blocks: [
        {
          type: "comparison",
          title: "A Ruptura Sistêmica do Mercado",
          left: {
            label: "O Processo Analógico (Reativo)",
            points: [
              "Tragédia consumada: O acidente ou o desvio ocorre silenciosamente.",
              "Acionamento forense: A empresa embarcadora apenas formaliza as perdas junto às corretoras.",
              "Foco centrado na mitigação do prejuízo financeiro e na complexidade e lentidão dos processos de indenização."
            ],
          },
          right: {
            label: "O Processo Tecnológico (Atlas Preditivo)",
            points: [
              "Padrão quebrado: Algoritmos de IA detectam oscilações críticas ou comportamentais antes da consolidação do dano.",
              "Ação proativa de intervenção: Sistemas bloqueiam as engrenagens, enviando macros assertivas e estabilizando a frota.",
              "Manutenção do TCO (Custo Total da Propriedade), preservando os lucros dos embarcadores."
            ],
          },
        },
        {
          type: "stat",
          items: [
            { value: "40%", label: "Redução de roubos preditivos no primeiro semestre" },
            { value: "88%", label: "De assertividade nos alertas de fadiga" }
          ]
        },
      ],
    },
    {
      id: "capitulo-2-safety",
      title: "Capítulo 2: Protocolos de Safety (DMS) e Monitoramento de Cabine",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A crença popular aponta o assaltante armado como a principal ameaça à logística. A estatística mostra outra realidade. O maior predador de cargas e vidas operacionais nas rodovias sul-americanas é fisiológico: a fadiga extrema.",
            ],
            [
              "Através de sistemas de visão computacional embarcados (DMS), câmeras treinadas por IA avaliam a biometria facial, as oscilações oculares e a postura física do condutor em frações de segundos.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Aplicações Táticas da IA na Cabine",
          items: [
            "**Supressão de Fadiga**: Os algoritmos identificam micro-piscadas alongadas e o declínio da estrutura craniana. O sistema aciona alarmes altíssimos e motores vibratórios no assento do motorista (Haptic Feedback), além de disparar sinalização imediata à Torre.",
            "**Inibição de Distração**: O simples ato de interagir com o celular ao volante dispara, em milissegundos, gravação de evidências remetidas a um dashboard de auditoria, sujeitando o condutor a sanções empresariais.",
            "**Demarcação Dinâmica (Geofencing)**: Quando múltiplas composições freiam com violência num percurso idêntico, a plataforma Atlas elege o trecho como 'Zona Crítica Temporária' devido a névoa, chuva extrema ou problemas rodoviários."
          ],
        },
      ],
    },
    {
      id: "capitulo-3-analytics",
      title: "Capítulo 3: Atlas Analytics — O Cérebro do Negócio",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Dashboards analíticos gerando inteligência decisória para a alta gestão."
        },
        {
          type: "text",
          paragraphs: [
            [
              "A ocorrência solitária de um pneu estourado caracteriza um problema logístico menor, quase trivial. No entanto, o estouro repetitivo em centenas de veículos numa fatia específica da BR-116 sinaliza a necessidade de readequação nacional nas rotas operacionais. Essa inteligência macroeconômica é entregue pelo ",
              { term: "Atlas Analytics" },
              ".",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Arquitetura de Geração de Valor Operacional",
          items: [
            { label: "1. Absorção Contínua", text: "Centrais do Connect processam milhões de telemetrias diárias (sensores termo-cinéticos, travas de segurança e tempo real)." },
            { label: "2. Higienização Estrutural", text: "Modelos massivos baseados em Machine Learning filtram falsos-positivos e cruzam dados para identificar clusters comportamentais." },
            { label: "3. Empacotamento Visual", text: "Entrega de visualizações interativas em tempo real à diretoria executiva, apontando a relação entre rotas e Custo Marginal de Sinistros." },
            { label: "4. Ação e Reinvenção", text: "Gestores e diretores corporativos alteram a malha inteira do fornecimento logístico pautados nas exatas diretrizes prescritas pelo Analytics da AtlasGR." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo Analítico: A Conta Paga Pela Falta de Prevenção",
      blocks: [
        {
          type: "case",
          title: "O Sinistro Automotivo de Perda Total",
          text: "Uma imponente transportadora, focada puramente na otimização de OPEX (despesas operacionais), vetou a adoção do pacote de Câmeras de Fadiga (Safety) apontando-o como supérfluo. Dois meses após a recusa sistemática, numa viagem expressa de R$ 2.5 Milhões com insumos automotivos escassos, o condutor experimentou um evento severo de sono pesado. A colisão que se seguiu esmagou totalmente o bitrem. As compensações processuais sobre a carga se arrastaram, enquanto os ativos físicos da transportadora e a imensa responsabilização civil pelo estrago foram catastróficas. Caso a implantação tecnológica da AtlasGR existisse ali, as vibrações mecânicas da cabine alertariam o condutor cerca de seis cruciais segundos antes da catástrofe estrutural profunda.",
          source: "Repositório Estratégico de Cases Comerciais",
        },
      ],
    },
    {
      id: "capitulo-4-limites-da-ia",
      title: "Capítulo 4: Os Contornos de Falibilidade da IA",
      blocks: [
        {
          type: "text",
          heading: "Por que 'Human-in-the-Loop' (HITL) é Irsubstituível",
          paragraphs: [
            [
              "Cuidado com o conforto proporcionado pela automatização profunda. A Inteligência Artificial da AtlasGR não substitui a responsabilidade final. O modelo cumpre gloriosamente um desígnio: sinalizar a anomalia através de dados comportamentais. Todavia, a decisão final que empenha credibilidade humana perante órgãos policiais, seguradoras e peritos permanece unicamente atrelada ao OPERADOR.",
            ],
            [
              "Conhecemos essa simbiose por 'Human in the loop' (Homem na tomada de decisão). Nós depuramos gigabytes de incidentes ruidosos para garantir que a ocorrência real chegue límpida em sua tela de Controle. Descartar essa curadoria humana transformaria a nossa companhia num software vazio.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A Dependência Cega Caracteriza Negligência",
          text: [
            "Os algoritmos derivam seu aprendizado da acumulação histórica. O fato de uma via intermunicipal não dispor de histórico criminoso não isenta o operador do cumprimento do protocolo de checagem. Ignorar um alerta justificado meramente porque 'o Score preditivo acusa baixo risco' e o cenário rodoviário mudou bruscamente na véspera revela a pior transgressão possível. Seja vigilante.",
          ],
        },
        {
          type: "comparison",
          title: "Sinergia Tecnológico-Operacional",
          left: {
            label: "O Território da Máquina",
            points: [
              "Processa fluxos paroxísticos de milhares de eventos coligados com tolerância ao cansaço infinita.",
              "Aponta rapidamente falhas na cadeia do Motor de Regras e estabelece Scores quantitativos dinâmicos.",
              "Gerencia a hierarquia tática da Fila de Alertas prioritária.",
            ],
          },
          right: {
            label: "A Jurisdição do Operador Humano",
            points: [
              "Correlacionar fatores intangíveis (recessos econômicos súbitos, instabilidades ou blecautes regionais).",
              "Deliberar com precisão cirúrgica perante falsos positivos e sinistros graves disfarçados.",
              "Responsabilizar-se pelo registro cartorial oficial do protocolo perante o Sistema."
            ],
          },
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
                    "**Contexto Operacional:** O volume de dados gerado por milhões de viagens excede a capacidade de análise puramente humana.",
                    "**O Problema (Dor do Cliente):** A dependência exclusiva de processos manuais torna a prevenção lenta e reativa."
                  ]
                },
                right: {
                  label: "A Resposta AtlasGR",
                  points: [
                    "**A Solução Tecnológica/Processual:** Implementamos modelos de Inteligência Artificial e Analytics avançado para predizer anomalias e otimizar rotas preventivamente.",
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
      title: "Próximos Passos Táticos",
      blocks: [
        {
          type: "checklist",
          title: "Diretrizes",
          items: [
            "Familiarize-se profundamente com as plataformas do portal, especialmente a apresentação interativa sobre Analytics.",
            "Prepare-se intensamente para o próximo (e penúltimo) bloco de treinamento: A unificação de todo este conhecimento nos grandiosos 'Casos Reais' operados pela empresa.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A adoção em larga escala de IA não marginaliza a presença humana, e sim direciona a capacidade humana para deliberações iminentemente críticas.",
    "Sistemas de Safety, notadamente aqueles para detecção de anomalias faciais (Fadiga) representam a vanguarda na preservação integral da cadeia patrimonial e biológica.",
    "Atlas Analytics consubstancia o pináculo valorativo da oferta da AtlasGR, conferindo rentabilidade a diretores (C-Level).",
    "Modelos de IA aprendem padrões, o ser humano delibera o contexto das exceções.",
      "A metodologia de Contexto-Problema-Solução assegura que a tecnologia atue como um facilitador estratégico.",
      "Nossos padrões seguem frameworks rigorosos de governança Enterprise, onde falhas processuais não têm espaço."
],
  finalChecklist: [
    "Possuo proficiência discursiva entre a mecânica Reativa e a metodologia Preditiva inerentes ao escopo da AtlasGR.",
    "Entendo o funcionamento orgânico e mecânico dos sensores de Safety de Cabine.",
    "Assimilo perfeitamente que falsos-positivos são intrínsecos a algoritmos complexos, razão da nossa constante mediação manual.",
  ],
  mindMap: {
    root: "O Complexo Tecnológico",
    branches: [
      { label: "Inteligência Estrutural", items: ["Predição", "Aprendizado Contínuo", "Estatísticas Operacionais"] },
      { label: "Hardware de Defesa", items: ["Monitor Facial", "Detecção de Sonolência", "Alertas Híbridos (Som/Vibração)"] },
      { label: "Visão Macro", items: ["Dashboard C-Level", "Análise Dinâmica de Custos", "Refinamento das Rotas"] },
    ],
  },
  scenario:
    "Desafio Comportamental: Durante uma varredura sistêmica, você constata que um condutor deliberadamente obstruiu o foco da câmera DMS alegando invasão de privacidade e queixa de cansaço emocional. Paralelamente, os sensores enviam sinal vermelho contínuo ('Hardware Obstruído'). Apoiado nas normativas estruturais de combate preventivo do AtlasGR, qual é a resposta imediata?",
  diagram: {
    title: "O Ecossistema Preditivo em Fluxo",
    chart: "graph LR\n  A[Sensores Ativos na Cabine e Motor] --> B[Camadas de IA Processando o Sinal]\n  B --> C[Alarme Inteligente na Torre de Operação]\n  C --> D[Intervenção Cirúrgica ou Desbloqueio Analisado]\n  D --> E[Armazenamento em Data Lake]\n  E --> F[Dashboard Prescritivo Atlas Analytics - Diretoria]",
  },
};
