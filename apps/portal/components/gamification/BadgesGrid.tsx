"use client";

import { Award, Lock, ShieldCheck, Sparkles, Star, Trophy, Zap } from "lucide-react";
import { BADGES, BadgeDef } from "@/lib/gamification";
import { cn } from "@/lib/utils";

interface BadgesGridProps {
  unlockedBadgeIds: string[];
}

const TIER_COLORS: Record<BadgeDef["tier"], { bg: string; border: string; text: string; iconBg: string }> = {
  bronze: {
    bg: "bg-amber-950/20 dark:bg-amber-950/40",
    border: "border-amber-700/40",
    text: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/20 text-amber-500",
  },
  silver: {
    bg: "bg-slate-800/20 dark:bg-slate-800/40",
    border: "border-slate-500/40",
    text: "text-slate-700 dark:text-slate-300",
    iconBg: "bg-slate-500/20 text-slate-300",
  },
  gold: {
    bg: "bg-amber-500/10 dark:bg-amber-500/20",
    border: "border-amber-500/40",
    text: "text-amber-500",
    iconBg: "bg-amber-500/30 text-amber-500",
  },
  holographic: {
    bg: "bg-gradient-to-br from-atlas-orange/20 via-purple-500/20 to-blue-500/20",
    border: "border-atlas-orange/50",
    text: "text-atlas-orange",
    iconBg: "bg-gradient-atlas text-white shadow-md shadow-atlas-orange/30",
  },
};

export function BadgesGrid({ unlockedBadgeIds }: BadgesGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {BADGES.map((badge) => {
        const isUnlocked = unlockedBadgeIds.includes(badge.id);
        const tierStyle = TIER_COLORS[badge.tier];

        return (
          <div
            key={badge.id}
            className={cn(
              "relative flex items-start gap-4 rounded-2xl p-4 border transition-all duration-300",
              isUnlocked
                ? `${tierStyle.bg} ${tierStyle.border} shadow-sm hover:scale-[1.02]`
                : "bg-surface-2/30 border-border/40 opacity-60 grayscale-[0.6]"
            )}
          >
            {/* Ícone de Conquista */}
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/50 shadow-sm",
                isUnlocked ? tierStyle.iconBg : "bg-surface-2 text-muted"
              )}
            >
              {isUnlocked ? (
                badge.tier === "holographic" ? (
                  <Sparkles size={22} className="animate-pulse" />
                ) : (
                  <Trophy size={22} />
                )
              ) : (
                <Lock size={18} />
              )}
            </div>

            {/* Informações da Medalha */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={cn("text-xs font-bold uppercase tracking-wider", isUnlocked ? tierStyle.text : "text-muted")}>
                  {badge.tier}
                </span>
                {isUnlocked && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2Icon size={10} /> Desbloqueada
                  </span>
                )}
              </div>
              <h4 className="font-display font-bold text-sm text-foreground truncate">{badge.label}</h4>
              <p className="text-xs text-muted leading-relaxed mt-1 line-clamp-2">{badge.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CheckCircle2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
