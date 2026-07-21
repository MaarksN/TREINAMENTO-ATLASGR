import React from "react";
import { cn } from "./utils";
import { Award, Shield, Cpu, Star, Flag, Target, Hexagon } from "lucide-react";

export interface HolographicBadgeProps {
  id: string;
  tier: "bronze" | "silver" | "gold" | "holographic";
  label: string;
  className?: string;
  unlocked?: boolean;
}

export function HolographicBadge({ id, tier, label, unlocked = false, className }: HolographicBadgeProps) {
  const getColors = () => {
    if (!unlocked) return "bg-black border-white/10 text-white/20";
    switch (tier) {
      case "bronze": return "bg-gradient-to-br from-amber-800 to-amber-950 border-amber-600 text-amber-500 shadow-[0_0_10px_rgba(217,119,6,0.3)]";
      case "silver": return "bg-gradient-to-br from-gray-300 to-gray-500 border-gray-100 text-white shadow-[0_0_15px_rgba(243,244,246,0.5)]";
      case "gold": return "bg-gradient-to-br from-yellow-400 to-yellow-600 border-yellow-200 text-yellow-100 shadow-[0_0_20px_rgba(250,204,21,0.6)]";
      case "holographic": return "bg-gradient-to-br from-atlas-orange to-purple-600 border-atlas-orange text-white shadow-[0_0_30px_rgba(255,86,24,0.8)] animate-glow-pulse";
    }
  };

  const getIcon = () => {
    switch(id) {
      case "guardiao-risco": return <Shield className="w-8 h-8" />;
      case "mestre-connect": return <Cpu className="w-8 h-8" />;
      case "nota-maxima": return <Target className="w-8 h-8" />;
      case "certificado": return <Star className="w-8 h-8" />;
      default: return <Hexagon className="w-8 h-8" />;
    }
  }

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className={cn(
        "relative flex items-center justify-center w-16 h-16 rounded-xl border-2 transition-all duration-500",
        getColors(),
        unlocked && "hover:scale-110 hover:-translate-y-1"
      )}>
        {/* Holographic reflection effect for high tiers */}
        {unlocked && (tier === "gold" || tier === "holographic") && (
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 transform -skew-x-12 animate-[pulse_3s_linear_infinite]" />
        )}
        <div className="relative z-10">{getIcon()}</div>
      </div>
      <span className={cn("text-[10px] font-bold uppercase tracking-wider text-center max-w-[80px]", unlocked ? "text-gray-300" : "text-gray-600")}>
        {label}
      </span>
    </div>
  );
}
