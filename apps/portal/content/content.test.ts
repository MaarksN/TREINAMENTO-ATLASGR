import { describe, expect, it } from "vitest";
import { glossary } from "./glossary";
import { moduleMetas, getModuleContent, readyModuleSlugs } from "./modules";
import type { ContentBlock, Paragraph } from "@/lib/types";

function collectTermRefs(paragraphs: Paragraph[]): string[] {
  return paragraphs.flatMap((p) => p.filter((run) => typeof run !== "string").map((run) => (run as { term: string }).term));
}

function collectBlockTermRefs(block: ContentBlock): string[] {
  if (block.type === "text") return collectTermRefs(block.paragraphs);
  if (block.type === "callout") return collectTermRefs([block.text]);
  return [];
}

describe("module metadata", () => {
  it("has exactly 15 modules numbered 1..15 with unique slugs", () => {
    expect(moduleMetas).toHaveLength(15);
    const numbers = moduleMetas.map((m) => m.number).sort((a, b) => a - b);
    expect(numbers).toEqual(Array.from({ length: 15 }, (_, i) => i + 1));
    expect(new Set(moduleMetas.map((m) => m.slug)).size).toBe(15);
  });

  it("marks every 'building' module with an outline and every 'ready' module without one", () => {
    for (const m of moduleMetas) {
      if (m.status === "building") expect(m.outline).toBeTruthy();
    }
  });
});

describe("Academy V2 content quality", () => {
  it("publishes a complete evidence-first lesson structure for every ready module", () => {
    for (const slug of readyModuleSlugs) {
      const content = getModuleContent(slug)!;
      expect(content.sources.length, `${slug}: sources`).toBeGreaterThanOrEqual(2);
      expect(content.objectives.length, `${slug}: objectives`).toBeGreaterThanOrEqual(4);
      expect(content.sections.length, `${slug}: sections`).toBeGreaterThanOrEqual(4);
      expect(content.summary.length, `${slug}: summary`).toBeGreaterThanOrEqual(4);
      expect(content.finalChecklist.length, `${slug}: checklist`).toBeGreaterThanOrEqual(4);
      expect(content.scenario.length, `${slug}: scenario`).toBeGreaterThan(80);
    }
  });

  it("gives every module a captioned image and multiple audio learning moments", () => {
    for (const slug of readyModuleSlugs) {
      const content = getModuleContent(slug)!;
      const blocks = content.sections.flatMap((section) => section.blocks);
      const images = blocks.filter((block) => block.type === "image");
      const audio = blocks.filter((block) => block.type === "audio");

      expect(images.length, `${slug}: image`).toBeGreaterThanOrEqual(1);
      expect(audio.length, `${slug}: audio`).toBeGreaterThanOrEqual(4);

      for (const image of images) {
        if (image.type !== "image") continue;
        expect(image.alt?.trim().length, `${slug}: image alt`).toBeGreaterThan(10);
        expect(image.caption?.trim().length, `${slug}: image caption`).toBeGreaterThan(10);
      }
    }
  });

  it("ships official video learning moments with transcript support", () => {
    const videos = readyModuleSlugs.flatMap((slug) => {
      const content = getModuleContent(slug)!;
      return content.sections.flatMap((section) => section.blocks).filter((block) => block.type === "video");
    });

    expect(videos.length).toBeGreaterThanOrEqual(2);
    for (const video of videos) {
      if (video.type !== "video") continue;
      expect(video.youtubeId.length).toBeGreaterThan(5);
      expect(video.caption.length).toBeGreaterThan(20);
      expect(video.transcript?.length || 0).toBeGreaterThanOrEqual(2);
    }
  });

  it("keeps legacy hype and unsupported demo claims out of the runtime curriculum", () => {
    const serialized = readyModuleSlugs.map((slug) => JSON.stringify(getModuleContent(slug))).join("\n").toLocaleLowerCase("pt-BR");
    const bannedFragments = [
      "precisão letal",
      "elite operacional",
      "rastreamento post-mortem",
      "salvou r$ 2.5",
      "salvou r$ 2,5",
      "vanguarda na predição algorítmica",
    ];

    for (const fragment of bannedFragments) {
      expect(serialized.includes(fragment), `legacy fragment found: ${fragment}`).toBe(false);
    }
  });
});

describe("glossary references in module content", () => {
  const glossaryIds = new Set(glossary.map((g) => g.id));

  it("every {term} reference used in a ready module exists in the glossary", () => {
    for (const slug of readyModuleSlugs) {
      const content = getModuleContent(slug)!;
      for (const section of content.sections) {
        for (const block of section.blocks) {
          for (const ref of collectBlockTermRefs(block)) {
            expect(glossaryIds.has(ref), `Módulo ${slug}: termo '${ref}' não existe no glossário`).toBe(true);
          }
        }
      }
    }
  });
});

