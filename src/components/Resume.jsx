import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react'

const Resume = () => {
  const timeline = [
    {
      year: 'Mar 2025 – Present',
      title: 'Frontend Developer',
      company: 'Total Dynamics Technology SDN BHD',
      location: 'Kuala Lumpur · Hybrid',
      description: 'Owning UI delivery for progress management, accounting, and automation modules built with React + PHP.',
      achievements: [
        'Implemented JWT-secured frontends for project tracking and customer portals, cutting manual reporting cycles.',
        'Partnered with product owners to translate workshops into Figma prototypes and component libraries.',
        'Integrated GrokAI API and OCR extraction pipelines into accounting dashboards to automate data entry.'
      ],
      type: 'work'
    },
    {
      year: 'Nov 2023 – May 2024',
      title: 'End User Support Specialist (Baker Hughes Malaysia)',
      company: 'Tech Mahindra',
      location: 'Kuala Lumpur · On-site',
      description: 'Provided multi-channel support for enterprise users while coordinating with infra and dev teams.',
      achievements: [
        'Troubleshot software, hardware, and network issues through ticketing, chat, and call workflows.',
        'Escalated complex incidents to higher-tier teams with precise documentation and impact summaries.',
        'Guided remote employees on secure configuration, application installs, and system maintenance tasks.'
      ],
      type: 'work'
    },
    {
      year: 'Jul 2022 – Oct 2022',
      title: 'PMO Assistant (Intern)',
      company: 'Silver Lining Systems · Menara UOA Bangsar',
      location: 'Kuala Lumpur',
      description: 'Supported ERP convergence roadmaps and migration deliverables for regional manufacturing clients.',
      achievements: [
        'Prepared tender proposals and executive-ready slides for ERP integration at PERODUA and LCIB projects.',
        'Tracked migration milestones and collaborated with Vienna Advantage teams in Asia and Germany.',
        'Issued UAT certificates and documentation bundles for successful go-live stages.'
      ],
      type: 'work'
    },
    {
      year: '2019 – 2023',
      title: 'BSc (Hons) Computer Science (Intelligent Systems)',
      school: 'Asia Pacific University of Technology & Innovation',
      location: 'Kuala Lumpur',
      description: 'CGPA 3.41 with emphasis on AI, software engineering, and full-stack delivery.',
      achievements: [
        'Capstone: corporate business management platform with React + PHP stack.',
        'Coursework: Intelligent Systems, Web Engineering, Databases, Entrepreneurship.'
      ],
      type: 'education'
    },
    {
      year: '2017 – 2021',
      title: 'Diploma in Information Technology (Software Engineering)',
      school: 'Asia Pacific University of Technology & Innovation',
      location: 'Kuala Lumpur',
      description: 'CGPA 3.44 with focus on SDLC, UI/UX fundamentals, and project documentation.',
      achievements: [
        'Delivered multiple UI prototypes for SME clients during studio projects.',
        'Built a foundation in PHP, JavaScript, and Oracle SQL.'
      ],
      type: 'education'
    }
  ]

  const highlights = [
    {
      name: 'AI-Ready Accounting Prototype',
      issuer: 'Total Dynamics Technology',
      date: '2025',
      detail: 'Architected GrokAI and OCR-assisted workflows to automate invoice extraction.'
    },
    {
      name: 'Progress Management Web App',
      issuer: 'Total Dynamics Technology',
      date: '2025',
      detail: 'React + Vite frontend with JWT access control powering daily productivity reviews.'
    },
    {
      name: 'ERP Migration Support',
      issuer: 'Silver Lining Systems',
      date: '2022',
      detail: 'Produced UAT collateral and convergence decks adopted for board-level reviews.'
    }
  ]

  const skills = {
    'Programming Languages': ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Oracle SQL'],
    'Frameworks & Libraries': ['React', 'Vite', 'Node.js', 'Express', 'Tailwind CSS', 'Bootstrap'],
    'Tools & Platforms': ['Figma', 'Canva', 'Postman', 'Hostinger', 'GitHub', 'FileZilla'],
    'Soft Skills': ['Problem Solving', 'Adaptability', 'Communication', 'Time Management']
  }

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my complete resume or explore my professional journey below.
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-primary-600" />
                Professional Timeline
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-3 w-3 h-3 rounded-full ${
                        item.type === 'work' ? 'bg-primary-600' : 'bg-secondary-600'
                      } border-4 border-white shadow-lg`}></div>
                      
                      <div className="ml-8 card p-6 w-full bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {item.year}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          {item.type === 'work' ? (
                            <Briefcase className="w-4 h-4 mr-2" />
                          ) : (
                            <GraduationCap className="w-4 h-4 mr-2" />
                          )}
                          <span className="font-medium">
                            {item.company || item.school}
                          </span>
                          <MapPin className="w-4 h-4 ml-2 mr-1" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
                        
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <Award className="w-3 h-3 text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-600" />
                Career Highlights
              </h3>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {highlight.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">{highlight.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-600 dark:text-primary-400 text-xs font-medium">
                        {highlight.date}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{highlight.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary-600" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
