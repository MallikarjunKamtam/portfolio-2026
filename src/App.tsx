import { useCallback, useEffect, useState } from 'react'
import {
  About,
  Background,
  Boot,
  Contact,
  Egg,
  Experience,
  Footer,
  Hero,
  Hud,
  Nav,
  Skills,
  Work,
} from './components'
import { sectionIds } from './data'
import { Cursor, useKeyPulse, useKonami, useReveal, useScrollSpy, useTheme } from './fx'

export default function App() {
  const active = useScrollSpy(sectionIds)
  const root = useReveal<HTMLDivElement>()
  const [egg, setEgg] = useState(false)
  const [theme, toggleTheme] = useTheme()

  useKeyPulse()
  useKonami(useCallback(() => setEgg(true), []))

  useEffect(() => {
    if (!egg) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setEgg(false)
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [egg])

  return (
    <>
      <Boot />
      <Background theme={theme} />
      <Cursor />
      <Hud />
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />

      <a className="skip" href="#about">
        skip to content
      </a>

      <main className="shell" ref={root}>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>

      {egg && <Egg onClose={() => setEgg(false)} />}
    </>
  )
}
