import React from 'react'
import './Education.css'

const education = [
  {
    degree: 'M.Sc. Computer Science',
    uni: 'Savitribai Phule Pune University',
    period: '2024 – Apr 2026 (Ongoing)',
    icon: '🎓',
    status: 'ongoing',
  },
  {
    degree: 'B.Sc. Computer Science',
    uni: 'Savitribai Phule Pune University',
    period: 'Graduated Apr 2024',
    icon: '📘',
    status: 'done',
  },
]

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <div className="section-eyebrow">Education & Certification</div>
          <h2 className="section-title">Academic <span className="italic">foundation</span></h2>
        </div>

        <div className="edu-grid reveal d1">
          {education.map((e) => (
            <div key={e.degree} className={`edu-card card ${e.status === 'ongoing' ? 'edu-card--active' : ''}`}>
              {e.status === 'ongoing' && <div className="edu-card-active-bar" />}
              <div className="edu-icon-wrap">
                <span className="edu-icon">{e.icon}</span>
                {e.status === 'ongoing' && (
                  <span className="edu-ongoing-badge">Ongoing</span>
                )}
              </div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-uni">{e.uni}</div>
              <div className="edu-period">{e.period}</div>
            </div>
          ))}
        </div>

        {/* Certification */}
        <div className="cert-section reveal d2">
          <h3 className="cert-heading">Certifications</h3>
          <div className="cert-card">
            <div className="cert-badge-icon">🏅</div>
            <div>
              <div className="cert-title">Design Fundamentals with AI</div>
              <div className="cert-issuer">Adobe · Virtual</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
