"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

const THEME_VARIABLES = {
  light: {
    primaryColor: "#fbf1e9",
    primaryTextColor: "#201d1a",
    primaryBorderColor: "#ff5618",
    lineColor: "#746b64",
    secondaryColor: "#ffffff",
    tertiaryColor: "#ffffff",
    background: "#ffffff",
    textColor: "#201d1a",
    fontFamily: "inherit",
  },
  dark: {
    primaryColor: "#262019",
    primaryTextColor: "#f5f1ec",
    primaryBorderColor: "#ff6b35",
    lineColor: "#b6ac9f",
    secondaryColor: "#1c1a17",
    tertiaryColor: "#1c1a17",
    background: "#1c1a17",
    textColor: "#f5f1ec",
    fontFamily: "inherit",
  },
};

interface MermaidViewerProps {
  chart: string;
  className?: string;
  title?: string;
}

export function MermaidViewer({ chart, className, title }: MermaidViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawId = useId().replace(/[:]/g, "");
  const [error, setError] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    let cancelled = false;
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: isDark ? THEME_VARIABLES.dark : THEME_VARIABLES.light,
    });
    mermaid
      .render(`mermaid-${rawId}-${isDark ? "dark" : "light"}`, chart)
      .then(({ svg }) => {
        if (cancelled) return;
        setError(false);
        if (containerRef.current) containerRef.current.innerHTML = svg;
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [chart, rawId, isDark]);

  return (
    <div className={cn("glass p-6 md:p-8 rounded-2xl border border-border", className)}>
      {title && <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-6 text-center">{title}</h4>}
      <div className="relative w-full overflow-x-auto overflow-y-hidden pb-2">
        {error ? (
          <p className="text-sm text-muted">Não foi possível renderizar o diagrama.</p>
        ) : (
          <div ref={containerRef} className="flex min-w-[500px] justify-center [&_svg]:mx-auto" />
        )}
      </div>
    </div>
  );
}
