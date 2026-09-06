import { Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'
import { FadeInSection, GradientText, BorderGlow } from './AnimatedComponents'

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact and download">
      <FadeInSection>
        <BorderGlow
          borderRadius={32}
          glowColor="45 95 65"
          colors={['#EAB308', '#FACC15', '#FDE047']}
          backgroundColor="#111319"
          edgeSensitivity={32}
          glowRadius={45}
          glowIntensity={1.3}
          className="contact-glow-wrapper"
        >
          <div className="contact-card">
          <p className="section-label" style={{ justifyContent: 'center' }}>
            Let&apos;s Work Together
          </p>

          <h2 className="contact-title">
            Get In <GradientText>Touch</GradientText>
          </h2>

          <p className="contact-subtitle">
            I&apos;m currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-actions">
            <motion.a
              href={personalInfo.cvFile}
              download
              className="btn btn-primary"
              id="contact-download-cv"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Download CV"
            >
              <Download size={16} />
              Download CV
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-outline"
              id="contact-email-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Send email"
            >
              <Mail size={16} />
              Send Email
            </motion.a>
          </div>

          <div className="contact-info-row">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-info-item"
              aria-label="Email address"
            >
              <Mail size={14} />
              {personalInfo.email}
            </a>
            <div className="contact-info-item">
              <MapPin size={14} />
              {personalInfo.location}
            </div>
            <a
              href={`tel:${personalInfo.phone}`}
              className="contact-info-item"
              aria-label="Phone number"
            >
              <Phone size={14} />
              {personalInfo.phone}
            </a>
          </div>

          {/* Social row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '24px',
            }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '10px 18px', fontSize: '13px' }}
              aria-label="GitHub profile"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '10px 18px', fontSize: '13px' }}
              aria-label="LinkedIn profile"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>
        </BorderGlow>
      </FadeInSection>

      {/* Footer */}
      <p
        style={{
          textAlign: 'center',
          marginTop: '48px',
          fontSize: '12px',
          color: 'var(--text-muted)',
        }}
      >
        Designed &amp; built by{' '}
        <span style={{ color: 'var(--accent-light)' }}>{personalInfo.name}</span>
        {' '}&mdash; {new Date().getFullYear()}
      </p>
    </section>
  )
}
