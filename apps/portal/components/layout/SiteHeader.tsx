"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Rocket, Zap } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useOnboardingStore } from "@/lib/store";
import { levelProgress } from "@/lib/gamification";
import { cn } from "@/lib/utils";

const links = [
  { href: "/trilha", label: "Missões & Módulos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/glossario", label: "Glossário" },
  { href: "/dashboard", label: "Cockpit" },
  { href: "/certificado", label: "Certificado" },
];

export function SiteHeader({ hideNavLinks = false }: { hideNavLinks?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const registration = useOnboardingStore((s) => s.registration);
  const xp = useOnboardingStore((s) => s.xp);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        queueMicrotask(() => setMenuOpen(false));
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    queueMicrotask(() => setMenuOpen(false));
  }, [pathname]);

  const { current } = levelProgress(xp);

  const shouldHideLinks = hideNavLinks || pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4 border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Logo />
          </div>
        </Link>

        {!shouldHideLinks && (
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const isActive = pathname === l.href || pathname?.startsWith(`${l.href}/`);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-semibold transition-all relative group py-2 focus-visible-ring rounded-sm",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[2px] bg-atlas-orange scale-x-0 transition-transform origin-left duration-300 rounded-full group-hover:scale-x-100",
                      isActive && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {mounted && registration && (
            <Link href="/dashboard" className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-border/50 hover:border-atlas-orange/30 transition-colors group">
              <Zap className="w-4 h-4 text-atlas-orange group-hover:animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-muted uppercase leading-none tracking-widest">{current.title}</span>
                <span className="text-xs font-bold leading-none mt-1">Lvl {current.level} <span className="text-muted font-normal">• {xp} XP</span></span>
              </div>
            </Link>
          )}

          <div className="w-px h-6 bg-border/50 hidden sm:block mx-2" />

          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="p-2 md:hidden rounded-md bg-surface-2 border border-border/50 text-muted hover:text-foreground focus-visible-ring"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          className="flex flex-col gap-2 border-t border-border/50 bg-surface/95 backdrop-blur-md px-6 py-4 md:hidden absolute w-full shadow-xl reveal-up"
        >
          {links.map((l) => {
            const isActive = pathname === l.href || pathname?.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-bold transition flex items-center justify-between group focus-visible-ring",
                  isActive ? "bg-atlas-orange/10 text-atlas-orange" : "text-muted hover:bg-atlas-orange/10 hover:text-atlas-orange"
                )}
              >
                {l.label}
                <Rocket size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
