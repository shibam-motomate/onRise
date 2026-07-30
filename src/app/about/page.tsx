'use client';

import React from 'react';
import { useNav } from '@/lib/nav';
import { brandValues, processSteps, team } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';
import { LeafMark } from '@/components/Brand';

const MAX = 1240;

export default function AboutPage() {
  const nav = useNav();

  return (
    <main>
      {/* hero */}
      <section style={{ position: 'relative', height: 460, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Placeholder label="Misty Darjeeling hillside · tea gardens at dawn" fit="cover" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,22,.5), rgba(20,28,22,.4))', pointerEvents: 'none' }} />
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 150, pointerEvents: 'none' }}>
          <path d="M0 200 L0 150 L210 100 L400 140 L560 90 L760 145 L980 95 L1200 140 L1440 110 L1440 200 Z" fill="#F4EEE1" fillOpacity=".22" />
        </svg>
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 40px' }}>
          <span style={{ color: '#CFC199', fontSize: 12, letterSpacing: '.4em', textTransform: 'uppercase', marginBottom: 18 }}>Est. in the hills of Darjeeling</span>
          <h1 style={{ fontFamily: 'var(--serif)', color: '#FCF9F2', fontSize: 62, margin: 0, fontWeight: 400 }}>Our Story</h1>
        </div>
      </section>

      {/* story */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '92px 40px' }}>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>Who we are</span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 42, lineHeight: 1.14, margin: '16px 0 22px', fontWeight: 400 }}>Furniture with Heart, Made in the Hills</h2>
            <p style={{ color: '#6E5C47', fontSize: 16, lineHeight: 1.75, margin: '0 0 18px' }}>Antoleena began on a misty morning above the tea gardens of Darjeeling — with a simple belief that a home should feel as restful as the mountains that raised us. We take our name from the light that rises first over the ridgeline — steady, quiet, and new every morning.</p>
            <p style={{ color: '#6E5C47', fontSize: 16, lineHeight: 1.75, margin: 0 }}>We work with hill artisans and slow-grown timber to build pieces that age gently and belong anywhere — soft greens, warm woods, and honest materials that carry a little of the highlands into your everyday.</p>
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/5', background: '#E5E3CE' }}>
            <Placeholder label="Artisan workshop · timber and hand tools" fit="cover" />
          </div>
        </div>
      </section>

      {/* values */}
      <section style={{ background: '#ECE3D1' }}>
        <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '84px 40px' }}>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 38, textAlign: 'center', margin: '0 0 46px', fontWeight: 400 }}>What We Stand For</h2>
          <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 26 }}>
            {brandValues.map((v) => (
              <div key={v.label} style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, padding: '30px 26px', textAlign: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: 12, background: '#E7DBC5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  <span style={{ fontSize: 24 }}>{v.icon}</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#382D21', lineHeight: 1.4 }}>{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '92px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>The craft</span>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '12px 0 0', fontWeight: 400 }}>How Every Piece Is Made</h2>
        </div>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {processSteps.map((st) => (
            <div key={st.n}>
              <div className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 44, color: '#C6C29B', marginBottom: 14 }}>{st.n}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#382D21', margin: '0 0 12px' }}>{st.title}</h3>
              <p style={{ color: '#6E5C47', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{st.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* mission band */}
      <section style={{ background: '#3A3123' }}>
        <div className="rw" style={{ maxWidth: 900, margin: '0 auto', padding: '84px 40px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><LeafMark size={40} stem="#C9BE95" leaf="#AEB483" /></div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 30, lineHeight: 1.5, color: '#F5EFE3', margin: 0 }}>“We don&apos;t make furniture to fill a room. We make it to make a room feel like the hills — quiet, warm, and yours.”</p>
          <p style={{ color: '#B3A88E', fontSize: 14.5, margin: '26px 0 0' }}>— Pema Sherpa, Founder</p>
        </div>
      </section>

      {/* team */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '92px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>The people</span>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '12px 0 0', fontWeight: 400 }}>Hands Behind Antoleena</h2>
        </div>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
          {team.map((m) => (
            <div key={m.name} style={{ textAlign: 'center' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 14, overflow: 'hidden', background: '#E9DDCA', marginBottom: 18 }}>
                <Placeholder label={`${m.name} — ${m.role}`} fit="cover" />
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#382D21' }}>{m.name}</div>
              <div style={{ fontSize: 14, color: '#8E7A61', marginTop: 4 }}>{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ECE3D1' }}>
        <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '76px 40px', textAlign: 'center' }}>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '0 0 14px', fontWeight: 400 }}>Bring the Hills Home</h2>
          <p style={{ color: '#6E5C47', fontSize: 16, margin: '0 0 30px' }}>Explore our latest collection of calm, hand-made pieces.</p>
          <div onClick={() => nav.shop('All')} className="hv-primary" style={{ display: 'inline-block', cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', padding: '15px 34px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Explore the Shop</div>
        </div>
      </section>
    </main>
  );
}
