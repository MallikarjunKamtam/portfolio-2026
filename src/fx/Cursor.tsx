import { useEffect, useRef } from 'react'
import { isTouch } from './motion'

/**
 * Reticle cursor. Also the single source of --mx/--my, which the CSS
 * spotlight layer reads.
 *
 * The rAF loop only runs while the ring is still catching up to the pointer
 * and parks itself once it arrives — an idle page burns zero frames.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isTouch()) return
    document.body.classList.add('has-cursor')

    const root = document.documentElement
    let mx = innerWidth / 2
    let my = innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`

      if (Math.abs(mx - rx) + Math.abs(my - ry) < 0.3) {
        raf = 0 // arrived — stop until the pointer moves again
        return
      }
      raf = requestAnimationFrame(loop)
    }

    const move = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
      // the dot tracks exactly, so it needs no interpolation frame
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`
      root.style.setProperty('--mx', mx + 'px')
      root.style.setProperty('--my', my + 'px')
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest('a,button,input,textarea,[data-cursor]')
      ring.current?.classList.toggle('hot', !!t)
      if (ring.current) ring.current.dataset.label = t?.getAttribute('data-cursor') || ''
    }

    const down = () => ring.current?.classList.add('down')
    const up = () => ring.current?.classList.remove('down')

    addEventListener('pointermove', move, { passive: true })
    addEventListener('pointerover', over, { passive: true })
    addEventListener('pointerdown', down)
    addEventListener('pointerup', up)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
      removeEventListener('pointermove', move)
      removeEventListener('pointerover', over)
      removeEventListener('pointerdown', down)
      removeEventListener('pointerup', up)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
