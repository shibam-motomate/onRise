'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { useNav } from '@/lib/nav';
import { products, rooms, testimonials, faqs, brandValues, favoriteNames, instaPosts, inspirationTiles } from '@/lib/data';
import { Placeholder } from '@/components/Placeholder';
import { ArrowRight, ChevLeft, ChevRight, Star, InstagramIcon, HeartFill, EyeIcon } from '@/components/icons';

const MAX = 1240;

export default function HomePage() {
  const s = useStore();
  const nav = useNav();
  const [tIndex, setTIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const latestLooks = products.slice(0, 6);
  const favorites = products.filter((p) => favoriteNames.includes(p.name));
  const visibleTestimonials = [testimonials[tIndex % testimonials.length], testimonials[(tIndex + 1) % testimonials.length]];

  return (
    <main>
      {/* HERO */}
      <section className="rhero" style={{ position: 'relative', height: 640, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Placeholder label="Misty hill-country living room · warm neutrals" fit="cover" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,22,.5) 0%, rgba(20,28,22,.2) 45%, rgba(20,28,22,.55) 100%)', pointerEvents: 'none' }} />
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 190, pointerEvents: 'none', opacity: 0.9 }}>
          <path d="M0 200 L0 140 L180 70 L320 120 L470 55 L640 130 L820 60 L1010 120 L1180 75 L1330 125 L1440 95 L1440 200 Z" fill="#F4EEE1" fillOpacity=".14" />
          <path d="M0 200 L0 165 L210 110 L400 150 L560 95 L760 155 L980 100 L1200 150 L1440 120 L1440 200 Z" fill="#F4EEE1" fillOpacity=".22" />
        </svg>
        <div style={{ position: 'relative', zIndex: 3, height: '100%', maxWidth: MAX, margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <span style={{ color: '#CFC199', fontSize: 12, letterSpacing: '.4em', textTransform: 'uppercase', marginBottom: 22, opacity: 0.95 }}>From the hills of Darjeeling</span>
          <h1 className="rhh" style={{ fontFamily: 'var(--serif)', color: '#FCF9F2', fontSize: 76, lineHeight: 1.02, margin: 0, fontWeight: 400, textWrap: 'balance', letterSpacing: '-.01em' } as React.CSSProperties}>
            New Collections<br />Have Arrived
          </h1>
          <p style={{ color: '#EBE1CE', fontSize: 17, maxWidth: 500, margin: '24px 0 34px', lineHeight: 1.6 }}>Furniture with the quiet of the mountains — calm woods, soft greens, and natural textures for every room.</p>
          <div onClick={() => nav.shop('All')} className="hv-cream" style={{ cursor: 'pointer', background: '#F5EFE3', color: '#382D21', padding: '16px 34px', borderRadius: 4, fontSize: 15, fontWeight: 600, letterSpacing: '.02em', boxShadow: '0 12px 34px rgba(38,28,20,.22)' }}>Explore the Collection</div>
        </div>
      </section>

      {/* LATEST LOOKS */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '96px 40px' }}>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 56, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, lineHeight: 1.12, margin: '0 0 20px', fontWeight: 400 }}>Latest Looks for Your Living Space</h2>
            <p style={{ color: '#8E7A61', fontSize: 15.5, lineHeight: 1.7, margin: '0 0 28px' }}>Explore our newest arrivals — designed for everyday calm, made to carry a little of the hills into your home.</p>
            <div onClick={() => nav.shop('All')} className="hv-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', padding: '12px 22px', borderRadius: 4, fontSize: 14, fontWeight: 500 }}>
              View All <ArrowRight />
            </div>
          </div>
          <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px 22px' }}>
            {latestLooks.map((p) => (
              <div key={p.name} onClick={() => nav.product(p.name)} style={{ cursor: 'pointer', animation: 'deoFade .5s ease both' }}>
                <div className="hv-lift" style={{ position: 'relative', background: '#ECE3D1', borderRadius: 8, overflow: 'hidden', aspectRatio: '1/1', marginBottom: 13 }}>
                  <Placeholder fit="contain" label={p.name} />
                  <div onClick={(e) => { e.stopPropagation(); s.addItem(p.name, p.price); }} className="hv-primary" style={{ cursor: 'pointer', position: 'absolute', bottom: 10, right: 10, background: '#463A2A', color: '#fff', width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, lineHeight: 1, boxShadow: '0 6px 16px rgba(38,28,20,.24)' }}>+</div>
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#382D21', marginBottom: 3 }}>{p.name}</div>
                <div style={{ fontSize: 14, color: '#8E7A61' }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALE BANNER */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '0 40px 96px' }}>
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', minHeight: 360, display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Placeholder label="Sunlit sofa scene · warm earthy tones" fit="cover" />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(24,32,26,.72) 0%, rgba(24,32,26,.45) 45%, rgba(24,32,26,.05) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 56, maxWidth: 560 }}>
            <span style={{ color: '#CFC199', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>Limited time</span>
            <h2 className="rb" style={{ fontFamily: 'var(--serif)', color: '#FCF9F2', fontSize: 52, lineHeight: 1.08, margin: '14px 0 16px', fontWeight: 400 }}>Monsoon Sale — Up to 40% Off</h2>
            <p style={{ color: '#EBE1CE', fontSize: 16, lineHeight: 1.6, margin: '0 0 28px', maxWidth: 420 }}>Refresh your rooms as the mist rolls in. Selected sofas, lighting and storage, priced to move.</p>
            <div onClick={nav.sale} className="hv-cream" style={{ display: 'inline-block', cursor: 'pointer', background: '#F5EFE3', color: '#382D21', padding: '14px 30px', borderRadius: 4, fontSize: 15, fontWeight: 600 }}>Shop the Sale</div>
          </div>
        </div>
      </section>

      {/* CUSTOMER FAVORITES */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '0 40px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 38 }}>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: 0, fontWeight: 400 }}>Most Loved by Our Customers</h2>
          <div onClick={() => nav.shop('All')} className="hv-link" style={{ cursor: 'pointer', fontSize: 14.5, color: '#6E7A45', display: 'flex', alignItems: 'center', gap: 7 }}>See all favorites →</div>
        </div>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
          {favorites.map((f) => (
            <div key={f.name} className="hv-lift-card" style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 12, overflow: 'hidden', animation: 'deoFade .5s ease both' }}>
              <div onClick={() => nav.product(f.name)} style={{ background: '#EDE3D0', aspectRatio: '4/3', position: 'relative', cursor: 'pointer' }}>
                <Placeholder fit="contain" label={f.name} />
              </div>
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <Star />
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#382D21' }}>{f.rating}</span>
                </div>
                <div onClick={() => nav.product(f.name)} className="hv-link-sage" style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, cursor: 'pointer' }}>{f.name}</div>
                <p style={{ fontSize: 14, color: '#8E7A61', lineHeight: 1.6, margin: '0 0 16px', minHeight: 44 }}>{f.blurb}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{f.price}</span>
                  <div onClick={() => s.addItem(f.name, f.price)} className="hv-tint2" style={{ cursor: 'pointer', background: '#ECE3D1', color: '#382D21', padding: '9px 18px', borderRadius: 4, fontSize: 13.5, fontWeight: 600 }}>Add to cart</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ background: '#ECE3D1' }}>
        <div className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '92px 40px' }}>
          <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/5', background: '#E5E3CE' }}>
              <Placeholder label="Serene styled interior · woven textures, dried grasses" fit="cover" />
            </div>
            <div>
              <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>Our Story</span>
              <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 44, lineHeight: 1.12, margin: '16px 0 22px', fontWeight: 400 }}>Furniture with Heart, Made in the Hills</h2>
              <p style={{ color: '#6E5C47', fontSize: 16, lineHeight: 1.75, margin: '0 0 18px' }}>Antoleena began on a misty morning above the tea gardens of Darjeeling — with a simple belief that a home should feel as restful as the mountains. We work with hill artisans and slow-grown timber to build pieces that age gently and belong anywhere.</p>
              <p style={{ color: '#6E5C47', fontSize: 16, lineHeight: 1.75, margin: '0 0 32px' }}>Soft greens, warm woods, honest materials. Furniture that carries a little of the highlands into your everyday.</p>
              <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
                {brandValues.map((v) => (
                  <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: '#E7DBC5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 20 }}>{v.icon}</span>
                    </div>
                    <span style={{ fontSize: 14.5, fontWeight: 500, color: '#382D21', lineHeight: 1.35 }}>{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE BY ROOM */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '100px 40px' }}>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 56, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>Shop by space</span>
            <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, lineHeight: 1.12, margin: '14px 0 18px', fontWeight: 400 }}>Explore by Room</h2>
            <p style={{ color: '#8E7A61', fontSize: 15.5, lineHeight: 1.7, margin: '0 0 26px' }}>Bring the calm of the hills into every corner — one room at a time.</p>
            <div onClick={() => nav.shop('All')} className="hv-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, cursor: 'pointer', background: '#463A2A', color: '#F5EFE3', padding: '12px 22px', borderRadius: 4, fontSize: 14, fontWeight: 500 }}>View All →</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {rooms.map((r) => (
              <div key={r.name} className="rc1 hv-shadow" onClick={() => nav.shop(r.cat)} style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '300px 1fr', gap: 30, alignItems: 'center', background: '#fff', border: '1px solid #E5D7BE', borderRadius: 14, overflow: 'hidden', paddingRight: 34 }}>
                <div style={{ aspectRatio: '3/2', background: '#E9DDCA' }}>
                  <Placeholder label={`${r.name} room`} fit="cover" />
                </div>
                <div style={{ padding: '22px 0' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, margin: '0 0 10px', fontWeight: 400 }}>{r.name}</h3>
                  <p style={{ color: '#8E7A61', fontSize: 14.5, lineHeight: 1.65, margin: '0 0 16px', maxWidth: 420 }}>{r.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6E7A45', fontSize: 14, fontWeight: 600 }}>Browse Category →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGN CTA */}
      <section style={{ position: 'relative', minHeight: 460, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Placeholder label="Sculptural chair in a warm, minimal room" fit="cover" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(24,32,26,.7) 0%, rgba(24,32,26,.3) 55%, rgba(24,32,26,0) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: MAX, margin: '0 auto', padding: '0 40px', width: '100%' }}>
          <div style={{ maxWidth: 480 }}>
            <h2 className="rb" style={{ fontFamily: 'var(--serif)', color: '#FCF9F2', fontSize: 54, lineHeight: 1.08, margin: '0 0 18px', fontWeight: 400 }}>Ready to Redesign Your Home?</h2>
            <p style={{ color: '#EBE1CE', fontSize: 16, lineHeight: 1.65, margin: '0 0 30px' }}>Book a free styling consultation with our team and reimagine your space in warm woods and misty greens.</p>
            <div onClick={nav.contact} className="hv-cream" style={{ display: 'inline-block', cursor: 'pointer', background: '#F5EFE3', color: '#382D21', padding: '15px 32px', borderRadius: 4, fontSize: 15, fontWeight: 600 }}>Explore the Collection</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '100px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 44 }}>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: 0, fontWeight: 400 }}>What Our Customers Say</h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <div onClick={() => setTIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="hv-tint" style={{ cursor: 'pointer', width: 46, height: 46, borderRadius: '50%', border: '1px solid #D6C6A6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevLeft />
            </div>
            <div onClick={() => setTIndex((i) => (i + 1) % testimonials.length)} className="hv-primary" style={{ cursor: 'pointer', width: 46, height: 46, borderRadius: '50%', background: '#463A2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevRight />
            </div>
          </div>
        </div>
        <div className="rc1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
          {visibleTestimonials.map((t, i) => (
            <div key={`${t.name}-${i}`} style={{ background: '#ECE3D1', borderRadius: 14, padding: 38, animation: 'deoFade .4s ease both' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} size={17} />
                ))}
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 21, lineHeight: 1.5, color: '#382D21', margin: '0 0 26px' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', background: '#E7DBC5', flexShrink: 0 }}>
                  <Placeholder label="Customer photo" fit="cover" radius="50%" />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#382D21' }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: '#8E7A61' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STYLING INSPIRATIONS */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '0 40px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>#AntoleenaAtHome</span>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '12px 0 0', fontWeight: 400 }}>Home Styling Inspirations</h2>
        </div>
        <div className="rc2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 210, gap: 16 }}>
          {inspirationTiles.map((tile) => (
            <div key={tile.caption} style={{ gridRow: tile.spanRow ? 'span 2' : undefined, gridColumn: tile.spanCol ? 'span 2' : undefined, borderRadius: 12, overflow: 'hidden', background: '#E9DDCA' }}>
              <Placeholder label={tile.caption} fit="cover" />
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="rw" style={{ maxWidth: MAX, margin: '0 auto', padding: '0 40px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ color: '#6E7A45', fontSize: 12, letterSpacing: '.34em', textTransform: 'uppercase' }}>Follow along</span>
          <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '12px 0 6px', fontWeight: 400 }}>Reels from the Hills</h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, color: '#6E7A45', fontWeight: 600 }}>
            <InstagramIcon /> @onrise.living
          </a>
        </div>
        <div className="hscroll">
          {instaPosts.map((ig) => (
            <a key={ig.caption} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="insta-tile hv-shadow-insta" style={{ position: 'relative', flex: '0 0 auto', width: 232, aspectRatio: '9/16', borderRadius: 16, overflow: 'hidden', background: '#E9DDCA', display: 'block' }}>
              <Placeholder label={ig.caption} fit="cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,22,.28) 0%, rgba(20,28,22,0) 34%, rgba(20,28,22,0) 55%, rgba(20,28,22,.72) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 6, color: '#F5EFE3', fontSize: 12, fontWeight: 600 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#F5EFE3" strokeWidth="1.6" /><path d="M3 8h18M9 3l2.5 5M14 3l2.5 5" stroke="#F5EFE3" strokeWidth="1.4" /><path d="M10 11.5v5l4.2-2.5z" fill="#F5EFE3" /></svg>
              </div>
              <div className="insta-play" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 52, height: 52, borderRadius: '50%', background: 'rgba(20,28,22,.35)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#F5EFE3"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div style={{ position: 'absolute', left: 14, right: 14, bottom: 13, color: '#F5EFE3' }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 7, textShadow: '0 1px 5px rgba(28,20,13,.5)' }}>{ig.caption}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 15, fontSize: 12.5, fontWeight: 600 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><HeartFill />{ig.likes}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><EyeIcon />{ig.views}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#ECE3D1' }}>
        <div className="rw" style={{ maxWidth: 900, margin: '0 auto', padding: '92px 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 46 }}>
            <h2 className="rb" style={{ fontFamily: 'var(--serif)', fontSize: 40, margin: '0 0 10px', fontWeight: 400 }}>Get the Details Before You Decide</h2>
            <p style={{ color: '#8E7A61', fontSize: 15.5, margin: 0 }}>Everything you need to know about shipping, returns, and settling in.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((q, i) => {
              const open = openFaq === i;
              return (
                <div key={q.question} style={{ background: '#fff', border: '1px solid #E5D7BE', borderRadius: 10, overflow: 'hidden' }}>
                  <div onClick={() => setOpenFaq(open ? -1 : i)} className="hv-faq" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 26px', gap: 20 }}>
                    <span style={{ fontSize: 16.5, fontWeight: 500, color: '#382D21' }}>{q.question}</span>
                    <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: '#ECE3D1', color: '#6E7A45', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, lineHeight: 1 }}>{open ? '–' : '+'}</span>
                  </div>
                  {open && <div style={{ padding: '0 26px 24px', color: '#6E5C47', fontSize: 15, lineHeight: 1.7, maxWidth: 700, animation: 'deoFade .3s ease both' }}>{q.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
