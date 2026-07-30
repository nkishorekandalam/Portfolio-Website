import { projects, internshipProjects, certifications } from '../data'

function ProjectRow({ project }) {
  return (
    <div className="project-row">
      <div className="project-num">{project.n}</div>
      <div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">04</span>
          <h2>Projects &amp; Certificates</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectRow project={project} key={project.n} />
          ))}
        </div>

        <div className="timeline-sub-heading">Internship Projects</div>
        <div className="project-list">
          {internshipProjects.map((project) => (
            <ProjectRow project={project} key={project.n} />
          ))}
        </div>

        <div className="timeline-sub-heading">Certifications</div>
        <div className="cert-list">
          {certifications.map((cert) => (
            <div className="cert-row" key={cert.n}>
              <div className="project-num">{cert.n}</div>
              <div>
                <h4>{cert.title}</h4>
                <span>{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
