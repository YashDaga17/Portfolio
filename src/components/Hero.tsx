"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, MapPin, Users } from "lucide-react"
import { getAssetPath } from "@/lib/config"

const roles = [
  "Full-Stack Developer",
  "React Specialist", 
  "Node.js Expert",
  "Cloud Architect",
  "Tech Innovator",
  "Problem Solver"
]

const personalInfo = {
  name: "Yash Daga",
  title: "Software Developer", 
  description: "Software Developer with 2+ years of experience in React.js, Next.js, TypeScript, Azure, and REST APIs. Skilled in building scalable web applications, Agile workflows, UI/UX design, and performance optimization with tools like GitHub, Figma, and Kontent.ai.",
  location: "HSR Layout, Bengaluru, Karnataka",
  avatar: getAssetPath("/professional_avtar.png"),
  resume: "https://drive.google.com/file/d/1Ir_bODg0SSnRjrYHycel30ml9s5YWVI0/view?usp=drive_link",
  stats: {
    experience: "1+",
    projects: "10+", 
    technologies: "15+",
    contributions: "50+"
  },
  social: {
    github: "https://github.com/YashDaga17",
    linkedin: "https://linkedin.com/in/yashdaga17",
    twitter: "https://x.com/yash_17_"
  }
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-gray-600 to-green-500 rounded-xl opacity-15 blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-0">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium">
                  <MapPin className="w-3 h-3 mr-1 inline" />
                  Bengaluru
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div 
              className="h-12 sm:h-16 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-semibold text-gray-300"
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {personalInfo.description}
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 w-full sm:w-fit mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {personalInfo.stats.experience}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {personalInfo.stats.projects}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    {personalInfo.stats.technologies}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {personalInfo.stats.contributions}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Contributions</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <a 
                href="#projects"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href={personalInfo.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              
              <a 
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span className="text-sm sm:text-base text-gray-400 text-center sm:text-left">Follow me:</span>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
                  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white active:text-white hover:bg-white/10 active:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div 
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Profile Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden group max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Profile Image */}
              <div className="relative">
                <motion.div 
                  className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: '50% 15%' }}
                    priority
                  />
                </motion.div>
                
                {/* Profile Info */}
                <div className="text-center mt-6 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{personalInfo.name}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{personalInfo.title}</p>
                  <div className="flex items-center justify-center gap-1 text-xs sm:text-sm text-gray-400">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards - Better positioned for mobile */}
            <motion.div
              className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-white">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Software Developer</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer hover:border-gray-300 transition-colors"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
