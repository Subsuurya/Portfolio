import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import ProfilePic from '../assets/ProfilePic.png'

const Hero = () => {
  const achievements = [
    { number: '1+', label: 'Years in Frontend' },
    { number: '3+', label: 'Client Builds' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Picture - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:hidden flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={ProfilePic}
                    alt="Professional Headshot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-6xl font-bold text-primary-600" style={{display: 'none'}}>
                    SS
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💻</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg uppercase tracking-[0.35em] text-primary-600 dark:text-primary-300">
                Frontend Developer · UI Engineer · Builder
              </p>
              <h1 className="text-6xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mt-4">
                Hi, I'm
                <span className="block gradient-text">Suurya Sivabalan</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                Computer Science graduate crafting delightful, production-ready web applications.
                I specialise in React, Vite, and PHP-powered stacks—translating requirements into
                thoughtful UIs, secure integrations, and reliable delivery for fast-moving teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Let's Collaborate
              </a>
              <a 
                href="/resume/Suurya_Sivabalan_Resume.pdf" 
                download="Suurya_Sivabalan_Resume.pdf"
                className="btn-outline"
              >
                <Download className="w-5 h-5 mr-2 inline" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-6"
            >
              <a href="https://github.com/Subsuurya" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="GitHub profile">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/suurya-sivabalan" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={24} />
              </a>
              <a href="mailto:suurya090703@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Picture - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={ProfilePic}
                    alt="Professional Headshot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-8xl font-bold text-primary-600" style={{display: 'none'}}>
                    SS
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">💻</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
