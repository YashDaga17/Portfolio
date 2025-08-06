"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Award, Users, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { education, technicalSkills, personalInfo } from '@/data/portfolio';

const About = () => {
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
    <section id="about" className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Me</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-white/20 h-full card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl mb-4">
                  <GraduationCap className="mr-3 text-yellow-400" size={28} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-4 border-yellow-400 pl-6 py-4"
                  >
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-yellow-400 font-medium">{edu.institution}</p>
                    <p className="text-white/70">{edu.duration}</p>
                    <p className="text-white/80 mt-2">{edu.grade}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-white/20 h-full card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl mb-4">
                  <Code className="mr-3 text-blue-400" size={28} />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-white capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="glass text-white border-white/30 hover:border-blue-400 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Stats or CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-4 glass p-6 rounded-2xl border-white/20"
          >
            <Button
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black hover:from-yellow-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;