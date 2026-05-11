import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          Available for select opportunities
        </div>

        <h1
          id="hero-title"
          className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl"
        >
          Solomon Lucas-Thornton
        </h1>

        <p className="mt-5 font-mono text-sm text-muted-foreground md:text-base">
          Software Engineer
          <span className="mx-2 text-border-strong">/</span>React
          <span className="mx-2 text-border-strong">/</span>TypeScript
          <span className="mx-2 text-border-strong">/</span>Frontend Systems
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Software Engineer with 4 years of production experience at The Walt Disney
          Company, building React and TypeScript systems across ESPN and Disney's
          multi-brand digital platforms. Specialized in shared component architecture,
          frontend modernization, TypeScript migration, and production-ready UI
          implementation.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 shadow-glow"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
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
