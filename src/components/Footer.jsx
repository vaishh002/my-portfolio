import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <FooterLogoSVG />
          <span>Vaishnavi Shinde</span>
        </div>
        <p className="footer-copy">
          Designed &amp; built with care in Pune, Maharashtra · © {year}
        </p>
        <div className="footer-links">
          <a href="https://github.com/vaishh002" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <span className="footer-dot">·</span>
          <a href="mailto:shindevaishnavi022003@gmail.com" className="footer-link">Email</a>
          <span className="footer-dot">·</span>
          <a href="#hero" className="footer-link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

function FooterLogoSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="url(#flg)" />
      <path d="M8 20 L14 8 L20 20" stroke="#080810" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="10.5" y1="16" x2="17.5" y2="16" stroke="#080810" strokeWidth="2.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="flg" x1="0" y1="0" x2="28" y2="28">
          <stop stopColor="#ffd678" />
          <stop offset="1" stopColor="#ff9a3c" />
        </linearGradient>
      </defs>
    </svg>
  )
}
