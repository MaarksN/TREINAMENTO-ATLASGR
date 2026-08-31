import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("07-integracoes")!;

export const module07: ModuleContentFull = {
  ...meta,
  sources: [
    "Documentação de Integração e Arquitetura API AtlasGR",
    "Manuais de Tecnologias Embarcadas (Hardwares Agnósticos)",
  ],
  objectives: [
    "Desmistificar o conceito técnico de APIs e integração de dados B2B de forma corporativa.",
    "Compreender a atuação da Atlas como 'Hub Omnicanal e Tradutor Universal' no ecossistema logístico.",
    "Explicar o trunfo comercial do 'Zero Digitação', que elimina o erro humano na montagem de PGRs.",
    "Dominar a importância e os riscos dos comandos remotos bidirecionais (Atuação de risco).",
    "Aplicar rigorosamente o checklist de homologação técnica antes de subir qualquer integração para a produção.",
      "Dominar a tríade metodológica da AtlasGR (Contexto, Problema, Solução) para resolução de problemas complexos.",
      "Incorporar a visão de longo prazo e as exigências corporativas de nível Enterprise em todas as tratativas."
],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Hub Logístico Universal",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "quote",
          text: "Sem integração, não existe Torre de Controle. Existe apenas um batalhão de pessoas digitando e errando dados o dia todo.",
          author: "Arquiteto de Integrações AtlasGR"
        },
        {
          type: "text",
          heading: "Falando Todas as Línguas Simultaneamente",
          paragraphs: [
            [
              "O ecossistema logístico é fragmentado e caótico. A transportadora fatura fretes no sistema X (ex: SSW), o grande embarcador exige auditorias no sistema Y (ex: SAP), os rastreadores das carretas transmitem no protocolo A (Sascar) e as iscas secundárias no protocolo B (Isca Gold).",
            ],
            [
              "A mágica comercial e operacional da AtlasGR é ser o Tradutor Universal. Nossa plataforma Atlas Connect ingere esses milhares de dados caóticos, padroniza tudo, cruza regras de segurança em tempo real, e exibe o teatro de operações em uma única tela perfeita. É o fim das dezenas de monitores paralelos.",
            ],
          ],
        },
        {
          type: "stat",
          items: [
            { value: "Zero", label: "Digitação necessária após a integração total via API." },
            { value: "100%", label: "Precisão no vínculo de dados de rastreadores e notas fiscais." }
          ]
        },
      ],
    },
    {
      id: "capitulo-1-apis",
      title: "Capítulo 1: O Poder Transformador das APIs",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "API (Application Programming Interface) não é um bicho-papão de programador; é simplesmente um 'mensageiro digital blindado'. É o garçom que pega o seu pedido de Nota Fiscal no ERP do cliente e entrega diretamente na cozinha do Atlas Connect.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "O Caos vs A Automação Atlas",
          left: {
            label: "Mundo Analógico (A Dor)",
            points: ["Assistente imprime notas fiscais e redigita as placas no sistema de monitoramento.", "Erro de digitação causa o espelhamento da carreta errada (Falso Positivo de Risco).", "A seguradora recusa o pagamento do sinistro porque o PGR foi imputado com delay e a carreta já havia saído do galpão."],
          },
          right: {
            label: "Integração Atlas (A Solução)",
            points: ["A NF-e é faturada no TMS da transportadora.", "Em milissegundos, a API cria a viagem, engata a isca correta, consulta o motorista no Profile e aciona o PGR.", "A viagem é monitorada antes mesmo do motor ligar, sem um único toque no teclado do operador."],
          },
        },
      ],
    },
    {
      id: "capitulo-2-hardwares",
      title: "Capítulo 2: Agnosticismo e o Tradutor de Hardwares",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A estratégia comercial da AtlasGR brilha no seu conceito de 'Agnosticismo de Hardware'. Nós não dizemos ao grande frotista: 'Jogue seus 500 rastreadores caríssimos no lixo e compre os nossos'. Nós dizemos: 'Não importa qual hardware você tenha, nós o conectaremos no Atlas Connect'.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "A Centralização Absoluta",
          items: [
            "Frotas Híbridas: Se o cliente tem 30 caminhões com Autotrac, 20 com OnixSat e 50 agregados apenas com celular, a Torre da Atlas unifica os 100 veículos no mesmo mapa.",
            "Sem silos de dados: O gestor logístico do cliente não precisa mais de três telas abertas. O Atlas Connect se torna a única fonte da verdade (Single Source of Truth).",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-bidirecionalidade",
      title: "Capítulo 3: Bidirecionalidade — O Poder de Atuação Remota",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Integrações comuns de mercado apenas 'leem' onde o caminhão está. A integração da AtlasGR é bidirecional de nível tático militar. A plataforma lê a telemetria, mas também envia comandos letais direto ao coração mecânico do veículo, independente do fabricante do hardware.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "O Fluxo de um Bloqueio Bidirecional",
          items: [
            { label: "1. O Alerta", text: "O sensor acusa desvio crônico de rota para área de risco no Rio de Janeiro." },
            { label: "2. O Comando", text: "O operador da Torre Atlas clica no botão 'Cortar Combustível' diretamente na nossa interface Connect." },
            { label: "3. A Tradução", text: "Nossa API traduz o comando para o dialeto do hardware instalado (ex: linguagem OmniLink)." },
            { label: "4. A Ação", text: "O comando viaja via rede satelital e o motor engasga e trava. Tudo executado e registrado nos nossos logs, sem acessar a plataforma do concorrente." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Eliminação do Erro Humano",
      blocks: [
        {
          type: "case",
          title: "O Fim dos Esquecimentos Fatais",
          text: "Em 2022, um gigante logístico sofria 2 sinistros graves por mês em eletrônicos. A investigação provou: na loucura do carregamento, o encarregado esquecia de registrar a Isca Móvel na viagem no painel web, deixando a carga secundária cega. A Atlas aplicou a API pesada. A partir de então, o simples bip do leitor de código de barras na caixa criava automaticamente o vínculo inquebrável (NF-e + Isca + Placa) no Connect. Nos 18 meses seguintes, os roubos consumados caíram a zero. Retirar a mão humana do teclado tirou o principal calcanhar de aquiles da segurança.",
          source: "Case de Sucesso de API - Comercial e Tecnologia AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-onboarding-tecnico",
      title: "Capítulo 4: Homologação e o Risco do Fuso Horário",
      blocks: [
        {
          type: "text",
          heading: "Integração Impecável Requer Homologação Rigorosa",
          paragraphs: [
            [
              "O maior erro que um Executivo de Contas pode cometer é prometer 'integração pronta para amanhã'. Conectar sistemas complexos exige o Onboarding Técnico, fase de homologação que previne desastres sistêmicos antes que alcancem o ambiente de produção.",
            ],
            [
              "Um evento gravado com 3 horas de erro por conta de fuso horário mal configurado pode dar margem jurídica para a seguradora negar R$ 4 Milhões de indenização.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Checklist Crítico de Homologação (O que testamos antes de ir ao ar)",
          items: [
            "Sincronismo de Fuso Horário (Timezone): Garantir que a latitude batida às 14:00 no ERP entre às 14:00 no Connect (evitar caminhões 'viajando no tempo').",
            "Inversão de Coordenadas: Checar se o fabricante não inverteu Latitude e Longitude, plotando frotas inteiras no oceano.",
            "Deduplicação de Eventos: Confirmar que a integração não criará 3 viagens repetidas se o TMS do cliente mandar o mesmo comando de faturamento três vezes por erro de conexão local.",
            "Testes Táticos: Enviar bloqueios e sirenes testes para garantir que a bidirecionalidade não foi podada no firewall do terceiro.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A Defesa Contra o 'Rastreador Mentiroso'",
          text: [
            "Quando um cliente reclama que 'O Atlas Connect está mostrando o caminhão no lugar errado', em 99% das vezes o problema é dado corrompido ou atrasado vindo da API do hardware que o cliente instalou. Por isso a homologação deve ser fria, baseada em logs auditáveis.",
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
                    "**Contexto Operacional:** Transportadoras utilizam múltiplos sistemas (ERP, TMS) e hardwares de telemetria variados.",
                    "**O Problema (Dor do Cliente):** Silos de dados e incompatibilidade entre rastreadores impedem uma visão centralizada da operação."
                  ]
                },
                right: {
                  label: "A Resposta AtlasGR",
                  points: [
                    "**A Solução Tecnológica/Processual:** A AtlasGR atua como um hub agnóstico, integrando centenas de tecnologias via APIs robustas em uma única tela de controle.",
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
    "APIs de integração removem horas de digitação e a chance de erros humanos causarem recusas de seguro.",
    "Agnosticismo de hardware posiciona a Atlas como concentradora definitiva da gestão, acolhendo qualquer tecnologia do mercado.",
    "Comandos Bidirecionais capacitam nossa Torre de Controle a atacar ameaças ativamente na própria interface.",
    "Todo fluxo técnico deve ser precedido por Homologação; erros de timezone ou coordenadas causam o colapso do monitoramento.",
      "A metodologia de Contexto-Problema-Solução assegura que a tecnologia atue como um facilitador estratégico.",
      "Nossos padrões seguem frameworks rigorosos de governança Enterprise, onde falhas processuais não têm espaço."
],
  finalChecklist: [
    "Consigo ilustrar o valor comercial (ROI) gerado pela redução drástica do erro de digitação de PGR.",
    "Entendo que Bidirecionalidade é a capacidade de enviar comandos de travamento ao invés de apenas ler relatórios.",
    "Compreendo o papel do Checklist de Homologação para proteger a Atlas contra falhas sistêmicas de terceiros.",
  ],
  mindMap: {
    root: "Ecossistema de Integrações",
    branches: [
      { label: "Integração B2B (APIs)", items: ["Conexão ERP/TMS", "Zero Digitação", "Abertura Automática de Viagem"] },
      { label: "Hardware Agnóstico", items: ["Hub Centralizador", "Multimarcas de Rastreadores"] },
      { label: "Ação (Bidirecional)", items: ["Leitura de Telemetria", "Envio de Bloqueio/Sirene"] },
      { label: "Onboarding Técnico", items: ["Validação de Fuso Horário", "Deduplicação", "Testes Isolados"] },
    ],
  },
  scenario:
    "Cenário Prático: O Diretor Comercial de um cliente novo diz: 'Tenho Sascar nos caminhões caros, e Omnilink nos baratos. O seu sistema obriga a trocar tudo? Como eu aciono a Sirene nos baratos?' Como você rebate essa dúvida ressaltando nossos pontos fortes?",
  diagram: {
    title: "A Arquitetura Agnóstica Atlas",
    chart: "graph TD\n  ERP[ERP do Cliente (Notas)] -->|API Inbound| Connect((Atlas Connect))\n  Rast1[Hardware A] -->|Posições| Connect\n  Rast2[Hardware B] -->|Posições| Connect\n  Connect -->|Comandos API Outbound| Rast1\n  Connect -->|Comandos API Outbound| Rast2",
  },
};
