import { ExternalLink } from 'lucide-react'
import { certifications } from '../data/resumeData'
import { FadeInSection, GradientText, BorderGlow } from './AnimatedComponents'

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
            <BorderGlow
              key={cert.id}
              borderRadius={18}
              glowColor="45 95 65"
              colors={['#EAB308', '#FACC15', '#FDE047']}
              backgroundColor="#111319"
              edgeSensitivity={26}
              glowRadius={30}
              glowIntensity={1.2}
              className="cert-glow-card"
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card-body"
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
            </BorderGlow>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
