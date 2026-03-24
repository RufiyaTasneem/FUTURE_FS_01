'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CertificateCardProps {
  title: string
  issuer: string
  imageUrl: string
  onClick: () => void
}

export function CertificateCard({ title, issuer, imageUrl, onClick }: CertificateCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(99, 102, 241, 0.3)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="glass-effect-premium overflow-hidden group h-full flex flex-col">
        {/* Certificate image container */}
        <div className="relative w-full h-48 overflow-hidden bg-slate-800">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              >
                <p className="text-white font-semibold text-lg">View Certificate</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <motion.h3
            className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm text-slate-400 flex-grow"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {issuer}
          </motion.p>

          {/* Action indicator */}
          <motion.div
            className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mt-4"
            initial={{ opacity: 0, x: -5 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Click to view</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
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
  )
}
