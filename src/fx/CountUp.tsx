import { useEffect, useRef } from 'react'

/**
 * Counts to the numeric part of `value` when scrolled into view, keeping any
 * prefix/suffix intact ("<100ms" counts 0..100 and keeps "<" and "ms").
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const target = parseFloat(value.replace(/[^\d.]/g, '')) || 0
    const prefix = value.match(/^[^\d.]*/)?.[0] ?? ''
    const suffix = value.match(/[^\d.]*$/)?.[0] ?? ''

    const io = new IntersectionObserver((e) => {
      if (!e[0].isIntersecting) return
      io.disconnect()

      const dur = 1200
      let t0 = 0
      const step = (t: number) => {
        if (!t0) t0 = t
        const p = Math.min(1, (t - t0) / dur)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = prefix + Math.round(target * eased) + suffix
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })

    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return <span ref={ref}>{value}</span>
}
