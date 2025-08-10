'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { certificates } from '@/data/portfolio'
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  CheckCircle,
  BookOpen,
  Shield,
  Code,
  Cloud,
  Database,
  Smartphone
} from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

const getCertIcon = (certName: string) => {
  if (certName.toLowerCase().includes('aws') || certName.toLowerCase().includes('cloud')) {
    return Cloud
  }
  if (certName.toLowerCase().includes('blockchain') || certName.toLowerCase().includes('bitcoin')) {
    return Shield
  }
  if (certName.toLowerCase().includes('docker') || certName.toLowerCase().includes('kubernetes')) {
    return Database
  }
  if (certName.toLowerCase().includes('react') || certName.toLowerCase().includes('frontend')) {
    return Code
  }
  if (certName.toLowerCase().includes('mobile') || certName.toLowerCase().includes('app')) {
    return Smartphone
  }
  return Award
}

export default function Certifications() {
  const [displayCount, setDisplayCount] = useState(6)
  const itemsPerPage = 3

  const displayedCertificates = certificates.slice(0, displayCount)
  const hasMore = displayCount < certificates.length

  const handleViewMore = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, certificates.length))
  }
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
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
            Certifications & <span className="text-gray-400">Credentials</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Professional certifications and credentials that validate my expertise across various technologies
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{certificates.length}</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400 text-sm">Cloud Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2025</div>
              <div className="text-gray-400 text-sm">Latest Cert</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedCertificates.map((cert) => {
            const IconComponent = getCertIcon(cert.name)
            return (
              <motion.div key={cert.id} variants={scaleIn}>
                <Card className="group h-full bg-gray-900/50 border-gray-700/50 overflow-hidden hover:bg-gray-900/70 hover:border-gray-600/50 transition-all duration-500">
                  {/* Certificate Header */}
                  <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-green-600/20 text-green-400 border-green-600/30"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    
                    <div className="text-gray-300 font-medium mb-3">
                      {cert.issuer}
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Credential ID */}
                    {cert.credentialId && (
                      <div className="space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Credential ID</p>
                        <p className="text-sm text-gray-300 font-mono">{cert.credentialId}</p>
                      </div>
                    )}

                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Verification Link */}
                    {cert.url && (
                      <div className="pt-4 border-t border-gray-700/50">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                        >
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify Certificate
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={handleViewMore}
              variant="outline"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 active:bg-gray-800 px-6 sm:px-8 py-3 touch-manipulation text-sm sm:text-base"
            >
              View More Certifications ({certificates.length - displayCount} remaining)
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gray-900/50 rounded-2xl border border-gray-700/50"
        >
          <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            These certifications represent my commitment to professional growth and expertise validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200"
            >
              <a href="#contact">
                Discuss Technologies
                <BookOpen className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <a href="#projects">
                See Projects
                <Code className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
