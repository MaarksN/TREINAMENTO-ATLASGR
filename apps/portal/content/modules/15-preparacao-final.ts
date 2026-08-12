import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("15-preparacao-final")!;

export const module15: ModuleContentFull = {
  ...meta,
  sources: [
    "Revisão Consolidada Módulos 01 a 14",
    "Diretrizes do Exame de Certificação AtlasGR",
  ],
  objectives: [
    "Revisar de forma sistêmica e interligada todo o conteúdo do Onboarding.",
    "Identificar as lacunas mentais individuais antes de iniciar o simulador final.",
    "Explicar a dinâmica da prova final (corte de 70% e cenários táticos).",
    "Consolidar a responsabilidade corporativa adquirida com o conhecimento.",
    "Aplicar uma estratégia eficiente de tempo e resposta durante as 150 questões da prova final.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Epílogo Desta Jornada",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "O ápice intelectual da imersão: Consolidando competências em uma atuação tática decisiva."
        },
        {
          type: "text",
          heading: "A Graduação Oficial",
          paragraphs: [
            [
              "Você atravessou integralmente o núcleo de valores Atlas, mapeou cenários macroeconômicos globais do transporte, investigou profundamente camadas cibernéticas (Connect, Analytics, Profiling), além de processar as mais densas e extremas ocorrências criminais já documentadas. Esta monumental carga instrucional não é acidental; é um filtro de elite. O ecossistema AtlasGR exige resiliência forjada no volume denso e na precisão ininterrupta.",
            ],
            [
              "Operações complexas e robustas, como as orquestradas pelo portfólio da AtlasGR, conferem ao colaborador — do mais experiente gerente ao novo integrante — não uma mera delegação de tarefas, mas sim o domínio ativo sobre engrenagens cruciais que preservam o fluxo mercantil da nação. Este desfecho lapida e prepara de forma sublime seus reflexos teóricos rumo à certificação intransigente da banca.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Vocês não gerenciam sistemas; através da resiliência, gerenciam o futuro iminente e pacífico do transporte em grande escala.",
          author: "Conselho Deliberativo AtlasGR"
        },
        {
          type: "callout",
          variant: "success",
          title: "Perspectiva de Mérito e Dedicação",
          text: [
            "Concluir este panorama atesta singular perseverança e robustez psicológica perante a montanha massiva de procedimentos operacionais e legislações vigentes (como a LGPD e resoluções securitárias). Avante, sem receios.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-revisao-cultura",
      title: "Capítulo 1: Recapitulando o Alicerce Cultural e Jurídico",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Revisitemos os pilares da revolução analítica lançada sobre a logística ultrapassada e obsoleta. Em 2004, assumimos o compromisso audacioso de não mais gerir passivos, mas sim prever ativamente disfunções e ataques.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Fundamentos Sistêmicos Obrigatórios (Tópicos Comuns)",
          items: [
            "Domínio absoluto sobre o Dogma dos 5 Valores Institucionais e éticos (Foco Absoluto em Perseverança e na sagrada Transparência Corporativa).",
            "A delineação profunda de autoridade entre o C-Level do Embarcador (Dono final da carga/exigência primária de segurança) e a infraestrutura pesada da Transportadora Executora.",
            "Lealdade incondicional às resoluções legais pautadas pela estrita observância do sigilo e isolamento de tratativas da Lei Geral de Proteção de Dados (Vedação incontestável e total à propagação de mídias de incidentes fora dos domínios da base)."
          ],
        },
      ],
    },
    {
      id: "capitulo-2-revisao-sistemas",
      title: "Capítulo 2: Cartografia das Tecnologias e Camadas Táticas",
      blocks: [
        {
          type: "comparison",
          title: "Sinergia Plena (Homem x Hardware)",
          left: {
            label: "Infraestrutura Tecnológica AtlasGR",
            points: [
              "**Atlas Profile**: Ferramenta de detecção pericial de fraude de identidades (Blindagem da Portaria).",
              "**Atlas Connect**: Estação central de alerta tático contínuo, absorvendo telemetrias massivas das frotas ativas.",
              "**Atlas Analytics**: Inteligência macro e financeira direcionada aos painéis analíticos do board diretivo (CEO, CFO)."
            ],
          },
          right: {
            label: "Esquadrão Humano e Resposta Base",
            points: [
              "**Operador da Torre (10m SLA)**: Intervenção técnica baseada no cruzamento temporal imperativo com rígido SLA preventivo, e exigência da inviolável Contra-Senha.",
              "**Célula de Inteligência Atlas (C.I.A)**: Comando especial acionado sobre infrações brutais aos protocolos de rastreamento com intercepções armadas e resgates orquestrados.",
              "**Consultor Comercial Estratégico B2B**: Formula defesas comerciais provando, cabalmente, o montante da riqueza empresarial preservada perante a eliminação das ociosidades."
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-3-prova",
      title: "Capítulo 3: Exame Profissional de Retenção — A Grande Prova",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A aprovação exige proficiência interpretativa ímpar. O simulado exaustivo modelará com exatidão a enorme pressão tática cotidiana, testando o rápido julgamento frente à exatidão milimétrica da normativa interna (Manuais, SLAs, Conformidade de Sistemas).",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Quais os contornos avaliativos globais e qual a métrica punitiva aplicável no processo de crivo corporativo (Prova Final)?", a: "Formado por 150 complexos enunciados ramificados por toda a malha curricular instrucional em módulos de dez questões sequenciais." },
            { q: "E o que se qualifica oficialmente por chancela sistêmica (Aprovação Mínima)?", a: "Índice de Acertos acima do rigorosíssimo limite limiar de 70%, validando assim a sua escalada final ao campo prático das operações setoriais diárias da companhia (PDI Prático)." },
            { q: "Nossa operação prevê consultoria nos materiais de consulta do Banco de Conhecimento, isto é aplicável no momento da prova?", a: "Totalmente descartável na ótica primária da prova. O simulado requer precisão e agilidade de reação reflexiva e instantânea. Deixe as dúvidas processuais periféricas para a Torre do dia a dia, após dominar e solidificar com sucesso o DNA macro desta imersão." }
          ],
        },
      ],
    },
    {
      id: "capitulo-4-estrategia-prova",
      title: "Capítulo 4: Engenharia Psicológica para Execução Rápida do Teste",
      blocks: [
        {
          type: "text",
          heading: "Manutenção do Fluxo Temporal Cognitivo",
          paragraphs: [
            [
              "Uma das grandes barreiras que ceifam carreiras promissoras, não somente no processo de recrutamento, mas nas trincheiras reativas diárias da Torre de Comando, reside puramente na péssima gestão e administração de minutos essenciais.",
            ],
            [
              "Travar exaustivamente, paralisado perante minúcias obscuras em um trecho contratual do manual da Seguradora e consequentemente descartar o fechamento de dezenas de alternativas primárias fundamentais em branco é inaceitável. Na prova, aplique as lógicas de SLA de campo: decida firmemente em até quarenta segundos e avance. Pule interrogações traiçoeiras; responda integralmente às sólidas e consolidadas bases. Ao fim, retorne àquelas de alta complexidade com clareza cognitiva maior.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Boas Práticas de Superação — Diretrizes Avaliativas:",
          items: [
            "Garantir a total e completa submissão do formulário. Interrogações órfãs refletem índice zero, enquanto opções logicamente decantadas impulsionam exponencialmente sua absorção das respostas exatas.",
            "Esmiuçar o enunciado cautelosamente e destrinchar imperativos excludentes perigosíssimos mascarados sob adjetivos capciosos como 'Exclusivamente', 'Obrigatoriamente Sempre' e 'De modo algum'.",
            "Mantenha firmeza de convicções: A estatística aponta incisivamente que oscilações e mudanças de gabarito pautadas por ansiedade retrospectiva derrubam substancialmente médias perfeitamente construídas em sua dedução original e orgânica.",
          ],
        },
        {
          type: "stat",
          items: [
            { value: "70%", label: "Mínimo rigoroso para qualificação (Aprovação)" },
            { value: "150", label: "Questões dinâmicas que filtram memória procedimental" }
          ]
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Encerramento Definitivo e Partida",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Conecte-se às estruturas mais basilares de sabedoria e serenidade. Honre o conhecimento técnico transmitido. Em momentos de incertezas na trilha executiva futura, aplique fundamentalmente sua visão analítica que molda as engrenagens de contenção bilionária gerenciadas diariamente.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Um erro contornado com clareza processual previne tragédias de escalas irremediáveis; A omissão complacente destrói impérios corporativos erguidos através de décadas.",
          author: "Alta Governança e Corpo Diretivo Superior (Board) AtlasGR"
        },
      ],
    },
  ],
  summary: [
    "Revisitamos de maneira irretocável a integração vertical sistêmica AtlasGR — antecipando e sanando vulnerabilidades macro.",
    "Direcionamos a cultura inflexível da Privacidade Legal e Compliance Corporativo a todos os instantes e manuseios sistêmicos diários.",
    "Destacamos o pilar fundamental: O conhecimento é mero espectro; A aplicação reativa (dentro do corte avaliativo de exatos 70%) solidifica o operador no seleto grupo logístico nacional.",
    "Rigorosa otimização e controle psíquico do relógio é imprescindível para vencer as extenuantes barreiras intelectuais dos múltiplos blocos das 150 questões de campo."
  ],
  finalChecklist: [
    "Mentalidade preparada inteiramente quanto à estruturação e arquitetura pericial das quatro soluções do nosso portfólio massivo.",
    "Absoluta fixação técnica quanto às prerrogativas extremas das camadas de Torre Reativa contra a letalidade proativa do efetivo de rua (C.I.A).",
    "Estabilização e alinhamento do pulso reflexivo direcionado e exclusivo ao exame tático de consolidação corporativa."
  ],
  mindMap: {
    root: "Consolidação Curricular Master",
    branches: [
      { label: "Corrente de Cultura", items: ["LGPD Integral", "Conexão Embarcador & Corretagem"] },
      { label: "Paredes Tecnológicas", items: ["Sistema Connect SLA", "Muralha Preventiva Profile", "Inteligência Analítica Board"] },
      { label: "Protocolo de Exame", items: ["Pontuação Regimental 70%", "Controle Estrito de Tempo e Desbloqueio Psicológico"] },
    ],
  },
  scenario:
    "Reflexão Crítica e Moral: Você transicionou integralmente do estágio inicial cego para a compreensão tática profunda e assertiva de como proteger e blindar a espinha logística e mercantil fundamental de nosso País. Tome um fôlego regenerador, absorva o peso moral atrelado ao botão inicial do sistema corporativo e mergulhe em prol da grandiosidade certificada AtlasGR. Acione a prova quando se julgar inteiramente convicto.",
  diagram: {
    title: "O Ponto Culminante",
    chart: "graph TD\n  Teoria[Recepção na Universidade] --> Pressao{Rigor do Exame de Certificação}\n  Pressao -- Ajuste Necessário --> Reforco[Alinhamento de DHO Posterior]\n  Pressao -- Execução Singular e Maestria --> Sucesso[Aval Oficial da Presidência / Status Operador]\n  Sucesso --> Campo[Avanço aos Desafios da Sala Tática de Operações Reais]",
  },
};
