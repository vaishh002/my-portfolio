import React from 'react'
import './Experience.css'

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Athenura',
    type: 'Remote · Unpaid',
    date: 'Feb 2026 – Present',
    icon: '🚀',
    points: [
      'Building and maintaining responsive web pages and UI components using HTML5, CSS3, JavaScript, and React as part of the core frontend team.',
      'Contributed to the Athenura company website and Jay-Bhadra team project — implementing layouts, fixing UI issues, and ensuring cross-device compatibility.',
      'Working with component-based React architecture (built on Vite), collaborating through Git and GitHub under the Vaitej-Innovators organisation.',
      'Developed a React-based personal portfolio covering routing, component structure, and responsive styling.',
    ],
  },
  {
    title: 'On-the-Job Training (Virtual)',
    company: 'Dr. D. Y. Patil Arts, Commerce & Science College',
    type: 'Remote · Virtual',
    date: 'Jan – Feb 2025',
    icon: '🎓',
    points: [
      'Worked on academic and technical software development tasks under guided supervision.',
      'Gained exposure to real development workflows and version control practices.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Work Experience</div>
          <h2 className="section-title">Where I've <span className="italic">contributed</span></h2>
        </div>

        <div className="exp-timeline">
          {/* Vertical line */}
          <div className="exp-line" aria-hidden="true" />

          {experiences.map((exp, i) => (
            <div key={i} className={`exp-row reveal d${i + 1}`}>
              <div className="exp-node">
                <div className="exp-node-ring" />
                <div className="exp-node-icon">{exp.icon}</div>
              </div>
              <div className="exp-card card">
                <div className="exp-card-header">
                  <div>
                    <div className="exp-title">{exp.title}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date">{exp.date}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((p, j) => (
                    <li key={j}>
                      <span className="exp-bullet">
                        <ArrowIcon />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
