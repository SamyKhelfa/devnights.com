import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { STATS_COOKIE, statsToken } from '@/lib/statsAuth'

export const metadata: Metadata = { title: 'Connexion | Stats', robots: { index: false } }

async function login(formData: FormData) {
  'use server'

  const password = process.env.STATS_PASSWORD
  if (!password || formData.get('password') !== password) redirect('/stats/login?error=1')

  cookies().set(STATS_COOKIE, await statsToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/stats',
    maxAge: 60 * 60 * 24 * 30,
  })
  redirect('/stats')
}

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <form action={login} className="w-full max-w-sm p-6 rounded-xl bg-glass-card border border-violet-900/30 space-y-4">
        <h1 className="font-display font-bold text-2xl text-white">Stats du portfolio</h1>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          autoFocus
          required
          className="w-full px-4 py-2.5 rounded-lg bg-[#0d0d1c] border border-violet-900/40 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500"
        />
        {searchParams.error && <p className="text-rose-400 text-sm">Mot de passe incorrect.</p>}
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold transition-colors"
        >
          Se connecter
        </button>
      </form>
    </main>
  )
}
