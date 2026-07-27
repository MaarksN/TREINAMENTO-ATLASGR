# Documentação Visual e Briefing de Produto - ATLASGR Onboarding

## 1. Resumo executivo

O Portal de Onboarding ATLASGR é uma plataforma corporativa avançada focada em centralizar o treinamento, acompanhamento e capacitação de agentes logísticos. A aplicação oferece um ambiente imersivo, com identidade visual de alto padrão inspirada em centros de comando (Cockpit Operacional), combinando módulos de aprendizagem, glossários técnicos, dashboards de indicadores e detalhamento dos produtos oferecidos pela ATLASGR.

O público-alvo inclui novos colaboradores, agentes operacionais, analistas de risco e gestores que precisam compreender em profundidade a operação logística, as ferramentas disponíveis (como Atlas Profile, Connect, GR e Analytics) e as regras de negócio de maneira estruturada.

Entre os principais benefícios estão:
- **Centralização do Conhecimento:** Um único ambiente para explorar módulos de trilha de aprendizagem, glossário e documentação técnica.
- **Acompanhamento e Gamificação:** O "Cockpit Operacional" proporciona uma visão clara do progresso, nível, experiência (XP) e indicadores de performance.
- **Experiência Premium:** Interface de alta performance, design escuro, moderno, com navegação fluida, o que eleva a percepção de valor do usuário sobre a tecnologia ATLASGR.

## 2. Objetivo da plataforma

O principal objetivo do Portal de Onboarding é acelerar e uniformizar o treinamento dos novos colaboradores (e atualizar os atuais) nas complexas operações logísticas da ATLASGR. Ele centraliza as atividades educacionais, a documentação de arquitetura de produtos e as métricas de performance do próprio usuário durante seu aprendizado, reduzindo o tempo de rampa e consolidando a cultura organizacional.

## 3. Estrutura da navegação

- **Menu principal:** Encontrado na página inicial, permitindo transitar entre seções do produto (Central ATLAS, Trilha, Academia IA).
- **Módulos:** Trilha educacional composta por várias etapas temáticas (ex: Bem-vindo, Mercado Logístico, Profile, Connect).
- **Páginas:** Início, Dashboard (Cockpit), Módulos, Showcase de Produtos, Glossário, Prova Final e Certificado.
- **Áreas administrativas:** Uma seção de gestão (`/admin`) acessível aos líderes para acompanhamento geral.
- **Fluxos relacionados:** O usuário inicia não-autenticado, entra via modal de acesso, acompanha sua evolução no Dashboard, avança pelos módulos na Trilha e obtém sua certificação.

## 4. Inventário de telas

(Consulte o arquivo `/documentacao-aplicacao/inventario/inventario-de-telas.csv` para a tabela completa em formato CSV)

| Nº | Tela | Módulo | Finalidade | Recursos presentes | Arquivo da imagem |
|---|---|---|---|---|---|
| 1 | Início | Portal | Apresentação da plataforma e acesso inicial | Menu, Seções informativas, Modal de Acesso | `01-acesso/01-inicio.png` |
| 2 | Dashboard | Onboarding Logado | Painel central do usuário | Métricas (XP, Nível), Atalhos de Módulos, Heatmap de atividade | `02-dashboard/01-dashboard.png` |
| 3 | Módulo da Trilha | Trilha de Aprendizagem | Conteúdo educacional | Textos imersivos, Cards, Quiz Integrado, Navegação Paginada | `03-modulos/01-trilha-modulo.png` |
| 4 | Prova Final | Trilha de Aprendizagem | Avaliação de Conhecimento | Questionário de múltipla escolha, Timer, Sumário de Resultados | `03-modulos/02-prova-final.png` |
| 5 | Produto - Profile | Showcase | Exibição da solução ATLAS Profile | Layout premium, Cards de métrica, Descrição do fluxo | `03-modulos/03-produtos-profile.png` |
| 6 | Produto - Connect | Showcase | Exibição da solução ATLAS Connect | Torre de controle demonstrativa, Visualização de eventos | `03-modulos/04-produtos-connect.png` |
| 7 | Produto - GR | Showcase | Exibição da solução ATLAS GR | Arquitetura de Gerenciamento de Risco, Alertas | `03-modulos/05-produtos-gr.png` |
| 8 | Produto - Analytics | Showcase | Exibição da solução ATLAS Analytics | Dashboard interativo, Mapas de Calor, Gráficos | `03-modulos/06-produtos-analytics.png` |
| 9 | Glossário | Apoio / Relatórios | Consulta de termos logísticos | Lista estruturada, Filtros/Busca de termos | `05-relatorios/01-glossario.png` |
| 10 | Certificado | Apoio / Relatórios | Reconhecimento | Layout do Certificado, Opções de Download | `05-relatorios/02-certificado.png` |
| 11 | Administração | Configurações | Gestão do sistema | Visualização de turmas, progresso de colaboradores (em construção) | `06-configuracoes/01-admin.png` |

## 5. Descrição dos módulos

- **Trilha de Aprendizagem:**
  - **Objetivo:** Fornecer o conteúdo obrigatório.
  - **Público:** Novos agentes.
  - **Informações:** Textos didáticos, casos reais e quizzes.
  - **Conexão:** Alimenta o ganho de XP visto no Dashboard.

- **Vitrine de Produtos (Showcase):**
  - **Objetivo:** Materializar o funcionamento dos softwares ATLASGR.
  - **Público:** Colaboradores em treinamento técnico.
  - **Informações:** Telas simuladas, arquitetura e propostas de valor.
  - **Benefício:** Facilita a compreensão visual das ferramentas que serão utilizadas no dia a dia.

- **Cockpit Operacional (Dashboard):**
  - **Objetivo:** Mostrar o resumo do usuário.
  - **Público:** Agentes em onboarding.
  - **Funcionalidades:** Exibição de Nível, XP, Streak, gráficos de engajamento e atalhos rápidos.

## 6. Fluxos existentes

**1. Acesso e Entrada**
  1. O usuário visualiza a Landing Page corporativa.
  2. Aciona o botão de início.
  3. Preenche o Modal de Acesso.
  4. É redirecionado ao Dashboard.

**2. Acompanhamento de Treinamento**
  1. Acesso ao Dashboard.
  2. Verificação de Progresso e Nível.
  3. Clique em "Continuar Trilha".
  4. Leitura do módulo e resposta ao quiz.
  5. Acúmulo de nova pontuação (XP).

**3. Navegação de Apoio (Glossário)**
  1. No Dashboard, clique em Glossário.
  2. Consulta rápida de termos técnicos.
  3. Retorno ao conteúdo principal.

## 7. Componentes encontrados

- Botões de Ação (Primários, Secundários, Texto).
- Campos de Entrada (Modal de acesso).
- Gráficos (Dashboard Analytics).
- Tabelas (Glossário, Relatórios Admin).
- Cards Premium (Exibição de módulos, métricas, atalhos).
- Indicadores (Barras de progresso, Heatmap).
- Modais (Acesso e Autenticação).
- Menus e Abas de Navegação Inferior/Superior.
- Quizzes Interativos.

## 8. Conteúdo e dados apresentados

- Métricas de Gamificação: Nível (ex: Júnior), Pontuação (XP), Sequência de dias (Streak).
- Categorias de Conteúdo: Logística, Tecnologia, Compliance, Operação.
- Status de Conclusão: Módulos finalizados vs. Pendentes.
- Dados Simulados: Heatmaps de atividade e eventos (no Connect).

## 9. Experiência atual

A organização das informações é muito fluida, focando totalmente em direcionar o usuário para a sua próxima ação, minimizando distrações. O uso do tema escuro atrelado a destaques em laranja entrega um apelo corporativo premium. O acompanhamento é estimulado pelos elementos de gamificação perfeitamente integrados ao Dashboard. A centralização dos dados proporciona grande valor ao unificar manuais, quizzes e showcases na mesma ferramenta.

## 10. Atualizações futuras

| Atualização futura | Benefício | Impacto esperado | Prioridade | Complexidade | Área relacionada |
|---|---|---|---|---|---|
| Expansão da Academia ATLAS IA | Oferecerá agentes específicos e ferramentas inteligentes por cargo, ajudando os colaboradores a realizarem tarefas complexas com auxílio da IA. | Aumentará a produtividade operacional e a assertividade na tomada de decisões diárias. | Alta | Avançada | Academia IA / Dashboard |
| Melhoria nos Showcases de Produtos (Módulos dinâmicos adicionais) | Exibirá mais detalhamentos para módulos que ainda não possuem um layout de showcase específico (ex: quando acessar outros produtos). | Permitirá um entendimento mais profundo e completo do catálogo de ofertas ATLASGR. | Média | Moderada | Páginas de Produtos (`/produtos`) |
| Integração com Sistema de Certificados Externo | Permitirá exportar ou compartilhar automaticamente o certificado de conclusão da trilha no LinkedIn ou via e-mail. | Ampliará o engajamento dos colaboradores e o reconhecimento profissional da capacitação. | Média | Moderada | Módulo Certificado (`/certificado`) |
| Dashboards Analíticos Detalhados para Gestores | Os líderes poderão visualizar o progresso de toda a sua equipe, não apenas a visão individual do colaborador atual. | Melhorará o controle e acompanhamento gerencial do treinamento corporativo. | Alta | Avançada | Área Administrativa / Dashboard (`/admin` e `/dashboard`) |
| Personalização do Cockpit | O usuário poderá escolher quais métricas ou atalhos deseja fixar na tela inicial do dashboard. | Tornará a experiência de uso mais focada nas necessidades específicas daquele agente. | Baixa | Simples | Dashboard (`/dashboard`) |

## 11. Sugestão de roadmap

### Próximo ciclo
Atualizações de rápida implementação e alto benefício.
- **Personalização do Cockpit:** Melhorias visuais e ajustes finos nos componentes da tela inicial, permitindo que o usuário tenha atalhos configuráveis de modo simples.
- **Ampliação do Glossário:** Adição de categorias visuais para facilitar a navegação pelos termos técnicos logísticos.

### Médio prazo
Recursos que exigem planejamento adicional.
- **Melhoria nos Showcases de Produtos:** Criação de novos layouts de demonstração para todos os produtos ATLASGR.
- **Integração com Sistema de Certificados Externo:** Possibilidade de compartilhamento direto da aprovação na trilha.

### Evolução estratégica
Atualizações estruturais, novas integrações e expansões da plataforma.
- **Expansão da Academia ATLAS IA:** Implementação dos assistentes inteligentes que atuarão junto aos colaboradores.
- **Dashboards Analíticos Detalhados para Gestores:** Criação da área administrativa completa para a gestão de turmas e acompanhamento gerencial de toda a operação.

## 12. Arquivos produzidos

- Documento de briefing completo (`briefing-completo.md`).
- Resumo executivo (`resumo-executivo.md`).
- Atualizações futuras (`atualizacoes-futuras.md`).
- Roadmap sugerido (`roadmap.md`).
- Inventário de telas (`inventario-de-telas.csv`).
- Mapa de navegação (`mapa-de-navegacao.md`).
- Imagens capturadas organizadas em pastas por categoria.
- Vídeos gravados (`apresentacao-completa.mp4`, `demonstracao-dos-fluxos.mp4`).
- Roteiro do vídeo (`roteiro-apresentacao.md`, `roteiro-demonstracao.md`).
