'use client'

import { useState } from 'react'

export type DailyRow = { day: string; views: number; visits: number }

const PLOT_HEIGHT = 180

const dayFmt = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', timeZone: 'UTC' })
const longFmt = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })

// Rounds the axis max up to a clean 1 / 2 / 5 × 10ⁿ step.
function niceMax(value: number): number {
  if (value <= 4) return 4
  const pow = 10 ** Math.floor(Math.log10(value))
  const step = [1, 2, 5, 10].find((s) => s * pow >= value / 4)! * pow
  return Math.ceil(value / step) * step
}

export default function DailyViewsChart({ rows }: { rows: DailyRow[] }) {
  const [active, setActive] = useState<number | null>(null)

  const peak = Math.max(0, ...rows.map((r) => r.views))
  const max = niceMax(peak)
  const ticks = [0, max / 2, max]
  const peakIndex = peak > 0 ? rows.findIndex((r) => r.views === peak) : -1
  const labelIndexes = new Set([0, Math.floor((rows.length - 1) / 2), rows.length - 1])
  const hovered = active !== null ? rows[active] : null

  return (
    <figure className="space-y-3">
      <div className="relative pl-8">
        {/* Gridlines and y-axis ticks */}
        <div className="absolute inset-y-0 left-0 right-0" style={{ height: PLOT_HEIGHT }} aria-hidden="true">
          {ticks.map((t) => (
            <div
              key={t}
              className="absolute left-8 right-0 border-t border-violet-900/30"
              style={{ bottom: (t / max) * PLOT_HEIGHT }}
            >
              <span className="absolute -left-8 -translate-y-1/2 w-6 text-right text-[11px] text-slate-500 tabular-nums">
                {t}
              </span>
            </div>
          ))}
        </div>

        {/* Columns; each slot is the full-height hover target */}
        <div className="relative flex items-end gap-[2px]" style={{ height: PLOT_HEIGHT }} onMouseLeave={() => setActive(null)}>
          {rows.map((r, i) => (
            <div
              key={r.day}
              className="relative flex-1 h-full flex items-end justify-center cursor-default"
              onMouseEnter={() => setActive(i)}
            >
              {i === active && <div className="absolute inset-0 bg-violet-400/5 rounded-sm" aria-hidden="true" />}
              <div
                className={`relative w-full max-w-[24px] rounded-t-[4px] transition-colors ${
                  active === null || active === i ? 'bg-violet-500' : 'bg-violet-500/50'
                }`}
                style={{ height: r.views > 0 ? Math.max(2, (r.views / max) * PLOT_HEIGHT) : 0 }}
              />
              {i === peakIndex && active === null && (
                <span className="absolute text-[11px] text-slate-300 tabular-nums" style={{ bottom: (r.views / max) * PLOT_HEIGHT + 4 }}>
                  {r.views}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Tooltip */}
        {hovered && active !== null && (
          <div
            className="absolute top-0 z-10 pointer-events-none px-3 py-2 rounded-lg bg-[#14142a] border border-violet-800/50 shadow-lg shadow-black/40 text-xs whitespace-nowrap"
            style={{
              left: `calc(2rem + (100% - 2rem) * ${(active + 0.5) / rows.length})`,
              transform: `translateX(${active > rows.length / 2 ? '-105%' : '5%'})`,
            }}
          >
            <p className="text-slate-400 first-letter:uppercase">{longFmt.format(new Date(hovered.day))}</p>
            <p className="text-white mt-1">
              <span className="inline-block w-2 h-2 rounded-sm bg-violet-500 mr-1.5" />
              {hovered.views} vue{hovered.views > 1 ? 's' : ''}
            </p>
            <p className="text-slate-400 mt-0.5 pl-3.5">
              {hovered.visits} visite{hovered.visits > 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* X-axis labels */}
        <div className="flex gap-[2px] mt-2" aria-hidden="true">
          {rows.map((r, i) => (
            <div key={r.day} className="flex-1 relative h-4">
              {labelIndexes.has(i) && (
                <span
                  className={`absolute text-[11px] text-slate-500 whitespace-nowrap ${
                    i === 0 ? 'left-0' : i === rows.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'
                  }`}
                >
                  {dayFmt.format(new Date(r.day))}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <details className="text-sm">
        <summary className="cursor-pointer text-slate-500 hover:text-slate-300 text-xs">Voir les données</summary>
        <table className="w-full mt-3">
          <thead className="text-slate-500 text-left">
            <tr>
              <th className="py-1 font-medium">Jour</th>
              <th className="py-1 font-medium text-right">Vues</th>
              <th className="py-1 font-medium text-right">Visites</th>
            </tr>
          </thead>
          <tbody>
            {[...rows].reverse().map((r) => (
              <tr key={r.day} className="border-t border-violet-900/20">
                <td className="py-1 text-slate-300">{dayFmt.format(new Date(r.day))}</td>
                <td className="py-1 text-right text-slate-300 tabular-nums">{r.views}</td>
                <td className="py-1 text-right text-slate-300 tabular-nums">{r.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  )
}
