import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Awards } from "@/components/portfolio/Awards";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solomon Lucas - Software Engineer" },
      {
        name: "description",
        content:
          "Software Engineer focused on React, TypeScript, accessible interfaces, and production-ready frontend systems. Former Disney engineer with indie game development leadership experience.",
      },
      { property: "og:title", content: "Solomon Lucas - Software Engineer" },
      {
        property: "og:description",
        content:
          "React and TypeScript frontend systems, accessibility, UI/UX judgment, and production discipline from Disney and indie game leadership.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}
