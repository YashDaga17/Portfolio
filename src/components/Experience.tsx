'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experience } from '@/data/portfolio'
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
            Professional <span className="text-gray-400">Experience</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey in software development and technology
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <motion.div key={exp.id} variants={fadeInUp}>
              <Card className="p-8 bg-gray-900/50 border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Info */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          <Building className="w-6 h-6 text-gray-400" />
                          {exp.company}
                          {exp.companyUrl && (
                            <a 
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </h3>
                        <p className="text-xl text-gray-300 font-medium mt-1">
                          {exp.position}
                        </p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-gray-800 text-gray-300 border-gray-600"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < experience.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-px h-8 bg-gray-700/50" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together or learning more about my experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
