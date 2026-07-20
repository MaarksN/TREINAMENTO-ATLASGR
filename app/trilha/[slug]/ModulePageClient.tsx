"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, ClipboardList, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContentBlockView } from "@/components/module/ContentBlockView";
import { QuizRunner } from "@/components/quiz/QuizRunner";
import { moduleMetas, getModuleMeta, getModuleContent } from "@/content/modules";
import { getQuizForModule } from "@/content/quizzes";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";

export function ModulePageClient() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const completeModuleQuiz = useOnboardingStore((s) => s.completeModuleQuiz);
  const [showQuiz, setShowQuiz] = useState(false);

  const meta = getModuleMeta(params.slug);
  const content = getModuleContent(params.slug);
  const quiz = getQuizForModule(params.slug);
  const modProgress = progress[params.slug];
  const idx = moduleMetas.findIndex((m) => m.slug === params.slug);
  const nextReady = moduleMetas.slice(idx + 1).find((m) => m.status === "ready");

  if (!ready || !registration || !meta) return null;

  if (meta.status === "building" || !content) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-12">
          <Link href="/trilha" className="inline-flex items-center gap-1 text-sm text-muted hover:text-atlas-orange">
            <ArrowLeft size={14} /> Voltar para a trilha
          </Link>
          <div className="mt-6 flex items-center gap-2">
            <Badge variant="muted" className="gap-1"><Wrench size={12} /> Em construção</Badge>
            <span className="text-xs text-muted">Módulo {String(meta.number).padStart(2, "0")}</span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold text-foreground">{meta.title}</h1>
          <p className="mt-2 text-muted">{meta.shortDescription}</p>

          {meta.outline && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Card className="p-5"><p className="text-xs font-semibold text-atlas-orange">O QUE É</p><p className="mt-2 text-sm text-muted">{meta.outline.what}</p></Card>
              <Card className="p-5"><p className="text-xs font-semibold text-atlas-orange">POR QUE EXISTE</p><p className="mt-2 text-sm text-muted">{meta.outline.why}</p></Card>
              <Card className="p-5"><p className="text-xs font-semibold text-atlas-orange">COMO SERÁ CONSTRUÍDO</p><p className="mt-2 text-sm text-muted">{meta.outline.how}</p></Card>
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/trilha" className="inline-flex items-center gap-1 text-sm text-muted hover:text-atlas-orange">
          <ArrowLeft size={14} /> Voltar para a trilha
        </Link>

        <div className="mt-6 flex items-center gap-2">
          <Badge variant="orange">Módulo {String(meta.number).padStart(2, "0")}</Badge>
          <span className="text-xs text-muted">{meta.durationMinutes} min</span>
          {modProgress?.passed && <Badge variant="success" className="gap-1"><CheckCircle2 size={12} /> Concluído</Badge>}
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold text-foreground">{content.title}</h1>

        <Card className="mt-6 p-5">
          <p className="mb-2 text-xs font-semibold text-atlas-orange">OBJETIVOS DE APRENDIZAGEM</p>
          <ul className="space-y-1.5 text-sm text-muted">
            {content.objectives.map((o, i) => (
              <li key={i} className="flex gap-2"><span className="text-atlas-orange">•</span>{o}</li>
            ))}
          </ul>
        </Card>

        <div className="mt-10 space-y-12">
          {content.sections.map((section) => (
            <motion.section key={section.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
              <div className="mt-4 space-y-5">
                {section.blocks.map((b, i) => (
                  <ContentBlockView key={i} block={b} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Resumo */}
        <Card className="mt-12 p-6">
          <div className="mb-3 flex items-center gap-2">
            <ClipboardList size={18} className="text-atlas-orange" />
            <p className="font-display font-semibold">Resumo do módulo</p>
          </div>
          <ul className="space-y-1.5 text-sm text-muted">
            {content.summary.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="text-atlas-orange">✓</span>{s}</li>
            ))}
          </ul>
        </Card>

        {/* Mapa mental */}
        <Card className="mt-6 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Brain size={18} className="text-atlas-orange" />
            <p className="font-display font-semibold">Mapa mental</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-gradient-atlas px-4 py-1.5 text-sm font-semibold text-white">{content.mindMap.root}</span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {content.mindMap.branches.map((branch) => (
              <div key={branch.label} className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">{branch.label}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted">
                  {branch.items.map((it, i) => <li key={i}>• {it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Checklist final */}
        <Card className="mt-6 p-6">
          <p className="mb-3 font-display font-semibold">Checklist final — antes do quiz, confirme que você:</p>
          <ul className="space-y-2 text-sm text-muted">
            {content.finalChecklist.map((c, i) => (
              <li key={i} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-atlas-orange" />{c}</li>
            ))}
          </ul>
        </Card>

        {/* Fontes */}
        <p className="mt-6 text-xs text-muted">
          Fontes deste módulo: {content.sources.join(" · ")}
        </p>

        {/* Quiz */}
        <div className="mt-10">
          {!showQuiz && (
            <div className="text-center">
              <Button size="lg" onClick={() => setShowQuiz(true)}>
                {modProgress?.passed ? "Refazer quiz" : "Fazer quiz do módulo (5 perguntas · 70% para aprovar)"}
              </Button>
            </div>
          )}
          {showQuiz && (
            <QuizRunner
              questions={quiz}
              title={`Quiz — ${content.title}`}
              onFinish={({ score, passed }) => {
                completeModuleQuiz(params.slug, score);
                if (passed && nextReady) {
                  setTimeout(() => router.push(`/trilha/${nextReady.slug}`), 1800);
                }
              }}
            />
          )}
        </div>

        {modProgress?.passed && nextReady && (
          <div className="mt-8 text-center">
            <Link href={`/trilha/${nextReady.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-atlas-orange hover:underline">
              Próximo módulo: {nextReady.title} <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
