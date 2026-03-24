'use client'

import { Github, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.span
            className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm text-indigo-300 mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <motion.span
              className="block gradient-text-large mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Roofiya Tasneem
            </motion.span>
            <motion.span
              className="block gradient-text-large"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Mohammad
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto font-semibold"
          variants={itemVariants}
        >
          Computer Science and Design Student | Frontend Developer
        </motion.p>

        <motion.p
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Motivated Computer Science and Design student with experience in frontend development using React and strong problem-solving skills in C, Python, and Java. Interested in building practical software through hackathons and real-world projects.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <Link href="#projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg group glow-lg">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </Link>
          <Link href="#contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Button
                variant="outline"
                className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 px-8 py-6 text-lg rounded-lg"
              >
                Contact
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link
              href="https://github.com/RufiyaTasneem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-effect-premium hover:glow-lg transition-all duration-300"
            >
              <Github size={24} className="text-slate-300 hover:text-indigo-400" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotateZ: -5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link
              href="https://www.linkedin.com/in/mohammad-rufiya-tasneem-a2518a322"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-effect-premium hover:glow-lg transition-all duration-300"
            >
              <Linkedin size={24} className="text-slate-300 hover:text-indigo-400" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
