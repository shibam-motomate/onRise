'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { slugify } from './data';

/**
 * Navigation helpers that map the prototype's `go(page, opts)` onto real routes.
 * Every navigation resets scroll to top (Next does this by default on push).
 */
export function useNav() {
  const router = useRouter();
  return {
    home: useCallback(() => router.push('/'), [router]),
    shop: useCallback((cat?: string) => router.push(cat && cat !== 'All' ? `/shop?cat=${encodeURIComponent(cat)}` : '/shop'), [router]),
    product: useCallback((name: string) => router.push(`/product/${slugify(name)}`), [router]),
    about: useCallback(() => router.push('/about'), [router]),
    contact: useCallback(() => router.push('/contact'), [router]),
    sale: useCallback(() => router.push('/sale'), [router]),
    gift: useCallback(() => router.push('/gift'), [router]),
    checkout: useCallback(() => router.push('/checkout'), [router]),
    account: useCallback(() => router.push('/account'), [router]),
    auth: useCallback(() => router.push('/auth'), [router]),
    reset: useCallback(() => router.push('/reset'), [router]),
    tracking: useCallback(() => router.push('/tracking'), [router]),
    push: router.push,
  };
}
