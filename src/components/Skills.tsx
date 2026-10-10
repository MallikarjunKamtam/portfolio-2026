import { allSkills, awards, capabilities, education, skills } from '../data'
import { Card } from './Card'
import { SectionHead } from './SectionHead'

function GroupGrid({ groups, offset = 0 }: { groups: typeof skills; offset?: number }) {
  return (
    <div className="skill-grid">
      {groups.map((g, i) => (
        <div
          key={g.group}
          className="reveal"
          style={{ '--d': `${((i + offset) % 3) * 110}ms` } as React.CSSProperties}
        >
          <Card className="skill-card">
            <h3>{g.group}</h3>
            <div className="tags">
              {g.items.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead idx="04." title="capabilities" />

        <p className="lead-note reveal">
          What I actually bring to a team — the engineering, not the vendor list. These transfer
          across languages, frameworks and job titles.
        </p>

        <GroupGrid groups={capabilities} />

        <div className="sub-head reveal">
          <span className="idx">04b.</span>
          <h3>tools I currently reach for</h3>
          <span className="rule" aria-hidden="true" />
        </div>

        <p className="lead-note reveal">
          An implementation detail. Swap any row for the equivalent in another ecosystem and the
          work looks the same.
        </p>

        <GroupGrid groups={skills} offset={1} />

        {/* one continuous band of everything, duplicated for a seamless loop */}
        <div className="marquee reveal" aria-hidden="true">
          <div className="marquee-track">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={`${s}-${i}`}>{s}</span>
            ))}
          </div>
        </div>

        <div className="two-col">
          <div className="reveal from-l">
            <h3 className="mini-head">education</h3>
            {education.map((e) => (
              <div key={e.degree} className="mini">
                <h4>{e.degree}</h4>
                <p>
                  {e.school} · {e.place}
                </p>
                <span className="yr">{e.year}</span>
              </div>
            ))}
          </div>

          <div className="reveal from-r">
            <h3 className="mini-head">awards</h3>
            {awards.map((a) => (
              <div key={a.name} className="mini">
                <h4>{a.name}</h4>
                <p>{a.org}</p>
                <span className="yr">{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
