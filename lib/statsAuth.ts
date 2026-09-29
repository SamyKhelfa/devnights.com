export const STATS_COOKIE = 'dn_stats'

// Cookie value is a SHA-256 of the password, so the password itself never sits in the browser.
export async function statsToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`devnights-stats:${password}`)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, '0')).join('')
}
