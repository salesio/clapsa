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
    id: 'clapsa-activewear-collection',
    title: 'Custom Sublimated Zip Hoodies & Athletic Tracksuits',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'corporate',
    categoryLabel: 'Sublimation & Sportswear',
    image: '/images/portfolio/portfolio-lifestyle-apparel.jpg',
    description: 'Designed, printed, and manufactured high-performance custom sublimated zip hoodies and activewear featuring precision color saturation and bespoke sleeve branding.',
    deliverables: [
      'Dye-Sublimated Performance Zip Hoodies with Vivid Contrast Graphics',
      'Matching High-Flex Moisture-Wicking 3/4 Activewear Leggings',
      'Custom Typography Sleeve Print (www.clapsashop.co.za)',
      'Complete Athlete Sizing Kits & Custom Retail Packaging'
    ],
    year: '2025',
    location: 'Johannesburg, South Africa',
    tag: 'Sublimated Apparel'
  },
  {
    id: 'trace-vip-event-merchandising',
    title: 'TRACE+ VIP Event Lanyards & Sublimated Wristbands',
    client: 'TRACE+ Music & Entertainment Tour',
    category: 'gifting',
    categoryLabel: 'Event Merchandising',
    image: '/images/portfolio/portfolio-event-branding.jpg',
    description: 'Manufactured premium black satin dye-sublimated VIP event lanyards and wristbands featuring scannable QR campaign activations and vibrant orange branding.',
    deliverables: [
      'Double-Sided High-Density Silk Satin Sublimated Lanyards',
      'High-Precision Scannable QR Codes for Contactless Digital Activations',
      'Heavy-Duty Lobster Claw Clasps & Safety Breakaway Buckles',
      '50,000+ Units Rapid SADC Pan-African Event Distribution'
    ],
    year: '2025',
    location: 'Pan-African Tour & Festivals',
    tag: 'Event Merchandising'
  },
  {
    id: 'claps-gin-corporate-gifting',
    title: 'CLAPS Premium Gin & Laser-Engraved Wooden Coasters',
    client: 'Exclusive Brand Launch & VIP Executive Gifting',
    category: 'gifting',
    categoryLabel: 'Bespoke Corporate Gifting',
    image: '/images/portfolio/portfolio-corporate-gifting.jpg',
    description: 'Curated luxury artisan gifting suites featuring custom-labelled CLAPS Premium Gin spirit bottles with natural cork stoppers and bespoke laser-cut geometric wooden coasters.',
    deliverables: [
      'Custom Foil-Laminated Spirit Bottle Labels with Natural Cork Seals',
      'Precision Laser-Cut Geometric Hardwood Coaster Sets',
      'Debossed Presentation Gift Boxes with Silk Ribbon Liners',
      'Turnkey VIP Executive Gift Hamper Assembly & Distribution'
    ],
    year: '2025',
    location: 'Sandton, Johannesburg',
    tag: 'Executive Gifting'
  },
  {
    id: 'industrial-ppe-safety-shoot',
    title: 'Certified Safety Eyewear & Heavy-Duty Nitrile Grip Gloves',
    client: 'Manufacturing & Heavy Industrial Engineering Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    image: '/images/portfolio/portfolio-ppe-safety.jpg',
    description: 'Supplied comprehensive SABS & CE approved eye protection goggles, anti-abrasion nitrile safety gloves, and industrial head protection for engineering workforces.',
    deliverables: [
      'Anti-Scratch & Anti-Fog UV Protective Safety Glasses',
      'Heavy-Duty High-Grip Nitrile Coated Handling Gloves',
      'Industrial Head & Hearing Protection Kits',
      'SABS & ISO 9001 Compliance Certification Documentation'
    ],
    year: '2025',
    location: 'Gauteng & Mpumalanga',
    tag: 'Certified Safety PPE'
  },
  {
    id: 'clapsa-graphic-tees',
    title: 'Africa Map Typography Graphic T-Shirt Collection',
    client: 'Pan-African Apparel & Cultural Brand',
    category: 'corporate',
    categoryLabel: 'Graphic & Corporate Apparel',
    image: '/images/portfolio/portfolio-graphic-tees.jpg',
    description: 'Produced premium 180gsm combed cotton graphic t-shirts featuring high-density typographical Africa map screen printing with razor-sharp micro-text clarity.',
    deliverables: [
      '180gsm 100% Combed Cotton Heavyweight Crewneck Tees',
      'High-Density Screen & DTF Typographical Map Printing',
      'Pre-Shrunk Ring-Spun Fabric with Reinforced Double Stitching',
      'Custom Neck Labeling and Eco-Friendly Retail Bagging'
    ],
    year: '2025',
    location: 'Johannesburg, South Africa',
    tag: 'Graphic Apparel'
  },
  {
    id: 'clapsa-corporate-uniforms',
    title: 'Corporate Emerald Cotton T-Shirts with Custom Back Branding',
    client: 'CLAPSA Official Corporate Uniforms',
    category: 'corporate',
    categoryLabel: 'Corporate Uniforms',
    image: '/images/portfolio/portfolio-corporate-uniforms.jpg',
    description: 'Manufactured custom vibrant emerald-green corporate crewnecks featuring crisp white official logo placement across the upper back for internal and client-facing teams.',
    deliverables: [
      '100% Premium Cotton Crewneck Corporate T-Shirts',
      'Precision Screen-Printed Upper Back CLAPSA Branding',
      'Comfort Fit with Anti-Fade Color Fastness Technology',
      'Full Sizing Range (XS to 4XL) for Multi-Branch Outfitting'
    ],
    year: '2025',
    location: 'South Africa & Regional Branches',
    tag: 'Corporate Wardrobe'
  },
  {
    id: 'trade-exhibition-showcase',
    title: 'Commercial Exhibition Stand & Product Showcase',
    client: 'SADC Trade & Brand Exhibition',
    category: 'display',
    categoryLabel: 'Exhibition Displays & Signage',
    image: '/images/portfolio/portfolio-trade-exhibition.jpg',
    description: 'Designed and built complete commercial retail display counters, promotional backdrops, and product shelf arrangements for high-traffic trade exhibitions.',
    deliverables: [
      'Vibrant Dye-Sublimation Fabric Wall & Pop-Up Backdrop Banners',
      'Custom Tiered Merchandising Display Stand with Product Shelving',
      'Illuminated Product Showcases for Glass Bottled Merchandise',
      'Turnkey Event Setup, Dismantling & Logistics Support'
    ],
    year: '2025',
    location: 'Johannesburg & Regional SADC Hubs',
    tag: 'Trade Displays'
  },
  {
    id: 'custom-sportswear-activewear',
    title: 'All-Over Sublimation Activewear & Fitness Leggings',
    client: 'Athletic Club & Teamwear Division',
    category: 'corporate',
    categoryLabel: 'Sportswear & Activewear',
    image: '/images/portfolio/portfolio-custom-sportswear.jpg',
    description: 'Custom designed technical performance sportswear with 4-way stretch compression leggings and breathable athletic fabrics for fitness and team sports.',
    deliverables: [
      '4-Way Stretch High-Compression Spandex/Polyester Leggings',
      'Sweat-Wicking Anti-Odor Performance Technical Fabrics',
      'Reinforced Flatlock Seams for Maximum Athlete Comfort',
      'High-Resolution Gradient Printing with Fade-Proof Inks'
    ],
    year: '2025',
    location: 'Cape Town & Johannesburg',
    tag: 'Athletic Apparel'
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
