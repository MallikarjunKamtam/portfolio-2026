import { profile } from '../data'
import { Magnetic, Scramble } from '../fx'
import { SectionHead } from './SectionHead'

const LINKS = [
  { label: 'github', href: profile.github },
  { label: 'linkedin', href: profile.linkedin },
  { label: 'résumé', href: profile.resume },
  { label: profile.phone, href: `tel:${profile.phone}` },
]

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <SectionHead idx="05." title="contact" />

        <h2 className="reveal">
          <span className="holo">
            <Scramble text="let's build something" />
          </span>
        </h2>

        <p className="reveal" style={{ '--d': '100ms' } as React.CSSProperties}>
          Inbox is open — backend, full-stack or frontend work, system design and architecture
          reviews, or something that needs rescuing. I reply to everything.
        </p>

        <div className="reveal zoom" style={{ '--d': '180ms' } as React.CSSProperties}>
          <Magnetic strength={0.18}>
            <a className="mail" href={`mailto:${profile.email}`} data-cursor="mail">
              {profile.email}
            </a>
          </Magnetic>
        </div>

        <div className="socials reveal" style={{ '--d': '260ms' } as React.CSSProperties}>
          {LINKS.map((l) => (
            <a key={l.label} className="social" href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
