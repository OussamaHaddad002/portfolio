'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'
import Image from 'next/image'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Web Application',
      description: 'A comprehensive e-commerce solution with user authentication, payment processing, and admin dashboard.',
      problem: 'Traditional retail businesses needed a modern online presence with seamless shopping experience.',
      solution: 'Built a scalable platform using React, Node.js, and MongoDB with integrated payment gateway.',
      impact: 'Increased client sales by 300% and reduced operational costs by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'Data Visualization Dashboard',
      subtitle: 'Analytics & Reporting Tool',
      description: 'Interactive dashboard for real-time data analysis and visualization with advanced filtering capabilities.',
      problem: 'Complex datasets needed intuitive visualization for better business decision making.',
      solution: 'Developed interactive charts and graphs using D3.js with real-time data updates.',
      impact: 'Improved data analysis efficiency by 60% and reduced report generation time by 80%.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-dashboard.com',
      githubUrl: 'https://github.com/username/dashboard',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'AI-Powered Chat Application',
      subtitle: 'Real-time Communication Platform',
      description: 'Modern chat application with AI assistance, file sharing, and real-time messaging capabilities.',
      problem: 'Teams needed efficient communication with smart features for better collaboration.',
      solution: 'Integrated WebSocket for real-time messaging with AI-powered smart replies and file sharing.',
      impact: 'Enhanced team productivity by 45% and reduced response time by 70%.',
      technologies: ['Next.js', 'Socket.io', 'OpenAI API', 'Express', 'MongoDB', 'Cloudinary'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
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
