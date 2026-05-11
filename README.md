# Solomon Lucas-Thornton — Portfolio

Personal software engineering portfolio. Built with React 19 + TypeScript + Tailwind CSS v4.

## Local development

```bash
bun install
bun run dev
```

Opens the TanStack Start dev server (used by the Lovable editor preview).

## Deploying to GitHub Pages

This repo ships with a **separate static SPA build** that produces a pure
`dist/` folder suitable for GitHub Pages. It reuses the same React components
as the main app — no duplication of content.

Target URL: <https://soluke22.github.io/> (user site, served from the domain root).

### One-time GitHub setup

1. Repo: `github.com/soluke22/soluke22.github.io`
   (the repo name **must** match `<username>.github.io` for a user site).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Automatic deploys

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs deps with Bun.
2. Runs `bun run build:gh-pages` (Vite static build, base path `/`).
3. Writes `.nojekyll` and copies `index.html` → `404.html` so deep links
   and refreshes never 404 on Pages.
4. Uploads `dist/` and publishes via `actions/deploy-pages`.

### Local static preview

```bash
bun run build:gh-pages
bun run preview:gh-pages
```

### Configuration notes

- `vite.gh-pages.config.ts` — the static SPA build. `base: "/"` is correct
  for a user site at `soluke22.github.io`. Don't change it to a subpath
  unless you move to a project site (`<username>.github.io/<repo>`).
- `gh-pages/` — entry point (`index.html` + `main.tsx`) that mounts the
  portfolio components from `src/components/portfolio/`.
- The original TanStack Start app (`src/router.tsx`, `src/routes/`) is kept
  intact so the Lovable in-editor preview keeps working. GitHub Pages does
  **not** ship the SSR runtime — only the static SPA from `dist/`.

### Routing

The portfolio is a single page with anchor-based section navigation, so
there are no client routes that could 404 on refresh. The `404.html`
fallback is included as a safety net regardless.
