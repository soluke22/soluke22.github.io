import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { writeFileSync, copyFileSync, existsSync } from "node:fs";

// Static SPA build for GitHub Pages (user site).
// Repo: soluke22/soluke22.github.io
// Live URL: https://soluke22.github.io/
// Base is "/" because user sites are served from the domain root.
export default defineConfig({
  root: path.resolve(__dirname, "gh-pages"),
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      // After build, write .nojekyll (so files starting with _ are served)
      // and copy index.html -> 404.html so deep links / refreshes never 404.
      name: "gh-pages-postbuild",
      closeBundle() {
        const out = path.resolve(__dirname, "dist");
        if (existsSync(out)) {
          writeFileSync(path.join(out, ".nojekyll"), "");
          const idx = path.join(out, "index.html");
          if (existsSync(idx)) copyFileSync(idx, path.join(out, "404.html"));
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    sourcemap: false,
  },
});
