"use client";

import { useState } from "react";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_SHORTS = [
  {
    id: 1,
    title: "5 Dicas de Logística Reversa",
    author: "@instrutor_atlas",
    likes: 1240,
    comments: 89,
    thumbnail: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Como otimizar paletização",
    author: "@logistica_pro",
    likes: 856,
    comments: 42,
    thumbnail: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Tipos de Embalagem",
    author: "@atlas_dicas",
    likes: 2100,
    comments: 156,
    thumbnail: "bg-gradient-to-br from-orange-500 to-red-600",
  }
];

export function AtlasShorts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollTop;
    const itemHeight = container.clientHeight;
    const newIndex = Math.round(scrollPosition / itemHeight);
    if (newIndex !== activeIndex && newIndex < MOCK_SHORTS.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] bg-background">
      <div 
        className="w-full max-w-[400px] h-[700px] max-h-[90vh] bg-black rounded-3xl overflow-y-scroll snap-y snap-mandatory border-4 border-surface-2 relative shadow-2xl"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {MOCK_SHORTS.map((short, index) => (
          <div 
            key={short.id} 
            className="w-full h-full snap-start relative flex flex-col justify-end"
          >
            <div className={cn("absolute inset-0 z-0", short.thumbnail)}>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play className="w-16 h-16 text-white/50" />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            <div className="relative z-20 p-6 flex items-end justify-between">
              <div className="flex-1 pr-12">
                <h3 className="text-white font-bold text-xl mb-2">{short.title}</h3>
                <p className="text-white/80 text-sm font-medium">{short.author}</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-[10px] text-white font-bold tracking-wider uppercase">Dica Rápida</span>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-[10px] text-white font-bold tracking-wider uppercase">30s</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 pb-4">
                <button className="group flex flex-col items-center gap-1">
                  <div className="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-atlas-orange/20 transition-colors">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-bold">{short.likes}</span>
                </button>
                <button className="group flex flex-col items-center gap-1">
                  <div className="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-atlas-orange/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-bold">{short.comments}</span>
                </button>
                <button className="group flex flex-col items-center gap-1">
                  <div className="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-atlas-orange/20 transition-colors">
                    <Share2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-bold">Compartilhar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </div>
  );
}
