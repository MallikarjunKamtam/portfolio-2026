import type { Theme } from '../fx'

/** Crescent that fills into a rayed sun. All CSS — see nav.css. */
export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button
      className="theme-btn"
      onClick={onToggle}
      aria-label={`switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={theme === 'dark' ? 'light mode' : 'dark mode'}
      data-cursor={theme === 'dark' ? 'light' : 'dark'}
    >
      <span className="orb" aria-hidden="true" />
    </button>
  )
}
