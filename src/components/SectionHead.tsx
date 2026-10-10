import { Scramble } from '../fx'

export function SectionHead({ idx, title }: { idx: string; title: string }) {
  return (
    <header className="head reveal">
      <span className="idx">{idx}</span>
      <h2>
        <Scramble text={title} />
      </h2>
      <span className="rule" aria-hidden="true" />
    </header>
  )
}
