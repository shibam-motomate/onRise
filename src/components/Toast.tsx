'use client';

import React from 'react';
import { useStore } from '@/lib/store';

export function Toast() {
  const { toast } = useStore();
  if (!toast) return null;
  return (
    <div
      style={{ position: 'fixed', zIndex: 200, left: '50%', bottom: 34, transform: 'translateX(-50%)', background: '#463A2A', color: '#F5EFE3', padding: '13px 22px', borderRadius: 999, fontSize: 14.5, letterSpacing: '.01em', boxShadow: '0 14px 40px rgba(24,32,26,.28)', display: 'flex', alignItems: 'center', gap: 10, animation: 'deoToast 2.2s ease forwards' }}
    >
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D8C49A', display: 'inline-block' }} />
      Added to your cart
    </div>
  );
}
