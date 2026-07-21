import React from "react";
import { cn } from "./utils";

export interface TimelineProps {
  className?: string;
  items: Array<{
    title: string;
    description: string;
    date: string;
    status?: "pending" | "active" | "completed";
  }>;
}

export function Timeline({ className, items }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Componente PARCIAL: Scaffold for Timeline */}
      <p className="text-gray-400 italic">Timeline content (PARCIAL)</p>
    </div>
  );
}
