"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/Tooltip";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}
