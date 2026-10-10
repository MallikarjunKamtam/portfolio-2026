import { useState } from 'react'
import { jobs, type Job } from '../data'
import { SectionHead } from './SectionHead'

const PREVIEW = 5

function JobEntry({ job }: { job: Job }) {
  const [open, setOpen] = useState(false)
  const points = open ? job.points : job.points.slice(0, PREVIEW)
  const hidden = job.points.length - PREVIEW

  return (
    <article className={`job reveal ${job.current ? 'now' : ''}`}>
      <div className="job-head">
        <h3>{job.role}</h3>
        <span className="at">@ {job.company}</span>
        {job.current && <span className="badge-now">now</span>}
      </div>
      {job.legal && <div className="legal">{job.legal}</div>}
      <div className="when">
        {job.period} · {job.place}
      </div>

      <ul>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      {hidden > 0 && (
        <button className="more" onClick={() => setOpen((v) => !v)} data-cursor={open ? 'less' : 'more'}>
          {open ? '− collapse' : `+ ${hidden} more`}
        </button>
      )}

      <div className="tags" style={{ marginTop: '1rem' }}>
        {job.stack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead idx="03." title="experience" />
        <div className="timeline">
          {jobs.map((j) => (
            <JobEntry key={j.company} job={j} />
          ))}
        </div>
      </div>
    </section>
  )
}
