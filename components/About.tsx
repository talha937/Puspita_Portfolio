'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Award, BookOpen } from 'lucide-react'
import portfolioData from '@/portfolio.config'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-cyan opacity-10 rounded-full blur-3xl" />

      <motion.div
        className="container-custom mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about building systems that scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-electric-blue rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-electric-cyan rounded-2xl" />
              
              {/* Profile Image Placeholder */}
              <div className="relative glass rounded-2xl overflow-hidden w-full h-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
                {/* Replace with actual image: */}
                {/* <img
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              {portfolioData.personal.name}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="glass rounded-lg p-4 flex items-center space-x-3">
                <MapPin className="text-electric-blue" size={20} />
                <span className="text-gray-300">{portfolioData.personal.location}</span>
              </div>
              <div className="glass rounded-lg p-4 flex items-center space-x-3">
                <Mail className="text-electric-blue" size={20} />
                <span className="text-gray-300">{portfolioData.personal.email}</span>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="glass rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <BookOpen className="text-electric-blue mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">
                  {portfolioData.education.length}
                </div>
                <div className="text-sm text-gray-400">Degrees</div>
              </motion.div>
              <motion.div
                className="glass rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Award className="text-electric-cyan mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">
                  {portfolioData.certifications.length}
                </div>
                <div className="text-sm text-gray-400">Certifications</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.achievements.slice(0, 6).map((achievement) => (
              <motion.div
                key={achievement.id}
                className="glass rounded-lg p-6 card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-electric-blue bg-opacity-20 rounded-lg">
                    <Award className="text-electric-blue" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-electric-blue font-semibold mb-1">
                      {achievement.type}
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-2">
                      {achievement.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      {achievement.organization} • {achievement.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
