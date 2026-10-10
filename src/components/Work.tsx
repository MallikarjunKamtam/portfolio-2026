import { work } from '../data'
import { Card } from './Card'
import { SectionHead } from './SectionHead'

export function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead idx="02." title="selected work" />

        <div className="work-grid">
          {work.map((w, i) => (
            <div
              key={w.title}
              className="reveal"
              style={{ '--d': `${(i % 3) * 110}ms` } as React.CSSProperties}
            >
              <Card className="work-card">
                <span className="no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{w.title}</h3>
                <p>{w.blurb}</p>
                <span className="metric">{w.metric}</span>
                <div className="tags">
                  {w.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
