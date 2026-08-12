import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("08-clientes")!;

export const module08: ModuleContentFull = {
  ...meta,
  sources: [
    "Mapeamento Estratégico Corporativo 2026",
    "Showcases de Casos de Sucesso Comerciais de Alta Complexidade",
  ],
  objectives: [
    "Reconhecer profundamente os três macro-perfis de cliente (Transportador, Embarcador, Operador Logístico).",
    "Mapear a 'dor' sistêmica e as métricas vitais de cada perfil de cliente.",
    "Traduzir as funcionalidades brutas dos nossos softwares na solução exata dessas dores corporativas.",
    "Compreender a dinâmica de poder entre Embarcador (Dono da carga), Seguradora e Transportadora.",
    "Dominar a priorização tática de atendimento (Enterprise vs Padrão) baseada em SLA e SLAs de Criticidade.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: A Lente do Cliente e a Venda Consultiva",
      blocks: [
        {
          type: "image",
          url: "/brand/module_banner.jpg",
          caption: "Imagem descritiva"
        },
        {
          type: "quote",
          text: "A dor do transportador é o caminhão bloqueado e a apólice rasgada. A dor do embarcador é a fábrica parada e a falta de visibilidade na estrada.",
          author: "Head de Operações B2B AtlasGR"
        },
        {
          type: "text",
          heading: "Falando o Dialeto Corporativo Certo",
          paragraphs: [
            [
              "Vender 'segurança de válvula contra roubo' para um gestor logístico que não sofreu um assalto nos últimos dez anos é jogar discurso fora. Ele está preocupado com ociosidade da frota, tempo de espera na doca e multas por atraso na entrega.",
            ],
            [
              "Neste módulo, você aprenderá a realizar a escuta ativa das queixas corporativas e direcionar o discurso para o alvo certo, transformando produtos de tecnologia (como Connect e Analytics) na pílula analgésica perfeita para a dor daquele tomador de decisão.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-1-transportadora",
      title: "Capítulo 1: A Angústia da Transportadora",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A transportadora é o peão de guerra da logística, é o executor que bota a frota na estrada. O maior pesadelo financeiro de um dono de transportadora não é perder a carga, é a Seguradora se recusar a pagar a indenização do roubo porque o motorista violou uma minúscula regra do PGR.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "A Demanda Principal: Garantia e Respaldo",
          items: [
            "Exigência Contratual: Ela quer que a AtlasGR aplique o rigor necessário (bloqueios incisivos, sirenes, imobilização) para forçar o motorista a seguir a rota, protegendo a apólice.",
            "Produto Foco: Torre de Gestão de Risco 24/7 (Atlas GR pesado) e o Atlas Profile (Para garantir que o crime não está sendo contratado no próprio pátio).",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-embarcador",
      title: "Capítulo 2: A Cegueira do Embarcador (Dono da Carga)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Embarcador (ex: Ambev, Nestlé, Samsung) terceiriza a frota. Sua maior dor é a perda do controle no momento em que a carga sai do seu armazém. Ele vira refém das desculpas das dezenas de transportadoras terceirizadas: 'O caminhão está quase chegando', 'Deu trânsito'.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "A Demanda Principal: Visibilidade e OTD (On Time Delivery)",
          items: [
            "Controle Total (Torre de Controle Logístico): Acompanhar em tempo real todos os terceiros na mesma tela.",
            "Auditoria de SLA: Saber estatisticamente qual transportadora cumpre prazo e qual gera gargalos na fábrica.",
            "Produto Foco: Atlas Connect (visibilidade de malha) e Atlas Analytics (B.I. gerencial e cercas virtuais nas docas).",
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: O Contexto Define o Produto",
      blocks: [
        {
          type: "case",
          title: "A Venda Milionária de Combustível vs A de Sucos",
          text: "Caso real de precificação consultiva: Para uma distribuidora de Combustíveis (carga hiper-visada), o discurso foca na sobrevivência: vendemos inteligência anti-desvio, bloqueadores de válvulas remotos e a CIA agindo na recuperação. Resultado imediato: redução violenta de sinistros (Milhões salvos). Já para uma gigante do ramo de Sucos Tropicais, onde o índice de roubo beira a zero, usamos a mesma plataforma para desenhar Cercas Eletrônicas que medem o tempo de permanência de caminhões na fila da colheita de laranja. Reduzimos o tempo de ociosidade em 26%. Plataforma igual, valor gerado completamente distinto.",
          source: "Diretoria de Estratégia B2B - AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-segmentacao-sla",
      title: "Capítulo 4: Segmentação por Criticidade na Operação (O Pós-Venda)",
      blocks: [
        {
          type: "text",
          heading: "Hierarquia de Atendimento e SLAs Operacionais",
          paragraphs: [
            [
              "Dentro da Torre de Controle, o tratamento não é igualitário, é priorizado pelo contrato. Um cliente Enterprise com carga super-sensível e alto risco (celulares) tem um SLA de tratativa de anomalia absurdamente agressivo. Eles não entram na fila de atendimento normal.",
            ],
            [
              "Compreender a diferença do sublimite do cliente e da criticidade dele dita se você trata a ocorrência como uma rotina administrativa ou aciona a CIA imediatamente.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Priorização de Atendimento na Torre",
          left: {
            label: "Conta Enterprise / Alta Criticidade",
            points: [
              "SLA de atuação proativa hiper-reduzido (Geralmente inferior a 5 minutos na quebra de rota).",
              "Sublimite e LMI elevadíssimos (Milhões de reais no baú do veículo).",
              "Dedicado a analistas sêniores; acionamentos diretos de linha vermelha com gerências.",
            ],
          },
          right: {
            label: "Conta Padrão (Standard)",
            points: [
              "SLA padronizado de acordo com contrato base.",
              "Tratativas conduzidas via fila sistêmica normal, focadas em eficiência em escala.",
              "Cargas de menor valor atrativo com exigências mais leves de PGR.",
            ],
          },
        },
        {
          type: "stat",
          items: [
            { value: "0", label: "Tolerância para atrasos em acionamentos da faixa Enterprise." },
            { value: "VIP", label: "Atenção necessária em contas Enterprise onde um sinistro paga todo o lucro anual do contrato." }
          ]
        },
      ],
    },
  ],
  summary: [
    "A venda B2B de sucesso mapeia a dor (Segurança vs Gestão de Prazo) para o produto exato.",
    "A AtlasGR é a interface que garante a sobrevivência da transportadora perante a seguradora.",
    "O Atlas Analytics é a principal ferramenta de retenção de embarcadores que buscam visibilidade da eficiência.",
    "O Atendimento Operacional da Torre de Controle é segmentado contratualmente, ditando os níveis agressivos de SLA (Enterprise x Standard).",
  ],
  finalChecklist: [
    "Adapto o discurso do AtlasGR baseado no público (Transportador vs Embarcador).",
    "Consigo apresentar soluções de rentabilidade (Tempo) ao invés de apenas segurança para clientes de baixo risco.",
    "Domino a lógica de SLAs corporativos e sei que falhar com contas críticas gera ruptura contratual imediata.",
  ],
  mindMap: {
    root: "Perfis B2B Corporativos",
    branches: [
      { label: "Transportadora", items: ["Dor: Multas e Recusas de Seguro", "Foco: Atlas GR Restritivo e Profile"] },
      { label: "Embarcador", items: ["Dor: Malha Cega e Atrasos (SLA)", "Foco: Atlas Connect (Gestão) e Analytics"] },
      { label: "Atendimento da Torre", items: ["SLA Enterprise (< 5m)", "SLA Padrão", "Foco no Sublimite e Risco"] },
    ],
  },
  scenario:
    "Cenário Prático: A diretoria logística da Unilever (Embarcador Gigante) quer saber como reduzir os custos de estadias (tempo que o caminhão terceirizado fica esperando pra descarregar) nas suas docas. Você ofereceria a eles as Escoltas Armadas (GR) ou a criação de Cercas Poligonais no Connect integradas aos painéis do Analytics?",
  diagram: {
    title: "Alinhamento Estratégico Comercial",
    chart: "graph TD\n  Cli[Identifica Perfil] --> A{Quem é?}\n  A -- Transp --> Dor1(Foco na Apólice)\n  A -- Embarcador --> Dor2(Foco na Visibilidade/Prazo)\n  Dor1 --> ProdutoGR[Vende: Atlas GR Proativo + Profile]\n  Dor2 --> ProdutoCon[Vende: Atlas Connect Omnicanal + Analytics]",
  },
};
