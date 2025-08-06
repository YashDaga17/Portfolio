"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Award, Code, Briefcase, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolio';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "Software Engineer",
    "Full-Stack Developer", 
    "React.js Expert",
    "Azure Specialist",
    "TypeScript Enthusiast",
    "Hackathon Champion"
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sparkles */}
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 opacity-70"
            initial={{ 
              x: Math.random() * (window?.innerWidth || 1000), 
              y: Math.random() * (window?.innerHeight || 800),
              scale: 0
            }}
            animate={{
              x: Math.random() * (window?.innerWidth || 1000),
              y: Math.random() * (window?.innerHeight || 800),
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <Sparkles size={Math.random() * 10 + 8} />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{
            x: [-30, 30, -30],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Professional Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-200 font-medium mb-8 hover:scale-105 transition-transform cursor-default"
          >
            <Award className="w-4 h-4" />
            <span>6x Hackathon Winner • Software Engineer @ Elanco</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-4"
          >
            👋 Hello, I&apos;m
          </motion.p>

          {/* Name with 3D Effect */}
          <motion.div
            variants={itemVariants}
            style={{ rotateX, rotateY }}
            className="perspective-1000 mb-6"
          >
            <motion.h1 
              className="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-tight leading-none"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 30px rgba(168,85,247,0.4)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {personalInfo.name}
            </motion.h1>
          </motion.div>

          {/* Dynamic Role Animation */}
          <motion.div
            variants={itemVariants}
            className="h-20 mb-8 flex items-center justify-center"
          >
            <div className="text-2xl sm:text-4xl font-semibold text-white">
              I&apos;m a{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold"
                >
                  {roles[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <Briefcase className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">1+</span>
              <span>Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-white">6</span>
              <span>Hackathon Wins</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Code className="w-5 h-5 text-pink-400" />
              <span className="font-semibold text-white">10+</span>
              <span>Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-white">8.63</span>
              <span>CGPA</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('/Yash_Daga_Resume.pdf', '_blank')}
            >
              <span className="mr-2">📄</span>
              Download Resume
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform"
                whileHover={{ x: 5 }}
              >
                →
              </motion.div>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Let&apos;s Connect
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-gray-300"
          >
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
            <motion.a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;