import { AlertTriangle, CheckCircle2, Info, Quote, Scale } from "lucide-react";
import type { ContentBlock } from "@/lib/types";
import { RichParagraph } from "./RichText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";

const calloutStyles = {
  info: { icon: Info, cls: "border-sky-400/40 bg-sky-400/10 text-sky-700 dark:text-sky-300" },
  warning: { icon: AlertTriangle, cls: "border-amber-400/40 bg-amber-400/10 text-amber-700 dark:text-amber-300" },
  success: { icon: CheckCircle2, cls: "border-emerald-400/40 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300" },
};

export function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div className="space-y-3">
          {block.heading && <h4 className="font-display text-lg font-semibold text-foreground">{block.heading}</h4>}
          {block.paragraphs.map((p, i) => (
            <RichParagraph key={i} runs={p} />
          ))}
        </div>
      );

    case "callout": {
      const style = calloutStyles[block.variant];
      const Icon = style.icon;
      return (
        <div className={`flex gap-3 rounded-xl border p-4 ${style.cls}`}>
          <Icon size={20} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">{block.title}</p>
            <div className="mt-1 text-sm opacity-90">
              <RichParagraph runs={block.text} />
            </div>
          </div>
        </div>
      );
    }

    case "checklist":
      return (
        <Card className="p-5">
          <p className="mb-3 font-display font-semibold">{block.title}</p>
          <ul className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-atlas-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      );

    case "comparison":
      return (
        <div>
          <p className="mb-3 font-display font-semibold">{block.title}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[block.left, block.right].map((side, idx) => (
              <Card key={idx} className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Scale size={16} className="text-atlas-orange" />
                  <p className="text-sm font-semibold">{side.label}</p>
                </div>
                <ul className="space-y-1.5 text-sm text-muted">
                  {side.points.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      );

    case "timeline":
      return (
        <div>
          <p className="mb-4 font-display font-semibold">{block.title}</p>
          <ol className="relative space-y-6 border-l border-border pl-6">
            {block.items.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-gradient-atlas" />
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-0.5 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "case":
      return (
        <Card className="border-l-4 border-l-atlas-orange p-5">
          <p className="font-display font-semibold text-foreground">{block.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">{block.text}</p>
          <p className="mt-3 text-xs text-muted">Fonte: {block.source}</p>
        </Card>
      );

    case "faq":
      return (
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-surface px-4">
          {block.items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      );

    case "stat":
      return (
        <div className="grid gap-4 sm:grid-cols-3">
          {block.items.map((s, i) => (
            <Card key={i} className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-gradient-atlas">{s.value}</p>
              <p className="mt-1 text-xs text-muted">{s.label}</p>
            </Card>
          ))}
        </div>
      );

    case "quote":
      return (
        <div className="relative rounded-2xl bg-gradient-atlas p-6 text-white">
          <Quote className="mb-2 opacity-70" size={24} />
          <p className="font-display text-lg leading-snug">{block.text}</p>
          {block.author && <p className="mt-3 text-sm opacity-80">— {block.author}</p>}
        </div>
      );

    default:
      return null;
  }
}
