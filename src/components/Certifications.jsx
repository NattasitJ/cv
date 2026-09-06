import { ExternalLink } from 'lucide-react'
import { certifications } from '../data/resumeData'
import { FadeInSection, GradientText } from './AnimatedComponents'

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <FadeInSection>
        <p className="section-label">Credentials</p>
        <h2 className="section-title">
          <GradientText>Certifications</GradientText>
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              aria-label={`${cert.name} by ${cert.issuer}`}
            >
              <div className="cert-icon" aria-hidden="true">{cert.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
              <ExternalLink size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
