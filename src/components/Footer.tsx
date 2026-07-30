'use client';

import React, { useState } from 'react';
import { useNav } from '@/lib/nav';
import { BrandLogo } from './Brand';

export function Footer() {
  const nav = useNav();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const col = 'hv-link-cream';

  return (
    <footer style={{ background: '#33291D', color: '#D0C6B2' }}>
      <div className="rw" style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 40px 40px' }}>
        <div className="rcfoot" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.6fr', gap: 40 }}>
          <div>
            <div style={{ marginBottom: 18 }}>
              <BrandLogo size="md" onDark tagline />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#B3A88E', maxWidth: 260, margin: 0 }}>Home decor from the hills of Darjeeling — calm woods, soft greens, and honest craft for every room.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 15, color: '#F5EFE3', margin: '0 0 16px', fontWeight: 600 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14 }}>
              <span onClick={nav.home} className={col} style={{ cursor: 'pointer' }}>Home</span>
              <span onClick={nav.about} className={col} style={{ cursor: 'pointer' }}>About</span>
              <span onClick={() => nav.shop('All')} className={col} style={{ cursor: 'pointer' }}>Shop</span>
              <span onClick={nav.contact} className={col} style={{ cursor: 'pointer' }}>Contact</span>
              <span onClick={nav.tracking} className={col} style={{ cursor: 'pointer' }}>Track Order</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 15, color: '#F5EFE3', margin: '0 0 16px', fontWeight: 600 }}>Shop</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14 }}>
              <span onClick={() => nav.shop('Living Room')} className={col} style={{ cursor: 'pointer' }}>Living Room</span>
              <span onClick={() => nav.shop('Bedroom')} className={col} style={{ cursor: 'pointer' }}>Bedroom</span>
              <span onClick={() => nav.shop('Dining & Kitchen')} className={col} style={{ cursor: 'pointer' }}>Dining &amp; Kitchen</span>
              <span onClick={() => nav.shop('Lighting & Decor')} className={col} style={{ cursor: 'pointer' }}>Lighting &amp; Decor</span>
              <span onClick={nav.gift} className={col} style={{ cursor: 'pointer' }}>Gift Cards</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 15, color: '#F5EFE3', margin: '0 0 12px', fontWeight: 600 }}>Join the Antoleena Circle</h4>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#B3A88E', margin: '0 0 18px' }}>Get exclusive offers, new arrivals, and hill-styling tips in your inbox.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                style={{ flex: 1, background: '#2A3830', border: '1px solid #3C4A41', borderRadius: 6, padding: '12px 14px', color: '#EBE1CE', fontSize: 14, outline: 'none' }}
              />
              <div onClick={() => setSubscribed(true)} className="hv-subscribe" style={{ cursor: 'pointer', background: '#8C946A', color: '#F5EFE3', padding: '12px 22px', borderRadius: 6, fontSize: 14, fontWeight: 600 }}>Subscribe</div>
            </div>
            {subscribed && <div style={{ fontSize: 13, color: '#D8C49A', marginTop: 12 }}>Thank you — welcome to the circle.</div>}
            <div style={{ display: 'flex', gap: 22, marginTop: 26, fontSize: 13.5, color: '#B3A88E' }}>
              <span className={col} style={{ cursor: 'pointer' }}>Instagram</span>
              <span className={col} style={{ cursor: 'pointer' }}>Pinterest</span>
              <span className={col} style={{ cursor: 'pointer' }}>Youtube</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #35443B', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#8A9A87' }}>
          <span>© 2026 Antoleena. Made in the hills.</span>
          <span>Licenses · Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
