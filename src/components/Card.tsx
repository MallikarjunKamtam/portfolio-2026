import type { ReactNode } from 'react'
import { Tilt } from '../fx'

/**
 * Card chrome: tilt host + holo border + light sweep + HUD corner ticks.
 * Children sit on `.pop` so they float above the card plane in 3D.
 */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <Tilt>
      <article className={`card ${className}`}>
        <span className="sweep" aria-hidden="true" />
        <span className="corners" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <div className="pop">{children}</div>
      </article>
    </Tilt>
  )
}
