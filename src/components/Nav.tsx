import { profile, sections } from '../data'
import type { Theme } from '../fx'
import { ThemeToggle } from './ThemeToggle'

export function Nav({
  active,
  theme,
  onToggleTheme,
}: {
  active: string
  theme: Theme
  onToggleTheme: () => void
}) {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <nav className="nav">
        <a href="#home" className="brand" data-cursor="top">
          <span className="pulse" aria-hidden="true" />
          <span>
            <b>❯</b> {profile.handle}
            <b>.dev</b>
          </span>
        </a>

        <div className="links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : undefined}>
              {s.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-cta" href={profile.resume} target="_blank" rel="noreferrer" data-cursor="pdf">
            résumé ↓
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </>
  )
}
