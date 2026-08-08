"use client";

import { useState } from "react";
import { Maximize2, PlayCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";

// Vídeo institucional real da ATLASGR (fornecido pelo usuário).
const VIDEO_ID = "yALfdQPaPi4";

export function InstitutionalVideo() {
  const [playing, setPlaying] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-lg">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="Vídeo institucional ATLASGR"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Reproduzir vídeo institucional da ATLASGR"
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-atlas-graphite shadow-lg"
    >
      {!thumbLoaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        onLoad={() => setThumbLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90",
          thumbLoaded ? "opacity-70" : "opacity-0"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      <PlayCircle
        size={64}
        className="relative z-10 text-white/90 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
      />
      <span className="absolute bottom-4 left-4 z-10 text-left text-sm font-medium text-white drop-shadow">
        Vídeo institucional ATLASGR
      </span>
      <Maximize2 size={16} className="absolute right-4 top-4 z-10 text-white/70" />
    </button>
  );
}
