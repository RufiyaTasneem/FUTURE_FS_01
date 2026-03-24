'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['C', 'Python', 'Java'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Developer Tools',
    skills: ['VS Code', 'GitHub', 'Vercel', 'Figma'],
    color: 'from-pink-500 to-rose-500',
  },
]

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div
        ref={ref}
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="glass-effect-premium p-8 group overflow-hidden relative h-full">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-4 py-2 rounded-lg glass-effect-premium text-slate-200 text-sm cursor-default"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                        }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning Path */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Card className="glass-effect-premium p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Learning Path</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                'Mastering Full-Stack Development with Modern Frameworks',
                'Exploring Advanced UI/UX Design Principles',
                'Building Scalable Web Applications',
                'Contributing to Open Source Projects',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="text-indigo-400 font-bold mt-1 text-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    →
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
