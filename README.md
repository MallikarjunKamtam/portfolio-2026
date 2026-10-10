# portfolio

Personal site — sci-fi/terminal themed. No UI kit, no animation library.

## Stack

React 18 · TypeScript · Vite. That is the entire dependency list.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the built bundle
```

## Layout

```
src/
  main.tsx          entry — sets the perf mode class, then mounts
  App.tsx           section order + the konami/keypulse wiring
  components/       one file per section (Hero, About, Work, …)
  fx/               reusable effects: one hook or component per file
  data/             all copy and lists — edit here, not in components
  styles/           tokens → base → background → parts, via index.css
```

## Notes

- Every visual effect is CSS. The only canvas is the matrix rain in `fx/MatrixRain.tsx`.
- `detectPerfMode()` tags `<html>` with `.lite` on touch devices, narrow
  screens, low core counts or `prefers-reduced-motion`, and the background
  layers that animate are dropped for those visitors.
- Animations stick to `transform` and `opacity`. See the header comment in
  `styles/background.css` for the rules this repo follows.
