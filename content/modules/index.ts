import type { ModuleContentFull } from "@/lib/types";
import { moduleMetas, getModuleMeta } from "./meta";
import { module01 } from "./01-bem-vindo-atlasgr";
import { module03 } from "./03-gerenciamento-risco";
import { module05 } from "./05-software-logistico";

export { moduleMetas, getModuleMeta };

const fullModules: Record<string, ModuleContentFull> = {
  [module01.slug]: module01,
  [module03.slug]: module03,
  [module05.slug]: module05,
};

export function getModuleContent(slug: string): ModuleContentFull | undefined {
  return fullModules[slug];
}

export const readyModuleSlugs = Object.keys(fullModules);
