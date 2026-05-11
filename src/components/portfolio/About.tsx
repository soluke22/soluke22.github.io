import { Section } from "./Section";

const points = [
  "React and TypeScript production experience across multi-brand digital platforms.",
  "Shared component systems and reusable UI patterns aligned to design specs.",
  "Frontend modernization across distributed codebases at Disney and ESPN.",
  "Responsible AI-assisted and CLI-based development workflows.",
  "Game development leadership as evidence of ownership, systems thinking, and product judgment.",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Production-minded engineer with frontend depth and broader systems range."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I build React and TypeScript systems that ship to real users. Most of my
            production work has been at The Walt Disney Company, where I contribute to
            shared component architecture, TypeScript migrations, and frontend
            modernization across Disney-owned brands including ESPN.
          </p>
          <p>
            Outside of consumer web platforms, I lead gameplay programming on indie
            titles. That work pushes me on scope, system design, and shipping under
            constraint — and it informs how I approach production engineering: own the
            outcome, respect the codebase, ship the thing.
          </p>
        </div>
        <ul className="md:col-span-2 space-y-3 text-sm text-foreground">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-3 rounded-md border border-border/60 bg-surface/60 p-3"
            >
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
