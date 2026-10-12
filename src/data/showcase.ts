export type ShowcaseCategory = 'all' | 'apparel' | 'ppe' | 'display' | 'gifting' | 'sportswear';

export interface ShowcaseItem {
  id: string;
  title: string;
  category: ShowcaseCategory;
  categoryLabel: string;
  badge: string;
  image: string;
  videoSrc?: string;
  aspectRatio: 'portrait' | 'square' | 'landscape';
  clientOrContext: string;
  highlights: string[];
  description: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  // 1. Corporate Apparel & Executive Uniforms
  {
    id: 'standard-bank-executive-golfers',
    title: 'Standard Bank Executive Pique Golf Shirts',
    category: 'apparel',
    categoryLabel: 'Corporate Apparel',
    badge: 'Executive Golfers',
    image: '/images/gallery/executive-pique-golf-shirts-embroidery.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Standard Bank Group SADC',
    highlights: ['220gsm Double-Mercerized Combed Cotton', '15,000-Stitch High-Density Crest Embroidery', 'Pre-Shrunk & Anti-Pilling Finish', 'Custom Color-Matched Ribbed Collar'],
    description: 'Executive corporate golf shirts tailored in deep cobalt blue with precision multi-color embroidery of the Standard Bank shield insignia.'
  },
  {
    id: 'albany-carousel-screenprint',
    title: 'Automated 12-Color Carousel Screen-Printed Tees',
    category: 'apparel',
    categoryLabel: 'Corporate Apparel',
    badge: 'Automated Carousel',
    image: '/images/gallery/albany-bakeries-promo-tshirts.webp',
    videoSrc: '/videos/gallery/clapsa-carousel-screen-printing-reel.mp4',
    aspectRatio: 'portrait',
    clientOrContext: 'Albany Bakeries (Tiger Brands)',
    highlights: ['Pneumatic Automatic Squeegee Stroke', 'Wash-Proof Eco-Plastisol Inks', '1,200 Garments/Hour Capacity', 'Inline Oven Flash Curing at 165°C'],
    description: 'High-speed automated screen printing of vibrant promotional t-shirts featuring razor-sharp registration and wash-tested soft-hand inks.'
  },
  {
    id: 'ambassador-trucker-caps',
    title: 'Dual-Tone Foam Breathable Trucker Caps',
    category: 'apparel',
    categoryLabel: 'Corporate Apparel',
    badge: 'Headwear Division',
    image: '/images/gallery/california-vintage-mesh-trucker-cap.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Brand Ambassador Roadshow',
    highlights: ['High-Density Sponge Foam Front Panel', 'Breathable Polyester Air-Mesh Back', 'Snapback Adjustable Closure', 'Precision Heat Transfer Branding'],
    description: 'Retro 5-panel trucker caps with breathable rear mesh and structured front panels engineered for field ambassadors and outdoor promotions.'
  },
  {
    id: 'dtf-continuous-gang-sheets',
    title: 'Industrial DTF Continuous Print Gang Sheets',
    category: 'apparel',
    categoryLabel: 'Corporate Apparel',
    badge: 'Direct-to-Film (DTF)',
    image: '/images/gallery/humaniti-dtf-screen-transfers-gang-sheet.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Industrial Textile Transfer Plant',
    highlights: ['60cm Wide Continuous Film Roll', 'Hot-Melt TPU Adhesive Powder Backing', 'Zero-Color Limitation Photorealistic Print', 'Tested for 50+ Industrial Wash Cycles'],
    description: 'Commercial wide-format DTF transfer roll printing delivering photo-grade multi-color logos and micro-text for diverse garment applications.'
  },

  // 2. Certified Industrial PPE & Tactical Safety
  {
    id: 'gauteng-d59-flame-acid-conti-suits',
    title: 'Gauteng Province Flame & Acid D59 Conti Suits',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    badge: 'SABS 434 Approved',
    image: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Gauteng Provincial Government',
    highlights: ['100% Cotton D59 Flame & Acid Retardant', 'High-Density Provincial Crest Embroidery', '50mm SABS Approved Reflective Tape', 'Concealed YKK Heavy Brass Zippers'],
    description: 'Certified industrial two-piece workwear suits manufactured from treated D59 cotton for extreme thermal, flame, and chemical splash environments.'
  },
  {
    id: 'g4s-ballistic-armor-vests',
    title: 'G4S Tactical Ballistic Outer Armor Carriers',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    badge: 'Tactical Armor',
    image: '/images/gallery/g4s-security-tactical-ballistic-vest.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'G4S Secure Solutions SADC',
    highlights: ['1000D Cordura Heavy Ballistic Nylon', 'High-Tensile Thread Corporate Embroidery', 'MOLLE Webbing Equipment Attachment', 'Adjustable Ergonomic Side Straps'],
    description: 'Heavy-duty tactical body armor carrier vests engineered for armed cash-in-transit and patrol personnel across southern Africa.'
  },
  {
    id: 'caterpillar-steel-toe-safety-boots',
    title: 'SABS Certified Caterpillar Steel-Toe Safety Boots',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    badge: 'Safety Footwear',
    image: '/images/gallery/caterpillar-sabs-steel-toe-safety-boots.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Heavy Civil Infrastructure & Mining',
    highlights: ['200-Joule Impact Steel Toe Cap', 'Goodyear Welted Oil-Resistant Sole', 'Full-Grain Water-Repellent Leather', 'SABS & ISO 20345 Safety Compliance'],
    description: 'Rugged industrial work boots providing certified toe protection, puncture resistance, and all-day ergonomic support in harsh civil sites.'
  },
  {
    id: 'high-visibility-storm-jackets',
    title: 'Two-Tone High-Visibility Weather Storm Jackets',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    badge: 'High-Vis Weatherwear',
    image: '/images/gallery/nifiquile-two-tone-reflective-safety-jackets.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Highway Civil & Logistics Fleets',
    highlights: ['EN ISO 20471 Class 3 High-Vis Fabric', 'Thermal Quilted Interior Lining', 'Concealed Storm Hood & Waterproof Taped Seams', 'Class 2 Double-Band Retro-Reflective Tape'],
    description: 'All-weather two-tone neon lime and navy safety jackets engineered for low-light highway logistics, mining pits, and civil contractors.'
  },

  // 3. Branded Displays, Gazebos & Signage
  {
    id: 'elaxo-commercial-gazebo-suite',
    title: 'Commercial 3x3m Sublimated Event Gazebo & Tablecloth',
    category: 'display',
    categoryLabel: 'Displays & Signage',
    badge: 'Event Activations',
    image: '/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Movitel Telecom & Corporate Roadshows',
    highlights: ['600D Waterproof PU Polyester Canopy', 'Heavy 40mm Hexagonal Aluminum Legs', 'All-Over Thermal Dye Sublimation', 'Matching Contour Fitted Tablecloth'],
    description: 'Turnkey commercial outdoor activation setup featuring all-weather waterproof canopy, matching fitted table cover, and heavy wind hardware.'
  },
  {
    id: 'construcoes-karina-teardrop-flags',
    title: 'Commercial Teardrop Flying Banners & Outdoor Event Flags',
    category: 'display',
    categoryLabel: 'Displays & Signage',
    badge: 'Teardrop Flags',
    image: '/images/gallery/construcoes-karina-teardrop-event-flags.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Construções Karina Civil Engineering',
    highlights: ['3.5m Heavy-Duty Flexible Fiberglass Poles', 'UV-Resistant All-Weather Sublimation Polyester', 'High-Traction Ground Spike & Cross-Base Options', 'Double-Sided Vibrant Mirror Print Visibility'],
    description: 'High-visibility branded promotional teardrop flags engineered for civil sites, construction head offices, and outdoor event brand activations.'
  },
  {
    id: 'desvio-retroreflective-road-signs',
    title: 'Desvio Class 2 Retro-Reflective Detour Road Signs',
    category: 'display',
    categoryLabel: 'Displays & Signage',
    badge: 'Highway Safety Signs',
    image: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Trans-SADC Highway & Civil Engineering',
    highlights: ['Class 2 High-Intensity Prismatic Vinyl', '1.4mm Heavy Chromadek Steel Plate', 'Hot-Dip Galvanized Foldable A-Frames', 'SABS 1519 Traffic Safety Standard'],
    description: 'Engineering-grade retro-reflective detour chevron signs with heavy galvanized steel support frames for regional highway construction.'
  },
  {
    id: 'sadc-maritime-freight-containers',
    title: '40ft Export Container Freight & Cross-Border Logistics',
    category: 'display',
    categoryLabel: 'Displays & Signage',
    badge: 'Cross-Border Freight',
    image: '/images/gallery/shipping-container-clapsa-export-freight.webp',
    videoSrc: '/videos/gallery/automated-pallet-stretch-wrapping-dispatch.mp4',
    aspectRatio: 'portrait',
    clientOrContext: 'CLAPSA Sandton SADC Logistics Hub',
    highlights: ['40ft Maritime High-Cube Container Stuffing', 'Automated Turntable Pallet Stretch Wrapping', 'Cross-Border SADC Phytosanitary Clearances', 'Bonded Freight Transport to Mozambique & SADC'],
    description: 'Complete cross-border freight handling and container stuffing for wholesale corporate garment and signage dispatches from Johannesburg.'
  },

  // 4. VIP Corporate Gifting, Packaging & Lanyards
  {
    id: 'luxury-kraft-foil-gift-bags',
    title: 'Luxury Eco-Kraft Gift Bags with Metallic Gold Foil',
    category: 'gifting',
    categoryLabel: 'VIP Gifting & Packaging',
    badge: 'Gold Foil Stamping',
    image: '/images/gallery/mantra-kraft-luxury-gift-bags.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Standard Bank Executive Summit',
    highlights: ['250gsm FSC-Certified Recycled Kraft', 'Metallic Gold Hot Foil Stamping', 'Braided Cotton Rope Handles', 'Reinforced Cardboard Base & Top Turnover'],
    description: 'Handcrafted luxury gift carriers with hot-stamped gold foil logos and soft cotton handles for executive corporate gifting hampers.'
  },
  {
    id: 'claps-premium-gin-packaging',
    title: 'CLAPS Premium Gin Custom Bottle Labeling & Rigid Box',
    category: 'gifting',
    categoryLabel: 'VIP Gifting & Packaging',
    badge: 'Artisan Packaging',
    image: '/images/gallery/claps-premium-gin-custom-packaging.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'CLAPS Reserve & Executive Client Gifting',
    highlights: ['Estate Cotton Paper Label with Foil Detailing', 'Custom Rigid Cardboard Presentation Box', 'Velvet Interior Lining with Bottle Cavity', 'Metallic Security Neck Seal Band'],
    description: 'Bespoke corporate beverage packaging featuring textured cotton stock, metallic foil accents, and handcrafted rigid gift presentation boxes.'
  },
  {
    id: 'summit-sublimated-satin-lanyards',
    title: 'Dual-Sided Silk Satin Sublimated Summit Lanyards',
    category: 'gifting',
    categoryLabel: 'VIP Gifting & Packaging',
    badge: 'Summit Lanyards',
    image: '/images/gallery/siemens-matla-satin-sublimated-lanyards.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Corporate Banking & Energy Summits',
    highlights: ['20mm High-Density Silk Satin Weave', 'Dual-Sided Edge-to-Edge Sublimation', 'Ergonomic Plastic Safety Breakaway Buckle', 'Heavy-Duty Chrome Swivel Snap Hook'],
    description: 'Ultra-smooth silk satin conference lanyards with full-color photographic print, safety breakaway clip, and metal lobster clasp.'
  },
  {
    id: 'tamper-evident-courier-bags',
    title: 'Tamper-Evident High-Security Courier Transit Envelopes',
    category: 'gifting',
    categoryLabel: 'VIP Gifting & Packaging',
    badge: 'Security Packaging',
    image: '/images/gallery/tamper-evident-high-security-transit-bags.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'SADC Secure Courier & Transit Operations',
    highlights: ['60-Micron Multi-Layer Co-Extruded Polyethylene', 'High-Security "VOID" Tamper Adhesive Closure', 'Sequential Barcode & Tracking Numbering', 'Waterproof & Tear-Resistant Co-Ex Film'],
    description: 'High-security transit envelopes engineered for confidential corporate documents, valuables, and tamper-evident express cross-border shipping.'
  },

  // 5. Sportswear, Athletics & Sublimation
  {
    id: 'gauteng-sports-arts-tracksuits',
    title: 'Gauteng Department of Sport & Culture Tracksuits',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Provincial Teamwear',
    image: '/images/gallery/gauteng-province-sports-arts-tracksuits.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Gauteng Provincial Government (SACR)',
    highlights: ['Microfiber Wind-Resistant Outer Shell', 'Breathable Tricot Knit Interior Lining', 'Official Embroidered Provincial Coat of Arms', 'Contrast Piping & Athletic Tapered Fit'],
    description: 'Custom-paneled athletic tracksuits manufactured for provincial athletes and sports coordinators with embroidered national insignia.'
  },
  {
    id: 'marathon-moisture-wicking-tees',
    title: 'Marathon Performance Quick-Dry Sports T-Shirts',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Athletic Running Tees',
    image: '/images/gallery/move-for-youth-marathon-tshirts.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'Move for Youth Marathon Series',
    highlights: ['140gsm Birdseye Polyester Technical Mesh', 'Breathable Water-Based Elastic Screen Print', 'Anti-Chafe Flatlock Seam Construction', 'Vivid High-Visibility Neon Pigment'],
    description: 'Ultralight moisture-wicking marathon running shirts engineered for long-distance breathability, sweat evaporation, and participant comfort.'
  },
  {
    id: 'activewear-hoodie-lifestyle',
    title: 'Custom Sublimated Athletic Zip Hoodie',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Custom Sublimation',
    image: '/images/showcase/clapsa-activewear-hoodie-lifestyle.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'CLAPSA Activewear Line',
    highlights: ['All-Over Dye-Sublimation Pattern', 'Custom Sleeve URL Typography Branding', 'Full-Zip Athletic Cut with Drawstring Hood', 'Thermal Brushed Fleece Interior'],
    description: 'High-definition dye-sublimated performance zip hoodie featuring striking contrast geometric patterns and custom website typography along the sleeve.'
  },
  {
    id: 'unicef-cotton-tote-bags',
    title: 'UNICEF "Aprender Para Melhor Crescer" Cotton Totes',
    category: 'gifting',
    categoryLabel: 'VIP Gifting & Packaging',
    badge: 'Eco Cotton Bags',
    image: '/images/gallery/unicef-mec-aprender-melhor-tote-bag.webp',
    aspectRatio: 'portrait',
    clientOrContext: 'UNICEF & Ministério da Educação (MEC)',
    highlights: ['100% Unbleached Heavy 280gsm Cotton Canvas', 'Cross-Stitched Reinforced Shoulder Handles', 'Non-Toxic Eco Water-Based Screen Print', 'SABS Certified Washable Natural Fibers'],
    description: 'Heavy-duty royal blue cotton canvas carrier bags manufactured for school educational kits and pan-African humanitarian youth programs.'
  }
];
