'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  Palette,
  Brain,
  Shield
} from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'NestJS', level: 85 },
        { name: 'FastAPI', level: 87 },
        { name: 'Python', level: 85 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      title: 'Database & GIS',
      icon: Database,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'PostGIS', level: 85 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 82 },
        { name: 'Prisma', level: 80 },
        { name: 'GraphQL', level: 78 }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Cloud,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS EC2', level: 80 },
        { name: 'Redis', level: 82 },
        { name: 'Git/GitLab', level: 90 },
        { name: 'WebSockets', level: 85 },
        { name: 'Keycloak', level: 75 }
      ]
    },
    {
      title: 'AI & Analytics',
      icon: Brain,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Python (pandas)', level: 85 },
        { name: 'scikit-learn', level: 78 },
        { name: 'Chart.js', level: 88 },
        { name: 'Kibana', level: 75 },
        { name: 'Anomaly Detection', level: 82 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: GitBranch,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C/C++', level: 78 },
        { name: 'PHP', level: 75 },
        { name: 'TypeScript', level: 90 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies and development practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          category.color === 'text-blue-500' ? 'from-blue-400 to-blue-600' :
                          category.color === 'text-green-500' ? 'from-green-400 to-green-600' :
                          category.color === 'text-purple-500' ? 'from-purple-400 to-purple-600' :
                          category.color === 'text-orange-500' ? 'from-orange-400 to-orange-600' :
                          category.color === 'text-pink-500' ? 'from-pink-400 to-pink-600' :
                          'from-indigo-400 to-indigo-600'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">AI & Machine Learning</h4>
              <p className="text-gray-600">
                Experience integrating AI models and working with machine learning frameworks
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Web Performance</h4>
              <p className="text-gray-600">
                Optimization techniques for fast, scalable, and SEO-friendly applications
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Security & Best Practices</h4>
              <p className="text-gray-600">
                Implementation of security measures and following industry best practices
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
