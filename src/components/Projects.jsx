import { motion } from 'framer-motion'
import { Github, Code, Database, Cloud, Server, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

const Projects = () => {
  const navigate = useNavigate()

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Full Stack Developer':
        return <Code className="w-5 h-5" />
      case 'AI Backend Engineer':
        return <Code className="w-5 h-5" />
      case 'Backend AI Integration Dev':
        return <Code className="w-5 h-5" />
      case 'DevOps Engineer':
        return <Cloud className="w-5 h-5" />
      case 'Database Engineer':
        return <Database className="w-5 h-5" />
      case 'Cloud Architect':
        return <Cloud className="w-5 h-5" />
      case 'Backend Developer':
        return <Server className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 cursor-pointer"
              onDoubleClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="relative">
                <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Demo Link Icon */}
                  {project.demoLink && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                          <ExternalLink className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </a>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    {getRoleIcon(project.role)}
                    <span className="ml-2">{project.role}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Subsuurya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
