import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => setSent(true))
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h2 className="section-title">Let's <span className="italic">collaborate</span></h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Open to frontend developer internships and entry-level roles. Let's build something great together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info reveal-left">
            <p className="contact-intro">
              I'm currently looking for new opportunities. Whether you have a project, a job offer, or just want to say hi —
              my inbox is always open.
            </p>

            <div className="contact-items">
              <ContactItem icon={<MailIcon />} label="Email" value="shindevaishnavi022003@gmail.com" href="mailto:shindevaishnavi022003@gmail.com" />
              <ContactItem icon={<PhoneIcon />} label="Phone" value="9860592488" href="tel:+919860592488" />
              <ContactItem icon={<LocIcon />} label="Location" value="Pune, Maharashtra, India" />
              <ContactItem icon={<GithubIcon />} label="GitHub" value="github.com/vaishh002" href="https://github.com/vaishh002" external />
            </div>

            {/* Decorative SVG */}
            <div className="contact-deco" aria-hidden="true">
              <DecoSVG />
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-col reveal-right">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon">✉️</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn--ghost" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" placeholder="Jane Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Frontend Developer Opportunity" value={form.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Hi Vaishnavi, I'd love to discuss…" value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn--primary">
                  Send Message
                  <SendIcon />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value, href, external }) {
  const inner = (
    <div className="contact-item">
      <div className="contact-item-icon">{icon}</div>
      <div>
        <div className="contact-item-label">{label}</div>
        <div className="contact-item-value">{value}</div>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="contact-item-link">
        {inner}
      </a>
    )
  }
  return inner
}

function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
}
function LocIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function GithubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
function SendIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
}

function DecoSVG() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
      <circle cx="40" cy="40" r="30" stroke="rgba(255,214,120,0.12)" strokeWidth="1" />
      <circle cx="40" cy="40" r="20" stroke="rgba(255,214,120,0.08)" strokeWidth="1" />
      <circle cx="160" cy="120" r="35" stroke="rgba(98,244,200,0.10)" strokeWidth="1" />
      <circle cx="160" cy="120" r="22" stroke="rgba(98,244,200,0.06)" strokeWidth="1" />
      <line x1="70" y1="40" x2="130" y2="40" stroke="rgba(255,214,120,0.1)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="40" y1="70" x2="40" y2="120" stroke="rgba(98,244,200,0.1)" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  )
}
