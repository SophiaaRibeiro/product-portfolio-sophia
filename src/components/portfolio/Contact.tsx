import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

const channels = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sophia-r-mendonça",
    href: profile.linkedin,
  },
  { icon: Github, label: "GitHub", value: "github.com/SophiaaRibeiro", href: profile.github },
  { icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
] as const;

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("assunto") ?? "");
    const message = String(data.get("mensagem") ?? "");
    const from = String(data.get("email") ?? "");

    setSending(true);
    const body = encodeURIComponent(`${message}\n\nContato: ${from}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      toast.success("Abrindo seu cliente de e-mail para enviar a mensagem.");
    }, 600);
  }

  return (
    <section id="contato" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre <span className="text-gradient">produto</span>
            </>
          }
          description="Aberta a oportunidades em Product Management, Product Operations e Analista de Produto."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="surface-card-interactive flex items-center gap-4 p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface text-primary">
                  <channel.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-semibold">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm text-muted-foreground">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="surface-card p-7 lg:p-8">
            <h3 className="font-display text-lg font-semibold">Me mande uma mensagem</h3>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="text-sm font-medium">
                  Assunto
                </label>
                <input
                  id="assunto"
                  name="assunto"
                  type="text"
                  required
                  placeholder="Oportunidade em Product Management"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  placeholder="Conte um pouco sobre o contexto e o desafio do time."
                  className="mt-1.5 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70"
              >
                {sending ? "Enviando..." : "Enviar mensagem"}
                <Send className="size-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
