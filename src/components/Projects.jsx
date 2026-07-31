import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Trophy,
  Sparkles,
  ListChecks,
  CalendarDays,
  GraduationCap,
  ShoppingBag,
  Eye,
  ExternalLink,
  X,
} from 'lucide-react'
import './Projects.css'

/* Inline SVG for GitHub icon */
function GithubIcon({ size = 14, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  )
}

const categories = ['All Work', 'AI & Web', 'Enterprise ERP', 'Web Apps', 'Events & LMS']

const projects = [
  {
    id: 'comfy-sportware',
    index: '01',
    title: 'Comfy Sportware',
    subtitle: 'E-commerce & Sports Management Platform',
    desc: 'A comprehensive e-commerce and sports management platform featuring category showcases, team gear collections, product highlights, customer testimonials, and custom bulk pricing requests.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    github: 'https://github.com/Yash21743/Athenura_sportwaer.git',
    demo: 'https://confy-sportware.vercel.app/',
    category: 'Web Apps',
    image: '/projects/comfy-sportware.png',
    icon: ShoppingBag,
    accent: '#00A896',
  },
  {
    id: 'skillbridge-ai',
    index: '02',
    title: 'SkillBridge AI',
    subtitle: 'AI Career Guidance Platform',
    desc: 'AI-powered career guidance platform with personalized learning paths, resume analysis, ATS score checker powered by Gemini API, and role-specific interview preparation.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    status: 'Live',
    award: 'Hackathon · 5th place, June 2026',
    github: 'https://github.com/vaishh002/SkillBridgeAI',
    demo: 'https://skill-bridge-ai-theta.vercel.app',
    category: 'AI & Web',
    image: '/projects/skillbridge-ai.png',
    icon: Sparkles,
    accent: '#C85A32',
  },
  {
    id: 'task-management',
    index: '03',
    title: 'Task Management System',
    subtitle: 'Full-Stack Role-Based Workflow System',
    desc: 'Role-based project management portal for modern organizations. Features instant real-time DOM updates, clear role hierarchies (Admin, Manager, Team Lead, Intern), daily reporting, and performance analytics dashboards.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    status: 'Live',
    github: 'https://github.com/vaishh002/TaskManagementSystem',
    demo: 'https://task-management-system-zeta-ten.vercel.app',
    category: 'Enterprise ERP',
    image: '/projects/task-management.png',
    icon: ListChecks,
    accent: '#464F38',
  },
  {
    id: 'athenura-hackathon',
    index: '04',
    title: 'ATH Hackathon 2026',
    subtitle: 'Hackathon & Innovation Platform',
    desc: 'Full-featured hackathon event portal with 4-step builder guide, domain tracks (AI, FinTech, SpaceTech, HealthTech), builder testimonials, and real-time registration stats.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js'],
    status: 'Live',
    github: 'https://github.com/bimalgautam1/Hackathon-Athenura',
    demo: 'https://hackathon.athenura.in/hackathons',
    category: 'Events & LMS',
    image: '/projects/athenura.png',
    icon: CalendarDays,
    accent: '#028090',
  },
  {
    id: 'vaidehi-academy',
    index: '05',
    title: 'Vaidehi Academy',
    subtitle: 'Sanskrit Learning Management System',
    desc: 'Responsive learning management system dedicated to Sanskrit education. Features online/offline learning mode selection, course listings, faculty profiles, and student feedback modules.',
    tech: ['React.js', 'Vite', 'Node.js', 'MongoDB'],
    status: 'Live',
    github: 'https://github.com/AtharvBhorkar/kaumudi-academy',
    demo: 'https://vaidehiiacademy.vercel.app/',
    category: 'Events & LMS',
    image: '/projects/vaidehi-academy.png',
    icon: GraduationCap,
    accent: '#C85A32',
  },
  {
    id: 'aman-travels',
    index: '06',
    title: 'Aman Tour & Travels Blog',
    subtitle: 'Travel & Vehicle Booking Platform',
    desc: 'Responsive travel blog and booking site featuring ride selections, popular getaway packages, smart travel guides, guest reviews, and upcoming tour departures.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js'],
    status: 'Live',
    github: 'https://github.com/AtharvBhorkar/ATAT.git',
    demo: 'https://www.amantourandtravel.in/',
    category: 'Web Apps',
    image: '/projects/aman-travels.png',
    icon: CalendarDays,
    accent: '#8C2D19',
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Work')
  const [selectedModalProject, setSelectedModalProject] = useState(null)

  const filteredProjects =
    activeTab === 'All Work' ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <section className="py-20 sm:py-28 bg-[#EFE8DF] relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C85A32] font-sans inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[#C85A32]/50" />
            Selected work
            <span className="w-6 h-px bg-[#C85A32]/50" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2825] mt-3">
            Featured <span className="italic text-[#C85A32]">Projects</span>
          </h2>
          <p className="font-script text-xl sm:text-2xl text-[#66605B] max-w-lg mx-auto mt-1">
            Hover over any project screenshot to auto-scroll the page view, or click the eye icon for a full preview.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-14 sm:mb-20 -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center pb-1">
            {categories.map((cat) => {
              const isActive = activeTab === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#66605B] bg-white/70 hover:bg-white hover:text-[#2C2825] border border-[#EAE3D9]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-[#C85A32] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{cat}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Editorial alternating-row list */}
        <div className="flex flex-col gap-16 sm:gap-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                reversed={i % 2 === 1}
                onOpenModal={() => setSelectedModalProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-sm text-[#66605B] py-16">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox Screenshot Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <ProjectModal
            project={selectedModalProject}
            onClose={() => setSelectedModalProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Bottom wave separator */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-12 text-[#464F38] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

/* ── Editorial Row: Screenshot with hover scroll + content ── */
function ProjectRow({ project: p, reversed, onOpenModal }) {
  const Icon = p.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        reversed ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {/* Interactive Screenshot Box */}
      <div className={`lg:col-span-6 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="project-card-visual group relative">
          {/* Full vertical screenshot image */}
          <img
            src={p.image}
            alt={`${p.title} Full Screenshot`}
            className="project-screenshot-img"
            loading="lazy"
          />

          {/* Dark Glass Overlay with Eye & External Link icons */}
          <div className="project-card-overlay">
            {/* Eye Icon: View Full Screenshot Modal */}
            <button
              onClick={onOpenModal}
              aria-label={`View full screenshot of ${p.title}`}
              title="View Full Screenshot"
              className="project-action-btn project-action-btn--eye"
            >
              <Eye size={22} />
            </button>

            {/* External Link Icon: Visit Live Site */}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site for ${p.title}`}
                title="Visit Live Site"
                className="project-action-btn project-action-btn--link"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>

          {/* Top badge indicator */}
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2C2825] shadow-sm border border-white/40 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Project
            </span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className={`lg:col-span-6 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="font-serif text-3xl sm:text-4xl text-[#2C2825]/20 font-bold leading-none shrink-0 pt-1">
            {p.index}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${p.accent}14`, color: p.accent }}
              >
                {p.category}
              </span>
              <span
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                  p.status === 'Live' ? 'bg-[#464F38]/10 text-[#464F38]' : 'bg-[#8C5E4A]/10 text-[#8C5E4A]'
                }`}
              >
                ● {p.status}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2825] leading-tight flex items-center gap-2.5">
              {p.title}
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${p.accent}14`, color: p.accent }}
              >
                <Icon size={16} />
              </span>
            </h3>
            <p className="text-xs font-semibold text-[#66605B] mt-1 tracking-wide">{p.subtitle}</p>

            {p.award && (
              <div className="mt-3 inline-flex items-center gap-1.5 bg-[#C85A32] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                <Trophy size={12} />
                <span>{p.award}</span>
              </div>
            )}

            <p className="text-sm text-[#66605B] leading-relaxed mt-4">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-white border border-[#EAE3D9] text-[#2C2825] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6">
              {/* Eye Button for quick preview */}
              <button
                onClick={onOpenModal}
                className="px-4 py-2.5 rounded-xl border border-[#2C2825]/20 hover:border-[#2C2825] bg-white text-[#2C2825] text-[12px] font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:shadow-sm"
              >
                <Eye size={15} />
                View Screenshot
              </button>

              {/* Live Preview Button */}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-terracotta text-[12px] py-2.5 px-5 inline-flex items-center gap-1.5"
                >
                  Live preview
                  <ArrowUpRight size={14} />
                </a>
              )}

              {/* GitHub Button */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark text-[12px] py-2.5 px-5 inline-flex items-center gap-1.5"
                >
                  <GithubIcon size={13} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Lightbox Modal Component for Full High-Res Screenshot View ── */
function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 16 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-[#FBF9F5] w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#EAE3D9] z-50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE3D9] bg-white shrink-0">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${project.accent}14`, color: project.accent }}
            >
              {project.category}
            </span>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C2825] leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-[#66605B]">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terracotta text-xs py-2 px-4 inline-flex items-center gap-1.5 hidden sm:inline-flex"
              >
                <span>Live Site</span>
                <ExternalLink size={14} />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-[#EAE3D9]/60 hover:bg-[#C85A32] hover:text-white text-[#2C2825] flex items-center justify-center transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Full Screenshot */}
        <div className="overflow-y-auto modal-screenshot-scroll p-4 sm:p-6 flex-1 bg-[#EFE8DF]/50">
          <div className="max-w-4xl mx-auto">
            <img
              src={project.image}
              alt={`${project.title} Full Page Screenshot`}
              className="w-full h-auto rounded-2xl shadow-md border border-[#EAE3D9] block"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}