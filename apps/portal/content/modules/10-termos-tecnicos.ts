import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("10-termos-tecnicos")!;

export const module10: ModuleContentFull = {
  ...meta,
  sources: [
    "Glossário Operacional Oficial AtlasGR",
    "Documentações Normativas (ANTT e SEFAZ)",
    "Diretrizes Táticas da Central 24/7",
  ],
  objectives: [
    "Dominar de forma assertiva as siglas críticas que pavimentam a comunicação rodoviária e dos escritórios do setor logístico.",
    "Aprender as diferenças abissais entre alertas vitais (Jammer) e flutuações operacionais (Área de Sombra), para não tomar atitudes catastróficas.",
    "Diferenciar rigorosamente o documento fiscal (NF-e) do documento legal logístico (CT-e).",
    "Assimilar métricas decisivas (KPIs) como SLA, ETA e OTD na avaliação gerencial de sucesso da operação.",
    "Distinguir pares de conceitos perigosos como LMI x Sublimite, fundamentais no crivo da seguradora.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Idioma Cirúrgico da Logística",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "quote",
          text: "A precisão da comunicação na Torre de Controle determina se a polícia cerca o caminhão certo ou se o criminoso escapa rindo por conta de um erro de digitação.",
          author: "Líder de Comando da CIA"
        },
        {
          type: "text",
          heading: "Por Que a Terminologia Importa?",
          paragraphs: [
            [
              "Na cadeira de gestão de risco e monitoramento de uma Torre, o tempo útil de contenção de uma crise dura minutos. Em um cenário de alto estresse, se você clica 'Alerta de Roubo' num momento onde ocorreu apenas uma simples 'Avaria' ou quebra mecânica inofensiva, a máquina de pronta-resposta dispara.",
            ],
            [
              "Esta confusão gera falsos alertas, engaja escoltas policiais baseadas num erro de semântica e afunda a credibilidade da AtlasGR. Este módulo atua como sua principal cartilha anti-desastres comunicacionais, assegurando operações fluídas e assertivas.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-1-hardwares",
      title: "Capítulo 1: Componentes Táticos do Caminhão (Hardwares)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A carreta de um cliente Enterprise AtlasGR não é apenas ferro, é uma bolha tecnológica que respira e transmite dados vitais ininterruptamente.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Anatomia Tecnológica e as Ameaças",
          items: [
            "Rastreador Primário (A Bússola): Módulo embutido fisicamente no painel. Totalmente dependente do cabeamento elétrico do caminhão. Caso os meliantes o removam e cortem a ignição, a tela na torre acende no vermelho instantaneamente (Evento de falha de energia).",
            "Isca Móvel (O Plano B Inivisível): Rastreador independente, alimentado por bateria contida nele, oculto aleatoriamente no meio dos pallets da mercadoria de alto valor. Se o cavalo mecânico for descartado pelos bandidos, a carga continuará ecoando sua posição do esconderijo.",
            "Jammer (Chupa-Cabra): Aparato eletrônico bélico altamente proibido, cujo propósito é lançar bombardeio de radiofrequência contra as antenas de celular/satélite em um raio em torno da carreta, suprimindo o envio do socorro e neutralizando (temporariamente) a resposta remota.",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-documentos",
      title: "Capítulo 2: Burocracia, Legalidade e Documentos Fiscais",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Existem duas vertentes no universo de documentos da estrada: O que o caminhão leva (o produto) e O serviço que o caminhão faz (o frete). Confundi-los gera bloqueio na Receita Estadual (Sefaz) e na agência rodoviária (ANTT).",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Distinção Crítica: A Carga versus o Serviço",
          left: {
            label: "NF-e (Nota Fiscal Eletrônica do Produto)",
            points: ["Emitida estritamente pelo dono original da carga (A Indústria, o Embarcador).", "Espelha o Valor Exposto Ao Risco real. Ex: O caminhão leva R$ 1.500.000 em Notebooks.", "Documento base irrevogável para a Seguradora cobrir o pagamento do roubo."],
          },
          right: {
            label: "CT-e (Conhecimento de Transporte Eletrônico)",
            points: ["Emitido unicamente por quem realiza o movimento (A Transportadora contratada).", "Mapeia o imposto sobre o serviço do frete cobrado. (Ex: O frete da viagem custou R$ 3.000).", "Indispensável e inspecionado em balanças fiscais estaduais (ANTT e Sefaz). A ausência retém o veículo instantaneamente."],
          },
        },
      ],
    },
    {
      id: "capitulo-3-metricas",
      title: "Capítulo 3: Indicadores e Métricas Operacionais (KPIs)",
      blocks: [
        {
          type: "stat",
          items: [
            { value: "SLA", label: "Service Level Agreement (Acordo de Nível de Serviço e Tratativas Operacionais)" },
            { value: "ETA", label: "Estimated Time of Arrival (Previsão Inteligente da Chegada do Caminhão)" }
          ]
        },
        {
          type: "faq",
          items: [
            { q: "Qual a diferença entre SLA e OTD?", a: "O SLA é interno: O tempo que VOCÊ demora na Torre para reagir a um evento anômalo (ex: atuar no bloqueio em 5 min). O OTD (On Time Delivery) é logístico: o percentual de caminhões do cliente que cumpriu a viagem sem furar a agenda na porta da fábrica." },
          ],
        },
      ],
    },
    {
      id: "capitulo-4-falsos-amigos",
      title: "Capítulo 4: Falsos Amigos do Jargão Securitário (Alerta Máximo)",
      blocks: [
        {
          type: "text",
          heading: "Como Não Estragar Milhões em Coberturas de Apólice",
          paragraphs: [
            [
              "A fronteira entre um operador novato e um sênior da AtlasGR se consolida no domínio dos jargões securitários sensíveis.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "O Pânico Sintético: Sombras e Interferências",
          left: {
            label: "Área de Sombra (Falha de Cobertura Telecom)",
            points: ["Evento orgânico de falha na rede de antenas (celulares e dados) por relevo profundo, serras, canaviais ou túneis.", "Tratativa: Aguardar o veículo retomar áreas povoadas. Não exige protocolo da CIA no ato."],
          },
          right: {
            label: "Jammer (Interferência Paramilitar Ativa)",
            points: ["Uso orquestrado de equipamento de rádio ilegal por uma quadrilha abordando o condutor na pista.", "Tratativa: Crise sistêmica grave, demandando bloqueio irreversível do motor imediato e envio tático policial. Confundir Sombra com Jammer é um erro fatal na operação."],
          },
        },
        {
          type: "comparison",
          title: "O Glossário do Risco: Sinistros vs Limites",
          left: {
            label: "Ocorrência Logística vs Sinistro Consolidado",
            points: [
              "Ocorrência é um desvio que o operador cuida todo dia: pneu furado, atraso em doca, abertura de baú indevida.",
              "Sinistro é o evento validado por auditoria e inteligência que consolida um dano real e irreversível coberto pela seguradora (Ex: Roubo com restrição de liberdade, Avaria destrutiva na estrada).",
            ],
          },
          right: {
            label: "LMI Geral vs Sublimite Restrito",
            points: [
              "LMI (Limite Máximo de Indenização): O capital teto global da apólice inteira para sinistros diversos.",
              "Sublimite: Uma subcláusula exigente que só cobre até determinado valor dependendo do tipo da carga (Ex: Cobre tudo até 1 Milhão, mas celulares estão sublimitados a no máximo 100 Mil reais). A quebra disso queima milhões em indenização não paga.",
            ],
          },
        },
      ],
    },
  ],
  summary: [
    "Isca móvel garante uma camada redundante (plano B) perante a remoção bruta do rastreador primário fixo.",
    "Categorizar precipuamente uma Área de Sombra como Ataque Jammer é inflacionar artificialmente o pânico e as ferramentas policias no estado.",
    "A nota fiscal (NF-e) dita o valor da carga; CT-e lida unicamente com a burocracia do frete.",
    "Um evento anômalo só ganha a classificação definitiva de Sinistro após validações da perícia (apólice e corretagem); para a Torre, inicia-se apenas como Ocorrência.",
  ],
  finalChecklist: [
    "Distingo perfeitamente causas orgânicas (Área de Sombra) de intervenções criminais (Jammer).",
    "Não caio na armadilha de trocar os termos referentes ao valor da mercadoria (NF-e) com o documento do transportador (CT-e).",
    "Reconheço que acionamentos indevidos sobre Sinistros criam danos pesados à credibilidade corporativa AtlasGR e da corretora parceira.",
  ],
  mindMap: {
    root: "O Dicionário AtlasGR Avançado",
    branches: [
      { label: "Arsenal Tecnológico", items: ["Rastreadores Primários (Chassi/Energia)", "Isca Tática Embutida", "Interferidor Ilegal (Jammer)", "Cegueira Regional (Sombra)"] },
      { label: "Corpo Burocrático", items: ["NF-e (Produto)", "CT-e (Viagem/Frete)", "Seguros (LMI vs Sublimite)"] },
      { label: "Métricas Centrais", items: ["Torre: SLA (Tempo de Reação)", "Frota: ETA (Previsão)", "Gerencial: OTD"] },
    ],
  },
  scenario:
    "Cenário Prático Avançado: Durante a chuva forte na balsa do porto, a rede de dados GPRS do caminhão que transporta Notebooks (alvo visado) cai e não retorna posição. Levando em conta que o evento está associado à água e ausência de torres próximas da transportadora, que erro crasso o operador amador comete se escrever no relatório 'Perda de Sinal por Jammer Confirmado'?",
  diagram: {
    title: "O Ecossistema Crítico Tático",
    chart: "graph TD\n  Anomalia[Torre: Alarme Físico Disparado] --> Triagem{Investigação Rápida}\n  Triagem -- Sombra (Celular Inoperante Orgânico) --> Aguarda[Rotina Padrão - Monitoramento Contínuo]\n  Triagem -- Jammer (Queda Súbita e Bloqueio de Ondas) --> Crise[Alerta Máximo - Travar Motor & Acionar CIA]\n  Crise --> AvaliacaoPos[Corretora avalia LMI e Sublimite caso Sinistro consolidado]",
  },
};
