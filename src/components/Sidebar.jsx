import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  User, Briefcase, GraduationCap, Code2,
  FolderKanban, Award, Mail, Github, Linkedin,
  Globe, Menu, X
} from 'lucide-react'
import { personalInfo } from '../data/resumeData'

const navItems = [
  { id: 'hero',           label: 'Home',           icon: User },
  { id: 'about',          label: 'About',          icon: User },
  { id: 'experience',     label: 'Experience',     icon: Briefcase },
  { id: 'education',      label: 'Education',      icon: GraduationCap },
  { id: 'skills',         label: 'Skills',         icon: Code2 },
  { id: 'projects',       label: 'Projects',       icon: FolderKanban },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact',        label: 'Contact',        icon: Mail },
]

export default function Sidebar() {
  const [active, setActive]   = useState('hero')
  const [isOpen, setIsOpen]   = useState(false)

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) { setActive(item.id); break }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  const initials = personalInfo.name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo / Brand */}
        <div className="sidebar-logo">
          <div className="sidebar-avatar">{initials}</div>
          <div>
            <div className="sidebar-name">{personalInfo.name}</div>
            <div className="sidebar-role">{personalInfo.title}</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav" aria-label="Resume sections">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                className={`nav-link ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
                whileTap={{ scale: 0.96 }}
                aria-label={`Go to ${item.label}`}
              >
                <Icon className="nav-icon" size={16} />
                {item.label}
              </motion.button>
            )
          })}
        </nav>

        {/* Social Links */}
        <div className="sidebar-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-link"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Website"
            >
              <Globe size={16} />
            </a>
          )}
        </div>
      </aside>
    </>
  )
}
