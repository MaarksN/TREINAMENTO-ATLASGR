"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, ClipboardList, Wrench, Compass, Map as MapIcon, Maximize, Minimize } from "lucide-react";
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
import type { ModuleContentFull, ModuleSection, ModuleMeta } from "@/lib/types";
import { AccessibilityToolbar } from "@/components/accessibility/AccessibilityToolbar";

type Screen =
  | { kind: "cover" }
  | { kind: "scenario" }
  | { kind: "objectives" }
  | { kind: "sectionBlock"; section: ModuleSection; chapterIndex: number; block: ModuleSection["blocks"][number]; blockIndex: number; totalBlocks: number }
  | { kind: "practice" }
  | { kind: "diagram" }
  | { kind: "review" }
  | { kind: "quiz" };

function buildScreens(content: ModuleContentFull): Screen[] {
  const screens: Screen[] = [{ kind: "cover" }, { kind: "scenario" }, { kind: "objectives" }];
  content.sections.forEach((section, chapterIndex) => {
    section.blocks.forEach((block, blockIndex) => {
      screens.push({
        kind: "sectionBlock",
        section,
        chapterIndex,
        block,
        blockIndex,
        totalBlocks: section.blocks.length,
      });
    });
  });
  screens.push({ kind: "practice" }, { kind: "diagram" }, { kind: "review" }, { kind: "quiz" });
  return screens;
}

function getScreenText(screen: Screen | undefined, meta: ModuleMeta, content: ModuleContentFull | undefined): string {
  if (!screen || !content) return meta.title;
  switch (screen.kind) {
    case "cover":
      return `${meta.title}. ${meta.shortDescription}`;
    case "scenario":
      return `Cenário de Estudo: ${content.scenario}`;
    case "objectives":
      return `Objetivos do módulo: ${content.objectives.join(". ")}`;
    case "sectionBlock":
      return `${screen.section.title}. ${JSON.stringify(screen.block)}`;
    case "practice": {
      const lab = getPracticeLab(meta.slug);
      return lab ? `Laboratório prático. ${lab.mission}. Cenário: ${lab.scenario}. Entrega: ${lab.deliverable}.` : "Laboratório prático de aplicação.";
    }
    case "diagram":
      return `Fluxograma Operacional: ${content.diagram?.title || ""}`;
    case "review":
      return `Resumo do Módulo: ${content.summary?.join(". ") || ""}`;
    case "quiz":
      return "Avaliação Final. Teste seus conhecimentos para obter a certificação do módulo.";
    default:
      return meta.title;
  }
}

export function ModulePageClient() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const completeModuleQuiz = useOnboardingStore((s) => s.completeModuleQuiz);
  const [showQuiz, setShowQuiz] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const meta = getModuleMeta(params.slug);
  const content = getModuleContent(params.slug);
  const quiz = getQuizForModule(params.slug);
  const practiceLab = getPracticeLab(params.slug);
  const modProgress = progress[params.slug];
  const idx = moduleMetas.findIndex((m) => m.slug === params.slug);
  const previousReady = moduleMetas.slice(0, idx).reverse().find((m) => m.status === "ready");
  const nextReady = moduleMetas.slice(idx + 1).find((m) => m.status === "ready");

  const screens = useMemo(() => (content ? buildScreens(content) : []), [content]);
  const totalScreens = screens.length;
  const screen = screens[Math.min(screenIndex, totalScreens - 1)];
  const isFirstScreen = screenIndex === 0;
  const isQuizScreen = screen?.kind === "quiz";

  useEffect(() => {
    queueMicrotask(() => {
      setScreenIndex(0);
      setShowQuiz(false);
    });
  }, [params.slug]);

  function goNext() {
    setScreenIndex((i) => Math.min(i + 1, totalScreens - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }

  function goPrev() {
    setScreenIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }

  if (!ready || !registration || !meta) return null;

  if (meta.status === "building" || !content) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-4xl px-4 py-12">
          <Link href="/trilha" className="inline-flex items-center gap-2 text-sm text-muted hover:text-atlas-orange transition-colors">
            <ArrowLeft size={16} /> Voltar para a trilha
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Badge variant="muted" className="gap-2 bg-surface-2 text-foreground border-border px-3 py-1"><Wrench size={14} /> Em construção</Badge>
            <span className="text-sm font-semibold tracking-widest text-atlas-orange uppercase">Módulo {String(meta.number).padStart(2, "0")}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold">{meta.title}</h1>
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">{meta.shortDescription}</p>

          {meta.outline && (
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="glass p-6 rounded-2xl border border-border"><p className="text-xs font-bold text-atlas-orange tracking-widest uppercase mb-3">O que é</p><p className="text-sm text-muted leading-relaxed">{meta.outline.what}</p></div>
              <div className="glass p-6 rounded-2xl border border-border"><p className="text-xs font-bold text-atlas-orange tracking-widest uppercase mb-3">Por que existe</p><p className="text-sm text-muted leading-relaxed">{meta.outline.why}</p></div>
              <div className="glass p-6 rounded-2xl border border-border"><p className="text-xs font-bold text-atlas-orange tracking-widest uppercase mb-3">Como será construído</p><p className="text-sm text-muted leading-relaxed">{meta.outline.how}</p></div>
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className={`atlas-module-content flex min-h-screen flex-col bg-background text-foreground selection:bg-atlas-orange selection:text-white ${isFocusMode ? "" : "pt-0"}`}>
      {!isFocusMode && <SiteHeader />}

      {!isFocusMode && (
        <div className="border-b border-border/50 bg-background">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link href="/trilha" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-atlas-orange">
              <ArrowLeft size={14} /> <span className="hidden sm:inline">Central de Treinamento</span>
            </Link>
            <div className="flex flex-1 items-center gap-1" aria-label={`Progresso do módulo: tela ${screenIndex + 1} de ${totalScreens}`}>
              {screens.map((_, i) => (
                <span
                  key={i}
                  className="h-1 flex-1 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: i <= screenIndex ? "var(--atlas-orange)" : "var(--border)" }}
                />
              ))}
            </div>
            <span className="shrink-0 text-xs font-bold tabular-nums text-muted">
              {screenIndex + 1}/{totalScreens}
            </span>
          </div>
        </div>
      )}

      <div className="border-b border-border/40 bg-surface-2/40 py-2 print:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <AccessibilityToolbar currentText={getScreenText(screen, meta, content)} />
          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className="inline-flex items-center gap-2 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-muted hover:text-atlas-orange transition-colors border border-border/50"
            title={isFocusMode ? "Sair do Modo Foco" : "Entrar no Modo Foco"}
          >
            {isFocusMode ? <Minimize size={14} /> : <Maximize size={14} />}
            <span className="hidden sm:inline">{isFocusMode ? "Sair do Foco" : "Modo Foco"}</span>
          </button>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10 sm:px-6">
        <motion.div key={screenIndex} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="flex-1">
          {screen.kind === "cover" && (
            <div className="relative flex flex-col items-center justify-center pt-16 pb-12 text-center overflow-hidden rounded-3xl border-2 border-atlas-orange/20 bg-gradient-to-b from-surface via-surface to-atlas-orange/5 shadow-2xl mb-8">
              <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5 pointer-events-none" />
              <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-atlas-orange/10 blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border-2 border-atlas-orange/50 bg-atlas-orange/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-atlas-orange shadow-[0_0_15px_rgba(255,86,24,0.3)]">
                  Módulo {String(meta.number).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-border bg-surface-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted">
                  {meta.durationMinutes} min
                </span>
                {modProgress?.passed && (
                  <span className="flex items-center gap-1.5 rounded-full border-2 border-emerald-500/50 bg-emerald-500/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-500">
                    <CheckCircle2 size={14} /> Concluído
                  </span>
                )}
              </div>

              <h1 className="relative z-10 mt-8 max-w-4xl text-balance font-display text-5xl font-black leading-tight tracking-tight md:text-7xl text-gradient-title">
                {content.title}
              </h1>

              <p className="relative z-10 mx-auto mt-6 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-muted/90">
                {meta.shortDescription}
              </p>

              <div className="relative z-10 mt-12 flex items-center justify-center gap-2.5 rounded-2xl bg-surface/80 backdrop-blur-md px-6 py-3 text-xs font-bold text-foreground border border-atlas-orange/20 shadow-lg">
                <Compass size={18} className="text-atlas-orange" />
                <span>
                  Estrutura: Contexto, Objetivos, {content.sections.length} Capítulos, Laboratório Prático, Diagrama, Revisão e Simulador.
                </span>
              </div>
            </div>
          )}

          {screen.kind === "scenario" && <ImmersiveStory story={content.scenario} className="mt-2" />}

          {screen.kind === "objectives" && (
            <section className="atlas-objectives-panel">
              <div className="atlas-objectives-heading">
                <span><Brain size={22} aria-hidden="true" /></span>
                <div>
                  <p>Mapa deste módulo</p>
                  <h2>O que você vai dominar</h2>
                </div>
              </div>
              <div className="atlas-objectives-grid">
                {content.objectives.map((objective, index) => (
                  <article key={objective}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{objective}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {screen.kind === "sectionBlock" && (
            <section className="atlas-lesson-section">
              <div className="atlas-lesson-heading">
                <span>{String(screen.chapterIndex + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs uppercase font-bold text-atlas-orange tracking-wider">
                    Capítulo {screen.chapterIndex + 1} de {content.sections.length} · Bloco {screen.blockIndex + 1} de {screen.totalBlocks}
                  </p>
                  <h2>{screen.section.title}</h2>
                </div>
              </div>
              <div className="atlas-block-stack mt-6">
                <ContentBlockView block={screen.block} index={screen.blockIndex} />
              </div>
            </section>
          )}

          {screen.kind === "practice" && practiceLab && (
            <PracticeLab lab={practiceLab} moduleTitle={content.title} />
          )}

          {screen.kind === "diagram" && (
            <div>
              <div className="atlas-lesson-heading">
                <span><MapIcon size={28} aria-hidden="true" /></span>
                <div>
                  <p>Visão geral</p>
                  <h2>Fluxo do módulo</h2>
                </div>
              </div>
              <MermaidViewer title={content.diagram.title} chart={content.diagram.chart} />
            </div>
          )}

          {screen.kind === "review" && (
            <div className="space-y-8">
              {content.summary?.length > 0 && (
                <section className="atlas-summary-card">
                  <div className="atlas-summary-heading">
                    <span><ClipboardList size={22} aria-hidden="true" /></span>
                    <div>
                      <p>Fixação rápida</p>
                      <h2>Resumo do módulo</h2>
                    </div>
                  </div>
                  <ul>
                    {content.summary.map((s, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} aria-hidden="true" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {content.finalChecklist?.length > 0 && (
                <section className="atlas-final-checklist">
                  <p className="atlas-content-kicker">Antes de avançar</p>
                  <h2>Checklist de domínio</h2>
                  {content.finalChecklist.map((item, index) => (
                    <p key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </p>
                  ))}
                </section>
              )}
            </div>
          )}

          {screen.kind === "quiz" && (
            <div className="atlas-content-card mx-auto max-w-3xl text-center border-2 border-atlas-orange/20 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 h-64 w-64 bg-atlas-orange/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-64 w-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-atlas-orange to-amber-500 text-white shadow-lg mb-6">
                  <CheckCircle2 size={32} />
                </span>
                <h2 className="font-display text-3xl font-black sm:text-4xl text-gradient-title">Simulador de Decisão</h2>
                <p className="mx-auto mb-2 mt-4 max-w-xl text-muted font-medium text-lg leading-relaxed">
                  Comprove que você assimilou os pontos essenciais deste módulo. É necessário atingir 70% de acertos para concluir esta etapa.
                </p>

                {!showQuiz && (
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="relative z-10 mt-8 rounded-xl bg-gradient-to-r from-atlas-orange to-amber-500 px-10 py-5 font-black uppercase tracking-widest text-white shadow-[0_10px_30px_-10px_rgba(255,86,24,0.5)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(255,86,24,0.6)]"
                  >
                    {modProgress?.passed ? "Refazer Simulação" : "Iniciar Avaliação"}
                  </button>
                )}
                {showQuiz && (
                  <div className="relative z-10 mt-8 text-left">
                    <QuizRunner
                      questions={quiz}
                      title={`Simulador — ${content.title}`}
                      onFinish={({ score, passed }) => {
                        completeModuleQuiz(params.slug, score);
                        if (passed && nextReady) {
                          setTimeout(() => router.push(`/trilha/${nextReady.slug}`), 1800);
                        }
                      }}
                    />
                    {modProgress?.passed && (
                      <div className="mt-12 border-t border-border pt-8 animate-fade-in">
                        <CertificateActions moduleTitle={content.title} moduleNumber={meta.number} />
                        <ModuleRating />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </main>

      {!isFocusMode && (
        <div className="sticky bottom-0 z-30 border-t border-border/50 bg-background/90 backdrop-blur-xl print:hidden">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            {isFirstScreen ? (
              previousReady ? (
                <Link href={`/trilha/${previousReady.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-atlas-orange">
                  <ArrowLeft size={16} /> {previousReady.title}
                </Link>
              ) : (
                <span />
              )
            ) : (
              <button onClick={goPrev} className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-atlas-orange/50">
                <ArrowLeft size={16} /> Anterior
              </button>
            )}

            {!isQuizScreen ? (
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-6 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-atlas-orange-2"
              >
                Continuar <ArrowRight size={16} />
              </button>
            ) : nextReady ? (
              <Link href={`/trilha/${nextReady.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-atlas-orange">
                {nextReady.title} <ArrowRight size={16} />
              </Link>
            ) : (
              <Link href="/prova-final" className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-orange">
                Ir para a Prova Final <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
