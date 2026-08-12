import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("14-casos-reais")!;

export const module14: ModuleContentFull = {
  ...meta,
  sources: [
    "Arquivo Confidencial: Auditorias Forenses de Sinistros (2020-2025)",
    "Repositório de Cases Comerciais de Sucesso",
  ],
  objectives: [
    "Sintetizar o conhecimento de todos os módulos na análise de crises e sucessos reais.",
    "Mapear a causa-raiz (Erro Sistêmico vs Erro Humano) em eventos de grande prejuízo.",
    "Consolidar a argumentação do 'Preço do Fracasso' para justificar a rigidez do PGR.",
    "Validar a prontidão tática antes do módulo final de certificação.",
    "Identificar os fatores técnicos e humanos que garantem uma recuperação de carga bem-sucedida em tempo recorde.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Laboratório da Realidade Operacional",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Análise investigativa forense de ocorrências logísticas complexas de sinistros solucionados."
        },
        {
          type: "text",
          heading: "Onde a Teoria Encontra o Asfalto",
          paragraphs: [
            [
              "Ao longo de sua imersão, você absorveu fundamentos processuais, a teoria de inteligência artificial de ponta, bem como as apólices rigorosas das Seguradoras. Contudo, teorias perdem o significado se descoladas das feridas de um campo de batalha logístico. Chegou a hora de conduzir as autópsias operacionais reais.",
            ],
            [
              "Mergulharemos em eventos de alto estresse documentados e que figuram nos arquivos da companhia. Identificaremos minuciosamente as intervenções perfeitas que recuperaram bens inestimáveis, mas observaremos — sem julgamentos pessoais e com visão analítica focada — os equívocos catastróficos provenientes de infrações protocolares humanas. Nossas matrizes procedimentais (PGR) existem única e exclusivamente para frear o caos e anular a improvisação.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Sucesso contínuo em logística exige menos genialidade improvisada e muito mais resiliência perante protocolos estruturados.",
          author: "Gerência Executiva de C.I.A."
        },
        {
          type: "callout",
          variant: "warning",
          title: "Perspectiva de Investigador",
          text: [
            "Não estamos aqui para depreciar os operadores do passado. O esgotamento emocional e táticas engenhosas de manipulação afetam os julgamentos cerebrais severamente. Seu foco deve estar isolado na variável central de cada caso: descubra a fração de segundo em que o protocolo foi corrompido, abalando a rede de segurança corporativa.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-sucesso",
      title: "Capítulo 1: Triunfo Operacional — O Case Eletrônicos (R$ 1.5M)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Esta ocorrência, estudada internacionalmente, sintetiza perfeitamente a sinergia imbatível entre os sistemas de IA de retaguarda, o tempo de resposta (SLA) agressivo do operador de base, e a eficácia letal da intervenção policial orquestrada pela C.I.A.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Escalada de Eventos: Carga Viva",
          items: [
            { label: "03:15 (O Estopim)", text: "O sistema Connect indica, via satélite, a interrupção bruta de telemetria no Rastreador Primário ao longo do eixo da Rodovia Fernão Dias. Em incríveis 60 segundos, o operador valida e isola o evento." },
            { label: "03:17 (Contenção Lógica)", text: "O envio de Comandos Macro defensivos resulta negativo. O telefone celular de apoio está hermeticamente desligado. Em respeito ao SLA restrito e eliminando qualquer tentativa frustrante de contato passivo, o operador procede com o escalonamento à C.I.A." },
            { label: "03:22 (A Geoinformação)", text: "Especialistas da Inteligência ativam a transmissão oculta da 'Isca Móvel' que os criminosos não detectaram. O ping satelital evidencia movimentação hostil, fixando a coordenada num raio de 5 quilômetros rumo a um galpão clandestino." },
            { label: "03:30 (Desfecho Letal)", text: "Forças Táticas Militares convergem na latitude e longitude apontadas milimetricamente pelos monitores da AtlasGR. Interceptação completa, neutralização da quadrilha, resgate íntegro e sem danos do condutor, e salvaguarda absoluta dos 100% de ativos tecnológicos." },
          ],
        },
        {
          type: "stat",
          items: [
            { value: "R$ 1.5M", label: "Carga 100% recuperada com zero avaria comercial." },
            { value: "15 min", label: "Tempo transcorrido da perda do rastreador principal à recuperação da carga pela PM." }
          ]
        },
      ],
    },
    {
      id: "capitulo-2-falha",
      title: "Capítulo 2: Ruína Operacional — A Precarização do Protocolo (R$ 800k)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A infraestrutura tecnológica atuou exatamente como modelada, porém uma fratura emocional na execução derrubou o pilar. O caso infame de uma rotação complexa portando Defensivos Agrícolas (R$ 800 mil) converteu-se em pauta nacional de reestruturação de PGR e o nosso mais triste caso de 'Empatia Operacional'.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "A Crônica Anunciada de Prejuízos",
          items: [
            { label: "14:00 (Risco Iminente)", text: "Acionamento contundente no Connect: Anomalia caracterizando 'Parada Indevida de Alto Risco'." },
            { label: "14:15 (A Quebra do SLA)", text: "Atribuição extremamente demorada: O responsável ignora as normativas primárias e encosta o alerta num ciclo latente, excedendo 15 minutos preciosos de inação (estrangulamento temporal completo)." },
            { label: "14:18 (O Erro Definitivo)", text: "Inicia-se a tratativa por celular: 'Parei no acostamento para esticar as amarras e ajeitar a lona no frio'. A voz audível parecia mansa. Pautando-se nessa calma dissimulada, o operador — incorrendo no pecado capital da preguiça sistêmica — ABDIcou da requisição formal de Contra-Senha, registrando baixa definitiva no evento." },
            { label: "17:00 (Destruição em Curso)", text: "Os gestores embarcadores declaram extravio crônico via contato emergencial com os diretores AtlasGR. A verdade emerge: a pretensa chamada serena contava com o cano de uma pistola na nuca do transportador refém." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Veredito Forense Desastroso",
          text: [
            "A apuração sentenciou as ações humanas. A negligência flagrante com a regra base (Contra-senha ausente) suprimiu inteiramente a obrigação da Seguradora. Além de amargar uma gigantesca perda por falha puramente interna, restaram responsabilidades civis, abalo gigantesco do prestígio da Torre e danos colaterais profundos à vida do motorista sequestrado.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-casos-macro",
      title: "Capítulo 3: Consolidação dos Argumentos Comerciais de Prevenção",
      blocks: [
        {
          type: "comparison",
          title: "Resultados que Vendem AtlasGR: Mitigação Exponencial",
          left: {
            label: "Operação Distribuição Combustíveis",
            points: [
              "Passivo Constante: Média amarga de 40 investidas de furto/roubos totais no ciclo anterior.",
              "Ação Tecnológica Defensiva: Instalação sistemática do portal Atlas Profile e execução de travas agressivas na engrenagem remota (motor cortado sob suspeita).",
              "Benefício Materializado: Exatos ZERO desvios contábeis registrados, chancelando um colossal superávit anual na faixa de R$ 95 Milhões ao CEO parceiro.",
            ],
          },
          right: {
            label: "Operação Bebidas (Gigante do Setor de Sucos)",
            points: [
              "Ponto de atrito: Pouquíssimos índices de criminalidade atípica, porém um gargalo dramático de frotas acampadas à margem de carregamento logístico (OPEX derretido em fila de ociosidade).",
              "Ação Tecnológica Preventiva: Criação de polígonos inteligentes de geofencing alimentando os bancos de dados complexos do Atlas Analytics.",
              "Benefício Materializado: Eliminação formidável de 26% de improdutividade contínua nas operações de carga/descarga, revitalizando abruptamente a rentabilidade do frete."
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-4-resgate-farma",
      title: "Capítulo 4: Recuperação Instantânea (Carga Farma)",
      blocks: [
        {
          type: "case",
          title: "Eletrônicos e Medicamentos em 38 Minutos",
          text: "Um semirreboque transportando placas de telecomunicações de altíssimo agregado (R$ 2.3 Milhões) distanciou-se do perímetro virtual mapeado no eixo da BR-381. Em resposta, o algoritmo Atlas Connect fulminou a plataforma do Operador Padrão com o selo emergencial de 'Evidente Abandono de Trajeto Permitido'. Recusando a falha ingênua exposta no Capítulo 2 (ligação vazia e sem apelo visual), o operador prontamente conectou-se ao sistema interligado de Vídeo-Monitoramento e DMS ao vivo da cabine.\n\nA matriz constatou a presença obscura de dois suspeitos. Eximindo-se da fútil etapa de Contra-senha (a imagem era incriminatória por si só), o protocolo C.I.A e PM local operaram a redução mecânica progressiva dos eixos do caminhão remotamente via satélite — garantindo que a frenagem não desaguasse num acidente e blindando o sequestrado. Resgate pleno, integridade resguardada antes que as rodas ultrapassassem 20 km de distância do evento matriz.",
          source: "Auditorias Forenses - Incidentes Isolados (Volume V)",
        },
        {
          type: "stat",
          items: [
            { value: "38 min", label: "Contagem regressiva total até fechamento de contenção" },
            { value: "R$ 2.3M", label: "Capital retido sem disparo das alavancas da Seguradora" }
          ]
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Resumo Conclusivo",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Todos os eventos narrados gravitam sobre um fato: a inflexibilidade com o Protocolo assegura vitórias corporativas sólidas e defende capitais bilionários; as rachaduras na vigilância (compaixão impensada e desdém burocrático) incitam o desastre.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Encerramento e Trânsito",
          items: [
            "Cristalize na memória os erros do fracasso abordado e assuma o compromisso de repulsa total à prática criminosa da 'Enforcada' sistêmica.",
            "Direcione-se para a consagração acadêmica na AtlasGR: o rigoroso e conclusivo bloco focado nos simulados em Preparação Final.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A aplicação milimétrica dos SLAs (reação de poucos minutos) ditou inteiramente a salvação do patrimônio tecnológico tracionado e valeu-se soberanamente do acionamento de inteligência tática suplementar (Isca Móvel).",
    "Viés de empatia falho gerou ruína logística avassaladora de 800 mil por subversão no recolhimento da Contra-Senha legal.",
    "Decisões de resgate que ignoram e suplantam o Motor de Regras e evidências em vídeo são ações indiscutivelmente inaceitáveis.",
    "Redução crônica em acidentes passivos economizou margens superiores de noventa milhões anuais em apólices comerciais com foco macro (Combustível).",
  ],
  finalChecklist: [
    "Categorizo exatamente por que a quebra deliberada de Contra-Senha causou o repúdio securitário da carga.",
    "Desenvolvi fluência e familiaridade com a aplicabilidade das Câmeras (DMS) e Rastreadores Ocultos nas tratativas táticas diárias.",
    "Assimilei a retórica exata aplicável nos robustos portfólios comerciais (Economia indireta de Ociosidade).",
  ],
  mindMap: {
    root: "Evolução Crítica: Lab Forense",
    branches: [
      { label: "Pilares do Êxito", items: ["Adoção Feroz do SLA", "Interseção com C.I.A", "Geofence e Vídeo DMS"] },
      { label: "Bases da Ruína", items: ["Estrangulamento do Alarme", "Anulação Auditiva", "Ignorância Sistêmica"] },
      { label: "Alavancas da Alta Direção", items: ["Otimização de Horários Logísticos", "Redução Securitária Drástica"] },
    ],
  },
  scenario:
    "Dinâmica Crítica: Você contacta uma carreta recém estagnada em território sensível. A resposta sonora que emite via fonia pronuncia de imediato a Contra-Senha irretocável para o dia, no entanto um estampido abafado cruza em decibéis o áudio. O protocolo indica encerramento diante da validade vocal da senha. Como atuar sobrepondo regras vis-à-vis o instinto de preservação logístico?",
  diagram: {
    title: "O Pêndulo Forense: Ruína ou Glória",
    chart: "graph TD\n  A[Condição Inadequada Exposta na Base] --> B{Operador Acata ao PGR Estrito?}\n  B -- Postura Técnica: Validação Pura --> C[Triunfo Estrutural / Furo Criminal Bloqueado]\n  B -- Displicência: Aceitação Vaga e Submissão --> D[Fratura Ampla, Risco Operacional Aberto, e Extravio Completo das Garantias]",
  },
};
