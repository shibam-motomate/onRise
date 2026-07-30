'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { money, parsePrice } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';
import { Check } from '@/components/icons';

const inputStyle: React.CSSProperties = { padding: '13px 15px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14.5, fontFamily: 'inherit', color: '#382D21', background: '#fff', outline: 'none' };

function StepBadge({ n }: { n: number }) {
  return <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#463A2A', color: '#F5EFE3', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>{n}</span>;
}

export default function CheckoutPage() {
  const s = useStore();
  const nav = useNav();
  const [delivery, setDelivery] = useState<'standard' | 'whiteglove'>('standard');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNo, setOrderNo] = useState('DEO-000000');

  const sub = s.subtotal;
  const ship = delivery === 'whiteglove' ? 49 : 0;
  const tax = sub * 0.08;
  const total = sub + ship + tax;
  const itemCount = s.cartItems.reduce((n, it) => n + it.qty, 0);
  const shippingLabel = ship === 0 ? 'Free' : money(ship);

  const deliveryOptions = [
    { id: 'standard' as const, label: 'Standard Delivery', note: '5–8 business days · to your door', priceLabel: 'Free' },
    { id: 'whiteglove' as const, label: 'White-Glove Delivery', note: 'In-room placement, assembly & packaging removal', priceLabel: '$49.00' },
  ];

  const placeOrder = () => {
    setOrderNo('DEO-' + Math.floor(100000 + Math.random() * 900000));
    setOrderPlaced(true);
    window.scrollTo(0, 0);
  };
  const finishOrder = () => {
    s.clearCart();
    setOrderPlaced(false);
    setDelivery('standard');
    nav.home();
  };

  // CONFIRMATION
  if (orderPlaced) {
    return (
      <main>
        <div style={{ maxWidth: 620, margin: '0 auto', padding: '90px 40px 120px', textAlign: 'center', animation: 'deoFade .5s ease both' }}>
          <div style={{ width: 76, height: 76, borderRadius: '50%', background: '#EDEFDF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <Check size={34} />
          </div>
          <h1 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 44, margin: '0 0 14px', fontWeight: 400 }}>Your order is confirmed</h1>
          <p style={{ fontSize: 16, color: '#6E5C47', lineHeight: 1.7, margin: '0 0 8px' }}>Thank you — a little of the hills is on its way to you.</p>
          <p style={{ fontSize: 15, color: '#8E7A61', margin: '0 0 34px' }}>Order number <span style={{ color: '#382D21', fontWeight: 600 }}>{orderNo}</span> · confirmation sent to your email.</p>
          <div style={{ background: '#ECE3D1', borderRadius: 12, padding: '24px 28px', textAlign: 'left', marginBottom: 34 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: '#5C4C39', marginBottom: 10 }}><span>Items</span><span>{itemCount}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: '#5C4C39', marginBottom: 10 }}><span>Delivery</span><span>{shippingLabel}</span></div>
            <div style={{ height: 1, background: '#DED6C1', margin: '14px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 15, fontWeight: 600 }}>Total paid</span><span style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>{money(total)}</span></div>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div onClick={finishOrder} className="hv-primary" style={{ cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', padding: '15px 34px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Continue Shopping</div>
            <div onClick={nav.tracking} className="hv-tint" style={{ cursor: 'pointer', border: '1px solid #CFBE9D', color: '#382D21', padding: '15px 34px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Track Your Order</div>
          </div>
        </div>
      </main>
    );
  }

  // EMPTY
  if (s.cartItems.length === 0) {
    return (
      <main>
        <div style={{ maxWidth: 520, margin: '0 auto', padding: '100px 40px', textAlign: 'center' }}>
          <h1 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 38, margin: '0 0 12px', fontWeight: 400 }}>Nothing to check out</h1>
          <p style={{ fontSize: 15.5, color: '#8E7A61', margin: '0 0 26px' }}>Your cart is empty — add a few pieces first.</p>
          <div onClick={() => nav.shop('All')} className="hv-primary" style={{ display: 'inline-block', cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', padding: '14px 30px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Browse the Shop</div>
        </div>
      </main>
    );
  }

  // ACTIVE
  return (
    <main>
      <div className="rw" style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 40px 100px' }}>
        <div style={{ fontSize: 13, color: '#8E7A61', marginBottom: 20 }}>
          <span onClick={() => nav.shop('All')} className="hv-link" style={{ cursor: 'pointer' }}>Shop</span> &nbsp;/&nbsp; <span style={{ color: '#382D21' }}>Checkout</span>
        </div>
        <h1 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 46, margin: '0 0 40px', fontWeight: 400 }}>Checkout</h1>

        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* FORM */}
          <div>
            <div style={{ marginBottom: 42 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <StepBadge n={1} />
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, margin: 0, fontWeight: 400 }}>Contact</h2>
              </div>
              <input type="email" placeholder="Email address" className="deo-input" style={{ ...inputStyle, width: '100%' }} />
            </div>

            <div style={{ marginBottom: 42 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <StepBadge n={2} />
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, margin: 0, fontWeight: 400 }}>Shipping Address</h2>
              </div>
              <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input placeholder="First name" className="deo-input" style={inputStyle} />
                <input placeholder="Last name" className="deo-input" style={inputStyle} />
                <input placeholder="Street address" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                <input placeholder="Apartment, suite (optional)" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                <input placeholder="City" className="deo-input" style={inputStyle} />
                <input placeholder="State / Region" className="deo-input" style={inputStyle} />
                <input placeholder="ZIP / Postal code" className="deo-input" style={inputStyle} />
                <input placeholder="Phone" className="deo-input" style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: 42 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <StepBadge n={3} />
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, margin: 0, fontWeight: 400 }}>Delivery Method</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {deliveryOptions.map((d) => {
                  const active = delivery === d.id;
                  return (
                    <div key={d.id} onClick={() => setDelivery(d.id)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', border: `1.5px solid ${active ? '#6E7A45' : '#DFD1B7'}`, background: active ? '#EDEFDF' : '#FFFFFF', borderRadius: 10 }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${active ? '#6E7A45' : '#CFBE9D'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: active ? '#6E7A45' : 'transparent' }} />
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, color: '#382D21' }}>{d.label}</div>
                        <div style={{ fontSize: 13, color: '#8E7A61' }}>{d.note}</div>
                      </div>
                      <span style={{ fontSize: 14.5, fontWeight: 600, color: '#382D21' }}>{d.priceLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <StepBadge n={4} />
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, margin: 0, fontWeight: 400 }}>Payment</h2>
                <span style={{ marginLeft: 'auto', fontSize: 12.5, color: '#8E7A61', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="1.6" stroke="#8E7A61" strokeWidth="1.6" /><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="#8E7A61" strokeWidth="1.6" /></svg>
                  Secure &amp; encrypted
                </span>
              </div>
              <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input placeholder="Card number" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                <input placeholder="Name on card" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                <input placeholder="MM / YY" className="deo-input" style={inputStyle} />
                <input placeholder="CVC" className="deo-input" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div style={{ position: 'sticky', top: 100, background: '#ECE3D1', borderRadius: 14, padding: 28 }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 24, margin: '0 0 20px', fontWeight: 400 }}>Order Summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 20 }}>
              {s.cartItems.map((it) => (
                <div key={it.name} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '10px 0' }}>
                  <div style={{ position: 'relative', width: 58, height: 58, borderRadius: 8, overflow: 'hidden', background: '#EDE3D0', flexShrink: 0 }}>
                    <Placeholder fit="contain" label={it.name} />
                    <span style={{ position: 'absolute', top: -6, right: -6, background: '#6E7A45', color: '#fff', fontSize: 11, fontWeight: 600, minWidth: 19, height: 19, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px' }}>{it.qty}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0, fontSize: 14, fontWeight: 500, color: '#382D21' }}>{it.name}</div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#382D21' }}>{money(parsePrice(it.price) * it.qty)}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              <input placeholder="Promo code" className="deo-input" style={{ flex: 1, padding: '11px 13px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14, background: '#fff', outline: 'none' }} />
              <div className="hv-apply" style={{ cursor: 'pointer', background: '#E7DBC5', color: '#382D21', padding: '11px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>Apply</div>
            </div>
            <div style={{ borderTop: '1px solid #DED6C1', paddingTop: 18, display: 'flex', flexDirection: 'column', gap: 11 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: '#5C4C39' }}><span>Subtotal</span><span>{money(sub)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: '#5C4C39' }}><span>Shipping</span><span>{shippingLabel}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: '#5C4C39' }}><span>Estimated tax</span><span>{money(tax)}</span></div>
            </div>
            <div style={{ borderTop: '1px solid #DED6C1', marginTop: 16, paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>Total</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 28, color: '#382D21' }}>{money(total)}</span>
            </div>
            <div onClick={placeOrder} className="hv-primary" style={{ cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', textAlign: 'center', padding: 16, borderRadius: 8, fontSize: 15.5, fontWeight: 600, marginTop: 22 }}>Place Order</div>
            <p style={{ fontSize: 12, color: '#8E7A61', textAlign: 'center', margin: '14px 0 0', lineHeight: 1.5 }}>By placing your order you agree to Antoleena&apos;s terms &amp; privacy policy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
