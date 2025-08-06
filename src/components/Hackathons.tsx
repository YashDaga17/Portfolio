'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { hackathons } from '@/data/portfolio'
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Github, 
  ExternalLink, 
  Play,
  Award,
  Zap,
  Target,
  Clock,
  Globe
} from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
            Hackathon <span className="text-gray-400">Achievements</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Competitive programming and rapid prototyping victories that showcase innovation under pressure
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400 text-sm">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400 text-sm">Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-gray-400 text-sm">National Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Participants Beaten</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {hackathons.map((hackathon) => (
            <motion.div key={hackathon.id} variants={scaleIn}>
              <Card className="group h-full bg-gray-900/50 border-gray-700/50 overflow-hidden hover:bg-gray-900/70 hover:border-gray-600/50 transition-all duration-500">
                {/* Header */}
                <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Award Badge */}
                  <div className="absolute top-4 right-4">
                    {hackathon.position === 'Winner' || hackathon.position === '1st Place' ? (
                      <Badge className="bg-yellow-600 text-white">
                        <Trophy className="w-3 h-3 mr-1" />
                        Winner
                      </Badge>
                    ) : hackathon.position === '2nd Place' || hackathon.position === '2nd Runner-up' ? (
                      <Badge className="bg-gray-500 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        2nd Place
                      </Badge>
                    ) : hackathon.position === '3rd Place' || hackathon.position === '2nd Runner-up' ? (
                      <Badge className="bg-amber-600 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        3rd Place
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-600 text-white">
                        <Target className="w-3 h-3 mr-1" />
                        Finalist
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {hackathon.name}
                    </h3>
                    <div className="text-gray-300 font-medium">
                      Organized by {hackathon.organizer}
                    </div>
                    
                    {hackathon.award && (
                      <div className="inline-flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                        <Trophy className="w-4 h-4" />
                        {hackathon.award}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{hackathon.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{hackathon.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      {hackathon.type === 'Online' ? (
                        <Globe className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Users className="w-4 h-4 text-gray-400" />
                      )}
                      <span>{hackathon.type}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        {hackathon.project.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {hackathon.project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.project.technologies.map((tech) => (
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

                    {/* Team Size */}
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Team of {hackathon.teamSize} members</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      Key Highlights
                    </h5>
                    <ul className="space-y-2">
                      {hackathon.highlights.slice(0, 3).map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                    {hackathon.project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <a
                          href={hackathon.project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {hackathon.project.demo && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-white text-black hover:bg-gray-200"
                      >
                        <a
                          href={hackathon.project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {hackathon.project.devpost && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                      >
                        <a
                          href={hackathon.project.devpost}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Devpost
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
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
          className="text-center mt-16 p-8 bg-gray-900/50 rounded-2xl border border-gray-700/50"
        >
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready for the Next Challenge
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I thrive in competitive environments and love solving complex problems under time pressure. 
            Looking for a team member who can deliver innovative solutions quickly?
          </p>
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200"
          >
            <a href="#contact">
              Let&apos;s Collaborate
              <Zap className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
