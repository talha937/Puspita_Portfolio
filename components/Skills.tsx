'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import portfolioData from '@/portfolio.config'

const categories = [
  { key: 'languages', label: 'Languages', icon: '💬' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'databases', label: 'Databases', icon: '🗄️' },
  { key: 'ml', label: 'Machine Learning', icon: '🤖' },
  { key: 'cloud', label: 'Cloud & DevOps', icon: '☁️' },
  { key: 'security', label: 'Security', icon: '🔒' },
  { key: 'messaging', label: 'Messaging', icon: '📨' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
]

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('languages')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  // Create marquee with all skills
  const allSkills = Object.values(portfolioData.skills).flat()
  const marqueeSkills = [...allSkills, ...allSkills] // Duplicate for infinite scroll

  return (
    <section id="skills" className="section-padding bg-slate-850 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        className="container-custom mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building with cutting-edge technologies across the full stack
          </p>
        </motion.div>

        {/* Skills Marquee */}
        <div className="mb-16 overflow-hidden relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-850 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-850 to-transparent z-10" />
          
          <div className="flex space-x-4 animate-marquee whitespace-nowrap">
            {marqueeSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="inline-flex items-center space-x-3 glass rounded-lg px-6 py-4"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <div className="w-24 h-2 bg-slate-750 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-electric-blue to-electric-cyan"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-electric-blue to-electric-cyan text-white shadow-lg shadow-electric-blue/50'
                  : 'glass text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {portfolioData.skills[selectedCategory as keyof typeof portfolioData.skills].map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass rounded-xl p-6 group hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="w-full">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Proficiency</span>
                    <span className="text-electric-blue font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-750 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-electric-blue to-electric-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Languages', value: portfolioData.skills.languages.length, icon: '💬' },
            { label: 'Frameworks', value: portfolioData.skills.backend.length, icon: '⚙️' },
            { label: 'Cloud Platforms', value: portfolioData.skills.cloud.length, icon: '☁️' },
            { label: 'Tools', value: portfolioData.skills.tools.length, icon: '🛠️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}+</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
