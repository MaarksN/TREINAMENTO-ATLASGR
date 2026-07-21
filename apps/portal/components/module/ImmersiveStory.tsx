"use client";

import { motion } from "framer-motion";
import { cn } from "../../../../packages/ui/src/utils";

interface ImmersiveStoryProps {
  story: string;
  backgroundImage?: string;
  className?: string;
}

export function ImmersiveStory({ story, backgroundImage, className }: ImmersiveStoryProps) {
  return (
    <div className={cn("relative min-h-[60vh] flex flex-col justify-center overflow-hidden rounded-2xl", className)}>
      {/* Background Image with dramatic fade masks */}
      <div className="absolute inset-0 z-0 bg-atlas-dark">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Story background"
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,86,24,0.15),transparent_50%)]" />
        )}

        {/* Vignette & Fade Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            Situação Crítica
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight md:leading-tight mb-8">
            {story || "São 2h17 da manhã. Um caminhão carregando R$ 2 milhões em medicamentos deixa a rodovia... Você saberia qual procedimento executar?"}
          </h2>

          <div className="w-16 h-1 bg-atlas-orange rounded-full shadow-[0_0_10px_rgba(255,86,24,0.5)]" />
        </motion.div>
      </div>
    </div>
  );
}
