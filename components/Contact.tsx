'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Twitter, 
  Code2, 
  ArrowUp,
  MessageSquare,
  Clock,
  MapPin
} from 'lucide-react'
import portfolioData from '@/portfolio.config'

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(portfolioData.personal.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: 'GitHub', url: portfolioData.socials.github, icon: Github },
    { name: 'LinkedIn', url: portfolioData.socials.linkedin, icon: Linkedin },
    { name: 'LeetCode', url: portfolioData.socials.leetcode, icon: Code2 },
    { name: 'Twitter', url: portfolioData.socials.twitter, icon: Twitter },
  ]

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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        className="container-custom mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Main Contact Section */}
        <div className="text-center mb-16">
          <motion.div variants={itemVariants}>
            <h2 className="gradient-text mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Open to FAANG opportunities and challenging projects in backend development, 
              machine learning, and cybersecurity. Let's connect!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {/* Email Card */}
            <motion.div
              className="glass rounded-xl p-8"
              whileHover={{ y: -5 }}
            >
              <Mail className="text-electric-blue mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
              <p className="text-gray-300 mb-4">{portfolioData.personal.email}</p>
              <motion.button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue bg-opacity-20 text-electric-blue rounded-lg hover:bg-opacity-30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {emailCopied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Email
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Response Time Card */}
            <motion.div
              className="glass rounded-xl p-8"
              whileHover={{ y: -5 }}
            >
              <Clock className="text-electric-cyan mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
              <p className="text-gray-300 mb-4">{portfolioData.contact.responseTime}</p>
              <div className="text-sm text-gray-400">
                {portfolioData.contact.timezone}
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="glass rounded-xl p-8"
              whileHover={{ y: -5 }}
            >
              <MapPin className="text-electric-blue mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-white mb-3">Location</h3>
              <p className="text-gray-300 mb-4">{portfolioData.personal.location}</p>
              <div className="text-sm text-gray-400">
                Available for remote & on-site
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass rounded-lg px-6 py-4 hover:bg-white hover:bg-opacity-10 transition-all group"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-electric-blue group-hover:text-electric-cyan transition-colors" size={24} />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-semibold">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 btn-primary text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={20} />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 pt-12 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo/Name */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {portfolioData.personal.title}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-electric-blue transition-colors link-hover"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 glass rounded-lg hover:bg-electric-blue hover:bg-opacity-20 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="text-electric-blue" size={20} />
            </motion.button>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-blue" />
    </section>
  )
}
