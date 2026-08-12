"use client";

import { CheckCircle2, Lock, Play, BookOpen, Clock, Zap, Award, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ModuleMeta } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
  const xpReward = 100 + index * 10; // XP progressivo para cada módulo

  if (!isReady) {
    return (
      <Card variant="default" className="flex flex-col h-full bg-surface-2/30 border-border/30 opacity-70 grayscale">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="font-display font-black text-muted/40 text-4xl leading-none">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="bg-surface-2 border border-border p-2.5 rounded-2xl text-muted">
               <Lock size={18} />
            </div>
          </div>
          <Badge variant="muted" className="w-fit mb-3">{meta.category}</Badge>
          <h3 className="font-display font-bold text-lg text-muted line-clamp-2">{meta.title}</h3>
          <p className="mt-2 text-xs text-muted/70 line-clamp-2">Em breve na grade de treinamentos.</p>
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="h-full"
    >
      <Link
        href={`/trilha/${meta.slug}`}
        onClick={() => playUiSound("click")}
        className="block h-full group"
      >
        <Card
          variant="interactive"
          className={cn(
            "flex flex-col h-full relative overflow-hidden transition-all duration-300 border-2 rounded-3xl",
            isCompleted
              ? "border-emerald-500/40 bg-gradient-to-b from-surface via-surface to-emerald-950/10 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/20"
              : "border-atlas-orange/30 bg-gradient-to-b from-surface via-surface to-atlas-orange/5 shadow-xl hover:shadow-2xl hover:shadow-atlas-orange/20 hover:border-atlas-orange"
          )}
        >
          {/* Shimmer Effect ao passar o mouse */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          {/* Capa de Imagem com Iluminação e Efeitos */}
          <div className="h-48 relative overflow-hidden flex items-center justify-center p-4 bg-zinc-950">
            {meta.imageUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={meta.imageUrl}
                alt={meta.imageCaption || meta.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-75 group-hover:opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : null}

            {/* Gradientes de Fusão de Capa */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />

            {/* Badge de Recompensa em XP (Top Left) */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-zinc-900/90 border border-amber-500/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-amber-400 shadow-lg">
              <Zap size={13} className="fill-amber-400 text-amber-400 animate-pulse" />
              <span>+{xpReward} XP</span>
            </div>

            {/* Badge de Status / Nível de Módulo (Top Right) */}
            <div className="absolute top-3 right-3 z-20">
              {isCompleted ? (
                <div className="flex items-center gap-1.5 bg-emerald-500 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 size={14} />
                  <span>CONCLUÍDO</span>
                </div>
              ) : (
                <div className="bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-border/80 text-[11px] font-mono font-black text-atlas-orange shadow-md">
                  MISSÃO {(index + 1).toString().padStart(2, "0")}
                </div>
              )}
            </div>

            {/* Ícone Temático com Anel Neon Reluzente */}
            <div className="relative z-20 p-4 rounded-3xl bg-surface/90 backdrop-blur-md border-2 border-atlas-orange/40 shadow-2xl group-hover:border-atlas-orange group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,86,24,0.4)]">
              <Icon className="w-10 h-10 text-atlas-orange group-hover:rotate-6 transition-transform duration-300" />
            </div>

            {/* Legenda do Tema com Alto Contraste */}
            {meta.imageCaption && (
              <div className="absolute bottom-2 left-3 right-3 z-20 text-[11px] font-extrabold text-foreground bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-atlas-orange/30 truncate shadow-lg flex items-center gap-2">
                <Sparkles size={12} className="text-atlas-orange shrink-0" />
                <span className="truncate">{meta.imageCaption}</span>
              </div>
            )}
          </div>

          {/* Conteúdo Principal do Card */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              {/* Meta Tags: Categoria e Duração */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant={isCompleted ? "success" : "orange"} className="text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {meta.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted bg-surface-2 px-2.5 py-1 rounded-lg border border-border/50">
                  <Clock size={13} className="text-atlas-orange" />
                  <span>{meta.durationMinutes} min</span>
                </div>
              </div>

              {/* Título com Tipografia de Alto Impacto */}
              <h3 className="font-display font-black text-xl sm:text-2xl leading-tight text-foreground group-hover:text-atlas-orange transition-colors duration-300 mb-2">
                {meta.title}
              </h3>

              {/* Descrição Curta Motivacional */}
              <p className="text-xs sm:text-sm text-muted font-medium line-clamp-3 leading-relaxed mb-4">
                {meta.shortDescription}
              </p>
            </div>

            {/* Rodapé Motivacional com Botão Estilizado */}
            <div className="pt-4 border-t border-border/50 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <Award size={16} className={isCompleted ? "text-emerald-500" : "text-amber-500"} />
                <span className="text-xs font-bold uppercase tracking-wider text-muted group-hover:text-foreground transition-colors">
                  {isCompleted ? "Desafio Superado" : "Pronto para Iniciar"}
                </span>
              </div>

              {/* Botão de Ação Animado */}
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:translate-x-1",
                isCompleted
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white"
                  : "bg-gradient-atlas text-white shadow-atlas-orange/30 group-hover:brightness-110"
              )}>
                <span>{isCompleted ? "Revisar" : "Iniciar"}</span>
                {isCompleted ? <CheckCircle2 size={14} /> : <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
