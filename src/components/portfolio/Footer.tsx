import { Github, Linkedin } from "lucide-react";

import { navItems, profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
              SM
            </span>
            <span className="font-display text-base font-semibold">{profile.shortName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Product Management com base técnica: discovery, priorização, documentação e métricas
            para construir produtos que resolvem problemas reais.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="font-display text-sm font-semibold">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Redes</h2>
          <div className="mt-4 flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-primary"
            >
              <Linkedin className="size-4.5" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-primary"
            >
              <Github className="size-4.5" aria-hidden="true" />
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {profile.email}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} {profile.shortName} · Portfólio de Product Management
        </p>
      </div>
    </footer>
  );
}
