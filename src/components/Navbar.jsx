import React, { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Capabilities' },
  { href: '#education', label: 'Academics' },
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
        
        {/* Brand Logo Image from public/logo.png */}
        <a href="#hero" className="flex items-center group" onClick={close}>
          <img 
            src="/logo.png" 
            alt="Vaishnavi Shinde Logo" 
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
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
