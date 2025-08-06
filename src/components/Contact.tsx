'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Send,
  Calendar,
  MessageCircle,
  ExternalLink,
  Download,
  Coffee,
  Briefcase,
  CheckCircle
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Open email client
      window.open(mailtoLink, '_blank')
      
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: personalInfo.social.github, 
      icon: Github, 
      color: 'hover:text-gray-300',
      description: 'View my code'
    },
    { 
      name: 'LinkedIn', 
      url: personalInfo.social.linkedin, 
      icon: Linkedin, 
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    { 
      name: 'Twitter', 
      url: personalInfo.social.twitter, 
      icon: Twitter, 
      color: 'hover:text-blue-400',
      description: 'Follow my thoughts'
    },
    { 
      name: 'Instagram', 
      url: personalInfo.social.instagram, 
      icon: Instagram, 
      color: 'hover:text-pink-400',
      description: 'See my life'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let&apos;s <span className="text-gray-400">Connect</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-gray-900/50 border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-white hover:text-gray-300 transition-colors font-medium"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-white hover:text-gray-300 transition-colors font-medium"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Location</p>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-gray-900/50 border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-green-500" />
                  Quick Actions
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-200 h-auto p-4 flex-col gap-2"
                  >
                    <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5" />
                      <div className="text-center">
                        <div className="font-semibold">Download Resume</div>
                        <div className="text-xs opacity-80">Latest version</div>
                      </div>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 h-auto p-4 flex-col gap-2"
                  >
                    <a href="https://topmate.io/yash_daga17" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5" />
                      <div className="text-center">
                        <div className="font-semibold">Schedule Call</div>
                        <div className="text-xs opacity-80">Let&apos;s chat</div>
                      </div>
                    </a>
                  </Button>
                </div>

                {/* Coffee Chat */}
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Coffee className="w-5 h-5 text-amber-500" />
                    <h4 className="text-white font-semibold">Coffee Chat?</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I&apos;m always up for a coffee chat to discuss technology, projects, or career advice. 
                    Reach out anytime!
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-gray-900/50 border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Find Me Online
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-white font-medium group-hover:text-current transition-colors">
                          {social.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {social.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="p-8 bg-gray-900/50 border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-blue-500" />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Yash Daga"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="dagayash7@gmail.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Let&apos;s discuss a project..."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                    submitStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-3" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-3" />
                    </>
                  )}
                </Button>
              </form>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <strong>Email Client Opened!</strong> Your email client has been opened with the pre-filled message. Please send the email to complete your inquiry.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    <strong>Oops!</strong> Something went wrong while sending your message. 
                    Please try again or contact me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="underline hover:text-red-300">
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              )}
              
              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-400 text-sm">
                  💡 <strong>Pro tip:</strong> Include details about your project timeline, budget, 
                  and specific requirements to get a more detailed response.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
