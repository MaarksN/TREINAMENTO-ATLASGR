import type { Paragraph } from "@/lib/types";
import { GlossaryTerm } from "@/components/glossary/GlossaryTerm";

export function RichParagraph({ runs }: { runs: Paragraph }) {
  return (
    <p className="leading-relaxed text-foreground/90">
      {runs.map((run, i) =>
        typeof run === "string" ? <span key={i}>{run}</span> : <GlossaryTerm key={i} id={run.term} />
      )}
    </p>
  );
}
