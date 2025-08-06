'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code,
  Coffee,
  ArrowUp,
  ExternalLink
} from 'lucide-react'
import { fadeInUp } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: 'GitHub', url: personalInfo.social.github, icon: Github },
    { name: 'LinkedIn', url: personalInfo.social.linkedin, icon: Linkedin },
    { name: 'Twitter', url: personalInfo.social.twitter, icon: Twitter },
    { name: 'Instagram', url: personalInfo.social.instagram, icon: Instagram }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Contact', href: '#contact' }
  ]

  const resources = [
    { name: 'Resume', href: personalInfo.resume, external: true },
    { name: 'GitHub', href: personalInfo.social.github, external: true },
    { name: 'LinkedIn', href: personalInfo.social.linkedin, external: true },
    { name: 'Email', href: `mailto:${personalInfo.email}`, external: true }
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {personalInfo.title} passionate about creating innovative solutions 
                  and building exceptional digital experiences.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      target={resource.external ? "_blank" : "_self"}
                      rel={resource.external ? "noopener noreferrer" : ""}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                    >
                      {resource.name}
                      {resource.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and 
                <Code className="w-4 h-4" /> 
              </span>
            </div>

            {/* Fun Stats */}
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>Powered by coffee</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Built with Next.js</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Hidden Easter Egg */}
        <div className="py-4 text-center">
          <p className="text-gray-600 text-xs">
            🚀 Looking for the source code? Check out my{' '}
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
