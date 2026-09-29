import type { Metadata } from 'next'
import DailyViewsChart, { type DailyRow } from '@/components/DailyViewsChart'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Stats | DevNights', robots: { index: false } }

type PageRow = { path: string; views: number; visits: number; views_7d: number }
type ClickRow = { label: string; clicks: number; clicks_7d: number }
type EventRow = { type: string; path: string; label: string | null; created_at: string }

async function query<T>(resource: string): Promise<T[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant')

  const res = await fetch(`${url}/rest/v1/${resource}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`)
  return res.json()
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-5 rounded-xl bg-glass-card border border-violet-900/30">
      <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
      <p className="font-display font-bold text-3xl text-white mt-1">{value}</p>
    </div>
  )
}

function Table({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <div className="rounded-xl border border-violet-900/30 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-violet-900/15 text-slate-400 text-left">
          <tr>
            {head.map((h, i) => (
              <th key={h} className={`px-4 py-2.5 font-medium ${i > 0 ? 'text-right' : ''}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={head.length} className="px-4 py-6 text-center text-slate-600">Aucune donnée</td>
            </tr>
          )}
          {rows.map((r, ri) => (
            <tr key={ri} className="border-t border-violet-900/20">
              {r.map((cell, i) => (
                <td key={i} className={`px-4 py-2.5 ${i > 0 ? 'text-right text-slate-300 tabular-nums' : 'text-white'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function StatsPage() {
  const [pages, clicks, recent, daily] = await Promise.all([
    query<PageRow>('stats_pages?select=*&order=views.desc'),
    query<ClickRow>('stats_clicks?select=*&order=clicks.desc'),
    query<EventRow>('events?select=type,path,label,created_at&order=created_at.desc&limit=25'),
    query<DailyRow>('stats_daily?select=*&order=day.asc'),
  ])

  const totalViews = pages.reduce((n, p) => n + p.views, 0)
  const totalClicks = clicks.reduce((n, c) => n + c.clicks, 0)
  const views7d = pages.reduce((n, p) => n + p.views_7d, 0)
  const clicks7d = clicks.reduce((n, c) => n + c.clicks_7d, 0)
  const fmt = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Paris' })

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <h1 className="font-display font-bold text-3xl text-white">Stats du portfolio</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card label="Vues" value={totalViews} />
        <Card label="Vues 7 j" value={views7d} />
        <Card label="Clics CTA" value={totalClicks} />
        <Card label="Clics 7 j" value={clicks7d} />
      </div>

      <section className="space-y-4">
        <h2 className="font-semibold text-white">Vues par jour · 30 derniers jours</h2>
        <div className="p-5 rounded-xl bg-glass-card border border-violet-900/30">
          <DailyViewsChart rows={daily} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-white">Clics par CTA</h2>
        <Table head={['CTA', 'Total', '7 jours']} rows={clicks.map((c) => [c.label, c.clicks, c.clicks_7d])} />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-white">Pages vues</h2>
        <Table
          head={['Page', 'Vues', 'Visites', '7 jours']}
          rows={pages.map((p) => [p.path, p.views, p.visits, p.views_7d])}
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-white">Derniers événements</h2>
        <Table
          head={['Événement', 'Page', 'Date']}
          rows={recent.map((e) => [
            e.type === 'click' ? `Clic · ${e.label}` : 'Vue',
            e.path,
            fmt.format(new Date(e.created_at)),
          ])}
        />
      </section>
    </main>
  )
}
