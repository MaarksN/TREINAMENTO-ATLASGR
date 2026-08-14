"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardList,
  Compass,
  Map as MapIcon,
  Maximize,
  Minimize,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Badge } from "@/components/ui/Badge";
import { ContentBlockView } from "@/components/module/ContentBlockView";
import { PracticeLab } from "@/components/module/PracticeLab";
import { QuizRunner } from "@/components/quiz/QuizRunner";
import { moduleMetas, getModuleMeta, getModuleContent } from "@/content/modules";
import { getPracticeLab } from "@/content/learning-blueprint";
import { getQuizForModule } from "@/content/quizzes";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { ImmersiveStory } from "@/components/module/ImmersiveStory";
import { MermaidViewer } from "@/components/diagrams/MermaidViewer";
import { ModuleRating } from "@/components/module/ModuleRating";
import { CertificateActions } from "@/components/module/CertificateActions";
import type { ContentBlock, ModuleContentFull, ModuleSection, ModuleMeta } from "@/lib/types";
import { AccessibilityToolbar } from "@/components/accessibility/AccessibilityToolbar";

type Screen =
  | { kind: "cover" }
  | { kind: "scenario" }
  | { kind: "objectives" }
  | { kind: "section"; section: ModuleSection; chapterIndex: number }
  | { kind: "practice" }
  | { kind: "diagram" }
  | { kind: "review" }
  | { kind: "quiz" };

function buildScreens(content: ModuleContentFull): Screen[] {
  return [
    { kind: "cover" },
    { kind: "scenario" },
    { kind: "objectives" },
    ...content.sections.map((section, chapterIndex) => ({ kind: "section" as const, section, chapterIndex })),
    { kind: "practice" },
    { kind: "diagram" },
    { kind: "review" },
    { kind: "quiz" },
  ];
}

function blockToSpeech(block: ContentBlock): string {
  switch (block.type) {
    case "text":
      return `${block.heading || ""}. ${block.paragraphs.flat().map((run) => typeof run === "string" ? run : run.term).join(" ")}`;
    case "callout":
      return `${block.title}. ${block.text.map((run) => typeof run === "string" ? run : run.term).join(" ")}`;
    case "checklist":
      return `${block.title}. ${block.items.join(". ")}`;
    case "comparison":
      return `${block.title}. ${block.left.label}: ${block.left.points.join(". ")}. ${block.right.label}: ${block.right.points.join(". ")}`;
    case "timeline":
      return `${block.title}. ${block.items.map((item) => `${item.label}: ${item.text}`).join(". ")}`;
    case "case":
      return `${block.title}. ${block.text}`;
    case "faq":
      return block.items.map((item) => `${item.q}. ${item.a}`).join(". ");
    case "stat":
      return block.items.map((item) => `${item.value}: ${item.label}`).join(". ");
    case "quote":
      return `${block.text}. ${block.author || ""}`;
    case "image":
      return block.caption || block.alt || "Imagem educacional";
    case "video":
      return `${block.title}. ${block.caption}. ${(block.transcript || []).join(" ")}`;
    case "audio":
      return `${block.title}. ${block.text}`;
    default:
      return "";
  }
}

function getScreenText(screen: Screen | undefined, meta: ModuleMeta, content: ModuleContentFull | undefined): string {
  if (!screen || !content) return meta.title;
  switch (screen.kind) {
    case "cover":
      return `${meta.title}. ${meta.shortDescription}`;
    case "scenario":
      return `Cenário de estudo: ${content.scenario}`;
    case "objectives":
      return `Objetivos do módulo: ${content.objectives.join(". ")}`;
    case "section":
      return `${screen.section.title}. ${screen.section.blocks.map(blockToSpeech).join(". ")}`;
    case "practice": {
      const lab = getPracticeLab(meta.slug);
      return lab ? `Laboratório prático. ${lab.mission}. Cenário: ${lab.scenario}. Entrega: ${lab.deliverable}.` : "Laboratório prático de aplicação.";
    }
    case "diagram":
      return `Fluxo operacional: ${content.diagram?.title || ""}`;
    case "review":
      return `Resumo do módulo: ${content.summary.join(". ")}. Checklist: ${content.finalChecklist.join(". ")}`;
    case "quiz":
      return "Simulador de decisão. Responda às questões para validar o domínio deste módulo.";
  }
}

export function ModulePageClient() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((state) => state.progress);
  const completeModuleQuiz = useOnboardingStore((state) => state.completeModuleQuiz);
  const [showQuiz, setShowQuiz] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const meta = getModuleMeta(params.slug);
  const content = getModuleContent(params.slug);
  const quiz = getQuizForModule(params.slug);
  const practiceLab = getPracticeLab(params.slug);
  const modProgress = progress[params.slug];
  const moduleIndex = moduleMetas.findIndex((module) => module.slug === params.slug);
  const previousReady = moduleMetas.slice(0, moduleIndex).reverse().find((module) => module.status === "ready");
  const nextReady = moduleMetas.slice(moduleIndex + 1).find((module) => module.status === "ready");

  const screens = useMemo(() => (content ? buildScreens(content) : []), [content]);
  const totalScreens = screens.length;
  const screen = screens[Math.min(screenIndex, Math.max(totalScreens - 1, 0))];
  const isFirstScreen = screenIndex === 0;
  const isQuizScreen = screen?.kind === "quiz";

  useEffect(() => {
    queueMicrotask(() => {
      setScreenIndex(0);
      setShowQuiz(false);
    });
  }, [params.slug]);

  function scrollTop() {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goNext() {
    setScreenIndex((index) => Math.min(index + 1, totalScreens - 1));
    scrollTop();
  }

  function goPrev() {
    setScreenIndex((index) => Math.max(index - 1, 0));
    scrollTop();
  }

  if (!ready || !registration || !meta) return null;

  if (meta.status === "building" || !content || !screen) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main id="main-content" className="mx-auto max-w-4xl px-4 py-12">
          <Link href="/trilha" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-atlas-orange">
            <ArrowLeft size={16} /> Voltar para a trilha
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Badge variant="muted" className="gap-2 bg-surface-2 text-foreground border-border px-3 py-1"><Wrench size={14} /> Em construção</Badge>
            <span className="text-sm font-semibold tracking-widest text-atlas-orange uppercase">Módulo {String(meta.number).padStart(2, "0")}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold">{meta.title}</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">{meta.shortDescription}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="atlas-module-content flex min-h-screen flex-col bg-background text-foreground selection:bg-atlas-orange selection:text-white">
      {!isFocusMode && <SiteHeader />}

      {!isFocusMode && (
        <div className="border-b border-border/50 bg-background">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link href="/trilha" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-atlas-orange">
              <ArrowLeft size={14} /> <span className="hidden sm:inline">Academia ATLASGR</span>
            </Link>
            <div className="flex flex-1 items-center gap-1" aria-label={`Progresso do módulo: tela ${screenIndex + 1} de ${totalScreens}`}>
              {screens.map((_, index) => (
                <span
                  key={index}
                  className="h-1 flex-1 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: index <= screenIndex ? "var(--atlas-orange)" : "var(--border)" }}
                />
              ))}
            </div>
            <span className="shrink-0 text-xs font-bold tabular-nums text-muted">{screenIndex + 1}/{totalScreens}</span>
          </div>
        </div>
      )}

      <div className="border-b border-border/40 bg-surface-2/40 py-2 print:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <AccessibilityToolbar currentText={getScreenText(screen, meta, content)} />
          <button
            onClick={() => setIsFocusMode((value) => !value)}
            className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-atlas-orange"
            title={isFocusMode ? "Sair do Modo Foco" : "Entrar no Modo Foco"}
          >
            {isFocusMode ? <Minimize size={14} /> : <Maximize size={14} />}
            <span className="hidden sm:inline">{isFocusMode ? "Sair do foco" : "Modo foco"}</span>
          </button>
        </div>
      </div>

      <main id="main-content" className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10">
        <motion.div
          key={`${params.slug}-${screenIndex}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {screen.kind === "cover" && (
            <section className="relative mb-8 flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-atlas-orange/20 bg-gradient-to-b from-surface via-surface to-atlas-orange/5 px-6 pb-12 pt-16 text-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5 pointer-events-none" />
              <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-atlas-orange/10 blur-[100px] pointer-events-none" />
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border-2 border-atlas-orange/50 bg-atlas-orange/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-atlas-orange">Módulo {String(meta.number).padStart(2, "0")}</span>
                <span className="rounded-full border border-border bg-surface-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted">{meta.durationMinutes} min</span>
                {modProgress?.passed && <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-500"><CheckCircle2 size={14} /> Validado</span>}
              </div>
              <h1 className="relative z-10 mt-8 max-w-4xl text-balance font-display text-5xl font-black leading-tight tracking-tight text-gradient-title md:text-7xl">{content.title}</h1>
              <p className="relative z-10 mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-muted md:text-xl">{meta.shortDescription}</p>
              <div className="relative z-10 mt-10 flex items-center gap-2.5 rounded-2xl border border-atlas-orange/20 bg-surface/80 px-5 py-3 text-xs font-bold text-foreground backdrop-blur-md">
                <Compass size={18} className="text-atlas-orange" />
                Contexto → microaulas multimídia → prática → revisão → simulador
              </div>
            </section>
          )}

          {screen.kind === "scenario" && <ImmersiveStory story={content.scenario} className="mt-2" />}

          {screen.kind === "objectives" && (
            <section className="atlas-objectives-panel">
              <div className="atlas-objectives-heading">
                <span><Brain size={22} aria-hidden="true" /></span>
                <div><p>Mapa deste módulo</p><h2>O que você vai dominar</h2></div>
              </div>
              <div className="atlas-objectives-grid">
                {content.objectives.map((objective, index) => (
                  <article key={objective}><span>{String(index + 1).padStart(2, "0")}</span><p>{objective}</p></article>
                ))}
              </div>
            </section>
          )}

          {screen.kind === "section" && (
            <section className="atlas-lesson-section">
              <header className="atlas-lesson-heading">
                <span>{String(screen.chapterIndex + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs uppercase font-bold text-atlas-orange tracking-wider">Microaula {screen.chapterIndex + 1} de {content.sections.length}</p>
                  <h2>{screen.section.title}</h2>
                </div>
              </header>
              <div className="atlas-block-stack mt-6 space-y-6">
                {screen.section.blocks.map((block, index) => (
                  <ContentBlockView key={`${screen.section.id}-${index}`} block={block} index={index} />
                ))}
              </div>
            </section>
          )}

          {screen.kind === "practice" && practiceLab && <PracticeLab lab={practiceLab} moduleTitle={content.title} />}

          {screen.kind === "diagram" && (
            <section>
              <div className="atlas-lesson-heading">
                <span><MapIcon size={28} aria-hidden="true" /></span>
                <div><p>Integração visual</p><h2>{content.diagram.title}</h2></div>
              </div>
              <MermaidViewer title={content.diagram.title} chart={content.diagram.chart} />
            </section>
          )}

          {screen.kind === "review" && (
            <div className="space-y-8">
              <section className="atlas-summary-card">
                <div className="atlas-summary-heading">
                  <span><ClipboardList size={22} aria-hidden="true" /></span>
                  <div><p>Recuperação rápida</p><h2>O que precisa ficar</h2></div>
                </div>
                <ul>{content.summary.map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
              </section>

              <section className="atlas-final-checklist">
                <p className="atlas-content-kicker">Antes da avaliação</p>
                <h2>Checklist de domínio</h2>
                {content.finalChecklist.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}
              </section>

              <section className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Fontes deste módulo</p>
                <h2 className="mt-2 font-display text-2xl font-black text-foreground">De onde o conteúdo foi construído</h2>
                <ul className="mt-5 space-y-3">
                  {content.sources.map((source) => <li key={source} className="flex gap-3 text-sm font-medium leading-relaxed text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-orange" />{source}</li>)}
                </ul>
              </section>
            </div>
          )}

          {screen.kind === "quiz" && (
            <section className="atlas-content-card relative mx-auto max-w-3xl overflow-hidden border-2 border-atlas-orange/20 text-center shadow-2xl">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-atlas-orange/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-atlas-orange to-amber-500 text-white shadow-lg"><CheckCircle2 size={32} /></span>
                <h2 className="font-display text-3xl font-black text-gradient-title sm:text-4xl">Simulador de decisão</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed text-muted">As questões usam cenários do currículo novo. É necessário atingir 70% para validar o módulo.</p>
                {!showQuiz && (
                  <button onClick={() => setShowQuiz(true)} className="relative z-10 mt-8 rounded-xl bg-gradient-to-r from-atlas-orange to-amber-500 px-10 py-5 font-black uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-[1.02]">
                    {modProgress?.passed ? "Refazer simulação" : "Iniciar avaliação"}
                  </button>
                )}
                {showQuiz && (
                  <div className="relative z-10 mt-8 text-left">
                    <QuizRunner
                      questions={quiz}
                      title={`Simulador — ${content.title}`}
                      onFinish={({ score, passed }) => {
                        completeModuleQuiz(params.slug, score);
                        if (passed && nextReady) setTimeout(() => router.push(`/trilha/${nextReady.slug}`), 1800);
                      }}
                    />
                    {modProgress?.passed && <div className="mt-12 border-t border-border pt-8"><CertificateActions moduleTitle={content.title} moduleNumber={meta.number} /><ModuleRating /></div>}
                  </div>
                )}
              </div>
            </section>
          )}
        </motion.div>
      </main>

      {!isFocusMode && (
        <div className="sticky bottom-0 z-30 border-t border-border/50 bg-background/90 backdrop-blur-xl print:hidden">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            {isFirstScreen ? (
              previousReady ? <Link href={`/trilha/${previousReady.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-atlas-orange"><ArrowLeft size={16} /> <span className="hidden sm:inline">{previousReady.title}</span></Link> : <span />
            ) : (
              <button onClick={goPrev} className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-foreground hover:border-atlas-orange/50"><ArrowLeft size={16} /> Anterior</button>
            )}

            {!isQuizScreen ? (
              <button onClick={goNext} className="inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-6 py-2.5 text-sm font-bold text-white shadow-glow hover:bg-atlas-orange-2">Continuar <ArrowRight size={16} /></button>
            ) : nextReady ? (
              <Link href={`/trilha/${nextReady.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-atlas-orange"><span className="hidden sm:inline">{nextReady.title}</span> <ArrowRight size={16} /></Link>
            ) : (
              <Link href="/prova-final" className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-orange">Ir para a prova final <ArrowRight size={16} /></Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
