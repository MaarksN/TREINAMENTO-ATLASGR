// next/image's `unoptimized` mode renders a plain <img> without Next's
// automatic basePath rewriting, so static assets referenced via next/image
// break on GitHub Pages (served under /TREINAMENTO-ATLASGR/). This constant
// is resolved at build time (GITHUB_ACTIONS is set on all GH-hosted runners)
// and baked directly into the static HTML output.
export const BASE_PATH = process.env.GITHUB_ACTIONS === "true" ? "/TREINAMENTO-ATLASGR" : "";
