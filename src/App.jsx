import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { SkillsSection } from './components/SkillsSection'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { cvData } from './data/cvData'

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name={cvData.personal.name}
        title={cvData.personal.title}
        description={cvData.personal.subtitle}
      />
      <About />
      <Experience />
      <SkillsSection />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
