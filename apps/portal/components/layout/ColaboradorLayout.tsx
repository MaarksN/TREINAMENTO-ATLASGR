"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Award, Settings } from "lucide-react";
import { SiteHeader } from "./SiteHeader";

const navItems = [
  { href: "/dashboard", label: "Meu Painel", icon: LayoutDashboard },
  { href: "/trilha", label: "Trilha de Aprendizado", icon: BookOpen },
  { href: "/conquistas", label: "Conquistas", icon: Award },
  { href: "/configuracoes", label: "Configurações", icon: Settings },
];

export function ColaboradorLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Side Navigation */}
          <aside className="col-span-12 md:col-span-3">
            <nav className="sticky top-24 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-atlas-orange/10 text-atlas-orange"
                        : "text-muted hover:bg-surface-2 hover:text-foreground"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="col-span-12 md:col-span-9">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
