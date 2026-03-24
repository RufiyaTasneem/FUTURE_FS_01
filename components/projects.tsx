'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'SkillSwap',
    subtitle: 'Peer-to-Peer Skill Exchange Platform',
    description: 'Designed and developed the frontend for a skill exchange platform that allows users to discover and connect with others to exchange skills. Built the frontend using React, implemented reusable UI components, and designed intuitive user interaction flows to improve usability.',
    tags: ['React', 'UI Components', 'Figma', 'Frontend'],
    github: '#',
    demo: '#',
    color: 'from-indigo-500 to-blue-500',
  },
]

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-slate-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Showcasing my recent work and the problems I've solved with modern web technologies.
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <motion.div
              whileHover={{
                y: -12,
                boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="glass-effect-premium overflow-hidden group h-full flex flex-col">
                {/* Animated colored header */}
                <motion.div
                  className={`h-2 bg-gradient-to-r ${project.color} glow-effect`}
                  animate={{
                    boxShadow: [
                      `0 0 10px rgba(99, 102, 241, 0.3)`,
                      `0 0 20px rgba(99, 102, 241, 0.6)`,
                      `0 0 10px rgba(99, 102, 241, 0.3)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="p-6 flex flex-col h-full">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-indigo-400 text-sm mb-4">{project.subtitle}</p>

                  <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <motion.div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 rounded-full glass-effect-premium text-xs text-slate-300 cursor-default"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                        }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                    <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
