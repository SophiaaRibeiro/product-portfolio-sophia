import { Compass, FileText, LineChart } from "lucide-react";

import { aboutCards, type AboutCard } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

const icons = {
  compass: Compass,
  fileText: FileText,
  lineChart: LineChart,
} as const;

function AboutItem({ card, delay }: { card: AboutCard; delay: number }) {
  const Icon = icons[card.icon];

  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className="surface-card-interactive p-7"
    >
      <span className="grid size-11 place-items-center rounded-xl bg-surface text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
    </article>
  );
}

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mim"
          title={
            <>
              Base técnica, olhar de <span className="text-gradient">produto</span>
            </>
          }
          description="Venho da tecnologia, onde aprendi a transformar necessidade em requisito e requisito em entrega. Hoje aplico essa disciplina em gestão de produtos: entender o problema antes da solução, priorizar com critério e medir o resultado."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutCards.map((card, i) => (
            <AboutItem key={card.title} card={card} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
