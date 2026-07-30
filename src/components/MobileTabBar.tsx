'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';

const TabIcon = ({ d, color }: { d: string; color: string }) => (
  <svg width={23} height={23} viewBox="0 0 24 24" fill="none">
    <path d={d} stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function MobileTabBar() {
  const s = useStore();
  const nav = useNav();
  const path = usePathname();
  const on = '#EDE7D8';
  const off = '#8FA593';

  const isHome = path === '/';
  const isShop = path.startsWith('/shop');
  const isAccount = path.startsWith('/account') || path.startsWith('/auth');

  const tabs = [
    { label: 'Home', d: 'M4 11l8-6 8 6M6 10v9h12v-9', color: isHome ? on : off, go: nav.home },
    { label: 'Shop', d: 'M4 6h16M4 12h16M4 18h16', color: isShop ? on : off, go: () => nav.shop('All') },
    { label: 'Search', d: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14M16.5 16.5 21 21', color: off, go: s.openSearch },
    { label: 'Cart', d: 'M6 8h12l-1 12H7zM9 8V6.5a3 3 0 0 1 6 0V8', color: off, go: s.openCart },
    { label: 'Account', d: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 20c0-4 3.5-6 7-6s7 2 7 6', color: isAccount ? on : off, go: () => (s.loggedIn ? nav.account() : nav.auth()) },
  ];

  return (
    <div
      className="rtab"
      style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 240, background: 'rgba(48,38,26,.97)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,.08)', padding: '8px 4px calc(8px + env(safe-area-inset-bottom))', justifyContent: 'space-around', alignItems: 'stretch' }}
    >
      {tabs.map((t) => (
        <div key={t.label} onClick={t.go} style={{ flex: 1, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '3px 0', color: t.color }}>
          <TabIcon d={t.d} color={t.color} />
          <span style={{ fontSize: 10.5, fontWeight: 600 }}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}
