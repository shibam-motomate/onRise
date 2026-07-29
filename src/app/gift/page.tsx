'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { giftSteps, giftPresets } from '@/lib/data';
import { LogoMark } from '@/components/icons';

const inputStyle: React.CSSProperties = { padding: '13px 15px', border: '1px solid #E2D7C4', borderRadius: 8, fontSize: 14.5, fontFamily: 'inherit', color: '#332F28', background: '#fff', outline: 'none' };

export default function GiftPage() {
  const s = useStore();
  const [amount, setAmount] = useState(100);
  const amountLabel = '$' + (amount || 0);

  return (
    <main>
      <section style={{ background: '#EEE9DE', borderBottom: '1px solid #E6DBC8' }}>
        <div className="rw" style={{ maxWidth: 1240, margin: '0 auto', padding: '60px 40px 54px', textAlign: 'center' }}>
          <span style={{ color: '#5E7A63', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>The perfect present</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 56, margin: '12px 0 12px', fontWeight: 400 }}>Give the Gift of the Hills</h1>
          <p style={{ color: '#6E6252', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>A OnRise gift card lets them choose their own calm — delivered by email, redeemable on anything, and it never expires.</p>
        </div>
      </section>

      <section className="rw" style={{ maxWidth: 1180, margin: '0 auto', padding: '70px 40px 90px' }}>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* card visual */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ position: 'relative', aspectRatio: '8/5', borderRadius: 18, overflow: 'hidden', background: 'linear-gradient(135deg, #3A473E 0%, #5E7A63 100%)', boxShadow: '0 24px 60px rgba(24,32,26,.28)', padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 90, opacity: 0.35 }}>
                <path d="M0 120 L70 50 L120 85 L180 40 L250 90 L320 45 L380 85 L400 65 L400 120 Z" fill="none" stroke="#E4D6BC" strokeWidth="2" />
              </svg>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10 }}>
                <LogoMark stroke="#F5F2EB" size={26} showAccent={false} />
                <span style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '.22em', color: '#F5F2EB' }}>ONRISE</span>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: 12.5, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D0C6B2', marginBottom: 6 }}>Gift Card</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 52, color: '#FCF9F2', lineHeight: 1 }}>{amountLabel}</div>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              {giftSteps.map((st) => (
                <div key={st.n} style={{ display: 'flex', gap: 16, marginBottom: 22 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 26, color: '#B7C7B4', flexShrink: 0 }}>{st.n}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#332F28', marginBottom: 4 }}>{st.title}</div>
                    <p style={{ color: '#6E6252', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{st.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* form */}
          <div style={{ background: '#fff', border: '1px solid #E8DDCA', borderRadius: 16, padding: 34 }}>
            <div style={{ fontSize: 13, color: '#6E8A72', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>Amount</div>
            <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
              {giftPresets.map((v) => {
                const active = amount === v;
                return (
                  <div key={v} onClick={() => setAmount(v)} style={{ cursor: 'pointer', textAlign: 'center', padding: '14px 0', borderRadius: 10, fontSize: 16, fontWeight: 600, border: `1.5px solid ${active ? '#332F28' : '#E2D7C4'}`, background: active ? '#332F28' : '#FFFFFF', color: active ? '#F5F2EB' : '#5E5646' }}>${v}</div>
                );
              })}
            </div>
            <input type="number" onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value, 10) || 0))} placeholder="Or enter a custom amount" className="deo-input" style={{ width: '100%', ...inputStyle, marginBottom: 26 }} />

            <div style={{ fontSize: 13, color: '#6E8A72', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>Recipient</div>
            <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 26 }}>
              <input placeholder="Recipient name" className="deo-input" style={inputStyle} />
              <input type="email" placeholder="Recipient email" className="deo-input" style={inputStyle} />
              <input placeholder="Your name" className="deo-input" style={inputStyle} />
              <input type="date" className="deo-input" style={{ ...inputStyle, color: '#5E5646' }} />
              <textarea placeholder="Add a personal message (optional)" rows={4} className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }} />
            </div>

            <div onClick={() => s.addGiftCard(amount || 0)} className="hv-primary" style={{ cursor: 'pointer', background: '#26332B', color: '#F5F2EB', textAlign: 'center', padding: 16, borderRadius: 8, fontSize: 15.5, fontWeight: 600 }}>Add {amountLabel} Gift Card to Cart</div>
            <p style={{ fontSize: 12.5, color: '#857766', textAlign: 'center', margin: '14px 0 0', lineHeight: 1.5 }}>Delivered by email · redeemable on everything · never expires.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
