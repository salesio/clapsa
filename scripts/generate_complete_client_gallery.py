import json

script_content = '''export type MediaCategory = 'all' | 'campaigns' | 'corporate' | 'ppe' | 'printing' | 'signage' | 'gifting' | 'sportswear' | 'display';
export type MediaType = 'all' | 'photo' | 'video';

export interface GalleryItem {
  id: string;
  jobId: string;
  jobTitle: string;
  client: string;
  category: MediaCategory;
  categoryLabel: string;
  mediaType: 'photo' | 'video';
  thumbnail: string;
  src: string; // Image path or Video path
  title: string;
  description: string;
  tags: string[];
  specs: string[];
  location: string;
  date: string;
  featured?: boolean;
}

export interface JobGroup {
  id: string;
  jobCode: string;
  title: string;
  client: string;
  category: MediaCategory;
  categoryLabel: string;
  coverImage: string;
  description: string;
  itemsCount: number;
  location: string;
  year: string;
  deliverables: string[];
}

export const JOB_GROUPS: JobGroup[] = [
  // --- 1. FRELIMO ---
  {
    id: 'job-frelimo-campaign',
    jobCode: 'JOB #CLP-2024-FRL',
    title: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO (Frente de Libertação de Moçambique)',
    category: 'campaigns',
    categoryLabel: 'Electoral Campaigns & Civic Apparel',
    coverImage: '/images/gallery/thumbs/frelimo-daniel-chapo-campaign-kit.webp',
    description: 'Turnkey manufacturing and high-volume distribution of official presidential campaign merchandise across Mozambique, including custom embroidered polo shirts, 6-panel caps, water-resistant drawstring backpacks, and traditional campaign bandanas (capulanas).',
    itemsCount: 6,
    location: 'Maputo & All Mozambique Provinces',
    year: '2024',
    deliverables: [
      'Heavyweight Red Combed Cotton Polo Shirts with 3D Embroidered Crests',
      'Matching 6-Panel Brushed Cotton Caps with Multi-Placement Embroidery',
      'Waterproof 210D Polyester Drawstring Backpacks with High-Density Prints',
      'Custom Printed Triangular Campaign Bandanas & Satin Scarves'
    ]
  },

  // --- 2. CAD (Coligação Aliança Democrática) ---
  {
    id: 'job-cad-campaign',
    jobCode: 'JOB #CLP-2024-CAD',
    title: 'CAD & Venâncio Mondlane Electoral Displays & Promotional Gear',
    client: 'CAD (Coligação Aliança Democrática) & Venâncio Mondlane',
    category: 'campaigns',
    categoryLabel: 'Political Campaigns & Event Displays',
    coverImage: '/images/gallery/thumbs/cad-venancio-mondlane-rollup-banner.webp',
    description: 'Design, large-format precision digital printing, and assembly of official campaign roll-up banner stands, acrylic podium branding, and event merchandise stamped with official CLAPSA production pedigree (dby: www.clapsa.co.za).',
    itemsCount: 4,
    location: 'Maputo & National Campaign Corridors',
    year: '2024',
    deliverables: [
      'Commercial Heavy-Base Aluminum Roll-Up Pull-Up Display Banners',
      'Anti-Glare UV-Protected Polypropylene Graphic Media Substrates',
      'Custom Acrylic Presentation Podiums & Stage Branding',
      'Official Campaign Brochures & Printed Rally Promotional Material'
    ]
  },

  // --- 3. RENAMO ---
  {
    id: 'job-renamo-campaign',
    jobCode: 'JOB #CLP-2024-RNM',
    title: 'RENAMO Official Party Uniforms, Embroidered Polos & Caps',
    client: 'RENAMO (Resistência Nacional Moçambicana)',
    category: 'campaigns',
    categoryLabel: 'Party Apparel & Embroidered Headwear',
    coverImage: '/images/gallery/thumbs/renamo-blue-embroidered-polo-shirt.webp',
    description: 'Production of official royal blue political party apparel featuring precision multi-color thread embroidery of the iconic RENAMO partridge symbol across conference polo shirts, structured 6-panel caps, and grassroots rally tees.',
    itemsCount: 4,
    location: 'Maputo, Beira & Nampula, Moçambique',
    year: '2024',
    deliverables: [
      'Royal Blue Pique Cotton Conference Polo Shirts with Embroidered Crests',
      'Structured 6-Panel Brushed Cotton Caps with Embroidered Partridge Insignia',
      'Grassroots Civic Campaign Ambassador Cotton T-Shirts',
      'Colorfast Dyes Engineered for Long-Term Outdoor Sunlight Resistance'
    ]
  },

  // --- 4. Standard Bank ---
  {
    id: 'job-standard-bank',
    jobCode: 'JOB #CLP-2025-SB',
    title: 'Standard Bank SADC Corporate Summits & Executive Gifting',
    client: 'Standard Bank Group SADC',
    category: 'corporate',
    categoryLabel: 'Corporate Banking & Financial Merchandising',
    coverImage: '/images/gallery/thumbs/executive-pique-golf-shirts-embroidery.webp',
    description: 'Executive corporate outfitting, dual-tone pique cotton golf shirts, silk-satin sublimated conference lanyards, luxury hot-foil embossed kraft presentation hampers, and branded sports drinkware for regional financial conferences.',
    itemsCount: 5,
    location: 'Sandton (South Africa) & Maputo (Mozambique)',
    year: '2025',
    deliverables: [
      '220gsm Combed Pique Cotton Executive Golf Shirts with Fine Crest Embroidery',
      'Dual-Sided Silk Satin Sublimated Conference Lanyards with Breakaways',
      'Luxury 250gsm Eco-Kraft Presentation Carrier Bags with Gold Foil Stamping',
      'Cobalt Blue 750ml Food-Grade Athletic Water Bottles'
    ]
  },

  // --- 5. Movitel ---
  {
    id: 'job-movitel-telecom',
    jobCode: 'JOB #CLP-2025-MVT',
    title: 'Movitel Telecom Brand Activation, Uniforms & Field Swag',
    client: 'Movitel Moçambique & Regional Telecom Partners',
    category: 'display',
    categoryLabel: 'Telecom Activation & Field Uniforms',
    coverImage: '/images/gallery/thumbs/elaxo-sublimated-gazebo-and-tablecloth.webp',
    description: 'High-impact turnkey brand activation suites for national telecommunications roadshows, featuring heavy-duty sublimated event gazebos, fitted tablecloths, high-visibility orange safety gear, custom trucker caps, and promotional lanyards.',
    itemsCount: 5,
    location: 'National SADC Telecom Corridors',
    year: '2025',
    deliverables: [
      '3x3m Commercial Waterproof Sublimated Pop-Up Gazebos & Tablecloths',
      '3.5m & 4.5m High-Visibility Teardrop and Feather Branding Flags',
      'Neon Orange High-Tensile Jacquard Safety Lanyards with Dog-Clips',
      'Dual-Tone Foam Trucker Caps for Promotional Brand Ambassadors'
    ]
  },

  // --- 6. Tropigalia Moçambique ---
  {
    id: 'job-tropigalia',
    jobCode: 'JOB #CLP-2024-TRP',
    title: 'Tropigalia Moçambique Corporate Stationery & Executive Swag',
    client: 'Tropigalia Moçambique Lda',
    category: 'gifting',
    categoryLabel: 'Corporate Stationery & Promotional Merchandise',
    coverImage: '/images/gallery/thumbs/tropigalia-branded-pens-bulk.webp',
    description: 'Large-scale industrial pad printing and precision assembly of metallic dual-tone red/silver retractable corporate ballpoint pens and bespoke packaging for national commercial distribution across Mozambique.',
    itemsCount: 4,
    location: 'Maputo & Matola, Moçambique',
    year: '2024 - 2025',
    deliverables: [
      'High-Volume 2-Color Tampo Pad Printing on Curved Metallic Barrels',
      'German Smooth Black Ink Refills with 1,200m Writing Endurance',
      'Luxury Laminated Paper Carry Bags with Reinforced Cord Handles',
      'Cross-Border Palletized Batch Freight Delivery to Maputo Depot'
    ]
  },

  // --- 7. G4S Secure Solutions ---
  {
    id: 'job-g4s-security',
    jobCode: 'JOB #CLP-2025-G4S',
    title: 'G4S Secure Solutions SADC Tactical Armor & Workwear',
    client: 'G4S Secure Solutions SADC',
    category: 'ppe',
    categoryLabel: 'Security PPE & Ballistic Embroidery',
    coverImage: '/images/gallery/thumbs/g4s-security-tactical-ballistic-vest.webp',
    description: 'Manufacturing, high-density embroidery, and batch packaging of 1000D Cordura ballistic armor carrier vests, high-visibility tactical safety vests, and security guard uniform systems across Southern Africa.',
    itemsCount: 5,
    location: 'Johannesburg (SA) & Maputo (Mozambique)',
    year: '2025',
    deliverables: [
      '1000D Heavy-Duty Ballistic Cordura Armor Carrier Vests',
      '3D High-Density Red & White Official G4S Insignia Direct Embroidery',
      'SABS Approved Neon High-Visibility Reflective Overvests',
      'Individual Barcode Tagging for Fleet Inventory Management'
    ]
  },

  // --- 8. MERA (Malawi Energy Regulatory Authority) ---
  {
    id: 'job-mera-malawi',
    jobCode: 'JOB #CLP-2025-MRA',
    title: 'MERA Malawi Energy Authority Diplomatic Uniforms',
    client: 'Malawi Energy Regulatory Authority (MERA)',
    category: 'corporate',
    categoryLabel: 'Diplomatic Uniforms & Crest Embroidery',
    coverImage: '/images/gallery/thumbs/mera-malawi-energy-regulatory-uniforms.webp',
    description: 'Official corporate workwear program for government regulatory authority personnel, featuring intricate 50,000-stitch multicolor circular crest embroidery executed on multi-head Tajima embroidery carousels.',
    itemsCount: 5,
    location: 'Lilongwe, Malawi & Sandton, South Africa',
    year: '2025',
    deliverables: [
      '50,000-Stitch High-Density Multicolor Institutional Crests',
      'Heavyweight 65/35 Poly-Cotton Twill Corporate Work Shirts',
      'SOGES Executive Button-Down Shirts with Flap Pocket Embroidery',
      'INSIDA Corporate Golf Shirts and Matching 6-Panel Caps Combo'
    ]
  },

  // --- 9. Gauteng Provincial Government ---
  {
    id: 'job-gauteng-province',
    jobCode: 'JOB #CLP-2025-GPG',
    title: 'Gauteng Provincial Government & Heavy Industrial PPE',
    client: 'Gauteng Provincial Government & Mining Contractors',
    category: 'ppe',
    categoryLabel: 'SABS Certified Industrial Workwear',
    coverImage: '/images/gallery/thumbs/gauteng-province-flame-retardant-conti-suits.webp',
    description: 'SABS 434 and SABS 1519 certified protective apparel programs, including flame & acid retardant D59 Conti suits with official government crests, Caterpillar safety footwear, 3M respirators, and provincial athletic apparel.',
    itemsCount: 6,
    location: 'Gauteng & Witbank Mining Belt, South Africa',
    year: '2025',
    deliverables: [
      '100% Cotton D59 Flame & Acid Retardant Two-Piece Conti Suits',
      'Gauteng Sports, Arts, Culture & Recreation Official Tracksuits',
      'SABS Approved Heavy-Duty Caterpillar Steel-Toe Safety Boots',
      'ATI Fire & Safety Heavy Leather Welder Gauntlets & 3M Respirators'
    ]
  },

  // --- 10. Albany Bakeries ---
  {
    id: 'job-albany-bakeries',
    jobCode: 'JOB #CLP-2025-ALB',
    title: 'Albany Bakeries & FMCG High-Volume Screen Printing',
    client: 'Albany Bakeries South Africa & Commercial Brands',
    category: 'printing',
    categoryLabel: 'Automated Carousel Screen Printing',
    coverImage: '/images/gallery/thumbs/albany-bakeries-promo-tshirts.webp',
    description: 'Mass-production textile screen printing operations utilizing high-speed automated carousel presses, heat-tunnel drying conveyors, and DTF gang-sheet technology for national FMCG consumer brand campaigns.',
    itemsCount: 7,
    location: 'CLAPSA Printing Plant, Johannesburg',
    year: '2025',
    deliverables: [
      'Albany Bakeries Multi-Color Chest Plastisol Screen Printing Run',
      'Move For Youth Charity Marathon Bulk Apparel (5,000+ Units)',
      'Humaniti High-Elasticity PET-Film DTF Transfers for Complex Art',
      'Heavyweight 320gsm Brushed Fleece Winter Graphic Hoodies'
    ]
  },

  // --- 11. UNICEF & Humanitarian ---
  {
    id: 'job-unicef-humanitarian',
    jobCode: 'JOB #CLP-2024-UNC',
    title: 'UNICEF & UN Regional Humanitarian Relief Programs',
    client: 'UNICEF, UNHCR & International Humanitarian Agencies',
    category: 'campaigns',
    categoryLabel: 'Humanitarian & NGO Merchandise',
    coverImage: '/images/gallery/thumbs/unicef-mec-aprender-melhor-tote-bag.webp',
    description: 'Manufacture of educational carrier bags, relief t-shirts, and protective cold-weather gear for international humanitarian initiatives in Mozambique and the broader SADC region.',
    itemsCount: 4,
    location: 'Cabo Delgado & SADC Humanitarian Operations',
    year: '2024 - 2025',
    deliverables: [
      'UNICEF / MEC Heavy-Duty Blue Cotton Canvas Educational Tote Bags',
      'UNHCR / Refugiados Cobalt Blue Crewneck Humanitarian Shirts',
      'UNHCR Reflective High-Visibility Weatherproof Winter Jackets',
      'UN Women & Generation Equality Rotary Screen-Printed Campaign Pens'
    ]
  },

  // --- 12. Trans-SADC Highway Signs ---
  {
    id: 'job-trans-sadc-signs',
    jobCode: 'JOB #CLP-2025-RDS',
    title: 'Trans-SADC Highway & Civil Road Safety Signage',
    client: 'SADC Road Haulage, Municipalities & Civil Engineering',
    category: 'signage',
    categoryLabel: 'Industrial Highway Signage & Road Safety',
    coverImage: '/images/gallery/thumbs/desvio-reflective-chevron-road-signs.webp',
    description: 'Class 1 & 2 engineering-grade retro-reflective highway detour chevron signs ("Desvio"), heavy-gauge galvanized A-frame support stands, high-density traffic cones, and weatherproof correx job site boards.',
    itemsCount: 6,
    location: 'Maputo Corridor & Regional SADC Highway Routes',
    year: '2025',
    deliverables: [
      'Class 2 High-Intensity Prismatic Detour Chevron Signs ("Desvio")',
      'Hot-Dip Galvanized Angle-Iron Foldable Sign Support A-Frames',
      '750mm UV-Stabilized Flexible PVC Traffic Cones with Weighted Bases',
      'Box2Box Outdoor Weatherproof Correx Property & Safety Boards'
    ]
  },

  // --- 13. SADC Cross-Border Freight & Packaging ---
  {
    id: 'job-sadc-logistics',
    jobCode: 'JOB #CLP-2025-LOG',
    title: 'Turnkey SADC Cross-Border Freight & Packaging Hub',
    client: 'CLAPSA Regional Freight & Beverage Reserve',
    category: 'gifting',
    categoryLabel: 'Cross-Border Logistics & Packaging',
    coverImage: '/images/gallery/thumbs/shipping-container-clapsa-export-freight.webp',
    description: 'Complete cross-border maritime container freight stuffing, automated pallet film-wrapping, tamper-evident security transit courier bags, and bespoke beverage packaging for regional export distribution.',
    itemsCount: 5,
    location: 'SADC Transit Corridors (SA, Mozambique, Botswana, Zimbabwe)',
    year: '2024 - 2025',
    deliverables: [
      '40ft Full Maritime Container Export Packing & Phytosanitary Freight',
      'Multi-Layer Co-Extruded Tamper-Evident High-Security Courier Transit Bags',
      'CLAPS Premium Gin Embossed Gold-Foil Presentation Packaging',
      'Heavy-Duty Powder-Coated Touchless Hands-Free Sanitizer Pedal Stations'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // ==========================================
  // 1. FRELIMO & DANIEL CHAPO CAMPAIGN
  // ==========================================
  {
    id: 'item-frelimo-campaign-kit',
    jobId: 'job-frelimo-campaign',
    jobTitle: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO',
    category: 'campaigns',
    categoryLabel: 'Campaign Kits',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/frelimo-daniel-chapo-campaign-kit.webp',
    src: '/images/gallery/frelimo-daniel-chapo-campaign-kit.webp',
    title: 'FRELIMO Daniel Chapo Complete Campaign Bundle',
    description: 'Complete presidential election bundle comprising red combed cotton polo shirt, structured 6-panel cap with 3D embroidery, and matching water-resistant drawstring pack.',
    tags: ['Frelimo', 'Daniel Chapo', 'Campaign', 'Election', 'Polo', 'Caps'],
    specs: ['100% Combed Cotton Polo', '3D Raised Front Embroidery', '210D Waterproof Polyester Pack'],
    location: 'Maputo, Moçambique',
    date: '2024',
    featured: true
  },
  {
    id: 'item-frelimo-drawstring-bag',
    jobId: 'job-frelimo-campaign',
    jobTitle: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO',
    category: 'campaigns',
    categoryLabel: 'Campaign Merch',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/frelimo-daniel-chapo-drawstring-bag.webp',
    src: '/images/gallery/frelimo-daniel-chapo-drawstring-bag.webp',
    title: 'Vota Daniel Chapo Red Drawstring Carrier Backpack',
    description: 'High-density multi-color screen-printed voter carrier backpack featuring official candidate photography, party drum emblem, and reinforced corner eyelets.',
    tags: ['Frelimo', 'Daniel Chapo', 'Drawstring Bag', 'Elections', 'Vota'],
    specs: ['Reinforced PU Leather Corners', 'High-Definition Screen Print', 'Braided Drawstring Straps'],
    location: 'Moçambique',
    date: '2024'
  },
  {
    id: 'item-frelimo-yellow-bandana',
    jobId: 'job-frelimo-campaign',
    jobTitle: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO',
    category: 'campaigns',
    categoryLabel: 'Campaign Scarves',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/frelimo-yellow-capulana-bandana.webp',
    src: '/images/gallery/frelimo-yellow-capulana-bandana.webp',
    title: 'FRELIMO Yellow Triangular Campaign Bandana & Scarf',
    description: 'Traditional triangular party neckerchief featuring official Frelimo drum logo border trim, fringed tassel edges, and colorfast bright yellow fabric.',
    tags: ['Frelimo', 'Bandana', 'Capulana', 'Scarves', 'Electoral'],
    specs: ['Lightweight Breathable Cotton Blend', 'Precision Rotary Border Print', 'Fringed Edge Finishing'],
    location: 'Moçambique',
    date: '2024'
  },
  {
    id: 'item-frelimo-drum-scarf',
    jobId: 'job-frelimo-campaign',
    jobTitle: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO',
    category: 'campaigns',
    categoryLabel: 'Campaign Scarves',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/frelimo-drum-emblem-triangular-scarf.webp',
    src: '/images/gallery/frelimo-drum-emblem-triangular-scarf.webp',
    title: 'FRELIMO Official Drum Emblem Rally Bandana',
    description: 'High-visibility rally scarf displaying the historical Frelimo emblem with dark contrast decorative tassel trim for grassroots election rallies.',
    tags: ['Frelimo', 'Rally', 'Bandana', 'Drum Emblem'],
    specs: ['Double-Sided Edge Binding', 'Fade-Resistant Inks', 'Compact Fold Geometry'],
    location: 'Moçambique',
    date: '2024'
  },
  {
    id: 'item-frelimo-red-scarves',
    jobId: 'job-frelimo-campaign',
    jobTitle: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO',
    category: 'campaigns',
    categoryLabel: 'Campaign Scarves',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/frelimo-red-campaign-scarves-bandanas.webp',
    src: '/images/gallery/frelimo-red-campaign-scarves-bandanas.webp',
    title: 'FRELIMO Red Satin Campaign Rally Scarves',
    description: 'Vibrant red ceremonial scarves customized with candidate election graphics and traditional border patterns for party congress delegations.',
    tags: ['Frelimo', 'Red Scarves', 'Congress', 'Rally'],
    specs: ['Silky Satin Polyester', 'All-Over Sublimation Pattern', 'Laser-Sealed Fray-Free Edges'],
    location: 'Moçambique',
    date: '2024'
  },
  {
    id: 'item-frelimo-campaign-cap',
    jobId: 'job-frelimo-campaign',
    jobTitle: 'FRELIMO & Daniel Chapo Presidential Campaign Merchandise',
    client: 'FRELIMO',
    category: 'campaigns',
    categoryLabel: 'Campaign Caps',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/frelimo-presidential-campaign-cap.webp',
    src: '/images/gallery/frelimo-presidential-campaign-cap.webp',
    title: 'FRELIMO Red Brushed Cotton 6-Panel Cap',
    description: 'Heavy brushed cotton 6-panel election cap with structured buckram front, embroidered ventilation eyelets, and centered party logo embroidery.',
    tags: ['Frelimo', 'Cap', 'Headwear', 'Embroidery'],
    specs: ['Heavy Brushed Cotton', 'Structured Front Panels', 'Metal Embossed Buckle Closure'],
    location: 'Moçambique',
    date: '2024'
  },

  // ==========================================
  // 2. CAD & VENÂNCIO MONDLANE
  // ==========================================
  {
    id: 'item-cad-rollup-banner',
    jobId: 'job-cad-campaign',
    jobTitle: 'CAD & Venâncio Mondlane Electoral Displays & Promotional Gear',
    client: 'CAD & Venâncio Mondlane',
    category: 'campaigns',
    categoryLabel: 'Roll-Up Banners',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/cad-venancio-mondlane-rollup-banner.webp',
    src: '/images/gallery/cad-venancio-mondlane-rollup-banner.webp',
    title: 'CAD Venâncio Mondlane Official Roll-Up Banner Stand',
    description: 'High-resolution 2m x 85cm retractable pull-up banner printed for CAD coalition candidate Venâncio Mondlane, featuring official pedigree notice "dby: www.clapsa.co.za".',
    tags: ['CAD', 'Venâncio Mondlane', 'Roll-up Banner', 'Elections', 'Clapsa'],
    specs: ['Anodized Aluminum Cassette', 'Anti-Curl Non-Glare Substrate', 'Printed by CLAPSA South Africa'],
    location: 'Maputo & Sandton Workshop',
    date: '2024',
    featured: true
  },
  {
    id: 'item-cad-banner-workshop',
    jobId: 'job-cad-campaign',
    jobTitle: 'CAD & Venâncio Mondlane Electoral Displays & Promotional Gear',
    client: 'CAD & Venâncio Mondlane',
    category: 'campaigns',
    categoryLabel: 'Display Hardware',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/cad-electoral-banner-workshop-display.webp',
    src: '/images/gallery/cad-electoral-banner-workshop-display.webp',
    title: 'CAD Campaign Display System in Finishing Workshop',
    description: 'Full standup inspection of CAD campaign roll-up banners and candidate flyers inside the CLAPSA large-format assembly and quality control room.',
    tags: ['CAD', 'Display Stand', 'Workshop', 'Finishing'],
    specs: ['Telescopic Support Rod', 'Padded Oxford Carry Bag', 'High-Lumen Color Fidelity'],
    location: 'CLAPSA Finishing Studio',
    date: '2024'
  },
  {
    id: 'item-cad-acrylic-podium',
    jobId: 'job-cad-campaign',
    jobTitle: 'CAD & Venâncio Mondlane Electoral Displays & Promotional Gear',
    client: 'CAD Coalition',
    category: 'campaigns',
    categoryLabel: 'Event Staging',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/cad-podium-acrylic-campaign-branding.webp',
    src: '/images/gallery/cad-podium-acrylic-campaign-branding.webp',
    title: 'Bespoke Branded Acrylic Presentation Stage Podium',
    description: 'Custom fabricated high-gloss acrylic speaking podium finished with die-cut vinyl emblems for press conferences and televised debates.',
    tags: ['Podium', 'Acrylic', 'Stage', 'Press Conference'],
    specs: ['10mm Cast Acrylic', 'Laser Flame-Polished Edges', 'Cast Vinyl Decal Application'],
    location: 'Johannesburg Workshop',
    date: '2024'
  },
  {
    id: 'item-cad-banner-finishing',
    jobId: 'job-cad-campaign',
    jobTitle: 'CAD & Venâncio Mondlane Electoral Displays & Promotional Gear',
    client: 'CAD Coalition',
    category: 'campaigns',
    categoryLabel: 'Large Format Print',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/cad-campaign-rollup-banner-finishing.webp',
    src: '/images/gallery/cad-campaign-rollup-banner-finishing.webp',
    title: 'Large-Format Retractable Banner Finishing Inspection',
    description: 'Roll-to-roll large format digital print finishing ensuring accurate color profiling of coalition blues and clean mechanical retraction.',
    tags: ['Roll-up', 'Printing', 'Quality Control', 'CAD'],
    specs: ['Eco-Solvent 1440dpi Print', 'Spring-Tension Roller Core', 'Double-Foot Stabilizer Base'],
    location: 'CLAPSA Print Lab',
    date: '2024'
  },

  // ==========================================
  // 3. RENAMO
  // ==========================================
  {
    id: 'item-renamo-polo',
    jobId: 'job-renamo-campaign',
    jobTitle: 'RENAMO Official Party Uniforms, Embroidered Polos & Caps',
    client: 'RENAMO',
    category: 'campaigns',
    categoryLabel: 'Embroidered Apparel',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/renamo-blue-embroidered-polo-shirt.webp',
    src: '/images/gallery/renamo-blue-embroidered-polo-shirt.webp',
    title: 'RENAMO Official Royal Blue Embroidered Polo Shirt',
    description: 'High-spec royal blue pique cotton polo shirt featuring high-density 25,000-stitch chest embroidery of the RENAMO partridge and party stripes.',
    tags: ['Renamo', 'Polo', 'Embroidery', 'Party Uniform', 'Blue'],
    specs: ['200gsm Pique Cotton', '25,000-Stitch High-Density Crest', 'Reinforced Ribbed Collar'],
    location: 'Maputo, Moçambique',
    date: '2024',
    featured: true
  },
  {
    id: 'item-renamo-cap',
    jobId: 'job-renamo-campaign',
    jobTitle: 'RENAMO Official Party Uniforms, Embroidered Polos & Caps',
    client: 'RENAMO',
    category: 'campaigns',
    categoryLabel: 'Embroidered Headwear',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/renamo-blue-embroidered-campaign-cap.webp',
    src: '/images/gallery/renamo-blue-embroidered-campaign-cap.webp',
    title: 'RENAMO Royal Blue 6-Panel Embroidered Cap',
    description: 'Brushed cotton royal blue campaign cap with precision front panel embroidery of the official party emblem and adjustable rear closure.',
    tags: ['Renamo', 'Cap', 'Headwear', 'Embroidery'],
    specs: ['Heavy Brushed Cotton', 'Embroidered Party Insignia', 'Pre-Curved Visor'],
    location: 'Moçambique',
    date: '2024'
  },
  {
    id: 'item-renamo-ambassador-tee',
    jobId: 'job-renamo-campaign',
    jobTitle: 'RENAMO Official Party Uniforms, Embroidered Polos & Caps',
    client: 'RENAMO & Civic Partners',
    category: 'campaigns',
    categoryLabel: 'Campaign Tees',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/renamo-civic-ambassador-blue-tee.webp',
    src: '/images/gallery/renamo-civic-ambassador-blue-tee.webp',
    title: 'Civic Campaign Ambassador Royal Blue Crewneck',
    description: 'Vibrant royal blue 160gsm ringspun cotton crewneck t-shirts custom screen-printed with civic solidarity slogans and party support emblems.',
    tags: ['Blue Tee', 'Campaign', 'Civic', 'Screen Print'],
    specs: ['160gsm Ringspun Cotton', 'Plastisol Screen Print', 'Double-Needle Hemming'],
    location: 'Moçambique',
    date: '2024'
  },
  {
    id: 'item-renamo-community-apparel',
    jobId: 'job-renamo-campaign',
    jobTitle: 'RENAMO Official Party Uniforms, Embroidered Polos & Caps',
    client: 'Community & Regional Groups',
    category: 'campaigns',
    categoryLabel: 'Community Apparel',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/renamo-community-electoral-apparel.webp',
    src: '/images/gallery/renamo-community-electoral-apparel.webp',
    title: 'Community Electoral Outreach Back-Printed Shirt',
    description: 'Back-printed civic outreach cotton t-shirt produced for grassroots community organizers during municipal and national election cycles.',
    tags: ['Outreach', 'T-Shirt', 'Screen Print', 'Community'],
    specs: ['Back Typography Print', 'Pre-Shrunk 100% Cotton', 'Neck Tape Reinforcement'],
    location: 'Cabo Delgado & Nampula',
    date: '2024'
  },

  // ==========================================
  // 4. STANDARD BANK
  // ==========================================
  {
    id: 'item-standard-bank-polos',
    jobId: 'job-standard-bank',
    jobTitle: 'Standard Bank SADC Corporate Summits & Executive Gifting',
    client: 'Standard Bank Group',
    category: 'corporate',
    categoryLabel: 'Executive Apparel',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/executive-pique-golf-shirts-embroidery.webp',
    src: '/images/gallery/executive-pique-golf-shirts-embroidery.webp',
    title: 'Standard Bank Executive Conference Golf Shirts',
    description: 'Premium 220gsm combed pique cotton golf shirts featuring subtle tonal chest crest embroidery and contrast placket detailing for senior executive summits.',
    tags: ['Standard Bank', 'Golf Shirts', 'Executive', 'Embroidery', 'Corporate'],
    specs: ['220gsm Combed Pique Cotton', 'Subtle Tonal Crest Embroidery', 'Side Slits & Ribbed Cuffs'],
    location: 'Sandton, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'item-standard-bank-lanyards',
    jobId: 'job-standard-bank',
    jobTitle: 'Standard Bank SADC Corporate Summits & Executive Gifting',
    client: 'Standard Bank Group',
    category: 'corporate',
    categoryLabel: 'Summit Lanyards',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/siemens-matla-satin-sublimated-lanyards.webp',
    src: '/images/gallery/siemens-matla-satin-sublimated-lanyards.webp',
    title: 'Dual-Sided Silk Satin Sublimated Summit Lanyards',
    description: '20mm ultra-soft silk satin conference lanyards featuring dual-sided dye sublimation printing, heavy-duty metal lobster clasps, and safety breakaway buckles.',
    tags: ['Lanyards', 'Conference', 'Sublimation', 'Corporate Swag'],
    specs: ['20mm Silk Satin Webbing', 'Quick-Release Safety Buckle', 'High-Res Sublimation'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },
  {
    id: 'item-standard-bank-kraft-bags',
    jobId: 'job-standard-bank',
    jobTitle: 'Standard Bank SADC Corporate Summits & Executive Gifting',
    client: 'Standard Bank Group',
    category: 'gifting',
    categoryLabel: 'Luxury Gifting',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/mantra-kraft-luxury-gift-bags.webp',
    src: '/images/gallery/mantra-kraft-luxury-gift-bags.webp',
    title: 'Luxury Hot-Foil Eco-Kraft Presentation Bags & Boxes',
    description: 'Bespoke recyclable 250gsm kraft gift carriers and presentation boxes finished with metallic gold hot-foil stamping and pure cotton twill ribbon handles.',
    tags: ['Packaging', 'Gift Bags', 'Luxury', 'Gold Foil'],
    specs: ['250gsm Heavy Kraft Cardboard', 'Hot Foil Stamping', 'Cotton Ribbon Handles'],
    location: 'Sandton Headquarters',
    date: '2025'
  },
  {
    id: 'item-standard-bank-water-bottles',
    jobId: 'job-standard-bank',
    jobTitle: 'Standard Bank SADC Corporate Summits & Executive Gifting',
    client: 'Standard Bank Group',
    category: 'gifting',
    categoryLabel: 'Corporate Drinkware',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/sports-drinkware-water-bottles.webp',
    src: '/images/gallery/sports-drinkware-water-bottles.webp',
    title: 'Royal Blue 750ml Sports Drinkware Squeeze Bottles',
    description: 'Food-grade BPA-free sports water bottles in corporate royal blue, screen-printed with white logos for banking wellness programs and athletic events.',
    tags: ['Drinkware', 'Water Bottles', 'Screen Print', 'Wellness'],
    specs: ['BPA-Free Food Grade Plastic', 'Opaque White Screen Print', 'Leak-Proof Valve'],
    location: 'South Africa',
    date: '2025'
  },

  // ==========================================
  // 5. MOVITEL TELECOM
  // ==========================================
  {
    id: 'item-movitel-gazebo',
    jobId: 'job-movitel-telecom',
    jobTitle: 'Movitel Telecom Brand Activation, Uniforms & Field Swag',
    client: 'Movitel Moçambique',
    category: 'display',
    categoryLabel: 'Pop-Up Gazebos',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/elaxo-sublimated-gazebo-and-tablecloth.webp',
    src: '/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp',
    title: 'Commercial Sublimated Outdoor Event Gazebo & Tablecloth',
    description: '3m x 3m commercial pop-up canopy gazebo with full-coverage dye-sublimated canopy, heavy 40mm hexagonal aluminum legs, and matching branded fitted tablecloth.',
    tags: ['Gazebo', 'Movitel', 'Event Display', 'Sublimation', 'Outdoor'],
    specs: ['600D Waterproof PU Polyester', 'Hexagonal 40mm Aluminum Legs', 'All-Over Sublimation'],
    location: 'Maputo, Moçambique',
    date: '2025',
    featured: true
  },
  {
    id: 'item-movitel-trucker-caps',
    jobId: 'job-movitel-telecom',
    jobTitle: 'Movitel Telecom Brand Activation, Uniforms & Field Swag',
    client: 'Movitel Moçambique',
    category: 'display',
    categoryLabel: 'Brand Ambassador Caps',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/california-vintage-mesh-trucker-cap.webp',
    src: '/images/gallery/california-vintage-mesh-trucker-cap.webp',
    title: 'Vibrant Orange & White Brand Ambassador Trucker Caps',
    description: 'Dual-tone 5-panel foam trucker caps featuring breathable rear mesh, curved visor, and high-contrast screen-printed front panel for retail sales teams.',
    tags: ['Trucker Caps', 'Headwear', 'Orange', 'Ambassadors'],
    specs: ['Polyester Foam Front', 'Breathable Nylon Mesh Rear', 'Adjustable Snap Closure'],
    location: 'Moçambique',
    date: '2025'
  },
  {
    id: 'item-movitel-lanyards',
    jobId: 'job-movitel-telecom',
    jobTitle: 'Movitel Telecom Brand Activation, Uniforms & Field Swag',
    client: 'Movitel Moçambique',
    category: 'display',
    categoryLabel: 'Event Lanyards',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/trax-heavy-duty-industrial-safety-lanyards.webp',
    src: '/images/gallery/trax-heavy-duty-industrial-safety-lanyards.webp',
    title: 'High-Vis Neon Orange Heavy-Duty Jacquard Lanyards',
    description: 'High-tensile woven lanyards engineered in high-visibility neon orange with metal swivel trigger clips and quick-release safety buckles.',
    tags: ['Lanyards', 'High-Vis', 'Orange', 'Swag'],
    specs: ['High-Tensile Woven Jacquard', 'Steel Swivel Clip', 'Safety Breakaway Buckle'],
    location: 'Moçambique',
    date: '2025'
  },
  {
    id: 'item-movitel-teardrop-flags',
    jobId: 'job-movitel-telecom',
    jobTitle: 'Movitel Telecom Brand Activation, Uniforms & Field Swag',
    client: 'Movitel Moçambique',
    category: 'display',
    categoryLabel: 'Outdoor Flags',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/construcoes-karina-teardrop-flags.webp',
    src: '/images/gallery/construcoes-karina-teardrop-flags.webp',
    title: 'Outdoor Teardrop & Feather Event Activation Flags',
    description: '3.5m and 4.5m commercial teardrop flags manufactured with all-weather 115gsm knitted polyester and reinforced fiberglass telescopic poles.',
    tags: ['Flags', 'Teardrop', 'Display', 'Branding'],
    specs: ['115gsm Knitted Polyester', 'Full Dye Sublimation', 'Ground Spike & Water Base Options'],
    location: 'National Telecom Retail Stores',
    date: '2025'
  },

  // ==========================================
  // 6. TROPIGALIA MOÇAMBIQUE
  // ==========================================
  {
    id: 'item-tropigalia-pens-bulk',
    jobId: 'job-tropigalia',
    jobTitle: 'Tropigalia Moçambique Corporate Stationery & Executive Swag',
    client: 'Tropigalia Moçambique',
    category: 'gifting',
    categoryLabel: 'Corporate Pens',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/tropigalia-branded-pens-bulk.webp',
    src: '/images/gallery/tropigalia-branded-pens-bulk.webp',
    title: 'Tropigalia Retractable Metallic Pens (Mass Production)',
    description: 'High-volume batch pad printing of dual-tone red and silver retractable corporate ballpoint pens for nationwide commercial distribution in Mozambique.',
    tags: ['Tropigalia', 'Pens', 'Pad Printing', 'Stationery', 'Mozambique'],
    specs: ['Precision Pad Printing', 'Ergonomic Grip Barrel', 'German Black Ink Refill'],
    location: 'Maputo, Moçambique',
    date: '2024 - 2025',
    featured: true
  },

  // ==========================================
  // 7. G4S SECURE SOLUTIONS
  // ==========================================
  {
    id: 'item-g4s-ballistic-vest',
    jobId: 'job-g4s-security',
    jobTitle: 'G4S Secure Solutions SADC Tactical Armor & Workwear',
    client: 'G4S Secure Solutions SADC',
    category: 'ppe',
    categoryLabel: 'Tactical Vests',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/g4s-security-tactical-ballistic-vest.webp',
    src: '/images/gallery/g4s-security-tactical-ballistic-vest.webp',
    title: 'G4S Security Tactical Ballistic Carrier Vests',
    description: 'Custom ballistic armor carrier vests embroidered with official G4S security typography and insignias for SADC cash-in-transit personnel.',
    tags: ['G4S', 'Tactical', 'Security', 'Embroidery', 'Vest'],
    specs: ['1000D Cordura Ballistic Nylon', 'High-Density 3D Red/White Thread Embroidery', 'Adjustable Velcro Cummerbund'],
    location: 'Johannesburg & Maputo',
    date: '2025',
    featured: true
  },
  {
    id: 'item-g4s-batch-staging',
    jobId: 'job-g4s-security',
    jobTitle: 'G4S Secure Solutions SADC Tactical Armor & Workwear',
    client: 'G4S Secure Solutions SADC',
    category: 'ppe',
    categoryLabel: 'Tactical Equipment',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/g4s-tactical-vests-and-reflector-batch.webp',
    src: '/images/gallery/g4s-tactical-vests-and-reflector-batch.webp',
    title: 'G4S Ballistic Carriers & High-Vis Vests Production Batch',
    description: 'Batch production staging of ballistic armor carriers paired with high-visibility lime reflective overvests ready for SADC security fleets.',
    tags: ['G4S', 'Batch Production', 'High-Vis', 'Security'],
    specs: ['SABS Approved Reflective Tape', 'Heavy-Duty Hardware', 'Reinforced Pouch Attachment'],
    location: 'CLAPSA Tactical Department',
    date: '2025'
  },

  // ==========================================
  // 8. MERA MALAWI
  // ==========================================
  {
    id: 'item-mera-diplomatic-uniforms',
    jobId: 'job-mera-malawi',
    jobTitle: 'MERA Malawi Energy Authority Diplomatic Uniforms',
    client: 'Malawi Energy Regulatory Authority (MERA)',
    category: 'corporate',
    categoryLabel: 'Diplomatic Uniforms',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/mera-malawi-energy-regulatory-uniforms.webp',
    src: '/images/gallery/mera-malawi-energy-regulatory-uniforms.webp',
    title: 'MERA Malawi Energy Authority Corporate Uniforms',
    description: 'High-spec institutional uniforms featuring intricate circular multicolor emblem embroidery executed on multi-head Tajima embroidery carousels.',
    tags: ['MERA', 'Embroidery', 'Uniforms', 'Malawi', 'Government'],
    specs: ['Poly-Cotton Twill Weave', '50,000-Stitch Multicolor Crest', 'Reinforced Triple Stitching'],
    location: 'Lilongwe, Malawi',
    date: '2025',
    featured: true
  },
  {
    id: 'item-mozambique-work-shirts',
    jobId: 'job-mera-malawi',
    jobTitle: 'MERA Malawi Energy Authority Diplomatic Uniforms',
    client: 'Mozam Bio Energy',
    category: 'corporate',
    categoryLabel: 'Work Shirts',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/mozambique-corporate-work-shirts.webp',
    src: '/images/gallery/mozambique-corporate-work-shirts.webp',
    title: 'Mozambique Industrial Work Shirts at Tajima Embroidery Machines',
    description: 'Corporate short-sleeve work shirts photographed directly at the Tajima embroidery machines with precision company branding.',
    tags: ['Work Shirts', 'Embroidery', 'Mozambique', 'Tajima'],
    specs: ['65/35 Heavy Twill Blend', 'Multi-Head Direct Embroidery', 'Button-Down Collar'],
    location: 'Maputo, Moçambique',
    date: '2025'
  },

  // ==========================================
  // 9. GAUTENG PROVINCIAL GOVERNMENT
  // ==========================================
  {
    id: 'item-gauteng-conti-suits',
    jobId: 'job-gauteng-province',
    jobTitle: 'Gauteng Provincial Government & Heavy Industrial PPE',
    client: 'Gauteng Provincial Government',
    category: 'ppe',
    categoryLabel: 'Industrial PPE',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/gauteng-province-flame-retardant-conti-suits.webp',
    src: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
    title: 'Gauteng Province Flame & Acid D59 Conti Suits',
    description: 'Heavyweight D59 flame and acid retardant two-piece workwear suits featuring official Gauteng Provincial Government embroidered emblems.',
    tags: ['Conti Suits', 'Gauteng', 'SABS', 'Flame Retardant', 'Overalls'],
    specs: ['100% Cotton D59 Flame & Acid Retardant', 'High-Density Crest Embroidery', 'YKK Heavy Brass Zips'],
    location: 'Gauteng, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'item-gauteng-tracksuits',
    jobId: 'job-gauteng-province',
    jobTitle: 'Gauteng Provincial Government & Heavy Industrial PPE',
    client: 'Gauteng Department of Sports & Arts',
    category: 'sportswear',
    categoryLabel: 'Athletic Apparel',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/gauteng-province-sports-arts-tracksuits.webp',
    src: '/images/gallery/gauteng-province-sports-arts-tracksuits.webp',
    title: 'Gauteng Sports, Arts, Culture & Recreation Tracksuits',
    description: 'Official athletic tracksuits featuring custom tricot polyester fabric, contrast piping, and embroidered coat of arms for provincial delegations.',
    tags: ['Gauteng', 'Sports', 'Tracksuits', 'Athletic'],
    specs: ['High-Performance Tricot Fleece', 'Embroidered Provincial Coat of Arms', 'YKK Full Zippers'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },
  {
    id: 'item-caterpillar-safety-boots',
    jobId: 'job-gauteng-province',
    jobTitle: 'Gauteng Provincial Government & Heavy Industrial PPE',
    client: 'Caterpillar Heavy Earthmoving',
    category: 'ppe',
    categoryLabel: 'Safety Footwear',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/caterpillar-sabs-steel-toe-safety-boots.webp',
    src: '/images/gallery/caterpillar-sabs-steel-toe-safety-boots.webp',
    title: 'SABS Certified Industrial Steel-Toe Safety Boots',
    description: 'Heavy industrial protective work boots featuring puncture-resistant steel midsole, shock-absorbing heel, and anti-static oil-resistant outsole.',
    tags: ['Safety Boots', 'Footwear', 'Steel Toe', 'PPE', 'Mining'],
    specs: ['Full Grain Oiled Leather', '200J Impact Steel Toe Cap', 'Oil & Slip Resistant PU Sole'],
    location: 'Mining Sector SADC',
    date: '2025'
  },

  // ==========================================
  // 10. ALBANY BAKERIES
  // ==========================================
  {
    id: 'item-albany-promo-tshirts',
    jobId: 'job-albany-bakeries',
    jobTitle: 'Albany Bakeries & FMCG High-Volume Screen Printing',
    client: 'Albany Bakeries South Africa',
    category: 'printing',
    categoryLabel: 'Screen Printing',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/albany-bakeries-promo-tshirts.webp',
    src: '/images/gallery/albany-bakeries-promo-tshirts.webp',
    title: 'Albany Bakeries High-Volume Screen-Printed Tees',
    description: 'Bulk production run of red promotional t-shirts printed with Albany Bakeries diamond logo on high-speed textile carousel presses with conveyor curing.',
    tags: ['Albany', 'Screen Printing', 'T-Shirts', 'High-Volume'],
    specs: ['100% Carded Cotton 160gsm', 'Plastisol Multi-Color Screen Print', 'Heat-Tunnel Cured for Zero Washout'],
    location: 'Johannesburg, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'item-move-for-youth-shirts',
    jobId: 'job-albany-bakeries',
    jobTitle: 'Albany Bakeries & FMCG High-Volume Screen Printing',
    client: 'Youth Sports & Charity Initiative',
    category: 'printing',
    categoryLabel: 'Marathon Apparel',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/move-for-youth-marathon-tshirts.webp',
    src: '/images/gallery/move-for-youth-marathon-tshirts.webp',
    title: 'Move For Youth Charity Marathon Bulk Runner Shirts',
    description: 'Over 5,000 bright red charity marathon shirts stacked and sorted by size after passing through automated drying tunnels.',
    tags: ['Marathon', 'Charity', 'Screen Print', 'T-Shirts'],
    specs: ['140gsm Breathable Poly-Cotton', 'Discharge & Plastisol Hybrid Print', 'Double Needle Sleeve & Waist'],
    location: 'Sandton, South Africa',
    date: '2025'
  },

  // ==========================================
  // 11. UNICEF & HUMANITARIAN
  // ==========================================
  {
    id: 'item-unicef-tote-bag',
    jobId: 'job-unicef-humanitarian',
    jobTitle: 'UNICEF & UN Regional Humanitarian Relief Programs',
    client: 'UNICEF & Ministério da Educação (MEC)',
    category: 'campaigns',
    categoryLabel: 'Eco Cotton Totes',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/unicef-mec-aprender-melhor-tote-bag.webp',
    src: '/images/gallery/unicef-mec-aprender-melhor-tote-bag.webp',
    title: 'UNICEF "Aprender Para Melhor Crescer" Cotton Carrier Tote',
    description: 'Royal blue heavy-duty cotton canvas tote bags manufactured for school children with official UNICEF and Mozambique Ministry of Education logos.',
    tags: ['UNICEF', 'MEC', 'Tote Bag', 'Education', 'Humanitarian'],
    specs: ['100% Cotton 280gsm Canvas', 'Reinforced Cross-Stitch Handles', 'Non-Toxic Water-Based Screen Print'],
    location: 'Moçambique',
    date: '2024',
    featured: true
  },
  {
    id: 'item-unhcr-relief-shirts',
    jobId: 'job-unicef-humanitarian',
    jobTitle: 'UNICEF & UN Regional Humanitarian Relief Programs',
    client: 'UNHCR Regional Mission',
    category: 'campaigns',
    categoryLabel: 'Humanitarian Tees',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/unhcr-refugiados-humanitarian-blue-shirts.webp',
    src: '/images/gallery/unhcr-refugiados-humanitarian-blue-shirts.webp',
    title: 'UNHCR / Refugiados Blue Humanitarian Relief Shirts',
    description: 'Cobalt blue humanitarian relief t-shirts screen-printed with the iconic white ribbon and UNHCR mission emblems.',
    tags: ['UNHCR', 'Humanitarian', 'Blue Tees', 'Screen Print'],
    specs: ['160gsm Ringspun Combed Cotton', 'High-Opacity White Rubber Ink Screen Print', 'SABS Certified Dyes'],
    location: 'Regional SADC Mission',
    date: '2025'
  },

  // ==========================================
  // 12. TRANS-SADC HIGHWAY SIGNS
  // ==========================================
  {
    id: 'item-desvio-chevron-signs',
    jobId: 'job-trans-sadc-signs',
    jobTitle: 'Trans-SADC Highway & Civil Road Safety Signage',
    client: 'SADC Road Maintenance & Civil',
    category: 'signage',
    categoryLabel: 'Road Signage',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/desvio-reflective-chevron-road-signs.webp',
    src: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
    title: 'Desvio Class 2 Retro-Reflective Highway Chevron Signs',
    description: 'High-visibility yellow/black highway chevron detour signs engineered with Class 2 reflective honeycomb sheeting for all-weather nighttime visibility.',
    tags: ['Road Signs', 'Reflective', 'Desvio', 'Highway', 'Chromadek'],
    specs: ['Class 2 High-Intensity Prismatic Vinyl', '1.4mm Chromadek Steel', 'SABS 1519 Compliant'],
    location: 'Maputo Corridor, Mozambique',
    date: '2025',
    featured: true
  },
  {
    id: 'item-triangular-hazard-signs',
    jobId: 'job-trans-sadc-signs',
    jobTitle: 'Trans-SADC Highway & Civil Road Safety Signage',
    client: 'Civil Construction & Plant Haulage',
    category: 'signage',
    categoryLabel: 'Hazard Signage',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/triangular-construction-hazard-signs.webp',
    src: '/images/gallery/triangular-construction-hazard-signs.webp',
    title: 'Triangular Heavy Plant Construction Signs',
    description: 'Triangular roadwork safety signs featuring heavy plant silhouette, border red warning trim, and anti-glare protective laminate on sturdy stands.',
    tags: ['Road Safety', 'Hazard Signs', 'Construction', 'Reflective'],
    specs: ['Class 1 Engineering Grade Sheeting', 'Tubular Steel Stand', 'Weatherproof UV Overlaminate'],
    location: 'Gauteng, South Africa',
    date: '2025'
  },

  // ==========================================
  // 13. SADC LOGISTICS & FREIGHT
  // ==========================================
  {
    id: 'item-shipping-container-freight',
    jobId: 'job-sadc-logistics',
    jobTitle: 'Turnkey SADC Cross-Border Freight & Packaging Hub',
    client: 'SADC Cross-Border Logistics Division',
    category: 'gifting',
    categoryLabel: 'SADC Logistics',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/shipping-container-clapsa-export-freight.webp',
    src: '/images/gallery/shipping-container-clapsa-export-freight.webp',
    title: '40ft Shipping Container Loaded with CLAPSA Export Freight',
    description: 'Full 40ft maritime shipping container packed with CLAPSA branded cartons ready for cross-border dispatch to Maputo, Gaborone, and Harare.',
    tags: ['Logistics', 'Export', 'Shipping Container', 'SADC Freight'],
    specs: ['Heavy-Duty Multi-Wall Export Cartons', 'Cross-Border Phytosanitary & Customs Clearance', 'Palletized & Strapped Secure Cargo'],
    location: 'Export Freight Terminal',
    date: '2025',
    featured: true
  },
  {
    id: 'item-tamper-evident-bags',
    jobId: 'job-sadc-logistics',
    jobTitle: 'Turnkey SADC Cross-Border Freight & Packaging Hub',
    client: 'Secure Financial & Document Transit',
    category: 'gifting',
    categoryLabel: 'Security Packaging',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/tamper-evident-high-security-transit-bags.webp',
    src: '/images/gallery/tamper-evident-high-security-transit-bags.webp',
    title: 'Tamper-Evident High-Security Courier Transit Bags',
    description: 'High-security courier bags engineered with tamper-evident void tape and unique tracking barcodes for confidential cross-border shipments.',
    tags: ['Security Bags', 'Tamper Evident', 'Packaging', 'Transit'],
    specs: ['Multi-Layer Co-Extruded Polyethylene', 'Permanent Void-Tape Tamper Evident Closure', 'Unique Barcode & Sequenced Numbering'],
    location: 'Johannesburg Secure Dispatch',
    date: '2025'
  },
  {
    id: 'item-claps-gin-packaging',
    jobId: 'job-sadc-logistics',
    jobTitle: 'Turnkey SADC Cross-Border Freight & Packaging Hub',
    client: 'CLAPS Spirits & Beverage Co.',
    category: 'gifting',
    categoryLabel: 'Beverage Packaging',
    mediaType: 'photo',
    thumbnail: '/images/gallery/thumbs/claps-premium-gin-custom-packaging.webp',
    src: '/images/gallery/claps-premium-gin-custom-packaging.webp',
    title: 'CLAPS Premium Gin Custom Spirits Presentation & Labeling',
    description: 'Bespoke label design, gold-foil stamping, and bottle presentation packaging for CLAPS Premium Gin signature reserve.',
    tags: ['Packaging', 'Beverage', 'Claps Gin', 'Labels', 'Gold Foil'],
    specs: ['Embossed Textured Synthetic Label Paper', 'Gold Hot-Foil Stamping & Die-Cut Finish', 'Natural Wood-Top Synthetic Cork Seal'],
    location: 'Beverage Packaging Lab',
    date: '2025'
  },

  // ==========================================
  // REAL FACTORY & PRODUCTION MOTION REELS (H.264 COMPRESSED)
  // ==========================================
  {
    id: 'reel-carousel-screen-printing',
    jobId: 'job-albany-bakeries',
    jobTitle: 'Albany Bakeries & FMCG High-Volume Screen Printing',
    client: 'CLAPSA Screen Printing Department',
    category: 'printing',
    categoryLabel: 'Screen Printing Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/clapsa-carousel-screen-printing-reel.webp',
    src: '/videos/gallery/clapsa-carousel-screen-printing-reel.mp4',
    title: 'High-Speed Carousel Screen Printing in Motion',
    description: 'Live workshop motion reel capturing automated carousel rotation, precision squeegee pressure, and multi-color wet-on-wet registration on black blanks.',
    tags: ['Video', 'Screen Printing', 'Carousel', 'Machinery', 'Production'],
    specs: ['Automated Textile Carousel', 'Multi-Color Wet-on-Wet Printing', 'Plastisol Ink Registration'],
    location: 'CLAPSA Print Studio, Sandton',
    date: 'October 2025',
    featured: true
  },
  {
    id: 'reel-safety-showroom-display',
    jobId: 'job-trans-sadc-signs',
    jobTitle: 'Trans-SADC Highway & Civil Road Safety Signage',
    client: 'CLAPSA Safety Division',
    category: 'ppe',
    categoryLabel: 'Safety Showroom Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/clapsa-safety-showroom-and-retail-display.webp',
    src: '/videos/gallery/clapsa-safety-showroom-and-retail-display.mp4',
    title: 'CLAPSA Safety Equipment & Signage Retail Display',
    description: 'Comprehensive video tour of the CLAPSA safety gear showroom highlighting hard hats, warning signs, and protective clothing on branded retail shelving.',
    tags: ['Video', 'Showroom', 'Safety', 'Hard Hats', 'Signage'],
    specs: ['SABS Safety Hard Hats', 'Class 2 Retro-Reflective Signage', 'High-Visibility Display Shelving'],
    location: 'Sandton Showroom',
    date: '2025',
    featured: true
  },
  {
    id: 'reel-textile-squeegee-stroke',
    jobId: 'job-albany-bakeries',
    jobTitle: 'Albany Bakeries & FMCG High-Volume Screen Printing',
    client: 'CLAPSA Print Studio',
    category: 'printing',
    categoryLabel: 'Textile Printing Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/precision-textile-squeegee-printing-stroke.webp',
    src: '/videos/gallery/precision-textile-squeegee-printing-stroke.mp4',
    title: 'Precision Textile Squeegee Stroke & Ink Transfer',
    description: 'Macro close-up capturing uniform ink deposit through tensioned mesh onto corporate promotional apparel with crisp sharp edges.',
    tags: ['Video', 'Screen Printing', 'Squeegee', 'Craftsmanship'],
    specs: ['70-Durometer Polyurethane Squeegee', 'High-Opacity White Textile Ink', 'Monofilament Polyester Mesh'],
    location: 'Print Department',
    date: '2025'
  },
  {
    id: 'reel-boutique-bag-assembly',
    jobId: 'job-tropigalia',
    jobTitle: 'Tropigalia Moçambique Corporate Stationery & Executive Swag',
    client: 'Mantra & Retail Packaging Clients',
    category: 'gifting',
    categoryLabel: 'Packaging Craftsmanship',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/luxury-boutique-paper-bag-assembly.webp',
    src: '/videos/gallery/luxury-boutique-paper-bag-assembly.mp4',
    title: 'Luxury Boutique Carrier Bag Hand-Assembly & QC',
    description: 'Detailed craft inspection of laminated luxury gift bags ensuring clean fold lines, reinforced handle anchors, and flawless foil stamping.',
    tags: ['Video', 'Packaging', 'Gift Bags', 'Craftsmanship'],
    specs: ['Reinforced Cardboard Base & Turn-Top', 'Pure Cotton Cord Rope Handles', 'Rigorous Weight-Bearing Quality Check'],
    location: 'Finishing Department',
    date: '2025'
  },
  {
    id: 'reel-pallet-stretch-wrapping',
    jobId: 'job-sadc-logistics',
    jobTitle: 'Turnkey SADC Cross-Border Freight & Packaging Hub',
    client: 'CLAPSA Logistics Dispatch Hub',
    category: 'corporate',
    categoryLabel: 'Logistics Dispatch Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/automated-pallet-stretch-wrapping-dispatch.webp',
    src: '/videos/gallery/automated-pallet-stretch-wrapping-dispatch.mp4',
    title: 'Automated Pallet Wrapping & Freight Preparation',
    description: 'Automated turntable wrapping machine enclosing finished bulk apparel cartons ready for cross-border freight to regional distribution centers.',
    tags: ['Video', 'Pallet Wrapping', 'Freight', 'Logistics'],
    specs: ['High-Yield Cast Stretch Film', 'Corner Edge Board Protection', 'Weather-Sealed Export Stacking'],
    location: 'Dispatch Warehouse',
    date: '2025'
  },
  {
    id: 'reel-sandton-facility-walkthrough',
    jobId: 'job-standard-bank',
    jobTitle: 'Standard Bank SADC Corporate Summits & Executive Gifting',
    client: 'CLAPSA Commercial Operations',
    category: 'corporate',
    categoryLabel: 'Facility Walkthrough Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/clapsa-headquarters-sandton-facility-walkthrough.webp',
    src: '/videos/gallery/clapsa-headquarters-sandton-facility-walkthrough.mp4',
    title: 'CLAPSA Sandton Headquarters & Executive Entry',
    description: 'Interior walkthrough entering the Sandton headquarters showcasing corporate branding and modern client meeting spaces.',
    tags: ['Video', 'Headquarters', 'Sandton', 'Facility'],
    specs: ['Architectural Glass Entry', 'Modern Executive Production Offices', 'Integrated Showroom Corridor'],
    location: 'Sandton Headquarters',
    date: '2025',
    featured: true
  },
  {
    id: 'reel-storm-parka-inspection',
    jobId: 'job-gauteng-province',
    jobTitle: 'Gauteng Provincial Government & Heavy Industrial PPE',
    client: 'Civil & Mining Client Workwear',
    category: 'ppe',
    categoryLabel: 'Garment Inspection Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/high-visibility-storm-parka-jacket-inspection.webp',
    src: '/videos/gallery/high-visibility-storm-parka-jacket-inspection.mp4',
    title: 'High-Vis SABS Waterproof Storm Parka Jacket Inspection',
    description: 'Detailed garment inspection displaying heavy-duty zippers, storm flaps, and high-visibility reflective striping on cold-weather industrial workwear.',
    tags: ['Video', 'Storm Parka', 'Reflective', 'PPE', 'Inspection'],
    specs: ['100% Waterproof Seam-Sealed Outer Shell', 'Heavy Silver Reflective Bands', 'Embroidered Left-Chest Crest'],
    location: 'Quality Control Department',
    date: '2025'
  },
  {
    id: 'reel-forklift-yard-loading',
    jobId: 'job-sadc-logistics',
    jobTitle: 'Turnkey SADC Cross-Border Freight & Packaging Hub',
    client: 'CLAPSA Warehousing & Dispatch Yard',
    category: 'corporate',
    categoryLabel: 'Freight Yard Reel',
    mediaType: 'video',
    thumbnail: '/videos/gallery/posters/toyota-forklift-loading-freight-trucks.webp',
    src: '/videos/gallery/toyota-forklift-loading-freight-trucks.mp4',
    title: 'Forklift Logistics Loading Transport Flatbeds',
    description: 'Active warehouse yard footage of palletized corporate orders being loaded onto regional transport trucks for long-haul SADC delivery.',
    tags: ['Video', 'Forklift', 'Truck Loading', 'Logistics', 'Dispatch'],
    specs: ['Industrial Toyota 3-Ton Forklift', 'Interstate Flatbed Transport Rig', 'Cross-Border Dispatch Staging'],
    location: 'Loading Bay, Johannesburg',
    date: '2025'
  }
];
'''

with open(r'c:\Users\Alves King Edition\Documents\Project 2\clapsa\src\data\gallery.ts', 'w', encoding='utf-8') as f:
    f.write(script_content)

print("Updated src/data/gallery.ts with all 13 Company/Brand Groups (Frelimo, Renamo, CAD, Standard Bank, Movitel, Tropigalia, G4S, MERA, Gauteng, Albany, UNICEF, SADC Signs, Logistics)!")
