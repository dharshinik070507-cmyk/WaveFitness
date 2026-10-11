import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | Wave Fitness',
  description: 'The page you are looking for does not exist. Return to Wave Fitness home.'
};

export default function NotFound() {
  return (
    <main className="pageWrap">
      <div className="container center">
        <span className="eyebrow"><span className="redDot" />404 / PAGE NOT FOUND</span>
        <h1 className="display">LOST YOUR<br /><em>RHYTHM?</em></h1>
        <p className="muted lead" style={{ margin: '0 auto 32px' }}>
          The page you requested could not be located. Let's get you back on track to the gym floor.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn primary" href="/">
            RETURN HOME ↗
          </Link>
          <Link className="btn outline" href="/contact">
            CONTACT TEAM
          </Link>
        </div>
      </div>
    </main>
  );
}
