import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("11-operacao")!;

export const module11: ModuleContentFull = {
  ...meta,
  sources: [
    "Apostila de Treinamento Inicial (v. 4.0) — Procedimentos padronizados Atlas GR, script de atendimento e nomenclatura de grade",
    "Treinamento Connect — Tratando Eventos (níveis de prioridade de alerta)",
    "Treinamento Tratativa de Alertas — Desvio de Rota (sobreposição de níveis)",
    "Desenvolvimento Profissional em Atendimento ao Cliente e Motorista (script, regra dos 90%, regras de desbloqueio)",
    "Treinamento de Malícia (senha de voz, itens de atenção antes da viagem)",
    "Manual de Check list Central",
    "Módulo 3 — Gerenciamento de Risco (fluxo de checklist e acionamento da CIA)",
    "Módulo 5 — Software Logístico (Atlas Connect)",
  ],
  objectives: [
    "Descrever a rotina de um operador na Central de Monitoramento 24 horas.",
    "Explicar o papel da Torre de Controle na priorização de eventos por nível.",
    "Reconhecer os 7 níveis de prioridade de alerta usados no Atlas Connect.",
    "Aplicar o SLA real de tratativa (início em até 10 minutos, término em até 45) e o roteiro de escalonamento.",
    "Interpretar anotações padronizadas da grade de veículos.",
  ],
  sections: [
    {
      id: "rotina-do-operador",
      title: "A rotina de um operador",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Central de Monitoramento funciona 24 horas por dia, todos os dias do ano. Antes de qualquer tratativa por telefone, o operador solicita a ",
              { term: "senha-de-voz" },
              " — sem essa confirmação, o atendimento é encerrado, mesmo que quem ligou diga ser o motorista ou um responsável da transportadora.",
            ],
            [
              "No restante do turno, o operador acompanha viagens em andamento pela ",
              { term: "torre-de-controle" },
              ", trata alertas conforme o ",
              { term: "pgr" },
              " de cada cliente e documenta cada tratativa no ",
              { term: "connect" },
              ".",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Um turno típico na Central",
          items: [
            { label: "Início do turno", text: "Revisão das viagens em andamento e pendências deixadas pelo turno anterior." },
            { label: "Todo atendimento por telefone", text: "Confirmação da senha de voz antes de tratar qualquer assunto da viagem." },
            { label: "Durante o turno", text: "Tratativa de alertas na Torre de Controle, por ordem de nível de prioridade." },
            { label: "Eventos críticos", text: "Escalonamento para a CIA sempre que o alerta indicar risco de sinistro ou coação." },
            { label: "Fim do turno", text: "Passagem de turno documentada, com pendências registradas para o próximo operador." },
          ],
        },
      ],
    },
    {
      id: "niveis-de-alerta",
      title: "Os 7 níveis de prioridade de alerta",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "No Atlas Connect, cada tipo de evento tem um nível de prioridade fixo, de 1 (rotina) a 7 (crítico). É esse nível que organiza a fila de tratativa da Torre de Controle — não a ordem de chegada do alerta.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Do nível 1 ao nível 7",
          items: [
            { label: "Nível 1", text: "SM iniciada — ativar sensores e atuadores, verificar se as macros estão embarcadas e sendo passadas corretamente pelo motorista." },
            { label: "Nível 2", text: "Carga/Descarga não cadastrada; Mensagem de Texto Livre enviada pelo motorista." },
            { label: "Nível 3", text: "Parada Indevida; Excesso de Tempo em Macro; Previsão de Início/Fim excedida." },
            { label: "Nível 4", text: "Entrada em Área de Risco; Fim de Viagem Não Informado; Violação de porta do motorista ou do carona; Saída do Raio de Origem Sem Início." },
            { label: "Nível 5", text: "Desvio de Rota — o veículo saiu da rota cadastrada na SM ativa." },
            { label: "Nível 6", text: "Perda de Sinal — pode ser jammer, área de sombra, barracão ou cobertura de posto." },
            { label: "Nível 7", text: "Alarme de Desengate sem autorização; Botão de Pânico; Violação de Bateria; Alarme de Senha de Coação." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Nível não é opinião do operador",
          text: [
            "O nível de cada alerta é definido pelo sistema, não pelo operador — isso garante que um Botão de Pânico (nível 7) nunca fique esperando na fila atrás de uma Mensagem de Texto Livre (nível 2), mesmo que a mensagem tenha chegado primeiro.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Um nível pode sobrepor o outro",
          text: [
            "O nível 6 (Perda de Sinal) sempre sobrepõe o nível 5 (Desvio de Rota): se os dois ocorrerem juntos, o operador segue o procedimento de Perda de Sinal — começando pelo envio de comando de posição e mensagem — e só depois trata o Desvio de Rota, sem abrir dois atendimentos separados.",
          ],
        },
      ],
    },
    {
      id: "sla-e-escalonamento",
      title: "SLA e roteiro de escalonamento",
      blocks: [
        {
          type: "stat",
          items: [
            { value: "10 min", label: "prazo para iniciar a tratativa de um evento crítico" },
            { value: "45 min", label: "prazo para concluir a tratativa, do início ao registro final" },
          ],
        },
        {
          type: "timeline",
          title: "Roteiro padrão de tratativa (Procedimentos Padronizados Atlas GR)",
          items: [
            { label: "1", text: "Envio de mensagem para o motorista solicitando a situação da viagem." },
            { label: "2", text: "Tentativas de contato com o motorista por telefone." },
            { label: "3", text: "Envio do comando \"Liga Sirene\"." },
            { label: "4", text: "Tentativa de contato com o cliente transportador, seguindo a ordem de contato solicitada por ele." },
            { label: "5", text: "Envio do comando \"Bloqueio\", caso o veículo esteja parado." },
            { label: "6", text: "Acionamento de autoridades policiais próximas, diante de suspeita de sinistro." },
            { label: "7", text: "Registro de Não Conformidade no Atlas Connect." },
            { label: "8", text: "Contato com o cliente para autorizar o acionamento de uma empresa de Pronta Resposta." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Nem todo alerta chega ao passo 8",
          text: [
            "O roteiro é sequencial: muitos alertas são resolvidos já nos primeiros passos (ex.: o motorista responde à mensagem confirmando que está tudo normal) e o operador simplesmente registra e encerra a tratativa.",
          ],
        },
      ],
    },
    {
      id: "atendimento-e-bloqueio",
      title: "Atendimento ao motorista e regras de bloqueio",
      blocks: [
        {
          type: "text",
          heading: "O script de identificação",
          paragraphs: [
            [
              "Todo atendimento por telefone segue uma ordem fixa: cumprimentar (\"Bom dia/tarde, Atlas GR, [nome] falando, com quem eu falo?\"), solicitar nome do motorista, placa do veículo, transportadora e, por fim, a ",
              { term: "senha-de-voz" },
              ". A senha é conferida no sistema — se estiver incorreta, o operador não confirma o motivo do erro, apenas pede para o motorista verificar novamente.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Duas tentativas, e não mais que isso",
          text: [
            "Após 2 tentativas erradas de senha de voz, o operador comunica a supervisão, repassa o caso para a transportadora e não prossegue com nenhuma informação — nem de rota, nem de localização, nem de status da viagem.",
          ],
        },
        {
          type: "text",
          heading: "A regra dos 90%",
          paragraphs: [
            [
              "Antes de autorizar qualquer desbloqueio, o operador verifica se houve um comando de bloqueio automático emitido pelo próprio sistema. Em aproximadamente 90% dos casos em que existe esse comando sistêmico, o desbloqueio não é autorizado — independentemente da justificativa dada pelo motorista.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Regra de desbloqueio por tipo de bloqueio",
          left: {
            label: "Pode desbloquear quando...",
            points: [
              "Violação de sensor: a violação foi normalizada no sistema.",
              "Desvio de rota: o veículo já retornou à rota autorizada e não há comando de bloqueio ativo.",
            ],
          },
          right: {
            label: "Precisa de autorização da transportadora quando...",
            points: [
              "Violação de sensor persistente, mesmo com o motorista confirmando que está tudo em ordem.",
              "Desvio de rota: veículo ainda fora da rota autorizada.",
              "Parada indevida ou parada fora de alvo cadastrado — sempre exige autorização da transportadora, informando o local exato da parada.",
            ],
          },
        },
        {
          type: "faq",
          items: [
            { q: "Por que não posso confirmar ao motorista qual parte da senha de voz ele errou?", a: "Isso evitaria que uma pessoa não autorizada, tentando adivinhar a senha, descubra por eliminação qual é a combinação correta." },
            { q: "Que linguagem devo evitar em um atendimento?", a: "Gírias e informalidade excessiva (\"Mano, tá tudo certo aí?\", \"Fechô!\"). Prefira um tom claro, respeitoso e direto, mesmo em uma ligação de rotina." },
          ],
        },
      ],
    },
    {
      id: "nomenclatura-da-grade",
      title: "Nomenclatura padronizada da grade de veículos",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Toda tratativa fica registrada na grade de veículos com um código curto, sempre com data e hora — isso permite que qualquer operador, em qualquer turno, entenda o histórico de uma viagem em segundos.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Exemplos de anotação padronizada",
          items: [
            "#CONF 03/11 as 06:00 C/MOTO XXXX VIA TEL informa que está no posto para refeição, prazo de retorno às 08:00.",
            "#AUT RESET 03/11 as 08:44 RESP/XXXX para manutenção até XX:XX.",
            "[PROB N PAINEL] — identifica problema no sensor de painel.",
            "*SM ATIVA 03/11 São Paulo x Ribeirão Preto — identifica início de uma nova SM.",
            "@ Porta / @ Painel / @ Baú / @ Desengate / @ Âncora / @ BP — identificam o tipo de alarme gerado.",
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Por que usar códigos em vez de escrever tudo por extenso?", a: "Agilidade: em um turno com dezenas de veículos, uma nomenclatura padronizada permite entender o histórico de uma viagem de relance, sem reler parágrafos inteiros." },
            { q: "O que significa a Âncora nos alertas de nível 4?", a: "É um alerta exclusivo da tecnologia SIGHRA, disparado quando o veículo sai da âncora cadastrada em uma macro de Carga/Descarga ou Parada." },
          ],
        },
      ],
    },
  ],
  summary: [
    "Todo atendimento por telefone começa com a confirmação da senha de voz, antes de qualquer outro assunto.",
    "O Atlas Connect organiza alertas em 7 níveis de prioridade, do nível 1 (SM iniciada) ao nível 7 (Botão de Pânico, Senha de Coação, entre outros) — e o nível 6 sempre sobrepõe o nível 5.",
    "O SLA real é iniciar a tratativa em até 10 minutos e concluí-la em até 45 minutos.",
    "O roteiro padrão de escalonamento vai de mensagem ao motorista até o acionamento de pronta resposta, em 8 passos sequenciais.",
    "Após 2 tentativas erradas de senha de voz, o atendimento é encerrado e escalado à supervisão; e em ~90% dos casos com bloqueio sistêmico ativo, o desbloqueio não é autorizado.",
    "A grade de veículos usa uma nomenclatura padronizada (#CONF, #AUT, @Porta, ****, entre outras) para registrar tratativas de forma ágil.",
  ],
  finalChecklist: [
    "Sei por que a senha de voz é solicitada em toda ligação, e o que fazer após 2 tentativas erradas.",
    "Consigo listar os 7 níveis de prioridade de alerta e um exemplo de cada.",
    "Sei o SLA real de início (10 min) e conclusão (45 min) da tratativa.",
    "Consigo descrever o roteiro de 8 passos do escalonamento padrão.",
    "Sei quando um desbloqueio pode ser feito diretamente e quando exige autorização da transportadora.",
    "Reconheço pelo menos 3 códigos padronizados usados na grade de veículos.",
  ],
  mindMap: {
    root: "Operação",
    branches: [
      { label: "Rotina", items: ["Senha de voz", "Torre de Controle", "Passagem de turno"] },
      { label: "7 níveis de alerta", items: ["1 — SM iniciada", "5 — Desvio de rota", "6 — Perda de sinal (sobrepõe nível 5)", "7 — Botão de pânico / Senha de coação"] },
      { label: "SLA", items: ["Início em até 10 min", "Conclusão em até 45 min"] },
      { label: "Escalonamento", items: ["Mensagem → Contato → Sirene → Bloqueio → Polícia → Pronta Resposta"] },
      { label: "Atendimento e bloqueio", items: ["Script de identificação", "2 tentativas de senha", "Regra dos 90%", "Autorização da transportadora"] },
      { label: "Grade de veículos", items: ["#CONF", "#AUT", "@Porta/@Painel/@Baú", "*SM ATIVA"] },
    ],
  },
  scenario:
    "22h14: um veículo com carga de alto valor perde sinal (nível 6) enquanto ainda tinha um alerta de desvio de rota (nível 5) em aberto. O motorista não atende, e a senha de voz nunca chegou a ser confirmada. Qual procedimento você segue primeiro, e por quê?",
  diagram: {
    title: "Roteiro de escalonamento (8 passos)",
    chart:
      "graph LR\n  A[1 Mensagem] --> B[2 Contato telefone]\n  B --> C[3 Liga Sirene]\n  C --> D[4 Contato cliente]\n  D --> E[5 Bloqueio]\n  E --> F[6 Aciona policia]\n  F --> G[7 Nao Conformidade]\n  G --> H[8 Autoriza Pronta Resposta]",
  },
};
