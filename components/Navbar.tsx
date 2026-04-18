'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-glass border-b border-violet-900/25 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-800 flex items-center justify-center text-white font-bold font-display text-xs shadow-glow-sm group-hover:scale-110 transition-transform duration-200">
            DN
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Dev<span className="text-violet-400">Nights</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-violet-300 transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-400 transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA button ── */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-px"
        >
          Me contacter
        </a>

        {/* ── Mobile burger ── */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-violet-300 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div
            className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-current transition-all duration-200 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden bg-glass border-b border-violet-900/25 transition-all duration-300 ${
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-slate-400 hover:text-violet-300 transition-colors py-1.5 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              className="block px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Me contacter
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
