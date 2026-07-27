import React from 'react'
import { motion } from 'framer-motion'

/* ── SVG Icons for Soft Skills ───────────────────────────── */
const skillIcons = {
  search: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  brain: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2 4 4 0 0 1 4-4z" />
      <path d="M8 8v2a4 4 0 0 0 8 0V8" />
      <path d="M8 14a4 4 0 0 0 4 4 4 4 0 0 0 4-4" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </svg>
  ),
  message: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  users: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  book: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  lightbulb: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  ),
  refresh: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
}

/* ── Soft Skills ─────────────────────────────────────────── */
const softSkills = [
  { name: 'Attention to Detail', icon: skillIcons.search },
  { name: 'Analytical Thinking', icon: skillIcons.brain },
  { name: 'Clear Communication', icon: skillIcons.message },
  { name: 'Team Collaboration', icon: skillIcons.users },
  { name: 'Willingness to Learn', icon: skillIcons.book },
  { name: 'Quality Engineering', icon: skillIcons.check },
  { name: 'Problem Solving', icon: skillIcons.lightbulb },
  { name: 'Agile Workflow', icon: skillIcons.refresh },
]

/* ── Contact Details ─────────────────────────────────────── */
const contactDetails = [
  {
    label: 'Pune, Maharashtra, India',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'shindevaishnavi022003@gmail.com',
    href: 'mailto:shindevaishnavi022003@gmail.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: '+91 9860592488',
    href: 'tel:+919860592488',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Dr.D.Y. Patil Arts, Commerce and Science College, Pune',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
]

/* ── Milestones — the section's signature element ───────── */
const milestones = [
  {
    year: '2026',
    title: 'Joined Athenura as Frontend Intern',
    desc: 'Started hands-on industry work building React.js interfaces for live client projects.',
    accent: '#C85A32',
  },
  {
    year: '2026',
    title: '5th place · 48-hour AI Hackathon',
    desc: 'Placed among the top teams out of 30+ competitors, building an AI career-guidance platform.',
    accent: '#464F38',
  },
  {
    year: '2026',
    title: 'Promoted to QA Executive',
    desc: 'Moved from Frontend Intern to owning quality assurance, cross-browser testing, and bug tracking.',
    accent: '#C85A32',
  },
  {
    year: '2026',
    title: 'M.Sc. Computer Science',
    desc: 'Deepening core CS foundations at Dr.D.Y. Patil Arts, Commerce and Science College, Pune.',
    accent: '#464F38',
  },
]

/* ── Framer Motion Variants ──────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ── MAIN COMPONENT ──────────────────────────────────────── */
export default function About() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F7F3EE] relative overflow-hidden" id="about">
      {/* Decorative botanical flourish */}
      <div className="absolute top-16 right-8 text-[#C85A32]/15 pointer-events-none hidden lg:block">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
          <path d="M20 180 Q 100 100 180 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 140 C 40 110, 20 120, 30 90 C 50 90, 70 120, 60 140 Z" fill="currentColor" opacity="0.35" />
          <path d="M100 100 C 80 70, 60 80, 70 50 C 90 50, 110 80, 100 100 Z" fill="currentColor" opacity="0.35" />
          <path d="M140 60 C 120 30, 100 40, 110 10 C 130 10, 150 40, 140 60 Z" fill="currentColor" opacity="0.35" />
        </svg>
      </div>

      {/* Decorative dot grid */}
      <div className="absolute bottom-16 left-8 opacity-[0.06] pointer-events-none hidden md:block">
        <svg width="140" height="140" fill="none">
          <pattern id="aboutDotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.5" fill="#C85A32" />
          </pattern>
          <rect width="140" height="140" fill="url(#aboutDotGrid)" />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-14 sm:mb-16" variants={fadeUp}>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C85A32] font-sans flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C85A32" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Who I am
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2825] mt-3">
            About <span className="italic text-[#C85A32]">Me</span>
          </h2>
          <p className="font-script text-xl sm:text-2xl text-[#66605B] max-w-lg mx-auto mt-1">
            Bridging frontend design precision with quality assurance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ═══ LEFT — Profile card (sticky on desktop) ═══ */}
          <motion.div className="lg:col-span-5 lg:sticky lg:top-24" variants={fadeLeft}>
            <div className="bg-white rounded-3xl border border-[#EAE3D9] shadow-warm p-6 sm:p-7 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#C85A32]/[0.06] pointer-events-none" />

              {/* Avatar + name */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-[#EAE3D9] relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#C85A32]/25 shadow-md shrink-0 bg-[#F7F3EE]">
                  <img
                    src="/profile.jpg"
                    alt="Vaishnavi Shinde"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C2825] leading-tight">
                    Vaishnavi Shinde
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#C85A32] mt-1">
                    Frontend Developer &amp; QA Executive
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#66605B] mt-0.5 font-medium">
                    M.Sc. Computer Science
                  </p>
                </div>
              </div>

              {/* Contact list */}
              <div className="space-y-3">
                {contactDetails.map((item, idx) => {
                  const Wrapper = item.href ? 'a' : 'div'
                  const wrapperProps = item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith('mailto') ? undefined : '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {}
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + idx * 0.07, duration: 0.4 }}
                    >
                      <Wrapper
                        {...wrapperProps}
                        className={`flex items-center gap-3 text-[13px] sm:text-sm text-[#66605B] ${
                          item.href ? 'hover:text-[#C85A32] transition-colors cursor-pointer' : ''
                        }`}
                      >
                        <span className="w-9 h-9 rounded-xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center shrink-0">
                          {item.icon}
                        </span>
                        <span className={item.label.includes('@') ? 'break-all' : ''}>{item.label}</span>
                      </Wrapper>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social links */}
              <div className="pt-5 mt-5 border-t border-[#EAE3D9] flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/vaishh002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C2825] text-white text-[11px] font-semibold hover:bg-[#C85A32] transition-colors shadow-sm"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-shinde02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white text-[11px] font-semibold hover:bg-[#004182] transition-colors shadow-sm"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Availability badge */}
              <div className="mt-5 pt-4 border-t border-[#EAE3D9]">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#464F38]/10 text-[#464F38] text-[11px] sm:text-xs font-semibold">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#464F38] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#464F38]" />
                  </span>
                  Open to full-time &amp; internship opportunities
                </div>
              </div>

              {/* ── Key competencies — moved here, inside the left card ── */}
              <div className="mt-5 pt-5 border-t border-[#EAE3D9]">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#2C2825] mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C85A32" strokeWidth="2">
                    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                  </svg>
                  Key professional competencies
                </p>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {softSkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7F3EE] border border-[#EAE3D9] text-[11px] font-medium text-[#2C2825] hover:border-[#C85A32]/40 hover:shadow-sm transition-all"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="text-[#C85A32]">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ═══ RIGHT — Bio, timeline ═══ */}
          <div className="lg:col-span-7 space-y-10 sm:space-y-12">
            <div className="space-y-5 sm:space-y-6">
              <motion.h3
                className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-[#2C2825] leading-snug"
                variants={fadeRight}
              >
                Building modern web experiences,{' '}
                <span className="italic text-[#C85A32] relative inline-block">
                  one component at a time
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#C85A32]/40"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path d="M2 8 C 40 2, 100 12, 198 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h3>

              <motion.div className="space-y-4 text-[13px] sm:text-sm text-[#66605B] leading-relaxed font-sans" variants={fadeUp}>
                <p>
                  I am a passionate{' '}
                  <strong className="text-[#2C2825] font-semibold">Frontend Developer and QA Executive</strong> with 6
                  months of hands-on industry internship experience at Athenura. Currently pursuing my{' '}
                  <strong className="text-[#2C2825] font-semibold">Master of Science (M.Sc.) in Computer Science</strong>{' '}
                  at Dr.D.Y. Patil Arts, Commerce and Science College, Pune.
                </p>
                <p>
                  My expertise spans creating{' '}
                  <strong className="text-[#2C2825] font-semibold">responsive, component-driven UIs</strong> with
                  React.js, Vite, JavaScript (ES6+), and Tailwind CSS — alongside rigorous quality assurance, UI
                  testing, cross-browser validation, and bug tracking across live client projects.
                </p>
              </motion.div>
            </div>

            {/* ── Milestone timeline — signature element ── */}
            <motion.div variants={fadeUp}>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#2C2825] mb-5 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C85A32" strokeWidth="2">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                The journey so far
              </p>

              <div className="relative pl-8 sm:pl-9">
                <div className="absolute left-[7px] sm:left-[8px] top-1 bottom-1 w-px bg-[#EAE3D9]" />
                <div className="space-y-7 sm:space-y-8">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="relative"
                    >
                      <span
                        className="absolute -left-8 sm:-left-9 top-0.5 w-4 h-4 rounded-full border-2 bg-[#F7F3EE]"
                        style={{ borderColor: m.accent }}
                      />
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${m.accent}14`, color: m.accent }}
                        >
                          {m.year}
                        </span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#2C2825] leading-snug">
                        {m.title}
                      </h4>
                      <p className="text-[12.5px] sm:text-sm text-[#66605B] leading-relaxed mt-1">{m.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Organic bottom wave separator */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-12 fill-current"
          style={{ color: '#EFE8DF' }}
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}