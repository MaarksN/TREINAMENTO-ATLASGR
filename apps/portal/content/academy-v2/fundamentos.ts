import { buildModuleV2 } from "./buildModule";

export const academyModule01 = buildModuleV2({
  slug: "01-bem-vindo-atlasgr",
  sources: [
    "Site oficial ATLASGR — A Empresa",
    "Política Organizacional e Ética (material interno)",
    "Organograma e Jornada do Colaborador (materiais internos)",
  ],
  objectives: [
    "Explicar com palavras próprias o que a ATLASGR faz e por que isso importa para a cadeia logística.",
    "Reconhecer os cinco valores institucionais e traduzi-los em comportamentos observáveis.",
    "Entender como áreas diferentes colaboram para entregar segurança, visibilidade e qualidade ao cliente.",
    "Saber quando decidir, quando registrar e quando escalar uma situação que excede sua alçada.",
  ],
  scenario: "Você está em sua primeira semana. Um cliente pede uma exceção urgente e a solicitação parece simples, mas pode afetar segurança, contrato ou tratamento de dados. Como você responde sem travar a operação e sem prometer o que não pode garantir?",
  introHeading: "O que significa trabalhar na ATLASGR",
  intro: [
    "A ATLASGR atua em segurança e inteligência logística desde 2004. O trabalho combina pessoas, tecnologia e dados para dar visibilidade à operação, apoiar decisões e reduzir exposição a riscos.",
    "O ponto central deste onboarding não é decorar slogans. É entender como o propósito da empresa aparece nas escolhas do dia a dia: comunicar com transparência, simplificar sem eliminar controles, assumir responsabilidade pelo que está sob sua alçada e propor melhorias com critério.",
    "Sempre diferencie fato, hipótese e decisão. Em uma operação de risco, falar com convicção sem evidência é mais perigoso do que admitir que uma validação ainda precisa ser feita.",
  ],
  media: {
    youtubeId: "yALfdQPaPi4",
    title: "Conheça a ATLASGR",
    caption: "Vídeo institucional para contextualizar a empresa antes de entrar nos processos e soluções.",
    transcript: [
      "Assista buscando responder a três perguntas: qual problema a ATLASGR ajuda a resolver, como tecnologia e pessoas trabalham juntas e que tipo de resultado o cliente espera da operação.",
      "Depois do vídeo, tente explicar a empresa em até um minuto sem repetir frases prontas. Se você consegue fazer isso com clareza, o conceito começou a virar conhecimento próprio.",
    ],
    source: "Vídeo institucional ATLASGR fornecido no projeto",
  },
  chapters: [
    {
      id: "proposito-valores",
      title: "Propósito e valores sem discurso decorado",
      heading: "Cinco valores, cinco filtros para decidir",
      paragraphs: [
        "Perseverança, Transparência, Simplicidade, Atitude de Dono e Inovação só têm valor quando mudam comportamento. Transparência significa comunicar risco e erro cedo. Simplicidade significa retirar atrito sem retirar controle. Atitude de Dono significa cuidar da consequência da decisão, não agir fora da própria alçada.",
        "Inovação não é usar tecnologia por novidade. É melhorar resultado, confiabilidade ou experiência com uma solução que possa ser medida e sustentada. Perseverança não é insistir cegamente: é continuar buscando solução quando a primeira tentativa não resolve o problema.",
      ],
      whyItMatters: "Valores funcionam como um padrão de desempate quando o procedimento não cobre todos os detalhes da situação. Eles ajudam a manter coerência entre pessoas, turnos e áreas.",
      checklist: [
        "Antes de agir, separe o que você sabe do que ainda precisa confirmar.",
        "Comunique riscos e impedimentos de forma objetiva, sem esconder contexto relevante.",
        "Simplifique o fluxo somente quando o controle essencial continuar preservado.",
        "Se a decisão exceder sua alçada, escale com contexto e uma recomendação, não apenas com o problema.",
      ],
      comparison: {
        title: "Atitude de dono não é autonomia sem limite",
        left: {
          label: "Comportamento responsável",
          points: ["Assume o problema", "Busca evidência", "Propõe alternativa", "Escala quando necessário", "Registra a decisão"],
        },
        right: {
          label: "Comportamento de risco",
          points: ["Promete sem validar", "Ignora regra por urgência", "Decide fora da alçada", "Oculta erro", "Deixa ação sem registro"],
        },
      },
    },
    {
      id: "como-a-empresa-se-conecta",
      title: "Como as áreas se conectam",
      heading: "A experiência do cliente atravessa várias áreas",
      paragraphs: [
        "Uma entrega consistente depende de passagem de contexto. Comercial precisa entender o que pode ser prometido. Operação precisa receber regras claras. Tecnologia precisa compreender o impacto real de falhas e integrações. Áreas administrativas, pessoas e liderança precisam sustentar processos, acessos e decisões.",
        "O erro mais comum em ambientes complexos é tratar o limite da própria área como o fim do problema. Para o cliente, a empresa é uma só. Por isso, um bom handoff informa objetivo, urgência, risco, responsável e próximo passo.",
      ],
      whyItMatters: "Grande parte das falhas de serviço não nasce de falta de esforço, mas de contexto perdido entre áreas. Handoffs claros diminuem retrabalho e decisões contraditórias.",
      checklist: [
        "Diga o que aconteceu e por que importa.",
        "Informe o que já foi verificado e o que ainda está pendente.",
        "Defina quem é o próximo responsável e qual ação é esperada.",
        "Registre a decisão em canal corporativo apropriado.",
      ],
    },
    {
      id: "primeiros-dias",
      title: "Como aprender nos primeiros dias",
      heading: "Perguntar cedo é parte do trabalho",
      paragraphs: [
        "No início, seu objetivo é construir um mapa mental: quem decide o quê, onde a informação oficial fica, quais passos são obrigatórios e quais sinais exigem escalonamento. Tentar parecer autônomo cedo demais costuma gerar mais risco do que pedir ajuda com contexto.",
        "Use este treinamento como ponto de partida, não como substituto dos procedimentos vigentes. Sempre que conteúdo de treinamento e regra operacional divergirem, valide a versão atual do procedimento com a liderança responsável antes de executar.",
      ],
      whyItMatters: "Treinamento envelhece; operação muda. Saber localizar a fonte atual e reconhecer incerteza é uma competência tão importante quanto memorizar o processo.",
      faq: [
        { q: "Posso usar este treinamento como regra operacional definitiva?", a: "Não. Ele ensina conceitos e padrões de decisão. Procedimentos, PGRs, contratos e instruções operacionais vigentes continuam sendo a fonte para execução específica." },
        { q: "O que fazer quando duas orientações parecem conflitantes?", a: "Pare a decisão irreversível, registre o conflito e escale para quem tem alçada sobre o processo. Não escolha a versão mais conveniente sem validação." },
      ],
    },
  ],
  summary: [
    "A ATLASGR combina pessoas, tecnologia e dados para apoiar segurança e inteligência logística.",
    "Os valores precisam aparecer em comportamento observável, não em frases decoradas.",
    "Decisões de qualidade separam fato, hipótese, alçada e registro.",
    "Handoffs entre áreas precisam preservar contexto, responsabilidade e próximo passo.",
  ],
  finalChecklist: [
    "Consigo explicar a ATLASGR em até 60 segundos usando minhas próprias palavras.",
    "Consigo dar um exemplo prático de cada valor institucional.",
    "Sei distinguir uma decisão que posso tomar de uma que precisa ser escalada.",
    "Sei que procedimentos vigentes prevalecem sobre qualquer resumo de treinamento.",
  ],
  mindMap: {
    root: "Trabalhar na ATLASGR",
    branches: [
      { label: "Propósito", items: ["Pessoas", "Tecnologia", "Dados", "Valor para o cliente"] },
      { label: "Valores", items: ["Perseverança", "Transparência", "Simplicidade", "Atitude de Dono", "Inovação"] },
      { label: "Execução", items: ["Fato x hipótese", "Alçada", "Handoff", "Registro"] },
    ],
  },
  diagram: {
    title: "Da solicitação à decisão responsável",
    chart: "flowchart LR\n  A[Solicitação ou evento] --> B[Entender contexto]\n  B --> C[Confirmar fatos]\n  C --> D{Está na minha alçada?}\n  D -- Sim --> E[Executar e registrar]\n  D -- Não --> F[Escalar com recomendação]\n  F --> G[Decisão responsável]\n  E --> G",
  },
});

export const academyModule02 = buildModuleV2({
  slug: "02-mercado-logistica",
  sources: [
    "Materiais internos de onboarding — Mercado e Logística",
    "Conteúdos institucionais ATLASGR sobre segurança e inteligência logística",
  ],
  objectives: [
    "Diferenciar embarcador, transportador, motorista, destinatário e parceiros de apoio.",
    "Entender a viagem como fluxo de informação, mercadoria, responsabilidade e risco.",
    "Reconhecer variáveis que alteram complexidade operacional sem tratar hipótese como regra.",
    "Fazer perguntas de contexto antes de propor solução ou tomar decisão.",
  ],
  scenario: "Duas empresas fazem 400 viagens por mês. Uma transporta carga de alto valor em rotas longas; a outra faz distribuição urbana com múltiplas entregas por dia. O volume é parecido, mas a operação não é. O que você precisa descobrir antes de comparar risco, tecnologia ou esforço operacional?",
  introHeading: "Logística é uma cadeia, não um caminhão no mapa",
  intro: [
    "Uma operação logística conecta origem, preparação, carregamento, viagem, pontos de parada, entrega, retorno de informação e encerramento. Cada etapa gera dados, decisões e riscos diferentes.",
    "O mesmo número de viagens pode esconder operações completamente distintas. Tipo de carga, valor, rota, janela de entrega, quantidade de paradas, perfil do veículo, tecnologia embarcada e exigências contratuais mudam a forma de operar.",
    "Por isso, a primeira competência é contextualizar. Antes de classificar uma operação como simples ou complexa, descubra quem participa, o que está sendo transportado, qual resultado precisa ser protegido e quais regras se aplicam.",
  ],
  chapters: [
    {
      id: "atores",
      title: "Quem participa da cadeia",
      heading: "Papéis diferentes, responsabilidades diferentes",
      paragraphs: [
        "O embarcador é quem possui ou contrata o transporte da mercadoria. A transportadora executa ou coordena o transporte. O motorista conduz o veículo e cumpre procedimentos de viagem. O destinatário recebe. Seguradora, corretora, gerenciadora de risco, rastreador, escolta e outros parceiros podem participar conforme a operação.",
        "Não presuma que um ator controla todos os outros. Em operações terceirizadas, a informação pode atravessar empresas e sistemas diferentes. Isso torna identificação de responsável e fonte da verdade especialmente importante.",
      ],
      whyItMatters: "Quando o papel de cada participante não está claro, alertas são enviados para a pessoa errada, decisões atrasam e ninguém sabe quem deve encerrar a ação.",
      checklist: ["Identifique quem contrata o transporte.", "Identifique quem executa a viagem.", "Defina quem recebe alertas e quem pode autorizar exceções.", "Mapeie o sistema que contém a informação oficial."],
    },
    {
      id: "fluxo-da-viagem",
      title: "O ciclo de uma viagem",
      heading: "Do planejamento ao encerramento",
      paragraphs: [
        "Uma viagem bem gerida começa antes da ignição. Cadastro, veículo, motorista, origem, destino, rota, janela, regras de parada e parâmetros de monitoramento precisam estar coerentes. Durante a execução, eventos devem ser tratados no contexto do planejamento.",
        "Encerrar também é parte do processo. Viagem sem fechamento correto deixa dados inconsistentes, indicadores distorcidos e alertas posteriores sem sentido.",
      ],
      whyItMatters: "Monitorar sem planejamento gera muito sinal e pouco contexto. Planejar sem encerrar gera histórico ruim. A inteligência nasce da continuidade do ciclo.",
      checklist: ["Planejar", "Validar cadastro e recursos", "Iniciar", "Monitorar", "Tratar exceções", "Confirmar entrega", "Encerrar e registrar"],
    },
    {
      id: "complexidade",
      title: "O que torna uma operação mais complexa",
      heading: "Complexidade não é sinônimo de volume",
      paragraphs: [
        "Complexidade cresce quando existem mais exceções, mais participantes, mais pontos de decisão, maior sensibilidade de carga, restrições de horário, integrações, múltiplos rastreadores ou regras específicas por cliente.",
        "Volume importa para dimensionamento, mas sozinho não descreve risco nem esforço. Uma boa análise combina quantidade, variabilidade e consequência de erro.",
      ],
      whyItMatters: "Dimensionar equipe, tecnologia ou processo apenas por quantidade de viagens pode criar excesso de custo em uma operação ou subdimensionamento em outra.",
      comparison: {
        title: "Mesma quantidade, operações diferentes",
        left: { label: "Operação previsível", points: ["Poucas rotas", "Poucas exceções", "Regras padronizadas", "Baixa variação de janela"] },
        right: { label: "Operação variável", points: ["Muitas rotas", "Múltiplas paradas", "Regras por cliente/carga", "Alta incidência de exceções"] },
      },
    },
  ],
  summary: ["Logística é um fluxo ponta a ponta de mercadoria, informação e responsabilidade.", "Volume não explica sozinho risco ou complexidade.", "Papéis e fontes da verdade precisam estar explícitos.", "Planejamento, execução e encerramento formam um único ciclo."],
  finalChecklist: ["Consigo identificar os atores de uma operação.", "Consigo descrever o ciclo completo de uma viagem.", "Sei citar fatores que mudam complexidade além do volume.", "Faço perguntas de contexto antes de classificar uma operação."],
  mindMap: { root: "Operação logística", branches: [{ label: "Atores", items: ["Embarcador", "Transportadora", "Motorista", "Destinatário", "Parceiros"] }, { label: "Ciclo", items: ["Planejar", "Executar", "Monitorar", "Encerrar"] }, { label: "Complexidade", items: ["Volume", "Variabilidade", "Consequência"] }] },
  diagram: { title: "Ciclo logístico simplificado", chart: "flowchart LR\n  A[Planejamento] --> B[Validações]\n  B --> C[Carregamento]\n  C --> D[Viagem]\n  D --> E[Entrega]\n  E --> F[Encerramento]\n  D --> X[Exceção]\n  X --> D" },
});

export const academyModule03 = buildModuleV2({
  slug: "03-gerenciamento-risco",
  sources: ["Materiais internos de Gerenciamento de Risco e PGR", "Site oficial ATLASGR — Gerenciamento de Riscos", "Conteúdos institucionais ATLASGR sobre segurança logística"],
  objectives: ["Entender gerenciamento de risco como processo contínuo e não apenas rastreamento.", "Diferenciar condição planejada, evento, não conformidade e potencial sinistro.", "Usar o PGR e a regra vigente como referência para decidir.", "Escalar eventos com evidência, prioridade e contexto."],
  scenario: "Durante uma viagem, o veículo sai da rota prevista, faz uma parada não programada e perde comunicação. Você ainda não sabe se existe ameaça real. Quais fatos precisa confirmar e que ações podem ser tomadas sem transformar suspeita em certeza?",
  introHeading: "Gerenciar risco é reduzir incerteza antes que ela vire perda",
  intro: [
    "Rastreamento informa onde o veículo está ou esteve. Gerenciamento de risco usa contexto, regras e resposta para reduzir exposição. A diferença está no que a equipe faz com o dado.",
    "O PGR define controles e procedimentos aplicáveis à operação. Ele não deve ser tratado como um modelo universal: regras podem variar por cliente, carga, seguradora, rota e contrato. A versão vigente precisa ser consultada quando a decisão depender de uma exigência específica.",
    "Um alerta não é automaticamente um sinistro. O papel do analista é verificar, classificar, agir no tempo adequado e manter rastreabilidade do que foi observado e decidido.",
  ],
  chapters: [
    {
      id: "ciclo-risco",
      title: "O ciclo do gerenciamento de risco",
      heading: "Identificar, avaliar, tratar e acompanhar",
      paragraphs: ["O ciclo começa na identificação do que pode dar errado e de quais consequências importam. Depois, avalia-se contexto e criticidade, aplicam-se controles e acompanha-se se o risco mudou.", "Em uma viagem, esse ciclo acontece continuamente. Uma rota que era normal pode se tornar crítica por um evento; um alerta técnico pode ser resolvido por confirmação; uma ausência de sinal pode exigir contingência."],
      whyItMatters: "Sem ciclo, a central reage a cada alarme isoladamente. Com ciclo, decisões consideram histórico, regra, contexto e consequência.",
      checklist: ["Identifique o evento e a fonte do dado.", "Compare com o planejado e com a regra vigente.", "Classifique criticidade e consequência possível.", "Aplique o procedimento previsto.", "Escalone quando necessário.", "Registre evidência, decisão e desfecho."],
    },
    {
      id: "pgr",
      title: "Como ler um PGR",
      heading: "Transforme regra em pergunta operacional",
      paragraphs: ["Ao consultar um PGR, procure critérios objetivos: quem está coberto, que condição ativa a regra, qual ação é exigida, em quanto tempo, quem autoriza exceção e como registrar.", "Evite memorizar apenas nomes de regras. Entenda a condição de aplicação. Isso reduz erros quando operações parecidas têm requisitos diferentes."],
      whyItMatters: "A maioria das falhas de interpretação acontece quando uma regra correta é aplicada no contexto errado ou quando uma exceção é tratada como padrão.",
      comparison: { title: "Regra operacional bem interpretada", left: { label: "Leitura correta", points: ["Condição", "Critério", "Ação", "Responsável", "Registro"] }, right: { label: "Leitura frágil", points: ["Memória", "Suposição", "Ação genérica", "Sem dono", "Sem evidência"] } },
    },
    {
      id: "alerta-ao-desfecho",
      title: "Do alerta ao desfecho",
      heading: "Trate sinais sem criar certezas falsas",
      paragraphs: ["Um alerta é um sinal de que algo merece atenção. Primeiro confirme se o dado é confiável e se há explicação operacional. Em seguida, verifique se a condição viola regra e se há sinais adicionais que aumentam criticidade.", "Na comunicação, use linguagem proporcional à evidência: 'desvio de rota identificado e em validação' é diferente de afirmar 'roubo em andamento' sem confirmação."],
      whyItMatters: "Comunicação exagerada gera pânico e decisões desnecessárias; comunicação tardia pode aumentar exposição. Precisão de linguagem faz parte do controle de risco.",
      faq: [{ q: "Todo alerta exige escalonamento?", a: "Não necessariamente. A regra de escalonamento depende do tipo de evento, criticidade e procedimento vigente. O importante é saber o gatilho e registrar o tratamento." }, { q: "Posso criar uma exceção para ganhar tempo?", a: "Somente se existir alçada e procedimento para isso. Urgência não substitui autorização." }],
    },
  ],
  summary: ["Gerenciamento de risco é processo, não apenas tecnologia de localização.", "PGR precisa ser interpretado no contexto da operação vigente.", "Alerta, não conformidade e sinistro não são sinônimos.", "Boa resposta combina evidência, tempo, escalonamento e registro."],
  finalChecklist: ["Consigo explicar a diferença entre rastrear e gerenciar risco.", "Sei como transformar uma regra do PGR em ação operacional.", "Consigo comunicar um evento sem exagerar a evidência.", "Sei quando preciso escalar em vez de improvisar."],
  mindMap: { root: "Gerenciamento de risco", branches: [{ label: "Antes", items: ["Planejamento", "PGR", "Controles"] }, { label: "Durante", items: ["Alertas", "Validação", "Tratamento"] }, { label: "Depois", items: ["Registro", "Desfecho", "Aprendizado"] }] },
  diagram: { title: "Tratamento de evento", chart: "flowchart TD\n  A[Alerta] --> B[Validar dado e contexto]\n  B --> C{Viola regra ou eleva risco?}\n  C -- Não --> D[Registrar e acompanhar]\n  C -- Sim --> E[Aplicar procedimento]\n  E --> F{Precisa escalonar?}\n  F -- Sim --> G[Escalar com evidências]\n  F -- Não --> H[Concluir tratamento]\n  G --> H\n  D --> H" },
});

export const academyModule04 = buildModuleV2({
  slug: "04-produtos-atlasgr",
  sources: ["Site oficial ATLASGR — Soluções", "Materiais internos de portfólio e apresentação comercial"],
  objectives: ["Relacionar cada solução a uma necessidade de negócio.", "Evitar apresentação de catálogo sem diagnóstico.", "Entender como soluções podem se complementar na jornada logística.", "Comunicar benefício sem prometer resultado não validado."],
  scenario: "Um cliente relata baixa visibilidade de viagens, retrabalho em cadastro de motoristas e dificuldade para tratar regras de risco. Em vez de apresentar todos os produtos, como você organiza a conversa para entender prioridade e desenhar uma solução coerente?",
  introHeading: "Produto é meio. O ponto de partida é o problema.",
  intro: ["O portfólio da ATLASGR combina soluções de gerenciamento de risco, software logístico, cadastro e consulta de motoristas e recursos de segurança/inteligência operacional. O nome do produto importa menos do que a dor que ele resolve e como se integra ao processo do cliente.", "Uma boa apresentação começa pelo fluxo atual: onde a informação nasce, onde ocorre retrabalho, que riscos preocupam, quais decisões estão lentas e que resultado o cliente quer melhorar.", "Evite promessas universais de redução de custo, risco ou prazo. Benefícios dependem de configuração, aderência do processo, qualidade de dados e contexto operacional."],
  chapters: [
    { id: "mapa-do-portfolio", title: "Mapa do portfólio", heading: "Quatro necessidades que aparecem com frequência", paragraphs: ["Gerenciamento de risco organiza controles e tratamento de eventos. Software logístico dá visibilidade e coordena informação da operação. Cadastro e consulta apoia decisões sobre motoristas e perfis. Recursos de segurança, telemetria e inteligência podem ampliar prevenção e análise conforme a solução contratada.", "A solução ideal pode envolver uma ou mais dessas frentes. O desenho depende do problema e das integrações existentes."], whyItMatters: "Quando o time parte do produto, tende a forçar encaixe. Quando parte da dor, consegue explicar por que uma função é relevante e quais dependências precisam ser verificadas.", checklist: ["Defina a dor em linguagem operacional.", "Descubra impacto e frequência.", "Mapeie sistemas e processos atuais.", "Associe capacidades que atacam a causa.", "Valide dependências e escopo antes de prometer." ] },
    { id: "valor", title: "Funcionalidade, benefício e evidência", heading: "Traduza tecnologia para resultado sem exagero", paragraphs: ["Funcionalidade é o que a solução faz. Benefício é a melhoria esperada no processo. Evidência é o que permite verificar se houve melhora. Por exemplo: alerta de tempo excedido é funcionalidade; reduzir demora para identificar permanência fora do esperado é benefício; tempo médio até identificação é uma métrica de evidência.", "Essa estrutura deixa a conversa mais concreta e evita frases vazias como 'revolucionar a logística'."], whyItMatters: "Clientes compram resultado e controle, não uma lista de telas. Vendedores e operadores precisam falar a mesma língua para evitar expectativa desalinhada.", comparison: { title: "Como apresentar uma solução", left: { label: "Orientado a valor", points: ["Problema", "Capacidade", "Mudança esperada", "Métrica", "Limites"] }, right: { label: "Orientado a catálogo", points: ["Nome do produto", "Lista de features", "Superlativos", "Promessa genérica", "Pouco contexto"] } } },
    { id: "combinacao", title: "Como soluções se complementam", heading: "Pense na jornada de dados e decisões", paragraphs: ["Cadastro confiável antes da viagem, regras de risco durante a execução e visibilidade operacional ao longo do trajeto fazem parte de momentos diferentes da mesma jornada. Quando as informações se conectam, a equipe reduz reconciliação manual e trabalha com mais contexto.", "Integração, porém, não deve ser presumida. Antes de afirmar que sistemas conversam, valide disponibilidade técnica, campos, frequência, segurança, responsabilidades e tratamento de falhas."], whyItMatters: "Uma combinação de produtos só gera valor quando o processo entre eles também funciona. Integração ruim pode apenas transferir o retrabalho de lugar.", faq: [{ q: "Devo sempre apresentar o portfólio completo?", a: "Não. Apresente o suficiente para resolver a necessidade identificada e mostrar a visão de evolução. Catálogo completo sem contexto aumenta complexidade da decisão." }, { q: "Posso afirmar que qualquer integração é possível?", a: "Não. Integrações dependem de sistemas, APIs, dados, segurança e escopo técnico. Valide antes de comprometer prazo ou comportamento." }] },
  ],
  summary: ["O problema do cliente vem antes do produto.", "Funcionalidade, benefício e evidência são coisas diferentes.", "Soluções podem se complementar ao longo da jornada logística.", "Integração e resultado precisam ser validados, não presumidos."],
  finalChecklist: ["Consigo relacionar cada frente de solução a uma dor.", "Sei transformar uma feature em benefício mensurável.", "Evito prometer integração ou resultado sem validação.", "Consigo apresentar uma combinação de soluções a partir do processo do cliente."],
  mindMap: { root: "Portfólio ATLASGR", branches: [{ label: "Risco", items: ["Regras", "Monitoramento", "Tratamento"] }, { label: "Logística", items: ["Visibilidade", "Planejamento", "Indicadores"] }, { label: "Cadastro", items: ["Motorista", "Dados", "Compliance"] }, { label: "Tecnologia", items: ["Integração", "Telemetria", "Automação"] }] },
  diagram: { title: "Da dor à solução", chart: "flowchart LR\n  A[Dor do cliente] --> B[Entender causa]\n  B --> C[Mapear processo e dados]\n  C --> D[Selecionar capacidade]\n  D --> E[Validar dependências]\n  E --> F[Definir resultado e métrica]" },
});

export const academyModule05 = buildModuleV2({
  slug: "05-software-logistico",
  sources: ["Site oficial ATLASGR — Inteligência Logística / Atlas Connect", "Materiais internos de treinamento do Atlas Connect"],
  objectives: ["Entender o Atlas Connect como ferramenta de visibilidade e coordenação operacional.", "Reconhecer a importância de dados confiáveis, estados de viagem e registro de exceções.", "Relacionar recursos como BI-Pátio e controle de temperatura a problemas operacionais concretos.", "Saber o que validar antes de agir com base em uma informação do sistema."],
  scenario: "O painel mostra um veículo há mais tempo que o esperado em um alvo e, ao mesmo tempo, existe um alerta de temperatura. O que você verifica primeiro para diferenciar atraso operacional, problema de dado e risco real à carga?",
  introHeading: "Software logístico é uma fonte de contexto para decidir",
  intro: ["O Atlas Connect centraliza informações da operação e amplia visibilidade desde a programação até a execução. Recursos públicos divulgados pela ATLASGR incluem acompanhamento de permanência em alvos e controle de temperatura, além de recursos associados à gestão da cadeia logística.", "A tela, por si só, não toma a decisão. O usuário precisa interpretar status, qualidade do dado, regra aplicável e consequência. Informação sem contexto pode gerar tanto atraso quanto falso alarme.", "A disciplina mais importante é manter o sistema coerente com a realidade: viagem correta, eventos tratados, responsáveis definidos e encerramento adequado."],
  chapters: [
    { id: "fonte-da-verdade", title: "Fonte da verdade operacional", heading: "Confie no sistema, mas valide o dado crítico", paragraphs: ["Um sistema central reduz controles paralelos e facilita histórico. Para isso funcionar, os dados precisam ser atualizados no fluxo correto. Quando a equipe passa a manter planilhas, mensagens e anotações como fontes concorrentes, surgem versões diferentes da mesma operação.", "Em uma decisão crítica, confirme origem e horário do dado. Posição antiga, sensor sem comunicação ou cadastro incompleto podem parecer um evento real."], whyItMatters: "Centralização melhora velocidade somente quando a equipe confia na qualidade e sabe identificar exceções de dados.", checklist: ["Confira viagem/veículo corretos.", "Confira horário da última atualização.", "Compare com planejamento e histórico.", "Valide regra aplicável.", "Registre tratamento no sistema apropriado." ] },
    { id: "alvos-tempo", title: "Alvos, permanência e fluxo", heading: "Tempo em alvo vira informação quando existe expectativa", paragraphs: ["BI-Pátio e controles de permanência ajudam a visualizar chegada, saída e tempo em determinados pontos. O dado ganha valor quando existe uma referência: janela esperada, tipo de parada, capacidade do pátio ou regra de operação.", "Tempo excedido não significa automaticamente falha do motorista. Pode indicar fila, indisponibilidade, processo de carga/descarga ou dado incorreto. O próximo passo é investigar a causa e o impacto."], whyItMatters: "Sem referência, um número de minutos é apenas um número. Com contexto, ele pode orientar ação e melhoria de processo.", comparison: { title: "Ler um indicador de permanência", left: { label: "Leitura útil", points: ["Tempo atual", "Tempo esperado", "Motivo", "Impacto", "Ação"] }, right: { label: "Leitura superficial", points: ["Tempo atual", "Suposição", "Culpa", "Sem contexto", "Sem ação"] } } },
    { id: "temperatura-alertas", title: "Temperatura e exceções", heading: "Alerta precisa de contexto de produto e sensor", paragraphs: ["O controle de temperatura permite acompanhar a condição informada pelo sensor e gerar alertas quando o valor sai da faixa configurada. Antes de decidir, confirme faixa correta, duração da variação, status do sensor e natureza da carga.", "Picos curtos podem ter explicação operacional; desvios persistentes podem exigir ação rápida. A regra específica da operação é quem define o tratamento."], whyItMatters: "Decisões de carga sensível precisam distinguir variação real, falha de sensor e configuração inadequada. Cada minuto pode importar, mas agir no dado errado também tem custo.", faq: [{ q: "Todo valor fora da faixa significa perda da carga?", a: "Não. A interpretação depende da faixa definida, duração, tipo de produto, sensor e procedimento do cliente. O alerta indica necessidade de avaliação, não conclusão automática." }, { q: "Por que evitar controles paralelos?", a: "Porque eles criam versões concorrentes da operação, dificultam auditoria e aumentam risco de informação desatualizada." }] },
  ],
  summary: ["Atlas Connect apoia visibilidade e coordenação da operação.", "Qualidade do dado é pré-requisito para decisão.", "Indicadores precisam de referência e contexto.", "Alertas de temperatura ou permanência devem ser tratados conforme regra específica da operação."],
  finalChecklist: ["Sei validar a atualidade de um dado antes de agir.", "Entendo como permanência em alvo pode revelar gargalo.", "Sei quais perguntas fazer diante de alerta de temperatura.", "Evito criar uma fonte paralela quando a informação deve estar centralizada."],
  mindMap: { root: "Atlas Connect", branches: [{ label: "Planejamento", items: ["Viagem", "Alvos", "Regras"] }, { label: "Execução", items: ["Visibilidade", "Alertas", "Tratamento"] }, { label: "Análise", items: ["Permanência", "Temperatura", "Indicadores"] }] },
  diagram: { title: "Informação até a ação", chart: "flowchart LR\n  A[Dado da operação] --> B[Atlas Connect]\n  B --> C[Contexto e regra]\n  C --> D{Existe exceção?}\n  D -- Não --> E[Acompanhar]\n  D -- Sim --> F[Tratar e registrar]\n  F --> G[Aprendizado e indicador]" },
});
