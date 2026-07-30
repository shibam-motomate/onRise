'use client';

import React, { useState } from 'react';
import { contactMethods } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';

const MAX = 1240;
const inputStyle: React.CSSProperties = { padding: '14px 15px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14.5, fontFamily: 'inherit', color: '#382D21', background: '#fff', outline: 'none' };

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <section style={{ background: '#ECE3D1', borderBottom: '1px solid #E3D5BB' }}>
        <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '60px 40px 54px', position: 'relative' }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'absolute', right: 40, top: 34, width: 340, height: 90, opacity: 0.5, pointerEvents: 'none' }}>
            <path d="M0 120 L180 40 L320 90 L470 30 L640 100 L820 45 L1010 95 L1180 40 L1330 90 L1440 60 L1440 120 Z" fill="none" stroke="#B7BE8C" strokeWidth="2" />
          </svg>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>We&apos;d love to hear from you</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 54, margin: '12px 0 12px', fontWeight: 400 }}>Get in Touch</h1>
          <p style={{ color: '#6E5C47', fontSize: 16, maxWidth: 540, margin: 0, lineHeight: 1.6 }}>Questions about a piece, styling advice, or a bulk order for your space — our hill studio is happy to help.</p>
        </div>
      </section>

      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '70px 40px 100px' }}>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* form / success */}
          <div>
            {sent ? (
              <div style={{ background: '#EDEFDF', border: '1px solid #E4D6BC', borderRadius: 14, padding: '48px 40px', textAlign: 'center', animation: 'deoFade .4s ease both' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#6E7A45" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 30, margin: '0 0 10px', fontWeight: 400 }}>Message sent</h2>
                <p style={{ color: '#6E5C47', fontSize: 15.5, lineHeight: 1.7, margin: 0 }}>Thank you for reaching out. Our team will reply within one business day — usually much sooner.</p>
              </div>
            ) : (
              <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input placeholder="First name" className="deo-input" style={inputStyle} />
                <input placeholder="Last name" className="deo-input" style={inputStyle} />
                <input type="email" placeholder="Email address" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                <input placeholder="Subject" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                <textarea placeholder="How can we help?" rows={6} className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }} />
                <div onClick={() => { setSent(true); window.scrollTo(0, 0); }} className="hv-primary" style={{ gridColumn: '1 / -1', cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', textAlign: 'center', padding: 15, borderRadius: 8, fontSize: 15.5, fontWeight: 600 }}>Send Message</div>
              </div>
            )}
          </div>
          {/* info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {contactMethods.map((m) => (
              <div key={m.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: '#E7DBC5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#7E8757', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 5 }}>{m.label}</div>
                  <div style={{ fontSize: 15.5, color: '#382D21', fontWeight: 500, lineHeight: 1.45 }}>{m.value}</div>
                </div>
              </div>
            ))}
            <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '3/2', background: '#E9DDCA', marginTop: 6 }}>
              <Placeholder label="Map · Darjeeling studio location" fit="cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
