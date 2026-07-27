// Estruturas de conteúdo do portal. Textos ricos são compostos por "runs":
// uma string simples ou uma referência a um termo do glossário, renderizada
// como popover clicável pelo componente RichText.
export type TextRun = string | { term: string };
export type Paragraph = TextRun[];

export type ContentBlock =
  | { type: "text"; heading?: string; paragraphs: Paragraph[] }
  | { type: "callout"; variant: "info" | "warning" | "success"; title: string; text: Paragraph }
  | { type: "checklist"; title: string; items: string[] }
  | {
      type: "comparison";
      title: string;
      left: { label: string; points: string[] };
      right: { label: string; points: string[] };
    }
  | { type: "timeline"; title: string; items: { label: string; text: string }[] }
  | { type: "case"; title: string; text: string; source: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "stat"; items: { value: string; label: string }[] }
  | { type: "quote"; text: string; author?: string };

export interface ModuleSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export type ModuleStatus = "ready" | "building";

export interface ModuleMeta {
  slug: string;
  number: number;
  title: string;
  shortDescription: string;
  durationMinutes: number;
  status: ModuleStatus;
  category?: string;
  outline?: { what: string; why: string; how: string };
}

export interface ModuleContentFull extends ModuleMeta {
  sources: string[];
  objectives: string[];
  sections: ModuleSection[];
  summary: string[];
  finalChecklist: string[];
  mindMap: { root: string; branches: { label: string; items: string[] }[] };
  /** Situação crítica específica do módulo, exibida no início da página (ImmersiveStory). */
  scenario: string;
  /** Diagrama Mermaid específico do módulo, exibido na página de conteúdo. */
  diagram: { title: string; chart: string };
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  example?: string;
  importance?: string;
  atlasUsage?: string;
}

export interface QuizQuestion {
  id: string;
  moduleSlug: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reference: string;
}

export interface RegistrationData {
  nomeCompleto: string;
  cpf: string;
  cargo: string;
  departamento: string;
  gestor: string;
  email: string;
  telefone: string;
  empresa: string;
  cidade: string;
  estado: string;
  dataHora: string;
  userAgent: string;
  consentimentoLGPD: boolean;
  aceiteTermos: boolean;
}

export interface EnrolledColaborador extends RegistrationData {
  id: string;
  enrolledAt: string;
  accessCode: string;
}

export interface ModuleProgress {
  completed: boolean;
  bestScore?: number;
  passed?: boolean;
  attempts: number;
  xpEarned: number;
}

export interface ExamResult {
  score: number;
  passed: boolean;
  date: string;
  totalQuestions: number;
  correct: number;
}

export interface CertificateInfo {
  id: string;
  issuedAt: string;
  hash: string;
  cargaHoraria: number;
  score: number;
}
