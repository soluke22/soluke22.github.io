import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS", "UI Component Architecture", "Production UI Implementation"],
  },
  {
    title: "Systems",
    items: ["Shared Components", "Frontend Modernization", "JS-to-TS Migration", "State Management", "Systems Integration"],
  },
  {
    title: "Testing",
    items: ["Jest", "Playwright", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "Figma", "Datadog", "Bash", "Spinnaker"],
  },
  {
    title: "Backend / Cloud",
    items: ["Node.js", "AWS", "Lambda", "S3", "Docker"],
  },
  {
    title: "Game Development",
    items: ["Unity", "C#", "Gameplay Systems", "Technical Leadership"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Toolkit.">
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
