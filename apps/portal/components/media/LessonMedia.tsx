"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Captions, Pause, Play, RotateCcw, Volume2 } from "lucide-react";

interface VideoLessonProps {
  youtubeId: string;
  title: string;
  caption: string;
  transcript?: string[];
}

export function VideoLesson({ youtubeId, title, caption, transcript = [] }: VideoLessonProps) {
  const [playing, setPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">
      <div className="aspect-video bg-atlas-graphite">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&hl=pt-BR&cc_lang_pref=pt&cc_load_policy=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative flex h-full w-full items-center justify-center overflow-hidden"
            aria-label={`Reproduzir: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-atlas-graphite via-black/30 to-atlas-orange/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
            <span className="relative z-10 inline-flex h-20 w-20 items-center justify-center rounded-full bg-atlas-orange text-white shadow-2xl transition-transform duration-200 group-hover:scale-105">
              <Play size={34} fill="currentColor" aria-hidden="true" />
            </span>
            <span className="absolute bottom-5 left-5 right-5 z-10 text-left text-base font-black text-white sm:text-lg">{title}</span>
          </button>
        )}
      </div>

      <figcaption className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Vídeo da aula</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">{caption}</p>
          </div>
          {transcript.length > 0 && (
            <button
              type="button"
              onClick={() => setShowTranscript((value) => !value)}
              aria-expanded={showTranscript}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-muted transition-colors hover:border-atlas-orange/40 hover:text-atlas-orange"
            >
              <Captions size={15} aria-hidden="true" /> {showTranscript ? "Ocultar texto" : "Ler transcrição"}
            </button>
          )}
        </div>

        {showTranscript && transcript.length > 0 && (
          <div className="mt-5 rounded-2xl border border-border bg-background p-5" aria-label={`Transcrição de ${title}`}>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted">Transcrição / apoio de legenda</p>
            <div className="space-y-3">
              {transcript.map((paragraph, index) => (
                <p key={index} className="text-sm font-medium leading-relaxed text-foreground">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </figcaption>
    </figure>
  );
}

interface AudioLessonProps {
  title: string;
  text: string;
  caption?: string;
}

export function AudioLesson({ title, text, caption }: AudioLessonProps) {
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");
  const [rate, setRate] = useState(1);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const cleanText = useMemo(() => text.replace(/[*_#`]/g, " ").replace(/\s+/g, " ").trim(), [text]);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => synthRef.current?.cancel();
  }, []);

  function play() {
    const synth = synthRef.current;
    if (!synth) return;
    if (status === "paused") {
      synth.resume();
      setStatus("playing");
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "pt-BR";
    utterance.rate = rate;
    const voices = synth.getVoices();
    const voice = voices.find((item) => item.lang.toLowerCase().includes("pt-br"));
    if (voice) utterance.voice = voice;
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("idle");
    synth.speak(utterance);
    setStatus("playing");
  }

  function pause() {
    synthRef.current?.pause();
    setStatus("paused");
  }

  function restart() {
    synthRef.current?.cancel();
    setStatus("idle");
    window.setTimeout(play, 0);
  }

  return (
    <section className="rounded-3xl border border-border bg-surface p-5 shadow-lg sm:p-6" aria-label={`Áudio: ${title}`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-atlas-orange/10 text-atlas-orange">
            <Volume2 size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Ouça esta microaula</p>
            <h4 className="mt-1 font-display text-xl font-black text-foreground">{title}</h4>
            {caption && <p className="mt-1 text-sm font-medium leading-relaxed text-muted">{caption}</p>}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {status === "playing" ? (
            <button type="button" onClick={pause} className="inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-4 py-2.5 text-xs font-black text-white">
              <Pause size={15} fill="currentColor" aria-hidden="true" /> Pausar
            </button>
          ) : (
            <button type="button" onClick={play} className="inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-4 py-2.5 text-xs font-black text-white">
              <Play size={15} fill="currentColor" aria-hidden="true" /> {status === "paused" ? "Continuar" : "Ouvir"}
            </button>
          )}
          <button type="button" onClick={restart} className="rounded-xl border border-border bg-background p-2.5 text-muted hover:text-foreground" title="Reiniciar áudio">
            <RotateCcw size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setRate((current) => (current >= 1.5 ? 1 : current + 0.25))}
            className="rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-black tabular-nums text-muted hover:text-foreground"
            title="Velocidade do áudio"
          >
            {rate}x
          </button>
        </div>
      </div>

      <details className="mt-5 rounded-2xl border border-border bg-background p-4">
        <summary className="cursor-pointer text-xs font-black uppercase tracking-widest text-muted">Texto do áudio</summary>
        <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">{cleanText}</p>
      </details>
    </section>
  );
}
