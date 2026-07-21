"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../../../packages/ui/src/utils";

// Mermaid.js is typically loaded dynamically or via a wrapper library.
// For this prototype, we'll scaffold a parameterized SVG block representing
// a typical logistics flowchart if a real mermaid integration isn't present,
// but structure it to accept mermaid code.

interface MermaidViewerProps {
  chart: string;
  className?: string;
  title?: string;
}

export function MermaidViewer({ chart, className, title }: MermaidViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // In a real implementation, we would call mermaid.render() here.
  // We'll render a premium SVG flowchart placeholder that matches the requested design.

  return (
    <div className={cn("glass p-6 md:p-8 rounded-2xl border border-white/10", className)}>
      {title && <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6">{title}</h4>}

      <div
        ref={containerRef}
        className="relative w-full overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin scrollbar-thumb-white/20"
      >
        {/* Parametrized SVG Flowchart Placeholder */}
        <svg viewBox="0 0 800 300" className="w-full min-w-[600px] h-auto drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(51, 51, 51, 0.9)" />
              <stop offset="100%" stopColor="rgba(28, 30, 34, 0.9)" />
            </linearGradient>
            <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 86, 24, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 86, 24, 0.05)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7178" />
            </marker>
            <marker id="arrowheadAlert" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#FF5618" />
            </marker>
          </defs>

          {/* Lines */}
          <path d="M 150 100 L 280 100" fill="none" stroke="#6b7178" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M 420 100 L 550 100" fill="none" stroke="#6b7178" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <path d="M 350 140 L 350 200 L 550 200" fill="none" stroke="#FF5618" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowheadAlert)" />

          {/* Nodes */}
          <g transform="translate(10, 60)">
            <rect width="140" height="80" rx="8" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="70" y="35" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Início de Viagem</text>
            <text x="70" y="55" fill="#9a9ea6" fontSize="10" textAnchor="middle">Sistema Atlas</text>
          </g>

          <g transform="translate(280, 60)">
            <rect width="140" height="80" rx="8" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="70" y="35" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Monitoramento</text>
            <text x="70" y="55" fill="#9a9ea6" fontSize="10" textAnchor="middle">SLA Padrão</text>
          </g>

          <g transform="translate(550, 60)">
            <rect width="140" height="80" rx="8" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="70" y="35" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Conclusão Segura</text>
            <text x="70" y="55" fill="#10b981" fontSize="10" textAnchor="middle">Sucesso</text>
          </g>

          <g transform="translate(550, 160)">
            <rect width="140" height="80" rx="8" fill="url(#alertGrad)" stroke="#FF5618" strokeWidth="1" filter="url(#glow)" />
            <text x="70" y="35" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Desvio de Rota</text>
            <text x="70" y="55" fill="#FF5618" fontSize="10" textAnchor="middle">Bloqueio Imediato</text>
          </g>

          {/* Fallback code viewer if wanted later */}
          <text x="10" y="290" fill="#6b7178" fontSize="10" fontFamily="monospace" className="opacity-50">
            {chart.substring(0, 50)}...
          </text>
        </svg>
      </div>
    </div>
  );
}
