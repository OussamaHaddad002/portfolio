'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, Calendar } from 'lucide-react'

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: 'ICCAD\'2025 Conference Web Manager',
      organization: 'IEEE Conference',
      description: 'Managing web presence and digital assets for the International Conference on Computer-Aided Design',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'IEEE TSYP\'11 Program Chief',
      organization: 'IEEE Tunisia Section',
      description: 'Leading program development and coordination for IEEE Tunisia Section Young Professionals',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      title: 'IEEE ESSTHS Robotics & Automation Chairman',
      organization: 'IEEE Student Branch',
      description: 'Chairman of Robotics & Automation activities at IEEE ESSTHS Student Branch',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  const languages = [
    { name: 'Arabic', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Advanced', percentage: 90 },
    { name: 'French', level: 'Advanced', percentage: 85 },
    { name: 'German', level: 'Beginner', percentage: 30 }
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leadership & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Active involvement in professional communities and international organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteering & Leadership */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-blue-600" />
              Volunteering & Leadership
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-primary-600 font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Globe className="text-green-600" />
              Languages
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">
                        {language.name}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">
                        {language.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.percentage}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.2,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 bg-white rounded-xl p-6 shadow-md"
            >
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Calendar className="text-purple-600" />
                Current Focus
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Currently pursuing National Engineering Diploma while actively contributing to IEEE communities 
                and developing innovative projects in AI, geospatial technologies, and full-stack development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
