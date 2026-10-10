import { useEffect, useRef } from 'react'

/**
 * Attach to any container; every descendant with `.reveal` fades in once it
 * enters the viewport. One observer per container, not per element.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) e.target.classList.add('in')
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    el.querySelectorAll('.reveal').forEach((n) => io.observe(n))
    if (el.classList.contains('reveal')) io.observe(el)

    return () => io.disconnect()
  }, [])

  return ref
}
