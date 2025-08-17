'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full-Stack Development Engineer',
      company: 'Oratio Technologies',
      location: 'Tunis, Tunisia',
      period: 'October 2024 - Present',
      type: 'Full-time',
      description: 'Leading development of AI-powered chatbot solutions with comprehensive backend and frontend implementation.',
      achievements: [
        'Designed and implemented scalable backend architecture for AI-based chatbot platform',
        'Developed interactive and responsive user interface with modern design principles',
        'Integrated AI models for enhanced chatbot capabilities and user experience',
        'Implemented data visualization features for faster decision-making processes'
      ],
      technologies: ['React', 'FastAPI', 'MongoDB', 'TypeScript', 'AI Integration', 'Tailwind CSS', 'Git', 'Jira'],
      companyWebsite: '#'
    },
    {
      id: 2,
      title: 'Frontend Development Engineer',
      company: 'OORB: Open Organic Robotics',
      location: 'Tunis, Tunisia',
      period: 'February 2025 - May 2025',
      type: 'Full-time',
      description: 'Specialized in frontend development for robotics applications with focus on interactive user interfaces.',
      achievements: [
        'Designed and implemented interactive UI for robotics control systems',
        'Collaborated with cross-functional teams using Agile/Scrum methodologies',
        'Delivered high-quality code following best practices and modern development standards',
        'Contributed to project documentation and knowledge sharing initiatives'
      ],
      technologies: ['React', 'TypeScript', 'Mantine', 'Git', 'Notion'],
      companyWebsite: '#'
    },
    {
      id: 3,
      title: 'Full-Stack Development Intern',
      company: 'Oratio',
      location: 'Tunis, Tunisia',
      period: 'June 2024 - August 2024',
      type: 'Internship',
      description: 'Comprehensive internship focusing on full-stack chatbot development with modern web technologies.',
      achievements: [
        'Built scalable backend infrastructure using Node.js for chatbot applications',
        'Created modern and responsive frontend interfaces using React',
        'Implemented real-time communication features and API integrations',
        'Participated in Agile development process and code review sessions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Git', 'Jira'],
      companyWebsite: '#'
    }
  ]

  const education = [
    {
      degree: 'National Engineering Diploma in Software Development',
      institution: 'Higher Institute for Computer Science',
      period: '2023 - Present',
      location: 'Ariana, Tunisia',
      gpa: 'In Progress',
      achievements: [
        'Specializing in Software Development and Engineering',
        'Focus on modern web technologies and AI integration',
        'Participating in research projects and practical applications',
        'Maintaining excellent academic performance'
      ]
    },
    {
      degree: 'Bachelor\'s in Computer Science',
      institution: 'H S Sciences and Technology Hammam Sousse',
      period: '2020 - 2023',
      location: 'Sousse, Tunisia',
      gpa: 'Software Engineering & Information Systems',
      achievements: [
        'Specialized in Software Engineering & Information Systems',
        'Completed comprehensive coursework in programming and databases',
        'Developed strong foundation in computer science principles',
        'Participated in multiple academic and practical projects'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      date: 'November 2024',
      credentialId: 'AI-900-2024'
    },
    {
      name: 'Microsoft Excel Associate',
      issuer: 'Microsoft',
      date: 'April 2024',
      credentialId: 'EXCEL-ASSOC-2024'
    },
    {
      name: 'Google Data Analytics Certificate',
      issuer: 'Google',
      date: 'May 2022',
      credentialId: 'GDA-2022-001'
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous growth, learning, and delivering exceptional results
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20">
                  <motion.div
                    className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-primary-600">
                            {exp.company}
                          </h4>
                          {exp.companyWebsite && (
                            <a
                              href={exp.companyWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <TrendingUp size={18} className="text-green-500" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white text-gray-700 border border-gray-200 rounded-lg text-sm font-medium hover:border-primary-300 hover:bg-primary-50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-blue-600" />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-lg text-primary-600 font-medium mb-2">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                  <span className="font-medium">
                    GPA: {edu.gpa}
                  </span>
                </div>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-green-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-primary-600 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Issued: {cert.date}</span>
                    <span className="font-mono text-xs">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
