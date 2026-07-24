import React, { useState, useEffect } from 'react'

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F7F3EE]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#EAE3D9]' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Custom VS Brand Logo Emblem with Botanical Leaf Vector */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={close}>
          <div className="relative w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-serif text-sm font-bold shadow-md transition-transform duration-300 group-hover:scale-105 overflow-hidden">
            <span>VS</span>
            {/* Embedded Botanical Leaf Vector Accent */}
            <svg className="absolute -top-1 -right-1 w-5 h-5 text-[#F5E4DC] opacity-80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" opacity="0" />
              <path d="M17 8C14 8 10 12 10 17C15 17 19 13 19 8Z" />
            </svg>
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-tight text-[#2C2825]">
              Vaishnavi <span className="text-[#C85A32] font-normal italic">Shinde</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#66605B] uppercase mt-0.5">
              DEV &amp; QA PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold tracking-wider text-[#66605B] hover:text-[#C85A32] uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA & Command Palette Trigger */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={triggerCommandPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE8DF] border border-[#EAE3D9] text-[11px] font-medium text-[#66605B] hover:border-[#C85A32]/40 hover:text-[#C85A32] transition-all"
            title="Open Command Palette (Ctrl+K)"
          >
            <span className="font-mono text-[10px]">⌘K</span>
            <span className="text-[10px] tracking-wide">Quick Nav</span>
          </button>
          <a href="#contact" className="btn-terracotta text-xs py-2 px-5">
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#2C2825]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2C2825] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C2825] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#2C2825] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F3EE] border-b border-[#EAE3D9] px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-semibold tracking-wider text-[#2C2825] hover:text-[#C85A32] uppercase py-1"
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => { close(); triggerCommandPalette(); }}
              className="text-xs text-[#66605B] flex items-center gap-1 font-mono"
            >
              <span>⌘K</span> Search Navigation
            </button>
            <a href="#contact" className="btn-terracotta text-xs py-2 px-5" onClick={close}>
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
