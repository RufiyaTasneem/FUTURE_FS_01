import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Hackathons } from '@/components/hackathons'
import { Certificates } from '@/components/certificates'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}