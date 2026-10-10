import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const KEY = 'theme'

/** What index.html already resolved before first paint. */
const current = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // private mode / storage disabled — the theme just won't persist
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return [theme, toggle] as const
}
