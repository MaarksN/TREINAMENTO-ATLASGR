import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Placeholder de carregamento reutilizável (shimmer respeita prefers-reduced-motion via .animate-pulse do Tailwind, que já é discreto). */
export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Carregando"
      className={cn("animate-pulse rounded-lg bg-surface-2", className)}
      {...props}
    />
  );
}
