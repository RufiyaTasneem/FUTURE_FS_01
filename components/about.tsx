'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          About Me
        </h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* About Card */}
        <motion.div className="space-y-4" variants={containerVariants}>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Card className="glass-effect-premium p-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                About Me
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                I am a Computer Science and Design student at SRKR Engineering College
                with a GPA of 9.18. I have experience in frontend development using
                React and enjoy building practical software applications. I am
                interested in building intuitive user interfaces and improving user
                experience through thoughtful design and reusable components. I also
                participate in hackathons and enjoy collaborating with teams to build
                solutions for real-world problems.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Education + Interests */}
        <motion.div className="space-y-4" variants={containerVariants}>
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Card className="glass-effect-premium p-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-300 font-semibold">
                    SRKR Engineering College, Bhimavaram
                  </p>
                  <p className="text-slate-400 text-sm">
                    B.Tech in Computer Science and Design
                  </p>
                  <p className="text-slate-400 text-sm">GPA: 9.18</p>
                </div>
                <div className="pt-3 border-t border-slate-700/50">
                  <p className="text-slate-300 font-semibold">
                    Sri Chaitanya Junior College
                  </p>
                  <p className="text-slate-400 text-sm">Intermediate (MPC)</p>
                  <p className="text-slate-400 text-sm">Percentage: 92%</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Card className="glass-effect-premium p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Interests
              </h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li className="flex items-center gap-2">• Frontend Development with React</li>
                <li className="flex items-center gap-2">• UI/UX Design</li>
                <li className="flex items-center gap-2">• Hackathons & Real-world Projects</li>
                <li className="flex items-center gap-2">• Reusable Component Design</li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}