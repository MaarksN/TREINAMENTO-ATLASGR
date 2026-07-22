import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("01-bem-vindo-atlasgr")!;

export const module01: ModuleContentFull = {
  ...meta,
  sources: [
    "Política Organizacional e Ética (v2.1) — seções 1 a 3, 9 e 11",
    "CARGOS.pdf — Estrutura Organizacional, Estrutura de Recursos Humanos, Estrutura Operacional",
  ],
  objectives: [
    "Explicar a origem, o propósito e os valores da ATLASGR com suas próprias palavras.",
    "Reconhecer as 5 grandes áreas da Diretoria e a função de cada uma.",
    "Descrever a cadeia operacional da Central, do Gerente ao Operador.",
    "Aplicar as regras essenciais de conduta e sigilo no dia a dia.",
    "Saber quando e por que os treinamentos de reciclagem acontecem.",
  ],
  sections: [
    {
      id: "quem-e-a-atlasgr",
      title: "Quem é a ATLASGR",
      blocks: [
        {
          type: "text",
          heading: "Uma empresa nascida para gerenciar risco",
          paragraphs: [
            [
              "A Atlas Segurança e Inteligência Logística surgiu em 2004 com o propósito de gerenciar os riscos nos processos logísticos. Hoje atua em centenas de empresas, oferecendo uma ampla gama de serviços de segurança e qualidade a seus clientes.",
            ],
            [
              "O propósito declarado da empresa é: ",
              { term: "gr" },
              " — \"nós conectamos pessoas e tecnologia gerando valor com segurança e inovação\". Esse propósito aparece em todos os documentos institucionais e é a referência para qualquer decisão de produto ou atendimento.",
            ],
          ],
        },
        {
          type: "quote",
          text: "Nós conectamos pessoas e tecnologia gerando valores com segurança e inovação.",
          author: "Propósito institucional da ATLASGR",
        },
        {
          type: "comparison",
          title: "Os 5 valores da ATLASGR",
          left: {
            label: "O que eles significam na prática",
            points: [
              "Perseverança — insistir nas soluções certas mesmo quando o problema é difícil.",
              "Transparência — comunicar com clareza para clientes, colegas e liderança.",
              "Simplicidade — resolver sem burocracia desnecessária.",
            ],
          },
          right: {
            label: "Continuação",
            points: [
              "Atitude de Dono — tratar o trabalho como se o resultado fosse seu, não só \"da empresa\".",
              "Inovação — buscar formas melhores de proteger cliente, carga e motorista.",
              "Os 5 valores orientam avaliações de desempenho e decisões do dia a dia.",
            ],
          },
        },
        {
          type: "callout",
          variant: "info",
          title: "Qualidade certificada por consultorias externas",
          text: [
            "Os processos de gerenciamento de risco da Atlas, a capacidade técnica dos colaboradores e a estrutura física e tecnológica da empresa foram avaliados e certificados por consultorias especializadas em GR (ID Studio Net e Moraes e Velleda).",
          ],
        },
      ],
    },
    {
      id: "estrutura-organizacional",
      title: "Estrutura Organizacional",
      blocks: [
        {
          type: "text",
          heading: "As 5 áreas ligadas à Diretoria",
          paragraphs: [
            [
              "Toda a empresa reporta à Diretoria através de 5 grandes áreas. Conhecer essas áreas ajuda qualquer colaborador a saber para quem encaminhar uma dúvida ou solicitação.",
            ],
          ],
        },
        {
          type: "timeline",
          title: "Diretoria e as 5 áreas",
          items: [
            { label: "Administrativo Financeiro", text: "Saúde financeira da empresa: análises, liberações financeiras e administração do patrimônio." },
            { label: "Comercial", text: "Mantém o relacionamento ativo com o cliente através da venda, acompanhamento e treinamento." },
            { label: "Operações", text: "O \"coração da empresa\" — onde as operações de gerenciamento de risco dos clientes de fato acontecem." },
            { label: "DHO", text: "Cuida do capital humano: da rotina de departamento pessoal ao desenvolvimento e desempenho dos colaboradores." },
            { label: "TI", text: "Mantém a empresa atualizada tecnologicamente e apoia o desenvolvimento e a implantação de novos sistemas." },
          ],
        },
        {
          type: "text",
          heading: "A cadeia operacional da Central",
          paragraphs: [
            [
              "Dentro da área de Operações, a estrutura segue esta hierarquia: Gerência → Coordenação → (Implantação, Treinamento, ",
              { term: "perfil-securitario" },
              ", Supervisão) → (Liderança, ",
              { term: "cia-i" },
              ", ",
              { term: "cia-ii" },
              ", ",
              { term: "safety" },
              ", Transferência, Operadores).",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Quem faz o quê na Operação (resumo)",
          items: [
            `${"Analista de Implantação"} — configura clientes novos: analisa apólice, cria PGR, monta macros e treina o cliente no sistema.`,
            "Analista de Treinamento — integra e capacita os colaboradores novos e conduz as reciclagens.",
            "Analista Perfil Securitário — analisa documentação de motoristas e veículos pesquisados.",
            "Supervisão — direciona a equipe, audita o operacional e analisa KPIs.",
            "Liderança — acompanha e-mail/WhatsApp da Central, SLA de alertas, checklist e cobre ausências.",
            "CIA I e CIA II — tratam os alertas mais críticos, acionam autoridades e pronta resposta, apuram sinistros.",
            "Operadores — tratam alertas, monitoram viagens em tempo real e realizam o checklist dos veículos.",
          ],
        },
      ],
    },
    {
      id: "cultura-etica-conduta",
      title: "Cultura, ética e conduta",
      blocks: [
        {
          type: "text",
          heading: "Todo colaborador deve conhecer o organograma e seu descritivo de cargo",
          paragraphs: [
            [
              "A Política Organizacional e Ética define deveres claros: ser pontual, tratar clientes e colegas com cordialidade, zelar pelas ferramentas de trabalho, bloquear o computador ao se ausentar e manter absoluto sigilo sobre dados e informações de clientes — mesmo após o fim do vínculo com a empresa.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Proibições que todo colaborador precisa lembrar",
          text: [
            "É expressamente proibido o uso de celular pessoal na sala de operação, divulgar informações da empresa/clientes sem autorização, compartilhar senhas pessoais e publicar fotos do ambiente de trabalho em redes sociais sem permissão.",
          ],
        },
        {
          type: "checklist",
          title: "Boas práticas de sigilo e postura",
          items: [
            "Bloquear a estação de trabalho sempre que se ausentar.",
            "Usar o e-mail corporativo apenas para assuntos profissionais.",
            "Não comentar assuntos internos da empresa ou de clientes fora do espaço de trabalho.",
            "Usar crachá/identificação nas dependências da empresa e em visitas a clientes.",
            "Seguir as regras de vestimenta definidas para cada área.",
          ],
        },
        {
          type: "text",
          heading: "Capacitação contínua",
          paragraphs: [
            [
              "Todo colaborador admitido participa obrigatoriamente do Treinamento Inicial antes de assumir plenamente suas atividades. Depois disso, a ",
              { term: "reciclagem" },
              " garante que todos continuem atualizados sobre normas, sistemas e procedimentos — e pode ser antecipada sempre que houver mudança relevante em processos, sistemas, legislação ou exigências de clientes.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Com que frequência preciso repetir o treinamento?", a: "Os Treinamentos de Reciclagem são obrigatórios a cada 3 anos, contados do Treinamento Inicial ou da última reciclagem — podendo ser antecipados se houver mudança relevante." },
            { q: "Posso usar meu celular pessoal durante o expediente?", a: "Na sala de operação, não. O uso de celular pessoal é expressamente proibido nesse ambiente pela Política Organizacional e Ética." },
            { q: "O que acontece se eu compartilhar informações de um cliente sem autorização?", a: "É considerado quebra do termo de sigilo e confidencialidade, com efeitos de ordem penal, civil e administrativa previstos na própria política." },
            { q: "A quem eu reporto dúvidas sobre meu cargo?", a: "Ao seu superior imediato, seguindo o organograma vigente — todo colaborador deve conhecer esse organograma e os manuais relacionados ao seu cargo." },
          ],
        },
      ],
    },
  ],
  summary: [
    "A ATLASGR (Atlas Segurança e Inteligência Logística) existe desde 2004 para gerenciar riscos em processos logísticos.",
    "Propósito: conectar pessoas e tecnologia gerando valor com segurança e inovação.",
    "5 valores: Perseverança, Transparência, Simplicidade, Atitude de Dono e Inovação.",
    "5 áreas reportam à Diretoria: Administrativo Financeiro, Comercial, Operações, DHO e TI.",
    "A Central segue a cadeia Gerência → Coordenação → Implantação/Treinamento/Perfil Securitário/Supervisão → Liderança/CIA I/CIA II/Safety/Transferência/Operadores.",
    "Sigilo, pontualidade e conhecimento do organograma são deveres formais de todo colaborador.",
    "A reciclagem de treinamento é obrigatória a cada 3 anos, podendo ser antecipada por mudanças relevantes.",
  ],
  finalChecklist: [
    "Sei explicar o propósito e os 5 valores da ATLASGR sem consultar material.",
    "Consigo nomear as 5 áreas da Diretoria e o que cada uma faz.",
    "Sei descrever a cadeia de comando da Operação, do Gerente ao Operador.",
    "Conheço as principais proibições da Política Organizacional e Ética.",
    "Sei em quais situações preciso repetir o treinamento de reciclagem.",
  ],
  mindMap: {
    root: "ATLASGR",
    branches: [
      { label: "Origem", items: ["Fundada em 2004", "Segurança e Inteligência Logística"] },
      { label: "Propósito e valores", items: ["Pessoas + tecnologia + segurança + inovação", "Perseverança, Transparência, Simplicidade, Atitude de Dono, Inovação"] },
      { label: "Diretoria", items: ["Administrativo Financeiro", "Comercial", "Operações", "DHO", "TI"] },
      { label: "Operação", items: ["Gerência", "Coordenação", "Implantação / Treinamento / Perfil Securitário / Supervisão", "Liderança / CIA I / CIA II / Safety / Transferência / Operadores"] },
      { label: "Conduta", items: ["Sigilo", "Pontualidade", "Uso correto de e-mail e internet", "Reciclagem a cada 3 anos"] },
    ],
  },
  scenario:
    "É seu primeiro dia na Atlas. Um colega comenta que, antes de 2004, negociações de risco eram resolvidas informalmente entre transportadora e cliente, sem processo documentado. Hoje, cada decisão segue um fluxo definido, do Comercial à CIA. O que a Bem-vindo à ATLASGR ensina sobre essa mudança de cultura?",
  diagram: {
    title: "Da fundação à operação de hoje",
    chart: "graph LR\n  A[2004: Fundação] --> B[Governança e processo]\n  B --> C[Estrutura por Diretoria]\n  C --> D[Central 24 horas]",
  },
};
