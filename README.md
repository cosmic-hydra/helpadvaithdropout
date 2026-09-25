# helpadvaithdropout.com

A loud, interactive petition site to help Advaith drop out and go all-in on **artificialhedge.co** — an AI-native hedge fund.

## Features

- Sticker-poster aesthetic: acid lime `#def722` / ink `#0a0a0a` / siren `#ff3b1f`, Anton display type
- Live signature counter with count-up animation and animated progress bar (goal: 10,000)
- Signature form with confetti cannons, character counters, and a legally-non-binding checkbox
- "Should Advaith drop out?" poll — four options, all of them yes
- The Opposition: quotes from his teachers ("Prepare for JEE...") and his mom, with official rebuttals
- Wall of Supporters with tilted sticker cards and timestamps
- Scrolling marquees, staggered scroll reveals, sticky nav with live counter
- Signatures & votes persist in `localStorage` (per-browser; no backend)

## Stack

React 19 + TypeScript + Vite 7 + Tailwind CSS 3.4 + canvas-confetti

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # outputs dist/
```

## Notes

- `src/components/ui/` (the shadcn/ui boilerplate set) is not included in this repo — no page imports it. Regenerate anytime with `npx shadcn@latest add <component>` (aliases are already configured in `components.json`).
- Data is browser-local only. To share one global counter across all visitors, a backend would be needed.

*Disclaimer: this is a joke website made for fun. Please do not make life decisions based on confetti.*
