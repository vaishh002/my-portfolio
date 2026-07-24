import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'QA Executive',
    note: 'Promoted from Frontend Developer Intern in recognition of performance & detail orientation',
    company: 'Athenura (Remote)',
    period: 'May 2026 – Present',
    badge: 'PROMOTION',
    location: 'Athenura Remote',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    period: 'Feb 2026 – Present',
    badge: 'INTERNSHIP',
    location: 'Athenura Remote',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      </svg>
    ),
    points: [
      'Built and maintained 10+ responsive UI pages and reusable React components for the live Athenura website.',
      'Translated Figma mockups into pixel-accurate React components using Vite-based architecture.',
      'Contributed to the Jay-Bhadra team project — implemented multi-page layouts and resolved 15+ UI bugs.',
      'Collaborated with 3+ developers via Git branching, pull requests, and code reviews on shared repositories.',
    ],
  },
  {
    role: 'On-the-Job Training (Virtual)',
    note: 'Software Development Workflow & Version Control',
    company: 'Dr. D. Y. Patil Arts, Commerce & Science College',
    period: 'Jan 2025 – Feb 2025',
    badge: 'TRAINING',
    location: 'Dr. D. Y. Patil ACS College',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <section className="py-24 bg-[#464F38] text-white relative overflow-hidden" id="experience">
      
      {/* Background Decorative Vector Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" fill="none">
          <pattern id="oliveGridExp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#oliveGridExp)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Banner Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#DCE2D3]">
            — WORK EXPERIENCE &amp; MILESTONES —
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mt-2">
            Career <span className="italic text-[#F5E4DC]">Journey</span>
          </h2>
          <p className="font-script text-2xl text-[#DCE2D3] mt-1">
            Delivering quality code and continuous growth
          </p>
        </div>

        {/* PROMINENT VECTOR ARTWORK: Career Roadmap Connector Line SVG */}
        <div className="hidden md:block w-full max-w-4xl mx-auto mb-6 text-[#F5E4DC]/40">
          <svg width="100%" height="24" viewBox="0 0 800 24" fill="none">
            <path d="M50 12 H750" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="50" cy="12" r="6" fill="#C85A32" />
            <circle cx="400" cy="12" r="6" fill="#C85A32" />
            <circle cx="750" cy="12" r="6" fill="#C85A32" />
          </svg>
        </div>

        {/* Experience Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#343B29] rounded-3xl p-6 border border-[#626C50] flex flex-col justify-between shadow-lg hover:border-[#C85A32] transition-colors relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C85A32] text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    {exp.icon}
                    {exp.badge}
                  </span>
                  <span className="text-xs text-[#DCE2D3] font-mono">
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-xs font-semibold text-[#F5E4DC] mt-1">
                  {exp.company}
                </p>
                <p className="text-xs italic text-[#DCE2D3]/80 mt-2 border-b border-[#626C50] pb-3">
                  "{exp.note}"
                </p>

                <ul className="space-y-2 mt-4 text-xs text-[#DCE2D3] leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#F5E4DC] font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Footer Location Label */}
              <div className="pt-6 mt-4 border-t border-[#626C50]/60 flex items-center justify-between text-[11px] text-[#DCE2D3]">
                <span>Verified Role</span>
                <span className="text-[#F5E4DC] font-medium">{exp.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Organic Bottom Wave Separator */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#F7F3EE] fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
