import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#111',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 'bold',
          }}
        >
          <span style={{ color: '#ffffff' }}>NBRC</span>
          <span style={{ color: '#0D9488' }}>prep</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#999999',
            marginTop: 24,
          }}
        >
          Pass Your Respiratory Therapy Board Exams
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
