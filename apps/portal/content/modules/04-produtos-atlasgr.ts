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
            "Validade de CNH, categorias permitidas e toxicológico.",
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
      { label: "Connect", items: ["Software", "Alertas", "APIs"] },
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
