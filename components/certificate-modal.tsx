'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface CertificateModalProps {
  isOpen: boolean
  imageUrl: string
  title: string
  onClose: () => void
}

export function CertificateModal({ isOpen, imageUrl, title, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 max-w-4xl w-full mx-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, type: 'spring' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className="absolute -top-12 right-0 p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white transition-colors z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              <X size={24} />
            </motion.button>

            {/* Certificate image container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-2">
              <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-auto rounded-xl shadow-2xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              />

              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                boxShadow: 'inset 0 0 40px rgba(99, 102, 241, 0.2)',
              }} />
            </div>

            {/* Certificate title below image */}
            <motion.p
              className="text-center text-slate-300 mt-4 text-lg font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {title}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
