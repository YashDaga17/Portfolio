"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, ExternalLink, Award, Zap, Target, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { hackathonExperience } from '@/data/portfolio';

const Hackathons = () => {
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

  const getTrophyIcon = (position: string) => {
    if (position.includes('First') || position.includes('🥇')) return '🏆';
    if (position.includes('Second') || position.includes('🥈')) return '🥈';
    if (position.includes('Third') || position.includes('🥉')) return '🥉';
    return '🏅';
  };

  const getTrophyColor = (position: string) => {
    if (position.includes('First') || position.includes('🥇')) return 'from-yellow-400 to-yellow-600';
    if (position.includes('Second') || position.includes('🥈')) return 'from-gray-400 to-gray-600';
    if (position.includes('Third') || position.includes('🥉')) return 'from-amber-600 to-amber-800';
    return 'from-purple-400 to-purple-600';
  };

  return (
    <section id="hackathons" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-50 animate-pulse animation-delay-4000"></div>
        <Sparkles className="absolute top-20 right-1/4 w-8 h-8 text-purple-300 opacity-60 animate-bounce" />
        <Trophy className="absolute bottom-1/3 right-10 w-10 h-10 text-yellow-400 opacity-60 animate-bounce animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-purple-800 font-medium">Hackathon Champion</span>
            <Award className="w-5 h-5 text-purple-500" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Competition Victories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            🏆 6 Major Hackathon Wins • Proven track record of building innovative solutions under pressure
          </p>
        </motion.div>

        {/* Hackathon Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {hackathonExperience.map((hackathon, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTrophyColor(hackathon.position)} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-r ${getTrophyColor(hackathon.position)} rounded-xl text-white text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {getTrophyIcon(hackathon.position)}
                      </div>
                      <div>
                        <Badge 
                          variant="tech" 
                          className={`bg-gradient-to-r ${getTrophyColor(hackathon.position)} text-white border-0 mb-2 shadow-sm`}
                        >
                          {hackathon.position}
                        </Badge>
                        <p className="text-sm text-gray-600">{hackathon.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-500 mb-1">
                        <Calendar size={14} />
                        <span className="text-sm">{hackathon.date}</span>
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600">
                      {hackathon.event}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors">
                    {hackathon.description}
                  </p>

                  {hackathon.link && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:border-purple-300 transition-all duration-300"
                        onClick={() => window.open(hackathon.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </motion.div>
                  )}
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-gray-600">Total Wins</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">First Places</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-cyan-600 mb-2">3+</div>
            <div className="text-gray-600">Years Competing</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
            <div className="text-gray-600">Win Rate</div>
          </div>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="text-center border-0 shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-white/10 animate-pulse"></div>
            </div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">My Hackathon Philosophy</h3>
              <p className="text-lg leading-relaxed mb-6 text-purple-100">
                &quot;Every hackathon is an opportunity to turn crazy ideas into reality. 
                I thrive under pressure, collaborate effectively with diverse teams, 
                and focus on creating solutions that make a real impact on people&apos;s lives.&quot;
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {['Innovation', 'Teamwork', 'Impact', 'Speed'].map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
