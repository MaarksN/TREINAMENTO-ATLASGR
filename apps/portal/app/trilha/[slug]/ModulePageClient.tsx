"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, ClipboardList, Wrench, Compass, Map as MapIcon } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Badge } from "@/components/ui/Badge";
import { ContentBlockView } from "@/components/module/ContentBlockView";
import { QuizRunner } from "@/components/quiz/QuizRunner";
import { moduleMetas, getModuleMeta, getModuleContent } from "@/content/modules";
import { getQuizForModule } from "@/content/quizzes";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { ImmersiveStory } from "@/components/module/ImmersiveStory";
import { MermaidViewer } from "@/components/diagrams/MermaidViewer";
import type { ModuleContentFull, ModuleSection } from "@/lib/types";

type Screen =
  | { kind: "cover" }
  | { kind: "scenario" }
  | { kind: "objectives" }
  | { kind: "sectionBlock"; section: ModuleSection; chapterIndex: number; block: ModuleSection["blocks"][number]; blockIndex: number; totalBlocks: number }
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
  screens.push({ kind: "diagram" }, { kind: "review" }, { kind: "quiz" });
  return screens;
}

export function ModulePageClient() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const completeModuleQuiz = useOnboardingStore((s) => s.completeModuleQuiz);
  const [showQuiz, setShowQuiz] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);

  const meta = getModuleMeta(params.slug);
  const content = getModuleContent(params.slug);
  const quiz = getQuizForModule(params.slug);
  const modProgress = progress[params.slug];
  const idx = moduleMetas.findIndex((m) => m.slug === params.slug);
  const previousReady = moduleMetas.slice(0, idx).reverse().find((m) => m.status === "ready");
  const nextReady = moduleMetas.slice(idx + 1).find((m) => m.status === "ready");

  const screens = useMemo(() => (content ? buildScreens(content) : []), [content]);
  const totalScreens = screens.length;
  const screen = screens[Math.min(screenIndex, totalScreens - 1)];
  const isFirstScreen = screenIndex === 0;
  const isQuizScreen = screen?.kind === "quiz";

  // Novo módulo -> volta pra primeira tela em vez de continuar de onde a
  // navegação anterior parou.
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
    <div className="atlas-module-content flex min-h-screen flex-col bg-background text-foreground selection:bg-atlas-orange selection:text-white">
      <SiteHeader />

      {/* Barra de progresso por tela (não por scroll) + navegação de saída.
          Não é sticky: o SiteHeader já é sticky top-0, e empilhar dois
          elementos sticky no mesmo top-0 faz um cobrir o outro. */}
      <div className="border-b border-border/50 bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/trilha" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-atlas-orange">
            <ArrowLeft size={14} /> <span className="hidden sm:inline">Central de Treinamento</span>
          </Link>
          <div className="flex flex-1 items-center gap-1">
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

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10 sm:px-6">
        <motion.div key={screenIndex} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="flex-1">
          {screen.kind === "cover" && (
            <div className="flex flex-col items-center pt-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="rounded border border-atlas-orange/50 bg-atlas-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-atlas-orange">
                  Módulo {String(meta.number).padStart(2, "0")}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted">{meta.durationMinutes} min</span>
                {modProgress?.passed && (
                  <span className="flex items-center gap-1 rounded border border-emerald-500/50 bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
                    <CheckCircle2 size={12} /> Concluído
                  </span>
                )}
              </div>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">{content.title}</h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl leading-relaxed text-muted">{meta.shortDescription}</p>
              <div className="mt-10 flex items-center gap-2 text-xs font-semibold text-muted">
                <Compass size={16} className="text-atlas-orange" />
                Este módulo tem {totalScreens} telas: contexto, objetivos, {content.sections.length} capítulos, diagrama, revisão e simulador.
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
            <div className="atlas-content-card mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Simulador de Decisão</h2>
              <p className="mx-auto mb-2 mt-4 max-w-xl text-muted">
                Comprove que você assimilou os pontos essenciais deste módulo. É necessário atingir 70% de acertos para concluir esta etapa.
              </p>

              {!showQuiz && (
                <button
                  onClick={() => setShowQuiz(true)}
                  className="relative z-10 mt-8 rounded-lg bg-atlas-orange px-8 py-4 font-bold uppercase tracking-wider text-white shadow-glow transition-all hover:scale-105 hover:bg-atlas-orange-2"
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
                </div>
              )}
            </div>
          )}
        </motion.div>
      </main>

      {/* Navegação entre telas: sempre visível, fixa na base do conteúdo */}
      <div className="sticky bottom-0 z-30 border-t border-border/50 bg-background/90 backdrop-blur-xl">
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
    </div>
  );
}
