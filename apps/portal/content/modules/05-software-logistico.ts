import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("05-software-logistico")!;

export const module05: ModuleContentFull = {
  ...meta,
  sources: [
    "Manuais de Operação Atlas Connect",
    "Torre de Controle - Guias Práticos",
  ],
  objectives: [
    "Dominar a arquitetura visual e a hierarquia da tela do Atlas Connect.",
    "Explicar a dinâmica de criação, rastreamento e baixa de uma SM (Solicitação de Monitoramento).",
    "Compreender a mecânica do Motor de Regras e a priorização de níveis de alerta.",
    "Entender a diferença operacional entre Grade Passiva e Fila Ativa de Alertas.",
    "Diagnosticar corretamente os alertas técnicos mais comuns (GPS sem sinal, evento duplicado, falso positivo de desvio) sem subestimar riscos reais.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Cockpit de Comando",
      blocks: [
        {
          type: "text",
          heading: "A Orquestração do Risco",
          paragraphs: [
            [
              "Bem-vindo ao Atlas Connect. Se o PGR é a lei, o Connect é a delegacia, o juiz e o camburão, tudo em um sistema só. É nesta tela que milhares de veículos são acompanhados e onde a inteligência artificial da Atlas separa o que é rotina do que é tragédia.",
            ],
            [
              "Seu objetivo aqui não é decorar onde fica o botão de 'Salvar'. É entender o FLUXO DA INFORMAÇÃO: como uma viagem nasce, como o sistema vigia e como os alertas são priorizados.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Dica do Assistente IA",
          text: [
            "Não se preocupe com telas mudando de layout no futuro. A lógica (Grade vs Alertas) nunca muda. Se você focar na lógica, o design se torna irrelevante.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-interface",
      title: "Capítulo 1: A Anatomia da Tela",
      blocks: [
        {
          type: "comparison",
          title: "Grade de Viagens x Fila de Alertas",
          left: {
            label: "A Grade de Viagens (Passiva)",
            points: [
              "É a lista de TODOS os caminhões atualmente em rota.",
              "Serve para consultas (Ex: Cliente liga pedindo o ETA de um caminhão específico).",
              "Não exige ação imediata do operador.",
            ],
          },
          right: {
            label: "A Fila de Alertas (Ativa)",
            points: [
              "O coração pulsante. Aqui caem apenas as EXCEÇÕES (violações do PGR).",
              "Pisca, faz barulho e exige AÇÃO IMEDIATA (SLA).",
              "Ordenada por Níveis de Prioridade (do 1 ao 7).",
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-2-a-viagem",
      title: "Capítulo 2: O Ciclo de Vida da Viagem (SM)",
      blocks: [
        {
          type: "timeline",
          title: "A Jornada do SM (Solicitação de Monitoramento)",
          items: [
            { label: "Nascimento (Criação)", text: "Gerada via integração com o TMS do cliente. O Connect atrela automaticamente o veículo, o motorista (já validado no Profile) e o PGR correspondente à carga." },
            { label: "Ativação (Ping)", text: "O sistema testa a comunicação com o hardware (Rastreador e Isca). Se ambos responderem, a viagem fica 'Em Trânsito'." },
            { label: "Execução (Rastreio)", text: "Cercas virtuais, macros de teclado e posições de GPS são gravadas a cada minuto." },
            { label: "Morte (Encerramento)", text: "O caminhão entra na cerca eletrônica do destino final. O operador (ou o sistema via Automação) dá baixa na SM, liberando o veículo para novo frete." },
          ],
        },
      ],
    },
    {
      id: "capitulo-3-motor",
      title: "Capítulo 3: O Motor de Regras e Níveis",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Operador não caça problemas; o Motor de Regras os traz até ele. O Motor é o cérebro da AtlasGR. Ele lê o PGR e classifica a gravidade do que acabou de acontecer.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Escala de Gravidade",
          items: [
            "Nível 1 (CRÍTICO EXTREMO): Acionamento do botão de pânico. Violação de painel. (SLA: Ação em 1 min. CIA imediata).",
            "Nível 2 (ALTO RISCO): Perda de sinal (Jammer) em área de risco mapeada. Desvio de rota em carga de altíssimo valor.",
            "Nível 4 (RISCO MODERADO): Parada não programada por 15 minutos fora de local seguro.",
            "Nível 7 (INFORMATIVO/LOGÍSTICO): Bateria da isca atingiu 20%.",
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Ordem dos Fatores Altera a Vida",
      blocks: [
        {
          type: "case",
          title: "O Operador que Escolheu o Mais Fácil",
          text: "Um caso clássico usado em reciclagens: Um operador iniciante viu sua Fila de Alertas subir. No topo, piscava em vermelho um Alerta Nível 1 (Pânico). Embaixo, piscava em amarelo um Alerta Nível 4 (Parada não programada). Como ele já conhecia o motorista do Nível 4, resolveu atender o Nível 4 primeiro para 'limpar a tela rápido'. Ele gastou 5 minutos nessa ligação. Quando abriu o Nível 1, a carreta já havia sumido no mapa (Jammer ativado). O Nível 1 era um sequestro real. Regra de Ouro: Nunca subverta a priorização do sistema. Ele sabe mais de risco do que você.",
          source: "Manual de Falhas Comuns - DHO AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-troubleshooting",
      title: "Capítulo 4: Troubleshooting de Alertas na Tela do Operador",
      blocks: [
        {
          type: "text",
          heading: "Quando o Alerta Mente (ou Parece Mentir)",
          paragraphs: [
            [
              "Nem todo alerta que pisca é um crime em andamento. Parte do ofício do Operador é diferenciar rapidamente um evento real de um ruído técnico, sem baixar a guarda e sem virar 'o menino que gritou lobo' de tanto ignorar tela.",
            ],
            [
              "Esta seção cobre os três chifres do boi que mais aparecem na Fila de Alertas e o script de reação esperado para cada um. Decorar isso evita ligação desnecessária para o cliente e, o mais importante, evita deixar passar o alerta que era de verdade.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Os 3 Vilões Mais Comuns da Tela",
          items: [
            "GPS sem sinal (Isca Muda): antes de escalar como perda de rastreio, confira o histórico de posição — se o último ping veio de um túnel, garagem coberta ou área rural conhecida por sombra de sinal, aguarde o tempo de tolerância do PGR antes de tratar como Nível 2.",
            "Evento duplicado: o mesmo alerta aparece duas ou três vezes na fila em poucos segundos. Normalmente é reenvio de pacote pela operadora de telefonia do rastreador. Trate apenas a primeira ocorrência e marque as réplicas como duplicidade, nunca como alertas novos.",
            "Falso positivo de desvio de rota: comum em obras, bloqueios e desvios oficiais de trânsito não cadastrados no mapa. Confira o aplicativo de trânsito e o contato do motorista antes de classificar como desvio suspeito — só escale como Nível 2 se o motorista não responder ou a explicação não fechar.",
          ],
        },
        {
          type: "faq",
          items: [
            {
              q: "Recebi um GPS sem sinal e o motorista não atende o telefone. E agora?",
              a: "Aguardar sem agir é a pior opção. Se o tempo de tolerância do PGR já estourou e não há resposta do motorista, o alerta sobe automaticamente de nível — não force o rebaixamento manual só porque 'geralmente é sombra de sinal'.",
            },
            {
              q: "Posso simplesmente fechar um alerta duplicado sem registrar nada?",
              a: "Não. Fechar sem registrar apaga o rastro para auditoria. Sempre marque a duplicidade no próprio sistema, vinculando ao evento original, mesmo que a ação real tenha sido tomada apenas uma vez.",
            },
            {
              q: "E se eu classificar um evento real como falso positivo por engano?",
              a: "Acontece, e é para isso que existe a CIA. Escale imediatamente ao perceber o erro — corrigir rápido é infinitamente melhor do que deixar o erro 'se resolver sozinho'.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Regra de Desempate",
          text: [
            "Na dúvida entre 'é ruído técnico' e 'pode ser real', trate como real. Escalar um alerta que depois se confirma falso positivo custa um telefonema extra. Ignorar um alerta real custa uma carga — ou uma vida.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Próximos Passos",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Leia o 'Manual de Telas' no sistema de Base de Conhecimento interno para ver capturas de tela atualizadas do cockpit.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que vem a seguir",
          items: [
            "Você passará por uma semana de 'Treinamento Sombra' (ouvindo ligações reais).",
            "Seu próximo módulo será focado na etapa ANTERIOR ao Connect: O Atlas Profile.",
          ],
        },
      ],
    },
  ],
  summary: [
    "O Connect orquestra toda a viagem, da validação inicial até o encerramento no destino.",
    "A Grade é passiva; A Fila de Alertas é ativa e dita a ordem de trabalho do Operador.",
    "Um SM (Solicitação de Monitoramento) centraliza caminhão, motorista, carga e regras.",
    "O Motor de Regras usa 7 níveis de prioridade para impedir que o Operador escolha o que tratar primeiro.",
  ],
  finalChecklist: [
    "Entendo a função da Fila de Alertas vs Grade.",
    "Consigo elencar os 4 estágios de vida de um SM.",
    "Sei a consequência fatal de subverter a ordem de Níveis de Prioridade.",
  ],
  mindMap: {
    root: "Atlas Connect",
    branches: [
      { label: "Visões", items: ["Grade", "Fila de Alertas", "Mapa Virtual"] },
      { label: "Jornada", items: ["SM", "Ping", "Trânsito", "Baixa"] },
      { label: "Regras", items: ["Nível 1 (Pânico)", "Nível 7 (Bateria)", "Falso Positivo (Desvio de Rota)"] },
    ],
  },
  scenario:
    "Cenário Prático: A energia cai na sua central, mas o sistema de nobreak segura os computadores. A fila tem 50 alertas acumulados. O que você (e o sistema) fazem para voltar ao controle sem perder uma carga crítica?",
  diagram: {
    title: "Triagem de Alertas",
    chart: "graph TD\n  Evento[Caminhão Desvia Rota] --> Motor[Motor de Regras]\n  Motor --> Classifica[Classifica como Nível 2]\n  Classifica --> Fila[Topo da Fila do Operador]\n  Fila --> Acao[Operador Age]",
  },
};
