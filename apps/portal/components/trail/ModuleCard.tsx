"use client";

import { CheckCircle2, Lock, Play, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ModuleMeta } from "@/lib/types";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { moduleIcons } from "@/lib/moduleIcons";

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
      <Card variant="default" className="flex flex-col h-full bg-surface-2/30 border-border/30 opacity-75 grayscale-[0.5]">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-4">
            <span className="font-display font-bold text-muted/50 text-4xl leading-none">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="bg-surface border border-border p-2 rounded-xl text-muted">
               <Lock size={20} />
            </div>
          </div>
          <Badge variant="muted" className="w-fit mb-2">{meta.category}</Badge>
          <h3 className="font-display font-bold text-lg text-muted line-clamp-2">{meta.title}</h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted/70 line-clamp-3">Em breve na plataforma.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Link href={`/trilha/${meta.slug}`} className="block h-full group">
      <Card variant="interactive" className={cn("flex flex-col h-full border-border/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:border-atlas-orange/40", isCompleted ? "bg-surface" : "bg-surface")}>
        {/* Visual Identity Cover Banner */}
        <div className="h-36 bg-surface-2 border-b border-border/50 relative overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-atlas-orange/20 via-surface-2 to-surface opacity-90 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-10 pointer-events-none" />
          
          <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-border/60 text-[11px] font-mono font-bold text-atlas-orange shadow-sm">
            MÓDULO {(index + 1).toString().padStart(2, "0")}
          </div>

          <div className="relative z-10 p-3 rounded-2xl bg-surface/95 border border-border/60 shadow-lg group-hover:border-atlas-orange/50 group-hover:shadow-atlas-orange/15 transition-all duration-300 transform group-hover:scale-110">
            <Icon className="w-10 h-10 text-atlas-orange" />
          </div>

          {isCompleted && (
            <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md rounded-full p-1 shadow-sm border border-emerald-400/50">
              <CheckCircle2 size={16} className="text-white" />
            </div>
          )}
        </div>

        <CardHeader className="pb-2 pt-5 px-6">
          <div className="flex justify-between items-center mb-3">
             <Badge variant={isCompleted ? "success" : "orange"} className="text-[11px] font-bold px-2.5 py-0.5">
               {meta.category}
             </Badge>
             <div className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                <Clock size={13} />
                <span>{meta.durationMinutes} min</span>
             </div>
          </div>
          <h3 className="font-display font-bold text-lg sm:text-xl leading-snug group-hover:text-atlas-orange transition-colors">
            {meta.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 pb-4 px-6">
          <p className="text-xs sm:text-sm text-muted font-medium line-clamp-3 leading-relaxed">
            {meta.shortDescription}
          </p>
        </CardContent>

        <CardFooter className="pt-0 mt-auto border-t border-border/50 px-6 py-4 flex items-center justify-between bg-surface-2/50 group-hover:bg-atlas-orange/5 transition-colors">
           <span className="text-xs font-bold uppercase tracking-wider text-muted group-hover:text-atlas-orange transition-colors flex items-center gap-2">
              {isCompleted ? "Revisar Módulo" : "Iniciar Missão"}
           </span>
           <div className="bg-background border border-border/50 rounded-full p-2 text-muted group-hover:bg-atlas-orange group-hover:border-atlas-orange group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shadow-sm">
             {isCompleted ? <CheckCircle2 size={14} /> : <Play size={14} className="ml-0.5" />}
           </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
