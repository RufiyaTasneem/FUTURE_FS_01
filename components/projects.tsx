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
    description:
      'Designed and developed the frontend for a skill exchange platform that allows users to discover and connect with others to exchange skills. Built the frontend using React, implemented reusable UI components, and designed intuitive user interaction flows to improve usability.',
    tags: ['React', 'UI Components', 'Figma', 'Frontend'],
    github:
      'https://github.com/RufiyaTasneem/SkillSwap-Peer-to-Peer-Skill-Exchange-Platform',
    demo:
      'https://skill-swap-peer-to-peer-skill-excha.vercel.app/',
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
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative"
    >
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

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>

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

      {/* Projects Grid */}
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

                {/* Top Gradient Line */}
                <motion.div
                  className={`h-2 bg-gradient-to-r ${project.color}`}
                />

                <div className="p-6 flex flex-col h-full">

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-indigo-400 text-sm mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ✅ FIXED BUTTONS */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700/50">

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>

                    {/* Demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </a>

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