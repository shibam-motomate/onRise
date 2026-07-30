import React from 'react';

/** Olive-branch mark echoing the leaves in the Antoleena logo. */
export function LeafMark({ size = 30, stem = '#6E7A45', leaf = '#7E8757' }: { size?: number; stem?: string; leaf?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M7 33 C 14 24, 20 17, 31 12" stroke={stem} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 21 C 11 19, 9 13, 11 8 C 16 10, 19 16, 16 21 Z" fill={leaf} />
      <path d="M23 15 C 23 10, 27 7, 32 7 C 32 12, 28 16, 23 15 Z" fill={stem} />
      <path d="M10 27 C 6 26, 4 21, 5 16 C 10 18, 12 23, 10 27 Z" fill={leaf} />
    </svg>
  );
}

type Size = 'sm' | 'md' | 'lg';
const WORD: Record<Size, number> = { sm: 21, md: 24, lg: 34 };
const MARK: Record<Size, number> = { sm: 28, md: 32, lg: 40 };

/**
 * Antoleena brand lockup: leaf mark + Bengali wordmark (অন্তলীনা) + optional
 * "Home Decore" tagline. `onDark` flips it to light ink for dark surfaces.
 */
export function BrandLogo({
  size = 'md',
  onDark = false,
  tagline = false,
  mark = true,
  onClick,
}: {
  size?: Size;
  onDark?: boolean;
  tagline?: boolean;
  mark?: boolean;
  onClick?: () => void;
}) {
  const word = onDark ? '#F3ECDD' : '#43382A';
  const tag = onDark ? '#C7B793' : '#8E7A61';
  const stem = onDark ? '#C9BE95' : '#6E7A45';
  const leaf = onDark ? '#AEB483' : '#7E8757';

  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: onClick ? 'pointer' : 'default' }}>
      {mark && <LeafMark size={MARK[size]} stem={stem} leaf={leaf} />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span className="brand-bn" style={{ fontSize: WORD[size], color: word, letterSpacing: '.01em' }}>
          অন্তলীনা
        </span>
        {tagline && (
          <span className="brand-tag" style={{ fontSize: Math.round(WORD[size] * 0.34), letterSpacing: '.34em', color: tag }}>
            Home Decore
          </span>
        )}
      </div>
    </div>
  );
}
