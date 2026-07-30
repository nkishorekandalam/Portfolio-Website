import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">02</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
