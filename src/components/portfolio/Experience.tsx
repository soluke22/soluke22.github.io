import { Section } from "./Section";

type Role = {
  company: string;
  title: string;
  period: string;
  description?: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "The Walt Disney Company",
    title: "Software Engineer",
    period: "Jul 2022 — Apr 2026",
    description:
      "Built and maintained React and TypeScript frontend applications supporting Disney digital experiences, contributing to shared systems, reusable components, and modernization across brand environments.",
    bullets: [
      "Advanced TypeScript migration and shared component modernization across 2 production repositories supporting Disney-owned brands, including ESPN.",
      "Helped establish a shared component repository for reusable and consistent UI implementation across Disney web experiences.",
      "Built reusable React and TypeScript UI components from Disney design specifications.",
      "Implemented 2 pages for an early living-room device platform using React components primarily created for the initiative.",
      "Translated Figma designs and product requirements into production-ready UI.",
      "Integrated frontend systems with backend-driven data and shared services.",
      "Used AI-assisted development and CLI-based workflows while maintaining repository standards.",
    ],
  },
  {
    company: "Indie Game Academy",
    title: "Gameplay Programmer Lead",
    period: "Jul 2024 — Oct 2024",
    description:
      "Led programming for an original indie game title, managing technical scope and delivery across a multidisciplinary team from prototype through publisher presentation.",
    bullets: [
      "Led programming for Where the Sun Sets, a Unity survivor-style game with day-night progression and AI-driven gameplay systems.",
      "Delivered core gameplay systems within 1 month while coordinating scope and deadlines.",
      "Presented the game's features, gameplay loop, and market positioning to 4 indie publishers.",
    ],
  },
  {
    company: "The Walt Disney Company",
    title: "Software Engineering Intern",
    period: "May 2021 — Nov 2021",
    description:
      "Embedded in ESPN's live production environment for 7 months, implementing React-based player-facing features within a large-scale consumer digital product and Agile team.",
    bullets: [
      "Built player-facing ESPN pages using React and frontend web technologies.",
      "Contributed to production web development in an Agile environment.",
      "Developed ESPN's WNBA Standings Page for a live production sports platform.",
    ],
  },
  {
    company: "JP Morgan Chase & Co.",
    title: "Software Engineer Intern",
    period: "Jan 2020 — Dec 2020",
    bullets: [
      "Built a React-based platform supporting mentorship workflows for incoming refugees.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've shipped.">
      <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
        {roles.map((r) => (
          <li key={`${r.company}-${r.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[33px] top-2 h-2.5 w-2.5 rounded-full border border-primary bg-background md:-left-[37px]"
            />
            <article className="rounded-lg border border-border/60 bg-surface/60 p-6 shadow-card">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                  <p className="text-sm text-primary">{r.company}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {r.period}
                </p>
              </header>
              {r.description && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              )}
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
