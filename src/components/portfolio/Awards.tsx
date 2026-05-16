import { Award } from "lucide-react";
import { Section } from "./Section";

const items = [
  "Coupa Cares Award",
  "IGDA Foundation HBCU Scholar",
  "Best Senior Project Award",
  "Senior Athlete of the Year",
];

export function Awards() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Awards and recognition.">
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
