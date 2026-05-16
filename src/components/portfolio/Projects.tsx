import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";

type Category = "Featured" | "Game Development" | "Earlier Work";

type Link = { label: string; href: string; icon: "github" | "demo" };

type Project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  highlights: string[];
  links?: Link[];
  prominent?: boolean;
};

const projects: Project[] = [
  {
    title: "Personal Engineering Portfolio",
    category: "Featured",
    prominent: true,
    description:
      "Portfolio rebuild using React, TypeScript, Vite, and Tailwind CSS, deployed on GitHub Pages.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Pages"],
    highlights: [
      "Rebuilt this portfolio using AI-assisted iteration while applying frontend judgment to layout, hierarchy, accessibility, copy, and recruiter-facing UX.",
      "Demonstrates the real role of AI in engineering: acceleration plus human review, taste, and validation.",
      "Maintains a clean single-page architecture with accessible anchor navigation and responsive behavior.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/soluke22/soluke22.github.io", icon: "github" }],
  },
  {
    title: "Disney Frontend Systems",
    category: "Featured",
    prominent: true,
    description:
      "Frontend engineering work across Disney digital products using React and TypeScript in production environments.",
    tags: ["React", "TypeScript", "Accessibility", "API Integrations", "Reusable UI"],
    highlights: [
      "Built and maintained frontend features across high-traffic Disney digital products.",
      "Improved frontend quality through reusable UI patterns, testing, review, and maintainable implementation.",
      "Collaborated across product, design, QA, and engineering to ship reliable user-facing experiences.",
    ],
  },
  {
    title: "Indie Game Project - Currently Titled Merlin",
    category: "Game Development",
    description:
      "Team lead and creative technical lead for an in-progress indie game project currently titled Merlin.",
    tags: ["Unity", "C#", "Gameplay Systems", "UI Systems", "Team Leadership"],
    highlights: [
      "Team lead / creative technical lead for an in-progress indie game project currently titled Merlin.",
      "Guides the project's technical direction, gameplay feel, team coordination, and vertical slice execution.",
      "Building gameplay, combat, dialogue, UI, and scene flow systems in Unity/C#.",
      "Coordinates a small team across design, art, narrative, music, and engineering.",
      "Uses playtesting and iteration to improve clarity, onboarding, combat feel, and player experience.",
    ],
  },
  {
    title: "Where the Sun Sets",
    category: "Game Development",
    description:
      "Survivor-style Unity project delivered through Indie Game Academy with a multidisciplinary team.",
    tags: ["Unity", "C#", "Gameplay Programming", "Leadership"],
    highlights: [
      "Led programming across a multidisciplinary team.",
      "Delivered core gameplay systems within 1 month.",
      "Presented gameplay loop and positioning to indie publishers.",
    ],
  },
  {
    title: "StartupHU",
    category: "Earlier Work",
    description:
      "Hackathon-winning prototype marketplace concept for student entrepreneurs.",
    tags: ["Flask", "Python", "SQL", "Hackathon"],
    highlights: [
      "Winner: JP Morgan and Chase Challenge.",
      "Built and presented an early full-stack product prototype.",
    ],
  },
  {
    title: "CaloriKat",
    category: "Earlier Work",
    description:
      "Hackathon prototype exploring meal recommendations and calorie estimation.",
    tags: ["Java", "Android Studio", "HTML/CSS", "Hackathon"],
    highlights: [
      "Winner: 3rd Place and Wayfair AR/VR Challenge.",
      "Built as an early mobile/web product exploration.",
    ],
  },
];

const categories: ("All" | Category)[] = ["All", "Featured", "Game Development", "Earlier Work"];

const linkIcon = {
  github: Github,
  demo: ExternalLink,
} as const;

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    const order: Record<Category, number> = {
      Featured: 0,
      "Game Development": 1,
      "Earlier Work": 2,
    };
    return [...list].sort((a, b) => order[a.category] - order[b.category]);
  }, [active]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work in production frontend engineering and game development."
      description="A focused view of recruiter-relevant work: production UI systems, shipping discipline, and technical leadership."
    >
      <div aria-label="Project categories" className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              type="button"
              key={c}
              aria-pressed={isActive}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border-strong bg-surface text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <article
            key={p.title}
            className={`group flex flex-col rounded-lg border bg-surface/60 p-6 shadow-card transition-colors hover:border-primary/50 ${
              p.prominent ? "border-primary/30 md:col-span-2" : "border-border/60"
            }`}
          >
            <header className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
              </div>
            </header>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.links && p.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3 border-t border-border/60 pt-4">
                {p.links.map((l) => {
                  const Icon = linkIcon[l.icon];
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {l.label}
                    </a>
                  );
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
