'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/30 glass-effect backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl gradient-text mb-2">RTM</h3>
            <p className="text-slate-400 text-sm">
              Frontend Developer | Computer Science Student
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hackathons" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/RufiyaTasneem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohammad-rufiya-tasneem-a2518a322"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:mohammadroofiya786@gmail.com"
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Roofiya Tasneem Mohammad. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Designed & Built with <span className="text-pink-400">♥</span> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
