import React from 'react'
import './Projects.css'

const projects = [
  {
    title: 'SkillBridge AI',
    desc: 'AI-powered career guidance platform with resume analysis, ATS score checking, and AI-generated interview questions. Built authentication, user dashboard, and responsive UI.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    status: 'live',
    github: 'https://github.com/vaishh002/SkillBridgeAI',
    demo: 'https://skill-bridge-ai-theta.vercel.app',
    icon: '🤖',
    color: '#62f4c8',
    featured: true,
  },
  {
    title: 'Task Management System',
    desc: 'Full-stack browser-based task manager — add, complete, delete tasks. Led a team, focused on smooth DOM interactions and a clean minimal interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
    status: 'live',
    github: 'https://github.com/vaishh002/TaskManagementSystem',
    demo: 'https://task-management-system-zeta-ten.vercel.app',
    icon: '✅',
    color: '#ffd678',
    featured: true,
  },
  {
    title: 'Hackathon Website',
    desc: 'Responsive multi-page hackathon website with Home, About, Contact, Events, Registration and Team sections. Built reusable components and optimized for all devices.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    status: 'live',
    github: 'https://github.com/bimalgautam1/Hackathon-Athenura',
    demo: 'https://hackathon.athenura.in/hackathons',
    icon: '🏆',
    color: '#ff6b8a',
    featured: true,
  },
  {
    title: 'Vibha ERP — Inventory & Logistics',
    desc: 'Co-leading development of an ERP system for inventory and logistics. Frontend with responsive UI pages, reusable components, auth flow, dashboard, and master data screens.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Django REST', 'MySQL'],
    status: 'wip',
    github: 'https://github.com/tejaspandav8421/Inventory-Management',
    icon: '📦',
    color: '#7dd3fc',
  },
  {
    title: 'Kaumudi Academy LMS',
    desc: 'Learning Management System website — built responsive UI pages and reusable frontend components. Integrated navigation and course-related pages in a team environment.',
    tech: ['HTML', 'CSS', 'React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    status: 'wip',
    github: 'https://github.com/AtharvBhorkar/kaumudi-academy',
    icon: '📚',
    color: '#ffd678',
  },
  {
    title: 'Athenura Company Website',
    desc: 'Actively developing the Athenura company website during internship — implementing pages, responsive layouts, and UI components. Translated Figma mockups into pixel-perfect React components.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    status: 'wip',
    github: 'https://github.com/vaishh002/athenura-website',
    icon: '🌐',
    color: '#62f4c8',
  },
  {
    title: 'React Portfolio',
    desc: 'Personal developer portfolio built from scratch using React and Vite. Structured into reusable components with ESLint config and HMR-enabled dev workflow.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    status: 'live',
    github: 'https://github.com/vaishh002/react-portfolio',
    icon: '🗂',
    color: '#ff6b8a',
  },
  {
    title: 'Jay-Bhadra',
    desc: 'Team project under Vaitej-Innovators during the Athenura internship. Collaborated on shared feature development and code reviews using Git branching and pull requests.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    status: 'wip',
    github: 'https://github.com/Vaitej-Innovators/Jay-Bhadra',
    icon: '🤝',
    color: '#ffd678',
  },
  
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Projects</div>
          <h2 className="section-title">Things I've <span className="italic">built</span></h2>
          <p className="section-sub">
            A mix of real-world work, team collaborations, and personal experiments — from AI tools to ERP systems.
          </p>
        </div>

        {/* Featured row */}
        <div className="projects-featured">
          {projects.filter(p => p.featured).map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i + 1} featured />
          ))}
        </div>

        {/* Rest */}
        <div className="projects-grid">
          {projects.filter(p => !p.featured).map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, delay, featured }) {
  return (
    <div
      className={`project-card reveal d${delay} ${featured ? 'project-card--featured' : ''}`}
      style={{ '--proj-color': p.color }}
    >
      <div className="project-card-glow" />

      <div className="project-card-header">
        <div className="project-icon">{p.icon}</div>
        <div className="project-links">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
              <GithubIcon />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live demo">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <div className="project-status-row">
        <span className={`status status--${p.status}`}>
          {p.status === 'live' ? 'Live' : 'In Progress'}
        </span>
      </div>

      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.desc}</p>

      <div className="project-tech">
        {p.tech.map(t => (
          <span key={t} className="project-tech-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}

function GithubIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
function ExternalIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
}
