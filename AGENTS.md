# Diretrizes do Agente - TREINAMENTO-ATLASGR

## 1. Contexto do Projeto
- Monorepo de Capacitação Corporativa (LMS) e Gestão de Conteúdos de Treinamento AtlasGR.

## 2. Regras de Código & Arquitetura Monorepo
- Escreva código completo de nível de produção. NUNCA use comentários como `// TODO: implementar` ou omita trechos de código.
- Stack: Turborepo (`turbo.json`), Next.js / Node.js, Markdown Content Pipeline.
- Respeite a divisão de pacotes dentro da estrutura de monorepo (`apps/` e `packages/`).
- Mantenha a conformidade com as auditorias de UX/UI registradas em `AUDITORIA_UX_UI_TECH.md`.
- NUNCA quebre a compatibilidade dos módulos de onboarding comercial ou treinamentos operacionais.

## 3. Qualidade & Testes
- Valide os builds de todos os apps no workspace antes de subir alterações (`npx turbo run build`).
