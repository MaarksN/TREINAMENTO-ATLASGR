import type { ContentBlock, ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "@/content/modules/meta";

export interface ChapterInput {
  id: string;
  title: string;
  heading: string;
  paragraphs: string[];
  whyItMatters: string;
  checklist?: string[];
  comparison?: {
    title: string;
    left: { label: string; points: string[] };
    right: { label: string; points: string[] };
  };
  faq?: { q: string; a: string }[];
  caseStudy?: { title: string; text: string; source: string };
}

export interface MediaInput {
  youtubeId: string;
  title: string;
  caption: string;
  transcript: string[];
  source: string;
}

export interface ModuleV2Input {
  slug: string;
  sources: string[];
  objectives: string[];
  scenario: string;
  introHeading: string;
  intro: string[];
  chapters: ChapterInput[];
  summary: string[];
  finalChecklist: string[];
  mindMap: { root: string; branches: { label: string; items: string[] }[] };
  diagram: { title: string; chart: string };
  media?: MediaInput;
}

function paragraph(text: string): string[] {
  return [text];
}

function escapeSvgText(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function academyIllustration(meta: { number: number; title: string; category?: string }): string {
  const title = escapeSvgText(meta.title);
  const category = escapeSvgText(meta.category || "Academia ATLASGR");
  const titleSize = meta.title.length > 38 ? 32 : meta.title.length > 28 ? 38 : 46;
  const accent = meta.number % 3 === 0 ? "#FFC500" : meta.number % 2 === 0 ? "#FF8008" : "#FF5618";
  const moduleNumber = String(meta.number).padStart(2, "0");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
      <title id="title">Ilustração do módulo ${moduleNumber}: ${title}</title>
      <desc id="desc">Arte educacional da Academia ATLASGR para o módulo ${moduleNumber}.</desc>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#171A1F"/>
          <stop offset="0.58" stop-color="#25282D"/>
          <stop offset="1" stop-color="#111318"/>
        </linearGradient>
        <radialGradient id="glow" cx="0.78" cy="0.28" r="0.62">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.44"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="28"/></filter>
      </defs>
      <rect width="1200" height="675" rx="34" fill="url(#bg)"/>
      <rect width="1200" height="675" rx="34" fill="url(#glow)"/>
      <circle cx="1000" cy="142" r="165" fill="${accent}" opacity="0.12" filter="url(#blur)"/>
      <g opacity="0.26" stroke="#FFFFFF" stroke-width="2" fill="none">
        <path d="M690 145 C790 78 885 108 956 185 S1080 322 1110 258"/>
        <path d="M688 500 C792 410 870 452 938 391 S1030 304 1120 355"/>
        <circle cx="727" cy="456" r="9"/><circle cx="842" cy="421" r="9"/><circle cx="938" cy="391" r="9"/><circle cx="1042" cy="326" r="9"/>
      </g>
      <g transform="translate(78 72)">
        <rect width="116" height="42" rx="21" fill="${accent}"/>
        <text x="58" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">MÓDULO ${moduleNumber}</text>
        <text x="0" y="96" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="3" fill="#C8CDD4">ACADEMIA ATLASGR</text>
        <text x="0" y="176" font-family="Arial, sans-serif" font-size="${titleSize}" font-weight="800" fill="#FFFFFF">${title}</text>
        <text x="0" y="222" font-family="Arial, sans-serif" font-size="21" font-weight="600" fill="${accent}">${category}</text>
      </g>
      <g transform="translate(760 190)">
        <rect x="0" y="0" width="330" height="260" rx="28" fill="#FFFFFF" opacity="0.055" stroke="#FFFFFF" stroke-opacity="0.18"/>
        <circle cx="82" cy="76" r="34" fill="none" stroke="${accent}" stroke-width="8"/>
        <path d="M82 110 V176 M48 143 H116" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>
        <path d="M154 76 H272 M154 126 H246 M154 176 H286" stroke="#FFFFFF" stroke-opacity="0.72" stroke-width="10" stroke-linecap="round"/>
      </g>
      <rect x="78" y="568" width="1044" height="1" fill="#FFFFFF" opacity="0.16"/>
      <text x="78" y="617" font-family="Arial, sans-serif" font-size="18" fill="#D9DDE2">Conceito → contexto → aplicação → decisão</text>
      <circle cx="1092" cy="610" r="11" fill="${accent}"/>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function chapterBlocks(chapter: ChapterInput): ContentBlock[] {
  const narration = `${chapter.heading}. ${chapter.paragraphs.join(" ")} Por que isso importa: ${chapter.whyItMatters}`;
  const blocks: ContentBlock[] = [
    {
      type: "text",
      heading: chapter.heading,
      paragraphs: chapter.paragraphs.map(paragraph),
    },
    {
      type: "audio",
      title: `Microaula em áudio — ${chapter.title}`,
      caption: "Ouça, feche o texto e tente reconstruir a ideia central com suas próprias palavras.",
      text: narration,
    },
    {
      type: "callout",
      variant: "info",
      title: "Por que isso importa no trabalho",
      text: paragraph(chapter.whyItMatters),
    },
  ];

  if (chapter.checklist?.length) {
    blocks.push({ type: "checklist", title: "Como aplicar", items: chapter.checklist });
  }
  if (chapter.comparison) {
    blocks.push({ type: "comparison", ...chapter.comparison });
  }
  if (chapter.caseStudy) {
    blocks.push({ type: "case", ...chapter.caseStudy });
  }
  if (chapter.faq?.length) {
    blocks.push({ type: "faq", items: chapter.faq });
  }

  return blocks;
}

export function buildModuleV2(input: ModuleV2Input): ModuleContentFull {
  const meta = getModuleMeta(input.slug);
  if (!meta) throw new Error(`Module meta not found: ${input.slug}`);

  const introBlocks: ContentBlock[] = [];
  if (meta.imageUrl) {
    const imageUrl = meta.imageUrl.startsWith("/brand/modules/") ? academyIllustration(meta) : meta.imageUrl;
    introBlocks.push({
      type: "image",
      url: imageUrl,
      alt: `Ilustração educacional do módulo ${meta.title}`,
      caption: meta.imageCaption || `Visão geral de ${meta.title}`,
      credit: "Acervo visual da Academia ATLASGR",
    });
  }

  introBlocks.push({
    type: "text",
    heading: input.introHeading,
    paragraphs: input.intro.map(paragraph),
  });

  introBlocks.push({
    type: "audio",
    title: `Resumo em áudio — ${meta.title}`,
    caption: "Use para revisar o conceito central sem precisar reler a tela inteira.",
    text: input.intro.join(" "),
  });

  if (input.media) {
    introBlocks.push({
      type: "video",
      youtubeId: input.media.youtubeId,
      title: input.media.title,
      caption: input.media.caption,
      transcript: input.media.transcript,
      source: input.media.source,
    });
  }

  return {
    ...meta,
    sources: input.sources,
    objectives: input.objectives,
    scenario: input.scenario,
    sections: [
      { id: "abertura", title: "Comece pelo contexto", blocks: introBlocks },
      ...input.chapters.map((chapter) => ({
        id: chapter.id,
        title: chapter.title,
        blocks: chapterBlocks(chapter),
      })),
    ],
    summary: input.summary,
    finalChecklist: input.finalChecklist,
    mindMap: input.mindMap,
    diagram: input.diagram,
  };
}
