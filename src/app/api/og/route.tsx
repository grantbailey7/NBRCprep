import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const title = (searchParams.get('title') || 'NBRCprep').slice(0, 60)
  const description = (searchParams.get('description') || 'Master the NBRC exams with confidence').slice(0, 120)
  const type = searchParams.get('type') || 'page'

  const badgeTypes: Record<string, string> = {
    guide: 'Study Guide',
    topic: 'Topic Deep Dive',
    'cheat-sheet': 'Cheat Sheet',
    exam: 'Practice Exam',
    blog: 'Blog Post',
    resource: 'Resource',
  }

  const badgeLabel = badgeTypes[type] || null

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#111111',
          padding: '60px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top row: logo + badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              NBRC
            </span>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#0D9488',
                letterSpacing: '-0.02em',
              }}
            >
              prep
            </span>
          </div>

          {/* Badge */}
          {badgeLabel && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(13, 148, 136, 0.15)',
                border: '1px solid rgba(13, 148, 136, 0.4)',
                borderRadius: 9999,
                padding: '8px 20px',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#0D9488',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {badgeLabel}
              </span>
            </div>
          )}
        </div>

        {/* Center: title + description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#9CA3AF',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom row: decorative line + domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 60,
              height: 4,
              backgroundColor: '#0D9488',
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#0D9488',
              letterSpacing: '0.02em',
            }}
          >
            nbrcprep.app
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
