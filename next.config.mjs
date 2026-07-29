/** @type {import('next').NextConfig} */

// For GitHub Pages the site is served from a subpath (the repo name).
// Set NEXT_PUBLIC_BASE_PATH="/onRise" in CI; leave empty for local dev / other hosts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // emit a fully static site into ./out
  trailingSlash: true, // folder/index.html routing works cleanly on static hosts
  basePath: basePath || undefined,
  images: { unoptimized: true }, // no image optimization server on static hosts
};

export default nextConfig;
