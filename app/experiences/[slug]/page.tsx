import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExperienceLogo from '@/components/ExperienceLogo'
import { CALENDLY_URL, experiences } from '@/lib/data'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const exp = experiences.find((e) => e.slug === params.slug)
  if (!exp) return {}
  return { title: `${exp.name} | Samy Khelfa`, description: exp.summary }
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-xl bg-glass-card border border-violet-900/30">
      <h2 className="font-display font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ExperiencePage({ params }: Props) {
  const exp = experiences.find((e) => e.slug === params.slug)
  if (!exp) notFound()

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <Link href="/#realisations" className="text-slate-500 hover:text-violet-300 text-sm transition-colors">
          ← Retour aux réalisations
        </Link>

        <div className="flex items-center gap-4 mt-8">
          <ExperienceLogo exp={exp} size="lg" />
          <div>
            <h1 className="font-display font-black text-4xl text-white">{exp.name}</h1>
            <p className="text-slate-400 text-sm mt-1">{exp.role}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {exp.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-md text-xs border border-violet-800/40 bg-violet-900/15 text-slate-300">
              {t}
            </span>
          ))}
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mt-10">{exp.context}</p>

        <div className="grid gap-5 mt-10">
          <Block title="Ce que je fais" items={exp.missions} />
          <Block title="Les défis" items={exp.challenges} />
          <Block title="Le résultat" items={exp.results} />
        </div>

        <div className="mt-12 p-6 rounded-xl border border-violet-700/40 bg-violet-900/10 text-center">
          <p className="text-white font-semibold">Un projet similaire en tête ?</p>
          <a
            href={CALENDLY_URL}
            data-track={`experience-${exp.slug}-calendly`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2.5 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold transition-colors"
          >
            On s&apos;appelle ?
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
