import RevealOnScroll from './RevealOnScroll'
import SectionHeader from './SectionHeader'
import { stack } from '@/lib/data'

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Stack technique"
          subtitle="Un écosystème JavaScript de bout en bout, du mobile à la base de données."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {stack.map((group, i) => (
            <RevealOnScroll key={group.title} delay={i * 60}>
              <div className="h-full p-5 rounded-xl bg-glass-card border border-violet-900/30">
                <p className="flex items-center gap-2 font-semibold text-white text-sm">
                  <span aria-hidden="true">{group.icon}</span>
                  {group.title}
                </p>
                <ul className="mt-3 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-slate-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
