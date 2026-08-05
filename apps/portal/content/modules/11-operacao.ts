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
          type: "text",
          heading: "O Coração da AtlasGR",
          paragraphs: [
            [
              "Todos os módulos anteriores construíram a base teórica. Agora você está sentado na cadeira, o fone de ouvido no ouvido, e a tela do Atlas Connect piscando em vermelho. Bem-vindo à Operação 24 horas.",
            ],
            [
              "Na Torre de Controle, 5 minutos de distração podem custar vidas, cargas milionárias e contratos gigantescos. A eficiência não vem de improviso, vem da obediência cega ao processo.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "SLA - A Máxima Absoluta",
          text: [
            "Não existe tempo de pensar. Quando um alerta cai, você tem **10 Minutos** cravados para agir. E até **45 minutos** para resolver tudo ou passar para a CIA.",
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
            points: ["Fica olhando bolinhas no mapa.", "Só age quando o motorista ou cliente liga.", "Não previne, apenas constata a tragédia depois de ocorrida."],
          },
          right: {
            label: "O Monitorador (AtlasGR)",
            points: ["Confia no Motor de Regras.", "Trata implacavelmente a Fila de Alertas do Connect.", "Age quando a IA avisa que o motorista errou, ANTES do roubo."],
          },
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
              "A tela piscou: 'Parada Indevida de Alto Risco'. O que você faz nos próximos minutos?",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Execução Tática",
          items: [
            { label: "01 min", text: "Clique no alerta. Você trava o alerta no seu nome, parando o relógio do SLA inicial de 10 min." },
            { label: "02 min", text: "Você dispara bloqueio de baú preventivo (macrô) para que o motorista não consiga descarregar no posto." },
            { label: "03 min", text: "Liga via rádio satelital ou celular para o motorista." },
            { label: "05 min", text: "Motorista atende. VOCÊ EXIGE A CONTRA-SENHA DO DIA." },
            { label: "06 min", text: "Contra-senha correta (Justificativa aprovada = Fim do Alerta). Contra-senha Errada/Sem Sinal = Botão de Pânico acionado e Escalonado para a CIA imediatamente." },
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
          title: "Pausas e comportamento estranho também são um sinal",
          text: [
            "Senha de voz correta não encerra a atenção: hesitação incomum, pausas longas ou um comportamento diferente do habitual do motorista também justificam acionar a supervisão, mesmo sem nenhum alarme de coação disparado automaticamente pelo sistema.",
          ],
        },
        {
          type: "checklist",
          title: "Perguntas de apoio ao avaliar uma parada",
          items: [
            "\"Está em local seguro?\"",
            "\"Me confirma o local que está, por favor.\"",
            "\"A parada foi necessária por qual motivo?\"",
            "Durante a consulta ao sistema, manter o motorista informado: \"Estou analisando sua situação aqui no sistema, só um momento, por favor.\"",
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "Abaixo os erros que geram demissão imediata (Justa Causa Técnica).",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Os 3 Pecados Operacionais",
          items: [
            "Enforcar o Alerta: Você clica nele (travando no seu nome), mas vai almoçar e esquece de tratá-lo por horas.",
            "Subverter a Fila: Tratar alertas fáceis (Nível 6) ignorando um Alerta de Pânico Crítico (Nível 1) que está no topo piscando.",
            "Acreditar na Voz: Achar que a voz do motorista estava calma e encerrar o alerta crítico sem exigir a CONTRA-SENHA OBRIGATÓRIA (Ele poderia estar com uma arma na nuca fingindo calma).",
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Pressão Psicológica",
      blocks: [
        {
          type: "case",
          title: "O Pneu Furado e o Ladrão",
          text: "Um caso verídico e cruel: O motorista parou de madrugada em rodovia isolada. A torre apitou Alerta Crítico. O operador ligou, e ouviu uma voz desesperada: 'Cara, meu pneu estourou na serra, quase capotei, me ajuda, chama o resgate, libera o baú que vou colocar a chave de roda'. O Operador de Torre, movido pela empatia, não pediu a contra-senha, liberou o baú remoto e encerrou a chamada para ligar pro resgate. Na verdade, quem estava falando ao rádio era um criminoso altamente articulado. A carga de R$ 800 mil foi saqueada do baú destravado. A empatia burra no gerenciamento de risco é uma arma que os bandidos usam. Sem contra-senha, presuma coação e trave tudo.",
          source: "Arquivos de Treinamento DHO",
        },
      ],
    },
    {
      id: "capitulo-4-passagem-de-turno",
      title: "Capítulo 4: A Passagem de Turno (Handover)",
      blocks: [
        {
          type: "text",
          heading: "A Ocorrência Não Bate o Ponto Junto com Você",
          paragraphs: [
            [
              "Às 22h a sua carga horária acaba, mas o caminhão parado na zona de risco continua parado. O sinistro em investigação continua em investigação. Se o próximo operador sentar na cadeira sem saber o que já foi feito, a AtlasGR não perde só o SLA: perde a linha do tempo inteira de uma ocorrência, e isso é o que vira prova em uma auditoria ou em um processo de sinistro.",
            ],
            [
              "Handover não é 'um oi, tchau, deixei anotado ali'. É um protocolo formal, com registro escrito no Connect, que garante que o turno seguinte assume a ocorrência no ponto exato em que você parou — não um passo antes, não um passo depois.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que entra obrigatoriamente no repasse de turno",
          items: [
            "Número do alerta/ocorrência e horário exato de abertura.",
            "Status atual: em contato, aguardando retorno do motorista, escalonado para a CIA, aguardando policiamento.",
            "Todas as tentativas de contato já feitas (horário, canal, resultado) — sem repetir ligação que já foi feita e já falhou.",
            "Se a contra-senha já foi validada ou não, e por quem.",
            "Qualquer comando remoto já disparado (bloqueio de baú, corte de combustível, etc.) e o horário.",
            "Nome do operador que está entregando o turno, para quem qualquer dúvida deve ser direcionada mesmo fora de escala.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Handover verbal não vale nada",
          text: [
            "Um repasse 'de boca', no corredor ou no grupo de WhatsApp informal, some junto com a memória de quem falou. Se não está registrado no campo de anotações da ocorrência dentro do Connect, para fins de auditoria e de responsabilidade, **aquele repasse nunca aconteceu**.",
          ],
        },
        {
          type: "case",
          title: "O Alerta que Trocou de Turno Três Vezes",
          text: "Uma ocorrência de parada suspeita foi aberta às 19h40, faltando 20 minutos para a virada de turno. O operador do turno da tarde tratou o alerta, mas não escreveu nada no sistema — só avisou verbalmente ao colega que 'já estava sob controle'. O operador da noite, sem registro, entendeu que o alerta estava encerrado e não deu sequência ao acompanhamento. Passadas quatro horas, sem ninguém monitorando ativamente, a carga foi desviada de rota e o roubo só foi identificado pela geofence de destino, horas depois do previsto. A investigação interna concluiu que a falha não foi de nenhum operador individualmente: foi a ausência de um handover escrito que deixou a ocorrência sem dono.",
          source: "Relatório de Não Conformidade — Central de Monitoramento",
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
              "Você não treina no vácuo. Nos seus primeiros dias você operará o Connect no 'Modo Simulação' (Shadowing) assistido por um Líder Operacional sênior.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Fechamento da Trilha 4",
          items: [
            "Responda ao Quiz Final do módulo com concentração.",
            "Siga para a Trilha Final 05 (Compliance, IA e Casos Reais) para fechar o seu treinamento rumo à prova de Certificação.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A Torre opera 100% focada em Alertas, e nunca rastreando visualmente pontos passivos.",
    "O SLA não perdoa: Aja em 10 minutos ou a operação já começa falida.",
    "A contra-senha é a única prova tecnológica de que o motorista está livre de coação.",
    "Enforcar alertas ou ignorar a ordem de prioridade (Nível 1 > Nível 4) gera catástrofe.",
  ],
  finalChecklist: [
    "Sei de cor os SLAs operacionais (10m e 45m).",
    "Compreendo a importância absoluta da contra-senha diária.",
    "Consigo explicar por que empatia sem método é um perigo fatal.",
  ],
  mindMap: {
    root: "Torre de Controle",
    branches: [
      { label: "Filosofia", items: ["Atuação em Alerta", "Ação Imediata", "Velocidade SLA"] },
      { label: "Execução", items: ["Travar Alerta", "Comandos Remotos", "Contato e Senha", "Passagem de Turno Registrada"] },
      { label: "Erros Mortais", items: ["Acreditar na voz", "Subverter Fila", "Enforcamento"] },
    ],
  },
  scenario:
    "Cenário Prático: O motorista liga para o 0800 da Torre muito alterado, diz que esqueceu a contra-senha, que tá chovendo e ele precisa abastecer fora de rota. O sistema indica Zona Vermelha. Qual o seu procedimento rígido?",
  diagram: {
    title: "O Loop de Tratativa Rápida",
    chart: "graph TD\n  A[Alerta Nível Crítico] --> B{Operador Inicia em 10m?}\n  B -- Não --> Falha[SLA Fura / Prejuízo Cresce]\n  B -- Sim --> C[Bloqueio Preventivo]\n  C --> D{Motorista diz Contra-Senha?}\n  D -- Sim --> E[Validação Segura / Baixa]\n  D -- Não / Gagueja --> F[Escalona para CIA / 190]",
  },
};
