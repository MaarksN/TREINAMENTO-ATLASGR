"use client";

import { BookOpen } from "lucide-react";
import { findGlossaryTerm } from "@/content/glossary";
import { Tooltip } from "@/components/ui/Tooltip";

export function GlossaryTerm({ id }: { id: string }) {
  const entry = findGlossaryTerm(id);
  if (!entry) return <span className="underline decoration-dotted">{id}</span>;

  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-2 p-1 max-w-[280px]">
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-atlas-orange" />
            <span className="font-display font-bold text-white">{entry.term}</span>
          </div>
          <p className="text-[13px] text-zinc-300 leading-relaxed">{entry.definition}</p>
          {entry.example && (
            <p className="mt-1 text-[11px] text-zinc-400">
              <span className="font-bold text-zinc-300">Exemplo: </span>
              {entry.example}
            </p>
          )}
          {entry.atlasUsage && (
            <p className="mt-1 rounded bg-white/10 p-1.5 text-[11px] text-zinc-300">
              <span className="font-bold">Uso na Atlas: </span>
              {entry.atlasUsage}
            </p>
          )}
        </div>
      }
    >
      <span
        className="mx-0.5 inline-flex cursor-help items-center gap-1 border-b border-dashed border-atlas-orange/60 font-medium text-atlas-orange transition-colors hover:bg-atlas-orange/10 hover:text-atlas-orange"
      >
        {entry.term}
      </span>
    </Tooltip>
  );
}
