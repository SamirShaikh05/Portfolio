import AmbientBackground from './components/layout/AmbientBackground'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Resume from './components/ui/Resume'

import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <div className="relative text-white min-h-screen">
      <AmbientBackground />
      <Navbar />

      <main className="relative z-[1]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Resume />

      <Footer />
    </div>
  )
}

export default App