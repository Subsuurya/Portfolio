import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Resume = () => {

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my complete resume to learn more about my experience and qualifications.
          </p>
          <a
            href="/resume/Suurya_Sivabalan_Resume.pdf"
            download="Suurya_Sivabalan_Resume.pdf"
            className="btn-primary inline-flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
