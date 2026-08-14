"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Layers3, Sparkles } from "lucide-react";

interface ImmersiveLessonStageProps {
  chapterIndex: number;
  totalChapters: number;
  title: string;
  children: ReactNode;
}

export function ImmersiveLessonStage({ chapterIndex, totalChapters, title, children }: ImmersiveLessonStageProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative isolate overflow-hidden rounded-[2rem] border border-atlas-orange/20 bg-surface px-4 py-5 shadow-[0_28px_90px_-42px_rgba(255,86,24,0.45)] sm:px-7 sm:py-8"
      style={{ perspective: "1600px" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(255,86,24,0.12),transparent_34%),radial-gradient(circle_at_86%_22%,rgba(245,158,11,0.10),transparent_30%),linear-gradient(180deg,transparent,rgba(255,86,24,0.025))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.24] [background-image:linear-gradient(rgba(255,86,24,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,86,24,0.08)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-10 -z-10 h-48 w-48 rounded-full border border-atlas-orange/20 bg-atlas-orange/[0.035]"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ rotate: { duration: 34, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-8 -z-10 h-36 w-36 rounded-[2.5rem] border border-amber-500/15 bg-amber-500/[0.025]"
        animate={{ rotate: [8, -8, 8], y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.header
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="relative z-10 mb-7 flex items-start gap-4 border-b border-border/60 pb-6 sm:gap-5"
      >
        <motion.span
          whileHover={{ rotateY: 16, rotateX: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-atlas-orange to-amber-500 text-lg font-black text-white shadow-[0_16px_35px_-16px_rgba(255,86,24,0.9)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {String(chapterIndex + 1).padStart(2, "0")}
        </motion.span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-atlas-orange">
            <span className="inline-flex items-center gap-1.5"><Layers3 size={14} aria-hidden="true" /> Microaula {chapterIndex + 1} de {totalChapters}</span>
            <span className="text-muted">•</span>
            <span className="inline-flex items-center gap-1.5 text-muted"><Sparkles size={13} aria-hidden="true" /> experiência imersiva</span>
          </div>
          <h2 className="mt-2 text-balance font-display text-3xl font-black leading-[1.05] tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">{title}</h2>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, rotateX: 4, y: 22 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
        style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
