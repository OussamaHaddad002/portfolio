'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [text, setText] = useState('')
  const fullText = 'Full-Stack Developer & Software Engineer'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a')
    link.href = '/CV_Oussama_Elhaddad_En.pdf'
    link.download = 'CV_Oussama_Elhaddad_En.pdf'
    link.click()
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gray-900">Hi, I'm </span>
              <span className="gradient-text">Oussama</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                {text}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Software Engineering student passionate about creating innovative web solutions with AI integration. 
            Experienced in building scalable chatbot systems, geospatial dashboards, and modern web applications 
            using React, FastAPI, and machine learning technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown size={20} />
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
            >
              Download CV
              <Download size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/oussamaelhaddad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/elhaddad-oussama/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} className="text-primary-600" />
            </motion.a>
            
            <motion.a
              href="mailto:oussamaelhaddad02@gmail.com"
              className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} className="text-gray-700" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}

export default HeroSection
