import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("01-bem-vindo-atlasgr")!;

export const module01: ModuleContentFull = {
  ...meta,
  sources: [
    "Política Organizacional e Ética (v2.1)",
    "CARGOS.pdf — Organograma",
    "Apresentação Institucional AtlasGR",
    "Jornada do Colaborador",
  ],
  objectives: [
    "Compreender profundamente a origem, o propósito e os valores inegociáveis da ATLASGR no ecossistema logístico.",
    "Mapear mentalmente a estrutura organizacional de alta performance e a cadeia de comando da Torre de Controle.",
    "Assimilar as políticas rígidas de compliance corporativo e ética empresarial em operações de alto risco.",
    "Conhecer a trilha de desenvolvimento contínuo e os recursos da Universidade Corporativa.",
    "Reconhecer falhas operacionais críticas durante a integração e dominar a matriz de avaliação do período de experiência.",
      "Dominar a tríade metodológica da AtlasGR (Contexto, Problema, Solução) para resolução de problemas complexos.",
      "Incorporar a visão de longo prazo e as exigências corporativas de nível Enterprise em todas as tratativas."
],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Propósito Inegociável da AtlasGR",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "text",
          heading: "A Gênese da Inteligência Logística Avançada",
          paragraphs: [
            [
              "Antes da AtlasGR, o mercado brasileiro sofria com um modelo de segurança obsoleto e essencialmente reativo. A fundação da empresa, em 2004, foi disruptiva: substituir o rastreamento post-mortem de cargas subtraídas por uma arquitetura preditiva capaz de antecipar e neutralizar o risco antes de sua materialização.",
            ],
            [
              "Nosso propósito inabalável: ",
              { term: "gr" },
              " — 'Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação'. A tecnologia, embora robusta, é apenas o meio. É a nossa elite operacional humana, moldada por esta Universidade Corporativa, que converte dados brutos em inteligência acionável e decisões de alto impacto financeiro.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Na AtlasGR, não monitoramos pontos no mapa; protegemos a integridade da economia circulante e a reputação de nossos clientes.",
          author: "Diretoria de Operações AtlasGR"
        },
        {
          type: "callout",
          variant: "success",
          title: "Sua Missão Operacional",
          text: [
            "Através destas Trilhas de Aprendizagem, você escalará de novato a Especialista Enterprise. O Onboarding é sua fundação tática. Absorva cada diretriz como se a próxima decisão na Torre de Controle dependesse exclusivamente da sua precisão.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-historia",
      title: "Capítulo 1: Linha do Tempo e Evolução Tecnológica",
      blocks: [
        {
          type: "timeline",
          title: "Da Fundação à Era da Inteligência Artificial",
          items: [
            { label: "2004", text: "A semente: Fundação da AtlasGR estabelecendo novos paradigmas e processos rigorosos de PGR." },
            { label: "2010", text: "Expansão nacional massiva: Abertura da Torre de Controle Operacional 24/7." },
            { label: "2018", text: "Inovação tecnológica disruptiva: Desenvolvimento interno do sistema preditivo e integração de APIs de alta conectividade." },
            { label: "2024", text: "Maturidade do Portfólio: Consolidação definitiva dos 4 pilares estratégicos (Profile, Connect, GR, Analytics)." },
            { label: "2026", text: "A Revolução do Conhecimento: Lançamento do AtlasGR Enterprise Learning, alavancando tutoria via IA para escalar o treinamento corporativo." },
          ],
        },
      ],
    },
    {
      id: "capitulo-2-cultura",
      title: "Capítulo 2: Cultura de Excelência e Valores na Prática",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Os valores não são jargões de parede; são algoritmos de conduta para quando o script falha. Diante de uma crise sistêmica, são os pilares éticos da AtlasGR que balizarão a sua capacidade de tomar a decisão cirúrgica correta no menor tempo possível.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Os 5 Pilares de Alta Performance",
          left: {
            label: "Valores Essenciais",
            points: ["Perseverança Resiliente", "Transparência Absoluta", "Simplicidade Ágil", "Atitude de Dono Inegociável", "Inovação Contínua"],
          },
          right: {
            label: "Comportamento Esperado na Operação",
            points: [
              "Nunca aceitar a primeira justificativa superficial em investigações de desvio tático.",
              "Comunicação direta, reportando falhas imediatamente para mitigação de danos colaterais.",
              "Descomplicar fluxos burocráticos otimizando o SLA sem comprometer o cinturão de segurança.",
              "Gerenciar uma operação milionária com o zelo de quem protege seu próprio capital.",
              "Propor ativamente melhorias de processo, alimentando o ciclo de engenharia reversa.",
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-3-estrutura",
      title: "Capítulo 3: Arquitetura Organizacional",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A corporação opera como um organismo vivo e altamente sincronizado, orquestrado em 5 macro-Diretorias. O Comercial capitaliza a inteligência desenvolvida pela TI, que é potencializada pelo DHO, e finalmente executada com precisão letal pelas Operações.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "As Engrenagens do Ecossistema AtlasGR",
          items: [
            "TI (Tecnologia da Informação): Engenharia do Connect, arquitetura de IA e infraestrutura cloud de alta disponibilidade.",
            "DHO (Desenvolvimento Humano e Organizacional): O guardião da cultura de alta performance, orquestrador da Universidade Corporativa e curador de talentos.",
            "Comercial / Administrativo: O motor financeiro, especializado em negociação de contratos enterprise e estruturação de faturamento.",
            "Relações Institucionais: Diplomacia estratégica com forças de segurança (Polícias, PRF, ANTT) para recuperação tática.",
            "Operações (Torre e CIA): O front de batalha. Execução cirúrgica do monitoramento de milhares de ativos em tempo real, 24 horas por dia.",
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso Forense: A Atitude de Dono Salvando Milhões",
      blocks: [
        {
          type: "case",
          title: "O Operador que Sobrescreveu o Algoritmo (Para Proteger o Ativo)",
          text: "Em 2023, um operador sênior detectou uma anomalia não documentada: o PGR de um embarcador premium não exigia escolta armada em um trecho específico da rota, porém, sua análise empírica apontava para uma escalada de ataques naquela malha rodoviária nas últimas 72 horas. Exercendo a 'Atitude de Dono', ele interrompeu preventivamente o trânsito da carreta, escalonou a situação com a supervisão tática e obteve aprovação emergencial para escolta. Um comboio concorrente, seguindo logo atrás, foi interceptado. A proatividade estratégica da AtlasGR salvou R$ 2.5 Milhões em ativos.",
          source: "Repositório Confidencial de Cases AtlasGR"
        },
        {
          type: "callout",
          variant: "warning",
          title: "Insight Operacional",
          text: [
            "Processos são vitais, mas eles existem para servir ao ecossistema de segurança. Quando o contexto diverge do modelo, o escalonamento proativo evidencia a superioridade da inteligência humana sobre o algoritmo básico.",
          ],
        },
      ],
    },
    {
      id: "capitulo-4-primeiros-90-dias",
      title: "Capítulo 4: O Ramp-up dos Primeiros 90 Dias — Avaliação e Performance",
      blocks: [
        {
          type: "text",
          heading: "A Curva de Aprendizado Acelerado",
          paragraphs: [
            [
              "A maestria na Torre não é inata; ela é forjada. Durante o ciclo de experiência (45+45 dias), você será imerso em operações reais e avaliado em três checkpoints críticos: 30, 60 e 90 dias, por uma banca conjunta de Liderança e DHO.",
            ],
            [
              "A métrica de sucesso não é a ausência de erros sistêmicos no início, mas a velocidade de adaptação, resiliência e aderência cultural. Os desvios mapeados abaixo são recorrentes e frequentemente resultam em attrition prematuro. Estude-os para não repeti-los.",
            ],
          ],
        },
        {
          type: "stat",
          items: [
            { value: "30", label: "Dias - Foco em adaptação e aderência cultural." },
            { value: "60", label: "Dias - Foco em fluência de processo e escalonamento." },
            { value: "90", label: "Dias - Foco em autonomia operacional e decisão." }
          ]
        },
        {
          type: "checklist",
          title: "Fator Crítico de Falha: Evite Estes Erros",
          items: [
            "Assumir prazos ou soluções irreais com clientes sem a validação tática da Operação — a assinatura de risco é corporativa, não individual.",
            "Vazar dados sensíveis (LGPD) através de canais não criptografados ou corporativos (ex: WhatsApp pessoal) ao gerenciar informações de condutores.",
            "Saturar o canal da C.I.A. com ruídos operacionais de baixo nível, prejudicando o tempo de resposta para incidentes de alta gravidade.",
            "Diagnosticar erroneamente atrasos logísticos triviais como sinistros iminentes, disparando pânico falso no embarcador.",
            "Violar o protocolo de Segurança da Informação através do compartilhamento de credenciais de acesso, sob a falsa premissa de 'agilidade'.",
            "Omitir dúvidas cruciais. Na AtlasGR, o silêncio custa muito mais caro do que a ignorância temporária.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "O Ponto Cego da Performance",
          text: [
            "A omissão de falhas é o maior preditor de desligamento na avaliação de 60 dias. O ambiente de alta complexidade tolera o erro de aprendizado; ele abomina o encobrimento do erro.",
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
                    "**Contexto Operacional:** A cultura corporativa é o alicerce que sustenta operações logísticas de alto risco.",
                    "**O Problema (Dor do Cliente):** A ausência de alinhamento ético e operacional pode resultar em hesitação durante crises, custando milhões em ativos."
                  ]
                },
                right: {
                  label: "A Resposta AtlasGR",
                  points: [
                    "**A Solução Tecnológica/Processual:** A AtlasGR instaura 5 Valores inegociáveis e a mentalidade de 'Atitude de Dono', garantindo resoluções assertivas sob pressão extrema.",
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
      title: "Materiais Complementares e Certificação",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Para solidificar sua base ética, devore o Código de Conduta Integrado disponível no portal corporativo.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ação Imediata",
          items: [
            "Submeta-se ao Simulador de Decisão Tática deste módulo.",
            "Inicie a Trilha 01 - Módulo 02 para dominar a mecânica do Mercado Logístico.",
            "Monitore seu progresso e conquistas de XP no dashboard de performance.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A AtlasGR é a vanguarda na predição algorítmica e análise humana de risco logístico.",
    "Os 5 pilares fundamentais são os filtros absolutos para decisões críticas sob estresse.",
    "A sinergia entre as 5 diretorias blinda o SLA entregue ao cliente final.",
    "A Atitude de Dono transforma operadores passivos em analistas preventivos formidáveis.",
      "A metodologia de Contexto-Problema-Solução assegura que a tecnologia atue como um facilitador estratégico.",
      "Nossos padrões seguem frameworks rigorosos de governança Enterprise, onde falhas processuais não têm espaço."
],
  finalChecklist: [
    "Compreendo visceralmente o propósito e o código ético da AtlasGR.",
    "Domino a função estratégica da TI, DHO, Comercial, R.I. e Operações.",
    "Internalizei a lição forense do caso 'Atitude de Dono'.",
  ],
  mindMap: {
    root: "O Universo AtlasGR",
    branches: [
      { label: "Identidade Central", items: ["Propósito", "5 Valores"] },
      { label: "Arquitetura", items: ["TI", "DHO", "Operações", "Comercial"] },
      { label: "Performance", items: ["Atitude de Dono", "Estudo de Caso", "Avaliação 30/60/90"] },
    ],
  },
  scenario:
    "Cenário Prático: Um cliente VIP exige uma customização que flagrantemente burla protocolos de contingência da apólice. Qual a matriz de escalonamento correta (envolvendo quais áreas) para mitigar o desgaste sem comprometer o risco?",
  diagram: {
    title: "Sinergia das Diretorias",
    chart: "graph TD\n  AtlasGR --> TI\n  AtlasGR --> DHO\n  AtlasGR --> Operacoes\n  AtlasGR --> Comercial",
  },
};
