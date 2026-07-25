import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotate({ x: -y / 25, y: x / 25 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <section className="relative pt-32 pb-24 md:pt-36 md:pb-32 bg-[#F7F3EE] overflow-hidden" id="hero">
      
      {/* Background Soft Organic Vector Wave & Botanical Accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#EFE8DF] rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F5E4DC] rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      {/* Decorative Botanical Leaf Branch Flourish */}
      <div className="absolute top-20 left-4 text-[#C85A32]/25 pointer-events-none hidden md:block">
        <svg width="160" height="160" viewBox="0 0 200 200" fill="none">
          <path d="M20 180 Q 100 100 180 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 140 C 40 110, 20 120, 30 90 C 50 90, 70 120, 60 140 Z" fill="currentColor" opacity="0.4" />
          <path d="M100 100 C 80 70, 60 80, 70 50 C 90 50, 110 80, 100 100 Z" fill="currentColor" opacity="0.4" />
          <path d="M140 60 C 120 30, 100 40, 110 10 C 130 10, 150 40, 140 60 Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Professional Copy Tailored to Frontend Developer & QA Executive */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Professional Role Category Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#66605B]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C85A32" strokeWidth="1.8">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
              <span>FRONTEND DEVELOPER &amp; QA EXECUTIVE</span>
            </motion.div>

            {/* Professional Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C2825] leading-[1.15]"
            >
              Crafting Pixel-Perfect UIs &amp; <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C85A32] relative inline-block">
                Flawless Quality Code
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#C85A32]" viewBox="0 0 220 16" fill="none">
                  <path d="M4 12 C 50 2, 150 16, 216 6 C 180 14, 80 4, 30 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Tailored Professional Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#66605B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Frontend Developer &amp; QA Executive combining React.js component engineering with rigorous quality assurance, cross-browser testing, and bug tracking. M.Sc. CS Graduate &amp; Hackathon Finalist.
            </motion.p>

            {/* CTA Buttons — Forced on same single line on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 whitespace-nowrap"
            >
              <a href="#projects" className="btn-terracotta text-xs sm:text-sm py-3 px-4 sm:px-5 flex-shrink-0">
                Explore Selected Work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="/resume.pdf" 
                download="Vaishnavi_Shinde_Resume.pdf" 
                className="btn-outline-dark text-xs sm:text-sm py-3 px-4 sm:px-5 flex items-center gap-1.5 flex-shrink-0" 
                title="Download Vaishnavi's Resume PDF"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume</span>
              </a>
              <a href="#contact" className="btn-outline-dark text-xs sm:text-sm py-3 px-4 sm:px-5 flex-shrink-0">
                Get in Touch
              </a>
            </motion.div>

            {/* 3 Feature Badges Row — ALL 3 FORCED ON THE EXACT SAME SINGLE LINE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-nowrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 whitespace-nowrap overflow-x-auto lg:overflow-visible pb-1 scrollbar-none"
            >
              {/* Badge 1: React & Frontend */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE8DF] border border-[#EAE3D9] text-[11px] font-medium text-[#2C2825] shadow-sm hover:border-[#C85A32]/40 transition-colors flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <span>React &amp; Frontend</span>
              </div>

              {/* Badge 2: QA & Testing Specialist */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE8DF] border border-[#EAE3D9] text-[11px] font-medium text-[#2C2825] shadow-sm hover:border-[#464F38]/40 transition-colors flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-[#464F38]/10 text-[#464F38] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <span>QA &amp; Testing Specialist</span>
              </div>

              {/* Badge 3: Hackathon Finalist */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE8DF] border border-[#EAE3D9] text-[11px] font-medium text-[#2C2825] shadow-sm hover:border-[#C85A32]/40 transition-colors flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                  </svg>
                </div>
                <span>Hackathon Finalist</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column — 3D Tilt Container & Image */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[440px] cursor-pointer"
            >
              {/* Geometric Dot Matrix Array Vector */}
              <div className="absolute -top-6 -right-6 w-32 h-32 opacity-25 pointer-events-none">
                <svg width="100%" height="100%" fill="none">
                  <pattern id="dotGridHeroSingle" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="2.5" fill="#C85A32" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dotGridHeroSingle)" />
                </svg>
              </div>

              {/* Asymmetric Rounded Container Shape */}
              <div className="w-full bg-[#EFE8DF] rounded-[3.5rem] p-4 shadow-2xl border border-[#EAE3D9] relative overflow-hidden transform-gpu">
                <div className="w-full h-[400px] sm:h-[460px] rounded-[3rem] overflow-hidden relative bg-[#F7F3EE]">
                  <img
                    src="/profile.jpg"
                    alt="Vaishnavi Shinde"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Quality Badge Overlay */}
              <div 
                style={{ transform: 'translateZ(35px)' }}
                className="absolute -bottom-4 -right-2 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#EAE3D9] flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#464F38] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C2825] leading-tight">QA Executive</p>
                  <p className="text-[10px] font-medium text-[#464F38] mt-0.5">Frontend &amp; Quality Lead</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Organic Bottom Wave Separator */}
      <div className="w-full absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#EFE8DF] fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
