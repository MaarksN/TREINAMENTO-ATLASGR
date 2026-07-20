"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useOnboardingStore } from "@/lib/store";
import { levelProgress } from "@/lib/gamification";
import { Badge } from "@/components/ui/Badge";

const links = [
  { href: "/trilha", label: "Trilha" },
  { href: "/glossario", label: "Glossário" },
  { href: "/dashboard", label: "Meu painel" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const registration = useOnboardingStore((s) => s.registration);
  const xp = useOnboardingStore((s) => s.xp);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- flag de hidratação: precisa rodar só no cliente
    setMounted(true);
  }, []);

  const { current } = levelProgress(xp);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-muted transition hover:text-atlas-orange">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && registration && (
            <Badge variant="orange" className="hidden sm:inline-flex">
              Nível {current.level} · {current.title}
            </Badge>
          )}
          <ThemeToggle />
          <button className="p-1 md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-atlas-orange"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
