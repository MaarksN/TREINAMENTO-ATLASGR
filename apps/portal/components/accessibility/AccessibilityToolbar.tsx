"use client";

import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Square, Gauge, Hand, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccessibilityToolbarProps {
  currentText: string;
  autoPlayText?: boolean;
}

export function AccessibilityToolbar({ currentText }: AccessibilityToolbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1);
  const [activeSubtitle, setActiveSubtitle] = useState<string>("");
  const [showSubtitles, setShowSubtitles] = useState<boolean>(true);
  const [librasActive, setLibrasActive] = useState<boolean>(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Parar fala anterior se o texto do slide mudar
  useEffect(() => {
    if (synthRef.current && isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setActiveSubtitle("");
    }
  }, [currentText]);

  function speakText(textToSpeak: string) {
    if (!synthRef.current || !textToSpeak.trim()) return;

    synthRef.current.cancel();

    const cleanText = textToSpeak.replace(/[*_#`-]/g, " ").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "pt-BR";
    utterance.rate = speechRate;

    // Buscar vozes pt-BR disponíveis
    const voices = synthRef.current.getVoices();
    const ptBRVoice = voices.find((v) => v.lang.includes("pt-BR") || v.lang.includes("pt_BR"));
    if (ptBRVoice) {
      utterance.voice = ptBRVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setActiveSubtitle(cleanText);
    };

    utterance.onboundary = (event) => {
      // Atualizar trecho da legenda com base na palavra falada
      if (event.name === "word") {
        const spokenWordIndex = event.charIndex;
        const currentSnippet = cleanText.substring(Math.max(0, spokenWordIndex - 20), spokenWordIndex + 60);
        setActiveSubtitle(currentSnippet + "...");
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setActiveSubtitle("");
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setActiveSubtitle("");
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }

  function handlePlay() {
    if (!synthRef.current) return;

    if (isPaused) {
      synthRef.current.resume();
      setIsPlaying(true);
      setIsPaused(false);
    } else {
      speakText(currentText);
    }
  }

  function handlePause() {
    if (!synthRef.current) return;
    if (isPlaying) {
      synthRef.current.pause();
      setIsPlaying(false);
      setIsPaused(true);
    }
  }

  function handleStop() {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setActiveSubtitle("");
  }

  function cycleRate() {
    const rates = [1, 1.25, 1.5, 2];
    const nextRate = rates[(rates.indexOf(speechRate) + 1) % rates.length];
    setSpeechRate(nextRate);

    if (isPlaying) {
      speakText(currentText);
    }
  }

  function toggleLibras() {
    setLibrasActive((prev) => !prev);

    // Injetar script do VLibras dinamicamente se ainda não existir no DOM
    if (!document.getElementById("vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.VLibras) {
          // @ts-ignore
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };
      document.body.appendChild(script);

      // Injetar elementos div exigidos pelo VLibras
      if (!document.getElementById("vlibras-widget-container")) {
        const container = document.createElement("div");
        container.id = "vlibras-widget-container";
        container.innerHTML = `
          <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
              <div class="vw-plugin-top-wrapper"></div>
            </div>
          </div>
        `;
        document.body.appendChild(container);
      }
    }
  }

  return (
    <>
      {/* Barra de Ferramentas de Acessibilidade (Voz + Legenda + LIBRAS) */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-surface-2/80 p-2 border border-border/60 backdrop-blur-md shadow-sm">
        {/* Voz Narração */}
        <div className="flex items-center gap-1 border-r border-border/50 pr-2">
          {!isPlaying ? (
            <button
              type="button"
              onClick={handlePlay}
              className="flex items-center gap-1.5 rounded-xl bg-atlas-orange px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-atlas-orange-2 focus-visible-ring"
              title="Ouvir Narração por Voz"
            >
              <Play size={14} fill="currentColor" />
              <span>Ouvir Voz</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePause}
              className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-amber-600 focus-visible-ring"
              title="Pausar Voz"
            >
              <Pause size={14} fill="currentColor" />
              <span>Pausar</span>
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              type="button"
              onClick={handleStop}
              className="rounded-xl bg-surface border border-border p-1.5 text-muted hover:text-foreground transition focus-visible-ring"
              title="Parar Narração"
            >
              <Square size={14} fill="currentColor" />
            </button>
          )}

          <button
            type="button"
            onClick={cycleRate}
            className="flex items-center gap-1 rounded-xl bg-surface border border-border px-2 py-1 text-[11px] font-mono font-bold text-muted hover:text-foreground transition focus-visible-ring"
            title="Velocidade de Leitura"
          >
            <Gauge size={12} />
            <span>{speechRate}x</span>
          </button>
        </div>

        {/* Alternar Legendas */}
        <button
          type="button"
          onClick={() => setShowSubtitles((v) => !v)}
          className={cn(
            "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition focus-visible-ring border",
            showSubtitles
              ? "bg-surface border-atlas-orange/40 text-atlas-orange"
              : "bg-surface border-border text-muted hover:text-foreground"
          )}
          title="Exibir Legendas na Tela"
        >
          <MessageSquare size={14} />
          <span>Legendas</span>
        </button>

        {/* Alternar LIBRAS */}
        <button
          type="button"
          onClick={toggleLibras}
          className={cn(
            "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition focus-visible-ring border",
            librasActive
              ? "bg-indigo-600 border-indigo-500 text-white shadow-sm"
              : "bg-surface border-border text-muted hover:text-foreground"
          )}
          title="Ativar Tradutor LIBRAS (Língua Brasileira de Sinais)"
        >
          <Hand size={14} />
          <span>🤟 LIBRAS</span>
        </button>
      </div>

      {/* Barra Flutuante de Legendas (CC - Closed Captioning) */}
      {showSubtitles && activeSubtitle && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[90%] rounded-2xl bg-black/90 text-white p-4 shadow-2xl backdrop-blur-xl border border-white/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between text-[10px] font-bold text-atlas-orange uppercase tracking-wider mb-1">
            <span className="flex items-center gap-1">
              <Volume2 size={12} className="animate-pulse" /> Voz Narradora & Legenda
            </span>
            <button type="button" onClick={() => setActiveSubtitle("")} className="hover:text-white">
              ✕
            </button>
          </div>
          <p className="text-sm font-medium leading-relaxed tracking-wide text-zinc-100">
            &ldquo;{activeSubtitle}&rdquo;
          </p>
        </div>
      )}
    </>
  );
}
