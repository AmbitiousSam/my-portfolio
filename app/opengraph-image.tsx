import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Siva Kumar — Platform & Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.5,
            display: 'flex',
          }}
        />

        {/* Radial vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 20%, #0a0a0a 100%)',
            display: 'flex',
          }}
        />

        {/* Left blue accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(to bottom, transparent, #3b82f6 20%, #3b82f6 80%, transparent)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px 88px',
            height: '100%',
          }}
        >
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* SK avatar */}
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: '#111111',
                border: '1px solid #222222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.5px',
              }}
            >
              SK
            </div>
            <span style={{ color: '#555555', fontSize: '18px', fontWeight: 500 }}>
              sivakumar.dev
            </span>

            {/* Available pill — right side */}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', background: '#0d1f11', border: '1px solid #1e3a24', borderRadius: '99px', padding: '8px 16px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'flex' }} />
              <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
                OPEN TO WORK
              </span>
            </div>
          </div>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '0' }}>
                <span style={{ fontSize: '72px', fontWeight: 800, color: '#f5f5f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
                  Platform &amp; Full&#8209;Stack{' '}
                </span>
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ fontSize: '72px', fontWeight: 800, color: '#3b82f6', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
                  Engineer
                </span>
              </div>
            </div>

            <p style={{ color: '#666666', fontSize: '22px', fontWeight: 400, lineHeight: 1.5, margin: 0, maxWidth: '700px' }}>
              AWS infrastructure · Full-stack Rails/React · AI workflow systems
              <br />
              4+ years · US product company · Hyderabad, India
            </p>
          </div>

          {/* Bottom row — skill tags */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              'AWS SA Professional',
              'Rails · Go · Python',
              'React · Next.js',
              'Terraform · CDK',
              'Remote-Ready',
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 16px',
                  borderRadius: '99px',
                  border: '1px solid #222222',
                  background: '#111111',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: 500,
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
