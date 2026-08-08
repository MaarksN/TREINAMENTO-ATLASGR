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
    "Diferenciar clientes por criticidade e SLA, e entender como isso muda a priorização de atendimento da Central de Monitoramento.",
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
      id: "capitulo-4-segmentacao-sla",
      title: "Capítulo 4: Segmentação por Criticidade e SLA",
      blocks: [
        {
          type: "text",
          heading: "Nem Todo Cliente Toca o Mesmo Alarme",
          paragraphs: [
            [
              "Além do perfil (Transportadora, Embarcador, Operador), a AtlasGR classifica cada contrato por criticidade. Um cliente Enterprise com carga de alto valor (eletrônicos, máquinas industriais, combustível) não pode esperar na mesma fila que um cliente Padrão com carga de baixo risco. A Central de Monitoramento 24/7 opera com filas de prioridade, não com ordem de chegada.",
            ],
            [
              "Isso está formalizado em contrato, no ",
              { term: "sublimite" },
              " e nas cláusulas de tempo de resposta. Ignorar essa hierarquia na hora do atendimento é o tipo de erro operacional que vira sinistro contestado, ou pior, cliente cancelando renovação.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Cliente Enterprise/Crítico vs Cliente Padrão",
          left: {
            label: "Enterprise / Crítico",
            points: [
              "Resposta da Central em minutos, com protocolo de escalonamento imediato para a C.I.A.",
              "Monitoramento proativo: a Central aciona o cliente antes dele perceber o desvio.",
              "Canal dedicado (linha direta, gestor de conta nomeado).",
              "Apólices com LMI elevado e cobertura de RCF-DC ampliada, exigindo checagem redobrada de cada evento.",
            ],
          },
          right: {
            label: "Padrão",
            points: [
              "Resposta dentro da janela contratual padrão, sem escalonamento automático.",
              "Monitoramento reativo: a Central atua quando o alerta dispara ou o cliente aciona.",
              "Canal via central geral de atendimento.",
              "Apólices dentro do sublimite padrão, com checagem seguindo o fluxo normal.",
            ],
          },
        },
        {
          type: "stat",
          items: [
            { value: "< 5 min", label: "Tempo de resposta alvo para cliente Enterprise em ocorrência crítica" },
            { value: "< 30 min", label: "Tempo de resposta alvo para cliente Padrão" },
            { value: "24/7", label: "Cobertura da Central de Monitoramento, independentemente do nível" },
          ],
        },
        {
          type: "checklist",
          title: "Como isso muda o seu atendimento",
          items: [
            "Antes de qualquer contato, verifique o nível de criticidade do cliente no cadastro — o tom e a velocidade da resposta dependem disso.",
            "Para conta Enterprise, nunca deixe uma ocorrência 'na fila' esperando triagem manual: acione o escalonamento.",
            "Não prometa um SLA que não está no contrato do cliente. Prometer minutos para quem tem contrato Padrão gera expectativa que a operação não sustenta.",
            "Sempre que um cliente Padrão crescer em volume ou valor de carga, sinalize ao Comercial para reavaliar o enquadramento de criticidade.",
          ],
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
      { label: "Embarcador", items: ["Dor: Cegueira e SLA", "Solução: Connect e Analytics", "Segmentação: SLA por criticidade (Enterprise x Padrão)"] },
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
