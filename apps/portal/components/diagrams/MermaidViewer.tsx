"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Minus, Plus, RotateCcw, Workflow } from "lucide-react";
import { useTheme } from "next-themes";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

const THEME_VARIABLES = {
  light: {
    primaryColor: "#fff7f2",
    primaryTextColor: "#201d1a",
    primaryBorderColor: "#ff5618",
    lineColor: "#9a8377",
    secondaryColor: "#ffffff",
    tertiaryColor: "#fffaf7",
    background: "#ffffff",
    textColor: "#201d1a",
    fontFamily: "inherit",
  },
  dark: {
    primaryColor: "#2c221d",
    primaryTextColor: "#f8f4ef",
    primaryBorderColor: "#ff6b35",
    lineColor: "#c3aa9e",
    secondaryColor: "#1f1a17",
    tertiaryColor: "#241d19",
    background: "#171412",
    textColor: "#f8f4ef",
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
  const [zoom, setZoom] = useState(1);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    let cancelled = false;
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      securityLevel: "strict",
      flowchart: {
        curve: "basis",
        htmlLabels: true,
        nodeSpacing: 56,
        rankSpacing: 72,
        padding: 18,
      },
      themeVariables: isDark ? THEME_VARIABLES.dark : THEME_VARIABLES.light,
      themeCSS: `
        .node rect, .node polygon, .node path { stroke-width: 2px; }
        .nodeLabel, .label { font-weight: 750; letter-spacing: -0.01em; }
        .edgeLabel { background: transparent !important; font-weight: 700; }
        .flowchart-link { stroke-width: 2px; }
        marker path { fill: #ff5618 !important; stroke: #ff5618 !important; }
      `,
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

  function changeZoom(delta: number) {
    setZoom((current) => Math.min(1.6, Math.max(0.7, Number((current + delta).toFixed(2)))));
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 26, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] border border-atlas-orange/20 bg-surface shadow-[0_30px_90px_-46px_rgba(255,86,24,0.52)]",
        className
      )}
      style={{ perspective: "1400px" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_12%,rgba(255,86,24,0.13),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(245,158,11,0.08),transparent_27%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2] [background-image:linear-gradient(rgba(255,86,24,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,86,24,0.08)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

      <header className="flex flex-col gap-4 border-b border-border/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex min-w-0 items-center gap-4">
          <motion.span
            whileHover={{ rotateY: 16, rotateX: -8, scale: 1.04 }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-atlas-orange to-amber-500 text-white shadow-[0_14px_30px_-14px_rgba(255,86,24,0.95)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Workflow size={23} aria-hidden="true" />
          </motion.span>
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-atlas-orange">Mapa operacional</p>
            {title && <h4 className="mt-1 text-balance font-display text-xl font-black tracking-[-0.025em] text-foreground sm:text-2xl">{title}</h4>}
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto" aria-label="Controles do diagrama">
          <button type="button" onClick={() => changeZoom(-0.1)} className="rounded-xl border border-border bg-background/80 p-2.5 text-muted transition hover:border-atlas-orange/40 hover:text-atlas-orange" title="Diminuir zoom"><Minus size={15} /></button>
          <span className="min-w-14 text-center text-xs font-black tabular-nums text-muted">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => changeZoom(0.1)} className="rounded-xl border border-border bg-background/80 p-2.5 text-muted transition hover:border-atlas-orange/40 hover:text-atlas-orange" title="Aumentar zoom"><Plus size={15} /></button>
          <button type="button" onClick={() => setZoom(1)} className="rounded-xl border border-border bg-background/80 p-2.5 text-muted transition hover:border-atlas-orange/40 hover:text-atlas-orange" title="Restaurar zoom"><RotateCcw size={15} /></button>
        </div>
      </header>

      <div className="relative overflow-auto px-4 py-7 sm:px-7 sm:py-9">
        <motion.div
          animate={{ scale: zoom }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d" }}
          className="mx-auto min-w-[620px] rounded-[1.5rem] border border-border/70 bg-background/75 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-sm"
        >
          {error ? (
            <div className="flex min-h-64 flex-col items-center justify-center gap-3 text-center">
              <Maximize2 size={28} className="text-atlas-orange" />
              <p className="text-sm font-bold text-foreground">Não foi possível renderizar este mapa.</p>
              <p className="max-w-md text-xs leading-relaxed text-muted">O conteúdo textual do módulo continua disponível. Recarregue a tela para tentar novamente.</p>
            </div>
          ) : (
            <div ref={containerRef} className="flex min-h-64 justify-center [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-none" />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
