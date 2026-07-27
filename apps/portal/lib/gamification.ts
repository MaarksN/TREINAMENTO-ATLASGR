export const XP_PER_MODULE = 100;
export const XP_PER_QUIZ_PASS = 50;
export const XP_PER_EXAM_PASS = 200;
export const XP_CERTIFICATE = 150;
export const XP_PER_ACADEMY_TOOL = 20;
export const XP_PER_AGENT_CREATED = 80;

export interface LevelInfo {
  level: number;
  title: string;
  minXp: number;
  maxXp: number | null;
}

export const LEVELS: LevelInfo[] = [
  { level: 1, title: "Recruta Atlas", minXp: 0, maxXp: 149 },
  { level: 2, title: "Agente Logístico", minXp: 150, maxXp: 349 },
  { level: 3, title: "Operador Tático", minXp: 350, maxXp: 599 },
  { level: 4, title: "Estrategista de Rota", minXp: 600, maxXp: 899 },
  { level: 5, title: "Comandante Atlas", minXp: 900, maxXp: null },
];

export function getLevel(xp: number): LevelInfo {
  return LEVELS.find((l) => xp >= l.minXp && (l.maxXp === null || xp <= l.maxXp)) ?? LEVELS[0];
}

export function levelProgress(xp: number): { current: LevelInfo; next: LevelInfo | null; pct: number } {
  const current = getLevel(xp);
  const idx = LEVELS.findIndex((l) => l.level === current.level);
  const next = LEVELS[idx + 1] ?? null;
  if (!next) return { current, next: null, pct: 100 };
  const span = next.minXp - current.minXp;
  const pct = Math.min(100, Math.round(((xp - current.minXp) / span) * 100));
  return { current, next, pct };
}

export interface BadgeDef {
  id: string;
  label: string;
  description: string;
  tier: "bronze" | "silver" | "gold" | "holographic";
}

export const BADGES: BadgeDef[] = [
  { id: "primeiro-passo", label: "Iniciação Logística", description: "Primeiro login no Cockpit AtlasGR.", tier: "bronze" },
  { id: "modulo-1", label: "Operador de Base", description: "Concluiu o módulo Bem-vindo à ATLASGR.", tier: "bronze" },
  { id: "guardiao-risco", label: "Guardião da Carga", description: "Concluiu o módulo de Gerenciamento de Risco.", tier: "silver" },
  { id: "mestre-connect", label: "Arquiteto Connect", description: "Concluiu o módulo de Tecnologia / Sistema Connect.", tier: "gold" },
  { id: "nota-maxima", label: "Precisão Cirúrgica", description: "Gabaritou um simulador tático.", tier: "gold" },
  { id: "certificado", label: "Especialista Homologado", description: "Emitiu o certificado oficial AtlasGR.", tier: "holographic" },
  { id: "streak-3", label: "Vigilância Constante", description: "Acessou o Cockpit por 3 dias consecutivos.", tier: "silver" },
  { id: "explorador-ia", label: "Explorador de IA", description: "Explorou três ferramentas da Academia ATLASGR.", tier: "silver" },
  { id: "arquiteto-agentes", label: "Arquiteto de Agentes", description: "Criou o primeiro agente orientado por prompt.", tier: "gold" },
];
