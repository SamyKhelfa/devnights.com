'use client'

import { useEffect, useState } from 'react'

// Easter egg: a light-mode toggle that refuses to leave the night.
export default function NightToggle() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const timer = setTimeout(() => setOpen(false), 3200)
    return () => clearTimeout(timer)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-track="easter-egg-light-mode"
        aria-label="Passer en mode clair"
        className="p-2 rounded-full text-slate-400 hover:text-amber-200 hover:bg-violet-900/30 transition-colors"
      >
        {open ? (
          <svg className="w-[18px] h-[18px] text-violet-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
          </svg>
        ) : (
          <svg
            className="w-[18px] h-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </button>

      <div
        role="status"
        aria-live="polite"
        className={`fixed top-20 right-6 z-50 w-max max-w-[calc(100vw-3rem)] px-4 py-3 rounded-xl bg-[#14142a] border border-violet-700/50 shadow-xl shadow-black/40 text-sm text-slate-200 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {open && 'Désolé, sur DevNights il fait toujours nuit 🌙'}
      </div>
    </>
  )
}
