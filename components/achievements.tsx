'use client'

import { Card } from '@/components/ui/card'
import { Trophy, Award, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    id: 1,
    title: '2nd Place in First-Year Academics',
    description: 'SRKR Engineering College Annual Day 2026',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/20',
  },
  {
    id: 2,
    title: 'AlgoUniversity Tech Fellowship 2025',
    description: 'Shortlisted among 2.5L+ applicants (Top 4.59%)',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/20',
  },
  {
    id: 3,
    title: 'CodeChef Global Rank',
    description: '1225 / 18,000+ in CodeChef Starters 216',
    icon: Star,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/20',
  },
]

export function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, type: 'spring' },
    },
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Achievements & Milestones</h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Awards Grid */}
      <motion.div
        ref={ref}
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon
          return (
            <motion.div key={achievement.id} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -15,
                  boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="glass-effect-premium p-8 group relative overflow-hidden h-full">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300 blur-3xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <motion.div
                      className={`p-5 rounded-xl bg-gradient-to-br ${achievement.color} text-white w-fit ${achievement.bgColor} glow-lg`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <IconComponent size={32} />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-bold text-white mb-2"
                        whileHover={{
                          color: '#6366f1',
                        }}
                      >
                        {achievement.title}
                      </motion.h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-indigo-400 text-sm font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>✨ Verified Achievement</span>
                    </motion.div>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none"
                    initial={{
                      boxShadow: 'inset 0 0 0 1px rgba(99, 102, 241, 0.1)',
                    }}
                    whileHover={{
                      boxShadow: 'inset 0 0 0 2px rgba(99, 102, 241, 0.5)',
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
