'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { LogoMark } from '@/components/icons';

const inputStyle: React.CSSProperties = { padding: '14px 15px', border: '1px solid #E2D7C4', borderRadius: 9, fontSize: 14.5, fontFamily: 'inherit', color: '#332F28', background: '#fff', outline: 'none' };

export default function AuthPage() {
  const s = useStore();
  const nav = useNav();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const isLogin = mode === 'login';

  const title = isLogin ? 'Welcome back' : 'Join OnRise';
  const subtitle = isLogin ? 'Sign in to view orders, wishlist and store credit.' : 'Create an account to save favourites and track every order.';
  const submitLabel = isLogin ? 'Sign in' : 'Create account';
  const switchPrompt = isLogin ? 'New to OnRise?' : 'Already have an account?';
  const switchAction = isLogin ? 'Create one' : 'Sign in';

  const submit = () => {
    s.signIn();
    nav.account();
  };

  return (
    <main className="rw" style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 40px 100px' }}>
      <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #E6DBC8', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 60px rgba(24,32,26,.10)' }}>
        {/* brand panel */}
        <div style={{ position: 'relative', background: 'linear-gradient(155deg, #1E2A22 0%, #5E7A63 100%)', padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 560 }}>
          <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 130, opacity: 0.3 }}>
            <path d="M0 120 L70 50 L120 85 L180 40 L250 90 L320 45 L380 85 L400 65 L400 120 Z" fill="none" stroke="#E4D6BC" strokeWidth="2" />
          </svg>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 11 }}>
            <LogoMark stroke="#F5F2EB" size={28} showAccent={false} />
            <span style={{ fontFamily: 'var(--serif)', fontSize: 21, letterSpacing: '.22em', color: '#F5F2EB' }}>ONRISE</span>
          </div>
          <div style={{ position: 'relative' }}>
            <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 34, color: '#F5F2EB', fontWeight: 400, margin: '0 0 14px', lineHeight: 1.25 }}>Calm, crafted living — carried from the hills to your home.</h2>
            <p style={{ color: '#E6DECD', fontSize: 15, lineHeight: 1.6, margin: 0 }}>Members save favourites, track every order, and earn store credit on each purchase.</p>
          </div>
          <div style={{ position: 'relative', fontSize: 13, color: '#C6B9A2' }}>Handmade in Darjeeling · Since 2019</div>
        </div>

        {/* form panel */}
        <div style={{ background: '#fff', padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 4, background: '#EEE9DE', borderRadius: 10, padding: 4, marginBottom: 30 }}>
            <div onClick={() => setMode('login')} style={{ flex: 1, textAlign: 'center', padding: 10, borderRadius: 7, fontSize: 14, fontWeight: 600, cursor: 'pointer', background: isLogin ? '#fff' : 'transparent', color: isLogin ? '#332F28' : '#7A8A7F' }}>Sign in</div>
            <div onClick={() => setMode('signup')} style={{ flex: 1, textAlign: 'center', padding: 10, borderRadius: 7, fontSize: 14, fontWeight: 600, cursor: 'pointer', background: !isLogin ? '#fff' : 'transparent', color: !isLogin ? '#332F28' : '#7A8A7F' }}>Create account</div>
          </div>

          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 400, margin: '0 0 6px' }}>{title}</h1>
          <p style={{ fontSize: 14.5, color: '#857766', margin: '0 0 26px', lineHeight: 1.55 }}>{subtitle}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {!isLogin && <input placeholder="Full name" className="deo-input" style={inputStyle} />}
            <input type="email" placeholder="Email address" className="deo-input" style={inputStyle} />
            <input type="password" placeholder="Password" className="deo-input" style={inputStyle} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '16px 0 24px', fontSize: 13.5 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#5E5646', cursor: 'pointer' }}>
              <input type="checkbox" style={{ accentColor: '#5E7A63', width: 15, height: 15 }} /> Remember me
            </label>
            {isLogin && <span onClick={nav.reset} className="hv-link" style={{ color: '#5E7A63', fontWeight: 600, cursor: 'pointer' }}>Forgot password?</span>}
          </div>

          <div onClick={submit} className="hv-primary" style={{ cursor: 'pointer', textAlign: 'center', background: '#26332B', color: '#F5F2EB', padding: 15, borderRadius: 9, fontSize: 15, fontWeight: 600 }}>{submitLabel}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '22px 0' }}>
            <span style={{ flex: 1, height: 1, background: '#E8DDCA' }} />
            <span style={{ fontSize: 12.5, color: '#9AA79E' }}>or</span>
            <span style={{ flex: 1, height: 1, background: '#E8DDCA' }} />
          </div>

          <div onClick={submit} className="hv-cream" style={{ cursor: 'pointer', textAlign: 'center', border: '1px solid #E2D7C4', color: '#332F28', padding: 13, borderRadius: 9, fontSize: 14.5, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4C6B52" d="M12 11v2.8h4a4 4 0 1 1-1.2-4.7l2-2A7 7 0 1 0 19 12z" /></svg>
            Continue with Google
          </div>

          <div style={{ textAlign: 'center', marginTop: 26, fontSize: 14, color: '#857766' }}>
            {switchPrompt} <span onClick={() => setMode(isLogin ? 'signup' : 'login')} className="hv-link" style={{ color: '#5E7A63', fontWeight: 600, cursor: 'pointer' }}>{switchAction}</span>
          </div>
          <div onClick={nav.home} style={{ textAlign: 'center', marginTop: 14, fontSize: 13.5, color: '#9AA79E', cursor: 'pointer' }}>Continue as guest</div>
        </div>
      </div>
    </main>
  );
}
