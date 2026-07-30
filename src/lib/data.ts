// Antoleena storefront data model.
// Ported from the design prototype. Products, prices, reviews, orders and
// addresses are realistic placeholders, to be replaced by real API data.

export type Product = {
  name: string;
  price: string;
  category: string;
  rating: string;
  blurb: string;
};

export const products: Product[] = [
  { name: 'Antoleena Mid-Century Sideboard', price: '$749.00', category: 'Living Room', rating: '4.8', blurb: 'Walnut-toned sideboard with soft white drawers for calm, modern storage.' },
  { name: 'Kanchen Lounge Chair', price: '$189.00', category: 'Living Room', rating: '4.9', blurb: 'Sleek lines and woven texture bring cozy hill-house style to any corner.' },
  { name: 'Teesta Modular Sofa', price: '$899.00', category: 'Living Room', rating: '4.7', blurb: 'Spacious, adaptable and ultra-comfortable — perfect for slow family evenings.' },
  { name: 'Rongli Velvet Dining Chairs', price: '$299.00', category: 'Dining & Kitchen', rating: '4.6', blurb: 'A pair of softly upholstered chairs in muted sage velvet.' },
  { name: 'Mirik Oak Coffee Table', price: '$245.00', category: 'Living Room', rating: '4.8', blurb: 'Round, tiered oak table with a warm, hand-rubbed finish.' },
  { name: 'Kurseong Ceramic Table Lamp', price: '$72.00', category: 'Lighting & Decor', rating: '4.5', blurb: 'Textured ceramic base with a soft linen shade.' },
  { name: 'Ghoom Wall Shelf Set (3 pcs)', price: '$129.00', category: 'Storage', rating: '4.7', blurb: 'Floating oak shelves that keep small treasures close.' },
  { name: 'Rangeet Fabric Bed Frame', price: '$520.00', category: 'Bedroom', rating: '4.8', blurb: 'A low, upholstered frame in warm oat linen.' },
  { name: 'Tiger Hill Double Dresser', price: '$389.00', category: 'Bedroom', rating: '4.6', blurb: 'Six-drawer dresser with slim tapered legs.' },
  { name: 'Batasia Rattan Bench', price: '$159.00', category: 'Storage', rating: '4.5', blurb: 'Hand-woven rattan bench for entryways and bed-ends.' },
  { name: 'Peshok Floor Lamp', price: '$138.00', category: 'Lighting & Decor', rating: '4.7', blurb: 'Tripod floor lamp with a soft, diffused glow.' },
  { name: 'Lepcha Bookshelf', price: '$410.00', category: 'Storage', rating: '4.8', blurb: 'Tall open shelving in warm-grained timber.' },
];

export const categories = ['All', 'Living Room', 'Bedroom', 'Dining & Kitchen', 'Storage', 'Lighting & Decor'];

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function findProductBySlug(s: string): Product | undefined {
  return products.find((p) => slugify(p.name) === s);
}

export function parsePrice(s: string): number {
  return parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0;
}

export function money(n: number): string {
  return '$' + n.toFixed(2);
}

export const rooms = [
  { name: 'Living Room', cat: 'Living Room', desc: 'Relaxed sofas, lounge chairs and warm-wood tables built for slow evenings.' },
  { name: 'Bedroom', cat: 'Bedroom', desc: 'Restful beds, soft frames, dressers and calming bedside pieces.' },
  { name: 'Dining & Kitchen', cat: 'Dining & Kitchen', desc: 'Gather-round dining sets and honest kitchen storage in natural tones.' },
  { name: 'Storage', cat: 'Storage', desc: 'Shelving and cabinets designed to keep everyday clutter out of sight.' },
  { name: 'Lighting & Decor', cat: 'Lighting & Decor', desc: 'Soft, ambient lighting and finishing touches for a lived-in glow.' },
];

export const testimonials = [
  { quote: 'Our living room finally feels like the hill homestays we love — warm, unhurried, and beautifully made.', name: 'Diya Rai', location: 'Kalimpong, IN' },
  { quote: 'The Teesta sofa is the comfiest thing we own. Delivery was smooth and the finish is flawless.', name: 'Marcus Bell', location: 'Portland, US' },
  { quote: 'Every piece feels considered. The sage tones brought a calm to our flat we didn’t know we needed.', name: 'Hannah Palmer', location: 'Leeds, UK' },
  { quote: 'Beautiful, sturdy, and honestly priced. The Mirik table is the heart of our home now.', name: 'Sonam Lepcha', location: 'Darjeeling, IN' },
];

export const faqs = [
  { question: 'Do you offer free shipping?', answer: 'Yes — orders above $500 ship free across the country. Below that, a flat, transparent rate is shown at checkout before you pay.' },
  { question: 'Can I return an item if I change my mind?', answer: 'Absolutely. You have 30 days to return any piece in its original condition for a full refund. We arrange collection for larger items.' },
  { question: 'Do your products require assembly?', answer: 'Most pieces arrive ready to use or need only light assembly. Every order includes clear, illustrated instructions and the tools required.' },
  { question: 'How do I care for my furniture?', answer: 'Wipe timber with a soft, slightly damp cloth and keep pieces out of direct sun. Each product page lists care notes specific to its materials.' },
  { question: 'Do you offer assembly services for large furniture items?', answer: 'Yes. White-glove assembly is available in most cities for a small fee — just select it at checkout and our team handles the rest.' },
];

export const brandValues = [
  { icon: '\u{1F343}', label: 'Sustainable Materials' },
  { icon: '\u{1F3E1}', label: 'Designed for Everyday Living' },
  { icon: '\u{1FA9A}', label: 'Carefully Crafted by Experts' },
  { icon: '\u{1F69A}', label: 'Hassle-Free Delivery' },
];

export const favoriteNames = ['Antoleena Mid-Century Sideboard', 'Kanchen Lounge Chair', 'Teesta Modular Sofa'];

export const instaPosts = [
  { caption: 'Misty morning styling', likes: '1.2k', views: '48k' },
  { caption: 'Kanchen chair corner', likes: '864', views: '31k' },
  { caption: 'Tea-garden tones', likes: '2.1k', views: '96k' },
  { caption: 'Mirik table detail', likes: '731', views: '22k' },
  { caption: 'Soft-lit shelf', likes: '1.5k', views: '54k' },
  { caption: 'Warm woods & linen', likes: '983', views: '37k' },
  { caption: 'Slow living, styled', likes: '1.8k', views: '72k' },
  { caption: 'Cedar & clay palette', likes: '640', views: '19k' },
];

export const inspirationTiles = [
  { caption: 'Tall dried-grass corner', spanRow: true, spanCol: false },
  { caption: 'Neutral sofa vignette', spanRow: false, spanCol: false },
  { caption: 'Sunlit reading nook', spanRow: false, spanCol: true },
  { caption: 'Ceramic still life', spanRow: false, spanCol: false },
  { caption: 'Woven chair detail', spanRow: false, spanCol: true },
  { caption: 'Soft-lit shelf styling', spanRow: false, spanCol: false },
];

// --- Account ---
export const user = { name: 'Pema Rai', email: 'pema.rai@example.com', initials: 'PR', memberSince: '2025' };

export const accountOrders = [
  { no: 'DEO-482013', date: 'Jul 20, 2026', status: 'In Transit', badge: '#EDEFDF', badgeText: '#5E6B3B', total: '$1,144.00', items: '2 items' },
  { no: 'DEO-471880', date: 'Jun 02, 2026', status: 'Delivered', badge: '#ECE3D1', badgeText: '#5B6A5F', total: '$245.00', items: '1 item' },
  { no: 'DEO-460219', date: 'Apr 18, 2026', status: 'Delivered', badge: '#ECE3D1', badgeText: '#5B6A5F', total: '$899.00', items: '1 item' },
];

export const userReels = [
  { caption: 'Kanchen chair — first look', status: 'Published', badge: '#EDEFDF', badgeText: '#5E6B3B', views: '3.4k', likes: '210' },
  { caption: 'Mirik table unboxing', status: 'In review', badge: '#FBF1E6', badgeText: '#9A6B32', views: '—', likes: '—' },
];

export const accountAddresses = [
  { label: 'Home', name: 'Pema Rai', lines: '12 Cedar Lane, Kalimpong, WB 734301, India', phone: '+91 98000 12345', primary: true },
  { label: 'Studio', name: 'Pema Rai', lines: 'Mall Road, Darjeeling, WB 734101, India', phone: '+91 98000 67890', primary: false },
];

// --- About ---
export const processSteps = [
  { n: '01', title: 'Sourced in the hills', text: 'We work with slow-grown Himalayan timber and small hill suppliers who share our respect for the land.' },
  { n: '02', title: 'Shaped by hand', text: 'Each piece is cut, joined and sanded by Darjeeling artisans — no rushed lines, no shortcuts.' },
  { n: '03', title: 'Finished to last', text: 'Natural oils and honest hardware, so your furniture ages gently and stays with you for years.' },
];

export const team = [
  { name: 'Pema Sherpa', role: 'Founder & Head of Design' },
  { name: 'Anil Chettri', role: 'Master Woodworker' },
  { name: 'Mei Lin Tan', role: 'Materials & Sustainability' },
];

// --- Gift ---
export const giftSteps = [
  { n: '01', title: 'Choose an amount', text: 'Pick a preset or enter your own — from a small thank-you to a whole room.' },
  { n: '02', title: 'Add a personal note', text: 'Write a message and set the date it should land in their inbox.' },
  { n: '03', title: 'They style their space', text: 'Delivered by email with a code that never expires. No fees, ever.' },
];
export const giftPresets = [50, 100, 250, 500];

// --- Sale ---
export const saleEndTs = new Date('2026-08-02T23:59:59').getTime();
export const saleDiscounts = [40, 25, 30, 20, 35, 30, 15, 40];
export const saleOffers = [
  { title: '40% Off Lighting & Decor', desc: 'Warm up every corner for less.', code: 'GLOW40' },
  { title: 'Free White-Glove Delivery', desc: 'On every order over $800.', code: 'AUTO' },
  { title: '20% Off Your First Order', desc: 'New to the hills? Welcome home.', code: 'HILLS20' },
];

// --- Tracking ---
export const trackSteps = [
  { label: 'Order Placed', sub: 'Jul 20, 2026 · 2:14 PM', state: 'done' as const },
  { label: 'Crafted & Packed', sub: 'Jul 22, 2026', state: 'done' as const },
  { label: 'Shipped', sub: 'Jul 24, 2026 · in transit', state: 'current' as const },
  { label: 'Out for Delivery', sub: 'Estimated Jul 27', state: 'todo' as const },
  { label: 'Delivered', sub: 'Estimated Jul 28', state: 'todo' as const },
];
export const trackedOrder = { no: 'DEO-482013', placed: 'July 20, 2026', eta: 'July 28, 2026', status: 'In Transit', address: 'Mall Road, Darjeeling, WB 734101, India' };

// --- Contact ---
export const contactMethods = [
  { icon: '\u{1F4CD}', label: 'Visit the studio', value: 'Mall Road, Darjeeling, WB 734101, India' },
  { icon: '✉️', label: 'Email us', value: 'hello@onrise.living' },
  { icon: '\u{1F4DE}', label: 'Call us', value: '+91 98000 12345' },
  { icon: '\u{1F55C}', label: 'Studio hours', value: 'Mon–Sat · 10am – 7pm IST' },
];
