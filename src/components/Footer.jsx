import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2C2825] text-white py-8 px-6 border-t border-[#343B29] relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Brand Logo Emblem */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-serif font-bold text-xs shadow-md overflow-hidden">
            <span>VS</span>
            <svg className="absolute -top-1 -right-1 w-4 h-4 text-[#F5E4DC] opacity-80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C14 8 10 12 10 17C15 17 19 13 19 8Z" />
            </svg>
          </div>
          <span className="font-serif font-bold text-sm tracking-tight text-[#EFE8DF]">
            Vaishnavi Shinde
          </span>
        </div>

        <p className="text-[#A39C96] text-center">
          Designed &amp; Developed with care in Pune, Maharashtra · © {year}
        </p>

        <div className="flex items-center gap-3.5 text-[#A39C96] flex-wrap justify-center">
          <a href="https://linkedin.com/in/vaishnavi-shinde02/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C85A32] transition-colors">
            LinkedIn
          </a>
          <span>·</span>
          <a href="https://github.com/vaishh002" target="_blank" rel="noopener noreferrer" className="hover:text-[#C85A32] transition-colors">
            GitHub
          </a>
          <span>·</span>
          <a href="https://athenura.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#C85A32] transition-colors">
            Athenura
          </a>
          <span>·</span>
          <a href="https://www.linkedin.com/company/athenura/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C85A32] transition-colors">
            Athenura LinkedIn
          </a>
          <span>·</span>
          <a href="#hero" className="hover:text-[#C85A32] transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
