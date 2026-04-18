import RevealOnScroll from './RevealOnScroll'

/* ────────────────────────────────────────────
   Add / edit your projects here.
   Each entry needs: title, description, tags,
   url, and the visual accent colours.
──────────────────────────────────────────── */
const projects = [
  {
    id: 'marvel',
    title: 'Marvel Universe',
    description:
      "Application React dédiée à l'univers Marvel. Explorez personnages, comics et films depuis une interface immersive et dynamique.",
    tags: ['React', 'Marvel API', 'CSS'],
    url: 'https://marvel-samy.netlify.app/',
    // Visual accents
    cardBorder: 'border-red-800/40',
    headerGradient: 'from-red-950 via-red-900/50 to-[#080812]',
    iconWrapper: 'bg-red-500/15 border-red-700/30',
    icon: (
      <svg
        className="w-9 h-9 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    tagRing: 'bg-red-500/8 border-red-500/20 text-red-300/80',
    linkColor: 'text-red-400 hover:text-red-300',
    number: '01',
  },
  {
    id: 'gamepad',
    title: 'GamePad',
    description:
      "Plateforme de découverte de jeux vidéo. Recherchez, filtrez et explorez des milliers de titres depuis une expérience fluide et intuitive.",
    tags: ['React', 'RAWG API', 'CSS'],
    url: 'https://gamepad-samy.netlify.app/',
    cardBorder: 'border-blue-800/40',
    headerGradient: 'from-blue-950 via-blue-900/50 to-[#080812]',
    iconWrapper: 'bg-blue-500/15 border-blue-700/30',
    icon: (
      <svg
        className="w-9 h-9 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <rect x="2" y="7" width="20" height="11" rx="5" />
        <path strokeLinecap="round" d="M6 11v3M7.5 12.5H4.5M17 11.5h.01M15 13.5h.01" />
      </svg>
    ),
    tagRing: 'bg-blue-500/8 border-blue-500/20 text-blue-300/80',
    linkColor: 'text-blue-400 hover:text-blue-300',
    number: '02',
  },
]

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-800/5 blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <RevealOnScroll>
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Mes projets
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-600 to-purple-400 rounded-full mt-4 mb-4" />
          <p className="text-slate-400 max-w-xl mb-16">
            Quelques projets qui illustrent ma passion pour le développement web
            moderne et les expériences utilisateur soignées.
          </p>
        </RevealOnScroll>

        {/* ── Projects grid ── */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 120}>
              <div
                className={`group relative rounded-2xl overflow-hidden border ${project.cardBorder} bg-[#0d0d1c] hover:scale-[1.015] transition-all duration-300 hover:shadow-2xl hover:shadow-violet-900/15`}
              >
                {/* ── Card visual header ── */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.headerGradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/2 blur-sm" />
                  <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/2 blur-sm" />

                  {/* Project icon */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl ${project.iconWrapper} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>

                  {/* Index number */}
                  <span className="absolute top-4 right-4 font-display font-bold text-4xl text-white/5 select-none">
                    {project.number}
                  </span>
                </div>

                {/* ── Card body ── */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-violet-200 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${project.tagRing}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 group/link ${project.linkColor}`}
                  >
                    Voir le projet
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* ── "More coming soon" placeholder ── */}
        <RevealOnScroll delay={240}>
          <div className="mt-8 p-5 rounded-2xl border border-dashed border-violet-800/30 bg-violet-900/5 text-center">
            <p className="text-slate-500 text-sm">
              D&apos;autres projets arrivent bientôt —{' '}
              <span className="text-violet-500">stay tuned</span>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
