import { NextResponse, type NextRequest } from 'next/server'
import { STATS_COOKIE, statsToken } from '@/lib/statsAuth'

// Guards /stats behind the login form. The password is STATS_PASSWORD.
export async function middleware(req: NextRequest) {
  const password = process.env.STATS_PASSWORD
  if (!password) return new NextResponse('Stats désactivées', { status: 404 })

  if (req.nextUrl.pathname === '/stats/login') return NextResponse.next()

  const cookie = req.cookies.get(STATS_COOKIE)?.value
  if (cookie && cookie === (await statsToken(password))) return NextResponse.next()

  return NextResponse.redirect(new URL('/stats/login', req.url))
}

export const config = { matcher: '/stats/:path*' }
