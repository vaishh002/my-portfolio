import React, { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], raf

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.r = Math.random() * 1.2 + 0.2
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.a = Math.random() * 0.35 + 0.05
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 214, 120, ${this.a})`
        ctx.fill()
      }
    }

    resize()
    for (let i = 0; i < 60; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 214, 120, ${0.07 * (1 - d / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Ambient orbs */}
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-badge reveal">
          <span className="hero-badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-title reveal d1">
          <span className="hero-title-sub">Hello, I'm</span>
          <span className="hero-title-name">Vaishnavi</span>
          <span className="hero-title-italic">Shinde</span>
        </h1>

        <p className="hero-tagline reveal d2">
          Frontend Developer crafting{' '}
          <strong>responsive, component-based UIs</strong> with React &amp; modern
          web tech — turning designs into clean, <em>performant interfaces</em>.
        </p>

        <div className="hero-actions reveal d3">
          <a href="#projects" className="btn btn--primary">
            View Projects
            <ArrowRight />
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in Touch
          </a>
          <a
            href="https://github.com/vaishh002"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-github-link"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>

        <div className="hero-stats reveal d4">
          <div className="hero-stat">
            <span className="hero-stat-num">10<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-lbl">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">4<span className="hero-stat-plus">mo</span></span>
            <span className="hero-stat-lbl">Internship</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">5<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-lbl">Tech Stack</span>
          </div>
        </div>

        <div className="hero-scroll-hint reveal d5">
          <svg width="20" height="32" viewBox="0 0 20 32">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            <circle cx="10" cy="9" r="3" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="translate" values="0 0;0 12;0 0" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Decorative SVG code snippet */}
      <div className="hero-code-deco reveal-right d3" aria-hidden="true">
        <CodeDeco />
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function CodeDeco() {
  return (
    <div className="code-deco-card">
      <div className="code-deco-dots">
        <span style={{background:'#ff6b8a'}} />
        <span style={{background:'#ffd678'}} />
        <span style={{background:'#62f4c8'}} />
      </div>
      <pre className="code-deco-pre">
        <span className="cd-key">const</span> <span className="cd-var">developer</span> <span className="cd-op">=</span> {'{'}
        {'\n'}  <span className="cd-key">name</span><span className="cd-op">:</span> <span className="cd-str">'Vaishnavi Shinde'</span>,
        {'\n'}  <span className="cd-key">role</span><span className="cd-op">:</span> <span className="cd-str">'Frontend Developer'</span>,
        {'\n'}  <span className="cd-key">stack</span><span className="cd-op">:</span> [<span className="cd-str">'React'</span>, <span className="cd-str">'Vite'</span>,
        {'\n'}           <span className="cd-str">'Tailwind'</span>],
        {'\n'}  <span className="cd-key">open</span><span className="cd-op">:</span> <span className="cd-bool">true</span>,
        {'\n'}{'}'}
      </pre>
    </div>
  )
}
