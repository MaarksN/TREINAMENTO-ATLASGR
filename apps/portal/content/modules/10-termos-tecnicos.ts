import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("10-termos-tecnicos")!;

export const module10: ModuleContentFull = {
  ...meta,
  sources: [
    "Glossário Oficial AtlasGR",
    "Documentação da ANTT e SEFAZ",
    "Manuais de Operação",
  ],
  objectives: [
    "Dominar a sopa de letrinhas (siglas) usadas nas rodovias e escritórios brasileiros.",
    "Evitar relatórios incorretos que disparam ações letais (Ex: Jammer vs Área de Sombra).",
    "Diferenciar claramente documentos fiscais (NF-e) de documentos logísticos (CT-e).",
    "Compreender métricas vitais como SLA e ETA.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Idioma da Logística",
      blocks: [
        {
          type: "text",
          heading: "Por que as palavras importam?",
          paragraphs: [
            [
              "Na Torre de Controle, você tem 10 minutos para agir. Se você gritar 'Roubo!' ao invés de 'Avaria', você acionará a Polícia Militar com cães farejadores para atender um caminhão que apenas furou o pneu e quebrou a carga.",
            ],
            [
              "Este módulo é o seu dicionário de sobrevivência. Precisão técnica evita histeria, falsos positivos e garante que a CIA saiba exatamente qual ferramenta usar no combate.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Funcionalidade do Portal",
          text: [
            "Não precisa decorar tudo hoje. O portal da AtlasGR possui o sublinhado em termos-chave. Passou o mouse por cima do termo, a explicação aparece.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-hardwares",
      title: "Capítulo 1: Hardware e Equipamentos Táticos",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O caminhão é uma fortaleza móvel cheia de tecnologia embutida.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Tecnologias Físicas",
          items: [
            "Rastreador Primário (Hardware Fixo): Fica embutido no painel do caminhão e acionado pela bateria do veículo. Cortam o fio, ele apaga.",
            "Isca Móvel: Uma pequena caixa (rastreador secundário) escondida dentro de uma caixa de papelão no meio da carga, com bateria própria. Se a quadrilha arrancar o painel do caminhão, a isca dedura a posição do galpão de desmanche.",
            "Jammer (Chupa-Cabra): Equipamento de rádio-frequência usado por bandidos para 'cegar' os rastreadores. Derruba o satélite e o celular do caminhão.",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-documentos",
      title: "Capítulo 2: A Burocracia Governamental",
      blocks: [
        {
          type: "comparison",
          title: "NF-e vs CT-e",
          left: {
            label: "NF-e (Nota Fiscal)",
            points: ["O imposto sobre o PRODUTO.", "Gerado por quem vende (Embarcador).", "Mede o 'Valor da Carga' (Ex: 1 Milhão de Reais). Essencial para a Apólice."],
          },
          right: {
            label: "CT-e (Conhecimento de Transporte)",
            points: ["O imposto sobre o FRETE.", "Gerado por quem transporta (Transportadora).", "Mede o serviço logístico. Se não for emitido, a ANTT apreende a carga na balança fiscal."],
          },
        },
        {
          type: "checklist",
          title: "Principais códigos",
          items: [
            "#CONF — confirmação com motorista ou responsável, sempre com data, hora, meio de contato (telefone ou WhatsApp) e a informação confirmada.",
            "#AUT — autorização do responsável para reset, desengate ou desativação de sensor, com data, hora e prazo.",
            "@Conf — marca que uma confirmação foi registrada; @@@ separa veículos diferentes dentro da mesma grade.",
            "? Pa / ? Local / ? Pa-Local — motivo da parada, local da parada, ou os dois, cobrados do motorista via mensagem.",
            "GPS / Reset-Script / Setas-Sirene — ações remotas enviadas ao veículo (reset de GPS, reset acompanhado de script, ativação de setas e sirene).",
            "**** — mensagem enviada ao veículo por perda de sinal ou de comunicação.",
            "@ Porta / @ Painel / @ Baú / @ Desengate / @ Âncora / @ BP — alarmes por tipo de sensor (porta, painel, baú, desengate, âncora, botão de pânico).",
            "Abast / WC / HP / Ref / Manifesto — motivo de parada informado pelo motorista (abastecimento, banheiro, higiene pessoal, refeição, manifesto).",
            "Pel / Pmec — problema elétrico ou mecânico relatado pelo motorista.",
            "Pe / Re — pernoite / previsão de reinício da viagem.",
            "CR — indica que, ao final da viagem, uma nova rota precisa ser cadastrada no sistema.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Decodificando uma linha do Grid",
          text: [
            "\"@ Porta [Cidade A]=>[Cidade B]\" significa que o veículo, em trânsito entre essas duas cidades, gerou um alarme de porta. \"? Pa Local [Cidade A]=>[Cidade B]\" significa que o operador cobrou do motorista o motivo e o local da parada. Toda manutenção, parada fora do autorizado ou circulação fora do horário permitido deve ser confirmada com o cliente antes de ser liberada.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-metricas",
      title: "Capítulo 3: Indicadores e Métricas (KPIs)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Você será cobrado por performance. Conheça as réguas de medição.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "O que é SLA?", a: "Service Level Agreement (Acordo de Nível de Serviço). É o prazo máximo permitido em contrato. SLA da Torre para tratar alerta crítico: 10 minutos." },
            { q: "O que é ETA?", a: "Estimated Time of Arrival (Estimativa de Chegada). A inteligência do Connect calculando se a viagem vai atrasar ou não." },
            { q: "O que é OTD?", a: "On-Time Delivery. Uma métrica do Embarcador que mede a porcentagem de caminhões que chegaram no prazo." },
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: Sombra vs Jammer",
      blocks: [
        {
          type: "case",
          title: "O Pânico na Serra",
          text: "Caso Clássico: O caminhão entra na Rodovia Regis Bittencourt, num trecho de serra profundo. O sinal some. O operador inexperiente clica no relatório e escreve 'Perda de Sinal por Ação de Jammer'. Dispara o protocolo da CIA e a Polícia fecha a rodovia com helicóptero. O caminhão passa o túnel, o sinal volta. Foi apenas uma 'Área de Sombra' (sem cobertura de celular natural). O uso da palavra errada gera danos incalculáveis de desperdício de recursos policiais.",
          source: "Manual de Falhas - AtlasGR DHO",
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Fechamento",
      blocks: [
        {
          type: "checklist",
          title: "Consolidação",
          items: [
            "Acesse o Glossário Geral da AtlasGR no rodapé da página para mais de 300 termos mapeados.",
            "Vá para o Módulo 11 para ver tudo isso sendo usado sob extrema pressão na operação diária.",
          ],
        },
      ],
    },
  ],
  summary: [
    "Isca móvel e Rastreador principal não são a mesma coisa; um é contingência vital do outro.",
    "Jammer é um ataque criminoso; Sombra é falha de infraestrutura de telecom.",
    "O Valor exposto ao risco que importa para o Seguro está na NF-e.",
    "SLA e ETA são os medidores da sua velocidade e da velocidade do caminhão.",
  ],
  finalChecklist: [
    "Diferencio perfeitamente Sombra de Jammer.",
    "Sei a diferença entre a nota fiscal da TV e o imposto de transporte da TV.",
    "Compreendo o significado de SLA e sua importância.",
  ],
  mindMap: {
    root: "Termos Técnicos",
    branches: [
      { label: "Hardware Físico", items: ["Jammer", "Isca", "Rastreador", "Sombra"] },
      { label: "Papelada", items: ["NF-e (Valor)", "CT-e (Frete)"] },
      { label: "As Métricas", items: ["SLA", "ETA", "OTD"] },
    ],
  },
  scenario:
    "Cenário Prático: A carreta para em um local ermo, e o rastreador principal emite que a bateria foi cortada subitamente (corte de fio), mas há 100% de cobertura de celular na região. Isso é Área de Sombra ou possível ação humana?",
  diagram: {
    title: "Documentação de Risco",
    chart: "graph LR\n  Cliente(Embarcador) --> NFE[NF-e : Valor Alto]\n  NFE --> PGR{PGR Exige Isca?}\n  PGR -- Sim --> Torre(Atlas Connect)\n  PGR -- Não --> VSR(Viagem de Baixo Risco)",
  },
};
