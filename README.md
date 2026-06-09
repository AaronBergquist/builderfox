# BuilderFox — builderfox.com

One-page brand site for **BuilderFox**, a creative agency that builds and publishes
smart, tactical games. First title in production: **Wrestling City Tactics**, a
turn-based tactics RPG where the ring meets the grid.

## Stack

Static HTML + CSS. No build step, no JavaScript, no frameworks.
Original vector (SVG) artwork only — brand mark, wordmark, and favicon are
hand-authored SVG in `assets/`; the tactical-grid vignette is inline SVG in
`index.html`.

## Local preview

```bash
npx serve
```

Then open the printed URL (default `http://localhost:3000`).

## Deploy

Deployed on Vercel as a static site — `vercel.json` enables `cleanUrls`; just
`vercel deploy` (or connect the repo) and Vercel serves the directory as-is.

## Brand tokens

| Token | Hex |
|---|---|
| fox-green | `#79A84B` |
| moss (text-safe green) | `#4E7A2E` |
| crimson | `#C9304C` |
| cream | `#FAF6EC` |
| ink | `#23271E` |
