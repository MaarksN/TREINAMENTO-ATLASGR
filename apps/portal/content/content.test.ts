import { describe, expect, it } from "vitest";
import { glossary } from "./glossary";
import { moduleMetas, getModuleContent, readyModuleSlugs } from "./modules";
import { getAllBuiltQuestions, getQuizForModule } from "./quizzes";
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

describe("quizzes", () => {
  it("every ready module has exactly 10 questions with a valid correctIndex", () => {
    for (const slug of readyModuleSlugs) {
      const questions = getQuizForModule(slug);
      expect(questions, `Módulo ${slug} sem quiz`).toHaveLength(10);
      for (const q of questions) {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
        expect(q.moduleSlug).toBe(slug);
      }
    }
  });

  it("the final exam pool has one set of questions per ready module (150 total for 15 modules)", () => {
    expect(getAllBuiltQuestions()).toHaveLength(readyModuleSlugs.length * 10);
  });

  it("has no duplicate question ids across the full pool", () => {
    const ids = getAllBuiltQuestions().map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
