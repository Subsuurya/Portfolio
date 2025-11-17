import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }, [])

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
      return
    }

    scrollToSection(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? 'rgba(17, 24, 39, 0.85)'
            : 'rgba(17, 24, 39, 0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        className="transition-colors duration-300 border-b border-transparent dark:border-gray-800"
      >
        <div className="container-max flex items-center justify-between py-4">
          <a href="#home" className="text-xl font-semibold text-gray-900 dark:text-white">
            Suurya.dev
          </a>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-primary-500 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg"
            >
              <ul className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium text-gray-700 dark:text-gray-200">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="w-full text-left py-2 hover:text-primary-500 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

export default Navbar

