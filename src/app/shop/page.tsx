'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useNav } from '@/lib/nav';
import { products, categories } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

const MAX = 1240;

function ShopInner() {
  const nav = useNav();
  const params = useSearchParams();
  const initial = params.get('cat') ?? 'All';
  const [cat, setCat] = useState(categories.includes(initial) ? initial : 'All');

  const filtered = products.filter((p) => cat === 'All' || p.category === cat);

  return (
    <main>
      <section style={{ background: '#EEE9DE', borderBottom: '1px solid #E6DBC8' }}>
        <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '56px 40px 50px', position: 'relative' }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'absolute', right: 40, top: 30, width: 340, height: 90, opacity: 0.5, pointerEvents: 'none' }}>
            <path d="M0 120 L180 40 L320 90 L470 30 L640 100 L820 45 L1010 95 L1180 40 L1330 90 L1440 60 L1440 120 Z" fill="none" stroke="#A9C29E" strokeWidth="2" />
          </svg>
          <div style={{ fontSize: 13, color: '#857766', marginBottom: 12 }}>
            <span onClick={nav.home} className="hv-link" style={{ cursor: 'pointer' }}>Home</span> &nbsp;/&nbsp; Shop
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 52, margin: '0 0 12px', fontWeight: 400 }}>Explore All Furniture Pieces</h1>
          <p style={{ color: '#6E6252', fontSize: 16, maxWidth: 520, margin: 0, lineHeight: 1.6 }}>Timeless furniture for every room — crafted in the hills, made for slow living.</p>
        </div>
      </section>

      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '40px 40px 100px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
          {categories.map((label) => {
            const active = cat === label;
            return (
              <div
                key={label}
                onClick={() => setCat(label)}
                style={{ cursor: 'pointer', padding: '10px 20px', borderRadius: 999, fontSize: 14, fontWeight: 500, border: `1px solid ${active ? '#332F28' : '#E2D7C4'}`, background: active ? '#332F28' : '#FFFFFF', color: active ? '#F5F2EB' : '#5E5646' }}
              >
                {label}
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: 14, color: '#857766', marginBottom: 22 }}>{filtered.length} pieces</div>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px 26px' }}>
          {filtered.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <ShopInner />
    </Suspense>
  );
}
