import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("06-atlas-profile")!;

export const module06: ModuleContentFull = {
  ...meta,
  sources: [
    "Atlas Profile - Guia de Produto",
    "Cartilha de LGPD (Lei nº 13.709/2018)",
  ],
  objectives: [
    "Explicar a lógica financeira da prevenção antecipada de fraudes.",
    "Detalhar o funcionamento técnico do reconhecimento facial e checagem de dados.",
    "Relacionar a prática do Profile às exigências de anonimização e privacidade da LGPD.",
    "Interpretar corretamente os status gerados pelo sistema.",
    "Aplicar corretamente o processo de contestação quando o candidato questiona um antecedente apontado pelo Profile.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Portão de Entrada",
      blocks: [
        {
          type: "text",
          heading: "A Fraude Começa Fora da Estrada",
          paragraphs: [
            [
              "Se você deixar um fraudador assumir a boleia do caminhão, o Atlas Connect e o Atlas GR terão que travar uma guerra para parar o veículo. A lógica do Atlas Profile é simples: nós não deixamos o inimigo entrar no caminhão.",
            ],
            [
              "O Profile atua no 'Background Check' (Pesquisa de Antecedentes e Validação Documental), atuando como um filtro implacável que varre o histórico da frota e do condutor antes do frete ser aprovado.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Ponto Crítico de Compliance",
          text: [
            "Por lidar com reconhecimento facial e dados criminais, o Profile exige adesão religiosa à Lei Geral de Proteção de Dados (LGPD). O menor erro de exposição de dados aqui custa milhões em processos e dano moral.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-motor",
      title: "Capítulo 1: O Motor de Checagem Rápida",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "No passado, despachantes passavam dias consultando sites de tribunais de justiça. Hoje, o Atlas Profile realiza milhares de requisições simultâneas via ",
              { term: "api" },
              ".",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Bases Varridas Automaticamente",
          items: [
            "Tribunais de Justiça Estaduais e Federais (Mandados de Prisão, Histórico de Furto, Roubo e Formação de Quadrilha).",
            "Detran (Validade da CNH, Suspensões, Multas, IPVA atrasado).",
            "ANTT (RNTRC do veículo ativo).",
            "Receita Federal (Situação do CPF).",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-faceid",
      title: "Capítulo 2: A Morte da Falsidade Ideológica (FaceID)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Se um golpista rouba uma CNH real (física) de uma pessoa com ficha limpa, a consulta em banco de dados vai aprovar o documento. É aqui que entra o grande diferencial do produto: a biometria facial.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "O Processo de Liveness",
          items: [
            { label: "1. SMS", text: "Motorista recebe um link seguro no celular na hora do carregamento." },
            { label: "2. Prova de Vida", text: "O link abre a câmera frontal. Ele precisa sorrir ou piscar (Liveness) para provar que não está segurando uma foto impressa." },
            { label: "3. Cruzamento", text: "A IA compara as medidas do rosto (biometria) com o banco de dados oficial do documento." },
            { label: "4. Veredito", text: "Se o rosto não bater com a CNH informada, o status cai para Reprovado." },
          ],
        },
      ],
    },
    {
      id: "capitulo-3-pareceres",
      title: "Capítulo 3: Os Pareceres e a LGPD",
      blocks: [
        {
          type: "comparison",
          title: "Entendendo as Respostas",
          left: {
            label: "O Que Aparece no Sistema",
            points: ["Aprovado", "Não Recomendado", "Requer Atenção (Ex: CNH vencendo daqui 2 dias)"],
          },
          right: {
            label: "O Que NUNCA Aparece",
            points: ["A íntegra do mandado de prisão.", "O nome dos crimes cometidos.", "O CPF e Foto da pessoa aberta para consulta pública."],
          },
        },
        {
          type: "text",
          paragraphs: [
            [
              "A regra da LGPD é o Princípio da Necessidade. O nosso cliente (a Transportadora) só precisa saber se o motorista pode ou não transportar a carga (O Status). Ele NÃO precisa (e não pode) saber se o motorista teve um processo de divórcio litigioso ou foi preso por briga de trânsito em 1999.",
            ],
          ],
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Prevenção do Assalto Interno",
      blocks: [
        {
          type: "case",
          title: "O Motorista Clonado",
          text: "Caso Clássico (2024): Uma transportadora tentou cadastrar um motorista para uma carga de R$ 5 Milhões em notebooks. O banco de dados aprovou o CPF (o cara era ficha limpa). Mas na hora do FaceID, o sistema apontou 0% de similaridade facial. A CIA da AtlasGR foi acionada. Descobriu-se que o golpista achou os documentos reais do motorista perdido no chão de um posto de gasolina. Ele usou a CNH física para se candidatar ao frete, pretendendo desviar a carreta inteira para uma facção criminosa. O roubo de 5 milhões foi abortado por uma simples verificação facial na portaria.",
          source: "Arquivo de Prevenção a Fraudes AtlasGR",
        },
      ],
    },
    {
      id: "capitulo-4-limites-contestacao",
      title: "Capítulo 4: Os Limites da LGPD e o Direito de Contestação",
      blocks: [
        {
          type: "text",
          heading: "O Que a Lei Permite Usar na Decisão de Contratar",
          paragraphs: [
            [
              "Saber que um antecedente existe é diferente de poder usá-lo para reprovar alguém. A LGPD trata dado criminal como dado sensível, e o critério de decisão do Atlas Profile precisa se limitar estritamente à finalidade declarada: avaliar se aquela pessoa pode dirigir aquela carga com segurança.",
            ],
            [
              "Isso significa que categorias inteiras de informação são proibidas de influenciar o status, mesmo quando aparecem incidentalmente durante a varredura de bases públicas.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "Critérios de Decisão: Permitido vs. Proibido",
          left: {
            label: "Pode Compor o Status",
            points: [
              "Mandado de prisão em aberto ligado a crimes patrimoniais (roubo, furto, receptação, quadrilha).",
              "CNH suspensa, vencida ou com pontuação incompatível.",
              "Situação irregular do CPF ou do RNTRC do veículo.",
              "Condenação transitada em julgado diretamente relacionada a risco de carga (ex: roubo de carga).",
            ],
          },
          right: {
            label: "Nunca Pode Compor o Status",
            points: [
              "Opinião política, filiação sindical, religião ou orientação sexual, ainda que apareçam em registros públicos.",
              "Origem racial ou étnica, dado genético ou biométrico.",
              "Processos cíveis sem relação com a carga (divórcio, disputa de vizinhança, dívida de consumo).",
              "Antecedente já prescrito ou com pena cumprida há muito tempo, sem relação com a função.",
            ],
          },
        },
        {
          type: "callout",
          variant: "warning",
          title: "Discriminação Disfarçada de 'Cautela'",
          text: [
            "Usar um antecedente fora do escopo permitido para reprovar um motorista, mesmo 'só para garantir', é decisão discriminatória e gera passivo trabalhista e indenizatório para o cliente e para a AtlasGR. O sistema foi desenhado para não exibir esses dados ao operador exatamente para eliminar essa tentação.",
          ],
        },
        {
          type: "faq",
          items: [
            {
              q: "O motorista pode contestar um status 'Não Recomendado'?",
              a: "Sim. É direito do candidato solicitar revisão quando entende que a informação usada está incorreta, desatualizada ou fora de escopo. O pedido entra como chamado formal, nunca por ligação informal ao despachante.",
            },
            {
              q: "Quem analisa a contestação, o cliente (transportadora)?",
              a: "Não. A contestação é sempre analisada pela C.I.A (Célula de Inteligência Atlas), que tem acesso ao dado bruto sob sigilo. O cliente recebe apenas o resultado da revisão, nunca o motivo detalhado.",
            },
            {
              q: "Qual o prazo para responder ao candidato?",
              a: "A revisão deve ser concluída e comunicada em até 5 dias úteis, conforme o SLA interno de atendimento a titulares de dados previsto na Cartilha de LGPD.",
            },
            {
              q: "E se a contestação for procedente (erro de sistema ou dado desatualizado)?",
              a: "O status é corrigido, o log da alteração é registrado para auditoria, e o parecer anterior é anulado — o cliente é notificado apenas de que o status mudou, sem exposição do motivo.",
            },
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
          title: "Checklist de Encerramento",
          items: [
            "Entender profundamente a Lei LGPD e seu artigo sobre dados sensíveis.",
            "Visualizar no sistema de demonstração a diferença entre a visão do operador Atlas e a visão do cliente final.",
          ],
        },
      ],
    },
  ],
  summary: [
    "Profile varre antecedentes criminais, documentação de trânsito e fraudes veiculares.",
    "O FaceID é a única barreira funcional contra o crime de Falsidade Ideológica.",
    "A entrega de status ('Não Recomendado') blinda o cliente e a Atlas de processos por dano moral (LGPD).",
    "O Custo Invisível evitado pelo Profile é gigante: caminhões não são retidos no meio da estrada por documentação atrasada.",
  ],
  finalChecklist: [
    "Compreendo como a IA combate a falsidade ideológica via FaceID.",
    "Entendo o limite de informação que podemos compartilhar segundo a LGPD.",
    "Sei os 3 tipos de pareceres gerados pela pesquisa.",
  ],
  mindMap: {
    root: "Atlas Profile",
    branches: [
      { label: "Bases", items: ["Tribunais", "ANTT", "Detran"] },
      { label: "FaceID", items: ["Prova de Vida", "Biometria", "Anti-Falsidade"] },
      { label: "LGPD", items: ["Sigilo do Crime", "Apenas o Parecer", "Consentimento", "Direito de Contestação"] },
    ],
  },
  scenario:
    "Cenário Prático: Um despachante terceirizado liga furioso exigindo saber POR QUE o Atlas Profile reprovou um grande amigo dele. Como você bloqueia essa extração de dados usando a política de compliance?",
  diagram: {
    title: "O Funil de Contratação",
    chart: "graph TD\n  Dados[Input Placa/CPF] --> CheckDoc[Bases Governamentais]\n  CheckDoc -- Limpo --> Selfie[SMS FaceID]\n  Selfie -- Rosto Confere --> Aprova[Viagem Liberada]\n  CheckDoc -- Crime --> Reprova[NÃO RECOMENDADO]\n  Selfie -- Rosto Falso --> Reprova",
  },
};
