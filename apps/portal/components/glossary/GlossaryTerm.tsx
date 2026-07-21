"use client";

import { BookOpen } from "lucide-react";
import { findGlossaryTerm } from "@/content/glossary";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";

export function GlossaryTerm({ id }: { id: string }) {
  const entry = findGlossaryTerm(id);
  if (!entry) return <span className="underline decoration-dotted">{id}</span>;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="mx-0.5 inline-flex items-center gap-1 rounded-md border-b border-dashed border-atlas-orange/60 px-0.5 font-medium text-atlas-orange transition hover:bg-atlas-orange/10"
        >
          {entry.term}
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="mb-2 flex items-center gap-2">
          <BookOpen size={16} className="text-atlas-orange" />
          <span className="font-display text-sm font-semibold">{entry.term}</span>
        </div>
        <p className="text-sm text-foreground/90">{entry.definition}</p>
        {entry.example && (
          <p className="mt-2 text-xs text-muted">
            <span className="font-semibold text-foreground/70">Exemplo: </span>
            {entry.example}
          </p>
        )}
        {entry.atlasUsage && (
          <p className="mt-2 rounded-lg bg-surface-2 p-2 text-xs text-muted">
            <span className="font-semibold text-foreground/70">Como a Atlas usa: </span>
            {entry.atlasUsage}
          </p>
        )}
        {entry.importance && (
          <p className="mt-2 text-xs text-muted">
            <span className="font-semibold text-foreground/70">Por que importa: </span>
            {entry.importance}
          </p>
        )}
      </PopoverContent>
    </Popover>
  );
}
