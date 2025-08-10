import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/about-section"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Hackathons from "@/components/Hackathons"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="hackathons">
        <Hackathons />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}