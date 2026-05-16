# Solomon Lucas Portfolio

Professional software engineering portfolio for [soluke22.github.io](https://soluke22.github.io).

## Stack

- React + TypeScript
- Vite
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages build and preview

```bash
npm run build:gh-pages
npm run preview:gh-pages
```

## Deployment notes

- This repository is deployed as a GitHub user site at [https://soluke22.github.io](https://soluke22.github.io).
- GitHub Actions publishes `./dist` from `.github/workflows/deploy.yml`.
- `vite.gh-pages.config.ts` must keep `base: "/"` for user-site root deployment.
- The site is a single-page portfolio using anchor navigation and in-page project filters.
