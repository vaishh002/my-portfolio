import React from 'react'
import { motion } from 'framer-motion'

const education = [
  {
    degree: 'M.Sc. Computer Science',
    college: 'Dr. D.Y. Patil Arts, Commerce & Science, Pune',
    period: '2024 – April 2026 (Ongoing)',
    status: 'Ongoing Master Degree',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    degree: 'B.Sc. Computer Science',
    college: 'Pratibha College of Commerce & Computer Science Studies, Pune',
    period: 'Graduated April 2024',
    status: 'Graduated Degree',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
]

const achievements = [
  {
    title: 'Hackathon Finalist — 5th Place',
    desc: 'Built and presented SkillBridge AI (React.js + Node.js + MongoDB + Gemini API) among 30+ competing teams within a 48-hour timeline (June 2026).',
    badge: 'HACKATHON WINNER',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
  },
  {
    title: 'Design Fundamentals with AI',
    desc: 'Earned virtual certification from Adobe focusing on design principles and AI workflow integration.',
    badge: 'ADOBE CERTIFICATION',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: 'Promoted to QA Executive',
    desc: 'Recognized at Athenura for outstanding performance, attention to detail, and quality engineering contributions.',
    badge: 'CAREER PROMOTION',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function Education() {
  return (
    <section className="py-24 bg-[#F7F3EE] relative overflow-hidden" id="education">
      
      {/* PROMINENT VECTOR ARTWORK: Academic Crest & Diploma Scroll Background Art */}
      <div className="absolute top-12 right-12 text-[#C85A32]/10 pointer-events-none hidden lg:block">
        <svg width="160" height="160" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M100 30 L160 60 L100 90 L40 60 Z" stroke="currentColor" strokeWidth="3" />
          <path d="M60 80 V130 C60 150 140 150 140 130 V80" stroke="currentColor" strokeWidth="2" />
          <path d="M160 60 V120" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C85A32] font-sans">
            — ACADEMICS &amp; ACHIEVEMENTS —
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#2C2825] mt-2">
            Education &amp; <span className="italic text-[#C85A32]">Honors</span>
          </h2>
          <p className="font-script text-2xl text-[#66605B] max-w-md mx-auto mt-1">
            Strong computer science foundation and recognized performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2C2825] flex items-center gap-2">
              <span>Academic Degrees</span>
            </h3>

            {education.map((e, idx) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-warm relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center flex-shrink-0">
                    {e.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C85A32]/10 text-[#C85A32] px-2.5 py-0.5 rounded-full">
                      {e.status}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#2C2825] mt-2">
                      {e.degree}
                    </h4>
                    <p className="text-xs text-[#66605B] mt-1 font-semibold">
                      {e.college}
                    </p>
                    <p className="text-xs text-[#C85A32] font-mono mt-2">
                      {e.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements & Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2C2825]">
              Certifications &amp; Awards
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-[#EAE3D9] shadow-sm flex items-start gap-4 hover:border-[#C85A32]/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#464F38]/10 text-[#464F38] flex items-center justify-center flex-shrink-0">
                    {ach.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-widest uppercase bg-[#464F38] text-white px-2 py-0.5 rounded-full">
                      {ach.badge}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2C2825] mt-1">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[#66605B] leading-relaxed mt-1">
                      {ach.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Organic Bottom Wave Separator Transitioning to Contact Section (#C85A32 Terracotta) */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#C85A32] fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
