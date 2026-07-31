import React from 'react'
import { motion } from 'framer-motion'

/* Inline SVG for LinkedIn icon */
function LinkedinIcon({ size = 13, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.6 1.6 0 1 0 1.6 1.6c0-.88-.72-1.6-1.6-1.6z" />
    </svg>
  )
}

const experiences = [
  {
    role: 'QA Executive',
    note: 'Promoted from Frontend Developer Intern in recognition of performance & detail orientation',
    company: 'Athenura (Remote)',
    website: 'https://athenura.in',
    linkedin: 'https://www.linkedin.com/company/athenura/',
    period: 'May 2026 – Present',
    badge: 'PROMOTION',
    current: true,
    location: 'Athenura Remote',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    points: [
      'Performed functional, UI, responsive, and cross-browser testing for live client web applications.',
      'Identified, documented, and tracked bugs using GitHub, ensuring timely resolution with developers.',
      'Verified bug fixes through regression testing and validated application functionality before release.',
      'Reviewed project deliverables to ensure compliance with client requirements and quality standards.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    note: 'Core Frontend Engineering Team',
    company: 'Athenura (Remote)',
    website: 'https://athenura.in',
    linkedin: 'https://www.linkedin.com/company/athenura/',
    period: 'Feb 2026 – Present',
    badge: 'INTERNSHIP',
    current: false,
    location: 'Athenura Remote',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      </svg>
    ),
    points: [
      'Built and maintained 10+ responsive UI pages and reusable React components for the live Athenura website.',
      'Translated Figma mockups into pixel-accurate React components using Vite-based architecture.',
      'Contributed to implementing multi-page layouts and resolved 15+ UI bugs.',
      'Collaborated with 3+ developers via Git branching, pull requests, and code reviews on shared repositories.',
    ],
  },
  {
    role: 'On-the-Job Training (Virtual)',
    note: 'Software Development Workflow & Version Control',
    company: 'Dr. D. Y. Patil Arts, Commerce & Science College',
    period: 'Jan 2025 – Feb 2025',
    badge: 'TRAINING',
    current: false,
    location: 'Dr. D. Y. Patil ACS College',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    points: [
      'Completed 6-week structured training in real-world software development workflows and version control.',
      'Gained hands-on experience in guided technical project delivery and team collaboration best practices.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#464F38] text-white relative overflow-hidden" id="experience">
      {/* Background dot texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" fill="none">
          <pattern id="oliveGridExp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#oliveGridExp)" />
        </svg>
      </div>

      {/* Ambient glow accents */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#C85A32]/10 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#F5E4DC]/5 rounded-full blur-3xl -z-0 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#DCE2D3] inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[#DCE2D3]/40" />
            Work experience &amp; milestones
            <span className="w-6 h-px bg-[#DCE2D3]/40" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mt-3">
            Career <span className="italic text-[#F5E4DC]">Journey</span>
          </h2>
          <p className="font-script text-xl sm:text-2xl text-[#DCE2D3] mt-1">
            Frontend Development &amp; QA Engineering at{' '}
            <a
              href="https://athenura.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#F5E4DC] hover:text-white font-sans font-semibold text-base transition-colors"
            >
              Athenura
            </a>
          </p>
        </div>

        {/* ── Career roadmap timeline ── */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-[#C85A32]/60 via-[#DCE2D3]/25 to-[#DCE2D3]/10" />
          {/* Left line — mobile/tablet */}
          <div className="lg:hidden absolute left-[15px] sm:left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-[#C85A32]/60 via-[#DCE2D3]/25 to-[#DCE2D3]/10" />

          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            {experiences.map((exp, idx) => {
              const isRight = idx % 2 === 1
              return (
                <div key={exp.role + idx} className="relative lg:grid lg:grid-cols-2 lg:gap-x-14 items-start">
                  {/* Node on the line */}
                  <span
                    className={`absolute z-10 top-1.5 left-[15px] sm:left-[17px] lg:left-1/2 lg:-translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 ${
                      exp.current ? 'bg-[#C85A32] border-[#C85A32]' : 'bg-[#464F38] border-[#DCE2D3]/70'
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-[#C85A32] animate-ping opacity-60" />
                    )}
                  </span>

                  {/* Card — left slot */}
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className={`pl-10 sm:pl-12 lg:pl-0 ${isRight ? 'lg:col-start-1 lg:row-start-1 lg:invisible' : ''}`}
                  >
                    {!isRight && <ExperienceCard exp={exp} align="right" />}
                  </motion.div>

                  {/* Card — right slot */}
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className={`${isRight ? 'pl-10 sm:pl-12 lg:pl-0' : 'hidden lg:block'}`}
                  >
                    {isRight && <ExperienceCard exp={exp} align="left" />}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Organic bottom wave separator */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-12 text-[#F7F3EE] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

/* ── Experience Card ── */
function ExperienceCard({ exp }) {
  return (
    <div
      className={`bg-[#343B29] rounded-3xl p-5 sm:p-6 border ${
        exp.current ? 'border-[#C85A32]/60' : 'border-[#626C50]'
      } shadow-lg hover:border-[#C85A32] transition-colors relative`}
    >
      {exp.current && (
        <span className="absolute -top-3 left-5 sm:left-6 bg-[#C85A32] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
          Current role
        </span>
      )}

      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 pt-1">
        <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C85A32]/90 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          {exp.icon}
          {exp.badge}
        </span>
        <span className="text-[11px] sm:text-xs text-[#DCE2D3] font-mono">{exp.period}</span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
      
      <div className="mt-1 flex items-center gap-3 flex-wrap">
        {exp.website ? (
          <a 
            href={exp.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[11px] sm:text-xs font-semibold text-[#F5E4DC] hover:text-white transition-colors inline-flex items-center gap-1.5 hover:underline"
            title="Visit Athenura Official Website"
          >
            <span>{exp.company}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C85A32]">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <p className="text-[11px] sm:text-xs font-semibold text-[#F5E4DC]">{exp.company}</p>
        )}

        {exp.linkedin && (
          <a
            href={exp.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium text-[#70B5F9] hover:text-white transition-colors inline-flex items-center gap-1 hover:underline"
            title="Athenura Official LinkedIn Company Page"
          >
            <LinkedinIcon size={11} />
            <span>LinkedIn Profile</span>
          </a>
        )}
      </div>

      <p className="text-[11.5px] sm:text-xs italic text-[#DCE2D3]/80 mt-2.5 border-b border-[#626C50] pb-3">
        "{exp.note}"
      </p>

      <ul className="space-y-2 mt-4 text-[12.5px] sm:text-xs text-[#DCE2D3] leading-relaxed">
        {exp.points.map((pt, pIdx) => (
          <li key={pIdx} className="flex items-start gap-2">
            <span className="text-[#F5E4DC] font-bold mt-0.5 shrink-0">•</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      <div className="pt-5 mt-4 border-t border-[#626C50]/60 flex items-center justify-between text-[10.5px] sm:text-[11px] text-[#DCE2D3]">
        <span>Verified role</span>
        <div className="flex items-center gap-2">
          {exp.website && (
            <a 
              href={exp.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C85A32] hover:text-[#F5E4DC] font-mono text-[10px] underline tracking-tight"
            >
              athenura.in ↗
            </a>
          )}
          <span className="text-[#F5E4DC] font-medium text-right">{exp.location}</span>
        </div>
      </div>
    </div>
  )
}