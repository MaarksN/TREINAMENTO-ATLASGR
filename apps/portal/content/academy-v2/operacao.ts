import { buildModuleV2 } from "./buildModule";

export const academyModule11 = buildModuleV2({
  slug: "11-operacao",
  sources: ["Materiais internos de operação e monitoramento", "Procedimentos operacionais vigentes", "PGRs e instruções específicas de cada cliente"],
  objectives: ["Priorizar eventos por criticidade e consequência, não apenas por ordem de chegada.", "Tratar alertas com evidência, contexto, procedimento e registro.", "Comunicar situação operacional de forma curta e verificável.", "Encerrar o ciclo garantindo responsável, desfecho e próxima ação."],
  scenario: "Três alertas chegam quase ao mesmo tempo: um atraso em alvo, uma perda de comunicação e um desvio de rota. A fila não pode ser tratada apenas por ordem cronológica. Como identificar o que exige atenção primeiro e como evitar abandonar os demais eventos?",
  introHeading: "Operação boa transforma alerta em ação controlada",
  intro: [
    "Uma central operacional não é medida pela quantidade de telas abertas. Ela é medida pela qualidade com que identifica prioridade, executa procedimento, comunica e registra o desfecho.",
    "Nem todo alerta tem a mesma criticidade. Prioridade combina consequência possível, evidência disponível, regra da operação e sensibilidade ao tempo. A fila precisa ser reavaliada quando novas informações aparecem.",
    "O procedimento vigente é a referência para execução. Este módulo ensina raciocínio e disciplina operacional; ele não substitui PGR, POP, contrato ou instrução específica do cliente.",
  ],
  chapters: [
    {
      id: "prioridade",
      title: "Prioridade operacional",
      heading: "Urgente não é quem chegou primeiro",
      paragraphs: [
        "Para priorizar, pergunte: qual consequência pode ocorrer, quanto tempo existe para agir, a evidência é confiável e existe algum controle de contingência já ativo? Um evento de alto impacto e rápida evolução tende a exigir atenção antes de uma pendência administrativa antiga.",
        "Priorizar um evento não significa esquecer os demais. Registre a fila, defina responsável e use mecanismos de retorno para que eventos de menor criticidade continuem acompanhados.",
      ],
      whyItMatters: "Fila por ordem de chegada é simples, mas pode atrasar justamente o evento em que alguns minutos fazem diferença.",
      checklist: ["Consequência possível", "Sensibilidade ao tempo", "Confiabilidade do dado", "Regra vigente", "Contingência disponível", "Responsável pelos demais eventos"],
    },
    {
      id: "tratamento",
      title: "Tratamento do evento",
      heading: "Observe, confirme, aja e registre",
      paragraphs: [
        "Comece identificando o alerta, veículo/viagem, horário e fonte. Compare com rota, janela e condição planejada. Em seguida, execute a ação prevista e registre cada contato ou decisão que altera o estado do caso.",
        "Evite duas armadilhas: agir cedo demais com base em dado incompleto e esperar certeza absoluta quando o procedimento exige ação preventiva. A regra operacional ajuda a equilibrar esses extremos.",
      ],
      whyItMatters: "Rastreabilidade permite continuidade entre turnos, revisão de incidente e melhoria de procedimento.",
      comparison: { title: "Tratamento disciplinado", left: { label: "Com contexto", points: ["Dado validado", "Regra consultada", "Ação definida", "Responsável", "Registro"] }, right: { label: "Reativo", points: ["Alarme", "Suposição", "Contato aleatório", "Sem dono", "Sem encerramento"] } },
    },
    {
      id: "comunicacao",
      title: "Comunicação em situação crítica",
      heading: "Fale o necessário para a próxima decisão",
      paragraphs: [
        "Uma atualização operacional útil contém estado atual, evidência principal, ação em andamento e próximo marco. Evite textos longos que escondem a informação crítica e evite afirmações definitivas quando o fato ainda está em validação.",
        "Quando a situação exige escalonamento, inclua recomendação. 'Veículo sem atualização há X minutos; última posição em Y; procedimento Z acionado; recomendo contato/contingência conforme regra' é mais acionável do que 'estamos verificando'.",
      ],
      whyItMatters: "Em incidentes, clareza reduz tempo de interpretação e ajuda liderança, cliente e áreas de apoio a agir sobre a mesma realidade.",
      faq: [{ q: "Preciso esperar confirmação total para comunicar?", a: "Não quando o procedimento exige aviso antecipado. Comunique o que está confirmado e deixe explícito o que ainda está em validação." }, { q: "Quando um caso termina?", a: "Quando a condição foi tratada, o desfecho foi registrado e não existe próxima ação pendente sem responsável." }],
    },
  ],
  summary: ["Prioridade combina impacto, tempo, evidência e regra.", "Tratamento precisa de contexto, procedimento e registro.", "Comunicação deve separar confirmado de ainda em validação.", "Caso só termina quando o desfecho e a próxima responsabilidade estão claros."],
  finalChecklist: ["Consigo priorizar três eventos com critérios explícitos.", "Sei quais dados validar antes de agir.", "Consigo escrever uma atualização operacional em quatro linhas.", "Não deixo evento encerrado sem desfecho registrado."],
  mindMap: { root: "Operação", branches: [{ label: "Priorizar", items: ["Impacto", "Tempo", "Evidência"] }, { label: "Tratar", items: ["Procedimento", "Ação", "Escalonamento"] }, { label: "Fechar", items: ["Registro", "Desfecho", "Próxima ação"] }] },
  diagram: { title: "Ciclo operacional de um evento", chart: "flowchart LR\n  A[Alerta] --> B[Priorizar]\n  B --> C[Validar contexto]\n  C --> D[Executar procedimento]\n  D --> E[Comunicar / escalar]\n  E --> F[Confirmar desfecho]\n  F --> G[Registrar e encerrar]" },
});

export const academyModule12 = buildModuleV2({
  slug: "12-compliance",
  sources: ["Política de Privacidade ATLASGR", "Política Organizacional e Ética (material interno)", "Lei Geral de Proteção de Dados Pessoais — LGPD", "Normas e políticas internas de Segurança da Informação"],
  objectives: ["Reconhecer quando uma ação envolve dado pessoal, acesso ou compartilhamento sensível.", "Aplicar os princípios de necessidade, finalidade e mínimo acesso na rotina.", "Identificar situações em que urgência não autoriza exceção.", "Saber interromper e escalar uma ação com risco de compliance."],
  scenario: "Um parceiro pede pelo WhatsApp uma foto de documento e dados cadastrais de um motorista para 'resolver rápido'. Você tem acesso aos dados no sistema. Ter acesso basta para compartilhar? Que perguntas precisam ser respondidas antes?",
  introHeading: "Compliance é fazer o processo certo quando o atalho parece mais rápido",
  intro: [
    "Compliance não é uma etapa isolada do Jurídico. Ele aparece quando alguém acessa dado, aprova exceção, compartilha informação, usa credencial, registra evidência ou decide fora da própria alçada.",
    "Na proteção de dados, uma regra prática é compartilhar somente o necessário para uma finalidade legítima, com quem precisa receber e pelo canal adequado. Acesso técnico não equivale a autorização de uso irrestrito.",
    "Quando você não tiver certeza sobre base, permissão ou canal, preserve a informação e escale. Corrigir um atraso é mais simples do que reverter um compartilhamento indevido.",
  ],
  chapters: [
    {
      id: "dados",
      title: "Dados pessoais na rotina",
      heading: "Pergunte finalidade antes de perguntar se o sistema permite",
      paragraphs: [
        "Nome, documento, contato, localização e informações de cadastro podem identificar ou se relacionar a uma pessoa. O tratamento deve estar conectado a uma finalidade válida do processo e respeitar as regras internas de acesso e retenção.",
        "Evite copiar dados para planilhas pessoais, chats não autorizados ou dispositivos sem controle. Quando a tarefa terminar, siga a política de retenção em vez de guardar 'por garantia'.",
      ],
      whyItMatters: "Grande parte do risco de privacidade nasce de hábitos aparentemente pequenos, como encaminhar print, exportar lista ou manter arquivo fora do ambiente correto.",
      checklist: ["Qual é a finalidade?", "Preciso de todos esses dados?", "Quem realmente precisa receber?", "O canal é autorizado?", "Existe registro e retenção adequada?"],
    },
    {
      id: "credenciais",
      title: "Acesso e credenciais",
      heading: "Identidade de acesso é parte da segurança",
      paragraphs: [
        "Credencial individual permite atribuir ações e aplicar permissões compatíveis com a função. Compartilhar senha, sessão ou código de acesso destrói essa rastreabilidade e aumenta impacto de um incidente.",
        "Se alguém precisa executar uma atividade, o caminho correto é solicitar acesso apropriado. 'Só desta vez' é exatamente o padrão que transforma exceção informal em hábito.",
      ],
      whyItMatters: "Sem identidade individual, não é possível saber com confiança quem visualizou, alterou ou aprovou uma informação.",
      comparison: { title: "Acesso seguro", left: { label: "Correto", points: ["Usuário individual", "Permissão por função", "MFA quando disponível", "Bloqueio ao sair", "Revogação"] }, right: { label: "Risco", points: ["Senha compartilhada", "Conta genérica", "Acesso excessivo", "Sessão aberta", "Credencial em mensagem"] } },
    },
    {
      id: "excecoes",
      title: "Pressão e exceções",
      heading: "Urgência muda prioridade, não muda autorização",
      paragraphs: [
        "Situações urgentes podem exigir resposta mais rápida, mas ainda precisam respeitar alçada e controles essenciais. Quando um processo possui mecanismo de contingência, use-o. Quando não possui, envolva a liderança ou área responsável em vez de criar uma regra informal.",
        "Registre a decisão e, depois do evento, avalie se o procedimento precisa ser melhorado. Se muitas pessoas precisam improvisar a mesma exceção, provavelmente existe um problema de processo.",
      ],
      whyItMatters: "Exceções não documentadas são difíceis de auditar e tendem a se repetir sem que a organização perceba o risco acumulado.",
      faq: [{ q: "Se o cliente pedir, posso compartilhar?", a: "O pedido do cliente não elimina regras de finalidade, necessidade, segurança, contrato e alçada. Valide o fluxo autorizado." }, { q: "O que fazer se eu enviar dado para a pessoa errada?", a: "Interrompa novos compartilhamentos e reporte imediatamente pelo fluxo de incidente definido pela empresa. Não tente esconder ou resolver sozinho." }],
    },
  ],
  summary: ["Compliance acontece nas pequenas decisões diárias.", "Acesso não é autorização irrestrita de compartilhamento.", "Credenciais devem ser individuais e proporcionais à função.", "Urgência exige velocidade dentro do controle, não abandono do controle."],
  finalChecklist: ["Sei reconhecer uma situação com dado pessoal.", "Verifico finalidade, necessidade, destinatário e canal antes de compartilhar.", "Nunca compartilho credenciais para agilizar atividade.", "Reporto incidente ou dúvida cedo em vez de ocultar."],
  mindMap: { root: "Compliance", branches: [{ label: "Dados", items: ["Finalidade", "Necessidade", "Segurança"] }, { label: "Acesso", items: ["Identidade", "Permissão", "Rastreabilidade"] }, { label: "Decisão", items: ["Alçada", "Exceção", "Reporte"] }] },
  diagram: { title: "Antes de compartilhar informação", chart: "flowchart TD\n  A[Solicitação de dado] --> B{Finalidade legítima?}\n  B -- Não --> X[Não compartilhar / escalar]\n  B -- Sim --> C{É necessário?}\n  C -- Não --> X\n  C -- Sim --> D{Destinatário e canal autorizados?}\n  D -- Não --> X\n  D -- Sim --> E[Compartilhar mínimo necessário e registrar]" },
});

export const academyModule13 = buildModuleV2({
  slug: "13-tecnologia",
  sources: ["Site e blog oficial ATLASGR — Inteligência Logística, telemetria e automação", "Materiais internos de tecnologia e integrações", "Políticas internas de Segurança da Informação"],
  objectives: ["Entender tecnologia como meio para melhorar decisão, controle ou eficiência.", "Diferenciar rastreamento, telemetria, analytics, automação e IA em termos práticos.", "Avaliar uma automação por métrica, risco e supervisão necessária.", "Reconhecer situações em que erro automatizado precisa de barreira humana."],
  scenario: "Uma nova IA promete classificar alertas automaticamente. A demonstração parece excelente, mas ninguém definiu erro aceitável, dados de teste, fallback ou quem responde por uma classificação incorreta. A solução está pronta para operação?",
  introHeading: "Tecnologia boa reduz incerteza; tecnologia ruim só acelera erro",
  intro: [
    "Tecnologia cria valor quando melhora uma decisão, elimina retrabalho, amplia visibilidade ou reduz tempo de resposta de forma verificável. Adotar ferramenta porque 'tem IA' não é estratégia.",
    "Rastreamento ajuda a localizar. Telemetria adiciona dados do veículo e da condução. Analytics organiza padrões e indicadores. Automação executa regras. IA pode classificar, resumir ou identificar padrões, mas seu resultado depende de dados, contexto e limites.",
    "Antes de automatizar uma decisão sensível, defina como medir acerto, quais erros são aceitáveis, quando um humano revisa e como retornar ao processo manual se o sistema falhar.",
  ],
  chapters: [
    {
      id: "camadas",
      title: "Camadas de tecnologia",
      heading: "Dado, inteligência e ação são etapas diferentes",
      paragraphs: [
        "Um sensor coleta dado. Um sistema recebe e apresenta. Uma regra pode transformar o dado em alerta. Um modelo pode classificar o evento. Uma pessoa ou automação executa a ação. Cada camada tem falhas possíveis diferentes.",
        "Ao investigar um problema, localize a camada: o sensor mediu errado, a transmissão atrasou, a integração perdeu campo, a regra estava mal configurada ou a interpretação foi incorreta?",
      ],
      whyItMatters: "Sem separar camadas, equipes tentam corrigir interface quando o problema está no sensor ou culpam o dado quando a regra de negócio está errada.",
      checklist: ["Coleta", "Transmissão", "Integração", "Processamento", "Regra/modelo", "Interface", "Ação"],
    },
    {
      id: "automacao",
      title: "Automação com controle",
      heading: "Automatize o repetitivo, proteja o irreversível",
      paragraphs: [
        "Atividades repetitivas e bem definidas são boas candidatas à automação. Decisões com alto impacto, ambiguidade ou consequência difícil de reverter precisam de supervisão maior.",
        "Antes de colocar em produção, teste com casos normais e exceções. Meça falso positivo, falso negativo, tempo economizado, taxa de intervenção humana e qualidade do resultado.",
      ],
      whyItMatters: "Automação transforma uma regra em escala. Se a regra estiver errada, o erro também ganha escala.",
      comparison: { title: "Onde a automação é mais segura", left: { label: "Boa candidata", points: ["Regra clara", "Baixo impacto", "Reversível", "Dados estáveis", "Métrica objetiva"] }, right: { label: "Exige cautela", points: ["Ambiguidade", "Alto impacto", "Irreversível", "Dado sensível", "Pouca evidência"] } },
    },
    {
      id: "ia",
      title: "IA na operação",
      heading: "Use como copiloto quando a confiança precisa ser calibrada",
      paragraphs: [
        "Modelos de IA podem resumir histórico, sugerir classificação ou apoiar pesquisa, mas podem gerar resposta plausível e incorreta. Por isso, instruções precisam limitar fonte, contexto e ação permitida.",
        "Para uso corporativo, também avalie privacidade, retenção, acesso, custo, latência e observabilidade. Uma resposta inteligente que não pode ser auditada pode ser inadequada para uma decisão sensível.",
      ],
      whyItMatters: "A confiança humana tende a aumentar quando a resposta é fluida. Controles precisam se basear no risco da decisão, não na aparência de certeza do modelo.",
      faq: [{ q: "IA pode tomar decisão sozinha?", a: "Depende do risco e do desenho aprovado. Para decisões sensíveis, mantenha validação humana ou barreiras proporcionais à consequência do erro." }, { q: "Como saber se uma automação vale a pena?", a: "Defina uma linha de base e uma métrica antes: tempo, erro, retrabalho, custo, qualidade ou outro resultado observável." }],
    },
  ],
  summary: ["Tecnologia precisa estar conectada a um problema e uma métrica.", "Dado, transmissão, integração, regra e ação são camadas diferentes.", "Automação escala acerto e também escala erro.", "IA exige controle proporcional ao impacto da decisão."],
  finalChecklist: ["Consigo explicar a diferença entre rastreamento e telemetria.", "Sei localizar a camada provável de uma falha tecnológica.", "Defino métrica antes de automatizar.", "Não trato resposta de IA como verdade sem validação adequada."],
  mindMap: { root: "Tecnologia aplicada", branches: [{ label: "Dados", items: ["Sensor", "Telemetria", "Integração"] }, { label: "Inteligência", items: ["Analytics", "Regras", "IA"] }, { label: "Ação", items: ["Automação", "Humano", "Métrica"] }] },
  diagram: { title: "Da coleta à decisão", chart: "flowchart LR\n  A[Sensor / sistema] --> B[Dados]\n  B --> C[Integração]\n  C --> D[Regra / análise / IA]\n  D --> E{Risco da decisão}\n  E -- Baixo --> F[Automação]\n  E -- Alto --> G[Validação humana]\n  F --> H[Métrica e monitoramento]\n  G --> H" },
});

export const academyModule14 = buildModuleV2({
  slug: "14-casos-reais",
  sources: ["Site oficial ATLASGR — Cases de Sucesso", "Página oficial Atlas Profile — case publicado", "Relatórios e casos internos somente quando aprovados para treinamento"],
  objectives: ["Analisar casos separando fato, interpretação, decisão e resultado.", "Identificar lições transferíveis sem transformar um caso em regra universal.", "Reconhecer vieses de retrospectiva e seleção de casos de sucesso.", "Converter aprendizado em pergunta, checklist ou melhoria de procedimento."],
  scenario: "Um case terminou bem e a equipe quer copiar exatamente a ação adotada para todas as operações. Como extrair o aprendizado sem assumir que contexto, cliente, rota, tecnologia e regra são iguais?",
  introHeading: "Caso real ensina quando você entende por que a decisão funcionou",
  intro: [
    "Cases ajudam a conectar teoria e consequência. Mas um resultado positivo não prova que toda ação tomada foi a melhor possível, nem que o mesmo caminho funcionará em outro contexto.",
    "Analise sempre cinco elementos: contexto, sinais disponíveis no momento, decisão, resultado e fatores que podem ter influenciado o desfecho. Depois separe o que é replicável do que depende daquela situação específica.",
    "Quando um caso envolve dados de cliente, motorista, rota ou incidente, use somente a versão aprovada para treinamento e respeite anonimização e necessidade.",
  ],
  chapters: [
    {
      id: "metodo",
      title: "Como ler um case",
      heading: "Evite aprender a história errada",
      paragraphs: [
        "Retrospectiva cria uma ilusão: depois que sabemos o resultado, sinais anteriores parecem óbvios. Para aprender de verdade, reconstrua o que a equipe sabia naquele momento e quais alternativas estavam disponíveis.",
        "Pergunte também o que poderia ter acontecido se a decisão fosse diferente e quais controles limitaram o risco. Isso transforma narrativa em aprendizado operacional.",
      ],
      whyItMatters: "Cases mal analisados criam superstição operacional: 'da última vez fizemos assim e deu certo'. Método reduz esse viés.",
      checklist: ["Contexto", "Sinais disponíveis", "Hipóteses", "Decisão", "Alternativas", "Resultado", "Lição replicável", "Limite da lição"],
    },
    {
      id: "case-profile",
      title: "Exemplo público: análise cadastral",
      heading: "Um case publicado deve virar perguntas, não espetáculo",
      paragraphs: [
        "A página oficial do Atlas Profile publica um caso envolvendo uma operação de transporte de combustíveis em que a análise cadastral ajudou o cliente a identificar motoristas associados a ocorrências relevantes para a investigação. O valor pedagógico do caso está em mostrar que pequenas perdas recorrentes podem exigir investigação de processo e dados, não em generalizar suspeita sobre pessoas.",
        "Ao estudar esse tipo de caso, preserve a distinção entre informação consultada, evidência validada, critério aplicado e decisão do cliente. Não extrapole para perfis semelhantes sem análise individual e base adequada.",
      ],
      whyItMatters: "Cases de fraude ou risco humano podem facilmente estimular generalizações inadequadas. O método precisa permanecer baseado em evidência e compliance.",
      caseStudy: { title: "Quebras recorrentes e investigação cadastral", text: "Em material público, a ATLASGR descreve um cliente do transporte de combustíveis que investigava faltas recorrentes de produto e utilizou o Atlas Profile como parte da análise de motoristas. A lição é investigar padrão, processo e evidência de forma estruturada, mantendo decisão individual e conformidade.", source: "Site oficial ATLASGR — Atlas Profile / Case de Sucesso" },
    },
    {
      id: "transformar",
      title: "Transforme aprendizado em sistema",
      heading: "A melhor lição é a que muda o processo",
      paragraphs: [
        "Depois de analisar um caso, escolha uma saída concreta: nova pergunta de descoberta, alerta de monitoramento, campo obrigatório, checklist, treinamento, ajuste de regra ou indicador. Nem todo caso exige mudar procedimento; às vezes basta reforçar uma prática existente.",
        "Mudanças operacionais devem seguir governança. Um caso isolado não autoriza alterar regra de cliente ou controle crítico sem avaliação adequada.",
      ],
      whyItMatters: "Sem uma ação de aprendizado, o case vira entretenimento corporativo. Com ação, ele melhora a próxima decisão.",
      faq: [{ q: "Todo incidente deve virar nova regra?", a: "Não. Antes de mudar processo, avalie frequência, causa, consequência e se o controle atual já era suficiente mas não foi seguido." }, { q: "Posso usar nomes e detalhes reais em treinamento?", a: "Somente quando houver autorização e necessidade. Prefira versões aprovadas e anonimizadas quando detalhes identificáveis não forem essenciais ao aprendizado." }],
    },
  ],
  summary: ["Case precisa ser analisado com o contexto disponível no momento da decisão.", "Resultado bom não transforma toda ação em boa prática universal.", "Cases sensíveis exigem anonimização e necessidade.", "Aprendizado útil vira melhoria de processo, pergunta, checklist ou indicador."],
  finalChecklist: ["Consigo separar fato de interpretação em um case.", "Identifico o que é replicável e o que depende de contexto.", "Evito generalizar risco de uma pessoa ou operação para outra.", "Consigo propor uma melhoria concreta baseada no aprendizado."],
  mindMap: { root: "Aprender com casos", branches: [{ label: "Reconstruir", items: ["Contexto", "Sinais", "Alternativas"] }, { label: "Avaliar", items: ["Decisão", "Resultado", "Vieses"] }, { label: "Transferir", items: ["Checklist", "Regra", "Indicador"] }] },
  diagram: { title: "Do caso ao aprendizado", chart: "flowchart LR\n  A[Contexto] --> B[Evidências disponíveis]\n  B --> C[Decisão]\n  C --> D[Resultado]\n  D --> E[Analisar causa e limites]\n  E --> F[Lição replicável]\n  F --> G[Melhoria governada]" },
});

export const academyModule15 = buildModuleV2({
  slug: "15-preparacao-final",
  sources: ["Conteúdo consolidado dos módulos 01 a 14", "Banco de questões da Academia ATLASGR", "Procedimentos e materiais vigentes citados em cada módulo"],
  objectives: ["Integrar conhecimentos de áreas diferentes em uma única situação operacional.", "Identificar pontos fracos antes da prova final.", "Revisar por recuperação ativa, e não apenas releitura.", "Demonstrar capacidade de explicar decisões e limites do próprio conhecimento."],
  scenario: "Você recebe uma operação nova e precisa explicar para um colega como cliente, cadastro, risco, sistema, integração, compliance e operação se conectam. Você não pode consultar o material durante os primeiros cinco minutos. O que consegue reconstruir?",
  introHeading: "Preparação final é integração, não maratona de releitura",
  intro: [
    "A etapa final serve para conectar o que foi aprendido. Em vez de reler tudo, tente recuperar conceitos de memória, explicar em voz alta e resolver cenários. Só depois consulte o conteúdo para corrigir lacunas.",
    "Seu objetivo não é acertar por reconhecimento de alternativas. É conseguir justificar uma decisão: que fato observou, qual regra consultou, que risco considerou, o que faria e quando escalaria.",
    "Use o mapa de domínio da trilha para identificar categorias com notas menores e priorize revisão. Uma nota alta não dispensa prática; uma nota baixa indica onde concentrar esforço.",
  ],
  chapters: [
    {
      id: "mapa-mental",
      title: "Reconstrua a jornada ponta a ponta",
      heading: "Conecte cliente, dado, risco e ação",
      paragraphs: [
        "Comece pelo cliente e pela operação: quem participa, o que precisa ser protegido e qual resultado importa. Depois conecte cadastro, planejamento, regras, tecnologia, monitoramento, tratamento, registro e análise.",
        "Se você consegue explicar onde cada módulo entra nessa jornada, deixou de aprender tópicos isolados e começou a construir visão sistêmica.",
      ],
      whyItMatters: "Problemas reais raramente chegam etiquetados por módulo. Eles atravessam áreas, sistemas e responsabilidades.",
      checklist: ["Cliente e contexto", "Cadastro", "Planejamento", "PGR e regras", "Sistemas e integrações", "Monitoramento", "Tratamento", "Compliance", "Registro e indicador"],
    },
    {
      id: "recuperacao",
      title: "Revisão por recuperação ativa",
      heading: "Tente lembrar antes de reler",
      paragraphs: [
        "Feche o material e responda perguntas curtas. Explique um conceito como se treinasse outra pessoa. Desenhe o fluxo de um evento. Liste diferenças entre termos parecidos. Depois confira e corrija.",
        "Esse esforço de recuperação mostra lacunas que a releitura confortável costuma esconder. Revise em blocos curtos e volte às áreas em que sua explicação ficou vaga.",
      ],
      whyItMatters: "Reconhecimento gera sensação de familiaridade; recuperação ativa testa se o conhecimento está realmente disponível quando você precisa dele.",
      comparison: { title: "Duas formas de revisar", left: { label: "Recuperação ativa", points: ["Responder sem consultar", "Explicar", "Resolver caso", "Corrigir lacuna", "Repetir depois"] }, right: { label: "Releitura passiva", points: ["Ler novamente", "Sublinhar", "Reconhecer", "Sentir familiaridade", "Pouco teste de aplicação"] } },
    },
    {
      id: "prova-e-trabalho",
      title: "A prova é só um marco",
      heading: "A competência continua depois do certificado",
      paragraphs: [
        "A prova final valida um conjunto mínimo de conhecimentos. Ela não substitui treinamento prático, acompanhamento de liderança, atualização de procedimento ou experiência em operação real.",
        "Ao concluir, escolha pelo menos um comportamento para aplicar imediatamente e uma área para revisar nas próximas semanas. Aprendizado corporativo útil é contínuo e ligado ao trabalho.",
      ],
      whyItMatters: "Certificado mede conclusão de uma etapa. Desempenho exige aplicação consistente e atualização ao longo do tempo.",
      faq: [{ q: "Se eu passar, estou autorizado a executar qualquer procedimento?", a: "Não. Autorização depende da função, acessos, treinamento prático e regras da área. A certificação do portal não amplia sua alçada." }, { q: "Qual a melhor revisão antes da prova?", a: "Priorize os módulos de menor domínio, responda perguntas sem consultar e pratique cenários que conectem mais de uma área." }],
    },
  ],
  summary: ["Integre os módulos em uma jornada de decisão ponta a ponta.", "Recuperação ativa revela lacunas melhor que releitura passiva.", "Justificar a decisão é mais importante do que decorar frase.", "Certificação não substitui alçada, prática supervisionada e atualização contínua."],
  finalChecklist: ["Consigo explicar a jornada operacional de ponta a ponta.", "Consigo resolver um cenário citando fatos, regra, ação e escalonamento.", "Revisei os módulos com menor domínio no meu painel.", "Entendo que o certificado não aumenta automaticamente minha alçada operacional."],
  mindMap: { root: "Domínio final", branches: [{ label: "Entender", items: ["Conceitos", "Relações", "Termos"] }, { label: "Aplicar", items: ["Cenários", "Decisão", "Comunicação"] }, { label: "Sustentar", items: ["Procedimento vigente", "Feedback", "Revisão contínua"] }] },
  diagram: { title: "Conhecimento até performance", chart: "flowchart LR\n  A[Aprender] --> B[Recuperar]\n  B --> C[Aplicar]\n  C --> D[Receber feedback]\n  D --> E[Corrigir]\n  E --> F[Validar domínio]\n  F --> G[Aplicar no trabalho]\n  G --> D" },
});
