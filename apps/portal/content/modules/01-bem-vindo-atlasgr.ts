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
    "Compreender profundamente a origem, o propósito e os valores inegociáveis da ATLASGR.",
    "Mapear mentalmente a estrutura organizacional e a cadeia de comando.",
    "Assimilar as políticas rígidas de compliance e ética empresarial.",
    "Conhecer a trilha de desenvolvimento e a Universidade Corporativa.",
    "Reconhecer os erros mais comuns cometidos por quem está chegando e entender como funciona a avaliação do período de experiência (cortes de 30, 60 e 90 dias).",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Propósito da AtlasGR",
      blocks: [
        {
          type: "text",
          heading: "A Gênese da Inteligência Logística",
          paragraphs: [
            [
              "Antes da AtlasGR, o mercado brasileiro sofria com um modelo de segurança ultrapassado e puramente reativo. A fundação da empresa, em 2004, teve um objetivo claro: parar de apenas 'rastrear o que já foi roubado' e passar a 'antecipar o risco antes que ele se materialize'.",
            ],
            [
              "Nosso propósito não mudou: ",
              { term: "gr" },
              " — 'Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação'. A tecnologia, por si só, é fria. É a equipe humana, qualificada por esta Universidade Corporativa, que transforma dados em decisões de alto impacto.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Sua Missão Aqui",
          text: [
            "Ao longo das Trilhas de Aprendizagem, você passará de iniciante a Especialista Enterprise. O Onboarding é a fundação. Absorva cada regra como se fosse operar a Torre de Controle amanhã.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-historia",
      title: "Capítulo 1: Linha do Tempo e Evolução",
      blocks: [
        {
          type: "timeline",
          title: "Da Fundação à Era da IA",
          items: [
            { label: "2004", text: "A semente: Fundação da AtlasGR com foco em processos rigorosos de PGR." },
            { label: "2010", text: "Expansão nacional: Abertura da Torre de Controle Operacional." },
            { label: "2018", text: "Inovação tecnológica: Desenvolvimento interno do sistema preditivo e integração de APIs." },
            { label: "2024", text: "Maturidade do Portfólio: Consolidação dos 4 pilares (Profile, Connect, GR, Analytics)." },
            { label: "2026", text: "A Revolução do Conhecimento: Lançamento do AtlasGR Enterprise Learning com tutoria via IA." },
          ],
        },
      ],
    },
    {
      id: "capitulo-2-cultura",
      title: "Capítulo 2: Cultura e Valores na Prática",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Valores são as regras de conduta para quando o manual acaba. Se o sistema cair e o telefone tocar, é nos valores da AtlasGR que você se apoiará para tomar a decisão correta.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Os 5 Pilares de Conduta",
          left: {
            label: "Valores Essenciais",
            points: ["Perseverança", "Transparência", "Simplicidade", "Atitude de Dono", "Inovação"],
          },
          right: {
            label: "Comportamento Esperado",
            points: [
              "Não aceitar a primeira desculpa em uma investigação de desvio.",
              "Comunicação direta, sem omitir erros do cliente ou do time.",
              "Descomplicar processos burocráticos sem perder a segurança.",
              "Cuidar do contrato de R$ 10 milhões como se fosse sua própria empresa.",
              "Sugerir melhorias ativamente para a Diretoria.",
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-3-estrutura",
      title: "Capítulo 3: Estrutura Organizacional",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A empresa opera como um organismo vivo, dividido em 5 grandes Diretorias que se alimentam mutuamente. O Comercial vende a inteligência que a TI constrói, que o DHO treina, e que as Operações executam.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "As Engrenagens da AtlasGR",
          items: [
            "TI (Tecnologia da Informação): Engenharia do Connect, IA e infraestrutura de servidores.",
            "DHO (Desenvolvimento Humano e Organizacional): O guardião da cultura, dono da Universidade Corporativa e responsável por PDI.",
            "Comercial / Administrativo: O pulmão financeiro, negociação de contratos e faturamento.",
            "Relações Institucionais: Diplomacia com polícias civis, militares, PRF e ANTT.",
            "Operações (A Torre e CIA): Execução do monitoramento de milhares de viagens simultâneas, 24 horas por dia.",
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: Atitude de Dono Salvando Cargas",
      blocks: [
        {
          type: "case",
          title: "O Operador que Quebrou a Regra (para salvar o cliente)",
          text: "Caso real de 2023: Um operador notou que o PGR de um embarcador de pneus não exigia escolta armada em um trecho específico, mas o operador sabia, por experiência, que aquela rodovia estava sob ataque nos últimos 3 dias. Usando a 'Atitude de Dono', ele parou a carreta no posto anterior, chamou o supervisor e escalonou. A transportadora aprovou a escolta emergencial. O caminhão que vinha logo atrás (de outra empresa) foi roubado no mesmo trecho. A Atlas salvou R$ 2.5 Milhões agindo preventivamente.",
          source: "Repositório de Cases AtlasGR",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Lição Aprendida",
          text: [
            "Seguir o processo é vital, mas o processo serve ao propósito de segurança. Se o contexto exige, o escalonamento proativo demonstra a inteligência humana sobrepondo a máquina.",
          ],
        },
      ],
    },
    {
      id: "capitulo-4-primeiros-90-dias",
      title: "Capítulo 4: Os Primeiros 90 Dias — Erros Comuns e Avaliação de Experiência",
      blocks: [
        {
          type: "text",
          heading: "Ninguém Nasce Sabendo Operar a Torre",
          paragraphs: [
            [
              "Todo colaborador novo passa por um período de experiência de até 90 dias (contrato de experiência 45+45, conforme a CLT). Nesse período, você não está apenas aprendendo os sistemas — está sendo avaliado em três cortes: aos 30, 60 e 90 dias, por sua liderança direta em conjunto com o DHO.",
            ],
            [
              "A boa notícia: quase ninguém é desligado por não saber tudo de cara. A avaliação pesa muito mais sobre postura, aderência aos valores e velocidade de aprendizado do que sobre domínio técnico imediato. A má notícia: os erros abaixo se repetem módulo após módulo, turma após turma — e são eles que mais aparecem nas devolutivas de 30 dias.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Os Erros Mais Comuns de Quem Está Chegando",
          items: [
            "Prometer prazo ou solução ao cliente sem validar antes com Operações — quem assina o compromisso é a Atlas, não você sozinho.",
            "Tratar dado de motorista (CPF, biometria, geolocalização) informalmente em print ou WhatsApp pessoal, ignorando a LGPD.",
            "Escalar direto para a C.I.A. qualquer imprevisto, sem seguir o fluxo padrão da Torre — isso satura o canal reservado para eventos críticos reais.",
            "Confundir sinistro com simples atraso de viagem, gerando alarme falso e desgaste desnecessário com o embarcador.",
            "Compartilhar login e senha de sistema com colega 'só para agilizar' — violação direta de segurança da informação, mesmo com boa intenção.",
            "Evitar perguntar por medo de parecer despreparado — na Atlas, quem pergunta erra menos que quem finge saber.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "O Erro Mais Caro: Silêncio",
          text: [
            "Na avaliação de 60 dias, o item mais citado como motivo de alerta não é erro técnico — é não comunicar a dúvida ou o erro a tempo de ser corrigido. Errar é esperado no aprendizado; esconder o erro é que compromete a confirmação.",
          ],
        },
        {
          type: "faq",
          items: [
            {
              q: "Quem participa da avaliação de experiência?",
              a: "Sua liderança direta registra o desempenho em cada corte (30/60/90 dias) e o DHO consolida com os dados de progresso nas Trilhas da Universidade Corporativa, incluindo este módulo de Onboarding.",
            },
            {
              q: "O que pesa mais: nota nos quizzes ou comportamento no dia a dia?",
              a: "Comportamento. As Trilhas comprovam que você estudou; a rotina comprova que você aplicou. Um colaborador com nota alta e atitude de dono ausente é sinal de alerta maior do que o contrário.",
            },
            {
              q: "E se eu não me sentir pronto na avaliação de 30 dias?",
              a: "Normal. O corte de 30 dias raramente é eliminatório — ele existe para gerar plano de ação junto com sua liderança antes dos 60 e 90 dias, não para punir quem ainda está em curva de aprendizado.",
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
              "Para aprofundar sua imersão, recomendamos a leitura do Código de Ética completo no portal interno.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que vem a seguir?",
          items: [
            "Finalize este módulo com sucesso no Simulador de Decisão.",
            "Avance para a Trilha 01 - Módulo 02 para entender o Mercado.",
            "Acompanhe sua barra de XP e Conquistas Gamificadas no dashboard.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A AtlasGR foca na predição de risco logístico.",
    "Os 5 valores guiam a conduta e decisões críticas.",
    "As 5 diretorias funcionam integradas para o cliente final.",
    "Atitude de Dono significa pró-atividade na prevenção de sinistros.",
  ],
  finalChecklist: [
    "Compreendo perfeitamente o propósito e os valores da AtlasGR.",
    "Sei as funções de TI, DHO, Comercial, Relações Institucionais e Operações.",
    "Entendi o Estudo de Caso de 'Atitude de Dono'.",
  ],
  mindMap: {
    root: "Bem-vindo à AtlasGR",
    branches: [
      { label: "Identidade", items: ["Propósito", "5 Valores"] },
      { label: "Estrutura", items: ["TI", "DHO", "Operações", "Comercial"] },
      { label: "Comportamento", items: ["Atitude de Dono", "Estudo de Caso", "Período de Experiência (30/60/90 dias)"] },
    ],
  },
  scenario:
    "Cenário Prático: Um cliente sugere uma mudança tecnológica que viola nossos princípios de segurança. Com qual área você deve debater internamente antes de responder?",
  diagram: {
    title: "Diretorias",
    chart: "graph TD\n  AtlasGR --> TI\n  AtlasGR --> DHO\n  AtlasGR --> Operacoes\n  AtlasGR --> Comercial",
  },
};
