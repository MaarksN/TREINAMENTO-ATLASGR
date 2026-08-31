import type { ModuleContentFull } from "@/lib/types";
import { moduleMetas, getModuleMeta } from "./meta";
import {
  academyModule01,
  academyModule02,
  academyModule03,
  academyModule04,
  academyModule05,
} from "@/content/academy-v2/fundamentos";
import {
  academyModule06,
  academyModule07,
  academyModule08,
  academyModule09,
  academyModule10,
} from "@/content/academy-v2/negocios";
import {
  academyModule11,
  academyModule12,
  academyModule13,
  academyModule14,
  academyModule15,
} from "@/content/academy-v2/operacao";

export { moduleMetas, getModuleMeta };

// O conteúdo legado permanece no repositório apenas para histórico e comparação.
// A aplicação usa exclusivamente o currículo Academy V2 abaixo, revisado para
// linguagem baseada em evidência, aplicação prática e acessibilidade multimídia.
const fullModules: Record<string, ModuleContentFull> = {
  [academyModule01.slug]: academyModule01,
  [academyModule02.slug]: academyModule02,
  [academyModule03.slug]: academyModule03,
  [academyModule04.slug]: academyModule04,
  [academyModule05.slug]: academyModule05,
  [academyModule06.slug]: academyModule06,
  [academyModule07.slug]: academyModule07,
  [academyModule08.slug]: academyModule08,
  [academyModule09.slug]: academyModule09,
  [academyModule10.slug]: academyModule10,
  [academyModule11.slug]: academyModule11,
  [academyModule12.slug]: academyModule12,
  [academyModule13.slug]: academyModule13,
  [academyModule14.slug]: academyModule14,
  [academyModule15.slug]: academyModule15,
};

export function getModuleContent(slug: string): ModuleContentFull | undefined {
  return fullModules[slug];
}

export const readyModuleSlugs = Object.keys(fullModules);
