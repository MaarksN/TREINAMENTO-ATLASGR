# Academia ATLASGR

Plataforma de onboarding, capacitação corporativa e validação de domínio da ATLASGR.

O projeto deixou de ser apenas um protótipo de leitura + quiz. A experiência atual foi desenhada para seguir um ciclo de aprendizagem mais forte:

**contexto → objetivo → conteúdo → prática → recuperação ativa → revisão → simulador → domínio**.

A meta do produto não é fazer o colaborador “terminar aulas”. É aumentar a qualidade das decisões que ele toma no trabalho.

## O que existe hoje

### Formação completa

- **15 módulos publicados**, cobrindo fundamentos, mercado, gerenciamento de risco, portfólio ATLASGR, Atlas Connect, Atlas Profile, integrações, clientes, processo comercial, termos técnicos, operação, compliance, tecnologia, casos reais e preparação final.
- Conteúdo estruturado em capítulos e blocos ricos.
- Cenários imersivos por módulo.
- Diagramas operacionais.
- Resumo e checklist de domínio.
- Banco de questões por módulo.
- Prova final temporizada.
- Certificado gerado no navegador.

### Laboratórios práticos

Todos os módulos possuem um laboratório de aplicação com:

- missão específica;
- cenário de trabalho;
- entrega esperada;
- três critérios de excelência;
- três perguntas de recuperação ativa;
- autochecagem de confiança;
- pergunta de transferência para a rotina.

A prática é propositalmente aberta. O objetivo é testar julgamento e aplicação, e não somente reconhecimento de alternativa correta.

### Rota personalizada por função

A Academia identifica o contexto informado no cadastro e recomenda uma rota de prioridade para perfis como:

- Comercial e Relacionamento;
- Operação e Monitoramento;
- Tecnologia e Integrações;
- Gestão e Liderança;
- Formação Essencial.

A rota não remove módulos do currículo. Ela apenas ajuda o aluno a priorizar o que gera mais impacto para sua função.

### Mapa de domínio

A trilha mostra:

- módulos validados;
- melhor nota registrada por módulo;
- média de domínio validado;
- domínio por categoria;
- próxima ação recomendada.

Assim, progresso deixa de significar apenas “visitou a tela”.

### Recursos adicionais

- glossário técnico;
- dashboard do colaborador;
- ranking e gamificação;
- daily quests;
- área de produtos e simuladores;
- shorts;
- copiloto de IA na interface;
- modo foco;
- narração por voz e recursos de acessibilidade;
- LIBRAS via integração de acessibilidade existente;
- painel administrativo;
- tema claro/escuro;
- responsividade;
- Storybook;
- Vitest e Playwright no workspace.

## Arquitetura

Monorepo com Turborepo:

```text
apps/
  portal/     Next.js / TypeScript / Tailwind / conteúdo e experiência LMS
  api/        NestJS / serviços de backend em evolução
  admin/      workspace administrativo
packages/     pacotes compartilhados
```

Stack principal do portal:

- Next.js 16 / App Router
- React / TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- Radix UI
- pdf-lib / qrcode
- Vitest
- Playwright
- Storybook

## Estrutura pedagógica

O currículo segue três níveis de evidência:

1. **Compreender**: o aluno consegue explicar conceito, contexto e impacto.
2. **Aplicar**: o aluno consegue tomar uma decisão em um cenário próximo do trabalho real.
3. **Validar**: o aluno demonstra domínio mínimo no simulador e consolida a trilha na avaliação final.

O arquivo `apps/portal/content/learning-blueprint.ts` concentra os laboratórios práticos e as rotas personalizadas.

## Qualidade

Pull requests e branches passam pelo workflow **Quality Gate**:

```text
npm ci
npm run lint
npm test
npm run build
```

A publicação em GitHub Pages continua separada e ocorre a partir da `main`.

## Rodando localmente

Na raiz do monorepo:

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

## Fonte de verdade do conteúdo

O conteúdo está em:

```text
apps/portal/content/modules/
apps/portal/content/quizzes/
apps/portal/content/glossary.ts
apps/portal/content/learning-blueprint.ts
```

Materiais institucionais e documentos internos devem continuar sendo a referência para atualização do conteúdo. Não introduza números, políticas, certificações, clientes ou promessas comerciais sem evidência documental.

## Estado de produção

O conteúdo e a experiência do portal estão consideravelmente mais maduros que a Fase 1 original. Ainda assim, **persistência corporativa, autenticação centralizada, governança de dados e integração completa do portal com backend/banco devem ser validadas antes de tratar o sistema como LMS Enterprise definitivo**.

Esse limite é intencionalmente explícito para não confundir qualidade visual e pedagógica com prontidão de infraestrutura.

## Princípio do projeto

> O melhor treinamento não é o que o colaborador termina. É o que muda a próxima decisão dele.
