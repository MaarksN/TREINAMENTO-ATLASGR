import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("12-compliance")!;

export const module12: ModuleContentFull = {
  ...meta,
  sources: [
    "Política Organizacional e Ética (v2.1) — seções 9 a 12",
    "LGPD (Lei nº 13.709/2018)",
    "Normas de Segurança da Informação AtlasGR",
  ],
  objectives: [
    "Dominar as regras da LGPD e sua aplicação prática no dia a dia da Torre.",
    "Identificar ataques de Engenharia Social (Falso Cliente / Ameaças).",
    "Assumir a postura de tolerância zero com o vazamento de informações operacionais.",
    "Compreender o uso restrito e monitorado dos ativos da empresa.",
    "Executar corretamente o protocolo de resposta a incidentes nas primeiras horas após a suspeita de um vazamento de dados.",
      "Dominar a tríade metodológica da AtlasGR (Contexto, Problema, Solução) para resolução de problemas complexos.",
      "Incorporar a visão de longo prazo e as exigências corporativas de nível Enterprise em todas as tratativas."
],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Fator Humano",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "A segurança cibernética corporativa tem como maior foco a educação humana, a principal barreira defensiva."
        },
        {
          type: "text",
          heading: "A Maior Vulnerabilidade do Sistema",
          paragraphs: [
            [
              "Os servidores da AtlasGR estão abrigados sob protocolos de criptografia de nível militar, redundância e firewalls rigorosos. Contudo, na segurança cibernética corporativa moderna, um cofre de titânio de nada serve se o guardião da porta entrega a chave sob a menor pressão. O fator humano é sempre o elo mais volátil da cadeia de proteção.",
            ],
            [
              "Este módulo foca na construção da sua blindagem mental e tática. Um vazamento de dados não resulta apenas no roubo milionário de uma carga; resulta em catástrofes de reputação, perdas de contratos internacionais, multas exorbitantes pela Agência Nacional de Proteção de Dados (ANPD) e processos com desdobramentos penais.",
            ],
          ],
        },
        {
          type: "quote",
          text: "A tecnologia mais avançada do mundo não consegue defender uma empresa contra o colaborador negligente ou desatento.",
          author: "Diretoria de Compliance — AtlasGR"
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tolerância Zero Absoluta",
          text: [
            "Não existe 'advertência branda' para compartilhamento de senhas ou captação de imagens (fotos da tela) da Torre de Controle. Tais ações disparam a rescisão imediata do contrato de trabalho e o imediato acionamento jurídico da companhia.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-lgpd",
      title: "Capítulo 1: A Lei Geral de Proteção de Dados (LGPD)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O ecossistema da AtlasGR não monitora meramente carretas e motores de caminhões; nós processamos vastos volumes de dados pessoais. O CPF do motorista, a biometria facial, e os seus padrões de deslocamento pertencem EXCLUSIVAMENTE a ele. A AtlasGR atua apenas como processadora autorizada.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "A Regra Sagrada da Necessidade (Need-to-Know)",
          items: [
            "Você só tem permissão funcional e legal para acessar a ficha de um condutor se estiver ativamente gerenciando um alerta ligado a ele naquele momento.",
            "Sob nenhuma hipótese repasse detalhes sensíveis (ex: histórico criminal) de um motorista para gestores de transportadoras via WhatsApp ou canais informais.",
            "O cliente e a transportadora recebem apenas decisões lógicas: Status 'Aprovado' ou 'Não Recomendado'. A justificativa minuciosa é restrita aos bancos de dados de inteligência.",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-engenharia-social",
      title: "Capítulo 2: Hackeando a Mente (Engenharia Social)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Engenharia Social é a arte criminosa de usar a persuasão, o medo reverencial, ou a falsa urgência para compelir um operador a quebrar as regras de compliance que ele foi treinado para seguir.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "O Falso Diretor: 'Sou diretor do embarcador XYZ. A carga está bloqueada. Libere a senha agora ou rasgo o contrato com a AtlasGR!'", a: "Protocolo: Exija a dupla verificação por meio de contatos oficiais cadastrados. Lembre-se: nenhum diretor legítimo ordenará a quebra de um protocolo de segurança em andamento. Se houver insistência hostil, recuse o fornecimento e reporte ao DHO." },
            { q: "O Falso Técnico de TI: 'Aqui é o suporte da TI da Atlas, precisamos resetar o banco de dados. Informe sua senha e PIN de acesso.'", a: "Protocolo: A TI da AtlasGR NUNCA solicitará senhas pessoais de operadores. Desligue a chamada imediatamente e registre o incidente para a C.I.A." },
          ],
        },
        {
          type: "stat",
          items: [
            { value: "68%", label: "Das invasões globais se iniciam com engenharia social" },
            { value: "0", label: "Tolerância para quem cede acessos corporativos" }
          ]
        },
      ],
    },
    {
      id: "capitulo-3-senhas-telas",
      title: "Capítulo 3: Higiene Cibernética e Ativos",
      blocks: [
        {
          type: "comparison",
          title: "Boas Práticas de Uso de Hardware",
          left: {
            label: "Comportamentos Inaceitáveis",
            points: [
              "Ausentar-se da estação de trabalho deixando o monitor logado e destravado.",
              "Utilizar a estação corporativa para acesso a redes sociais, e-mails privados e downloads paralelos.",
              "Emprestar sua credencial de acesso ao Connect para colegas 'ajudarem na fila'."
            ],
          },
          right: {
            label: "Padrão Ouro Operacional",
            points: [
              "Bloquear o sistema (Atalho Windows + L) rigorosamente sempre que afastar-se da cadeira.",
              "Ter total ciência de que 100% da navegação em rede está sendo inspecionada e auditada.",
              "Adotar a postura de Accountability: Toda e qualquer ação realizada sob o seu perfil é de sua integral e exclusiva responsabilidade cível."
            ],
          },
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso Forense: A Foto Inocente",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Representação de tela auditada, com dados ofuscados conforme normas LGPD."
        },
        {
          type: "case",
          title: "O Grupo de WhatsApp que Custou Milhões",
          text: "Um caso verídico de impacto devastador: um operador, achando o desenho gerado por uma rota incomum, capturou a tela do monitor usando o próprio smartphone e postou em um grupo de WhatsApp corporativo fechado de sua equipe. Involuntariamente, a foto registrou a placa, a transportadora e a lista sequencial de paradas na região de Campinas. A imagem vazou e, 48 horas depois, uma das cargas específicas foi interceptada cirurgicamente por uma quadrilha que já possuía todo o itinerário em mãos. Consequência: o operador foi demitido, indiciado civil e criminalmente e a AtlasGR suportou pesadas compensações indenizatórias. Ações desatentas em segurança causam ruína institucional.",
          source: "Manual de Incidentes e Respostas Forenses",
        },
      ],
    },
    {
      id: "capitulo-4-resposta-a-incidentes",
      title: "Capítulo 4: Protocolo de Resposta a Incidentes (Vazamentos)",
      blocks: [
        {
          type: "text",
          heading: "A Gestão Crítica das Primeiras Horas",
          paragraphs: [
            [
              "Se houver suspeita de que informações vazaram (por falha sistêmica ou humana), a partir do milésimo de segundo seguinte você transiciona do papel de operador para o de Primeira Resposta (First Responder). A forma como você atuar nas horas iniciais determinará a mitigação ou a ampliação drástica da crise corporativa.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Regra Fundamental Forense: Preservação Intacta",
          text: [
            "O pânico frequente leva o operador a apagar históricos de chat, esconder documentos ou reiniciar as estações de trabalho para 'apagar o rastro'. Isso constitui o maior erro operacional possível. A destruição de evidências caracteriza obstrução investigativa e potencializa enormemente as punições. O mandato é claro: Isole, Notifique e PRESERVE tudo inalterado.",
          ],
        },
        {
          type: "timeline",
          title: "Protocolo de Escalonamento Emergencial",
          items: [
            { label: "Minuto 00", text: "Interrompa a ação que expõe o vazamento. NÃO feche abas, aplicações, logs de auditoria e nem reinicie o equipamento de TI." },
            { label: "Até 15 min", text: "Acione, com alta prioridade, a sua liderança imediata e também a C.I.A (via rádio/emergência). Relate detalhadamente o evento, a extensão provável, os horários e o contexto." },
            { label: "Até 1 hora", text: "O time de Governança de Segurança e o Encarregado de Proteção de Dados (DPO - Data Protection Officer) devem ser oficializados para instauração do Inquérito de Contenção de Incidente." },
            { label: "Próximos dias", text: "A deliberação sobre acionamento de relatórios à Agência Nacional (ANPD) ou ações judiciais cabe exclusivamente ao corpo jurídico (C-Level). Sua responsabilidade primordial é assegurar o testemunho inicial preciso e manter estrito sigilo sobre as informações levantadas." },
          ],
        },
        {
          type: "checklist",
          title: "Regras de Ouro de Mitigação de Danos",
          items: [
            "Registrar manualmente e em sigilo temporal os fatos sequenciais associados ao evento.",
            "Abster-se radicalmente de compartilhar informações ou prints adicionais sobre a suspeita do vazamento.",
            "Não emitir notas, declarações informais em redes sociais, comentários com empresas embarcadoras antes do alinhamento oficial pela diretoria corporativa.",
            "Permanecer totalmente disponível aos auditores e peritos para detalhar os acontecimentos.",
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
                    "**Contexto Operacional:** A AtlasGR lida com volumes massivos de dados sensíveis, geolocalização e informações financeiras.",
                    "**O Problema (Dor do Cliente):** Vazamentos de dados ou ataques de engenharia social violam a LGPD e destroem a credibilidade corporativa."
                  ]
                },
                right: {
                  label: "A Resposta AtlasGR",
                  points: [
                    "**A Solução Tecnológica/Processual:** Estabelecemos políticas de Zero Trust, sigilo absoluto e protocolos de contingência para garantir a segurança da informação.",
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
      title: "Considerações Finais",
      blocks: [
        {
          type: "checklist",
          title: "Próximas Etapas Táticas",
          items: [
            "Assegure a assinatura eletrônica do seu NDA (Termo de Sigilo e Confidencialidade) no portal DHO.",
            "Avance rumo ao Módulo 13, que introduz os fundamentos práticos de Inteligência Artificial para prevenção preditiva de roubos.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A infraestrutura tecnológica da corporação possui excelência militar; por isso, hackers focam suas ofensivas primeiramente na fraqueza humana.",
    "A aplicação da LGPD e as normas de restrição ao tratamento de dados (Need-to-Know) devem guiar permanentemente seu agir.",
    "Engenharia Social abusa do viés de obediência e da criação de falsas urgências; nunca viole protocolos por imposição telefônica.",
    "O compartilhamento impróprio, como o envio de fotos ou capturas de telas internas para redes ou grupos informais, resultará impreterivelmente na demissão sem justa causa.",
      "A metodologia de Contexto-Problema-Solução assegura que a tecnologia atue como um facilitador estratégico.",
      "Nossos padrões seguem frameworks rigorosos de governança Enterprise, onde falhas processuais não têm espaço."
],
  finalChecklist: [
    "Identifico e repilo claramente tentativas coercitivas de Engenharia Social.",
    "Compreendo profundamente as obrigações pessoais e criminais ligadas à manutenção e privacidade de senhas.",
    "Assimilei que capturar a tela da aplicação aciona a mais letal punição corporativa: a Rescisão Motivada.",
  ],
  mindMap: {
    root: "Compliance e Sigilo",
    branches: [
      { label: "LGPD", items: ["Dados Sensitivos", "Privacidade Legal", "Ação a Incidentes de Vazamento"] },
      { label: "Engenharia Social", items: ["Identificação de Falsa Identidade", "Falso Status de Crise", "Validação Ativa"] },
      { label: "Infraestrutura Física", items: ["Proibição Total de Imagens", "Bloqueios Ativos de Máquina (Win+L)", "Responsabilidade Total (Accountability)"] },
    ],
  },
  scenario:
    "Cenário Prático: Seu parceiro de setor relata ansiedade aguda em virtude do acionamento sucessivo de múltiplos alarmes e, repentinamente, esquece o login; ele pede que, com seu próprio login, você libere três processos atrasados e assim auxilie no SLA da equipe. Qual sua atitude protocolar?",
  diagram: {
    title: "Mapeamento do Firewall Humano",
    chart: "graph LR\n  A[Incursão Cibernética: Falso Gestor] --> B{Operador aplica Protocolo de Validação?}\n  B -- Sim: Exige Autenticação Secundária --> C[Intrusão Rechaçada, Sistema Íntegro]\n  B -- Não: Cede à Pressão Imediata --> D[Falha Massiva de Segurança, Vazamento Estabelecido]",
  },
};
