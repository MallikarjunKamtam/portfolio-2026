import { useEffect } from 'react'

/** Every plain keypress flashes the page brightness. Felt, not seen. */
export function useKeyPulse() {
  useEffect(() => {
    let t = 0
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const root = document.documentElement
      root.classList.add('keypulse')
      clearTimeout(t)
      t = window.setTimeout(() => root.classList.remove('keypulse'), 260)
    }
    addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      removeEventListener('keydown', onKey)
    }
  }, [])
}
