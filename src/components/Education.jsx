import { GraduationCap } from 'lucide-react'
import { education } from '../data/resumeData'
import { FadeInSection, GradientText } from './AnimatedComponents'

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <FadeInSection>
        <p className="section-label">Academic</p>
        <h2 className="section-title">
          <GradientText>Education</GradientText>
        </h2>
      </FadeInSection>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {education.map((edu, i) => (
          <FadeInSection key={edu.id} delay={i * 0.1}>
            <div className="edu-card">
              <div className="edu-header">
                <div>
                  <div className="edu-institution">{edu.institution}</div>
                  <div className="edu-degree">
                    {edu.degree} · <span style={{ color: 'var(--accent-light)' }}>{edu.field}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                    {edu.period} · {edu.location}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div className="edu-gpa">{edu.gpa}</div>
                  <div className="edu-gpa-label">GPA</div>
                </div>
              </div>

              <ul className="edu-highlights" aria-label="Highlights">
                {edu.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
