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
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hackathons />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}