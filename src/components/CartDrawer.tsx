'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { money, parsePrice } from '@/lib/data';
import { Placeholder } from './Placeholder';

export function CartDrawer() {
  const s = useStore();
  const nav = useNav();
  if (!s.cartOpen) return null;

  const goCheckout = () => {
    s.closeCart();
    nav.checkout();
  };
  const goShop = () => {
    s.closeCart();
    nav.shop('All');
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300 }}>
      <div onClick={s.closeCart} style={{ position: 'absolute', inset: 0, background: 'rgba(20,28,22,.42)', animation: 'deoOverlay .25s ease both' }} />
      <aside style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: 420, maxWidth: '92vw', background: '#F5F2EC', boxShadow: '-20px 0 60px rgba(24,32,26,.25)', display: 'flex', flexDirection: 'column', animation: 'deoDrawerIn .3s cubic-bezier(.22,.61,.36,1) both' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px', borderBottom: '1px solid #E8DDCA' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>
            Your Cart <span style={{ fontSize: 15, color: '#857766', fontFamily: 'var(--sans)' }}>({s.cartCount})</span>
          </div>
          <div onClick={s.closeCart} className="hv-tint" style={{ cursor: 'pointer', width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#5E5646' }}>×</div>
        </div>

        {s.cartItems.length > 0 ? (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '4px 24px' }}>
              {s.cartItems.map((it) => (
                <div key={it.name} style={{ display: 'flex', gap: 14, padding: '18px 0', borderBottom: '1px solid #EAE0CE' }}>
                  <div style={{ width: 76, height: 76, borderRadius: 8, overflow: 'hidden', background: '#F0EBE1', flexShrink: 0 }}>
                    <Placeholder fit="contain" label={it.name} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: '#332F28', marginBottom: 3 }}>{it.name}</div>
                    <div style={{ fontSize: 13.5, color: '#857766', marginBottom: 11 }}>{it.price}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2D7C4', borderRadius: 6, overflow: 'hidden' }}>
                        <div onClick={() => s.setQty(it.name, it.qty - 1)} className="hv-tint" style={{ cursor: 'pointer', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#5E5646' }}>−</div>
                        <div style={{ width: 34, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>{it.qty}</div>
                        <div onClick={() => s.setQty(it.name, it.qty + 1)} className="hv-tint" style={{ cursor: 'pointer', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#5E5646' }}>+</div>
                      </div>
                      <span style={{ fontSize: 14.5, fontWeight: 600, color: '#332F28' }}>{money(parsePrice(it.price) * it.qty)}</span>
                    </div>
                  </div>
                  <div onClick={() => s.removeItem(it.name)} className="hv-link-sage" style={{ cursor: 'pointer', color: '#B8AC98', fontSize: 19, lineHeight: 1, alignSelf: 'flex-start' }}>×</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '20px 24px 26px', borderTop: '1px solid #E8DDCA', background: '#EEE9DE' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 15, color: '#5E5646' }}>Subtotal</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 24, color: '#332F28' }}>{money(s.subtotal)}</span>
              </div>
              <p style={{ fontSize: 12.5, color: '#857766', margin: '0 0 16px' }}>Taxes and shipping calculated at checkout.</p>
              <div onClick={goCheckout} className="hv-primary" style={{ cursor: 'pointer', background: '#26332B', color: '#F5F2EB', textAlign: 'center', padding: 15, borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Checkout</div>
              <div onClick={s.closeCart} className="hv-link" style={{ cursor: 'pointer', textAlign: 'center', padding: 12, fontSize: 14, color: '#5E7A63', fontWeight: 500 }}>Continue shopping</div>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 18 }}>
              <path d="M6 8 H18 L17 20 H7 Z" stroke="#C8BA9F" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M9 8 V6.5 A3 3 0 0 1 15 6.5 V8" stroke="#C8BA9F" strokeWidth="1.4" />
            </svg>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: '#332F28', marginBottom: 8 }}>Your cart is empty</div>
            <p style={{ fontSize: 14.5, color: '#857766', margin: '0 0 24px', maxWidth: 240, lineHeight: 1.6 }}>Add a little of the hills to your home — start with our latest arrivals.</p>
            <div onClick={goShop} className="hv-primary" style={{ cursor: 'pointer', background: '#26332B', color: '#F5F2EB', padding: '13px 28px', borderRadius: 8, fontSize: 14.5, fontWeight: 600 }}>Browse the Shop</div>
          </div>
        )}
      </aside>
    </div>
  );
}
