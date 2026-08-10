import { ListChecks, TrendingUp, Users, Zap } from "lucide-react";

import { softSkills, type SoftSkill } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

const icons = {
  listChecks: ListChecks,
  trendingUp: TrendingUp,
  zap: Zap,
  users: Users,
} as const;

function SkillCard({ skill, delay }: { skill: SoftSkill; delay: number }) {
  const Icon = icons[skill.icon];

  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className="surface-card-interactive p-7"
    >
      <span className="grid size-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-base font-semibold">{skill.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{skill.text}</p>
    </article>
  );
}

export function SoftSkills() {
  return (
    <section id="soft-skills" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Soft Skills"
          title={
            <>
              Como eu trabalho com <span className="text-gradient">times</span>
            </>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {softSkills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
