import { BarChart3, Layers, Target, Wrench } from "lucide-react";

import { competencyGroups, type CompetencyGroup } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

const icons = {
  target: Target,
  layers: Layers,
  barChart: BarChart3,
  wrench: Wrench,
} as const;

function GroupCard({ group, delay }: { group: CompetencyGroup; delay: number }) {
  const Icon = icons[group.icon];

  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className="surface-card-interactive p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="min-w-0 font-display text-base font-semibold">{group.title}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-primary-deep"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Competencies() {
  return (
    <section
      id="competencias"
      className="scroll-mt-24 border-y border-border bg-card/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Competências"
          title={
            <>
              O repertório que sustenta <span className="text-gradient">decisão de produto</span>
            </>
          }
          description="Estratégia e discovery para escolher o problema certo, processo para entregar com previsibilidade, dados para validar e base técnica para conversar de igual para igual com engenharia."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {competencyGroups.map((group, i) => (
            <GroupCard key={group.title} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
