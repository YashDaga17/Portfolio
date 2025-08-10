'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { experience } from '@/data/portfolio'
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'

export default function Experience() {
  const [displayCount, setDisplayCount] = useState(2)
  const itemsPerPage = 1

  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gray-400">Experience</span>
          </h2>
          <p className="text-gray-400">No experience data available</p>
        </div>
      </section>
    )
  }

  const displayedExperience = experience.slice(0, displayCount)
  const hasMore = displayCount < experience.length

  const handleViewMore = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, experience.length))
  }

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">{/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gray-400">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            My professional journey in software development and technology
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {displayedExperience.map((exp, index) => (
            <div key={exp.id} className="w-full">
              <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gray-900/50 border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300 w-full">
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                  {/* Company Info */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-2">
                          <Building className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words leading-tight">
                              {exp.company}
                            </h3>
                            {exp.companyUrl && (
                              <a 
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mt-1"
                              >
                                Visit Company
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium break-words leading-tight">
                          {exp.position}
                        </p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-gray-800 text-gray-300 border-gray-600 self-start flex-shrink-0 text-xs sm:text-sm"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="break-words">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="break-words">{exp.location}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed"
                          >
                            <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span className="break-words">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < displayedExperience.length - 1 && (
                  <div className="flex justify-center mt-6 sm:mt-8">
                    <div className="w-px h-8 bg-gray-700/50" />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <div className="text-center mt-12 sm:mt-16">
            <Button
              onClick={handleViewMore}
              variant="outline"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 active:bg-gray-800 px-6 sm:px-8 py-3 mb-8 touch-manipulation text-sm sm:text-base"
            >
              View More Experience ({experience.length - displayCount} remaining)
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 mb-6">
            Interested in working together or learning more about my experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
