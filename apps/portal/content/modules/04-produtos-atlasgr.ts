import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("04-produtos-atlasgr")!;

export const module04: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado (content/modules/meta.ts)",
    "Showcases de produto do portal",
    "Material Comercial Institucional AtlasGR",
  ],
  objectives: [
    "Listar, descrever e conectar os quatro pilares do portfólio AtlasGR.",
    "Entender a proposta de valor exclusiva do Atlas Profile e a redução de custos ocultos.",
    "Explicar a orquestração tática em tempo real feita pelo Atlas Connect e GR.",
    "Descrever como o Atlas Analytics transforma dados brutos em decisões executivas preditivas.",
    "Diferenciar o portfólio AtlasGR de rastreadores genéricos de mercado e reconhecer os limites de escopo de cada produto.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Ecossistema de Soluções",
      blocks: [
        {
          type: "text",
          heading: "Não Vendemos Software, Vendemos Inteligência",
          paragraphs: [
            [
              "Muitas empresas no mercado oferecem um software de rastreamento e deixam a cargo do cliente o problema de gerenciar as crises. A AtlasGR escolheu um caminho mais complexo, mas infinitamente mais valioso.",
            ],
            [
              "O nosso portfólio é um ecossistema projetado para blindar a operação de ponta a ponta. Atuamos antes da viagem começar, gerenciamos o milissegundo em que ela acontece, atuamos brutalmente caso haja desvios, e estudamos os resultados mensais para melhorar o futuro.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "O Ponto Chave",
          text: [
            "Dominar este módulo é a diferença entre vender 'um site que mostra caminhãozinho no mapa' e vender 'Governança Operacional e Econômica'.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-profile",
      title: "Capítulo 1: Atlas Profile (O Filtro Inicial)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A fraude mais eficiente não precisa de armas. Ela usa um terno falso e um documento clonado para roubar a carga antes mesmo do caminhão sair do pátio.",
            ],
            [
              "O Atlas Profile realiza o 'Background Check' ou ",
              { term: "perfil-securitario" },
              ". Ele integra bases criminais, tribunais, listas restritivas e o banco de dados do Detran. Mais importante: ele usa biometria facial (",
              { term: "faceid" },
              ") para garantir que quem assina o papel é realmente a pessoa do documento, anulando a Falsidade Ideológica.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "O que o Profile Analisa",
          items: [
            "Validade de CNH, situação cadastral e categorias permitidas.",
            "Antecedentes criminais impeditivos e mandados de prisão abertos.",
            "Licenciamento e documentação atrasada do veículo tracionador e carreta.",
            "Divergência Biométrica (Liveness detection).",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-connect-gr",
      title: "Capítulo 2: Atlas Connect & Atlas GR (A Execução)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Com o motorista e caminhão aprovados, a viagem começa. É aqui que entram os nossos 'Gêmeos Operacionais': O ",
              { term: "connect" },
              " (A Tecnologia) e o ",
              { term: "gr" },
              " (O Processo e as Pessoas).",
            ],
          ],
        },
        {
          type: "comparison",
          title: "A Diferença na Prática",
          left: {
            label: "Atlas Connect (A Máquina)",
            points: [
              "Sistema Web onde a mágica acontece.",
              "Agrega sinais de rastreadores, cria cercas virtuais, exibe mapas.",
              "Motor de Regras Inteligente que gera os Alertas Críticos.",
            ],
          },
          right: {
            label: "Atlas GR e CIA (O Humano)",
            points: [
              "Os operadores dentro da Torre que olham a tela do Connect.",
              "A aplicação rígida do PGR exigido pela seguradora.",
              "O acionamento tático policial e a tomada de decisão sob estresse extremo.",
            ],
          },
        },
      ],
    },
    {
      id: "capitulo-3-analytics",
      title: "Capítulo 3: Atlas Analytics (Visão Executiva)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Olhar o passado para prever o futuro. A Torre apaga o incêndio de hoje. O Analytics entende por que os incêndios estão acontecendo toda sexta-feira às 2 da manhã no mesmo quilômetro da Dutra.",
            ],
            [
              "Transformamos milhões de eventos caóticos de GPS e Sensores de Telemetria/Fadiga em painéis executivos coloridos e acionáveis para o CEO e os Diretores dos nossos clientes.",
            ],
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: Os Quatro Pilares Trabalhando Juntos",
      blocks: [
        {
          type: "case",
          title: "Operação Risco Zero (Embarcador de Bebidas)",
          text: "Um grande fabricante perdia sistematicamente cargas não para roubos armados, mas para 'sumiços' de caminhões terceirizados (apropriação indébita). A Atlas implantou os 4 pilares: 1. O Atlas Profile barrou 12% dos motoristas contratados por fraude documental já no 1º mês. 2. O Atlas Connect amarrou as viagens a APIs automáticas, zerando erros de digitação. 3. O GR atuou em 5 tentativas de desvio no trimestre, acionando a CIA que recuperou 100% da carga. 4. O Analytics provou para a diretoria do fabricante que 90% das tentativas de roubo ocorriam com apenas duas transportadoras específicas da base deles, permitindo o descredenciamento cirúrgico dos maus parceiros. Resultado: Economia de R$ 12 milhões em 6 meses.",
          source: "Case Comercial Integrado AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-diferenciacao-e-limites",
      title: "Capítulo 4: Diferenciação de Mercado e Limites de Cada Produto",
      blocks: [
        {
          type: "text",
          heading: "Por que Não Somos 'Só Mais Um Rastreador'",
          paragraphs: [
            [
              "Todo prospect já ouviu o discurso de um concorrente genérico: 'a gente também mostra o caminhão no mapa'. Verdade. E é exatamente por isso que essa comparação é a nossa melhor amiga em uma negociação: rastreador mostra o problema, a AtlasGR resolve o problema.",
            ],
            [
              "Mas cuidado: vender bem o portfólio também significa saber onde ele termina. Empurrar um produto para um caso de uso que ele não cobre gera cliente frustrado no mês 2 e cancelamento no mês 6. Este capítulo existe para você nunca prometer o que a ferramenta certa (Profile, Connect, GR ou Analytics) não entrega.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            {
              q: "Um rastreador comum também tem mapa e cerca virtual. Qual é a diferença real do Atlas Connect?",
              a: "O mapa é o começo, não o fim. Um rastreador genérico avisa que o caminhão saiu da rota; o Atlas Connect interpreta o desvio dentro de um Motor de Regras e decide se aquilo é um alerta crítico que precisa acordar a Torre às 3h da manhã. Rastreador notifica. Connect prioriza e escala.",
            },
            {
              q: "Se o cliente já tem um software de rastreamento, para que ele contrataria o Atlas GR?",
              a: "Porque tela de alerta sem gente treinada olhando é só uma luz piscando. O Atlas GR é a Torre, a CIA e o processo de tratativa de sinistro sob o PGR da apólice. É a diferença entre 'o sistema apitou' e 'o sinistro foi evitado'.",
            },
            {
              q: "O Atlas Profile é só para motoristas terceirizados ou serve para qualquer contratação?",
              a: "O produto foi desenhado para o risco de operação logística (motoristas, ajudantes e prestadores que têm acesso à carga), não é uma ferramenta genérica de RH para todo o quadro de funcionários administrativos.",
            },
            {
              q: "Dá para comprar só o Atlas Analytics sem ter Connect ou GR rodando?",
              a: "Tecnicamente sim, mas comercialmente é raro fazer sentido: o Analytics é tão bom quanto os dados que ele recebe. Sem o histórico de eventos gerado pelo Connect e pelo GR, o cliente compra um painel bonito e vazio.",
            },
          ],
        },
        {
          type: "comparison",
          title: "Rastreador Genérico x Portfólio AtlasGR",
          left: {
            label: "Rastreador de Mercado",
            points: [
              "Mostra a posição do veículo no mapa.",
              "Dispara notificação e o problema vira 'trabalho de casa' do cliente.",
              "Relatório é uma planilha de coordenadas e horários.",
              "Zero responsabilidade sobre o desfecho do sinistro.",
            ],
          },
          right: {
            label: "Portfólio AtlasGR",
            points: [
              "Barra o risco antes da viagem começar (Profile).",
              "Classifica o alerta e aciona gente treinada 24/7 (Connect + GR/CIA).",
              "Relatório é diagnóstico executivo com causa raiz (Analytics).",
              "Responsabilidade compartilhada pelo resultado, do cadastro ao encerramento da ocorrência.",
            ],
          },
        },
        {
          type: "checklist",
          title: "Limites de Escopo: O Que Cada Produto NÃO Faz",
          items: [
            "Atlas Profile não substitui validações oficiais exigidas por norma; ele audita documentos e biometria, mas não emite laudos.",
            "Atlas Connect não decide sozinho se um alerta é um assalto real; a leitura e a decisão tática são do Atlas GR/CIA.",
            "Atlas GR não é seguradora e não paga indenização; ele gerencia o risco e a tratativa dentro do PGR, a apólice e a SUSEP ficam com a seguradora.",
            "Atlas Analytics não gera dado novo; ele só é tão preciso quanto o histórico que Connect e GR alimentaram antes.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Próximos Passos",
      blocks: [
        {
          type: "checklist",
          title: "Sua Missão agora:",
          items: [
            "Conseguir explicar a diferença entre vender rastreador e vender este ecossistema.",
            "Fazer o teste de verificação abaixo com 10 questões rigorosas.",
            "Avançar para o Módulo 05 para ver o Connect na prática.",
          ],
        },
      ],
    },
  ],
  summary: [
    "Atlas Profile age ANTES da viagem (Auditoria Documental e Biométrica).",
    "Atlas Connect é o software de gestão em TEMPO REAL (Mapas, Alertas, APIs).",
    "Atlas GR é a equipe e o processo humano que atua NA CRISE (Torre, CIA, PGR).",
    "Atlas Analytics age DEPOIS, consolidando dados táticos em estratégias de longo prazo.",
    "A união dos quatro pilares é o que torna a AtlasGR líder no conceito de prevenção logística.",
  ],
  finalChecklist: [
    "Sei nominar e descrever cada um dos quatro produtos.",
    "Compreendo que FaceID é crucial para barrar falsidade ideológica no Profile.",
    "Posso articular comercialmente o benefício do ecossistema completo usando o Estudo de Caso.",
  ],
  mindMap: {
    root: "Produtos AtlasGR",
    branches: [
      { label: "Profile", items: ["Biometria", "CNH/Detran", "Prevenção Original"] },
      { label: "Connect", items: ["Software", "Alertas", "APIs", "Diferencial vs Rastreador Genérico"] },
      { label: "GR / CIA", items: ["Pessoas", "Tratativa", "Polícia/Recuperação"] },
      { label: "Analytics", items: ["Painéis", "Eficiência", "Estratégia"] },
    ],
  },
  scenario:
    "Cenário Prático: O Diretor de Logística de um cliente diz: 'Já tenho o Connect e o GR rodando bem. Pra que eu preciso pagar pelo Analytics se eu mesmo posso baixar um relatório no Excel?' Como você defende o valor do Analytics focado em descobrir padrões complexos que o Excel humano jamais veria (como a correlação entre tempo de chuva, fadiga de motoristas e acidentes noturnos)?",
  diagram: {
    title: "Integração do Portfólio",
    chart: "graph LR\n  A[Profile] -->|Libera Condutor| B[Connect]\n  B -->|Exibe Alerta| C[GR / CIA]\n  B -->|Acumula Dados| D[Analytics]\n  C -->|Registra Ocorrência| D",
  },
};
