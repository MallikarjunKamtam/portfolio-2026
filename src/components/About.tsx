import { profile, stats } from '../data'
import { CountUp } from '../fx'
import { SectionHead } from './SectionHead'

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead idx="01." title="about" />

        <div className="about-grid">
          <div className="prose reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            <p>{profile.summary}</p>
            <p>
              The work I care about is the part that survives a rewrite: <b>where the boundaries
              go</b>, <b>what the data really looks like</b>, <b>what happens when a dependency
              fails</b>, and <b>what it costs to change later</b>. Frameworks are how those answers
              get expressed, not what makes them right.
            </p>
            <p>
              Right now that gets expressed in <b>TypeScript</b>, <b>Node.js</b>, <b>Python</b>,{' '}
              <b>React</b>, <b>PostgreSQL</b> and <b>AWS</b>. Before that it was a different set at{' '}
              <b>TCS</b> — three years of BFSI and e-commerce systems, two awards, and a lot of
              production incidents that taught me more than any design doc. I expect the list to
              keep changing; picking up the next one is the easy part.
            </p>
            <p className="acid">❯ currently: Senior Software Engineer @ Green Story</p>
          </div>

          <div className="term reveal from-r" style={{ '--d': '160ms' } as React.CSSProperties}>
            <div className="term-bar">
              <i />
              <i />
              <i />
              <span>whoami.ts</span>
            </div>
            <pre>
              <span className="c">{'// identity resolved'}</span>
              {'\n'}
              <span className="k">const</span> <span className="f">engineer</span> = {'{'}
              {'\n'}  name: <span className="s">'{profile.name}'</span>,
              {'\n'}  role: <span className="s">'{profile.role}'</span>,
              {'\n'}  years: <span className="n">7</span>,
              {'\n'}  focus: [<span className="s">'system design'</span>,{' '}
              <span className="s">'apis'</span>, <span className="s">'data'</span>,{' '}
              <span className="s">'delivery'</span>],
              {'\n'}  stack: <span className="s">'whatever the team already uses'</span>,
              {'\n'}  location: <span className="s">'{profile.location}'</span>,
              {'\n'}  openToWork: <span className="n">true</span>,
              {'\n'}
              {'}'}
              {'\n\n'}
              <span className="c">{'// try the konami code ↑↑↓↓←→←→ba'}</span>
            </pre>
          </div>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <div key={s.label} className="stat reveal zoom" style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
              <span className="v">
                <CountUp value={s.value} />
              </span>
              <span className="l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
