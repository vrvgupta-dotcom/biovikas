# biovikas

Personal website for **Vikas Gupta** — serial entrepreneur, IIM Ahmedabad alumnus, board advisor and disability rights advocate.

Built with Next.js (App Router) + TypeScript and exported as a fully static site. Implements the high-fidelity design handoff (navy / teal / gold palette, Source Serif 4 + Public Sans).

## Structure

```
app/
  layout.tsx            # <html>, metadata, Google Fonts
  page.tsx              # composes the sections
  globals.css           # design tokens (CSS variables) + shared section styles
components/
  Nav, Hero, About, Ventures, PortfolioAdvisory, Academic, Contact, Footer
  *.module.css          # per-section styles
  accent.ts             # maps an accent name to `--accent` for card borders/badges
content/
  profile.ts            # all site copy — edit text here, not in components
```

## Development

```sh
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static output in ./out
```

## Deploying

`npm run build` writes plain HTML/CSS to `out/`, which can be served by any static host (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages).

For a GitHub Pages *project* site (served under `/biovikas`), build with the base path:

```sh
NEXT_PUBLIC_BASE_PATH=/biovikas npm run build
```

### GitHub Pages (this repo)

`.github/workflows/deploy-pages.yml` builds the site and publishes `out/` on every push to `main` or `claude/great-pasteur-b5kdhu`. **Settings → Pages → Build and deployment → Source** must be **GitHub Actions** (not "Deploy from a branch") for this to take effect.

The site is served from the custom domain **bio.vikasgupta.world** at the root, so the build does **not** set `NEXT_PUBLIC_BASE_PATH` — the workflow builds with no base path. `public/CNAME` (containing `bio.vikasgupta.world`) is committed so the custom domain survives every Actions deploy, since GitHub Pages can otherwise drop it after a deploy that doesn't include it.

If this site is ever moved to an unmapped project URL like `https://<user>.github.io/biovikas/` instead of a custom domain, set `NEXT_PUBLIC_BASE_PATH: /biovikas` in the workflow's build step again (see the "Deploying" section above) and delete `public/CNAME`.

## Responsive behaviour

| Width | Layout |
| --- | --- |
| ≤ 700px | Nav links hidden, all grids single-column, hero stats stacked |
| 701–960px | 3-column grids become 2 columns |
| > 960px | Full desktop layout |
