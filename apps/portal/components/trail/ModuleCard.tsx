"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Lock, PlayCircle, Wrench } from "lucide-react";
import type { ModuleMeta } from "@/lib/types";
import { useOnboardingStore } from "@/lib/store";
import { moduleIcons } from "@/lib/moduleIcons";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";

// Paleta de "pôsteres" em tons da marca ATLASGR (laranja + grafite) — cicla
// por módulo para dar identidade visual sem sair da paleta oficial.
const POSTER_GRADIENTS = [
  "from-[#ff5618] via-[#b8360d] to-[#1c1e22]",
  "from-[#1c1e22] via-[#3a2115] to-[#ff5618]",
  "from-[#ff8347] via-[#ff5618] to-[#241512]",
  "from-[#333333] via-[#4a2a1a] to-[#ff6a35]",
  "from-[#ff5618] via-[#7a3d1f] to-[#131417]",
];

export function ModuleCard({ meta, index }: { meta: ModuleMeta; index: number }) {
  const progress = useOnboardingStore((s) => s.progress[meta.slug]);
  const passed = !!progress?.passed;
  const isBuilding = meta.status === "building";
  const Icon = moduleIcons[meta.slug];
  const poster = POSTER_GRADIENTS[(meta.number - 1) % POSTER_GRADIENTS.length];

  const content = (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300",
        isBuilding
          ? "opacity-60 grayscale"
          : "hover:-translate-y-1.5 hover:border-atlas-orange/60 hover:shadow-[0_12px_40px_-8px_rgba(255,86,24,0.35)]"
      )}
    >
      {/* Pôster */}
      <div className={cn("relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br", poster)}>
        {/* número gigante em marca d'água */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-4 -left-2 select-none font-display text-[6rem] font-bold leading-none text-white/10"
        >
          {String(meta.number).padStart(2, "0")}
        </span>

        {/* ícone temático */}
        {Icon && (
          <Icon
            aria-hidden
            className={cn(
              "pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-white/15 transition-transform duration-500",
              !isBuilding && "group-hover:scale-110 group-hover:rotate-3"
            )}
          />
        )}

        {/* véu inferior para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* selo de módulo */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Módulo {String(meta.number).padStart(2, "0")}
        </span>

        {/* marca ATLASGR */}
        <span className="absolute bottom-3 right-3 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/90 p-1.5 backdrop-blur-sm">
          <Logo withWordmark={false} />
        </span>

        {/* status */}
        <span
          className={cn(
            "absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm",
            isBuilding && "border-white/15 bg-black/40 text-gray-300",
            !isBuilding && passed && "border-emerald-500/40 bg-emerald-500/20 text-emerald-300",
            !isBuilding && !passed && "border-atlas-orange/40 bg-atlas-orange/20 text-atlas-orange"
          )}
        >
          {isBuilding ? (
            <>
              <Wrench size={12} /> Em breve
            </>
          ) : passed ? (
            <>
              <CheckCircle2 size={12} /> Concluído
            </>
          ) : (
            <>
              <PlayCircle size={12} /> Disponível
            </>
          )}
        </span>

        {/* overlay de play no hover */}
        {!isBuilding && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-sm">
              <PlayCircle size={30} />
            </span>
          </div>
        )}

        {isBuilding && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="h-8 w-8 text-white/50" />
          </div>
        )}

        {/* barra de progresso */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
          <div
            className={cn("h-full bg-atlas-orange transition-all", passed ? "w-full" : "w-0")}
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-base font-semibold leading-snug text-foreground">{meta.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted">{meta.shortDescription}</p>
        <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted">
          <Clock size={13} />
          <span>{meta.durationMinutes} min</span>
          {isBuilding && <span className="ml-auto text-muted">conteúdo completo em breve</span>}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.04 }}
      className="h-full"
    >
      {isBuilding ? (
        <div className="h-full cursor-not-allowed">{content}</div>
      ) : (
        <Link href={`/trilha/${meta.slug}`} className="block h-full focus-visible-ring rounded-2xl">
          {content}
        </Link>
      )}
    </motion.div>
  );
}
