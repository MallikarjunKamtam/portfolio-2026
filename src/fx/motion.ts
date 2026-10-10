/** Shared motion guards. Everything in src/fx checks these before animating. */

export const prefersReduced = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

export const isTouch = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches

/**
 * Adds `.lite` to <html> on hardware that will not enjoy eleven animated
 * background layers: phones, tablets, anything with few cores, or a
 * reduced-motion preference. The CSS then drops the optional layers.
 * Called once from main.tsx, before React mounts, so nothing paints twice.
 */
export function detectPerfMode() {
  const cores = navigator.hardwareConcurrency ?? 8
  const smallScreen = innerWidth < 820
  const lite = prefersReduced() || isTouch() || smallScreen || cores <= 4
  document.documentElement.classList.toggle('lite', lite)
  return lite
}

export const isLite = () => document.documentElement.classList.contains('lite')
