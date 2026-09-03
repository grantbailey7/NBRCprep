import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED_COUNTRIES = new Set(['US'])

const VERIFIED_BOT_PATTERNS = [
  /googlebot/i, /google-inspectiontool/i, /google-extended/i,
  /storebot-google/i, /google-safety/i,
  /apis-google/i, /mediapartners-google/i, /adsbot-google/i,
  /feedfetcher-google/i, /google favicon/i,
  /bingbot/i, /msnbot/i, /adidxbot/i, /bingpreview/i,
  /slurp/i, /duckduckbot/i, /baiduspider/i,
  /yandexbot/i, /facebot/i, /ia_archiver/i, /applebot/i,
  /linkedinbot/i, /twitterbot/i, /whatsapp/i, /slack/i,
  /telegrambot/i, /discordbot/i, /pinterestbot/i,
  /semrushbot/i, /ahrefsbot/i, /dotbot/i, /rogerbot/i,
  /screaming frog/i, /gtmetrix/i,
  /uptimerobot/i, /sitemap/i, /feedfetcher/i,
  /vercel/i, /nextjs/i, /stripe/i,
  /petalbot/i, /bytespider/i, /gptbot/i, /chatgpt-user/i,
  /claudebot/i, /anthropic/i,
]

function isVerifiedBot(userAgent: string): boolean {
  return VERIFIED_BOT_PATTERNS.some((p) => p.test(userAgent))
}

function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/api/webhooks') ||
    pathname.startsWith('/api/stripe') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.woff2') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js')
  )
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  if (isStaticAsset(pathname)) return NextResponse.next()

  const userAgent = req.headers.get('user-agent') || ''
  if (isVerifiedBot(userAgent)) return NextResponse.next()

  const country = req.headers.get('x-vercel-ip-country') || ''

  if (!country || country === 'XX') return NextResponse.next()

  if (!ALLOWED_COUNTRIES.has(country)) {
    return new NextResponse(
      `<!DOCTYPE html><html><head><title>Unavailable</title></head>
       <body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f9fafb">
         <div style="text-align:center;max-width:400px">
           <h1 style="font-size:24px;color:#111">Not Available in Your Region</h1>
           <p style="color:#666;margin-top:8px">This service is currently only available in the United States.</p>
         </div>
       </body></html>`,
      { status: 403, headers: { 'Content-Type': 'text/html' } }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
