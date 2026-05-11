import { Award } from "lucide-react";
import { Section } from "./Section";

const items = [
  "IGDA Foundation HBCU Scholar",
  "Best Senior Project, Howard University",
  "Coupa Cares Award",
  "Indie Game Academy Level 3 Graduate",
  "Management Leadership for Tomorrow Career Prep Fellow",
  "TEC Tech Prep Rising Innovator",
];

export function Awards() {
  return (
    <Section id="awards" eyebrow="Awards & Programs" title="Recognition and selective programs.">
      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-border/60 bg-surface/60 p-4"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
              <Award className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
