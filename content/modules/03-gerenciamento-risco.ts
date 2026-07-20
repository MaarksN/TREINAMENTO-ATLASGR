import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("03-gerenciamento-risco")!;

export const module03: ModuleContentFull = {
  ...meta,
  sources: [
    "Manual Site Gerenciamento de Risco (Pósitron Rastreamento, DTPE, jan/2017) — associação de GR e permissões",
    "Cronograma de Treinamentos 2º semestre — tópicos de PGR, apólice RCF-DC e Malícia",
    "Manual de Check list (procedimento de teste de sensores e atuadores)",
    "CARGOS.pdf — funções de Implantação, Perfil Securitário, CIA I e CIA II",
  ],
  objectives: [
    "Explicar o que é um PGR e por que ele existe.",
    "Diferenciar apólice, sinistro, sublimite e RCF-DC.",
    "Descrever o caminho de um alerta, do checklist até o acionamento da CIA.",
    "Associar um veículo a uma Gerenciadora de Risco (GR) e explicar cada permissão.",
    "Reconhecer sinais de coação usando as técnicas do treinamento de Malícia.",
  ],
  sections: [
    {
      id: "conceito-de-risco",
      title: "O que é gerenciamento de risco",
      blocks: [
        {
          type: "text",
          heading: "Do conceito básico...",
          paragraphs: [
            [
              "Gerenciar risco, no contexto logístico, é reduzir a chance — e o impacto — de eventos que ameacem a carga, o veículo ou o motorista durante uma viagem: roubo, furto, acidente, desvio de rota ou perda de contato.",
            ],
            [
              "A ATLASGR existe justamente para isso: ela é a ",
              { term: "gr" },
              " contratada pelo cliente (transportadora ou embarcador) para monitorar a operação em tempo real, seguindo regras definidas previamente.",
            ],
          ],
        },
        {
          type: "text",
          heading: "...ao avançado",
          paragraphs: [
            [
              "Essas regras ficam documentadas no ",
              { term: "pgr" },
              ": rotas permitidas, horários de maior risco, pontos de parada autorizados e o passo a passo que a Central deve seguir diante de cada tipo de alerta — inclusive quando acionar a polícia ou uma empresa de ",
              { term: "pronta-resposta" },
              ".",
            ],
            [
              "É o PGR que transforma \"gerenciamento de risco\" de um conceito abstrato em um procedimento operacional concreto, seguido de forma consistente por qualquer operador, em qualquer turno.",
            ],
          ],
        },
      ],
    },
    {
      id: "apolice-e-seguro",
      title: "Apólice, sinistro e sublimite",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Grande parte da razão de existir do gerenciamento de risco está ligada ao seguro de carga. A ",
              { term: "rcf-dc" },
              " é uma das modalidades mais comuns no mercado de transporte rodoviário, e frequentemente exige contrapartidas operacionais — como rastreamento, checklist e PGR — como condição para a cobertura ser válida.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Apólice x Sinistro x Sublimite",
          left: {
            label: "Apólice",
            points: [
              "Contrato de seguro entre o cliente e a seguradora.",
              "Define o Limite Máximo de Indenização (LMI) geral.",
              "Pode exigir requisitos operacionais para manter a cobertura válida.",
            ],
          },
          right: {
            label: "Sinistro e Sublimite",
            points: [
              "Sinistro: evento coberto que efetivamente ocorreu (roubo, furto, acidente).",
              "Sublimite: teto de indenização para uma cobertura específica dentro do LMI geral.",
              "A Central atua para reduzir a chance de sinistro e, quando ele ocorre, para documentá-lo corretamente.",
            ],
          },
        },
        {
          type: "callout",
          variant: "info",
          title: "Por que isso importa para quem não é da área comercial",
          text: [
            "Mesmo quem trabalha na Central precisa entender apólice e sublimite: o PGR de cada cliente é desenhado em cima das exigências da apólice contratada — por isso o mesmo tipo de alerta pode ter tratativas diferentes de cliente para cliente.",
          ],
        },
      ],
    },
    {
      id: "do-pgr-ao-dia-a-dia",
      title: "Do PGR ao dia a dia da Central",
      blocks: [
        {
          type: "timeline",
          title: "O caminho de uma operação segura",
          items: [
            { label: "1. Implantação", text: "O Analista de Implantação analisa a apólice do cliente novo e cria o PGR, definindo regras, macros e sublimites relevantes." },
            { label: "2. Checklist", text: "Antes e durante a viagem, sensores e atuadores do veículo são testados e validados no Atlas Connect." },
            { label: "3. Monitoramento", text: "Operadores acompanham a viagem em tempo real e tratam alertas conforme o PGR — com ou sem SM ativa." },
            { label: "4. Malícia", text: "Em uma ligação suspeita, o operador usa as técnicas de Malícia para identificar coação sem expor o motorista." },
            { label: "5. CIA", text: "Em qualquer suspeita de sinistro, a CIA é acionada e decide sobre acionamento policial e pronta resposta, conforme o PGR." },
            { label: "6. Relatório", text: "Se confirmado o sinistro, a CIA II monta o relatório completo em até 48 horas após o evento." },
          ],
        },
        {
          type: "case",
          title: "Checklist como primeira linha de defesa",
          text:
            "O Manual de Check List da Central descreve o procedimento padrão: solicitar ao motorista a macro de início de viagem, acionar o botão de pânico por 5 segundos, testar sensores de porta e do baú, e validar cada item (bloqueio, sirene, sensores, teclado) no Atlas Connect antes de aprovar a viagem. Qualquer sensor reprovado é registrado em observação para acompanhamento.",
          source: "Manual de Check list (procedimento interno da Central)",
        },
        {
          type: "checklist",
          title: "Sinais trabalhados no treinamento de Malícia",
          items: [
            "Mudança perceptível no tom de voz do motorista durante a ligação.",
            "Uso da senha de coação combinada previamente.",
            "Respostas evasivas ou fora do padrão a perguntas de rotina.",
            "Silêncio ou hesitação incomum em momentos que normalmente seriam rápidos de responder.",
          ],
        },
      ],
    },
    {
      id: "gr-no-equipamento",
      title: "A GR dentro do equipamento de rastreamento",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Nos portais dos fabricantes de rastreadores (como o portal Gerenciamento de Risco da Pósitron), cada veículo pode ser associado a uma ou mais Gerenciadoras de Risco, cada uma com um conjunto de permissões.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "As 4 permissões de uma GR associada a um veículo",
          items: [
            "GR Principal — responsável pela configuração e gestão do equipamento (só uma GR pode ser a principal por veículo).",
            "Comando Disponível — permite ou não que a GR envie comandos para o veículo.",
            "Ação Embarcada Disponível — permite ou não que a GR embarque regras de segurança, macros, cercas e perfil de temperatura.",
            "Alerta Compartilhado — permite que outras GRs associadas ao mesmo veículo também recebam os alertas gerados pelo equipamento.",
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Uma placa pode ter mais de uma Gerenciadora de Risco associada?", a: "Sim. É possível associar mais de uma GR a um mesmo veículo, mas apenas uma pode ser marcada como GR Principal." },
            { q: "O que acontece se eu não marcar 'Ação Embarcada Disponível'?", a: "A GR não conseguirá embarcar regras de segurança, macros, cercas ou perfil de temperatura naquele veículo." },
            { q: "Qual a diferença entre tratar um alerta 'com SM' e 'sem SM'?", a: "SM identifica uma viagem sob monitoramento ativo no Connect; o PGR do cliente define regras específicas para alertas dentro e fora de uma SM em andamento." },
          ],
        },
      ],
    },
  ],
  summary: [
    "Gerenciar risco é reduzir a chance e o impacto de roubo, furto, acidente ou desvio durante uma viagem.",
    "O PGR traduz o gerenciamento de risco em regras operacionais concretas para a Central seguir.",
    "A apólice (frequentemente RCF-DC) define o LMI geral; o sublimite é o teto para uma cobertura específica.",
    "O caminho típico é: Implantação cria o PGR → checklist valida o veículo → monitoramento acompanha a viagem → Malícia identifica coação → CIA aciona autoridades/pronta resposta → relatório de sinistro em até 48h.",
    "No portal do fabricante do rastreador, cada veículo é associado a uma GR com 4 permissões: GR Principal, Comando Disponível, Ação Embarcada Disponível e Alerta Compartilhado.",
  ],
  finalChecklist: [
    "Sei explicar o que é um PGR e quem o cria.",
    "Sei diferenciar apólice, sinistro e sublimite.",
    "Consigo descrever o procedimento de checklist de sensores e atuadores.",
    "Reconheço pelo menos 3 sinais trabalhados no treinamento de Malícia.",
    "Sei explicar as 4 permissões de uma GR associada a um veículo.",
  ],
  mindMap: {
    root: "Gerenciamento de Risco",
    branches: [
      { label: "Conceito", items: ["Reduzir chance e impacto de sinistro", "PGR traduz risco em regra operacional"] },
      { label: "Seguro", items: ["Apólice / LMI", "RCF-DC", "Sublimite", "Sinistro"] },
      { label: "Fluxo operacional", items: ["Implantação cria PGR", "Checklist", "Monitoramento", "Malícia", "CIA", "Relatório em 48h"] },
      { label: "GR no equipamento", items: ["GR Principal", "Comando Disponível", "Ação Embarcada Disponível", "Alerta Compartilhado"] },
    ],
  },
};
