'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'
import Image from 'next/image'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Pipeline Risk Assessment Dashboard',
      subtitle: 'Interactive Geospatial Dashboard',
      description: 'Interactive geospatial dashboard for pipeline integrity monitoring with AI-powered risk prediction capabilities.',
      problem: 'Pipeline operators needed real-time monitoring and predictive risk assessment for infrastructure integrity.',
      solution: 'Built interactive geospatial dashboard using React, Leaflet, and MapBox with AI risk predictor integration.',
      impact: 'Enabled proactive maintenance scheduling and reduced pipeline failure risks through predictive analytics.',
      technologies: ['React', 'Node.js', 'Leaflet', 'MapBox', 'PostGIS', 'Docker', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: 'https://github.com/oussamaelhaddad',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'Automated Integrity Data Fusion System',
      subtitle: 'Multi-Source Data Integration',
      description: 'Advanced data integration system with anomaly detection for predictive maintenance and automated monitoring.',
      problem: 'Multiple data sources needed unified analysis with automated anomaly detection for maintenance decisions.',
      solution: 'Developed comprehensive system using NestJS, PostgreSQL, and Vue.js with Chart.js for visualization.',
      impact: 'Streamlined data analysis workflow and improved maintenance prediction accuracy by integrating multiple sources.',
      technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Vue.js', 'Chart.js', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: 'https://github.com/oussamaelhaddad',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'AI-Powered Chatbot Platform',
      subtitle: 'Professional Chatbot Solution',
      description: 'Full-stack chatbot platform with AI integration, interactive UI, and comprehensive backend architecture.',
      problem: 'Organizations needed intelligent chatbot solutions with seamless user experience and robust backend.',
      solution: 'Built scalable platform using React, FastAPI, and MongoDB with AI model integration and modern UI.',
      impact: 'Delivered production-ready chatbot solution improving customer engagement and operational efficiency.',
      technologies: ['React', 'FastAPI', 'MongoDB', 'TypeScript', 'AI Integration', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: 'https://github.com/oussamaelhaddad',
      category: 'Full-Stack'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <motion.div
                  className="relative group overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Code size={18} className="text-red-500" />
                      Problem
                    </h4>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Database size={18} className="text-green-500" />
                      Solution
                    </h4>
                    <p className="text-gray-600">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Globe size={18} className="text-blue-500" />
                      Impact
                    </h4>
                    <p className="text-gray-600 font-medium">{project.impact}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
