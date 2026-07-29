'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { products, findProductBySlug } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';
import { ProductCard } from '@/components/ProductCard';
import { Star } from '@/components/icons';

const MAX = 1240;

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = findProductBySlug(params.slug);
  const s = useStore();
  const nav = useNav();
  const [qty, setQty] = useState(1);

  if (!product) return notFound();

  const description =
    product.blurb +
    ' Crafted from slow-grown hill timber and hand-finished by our artisans, each piece is made to age gently and settle quietly into any room.';

  let related = products.filter((p) => p.category === product.category && p.name !== product.name);
  if (related.length < 4) related = related.concat(products.filter((p) => p.name !== product.name && p.category !== product.category));
  related = related.slice(0, 4);

  const thumbs = ['View 2', 'Detail', 'In room', 'Texture'];

  return (
    <main>
      <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '34px 40px 40px' }}>
        <div style={{ fontSize: 13, color: '#857766', marginBottom: 34 }}>
          <span onClick={nav.home} className="hv-link" style={{ cursor: 'pointer' }}>Home</span> &nbsp;/&nbsp;
          <span onClick={() => nav.shop('All')} className="hv-link" style={{ cursor: 'pointer' }}> Shop</span> &nbsp;/&nbsp;
          <span onClick={() => nav.shop(product.category)} className="hv-link" style={{ cursor: 'pointer' }}> {product.category}</span> &nbsp;/&nbsp;
          <span style={{ color: '#332F28' }}> {product.name}</span>
        </div>

        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* gallery */}
          <div>
            <div style={{ background: '#F0EBE1', borderRadius: 14, overflow: 'hidden', aspectRatio: '1/1', marginBottom: 16 }}>
              <Placeholder fit="contain" label={product.name} />
            </div>
            <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
              {thumbs.map((t) => (
                <div key={t} style={{ background: '#F0EBE1', borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', border: '1px solid #E6E2D8' }}>
                  <Placeholder fit="contain" label={t} />
                </div>
              ))}
            </div>
          </div>

          {/* info */}
          <div style={{ position: 'sticky', top: 100 }}>
            <span style={{ color: '#6E8A72', fontSize: 12.5, letterSpacing: '.1em', textTransform: 'uppercase' }}>{product.category}</span>
            <h1 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 46, lineHeight: 1.1, margin: '10px 0 16px', fontWeight: 400 }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} size={16} />
                ))}
              </div>
              <span style={{ fontSize: 14, color: '#5E5646', fontWeight: 600 }}>{product.rating}</span>
              <span style={{ fontSize: 13.5, color: '#857766' }}>· In stock, ready to ship</span>
            </div>
            <div style={{ fontSize: 30, fontWeight: 600, color: '#332F28', marginBottom: 22 }}>{product.price}</div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#6E6252', margin: '0 0 30px' }}>{description}</p>

            <div style={{ height: 1, background: '#E8DDCA', marginBottom: 28 }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2D7C4', borderRadius: 8, overflow: 'hidden' }}>
                <div onClick={() => setQty((q) => Math.max(1, q - 1))} className="hv-tint" style={{ cursor: 'pointer', width: 46, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#5E5646' }}>−</div>
                <div style={{ width: 52, textAlign: 'center', fontSize: 16, fontWeight: 600 }}>{qty}</div>
                <div onClick={() => setQty((q) => q + 1)} className="hv-tint" style={{ cursor: 'pointer', width: 46, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#5E5646' }}>+</div>
              </div>
              <div onClick={() => s.addItem(product.name, product.price, qty)} className="hv-primary" style={{ flex: 1, cursor: 'pointer', background: '#26332B', color: '#F5F2EB', height: 50, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15.5, fontWeight: 600, letterSpacing: '.01em' }}>Add to Cart</div>
            </div>
            <div onClick={() => s.addItem(product.name, product.price, qty)} className="hv-buynow" style={{ cursor: 'pointer', border: '1px solid #7E9A82', color: '#4C6B52', height: 50, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 600, marginBottom: 30 }}>Buy it Now</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#6E6252' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M3 7h11v9H3z" stroke="#5E7A63" strokeWidth="1.6" /><path d="M14 10h4l3 3v3h-7z" stroke="#5E7A63" strokeWidth="1.6" /><circle cx="7" cy="18" r="1.8" stroke="#5E7A63" strokeWidth="1.6" /><circle cx="17" cy="18" r="1.8" stroke="#5E7A63" strokeWidth="1.6" /></svg>
                Free shipping on orders over $500
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#6E6252' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 1 3 6.2" stroke="#5E7A63" strokeWidth="1.6" /><path d="M4 20v-5h5" stroke="#5E7A63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                30-day easy returns, collection included
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#6E6252' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M14 3l7 7-4 4-7-7z" stroke="#5E7A63" strokeWidth="1.6" strokeLinejoin="round" /><path d="M10 7l-7 7 4 4 7-7" stroke="#5E7A63" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                White-glove assembly available at checkout
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '60px 40px 100px' }}>
        <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 34, margin: '0 0 32px', fontWeight: 400 }}>You May Also Like</h2>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px 26px' }}>
          {related.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
