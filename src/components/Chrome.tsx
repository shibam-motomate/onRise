'use client';

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { SearchOverlay } from './SearchOverlay';
import { MobileNav } from './MobileNav';
import { MobileTabBar } from './MobileTabBar';
import { Toast } from './Toast';

/** Global chrome + overlays wrapping every page. */
export function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="rroot">
      <Toast />
      <SearchOverlay />
      <CartDrawer />
      <Header />
      <MobileNav />
      {children}
      <Footer />
      <MobileTabBar />
    </div>
  );
}
