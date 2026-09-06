import { GraduationCap } from 'lucide-react'
import { education } from '../data/resumeData'
import { FadeInSection, GradientText, BorderGlow } from './AnimatedComponents'

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
            <BorderGlow
              borderRadius={22}
              glowColor="45 95 65"
              colors={['#EAB308', '#FACC15', '#FDE047']}
              backgroundColor="#111319"
              edgeSensitivity={28}
              glowRadius={36}
              glowIntensity={1.2}
              className="edu-glow-card"
            >
              <div className="edu-card-body">
                <div className="edu-header">
                  <div>
                    <div className="edu-institution" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
                      {edu.institution}
                    </div>
                    <div className="edu-degree" style={{ marginTop: '4px' }}>
                      {edu.degree} · <span style={{ color: 'var(--accent-light)' }}>{edu.field}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '6px' }}>
                      {edu.period} · {edu.location}
                    </div>
                  </div>
                  {edu.gpa && (
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div className="edu-gpa">{edu.gpa}</div>
                      <div className="edu-gpa-label">GPA</div>
                    </div>
                  )}
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="edu-highlights" aria-label="Highlights">
                    {edu.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </BorderGlow>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
