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

`.github/workflows/deploy-pages.yml` builds the site with that base path and publishes `out/` on every push to `main` or `claude/great-pasteur-b5kdhu`.

One-time setup: in **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (it currently defaults to "Deploy from a branch", which is why the live URL shows this README instead of the site). Once that's switched, push to re-run the workflow — or trigger it manually from the **Actions** tab.

## Responsive behaviour

| Width | Layout |
| --- | --- |
| ≤ 700px | Nav links hidden, all grids single-column, hero stats stacked |
| 701–960px | 3-column grids become 2 columns |
| > 960px | Full desktop layout |
