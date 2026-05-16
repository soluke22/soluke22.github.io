import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-36 md:pt-32">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          Open to software engineering opportunities
        </div>

        <h1
          id="hero-title"
          className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl"
        >
          Solomon Lucas
        </h1>

        <p className="mt-2 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground md:text-base">
          Software Engineer
        </p>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Software Engineer focused on React, TypeScript, accessible interfaces, and
          production-ready frontend systems. Former Disney engineer bringing production
          discipline, UI/UX judgment, and creative technical leadership from indie game
          development.
        </p>

        <p className="mt-5 font-mono text-sm text-muted-foreground md:text-base">
          React <span className="mx-2 text-border-strong">/</span> TypeScript
          <span className="mx-2 text-border-strong">/</span> Frontend Systems
          <span className="mx-2 text-border-strong">/</span> Accessibility
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact
          </a>
          <a
            href="https://github.com/soluke22"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/solomonlucasthornton"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Germantown, Maryland
          </span>
        </div>
      </div>
    </section>
  );
}
