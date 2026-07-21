"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- flag de hidratação: precisa rodar só no cliente
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema claro/escuro"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-atlas-orange hover:text-atlas-orange"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
