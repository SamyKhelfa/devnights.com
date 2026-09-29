import Link from 'next/link'
import RevealOnScroll from './RevealOnScroll'
import SectionHeader from './SectionHeader'
import ExperienceLogo from './ExperienceLogo'
import { experiences } from '@/lib/data'

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Ils m'ont fait confiance"
          subtitle="Des projets concrets. Clique sur une carte pour découvrir le détail."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {experiences.map((e, i) => (
            <RevealOnScroll key={e.slug} delay={i * 80}>
              <Link
                href={`/experiences/${e.slug}`}
                className="group block h-full p-6 rounded-xl bg-glass-card border border-violet-900/30 hover:border-violet-600/50 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <ExperienceLogo exp={e} />
                  <div className="flex-1">
                    <p className="text-white font-semibold">{e.name}</p>
                    <p className="text-slate-500 text-xs">{e.role}</p>
                  </div>
                  {e.current && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                      En cours
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mt-4">{e.summary}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {e.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] border border-violet-900/40 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-violet-400 text-sm font-medium mt-5 group-hover:text-violet-300">
                  Voir le détail →
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
