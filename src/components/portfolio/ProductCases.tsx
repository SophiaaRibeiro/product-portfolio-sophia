import { ArrowUpRight, AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";

import { productCases, type ProductCase } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

function CaseBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof AlertCircle;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-primary uppercase">
        <Icon className="size-3.5" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function CaseCard({ item, delay }: { item: ProductCase; delay: number }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className="surface-card-interactive overflow-hidden"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative bg-surface">
          <img
            src={item.cover}
            alt={`Capa do case ${item.title}`}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover"
          />
          <span className="absolute top-4 left-4 rounded-lg bg-card/90 px-2.5 py-1 font-display text-xs font-bold text-primary-deep backdrop-blur">
            Case {item.index}
          </span>
        </div>

        <div className="p-7 lg:p-9">
          <h3 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
          <p className="mt-2 text-sm font-medium text-primary">{item.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-1">
            <CaseBlock icon={AlertCircle} label="Problema" text={item.problem} />
            <CaseBlock icon={CheckCircle2} label="Solução" text={item.solution} />
            <CaseBlock icon={Lightbulb} label="Aprendizados" text={item.learnings} />
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              {item.highlightsLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium text-primary-deep"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {item.metrics ? (
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                Principais métricas
              </p>
              <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {item.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-background px-3 py-2.5"
                  >
                    <dt className="font-display text-sm font-semibold">{m.label}</dt>
                    <dd className="mt-0.5 text-xs text-muted-foreground">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <ul className="flex min-w-0 flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
              {item.stack.map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-secondary" />
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={item.href}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5" target="_blanck"
            >
              {item.ctaLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductCases() {
  return (
    <section id="cases" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Product Cases"
          title={
            <>
              Problemas reais, decisões <span className="text-gradient">documentadas</span>
            </>
          }
          description="Cada case mostra o raciocínio de produto por trás da entrega: qual era o problema, como priorizei, quais métricas acompanhei e o que aprendi no processo."
        />

        <div className="mt-12 space-y-6">
          {productCases.map((item, i) => (
            <CaseCard key={item.id} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
