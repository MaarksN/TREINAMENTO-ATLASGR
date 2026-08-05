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
      title: "Introdução: O Fim do Início",
      blocks: [
        {
          type: "text",
          heading: "A Sua Formatura",
          paragraphs: [
            [
              "Você absorveu a história, a cultura, as entranhas do mercado, os sistemas, as integrações, os crimes e os cases reais. O volume de informações foi brutal, e isso foi intencional.",
            ],
            [
              "Na AtlasGR, nós não entregamos tarefas simples; nós entregamos responsabilidade sobre a espinha dorsal logística do Brasil. Este módulo é a amarração de tudo o que foi ensinado para garantir a sua Certificação.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Parabéns pela Jornada",
          text: [
            "Chegar até aqui atesta a sua resiliência e foco, alinhando-se perfeitamente ao nosso valor de Perseverança. Respire fundo, revise o conteúdo, a prova começa em breve.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-revisao-cultura",
      title: "Capítulo 1: Revisão — A Base e o Mercado",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "No começo, vimos que a AtlasGR nasceu em 2004 para quebrar o modelo reativo. Nós vendemos Pessoas, Tecnologias e Processos (PGR).",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Tópicos de Fogo (Cai na Prova)",
          items: [
            "Os 5 Valores Inegociáveis (Perseverança, Transparência, Simplicidade, Atitude de Dono, Inovação).",
            "A Diferença de Mercado: Embarcador (Dono da Carga/Visibilidade) e Transportadora (Executor/Seguro).",
            "As regras restritas de Tolerância Zero da LGPD (Nunca fotografar telas, nunca compartilhar senhas).",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-revisao-sistemas",
      title: "Capítulo 2: Revisão — Softwares e Operação",
      blocks: [
        {
          type: "comparison",
          title: "O Portfólio Blindado",
          left: {
            label: "As Ferramentas",
            points: [
              "Atlas Profile: Filtro da portaria, bloqueia biometria falsa (Falsidade Ideológica).",
              "Atlas Connect: O Cockpit. Fila de Alertas e Integrações API.",
              "Atlas Analytics: A visão do CEO para corrigir gargalos logísticos crônicos.",
            ],
          },
          right: {
            label: "As Pessoas",
            points: [
              "Torre de Controle: Age no Alerta. O SLA é sagrado (10m e 45m).",
              "Central de Inteligência (CIA): Escalona e lida com o combate real, polícia e pronta resposta quando há suspeita forte ou ruptura total do PGR.",
              "Comercial B2B: Ataca dores específicas com o diferencial de 'Custo Oculto Evitado'.",
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-3-prova",
      title: "Capítulo 3: Dinâmica da Certificação",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A prova não medirá apenas a sua memória; medirá o seu julgamento técnico sob pressão.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Quantas questões possui a prova?", a: "O banco global possui 150 questões. Você responderá a uma bateria focada que exige pontuação de corte." },
            { q: "Qual a nota para ser certificado?", a: "Acima de 70%. Somente os aprovados recebem a chancela e avançam para a parte prática da trilha." },
            { q: "Posso colar/consultar material?", a: "Você é um profissional de risco. A prova foca em raciocínio, não em decoreba cega. Se houver dúvida tática real, a Base de Conhecimento existe para ser usada na vida real." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Sua Carreira: O PDI (Plano de Desenvolvimento)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Após o clique final na prova, a teoria termina. O DHO desenhará o seu acompanhamento dos próximos 30, 60 e 90 dias, focando exclusivamente na aplicação real da sua área (TI, Comercial ou Operações). A teoria foi a fundação; a prática é a casa construída em cima dela.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-4-estrategia-prova",
      title: "Capítulo 4: Estratégia de Prova — Tempo, Foco e Sangue-Frio",
      blocks: [
        {
          type: "text",
          heading: "150 Perguntas Não É Maratona, É Ritmo",
          paragraphs: [
            [
              "Saber o conteúdo é metade do trabalho. A outra metade é administrar o relógio. Quem trava 8 minutos numa única questão sobre sublimite de apólice geralmente é o mesmo que entrega as últimas 20 perguntas em branco por falta de tempo.",
            ],
            [
              "A prova é dividida em blocos por módulo (10 perguntas cada). Trate cada bloco como um pequeno checkpoint: se você não sabe a resposta em 40 ou 50 segundos, marque a mais provável, sinalize para revisão (se o sistema permitir) e siga em frente. Voltar no final com a cabeça mais leve resolve mais dúvidas do que insistir no calor do momento.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Checklist de Sobrevivência na Prova",
          items: [
            "Nunca deixe uma questão em branco: sem marcação, a chance de acerto é zero; com um chute educado, ainda existe chance.",
            "Leia o enunciado duas vezes antes de olhar as alternativas — muita pegadinha está no 'não', no 'exceto' e no 'sempre'.",
            "Elimine primeiro as alternativas absurdas (extremos como 'nunca' ou 'sempre' costumam ser as erradas).",
            "Desconfie de si mesmo quando mudar uma resposta pela terceira vez seguida — geralmente a primeira leitura já estava certa.",
            "Reserve os últimos 10 minutos exclusivamente para revisar as questões sinalizadas, não para revisar tudo de novo.",
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Errei mais de 30% e reprovei. E agora?", a: "Sem drama. Reprovar não é demissão, é feedback. Você revisa o conteúdo do próprio relatório de erros, foca nos módulos fracos e reagenda uma nova tentativa com o DHO." },
            { q: "Qual é o erro mais comum de quem reprova?", a: "Confundir os pilares tecnológicos entre si (trocar a função do Atlas Connect pela do Atlas Analytics) e esquecer os prazos de SLA da Torre de Controle. São detalhes, mas a prova cobra precisão, não 'mais ou menos'." },
            { q: "Vale a pena estudar até a última hora antes da prova?", a: "Revisão leve, sim. Decoreba de última hora sob ansiedade, não — ela mais atrapalha do que ajuda. Prefira reler o resumo executivo de cada módulo e descansar a cabeça." },
          ],
        },
        {
          type: "quote",
          text: "Você não chegou até a questão 150 por sorte. Chegou porque estudou. Confie no processo, confie no que você aprendeu e responda com a calma de quem já sabe o caminho.",
          author: "Equipe de DHO — AtlasGR",
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Mensagem da Liderança e Partida",
      blocks: [
        {
          type: "quote",
          text: "A ignorância custa fortunas; a inteligência previne tragédias. Vocês agora são portadores da nossa inteligência tática. Honrem a camisa, cumpram os SLAs, e garantam a segurança do Brasil.",
          author: "Diretoria e Fundação AtlasGR",
        },
      ],
    },
  ],
  summary: [
    "O ecossistema AtlasGR atua Antes, Durante, e Depois do risco.",
    "As políticas de segurança corporativa (Tolerância Zero) acompanham você independente do setor.",
    "A certificação final (70% de corte) não é o fim da linha, é o acesso ao acompanhamento prático.",
    "Revisar o conceito dos pilares e do PGR é essencial para dominar as perguntas da prova.",
  ],
  finalChecklist: [
    "Sinto total confiança nos 4 pilares tecnológicos.",
    "Sei a diferença entre a Torre e a CIA.",
    "Estou mentalmente preparado para iniciar a avaliação final.",
  ],
  mindMap: {
    root: "Revisão Executiva",
    branches: [
      { label: "A Base", items: ["Cultura, LGPD", "Embarcador vs Transportadora"] },
      { label: "O Jogo", items: ["Profile, Connect, PGR", "Torre, CIA, Analytics"] },
      { label: "A Prova", items: ["Corte de 70%", "Julgamento Tático", "Certificação", "Gestão de Tempo nas 150 Questões"] },
    ],
  },
  scenario:
    "Cenário Prático Final: Faça uma reflexão interna. Se você fosse o CEO da AtlasGR hoje, qual área da empresa você consideraria a mais vital para o sucesso das operações diárias? Reflita sobre o peso da Torre de Controle e inicie o exame.",
  diagram: {
    title: "O Ciclo do Colaborador",
    chart: "graph TD\n  Teoria[Onboarding Universidade] --> Prova{Simulador Final 70%}\n  Prova -- Falha --> Reciclagem[Revisão de Conteúdo]\n  Prova -- Sucesso --> PDI[Treinamento Prático Setorial]\n  PDI --> Profissional[Especialista AtlasGR]",
  },
};
