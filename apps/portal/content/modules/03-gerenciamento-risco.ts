import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("03-gerenciamento-risco")!;

export const module03: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado (content/modules/meta.ts)",
    "Apólice de Seguro de Transporte e RCTR-C",
    "Manual de Estruturação Avançada de PGR",
    "Protocolos Táticos - Central de Inteligência Atlas (CIA)",
  ],
  objectives: [
    "Definir tecnicamente a arquitetura do Gerenciamento de Risco, a mecânica da Apólice Securitária e a parametrização do PGR.",
    "Diferenciar com rigor jurídico as tipologias de sinistro: Roubo, Furto Simples, Furto Qualificado, Avaria e Apropriação Indébita.",
    "Descrever o escopo de atuação de Força Tática da CIA em incidentes de crise.",
    "Dissecar a anatomia de um PGR e como ele comanda os algoritmos de automação na Torre de Controle.",
    "Detalhar o workflow operacional de um sinistro, da notificação preliminar à liquidação do sinistro, englobando a forense e o dossiê probatório.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Core Operacional e Tático",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "text",
          heading: "A Guerra Tática Contra as Perdas",
          paragraphs: [
            [
              "A economia nacional sangra bilhões anualmente em decorrência de sinistros de cargas. O Gerenciamento de Risco (GR) transcende a figura de um 'bônus de segurança'; ele é o framework estrutural que estabiliza todo o ecossistema logístico.",
            ],
            [
              "Na ausência de um GR impenetrável, o mercado securitário colapsa. Sem a proteção de apólices, os embarcadores retraem e o fluxo logístico trava. Este módulo desvenda as engrenagens deste ecossistema: o compliance exigido pelas seguradoras, a tradução tática via PGR, e a atuação da nossa ",
              { term: "cia" },
              " como o anel de defesa definitivo.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Paradigma de Aprendizagem",
          text: [
            "A sigla 'PGR' permeará sua jornada profissional. Considere o PGR como a 'Constituição' inviolável de cada comboio, ditada pela entidade que provê a liquidez financeira do risco (a Seguradora).",
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
          title: "Equilíbrio de Forças: Cobertura vs. Prevenção",
          left: {
            label: "Apólice de Seguro",
            points: [
              "O instrumento jurídico de lastro financeiro pactuado entre as partes e a Seguradora.",
              "Regula o LMI (Limite Máximo de Indenização) para perdas totais ou parciais.",
              "Alavanca-se em 'Condicionantes': a liquidação do sinistro está inexoravelmente ligada ao cumprimento do PGR.",
            ],
          },
          right: {
            label: "PGR (Plano de Gerenciamento de Risco)",
            points: [
              "O playbook tático-operacional da operação logística.",
              "Estabelece os vetores obrigatórios (tecnologias embarcadas, rotas homologadas, horários de trânsito) para mitigação preemptiva.",
              "Implementado, monitorado e auditado incansavelmente pela AtlasGR.",
            ],
          },
        },
        {
          type: "text",
          paragraphs: [
            [
              "O mandato da AtlasGR não é assumir o papel financeiro da seguradora, mas atuar como o braço forte e imparcial que assegura o cumprimento do ",
              { term: "pgr" },
              ". Nossa eficiência garante a higidez e o acatamento da apólice no cenário mais crítico.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-2-sinistros",
      title: "Capítulo 2: Tipologia Forense do Sinistro",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Denominamos ",
              { term: "sinistro" },
              " a concretização do risco. A precisão técnica na classificação do evento é imperativa, pois a taxonomia define a elegibilidade para as cláusulas de indenização.",
            ],
          ],
        },
        {
          type: "stat",
          items: [
            { value: "98%", label: "dos sinistros de sucesso possuem evidências documentais inquestionáveis coletadas nos primeiros minutos da crise." }
          ]
        },
        {
          type: "checklist",
          title: "Glossário Avançado de Ocorrências",
          items: [
            "Roubo: Subtração do ativo mediante grave ameaça ou violência (abordagem armada, sequestro-relâmpago).",
            "Furto Simples: Subtração oportunista sem violência física ou rompimento de barreira.",
            "Furto Qualificado: Subtração sem ataque direto à pessoa, mas com quebra de obstáculos físicos (arrombamentos estruturais).",
            "Avaria: Degradação física ou térmica da mercadoria devido a incidentes operacionais.",
            "Apropriação Indébita: Fraude interna onde o condutor responsável se apropria deliberadamente da carga.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "O Peso da Caneta",
          text: [
            "Rotular equivocadamente um 'Furto Simples' como 'Roubo' pode induzir fraude securitária. Adote nomenclaturas estritamente neutras ('Suspeita' ou 'Alerta Tático') nos relatórios preliminares até a confirmação cabal do Boletim de Ocorrência (BO).",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-cia",
      title: "Capítulo 3: A CIA e o Gerenciamento Tático de Crise",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Enquanto a Torre de Controle opera na prevenção primária e mitigação contínua, a Central de Inteligência Atlas (CIA) entra em ação nas rupturas críticas. Se a barreira preventiva for rompida (botão de pânico ou supressão de sinal), a CIA assume o comando.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Doutrina de Escalonamento (Time-to-React)",
          items: [
            { label: "Minuto 0", text: "Alerta Crítico: Perda abrupta de telemetria em vetor vermelho." },
            { label: "Minuto 2", text: "Torre executa protocolos de bloqueio remoto e varredura de contingência (tentativas de comunicação multiprotocolo)." },
            { label: "Minuto 5", text: "Esgotamento das contingências. Confirmação de desvio pela telemetria reserva. Escalonamento imediato para a CIA." },
            { label: "Minuto 6", text: "A CIA toma o controle operacional: Dispatch de Pronta Resposta armada, triangulação com o COPOM/190 e acionamento do comitê executivo de crise do embarcador." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Case de Auditoria: A Acurácia que Vale Milhões",
      blocks: [
        {
          type: "case",
          title: "A Classificação Precipitada e o Risco de Retenção",
          text: "Relatório de Incidente (2022): Uma perda total de defensivos agrícolas foi registrada preliminarmente na Torre como 'Furto Qualificado' por um operador iniciante (baú arrombado sem motorista à vista). A apólice, no entanto, continha uma cláusula restritiva negando cobertura para furtos em pontos não homologados. A Seguradora declinou a indenização baseada na tipificação primária. Foi necessária uma investigação exaustiva da CIA, recuperando testemunhos de que o condutor fora abordado sob mira de arma de fogo e imobilizado à distância, reclassificando o evento para 'Roubo'. A indenização (R$ 1 Milhão) foi paga, mas evidenciou que a sobriedade descritiva nos primeiros minutos é tão crítica quanto a própria contenção do evento.",
          source: "Arquivos de Auditoria Operacional AtlasGR"
        },
      ],
    },
    {
      id: "capitulo-4-fluxo-sinistro",
      title: "Capítulo 4: O Workflow de Regulação Securitária",
      blocks: [
        {
          type: "text",
          heading: "Conversão de Evidências em Liquidez",
          paragraphs: [
            [
              "Pós-evento — após a contenção ou perda consolidada — a Central (não a CIA) inicia uma complexa engrenagem burocrática para materializar as evidências do ocorrido em um dossiê forense inquestionável, garantindo a liquidação por parte da seguradora.",
            ],
            [
              "Lembre-se: no ambiente securitário, sem evidência robusta (timestamp, logs auditáveis), o ",
              { term: "sinistro" },
              " virtualmente inexistiu aos olhos do regulador. Cada delay ou falha documental potencializa a recusa do LMI.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "SLA de Regulação de Sinistro",
          items: [
            { label: "Dia 0 (até 24h)", text: "Formalização do Aviso de Sinistro (AVS) à Seguradora e corretor." },
            { label: "Dia 0 a 2", text: "Consolidação inicial do dossiê: extração de rastros de telemetria, BO preliminar e documentação fiscal do ativo (NF, CT-e, MDF-e)." },
            { label: "Dia 3 a 10", text: "Atuação do Regulador de Sinistro: o perito valida a estrita aderência do evento e das ações tomadas contra as regras do PGR." },
            { label: "Dia 10 a 20", text: "Inspeção física do equipamento e salvados (quando aplicável); requerimento de documentos adicionais." },
            { label: "Dia 20 a 30", text: "Emissão do parecer conclusivo: liquidação total, parcial ou negativa formalmente justificada." },
            { label: "Até Dia 30 (SLA SUSEP)", text: "Completado o dossiê probatório, a Seguradora procede com a indenização regulamentar ou emissão de recusa legal." },
          ],
        },
        {
          type: "checklist",
          title: "O Dossiê Forense Mínimo Viável",
          items: [
            "Apólice vigente e PGR endossado aplicável à operação.",
            "B.O. ratificado em autoridade policial com tipologia exata.",
            "CT-e, MDF-e e NFs espelho do ativo.",
            "Logs imutáveis de telemetria e eventos (Atlas Connect).",
            "Laudos de vistoria em casos de Avaria.",
            "Dossiê de validação do Atlas Profile do condutor.",
            "Relatórios de Tratativa Tática da CIA.",
            "Ficha de Comunicação de Sinistro (FCS) auditada.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Cadeia de Custódia e Compliance",
          text: [
            "Prints de WhatsApp ou mídias não certificadas são nulos em uma auditoria securitária severa. Tudo deve ser transacionado dentro dos canais corporativos e trilhas do Atlas Connect para manter a validade forense.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Recursos e Fechamento do Módulo",
      blocks: [
        {
          type: "checklist",
          title: "Checkpoint Operacional",
          items: [
            "Avalie B.O. reais na nossa biblioteca de sinistros.",
            "Estude as interceptações táticas da CIA em vídeos classificados internos.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "Valide sua compreensão teórica no Quiz antes de avançarmos para o Módulo 04, onde a materialização de todas essas diretrizes é implementada no nosso portfólio de software.",
            ],
          ],
        },
      ],
    },
  ],
  summary: [
    "A essência do GR é a neutralização proativa, amparada pelas coberturas da Apólice.",
    "O PGR consolida as regras de ouro imutáveis.",
    "A categorização jurídica forense de um crime dita a liquidação financeira.",
    "A Torre orquestra a prevenção sistêmica; a CIA comanda o combate direto e contingenciamento.",
  ],
  finalChecklist: [
    "Domino com clareza cristalina os papéis da Apólice e do PGR.",
    "Capacidade total em distinguir roubo, furtos, avaria e fraude interna.",
    "Compreendo o limite de contenção da Torre e o trigger para a CIA.",
  ],
  mindMap: {
    root: "Arquitetura do Gerenciamento de Risco",
    branches: [
      { label: "Mecânica Securitária", items: ["Apólice", "LMI", "Regulação", "Indenização"] },
      { label: "Execução Tática", items: ["PGR", "Torre de Controle", "Auditoria Contínua"] },
      { label: "Gestão de Crise", items: ["Roubo/Furto", "CIA", "Pronta Resposta", "Escalonamento"] },
    ],
  },
  scenario:
    "Cenário Prático: Uma transportadora sob pressão de SLA demanda a liberação tácita para romper o traçado planejado (desvio de rota não homologado). Como o operador da Torre blinda a operação securitariamente perante uma quebra direta do PGR?",
  diagram: {
    title: "Ciclo Vital do Risco",
    chart: "graph TD\n  Apólice --> PGR\n  PGR --> Monitoramento[Torre de Controle]\n  Monitoramento -- Ruptura Crítica --> CIA\n  CIA --> Recuperacao[Recuperação / Dossiê de Sinistro]",
  },
};
