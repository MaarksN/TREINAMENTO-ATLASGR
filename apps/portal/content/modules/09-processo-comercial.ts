import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("09-processo-comercial")!;

export const module09: ModuleContentFull = {
  ...meta,
  sources: [
    "Playbook Comercial Corporativo AtlasGR 2026",
    "Arquitetura do Funil de Vendas B2B Complexo",
  ],
  objectives: [
    "Compreender a jornada completa da venda B2B complexa e o papel de cada especialista (SDR e Closer).",
    "Dominar o mapeamento e enquadramento de leads no ICP (Perfil de Cliente Ideal).",
    "Aprender as técnicas avançadas de contorno de objeções de preço e escopo operacional.",
    "Reconhecer que a Torre de Operações dita o sucesso ou o fracasso no momento crucial da Renovação (Prevenção de Churn).",
    "Aprender a agir preditivamente aos sinais de alerta de cancelamento de clientes estratégicos.",
      "Dominar a tríade metodológica da AtlasGR (Contexto, Problema, Solução) para resolução de problemas complexos.",
      "Incorporar a visão de longo prazo e as exigências corporativas de nível Enterprise em todas as tratativas."
],
  sections: [
    {
      id: "introducao",
      title: "Introdução: A Engenharia de Vendas B2B",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "quote",
          text: "A melhor venda é a renovação silenciosa de um cliente que confia sua sobrevivência ao nosso painel, porque nós já impedimos que sua empresa afundasse num sinistro não pago.",
          author: "Diretor Comercial B2B"
        },
        {
          type: "text",
          heading: "Venda Complexa é Jogo de Xadrez, Não Tiro ao Alvo",
          paragraphs: [
            [
              "Um contrato AtlasGR não é um produto de prateleira (SaaS básico). É uma decisão estratégica que leva meses, engaja a Diretoria de Operações, o TI, a corretora de seguros e os acionistas. É uma autêntica venda complexa B2B.",
            ],
            [
              "Para navegar esse labirinto decisório, nosso time comercial é metrificado por estágios no funil, do primeiro gatilho de mercado à contínua governança que previne o cancelamento (Churn).",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-1-icp",
      title: "Capítulo 1: O Alvo — ICP (Ideal Customer Profile)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Tempo é o ativo mais caro de um executivo comercial. Tentar vender inteligência logística de alto padrão para quem não tem infraestrutura ou fluxo financeiro é queimar pipeline.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Onde Dedicamos Energia",
          left: {
            label: "O ICP de Ouro (Score Alto)",
            points: [
              "Frotas pesadas (mais de 50 carretas) ou embarcadores de marcas líderes em seu setor.",
              "Clientes lidando com mercadorias visadas (eletrônicos, farmacêuticos, defensivos, combustível).",
              "Operadores sob pressão severa das grandes companhias de seguro por melhoria contínua de risco.",
            ],
          },
          right: {
            label: "Descarte Precoce (No Go)",
            points: [
              "Pequenos agregados, operações focadas exclusivamente no mercado local com cargas de areia, cimento ou sucata.",
              "Transportadoras sem apólice ou onde a segurança tecnológica é vista estritamente como custo e não investimento em governança.",
            ],
          },
        },
        {
          type: "stat",
          items: [
            { value: "3 a 6 meses", label: "Tempo médio do ciclo de vendas para grandes contratos B2B" },
            { value: "300%", label: "Maior chance de conversão ao engajar decisores adequados do cliente logo na fase de Demo." }
          ]
        },
      ],
    },
    {
      id: "capitulo-2-gatilhos",
      title: "Capítulo 2: Gatilhos de Mercado e a Dor como Catalisador",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Empresas robustas raramente compram sistemas puramente pela inovação. Elas contratam soluções como a AtlasGR em momentos de transição ou crise.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Eventos Geradores de Pipeline",
          items: [
            "Trauma Financeiro (Sinistro): A empresa sofreu perdas milionárias e percebeu que o gerenciamento anterior (ou a falta dele) foi inútil.",
            "Paredão do Seguro: O corretor avisa que a renovação da apólice vai dobrar de preço ou ser recusada a menos que uma Torre Profissional assuma a malha.",
            "A Exigência do Gigante: Uma grande multinacional (ex: Samsung, Amazon) convida a transportadora para uma cotação, mas impõe exigência de integração API total e visibilidade web em tempo real (Painel Connect).",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-objecoes",
      title: "Capítulo 3: Contornando Objeções Clássicas",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "O cliente diz: 'O seu sistema é 20% mais caro do que o meu atual rastreador web básico.'", a: "Defesa: Nós reposicionamos o debate do Preço para o Risco. O rastreador simples apenas aponta no mapa que seu veículo está sendo roubado. A AtlasGR bloqueia o veículo preventivamente, aciona autoridades da C.I.A e assegura que a corretora homologará a tratativa, salvando milhões." },
            { q: "O cliente diz: 'Já tenho o Atlas Connect para ver o mapa, não quero pagar a licença do Analytics.'", a: "Defesa: O Connect controla o hoje (ação). O Analytics otimiza o amanhã (estratégia). Com o B.I., você verá que gastou R$ 300 mil a mais em horas extras nas docas, cobrindo o custo da licença com uma semana de correção." },
          ],
        },
      ],
    },
    {
      id: "capitulo-4-renovacao-churn",
      title: "Capítulo 4: A Operação como Retenção (Prevenindo o Churn)",
      blocks: [
        {
          type: "text",
          heading: "A Batalha Oculta da Renovação",
          paragraphs: [
            [
              "Assinar o contrato é gerar expectativa; entregar o serviço na Torre é a validação de que não mentimos. O cancelamento (Churn) não começa quando o cliente pede distrato no email. Ele começa na primeira madrugada em que o cliente liga para a nossa central para relatar um pânico e o operador leva 10 minutos para iniciar a ação letal de bloqueio.",
            ],
          ],
        },
        {
          type: "case",
          title: "A Defesa do Contrato com Logs Táticos",
          text: "Um cliente nível Enterprise ameaçou cancelar após receber proposta de um concorrente de 'baixo custo'. O Customer Success e o Operador Sênior não ofereceram desconto; abriram os logs do Atlas GR. Apresentaram estatísticas frias e relatórios técnicos provando que, nos últimos 8 meses, nossos bloqueios preventivos automáticos anularam cinco tentativas flagrantes de invasão de cabine e desvio no anel viário de SP, justificando totalmente a manutenção da apólice de risco do cliente. A prova operacional esmagou o argumento de preço, garantindo renovação por mais dois anos.",
          source: "Repositório de CS - AtlasGR",
        },
        {
          type: "checklist",
          title: "Sintomas Críticos (Sinais de Churn Iminente)",
          items: [
            "Gestor do contrato (Champion) da empresa parou de responder às pautas mensais ou usar as credenciais da plataforma.",
            "Elevação não resolvida e acumulada de chamados técnicos referentes a lentidão de integração com o ERP do cliente.",
            "Fusão ou troca severa do quadro de diretores do cliente, o que exige recomeçar todo o ciclo de convencimento para não perder o contrato no mês seguinte.",
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
                    "**Contexto Operacional:** Vendas complexas B2B (Enterprise) exigem mapeamento profundo dos tomadores de decisão.",
                    "**O Problema (Dor do Cliente):** Desconhecimento das dores reais do lead resulta em objeções intransponíveis e churn precoce."
                  ]
                },
                right: {
                  label: "A Resposta AtlasGR",
                  points: [
                    "**A Solução Tecnológica/Processual:** Nosso processo aplica SPIN Selling e inteligência de mercado para posicionar a AtlasGR como parceira estratégica insubstituível.",
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
          }
],
  summary: [
    "Foco no ICP elimina esforços estéreis em vendas logísticas corporativas.",
    "O pipeline é alimentado pela identificação cirúrgica dos gatilhos de crise do mercado (roubos ou pressão de seguradoras).",
    "Objeções baseadas em custo devem ser imediatamente pivotadas para discussões baseadas em blindagem de risco e auditoria corporativa.",
    "A Torre Operacional é a principal barreira contra o churn, construindo a argumentação tática que sustenta a renovação milionária de fim de ano.",
      "A metodologia de Contexto-Problema-Solução assegura que a tecnologia atue como um facilitador estratégico.",
      "Nossos padrões seguem frameworks rigorosos de governança Enterprise, onde falhas processuais não têm espaço."
],
  finalChecklist: [
    "Posso descrever a diferença entre o trabalho focado de pipeline (SDR) e o fechamento estratégico (Closer).",
    "Conheço a argumentação para desconstruir o apelo ilusório de fornecedores focados puramente em preço.",
    "Compreendo a importância crítica de agir nas etapas iniciais e sutis de churn (ex: o cliente deixando de usar o sistema diariamente).",
  ],
  mindMap: {
    root: "Estratégia Comercial B2B",
    branches: [
      { label: "Mapeamento e Filtro", items: ["Definição de ICP (Grandes players, Alta periculosidade)", "Qualificação Rigorosa"] },
      { label: "Trilha de Venda", items: ["Identificação de Gatilho (Dor)", "Consultoria em Demo", "Fechamento de Contrato de Risco"] },
      { label: "Governança e CS", items: ["Atendimento Primoroso na Torre", "Logs como Ferramenta Anti-Churn", "Análise de Uso e Renovação"] },
    ],
  },
  scenario:
    "Cenário Prático: Um lead liga e você constata que ele possui apenas 3 caminhões de frete urbano de calcário e tem zero histórico com apólice de carga restritiva. Ele pede uma proposta comercial do pacote 'Torre Full'. Qual é sua ação, sabendo da definição do nosso ICP?",
  diagram: {
    title: "O Funil Contínuo de Retenção Atlas",
    chart: "graph TD\n  Gatilho[Crise ou Exigência] --> ICP{Lead está no ICP?}\n  ICP -- Sim --> Negociacao[Demo e Objeção B2B]\n  ICP -- Não --> Descarte[No-Go]\n  Negociacao --> Assinatura[Contrato Ativo]\n  Assinatura --> Torre[Torre e CS constroem Valor (12 Meses)]\n  Torre --> Renovacao[Churn Evitado / Upsell]",
  },
};
