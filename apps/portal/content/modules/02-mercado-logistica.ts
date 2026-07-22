import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("02-mercado-logistica")!;

export const module02: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Dados públicos de transporte de cargas — ANTT e CNT (Pesquisa Rodoviária)",
    "Módulo 3 — Gerenciamento de Risco (conceitos de PGR e apólice já introduzidos)",
    "Módulo 5 — Software Logístico (Atlas Connect e integrações já apresentadas)",
  ],
  objectives: [
    "Descrever os elos da cadeia de suprimentos e onde a Atlas atua nela.",
    "Diferenciar transportadora, embarcador e operador logístico.",
    "Reconhecer os principais tipos de carga e como cada um muda o perfil de risco.",
    "Explicar o que são TMS e ERP e como eles se conectam ao rastreamento.",
    "Situar o Brasil no contexto do transporte rodoviário de cargas usando dados públicos.",
  ],
  sections: [
    {
      id: "cadeia-de-suprimentos",
      title: "A cadeia de suprimentos e seus elos",
      blocks: [
        {
          type: "text",
          heading: "Do fabricante à prateleira",
          paragraphs: [
            [
              "Toda mercadoria percorre uma cadeia de suprimentos até chegar ao destino final: sai de quem produz, passa por quem transporta, às vezes por um centro de distribuição, e termina em quem recebe — uma fábrica, uma loja ou o consumidor final.",
            ],
            [
              "O colaborador da Atlas não precisa decorar teoria de supply chain, mas precisa reconhecer os papéis principais dessa cadeia para entender onde o gerenciamento de risco se encaixa e por que cada cliente pede um tipo diferente de atenção.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Embarcador x Transportadora",
          left: {
            label: "Embarcador",
            points: [
              "É o dono da carga: fabricante, distribuidor ou varejista que precisa transportar seu produto.",
              "Pode contratar a Atlas diretamente para monitorar cargas transportadas por terceiros.",
              "Costuma ter exigências de segurança específicas por tipo de produto (combustível, eletrônico, alimentos).",
            ],
          },
          right: {
            label: "Transportadora",
            points: [
              "É quem executa o transporte: possui ou contrata frota, motoristas e rotas.",
              "Contrata a Atlas para cumprir exigências de apólice e reduzir o próprio prejuízo com sinistros.",
              "Pode atender vários embarcadores ao mesmo tempo, cada um com seu próprio PGR.",
            ],
          },
        },
        {
          type: "callout",
          variant: "info",
          title: "Um mesmo veículo, dois clientes diferentes",
          text: [
            "É comum que o mesmo caminhão apareça no sistema com um PGR da transportadora e, ao mesmo tempo, regras adicionais exigidas pelo embarcador daquela carga específica — por isso o cadastro correto do cliente e do contrato é tão importante.",
          ],
        },
      ],
    },
    {
      id: "tipos-de-carga",
      title: "Tipos de carga e perfil de risco",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Nem toda carga tem o mesmo valor ou o mesmo risco. Uma carga de eletrônicos de alto valor agregado atrai um perfil de crime diferente de uma carga de grãos a granel, e isso muda diretamente o desenho do PGR e a intensidade do monitoramento.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Categorias de carga mais relevantes para o gerenciamento de risco",
          items: [
            "Alto valor agregado — eletrônicos, autopeças, produtos farmacêuticos: maior atratividade para roubo e furto.",
            "Perigosa — combustíveis, químicos: exige regras adicionais de segurança e resposta a emergência (MOPP).",
            "Perecível — alimentos e bebidas refrigerados: risco de perda por atraso, não só por sinistro.",
            "Granel sólido ou líquido — grãos, minério, combustível a granel: menor atratividade de roubo, maior sensibilidade a desvio de rota e perda de tempo.",
            "Carga fracionada — vários destinatários em uma mesma viagem: mais paradas, mais exposição por trajeto mais longo.",
          ],
        },
      ],
    },
    {
      id: "sistemas-de-gestao",
      title: "Sistemas de gestão que conversam com a Atlas",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O cliente da Atlas normalmente já usa outros sistemas para tocar sua operação: um ",
              { term: "tms" },
              " para planejar rotas e fretes, e às vezes um ",
              { term: "erp" },
              " para controlar estoque, faturamento e compras.",
            ],
            [
              "Quando esses sistemas trocam dados com o rastreamento por ",
              { term: "api" },
              ", o cliente ganha uma visão única: o ",
              { term: "eta" },
              " de uma entrega, por exemplo, pode aparecer automaticamente no TMS do embarcador sem que ninguém precise copiar informação manualmente entre sistemas.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "TMS e Atlas Connect são a mesma coisa?", a: "Não. O TMS é do cliente e cuida do planejamento logístico (rotas, fretes, entregas); o Atlas Connect é da Atlas e cuida do gerenciamento de risco (PGR, checklist, monitoramento, alertas)." },
            { q: "Todo cliente da Atlas tem TMS ou ERP?", a: "Não necessariamente. Clientes menores podem operar sem esses sistemas, e nesse caso o Atlas Connect é a principal ferramenta de gestão da operação de risco." },
            { q: "Por que isso importa no dia a dia da Central?", a: "Entender que o cliente pode ter outros sistemas ajuda a explicar por que às vezes um evento tratado no Connect também aparece (ou deveria aparecer) em uma tela do cliente." },
          ],
        },
      ],
    },
    {
      id: "panorama-brasil",
      title: "O transporte de cargas no Brasil em números",
      blocks: [
        {
          type: "stat",
          items: [
            { value: "~65%", label: "das cargas no Brasil são transportadas por rodovia (fonte: CNT)" },
            { value: "1,7M+", label: "veículos de carga registrados no RNTRC (fonte: ANTT)" },
            { value: "24h", label: "operação da Central da Atlas, todos os dias do ano" },
          ],
        },
        {
          type: "text",
          paragraphs: [
            [
              "O predomínio do modal rodoviário é também o motivo pelo qual o risco de roubo de carga é uma preocupação tão relevante no Brasil: rodovias cruzam regiões com diferentes níveis de segurança pública, e cada trecho pode ter um perfil de risco distinto — algo que o PGR de cada cliente leva em conta ao definir rotas e horários permitidos.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Por que isso importa para você",
          text: [
            "Conhecer esse panorama ajuda a entender por que a Atlas existe: quanto mais concentrado o transporte em rodovias, maior a exposição da carga — e maior o valor de um gerenciamento de risco bem feito.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A cadeia de suprimentos liga fabricante, transportadora, embarcador e destino final — a Atlas atua principalmente entre transportadoras e embarcadores.",
    "Embarcador é dono da carga; transportadora executa o transporte — o mesmo veículo pode ter regras de PGR vindas dos dois.",
    "O tipo de carga (alto valor, perigosa, perecível, granel, fracionada) muda diretamente o perfil de risco e o desenho do PGR.",
    "TMS e ERP são sistemas do cliente que podem trocar dados com o Atlas Connect via API — mas não substituem o gerenciamento de risco.",
    "O Brasil transporta a maior parte de sua carga por rodovia, o que reforça a relevância do gerenciamento de risco no modal rodoviário.",
  ],
  finalChecklist: [
    "Sei diferenciar embarcador de transportadora.",
    "Reconheço pelo menos 3 categorias de carga e como elas mudam o risco.",
    "Sei explicar a diferença entre TMS, ERP e Atlas Connect.",
    "Entendo por que o modal rodoviário concentra a atenção do gerenciamento de risco no Brasil.",
  ],
  mindMap: {
    root: "Mercado de Logística",
    branches: [
      { label: "Cadeia de suprimentos", items: ["Embarcador", "Transportadora", "Operador logístico", "Destino final"] },
      { label: "Tipos de carga", items: ["Alto valor", "Perigosa", "Perecível", "Granel", "Fracionada"] },
      { label: "Sistemas do cliente", items: ["TMS", "ERP", "API", "ETA"] },
      { label: "Panorama Brasil", items: ["Predomínio rodoviário", "ANTT / RNTRC", "CNT"] },
    ],
  },
};
