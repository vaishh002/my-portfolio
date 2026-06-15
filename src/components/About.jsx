import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="section-inner">
        <div className="about-grid">
          {/* Left — identity card */}
          <div className="reveal-left">
            <div className="about-identity-card">
              <div className="about-avatar">
                <AvatarSVG />
              </div>
              <div className="about-identity-info">
                <h3 className="about-identity-name">Vaishnavi Shinde</h3>
                <div className="about-identity-role">Frontend Developer · M.Sc. CS</div>
              </div>

              <div className="about-details-list">
                <DetailItem icon={<LocIcon />} text="Pune, Maharashtra" />
                <DetailItem icon={<PhoneIcon />} text="9860592488" />
                <DetailItem icon={<MailIcon />} text="shindevaishnavi022003@gmail.com" small />
                <DetailItem icon={<UniIcon />} text="Savitribai Phule Pune University" />
                <DetailItem icon={<GithubSmall />} text="github.com/vaishh002" link="https://github.com/vaishh002" />
              </div>

              <div className="about-availability">
                <span className="about-avail-dot" />
                Open to internships &amp; entry-level roles
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="about-text-col reveal-right">
            <div className="section-eyebrow">About Me</div>
            <h2 className="section-title">
              Building the web,{' '}
              <span className="italic">one component</span>
              {' '}at a time
            </h2>
            <div className="about-body">
              <p>
                Frontend developer with <strong>4+ months of hands-on internship experience</strong>,
                currently completing my M.Sc. in Computer Science at Savitribai Phule Pune University.
              </p>
              <p>
                Skilled in building <strong>responsive, component-based UIs</strong> using HTML, CSS,
                JavaScript, and React. Passionate about translating Figma designs into pixel-perfect,
                performant interfaces that work seamlessly across all devices.
              </p>
              <p>
                I thrive in team environments, have contributed to multiple real-world projects during
                my internship, and love the challenge of turning complex requirements into elegant
                frontend solutions.
              </p>
            </div>

            <div className="about-soft-skills">
              {['Attention to Detail', 'Analytical Thinking', 'Clear Communication', 'Team Collaboration', 'Willingness to Learn'].map(s => (
                <span key={s} className="soft-skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DetailItem({ icon, text, small, link }) {
  const content = (
    <div className={`about-detail-item ${small ? 'about-detail-item--small' : ''}`}>
      <span className="about-detail-icon">{icon}</span>
      <span className="about-detail-text">{text}</span>
    </div>
  )
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className="about-detail-link">{content}</a>
  }
  return content
}

function AvatarSVG() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="avGrad" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#ffd678" />
          <stop offset="1" stopColor="#ff9a3c" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#avGrad)" />
      <text x="32" y="38" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="'Fraunces', serif" fill="#080810">VS</text>
    </svg>
  )
}

function LocIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function UniIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
}
function GithubSmall() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
