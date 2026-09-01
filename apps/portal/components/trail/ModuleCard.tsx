"use client";

import { CheckCircle2, Lock, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ModuleMeta } from "@/lib/types";
import { moduleIcons } from "@/lib/moduleIcons";
import { playUiSound } from "@/lib/soundEngine";

interface ModuleCardProps {
  meta: ModuleMeta;
  index: number;
  isCompleted?: boolean;
}

export function ModuleCard({ meta, index, isCompleted }: ModuleCardProps) {
  const isReady = meta.status === "ready";
  const Icon = moduleIcons[meta.slug] || BookOpen;

  if (!isReady) {
    return (
      <div className="flex flex-col h-full bg-surface-2 border border-border/50 rounded-xl p-5 opacity-70 grayscale">
        <div className="flex justify-between items-start mb-3">
          <div className="w-8 h-8 flex items-center justify-center rounded bg-border text-muted">
            <Lock size={16} />
          </div>
        </div>
        <h3 className="font-sans font-bold text-base text-foreground mb-1.5">{meta.title}</h3>
        <p className="text-xs text-muted leading-relaxed">Em breve na grade de treinamentos.</p>
      </div>
    );
  }

  return (
    <Link
      href={`/trilha/${meta.slug}`}
      onClick={() => playUiSound("click")}
      className={cn(
        "group flex flex-col h-full bg-surface border rounded-xl p-5 transition-all duration-200 hover:shadow-md",
        isCompleted ? "border-emerald-200 hover:border-emerald-300" : "border-border hover:border-atlas-orange/50"
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div className={cn(
          "w-8 h-8 flex items-center justify-center rounded-lg",
          isCompleted ? "bg-emerald-100 text-emerald-600" : "bg-atlas-orange/10 text-atlas-orange"
        )}>
          {/* @ts-expect-error Icon might be a lucide icon (takes size) or custom SVG (takes w/h) */}
          <Icon size={18} width={18} height={18} />
        </div>
        {isCompleted && (
          <CheckCircle2 size={18} className="text-emerald-500" />
        )}
      </div>

      <h3 className="font-sans font-bold text-base text-foreground mb-2 group-hover:text-atlas-orange transition-colors">
        {meta.title}
      </h3>
      
      <p className="text-xs text-muted leading-relaxed line-clamp-3">
        {meta.shortDescription}
      </p>

      <div className="mt-auto pt-4 flex items-center gap-2">
        <span className={cn(
          "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded",
          isCompleted ? "bg-emerald-50 text-emerald-600" : "bg-surface-2 text-muted"
        )}>
          {meta.category}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-surface-2 text-muted">
          {meta.durationMinutes} min
        </span>
      </div>
    </Link>
  );
}
