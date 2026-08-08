"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/**
 * Cabeçalho de seção padronizado (badge + título + descrição) reutilizado em
 * toda a Home — evita duplicar a mesma marcação em Hero, Trilha, Indicadores
 * e Propósito.
 */
export function SectionHeading({ kicker, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn("flex mb-4", align === "center" ? "justify-center" : "justify-start")}
        >
          <Badge variant="orange">{kicker}</Badge>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
