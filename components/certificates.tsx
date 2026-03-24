'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CertificateCard } from './certificate-card'
import { CertificateModal } from './certificate-modal'

const certificates = [
  {
    id: 1,
    title: '5-Day AI Agents Intensive Course with Google',
    issuer: 'Kaggle + Google',
    imageUrl: '/certificates/Kaggle.jpg',
  },
  {
    id: 2,
    title: 'OCI 2025 Generative AI Professional',
    issuer: 'Oracle',
    imageUrl: '/certificates/oracle.jpg',
  },
  {
    id: 3,
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    imageUrl: '/certificates/cisco.jpg',
  },
]

export function Certificates() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Certificates & Credentials</h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Certificate cards grid */}
      <motion.div
        ref={ref}
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {certificates.map((certificate) => (
          <motion.div key={certificate.id} variants={itemVariants}>
            <CertificateCard
              title={certificate.title}
              issuer={certificate.issuer}
              imageUrl={certificate.imageUrl}
              onClick={() => setSelectedCertificate(certificate)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate modal */}
      <CertificateModal
        isOpen={!!selectedCertificate}
        imageUrl={selectedCertificate?.imageUrl || ''}
        title={selectedCertificate?.title || ''}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  )
}
