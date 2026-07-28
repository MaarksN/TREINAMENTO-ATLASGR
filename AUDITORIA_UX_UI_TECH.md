# AUDITORIA DE DÍVIDA TÉCNICA, UX, UI E QUALIDADE VISUAL
**Projeto**: Portal de Onboarding ATLASGR
**Fase Auditada**: Protótipo Inicial (Fase 1)
**Nível de Confiança da Análise**: Alto. Baseado em inspeção direta de código (Next.js App Router, Tailwind CSS, Zustand, Arquitetura de Pastas e Componentes UI).

---

## 1. Resumo executivo
A plataforma atual é um **protótipo puramente de interface (Frontend)** construído em Next.js. Embora apresente uma estrutura visual moderna com utilização do padrão corporativo "AtlasGR", ela carece inteiramente da infraestrutura técnica necessária para suportar uma operação Enterprise (backend, banco de dados persistente, microsserviços, inteligência artificial e autenticação real). Os dados transitam exclusivamente pelo `localStorage` do navegador, caracterizando uma arquitetura de alta fricção e alto risco para produção, resultando em uma Dívida Técnica crítica.

A experiência do usuário (UX) e o Design System demonstram maturidade incipiente (Nível 2), com componentes sendo reaproveitados através de pacotes internos (e.g. `packages/ui`), mas exibindo problemas de interatividade simulada, mock-ups em dashboards (admin) e falta de robustez nas validações.

## 2. Veredito geral
O produto atinge um estado **funcional para demonstração visual**, mas é **absolutamente crítico do ponto de vista de arquitetura de software e segurança corporativa**. A interface comunica um padrão "Premium", mas a fundação não suporta escalabilidade ou retenção real de dados. A plataforma precisa passar pela "Fase 1 - Fundação" técnica estrutural imediata antes de almejar novas features no client-side.

## 3. Score da plataforma
**Nota geral: 35/100 (Produto Crítico)**

| Área | Nota | Justificativa |
|---|---|---|
| Experiência do usuário (20%) | 60 | Fluxo compreensível (trilha, onboarding), porém com ações restritas ao client-side. Feedback e validações existem mas são isoladas e restritas. |
| Qualidade visual (15%) | 75 | Boa utilização do Design System base, Framer Motion e Tailwind, garantindo aspecto premium. |
| Arquitetura front-end (15%) | 40 | Ausência de Clean Architecture; alto acoplamento do estado local (Zustand com localStorage) direto nas páginas UI. |
| Design System (10%) | 55 | Tokens no `tailwind.config.ts`, uso estruturado de Radix UI, componentes em `packages/ui` presentes (PremiumCard, MetricCard). Governança ainda parcial. |
| Acessibilidade (10%) | 40 | `focus-visible` mapeado globalmente; contudo, uso massivo de microanimações sem fallback de `prefers-reduced-motion` documentado. |
| Responsividade (10%) | 65 | Tailwind grid/flex utilizado consistentemente, mas painéis de dados (como Admin tables) quebram ou perdem ergonomia em Mobile sem tratativas específicas. |
| Performance (10%) | 50 | Imagens estáticas diretas (evidenciado no README) impactam First Contentful Paint. Client-side routing ajuda percepção mas a arquitetura de persistência impactará sessões. |
| Conteúdo e comunicação (5%) | 40 | Módulos parciais. Mensageria voltada à progressão gamificada mas textos de erro e simulação são frágeis. |
| Testes e confiabilidade (5%) | 15 | Apenas 18 testes unitários; total ausência de E2E e testes de Integração. Sem backend para testar regras de negócio. |

## 4. Principais problemas
1. **Dívida Técnica Crítica**: Ausência absoluta de Backend, persistência em `localStorage` e falta de Clean Architecture.
2. **Segurança de Dados**: Certificações, quizzes e progresso sujeitos a manipulação trivial pelo usuário final (`localStorage` tampering).
3. **Admin Dashboard Fake**: Painel Administrativo estruturado em cima de mockups e seeds de dados (`seedDemo.ts`), sem reflexo da realidade.
4. **Acoplamento de Regra de Negócio na UI**: Funções complexas de "Gamificação" acopladas no store do frontend e chamadas em tempo de renderização.
5. **Dívida de Conteúdo Estrutural**: 12 dos 15 módulos base estão apenas demarcados como "Em construção", limitando a utilidade efetiva da plataforma.
6. **Maturidade de IA Inexistente**: Promessas de ferramentas de IA (Atlas Mentor, Sentinela, Guardião) são apenas views de demonstração sem integração com RAG, LangChain ou LLMs.
7. **Arquitetura de Busca Monolítica**: Busca global inexistente; busca de glossário feita estritamente no client-side (`Array.filter`).
8. **Performance de Mídia**: Uso ineficiente de imagens e tags `<img>` clássicas no lugar de otimizações de bundle do Next.js.
9. **Gerenciamento de Erros e Observabilidade nulos**: Não há logs estruturados, Sentry ou Datadog para tracking em frontend de possíveis erros de execução de estado.
10. **Acessibilidade Incompleta**: Contrastes forçados e dependência massiva de interatividade visual complexa sem fallback explícito (ex.: Heatmaps e Radares simulados em divs estáticas no Admin).

## 5. Dívida técnica
- **Persistência**: `zustand/middleware` `persist` via `localStorage` é incompatível com aplicações Enterprise onde segurança e governança de dados (LGPD) são premissas.
- **Acoplamento**: Estado Global "God Object" (`useOnboardingStore`) contém toda a regra de negócio da aplicação (badges, streak, progresso, usuários matriculados) aglomerada.
- **Ausência de Camadas**: Clean Architecture / DDD ausentes. Componentes em `app/dashboard/page.tsx` consomem estado diretamente e lidam com regras complexas visuais sem separação (ex.: geração randômica de Heatmaps no `useEffect`).
- **Fake Features**: Exportação de CSV, simulações de painel, e visualização de colaboradores baseadas em JSON estático (`seedCollaborators`).
- **APIs Inexistentes**: A pasta `apps/api/` existe mas foi documentada como não funcional no momento.

## 6. Dívida de UX
- **Falta de Feedback Autêntico**: A aprovação do módulo e o envio de quiz disparam interações visuais ricas, mas, como não há processamento real, o usuário não é instruído adequadamente caso ocorram "falhas" no sistema (que neste cenário mockado nunca ocorrem, prejudicando o teste do fluxo de erro).
- **Navegação com Estado Instável**: Devido ao `localStorage`, se o usuário mudar de dispositivo ou limpar o cache, todo o progresso na "Trilha" será obliterado irrevogavelmente. Isso causa ansiedade ao usuário corporativo.
- **Busca Pobre**: O Glossário filtra os termos localmente limitando-se aos termos em tela. A experiência de "Busca Global" (como um Command Menu) não existe.
- **Heatmaps Confusos**: Na página de Dashboard, heatmaps e radares são apenas animações CSS com dados parciais "hardcoded", gerando carga cognitiva desnecessária sem insight de ação acionável.

## 7. Dívida visual
- **Qualidade Percebida vs Funcionalidade**: A interface utiliza componentes Premium (ex. `PremiumCard` com brilho radial, micro-interações do framer-motion) que sugerem alto valor. Contudo, ao clicar em funcionalidades-chave (ex. "IA Academy Tools"), a profundidade não corresponde ao acabamento visual, soando como um produto inacabado.
- **Tipografia**: Uso de fontes nativas em substituição da "Mont" primária cria quebras sutis na hierarquia de peso da fonte desenhada para a marca (exigindo fallbacks como Montserrat).
- **Complexidade de Gráficos**: Gráficos como Radar de Conhecimento, simulados apenas por elementos de bordas circulares (`div` borders), parecem amadores em resoluções pequenas quando perdem alinhamento e contexto (Dashboard).

## 8. Acessibilidade
- **Contrastes no Dark/Light Mode**: Apesar do uso avançado de tokens, algumas badges no modo claro usam opacity (`bg-emerald-500/20`) e reduzem o contraste com o texto interno dependendo do brilho do monitor, violando WCAG AA em telas com brilho reduzido.
- **Componentes Puramente Visuais**: Gráficos radar, e heatmaps de Dashboard (`app/dashboard/page.tsx`) foram gerados exclusivamente via manipulação de `div`s CSS sem suporte por `aria-label`, e sem equivalente tabular `sr-only` legível para leitores de tela.
- **Animações Constantes**: Animações do `framer-motion` são vastas e duram de 150 a 300ms. Não há tratativa ou toggle de "prefers-reduced-motion".

## 9. Responsividade
- **Tabelas Administrativas**: Em telas móveis (`sm` ou `md`), a tabela de painel analítico no `AdminPage` (que exige mínimo de `640px` de largura) aplica scroll horizontal forçado (overflow-x-auto). Tabelas complexas deveriam, no modelo Mobile, comportar-se como List-Cards / Cards expansíveis.
- **Dashboard Metric Cards**: As métricas empilham bem (grid), contudo os gráficos embutidos em faísca (sparklines) com `div` de altura percentual ficam comprimidas no eixo Y dependendo da proporção da tela, tornando o insight da variância visual ineficaz no mobile.

## 10. Performance
- **Client-Side Heavy**: Por usar o `persist` do Zustand em demasia, na carga inicial da aplicação (`app/page.tsx`), a hidratação pode piscar (Flash of Unstyled Content / Hydration Mismatch) em redes mais lentas ou aparelhos legados. (Solucionado em partes com o flag `hasHydrated`, mas ainda frágil).
- **Sem Lazy Loading Verdadeiro**: Os módulos, glossários e assets são todos despachados num bundle unificado. À medida que o conteúdo aumentar para 15 módulos massivos, o Time to First Byte da página estática pesará.

## 11. Design System
- **Nível de Maturidade: 2 (Estruturado)**
- Existem tokens bem documentados no `tailwind.config.ts`, e uso do Turborepo (monorepo). O componente UI é encapsulado (`packages/ui`), que demonstra a semente correta. Contudo:
  - Faltam testes nos componentes UI base.
  - Faltam documentação e cenários interativos tipo Storybook.
  - Componentes complexos (como Quiz, ou Gráficos) não estão devidamente generalizados, estando acoplados às telas da aplicação.

## 12. Auditoria por tela

### Home (Landing Page - `app/page.tsx`)
- **Objetivo**: Atrair o usuário para iniciar ou retomar a trilha.
- **Usuário principal**: Colaboradores iniciantes e experientes.
- **Ação principal**: Botão principal "Iniciar Treinamento".
- **Problemas**: Botões falsos ou que levam a modais de erro não tratado perfeitamente quando não logado.
- **Dívida Técnica / UX**: O cálculo de progresso é feito todo na renderização através de manipulação de hashes do State global.
- **Prioridade / Esforço**: P2 / Baixo
- **Impacto / Score**: 70/100. Visual atrativo mas estruturalmente frágil.

### Cockpit Operacional (Dashboard - `app/dashboard/page.tsx`)
- **Objetivo**: Visão gamificada e técnica da jornada do indivíduo.
- **Ação principal**: Verificação de progresso e próximo módulo.
- **Problemas**: Gráfico de Radar mockado via HTML divs; Heatmap randômico gerado em tempo de execução no `useEffect`.
- **Dívida Visual / UX**: Excesso de informações falsas sem call to actions reais para métricas irrelevantes para um estagiário/operador.
- **Prioridade / Esforço**: P1 / Médio
- **Melhorias recomendadas**: Implementar gráficos com uma lib de Charting robusta (`recharts`), conectar ao backend. Refatorar métricas genéricas por métricas vinculadas a OKRs logísticos.

### Painel Administrativo (`app/admin/page.tsx`)
- **Objetivo**: Visão executiva para Gestores/RH.
- **Ação principal**: Cadastro de colaboradores e extração analítica.
- **Problemas**: Apenas a funcionalidade de Adição local tem efeito. Métricas e tabela baseiam-se em seed fake.
- **Responsividade**: Tabela com scroll infinito horizontal indesejado no mobile.
- **Prioridade / Esforço**: P0 / Alto.
- **Melhorias recomendadas**: Refatorar tabela para List-Cards no Mobile; criar integração real (API) de Analytics usando agregação e paginação Server-side.

## 13. Auditoria por componente
- **`PremiumCard`**: Bom uso do framer-motion e backdrop filters, porém oneroso para CPUs fracas em massa no dashboard.
- **`MetricCard`**: Consistente. Poderia separar o componente "Sparkline" internamente para evitar re-renderizações desnecessárias da borda do cartão.
- **Formulários (`EnrollColaboradorForm`)**: Validações não estruturadas com Zod/React Hook Form de forma robusta e modular no core.
- **Alertas / Modais**: Baseado no Radix UI (correto), porém falha ao não lidar com "Loading states" quando uma operação deve aguardar um response de rede (atualmente tudo é instantâneo via localStorage).

## 14. Quick wins
1. **Modo Leitores de Tela**: Substituir os "gráficos de radar e heatmap css" por `recharts` acessível com texto ARIA descritivo associado. (Esforço baixo).
2. **Textos de Copywriting**: Modificar botões ambíguos para verbos de ação explícita (ex: "Iniciar missão" -> "Ir para módulo 01").
3. **Consolidar Tabelas**: Adicionar quebra condicional (Tailwind `hidden md:table` e `md:hidden flex-col`) para a tabela de Admin. (Esforço Mínimo).

## 15. Plano de redesign
* **Fase 1 — Fundação**: Mover a fonte da verdade do Estado para a API NestJS e Banco de Dados (PostgreSQL). Remover a "Magia" do Frontend.
* **Fase 2 — Componentes**: Introduzir React Hook Form + Zod. Integrar a biblioteca de Gráficos (Recharts) já adicionada no package.json, porém subutilizada.
* **Fase 3 — Fluxos críticos**: Implementar fluxo autêntico de Auth e controle de Sessões / JWT.
* **Fase 4 — Performance**: Revisão do bundle, code splitting e substituição de tags nativas de mídia para tags Next.js otimizadas (`next/image`).
* **Fase 5 — Excelência Enterprise**: Integrar RAG + Pinecone + OpenAI para tornar o ecossistema "IA" demonstrado nas telas inicial do app uma ferramenta real.

## 16. Roadmap
- **Primeiras 48 horas**: Quick Wins Visuais e de Responsividade na Tabela e Dashboards (recharts/mobile layout).
- **Primeiros 7 dias**: Padronização dos tokens e fallbacks de fontes no Design System, remoção de animações desnecessárias por preferências do sistema.
- **30 dias**: Bootstrapping real do NestJS, Prisma e Postgres. Migração do estado local para estado remoto de Autenticação.
- **60 dias**: Substituição do Zustand (persistência) por Server Components + Fetch API / SWR para captura real de progresso e gamificação.
- **90 dias**: Implementação robusta das tabelas (Virtualização de linhas, Filtros avançados paginados em Servidor) no Admin.
- **180 dias**: Pipeline de RAG concluído e integrado às telas de Treinamento.

## 17. Matriz de priorização
1. Migração de Estado Local (LocalStorage) -> Backend API: (Impacto: 5, Esforço: 4, Prioridade: P0)
2. Segurança do Fluxo de Quizzes e Certificados (Backend Validation): (Impacto: 5, Esforço: 3, Prioridade: P0)
3. Criação de Dados e Filtros Paginação (Painel Admin): (Impacto: 4, Esforço: 3, Prioridade: P1)
4. Responsividade de Tabelas/Cards em Dispositivos Móveis: (Impacto: 4, Esforço: 2, Prioridade: P1)
5. Ajuste de acessibilidade (ARIA) nos gráficos / contrastes visuais: (Impacto: 3, Esforço: 1, Prioridade: P2)

## 18. Arquitetura visual recomendada
A UI já se beneficia da arquitetura Premium estilo Linear/Vercel (Dark mode, neon glow laranja, backgrounds escuros minimalistas). Deve-se manter a casca de vidro (glassmorphism) contudo **reduzir os pesos cognitivos em relatórios táticos**: remover bordas decorativas de gráficos que não comunicam dados precisos, substituindo por Chart libraries objetivas (bar charts/sparklines puras).

## 19. Critérios de aceite
- Nenhuma operação de gravação de "Nota", "XP" ou "Usuário" no `localStorage`.
- Admin page suporta visualização agradável em viewport menor que 640px.
- Ferramentas de medição (Lighthouse / Axe) marcam >95 no quesito acessibilidade visual (constraste).

---

## VEREDITO FINAL DA PLATAFORMA

### Estado atual
Protótipo de Frontend (Mockup Interativo) sem viabilidade imediata para produção.

### Score geral
35/100

### Principal dívida técnica
Ausência total de Backend/Infraestrutura de Banco de dados. Utilização perigosa de Client-side State (Zustand persist via localStorage) para regra de negócios críticas.

### Principal dívida de UX
O Dashboard do Admin apresenta métricas irreais (Heatmaps randômicos) que não possuem utilidade funcional gerando ruído interpretativo.

### Principal dívida visual
Inconsistência de uso gráfico (manipulação de div CSS para gráficos ao invés de usar a dependência `recharts` instalada), o que penaliza acessibilidade.

### Principal risco
Segurança e integridade de dados. Usuários podem injetar "Aprovação em todas as trilhas" ou gerar "Certificados Falsos" com simples scripts no console do navegador.

### Principal oportunidade
A plataforma já apresenta uma excelente casca visual premium corporativa, a absorção dos utilizadores iniciais está facilitada.

### Tela mais crítica
`app/admin/page.tsx`

### Fluxo mais crítico
Fluxo de Progressão e Validação de Quizzes (`app/trilha/[slug]/ModulePageClient.tsx`).

### Componente mais problemático
Lógica aglutinada no `lib/store.ts`.

### Quick win de maior impacto
Corrigir a usabilidade móvel da Tabela Administrativa convertendo-a num layout baseado em cards para pequenas resoluções.

### Mudança estrutural mais importante
Introdução do Servidor de Aplicação (NestJS + Prisma + PostgreSQL) e arquitetura baseada em Tokens JWT em substituição ao LocalStorage.

### Primeira ação recomendada
Iniciar o setup da arquitetura de backend em um repositório isolado ou dentro deste Monorepo e congelar a introdução de novos layouts Front-end.

### Resultado esperado em 30 dias
Ter toda a base de usuários e o rastreamento de progresso básicos validados por uma API rodando e armazenando dados corretamente, com Autenticação e Segurança (Role Based Access Control).

### Resultado esperado em 90 dias
A plataforma ter se tornado o hub central, estável e livre de fake data do onboarding da ATLASGR. Todos os dados visuais serão um reflexo verdadeiro da telemetria da aplicação, e totalmente responsivos e acessíveis.

### Nível de confiança da análise
Alto. A análise percorreu exaustivamente a documentação do monorepo, logs de framework, arquitetura de pastas, o modelo de estado (Zustand), as telas e as UI libs.
