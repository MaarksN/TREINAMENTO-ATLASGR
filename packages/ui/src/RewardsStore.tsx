import React from "react";
import { cn } from "./utils";

export function RewardsStore({ className }: { className?: string }) {
  return (
    <div className={cn("glass p-6 rounded-2xl border border-white/10", className)}>
      <h3 className="font-display font-bold text-xl text-atlas-orange mb-2">Loja de Recompensas (PARCIAL)</h3>
      <p className="text-sm text-gray-400 italic">Estrutura base para troca de XP por itens corporativos (Moletom, Caneca, etc).</p>
    </div>
  );
}
