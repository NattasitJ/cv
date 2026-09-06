import { MapPin, Mail, Phone } from 'lucide-react'
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
                {personalInfo.bio.split('scalable web applications').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <span className="about-highlight">scalable web applications</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>

              <div className="about-details">
                <div className="about-detail-item">
                  <MapPin size={15} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="about-detail-item">
                  <Mail size={15} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="about-detail-item">
                  <Phone size={15} />
                  <span>{personalInfo.phone}</span>
                </div>
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
