'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { products } from '@/lib/data';
import { Placeholder } from './Placeholder';
import { SearchIcon } from './icons';

const popularChips = ['Living Room', 'Bedroom', 'Dining & Kitchen', 'Lighting & Decor', 'Storage'];

export function SearchOverlay() {
  const s = useStore();
  const nav = useNav();
  if (!s.searchOpen) return null;

  const q = s.query.trim().toLowerCase();
  const results = q ? products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : [];
  const idle = q.length === 0;
  const hasResults = q.length > 0 && results.length > 0;
  const noResults = q.length > 0 && results.length === 0;

  const openProduct = (name: string) => {
    s.closeSearch();
    nav.product(name);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 310 }}>
      <div onClick={s.closeSearch} style={{ position: 'absolute', inset: 0, background: 'rgba(20,28,22,.42)', animation: 'deoOverlay .25s ease both' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#F5F2EC', boxShadow: '0 24px 60px rgba(24,32,26,.22)', animation: 'deoSheetIn .28s ease both', maxHeight: '88vh', overflowY: 'auto' }}>
        <div className="rw" style={{ maxWidth: 1000, margin: '0 auto', padding: '30px 40px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '2px solid #332F28', paddingBottom: 14 }}>
            <SearchIcon color="#332F28" size={24} />
            <input
              value={s.query}
              onChange={(e) => s.setQuery(e.target.value)}
              autoFocus
              placeholder="Search for sofas, lighting, storage…"
              style={{ flex: 1, border: 'none', background: 'transparent', fontFamily: 'var(--serif)', fontSize: 26, color: '#332F28', outline: 'none' }}
            />
            <div onClick={s.closeSearch} className="hv-link" style={{ cursor: 'pointer', fontSize: 14, color: '#857766', display: 'flex', alignItems: 'center', gap: 6 }}>Close ×</div>
          </div>

          {idle && (
            <div style={{ padding: '30px 0 14px' }}>
              <div style={{ fontSize: 12.5, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6E8A72', marginBottom: 16 }}>Popular categories</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {popularChips.map((c) => (
                  <div key={c} onClick={() => s.setQuery(c)} className="hv-tint" style={{ cursor: 'pointer', padding: '10px 20px', borderRadius: 999, border: '1px solid #E2D7C4', background: '#fff', fontSize: 14, fontWeight: 500, color: '#5E5646' }}>{c}</div>
                ))}
              </div>
            </div>
          )}

          {hasResults && (
            <>
              <div style={{ padding: '22px 0 6px', fontSize: 13.5, color: '#857766' }}>{results.length} results</div>
              <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {results.map((r) => (
                  <div key={r.name} onClick={() => openProduct(r.name)} className="hv-tint" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: 12, borderRadius: 10 }}>
                    <div style={{ width: 62, height: 62, borderRadius: 8, overflow: 'hidden', background: '#F0EBE1', flexShrink: 0 }}>
                      <Placeholder fit="contain" label={r.name} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, color: '#6E8A72', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 3 }}>{r.category}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#332F28' }}>{r.name}</div>
                    </div>
                    <span style={{ fontSize: 14.5, fontWeight: 600, color: '#5E5646' }}>{r.price}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {noResults && (
            <div style={{ padding: '50px 0', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: '#332F28', marginBottom: 8 }}>No pieces found</div>
              <p style={{ fontSize: 14.5, color: '#857766', margin: 0 }}>Try a room name like “Bedroom”, or browse the full shop.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
