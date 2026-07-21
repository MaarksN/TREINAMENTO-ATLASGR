"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
  trackClassName,
}: {
  value: number;
  className?: string;
  trackClassName?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-2.5 w-full overflow-hidden rounded-full bg-surface-2", trackClassName)}>
      <motion.div
        className={cn("h-full rounded-full bg-gradient-atlas", className)}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
