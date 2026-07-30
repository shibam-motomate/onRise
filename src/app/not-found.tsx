import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main style={{ maxWidth: 520, margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 44, margin: '0 0 12px', fontWeight: 400 }}>Page not found</h1>
      <p style={{ fontSize: 15.5, color: '#8E7A61', margin: '0 0 26px' }}>We couldn&apos;t find the piece you were looking for.</p>
      <Link href="/" style={{ display: 'inline-block', background: '#463A2A', color: '#F5EFE3', padding: '14px 30px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Back to home</Link>
    </main>
  );
}
