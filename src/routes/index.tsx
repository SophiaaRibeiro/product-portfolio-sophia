import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ProductCases } from "@/components/portfolio/ProductCases";
import { Competencies } from "@/components/portfolio/Competencies";
import { SoftSkills } from "@/components/portfolio/SoftSkills";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useScrollReveal } from "@/hooks/use-portfolio-motion";
import { profile, productCases } from "@/lib/portfolio-data";

const title = "Sophia Mendonça | Product Manager — Portfólio de Produto";
const description =
  "Portfólio de Product Management de Sophia Ribeiro Mendonça: product discovery, roadmaps, backlog, priorização, métricas e cases de produto documentados.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: profile.name },
      {
        name: "keywords",
        content:
          "Product Management, Product Discovery, Product Strategy, Roadmap, Backlog, Priorização, Métricas de Produto, Portfólio PM",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: profile.name,
              jobTitle: "Product Manager",
              description,
              email: `mailto:${profile.email}`,
              sameAs: [profile.linkedin, profile.github],
              knowsAbout: [
                "Product Management",
                "Product Discovery",
                "Product Strategy",
                "Roadmap",
                "Backlog Management",
                "Métricas de Produto",
                "Scrum",
                "Kanban",
              ],
            },
            {
              "@type": "ItemList",
              name: "Product Cases",
              itemListElement: productCases.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.title,
                description: item.description,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductCases />
        <Competencies />
        <SoftSkills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
