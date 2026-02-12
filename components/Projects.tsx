'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Star } from 'lucide-react'
import portfolioData from '@/portfolio.config'

export default function Projects() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-cyan opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-blue opacity-10 rounded-full blur-3xl" />

      <motion.div
        className="container-custom mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="gradient-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance systems built for scale and reliability
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group glass rounded-xl overflow-hidden card-hover"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-750 to-slate-850 overflow-hidden">
                {/* Placeholder - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  💻
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-electric-blue bg-opacity-20 backdrop-blur-lg rounded-full border border-electric-blue border-opacity-30">
                  <span className="text-xs text-electric-blue font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Links on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-charcoal bg-opacity-80 backdrop-blur rounded-lg hover:bg-electric-blue transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-charcoal bg-opacity-80 backdrop-blur rounded-lg hover:bg-electric-blue transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-xs text-electric-cyan"
                    >
                      <Star size={12} className="fill-current" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-850 text-gray-300 text-xs rounded border border-slate-750 group-hover:border-electric-blue group-hover:text-electric-blue transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-gradient-to-r from-electric-blue to-electric-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
