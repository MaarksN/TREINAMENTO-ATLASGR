"use client";

import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_NOTIFICATIONS = [
  { id: 1, title: "Novo Módulo Disponível!", description: "Aprenda sobre Logística Reversa.", time: "2h atrás", read: false },
  { id: 2, title: "Parabéns!", description: "Você subiu para o Nível 3.", time: "1d atrás", read: true },
  { id: 3, title: "Dica Rápida", description: "Confira o novo AtlasShort sobre embalagens.", time: "2d atrás", read: true },
];

export function PushNotificationsPanel() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const panelRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-md bg-surface-2 border border-border/50 text-muted hover:text-foreground focus-visible-ring transition-colors"
        aria-label="Notificações"
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-atlas-orange rounded-full animate-pulse" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-surface/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl z-50 overflow-hidden reveal-up">
          <div className="p-4 border-b border-border/50 flex justify-between items-center bg-surface-2">
            <h3 className="font-bold text-sm">Notificações</h3>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-xs text-atlas-orange hover:underline font-semibold"
              >
                Marcar lidas
              </button>
            )}
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              <ul className="divide-y divide-border/50">
                {notifications.map((n) => (
                  <li key={n.id} className={cn("p-4 transition-colors hover:bg-surface-2", !n.read && "bg-atlas-orange/5")}>
                    <div className="flex gap-3">
                      {!n.read && <div className="mt-1.5 w-2 h-2 bg-atlas-orange rounded-full flex-shrink-0" />}
                      <div>
                        <p className={cn("text-sm font-semibold", !n.read ? "text-foreground" : "text-muted")}>{n.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{n.description}</p>
                        <p className="text-[10px] text-muted font-medium mt-2">{n.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-muted text-sm">Nenhuma notificação.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
