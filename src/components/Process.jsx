import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Analyzing requirements, project scope, target audience, and feature roadmap.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'PLAN',
    desc: 'Designing component hierarchy, data models, API endpoints, and Git strategy.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'Translating Figma mockups into pixel-accurate, accessible React UI layouts.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'DEVELOP',
    desc: 'Writing clean ES6+ JavaScript, React hooks, REST API integrations & state logic.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'LAUNCH & QA',
    desc: 'Cross-browser testing, Vercel deployment, bug resolution, and live monitoring.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-[#EFE8DF] relative overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C85A32] font-sans">
            — MY PROCESS —
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#2C2825] mt-2">
            Development <span className="italic text-[#C85A32]">Workflow</span>
          </h2>
          <p className="font-script text-2xl text-[#66605B] max-w-md mx-auto mt-1">
            Structured steps to deliver quality web software
          </p>
        </div>

        {/* PROMINENT VECTOR ARTWORK: Continuous Vector Workflow Path Connecting All 5 Steps */}
        <div className="hidden lg:block w-full max-w-4xl mx-auto mb-4 text-[#C85A32]/40">
          <svg width="100%" height="30" viewBox="0 0 1000 30" fill="none">
            <path d="M80 15 C 200 0, 300 30, 480 15 C 600 0, 750 30, 920 15" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <polygon points="925,15 915,10 915,20" fill="currentColor" />
          </svg>
        </div>

        {/* 5 Organic Pebble Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Pebble Frame with Custom SVG Vector Illustration */}
              <div className="w-20 h-20 rounded-[2.5rem] bg-[#F7F3EE] border border-[#EAE3D9] flex items-center justify-center text-[#C85A32] mb-4 shadow-sm group-hover:border-[#C85A32] group-hover:bg-[#F5E4DC] transition-all duration-300 transform group-hover:-translate-y-1">
                {s.icon}
              </div>

              <span className="text-xs font-bold tracking-widest text-[#C85A32] font-mono">
                {s.num}
              </span>
              
              <h3 className="font-serif text-base font-bold text-[#2C2825] uppercase tracking-wider mt-1 mb-2">
                {s.title}
              </h3>

              <p className="text-xs text-[#66605B] leading-relaxed max-w-[200px]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cursive Tagline Banner with Hand-drawn Vector Swirl Underline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-right relative"
        >
          <p className="font-script text-4xl md:text-5xl text-[#C85A32] italic">
            Clean code is good business
          </p>
          <svg className="w-52 h-4 ml-auto mt-1 text-[#C85A32]" viewBox="0 0 220 16" fill="none">
            <path d="M4 12 C 50 2, 150 16, 216 6 C 180 14, 80 4, 30 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>

      </div>

      {/* Organic Bottom Wave Separator Transitioning to Education Section (#F7F3EE Cream) */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#F7F3EE] fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
