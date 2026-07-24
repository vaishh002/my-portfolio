import React from 'react'
import { motion } from 'framer-motion'

const capabilities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    vectorEmblem: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
        <ellipse cx="50" cy="50" rx="30" ry="12" />
        <ellipse cx="50" cy="50" rx="12" ry="30" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    ),
    title: 'CUSTOM WEB APPLICATIONS',
    desc: 'Building responsive, scalable web platforms with React.js, Node.js, Express, and MongoDB.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Component Architecture'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
    vectorEmblem: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="30" x2="90" y2="70" />
        <line x1="90" y1="30" x2="10" y2="70" />
      </svg>
    ),
    title: 'FRONTEND ARCHITECTURE',
    desc: 'Pixel-perfect Figma translations with Tailwind CSS, JavaScript ES6+, TypeScript, and Vite.',
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    vectorEmblem: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" />
        <circle cx="50" cy="55" r="18" />
        <path d="M50 37 L50 73" />
        <path d="M32 55 L68 55" />
      </svg>
    ),
    title: 'AI & DATABASE INTEGRATION',
    desc: 'Integrating Gemini AI API services, JWT authentication, and MySQL relational schemas.',
    skills: ['Gemini API', 'JWT Auth', 'MySQL', 'CRUD Operations', 'Agile Collaboration'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    vectorEmblem: (
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 10 L80 25 L80 55 C80 75 50 90 50 90 C50 90 20 75 20 55 L20 25 Z" />
        <path d="M35 48 L45 58 L65 38" strokeWidth="2.5" />
      </svg>
    ),
    title: 'QUALITY ASSURANCE & TESTING',
    desc: 'Ensuring cross-browser compatibility, UI testing, bug tracking, and compliance standards.',
    skills: ['Manual Testing', 'UI Testing', 'Responsive Testing', 'Cross-Browser', 'Bug Reporting'],
  },
]

export default function Skills() {
  return (
    <section className="py-24 bg-[#F7F3EE] relative overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C85A32] font-sans">
            — WHAT I DO —
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#2C2825] mt-2">
            Technical <span className="italic text-[#C85A32]">Capabilities</span>
          </h2>
          <p className="font-script text-2xl text-[#66605B] max-w-md mx-auto mt-1">
            End-to-end development tailored to real user needs
          </p>
        </div>

        {/* 4 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="card-warm flex flex-col justify-between relative overflow-hidden group shadow-md"
            >
              {/* PROMINENT VECTOR ARTWORK: Custom Vector Tech Stack Emblem Artwork */}
              <div className="absolute -right-4 -bottom-4 text-[#C85A32]/10 pointer-events-none group-hover:scale-125 group-hover:text-[#C85A32]/20 transition-all duration-500">
                {c.vectorEmblem}
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center mb-4 group-hover:bg-[#C85A32] group-hover:text-white transition-colors duration-300">
                  {c.icon}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2C2825] tracking-tight mb-2">
                  {c.title}
                </h3>
                
                <p className="text-xs text-[#66605B] leading-relaxed mb-4">
                  {c.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#EAE3D9] relative z-10">
                {c.skills.map((s) => (
                  <span key={s} className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EFE8DF] text-[#2C2825] font-medium group-hover:bg-[#F5E4DC] transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Organic Bottom Wave Separator Transitioning to Process Section (#EFE8DF Sand) */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#EFE8DF] fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
