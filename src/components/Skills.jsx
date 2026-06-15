import React from 'react'
import './Skills.css'

const categories = [
  {
    icon: <FrontendIcon />,
    label: 'Frontend',
    color: '#ffd678',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'JavaScript', 'React', 'Vite', 'React Router DOM', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    icon: <ProgIcon />,
    label: 'Programming',
    color: '#62f4c8',
    tags: ['JavaScript', 'Python', 'DOM Manipulation', 'Event Handling', 'Form Validation', 'Node.js', 'MongoDB', 'MySQL'],
  },
  {
    icon: <ToolsIcon />,
    label: 'Tools',
    color: '#ff6b8a',
    tags: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'Figma', 'Vercel', 'Render', 'Antigravity', 'MS Excel', 'Google Sheets'],
  },
  {
    icon: <PracticeIcon />,
    label: 'Practices',
    color: '#7dd3fc',
    tags: ['Mobile-First Design', 'Semantic HTML5', 'Cross-Browser Compatibility', 'Component Architecture', 'UI & Usability Testing'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <div className="skills-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 className="section-title">Tools of my <span className="italic">craft</span></h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Technologies I work with to build modern, responsive web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={cat.label} className={`skill-card reveal d${i + 1}`}>
              <div className="skill-card-icon" style={{ '--cat-color': cat.color }}>
                {cat.icon}
              </div>
              <h4 className="skill-card-label">{cat.label}</h4>
              <div className="skill-tags">
                {cat.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {/* Ambient glow */}
              <div className="skill-card-glow" style={{ background: cat.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FrontendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function ProgIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  )
}
function ToolsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function PracticeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
