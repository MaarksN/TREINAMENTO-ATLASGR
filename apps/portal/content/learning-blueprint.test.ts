import { describe, expect, it } from "vitest";
import { moduleMetas } from "@/content/modules";
import { getPracticeLab, getRoleTrack, practiceLabs, roleTracks } from "@/content/learning-blueprint";

describe("Academia ATLASGR learning blueprint", () => {
  const readyModules = moduleMetas.filter((module) => module.status === "ready");
  const validSlugs = new Set(readyModules.map((module) => module.slug));

  it("gives every ready module a complete applied-practice lab", () => {
    for (const module of readyModules) {
      const lab = getPracticeLab(module.slug);
      expect(lab, `missing practice lab for ${module.slug}`).toBeDefined();
      expect(lab?.mission.length).toBeGreaterThan(20);
      expect(lab?.scenario.length).toBeGreaterThan(20);
      expect(lab?.deliverable.length).toBeGreaterThan(20);
      expect(lab?.rubric).toHaveLength(3);
      expect(lab?.recallPrompts).toHaveLength(3);
      expect(lab?.transferQuestion.length).toBeGreaterThan(20);
    }
  });

  it("does not carry orphan practice labs", () => {
    expect(Object.keys(practiceLabs).sort()).toEqual(Array.from(validSlugs).sort());
  });

  it("keeps every role-track priority inside the published curriculum", () => {
    for (const track of roleTracks) {
      expect(track.prioritySlugs.length).toBeGreaterThanOrEqual(5);
      expect(new Set(track.prioritySlugs).size).toBe(track.prioritySlugs.length);
      for (const slug of track.prioritySlugs) {
        expect(validSlugs.has(slug), `${track.id} references invalid module ${slug}`).toBe(true);
      }
    }
  });

  it("routes common functions to the intended personalized track", () => {
    expect(getRoleTrack("SDR", "Comercial").id).toBe("comercial");
    expect(getRoleTrack("Analista de Monitoramento", "Operação").id).toBe("operacao");
    expect(getRoleTrack("Desenvolvedor", "Tecnologia").id).toBe("tecnologia");
    expect(getRoleTrack("Coordenador", "Gestão").id).toBe("gestao");
    expect(getRoleTrack("Assistente", "Administrativo").id).toBe("geral");
  });
});
