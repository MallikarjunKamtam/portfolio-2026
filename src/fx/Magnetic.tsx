import { useEffect, useRef, type ReactNode } from 'react'
import { isTouch } from './motion'

/**
 * Pulls its child toward the pointer when the pointer gets close.
 *
 * The rect is measured once and re-measured only on scroll/resize. Reading
 * getBoundingClientRect() inside pointermove forces a synchronous layout on
 * every mouse event, once per instance — the thing that makes "magnetic
 * buttons" notorious for jank.
 */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || isTouch()) return

    let box: DOMRect | null = null
    const measure = () => {
      box = null // invalidate; re-read lazily on the next move
    }

    let raf = 0
    let pending: PointerEvent | null = null

    const apply = () => {
      raf = 0
      const e = pending
      if (!e) return
      if (!box) box = el.getBoundingClientRect()

      const dx = e.clientX - (box.left + box.width / 2)
      const dy = e.clientY - (box.top + box.height / 2)
      el.style.transform =
        Math.hypot(dx, dy) > box.width * 1.3 ? '' : `translate(${dx * strength}px, ${dy * strength}px)`
    }

    const move = (e: PointerEvent) => {
      pending = e
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const out = () => {
      el.style.transform = ''
    }

    addEventListener('pointermove', move, { passive: true })
    addEventListener('scroll', measure, { passive: true })
    addEventListener('resize', measure)
    el.addEventListener('pointerleave', out)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      removeEventListener('pointermove', move)
      removeEventListener('scroll', measure)
      removeEventListener('resize', measure)
      el.removeEventListener('pointerleave', out)
    }
  }, [strength])

  return (
    <span ref={ref} className="magnetic">
      {children}
    </span>
  )
}
