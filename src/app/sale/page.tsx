'use client';

import React, { useEffect, useState } from 'react';
import { products, money, parsePrice, saleEndTs, saleDiscounts, saleOffers } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

const MAX = 1240;
const pad2 = (n: number) => String(n).padStart(2, '0');

function CountBox({ value, label, gold }: { value: string; label: string; gold?: boolean }) {
  return (
    <div style={{ background: 'rgba(255,255,255,.08)', border: '1px solid #3C4A41', borderRadius: 12, padding: '16px 8px', minWidth: 78 }}>
      <div className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 38, color: gold ? '#D8C49A' : '#F5F2EB', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11.5, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B3A88E', marginTop: 8 }}>{label}</div>
    </div>
  );
}

export default function SalePage() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const r = Math.max(0, saleEndTs - (now ?? saleEndTs));
  const cd = {
    days: pad2(Math.floor(r / 86400000)),
    hours: pad2(Math.floor((r % 86400000) / 3600000)),
    mins: pad2(Math.floor((r % 3600000) / 60000)),
    secs: pad2(Math.floor((r % 60000) / 1000)),
  };

  const saleItems = products.slice(0, 8).map((p, i) => {
    const d = saleDiscounts[i % saleDiscounts.length];
    return { product: p, sale: { was: p.price, now: money(parsePrice(p.price) * (1 - d / 100)), pct: '-' + d + '%' } };
  });

  return (
    <main>
      {/* hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#26312B' }}>
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 220, pointerEvents: 'none', opacity: 0.5 }}>
          <path d="M0 260 L220 120 L400 190 L560 90 L760 200 L980 100 L1200 190 L1440 120 L1440 260 Z" fill="none" stroke="#4C5D50" strokeWidth="2" />
          <path d="M0 260 L180 170 L360 210 L560 150 L780 220 L1000 160 L1240 215 L1440 175 L1440 260 Z" fill="#33443B" fillOpacity=".5" />
        </svg>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: MAX, margin: '0 auto', padding: '84px 40px 90px', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: '#B5622F', color: '#FCEFE6', fontSize: 12.5, letterSpacing: '.2em', textTransform: 'uppercase', padding: '7px 16px', borderRadius: 999, marginBottom: 22 }}>Limited time · Monsoon Sale</span>
          <h1 className="rb" style={{ fontFamily: 'var(--serif)', color: '#FCF9F2', fontSize: 64, lineHeight: 1.05, margin: '0 0 16px', fontWeight: 400 }}>Up to 40% Off</h1>
          <p style={{ color: '#D0C6B2', fontSize: 17, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.6 }}>Refresh your rooms as the mist rolls in — selected sofas, lighting, storage and more.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 38, flexWrap: 'wrap' }}>
            <CountBox value={cd.days} label="Days" />
            <CountBox value={cd.hours} label="Hours" />
            <CountBox value={cd.mins} label="Mins" />
            <CountBox value={cd.secs} label="Secs" gold />
          </div>
        </div>
      </section>

      {/* offers */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '70px 40px 20px' }}>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {saleOffers.map((o) => (
            <div key={o.code} style={{ background: '#EEE9DE', border: '1px dashed #A9C0A6', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: '0 0 10px', fontWeight: 400, color: '#332F28' }}>{o.title}</h3>
              <p style={{ color: '#6E6252', fontSize: 14.5, lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>{o.desc}</p>
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid #E2D7C4', borderRadius: 8, padding: '9px 14px' }}>
                <span style={{ fontSize: 12, color: '#6E8A72', letterSpacing: '.1em', textTransform: 'uppercase' }}>Code</span>
                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '.06em', color: '#332F28' }}>{o.code}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* deals grid */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '60px 40px 100px' }}>
        <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '0 0 34px', fontWeight: 400 }}>On Sale Now</h2>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px 26px' }}>
          {saleItems.map(({ product, sale }) => (
            <ProductCard key={product.name} product={product} sale={sale} />
          ))}
        </div>
      </section>
    </main>
  );
}
