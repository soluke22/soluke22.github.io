import { Section } from "./Section";

const points = [
  "Production React and TypeScript experience across Disney digital products.",
  "Accessible, responsive UI implementation grounded in design and user flow.",
  "Reusable frontend architecture and component patterns for maintainability.",
  "Cross-functional delivery with product, design, QA, and engineering.",
  "AI-assisted iteration with human review, validation, and UX refinement.",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Frontend-focused engineer with production experience and product judgment."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I build recruiter-facing and customer-facing interfaces that are clean,
            reliable, and ready for production. My core stack is React and TypeScript,
            with a focus on accessibility, maintainability, and clear UX.
          </p>
          <p>
            At The Walt Disney Company, I worked on frontend features across large
            digital products, collaborating closely with design, product, QA, and
            engineering teams. Alongside that, I lead indie game development work,
            which reinforces practical leadership, systems thinking, and iterative
            execution.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-foreground md:col-span-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-3 rounded-md border border-border/60 bg-surface/60 p-3"
            >
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
