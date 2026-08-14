import { buildModuleV2 } from "./buildModule";

export const academyModule06 = buildModuleV2({
  slug: "06-atlas-profile",
  sources: [
    "Site oficial ATLASGR — Atlas Profile / Cadastro e Consulta de Motoristas",
    "Política de Privacidade ATLASGR",
    "Materiais internos de cadastro e consulta",
  ],
  objectives: [
    "Entender o Atlas Profile como apoio a decisões de cadastro e análise de perfil profissional.",
    "Separar dado consultado, critério de análise e decisão final.",
    "Reconhecer cuidados de LGPD, necessidade e acesso mínimo.",
    "Saber comunicar inconsistências sem expor dados além do necessário.",
  ],
  scenario: "Um cadastro apresenta documentos aparentemente regulares, mas também contém sinais que exigem análise adicional. Um colega pede que você apenas 'libere para não atrasar a viagem'. Como equilibrar agilidade, evidência, privacidade e alçada?",
  introHeading: "Cadastro seguro exige método, não julgamento pessoal",
  intro: [
    "O Atlas Profile é apresentado pela ATLASGR como uma solução digital de cadastro e consulta de motoristas, com análise de informações de diferentes fontes e foco em segurança, agilidade e conformidade.",
    "A ferramenta apoia a decisão. Ela não autoriza conclusões baseadas em opinião, aparência ou suposição. O analista precisa entender quais dados são relevantes, qual regra se aplica e quem tem alçada para decidir.",
    "Dados pessoais devem ser tratados somente para finalidade legítima e com acesso compatível com a função. Mesmo quando uma informação está disponível no sistema, isso não significa que ela possa ser compartilhada livremente.",
  ],
  media: {
    youtubeId: "_4MuQMIiSTY",
    title: "Atlas Profile — Cadastro e Consulta de Perfil Profissional",
    caption: "Vídeo divulgado na página oficial da solução. Assista identificando quais dados apoiam a decisão e quais cuidados de privacidade permanecem obrigatórios.",
    transcript: [
      "O vídeo apresenta o Atlas Profile como uma solução digital para apoiar o cadastro e a consulta de motoristas profissionais.",
      "Durante a visualização, diferencie três camadas: dado coletado, análise produzida pela solução e decisão operacional tomada pela empresa. Essa separação evita tratar um resultado automatizado como decisão incontestável.",
    ],
    source: "Site oficial ATLASGR — página Atlas Profile",
  },
  chapters: [
    {
      id: "dado-analise-decisao",
      title: "Dado, análise e decisão",
      heading: "Três etapas que não podem ser confundidas",
      paragraphs: [
        "Um dado descreve algo consultado ou informado. A análise interpreta esse dado dentro de critérios definidos. A decisão determina o que fazer. Se essas etapas se misturam, fica difícil explicar por que um cadastro foi aprovado, pendenciado ou encaminhado para revisão.",
        "Sempre que uma informação parecer inconsistente, confirme fonte, atualidade e relação com o critério vigente antes de concluir. O objetivo é reduzir risco sem gerar bloqueios por ruído ou dado fora de contexto.",
      ],
      whyItMatters: "Decisões rastreáveis são mais fáceis de revisar, explicar e corrigir. Isso protege operação, pessoa analisada e a própria empresa.",
      checklist: [
        "Confirme identidade e dados essenciais do cadastro.",
        "Verifique fonte e atualidade da informação relevante.",
        "Aplique somente critérios aprovados para a operação.",
        "Encaminhe divergências para revisão quando necessário.",
        "Registre o motivo operacional da decisão sem expor informação excessiva.",
      ],
    },
    {
      id: "privacidade",
      title: "Privacidade e necessidade",
      heading: "Ter acesso não é o mesmo que poder compartilhar",
      paragraphs: [
        "O tratamento de dados precisa respeitar finalidade, necessidade e segurança. Uma consulta feita para análise cadastral não transforma todas as informações visualizadas em conteúdo que pode circular por grupos, mensagens pessoais ou documentos sem controle.",
        "Ao comunicar resultado, compartilhe o mínimo necessário para a ação seguinte. Quando houver dúvida sobre base legal, retenção, compartilhamento ou direito do titular, envolva a área responsável por privacidade/compliance.",
      ],
      whyItMatters: "Exposição desnecessária de dados cria risco jurídico, reputacional e de segurança mesmo quando a consulta original era legítima.",
      comparison: {
        title: "Comunicação segura de uma pendência",
        left: { label: "Necessário", points: ["Status da análise", "Ação esperada", "Responsável", "Prazo", "Canal corporativo"] },
        right: { label: "Excesso", points: ["Detalhes irrelevantes", "Print de tela", "Dados sensíveis", "Grupo amplo", "Canal pessoal"] },
      },
    },
    {
      id: "excecoes",
      title: "Quando a pressa vira risco",
      heading: "Exceção precisa de alçada e rastreabilidade",
      paragraphs: [
        "Uma viagem urgente pode aumentar pressão por liberação. Isso não muda automaticamente o critério de segurança. Se existir procedimento de exceção, siga-o; se não existir ou se a situação estiver fora da sua alçada, escale.",
        "A melhor escalada é curta e útil: descreva a divergência, impacto na viagem, o que já foi validado e qual decisão você recomenda. Assim, a liderança decide com contexto em vez de reconstruir o caso do zero.",
      ],
      whyItMatters: "Atalhos sem registro transformam uma urgência pontual em risco sistêmico e dificultam auditoria posterior.",
      faq: [
        { q: "Um score automatizado deve decidir sozinho?", a: "Não deve ser tratado como autoridade absoluta. O uso correto depende do processo definido, dos dados disponíveis e da supervisão adequada para decisões sensíveis." },
        { q: "Posso enviar um print para acelerar a análise?", a: "Somente se o canal, a finalidade e o nível de acesso forem adequados. Prefira mecanismos corporativos que preservem controle e rastreabilidade." },
      ],
    },
  ],
  summary: [
    "Atlas Profile apoia decisões de cadastro e consulta, mas não substitui critério e alçada.",
    "Dado, análise e decisão devem permanecer separados e rastreáveis.",
    "Privacidade exige finalidade, necessidade e compartilhamento mínimo.",
    "Urgência não elimina controles; exceção precisa de autorização e registro.",
  ],
  finalChecklist: [
    "Consigo explicar a diferença entre dado, análise e decisão.",
    "Sei comunicar uma pendência sem expor informação desnecessária.",
    "Sei quando uma inconsistência precisa ser revisada.",
    "Não libero exceção apenas porque a operação está com pressa.",
  ],
  mindMap: {
    root: "Atlas Profile",
    branches: [
      { label: "Entrada", items: ["Identidade", "Dados", "Fontes"] },
      { label: "Análise", items: ["Critérios", "Evidência", "Revisão"] },
      { label: "Decisão", items: ["Alçada", "Privacidade", "Registro"] },
    ],
  },
  diagram: {
    title: "Fluxo de análise cadastral",
    chart: "flowchart LR\n  A[Cadastro] --> B[Validar dados]\n  B --> C[Consultar fontes]\n  C --> D[Aplicar critérios]\n  D --> E{Há divergência?}\n  E -- Não --> F[Seguir fluxo]\n  E -- Sim --> G[Revisar / escalar]\n  G --> H[Decisão registrada]\n  F --> H",
  },
});

export const academyModule07 = buildModuleV2({
  slug: "07-integracoes",
  sources: ["Materiais internos de integrações", "Site oficial ATLASGR — Inteligência Logística", "Documentação técnica aprovada para cada integração"],
  objectives: ["Entender integração como fluxo de dados entre sistemas.", "Distinguir origem, destino, frequência, autenticação e tratamento de falha.", "Evitar prometer integração sem validação técnica.", "Reconhecer a importância de uma fonte da verdade e de observabilidade."],
  scenario: "O cliente quer integrar TMS, Atlas Connect e rastreadores de fabricantes diferentes. Ele pergunta: 'vocês integram tudo, certo?'. Como responder de forma comercialmente útil sem transformar hipótese em compromisso técnico?",
  introHeading: "Integração boa é invisível porque o dado chega certo",
  intro: [
    "Integração é a troca controlada de informações entre sistemas. Ela pode eliminar digitação duplicada, acelerar atualização e tornar a operação mais consistente, mas somente quando o desenho define claramente quem envia, quem recebe e o que acontece quando algo falha.",
    "API é um meio, não uma garantia. Dois sistemas podem possuir APIs e ainda assim exigir análise de autenticação, campos, limites, frequência, formato, regras de negócio e responsabilidade por suporte.",
    "Nunca prometa prazo ou escopo técnico apenas com base no nome do sistema. Transforme a solicitação em requisitos verificáveis.",
  ],
  chapters: [
    {
      id: "contrato-do-dado",
      title: "O contrato do dado",
      heading: "Antes da tecnologia, defina o que precisa circular",
      paragraphs: [
        "Toda integração deveria responder: qual evento dispara o envio, quais campos são obrigatórios, qual sistema é a fonte oficial, como identificar o registro, como tratar duplicidade e como sinalizar erro.",
        "Sem essas respostas, a integração pode tecnicamente transmitir dados e mesmo assim produzir uma operação inconsistente.",
      ],
      whyItMatters: "Falhas de integração raramente são apenas 'API fora do ar'. Muitos problemas vêm de significado diferente para o mesmo campo ou de ausência de regra para conflito.",
      checklist: ["Origem do dado", "Destino", "Identificador único", "Campos obrigatórios", "Frequência", "Autenticação", "Retentativa", "Responsável por erro"],
    },
    {
      id: "falhas",
      title: "Integração também precisa falhar bem",
      heading: "Erro silencioso é mais perigoso que erro visível",
      paragraphs: [
        "Se uma integração falha, a operação precisa saber. Logs, retorno de status, fila de retentativa e alerta para exceções evitam que dados parem de chegar sem ninguém perceber.",
        "Também é importante evitar tempestade de retentativas e duplicação. Um bom desenho considera indisponibilidade temporária e reconciliação posterior.",
      ],
      whyItMatters: "Uma integração silenciosamente quebrada pode deixar a equipe operando com dados antigos enquanto acredita estar vendo tempo real.",
      comparison: { title: "Integração resiliente", left: { label: "Com controle", points: ["Status", "Logs", "Retentativa", "Deduplicação", "Alerta"] }, right: { label: "Frágil", points: ["Envio cego", "Sem log", "Sem retorno", "Duplica", "Falha silenciosa"] } },
    },
    {
      id: "descoberta-tecnica",
      title: "Como fazer descoberta técnica",
      heading: "Converta 'integra?' em perguntas respondíveis",
      paragraphs: [
        "Pergunte qual sistema, versão, objetivo, dado, direção da integração, volume aproximado, necessidade de tempo real, mecanismo de autenticação e ambiente de teste. Depois envolva a área técnica para validar.",
        "Uma resposta profissional pode ser: 'Temos experiência de integração, mas preciso validar o escopo específico e a disponibilidade técnica desse sistema antes de confirmar prazo e comportamento'. Isso preserva confiança sem prometer no escuro.",
      ],
      whyItMatters: "Boa descoberta reduz retrabalho de proposta, implantação e suporte. Ela também protege relação comercial de expectativas que nunca foram tecnicamente confirmadas.",
      faq: [
        { q: "API significa integração em tempo real?", a: "Não necessariamente. A frequência depende da arquitetura, limites, eventos e requisitos do projeto." },
        { q: "Quem deve ser a fonte da verdade?", a: "Depende do dado e do processo. A decisão precisa ser explícita para evitar duas versões concorrentes do mesmo registro." },
      ],
    },
  ],
  summary: ["Integração é fluxo de dados com regras, não apenas conexão técnica.", "Fonte da verdade e significado dos campos precisam ser explícitos.", "Falha deve ser detectável, recuperável e rastreável.", "Escopo técnico só deve ser confirmado após descoberta e validação."],
  finalChecklist: ["Consigo descrever origem, destino e gatilho de uma integração.", "Sei o que perguntar antes de confirmar viabilidade.", "Entendo por que logs e retentativas importam.", "Não prometo integração apenas pelo nome do sistema."],
  mindMap: { root: "Integração", branches: [{ label: "Contrato", items: ["Campos", "IDs", "Regras"] }, { label: "Transporte", items: ["API", "Autenticação", "Frequência"] }, { label: "Confiabilidade", items: ["Logs", "Retentativa", "Alerta"] }] },
  diagram: { title: "Fluxo de integração", chart: "flowchart LR\n  A[Sistema origem] --> B[Validação]\n  B --> C[Integração / API]\n  C --> D[Sistema destino]\n  C --> E[Logs e status]\n  E --> F{Falhou?}\n  F -- Sim --> G[Retentar / alertar]\n  F -- Não --> H[Confirmar processamento]" },
});

export const academyModule08 = buildModuleV2({
  slug: "08-clientes",
  sources: ["Site oficial ATLASGR — Nossos Clientes", "Materiais internos de ICP e segmentação", "Histórico comercial aprovado para treinamento"],
  objectives: ["Diferenciar perfis de cliente por modelo operacional e necessidade.", "Evitar assumir dor apenas pelo segmento.", "Construir hipóteses de contexto e validá-las com perguntas.", "Relacionar impacto operacional a prioridade de negócio."],
  scenario: "Dois prospects são grandes empresas de logística, mas um é embarcador com transportadoras terceirizadas e o outro opera frota própria. O que muda na descoberta, nas dores prováveis e nos critérios de decisão?",
  introHeading: "Conhecer o cliente é entender como a operação dele funciona",
  intro: [
    "Segmento e tamanho ajudam a criar hipótese, mas não substituem descoberta. Embarcadores, transportadores e operações híbridas podem ter dores muito diferentes mesmo quando movimentam volumes semelhantes.",
    "Procure entender fluxo, responsabilidade, sistemas, nível de terceirização, criticidade de carga, distribuição geográfica, indicadores e onde a operação perde tempo, visibilidade ou controle.",
    "Uma hipótese comercial é útil quando orienta uma pergunta. Ela vira problema quando é apresentada como verdade antes de o cliente confirmar.",
  ],
  chapters: [
    {
      id: "perfis",
      title: "Perfis operacionais",
      heading: "Embarcador e transportador olham para o mesmo transporte de ângulos diferentes",
      paragraphs: [
        "O embarcador tende a olhar para nível de serviço, visibilidade da mercadoria, custo total e performance de parceiros. A transportadora tende a equilibrar uso da frota, motorista, produtividade, cumprimento de janela, segurança e margem da operação. Isso é uma tendência de análise, não uma regra absoluta.",
        "Em ambos os casos, pergunte como o processo funciona hoje e quais indicadores são usados. A resposta real vale mais do que qualquer persona genérica.",
      ],
      whyItMatters: "Uma apresentação que ignora o modelo operacional perde relevância rapidamente. O cliente percebe quando a conversa poderia servir para qualquer empresa.",
      comparison: { title: "Pontos de investigação", left: { label: "Embarcador", points: ["Visibilidade ponta a ponta", "Performance de transportadoras", "Janela de entrega", "Risco da mercadoria"] }, right: { label: "Transportador", points: ["Frota e motorista", "Produtividade", "Aderência a rotas", "Custos e exceções"] } },
    },
    {
      id: "dor-impacto",
      title: "Da dor ao impacto",
      heading: "Problema sem impacto raramente vira prioridade",
      paragraphs: [
        "'Falta de visibilidade' ainda é uma frase ampla. Pergunte o que acontece quando a informação não chega: cliente liga mais? equipe cria planilha? entrega atrasa? risco demora a ser tratado? indicador fica errado?",
        "Impacto pode ser financeiro, operacional, de segurança, de experiência ou compliance. Quantificar quando possível ajuda a priorizar, mas não invente número se o cliente não tiver dado confiável.",
      ],
      whyItMatters: "Entender impacto separa curiosidade de prioridade e ajuda a desenhar uma proposta que responda ao negócio.",
      checklist: ["Qual problema acontece?", "Com que frequência?", "Quem é afetado?", "Qual consequência?", "Como medem hoje?", "O que já tentaram?"],
    },
    {
      id: "pesquisa",
      title: "Pesquisa antes da conversa",
      heading: "Chegue com contexto, não com um roteiro fechado",
      paragraphs: [
        "Antes de abordar, pesquise atividade da empresa, operação aparente, geografia, notícias relevantes e sinais públicos que ajudem a formular perguntas. Não use informação pessoal ou sensível sem necessidade.",
        "Durante a conversa, trate a pesquisa como hipótese: 'Vi que vocês operam X; isso também impacta Y?' é melhor do que afirmar que você já conhece o problema do cliente.",
      ],
      whyItMatters: "Pesquisa aumenta relevância quando abre espaço para descoberta. Quando vira demonstração de conhecimento, pode reduzir escuta.",
      faq: [{ q: "ICP é uma lista fixa de empresas?", a: "Não. ICP descreve características que aumentam aderência. A qualificação real ainda depende de contexto, problema, capacidade de compra e prioridade." }, { q: "Posso usar qualquer dado público na prospecção?", a: "Use somente o necessário e apropriado ao objetivo comercial, respeitando políticas internas e privacidade." }],
    },
  ],
  summary: ["Perfil de cliente é ponto de partida para perguntas, não conclusão.", "Dor precisa ser conectada a impacto.", "Pesquisa boa aumenta relevância e melhora descoberta.", "A operação real do cliente vale mais do que uma persona genérica."],
  finalChecklist: ["Consigo diferenciar perguntas para embarcador e transportadora.", "Consigo aprofundar uma dor até seu impacto.", "Uso pesquisa para formular hipóteses, não para presumir.", "Sei quais dados ainda preciso descobrir antes de recomendar solução."],
  mindMap: { root: "Cliente", branches: [{ label: "Perfil", items: ["Modelo operacional", "Segmento", "Geografia"] }, { label: "Dor", items: ["Problema", "Frequência", "Impacto"] }, { label: "Decisão", items: ["Prioridade", "Critério", "Próximo passo"] }] },
  diagram: { title: "Da pesquisa ao diagnóstico", chart: "flowchart LR\n  A[Pesquisa] --> B[Hipótese]\n  B --> C[Pergunta]\n  C --> D[Resposta do cliente]\n  D --> E[Impacto]\n  E --> F[Prioridade]\n  F --> G[Solução adequada]" },
});

export const academyModule09 = buildModuleV2({
  slug: "09-processo-comercial",
  sources: ["Materiais internos de processo comercial e ICP", "Playbooks e critérios do funil comercial aprovados", "Conteúdos institucionais das soluções ATLASGR"],
  objectives: ["Conduzir abordagem curta e relevante.", "Fazer descoberta que conecta situação, problema, impacto e prioridade.", "Tratar objeção sem transformar conversa em disputa.", "Registrar próxima ação e contexto no CRM de forma útil para continuidade."],
  scenario: "Um diretor de logística atende e diz: 'Tenho 30 segundos. Já tenho gerenciadora de risco'. Você precisa decidir se há espaço para uma conversa sem insistir, despejar produto ou desperdiçar o tempo do decisor.",
  introHeading: "Venda consultiva começa pela capacidade de ser relevante rápido",
  intro: [
    "Em venda B2B, o objetivo da primeira interação raramente é explicar tudo. É descobrir se existe um problema relevante, se vale continuar a conversa e qual próximo passo faz sentido.",
    "A melhor abordagem conecta contexto do prospect a uma hipótese curta e pede permissão para uma pergunta. Isso demonstra preparação sem transformar o contato em apresentação unilateral.",
    "CRM é memória compartilhada do processo. Se o registro não explica situação, dor, objeção, próximos passos e responsabilidade, o time perde contexto e o cliente precisa repetir a própria história.",
  ],
  chapters: [
    {
      id: "abordagem",
      title: "Abordagem que respeita o tempo",
      heading: "Contexto, hipótese e pergunta",
      paragraphs: [
        "Uma abertura eficiente pode ter três peças: motivo específico do contato, hipótese sobre uma situação que pode ser relevante e uma pergunta simples. Evite começar com longa apresentação institucional.",
        "Se o decisor disser que está sem tempo, adapte imediatamente. A capacidade de sintetizar é parte da venda. Uma pergunta precisa é melhor que cinco perguntas medianas.",
      ],
      whyItMatters: "Decisores operacionais lidam com interrupções constantes. Clareza e concisão aumentam a chance de obter atenção suficiente para qualificar a oportunidade.",
      comparison: { title: "Primeiros 30 segundos", left: { label: "Relevante", points: ["Motivo específico", "Hipótese curta", "Uma pergunta", "Escuta", "Próximo passo"] }, right: { label: "Genérico", points: ["História da empresa", "Lista de produtos", "Superlativos", "Muitas perguntas", "Pedido de reunião sem contexto"] } },
    },
    {
      id: "descoberta",
      title: "Descoberta que cria entendimento",
      heading: "Não colecione respostas; construa causa e impacto",
      paragraphs: [
        "Comece entendendo como o processo funciona hoje. Depois explore onde existem exceções, retrabalho, risco ou perda de visibilidade. Aprofunde o impacto e descubra por que resolver agora importa.",
        "Evite interrogatório. Explique por que está perguntando, reflita o que ouviu e confirme entendimento antes de avançar.",
      ],
      whyItMatters: "Uma oportunidade qualificada precisa de problema real e prioridade. Sem isso, proposta vira aposta e forecast vira desejo.",
      checklist: ["Situação atual", "Problema", "Impacto", "Prioridade", "Critério de decisão", "Stakeholders", "Próximo passo"],
    },
    {
      id: "objecoes",
      title: "Objeção é informação",
      heading: "Entenda antes de rebater",
      paragraphs: [
        "'Já tenho fornecedor', 'está caro', 'não é prioridade' e 'manda material' podem significar coisas diferentes. Primeiro reconheça e investigue. Uma resposta pronta sem entender a raiz pode reforçar resistência.",
        "Nem toda objeção deve ser vencida. Às vezes a melhor decisão é encerrar bem, registrar o motivo e combinar momento de retorno. Qualificação também é saber quando não avançar.",
      ],
      whyItMatters: "Forçar avanço em oportunidade sem aderência consome tempo do vendedor e polui o pipeline, reduzindo previsibilidade.",
      faq: [{ q: "Se o prospect já tem fornecedor, devo insistir?", a: "Descubra se existe algum gap relevante e se há abertura para comparação. Se não houver dor ou prioridade, registre e não transforme resistência em perseguição." }, { q: "O que registrar no CRM?", a: "Contexto suficiente para que outra pessoa entenda o estágio: problema, impacto, objeções, participantes, compromisso assumido e próxima atividade com data." }],
    },
  ],
  summary: ["Abordagem eficaz é curta, específica e orientada a uma pergunta útil.", "Descoberta conecta situação, problema, impacto e prioridade.", "Objeção precisa ser entendida antes de respondida.", "CRM deve preservar contexto e próxima ação, não apenas status."],
  finalChecklist: ["Consigo abrir uma conversa em 30 segundos.", "Consigo aprofundar problema sem fazer interrogatório.", "Sei diferenciar objeção real de falta de prioridade.", "Meu registro de CRM permite continuidade por outra pessoa."],
  mindMap: { root: "Processo comercial", branches: [{ label: "Abrir", items: ["Contexto", "Hipótese", "Pergunta"] }, { label: "Descobrir", items: ["Dor", "Impacto", "Prioridade"] }, { label: "Avançar", items: ["Stakeholders", "Próximo passo", "CRM"] }] },
  diagram: { title: "Fluxo de uma conversa consultiva", chart: "flowchart LR\n  A[Pesquisa] --> B[Abordagem curta]\n  B --> C[Descoberta]\n  C --> D{Existe problema e prioridade?}\n  D -- Sim --> E[Próximo passo]\n  D -- Não --> F[Nutrir ou encerrar]\n  E --> G[Registrar no CRM]\n  F --> G" },
});

export const academyModule10 = buildModuleV2({
  slug: "10-termos-tecnicos",
  sources: ["Glossário técnico da Academia ATLASGR", "Materiais internos de operação e produtos", "Documentações técnicas utilizadas nas trilhas"],
  objectives: ["Entender termos técnicos pelo efeito que produzem na operação.", "Diferenciar conceitos que costumam ser confundidos.", "Traduzir jargão para linguagem clara sem perder precisão.", "Saber quando confirmar definição antes de agir."],
  scenario: "Um cliente recebe uma atualização com várias siglas e responde: 'não entendi, o veículo está seguro ou não?'. Como traduzir o estado operacional sem perder a precisão técnica necessária para quem vai executar a ação?",
  introHeading: "Jargão só é útil quando reduz ambiguidade",
  intro: [
    "Termos técnicos existem para dar precisão. O problema começa quando a equipe usa uma sigla como se todos atribuíssem a ela o mesmo significado.",
    "Neste módulo, o foco não é decorar centenas de definições. É aprender a reconhecer famílias de termos: logística, rastreamento, risco, sistemas, dados, segurança e indicadores. Use o glossário do portal para aprofundar quando precisar.",
    "Ao falar com áreas não técnicas ou clientes, traduza o termo para consequência prática. Ao executar um procedimento, preserve o termo oficial quando ele tiver significado específico na regra.",
  ],
  chapters: [
    {
      id: "familias",
      title: "Organize por famílias",
      heading: "Aprender por relação é melhor que decorar lista",
      paragraphs: [
        "Rastreamento, telemetria e monitoramento se relacionam, mas não são idênticos. API, TMS, ERP e integração pertencem ao contexto de sistemas e dados. PGR, não conformidade, evento e sinistro pertencem ao contexto de risco e procedimento.",
        "Quando você encontra um termo novo, pergunte: a que processo ele pertence, que informação representa e que decisão muda? Essa estrutura facilita retenção.",
      ],
      whyItMatters: "Termos sem contexto são esquecidos rápido. Relacionar palavra, processo e decisão ajuda o conhecimento a sobreviver fora da prova.",
      checklist: ["Definição simples", "Processo em que aparece", "Exemplo", "Decisão relacionada", "Termos parecidos que não devem ser confundidos"],
    },
    {
      id: "traducao",
      title: "Tradução entre áreas",
      heading: "Fale com precisão em dois níveis",
      paragraphs: [
        "Para uma equipe técnica, 'latência da integração' pode ser a expressão correta. Para alguém de negócio, talvez seja necessário explicar: 'o dado está chegando com atraso de alguns minutos, então o painel pode não representar o estado atual'.",
        "Tradução não significa infantilizar. Significa adaptar a linguagem ao objetivo da pessoa que recebe a informação.",
      ],
      whyItMatters: "Comunicação técnica mal traduzida cria erro de decisão mesmo quando o dado original estava correto.",
      comparison: { title: "Mesma informação, públicos diferentes", left: { label: "Linguagem técnica", points: ["Latência", "Webhook", "Telemetria", "Não conformidade"] }, right: { label: "Linguagem operacional", points: ["Dado está atrasado", "Sistema envia ao acontecer", "Dados do veículo/condução", "Regra não cumprida"] } },
    },
    {
      id: "nao-sei",
      title: "Quando você não conhece o termo",
      heading: "Confirmar é melhor que improvisar definição",
      paragraphs: [
        "Se um termo desconhecido aparece em uma regra, não deduza apenas pelo nome. Consulte glossário, documentação ou pessoa responsável. Em ambientes técnicos, siglas iguais podem significar coisas diferentes dependendo do sistema.",
        "Na comunicação externa, você pode dizer que vai confirmar a definição específica antes de orientar uma ação. Isso preserva precisão e confiança.",
      ],
      whyItMatters: "Definições improvisadas se espalham rápido e podem virar processo informal incorreto.",
      faq: [{ q: "Preciso decorar todo o glossário?", a: "Não. Você precisa dominar os termos recorrentes da sua função e saber encontrar rapidamente os demais." }, { q: "Posso substituir um termo oficial por uma palavra mais simples?", a: "Na explicação, sim. No registro ou procedimento, preserve o termo oficial quando ele tiver significado operacional específico." }],
    },
  ],
  summary: ["Termo técnico deve reduzir ambiguidade, não aumentar distância.", "Aprenda por famílias, processos e decisões.", "Adapte linguagem ao público sem perder precisão.", "Quando não souber, confirme na fonte em vez de improvisar."],
  finalChecklist: ["Consigo explicar cinco termos importantes sem usar outra sigla.", "Sei diferenciar rastreamento, monitoramento e telemetria em linguagem simples.", "Sei traduzir uma informação técnica para impacto operacional.", "Uso o glossário quando a definição específica importa para a ação."],
  mindMap: { root: "Linguagem técnica", branches: [{ label: "Logística", items: ["TMS", "ERP", "Alvo"] }, { label: "Risco", items: ["PGR", "Evento", "Não conformidade"] }, { label: "Tecnologia", items: ["API", "Telemetria", "Latência"] }] },
  diagram: { title: "Do termo à compreensão", chart: "flowchart LR\n  A[Termo] --> B[Definição]\n  B --> C[Processo]\n  C --> D[Exemplo]\n  D --> E[Impacto]\n  E --> F[Decisão]" },
});
