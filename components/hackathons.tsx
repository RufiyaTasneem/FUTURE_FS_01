'use client'

import { Card } from '@/components/ui/card'
import { Zap, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const hackathons = [
  {
    id: 1,
    title: 'HackOverFlow National-Level 24-Hour Hackathon',
    description: 'Developed the frontend for SkillSwap and collaborated with a team of 6 to build a working prototype within 24 hours.',
    icon: Zap,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Smart India Hackathon College-Level Round',
    description: 'Worked in a team of 4 to design and prototype a solution for a real-world problem statement.',
    icon: Trophy,
    color: 'from-purple-500 to-pink-500',
  },
]

export function Hackathons() {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Hackathons & Events</h2>
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
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {hackathons.map((hackathon) => {
          const IconComponent = hackathon.icon
          return (
            <motion.div key={hackathon.id} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="glass-effect-premium p-8 group overflow-hidden relative h-full">
                  <motion.div
                    className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${hackathon.color} opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300 blur-3xl`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`p-4 rounded-lg bg-gradient-to-br ${hackathon.color} text-white flex-shrink-0 glow-lg`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 10,
                        }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <IconComponent size={28} />
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors"
                        whileHover={{
                          x: 5,
                        }}
                      >
                        {hackathon.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      className="text-slate-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {hackathon.description}
                    </motion.p>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none"
                    initial={{
                      boxShadow: 'inset 0 0 0 1px rgba(99, 102, 241, 0.1)',
                    }}
                    whileHover={{
                      boxShadow: 'inset 0 0 0 2px rgba(139, 92, 246, 0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
