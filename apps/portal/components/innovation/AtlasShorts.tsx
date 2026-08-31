"use client";

import Link from "next/link";
import { BookOpen, ChevronRight, Clock3, Play, Target } from "lucide-react";
import { moduleMetas } from "@/content/modules";

const SHORT_MODULES = [
  "03-gerenciamento-risco",
  "05-software-logistico",
  "09-processo-comercial",
  "11-operacao",
  "12-compliance",
  "13-tecnologia",
];

export function AtlasShorts() {
  const shorts = SHORT_MODULES
    .map((slug) => moduleMetas.find((courseModule) => courseModule.slug === slug))
    .filter((courseModule): courseModule is NonNullable<typeof courseModule> => Boolean(courseModule));

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6" aria-labelledby="shorts-title">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-atlas-orange/25 bg-atlas-orange/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-atlas-orange">
          <Play size={14} fill="currentColor" aria-hidden="true" /> Microlearning
        </div>
        <h1 id="shorts-title" className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Revisões rápidas que levam de volta ao conteúdo completo
        </h1>
        <p className="mt-3 text-sm font-medium leading-relaxed text-muted sm:text-base">
          Sem curtidas inventadas ou ranking artificial. Cada card é um atalho para revisar uma competência crítica e continuar pela microaula oficial do módulo.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shorts.map((courseModule) => (
          <Link
            key={courseModule.slug}
            href={`/trilha/${courseModule.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-lg transition-all hover:-translate-y-1 hover:border-atlas-orange/35"
          >
            {courseModule.imageUrl && (
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={courseModule.imageUrl}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                  <Clock3 size={13} aria-hidden="true" /> revisão de 2 min
                </span>
              </div>
            )}

            <div className="p-5">
              <div className="flex items-center gap-2 text-atlas-orange">
                <Target size={16} aria-hidden="true" />
                <span className="text-[11px] font-black uppercase tracking-widest">{courseModule.category}</span>
              </div>
              <h2 className="mt-2 font-display text-xl font-black leading-tight text-foreground group-hover:text-atlas-orange">
                {courseModule.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm font-medium leading-relaxed text-muted">
                {courseModule.shortDescription}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-bold">
                <span className="inline-flex items-center gap-2 text-muted"><BookOpen size={14} aria-hidden="true" /> Abrir microaula</span>
                <ChevronRight size={16} className="text-atlas-orange transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
