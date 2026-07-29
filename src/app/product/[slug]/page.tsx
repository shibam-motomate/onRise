import React from 'react';
import { products, slugify } from '@/lib/data';
import ProductClient from './ProductClient';

// Pre-render one static page per product for `output: 'export'`.
export function generateStaticParams() {
  return products.map((p) => ({ slug: slugify(p.name) }));
}

export const dynamicParams = false;

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductClient slug={params.slug} />;
}
