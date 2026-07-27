import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("14-casos-reais")!;

export const module14: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Cases de cliente apresentados nos showcases de produto do portal",
    "Atlas Analytics — mapa de risco por rodovia (/produtos/analytics)",
    "Treinamento Tratativa de Alertas — Desvio de Rota (bloqueio automático por integração)",
  ],
  objectives: [
    "Relacionar cases reais de cliente aos pilares do portfólio que os resolveram.",
    "Interpretar um cenário ilustrativo de escalonamento de risco, do alerta ao acionamento da CIA.",
    "Interpretar um segundo cenário ilustrativo, de desvio de rota com bloqueio automático pela integração.",
    "Reconhecer por que trechos de rodovia são classificados por nível de risco no Atlas Analytics.",
  ],
  sections: [
    {
      id: "resultados-documentados",
      title: "Resultados documentados com cliente",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Os números a seguir já apareceram em módulos anteriores — aqui eles são revisitados como casos completos, mostrando a dor original do cliente e o pilar do portfólio que resolveu.",
            ],
          ],
        },
        {
          type: "case",
          title: "Embarcador de combustível — R$ 95M economizados",
          text:
            "Cliente com histórico recorrente de roubo de carga de alto valor adotou o gerenciamento de risco completo da Atlas (Profile + GR + Connect). O resultado documentado foi R$ 95 milhões economizados em perdas evitadas.",
          source: "Case de cliente apresentado no showcase de produto Atlas Profile",
        },
        {
          type: "case",
          title: "Embarcador de suco — -26% de tempo em fazendas",
          text:
            "Cliente identificou, via Atlas Analytics, que o tempo de permanência de veículos em fazendas era um custo operacional maior do que o risco de roubo em si. Ajustes no processo, orientados pelos indicadores, reduziram esse tempo em 26%.",
          source: "Case de cliente apresentado no showcase de produto Atlas Connect / GR",
        },
        {
          type: "case",
          title: "Operação Varejo — 99,8% de aderência à apólice",
          text:
            "Cliente do setor de varejo alcançou 99,8% de aderência às exigências da apólice contratada, reduzindo o risco de a seguradora recusar cobertura em caso de sinistro.",
          source: "Case de cliente apresentado no showcase de produto Atlas Profile",
        },
      ],
    },
    {
      id: "cenario-ilustrativo",
      title: "Cenário ilustrativo: da perda de sinal ao acionamento da CIA",
      blocks: [
        {
          type: "callout",
          variant: "info",
          title: "Sobre este cenário",
          text: [
            "O cenário abaixo é ilustrativo — uma reconstrução didática do tipo de situação que a Central trata, sem se referir a um cliente ou evento específico. Serve para conectar, em sequência, os conceitos já vistos nos módulos anteriores.",
          ],
        },
        {
          type: "timeline",
          title: "\"Operação Pôr do Sol\" — cenário de treinamento",
          items: [
            { label: "18h42", text: "Veículo com carga de alto valor perde sinal do rastreador em um trecho classificado como de risco elevado pelo PGR do cliente." },
            { label: "18h44", text: "Operador tenta contato com o motorista pelo canal padrão; sem resposta em 2 minutos." },
            { label: "18h45", text: "Alerta é escalado para a CIA I, que reforça a tentativa de contato e revisa o histórico recente do veículo." },
            { label: "18h50", text: "Sem retorno de sinal ou contato, a CIA II assume o caso, aciona a pronta resposta e avalia acionamento policial, conforme o PGR do cliente." },
            { label: "Após confirmação", text: "Se confirmado o sinistro, a CIA II monta o relatório completo em até 48 horas, incluindo linha do tempo, ações tomadas e recomendações." },
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Por que o cenário se chama 'Operação Pôr do Sol'?", a: "É apenas um nome ilustrativo de treinamento — a Central usa nomes de operação para organizar simulações e cenários de estudo, sem relação com clientes reais." },
            { q: "O que este cenário ensina sobre gestão por exceção?", a: "Mostra como um evento (perda de sinal) escala em minutos, de operador para CIA I e depois CIA II, sempre seguindo o que está definido no PGR — nunca por decisão informal de quem está de plantão." },
          ],
        },
      ],
    },
    {
      id: "cenario-desvio-de-rota",
      title: "Segundo cenário ilustrativo: desvio de rota com bloqueio automático",
      blocks: [
        {
          type: "callout",
          variant: "info",
          title: "Sobre este cenário",
          text: [
            "Assim como 'Operação Pôr do Sol', o cenário abaixo é ilustrativo — não se refere a um cliente, veículo ou transportadora específicos. Ele mostra um tipo de situação mais silenciosa que a perda de sinal: um desvio de rota que já chega para o operador parcialmente resolvido pelo próprio sistema.",
          ],
        },
        {
          type: "timeline",
          title: "\"Operação Bússola\" — cenário de treinamento",
          items: [
            { label: "09h10", text: "O veículo, com SM ativa, cruza a linha vermelha da rota cadastrada — o evento de Desvio de Rota (nível 5) sobe na Torre de Controle." },
            { label: "09h11", text: "O operador confere o histórico de comando: a transportadora desse cliente tem regra de bloqueio automático para desvio, e o veículo já foi bloqueado pela própria integração, antes de qualquer ação humana." },
            { label: "09h12", text: "O evento chega nomeado 'DESVIO DE ROTA SOMENTE LIB COM AUTORIZAÇÃO' — o operador sabe, só pelo nome, que não pode liberar o veículo sem o aval formal da transportadora." },
            { label: "09h14", text: "Contato com o motorista: ele confirma que pegou um desvio por conta de uma via interditada, sem intenção de fugir da rota planejada." },
            { label: "09h16", text: "O operador registra o caso e contata a transportadora, que dá o 'ciente' formal e autoriza o desbloqueio assim que o veículo retornar à rota cadastrada." },
            { label: "09h25", text: "Veículo de volta à linha da rota. Evento baixado. Se ele sair da rota de novo mais adiante, o mesmo evento não reaparece sozinho — precisa subir como um novo caso." },
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Por que o veículo já estava bloqueado quando o operador viu o evento?", a: "Algumas transportadoras configuram bloqueio automático por regra de desvio de rota diretamente na integração — o sistema age antes da Central, e o papel do operador passa a ser confirmar o que já aconteceu, não decidir se bloqueia." },
            { q: "O motorista ter uma boa razão para o desvio muda o procedimento?", a: "Não dispensa a autorização formal da transportadora. A explicação do motorista ajuda a entender o caso, mas quem decide o desbloqueio é sempre o cliente, não o relato do condutor." },
          ],
        },
      ],
    },
    {
      id: "risco-por-regiao",
      title: "Por que algumas rodovias concentram mais risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Atlas Analytics classifica trechos de rodovia por nível de risco, com base no histórico de eventos registrados naquela região — não em uma opinião, mas em dados acumulados de ocorrências. Essa classificação alimenta diretamente o desenho do PGR: em um trecho de risco elevado, o PGR pode exigir escolta, horário restrito de circulação ou pontos de parada mais controlados.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "O que este módulo reforça",
          text: [
            "Cada caso documentado — e cada cenário de treinamento — existe para reforçar a mesma ideia: o gerenciamento de risco funciona quando o processo (PGR, checklist, CIA) é seguido com disciplina, e os dados (Analytics) orientam onde reforçar esse processo.",
          ],
        },
      ],
    },
  ],
  summary: [
    "Os três cases documentados (R$ 95M, -26% em tempo, 99,8% de aderência) mostram resultados reais ligados a diferentes pilares do portfólio.",
    "O cenário 'Operação Pôr do Sol' é ilustrativo e mostra o escalonamento de um alerta de perda de sinal, do operador à CIA II.",
    "O cenário 'Operação Bússola' é ilustrativo e mostra um desvio de rota já bloqueado automaticamente pela integração, com o desbloqueio dependendo da autorização formal da transportadora.",
    "O Atlas Analytics classifica trechos de rodovia por nível de risco com base em dados históricos, e essa classificação orienta o PGR.",
    "O fio condutor de todos os casos é o mesmo: processo seguido com disciplina + dados orientando a decisão.",
  ],
  finalChecklist: [
    "Sei relacionar cada case documentado ao pilar do portfólio que o resolveu.",
    "Consigo descrever o escalonamento de um alerta de perda de sinal, do operador à CIA.",
    "Consigo explicar por que um veículo pode chegar já bloqueado antes de o operador tratar o desvio de rota.",
    "Entendo por que o Atlas Analytics classifica rodovias por nível de risco.",
  ],
  mindMap: {
    root: "Casos Reais",
    branches: [
      { label: "Cases documentados", items: ["R$ 95M — combustível", "-26% tempo — suco", "99,8% aderência — varejo"] },
      { label: "Cenário: Pôr do Sol", items: ["Perda de sinal", "Escalonamento CIA I → CIA II", "Relatório em 48h"] },
      { label: "Cenário: Bússola", items: ["Desvio de rota", "Bloqueio automático da integração", "Autorização da transportadora"] },
      { label: "Risco por região", items: ["Histórico de eventos", "Classificação por nível", "PGR ajustado por trecho"] },
    ],
  },
  scenario:
    "18h42, cenário de treinamento 'Operação Pôr do Sol': um veículo com carga de alto valor perde sinal em um trecho classificado como risco elevado. Nenhum cliente real está envolvido — mas o relógio do SLA já está correndo. Você consegue reconstituir os passos até a CIA II sem consultar o módulo?",
  diagram: {
    title: "Do alerta ao relatório de sinistro",
    chart: "graph LR\n  A[Perda de sinal] --> B[CIA I]\n  B --> C[CIA II]\n  C --> D[Pronta Resposta]\n  D --> E[Relatorio em 48h]",
  },
};
