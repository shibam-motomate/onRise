'use client';

import React, { useState } from 'react';
import { useNav } from '@/lib/nav';
import { BrandLogo } from '@/components/Brand';

export default function ResetPage() {
  const nav = useNav();
  const [sent, setSent] = useState(false);

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '80px 40px 120px' }}>
      <div style={{ background: '#fff', border: '1px solid #E3D5BB', borderRadius: 18, boxShadow: '0 20px 50px rgba(24,32,26,.08)', padding: '44px 40px' }}>
        <div style={{ marginBottom: 26 }}>
          <BrandLogo size="sm" />
        </div>

        {!sent ? (
          <>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#ECE3D1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="10" width="16" height="10" rx="2" stroke="#5E6B3B" strokeWidth="1.7" /><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#5E6B3B" strokeWidth="1.7" /></svg>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, margin: '0 0 8px' }}>Reset your password</h1>
            <p style={{ fontSize: 14.5, color: '#8E7A61', margin: '0 0 26px', lineHeight: 1.55 }}>Enter the email tied to your account and we&apos;ll send a secure link to set a new password.</p>
            <input type="email" placeholder="Email address" className="deo-input" style={{ width: '100%', boxSizing: 'border-box', padding: '14px 15px', border: '1px solid #DFD1B7', borderRadius: 9, fontSize: 14.5, color: '#382D21', background: '#fff', outline: 'none', marginBottom: 16 }} />
            <div onClick={() => setSent(true)} className="hv-primary" style={{ cursor: 'pointer', textAlign: 'center', background: '#463A2A', color: '#F5EFE3', padding: 15, borderRadius: 9, fontSize: 15, fontWeight: 600 }}>Send reset link</div>
          </>
        ) : (
          <>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#EDEFDF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="#5E6B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, margin: '0 0 8px' }}>Check your inbox</h1>
            <p style={{ fontSize: 14.5, color: '#8E7A61', margin: '0 0 26px', lineHeight: 1.55 }}>We&apos;ve sent a password reset link to your email. It expires in 30 minutes — follow it to choose a new password.</p>
            <div onClick={() => setSent(true)} className="hv-link" style={{ fontSize: 14, color: '#6E7A45', fontWeight: 600, cursor: 'pointer', marginBottom: 4 }}>Resend email</div>
          </>
        )}

        <div onClick={nav.auth} style={{ cursor: 'pointer', textAlign: 'center', marginTop: 26, fontSize: 14, color: '#8E7A61' }}>← Back to sign in</div>
      </div>
    </main>
  );
}
