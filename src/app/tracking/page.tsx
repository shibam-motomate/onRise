'use client';

import React, { useState } from 'react';
import { products, trackSteps, trackedOrder } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';

const MAX = 1240;

export default function TrackingPage() {
  const [tracked, setTracked] = useState(false);

  const trackItems = [products[2], products[0]].map((p) => ({ name: p.name, qty: 1, price: p.price }));

  const steps = trackSteps.map((s, i, arr) => ({
    ...s,
    done: s.state === 'done',
    current: s.state === 'current',
    showLine: i < arr.length - 1,
    dotBg: s.state === 'done' ? '#6E7A45' : s.state === 'current' ? '#FFFFFF' : '#E9DDCA',
    dotBorder: s.state === 'todo' ? '#DFD1B7' : '#6E7A45',
    lineColor: s.state === 'done' ? '#6E7A45' : '#DCD6C2',
    labelColor: s.state === 'todo' ? '#9AA695' : '#382D21',
  }));

  return (
    <main>
      <section style={{ background: '#ECE3D1', borderBottom: '1px solid #E3D5BB' }}>
        <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '60px 40px 54px', position: 'relative' }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'absolute', right: 40, top: 34, width: 340, height: 90, opacity: 0.5, pointerEvents: 'none' }}>
            <path d="M0 120 L180 40 L320 90 L470 30 L640 100 L820 45 L1010 95 L1180 40 L1330 90 L1440 60 L1440 120 Z" fill="none" stroke="#B7BE8C" strokeWidth="2" />
          </svg>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>Where&apos;s my order?</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 54, margin: '12px 0 12px', fontWeight: 400 }}>Track Your Order</h1>
          <p style={{ color: '#6E5C47', fontSize: 16, maxWidth: 540, margin: 0, lineHeight: 1.6 }}>Enter your order number and email to follow your pieces on their journey down from the hills.</p>
        </div>
      </section>

      {!tracked ? (
        <section style={{ maxWidth: 520, margin: '0 auto', padding: '70px 40px 110px' }}>
          <div style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 14, padding: 34 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input placeholder="Order number (e.g. DEO-482013)" className="deo-input" style={{ padding: '14px 15px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14.5, color: '#382D21', background: '#fff', outline: 'none' }} />
              <input type="email" placeholder="Email used at checkout" className="deo-input" style={{ padding: '14px 15px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14.5, color: '#382D21', background: '#fff', outline: 'none' }} />
              <div onClick={() => { setTracked(true); window.scrollTo(0, 0); }} className="hv-primary" style={{ cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', textAlign: 'center', padding: 15, borderRadius: 8, fontSize: 15.5, fontWeight: 600 }}>Track Order</div>
            </div>
            <p style={{ fontSize: 13, color: '#8E7A61', textAlign: 'center', margin: '18px 0 0' }}>Demo — press Track to view a sample order.</p>
          </div>
        </section>
      ) : (
        <section style={{ maxWidth: 1080, margin: '0 auto', padding: '50px 40px 110px', animation: 'deoFade .4s ease both' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: '#fff', border: '1px solid #E5D7BE', borderRadius: 14, padding: '26px 30px', marginBottom: 34 }}>
            <div>
              <div style={{ fontSize: 13, color: '#7E8757', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6 }}>Order {trackedOrder.no}</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#382D21' }}>Estimated delivery · {trackedOrder.eta}</div>
              <div style={{ fontSize: 14, color: '#8E7A61', marginTop: 4 }}>Placed {trackedOrder.placed}</div>
            </div>
            <span style={{ background: '#EDEFDF', color: '#5E6B3B', border: '1px solid #E4D6BC', padding: '9px 18px', borderRadius: 999, fontSize: 13.5, fontWeight: 600 }}>{trackedOrder.status}</span>
          </div>

          <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* timeline */}
            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, margin: '0 0 26px', fontWeight: 400 }}>Progress</h2>
              {steps.map((st) => (
                <div key={st.label} style={{ display: 'flex', gap: 18 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: st.dotBg, border: `2px solid ${st.dotBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {st.done && <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      {st.current && <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#6E7A45' }} />}
                    </div>
                    {st.showLine && <div style={{ width: 2, flex: 1, minHeight: 42, background: st.lineColor }} />}
                  </div>
                  <div style={{ paddingBottom: 30 }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: st.labelColor }}>{st.label}</div>
                    <div style={{ fontSize: 13.5, color: '#8E7A61', marginTop: 3 }}>{st.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* items + address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: '#ECE3D1', borderRadius: 14, padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, margin: '0 0 16px', fontWeight: 400 }}>In this shipment</h3>
                {trackItems.map((it) => (
                  <div key={it.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0' }}>
                    <div style={{ width: 58, height: 58, borderRadius: 8, overflow: 'hidden', background: '#EDE3D0', flexShrink: 0 }}>
                      <Placeholder fit="contain" label={it.name} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: '#382D21' }}>{it.name}</div>
                      <div style={{ fontSize: 13, color: '#8E7A61' }}>Qty {it.qty}</div>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#382D21' }}>{it.price}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 13, color: '#7E8757', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 8 }}>Shipping to</div>
                <div style={{ fontSize: 15, color: '#382D21', lineHeight: 1.5 }}>{trackedOrder.address}</div>
              </div>
              <div onClick={() => setTracked(false)} className="hv-link" style={{ cursor: 'pointer', textAlign: 'center', padding: 13, fontSize: 14.5, color: '#6E7A45', fontWeight: 600 }}>Track another order</div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
