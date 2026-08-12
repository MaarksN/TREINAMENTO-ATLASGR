"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImmersiveStoryProps {
  story: string;
  backgroundImage?: string;
  className?: string;
}

export function ImmersiveStory({ story, backgroundImage, className }: ImmersiveStoryProps) {
  return (
    <div
      className={cn(
        "relative min-h-[46vh] flex flex-col justify-center overflow-hidden rounded-2xl border border-border",
        className
      )}
    >
      {/* Fundo: superfície do tema, com brilho laranja e (se houver) foto legível em ambos os temas */}
      <div className="absolute inset-0 z-0 bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--atlas-orange)_16%,transparent),transparent_55%)]" />
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt="Story background"
              fill
              className="object-cover opacity-25 grayscale mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-transparent to-transparent" />
          </>
        )}
      </div>

      <div className="relative z-10 p-8 md:p-16 max-w-4xl text-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-3 py-1 bg-red-500/15 border border-red-500/40 rounded text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            Situação Crítica
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight md:leading-tight mb-8 text-balance">
            {story || "São 2h17 da manhã. Um caminhão carregando R$ 2 milhões em eletrônicos deixa a rodovia... Você saberia qual procedimento executar?"}
          </h2>

          <div className="w-16 h-1 bg-atlas-orange rounded-full shadow-[0_0_10px_rgba(255,86,24,0.5)] mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
