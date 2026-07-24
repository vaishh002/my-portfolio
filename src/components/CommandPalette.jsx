import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const commands = [
  { id: 'projects', label: 'Go to Selected Work', category: 'Navigation', action: (close) => { scrollTo('#projects'); close(); } },
  { id: 'experience', label: 'Go to Experience & Timeline', category: 'Navigation', action: (close) => { scrollTo('#experience'); close(); } },
  { id: 'skills', label: 'Go to Technical Capabilities', category: 'Navigation', action: (close) => { scrollTo('#skills'); close(); } },
  { id: 'process', label: 'Go to Development Process', category: 'Navigation', action: (close) => { scrollTo('#process'); close(); } },
  { id: 'education', label: 'Go to Education & Honors', category: 'Navigation', action: (close) => { scrollTo('#education'); close(); } },
  { id: 'contact', label: 'Go to Contact Form', category: 'Navigation', action: (close) => { scrollTo('#contact'); close(); } },
  { id: 'linkedin', label: 'Open LinkedIn Profile', category: 'External Links', action: (close) => { window.open('https://linkedin.com/in/vaishnavi-shinde', '_blank'); close(); } },
  { id: 'github', label: 'Open GitHub Repositories', category: 'External Links', action: (close) => { window.open('https://github.com/vaishh002', '_blank'); close(); } },
  { id: 'email', label: 'Send Direct Email', category: 'External Links', action: (close) => { window.open('mailto:shindevaishnavi022003@gmail.com'); close(); } },
]

function scrollTo(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const handleCustomOpen = () => setOpen(true)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-command-palette', handleCustomOpen)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-command-palette', handleCustomOpen)
    }
  }, [])

  const filteredCommands = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handlePaletteKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action(() => setOpen(false))
      }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C2825]/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#F7F3EE] rounded-3xl shadow-2xl border border-[#EAE3D9] overflow-hidden z-10"
            onKeyDown={handlePaletteKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-[#EAE3D9]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C85A32" strokeWidth="2" className="mr-3">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a section or quick command..."
                className="w-full bg-transparent text-sm font-sans text-[#2C2825] placeholder:text-[#A39C96] focus:outline-none"
              />
              <span className="text-[10px] font-mono text-[#A39C96] bg-[#EFE8DF] px-2 py-0.5 rounded border border-[#EAE3D9]">
                ESC
              </span>
            </div>

            {/* Command List */}
            <div className="max-h-72 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-6 text-center text-xs text-[#A39C96]">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((c, idx) => {
                  const selected = idx === selectedIndex
                  return (
                    <div
                      key={c.id}
                      onClick={() => c.action(() => setOpen(false))}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer text-xs transition-colors ${selected ? 'bg-[#C85A32] text-white font-medium shadow-sm' : 'text-[#2C2825] hover:bg-[#EFE8DF]'}`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${selected ? 'bg-white' : 'bg-[#C85A32]'}`} />
                        <span>{c.label}</span>
                      </span>
                      <span className={`text-[10px] font-mono ${selected ? 'text-white/80' : 'text-[#A39C96]'}`}>
                        {c.category}
                      </span>
                    </div>
                  )
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-2.5 bg-[#EFE8DF]/60 border-t border-[#EAE3D9] text-[10px] font-mono text-[#A39C96] flex items-center justify-between">
              <span>↑↓ Navigate · ↵ Select</span>
              <span>Command Palette</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
