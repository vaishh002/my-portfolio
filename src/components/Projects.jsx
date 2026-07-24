import React, { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'skillbridge-ai',
    title: 'SkillBridge AI',
    subtitle: 'AI Career Platform · Hackathon 5th Place Winner',
    desc: 'Built an AI-powered career guidance platform with resume analysis, ATS score checker using Gemini API, and role-specific interview question generator. Securing 5th place among 30+ competing teams.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Tailwind CSS', 'JWT Auth'],
    status: 'Live',
    award: 'Hackathon 5th Place (June 2026)',
    github: 'https://github.com/vaishh002/SkillBridgeAI',
    demo: 'https://skill-bridge-ai-theta.vercel.app',
    category: 'AI & Web Platform',
    bgAccent: 'from-[#F5E4DC] to-[#EFE8DF]',
    borderColor: 'border-[#C85A32]/30',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'vibha-erp',
    title: 'Vibha ERP — Inventory & Logistics',
    subtitle: 'Enterprise Management System',
    desc: 'Co-leading development of an enterprise-grade ERP system with 5+ modules (inventory, vendor, customer, production, master data). Built 20+ reusable UI components cutting duplicate code across team branches.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Django REST', 'MySQL'],
    status: 'In Progress',
    github: 'https://github.com/tejaspandav8421/Inventory-Management',
    category: 'Full-Stack ERP',
    bgAccent: 'from-[#EFE8DF] to-[#EAE3D9]',
    borderColor: 'border-[#464F38]/30',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    subtitle: 'Full-Stack Task Manager',
    desc: 'Led a 3-member team to build a browser-based task manager delivering instant real-time DOM updates and event-driven state management without page reloads across all task actions.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
    status: 'Live',
    github: 'https://github.com/vaishh002/TaskManagementSystem',
    demo: 'https://task-management-system-zeta-ten.vercel.app',
    category: 'Full-Stack Web App',
    bgAccent: 'from-[#F7F3EE] to-[#EFE8DF]',
    borderColor: 'border-[#C85A32]/30',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: 'hackathon-website',
    title: 'Hackathon Website (Athenura)',
    subtitle: 'Multi-Page Event Website',
    desc: 'Developed a 6-page responsive hackathon website (Home, About, Events, Registration, Team, Contact) serving 100+ live visitors. Built 12+ reusable React components.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    status: 'Live',
    github: 'https://github.com/bimalgautam1/Hackathon-Athenura',
    demo: 'https://hackathon.athenura.in/hackathons',
    category: 'Event Platform',
    bgAccent: 'from-[#EAE3D9] to-[#F5E4DC]',
    borderColor: 'border-[#464F38]/30',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'kaumudi-academy',
    title: 'Kaumudi Academy LMS',
    subtitle: 'Learning Management System',
    desc: 'Built responsive UI pages and reusable frontend components for an LMS platform covering navigation, course listings, and user-facing dashboards within a 2-week sprint.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    status: 'In Progress',
    github: 'https://github.com/AtharvBhorkar/kaumudi-academy',
    category: 'Education Tech',
    bgAccent: 'from-[#F7F3EE] to-[#EAE3D9]',
    borderColor: 'border-[#C85A32]/20',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section className="py-24 bg-[#EFE8DF] relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C85A32] font-sans">
            — SELECTED WORK —
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#2C2825] mt-2">
            Featured <span className="italic text-[#C85A32]">Projects</span>
          </h2>
          <p className="font-script text-2xl text-[#66605B] max-w-lg mx-auto mt-1">
            Crafting real-world applications from AI platforms to enterprise ERPs
          </p>
        </div>

        {/* Laptop & Device Preview Grid */}
        <div className="space-y-16">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} idx={idx} />
          ))}
        </div>

      </div>

      {/* Organic Bottom Wave Separator Transitioning to Experience Section (#464F38 Olive) */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#464F38] fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, idx }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotate({ x: -y / 40, y: x / 40 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
      }}
      className={`bg-white rounded-4xl p-8 md:p-12 shadow-warm border ${p.borderColor} relative overflow-hidden cursor-pointer`}
    >
      {/* PERFECTLY ALIGNED BACKGROUND VECTOR ART: Subtle Geometric Dot Grid Pattern inside Card Corner */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.08] pointer-events-none overflow-hidden rounded-tr-4xl">
        <svg width="100%" height="100%" fill="none">
          <pattern id={`projPattern-${p.id}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill="#C85A32" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#projPattern-${p.id})`} />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Text Content Details */}
        <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] bg-[#C85A32]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="text-[#C85A32]">{p.icon}</span>
              {p.category}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.status === 'Live' ? 'bg-[#464F38]/10 text-[#464F38]' : 'bg-[#8C5E4A]/10 text-[#8C5E4A]'}`}>
              ● {p.status}
            </span>
          </div>

          <h3 className="font-serif text-3xl font-bold text-[#2C2825]">
            {p.title}
          </h3>
          <p className="text-xs font-semibold text-[#66605B]">
            {p.subtitle}
          </p>

          {p.award && (
            <div className="inline-flex items-center gap-2 bg-[#C85A32] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
              <span>{p.award}</span>
            </div>
          )}

          <p className="text-sm text-[#66605B] leading-relaxed">
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {p.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#F7F3EE] border border-[#EAE3D9] text-[#2C2825] font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-4">
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-terracotta text-xs py-2.5 px-5">
                Live Preview
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline-dark text-xs py-2.5 px-5">
                GitHub Repo
              </a>
            )}
          </div>
        </div>

        {/* Laptop Preview Mockup Frame */}
        <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className={`w-full bg-gradient-to-br ${p.bgAccent} rounded-3xl p-6 sm:p-8 border border-[#EAE3D9] shadow-inner flex flex-col items-center justify-center relative`}>
            
            <div className="w-full bg-[#2C2825] rounded-t-xl p-2 shadow-2xl border border-gray-700">
              <div className="flex items-center gap-1.5 px-2 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="mx-auto text-[9px] font-mono text-gray-400 bg-gray-800 px-4 py-0.5 rounded-full truncate max-w-[200px]">
                  {p.demo ? p.demo.replace('https://', '') : p.title.toLowerCase().replace(/ /g, '-')}
                </div>
              </div>
              
              <div className="bg-[#F7F3EE] rounded-md p-6 text-center min-h-[160px] flex flex-col items-center justify-center space-y-2 border border-gray-300">
                <div className="w-12 h-12 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center text-xl font-bold">
                  {p.icon}
                </div>
                <p className="font-serif text-lg font-bold text-[#2C2825]">{p.title}</p>
                <p className="text-xs text-[#66605B] max-w-xs">{p.subtitle}</p>
              </div>
            </div>

            <div className="w-4/5 h-2.5 bg-gray-400 rounded-b-xl shadow-md -mt-0.5" />
            <div className="w-16 h-1 bg-gray-500 rounded-b-sm shadow-sm" />

          </div>
        </div>

      </div>
    </motion.div>
  )
}
