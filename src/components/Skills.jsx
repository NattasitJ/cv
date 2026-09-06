import { motion } from 'framer-motion'
import { skills } from '../data/resumeData'
import { FadeInSection, GradientText, BorderGlow } from './AnimatedComponents'

function SkillTag({ name, index }) {
  return (
    <motion.div
      className="skill-tag"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="tag-text">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills and technologies">
      <FadeInSection>
        <p className="section-label">Technologies</p>
        <h2 className="section-title">
          Skills &amp; <GradientText>Stack</GradientText>
        </h2>
      </FadeInSection>

      <div className="skills-categories">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <FadeInSection key={category} delay={catIndex * 0.08}>
            <BorderGlow
              borderRadius={20}
              glowColor="45 95 65"
              colors={['#EAB308', '#FACC15', '#FDE047']}
              backgroundColor="#111319"
              edgeSensitivity={26}
              glowRadius={30}
              glowIntensity={1.15}
              className="skill-category-glow"
            >
              <div className="skill-category-body">
                <div className="skill-category-title">{category}</div>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <SkillTag key={skill.name} name={skill.name} index={i} />
                  ))}
                </div>
              </div>
            </BorderGlow>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
