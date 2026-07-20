import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "orange" | "success" | "warning" | "muted";

const variants: Record<Variant, string> = {
  default: "bg-surface-2 text-foreground",
  orange: "bg-gradient-atlas text-white",
  success: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  warning: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  muted: "bg-surface-2 text-muted",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
