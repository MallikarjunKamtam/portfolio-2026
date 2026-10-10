import type { Theme } from '../fx'
import { MatrixRain } from '../fx'

/**
 * Every fixed background layer, in paint order. All of these are pure CSS
 * except the matrix canvas — see src/styles/background.css.
 */
export function Background({ theme }: { theme: Theme }) {
  return (
    <div aria-hidden="true">
      <div className="fx-layer fx-nebula" />

      <div className="fx-layer fx-stars">
        <i />
        <i />
        <i />
      </div>

      <div className="fx-layer fx-aurora">
        <i />
        <i />
        <i />
      </div>

      <div className="fx-layer fx-rings">
        <i />
        <i />
        <i />
        <i className="sweep" />
      </div>

      <div className="fx-layer fx-beams">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="fx-layer fx-hex" />
      <div className="fx-layer fx-floor" />

      {/* glyph rain only reads against a dark page — skip the canvas entirely on light */}
      {theme === 'dark' && <MatrixRain />}

      <div className="fx-layer fx-crt" />
      <div className="fx-layer fx-grain" />
      <div className="fx-layer fx-spot">
        <i />
      </div>
    </div>
  )
}
