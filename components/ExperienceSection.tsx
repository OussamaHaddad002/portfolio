'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
      achievements: [
        'Architected and delivered 5+ scalable web applications serving 100K+ users',
        'Improved application performance by 60% through optimization techniques',
        'Mentored team of 6 junior developers, improving code quality by 40%',
        'Implemented CI/CD pipelines reducing deployment time by 80%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript', 'Docker'],
      companyWebsite: 'https://techinnovations.com'
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Agency',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed custom web solutions for diverse clients across various industries.',
      achievements: [
        'Successfully delivered 20+ client projects with 98% satisfaction rate',
        'Reduced client onboarding time by 50% through automated processes',
        'Collaborated with design team to implement pixel-perfect user interfaces',
        'Integrated third-party APIs and payment systems for e-commerce platforms'
      ],
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Redis', 'Stripe', 'Sass'],
      companyWebsite: 'https://digitalsolutions.com'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'San Francisco, CA',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Built responsive web applications and contributed to the company\'s main product development.',
      achievements: [
        'Developed responsive components used across 10+ product features',
        'Improved website loading speed by 45% through performance optimization',
        'Collaborated with UX team to enhance user experience and accessibility',
        'Contributed to open-source projects, gaining 500+ GitHub stars'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Webpack', 'Jest', 'Git'],
      companyWebsite: 'https://startuphub.com'
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      location: 'Boston, MA',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey focusing on frontend development and learning best practices.',
      achievements: [
        'Built 15+ responsive websites for small to medium businesses',
        'Learned modern development workflows and version control systems',
        'Contributed to team knowledge sharing sessions and code reviews',
        'Achieved 100% project delivery rate within deadlines'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP'],
      companyWebsite: 'https://webcraftagency.com'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2014 - 2018',
      location: 'Boston, MA',
      gpa: '3.8/4.0',
      achievements: [
        'Graduated Magna Cum Laude',
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Society',
        'Published research paper on web performance optimization'
      ]
    }
  ]

  const certifications = [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DEV-2023-001'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-DEV-2022-001'
    },
    {
      name: 'Meta React Developer Certificate',
      issuer: 'Meta',
      date: '2021',
      credentialId: 'META-REACT-2021-001'
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
