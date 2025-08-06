"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Camera, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: `https://${personalInfo.github}`,
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: `https://${personalInfo.linkedin}`,
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: <Camera size={20} />,
      href: 'https://instagram.com/pixs',
      label: 'Photography'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h3>
                <p className="text-gray-400 mt-2 text-lg">{personalInfo.title}</p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Passionate about creating innovative solutions and building meaningful 
                applications that make a positive impact. Always learning, always growing.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-300">Bengaluru, Karnataka</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pb-8"
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="bg-gray-800 border-gray-700 hover:bg-purple-600 hover:border-purple-600 text-gray-300 hover:text-white transition-all duration-300"
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart size={16} className="text-red-500 fill-current" />
                </motion.div>
                <span>using Next.js & Tailwind CSS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
