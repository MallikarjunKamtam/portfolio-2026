import { useRef, type ReactNode } from 'react'

/**
 * 3D tilt + spotlight host. Writes --px/--py (pointer %, for the radial
 * spotlight) and --rx/--ry (rotation) onto the element; CSS does the rest.
 *
 * The rect is measured on pointerenter, not on every move, and the four
 * custom-property writes are coalesced into one rAF — pointermove fires
 * several times per frame on a high-polling mouse.
 */
export function Tilt({
  children,
  className = '',
  max = 7,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const box = useRef<DOMRect | null>(null)
  const raf = useRef(0)
  const pos = useRef({ x: 0, y: 0 })

  const write = () => {
    raf.current = 0
    const el = ref.current
    const b = box.current
    if (!el || !b) return
    const px = (pos.current.x - b.left) / b.width
    const py = (pos.current.y - b.top) / b.height
    el.style.setProperty('--px', (px * 100).toFixed(1) + '%')
    el.style.setProperty('--py', (py * 100).toFixed(1) + '%')
    el.style.setProperty('--rx', ((0.5 - py) * max).toFixed(2) + 'deg')
    el.style.setProperty('--ry', ((px - 0.5) * max).toFixed(2) + 'deg')
  }

  const enter = () => {
    box.current = ref.current?.getBoundingClientRect() ?? null
  }

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!box.current) enter()
    pos.current = { x: e.clientX, y: e.clientY }
    if (!raf.current) raf.current = requestAnimationFrame(write)
  }

  const leave = () => {
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = 0
    box.current = null
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerEnter={enter}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <div className="tilt-inner">{children}</div>
    </div>
  )
}
