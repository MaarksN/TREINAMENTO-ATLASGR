import React from "react";
import { cn } from "./utils";

export interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
       {/* Componente PARCIAL: Scaffold for Spotlight highlight effect */}
    </div>
  );
}
