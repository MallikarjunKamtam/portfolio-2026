import { useEffect, useRef } from 'react'
import { prefersReduced } from './motion'

const CHARS = '!<>-_\\/[]{}—=+*^?#01abcdefXYZΣΔΩ'

/** Text that decodes itself from noise on first view and on hover. */
export function Scramble({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const raf = useRef(0)

  const run = () => {
    const el = ref.current
    if (!el || prefersReduced()) return

    const queue = [...text].map((to, i) => ({
      to,
      start: (i / text.length) * 18 + Math.random() * 12,
      end: (i / text.length) * 18 + 18 + Math.random() * 20,
    }))

    let frame = 0
    const tick = () => {
      let done = 0
      el.textContent = queue
        .map((q) => {
          if (frame >= q.end) {
            done++
            return q.to
          }
          if (q.to === ' ') return ' '
          return CHARS[(Math.random() * CHARS.length) | 0]
        })
        .join('')
      frame++
      if (done < queue.length) raf.current = requestAnimationFrame(tick)
      else el.textContent = text
    }

    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <span ref={ref} className={`scramble ${className}`} onPointerEnter={run} data-cursor="">
      {text}
    </span>
  )
}
