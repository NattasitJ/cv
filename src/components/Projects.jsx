import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/resumeData'
import { FadeInSection, GradientText, BorderGlow } from './AnimatedComponents'

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
            <BorderGlow
              borderRadius={20}
              glowColor="45 95 65"
              colors={['#EAB308', '#FACC15', '#FDE047']}
              backgroundColor="#111319"
              edgeSensitivity={28}
              glowRadius={35}
              glowIntensity={1.2}
              className={`project-glow-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-card-body">
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
            </BorderGlow>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
