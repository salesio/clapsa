export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'corporate' | 'ppe' | 'display' | 'security' | 'gifting';
  categoryLabel: string;
  image: string;
  description: string;
  deliverables: string[];
  year: string;
  location: string;
  tag: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'clapsa-corporate-apparel-collection',
    title: 'Custom Branded Winter Jackets & Corporate Apparel',
    client: 'National Enterprise Fleet & Logistics',
    category: 'corporate',
    categoryLabel: 'Corporate Apparel',
    image: '/images/media/Unknown1.jpg',
    description: 'Designed, customized and manufactured complete high-density embroidered corporate jackets, winter coats, and brand merchandise for corporate and regional branch staff.',
    deliverables: [
      'Weatherproof Padded Winter Jackets with Custom Red Accent Linings',
      'High-Density Computerized Chest & Sleeve Logo Embroidery',
      'Individualized Employee Sizing Kits & Custom Packaging',
      'Full SADC Distribution across South Africa & Regional Hubs'
    ],
    year: '2025',
    location: 'Johannesburg, South Africa',
    tag: 'Corporate Wardrobe'
  },
  {
    id: 'industrial-ppe-safety-shoot',
    title: 'Certified Safety PPE, Eye Protection & Gloves Deployment',
    client: 'Heavy Engineering & Industrial Fabrication Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    image: '/images/media/Unknown2.jpg',
    description: 'Supplied comprehensive eye protection goggles, heavy cut-resistant handling gloves, respiratory protection, and safety footwear for manufacturing plant workers.',
    deliverables: [
      'Anti-Scratch & Anti-Fog UV Protective Safety Goggles',
      'Cut-Level 5 Nitrile & Leather Reinforced Industrial Gloves',
      'Heavy-Duty Dual-Density Safety Footwear with Steel Midsole',
      'SABS & ISO 9001 Compliance Certification Documentation'
    ],
    year: '2025',
    location: 'Gauteng & Mpumalanga',
    tag: 'Industrial PPE'
  },
  {
    id: 'security-tactical-uniforms',
    title: 'Armed Response & Private Security Tactical Outfitting',
    client: 'Premier Security & VIP Escort Services',
    category: 'security',
    categoryLabel: 'Tactical & Security',
    image: '/images/media/303452-main.png',
    description: 'Equipped 400+ security officers and patrol guards with high-durability tactical security uniforms, combat duty shirts, epaulettes, and heavy patrol boots.',
    deliverables: [
      'Rip-stop Combat Duty Trousers & Security Epaulette Shirts',
      'Tactical Combat High-Ankle S3 Protective Footwear',
      'Reinforced Duty Belts, Baton Holsters & Radio Pouches',
      'High-Visibility Night-Patrol Reflective Rain Jackets'
    ],
    year: '2024',
    location: 'Johannesburg & Pretoria',
    tag: 'Tactical Gear'
  },
  {
    id: 'outdoor-gazebo-displays',
    title: 'High-Impact Branded Gazebos & Outdoor Activation Suite',
    client: 'Pan-African Retail Brand & Sports Championship',
    category: 'display',
    categoryLabel: 'Branded Displays & Signage',
    image: '/images/media/display.jpg',
    description: 'Manufactured complete outdoor brand activation setups including heavy-duty hex-aluminum pop-up gazebos, double-sided teardrop flags, and promotional kiosks.',
    deliverables: [
      'Heavy-Duty 3x3m Waterproof Gazebos with Full-Wall Sublimation Prints',
      'Double-Sided 4m Teardrop & Sharkfin Flying Banners',
      'Perimeter Perforated PVC Fence & Barrier Wraps',
      'Portable Branded Sampling Kiosks for Roadshows'
    ],
    year: '2025',
    location: 'National (SA & SADC)',
    tag: 'Event Displays'
  },
  {
    id: 'mining-protective-gear',
    title: 'Mining Site PPE & Certified Respiratory Protection',
    client: 'Civil Infrastructure & Underground Mining Operations',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    image: '/images/media/302350-main.png',
    description: 'Bulk supply of certified vented hard hats, respiratory dust masks, high-visibility conti suits, and S3 heavy mining footwear for civil infrastructure contractors.',
    deliverables: [
      'SABS Approved Vented Hard Hats with Company Decals',
      'FFP2 / FFP3 Particulate Respiratory Half-Masks',
      'D59 Flame & Acid Retardant Heavy-Duty Conti Suits',
      'Caterpillar & Excavator S3 Heavy Safety Boots'
    ],
    year: '2024',
    location: 'Rustenburg & Witbank',
    tag: 'Mining Safety'
  },
  {
    id: 'lifestyle-brand-apparel',
    title: 'Branded Activewear, Caps & Headwear Collection',
    client: 'Corporate Wellness & Athletics Association',
    category: 'corporate',
    categoryLabel: 'Corporate Apparel',
    image: '/images/media/Unknown3.jpg',
    description: 'Supplied and customized lightweight technical activewear, branded 6-panel brushed cotton caps, and sport jackets for regional corporate games.',
    deliverables: [
      'Moisture-Management Technical Breathable T-Shirts & Golfers',
      '6-Panel Structured Brushed Cotton Caps with 3D Embroidery',
      'Customized Sports Duffel Bags & Thermal Water Bottles',
      'On-Site Fitting & Distribution Logistics'
    ],
    year: '2024',
    location: 'Cape Town & Johannesburg',
    tag: 'Activewear & Caps'
  },
  {
    id: 'executive-corporate-gifting',
    title: 'VIP Client Executive Gifting & Metal Accessories',
    client: 'Financial Advisory & Wealth Management Firm',
    category: 'gifting',
    categoryLabel: 'Corporate Gifting',
    image: '/images/media/gifting.jpg',
    description: 'Curated 800 luxury VIP gift sets featuring laser-engraved metal torches, executive power essentials, thermal drinkware, and debossed presentation notebooks.',
    deliverables: [
      'Custom Matt-Black Metal Accessories with Precision Laser Etch',
      'Debossed Leatherette Executive Organizers & Metal Pens',
      'Double-Wall Vacuum Insulated Stainless Steel Drinkware',
      'Custom Luxury Presentation Packaging with Thank-You Cards'
    ],
    year: '2024',
    location: 'Johannesburg CBD',
    tag: 'VIP Gifting'
  },
  {
    id: 'flag-banners-outdoor',
    title: 'Stadium Perimeter Teardrop & Telescoping Flag Banners',
    client: 'Regional Athletics & Event Management',
    category: 'display',
    categoryLabel: 'Branded Displays & Signage',
    image: '/images/media/303869-main.png',
    description: 'Fabricated high-durability telescoping outdoor flag banners and wind-resistant event bunting with photographic dye-sublimation printing.',
    deliverables: [
      '50x 4m Double-Sided Heavyweight Telescoping Flags',
      'High-Traction Cast Iron Base Plates for Wind Resistance',
      '1,000m Customized Triangular PVC Digital Bunting',
      'Rapid 48-hour turn-around and delivery to stadium grounds'
    ],
    year: '2024',
    location: 'Gauteng',
    tag: 'Stadium Signage'
  }
];

export const PARTNERS = [
  { name: 'Barron', image: '/images/partners/barron.jpg', description: 'Africa’s largest brandable apparel and promotional gifting distributor.' },
  { name: 'Amrod', image: '/images/partners/amrod.jpg', description: 'Premier total-solution promotional products & corporate gifting trade supplier.' },
  { name: 'Altitude by Wizard', image: '/images/partners/altitude.jpg', description: 'High-quality promotional apparel, outerwear, and sport collections.' },
  { name: 'Abelanani', image: '/images/partners/abelanani.jpg', description: 'Specialist in custom manufactured promotional merchandise and event novelties.' },
  { name: 'Bic Graphic', image: '/images/partners/bic.jpg', description: 'World-renowned writing instruments, lighters, and branded stationery.' },
  { name: 'KMQ', image: '/images/partners/kmq.jpg', description: 'Top tier trade suppliers of headwear, caps, and outdoor accessories.' },
  { name: 'Macma', image: '/images/partners/macma.jpg', description: 'Innovative corporate gifts, electronic gadgets, and premium drinkware.' },
  { name: 'TOGS', image: '/images/partners/togs.jpg', description: 'Specialized industrial workwear, safety footwear, and team apparel.' },
];
