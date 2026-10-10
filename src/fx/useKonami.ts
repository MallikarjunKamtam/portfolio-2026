import { useEffect } from 'react'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonami(onUnlock: () => void) {
  useEffect(() => {
    let idx = 0
    const onKey = (e: KeyboardEvent) => {
      const want = KONAMI[idx]
      if (e.key === want || e.key.toLowerCase() === want.toLowerCase()) {
        idx++
        if (idx === KONAMI.length) {
          idx = 0
          onUnlock()
        }
      } else {
        idx = 0
      }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [onUnlock])
}
