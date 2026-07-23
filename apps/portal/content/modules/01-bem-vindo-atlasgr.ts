import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("01-bem-vindo-atlasgr")!;

export const module01: ModuleContentFull = {
  ...meta,
  sources: [
    "Política Organizacional e Ética (v2.1) — seções 1 a 3, 9 e 11",
    "CARGOS.pdf — Estrutura Organizacional, Estrutura de Recursos Humanos, Estrutura Operacional",
    "Apresentação Institucional AtlasGR 2026",
    "Jornada do Colaborador AtlasGR",
  ],
  objectives: [
    "Explicar a origem, o propósito e os valores da ATLASGR com suas próprias palavras.",
    "Reconhecer as 5 grandes áreas da Diretoria e a função de cada uma.",
    "Descrever a cadeia operacional da Central, do Gerente ao Operador.",
    "Aplicar as regras essenciais de conduta, ética, compliance e sigilo no dia a dia.",
    "Saber quando e por que os treinamentos de reciclagem e a Universidade Corporativa acontecem.",
  ],
  sections: [
    {
      id: "guia-do-modulo",
      title: "Guia Estratégico do Módulo",
      blocks: [
        {
          type: "text",
          heading: "Visão Geral",
          paragraphs: [
            [
              "Bem-vindo ao primeiro passo da sua jornada na AtlasGR. Este módulo foi desenhado para apresentar a fundação da nossa empresa, preparando você com o conhecimento cultural, histórico e organizacional necessário para operar com excelência.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Iniciante (Fundação)",
            "Pré-requisitos: Nenhum",
            "Tempo estimado: 40 minutos",
            "Competências desenvolvidas: Inteligência Cultural, Ética Corporativa, Visão Sistêmica",
            "Gamificação: +500 XP, Badge 'Sangue Laranja', Conquista 'Primeiros Passos'",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "IA Educacional — Seu Assistente Virtual",
          text: [
            "Ao longo deste e de outros módulos, nosso Assistente de IA estará disponível para resumir conteúdos complexos, gerar exemplos extras de cultura organizacional ou tirar dúvidas sobre o organograma. Use-o sempre que precisar aprofundar um tema.",
          ],
        },
      ],
    },
    {
      id: "quem-e-a-atlasgr",
      title: "Nossa História e Propósito",
      blocks: [
        {
          type: "text",
          heading: "Uma empresa nascida para revolucionar o gerenciamento de risco",
          paragraphs: [
            [
              "A Atlas Segurança e Inteligência Logística surgiu em 2004, em um cenário logístico que era puramente reativo. Desde o primeiro dia, nosso objetivo não era apenas rastrear veículos, mas gerenciar riscos de forma preditiva e inteligente.",
            ],
            [
              "O propósito declarado da empresa é: ",
              { term: "gr" },
              " — \"Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação\". Esse propósito guia cada produto, cada atendimento e cada linha de código escrita na AtlasGR.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação.",
          author: "Propósito institucional da ATLASGR",
        },
        {
          type: "timeline",
          title: "Nossa Trajetória (2004 - 2026)",
          items: [
            { label: "2004", text: "Fundação da Atlas, focada em gestão de risco convencional." },
            { label: "2010", text: "Expansão nacional e primeira central própria de monitoramento 24h." },
            { label: "2018", text: "Lançamento do primeiro motor de regras preditivo e automações." },
            { label: "2024", text: "Consolidação dos quatro pilares: Profile, Connect, GR e Analytics." },
            { label: "2026", text: "Lançamento da Universidade Corporativa Enterprise e Inteligência Artificial." },
          ],
        },
      ],
    },
    {
      id: "cultura-e-valores",
      title: "Cultura e Valores",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Na AtlasGR, valores não são quadros na parede, são ferramentas de tomada de decisão. Quando houver dúvida sobre qual caminho seguir, nossos valores indicam a direção.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Os 5 Valores Inegociáveis",
          left: {
            label: "O Valor",
            points: [
              "Perseverança",
              "Transparência",
              "Simplicidade",
              "Atitude de Dono",
              "Inovação",
            ],
          },
          right: {
            label: "Na prática (O que significa)",
            points: [
              "Insistir nas soluções certas, não nas mais fáceis.",
              "Comunicação clara, assumindo erros sem esconder problemas.",
              "Fazer o complexo parecer fácil para o cliente e para a operação.",
              "Tratar o negócio e o cliente como se fossem seus.",
              "Desafiar o status quo diariamente com novas ideias.",
            ],
          },
        },
        {
          type: "case",
          title: "Estudo de Caso Cultural",
          text: "Em 2023, durante uma crise em um grande embarcador de combustível, o operador notou que o protocolo padrão não cobriria a falha. Pela 'Atitude de Dono', ele escalonou o evento imediatamente, evitando um roubo de 2 milhões de reais, mesmo que aquilo exigisse sair do script. Isso é a cultura AtlasGR em ação.",
          source: "Arquivo de Operações AtlasGR",
        },
      ],
    },
    {
      id: "estrutura-organizacional",
      title: "Nossa Estrutura Organizacional",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Para entregar inteligência com agilidade, a AtlasGR é dividida em 5 grandes áreas da Diretoria, operando como uma engrenagem.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "As 5 áreas da Diretoria",
          items: [
            "TI (Tecnologia da Informação) — Garante a estabilidade da infraestrutura, desenvolve o Connect e mantém a segurança cibernética.",
            "DHO (Desenvolvimento Humano e Organizacional) — Recruta, treina (Universidade Corporativa), retém talentos e cuida da cultura.",
            "Comercial / Administrativo-Financeiro — Traz novos negócios, garante a saúde financeira e precifica nossos serviços.",
            "Relações Institucionais — Mantém conexões com órgãos de segurança, entidades de classe e parceiros estratégicos.",
            "Operações (O Coração) — Onde o gerenciamento de risco acontece em tempo real 24/7.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Desafio Prático (Role Play)",
          text: [
            "Imagine que um cliente exige uma mudança contratual e um novo tipo de relatório no Atlas Connect. Com quais áreas você precisará interagir? (Resposta: Comercial para o contrato, TI para o sistema, Operações para a execução).",
          ],
        },
      ],
    },
    {
      id: "etica-e-compliance",
      title: "Ética e Compliance",
      blocks: [
        {
          type: "text",
          heading: "Integridade é nosso alicerce",
          paragraphs: [
            [
              "Temos acesso a informações extremamente sensíveis: rotas, cargas milionárias, dados pessoais e estratégias de clientes. Por isso, as políticas de segurança da informação, LGPD e código de ética são tratadas com tolerância zero para desvios.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Posso tirar foto da tela da operação?", a: "Nunca. Isso viola a LGPD, os acordos de confidencialidade com os clientes e a política de segurança da AtlasGR, sendo passível de demissão por justa causa." },
            { q: "O que é tolerância zero na AtlasGR?", a: "Casos de assédio, fraude, vazamento de dados intencional e quebra de sigilo operacional. A empresa possui canais de denúncia anônima para garantir a segurança de todos." },
            { q: "Como uso os recursos da empresa?", a: "Softwares, e-mails, internet e equipamentos devem ser usados estritamente para atividades profissionais. O uso de IA generativa externa com dados da empresa é proibido, use o Assistente AtlasGR." },
          ],
        },
      ],
    },
    {
      id: "jornada-e-beneficios",
      title: "A Jornada do Colaborador",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A entrada na AtlasGR (Onboarding) é apenas o primeiro passo. A empresa investe no desenvolvimento contínuo por meio da nossa Universidade Corporativa e reciclagens regulares.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Seus Primeiros Passos",
          items: [
            { label: "Semana 1", text: "Integração institucional, cultura, compliance e plataforma de treinamento." },
            { label: "Mês 1", text: "Imersão nos Módulos de Operação, Produtos e simulações na Torre de Controle." },
            { label: "Mês 3", text: "Avaliação de performance (90 dias), feedbacks, e definição de PDI (Plano de Desenvolvimento Individual)." },
            { label: "Anual", text: "Treinamentos de reciclagem técnica e avaliação de competências para promoção." },
          ],
        },
      ],
    },
  ],
  summary: [
    "A AtlasGR nasceu em 2004 para gerenciar risco logístico através da conexão entre pessoas e tecnologia (propósito).",
    "Os 5 valores são Perseverança, Transparência, Simplicidade, Atitude de Dono e Inovação.",
    "A estrutura é composta por TI, DHO, Comercial/Financeiro, Relações Institucionais e Operações (o coração).",
    "O sigilo da informação (LGPD, rotas de clientes) é absoluto, sendo terminantemente proibido fotografar telas.",
    "O desenvolvimento é contínuo, iniciando neste onboarding e avançando para Planos de Desenvolvimento Individual (PDI).",
  ],
  finalChecklist: [
    "Compreendo perfeitamente o propósito e os valores da AtlasGR.",
    "Sei a quem recorrer dependendo do tipo de problema (TI, DHO, Operações, etc).",
    "Entendi as regras restritas de sigilo e as consequências da quebra de compliance.",
    "Conheço as etapas da minha jornada de desenvolvimento (30, 60 e 90 dias).",
  ],
  mindMap: {
    root: "Bem-vindo à AtlasGR",
    branches: [
      { label: "Nossa Essência", items: ["Fundação: 2004", "Propósito", "5 Valores Inegociáveis"] },
      { label: "Estrutura", items: ["TI e DHO", "Comercial e Financeiro", "Relações Institucionais", "Operações"] },
      { label: "Ética e Sigilo", items: ["LGPD", "Sem fotos de tela", "Tolerância Zero", "Canais de Denúncia"] },
      { label: "Sua Jornada", items: ["Onboarding", "Avaliação 90 dias", "PDI", "Reciclagem anual"] },
    ],
  },
  scenario:
    "Você está no seu primeiro mês e percebe que um colega, com boa intenção, tirou uma foto da tela do Connect e enviou no WhatsApp do grupo da equipe para 'mostrar um evento interessante'. O que você faz, baseado nos valores e no compliance da AtlasGR?",
  diagram: {
    title: "A Engrenagem da AtlasGR",
    chart: "graph LR\n  DHO --> Operacoes\n  TI --> Operacoes\n  Comercial --> Operacoes\n  RelacoesInstitucionais --> Operacoes\n  Operacoes --> Cliente",
  },
};
