import { ArrowRight, FileText, Github, Linkedin, Sparkles } from "lucide-react";

import portrait from "@/assets/perfil-portfolio.png";
import {
  heroCapabilities,
  heroRotation,
  heroStats,
  profile,
  type HeroStat,
} from "@/lib/portfolio-data";
import { useCountUp, useTypewriter } from "@/hooks/use-portfolio-motion";

function StatCounter({ stat }: { stat: HeroStat }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="surface-card p-5">
      <p className="font-display text-3xl font-bold text-primary-deep">
        <span ref={ref}>{value}</span>
        {stat.suffix ?? ""}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function Hero() {
  const typed = useTypewriter(heroRotation);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="order-1 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <figure className="surface-card relative overflow-hidden p-5">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-primary opacity-20 blur-3xl"
              />
              <div className="relative overflow-hidden rounded-2xl bg-surface">
                <img
                  src={portrait} 
                  alt={`Retrato de ${profile.name}, profissional de Product Management`}
                  width={1240}
                  height={1240}
                  loading="eager"
                  decoding="async"
                  className="aspect-square w-full object-cover object-center"
                />
              </div>
              <figcaption className="relative mt-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {profile.role}
                </p>
                <p className="mt-1.5 font-display text-xl font-bold">{profile.shortName}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Discovery · Estratégia · Delivery
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-primary-deep shadow-soft">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Em transição para Product Management
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.4rem]">
              {profile.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.subheadline}
            </p>

            <p className="mt-6 font-display text-lg font-semibold">
              <span className="text-muted-foreground">{profile.name} · </span>
              <span className="text-gradient" aria-live="polite">
                {typed || heroRotation[0]}
              </span>
              <span aria-hidden="true" className="ml-0.5 animate-pulse text-secondary">
                |
              </span>
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                Ver Product Cases
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-colors hover:border-border-strong hover:bg-surface"
              >
                <FileText className="size-4" aria-hidden="true" />
                Currículo
              </a>
              <div className="flex items-center gap-2">
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
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="surface-card p-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Foco de atuação
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {heroCapabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium text-primary-deep"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {heroStats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
