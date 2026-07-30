'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { giftSteps, giftPresets } from '@/lib/data';
import { BrandLogo } from '@/components/Brand';

const inputStyle: React.CSSProperties = { padding: '13px 15px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14.5, fontFamily: 'inherit', color: '#382D21', background: '#fff', outline: 'none' };

export default function GiftPage() {
  const s = useStore();
  const [amount, setAmount] = useState(100);
  const amountLabel = '$' + (amount || 0);

  return (
    <main>
      <section style={{ background: '#ECE3D1', borderBottom: '1px solid #E3D5BB' }}>
        <div className="rw" style={{ maxWidth: 1240, margin: '0 auto', padding: '60px 40px 54px', textAlign: 'center' }}>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>The perfect present</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 56, margin: '12px 0 12px', fontWeight: 400 }}>Give the Gift of the Hills</h1>
          <p style={{ color: '#6E5C47', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>An Antoleena gift card lets them choose their own calm — delivered by email, redeemable on anything, and it never expires.</p>
        </div>
      </section>

      <section className="rw" style={{ maxWidth: 1180, margin: '0 auto', padding: '70px 40px 90px' }}>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* card visual */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ position: 'relative', aspectRatio: '8/5', borderRadius: 18, overflow: 'hidden', background: 'linear-gradient(135deg, #574936 0%, #6E7A45 100%)', boxShadow: '0 24px 60px rgba(24,32,26,.28)', padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 90, opacity: 0.35 }}>
                <path d="M0 120 L70 50 L120 85 L180 40 L250 90 L320 45 L380 85 L400 65 L400 120 Z" fill="none" stroke="#E4D6BC" strokeWidth="2" />
              </svg>
              <div style={{ position: 'relative' }}>
                <BrandLogo size="sm" onDark />
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: 12.5, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D0C6B2', marginBottom: 6 }}>Gift Card</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 52, color: '#FCF9F2', lineHeight: 1 }}>{amountLabel}</div>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              {giftSteps.map((st) => (
                <div key={st.n} style={{ display: 'flex', gap: 16, marginBottom: 22 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 26, color: '#C6C29B', flexShrink: 0 }}>{st.n}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#382D21', marginBottom: 4 }}>{st.title}</div>
                    <p style={{ color: '#6E5C47', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{st.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* form */}
          <div style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 16, padding: 34 }}>
            <div style={{ fontSize: 13, color: '#7E8757', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>Amount</div>
            <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
              {giftPresets.map((v) => {
                const active = amount === v;
                return (
                  <div key={v} onClick={() => setAmount(v)} style={{ cursor: 'pointer', textAlign: 'center', padding: '14px 0', borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1.5px solid ${active ? '#382D21' : '#DFD1B7'}`, background: active ? '#382D21' : '#FFFFFF', color: active ? '#F5EFE3' : '#5C4C39' }}>${v}</div>
                );
              })}
            </div>
            <input type="number" onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value, 10) || 0))} placeholder="Or enter a custom amount" className="deo-input" style={{ width: '100%', ...inputStyle, marginBottom: 26 }} />

            <div style={{ fontSize: 13, color: '#7E8757', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>Recipient</div>
            <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 26 }}>
              <input placeholder="Recipient name" className="deo-input" style={inputStyle} />
              <input type="email" placeholder="Recipient email" className="deo-input" style={inputStyle} />
              <input placeholder="Your name" className="deo-input" style={inputStyle} />
              <input type="date" className="deo-input" style={{ ...inputStyle, color: '#5C4C39' }} />
              <textarea placeholder="Add a personal message (optional)" rows={4} className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }} />
            </div>

            <div onClick={() => s.addGiftCard(amount || 0)} className="hv-primary" style={{ cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', textAlign: 'center', padding: 16, borderRadius: 8, fontSize: 15.5, fontWeight: 600 }}>Add {amountLabel} Gift Card to Cart</div>
            <p style={{ fontSize: 12.5, color: '#8E7A61', textAlign: 'center', margin: '14px 0 0', lineHeight: 1.5 }}>Delivered by email · redeemable on everything · never expires.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
