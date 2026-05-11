import { Mail, Linkedin, Github } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "solomonlucasthornton@gmail.com",
    href: "mailto:solomonlucasthornton@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/solomonlucasthornton",
    href: "https://linkedin.com/in/solomonlucasthornton",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/soluke22",
    href: "https://github.com/soluke22",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk."
      description="Open to software engineering roles in frontend systems, product engineering, and game-adjacent technical teams."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((i) => {
          const Icon = i.icon;
          const external = i.href.startsWith("http");
          return (
            <a
              key={i.label}
              href={i.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-lg border border-border/60 bg-surface/60 p-5 transition-colors hover:border-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border-strong bg-background/40 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {i.label}
                </span>
                <span className="text-sm text-foreground transition-colors group-hover:text-primary">
                  {i.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>

      <footer className="mt-16 border-t border-border/60 pt-8 text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>Copyright {new Date().getFullYear()} Solomon Lucas-Thornton</p>
          <p className="font-mono">Built with React + TypeScript</p>
        </div>
      </footer>
    </Section>
  );
}
