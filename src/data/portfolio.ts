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
    id: 'mera-diplomatic-uniforms',
    title: 'MERA Malawi Energy Authority Corporate Uniforms',
    client: 'Malawi Energy Regulatory Authority (MERA)',
    category: 'corporate',
    categoryLabel: 'Diplomatic & Corporate Apparel',
    image: '/images/gallery/mera-malawi-energy-regulatory-uniforms.webp',
    description: 'High-spec corporate workwear featuring intricate 50,000-stitch multicolor institutional crest embroidery executed on multi-head Tajima embroidery carousels.',
    deliverables: [
      '50,000-Stitch High-Density Multicolor Institutional Crests',
      'Heavyweight 65/35 Poly-Cotton Twill Corporate Work Shirts',
      'Reinforced Triple-Needle Seams for Extended Field Durability',
      'Executive Pique Cotton 220gsm Conference Golf Shirts'
    ],
    year: '2025',
    location: 'Lilongwe, Malawi & Sandton, South Africa',
    tag: 'Institutional Uniforms'
  },
  {
    id: 'gauteng-province-ppe',
    title: 'Gauteng Province Flame & Acid Retardant Conti Suits',
    client: 'Gauteng Provincial Government',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    image: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
    description: 'SABS 434 and SABS 1519 compliant protective workwear programs for hazardous environments, including flame & acid retardant D59 Conti suits with official government crests.',
    deliverables: [
      '100% Cotton D59 Flame & Acid Retardant Two-Piece Conti Suits',
      'High-Density Provincial Government Embroidered Emblems',
      'Heavy-Duty YKK Concealed Brass Zippers',
      '50mm Silver SABS Approved Retro-Reflective Cross-Straps'
    ],
    year: '2025',
    location: 'Gauteng & Witbank Mining Belt',
    tag: 'SABS D59 Workwear'
  },
  {
    id: 'sadc-highway-signs',
    title: 'Desvio Class 2 Retro-Reflective Highway Detour Signs',
    client: 'Trans-SADC Highway & Civil Engineering',
    category: 'display',
    categoryLabel: 'Industrial Signage & Road Safety',
    image: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
    description: 'Class 2 high-intensity prismatic chevron road signage and galvanized steel support frames engineered for extreme outdoor weathering and nighttime illumination.',
    deliverables: [
      'Class 2 High-Intensity Prismatic Detour Chevron Signs ("Desvio")',
      'Hot-Dip Galvanized Angle-Iron Foldable Sign Support A-Frames',
      '750mm UV-Stabilized Flexible PVC Traffic Cones with Weighted Bases',
      'SABS 1519 Retro-Reflective Compliance Certification'
    ],
    year: '2025',
    location: 'Maputo Corridor & SADC Highways',
    tag: 'Class 2 Road Signage'
  },
  {
    id: 'albany-bakeries-promo-run',
    title: 'Albany Bakeries High-Volume Screen-Printed Tees',
    client: 'Albany Bakeries South Africa',
    category: 'corporate',
    categoryLabel: 'Screen Printing & Apparel',
    image: '/images/gallery/albany-bakeries-promo-tshirts.webp',
    description: 'Bulk production run of red promotional t-shirts printed with Albany Bakeries diamond logo on high-speed textile carousel presses with heat-tunnel curing.',
    deliverables: [
      '100% Carded Cotton 160gsm Crewneck Promo T-Shirts',
      'Multi-Color Plastisol Screen Print with Zero Washout',
      'High-Volume Automated Conveyor Curing (5,000+ Units)',
      'Custom Sizing Bundling and Nationwide Logistics Dispatch'
    ],
    year: '2025',
    location: 'Johannesburg, South Africa',
    tag: 'Automated Screen Printing'
  },
  {
    id: 'elaxo-gazebo-activation',
    title: 'ELAXO Sublimated Waterproof Event Gazebo & Tablecloth',
    client: 'ELAXO & Owara Corporate Group',
    category: 'display',
    categoryLabel: 'Brand Activation & Gazebos',
    image: '/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp',
    description: 'Complete commercial outdoor activation suite including 3x3m heavy-duty sublimated pop-up canopy, matching fitted stretch tablecloth, and branded caps.',
    deliverables: [
      '600D Waterproof PU-Coated Polyester Canopy & Walls',
      'Hexagonal 40mm Commercial Aluminum Frame Hardware',
      'All-Over Dye-Sublimation Full-Penetration Printing',
      'Matching Stretch Contour Tablecloth and Branded Merchandise'
    ],
    year: '2025',
    location: 'Johannesburg & Regional Events',
    tag: 'Event Gazebos'
  },
  {
    id: 'tropigalia-stationery-gifting',
    title: 'Tropigalia Branded Ballpoint Pens & Executive Swag',
    client: 'Tropigalia Moçambique',
    category: 'gifting',
    categoryLabel: 'Corporate Gifting & Merchandise',
    image: '/images/gallery/tropigalia-branded-pens-bulk.webp',
    description: 'High-volume batch pad printing of dual-tone red and silver retractable corporate ballpoint pens for nationwide commercial distribution in Mozambique.',
    deliverables: [
      'Dual-Tone Metallic Silver & Red Retractable Pen Barrels',
      'High-Precision 2-Color Tampo Pad Printing of Corporate Identity',
      'German Black Ink Refills with 1,200m Writing Capacity',
      'Palletized Bulk Packaging for Cross-Border Transport'
    ],
    year: '2025',
    location: 'Maputo, Mozambique',
    tag: 'Corporate Stationery'
  },
  {
    id: 'clapsa-activewear-collection',
    title: 'Custom Sublimated Zip Hoodies & Athletic Tracksuits',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'corporate',
    categoryLabel: 'Sublimation & Sportswear',
    image: '/images/gallery/gauteng-province-sports-arts-tracksuits.webp',
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
    id: 'sadc-export-freight-container',
    title: '40ft Shipping Container Loaded with CLAPSA Export Freight',
    client: 'SADC Regional Cross-Border Operations',
    category: 'display',
    categoryLabel: 'Freight & Cross-Border Logistics',
    image: '/images/gallery/shipping-container-clapsa-export-freight.webp',
    description: 'Full maritime container stuffing and cross-border logistics dispatch of palletized apparel, safety workwear, and promotional merchandise to SADC member states.',
    deliverables: [
      'Heavy-Duty Multi-Wall Export Cartons with Moisture Barrier',
      'Cross-Border SADC Trade Protocol Documentation & Phytosanitary Checks',
      'Palletized Strapped Secure Cargo with Automated Film Wrapping',
      'Dedicated Freight Forwarding to Mozambique, Botswana & Zimbabwe'
    ],
    year: '2025',
    location: 'Regional SADC Transit Corridors',
    tag: 'Cross-Border Freight'
  }
];

export const PARTNERS = [
  { name: 'Barron', image: '/images/partners/barron.jpg', description: 'Africa’s largest brandable apparel and promotional gifting distributor.', bgColor: '#0c2a32', textColor: '#ffffff' },
  { name: 'Amrod', image: '/images/partners/amrod.jpg', description: 'Premier total-solution promotional products & corporate gifting trade supplier.', bgColor: '#25a8e0', textColor: '#ffffff' },
  { name: 'Altitude by Wizard', image: '/images/partners/altitude.jpg', description: 'High-quality promotional apparel, outerwear, and sport collections.', bgColor: '#414143', textColor: '#ffffff' },
  { name: 'Abelanani', image: '/images/partners/abelanani.jpg', description: 'Specialist in custom manufactured promotional merchandise and event novelties.', bgColor: '#1e1e1e', textColor: '#ffffff' },
  { name: 'Bic Graphic', image: '/images/partners/bic.jpg', description: 'World-renowned writing instruments, lighters, and branded stationery.', bgColor: '#262825', textColor: '#ffffff' },
  { name: 'KMQ', image: '/images/partners/kmq.jpg', description: 'Top tier trade suppliers of headwear, caps, and outdoor accessories.', bgColor: '#15467e', textColor: '#ffffff' },
  { name: 'Macma', image: '/images/partners/macma.jpg', description: 'Innovative corporate gifts, electronic gadgets, and premium drinkware.', bgColor: '#bbbbbd', textColor: '#0f172a' },
  { name: 'TOGS', image: '/images/partners/togs.jpg', description: 'Specialized industrial workwear, safety footwear, and team apparel.', bgColor: '#378cc2', textColor: '#ffffff' },
];
