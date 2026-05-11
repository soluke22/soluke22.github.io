import { useMemo, useState } from "react";
import { ExternalLink, Github, FileText, Gamepad2 } from "lucide-react";
import { Section } from "./Section";

type Category =
  | "Production Engineering"
  | "Game & Interactive Systems"
  | "College & Hackathon"
  | "Case Studies";

type Link = { label: string; href: string; icon: "github" | "demo" | "case" | "itch" };

type Project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  highlights: string[];
  status?: "In Progress" | "Coming Soon";
  links?: Link[];
  prominent?: boolean;
};

const projects: Project[] = [
  {
    title: "Disney Frontend Systems",
    category: "Production Engineering",
    prominent: true,
    description:
      "Production React and TypeScript systems supporting Disney-owned digital platforms, including ESPN, with work across shared components, TypeScript migration, frontend modernization, and production UI implementation.",
    tags: ["React", "TypeScript", "Shared Components", "Frontend Modernization", "ESPN", "Figma"],
    highlights: [
      "Advanced TypeScript migration and shared component modernization across 2 production repositories.",
      "Helped establish reusable component patterns across Disney web experiences.",
      "Implemented production-ready UI from Figma designs and product requirements.",
    ],
  },
  {
    title: "Living-Room Device UI Integration",
    category: "Production Engineering",
    prominent: true,
    description:
      "Early device-platform UI integration work using React components created for new Disney product surfaces.",
    tags: ["React", "TypeScript", "Device UI", "Component Systems"],
    highlights: [
      "Implemented 2 pages for an early living-room device platform.",
      "Extended shared UI patterns to a new device surface.",
      "Built from reusable components aligned to repository standards.",
    ],
  },
  {
    title: "Debts & Dragons",
    category: "Game & Interactive Systems",
    description:
      "Unity trading simulator centered on town economies, inventory flow, trading UI, market behavior, and player resource decisions.",
    tags: ["Unity", "C#", "Economy Systems", "UI", "Gameplay Systems"],
    highlights: [
      "Implemented trading and inventory systems.",
      "Built market prefabs and trading UI behavior.",
      "Improved usability through alpha-stage polish and UI fixes.",
    ],
  },
  {
    title: "Where the Sun Sets",
    category: "Game & Interactive Systems",
    description:
      "Survivor-style Unity game built through Indie Game Academy, combining day-night progression, management elements, and AI-driven gameplay systems.",
    tags: ["Unity", "C#", "Gameplay Programming", "Team Leadership"],
    highlights: [
      "Led programming across a multidisciplinary team.",
      "Delivered core gameplay systems within 1 month.",
      "Presented gameplay loop and market positioning to 4 indie publishers.",
    ],
  },
  {
    title: "Merlin / RPG Prototype",
    category: "Game & Interactive Systems",
    status: "In Progress",
    description:
      "In-progress fantasy action/RPG prototype focused on combat feel, player choice, and narrative-driven systems.",
    tags: ["Unity", "C#", "Combat Systems", "Narrative Systems", "Prototype"],
    highlights: [
      "Building modular combat and interaction systems.",
      "Exploring player choice and narrative consequence.",
      "Coordinating technical scope across a volunteer team.",
    ],
  },
  {
    title: "Just Another Boss Rush",
    category: "College & Hackathon",
    description:
      "Released 2D boss-rush action game built with a student game development team and shipped publicly for Windows and macOS.",
    tags: ["Game Development", "Team Project", "Itch.io", "Student Project"],
    highlights: [
      "Public itch.io release.",
      "Team-based game development.",
      "Boss encounter gameplay.",
    ],
  },
  {
    title: "StartupHU",
    category: "College & Hackathon",
    description:
      "Hackathon-winning marketplace prototype for student entrepreneurs, built during Bison Hacks 2019.",
    tags: ["Flask", "Python", "SQL", "HTML", "Hackathon"],
    highlights: [
      "Winner: JP Morgan and Chase Challenge.",
      "Built marketplace concept for student entrepreneurs.",
      "Early full-stack prototype experience.",
    ],
  },
  {
    title: "CaloriKat",
    category: "College & Hackathon",
    description:
      "Hackathon mobile/web prototype exploring food recognition, calorie estimation, and meal recommendations.",
    tags: ["Java", "Android Studio", "HTML", "CSS", "Hackathon"],
    highlights: [
      "Winner: 3rd Place and Wayfair AR/VR Challenge.",
      "Explored food scanning and nutrition recommendations.",
      "Built as an early product prototype.",
    ],
  },
  {
    title: "Modernizing JavaScript to TypeScript",
    category: "Case Studies",
    status: "Coming Soon",
    description: "How a brand-scale JS codebase was incrementally migrated to TypeScript without blocking shipping teams.",
    tags: ["TypeScript", "Migration", "Tooling"],
    highlights: [
      "Incremental migration strategy.",
      "Type safety without regressions.",
      "Patterns for team adoption.",
    ],
  },
  {
    title: "Building Reusable UI Components",
    category: "Case Studies",
    status: "Coming Soon",
    description: "Designing a shared component library that holds up across multiple Disney brand surfaces.",
    tags: ["React", "Design Systems", "Components"],
    highlights: [
      "API design for multi-brand reuse.",
      "Theming and composition patterns.",
      "Versioning and adoption.",
    ],
  },
  {
    title: "Leading Gameplay Scope Under Deadline",
    category: "Case Studies",
    status: "Coming Soon",
    description: "Lessons from leading programming on Where the Sun Sets through a 1-month delivery window.",
    tags: ["Leadership", "Scope", "Unity"],
    highlights: [
      "Trade-offs between scope and polish.",
      "Coordinating across disciplines.",
      "Shipping under publisher pitch deadline.",
    ],
  },
];

const categories: ("All" | Category)[] = [
  "All",
  "Production Engineering",
  "Game & Interactive Systems",
  "College & Hackathon",
  "Case Studies",
];

const linkIcon = {
  github: Github,
  demo: ExternalLink,
  case: FileText,
  itch: Gamepad2,
} as const;

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    // Production first, college last regardless of filter
    const order: Record<Category, number> = {
      "Production Engineering": 0,
      "Case Studies": 1,
      "Game & Interactive Systems": 2,
      "College & Hackathon": 3,
    };
    return [...list].sort((a, b) => order[a.category] - order[b.category]);
  }, [active]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work across production, interactive systems, and earlier builds."
      description="Production engineering leads. Game and case-study work shows range and systems thinking."
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
        {filtered.map((p) => {
          const isCollege = p.category === "College & Hackathon";
          return (
            <article
              key={p.title}
              className={`group flex flex-col rounded-lg border bg-surface/60 p-6 shadow-card transition-colors hover:border-primary/50 ${
                p.prominent ? "border-primary/30 md:col-span-2" : "border-border/60"
              } ${isCollege ? "p-5 text-sm" : ""}`}
            >
              <header className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.category}
                    </span>
                    {p.status && (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`mt-3 font-semibold text-foreground ${
                      isCollege ? "text-base" : "text-lg"
                    }`}
                  >
                    {p.title}
                  </h3>
                </div>
              </header>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
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
          );
        })}
      </div>
    </Section>
  );
}
