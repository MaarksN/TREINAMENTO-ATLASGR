import type { ModuleContentFull } from "@/lib/types";
import { moduleMetas, getModuleMeta } from "./meta";
import { module01 } from "./01-bem-vindo-atlasgr";
import { module02 } from "./02-mercado-logistica";
import { module03 } from "./03-gerenciamento-risco";
import { module04 } from "./04-produtos-atlasgr";
import { module05 } from "./05-software-logistico";
import { module06 } from "./06-atlas-profile";
import { module07 } from "./07-integracoes";
import { module08 } from "./08-clientes";
import { module09 } from "./09-processo-comercial";
import { module10 } from "./10-termos-tecnicos";
import { module11 } from "./11-operacao";
import { module12 } from "./12-compliance";
import { module13 } from "./13-tecnologia";
import { module14 } from "./14-casos-reais";
import { module15 } from "./15-preparacao-final";

export { moduleMetas, getModuleMeta };

const fullModules: Record<string, ModuleContentFull> = {
  [module01.slug]: module01,
  [module02.slug]: module02,
  [module03.slug]: module03,
  [module04.slug]: module04,
  [module05.slug]: module05,
  [module06.slug]: module06,
  [module07.slug]: module07,
  [module08.slug]: module08,
  [module09.slug]: module09,
  [module10.slug]: module10,
  [module11.slug]: module11,
  [module12.slug]: module12,
  [module13.slug]: module13,
  [module14.slug]: module14,
  [module15.slug]: module15,
};

export function getModuleContent(slug: string): ModuleContentFull | undefined {
  return fullModules[slug];
}

export const readyModuleSlugs = Object.keys(fullModules);
