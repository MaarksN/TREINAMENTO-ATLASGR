import type { Paragraph } from "@/lib/types";
import { GlossaryTerm } from "@/components/glossary/GlossaryTerm";
import { cn } from "@/lib/utils";

export function RichParagraph({ runs, className }: { runs: Paragraph; className?: string }) {
  return (
    <p className={cn("leading-relaxed text-foreground/90", className)}>
      {runs.map((run, i) =>
        typeof run === "string" ? <span key={i}>{run}</span> : <GlossaryTerm key={i} id={run.term} />
      )}
    </p>
  );
}
