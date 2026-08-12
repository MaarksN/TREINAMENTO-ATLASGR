import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("11-operacao")!;

export const module11: ModuleContentFull = {
  ...meta,
  sources: [
    "Apostila de Treinamento Inicial (v. 4.0) — Procedimentos Atlas GR",
    "Treinamento Connect — Tratando Eventos Críticos",
    "Manual de Check list Central",
  ],
  objectives: [
    "Entender a pressão e o fluxo de trabalho de um turno na Torre de Controle 24h.",
    "Interiorizar a diferença de postura entre um 'Rastreador' e um 'Monitorador Ativo'.",
    "Decorar e aplicar as réguas de tempo (SLA) de tratativa e escalonamento.",
    "Internalizar a cultura de NUNCA encerrar um alerta por intuição ou pena do motorista.",
    "Executar a passagem de turno (handover) sem perder contexto de ocorrências em andamento.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: Bem-vindo à Linha de Frente",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Torre de Controle AtlasGR operando sob alta complexidade e vigilância ininterrupta."
        },
        {
          type: "text",
          heading: "O Coração da AtlasGR",
          paragraphs: [
            [
              "Todos os módulos anteriores construíram a base teórica e estratégica. Agora, você está no ambiente tático: sentado na cadeira, o fone de ouvido posicionado, e a tela do sistema Atlas Connect piscando em vermelho. Bem-vindo à Operação 24 horas, o ecossistema mais dinâmico e implacável da companhia.",
            ],
            [
              "Na Torre de Controle, 5 minutos de distração podem custar vidas, cargas milionárias e contratos gigantescos. A eficiência não vem de improviso; vem da obediência cega aos processos, do foco absoluto e da capacidade de processar informações sob altíssima pressão. Você é a primeira linha de defesa contra o colapso da cadeia de suprimentos.",
            ],
          ],
        },
        {
          type: "quote",
          text: "A eficiência em momentos de crise não é um acidente, é o resultado direto de processos respeitados à risca.",
          author: "Diretoria de Operações AtlasGR"
        },
        {
          type: "callout",
          variant: "warning",
          title: "SLA - A Máxima Absoluta",
          text: [
            "Não existe tempo para deliberações longas. Quando um alerta é acionado, você tem **10 Minutos** cravados para iniciar a ação investigativa. E até **45 minutos** para concluir o protocolo ou transferir a responsabilidade (escalonamento) para a C.I.A.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-ativo-passivo",
      title: "Capítulo 1: O Fim do Rastreio Passivo",
      blocks: [
        {
          type: "comparison",
          title: "Rastrear vs Monitorar",
          left: {
            label: "O Rastreador (Amador)",
            points: [
              "Mantém o olhar fixo em indicadores de posicionamento passivos.",
              "Apenas reage após um chamado telefônico do motorista ou do cliente.",
              "Age de forma corretiva, constatando o evento apenas após a concretização da perda."
            ],
          },
          right: {
            label: "O Monitorador (Padrão AtlasGR)",
            points: [
              "Confia plenamente no Motor de Regras e na Inteligência Artificial.",
              "Trata implacável e sistematicamente a Fila de Alertas do Connect.",
              "Age preditivamente. Intervém quando a IA identifica desvios de conduta, prevenindo o incidente."
            ],
          },
        },
        {
          type: "stat",
          items: [
            { value: "98%", label: "Redução de falsos positivos com a nova IA" },
            { value: "3x", label: "Mais velocidade de resposta do monitorador ativo" }
          ]
        },
      ],
    },
    {
      id: "capitulo-2-fluxo",
      title: "Capítulo 2: O Passo a Passo de um Alerta",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Imagine o cenário: A tela piscou com a mensagem 'Parada Indevida de Alto Risco'. As decisões que você tomará nos próximos minutos selarão o destino de uma operação milionária.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Execução Tática Padrão",
          items: [
            { label: "01 min", text: "Clique no alerta. Este ato trava a ocorrência em seu perfil, interrompendo o relógio do SLA primário de 10 min. A partir deste momento, você é o responsável legal por esta carga." },
            { label: "02 min", text: "Dispare o bloqueio preventivo (via macro). Esta ação garante que as portas do baú permaneçam travadas, impedindo a descarga forçada em postos ou áreas de risco." },
            { label: "03 min", text: "Inicie o contato via rádio satelital, terminal de comunicação ou telefone primário do motorista." },
            { label: "05 min", text: "O motorista atende. O protocolo é claro: EXIJA IMEDIATAMENTE A CONTRA-SENHA DO DIA." },
            { label: "06 min", text: "Respostas definem a ação: Contra-senha correta resulta em justificativa validada e encerramento do alerta. Contra-senha incorreta ou ausência de sinal exige o acionamento do Botão de Pânico e o escalonamento à CIA." },
          ],
        },
      ],
    },
    {
      id: "capitulo-3-erros",
      title: "Capítulo 3: Os Pecados Capitais da Torre",
      blocks: [
        {
          type: "callout",
          variant: "warning",
          title: "Análise Comportamental ao Telefone",
          text: [
            "A contra-senha validada não é uma permissão para desligar sua intuição. Hesitações incomuns, pausas prolongadas, gaguejos ou respostas evasivas são sinais clássicos de coação armada invisível ao sistema. Nessas horas, o humano supera a máquina: acione a supervisão.",
          ],
        },
        {
          type: "checklist",
          title: "Apoio Investigativo: Abordagem Correta",
          items: [
            "\"Você pode confirmar se encontra-se em um local seguro neste momento?\"",
            "\"Me detalhe os pontos de referência da sua localização atual, por gentileza.\"",
            "\"Qual a justificativa operacional ou emergencial para a parada não programada?\"",
            "Mantenha o controle da ligação informando: \"Estou validando as suas coordenadas sistêmicas, aguarde um momento na linha.\"",
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "A disciplina operacional é o pilar que sustenta o nosso sucesso. Cometer as falhas listadas abaixo representa violação imediata dos protocolos de segurança, resultando em demissão por Justa Causa Técnica.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Os 3 Pecados Operacionais Fatais",
          items: [
            "**O Enforcamento de Alerta**: O ato de assumir um alerta para interromper o SLA de 10 minutos, mas abandonar a tratativa real, deixando-o 'em espera' enquanto executa tarefas secundárias.",
            "**Subversão de Fila**: Tratar de alertas simples (Nível 6, documentais) em detrimento de alertas críticos (Nível 1, Parada em Zona de Risco), violando a lógica de priorização de crise.",
            "**Empatia Tóxica**: Ignorar a exigência da CONTRA-SENHA baseando-se apenas na suposta 'tranquilidade' da voz do motorista (que frequentemente está sob a mira de um revólver)."
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Pressão Psicológica",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Simulação de ocorrência em rodovia sob condições climáticas adversas."
        },
        {
          type: "case",
          title: "O Pneu Furado e a Empatia Que Custou R$ 800 Mil",
          text: "Um caso verídico e cruel no histórico de lições aprendidas: um caminhão parou de madrugada em uma rodovia extremamente isolada. A Torre acionou um Alerta Crítico. Ao ligar, o operador atendeu a uma voz em desespero: 'Cara, meu pneu estourou, quase capotei, me ajuda! Libera as portas pra eu pegar a chave de roda'. O operador, tomado pelo nervosismo e por empatia excessiva, quebrou o protocolo: não exigiu a contra-senha e desbloqueou o compartimento remotamente. A realidade? Quem falava não era o motorista, mas sim um criminoso altamente articulado simulando a crise. A carga, avaliada em R$ 800 mil, foi integralmente subtraída. A empatia sem o rigor do protocolo é a melhor arma do crime organizado. Na dúvida, presuma coação e não destrave.",
          source: "Arquivos Confidenciais de Treinamento DHO",
        },
      ],
    },
    {
      id: "capitulo-4-passagem-de-turno",
      title: "Capítulo 4: A Passagem de Turno (Handover) Tática",
      blocks: [
        {
          type: "text",
          heading: "A Ocorrência Não Termina no Seu Horário",
          paragraphs: [
            [
              "Às 22h, o seu expediente se encerra, mas a crise envolvendo a carreta com eletrônicos na zona de risco permanece. Se o próximo operador assumir a estação às escuras, a AtlasGR não apenas fura os tempos de resposta; perdemos o fio da meada da investigação. Um handover falho destrói evidências que serão vitais para a auditoria do sinistro.",
            ],
            [
              "Handover não é uma conversa de corredor. É um protocolo formal, digital, documentado no próprio log do Connect. Ele assegura a transferência exata da cadeia de responsabilidade e o status preciso do evento.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O Protocolo Obrigatório de Repasse",
          items: [
            "Número do incidente/alerta e registro temporal de abertura.",
            "O estado tático atual: contato estabelecido, tentativa frustrada, escalonamento em andamento, envolvimento de órgãos de segurança.",
            "Dossiê de contatos: horário exato e canal utilizado em todas as tentativas anteriores.",
            "Validação da contra-senha (sim/não) e por qual operador.",
            "Macros operacionais enviadas: horário dos bloqueios preventivos, cortes de combustível, ativações de sirene.",
            "Nome do responsável que está encerrando o turno, que deve ser consultado em casos de esclarecimento crítico (accountability prolongada).",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Se não está escrito, nunca aconteceu",
          text: [
            "Um repasse verbal pelo WhatsApp ou verbalizado rapidamente na troca de cadeiras não possui valor perante uma auditoria. Se o detalhe da operação não está protocolado no Connect, judicialmente e proceduralmente, ele não existe.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Considerações Finais",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A sua formação técnica está próxima do fim, mas o verdadeiro teste ocorrerá na Torre. Seus primeiros turnos serão conduzidos em modo 'Shadowing', acompanhado passo a passo por líderes experientes. Aprenda a suportar a pressão e abrace o processo; ele é o seu maior escudo.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Passos para Fechamento",
          items: [
            "Realize o Quiz Final com máxima concentração. Ele testa cenários e decisões sob pressão.",
            "Prossiga para a Trilha Final 05, onde conectaremos todos esses pontos práticos aos conceitos de IA e aos nossos estudos de caso reais.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A Torre de Controle é o ambiente de execução reativa onde o processo AtlasGR salva vidas e cargas.",
    "Tempo é a variável crítica. SLAs de 10min (início) e 45min (resolução) devem ser seguidos de maneira religiosa.",
    "A contra-senha é um artifício de segurança inquebrável, superior à intuição, para validar o ambiente do motorista.",
    "Falhas de conduta como 'enforcar alertas' ou ignorar regras em passagens de turno geram demissões técnicas imediatas.",
  ],
  finalChecklist: [
    "Compreendo a dinâmica entre o tempo de resposta (SLA) e a escalada de um sinistro.",
    "Entendi que empatia e intuição não substituem a contra-senha em hipótese alguma.",
    "Estou ciente das responsabilidades formais contidas em um handover perfeito.",
  ],
  mindMap: {
    root: "Operação AtlasGR",
    branches: [
      { label: "Fundamentos", items: ["Monitoramento Ativo", "SLA Rígido", "Ação Imediata"] },
      { label: "Execução Prática", items: ["Travar o Alerta", "Bloqueios Preventivos", "Validação de Contra-Senha", "Formalização do Handover"] },
      { label: "Desvios Críticos", items: ["Enforcamento de Alertas", "Falsas Validações", "Empatia Excessiva"] },
    ],
  },
  scenario:
    "Cenário Crítico: 02:45 da manhã. O sistema indica Zona Vermelha. O motorista entra em contato direto e, com voz de choro, diz que esqueceu a contra-senha e precisa urgente abastecer. Qual é a sua ação protocolar, dada a pressão psicológica?",
  diagram: {
    title: "A Árvore de Decisão Rápida",
    chart: "graph TD\n  A[Alerta Crítico: Parada em Zona Vermelha] --> B{Operador inicia em <10m?}\n  B -- Não --> Falha[Quebra de SLA / Sinistro Avança]\n  B -- Sim --> C[Bloqueio Físico/Remoto Preventivo]\n  C --> D{Motorista valida Contra-Senha corretamente?}\n  D -- Sim --> E[Protocolo de Baixa / Desbloqueio Validado]\n  D -- Não / Voz Estranha --> F[Aciona Pânico / Escalona C.I.A e 190]",
  },
};
