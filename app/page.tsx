'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import AchievementsSection from '@/components/AchievementsSection'
import ContactSection from '@/components/ContactSection'
import ThreeBackground from '@/components/ThreeBackground'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen">
      <ThreeBackground />
      <Navigation activeSection={activeSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </motion.div>
    </main>
  )
}
