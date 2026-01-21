import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: 'BSc (Hons) Computer Science (Intelligent Systems)',
      school: 'Asia Pacific University, Kuala Lumpur',
      year: '2021 – 2023 | CGPA 3.41',
      description: 'Explored AI, intelligent systems, and full-stack development through project-based modules.'
    },
    {
      degree: 'Diploma in Information Technology (Software Engineering)',
      school: 'Asia Pacific University, Kuala Lumpur',
      year: '2019 – 2021 | CGPA 3.44',
      description: 'Built a foundation in software engineering, user research, and SDLC best practices.'
    }
  ]

  const experience = [
    {
       title: 'Software Developer',
    company: 'Total Dynamics Technology Holding Sdn. Bhd.',
    period: 'Mar 2025 – Present',
    description:
      'Frontend and system developer responsible for building, integrating, and maintaining business-critical web applications with accounting and billing logic.',
    achievements: [
      'Developed and maintained web applications including progress management, accounting, and billing systems using React.js with Vite.',
      'Built reusable, scalable UI components ensuring responsive and cross-browser compatible interfaces.',
      'Integrated frontend applications with PHP and Laravel-based backends via RESTful APIs.',
      'Consumed and tested backend APIs with proper authentication, data validation, and error handling.',
      'Collaborated closely with backend developers to align frontend workflows with server-side business logic.',
      'Used pgAdmin for database interaction and Postman for API testing and request–response lifecycle validation.',
      'Designed and integrated OpenAI GPT-4o into the payroll system to automatically extract and populate receipt data from uploaded expense receipts, reducing manual entry and errors.',
      'Applied accounting and billing principles including invoicing, recurring charges, reconciliation, and billing accuracy.',
      'Translated business requirements into functional UI flows aligned with backend rules.',
      'Used GitHub for version control, collaboration, and change tracking while following clean code and component-based architecture best practices.'
    ]
    },
    {
      title: 'End User Support Specialist (Baker Hughes Malaysia)',
      company: 'Tech Mahindra',
      period: 'Nov 2023 – May 2024',
     description:
      'Provided end-user technical support across hardware, software, network, and system-related issues to ensure smooth daily operations.',
    achievements: [
      'Provided technical support to end users, addressing hardware, software, network, and general IT-related issues.',
      'Diagnosed and resolved issues involving computer systems, applications, and peripherals both on-site and remotely.',
      'Delivered professional and timely user support through ticketing, chat, and call-based support channels.',
      'Handled incidents and service requests using ServiceNow (SNOW), ensuring proper documentation and SLA compliance.',
      'Assisted with installation, configuration, and maintenance of software applications on end-user devices.',
      'Provided remote technical assistance to off-site and remote users to ensure operational continuity.',
      'Collaborated with network administrators, system administrators, and application teams to resolve cross-functional and system-level issues.'
    ]
    },
    {
      title: 'PMO Assistant (Intern)',
      company: 'Silver Lining Systems, Menara UOA Bangsar',
      period: 'Aug 2022 – Nov 2022',
      description:
      'Supported ERP implementation and migration projects by assisting project management, integration activities, and system validation processes.',
      achievements: [
      'Supported the Project Manager in managing ERP implementation projects for LCIB Sarawak Cable Berhad, collaborating with Vienna Advantage Asia (VAA) on migration to Vienna Advantage ERP.',
      'Contributed to the preparation and updating of tender proposals for ERP system migration projects, including Cahaya Mata Sarawak.',
      'Participated in ERP integration activities for PERODUA’s parts manufacturing facility, supporting system alignment and data flow between modules.',
      'Assisted in the preparation of User Acceptance Testing (UAT) documentation and Go-Live certification to support final system validation and deployment readiness.'
    ]
    }
  ]

  const skills = [
    { category: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'SQL'] },
    { category: 'Libraries & Frameworks', items: ['React', 'Vite', 'Node.js', 'Tailwind CSS', 'Laravel'] },
    { category: 'Tools & Platforms', items: ['GitHub', 'VS Code', 'Figma', 'Canva', 'PGadmin', 'Postman', 'MySQL'] },
    { category: 'AI Tools', items: ['ClaudeAI', 'CursorAI', 'Gemini', 'etc'] },
    { category: 'Learning & Growth', items: ['Self-learning', 'Tech Evangelism', 'Rapid Prototyping'] }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Frontend-focused developer who thrives on turning business requirements into
            intuitive digital experiences. I pair clean UI code with strong collaboration,
            documentation, and customer empathy learned from supporting enterprise teams.
          </p>
        </motion.div>

        <div className="space-y-16 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-6 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.year}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="grid lg:grid-cols-1 gap-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-6 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                        <Award className="w-4 h-4 text-secondary-600 mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-primary-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
