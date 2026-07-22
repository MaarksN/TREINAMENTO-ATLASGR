import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("14-casos-reais")!;

export const module14: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Cases de cliente apresentados nos showcases de produto do portal",
    "Atlas Analytics — mapa de risco por rodovia (/produtos/analytics)",
  ],
  objectives: [
    "Relacionar cases reais de cliente aos pilares do portfólio que os resolveram.",
    "Interpretar um cenário ilustrativo de escalonamento de risco, do alerta ao acionamento da CIA.",
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
    "O Atlas Analytics classifica trechos de rodovia por nível de risco com base em dados históricos, e essa classificação orienta o PGR.",
    "O fio condutor de todos os casos é o mesmo: processo seguido com disciplina + dados orientando a decisão.",
  ],
  finalChecklist: [
    "Sei relacionar cada case documentado ao pilar do portfólio que o resolveu.",
    "Consigo descrever o escalonamento de um alerta de perda de sinal, do operador à CIA.",
    "Entendo por que o Atlas Analytics classifica rodovias por nível de risco.",
  ],
  mindMap: {
    root: "Casos Reais",
    branches: [
      { label: "Cases documentados", items: ["R$ 95M — combustível", "-26% tempo — suco", "99,8% aderência — varejo"] },
      { label: "Cenário ilustrativo", items: ["Perda de sinal", "Escalonamento CIA I → CIA II", "Relatório em 48h"] },
      { label: "Risco por região", items: ["Histórico de eventos", "Classificação por nível", "PGR ajustado por trecho"] },
    ],
  },
};
