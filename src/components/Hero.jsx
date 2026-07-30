import { profile, marqueeWords } from '../data'

export default function Hero() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            {profile.available && (
              <span className="eyebrow">
                <span className="dot" />
                Available for new opportunities
              </span>
            )}
            <p className="hero-name">{profile.name.toUpperCase()}</p>
            <h1>
              {profile.role}
              <br />
              <span className="role">Portfolio</span>
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                View LinkedIn ↗
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Download CV ↗
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo">{initials}</div>
          </div>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
