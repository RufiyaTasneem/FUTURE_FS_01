'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Contact</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="glass-effect border-slate-700/50 p-8">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <Link
                  href="mailto:mohammadroofiya786@gmail.com"
                  className="text-slate-200 hover:text-indigo-400 transition-colors break-all text-lg"
                >
                  mohammadroofiya786@gmail.com
                </Link>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 flex-shrink-0">
                <Github size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-400 mb-1">GitHub</p>
                <Link
                  href="https://github.com/RufiyaTasneem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-purple-400 transition-colors flex items-center gap-2 text-lg"
                >
                  https://github.com/RufiyaTasneem
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/mohammad-rufiya-tasneem-a2518a322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-pink-400 transition-colors flex items-center gap-2 text-lg"
                >
                  linkedin.com/in/mohammad-rufiya-tasneem-a2518a322
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
