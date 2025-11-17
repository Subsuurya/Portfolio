import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: 'BSc (Hons) Computer Science (Intelligent Systems)',
      school: 'Asia Pacific University, Kuala Lumpur',
      year: '2019 – 2023 | CGPA 3.41',
      description: 'Explored AI, intelligent systems, and full-stack development through project-based modules.'
    },
    {
      degree: 'Diploma in Information Technology (Software Engineering)',
      school: 'Asia Pacific University',
      year: '2017 – 2021 | CGPA 3.44',
      description: 'Built a foundation in software engineering, user research, and SDLC best practices.'
    }
  ]

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Total Dynamics Technology SDN BHD',
      period: 'Mar 2025 – Present',
      description: 'Designs client-ready dashboards, authentication journeys, and UI prototypes for enterprise SaaS modules.',
      achievements: [
        'Built a progress management platform with React, Vite, PHP, and JWT auth to digitize task tracking for internal teams.',
        'Produced high-fidelity wireframes and interactive prototypes in Figma to accelerate stakeholder buy-in.',
        'Led frontend delivery for a cloud accounting suite enhanced with AI workflows, OCR extraction, and GrokAI API.'
      ]
    },
    {
      title: 'End User Support Specialist (Baker Hughes Malaysia)',
      company: 'Tech Mahindra',
      period: 'Nov 2023 – May 2024',
      description: 'Provided Tier-1/2 assistance for hardware, software, and network incidents across Malaysia operations.',
      achievements: [
        'Resolved daily support tickets spanning OS, application, and network issues with SLA-aligned communication.',
        'Collaborated with system administrators and application developers to triage escalations efficiently.',
        'Produced detailed case notes and follow-ups for high-priority incidents, ensuring transparent handovers.'
      ]
    },
    {
      title: 'PMO Assistant (Intern)',
      company: 'Silver Lining Systems, Menara UOA Bangsar',
      period: 'Jul 2022 – Oct 2022',
      description: 'Supported migration and ERP initiatives for clients spanning Asia and Germany.',
      achievements: [
        'Managed artefacts for the LCIB Sarawak Cable Berhad system migration project.',
        'Co-authored tender proposals and prepared ERP convergence decks for executive briefings.',
        'Coordinated UAT certificates and documentation to keep go-live milestones on track.'
      ]
    }
  ]

  const skills = [
    { category: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Oracle SQL'] },
    { category: 'Libraries & Frameworks', items: ['React', 'Vite', 'Node.js', 'Express', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Tools & Platforms', items: ['GitHub', 'VS Code', 'Figma', 'Canva', 'Hostinger', 'Postman', 'FileZilla'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Adaptability', 'Communication', 'Time Management'] },
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
