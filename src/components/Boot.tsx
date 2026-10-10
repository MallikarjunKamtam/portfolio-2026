/**
 * 1.5s boot splash. Pure CSS timing — it removes itself from the flow via the
 * `bootOut` animation, so there is no timer to manage.
 */
export function Boot() {
  return (
    <div className="boot" aria-hidden="true">
      <div>❯ initializing portfolio.sys</div>
      <div className="bar">
        <i />
      </div>
      <small>linking modules · mounting fx · ok</small>
    </div>
  )
}
