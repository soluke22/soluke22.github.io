const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight transition-colors hover:text-primary"
        >
          slt<span className="text-primary">.</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md border border-border-strong bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary md:inline-block"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
