import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { SkillsSection } from './components/SkillsSection'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LanguageToggle } from './components/LanguageToggle'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <SkillsSection />
      <Education />
      <Contact />
      <Footer />
      <LanguageToggle />
    </LanguageProvider>
  )
}

export default App
