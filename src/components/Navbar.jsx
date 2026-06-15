import React, { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={close}>
          <LogoMark />
          <span>VS</span>
        </a>

        <nav className="navbar-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary navbar-cta">
          Hire Me
        </a>

        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="mobile-menu-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn--primary"
          style={{ marginTop: '0.5rem' }}
          onClick={close}
        >
          Hire Me
        </a>
      </div>
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="url(#lg)" />
      <path d="M8 20 L14 8 L20 20" stroke="#080810" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="10.5" y1="16" x2="17.5" y2="16" stroke="#080810" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="28" y2="28">
          <stop stopColor="#ffd678" />
          <stop offset="1" stopColor="#ff9a3c" />
        </linearGradient>
      </defs>
    </svg>
  )
}
