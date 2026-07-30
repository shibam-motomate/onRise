import React from 'react';

type P = React.SVGProps<SVGSVGElement> & { size?: number };

export const LogoMark = ({ stroke = '#F2EFE6', accent = '#8C946A', size = 30, showAccent = true }: { stroke?: string; accent?: string; size?: number; showAccent?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M4 32 L15 13 L21 22 L27 10 L36 32 Z" fill="none" stroke={stroke} strokeWidth="2.1" strokeLinejoin="round" />
    {showAccent && <path d="M11.5 20.5 L15 13 L18.4 18" stroke={accent} strokeWidth="2.1" strokeLinejoin="round" fill="none" />}
  </svg>
);

export const SearchIcon = ({ color = '#E7ECE2', size = 21 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.7" />
    <path d="M16.5 16.5L21 21" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const UserIcon = ({ color = '#E7ECE2', size = 21 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.7" />
    <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const CartIcon = ({ color = '#E7ECE2', size = 23 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 8 H18 L17 20 H7 Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9 8 V6.5 A3 3 0 0 1 15 6.5 V8" stroke={color} strokeWidth="1.7" />
  </svg>
);

export const BurgerIcon = ({ color = '#F2EFE6', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 7h16M4 12h16M4 17h16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const ChevDown = ({ color = '#C4B79D', size = 12 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M2.5 4.5L6 8L9.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = ({ color = '#F5EFE3', size = 15 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevLeft = ({ color = '#382D21', size = 18 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M15 6l-6 6 6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevRight = ({ color = '#F5EFE3', size = 18 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Star = ({ color = '#C79A3E', size = 15 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.8 5.9 20.3 7.3 13.6 2.2 9l6.8-.8z" />
  </svg>
);

export const InstagramIcon = ({ color = '#6E7A45', size = 17 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.7" />
    <circle cx="17.3" cy="6.7" r="1.1" fill={color} />
  </svg>
);

export const HeartFill = ({ color = '#F5EFE3', size = 15 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21s-7.5-4.6-10-9.2C.6 8.8 2 5.5 5.2 5.5c2 0 3.2 1.2 3.8 2.3.6-1.1 1.8-2.3 3.8-2.3 3.2 0 4.6 3.3 3.2 6.3C19.5 16.4 12 21 12 21z" />
  </svg>
);

export const EyeIcon = ({ color = '#F5EFE3', size = 15 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke={color} strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.7" />
  </svg>
);

export const Check = ({ color = '#6E7A45', size = 30, strokeWidth = 2.4 }: { color?: string; size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12.5l4.5 4.5L19 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
