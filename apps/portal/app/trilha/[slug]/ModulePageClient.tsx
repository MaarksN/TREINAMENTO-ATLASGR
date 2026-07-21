"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, ClipboardList, Wrench, PlayCircle } from "lucide-react";
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
import { ImmersiveStory } from "@/components/module/ImmersiveStory";
import { MermaidViewer } from "@/components/diagrams/MermaidViewer";

export function ModulePageClient() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const completeModuleQuiz = useOnboardingStore((s) => s.completeModuleQuiz);
  const [showQuiz, setShowQuiz] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const meta = getModuleMeta(params.slug);
  const content = getModuleContent(params.slug);
  const quiz = getQuizForModule(params.slug);
  const modProgress = progress[params.slug];
  const idx = moduleMetas.findIndex((m) => m.slug === params.slug);
  const nextReady = moduleMetas.slice(idx + 1).find((m) => m.status === "ready");

  if (!ready || !registration || !meta) return null;

  if (meta.status === "building" || !content) {
    return (
      <div className="min-h-screen bg-atlas-dark text-white">
        <SiteHeader />
        <main className="mx-auto max-w-4xl px-4 py-12">
          <Link href="/trilha" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-atlas-orange transition-colors">
            <ArrowLeft size={16} /> Voltar para a trilha
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Badge variant="muted" className="gap-2 bg-white/10 text-white border-white/20 px-3 py-1"><Wrench size={14} /> Em construção</Badge>
            <span className="text-sm font-semibold tracking-widest text-atlas-orange uppercase">Módulo {String(meta.number).padStart(2, "0")}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold">{meta.title}</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl leading-relaxed">{meta.shortDescription}</p>

          {meta.outline && (
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="glass p-6 rounded-2xl border border-white/10"><p className="text-xs font-bold text-atlas-orange tracking-widest uppercase mb-3">O que é</p><p className="text-sm text-gray-300 leading-relaxed">{meta.outline.what}</p></div>
              <div className="glass p-6 rounded-2xl border border-white/10"><p className="text-xs font-bold text-atlas-orange tracking-widest uppercase mb-3">Por que existe</p><p className="text-sm text-gray-300 leading-relaxed">{meta.outline.why}</p></div>
              <div className="glass p-6 rounded-2xl border border-white/10"><p className="text-xs font-bold text-atlas-orange tracking-widest uppercase mb-3">Como será construído</p><p className="text-sm text-gray-300 leading-relaxed">{meta.outline.how}</p></div>
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#131417] text-white selection:bg-atlas-orange selection:text-white pb-20">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-atlas-orange origin-left z-50 shadow-[0_0_10px_rgba(255,86,24,0.8)]" style={{ scaleX }} />
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/trilha" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-atlas-orange transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o Cockpit de Treinamento
          </Link>
        </motion.div>

        {/* 1. Cover / Header */}
        <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-atlas-orange/20 border border-atlas-orange/50 text-atlas-orange text-xs font-bold rounded uppercase tracking-widest">Módulo {String(meta.number).padStart(2, "0")}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{meta.durationMinutes} min</span>
            {modProgress?.passed && <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-xs font-bold rounded uppercase tracking-widest flex items-center gap-1"><CheckCircle2 size={12} /> Concluído</span>}
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight">{content.title}</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl leading-relaxed">{meta.shortDescription}</p>
        </motion.div>

        {/* 2. Critical Situation (Immersive Story) */}
        <motion.div className="mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <ImmersiveStory story={`Você está monitorando uma carga avaliada em R$ 1.5M. O painel aponta um desvio de rota 15km fora da área de sombra programada. O motorista não atende. O que o ${content.title} nos ensina sobre isso?`} />
        </motion.div>

        {/* 3. Theoretical Concept */}
        <div className="mt-20 space-y-16 max-w-3xl mx-auto">
          {content.sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">{section.title}</h2>
              <div className="mt-4 space-y-6 text-gray-300 text-lg leading-relaxed">
                {section.blocks.map((b, i) => (
                  <ContentBlockView key={i} block={b} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* 4. Video Placeholder */}
        <motion.div className="mt-20 max-w-4xl mx-auto" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-atlas-orange/20 to-transparent opacity-50" />
            <div className="z-10 flex flex-col items-center gap-4 transition-transform group-hover:scale-105">
              <PlayCircle className="w-16 h-16 text-atlas-orange drop-shadow-lg" />
              <p className="font-bold tracking-widest text-sm uppercase">Assistir Briefing Tático</p>
            </div>
          </div>
        </motion.div>

        {/* 5. Diagram */}
        <motion.div className="mt-20 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <MermaidViewer
            title="Fluxo de Escalonamento de Crise"
            chart={`graph LR\n A[Início] --> B[Monitoramento]\n B --> C[Conclusão]\n B --> D[Desvio]`}
          />
        </motion.div>

        {/* 6. Decision/Quiz */}
        <motion.div className="mt-24 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-atlas-orange/20 blur-[100px] pointer-events-none" />

            <h2 className="text-3xl font-display font-bold mb-4 relative z-10">Simulador de Decisão</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto relative z-10">Prove que você absorveu o conhecimento tático deste módulo. Você precisa de 70% de precisão para avançar de patente.</p>

            {!showQuiz && (
              <button
                onClick={() => setShowQuiz(true)}
                className="relative z-10 px-8 py-4 bg-atlas-orange text-white rounded-lg font-bold tracking-wider uppercase shadow-glow hover:bg-atlas-orange-2 hover:scale-105 transition-all"
              >
                {modProgress?.passed ? "Refazer Simulação" : "Iniciar Avaliação (5 Perguntas)"}
              </button>
            )}
            {showQuiz && (
              <div className="text-left relative z-10 mt-8">
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
        </motion.div>

        {modProgress?.passed && nextReady && (
          <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link href={`/trilha/${nextReady.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-colors group">
              Avançar para: {nextReady.title} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </main>
    </div>
  );
}
