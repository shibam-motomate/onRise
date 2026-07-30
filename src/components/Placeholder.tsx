import React from 'react';

/**
 * Image placeholder block. Photography is intentionally not included in the
 * design handoff — every image position is a sized, neutral-filled block
 * awaiting real photography. Swap this for the real image component and keep
 * the container's aspect ratio, radius and overflow:hidden.
 */
export function Placeholder({
  label,
  fit = 'cover',
  radius = 0,
  style,
}: {
  label?: string;
  fit?: 'cover' | 'contain';
  radius?: number | string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      data-img={label ?? ''}
      data-img-fit={fit}
      role="img"
      aria-label={label || undefined}
      style={{ width: '100%', height: '100%', background: '#E6D8C1', borderRadius: radius, ...style }}
    />
  );
}
