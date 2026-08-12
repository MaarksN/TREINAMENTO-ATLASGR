# Guia de Deploy no Render - Monorepo AtlasGR LMS

Este guia documenta o procedimento de publicação do monorepo **TREINAMENTO-ATLASGR** na plataforma Render (https://render.com).

---

## 1. Como Funciona a Estrutura do Deploy

Este projeto é um monorepo Turborepo contendo múltiplos pacotes e aplicações em `apps/`:
- **`apps/portal`**: Frontend da Plataforma de Treinamento LMS (Next.js - Estático)
- **`apps/api`**: Microserviço Backend de Gamificação (NestJS - Node.js)

---

## 2. Deploy Automático via Render Blueprint (`render.yaml`)

O repositório inclui o arquivo `render.yaml` na raiz para deploy simplificado via **Blueprints**:

1. Acesse o painel do **Render**: [dashboard.render.com](https://dashboard.render.com/)
2. Clique em **New +** -> **Blueprint**.
3. Conecte o repositório GitHub `TREINAMENTO-ATLASGR`.
4. O Render detectará automaticamente o arquivo `render.yaml` e criará 2 serviços:
   - **`treinamento-atlasgr-portal`** (Static Site) -> Publica a interface do portal LMS.
   - **`treinamento-atlasgr-api`** (Web Service) -> Executa a API NestJS.

---

## 3. Configuração Manual no Render Dashboard (Caso não use Blueprint)

Se preferir criar o Web Service ou Static Site manualmente no painel:

### 3.1. Frontend LMS Portal (`apps/portal`)
- **Service Type**: **Static Site** (Recomendado)
- **Name**: `treinamento-atlasgr-portal`
- **Build Command**: `npm install && npm run build:portal`
- **Publish Directory**: `./apps/portal/out`
- **Rewrite Rules**:
  - **Source**: `/*`
  - **Destination**: `/index.html`

### 3.2. Backend API (`apps/api`)
- **Service Type**: **Web Service**
- **Environment**: Node
- **Build Command**: `npm install && npm run build:api`
- **Start Command**: `npm run start:api`
- **Environment Variables**:
  - `PORT`: `3001`
  - `NODE_ENV`: `production`

---

## 4. Comandos Locais de Validação

- Build do Portal: `npm run build:portal`
- Teste do Portal Estático: `npm run start:portal`
- Build da API: `npm run build:api`
- Build Total do Monorepo: `npm run build`
