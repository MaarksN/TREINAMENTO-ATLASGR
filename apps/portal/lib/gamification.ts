export const XP_PER_MODULE = 100;
export const XP_PER_QUIZ_PASS = 50;
export const XP_PER_EXAM_PASS = 200;
export const XP_CERTIFICATE = 150;

export interface LevelInfo {
  level: number;
  title: string;
  minXp: number;
  maxXp: number | null;
}

export const LEVELS: LevelInfo[] = [
  { level: 1, title: "Recruta Atlas", minXp: 0, maxXp: 149 },
  { level: 2, title: "Aprendiz de Risco", minXp: 150, maxXp: 349 },
  { level: 3, title: "Operador Júnior", minXp: 350, maxXp: 599 },
  { level: 4, title: "Analista em Formação", minXp: 600, maxXp: 899 },
  { level: 5, title: "Especialista Atlas", minXp: 900, maxXp: null },
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
  icon: string;
}

export const BADGES: BadgeDef[] = [
  { id: "primeiro-passo", label: "Primeiro Passo", description: "Concluiu o cadastro e iniciou a trilha.", icon: "flag" },
  { id: "modulo-1", label: "Boas-vindas Atlas", description: "Concluiu o módulo Bem-vindo à ATLASGR.", icon: "handshake" },
  { id: "guardiao-risco", label: "Guardião do Risco", description: "Concluiu o módulo de Gerenciamento de Risco.", icon: "shield" },
  { id: "mestre-connect", label: "Mestre do Connect", description: "Concluiu o módulo de Tecnologia / Sistema Connect.", icon: "cpu" },
  { id: "nota-maxima", label: "Nota Máxima", description: "Gabaritou um quiz de módulo.", icon: "star" },
  { id: "certificado", label: "Certificado Atlas", description: "Concluiu a prova final e emitiu o certificado.", icon: "award" },
  { id: "streak-3", label: "Consistência", description: "Estudou em 3 dias diferentes.", icon: "flame" },
];
