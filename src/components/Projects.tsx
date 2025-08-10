'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/portfolio'
import { 
  Github, 
  ExternalLink, 
  Play, 
  Filter,
  Star,
  Code,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

const categories = ['All', 'Web App', 'Mobile App', 'API', 'Tool']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [displayCount, setDisplayCount] = useState(6)
  const itemsPerPage = 3

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  const displayedProjects = filteredProjects.slice(0, displayCount)
  const hasMore = displayCount < filteredProjects.length

  const handleViewMore = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, filteredProjects.length))
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setDisplayCount(6) // Reset display count when category changes
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
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
            Featured <span className="text-gray-400">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            A showcase of my technical skills and creative problem-solving through real-world projects
          </motion.p>

          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Filter className="w-3 h-3 inline mr-2" />
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div key={project.id} variants={scaleIn}>
              <Card className="group h-full bg-gray-900/50 border-gray-700/50 overflow-hidden hover:bg-gray-900/70 hover:border-gray-600/50 transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <Code className="w-16 h-16 text-gray-500" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={`${
                        project.status === 'Completed' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Highlighted Badge */}
                  {project.highlighted && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Play className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Project Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs bg-gray-800 border-gray-600">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-700 text-gray-400 text-xs"
                        >
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  {project.features && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {project.impact && (
                    <div className="pt-3 border-t border-gray-700/50">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-300 font-medium">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-3">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-white text-black hover:bg-gray-200"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
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
              View More Projects ({filteredProjects.length - displayCount} remaining)
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
          <h3 className="text-2xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to work on new challenges and innovative projects. 
            Let&apos;s collaborate and build something amazing together.
          </p>
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200"
          >
            <a href="#contact">
              Start a Project
              <Target className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
