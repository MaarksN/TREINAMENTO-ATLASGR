"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/Tooltip";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {/* reducedMotion="user" faz o framer-motion respeitar automaticamente
          prefers-reduced-motion do sistema em todas as animações da plataforma. */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      </MotionConfig>
    </NextThemesProvider>
  );
}
