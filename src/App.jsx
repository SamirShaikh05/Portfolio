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
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <Navbar />

      <main>
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