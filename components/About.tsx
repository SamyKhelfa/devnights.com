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
    <section id="about" className="py-28 px-6 relative">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-violet-700/6 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <RevealOnScroll>
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            À propos
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Qui suis-je ?
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-600 to-purple-400 rounded-full mt-4 mb-16" />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ── Text column ── */}
          <RevealOnScroll delay={100}>
            <div className="space-y-5">
              <p className="text-slate-300 text-lg leading-relaxed">
                Je suis{' '}
                <span className="text-white font-semibold">Samy Khelfa</span>,
                développeur fullstack en alternance chez{' '}
                <span className="text-violet-300 font-medium">NORALSY</span>, où je
                pilote la migration complète d&apos;un site PHP/Laravel vers React.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Avant de coder, j&apos;ai passé plusieurs années en support technique —
                à gérer des incidents, comprendre les blocages utilisateurs et
                communiquer clairement sous pression. C&apos;est là que j&apos;ai compris
                que la meilleure tech ne sert à rien si elle ne répond pas à un vrai
                besoin.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Aujourd&apos;hui je construis des applications avec cette double
                lecture : <span className="text-slate-300">technique</span> et{' '}
                <span className="text-slate-300">orientée usage</span>. Je travaille
                actuellement sur{' '}
                <span className="text-violet-300 font-medium">FrostApp</span>, une app
                mobile communautaire avec auth JWT, chat temps réel et architecture
                micro-services.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Années en support tech', value: '3+' },
                  { label: 'Technologies maîtrisées', value: '12+' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-glass-card rounded-xl p-5 border border-violet-900/25"
                  >
                    <div className="font-display font-bold text-3xl text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Skills column ── */}
          <RevealOnScroll delay={200}>
            <h3 className="font-display font-semibold text-xl text-white mb-6">
              Mes compétences
            </h3>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium border ${skill.color} hover:scale-105 transition-transform duration-150 cursor-default`}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Decorative code block */}
            <div className="bg-glass-card rounded-xl p-5 border border-violet-900/25 font-mono text-sm">
              {/* Dots */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-slate-600 text-xs">developer.ts</span>
              </div>

              <div className="space-y-1.5 leading-relaxed">
                <p>
                  <span className="text-violet-400">const </span>
                  <span className="text-blue-300">samy</span>
                  <span className="text-white"> = </span>
                  <span className="text-white">{'{'}</span>
                </p>
                <p className="pl-5">
                  <span className="text-green-300">role</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-300">&quot;Fullstack Developer&quot;</span>
                  <span className="text-slate-600">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-green-300">frontend</span>
                  <span className="text-white">: [</span>
                  <span className="text-amber-300">&quot;React&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-amber-300">&quot;React Native&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-amber-300">&quot;TypeScript&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-slate-600">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-green-300">backend</span>
                  <span className="text-white">: [</span>
                  <span className="text-amber-300">&quot;Node.js&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-amber-300">&quot;NestJS&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-amber-300">&quot;Prisma&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-slate-600">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-green-300">currentProject</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-300">&quot;FrostApp&quot;</span>
                  <span className="text-slate-600">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-green-300">available</span>
                  <span className="text-white">: </span>
                  <span className="text-violet-300">true</span>
                </p>
                <p>
                  <span className="text-white">{'}'}</span>
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
