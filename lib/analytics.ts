const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

type TrackEvent =
  | { type: 'pageview'; path: string }
  | { type: 'click'; path: string; label: string }

function sessionId(): string | null {
  try {
    let id = sessionStorage.getItem('dn_session')
    if (!id) {
      id = crypto.randomUUID()
      sessionStorage.setItem('dn_session', id)
    }
    return id
  } catch {
    return null
  }
}

export function track(event: TrackEvent) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return
  if (process.env.NODE_ENV !== 'production') return

  const body = {
    type: event.type,
    path: event.path.slice(0, 200),
    label: event.type === 'click' ? event.label.slice(0, 100) : null,
    referrer: document.referrer ? document.referrer.slice(0, 500) : null,
    session_id: sessionId(),
  }

  // keepalive lets the request finish when the click navigates away
  fetch(`${SUPABASE_URL}/rest/v1/events`, {
    method: 'POST',
    keepalive: true,
    headers: {
      apikey: SUPABASE_KEY,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(body),
  }).catch(() => {})
}
