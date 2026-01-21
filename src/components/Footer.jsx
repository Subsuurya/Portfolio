import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/Subsuurya',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/suurya-sivabalan-37b034185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: 'Email',
      url: 'mailto:suurya090703@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Software Developer</h3>
              <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed">
                Software developer crafting intuitive web experiences
                and bridging UI ideas into production-grade products with pixel-perfect
                detail and reliable engineering practices.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300 text-gray-400 dark:text-gray-500 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 dark:text-gray-200">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 dark:text-gray-200">Get In Touch</h4>
              <div className="space-y-3 text-gray-300 dark:text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-primary-400" />
                  <a href="mailto:suurya090703@gmail.com" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                    suurya090703@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-3 text-primary-400">📍</span>
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-3 text-primary-400">💼</span>
                  <span>Open to developer roles & new opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0"
            >
              <span>© {currentYear} Suurya Sivabalan Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>and modern web technologies.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <button
                onClick={scrollToTop}
                className="flex items-center text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Back to top
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-secondary-900/10 pointer-events-none"></div>
    </footer>
  )
}

export default Footer
