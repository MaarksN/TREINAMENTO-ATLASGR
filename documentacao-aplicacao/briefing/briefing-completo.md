# Briefing Executivo: Portal de Onboarding ATLASGR

## 1. Resumo executivo
O Portal de Onboarding ATLASGR é uma plataforma de treinamento corporativo desenvolvida para capacitar colaboradores nos processos operacionais e de segurança da empresa. A aplicação apresenta uma interface moderna, amigável e gamificada, voltada para proporcionar um aprendizado estruturado e envolvente. O sistema facilita a assimilação de conteúdo crítico por meio de módulos interativos, acompanhamento de progresso e certificação, elevando a eficiência e o engajamento dos novos talentos.

## 2. Objetivo da plataforma
A aplicação tem como finalidade centralizar o processo de integração e treinamento de colaboradores da ATLASGR. Ela organiza conteúdos institucionais, operacionais e de segurança em trilhas de conhecimento estruturadas, permitindo que o usuário acompanhe sua evolução de forma clara. A plataforma atende à necessidade de padronizar o conhecimento corporativo e apoiar a operação, garantindo que os profissionais estejam plenamente capacitados para os desafios do dia a dia.

## 3. Estrutura da navegação
A navegação é estruturada de forma intuitiva:
*   **Menu principal:**
    *   Início
    *   Trilha
    *   Glossário
    *   Prova Final
    *   Painel (Admin)
*   **Submenus:**
    *   Filtros de categoria de módulos
*   **Módulos:**
    *   Acesso aos cursos e materiais de treinamento (ex: Bem-vindo, Segurança).
*   **Páginas:**
    *   Dashboard do Colaborador.
    *   Página de Certificado.
*   **Abas:**
    *   Navegação por abas em painéis (se aplicável futuramente).
*   **Áreas administrativas:**
    *   Painel com indicadores gerais de uso e tabela de colaboradores.
*   **Configurações:**
    *   Atalhos de acessibilidade e modo claro/escuro.
*   **Fluxos relacionados:**
    *   Acesso inicial e identificação do colaborador.
    *   Navegação pelos módulos de conhecimento.
    *   Realização de quizzes e prova final.
    *   Visualização e download de certificado.

## 4. Inventário de telas

| Nº | Tela | Módulo | Finalidade | Recursos presentes | Arquivo da imagem |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Início | Acesso | Apresentar a plataforma e coletar dados de identificação. | Cards institucionais, Botão de acesso, Modal de identificação. | `01-acesso/01-home.png`, `01-acesso/02-modal-acesso.png` |
| 2 | Dashboard | Dashboard | Visão geral do progresso do usuário. | Indicadores de XP, nível, progresso, missões e conquistas. | `02-dashboard/01-dashboard-principal.png` |
| 3 | Trilha de Conhecimento | Treinamento | Listar todos os módulos disponíveis para estudo. | Lista de módulos com status (pendente/concluído). | `03-modulos/01-trilha-de-conhecimento.png` |
| 4 | Módulo Específico | Treinamento | Apresentar o conteúdo de um módulo de aprendizado. | Textos, vídeos, links úteis e botão para iniciar o Quiz. | `03-modulos/02-modulo-bem-vindo.png` |
| 5 | Glossário | Apoio | Explicar termos técnicos utilizados na plataforma. | Lista alfabética de termos e suas definições. | `03-modulos/03-glossario.png` |
| 6 | Prova Final | Avaliação | Avaliar o conhecimento adquirido após os módulos. | Perguntas de múltipla escolha com cronômetro. | `05-relatorios/01-prova-final.png` |
| 7 | Certificado | Certificação | Apresentar o certificado de conclusão da trilha. | Informações do colaborador, data de emissão e opção de download (PDF). | `05-relatorios/02-certificado.png` |
| 8 | Painel Admin | Administração | Visão gerencial sobre o andamento dos treinamentos. | KPIs (usuários, módulos concluídos) e tabela de colaboradores. | `06-configuracoes/01-painel-admin.png` |

## 5. Descrição dos módulos

*   **Acesso e Início:**
    *   **Nome:** Acesso e Início.
    *   **Objetivo:** Recepcionar o usuário e realizar a identificação.
    *   **Público que utiliza:** Novos colaboradores e visitantes.
    *   **Informações apresentadas:** Apresentação da ATLASGR e seus valores.
    *   **Funcionalidades disponíveis:** Modal de identificação (nome e e-mail).
    *   **Ações possíveis:** Iniciar o treinamento preenchendo os dados.
    *   **Conexão com outros módulos:** Redireciona para o Dashboard e Trilha.
    *   **Benefícios para a operação:** Experiência de boas-vindas acolhedora e registro inicial para acompanhamento.

*   **Trilha de Conhecimento:**
    *   **Nome:** Trilha de Conhecimento.
    *   **Objetivo:** Organizar e entregar os conteúdos de treinamento.
    *   **Público que utiliza:** Colaboradores em fase de integração.
    *   **Informações apresentadas:** Lista de módulos (ex: Bem-vindo, Gerenciamento de Risco, Sistema).
    *   **Funcionalidades disponíveis:** Navegação por tópicos, leitura de conteúdo, quizzes de fixação.
    *   **Ações possíveis:** Ler material de treinamento, iniciar quiz.
    *   **Conexão com outros módulos:** Integra-se ao Dashboard e Avaliação.
    *   **Benefícios para a operação:** Padronização do conhecimento e clareza no caminho a ser percorrido.

*   **Glossário:**
    *   **Nome:** Glossário Técnico.
    *   **Objetivo:** Auxiliar a compreensão de termos técnicos.
    *   **Público que utiliza:** Todos os usuários.
    *   **Informações apresentadas:** Dicionário de termos da área de logística e segurança.
    *   **Funcionalidades disponíveis:** Busca rápida de termos e popovers explicativos integrados ao texto.
    *   **Ações possíveis:** Pesquisar termos técnicos, visualizar definições.
    *   **Conexão com outros módulos:** Acessível via menu global e popovers na Trilha.
    *   **Benefícios para a operação:** Redução de dúvidas e nivelamento de conhecimento técnico.

*   **Avaliação (Prova Final e Quiz):**
    *   **Nome:** Avaliação.
    *   **Objetivo:** Medir a absorção do conhecimento.
    *   **Público que utiliza:** Colaboradores que concluíram módulos ou a trilha completa.
    *   **Informações apresentadas:** Questões de múltipla escolha e pontuação (XP).
    *   **Funcionalidades disponíveis:** Seleção de respostas, feedback de acertos/erros, tempo limite.
    *   **Ações possíveis:** Responder às perguntas, finalizar quiz.
    *   **Conexão com outros módulos:** Ligado à Trilha (Quizzes) e Certificação.
    *   **Benefícios para a operação:** Garantia de que os conceitos fundamentais foram assimilados.

*   **Dashboard e Certificação:**
    *   **Nome:** Dashboard e Certificação.
    *   **Objetivo:** Motivar e reconhecer o esforço do colaborador.
    *   **Público que utiliza:** Todos os colaboradores.
    *   **Informações apresentadas:** Resumo de XP, nível, progresso, conquistas desbloqueadas e emissão de certificado.
    *   **Funcionalidades disponíveis:** Visualização de progresso gamificado e geração de certificado em PDF.
    *   **Ações possíveis:** Acompanhar progresso, baixar certificado, navegar para missões pendentes.
    *   **Conexão com outros módulos:** Centraliza dados da Trilha e Avaliações.
    *   **Benefícios para a operação:** Aumento do engajamento e materialização do esforço via certificação.

## 6. Fluxos existentes

1.  **Fluxo de Acesso Inicial:**
    1.  O usuário acessa a página inicial.
    2.  Clica em "Iniciar Treinamento Corporativo".
    3.  Preenche o modal com nome e e-mail.
    4.  É redirecionado para a Trilha de Conhecimento.
2.  **Fluxo de Aprendizado e Quiz:**
    1.  O usuário acessa a Trilha de Conhecimento.
    2.  Seleciona um módulo pendente.
    3.  Consome o conteúdo (texto/vídeo).
    4.  Inicia o Quiz de fixação.
    5.  Responde às perguntas.
    6.  Recebe feedback e ganha XP.
3.  **Fluxo de Certificação:**
    1.  O usuário conclui a Prova Final com sucesso.
    2.  O sistema libera o acesso ao Certificado.
    3.  O usuário acessa a página do Certificado.
    4.  Clica para fazer o download do documento em PDF.

## 7. Componentes encontrados
A interface utiliza componentes modernos e padronizados, tais como:
*   Botões (Primário, Secundário, Outlines).
*   Campos de texto (Inputs em modais).
*   Cards informativos (Dashboard, Módulos, Missões).
*   Badges/Tags (Status de conclusão, níveis).
*   Barras de Progresso.
*   Modais (Identificação, confirmações).
*   Navegação (Header, links).
*   Alertas e Toasts (Feedback de ações).
*   Indicadores visuais (XP, Ícones).

## 8. Conteúdo e dados apresentados
A plataforma exibe informações operacionais focadas em treinamento:
*   **Métricas do Usuário:** Pontos de Experiência (XP), Nível, Porcentagem de conclusão da trilha.
*   **Categorias de Conteúdo:** Bem-vindo à empresa, Segurança, Sistemas Logísticos.
*   **Status de Módulos:** Pendente, Em Andamento, Concluído.
*   **Informações Administrativas:** Quantidade total de colaboradores em treinamento, total de módulos finalizados pela equipe.

## 9. Experiência atual
A plataforma entrega uma experiência de alto nível, com um design limpo, responsivo e esteticamente agradável, aderindo ao padrão "corporate command center". A centralização das informações em trilhas claras facilita o processo de descoberta e aprendizado para novos colaboradores. A inclusão de elementos de gamificação, como pontos de experiência (XP) e níveis, torna o processo de onboarding engajador e motivador, criando valor tangível tanto para o colaborador quanto para a gestão.

## 10. Atualizações futuras

Como evolução da plataforma, poderá ser adicionado o aprimoramento contínuo dos recursos para expandir a experiência do usuário.

| Atualização futura | Benefício | Impacto esperado | Prioridade | Complexidade | Área relacionada |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Integração de Backend com Banco de Dados | Permitir o armazenamento seguro dos dados, dispensando o uso apenas do `localStorage`. | Alto impacto na escalabilidade e retenção segura das informações do usuário. | Alta | Avançada | Todas (Infraestrutura) |
| Gestão de Usuários e Autenticação Robusta | Oferecer perfis de acesso distintos (ex: Colaborador vs. Gestor) e login seguro com senhas/tokens. | Aumento na segurança, controle de acessos e personalização da jornada. | Alta | Moderada | Acesso e Admin |
| Automação na Emissão de Certificados | Garantir a oficialidade dos certificados gerados pela plataforma. | Maior credibilidade. | Média | Moderada | Certificação |
| Expansão do Conteúdo | Oferecer a totalidade dos 15 módulos previstos. | Enriquecimento da base de conhecimento. | Alta | Simples | Trilha de Conhecimento |
| Exportação de Relatórios | Permitir aos gestores o acompanhamento do progresso detalhado das equipes. | Facilita a gestão de Treinamento. | Média | Moderada | Painel Admin |

Para as próximas etapas do produto, recomenda-se considerar a automação de processos adicionais listados acima.

## 11. Sugestão de roadmap

*   **Próximo ciclo:**
    *   Expansão do Conteúdo (Demais Módulos da Trilha).
    *   Refinamento visual de feedbacks em quizzes.
*   **Médio prazo:**
    *   Integração de Backend com Banco de Dados.
    *   Gestão de Usuários e Autenticação Robusta.
*   **Evolução estratégica:**
    *   Automação na Emissão de Certificados com Assinatura Digital.
    *   Módulo avançado de relatórios para gestores (exportações, dashboards personalizados).

## 12. Arquivos produzidos
Foram gerados e organizados os seguintes artefatos visuais e documentais para compor este briefing:
*   Documento de briefing (`briefing/briefing-completo.md`).
*   Inventário de telas (`inventario/inventario-de-telas.csv`).
*   Imagens capturadas (nas pastas `imagens/01-acesso`, `02-dashboard`, `03-modulos`, `05-relatorios`, `06-configuracoes`).
*   Vídeos gravados (`videos/apresentacao-completa.mp4`, `videos/demonstracao-dos-fluxos.mp4`).
*   Roteiro do vídeo (`roteiros/roteiro-apresentacao.md`, `roteiros/roteiro-demonstracao.md`).
*   Lista de atualizações futuras (`briefing/atualizacoes-futuras.md`).
*   Mapa de navegação (`inventario/mapa-de-navegacao.md`).
*   Roadmap sugerido (`briefing/roadmap.md`).
