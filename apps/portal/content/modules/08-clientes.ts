import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("08-clientes")!;

export const module08: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado (content/modules/meta.ts)",
    "Módulo 2 — Mercado de Logística (Revisão)",
    "Showcases de Casos de Sucesso Comerciais",
  ],
  objectives: [
    "Reconhecer os três grandes perfis de cliente atendidos pela AtlasGR.",
    "Mapear a 'dor' específica de cada perfil.",
    "Traduzir essas dores para os produtos do nosso portfólio (A solução).",
    "Compreender a dinâmica de poder entre Embarcador, Seguradora e Transportadora.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: A Lente do Cliente",
      blocks: [
        {
          type: "text",
          heading: "Falando a Língua Certa",
          paragraphs: [
            [
              "Um erro clássico é vender 'segurança' para quem está preocupado com 'prazo de entrega'. Na AtlasGR, você precisa calibrar o seu discurso dependendo de quem está do outro lado da linha.",
            ],
            [
              "Para um embarcador de bebidas, perder 10 caminhões de refrigerante no roubo é ruim, mas perder 50 caminhões parados em uma doca por ineficiência é muito pior para a margem de lucro. Neste módulo, vamos aprender a ler mentes corporativas.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Dica do Assistente IA",
          text: [
            "Use o assistente virtual para gerar simulações de diálogos. Peça a ele: 'Haja como um Diretor de Transportadora furioso por causa de uma multa da apólice, e eu tentarei acalmá-lo usando o argumento do Atlas GR'.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-transportadora",
      title: "Capítulo 1: A Dor da Transportadora",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A transportadora é o executor do frete. A maior dor dela é ter um caminhão roubado e a Seguradora se recusar a pagar a indenização porque o motorista quebrou a regra do ",
              { term: "pgr" },
              ".",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que a Transportadora quer de nós:",
          items: [
            "Garantia Absoluta: Ela quer que a AtlasGR obrigue o motorista a seguir as regras, para que a apólice pague em caso de sinistro.",
            "Custo Evitado: Se o motorista tentar desviar a rota, ela quer que a Atlas bloqueie o caminhão IMEDIATAMENTE.",
            "Produto Alvo: O Atlas GR (Processo e Torre) e o Atlas Profile (Para não contratar o motorista errado).",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-embarcador",
      title: "Capítulo 2: A Dor do Embarcador",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Embarcador é o dono da carga (Ex: Samsung, Ambev). A transportadora é terceirizada dele. A dor do Embarcador é a cegueira. Quando a carga sai da fábrica na carreta do terceiro, ele não sabe onde ela está.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que o Embarcador quer de nós:",
          items: [
            "Visibilidade Total: Ver todos os transportadores terceirizados na mesma tela.",
            "Eficiência (SLA): Medir qual transportadora entrega no prazo e qual atrasa.",
            "Produto Alvo: Atlas Connect (Para ver o GPS em tempo real) e o Atlas Analytics (Para ver os gráficos de performance no fim do mês).",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-operador",
      title: "Capítulo 3: O Operador Logístico",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "O Operador Logístico (Ex: DHL) faz o meio de campo. Ele aluga o galpão, contrata a transportadora e atende o embarcador. Ele precisa da 'Visão de Deus' sobre toda a cadeia.",
            ],
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: Vendendo o Produto Certo para a Dor Certa",
      blocks: [
        {
          type: "case",
          title: "A Venda de R$ 95 Milhões vs A Venda de 26%",
          text: "Dois cases reais da Atlas: Para um embarcador de combustíveis (alto índice de roubo e desvio), vendemos o Atlas GR pesado. Bloqueio automático de válvulas, CIA atuando fortemente e escoltas. Resultado: R$ 95 Milhões economizados em cargas roubadas. Para um embarcador de sucos (zero roubo), o discurso de segurança de válvula não serviria de nada. O foco foi o tempo. Vendemos o Atlas Connect e o Analytics para criar Cercas Eletrônicas em fazendas de laranja. O cliente diminuiu em 26% o tempo de fila de seus caminhões. É a mesma plataforma, vendida de formas completamente diferentes dependendo de quem escuta.",
          source: "Playbook Comercial AtlasGR",
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Fechamento",
      blocks: [
        {
          type: "checklist",
          title: "Aprofunde-se",
          items: [
            "Assista ao vídeo 'Pitch de Vendas para Transportadoras' na biblioteca.",
            "No próximo módulo, Módulo 09, vamos entender o passo a passo de como o setor Comercial captura esses clientes.",
          ],
        },
      ],
    },
  ],
  summary: [
    "Transportadoras compram AtlasGR para garantir o pagamento do seguro e evitar multas.",
    "Embarcadores compram AtlasGR para enxergar cargas terceirizadas e medir a eficiência da logística.",
    "Operadores Logísticos usam a AtlasGR para gerir toda a cadeia simultaneamente.",
    "O discurso comercial deve ancorar o produto na dor específica (Segurança vs Eficiência).",
  ],
  finalChecklist: [
    "Diferencio a dor de uma transportadora da dor de um embarcador.",
    "Sei qual produto oferecer (GR ou Analytics) baseado na queixa do cliente.",
    "Compreendo o case de sucesso do Combustível vs Suco.",
  ],
  mindMap: {
    root: "Perfis de Cliente",
    branches: [
      { label: "Transportadora", items: ["Dor: Seguro e PGR", "Solução: GR e Profile"] },
      { label: "Embarcador", items: ["Dor: Cegueira e SLA", "Solução: Connect e Analytics"] },
      { label: "O Argumento", items: ["Perdas (Combustível)", "Tempo (Sucos)"] },
    ],
  },
  scenario:
    "Cenário Prático: O cliente é a Nike (Embarcador). Eles terceirizam 100% da frota. Eles reclamam que a transportadora sempre diz que 'está chegando', mas os tênis chegam 2 dias atrasados. Qual é o produto AtlasGR ideal para resolver isso e por quê?",
  diagram: {
    title: "Mapeamento Dores vs Soluções",
    chart: "graph TD\n  Trans[Transportadora] --> DorT[Não perder Seguro]\n  Emb[Embarcador] --> DorE[Quero Eficiência/Visibilidade]\n  DorT --> SolT[Venda: Atlas GR]\n  DorE --> SolE[Venda: Atlas Connect / Analytics]",
  },
};
