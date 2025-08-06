"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { workExperience } from '@/data/portfolio';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
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
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Experience Card */}
                <div className="md:ml-16">
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl text-gray-900 mb-2">
                            {exp.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-purple-600 font-semibold text-lg mb-2">
                            <Briefcase size={20} />
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span className="text-sm">{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        {index === 0 && (
                          <Badge variant="tech" className="bg-green-100 text-green-800 px-3 py-1">
                            Current
                          </Badge>
                        )}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.split(', ').map((tech) => (
                          <Badge key={tech} variant="skill" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium">
            <Briefcase size={20} />
            <span>Open to new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
