import { timeline } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section
      id="jornada"
      className="scroll-mt-24 border-y border-border bg-card/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Jornada"
          title={
            <>
              Da tecnologia para a <span className="text-gradient">gestão de produtos</span>
            </>
          }
          description="Uma trajetória construída em torno de organização, requisitos e melhoria contínua — hoje direcionada a estratégia e gestão de produtos."
        />

        <ol className="relative mt-12 space-y-5 border-l border-border pl-6 sm:pl-8">
          {timeline.map((entry, i) => (
            <li
              key={entry.year}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute top-7 -left-[1.85rem] size-3 rounded-full bg-gradient-primary ring-4 ring-background sm:-left-[2.35rem]"
              />
              <article className="surface-card-interactive p-6 sm:p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                  <h3 className="min-w-0 font-display text-lg font-semibold">{entry.title}</h3>
                  <span className="shrink-0 rounded-lg bg-surface px-2.5 py-1 font-display text-sm font-bold text-primary-deep">
                    {entry.year}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {entry.text}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
