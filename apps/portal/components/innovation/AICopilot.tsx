"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export function AICopilot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá! Sou o seu tutor de logística. Como posso ajudar hoje?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: "assistant", content: "Isso é uma ótima pergunta! Na logística, consideramos fatores de tempo, custo e sustentabilidade. (Resposta simulada)" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open ? (
        <div className="w-80 h-[400px] bg-surface/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden reveal-up">
          <div className="p-4 bg-surface-2 border-b border-border/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-atlas-orange" />
              <h3 className="font-bold text-sm">Tutor AI</h3>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="text-muted hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={cn(
                  "max-w-[85%] rounded-xl p-3 text-sm",
                  msg.role === "user" 
                    ? "bg-atlas-orange text-white self-end rounded-br-sm"
                    : "bg-surface-2 border border-border/50 text-foreground self-start rounded-bl-sm"
                )}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="p-3 bg-surface-2 border-t border-border/50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Pergunte sobre logística..."
              className="flex-1 bg-background border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-atlas-orange transition-colors"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-atlas-orange text-white rounded-full hover:bg-atlas-orange/90 transition-colors flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-atlas-orange text-white rounded-full shadow-lg shadow-atlas-orange/20 flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Abrir Tutor AI"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
