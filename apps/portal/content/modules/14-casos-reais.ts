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
      title: "Introdução: O Laboratório da Realidade",
      blocks: [
        {
          type: "text",
          heading: "A Teoria Encontra o Asfalto",
          paragraphs: [
            [
              "Até aqui, você estudou manuais, diretrizes de IA e regras da Seguradora. Neste módulo, vamos colocar a teoria na sala de autópsia.",
            ],
            [
              "Analisaremos o maior case de sucesso financeiro da AtlasGR e a maior tragédia operacional gerada por uma quebra de protocolo, comprovando que o processo não existe para engessar o trabalho, mas para evitar o colapso.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Mentalidade de Investigador",
          text: [
            "Não julgue os operadores dos casos passados. A pressão e a engenharia social atuam no cérebro de formas complexas. Seu trabalho é identificar 'em qual minuto do SLA a regra foi quebrada'.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-sucesso",
      title: "Capítulo 1: O Triunfo Operacional (Carga Viva)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Este é o case matriz de como a integração entre Sistema, Torre e CIA salva fortunas na madrugada.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Cronologia: A Recuperação de Eletrônicos (R$ 1.5M)",
          items: [
            { label: "03:15 (O Alerta)", text: "Connect acusa Perda do Rastreador Principal na Fernão Dias. O Operador age no minuto 1." },
            { label: "03:17 (A Ação)", text: "Macro de bloqueio e sirene enviados sem sucesso. Celular desligado. Sem hesitar e sem tentar ligar infinitamente, a CIA é acionada." },
            { label: "03:22 (A Inteligência)", text: "A CIA isola o sinal da Isca Móvel (que estava viva). A posição apontava 5km fora da rodovia, em direção a um galpão." },
            { label: "03:30 (O Resgate)", text: "CIA aciona viaturas da PM local com a latitude/longitude precisa da Isca. A Polícia entra no galpão, liberta o motorista ileso e recupera 100% dos celulares." },
          ],
        },
      ],
    },
    {
      id: "capitulo-2-falha",
      title: "Capítulo 2: O Fracasso Humano (O Enforcamento)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A máquina agiu certo. A IA funcionou. Mas a empatia cega do humano quebrou a defesa. O caso da carga de defensivos agrícolas (R$ 800 mil) é o nosso alerta máximo.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Cronologia: O Preço da Confiança (R$ 800k)",
          items: [
            { label: "14:00 (O Alerta)", text: "Connect acusa Parada Indevida (Alto Risco)." },
            { label: "14:15 (Furo de SLA)", text: "Operador só inicia tratativa 15 min depois, já com o SLA primário estourado." },
            { label: "14:18 (O Erro Fatal)", text: "Operador liga para o motorista, que diz: 'Parei para verificar a lona, a chuva tá forte'. O Operador acredita na voz calma e, COM PREGUIÇA, não pede a contra-senha. Dá baixa no alerta." },
            { label: "17:00 (O Colapso)", text: "O cliente liga em desespero. A carga sumiu. O motorista estava refém com arma na cabeça na ligação das 14:18." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A Conclusão Forense",
          text: [
            "O operador 'burlou' o processo. Deixou a pressa sobrepor a segurança. A Seguradora negou o pagamento por culpa exclusiva do mau gerenciamento de risco da Torre.",
          ],
        },
      ],
    },
    {
      id: "capitulo-3-casos-macro",
      title: "Capítulo 3: Os Grandes Cases Comerciais",
      blocks: [
        {
          type: "comparison",
          title: "Prevenção vs Eficiência",
          left: {
            label: "Case Combustíveis (Roubo Zero)",
            points: [
              "Problema Original: 40 roubos e desvios ao ano (Prejuízos constantes).",
              "Solução: Implantação massiva do Atlas Profile + Bloqueios Agressivos e regras restritas.",
              "Resultado Final: ZERO roubos por 24 meses seguidos. Economia contábil de R$ 95 Milhões.",
            ],
          },
          right: {
            label: "Case Sucos (Otimização Extrema)",
            points: [
              "Problema Original: Zero roubos, mas os caminhões passavam dias em filas nas fazendas.",
              "Solução: Cercas Virtuais do Connect ligadas ao Atlas Analytics para medição de pátio.",
              "Resultado Final: Redução de 26% no tempo ocioso. Aumento bruto na margem de lucro da transportadora.",
            ],
          },
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Síntese Prática",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Todos os casos acima possuem o mesmo fio condutor: O respeito à regra gera lucro e segurança; a quebra da regra (seja pela dor, pela preguiça ou pela desatenção) gera caos.",
            ],
          ],
        },
      ],
    },
    {
      id: "capitulo-4-resgate-farma",
      title: "Capítulo 4: O Resgate Relâmpago (Carga Farma)",
      blocks: [
        {
          type: "case",
          title: "O Caso da Carga Farma: Recuperação em 38 Minutos",
          text:
            "Uma carreta com componentes eletrônicos avaliados em R$ 2,3 milhões saiu da rota programada na BR-381. O Connect disparou o alerta de desvio de trajeto no mesmo minuto. Em vez de confiar apenas na voz do motorista ao telefone — a mesma armadilha que custou R$ 800 mil no Capítulo 2 —, o operador acionou a checagem por vídeo (DMS) em tempo real e confirmou dois indivíduos não identificados na cabine. A CIA assumiu a ocorrência, ativou o bloqueio progressivo do motor (que reduz a velocidade sem travar o veículo de forma abrupta, preservando a integridade física do motorista) e compartilhou a geolocalização exata com a Polícia Rodoviária. A carga foi interceptada intacta antes de qualquer transferência para outro veículo.",
          source: "Arquivo Confidencial: Auditorias Forenses de Sinistros (2020-2025)",
        },
        {
          type: "timeline",
          title: "Cronologia: Do Desvio à Recuperação Total",
          items: [
            { label: "09:41 (O Alerta)", text: "Connect acusa desvio de rota fora do corredor logístico autorizado no Atlas Profile." },
            { label: "09:43 (A Verificação)", text: "Em vez de ligar e confiar na voz, o operador ativa o DMS e visualiza dois ocupantes estranhos na cabine. Contra-senha nem chega a ser solicitada: a evidência visual já basta." },
            { label: "09:47 (A Ação)", text: "CIA assume a ocorrência e aciona o bloqueio progressivo do motor via Atlas Connect, evitando reação violenta dos criminosos." },
            { label: "10:05 (A Interceptação)", text: "Coordenadas em tempo real são repassadas à Polícia Rodoviária. Veículo é abordado antes de alcançar o ponto de troca de carga." },
            { label: "10:19 (O Fechamento)", text: "Motorista recuperado ileso, carga 100% intacta. Ocorrência encerrada sem acionamento de sinistro junto à Seguradora." },
          ],
        },
        {
          type: "stat",
          items: [
            { value: "38 min", label: "Do alerta à recuperação total" },
            { value: "100%", label: "Da carga entregue sem avaria" },
            { value: "R$ 2,3 mi", label: "Valor da mercadoria preservado" },
            { value: "0", label: "Sinistros acionados junto à Seguradora" },
          ],
        },
        {
          type: "callout",
          variant: "success",
          title: "Os Três Fatores que Mudaram o Resultado",
          text: [
            "Verificação por vídeo (DMS) em vez de confiança cega na voz do motorista, bloqueio progressivo (segurança física antes de tudo) e compartilhamento imediato de geolocalização com a força policial. Nenhum herói isolado: um protocolo seguido à risca, do primeiro ao último minuto.",
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
          title: "O Penúltimo Passo",
          items: [
            "Falta pouco. Reflita sobre o erro da 'falta de contra-senha'. Prometa a si mesmo que isso não ocorrerá no seu turno.",
            "Acesse o último módulo da Trilha. A Preparação Final para a Prova de Certificação.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A precisão do SLA (agir em minutos) foi a diferença vital para recuperar 1.5M em eletrônicos usando a Isca Móvel.",
    "A empatia sem método e a 'preguiça' de pedir contra-senha causaram a perda de 800k de defensivos.",
    "Nenhum operador pode assumir o risco da intuição contrária à tela do Connect.",
    "O discurso comercial real é balizado pelos cases de economia de R$ 95M (contra roubo) e -26% de tempo (eficiência).",
  ],
  finalChecklist: [
    "Sei a causa-raiz do fracasso no evento de roubo de defensivos (falta de contra-senha e SLA).",
    "Compreendo o papel da Isca e da CIA na recuperação tática.",
    "Sei como argumentar valor baseado nos cases macro (Combustível e Sucos).",
  ],
  mindMap: {
    root: "Laboratório Forense",
    branches: [
      { label: "O Triunfo", items: ["SLA Rápido", "Acionamento da CIA", "Uso da Isca Móvel", "Verificação por Vídeo (DMS) e Bloqueio Progressivo"] },
      { label: "O Fracasso", items: ["Enforcar Alerta", "Acreditar na Voz", "Omitir Contra-Senha"] },
      { label: "O Valor", items: ["95 Milhões (Combustível)", "Redução Pátio (Sucos)"] },
    ],
  },
  scenario:
    "Cenário Prático: A carreta para fora de hora. Você liga, o motorista passa a contra-senha CORRETA, mas você ouve tiros ao fundo da ligação. A contra-senha diz que está tudo bem, o ambiente diz o contrário. Você dá baixa ou aciona a CIA por Anomalia Externa?",
  diagram: {
    title: "O Peso da Decisão",
    chart: "graph TD\n  Inicio[Alerta Crítico] --> Decisao{Decisão do Operador}\n  Decisao -- Foco no PGR --> A[Valida Contra-Senha]\n  A --> Sucesso[Recupera Carga / Garante Seguro]\n  Decisao -- Empatia Cega / Preguiça --> B[Ignora Contra-Senha]\n  B --> Falha[Roubo com Culpa Operacional / Seguro Negado]",
  },
};
