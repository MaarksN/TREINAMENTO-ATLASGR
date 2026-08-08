import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("03-gerenciamento-risco")!;

export const module03: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado (content/modules/meta.ts)",
    "Apólice de Seguro de Transporte e RCTR-C",
    "Manual de Estruturação de PGR",
    "Protocolos de CIA - Central de Inteligência Atlas",
  ],
  objectives: [
    "Definir tecnicamente Gerenciamento de Risco, Apólice Securitária e PGR.",
    "Diferenciar de forma jurídica as categorias de sinistro: Roubo, Furto, Sinistro e Avaria.",
    "Descrever o papel de 'Força Tática' da CIA em eventos críticos.",
    "Entender a anatomia de um PGR e como ele parametriza as automações da Torre de Controle.",
    "Detalhar o fluxo operacional completo de um sinistro, da comunicação formal à seguradora até o pagamento da indenização, incluindo o dossiê probatório exigido.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Coração do Negócio",
      blocks: [
        {
          type: "text",
          heading: "A Guerra Contra a Perda",
          paragraphs: [
            [
              "O Brasil perde bilhões anualmente com roubos de carga e acidentes. O Gerenciamento de Risco (GR) não é um 'adicional de segurança', é a espinha dorsal que mantém o ecossistema logístico respirando.",
            ],
            [
              "Sem GR forte, as seguradoras não emitem apólices. Sem apólice, o embarcador não contrata a transportadora. Neste módulo, você vai entender as engrenagens desse sistema: como as seguradoras ditam as regras, como o PGR as traduz, e como a nossa ",
              { term: "cia" },
              " entra em campo como a proteção final.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Desafio de Aprendizagem",
          text: [
            "O termo 'PGR' vai aparecer dezenas de vezes. Toda vez que lê-lo, traduza na sua mente para: 'O Livro de Regras do Jogo daquele caminhão específico, ditado por quem paga o prejuízo'.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-apolice",
      title: "Capítulo 1: A Tríade (Apólice, Seguradora e PGR)",
      blocks: [
        {
          type: "comparison",
          title: "Quem Paga vs Quem Previne",
          left: {
            label: "Apólice de Seguro",
            points: [
              "É o contrato financeiro assinado entre Transportadora/Embarcador e a Seguradora.",
              "Diz QUANTO vai ser pago em caso de perda total ou parcial.",
              "Possui 'Condicionantes': Só paga se o PGR for cumprido à risca.",
            ],
          },
          right: {
            label: "PGR (Plano de Gerenciamento de Risco)",
            points: [
              "É o manual tático e operacional.",
              "Diz O QUE TEM QUE SER FEITO (tecnologias, paradas permitidas, horários) para evitar a perda.",
              "Gerido e executado pela AtlasGR.",
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            [
              "O papel da AtlasGR não é ser a seguradora, e sim ser a auditora imparcial e executora rigorosa. Nós garantimos que o caminhão não quebre o ",
              { term: "pgr" },
              ", garantindo assim a cobertura da Apólice.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-2-sinistros",
      title: "Capítulo 2: Anatomia do Sinistro",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Um ",
              { term: "sinistro" },
              " é a materialização do risco. O mercado exige precisão absoluta nas nomenclaturas, pois elas definem as cláusulas de indenização.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Glossário de Ocorrências",
          items: [
            "Roubo: Subtração da carga mediante violência ou grave ameaça (assalto armado, retenção de motorista).",
            "Furto Simples: Subtração da carga sem uso de violência (carga levada enquanto o motorista tomava banho).",
            "Furto Qualificado: Subtração sem violência contra a pessoa, mas com quebra de barreira (ex: arrombamento de baú).",
            "Avaria: Dano físico à carga (tombamento do caminhão que quebrou os produtos).",
            "Apropriação Indébita: Quando o próprio motorista contratado some com a carga.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A Importância Jurídica",
          text: [
            "Escrever 'Roubo' quando foi um 'Furto Simples' pode caracterizar fraude securitária. Use termos neutros como 'Suspeita' ou 'Ocorrência' nos relatórios da Torre até que o Boletim de Ocorrência (BO) policial tipifique o crime.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-cia",
      title: "Capítulo 3: A CIA e a Intervenção de Crise",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Torre de Controle faz a prevenção primária. Mas quando a prevenção falha — um botão de pânico é apertado, ou o sinal de satélite é derrubado na Dutra — a ocorrência é escalonada em segundos para a Central de Inteligência Atlas (CIA).",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Cronologia de um Escalonamento",
          items: [
            { label: "Minuto 0", text: "Alerta Nível 1: Caminhão de eletrônicos perde sinal em área vermelha." },
            { label: "Minuto 2", text: "Torre aciona bloqueio remoto e tenta contato com o motorista e as iscas móveis." },
            { label: "Minuto 5", text: "Sem contato, com desvio confirmado pela isca. Torre aciona a CIA imediatamente." },
            { label: "Minuto 6", text: "A CIA assume: Aciona a Pronta Resposta armada, contata o 190 da região com as coordenadas precisas da isca e informa o comitê de crise do cliente." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Falha de Enquadramento",
      blocks: [
        {
          type: "case",
          title: "A Diferença de 1 Milhão de Reais",
          text: "Um cliente sofreu a perda total de uma carga de defensivos agrícolas. No painel do Atlas Connect, o operador marcou o evento como 'Furto Qualificado' porque o baú estava arrombado, mas não havia sinal do motorista. A apólice do cliente cobria Roubo, mas tinha exclusão para Furto em postos não credenciados. A Seguradora negou o pagamento baseada no apontamento primário. Após investigação da CIA e depoimento do motorista na delegacia, provou-se que o motorista foi rendido com arma de fogo no pátio, configurando Roubo. A seguradora pagou o prêmio, mas a lição ficou: Nomenclatura no calor do momento requer neutralidade.",
          source: "Arquivo de Auditoria Forense AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-fluxo-sinistro",
      title: "Capítulo 4: Do Aviso à Indenização — O Fluxo Completo do Sinistro",
      blocks: [
        {
          type: "text",
          heading: "A Burocracia que Vira Dinheiro",
          paragraphs: [
            [
              "Depois que a poeira baixa — a carga foi recuperada, parcialmente perdida ou totalmente avariada — começa a segunda batalha: transformar um evento caótico em um dossiê técnico que a seguradora não consiga contestar. Essa etapa é conduzida pela Central, não pela CIA.",
            ],
            [
              "Cada dia de atraso na comunicação ou cada documento faltante é munição para a seguradora negar ou reduzir o pagamento. A regra de ouro é simples: sem evidência formal, o ",
              { term: "sinistro" },
              " não existe para fins de indenização — não importa o quão óbvio ele tenha sido para quem viveu o evento.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Linha do Tempo da Regulação de Sinistro",
          items: [
            { label: "Dia 0 (até 24h)", text: "A Central formaliza o Aviso de Sinistro (AVS) por escrito à seguradora e ao corretor, abrindo oficialmente o processo de regulação." },
            { label: "Dia 0 a 2", text: "Montagem do dossiê inicial: a Central reúne rastreamento, boletim de ocorrência preliminar, notas fiscais e CT-e/MDF-e da carga." },
            { label: "Dia 3 a 10", text: "A seguradora nomeia o regulador de sinistro (perito independente), que cruza o dossiê com as cláusulas da apólice e o cumprimento do PGR." },
            { label: "Dia 10 a 20", text: "Vistoria física do veículo e/ou da carga remanescente, quando aplicável, e eventual pedido de complementação documental." },
            { label: "Dia 20 a 30", text: "Emissão do parecer de regulação: aprovação integral, pagamento parcial (respeitando LMI e sublimites) ou recusa fundamentada." },
            { label: "Até Dia 30 (prazo SUSEP)", text: "Com o dossiê completo entregue, a seguradora deve efetuar o pagamento da indenização ao segurado dentro do prazo regulamentar, ou apresentar recusa formal por escrito." },
          ],
        },
        {
          type: "checklist",
          title: "Dossiê Mínimo de Sinistro (o que a Central precisa reunir)",
          items: [
            "Apólice vigente e o PGR assinado correspondente ao cliente/rota.",
            "Boletim de Ocorrência (BO) registrado na delegacia com a tipificação correta.",
            "CT-e e MDF-e da carga sinistrada.",
            "Nota fiscal da mercadoria transportada.",
            "Relatório de rastreamento (trilha de GPS e eventos) extraído do Atlas Connect.",
            "Laudo de vistoria/perícia técnica, quando houver avaria física.",
            "Ficha de habilitação e cadastro do motorista (Atlas Profile).",
            "Relatório de atendimento da CIA, quando o evento tiver sido escalonado.",
            "Ficha de Comunicação de Sinistro (FCS) preenchida e assinada.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Cadeia de Custódia da Evidência",
          text: [
            "Fotos e prints tirados fora do sistema oficial, sem timestamp verificável, têm valor probatório baixo. Sempre registre evidências pelos canais homologados do Atlas Connect — a rastreabilidade do dado é tão importante quanto o dado em si na hora de sustentar o pagamento do LMI junto à seguradora.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Conclusão",
      blocks: [
        {
          type: "checklist",
          title: "Recursos Adicionais",
          items: [
            "Consulte o 'Guia Rápido de Sinistros' na biblioteca digital para ver exemplos de B.O. reais.",
            "Assista ao vídeo 'A CIA em Ação: Interceptação na Dutra'.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "Avance para o simulador de conhecimento (Quiz) para fixar a base teórica antes de conhecermos, no Módulo 4, os produtos de software que executam todas essas regras.",
            ],
          ],
        },
      ],
    },
  ],
  summary: [
    "GR foca em prevenção absoluta. A Apólice foca em compensação financeira.",
    "O PGR é o livro de regras mandatório ditado pela apólice.",
    "Categorizar crimes corretamente (Roubo vs Furto) tem peso jurídico e financeiro.",
    "A Torre de Controle previne e monitora; a CIA atua taticamente na recuperação e contingência grave.",
  ],
  finalChecklist: [
    "Diferencio tecnicamente Apólice e PGR.",
    "Sei a diferença exata entre roubo, furto, avaria e apropriação indébita.",
    "Consigo explicar qual é o gatilho de tempo/gravidade para chamar a CIA.",
  ],
  mindMap: {
    root: "Gerenciamento de Risco",
    branches: [
      { label: "O Contrato", items: ["Apólice", "Seguradora", "Indenização", "Regulação de Sinistro"] },
      { label: "A Execução", items: ["PGR", "Torre de Controle", "Auditoria"] },
      { label: "A Crise", items: ["Roubo", "Furto", "CIA", "Pronta Resposta"] },
    ],
  },
  scenario:
    "Cenário Prático: A transportadora pede que você 'ignore' um desvio de rota para que o caminhão fuja de um congestionamento, mas o PGR proíbe saída da via principal. O que você responde considerando o risco securitário?",
  diagram: {
    title: "Ciclo de Risco",
    chart: "graph TD\n  Apólice --> PGR\n  PGR --> Monitoramento[Torre de Controle]\n  Monitoramento -- Alerta Crítico --> CIA\n  CIA --> Recuperacao[Sucesso: Recuperação / Falha: Sinistro]",
  },
};
