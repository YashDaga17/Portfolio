"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/portfolio';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 shadow-lg relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        <Code size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold mb-1 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-sm">{project.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-purple-100 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={16} className="text-gray-600 hover:text-purple-600" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={16} className="text-gray-600 hover:text-blue-600" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.split(', ').map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium hover:from-purple-200 hover:to-blue-200 transition-all cursor-default"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.demo && (
                      <Button
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 group/btn"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outline"
                        className="flex-1 border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 transition-all group/btn"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Code
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-600">Want to see more of my work?</p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => window.open('https://github.com/YashDaga17', '_blank')}
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </motion.div>

        {/* Additional Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Open Source",
              count: "5+",
              description: "Contributions to various open source projects",
              icon: "🌟"
            },
            {
              title: "Personal Projects",
              count: "10+",
              description: "Side projects and experiments",
              icon: "🚀"
            },
            {
              title: "Client Work",
              count: "3+",
              description: "Professional client projects",
              icon: "💼"
            }
          ].map((item, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-white/70 backdrop-blur-sm">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">{item.count}</div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
