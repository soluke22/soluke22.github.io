import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Vite", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Systems and API",
    items: ["GraphQL", "REST/API Integrations", "CI/CD", "Reusable UI Architecture"],
  },
  {
    title: "Quality",
    items: ["Accessibility", "Testing", "Code Review", "Responsive Design"],
  },
  {
    title: "Creative Tech",
    items: ["Unity", "C#", "Gameplay Systems", "Narrative/Game Flow Prototyping"],
  },
  {
    title: "AI Workflow",
    items: ["AI-Assisted Prototyping", "Prompt Iteration", "Code Review", "Validation", "UX Refinement"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core strengths and tools.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-lg border border-border/60 bg-surface/60 p-5 shadow-card"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {g.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded border border-border bg-background/40 px-2 py-1 text-xs text-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
