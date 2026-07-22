"use client";

import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#333333",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#FF5618",
    lineColor: "#9a9ea6",
    background: "#1c1e22",
    fontFamily: "inherit",
  },
});

interface MermaidViewerProps {
  chart: string;
  className?: string;
  title?: string;
}

export function MermaidViewer({ chart, className, title }: MermaidViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawId = useId().replace(/[:]/g, "");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    mermaid
      .render(`mermaid-${rawId}`, chart)
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
  }, [chart, rawId]);

  return (
    <div className={cn("glass p-6 md:p-8 rounded-2xl border border-white/10", className)}>
      {title && <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">{title}</h4>}
      <div className="relative w-full overflow-x-auto overflow-y-hidden pb-2 scrollbar-thin scrollbar-thumb-white/20">
        {error ? (
          <p className="text-sm text-gray-500">Não foi possível renderizar o diagrama.</p>
        ) : (
          <div ref={containerRef} className="flex min-w-[500px] justify-center [&_svg]:mx-auto" />
        )}
      </div>
    </div>
  );
}
