import { experience, education } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">03</span>
          <h2>Experience &amp; Education</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.title + job.period}>
              <div className="timeline-period">{job.period}</div>
              <h4>{job.title}</h4>
              <div className="timeline-org">{job.org}</div>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
          {education.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-period">{item.period}</div>
              <h4>{item.title}</h4>
              <div className="timeline-org">{item.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
