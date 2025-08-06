"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills, education } from "@/data/portfolio"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/utils"
import { 
  GraduationCap, 
  Award, 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Palette,
  Settings,
  Brain,
  Lightbulb,
  Target
} from "lucide-react"

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  DevOps: Settings,
  Mobile: Smartphone,
  Design: Palette,
  Other: Lightbulb
}

const levelColors = {
  Beginner: "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
  Intermediate: "bg-blue-500/20 text-blue-700 border-blue-500/30", 
  Advanced: "bg-purple-500/20 text-purple-700 border-purple-500/30",
  Expert: "bg-green-500/20 text-green-700 border-green-500/30"
}

export default function About() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-2 rounded-full opacity-[0.03] blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-4 rounded-full opacity-[0.04] blur-3xl" />
      </div>

      <div className="container-fluid">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="glow" className="text-base font-bold mb-6 px-6 py-2 text-green-400 border-green-400/30 bg-green-400/10 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              About Me
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
              Crafting Digital Experiences
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Passionate about creating innovative solutions that make a difference. 
              I combine technical expertise with creative thinking to build exceptional digital products.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Brain,
                title: "Problem Solver",
                description: "I love tackling complex challenges and finding elegant solutions through code."
              },
              {
                icon: Target,
                title: "Result Oriented",
                description: "Focused on delivering high-quality products that exceed expectations and drive results."
              },
              {
                icon: Lightbulb,
                title: "Innovation Driven",
                description: "Always exploring new technologies and approaches to stay ahead of the curve."
              }
            ].map((highlight, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card variant="glass" className="text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-gradient-cosmic rounded-2xl mx-auto flex items-center justify-center">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    <p className="text-white">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Technical Skills</h3>
              <p className="text-white">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
                return (
                  <motion.div key={category} variants={fadeInUp}>
                    <Card variant="elevated">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-white text-2xl">
                          <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {categorySkills.map((skill) => (
                            <motion.div
                              key={skill.name}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge 
                                variant="outline" 
                                className={`${levelColors[skill.level]} transition-all hover:shadow-lg cursor-default text-base px-4 py-2`}
                              >
                                <span className="mr-2 text-lg">{skill.icon}</span>
                                {skill.name}
                                <span className="ml-2 text-sm opacity-70">
                                  {skill.level}
                                </span>
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Education</h3>
              <p className="text-white">
                Academic foundation and continuous learning journey
              </p>
            </div>

            <div className="grid gap-6">
              {education.map((edu) => (
                <motion.div key={edu.id} variants={scaleIn}>
                  <Card variant="glass" className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-cosmic rounded-2xl flex items-center justify-center">
                            <GraduationCap className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <div>
                            <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                            <p className="text-lg text-white">{edu.field}</p>
                            <p className="text-green-400 font-medium">{edu.institution}</p>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                            <span>{edu.duration}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                            {edu.gpa && (
                              <>
                                <span>•</span>
                                <span>GPA: {edu.gpa}</span>
                              </>
                            )}
                          </div>

                          {edu.honors && edu.honors.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {edu.honors.map((honor) => (
                                <Badge key={honor} variant="success" className="text-xs">
                                  <Award className="w-3 h-3 mr-1" />
                                  {honor}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {edu.coursework && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-white">Relevant Coursework:</p>
                              <div className="flex flex-wrap gap-2">
                                {edu.coursework.slice(0, 6).map((course) => (
                                  <Badge key={course} variant="outline" className="text-xs text-white border-gray-600">
                                    {course}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
