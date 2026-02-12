'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'
import portfolioData from '@/portfolio.config'

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="section-padding bg-slate-850 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <motion.div
        className="container-custom mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="gradient-text mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Journey through top-tier tech companies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-electric-blue via-electric-cyan to-electric-blue" />

          {/* Experience Items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Content Card */}
                <motion.div
                  className="w-full md:w-5/12 glass rounded-xl p-6 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                        {exp.position}
                      </h3>
                      <div className="text-lg text-electric-blue font-semibold mt-1">
                        {exp.company}
                      </div>
                    </div>
                    {/* Company Logo Placeholder */}
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl">
                      🏢
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight className="text-electric-blue flex-shrink-0 mt-0.5" size={16} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-electric-blue bg-opacity-10 text-electric-blue text-xs rounded-full border border-electric-blue border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-blue rounded-full border-4 border-slate-850 z-10">
                  <motion.div
                    className="absolute inset-0 bg-electric-blue rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.id}
                className="glass rounded-xl p-6"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <div className="text-electric-blue font-semibold">{edu.field}</div>
                  </div>
                  <div className="text-2xl">🎓</div>
                </div>
                <div className="text-gray-400 mb-3">
                  <div className="font-semibold">{edu.institution}</div>
                  <div className="text-sm">{edu.location}</div>
                  <div className="text-sm">{edu.startDate} - {edu.endDate}</div>
                  <div className="text-sm text-electric-cyan">GPA: {edu.gpa}</div>
                </div>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                      <ChevronRight className="text-electric-blue flex-shrink-0 mt-0.5" size={14} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {portfolioData.certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="glass rounded-lg p-4 text-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-sm font-semibold text-white mb-1">{cert.name}</div>
                <div className="text-xs text-gray-400">{cert.issuer}</div>
                <div className="text-xs text-electric-blue mt-1">{cert.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
