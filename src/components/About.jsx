import { MapPin, Mail, Phone } from 'lucide-react'
import { personalInfo, stats } from '../data/resumeData'
import { FadeInSection, CountUp, GradientText } from './AnimatedComponents'

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
        {/* Bio */}
        <FadeInSection delay={0.1}>
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
        </FadeInSection>

        {/* Stats */}
        <FadeInSection delay={0.2} direction="left">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">
                  <CountUp target={stat.value} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
