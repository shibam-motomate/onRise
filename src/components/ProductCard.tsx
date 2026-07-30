'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import type { Product } from '@/lib/data';
import { Placeholder } from './Placeholder';

/** Shop-style product card: 1:1 image well with an inset dark "Add to cart" bar. */
export function ProductCard({ product, sale }: { product: Product; sale?: { was: string; now: string; pct: string } }) {
  const s = useStore();
  const nav = useNav();

  return (
    <div style={{ animation: 'deoFade .4s ease both' }}>
      <div
        onClick={() => nav.product(product.name)}
        className="hv-shadow-strong"
        style={{ position: 'relative', background: '#EDE3D0', borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', marginBottom: 14, cursor: 'pointer' }}
      >
        {sale && (
          <span style={{ position: 'absolute', top: 12, left: 12, zIndex: 2, background: '#B5622F', color: '#FCEFE6', fontSize: 12.5, fontWeight: 700, padding: '5px 11px', borderRadius: 999 }}>{sale.pct}</span>
        )}
        <Placeholder fit="contain" label={product.name} />
        <div
          onClick={(e) => {
            e.stopPropagation();
            s.addItem(product.name, product.price);
          }}
          className="hv-primary"
          style={{ cursor: 'pointer', position: 'absolute', left: 12, right: 12, bottom: 12, background: 'rgba(24,32,26,.92)', color: '#F5EFE3', textAlign: 'center', padding: 11, borderRadius: 6, fontSize: 13.5, fontWeight: 600, backdropFilter: 'blur(2px)' }}
        >
          Add to cart
        </div>
      </div>
      <div style={{ fontSize: 12.5, color: '#7E8757', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 4 }}>{product.category}</div>
      <div onClick={() => nav.product(product.name)} className="hv-link-sage" style={{ fontSize: 15.5, fontWeight: 500, color: '#382D21', marginBottom: sale ? 5 : 4, cursor: 'pointer' }}>{product.name}</div>
      {sale ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#B5622F' }}>{sale.now}</span>
          <span style={{ fontSize: 14, color: '#9AA695', textDecoration: 'line-through' }}>{sale.was}</span>
        </div>
      ) : (
        <div style={{ fontSize: 15, color: '#5C4C39', fontWeight: 600 }}>{product.price}</div>
      )}
    </div>
  );
}
