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
      { label: "Comportamento", items: ["Atitude de Dono", "Estudo de Caso"] },
    ],
  },
  scenario:
    "Cenário Prático: Um cliente sugere uma mudança tecnológica que viola nossos princípios de segurança. Com qual área você deve debater internamente antes de responder?",
  diagram: {
    title: "Diretorias",
    chart: "graph TD\n  AtlasGR --> TI\n  AtlasGR --> DHO\n  AtlasGR --> Operacoes\n  AtlasGR --> Comercial",
  },
};
