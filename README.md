# Academia ATLASGR

Plataforma de onboarding, capacitação corporativa e validação de domínio da ATLASGR.

A experiência foi reconstruída para seguir um ciclo de aprendizagem aplicável ao trabalho:

**contexto → microaula multimídia → recuperação ativa → prática → revisão → simulador → domínio**.

A meta do produto não é fazer o colaborador “terminar aulas”. É aumentar a qualidade das decisões que ele toma no trabalho.

## Academy V2

### 15 módulos reescritos

O runtime utiliza um currículo V2 totalmente revisado para:

- Fundamentos e cultura ATLASGR;
- Mercado de logística;
- Gerenciamento de Risco;
- Produtos ATLASGR;
- Atlas Connect;
- Atlas Profile;
- Integrações;
- Clientes;
- Processo Comercial;
- Termos Técnicos;
- Operação;
- Compliance;
- Tecnologia;
- Casos Reais;
- Preparação Final.

O conteúdo antigo permanece no repositório apenas como histórico. A aplicação carrega exclusivamente o currículo em `apps/portal/content/academy-v2/`.

A redação V2 evita superlativos artificiais e afirmações não sustentadas. Cada módulo explicita suas fontes e separa conceito, evidência, regra, hipótese e decisão.

### Uma tela por microaula

Os capítulos não são mais fragmentados em uma tela para cada pequeno card. Cada microaula reúne, no mesmo quadro:

- título e objetivo;
- texto principal;
- imagem educacional com texto alternativo, legenda e crédito;
- áudio da própria aula;
- transcrição do áudio;
- vídeo quando existe mídia oficial adequada;
- legenda/transcrição de apoio do vídeo;
- explicação de por que aquilo importa no trabalho;
- checklist, comparação, FAQ ou case quando ajudam a aplicar o conceito.

Cada módulo ainda possui cenário imersivo, objetivos, laboratório prático, diagrama, revisão, fontes e simulador.

### Áudio, legenda e acessibilidade

A Academia oferece duas camadas de narração:

1. **Ouvir tela**, que lê o conteúdo completo da microaula e exibe legenda sincronizada durante a fala.
2. **Microaulas em áudio**, disponíveis dentro do conteúdo para revisão rápida, com controle de pausa, reinício e velocidade e texto integral do áudio.

A voz usa a Web Speech API do navegador em `pt-BR` quando disponível.

### LIBRAS

O intérprete virtual **VLibras** é carregado globalmente na Academia e pode ser aberto pelo botão oficial ou pelo controle `LIBRAS` da barra de acessibilidade.

A indisponibilidade do serviço externo não bloqueia o restante da plataforma.

### Vídeos

O player usa modo de privacidade do YouTube (`youtube-nocookie`) e solicita legendas em português quando disponíveis. Cada vídeo educacional possui:

- título;
- legenda contextual;
- transcrição/roteiro de apoio no próprio portal;
- identificação da fonte.

A política do currículo é **não preencher módulos com vídeos aleatórios apenas para parecer multimídia**. Vídeo entra quando existe fonte institucional ou técnica validada. A V2 já utiliza o vídeo institucional disponível no projeto e vídeo oficial do Atlas Profile.

## Aprendizagem aplicada

### Laboratórios em todos os módulos

Todos os 15 módulos possuem um laboratório de aplicação com:

- missão específica;
- cenário de trabalho;
- entrega esperada;
- três critérios de excelência;
- três perguntas de recuperação ativa;
- autochecagem de confiança;
- pergunta de transferência para a rotina.

A prática testa julgamento e aplicação, e não apenas reconhecimento de alternativa correta.

### 150 questões novas

A avaliação foi alinhada ao currículo V2 com **10 perguntas por módulo, totalizando 150 itens**.

As questões antigas foram retiradas do runtime. A nova base prioriza:

- cenários;
- aplicação de critérios;
- comunicação;
- alçada;
- evidência;
- tratamento de exceção;
- leitura de risco;
- privacidade;
- decisão comercial e operacional.

A prova final continua usando a base consolidada dos módulos.

### Rota personalizada por função

A Academia recomenda uma rota de prioridade de acordo com cargo/departamento informado no cadastro:

- Comercial e Relacionamento;
- Operação e Monitoramento;
- Tecnologia e Integrações;
- Gestão e Liderança;
- Formação Essencial.

A rota não remove conteúdo do currículo. Ela ajuda a priorizar competências de maior impacto para a função.

### Mapa de domínio

A trilha mostra:

- módulos validados;
- melhor resultado registrado por módulo;
- média de domínio validado;
- domínio por categoria;
- próxima ação recomendada.

Assim, progresso deixa de significar apenas “visitou a tela”.

## Arquitetura

Monorepo com Turborepo:

```text
apps/
  portal/     Next.js / TypeScript / Tailwind / experiência LMS
  api/        NestJS / serviços de backend em evolução
  admin/      workspace administrativo
packages/     pacotes compartilhados
```

Fonte de verdade do novo currículo:

```text
apps/portal/content/academy-v2/
apps/portal/content/quizzes-v2/
apps/portal/content/learning-blueprint.ts
apps/portal/content/glossary.ts
```

Camada multimídia e acessibilidade:

```text
apps/portal/components/media/LessonMedia.tsx
apps/portal/components/accessibility/AccessibilityToolbar.tsx
apps/portal/components/accessibility/VLibrasWidget.tsx
apps/portal/components/module/ContentBlockView.tsx
```

## Qualidade automatizada

O `Quality Gate` executa em pull requests/branches:

```text
npm ci
npm run lint
npm test
npm run build
```

Os testes de conteúdo também verificam automaticamente que:

- todos os 15 módulos publicados possuem estrutura completa;
- todo módulo possui imagem com `alt` e legenda;
- todo módulo possui múltiplos momentos de áudio;
- vídeos possuem legenda contextual e transcrição de apoio;
- laboratórios existem para todos os módulos;
- todas as 150 questões possuem estrutura válida;
- expressões legadas e claims problemáticos definidos pela auditoria não reaparecem no currículo runtime.

## Rodando localmente

```bash
npm ci
npm run dev
```

Validação completa:

```bash
npm run lint
npm test
npm run build
```

Portal isolado:

```bash
npm run build:portal
npm run test:e2e
npm run storybook
```

## Governança de conteúdo

Materiais institucionais e documentos internos aprovados devem continuar sendo a referência para atualização do conteúdo. Não introduza números, clientes, políticas, certificações, resultados, integrações ou promessas comerciais sem evidência documental.

Quando uma instrução de treinamento divergir de PGR, POP, contrato ou procedimento vigente, a regra operacional atual deve ser validada com a área responsável antes da execução.

## Estado de produção

A experiência pedagógica e visual está significativamente mais madura. Ainda assim, **persistência corporativa, autenticação centralizada, governança de dados e integração completa do portal com backend/banco precisam ser validadas antes de tratar o sistema como LMS Enterprise definitivo**.

## Princípio do projeto

> O melhor treinamento não é o que o colaborador termina. É o que muda a próxima decisão dele.
