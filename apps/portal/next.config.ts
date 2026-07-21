import type { NextConfig } from "next";

// Build como site estático para publicar no GitHub Pages. Em GitHub Actions
// (env GITHUB_ACTIONS=true) o site é servido em /TREINAMENTO-ATLASGR/, então
// aplicamos basePath/assetPrefix só nesse contexto — build e dev locais
// continuam servindo a partir da raiz.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "TREINAMENTO-ATLASGR";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubActions ? `/${repoName}` : undefined,
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
};

export default nextConfig;
