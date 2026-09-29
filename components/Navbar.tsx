'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { CALENDLY_URL, navLinks } from '@/lib/data'

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
        scrolled || mobileOpen
          ? 'bg-glass border-b border-violet-900/25 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-violet-300 transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold transition-colors duration-200"
          >
            Réserver un appel
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-400 hover:text-violet-300 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
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

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold text-center transition-colors"
            >
              Réserver un appel
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
