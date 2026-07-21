import React from "react";
import { cn } from "./utils";

export interface MegaMenuProps {
  className?: string;
}

export function MegaMenu({ className }: MegaMenuProps) {
  return (
    <div className={cn("glass p-4 rounded-xl", className)}>
       {/* Componente PARCIAL: Scaffold for MegaMenu */}
      <p className="text-gray-400 italic">MegaMenu content (PARCIAL)</p>
    </div>
  );
}
