import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { navItems, profile } from "@/lib/portfolio-data";
import { useActiveSection, useScrolled } from "@/hooks/use-portfolio-motion";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled(16);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
            SM
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold">
              {profile.shortName}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === item.href.replace("#", "")
                    ? "bg-muted text-primary-deep"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Contato
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-0 z-50 bg-background/98 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-sm font-semibold">{profile.shortName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid size-10 place-items-center rounded-xl border border-border bg-card"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-4" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 font-display text-lg font-semibold text-foreground transition-colors hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3.5 font-semibold text-primary-foreground"
            >
              Contato
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
