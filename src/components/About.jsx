import { MapPin, Mail, Globe, Languages } from 'lucide-react'
import { personalInfo, stats } from '../data/resumeData'
import { FadeInSection, CountUp, GradientText, BorderGlow } from './AnimatedComponents'

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <FadeInSection>
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">
          About <GradientText>Me</GradientText>
        </h2>
      </FadeInSection>

      <div className="about-grid">
        {/* Bio Card */}
        <FadeInSection delay={0.1}>
          <BorderGlow
            borderRadius={22}
            glowColor="45 95 65"
            colors={['#EAB308', '#FACC15', '#FDE047']}
            backgroundColor="#111319"
            edgeSensitivity={26}
            glowRadius={32}
            glowIntensity={1.2}
            className="about-bio-glow"
          >
            <div className="about-bio-card">
              <p className="about-bio">
                Software Developer with{' '}
                <span className="about-highlight">5+ years of experience</span> in advanced
                troubleshooting and complex system logic. Proven background in managing
                environments with <span className="about-highlight">Docker/WSL</span>,
                automated backups, and enterprise reporting. Dedicated to delivering
                reliable solutions using <span className="about-highlight">Cloud and AI</span>.
              </p>

              <div className="about-details">
                <div className="about-detail-item">
                  <MapPin size={15} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="about-detail-item">
                  <Mail size={15} />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                {personalInfo.website && (
                  <div className="about-detail-item">
                    <Globe size={15} />
                    <a
                      href={personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--accent-light)',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      {personalInfo.website.replace('https://', '')}
                    </a>
                  </div>
                )}
                {personalInfo.languages && personalInfo.languages.length > 0 && (
                  <div className="about-detail-item" style={{ alignItems: 'flex-start' }}>
                    <Languages size={15} style={{ marginTop: '3px' }} />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {personalInfo.languages.map((lang) => (
                        <span
                          key={lang.name}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'rgba(234, 179, 8, 0.1)',
                            border: '1px solid rgba(234, 179, 8, 0.25)',
                            color: 'var(--text-primary)',
                            padding: '3px 10px',
                            borderRadius: '12px',
                            fontSize: '12px',
                          }}
                        >
                          <strong style={{ color: 'var(--accent-light)' }}>{lang.name}:</strong>{' '}
                          <span style={{ color: 'var(--text-secondary)' }}>{lang.level}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </BorderGlow>
        </FadeInSection>

        {/* Stats Cards */}
        <FadeInSection delay={0.2} direction="left">
          <div className="stats-grid">
            {stats.map((stat) => (
              <BorderGlow
                key={stat.label}
                borderRadius={18}
                glowColor="45 95 65"
                colors={['#EAB308', '#FACC15', '#FDE047']}
                backgroundColor="#111319"
                edgeSensitivity={24}
                glowRadius={28}
                glowIntensity={1.25}
                className="stat-glow-card"
              >
                <div className="stat-card-inner">
                  <div className="stat-value">
                    <CountUp target={stat.value} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
