'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';

export function MobileNav() {
  const s = useStore();
  const nav = useNav();
  if (!s.mobileNav) return null;

  const go = (fn: () => void) => () => {
    s.closeMobileNav();
    fn();
  };

  const links = [
    { label: 'Home', go: go(nav.home) },
    { label: 'About', go: go(nav.about) },
    { label: 'Shop', go: go(() => nav.shop('All')) },
    { label: 'Contact', go: go(nav.contact) },
    { label: 'Sale', go: go(nav.sale) },
    { label: s.loggedIn ? 'My Account' : 'Sign in', go: go(s.loggedIn ? nav.account : nav.auth) },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 250 }}>
      <div onClick={s.closeMobileNav} style={{ position: 'absolute', inset: 0, background: 'rgba(20,28,22,.5)', animation: 'deoOverlay .25s ease both' }} />
      <div
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 284, maxWidth: '82vw', background: '#26332B', boxShadow: '20px 0 60px rgba(20,28,22,.45)', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 2, animation: 'deoOverlay .25s ease both' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '.3em', color: '#F2EFE6' }}>ONRISE</span>
          <div onClick={s.closeMobileNav} style={{ cursor: 'pointer', color: '#B7C4B2', fontSize: 26, lineHeight: 1, width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</div>
        </div>
        {links.map((m) => (
          <div key={m.label} onClick={m.go} className="hv-row" style={{ cursor: 'pointer', padding: '15px 12px', borderRadius: 10, fontSize: 16, color: '#EAF0E6', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
            {m.label}
          </div>
        ))}
      </div>
    </div>
  );
}
