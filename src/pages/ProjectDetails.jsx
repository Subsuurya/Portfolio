import { useEffect, useMemo, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowLeft, ChevronDown, Github, X } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGithubDropdownOpen, setIsGithubDropdownOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const githubDropdownRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    setCurrentIndex(0)
    setIsGithubDropdownOpen(false)
    setIsModalOpen(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [slug])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (githubDropdownRef.current && !githubDropdownRef.current.contains(event.target)) {
        setIsGithubDropdownOpen(false)
      }
    }

    if (isGithubDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isGithubDropdownOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen || !project) return

      if (event.key === 'Escape') {
        setIsModalOpen(false)
      } else if (event.key === 'ArrowLeft') {
        setModalImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
      } else if (event.key === 'ArrowRight') {
        setModalImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen, project])


  if (!project) {
    return (
      <section className="section-padding bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
        <div className="container-max text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Project not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The project you are looking for does not exist or has been moved.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </section>
    )
  }

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const openModal = (index) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalPrevious = () => {
    setModalImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleModalNext = () => {
    setModalImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900 min-h-screen pt-20">
      <div className="container-max space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
        </header>

        <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="w-full h-[32rem] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(currentIndex)}
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={showPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-900 transition-colors shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={showNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-900 transition-colors shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-500 scale-110'
                    : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-2 w-2.5 h-2.5 bg-primary-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {(project.demo && !project.demo.includes('example.com') && !project.demo.includes('demo.example.com')) ||
            (project.github && 
              (typeof project.github === 'object' || 
               (typeof project.github === 'string' && !project.github.includes('username')))) ? (
              <section className="flex flex-col gap-4">
                {project.demo && !project.demo.includes('example.com') && !project.demo.includes('demo.example.com') && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 text-white px-5 py-3 hover:bg-primary-700 transition-colors"
                  >
                    Visit Live Demo
                  </a>
                )}
                {project.github && typeof project.github === 'object' && project.github.backend && project.github.frontend ? (
                  <div className="relative" ref={githubDropdownRef}>
                    <button
                      onClick={() => setIsGithubDropdownOpen(!isGithubDropdownOpen)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                      <ChevronDown className={`w-4 h-4 transition-transform ${isGithubDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isGithubDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-10">
                        <a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsGithubDropdownOpen(false)}
                        >
                          <Github className="w-4 h-4" />
                          Backend
                        </a>
                        <a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-200 dark:border-gray-700"
                          onClick={() => setIsGithubDropdownOpen(false)}
                        >
                          <Github className="w-4 h-4" />
                          Frontend
                        </a>
                      </div>
                    )}
                  </div>
                ) : project.github && typeof project.github === 'string' && !project.github.includes('username') && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
              </section>
            ) : null}
          </aside>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center p-4" 
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {project.images.length > 1 && (
              <button
                onClick={handleModalPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <div className="max-w-7xl max-h-[90vh] flex items-center justify-center">
              <img
                src={project.images[modalImageIndex]}
                alt={`${project.title} screenshot ${modalImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>

            {/* Next Button */}
            {project.images.length > 1 && (
              <button
                onClick={handleModalNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image Counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                {modalImageIndex + 1} / {project.images.length}
              </div>
            )}

            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4 py-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === modalImageIndex
                        ? 'border-white scale-110'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectDetails

