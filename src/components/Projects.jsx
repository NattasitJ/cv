import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/resumeData'
import { FadeInSection, GradientText } from './AnimatedComponents'

// 3D Tilt Card wrapper
function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    x.set(nx)
    y.set(ny)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <FadeInSection>
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">
          Featured <GradientText>Projects</GradientText>
        </h2>
      </FadeInSection>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <FadeInSection key={project.id} delay={i * 0.1}>
            <TiltCard>
              <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                {project.featured && (
                  <span className="project-featured-badge">Featured</span>
                )}

                <div className="project-title">{project.title}</div>
                <p className="project-description">{project.description}</p>

                <div className="project-stack" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
