import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, and publishes
 * --scroll (0..1) plus a `.scrolled` class on <html> for the nav.
 *
 * Scroll events fire far faster than frames, so the handler only records
 * that work is due and the real read happens once per rAF. Section offsets
 * are cached (re-measured on resize) instead of calling
 * getBoundingClientRect() on every section on every scroll.
 */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const doc = document.documentElement
    let tops: { id: string; top: number }[] = []
    let raf = 0
    let lastScrolled: boolean | null = null

    const measure = () => {
      tops = ids
        .map((id) => {
          const el = document.getElementById(id)
          return el ? { id, top: el.getBoundingClientRect().top + scrollY } : null
        })
        .filter(Boolean) as { id: string; top: number }[]
    }

    const read = () => {
      raf = 0
      const y = doc.scrollTop
      const p = y / Math.max(1, doc.scrollHeight - doc.clientHeight)
      doc.style.setProperty('--scroll', p.toFixed(4))

      const scrolled = y > 60
      if (scrolled !== lastScrolled) {
        doc.classList.toggle('scrolled', scrolled)
        lastScrolled = scrolled
      }

      const line = y + innerHeight * 0.4
      let cur = tops[0]?.id ?? ids[0]
      for (const s of tops) if (s.top <= line) cur = s.id
      setActive(cur) // React bails out when the value is unchanged
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    read()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onResize)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onResize)
    }
  }, [ids])

  return active
}
