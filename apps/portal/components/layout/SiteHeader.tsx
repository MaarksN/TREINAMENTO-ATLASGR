"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useOnboardingStore } from "@/lib/store";
import { levelProgress } from "@/lib/gamification";
import { cn } from "@/lib/utils";
import { PushNotificationsPanel } from "@/components/innovation/PushNotificationsPanel";

const links = [
  { href: "/trilha", label: "Missões & Módulos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/glossario", label: "Glossário" },
  { href: "/dashboard", label: "Cockpit" },
  { href: "/ranking", label: "Ranking" },
  { href: "/certificado", label: "Certificado" },
];

export function SiteHeader({ hideNavLinks = false }: { hideNavLinks?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const registration = useOnboardingStore((s) => s.registration);
  const xp = useOnboardingStore((s) => s.xp);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true); // scrolling down
        setMenuOpen(false); // auto close menu on scroll down
      } else {
        setHidden(false); // scrolling up
      }
      lastScrollY.current = currentScrollY;
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
          : "bg-transparent py-4 border-b border-transparent",
        hidden ? "-translate-y-full" : "translate-y-0"
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
          {mounted && registration && (() => {
            const getTierColor = (level: number) => {
              if (level === 1) return "border-[#CD7F32] from-[#CD7F32]/20 to-transparent"; // Bronze
              if (level === 2) return "border-[#C0C0C0] from-[#C0C0C0]/20 to-transparent"; // Silver
              if (level === 3) return "border-[#FFD700] from-[#FFD700]/20 to-transparent"; // Gold
              if (level === 4) return "border-[#b9f2ff] from-[#b9f2ff]/20 to-transparent"; // Platinum
              return "border-atlas-orange from-atlas-orange/20 to-transparent"; // Holographic
            };
            const tierStyle = getTierColor(current.level);
            
            return (
              <Link href="/profile" className="hidden sm:flex items-center gap-3 px-2 py-1.5 rounded-full bg-surface-2 border border-border/50 hover:bg-surface transition-colors group">
                <div className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 bg-gradient-to-br bg-background font-display font-bold text-xs uppercase ${tierStyle}`}>
                  {registration.nomeCompleto.charAt(0)}
                  <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-atlas-graphite text-[8px] font-black text-white shadow-sm ring-1 ring-border">
                    {current.level}
                  </div>
                </div>
                <div className="flex flex-col pr-3">
                  <span className="text-[10px] font-bold text-muted uppercase leading-none tracking-widest group-hover:text-atlas-orange transition-colors">{current.title}</span>
                  <span className="text-xs font-bold leading-none mt-1">{xp} <span className="font-normal text-muted">XP</span></span>
                </div>
              </Link>
            );
          })()}

          <div className="w-px h-6 bg-border/50 hidden sm:block mx-2" />

          <PushNotificationsPanel />
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
