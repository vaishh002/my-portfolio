import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Trophy,
  Sparkles,
  Boxes,
  ListChecks,
  CalendarDays,
  GraduationCap,
} from 'lucide-react'

/* lucide-react dropped brand/logo icons (Github, Twitter, etc.) in recent
   versions, so the GitHub mark is a small inline SVG instead. */
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
    id: 'skillbridge-ai',
    index: '01',
    title: 'SkillBridge AI',
    subtitle: 'AI Career Platform',
    desc: 'AI-powered career guidance platform with resume analysis, an ATS score checker built on the Gemini API, and a role-specific interview question generator.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    status: 'Live',
    award: 'Hackathon · 5th place, June 2026',
    github: 'https://github.com/vaishh002/SkillBridgeAI',
    demo: 'https://skill-bridge-ai-theta.vercel.app',
    category: 'AI & Web',
    icon: Sparkles,
    accent: '#C85A32',
    pattern: 'circuit',
  },
  {
    id: 'vibha-erp',
    index: '02',
    title: 'Vibha ERP',
    subtitle: 'Inventory & Logistics Platform',
    desc: 'Co-leading an enterprise-grade ERP with 5+ modules — inventory, vendor, customer, production, and master data. 20+ reusable components cut duplicate code across team branches.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Django REST', 'MySQL'],
    status: 'In Progress',
    github: 'https://github.com/tejaspandav8421/Inventory-Management',
    category: 'Enterprise ERP',
    icon: Boxes,
    accent: '#464F38',
    pattern: 'grid',
  },
  {
    id: 'task-management',
    index: '03',
    title: 'Task Management System',
    subtitle: 'Full-Stack Task Manager',
    desc: 'Led a 3-member team to build a browser-based task manager with instant, real-time DOM updates and event-driven state management — no page reloads, ever.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JavaScript'],
    status: 'Live',
    github: 'https://github.com/vaishh002/TaskManagementSystem',
    demo: 'https://task-management-system-zeta-ten.vercel.app',
    category: 'Web Apps',
    icon: ListChecks,
    accent: '#C85A32',
    pattern: 'checklist',
  },
  {
    id: 'hackathon-website',
    index: '04',
    title: 'Athenura',
    subtitle: 'Hackathon Event Website',
    desc: 'A 6-page responsive hackathon site — home, about, events, registration, team, contact — serving 100+ live visitors, built from 12+ reusable React components.',
    tech: ['React.js', 'Vite', 'Tailwind CSS'],
    status: 'Live',
    github: 'https://github.com/bimalgautam1/Hackathon-Athenura',
    demo: 'https://hackathon.athenura.in/hackathons',
    category: 'Events & LMS',
    icon: CalendarDays,
    accent: '#464F38',
    pattern: 'radial',
  },
  {
    id: 'kaumudi-academy',
    index: '05',
    title: 'Kaumudi Academy',
    subtitle: 'Learning Management System',
    desc: 'Responsive UI pages and reusable frontend components for an LMS — navigation, course listings, and user dashboards — shipped inside a 2-week sprint.',
    tech: ['React.js', 'Vite', 'Node.js', 'MongoDB'],
    status: 'In Progress',
    github: 'https://github.com/AtharvBhorkar/kaumudi-academy',
    category: 'Events & LMS',
    icon: GraduationCap,
    accent: '#C85A32',
    pattern: 'layers',
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Work')

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
            Crafting real-world applications from AI platforms to enterprise ERPs
          </p>
        </div>

        {/* Category Filter Tabs — horizontally scrollable on mobile */}
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
              <ProjectRow key={project.id} project={project} reversed={i % 2 === 1} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-sm text-[#66605B] py-16">
            No projects in this category yet.
          </p>
        )}
      </div>

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

/* ── Editorial Row: bespoke vector art + content, alternating sides ── */
function ProjectRow({ project: p, reversed }) {
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
      {/* Visual */}
      <div className={`lg:col-span-5 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <ProjectGlyph project={p} />
      </div>

      {/* Content */}
      <div className={`lg:col-span-7 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="font-serif text-3xl sm:text-4xl text-[#2C2825]/15 font-bold leading-none shrink-0 pt-1">
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
                <Icon size={15} />
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

/* ── Bespoke generative vector art per project (no stock photography) ── */
function ProjectGlyph({ project: p }) {
  const Icon = p.icon
  const uid = p.id

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative aspect-[4/3] rounded-3xl border border-[#EAE3D9] shadow-warm overflow-hidden"
      style={{ backgroundColor: '#FBF9F5' }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`dots-${uid}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill={p.accent} opacity="0.14" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#dots-${uid})`} />

        {p.pattern === 'circuit' && (
          <g stroke={p.accent} strokeWidth="1.4" fill="none" opacity="0.5">
            <path d="M40 240 h70 v-60 h60 v-80 h90" />
            <path d="M360 60 h-60 v70 h-80 v50 h-60" />
            <circle cx="40" cy="240" r="4" fill={p.accent} stroke="none" />
            <circle cx="170" cy="100" r="4" fill={p.accent} stroke="none" />
            <circle cx="260" cy="230" r="4" fill={p.accent} stroke="none" />
            <circle cx="360" cy="60" r="4" fill={p.accent} stroke="none" />
            <circle cx="100" cy="180" r="4" fill={p.accent} stroke="none" />
          </g>
        )}

        {p.pattern === 'grid' && (
          <g opacity="0.55">
            {Array.from({ length: 4 }).map((_, r) =>
              Array.from({ length: 5 }).map((_, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={60 + c * 60}
                  y={60 + r * 50}
                  width="42"
                  height="32"
                  rx="5"
                  fill={(r + c) % 3 === 0 ? p.accent : 'none'}
                  fillOpacity={(r + c) % 3 === 0 ? 0.18 : 0}
                  stroke={p.accent}
                  strokeOpacity="0.4"
                  strokeWidth="1.2"
                />
              ))
            )}
          </g>
        )}

        {p.pattern === 'checklist' && (
          <g opacity="0.6">
            {[80, 130, 180, 230].map((y, i) => (
              <g key={y}>
                <rect
                  x="70"
                  y={y}
                  width="20"
                  height="20"
                  rx="6"
                  fill={i < 3 ? p.accent : 'none'}
                  fillOpacity={i < 3 ? 0.85 : 0}
                  stroke={p.accent}
                  strokeWidth="1.5"
                />
                {i < 3 && (
                  <path
                    d={`M75 ${y + 10} l4 4 l8 -8`}
                    stroke="#FBF9F5"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                <rect x="104" y={y + 6} width={150 - i * 18} height="7" rx="3.5" fill={p.accent} fillOpacity="0.25" />
              </g>
            ))}
          </g>
        )}

        {p.pattern === 'radial' && (
          <g opacity="0.5">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const x2 = 200 + Math.cos(angle) * 110
              const y2 = 150 + Math.sin(angle) * 110
              return (
                <line
                  key={i}
                  x1="200"
                  y1="150"
                  x2={x2}
                  y2={y2}
                  stroke={p.accent}
                  strokeWidth="1.4"
                  strokeOpacity={0.15 + (i % 3) * 0.12}
                />
              )
            })}
            <circle cx="200" cy="150" r="34" fill={p.accent} fillOpacity="0.14" stroke={p.accent} strokeWidth="1.4" />
          </g>
        )}

        {p.pattern === 'layers' && (
          <g opacity="0.6">
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x={90 - i * 6}
                y={90 + i * 34}
                width="220"
                height="24"
                rx="7"
                fill={p.accent}
                fillOpacity={0.1 + i * 0.08}
                stroke={p.accent}
                strokeOpacity="0.4"
                strokeWidth="1.2"
              />
            ))}
          </g>
        )}
      </svg>

      {/* Center emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: '#FFFFFF', color: p.accent }}
        >
          <Icon size={28} strokeWidth={1.6} />
        </div>
      </div>

      {/* Corner frame accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: `${p.accent}55` }} />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: `${p.accent}55` }} />
    </motion.div>
  )
}