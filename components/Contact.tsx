import RevealOnScroll from './RevealOnScroll'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/SamyKhelfa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samy-khelfa/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-violet-700/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* ── Section header ── */}
        <RevealOnScroll>
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Travaillons ensemble
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-600 to-purple-400 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Une idée de projet, une opportunité à saisir ? Je suis toujours ouvert
            à de nouvelles aventures.
          </p>
        </RevealOnScroll>

        {/* ── Email CTA ── */}
        <RevealOnScroll delay={150} className="mt-12">
          <a
            href="mailto:contact@devnights.com"  /* ← remplace par ton email */
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white font-semibold text-lg transition-all duration-200 shadow-xl shadow-violet-500/20 hover:shadow-violet-500/35 hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Envoyer un email
          </a>
        </RevealOnScroll>

        {/* ── Social links ── */}
        <RevealOnScroll delay={250} className="mt-8">
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3.5 rounded-xl bg-glass-card border border-violet-900/25 text-slate-400 hover:text-violet-300 hover:border-violet-600/45 transition-all duration-200 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
