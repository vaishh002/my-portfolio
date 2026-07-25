import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All Work', 'AI & Web', 'Enterprise ERP', 'Web Apps', 'Events & LMS']

const projects = [
  {
    id: 'skillbridge-ai',
    title: 'SkillBridge AI',
    subtitle: 'AI Career Platform · Hackathon 5th Place Winner',
    desc: 'AI-powered career guidance platform with resume analysis, ATS score checker using Gemini API, and role-specific interview question generator. Securing 5th place among 30+ competing teams.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    status: 'Live',
    award: 'Hackathon 5th Place (June 2026)',
    github: 'https://github.com/vaishh002/SkillBridgeAI',
    demo: 'https://skill-bridge-ai-theta.vercel.app',
    category: 'AI & Web',
    bgAccent: 'from-[#F5E4DC] to-[#EFE8DF]',
    borderColor: 'border-[#C85A32]/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    category: 'Enterprise ERP',
    bgAccent: 'from-[#EFE8DF] to-[#EAE3D9]',
    borderColor: 'border-[#464F38]/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    category: 'Web Apps',
    bgAccent: 'from-[#F7F3EE] to-[#EFE8DF]',
    borderColor: 'border-[#C85A32]/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    category: 'Events & LMS',
    bgAccent: 'from-[#EAE3D9] to-[#F5E4DC]',
    borderColor: 'border-[#464F38]/30',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    category: 'Events & LMS',
    bgAccent: 'from-[#F7F3EE] to-[#EAE3D9]',
    borderColor: 'border-[#C85A32]/20',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Work')
  const [showAll, setShowAll] = useState(false)

  // Filter projects by active tab
  const filteredProjects = activeTab === 'All Work'
    ? projects
    : projects.filter(p => p.category === activeTab)

  // Limit items shown unless expanded
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <section className="py-24 bg-[#EFE8DF] relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
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

        {/* ── Category Filter Tabs ── */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat)
                  setShowAll(false)
                }}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-[#C85A32] shadow-md'
                    : 'text-[#66605B] bg-white/70 hover:bg-white hover:text-[#2C2825] border border-[#EAE3D9]'
                }`}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-[#C85A32] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* ── 2-Column Responsive Card Grid ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Expand / Collapse Toggle Button ── */}
        {filteredProjects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline-dark text-xs py-3 px-8 inline-flex items-center gap-2"
            >
              <span>{showAll ? 'Show Less Projects' : `View All Projects (${filteredProjects.length})`}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

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

/* ── Individual Project Card ── */
function ProjectCard({ project: p }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl p-6 sm:p-7 shadow-warm border border-[#EAE3D9] hover:border-[#C85A32]/40 hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Graphic Header (Mini Laptop / Device Frame Preview) */}
      <div className="mb-5">
        <div className={`w-full bg-gradient-to-br ${p.bgAccent} rounded-2xl p-4 sm:p-5 border border-[#EAE3D9] shadow-inner relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500`}>
          
          {/* Top Browser Bar */}
          <div className="w-full bg-[#2C2825] rounded-t-lg p-1.5 shadow-md border border-gray-700">
            <div className="flex items-center gap-1 px-1 pb-1">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <div className="mx-auto text-[9px] font-mono text-gray-400 bg-gray-800 px-3 py-0.5 rounded-full truncate max-w-[170px]">
                {p.demo ? p.demo.replace('https://', '') : p.title.toLowerCase().replace(/ /g, '-')}
              </div>
            </div>
            
            <div className="bg-[#F7F3EE] rounded p-4 text-center min-h-[110px] flex flex-col items-center justify-center space-y-1 border border-gray-300">
              <div className="w-9 h-9 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center text-sm font-bold">
                {p.icon}
              </div>
              <p className="font-serif text-sm font-bold text-[#2C2825] leading-tight">{p.title}</p>
              <p className="text-[10px] text-[#66605B] truncate max-w-[200px]">{p.subtitle}</p>
            </div>
          </div>

          <div className="w-4/5 h-2 bg-gray-400 rounded-b-lg shadow-sm mx-auto -mt-0.5" />
        </div>
      </div>

      {/* Content Details */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Badges Row */}
          <div className="flex items-center gap-2 mb-2.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] bg-[#C85A32]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              {p.category}
            </span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.status === 'Live' ? 'bg-[#464F38]/10 text-[#464F38]' : 'bg-[#8C5E4A]/10 text-[#8C5E4A]'}`}>
              ● {p.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-[#2C2825] group-hover:text-[#C85A32] transition-colors leading-tight">
            {p.title}
          </h3>
          <p className="text-xs font-semibold text-[#66605B] mt-0.5">
            {p.subtitle}
          </p>

          {/* Hackathon Award Badge if available */}
          {p.award && (
            <div className="mt-2.5 inline-flex items-center gap-1.5 bg-[#C85A32] text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

          {/* Description */}
          <p className="text-xs text-[#66605B] leading-relaxed mt-2.5 line-clamp-3">
            {p.desc}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tech.map((t) => (
              <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F7F3EE] border border-[#EAE3D9] text-[#2C2825] font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-3 border-t border-[#EAE3D9] flex items-center gap-3">
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-terracotta text-[11px] py-2 px-4">
                Live Preview
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline-dark text-[11px] py-2 px-4">
                GitHub Repo
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  )
}
