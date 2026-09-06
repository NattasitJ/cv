import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-layout">
      {/* Main Scrollable Content */}
      <main className="main-content" id="main-content">
        <Hero />

        <div className="section-divider" aria-hidden="true" />
        <About />

        <div className="section-divider" aria-hidden="true" />
        <Experience />

        <div className="section-divider" aria-hidden="true" />
        <Education />

        <div className="section-divider" aria-hidden="true" />
        <Skills />

        <div className="section-divider" aria-hidden="true" />
        <Projects />

        <div className="section-divider" aria-hidden="true" />
        <Certifications />

        <Contact />
      </main>
    </div>
  )
}
