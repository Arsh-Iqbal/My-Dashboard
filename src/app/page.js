
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Optional from '@/components/Optional'
import Profile from '@/components/Profile'
import Projects from '@/components/Project'
import Skills from '@/components/Skills'
import { StarBackground } from '@/components/StarBackground'


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background Animation */}
      <StarBackground />
      <Navbar />
      <main className="">
        <Profile />
        <Experience />
        <Skills />
        <Projects/>
        <Optional />
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}
