import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true)
        setLoading(false)
      })
      .catch((err) => {
        console.error('EmailJS send error:', err)
        setLoading(false)
        setSent(true)
      })
  }

  return (
    <section className="py-24 bg-[#C85A32] text-white relative overflow-hidden" id="contact">
      
      {/* PROMINENT VECTOR ARTWORK 1: Botanical Leaf Vector Branch (Top Left) */}
      <div className="absolute top-10 left-10 text-white/15 pointer-events-none hidden lg:block">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 180 Q 100 100 180 20" />
          <path d="M60 140 C 40 110, 20 120, 30 90 C 50 90, 70 120, 60 140 Z" fill="currentColor" opacity="0.3" />
          <path d="M100 100 C 80 70, 60 80, 70 50 C 90 50, 110 80, 100 100 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* PROMINENT VECTOR ARTWORK 2: Large Message Paper Plane Vector Illustration (Bottom Right) */}
      <div className="absolute bottom-6 right-6 text-white/10 pointer-events-none hidden xl:block">
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" fill="currentColor" opacity="0.15" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F5E4DC] font-sans">
              — GET IN TOUCH —
            </p>
            
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-white uppercase tracking-tight">
              LET'S CREATE <br />
              <span className="italic text-[#F5E4DC]">SOMETHING GREAT</span> <br />
              TOGETHER
            </h2>

            <p className="font-script text-3xl text-[#F5E4DC] leading-relaxed">
              Have an opportunity or project in mind? <br />
              I'd love to hear from you.
            </p>

            {/* Contact Details List */}
            <div className="pt-6 space-y-4 text-sm text-white/90 max-w-md mx-auto lg:mx-0">
              <a href="mailto:shindevaishnavi022003@gmail.com" className="flex items-center gap-3 justify-center lg:justify-start hover:text-[#F5E4DC] transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>shindevaishnavi022003@gmail.com</span>
              </a>

              <a href="tel:+919860592488" className="flex items-center gap-3 justify-center lg:justify-start hover:text-[#F5E4DC] transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                </div>
                <span>+91 9860592488</span>
              </a>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>Pune, Maharashtra, India</span>
              </div>

              <div className="pt-2 flex items-center gap-4 justify-center lg:justify-start text-xs font-medium">
                <a href="https://linkedin.com/in/vaishnavi-shinde" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5">
                  <span>LinkedIn Profile</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a href="https://github.com/vaishh002" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5">
                  <span>GitHub Profile</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — EmailJS Contact Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-4xl p-8 sm:p-10 shadow-2xl text-[#2C2825] border border-[#EAE3D9]">
              {sent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C2825]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-[#66605B] max-w-xs mx-auto">
                    Thank you for reaching out, Vaishnavi. I will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline-dark text-xs py-2 px-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#2C2825] mb-2">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#66605B] mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#F7F3EE] border border-[#EAE3D9] rounded-xl px-4 py-3 text-sm text-[#2C2825] placeholder:text-[#A39C96] focus:border-[#C85A32] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#66605B] mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#F7F3EE] border border-[#EAE3D9] rounded-xl px-4 py-3 text-sm text-[#2C2825] placeholder:text-[#A39C96] focus:border-[#C85A32] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#66605B] mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Software Development Opportunity"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-[#F7F3EE] border border-[#EAE3D9] rounded-xl px-4 py-3 text-sm text-[#2C2825] placeholder:text-[#A39C96] focus:border-[#C85A32] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#66605B] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Hi Vaishnavi, I would love to discuss a developer opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F7F3EE] border border-[#EAE3D9] rounded-xl px-4 py-3 text-sm text-[#2C2825] placeholder:text-[#A39C96] focus:border-[#C85A32] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-terracotta w-full justify-center py-3.5 mt-2 text-sm"
                  >
                    {loading ? 'Sending Message...' : 'Send Message'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
