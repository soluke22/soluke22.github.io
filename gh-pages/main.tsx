import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import { Nav } from "../src/components/portfolio/Nav";
import { Hero } from "../src/components/portfolio/Hero";
import { About } from "../src/components/portfolio/About";
import { Experience } from "../src/components/portfolio/Experience";
import { Projects } from "../src/components/portfolio/Projects";
import { Skills } from "../src/components/portfolio/Skills";
import { Awards } from "../src/components/portfolio/Awards";
import { Contact } from "../src/components/portfolio/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
