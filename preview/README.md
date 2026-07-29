# Live preview (self-contained)

`onrise-preview.html` is a single, dependency-free build of the storefront used
for the shareable live preview / Artifact. Fonts (Marcellus + Hanken Grotesk) are
embedded as base64 `@font-face` data URIs and all logic is inline vanilla JS, so it
runs from `file://` or any static host with **no network access** — matching the
Artifact sandbox (which blocks external font/script/image CDNs).

It covers the core storefront experience — home, shop (with category filter),
product detail, sale (live countdown), about, contact — plus the working cart
drawer, search overlay, add-to-cart toast, mobile nav and tab bar.

This is a preview only. The full, production app is the Next.js codebase at the repo
root (`src/`), which has all 13 routes including checkout, account, auth, gift cards,
password reset and order tracking.
