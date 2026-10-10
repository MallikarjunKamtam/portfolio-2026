import { profile } from '../data'
import { Magnetic, Rotator } from '../fx'

export function Hero() {
  const [first, last] = profile.name.split(' ')

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <i className="dot" aria-hidden="true" />
            available for work · {profile.location}
          </span>

          <h1>
            <span className="line">
              <span className="holo">{first}</span>
            </span>
            <span className="line">
              <span className="glitch grad" data-text={last}>
                {last}
              </span>
            </span>
          </h1>

          <p className="lede">
            <b>{profile.role}</b> — {profile.years} years of <Rotator words={[...profile.roles]} />
          </p>
          <p className="lede">
            I design and build software end to end — the service, the data model underneath it and
            the interface on top. Strongest on the backend, comfortable across the whole stack, and
            not married to any one language or framework.
          </p>

          <div className="cta-row">
            <Magnetic>
              <a className="btn primary" href="#work" data-cursor="see">
                view work
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn" href={`mailto:${profile.email}`} data-cursor="mail">
                get in touch
              </a>
            </Magnetic>
          </div>
        </div>

        {/* reactor core — pure CSS, decorative */}
        <div className="hero-core" aria-hidden="true">
          <span className="ring" />
          <span className="ring" />
          <span className="ring" />
          <span className="nucleus" />
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span />
        scroll
      </div>
    </section>
  )
}
