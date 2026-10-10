import { useEffect, useRef } from 'react'
import { isLite, prefersReduced } from './motion'

const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノ01{}[]<>/\\=+*#$%&?!ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SIZE = 18
const FRAME_MS = 70 // ~14fps — reads as filmic, costs a fraction of 60fps

/**
 * Falling glyph rain on a canvas.
 *
 * Costs kept down by: a fixed 1x backing store (a DPR-scaled canvas doubles
 * or quadruples every fill), two glyphs per column instead of three, a hard
 * frame cap, and parking the loop entirely while the tab is hidden.
 */
export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (prefersReduced() || isLite()) return
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d', { alpha: true })
    if (!ctx) return

    let cols = 0
    let drops: number[] = []
    let speeds: number[] = []
    let w = 0
    let h = 0

    const resize = () => {
      w = innerWidth
      h = innerHeight
      // 1x backing store: the layer sits at 0.16 opacity behind a scanline
      // overlay, so retina sharpness buys nothing and costs 4x the fill rate
      cv.width = w
      cv.height = h
      cv.style.width = w + 'px'
      cv.style.height = h + 'px'
      ctx.font = `500 ${SIZE}px "JetBrains Mono", monospace`
      cols = Math.ceil(w / SIZE)
      drops = Array.from({ length: cols }, () => Math.random() * -60)
      speeds = Array.from({ length: cols }, () => 0.35 + Math.random() * 0.55)
    }
    resize()
    addEventListener('resize', resize)

    const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0]

    let raf = 0
    let last = 0

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      if (t - last < FRAME_MS) return
      last = t

      ctx.fillStyle = 'rgba(2, 9, 6, 0.1)'
      ctx.fillRect(0, 0, w, h)

      // batch by colour — two fillStyle switches per frame instead of 2x per column
      ctx.fillStyle = 'rgba(190, 255, 225, 0.85)'
      for (let i = 0; i < cols; i++) {
        const y = drops[i] * SIZE
        if (y > -SIZE && y < h + SIZE) ctx.fillText(pick(), i * SIZE, y)
      }
      ctx.fillStyle = 'rgba(0, 255, 156, 0.28)'
      for (let i = 0; i < cols; i++) {
        const y = drops[i] * SIZE - SIZE
        if (y > -SIZE && y < h + SIZE) ctx.fillText(pick(), i * SIZE, y)

        drops[i] += speeds[i]
        if (drops[i] * SIZE > h && Math.random() > 0.975) drops[i] = Math.random() * -30
      }
    }

    const start = () => {
      if (!raf && !document.hidden) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="fx-matrix" aria-hidden="true" />
}
