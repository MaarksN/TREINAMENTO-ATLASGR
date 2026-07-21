import React from "react";
import { cn } from "./utils";
import { PremiumCard } from "./PremiumCard";
import { motion } from "framer-motion";

interface ModuleCardProps {
  title: string;
  coverImage?: string;
  level: string;
  xp: number;
  progress: number; // 0 to 100
  className?: string;
}

export function ModuleCard({ title, coverImage, level, xp, progress, className }: ModuleCardProps) {
  return (
    <PremiumCard className={cn("flex flex-col h-full", className)} withGlow>
      {/* Netflix-style cover art area */}
      <div className="relative w-full aspect-video bg-atlas-dark/50 overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-atlas opacity-20" />
        )}

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Floating Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-1 text-xs font-bold text-white bg-black/60 backdrop-blur-md rounded border border-white/10 uppercase tracking-wider">
            {level}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-bold text-atlas-orange bg-atlas-orange/10 backdrop-blur-md rounded border border-atlas-orange/30">
            +{xp} XP
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between z-10 bg-black/40">
        <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{title}</h3>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-gray-400">
            <span>Progresso</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-atlas rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </PremiumCard>
  );
}
