'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { products, favoriteNames, user, accountOrders, userReels, accountAddresses } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';
import { HeartFill, EyeIcon } from '@/components/icons';

const MAX = 1240;
const inputStyle: React.CSSProperties = { padding: '13px 15px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14.5, fontFamily: 'inherit', color: '#382D21', background: '#fff', outline: 'none' };

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'orders', label: 'Orders' },
  { id: 'wishlist', label: 'Wishlist' },
  { id: 'reels', label: 'My Reels' },
  { id: 'addresses', label: 'Addresses' },
  { id: 'settings', label: 'Settings' },
];

function AccountInner() {
  const s = useStore();
  const nav = useNav();
  const params = useSearchParams();
  const initialTab = params.get('tab') ?? 'overview';
  const [tab, setTab] = useState(tabs.some((t) => t.id === initialTab) ? initialTab : 'overview');

  // gate: only logged-in users see the account page
  useEffect(() => {
    if (!s.loggedIn) nav.auth();
  }, [s.loggedIn, nav]);
  if (!s.loggedIn) return <main style={{ minHeight: '60vh' }} />;

  const favorites = products.filter((p) => favoriteNames.includes(p.name));

  return (
    <main className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '50px 40px 100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#463A2A', color: '#F5EFE3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 24 }}>{user.initials}</div>
        <div>
          <h1 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 34, margin: 0, fontWeight: 400, lineHeight: 1.2, whiteSpace: 'nowrap' }}>Welcome back, {user.name}</h1>
          <div style={{ fontSize: 14, color: '#8E7A61', marginTop: 4 }}>Member since {user.memberSince} · {user.email}</div>
        </div>
      </div>

      <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 44, alignItems: 'start' }}>
        {/* sidebar */}
        <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <div key={t.id} onClick={() => setTab(t.id)} className="hv-fade85" style={{ cursor: 'pointer', padding: '12px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500, background: active ? '#382D21' : 'transparent', color: active ? '#F5EFE3' : '#5C4C39' }}>{t.label}</div>
            );
          })}
          <div style={{ height: 1, background: '#E5D7BE', margin: '10px 0' }} />
          <div onClick={() => { s.signOut(); nav.auth(); }} className="hv-danger" style={{ cursor: 'pointer', padding: '12px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500, color: '#A9727A' }}>Sign out</div>
        </div>

        {/* content */}
        <div>
          {tab === 'overview' && (
            <>
              <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 30 }}>
                <div style={{ background: '#ECE3D1', borderRadius: 12, padding: 24 }}><div className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 34, color: '#382D21' }}>3</div><div style={{ fontSize: 13.5, color: '#8E7A61', marginTop: 4 }}>Total orders</div></div>
                <div style={{ background: '#ECE3D1', borderRadius: 12, padding: 24 }}><div className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 34, color: '#382D21' }}>3</div><div style={{ fontSize: 13.5, color: '#8E7A61', marginTop: 4 }}>Wishlist items</div></div>
                <div style={{ background: '#ECE3D1', borderRadius: 12, padding: 24 }}><div className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 34, color: '#6E7A45' }}>$50</div><div style={{ fontSize: 13.5, color: '#8E7A61', marginTop: 4 }}>Store credit</div></div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, padding: '24px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: 0, fontWeight: 400 }}>Latest order</h3>
                  <div onClick={nav.tracking} className="hv-link" style={{ cursor: 'pointer', fontSize: 14, color: '#6E7A45', fontWeight: 600 }}>Track →</div>
                </div>
                <div style={{ fontSize: 15, color: '#382D21', fontWeight: 600 }}>DEO-482013 · $1,144.00</div>
                <div style={{ fontSize: 14, color: '#8E7A61', marginTop: 4 }}>Placed Jul 20, 2026 · In Transit, est. Jul 28</div>
              </div>
            </>
          )}

          {tab === 'orders' && (
            <>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, margin: '0 0 22px', fontWeight: 400 }}>Order History</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {accountOrders.map((o) => (
                  <div key={o.no} style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: 15.5, fontWeight: 600, color: '#382D21' }}>{o.no}</div>
                      <div style={{ fontSize: 13.5, color: '#8E7A61', marginTop: 4 }}>{o.date} · {o.items}</div>
                    </div>
                    <span style={{ background: o.badge, color: o.badgeText, padding: '7px 15px', borderRadius: 999, fontSize: 13, fontWeight: 600 }}>{o.status}</span>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#382D21' }}>{o.total}</div>
                    <div onClick={nav.tracking} className="hv-link" style={{ cursor: 'pointer', fontSize: 14, color: '#6E7A45', fontWeight: 600 }}>Track order →</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'wishlist' && (
            <>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, margin: '0 0 22px', fontWeight: 400 }}>Your Wishlist</h2>
              <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {favorites.map((f) => (
                  <div key={f.name} style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, overflow: 'hidden' }}>
                    <div onClick={() => nav.product(f.name)} style={{ background: '#EDE3D0', aspectRatio: '4/3', cursor: 'pointer' }}><Placeholder fit="contain" label={f.name} /></div>
                    <div style={{ padding: '16px 18px 20px' }}>
                      <div onClick={() => nav.product(f.name)} className="hv-link-sage" style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 8, cursor: 'pointer' }}>{f.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 15, fontWeight: 600 }}>{f.price}</span>
                        <div onClick={() => s.addItem(f.name, f.price)} className="hv-tint2" style={{ cursor: 'pointer', background: '#ECE3D1', color: '#382D21', padding: '8px 15px', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Add to cart</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'reels' && (
            <>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, marginBottom: 22, flexWrap: 'wrap' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, margin: '0 0 6px', fontWeight: 400 }}>My Reels &amp; Unboxings</h2>
                  <p style={{ fontSize: 14, color: '#8E7A61', margin: 0, maxWidth: 460, lineHeight: 1.55 }}>Share how your Antoleena pieces live at home. Featured reels earn <strong style={{ color: '#5E6B3B', fontWeight: 600 }}>$10 store credit</strong> and a spot on our homepage.</p>
                </div>
              </div>

              <div className="rc1" style={{ background: '#fff', border: '1.5px dashed #D0BE9D', borderRadius: 14, padding: 26, marginBottom: 30, display: 'grid', gridTemplateColumns: '150px 1fr', gap: 24, alignItems: 'center' }}>
                <div style={{ aspectRatio: '9/16', borderRadius: 12, overflow: 'hidden', background: '#ECE3D1' }}>
                  <Placeholder label="Drop your reel / video thumbnail" fit="cover" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#EDEFDF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 16V5m0 0l-4 4m4-4l4 4" stroke="#5E6B3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 19h14" stroke="#5E6B3B" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, margin: 0, fontWeight: 400 }}>Upload a reel</h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: '#8E7A61', margin: '0 0 16px', lineHeight: 1.55 }}>MP4 or MOV, up to 60 seconds, portrait 9:16. Drop your clip into the frame or browse files.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <input placeholder="Add a caption…" className="deo-input" style={{ flex: 1, minWidth: 200, padding: '12px 14px', border: '1px solid #DFD1B7', borderRadius: 8, fontSize: 14, background: '#fff', outline: 'none' }} />
                    <div className="hv-primary" style={{ cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>Submit reel</div>
                  </div>
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 19, margin: '0 0 16px', fontWeight: 400 }}>Your submissions</h3>
              <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                {userReels.map((r) => (
                  <div key={r.caption} style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ position: 'relative', aspectRatio: '9/16', background: '#ECE3D1' }}>
                      <Placeholder fit="cover" label={r.caption} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,22,0) 55%, rgba(20,28,22,.68) 100%)', pointerEvents: 'none' }} />
                      <span style={{ position: 'absolute', top: 10, left: 10, background: r.badge, color: r.badgeText, fontSize: 11.5, fontWeight: 600, padding: '4px 11px', borderRadius: 999 }}>{r.status}</span>
                      <div style={{ position: 'absolute', left: 12, right: 12, bottom: 11, color: '#F5EFE3', display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, fontWeight: 600 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><EyeIcon size={14} />{r.views}</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><HeartFill size={14} />{r.likes}</span>
                      </div>
                    </div>
                    <div style={{ padding: '13px 15px 16px' }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#382D21', marginBottom: 8 }}>{r.caption}</div>
                      <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
                        <span className="hv-link" style={{ color: '#6E7A45', fontWeight: 600, cursor: 'pointer' }}>Edit</span>
                        <span style={{ color: '#A9727A', fontWeight: 600, cursor: 'pointer' }}>Remove</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'addresses' && (
            <>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, margin: '0 0 22px', fontWeight: 400 }}>Saved Addresses</h2>
              <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {accountAddresses.map((a) => (
                  <div key={a.label} style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: '#382D21' }}>{a.label}</span>
                      {a.primary && <span style={{ background: '#EDEFDF', color: '#5E6B3B', fontSize: 11.5, fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>Default</span>}
                    </div>
                    <div style={{ fontSize: 14.5, color: '#382D21', marginBottom: 4 }}>{a.name}</div>
                    <div style={{ fontSize: 14, color: '#6E5C47', lineHeight: 1.5 }}>{a.lines}</div>
                    <div style={{ fontSize: 14, color: '#6E5C47', marginTop: 4 }}>{a.phone}</div>
                    <div className="hv-link" style={{ fontSize: 13.5, color: '#6E7A45', fontWeight: 600, marginTop: 14, cursor: 'pointer' }}>Edit</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'settings' && (
            <>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, margin: '0 0 22px', fontWeight: 400 }}>Account Settings</h2>
              <div style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, padding: 28, maxWidth: 540 }}>
                <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input placeholder="First name" className="deo-input" style={inputStyle} />
                  <input placeholder="Last name" className="deo-input" style={inputStyle} />
                  <input type="email" placeholder="Email address" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                  <input type="password" placeholder="New password" className="deo-input" style={{ ...inputStyle, gridColumn: '1 / -1' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
                  <span style={{ width: 42, height: 24, borderRadius: 999, background: '#7E8757', position: 'relative', flexShrink: 0 }}>
                    <span style={{ position: 'absolute', top: 3, right: 3, width: 18, height: 18, borderRadius: '50%', background: '#fff' }} />
                  </span>
                  <span style={{ fontSize: 14.5, color: '#5C4C39' }}>Subscribe to the Antoleena Circle newsletter</span>
                </div>
                <div className="hv-primary" style={{ cursor: 'pointer', display: 'inline-block', background: '#463A2A', color: '#F5EFE3', padding: '13px 28px', borderRadius: 8, fontSize: 14.5, fontWeight: 600 }}>Save changes</div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<main style={{ minHeight: '60vh' }} />}>
      <AccountInner />
    </Suspense>
  );
}
