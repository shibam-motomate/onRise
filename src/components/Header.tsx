'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { user } from '@/lib/data';
import { LogoMark, SearchIcon, UserIcon, CartIcon, BurgerIcon, ChevDown } from './icons';

const accountMenu = [
  { id: 'overview', label: 'Overview' },
  { id: 'orders', label: 'Orders' },
  { id: 'wishlist', label: 'Wishlist' },
  { id: 'reels', label: 'My Reels' },
  { id: 'addresses', label: 'Addresses' },
  { id: 'settings', label: 'Settings' },
];

export function Header() {
  const s = useStore();
  const nav = useNav();
  const userFirstName = user.name.split(' ')[0];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(30,42,33,.93)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(126,154,130,.28)',
      }}
    >
      <div
        className="rw"
        style={{ maxWidth: 1240, margin: '0 auto', padding: '17px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div onClick={nav.home} style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer' }}>
          <LogoMark size={30} />
          <span style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '.34em', color: '#F2EFE6' }}>ONRISE</span>
        </div>

        <div
          className="rburger"
          onClick={s.openMobileNav}
          style={{ cursor: 'pointer', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, border: '1px solid rgba(242,239,230,.25)' }}
        >
          <BurgerIcon />
        </div>

        <nav className="rnav" style={{ display: 'flex', alignItems: 'center', gap: 36, fontSize: 14, letterSpacing: '.05em' }}>
          <span onClick={nav.home} className="hv-link-sage" style={{ cursor: 'pointer', color: '#F2EFE6', paddingBottom: 3 }}>Home</span>
          <span onClick={nav.about} className="hv-link-sage" style={{ cursor: 'pointer', color: '#C4B79D' }}>About</span>
          <span onClick={() => nav.shop('All')} className="hv-link-sage" style={{ cursor: 'pointer', color: '#C4B79D' }}>Shop</span>
          <span onClick={nav.contact} className="hv-link-sage" style={{ cursor: 'pointer', color: '#C4B79D' }}>Contact</span>
          <span onClick={nav.sale} style={{ cursor: 'pointer', color: '#E0A45A', fontWeight: 600, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}>Sale</span>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <div onClick={s.openSearch} className="hv-fade" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <SearchIcon />
          </div>

          {s.loggedIn ? (
            <div style={{ position: 'relative' }}>
              <div
                onClick={s.toggleMenu}
                className="hv-navrow"
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, padding: '5px 12px 5px 6px', border: '1px solid rgba(126,154,130,.42)', borderRadius: 999 }}
              >
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#7E9A82', color: '#F5F2EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 12.5 }}>{user.initials}</span>
                <span style={{ fontSize: 14, color: '#F2EFE6', fontWeight: 500 }}>{userFirstName}</span>
                <ChevDown />
              </div>
              {s.menuOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, width: 214, background: '#fff', border: '1px solid #E8DDCA', borderRadius: 12, boxShadow: '0 16px 40px rgba(24,32,26,.14)', padding: 8, zIndex: 60 }}>
                  <div style={{ padding: '8px 12px 10px' }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#332F28' }}>{user.name}</div>
                    <div style={{ fontSize: 12.5, color: '#9A8D7C', marginTop: 2 }}>{user.email}</div>
                  </div>
                  <div style={{ height: 1, background: '#EEE9DE', margin: '2px 0 6px' }} />
                  {accountMenu.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => {
                        s.closeMenu();
                        nav.push(`/account?tab=${m.id}`);
                      }}
                      className="hv-tint"
                      style={{ cursor: 'pointer', padding: '9px 12px', borderRadius: 7, fontSize: 14, color: '#3A473E' }}
                    >
                      {m.label}
                    </div>
                  ))}
                  <div style={{ height: 1, background: '#EEE9DE', margin: '6px 0' }} />
                  <div
                    onClick={() => {
                      s.signOut();
                      s.closeMenu();
                      nav.auth();
                    }}
                    className="hv-danger"
                    style={{ cursor: 'pointer', padding: '9px 12px', borderRadius: 7, fontSize: 14, color: '#A9727A', fontWeight: 500 }}
                  >
                    Sign out
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div onClick={() => nav.auth()} className="hv-fade" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <UserIcon />
            </div>
          )}

          <div onClick={s.openCart} className="hv-fade75" style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <CartIcon />
            <span style={{ position: 'absolute', top: -8, right: -11, background: '#7E9A82', color: '#F5F2EB', fontSize: 11, fontWeight: 700, minWidth: 18, height: 18, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px' }}>{s.cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
