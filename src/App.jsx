import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Process from './components/Process'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import ThreeCanvas from './components/ThreeCanvas'
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {
  useScrollProgress()

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#2C2825] relative">
      {/* 3D Floating Geometric Canvas Background */}
      <ThreeCanvas />

      <div id="scroll-progress" />
      <Navbar />
      <CommandPalette />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
