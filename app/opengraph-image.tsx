import { ImageResponse } from 'next/og';

export const alt = 'Wave Fitness — Train Natural. Move Different.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          backgroundColor: '#08090b',
          color: '#f4f1eb',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              border: '3px solid #f23b30',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '34px',
              color: '#f4f1eb'
            }}
          >
            W
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '0.05em' }}>WAVE FITNESS</span>
            <span style={{ fontSize: '14px', letterSpacing: '0.25em', color: '#f23b30', fontWeight: 700 }}>TAMBARAM EAST</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '18px', letterSpacing: '0.2em', color: '#aaaab0', fontWeight: 700, textTransform: 'uppercase' }}>
            Camp Road Junction · Selaiyur · Chennai
          </span>
          <div style={{ fontSize: '80px', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', display: 'flex', flexDirection: 'column' }}>
            <span>TRAIN NATURAL.</span>
            <span style={{ color: '#f23b30' }}>MOVE DIFFERENT.</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #2a2a2f', paddingTop: '28px' }}>
          <span style={{ fontSize: '20px', color: '#ddd' }}>Memberships from Rs. 999/month · Unisex Gym</span>
          <span style={{ color: '#f23b30', fontWeight: 800, fontSize: '18px' }}>
            wavefitnesstambaram.in
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
