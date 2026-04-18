import RevealOnScroll from './RevealOnScroll'

const skills = [
  { name: 'React', color: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300' },
  { name: 'React Native', color: 'bg-sky-500/10 border-sky-500/25 text-sky-300' },
  { name: 'TypeScript', color: 'bg-blue-500/10 border-blue-500/25 text-blue-300' },
  { name: 'JavaScript', color: 'bg-yellow-500/10 border-yellow-500/25 text-yellow-300' },
  { name: 'Next.js', color: 'bg-slate-500/10 border-slate-400/25 text-slate-300' },
  { name: 'Node.js', color: 'bg-green-500/10 border-green-500/25 text-green-300' },
  { name: 'NestJS', color: 'bg-red-500/10 border-red-500/25 text-red-300' },
  { name: 'Prisma', color: 'bg-teal-500/10 border-teal-500/25 text-teal-300' },
  { name: 'Tailwind CSS', color: 'bg-cyan-500/10 border-cyan-400/25 text-cyan-200' },
  { name: 'REST API', color: 'bg-violet-500/10 border-violet-500/25 text-violet-300' },
  { name: 'Swagger', color: 'bg-lime-500/10 border-lime-500/25 text-lime-300' },
  { name: 'Git & GitHub', color: 'bg-rose-500/10 border-rose-400/25 text-rose-300' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-x-clip">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-700/6 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <RevealOnScroll>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            À propos
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight">
            Pas un dev<br />
            <span className="text-gradient">comme les autres.</span>
          </h2>
          <div className="w-12 h-px bg-violet-700/60 mt-6 mb-16" />
        </RevealOnScroll>

        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* ── Texte – 3 colonnes ── */}
          <RevealOnScroll delay={100} className="md:col-span-3">
            <div className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                Avant de coder, j&apos;ai passé plusieurs années en{' '}
                <span className="text-white font-medium">support technique</span>, à gérer des incidents, décortiquer les blocages des utilisateurs,
                et apprendre à communiquer clairement sous pression.
              </p>
              <p className="text-slate-400 leading-relaxed">
                C&apos;est là que j&apos;ai compris que la meilleure tech ne sert
                à rien si elle ne répond pas à un vrai besoin. Aujourd&apos;hui je
                construis des applications avec cette double lecture 
                technique et orientée usage.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Chez{' '}
                <span className="text-violet-300 font-medium">NORALSY</span>,
                je pilote la migration complète d&apos;un site PHP/Laravel vers React :
                refonte frontend from scratch, modernisation UX, livraison d&apos;un
                produit maintenable sur le long terme.
              </p>
            </div>

            {/* Projets en cours */}
            <div className="mt-10 space-y-3">
              <p className="text-slate-600 text-xs font-medium tracking-widest uppercase mb-4">
                En ce moment
              </p>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-glass-card border border-violet-900/25">
                <div className="mt-1 w-2 h-2 rounded-full bg-violet-400 shrink-0 animate-ping" />
                <div>
                  <p className="text-white text-sm font-semibold">NORALSY — Alternance</p>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Migration PHP/Laravel → React · Refonte frontend complète
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-glass-card border border-violet-900/25">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">FrostApp — Projet perso</p>
                  <p className="text-slate-500 text-sm mt-0.5">
                    App mobile communautaire · Auth JWT · Chat temps réel · Micro-services
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Skills – 2 colonnes ── */}
          <RevealOnScroll delay={200} className="md:col-span-2">
            <p className="text-slate-600 text-xs font-medium tracking-widest uppercase mb-5">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${skill.color} hover:scale-105 transition-transform duration-150 cursor-default`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
