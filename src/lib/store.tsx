'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { parsePrice } from './data';

export type CartItem = { name: string; price: string; qty: number };

type Store = {
  // cart
  cartItems: CartItem[];
  cartCount: number;
  addItem: (name: string, price: string, qty?: number) => void;
  addGiftCard: (amount: number) => void;
  setQty: (name: string, qty: number) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  subtotal: number;
  // cart drawer
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  // search
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  query: string;
  setQuery: (q: string) => void;
  // mobile nav
  mobileNav: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  // account menu
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  // session
  loggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  // toast
  toast: boolean;
};

const StoreContext = createContext<Store | null>(null);

const CART_KEY = 'onrise.cart';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQueryState] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [toast, setToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // hydrate cart from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) setCartItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    } catch {
      /* ignore */
    }
  }, [cartItems]);

  const flashToast = useCallback(() => {
    setToast(false);
    // restart animation on next frame
    requestAnimationFrame(() => setToast(true));
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 2200);
  }, []);

  const addItem = useCallback(
    (name: string, price: string, qty = 1) => {
      setCartItems((items) => {
        const i = items.findIndex((it) => it.name === name);
        if (i >= 0) {
          const next = items.slice();
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        }
        return [...items, { name, price, qty }];
      });
      flashToast();
    },
    [flashToast],
  );

  const addGiftCard = useCallback(
    (amount: number) => {
      const name = 'Gift Card · $' + amount;
      const price = '$' + amount + '.00';
      setCartItems((items) => {
        const i = items.findIndex((it) => it.name === name);
        if (i >= 0) {
          const next = items.slice();
          next[i] = { ...next[i], qty: next[i].qty + 1 };
          return next;
        }
        return [...items, { name, price, qty: 1 }];
      });
      flashToast();
    },
    [flashToast],
  );

  const setQty = useCallback((name: string, qty: number) => {
    setCartItems((items) => items.map((it) => (it.name === name ? { ...it, qty: Math.max(1, qty) } : it)));
  }, []);

  const removeItem = useCallback((name: string) => {
    setCartItems((items) => items.filter((it) => it.name !== name));
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartCount = useMemo(() => cartItems.reduce((n, it) => n + it.qty, 0), [cartItems]);
  const subtotal = useMemo(() => cartItems.reduce((n, it) => n + parsePrice(it.price) * it.qty, 0), [cartItems]);

  const value: Store = {
    cartItems,
    cartCount,
    addItem,
    addGiftCard,
    setQty,
    removeItem,
    clearCart,
    subtotal,
    cartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    searchOpen,
    openSearch: () => {
      setQueryState('');
      setSearchOpen(true);
    },
    closeSearch: () => setSearchOpen(false),
    query,
    setQuery: setQueryState,
    mobileNav,
    openMobileNav: () => setMobileNav(true),
    closeMobileNav: () => setMobileNav(false),
    menuOpen,
    toggleMenu: () => setMenuOpen((v) => !v),
    closeMenu: () => setMenuOpen(false),
    loggedIn,
    signIn: () => setLoggedIn(true),
    signOut: () => setLoggedIn(false),
    toast,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): Store {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
