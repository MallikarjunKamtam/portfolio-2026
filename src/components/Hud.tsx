import { profile } from '../data'

/** Fixed corner brackets + vertical side readouts. Decoration only. */
export function Hud() {
  return (
    <div className="hud" aria-hidden="true">
      <b />
      <b />
      <b />
      <b />
      <span className="rail">{profile.location}</span>
      <span className="rail r">sys.status // online</span>
    </div>
  )
}
