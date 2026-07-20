# Portal de Onboarding ATLASGR — Protótipo (Fase 1)

Protótipo de frontend do portal de onboarding e treinamento corporativo da
ATLASGR (Atlas Segurança e Inteligência Logística). Construído em uma sessão
de desenvolvimento assistido, a partir de materiais internos reais da empresa
(organograma, política organizacional, manuais de checklist, cronograma de
treinamentos) — ver [Escopo e fontes](#escopo-e-fontes) abaixo.

**Demo:** publicado via GitHub Pages neste repositório (Actions → Pages).

## O que está funcional

- Landing institucional com o propósito, valores e logomarca real da ATLASGR.
- Cadastro obrigatório (LGPD) antes de acessar a trilha — dados ficam apenas
  no `localStorage` do navegador; não há backend nesta fase.
- Trilha com os 15 módulos do onboarding: **3 módulos com conteúdo completo,
  quiz e certificação** (Bem-vindo à ATLASGR, Gerenciamento de Risco, Software
  Logístico/Sistema Atlas Connect); os demais 12 mostram o outline estruturado
  ("em construção").
- Glossário técnico com termos clicáveis (popover) usados nos módulos.
- Quiz por módulo (5 perguntas, 70% para aprovar) e Prova Final (15 perguntas
  embaralhadas, com tempo limite).
- Certificado em PDF gerado no navegador (`pdf-lib` + QR code + hash SHA-256),
  sem assinatura digital com validade jurídica — isso pertence a uma fase de
  backend futura.
- Gamificação (XP, níveis, badges, streak) e dashboard do colaborador.
- Painel administrativo com KPIs e tabela de colaboradores — os dados de
  colaboradores são um seed de demonstração (não há banco de dados nesta
  fase); a única linha real é a sessão atual do navegador.
- Dark mode / light mode, responsivo, com micro-animações (Framer Motion).

## Escopo e fontes

Este é o resultado da **Fase 1** de um pedido muito mais amplo (uma
plataforma completa com backend, banco de dados, 15 módulos totalmente
aprofundados, glossário de 300+ termos etc.). Dado o tamanho real desse
pedido, o desenvolvimento foi conduzido em fases, com o usuário escolhendo:
protótipo de frontend primeiro, com conteúdo dos módulos baseado nos
documentos internos reais disponíveis (não inventado). As fontes de cada
módulo pronto estão listadas na própria página do módulo, seção "Fontes deste
módulo".

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion ·
Zustand (persist) · Radix UI · pdf-lib · qrcode · Vitest.

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:3000
npm test          # Vitest — inclui testes de integridade de conteúdo
npm run lint
npm run build      # build de produção (static export)
```

## Deploy (GitHub Pages)

O `next.config.ts` usa `output: "export"` e aplica `basePath`/`assetPrefix`
automaticamente quando a build roda em GitHub Actions (`GITHUB_ACTIONS=true`).
O workflow em `.github/workflows/deploy.yml` builda, testa e publica o
conteúdo estático (`out/`) no GitHub Pages a cada push em `main`.

## Estrutura

```
app/          rotas (App Router)
components/   UI, layout, módulos, quiz, certificado, glossário
content/      metadados dos 15 módulos, conteúdo completo dos 3 prontos,
              glossário, banco de questões
lib/          store (Zustand), tipos, utilitários, gamificação
public/brand/ logomarca oficial da ATLASGR (baixada de atlasgr.com.br)
```
