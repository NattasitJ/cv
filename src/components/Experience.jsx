import { Briefcase, MapPin } from 'lucide-react'
import { experiences } from '../data/resumeData'
import { FadeInSection, GradientText } from './AnimatedComponents'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Work experience">
      <FadeInSection>
        <p className="section-label">Career</p>
        <h2 className="section-title">
          Work <GradientText>Experience</GradientText>
        </h2>
      </FadeInSection>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <FadeInSection key={exp.id} delay={i * 0.12}>
            <div className="timeline-item">
              <div className="timeline-dot" aria-hidden="true">
                <Briefcase size={14} />
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-location">
                      <MapPin size={11} />
                      {exp.location} · {exp.type}
                    </div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <ul className="timeline-desc" aria-label="Responsibilities">
                  {exp.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>

                <div className="timeline-stack" aria-label="Tech stack">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
