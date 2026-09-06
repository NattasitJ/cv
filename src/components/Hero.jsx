import { Download, Mail } from 'lucide-react'
import { personalInfo } from '../data/resumeData'
import { OrbBackground, BlurText, TextLoop } from './AnimatedComponents'

export default function Hero() {
  const isCvAvailable = personalInfo.cvFile && personalInfo.cvFile !== '#'

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <OrbBackground />

      <div className="hero-content">
        {/* Availability badge */}
        <div className="hero-availability">
          <span className="availability-dot" />
          {personalInfo.availability}
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <BlurText text={personalInfo.name} delay={0.1} duration={0.7} />
        </h1>

        {/* Animated role */}
        <div className="hero-role-wrapper">
          <span className="hero-role-prefix">I'm a</span>
          <TextLoop
            texts={personalInfo.roles}
            interval={2600}
            className="hero-role-text"
          />
        </div>

        {/* Tagline */}
        <p className="hero-tagline">{personalInfo.tagline}</p>

        {/* CTA */}
        <div className="hero-cta">
          {isCvAvailable ? (
            <a
              href={personalInfo.cvFile}
              download="NATTASIT_JANWISET_CV.pdf"
              className="btn btn-primary"
              id="hero-download-cv"
              aria-label="Download CV"
            >
              <Download size={16} />
              Download CV
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.email}?subject=CV%20Request%20-%20Nattasit%20Janwiset`}
              className="btn btn-primary"
              id="hero-download-cv"
              aria-label="Contact / Request CV"
            >
              <Download size={16} />
              Get In Touch / CV
            </a>
          )}
          <button
            className="btn btn-outline"
            id="hero-contact-btn"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            aria-label="Contact me"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
