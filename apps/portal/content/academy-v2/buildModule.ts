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

function chapterBlocks(chapter: ChapterInput): ContentBlock[] {
  const blocks: ContentBlock[] = [
    {
      type: "text",
      heading: chapter.heading,
      paragraphs: chapter.paragraphs.map(paragraph),
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
    introBlocks.push({
      type: "image",
      url: meta.imageUrl,
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
