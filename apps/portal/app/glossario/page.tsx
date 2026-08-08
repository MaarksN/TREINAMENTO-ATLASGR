"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { glossary } from "@/content/glossary";
import { cn } from "@/lib/utils";

export default function GlossarioPage() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter(
      (g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
    );
  }, [query]);

  const currentTerm = filtered[activeIndex] || null;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-8 sm:px-6">
        <div className="text-center mb-6">
          <Badge variant="orange" className="mb-2">Vocabulário Técnico</Badge>
          <h1 className="font-display text-3xl font-bold text-foreground">Glossário Operacional</h1>
          <p className="mt-1 text-xs text-muted">
            Exibindo 1 termo por página.
          </p>
        </div>

        <div className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder="Buscar termo (ex.: PGR, checklist, malícia...)"
            className="h-11 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm outline-none focus:border-atlas-orange"
          />
        </div>

        {filtered.length > 0 && currentTerm ? (
          <>
            <div className="flex items-center justify-between gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeIndex === 0}
                leftIcon={<ChevronLeft size={16} />}
              >
                Anterior
              </Button>

              <Badge variant="orange" className="px-3 py-1 font-mono text-xs">
                Termo {activeIndex + 1} de {filtered.length}
              </Badge>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveIndex((prev) => Math.min(filtered.length - 1, prev + 1))}
                disabled={activeIndex === filtered.length - 1}
                rightIcon={<ChevronRight size={16} />}
              >
                Próximo
              </Button>
            </div>

            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTerm.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-8 shadow-lg">
                    <p className="font-display text-2xl font-bold text-foreground">{currentTerm.term}</p>
                    <p className="mt-4 text-base text-muted leading-relaxed">{currentTerm.definition}</p>
                    {currentTerm.atlasUsage && (
                      <p className="mt-4 text-xs font-semibold text-atlas-orange bg-atlas-orange/10 p-3 rounded-xl border border-atlas-orange/20">
                        Como a Atlas usa: {currentTerm.atlasUsage}
                      </p>
                    )}
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-muted">
            Nenhum termo encontrado para &ldquo;{query}&rdquo;.
          </div>
        )}
      </main>

      <div className="sticky bottom-0 z-30 border-t border-border/50 bg-background/90 backdrop-blur-xl py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0 || filtered.length === 0}
            leftIcon={<ChevronLeft size={16} />}
          >
            Anterior
          </Button>

          <span className="text-xs font-semibold text-muted">
            Termo <strong className="text-foreground">{filtered.length > 0 ? activeIndex + 1 : 0}</strong> de <strong>{filtered.length}</strong>
          </span>

          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveIndex((prev) => Math.min(filtered.length - 1, prev + 1))}
            disabled={activeIndex === filtered.length - 1 || filtered.length === 0}
            rightIcon={<ChevronRight size={16} />}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
