"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Lock, PlayCircle, Wrench } from "lucide-react";
import type { ModuleMeta } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useOnboardingStore } from "@/lib/store";

export function ModuleCard({ meta, index }: { meta: ModuleMeta; index: number }) {
  const progress = useOnboardingStore((s) => s.progress[meta.slug]);
  const passed = !!progress?.passed;
  const isBuilding = meta.status === "building";

  const content = (
    <Card
      className={`group relative flex h-full flex-col overflow-hidden p-5 transition-all duration-300 ${
        isBuilding ? "opacity-70" : "hover:-translate-y-1 hover:border-atlas-orange/50 hover:shadow-lg"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-xs font-semibold text-muted">MÓDULO {String(meta.number).padStart(2, "0")}</span>
        {isBuilding ? (
          <Badge variant="muted" className="gap-1">
            <Wrench size={12} /> Em construção
          </Badge>
        ) : passed ? (
          <Badge variant="success" className="gap-1">
            <CheckCircle2 size={12} /> Concluído
          </Badge>
        ) : (
          <Badge variant="orange" className="gap-1">
            <PlayCircle size={12} /> Disponível
          </Badge>
        )}
      </div>
      <h3 className="font-display text-base font-semibold leading-snug text-foreground">{meta.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{meta.shortDescription}</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
        <Clock size={13} />
        <span>{meta.durationMinutes} min</span>
        {isBuilding && (
          <span className="ml-auto inline-flex items-center gap-1 text-muted">
            <Lock size={12} /> conteúdo completo em breve
          </span>
        )}
      </div>
    </Card>
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
        <Link href={`/trilha/${meta.slug}`} className="block h-full">
          {content}
        </Link>
      )}
    </motion.div>
  );
}
