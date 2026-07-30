import { aboutMe } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">01</span>
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <div>
            <p className="about-bio">{aboutMe.bio}</p>
            <ul className="about-highlights">
              {aboutMe.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            {aboutMe.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
