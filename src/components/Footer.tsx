import { profile } from '../data'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          built with <b>react</b>, <b>typescript</b> and <b>vite</b> — no ui kit, no animation library
        </div>
        <div>
          © {new Date().getFullYear()} {profile.name} · <b>❯</b> press{' '}
          <b>↑↑↓↓←→←→ba</b>
        </div>
      </div>
    </footer>
  )
}
