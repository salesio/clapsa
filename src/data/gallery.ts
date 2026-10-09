export type MediaCategory = 'all' | 'sportswear' | 'apparel' | 'gifting' | 'ppe' | 'display';
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
  {
    id: 'job-sublimation-activewear',
    jobCode: 'JOB #CLP-2025-01',
    title: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    coverImage: '/images/showcase/clapsa-activewear-hoodie-lifestyle.jpg',
    description: 'Complete high-performance custom sublimated athletic apparel collection including zip hoodies, 3/4 compression leggings, and custom sleeve URL branding.',
    itemsCount: 8,
    location: 'Johannesburg, South Africa',
    year: '2025',
    deliverables: [
      'All-Over Dye-Sublimated Zip Hoodies with Vibrant Red/Black Accents',
      'Matching Form-Fitting 4-Way Stretch Compression Activewear Tights',
      'High-Definition Sleeve Typography (www.clapsashop.co.za)',
      'Moisture-Wicking Breathable Polyester/Spandex Blend Fabrics'
    ]
  },
  {
    id: 'job-trace-event-merchandise',
    jobCode: 'JOB #CLP-2025-02',
    title: 'TRACE+ VIP Music Festival Merchandising & QR Lanyards',
    client: 'TRACE+ International Music Tour',
    category: 'gifting',
    categoryLabel: 'Event & VIP Merchandising',
    coverImage: '/images/showcase/trace-vip-event-lanyards.jpg',
    description: 'Premium silk satin sublimated event lanyards and wristbands featuring interactive scannable QR campaign codes for contactless digital activations.',
    itemsCount: 4,
    location: 'Pan-African Tour & Festivals',
    year: '2025',
    deliverables: [
      'Double-Sided High-Density Silk Satin Sublimated Lanyards',
      'Micro-Sharp Scannable QR Codes for VIP App Activations',
      'Heavy-Duty Metal Lobster Clasp & Safety Breakaway Buckles',
      '50,000+ Units Fast-Tracked SADC Distribution'
    ]
  },
  {
    id: 'job-claps-gin-corporate-gifting',
    jobCode: 'JOB #CLP-2025-03',
    title: 'CLAPS Premium Gin & Laser-Engraved Wooden Coasters',
    client: 'Executive Corporate Launch & VIP Hamper Gifting',
    category: 'gifting',
    categoryLabel: 'Bespoke Executive Gifting',
    coverImage: '/images/showcase/claps-premium-gin-coaster-glass.jpg',
    description: 'Artisan luxury corporate gifting packages with custom-labelled spirit glass bottles, natural cork stoppers, and precision laser-engraved geometric wood coasters.',
    itemsCount: 4,
    location: 'Sandton, Johannesburg',
    year: '2025',
    deliverables: [
      'Custom Foil-Laminated Glass Spirit Bottles with Cork Caps',
      'Precision Laser-Cut Geometric Hardwood Coasters',
      'Debossed Presentation Gift Boxes with Satin Liners',
      'Turnkey VIP Executive Gift Hamper Assembly'
    ]
  },
  {
    id: 'job-industrial-ppe-safety',
    jobCode: 'JOB #CLP-2025-04',
    title: 'Certified Industrial PPE, Eye Protection & Grip Gloves',
    client: 'Heavy Engineering & Industrial Logistics Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    coverImage: '/images/showcase/clapsa-ppe-safety-glasses-gloves.jpg',
    description: 'SABS and CE certified protective eyewear, anti-abrasion nitrile safety gloves, face shields, and heavy workwear deployment for manufacturing plants.',
    itemsCount: 5,
    location: 'Gauteng & Mpumalanga',
    year: '2025',
    deliverables: [
      'Anti-Scratch & Anti-Fog UV Protective Safety Goggles',
      'Heavy-Duty High-Grip Nitrile Coated Work Gloves',
      'Industrial Face Shield & Hearing Protection Kits',
      'SABS & ISO 9001 Compliance Certification Documentation'
    ]
  },
  {
    id: 'job-africa-map-graphic-tees',
    jobCode: 'JOB #CLP-2025-05',
    title: 'Africa Map Typography Graphic Cotton T-Shirt Series',
    client: 'Pan-African Apparel & Cultural Brand',
    category: 'apparel',
    categoryLabel: 'Graphic & Corporate Apparel',
    coverImage: '/images/showcase/clapsa-africa-graphic-tee-smile.jpg',
    description: 'Heavyweight 180gsm combed cotton graphic t-shirts featuring high-density typographical Africa map screen printing with razor-sharp micro-text clarity.',
    itemsCount: 4,
    location: 'Johannesburg, South Africa',
    year: '2025',
    deliverables: [
      '180gsm 100% Combed Cotton Heavyweight Crewneck Tees',
      'High-Density Screen & DTF Typographical Map Printing',
      'Pre-Shrunk Ring-Spun Fabric with Reinforced Double Stitching',
      'Custom Neck Labeling and Eco-Friendly Retail Bagging'
    ]
  },
  {
    id: 'job-corporate-emerald-uniforms',
    jobCode: 'JOB #CLP-2025-06',
    title: 'Emerald Green Corporate Cotton Tees with Back Logo',
    client: 'CLAPSA Official Corporate Uniforms',
    category: 'apparel',
    categoryLabel: 'Corporate Uniforms',
    coverImage: '/images/showcase/clapsa-corporate-emerald-tee-back.jpg',
    description: 'Official corporate crewneck t-shirts in vibrant emerald green with crisp white heat-seal/screen logo on upper back for staff uniformity.',
    itemsCount: 3,
    location: 'South Africa & Regional Hubs',
    year: '2025',
    deliverables: [
      '100% Premium Combed Cotton Crewneck Corporate T-Shirts',
      'Precision Screen-Printed Upper Back CLAPSA Branding',
      'Comfort Fit with Anti-Fade Color Fastness Technology',
      'Full Sizing Range (XS to 4XL) for Multi-Branch Outfitting'
    ]
  },
  {
    id: 'job-trade-expo-exhibition',
    jobCode: 'JOB #CLP-2025-07',
    title: 'Commercial Trade Exhibition Stand & Showcase Display',
    client: 'SADC Trade & Brand Exhibition',
    category: 'display',
    categoryLabel: 'Trade Displays & Signage',
    coverImage: '/images/showcase/claps-gin-exhibition-showcase.jpg',
    description: 'Custom retail exhibition booth featuring large-format dye-sublimation fabric walls, illuminated tiered product shelving, and promotional stands.',
    itemsCount: 3,
    location: 'Johannesburg & Regional SADC Hubs',
    year: '2025',
    deliverables: [
      'Vibrant Dye-Sublimation Fabric Wall & Pop-Up Backdrop Banners',
      'Custom Tiered Merchandising Display Stand with Product Shelving',
      'Illuminated Product Showcases for Glass Bottled Merchandise',
      'Turnkey Event Setup, Dismantling & Logistics Support'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- JOB 1: Sublimated Activewear ---
  {
    id: 'gal-01',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-activewear-hoodie-lifestyle.jpg',
    src: '/images/showcase/clapsa-activewear-hoodie-lifestyle.jpg',
    title: 'Athletic Zip Hoodie & Tights Lifestyle Portrait',
    description: 'High-definition dye-sublimated performance hoodie featuring striking black and red contrast patterns with custom website typography along the right sleeve.',
    tags: ['Sublimation', 'Performance Hoodie', 'Lifestyle Shoot', 'Custom Apparel'],
    specs: ['All-Over Dye-Sublimation', 'Custom Sleeve URL Branding', 'Full-Zip Athletic Cut', 'Thermal Fleece Lining'],
    location: 'Johannesburg, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-02',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'video',
    thumbnail: '/images/showcase/clapsa-activewear-hoodie-lifestyle.jpg',
    src: '/videos/clapsa-activewear-model-motion-1.mp4',
    title: 'Activewear Model Dynamic Movement Video Reel',
    description: 'Video footage demonstrating the garment movement, fabric sheen, and drape of the custom sublimated athletic tracksuit in natural daylight.',
    tags: ['Video Reel', 'Apparel in Motion', 'Sublimation Quality', 'Fabric Dynamics'],
    specs: ['1080p HD Video', '360° Movement Showcase', 'Stitch Flex Demonstration', 'Natural Sunlight Capture'],
    location: 'Johannesburg, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-03',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-sublimation-tracksuit-pose.jpg',
    src: '/images/showcase/clapsa-sublimation-tracksuit-pose.jpg',
    title: 'Precision Sleeve Print & Compression Leggings',
    description: 'Ground athletic pose showcasing sharp typography detailing on the forearm with custom URL branding, paired with matching sublimated compression tights.',
    tags: ['Sleeve Typography', 'Compression Tights', 'Outdoor Shoot', 'Activewear'],
    specs: ['Micro-Text Sharpness', 'Compression Leggings', 'Fade-Proof Inks', 'Moisture-Wicking Blend'],
    location: 'Johannesburg, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-04',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'video',
    thumbnail: '/images/showcase/clapsa-sublimation-tracksuit-pose.jpg',
    src: '/videos/clapsa-activewear-model-motion-2.mp4',
    title: 'Tracksuit Garment Motion & Fit Video Showcase',
    description: 'Video clip displaying the activewear tracksuit flexibility, stretch recovery, and rich color tone under natural outdoor sunlight.',
    tags: ['Video Clip', 'Fit & Flexibility', 'Activewear Motion', 'Color Vibrancy'],
    specs: ['1080p HD Video', 'Stretch Recovery Test', 'Seamless Fit Profiling'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },
  {
    id: 'gal-05',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-athletic-activewear-runner.jpg',
    src: '/images/showcase/clapsa-athletic-activewear-runner.jpg',
    title: 'Athletic Runner Pose on Stone Garden Path',
    description: 'Engineered for athlete movement with flexible, form-fitting stretch materials suited for outdoor corporate wellness, team sports, and fitness campaigns.',
    tags: ['Running Wear', 'Stone Path Shoot', 'Team Sports', 'Form-Fitting'],
    specs: ['4-Way Stretch Fabric', 'Athletic Fit Profile', 'Outdoor Durability', 'Reinforced Seams'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },
  {
    id: 'gal-06',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'video',
    thumbnail: '/images/showcase/clapsa-sportswear-tracksuit-motion.jpg',
    src: '/videos/clapsa-tracksuit-apparel-reel.mp4',
    title: 'Full Tracksuit Performance & Posing Video Reel',
    description: 'Behind the scenes motion video highlighting the complete tracksuit ensemble and athletic posture.',
    tags: ['Video Reel', 'Behind The Scenes', 'Apparel Quality', 'Tracksuit Set'],
    specs: ['Full HD Video', 'Dynamic Lighting Angles', 'Full Outfit Profile'],
    location: 'Johannesburg, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-07',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-sportswear-tracksuit-motion.jpg',
    src: '/images/showcase/clapsa-sportswear-tracksuit-motion.jpg',
    title: 'Full-Length Sublimated Tracksuit Motion Stance',
    description: 'Full-length presentation of the coordinated tracksuit top and bottom, demonstrating vivid color saturation and athletic cut under natural daylight.',
    tags: ['Full Set', 'Motion Stance', 'Sublimated Polyester', 'Team Apparel'],
    specs: ['Vibrant Red/Black Palette', 'Breathable Polyester', 'Custom Pattern Design', 'Full Movement Flexibility'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },
  {
    id: 'gal-08',
    jobId: 'job-sublimation-activewear',
    jobTitle: 'Custom Sublimated Athletic Tracksuits & Activewear',
    client: 'CLAPSA Activewear & Performance Line',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-fitness-crop-leggings.jpg',
    src: '/images/showcase/clapsa-fitness-crop-leggings.jpg',
    title: 'Red Athletic Crop Top & High-Waist Tights',
    description: 'Seamless sports activewear set built with high-density elastane fabric that provides firm muscle support and sleek lifestyle aesthetics.',
    tags: ['Fitness Crop Top', 'High-Waist Leggings', 'Shape Retention', 'Athletic Fit'],
    specs: ['High-Waist Compression Band', 'Vibrant Crimson Fabric', 'Shape Retention Spandex', 'Anti-Chafe Construction'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },

  // --- JOB 2: TRACE+ Event Merchandising ---
  {
    id: 'gal-09',
    jobId: 'job-trace-event-merchandise',
    jobTitle: 'TRACE+ VIP Music Festival Merchandising & QR Lanyards',
    client: 'TRACE+ International Music Tour',
    category: 'gifting',
    categoryLabel: 'Event & VIP Merchandising',
    mediaType: 'photo',
    thumbnail: '/images/showcase/trace-vip-event-lanyards.jpg',
    src: '/images/showcase/trace-vip-event-lanyards.jpg',
    title: 'TRACE+ Silk Satin VIP Event Lanyards',
    description: 'Premium event satin lanyards manufactured for the TRACE+ music festival, featuring high-density typography and scannable VIP campaign text.',
    tags: ['Event Lanyards', 'Silk Satin', 'VIP Branding', 'Campaign Merchandising'],
    specs: ['Silky Double-Sided Satin', 'Vibrant Orange/Black Ink', 'Bilingual Campaign Text', 'Heavy-Duty Hardware'],
    location: 'Pan-African Tour & Festivals',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-10',
    jobId: 'job-trace-event-merchandise',
    jobTitle: 'TRACE+ VIP Music Festival Merchandising & QR Lanyards',
    client: 'TRACE+ International Music Tour',
    category: 'gifting',
    categoryLabel: 'Event & VIP Merchandising',
    mediaType: 'photo',
    thumbnail: '/images/showcase/trace-event-wristbands-qr.jpg',
    src: '/images/showcase/trace-event-wristbands-qr.jpg',
    title: 'Interactive Scannable QR Code Event Wristbands',
    description: 'High-precision sublimation printing that keeps micro-QR codes 100% scannable by smartphone cameras for contactless ticketing and app downloads.',
    tags: ['Scannable QR', 'Contactless Access', 'Sublimated Wristbands', 'Festival Tech'],
    specs: ['Scannable Mobile QR Code', 'Anti-Fray Heat-Sealed Ends', 'Safety Breakaway Clips', '50,000+ Volume Capacity'],
    location: 'Pan-African Tour & Festivals',
    date: '2025',
    featured: true
  },

  // --- JOB 3: CLAPS Gin & Laser Coasters ---
  {
    id: 'gal-11',
    jobId: 'job-claps-gin-corporate-gifting',
    jobTitle: 'CLAPS Premium Gin & Laser-Engraved Wooden Coasters',
    client: 'Executive Corporate Launch & VIP Hamper Gifting',
    category: 'gifting',
    categoryLabel: 'Bespoke Executive Gifting',
    mediaType: 'photo',
    thumbnail: '/images/showcase/claps-premium-gin-coaster-glass.jpg',
    src: '/images/showcase/claps-premium-gin-coaster-glass.jpg',
    title: 'Artisan CLAPS Gin Bottle & Laser-Cut Geometric Coaster',
    description: 'Turnkey luxury corporate gifting package combining custom labelled artisan spirit glass bottles with precision laser-engraved geometric wood coasters.',
    tags: ['Artisan Spirits', 'Laser Cut Wood', 'Executive Gifting', 'Custom Bottle Labels'],
    specs: ['Custom Spirits Labeling', 'Laser-Cut Geometric Coasters', 'Natural Cork Finishes', 'VIP Hamper Presentation'],
    location: 'Sandton, Johannesburg',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-12',
    jobId: 'job-claps-gin-corporate-gifting',
    jobTitle: 'CLAPS Premium Gin & Laser-Engraved Wooden Coasters',
    client: 'Executive Corporate Launch & VIP Hamper Gifting',
    category: 'gifting',
    categoryLabel: 'Bespoke Executive Gifting',
    mediaType: 'photo',
    thumbnail: '/images/showcase/claps-gin-exhibition-showcase.jpg',
    src: '/images/showcase/claps-gin-exhibition-showcase.jpg',
    title: 'Exhibition Display Showcase & Product Array',
    description: 'Complete commercial booth branding featuring large format backdrop printing paired with tiered product displays for trade expos and corporate activations.',
    tags: ['Exhibition Stand', 'Product Display', 'Glass Bottles Array', 'Backdrop Banner'],
    specs: ['Tiered Merchandising Display', 'Large Format Wall Banner', 'Illuminated Bottle Showcase', 'Full Turnkey Stand Setup'],
    location: 'Sandton, Johannesburg',
    date: '2025'
  },

  // --- JOB 4: Industrial Safety PPE ---
  {
    id: 'gal-13',
    jobId: 'job-industrial-ppe-safety',
    jobTitle: 'Certified Industrial PPE, Eye Protection & Grip Gloves',
    client: 'Heavy Engineering & Industrial Logistics Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-ppe-safety-glasses-gloves.jpg',
    src: '/images/showcase/clapsa-ppe-safety-glasses-gloves.jpg',
    title: 'Certified Safety Glasses & Anti-Abrasion Nitrile Gloves',
    description: 'Model showcasing industrial-grade protective eyewear with wrap-around optical clarity paired with tactile nitrile-coated handling gloves.',
    tags: ['Industrial PPE', 'Safety Glasses', 'Nitrile Gloves', 'SABS Compliance'],
    specs: ['Anti-Fog UV Safety Glasses', 'Nitrile Microfoam Grip Gloves', 'SABS Compliant Protection', 'Ergonomic Hand Contours'],
    location: 'Gauteng & Mpumalanga',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-14',
    jobId: 'job-industrial-ppe-safety',
    jobTitle: 'Certified Industrial PPE, Eye Protection & Grip Gloves',
    client: 'Heavy Engineering & Industrial Logistics Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-ppe-safety-gear-banner.jpg',
    src: '/images/showcase/clapsa-ppe-safety-gear-banner.jpg',
    title: 'Dromex Impact Goggles & Shaded Spectacles Suite',
    description: 'Promotional deployment banner showcasing certified Dromex safety goggles and interchangeable tinted/clear protective spectacles for industrial workforces.',
    tags: ['Dromex Safety', 'Impact Goggles', 'Eye Protection', 'Dust Splash Proof'],
    specs: ['Dromex Impact Goggles', 'Shaded & Clear UV Lenses', 'Adjustable Elastic Strap', 'Chemical & Dust Splash Proof'],
    location: 'Gauteng & Mpumalanga',
    date: '2025'
  },
  {
    id: 'gal-15',
    jobId: 'job-industrial-ppe-safety',
    jobTitle: 'Certified Industrial PPE, Eye Protection & Grip Gloves',
    client: 'Heavy Engineering & Industrial Logistics Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-security-ppe-full-kit.jpg',
    src: '/images/showcase/clapsa-security-ppe-full-kit.jpg',
    title: 'Turnkey Head, Face & Hearing Safety Gear Kit',
    description: 'Comprehensive personal safety package providing combined respiratory, acoustic, visual, and thermal protective workwear for demanding job sites.',
    tags: ['Full Safety Kit', 'Face Shield', 'Hearing Protection', 'Site Safety'],
    specs: ['Face Shield & Ear Muff Kit', 'Wide-Vision Safety Goggles', 'Sublimated Team Jersey', 'SABS Approved Gear'],
    location: 'Gauteng & Mpumalanga',
    date: '2025'
  },
  {
    id: 'gal-16',
    jobId: 'job-industrial-ppe-safety',
    jobTitle: 'Certified Industrial PPE, Eye Protection & Grip Gloves',
    client: 'Heavy Engineering & Industrial Logistics Group',
    category: 'ppe',
    categoryLabel: 'Industrial PPE & Safety',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-workwear-cat-boots-banner.jpg',
    src: '/images/showcase/clapsa-workwear-cat-boots-banner.jpg',
    title: 'Industrial Heavy-Duty Caterpillar S3 Safety Footwear',
    description: 'Genuine Caterpillar steel-toe and composite safety boots engineered for mining, construction, and heavy plant operations.',
    tags: ['Caterpillar Boots', 'S3 Safety Footwear', 'Steel Toe', 'Mining Boots'],
    specs: ['S3 Steel-Toe Protection', 'Dual-Density Slip-Resistant Soles', 'Shock-Absorbing Midsole', 'SABS Certified'],
    location: 'Gauteng & Mpumalanga',
    date: '2025'
  },

  // --- JOB 5: Africa Map Graphic Tees ---
  {
    id: 'gal-17',
    jobId: 'job-africa-map-graphic-tees',
    jobTitle: 'Africa Map Typography Graphic Cotton T-Shirt Series',
    client: 'Pan-African Apparel & Cultural Brand',
    category: 'apparel',
    categoryLabel: 'Graphic & Corporate Apparel',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-africa-graphic-tee-smile.jpg',
    src: '/images/showcase/clapsa-africa-graphic-tee-smile.jpg',
    title: 'Africa Map Typographical Graphic Cotton Tee',
    description: 'Graphic screen-printed crewneck tee featuring all African nations artfully shaped into the continental silhouette with fine micro-typography.',
    tags: ['Africa Map', 'Graphic T-Shirt', 'Screen Print', '180gsm Cotton'],
    specs: ['180gsm Combed Cotton', 'Intricate Word Cloud Map', 'Soft-Hand Screen Print', 'Pre-Shrunk Ring-Spun'],
    location: 'Johannesburg, South Africa',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-18',
    jobId: 'job-africa-map-graphic-tees',
    jobTitle: 'Africa Map Typography Graphic Cotton T-Shirt Series',
    client: 'Pan-African Apparel & Cultural Brand',
    category: 'apparel',
    categoryLabel: 'Graphic & Corporate Apparel',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-africa-map-tshirt-walkway.jpg',
    src: '/images/showcase/clapsa-africa-map-tshirt-walkway.jpg',
    title: 'Continental Graphic Tee Bridge Walkway Full-Length',
    description: 'Urban outdoor lifestyle showcase displaying drape, color balance, and crisp chest artwork under bright daylight conditions.',
    tags: ['Bridge Walkway', 'Urban Shoot', 'Graphic Apparel', 'Drape & Fit'],
    specs: ['Reinforced Double Stitching', 'Fade-Resistant Pigments', 'Breathable Natural Cotton', 'Contemporary Fit'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },
  {
    id: 'gal-19',
    jobId: 'job-africa-map-graphic-tees',
    jobTitle: 'Africa Map Typography Graphic Cotton T-Shirt Series',
    client: 'Pan-African Apparel & Cultural Brand',
    category: 'apparel',
    categoryLabel: 'Graphic & Corporate Apparel',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-custom-graphic-tee-deck.jpg',
    src: '/images/showcase/clapsa-custom-graphic-tee-deck.jpg',
    title: 'Seated Deck Perspective & Screen Print Longevity',
    description: 'Detailed showcase of print longevity and crisp edge resolution on heavy cotton jerseys, ideal for brand launches and university campaigns.',
    tags: ['Deck Perspective', 'High Contrast', 'Screen Print Longevity', 'Heavy Jersey'],
    specs: ['High-Contrast Monochrome', 'Soft-Touch Plastisol', 'Non-Deforming Collar', 'Multi-Size Range (S-4XL)'],
    location: 'Johannesburg, South Africa',
    date: '2025'
  },

  // --- JOB 6: Corporate Emerald Uniforms ---
  {
    id: 'gal-20',
    jobId: 'job-corporate-emerald-uniforms',
    jobTitle: 'Emerald Green Corporate Cotton Tees with Back Logo',
    client: 'CLAPSA Official Corporate Uniforms',
    category: 'apparel',
    categoryLabel: 'Corporate Uniforms',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-corporate-emerald-tee-back.jpg',
    src: '/images/showcase/clapsa-corporate-emerald-tee-back.jpg',
    title: 'Emerald Green Corporate Tee with Official Upper Back Logo',
    description: 'Official corporate crewneck t-shirt featuring crisp white heat-seal/screen logo on the upper back neck, demonstrating precision corporate uniformity.',
    tags: ['Corporate Uniform', 'Emerald Green', 'Back Logo Print', 'Brand Identity'],
    specs: ['Official White Logo Print', 'Vibrant Emerald Colorway', '100% Combed Cotton', 'Reinforced Neck Tape'],
    location: 'South Africa & Regional Hubs',
    date: '2025',
    featured: true
  },
  {
    id: 'gal-21',
    jobId: 'job-corporate-emerald-uniforms',
    jobTitle: 'Emerald Green Corporate Cotton Tees with Back Logo',
    client: 'CLAPSA Official Corporate Uniforms',
    category: 'apparel',
    categoryLabel: 'Corporate Uniforms',
    mediaType: 'photo',
    thumbnail: '/images/showcase/clapsa-corporate-new-arrivals-banner.jpg',
    src: '/images/showcase/clapsa-corporate-new-arrivals-banner.jpg',
    title: 'Corporate Apparel & Multi-Product Uniform Range',
    description: 'Promotional portfolio banner featuring custom collared corporate golfers, track jackets, and team uniforms manufactured for corporate clients.',
    tags: ['Multi-Product Range', 'Corporate Golfers', 'Track Jackets', 'Turnkey Uniforms'],
    specs: ['Custom Color Block Golfers', 'Track Jackets with Piping', 'Embroidery & Screen Printing', 'SADC Distribution'],
    location: 'South Africa & Regional Hubs',
    date: '2025'
  },

  // --- JOB 7: Trade Expo Exhibition & Plant Facility ---
  {
    id: 'gal-22',
    jobId: 'job-trade-expo-exhibition',
    jobTitle: 'Commercial Trade Exhibition Stand & Showcase Display',
    client: 'SADC Trade & Brand Exhibition',
    category: 'display',
    categoryLabel: 'Trade Displays & Signage',
    mediaType: 'video',
    thumbnail: '/images/showcase/claps-gin-exhibition-showcase.jpg',
    src: '/videos/clapsa-production-facility-walkthrough.mp4',
    title: 'Production Plant & Regional Facility Walkthrough',
    description: 'Video walkthrough of the manufacturing operations, warehouse supply chains, and industrial facility supporting CLAPSA deployments.',
    tags: ['Facility Video', 'Manufacturing Plant', 'Logistics Infrastructure', 'SADC Supply Hub'],
    specs: ['1080p HD Walkthrough', 'Industrial Plant Footage', 'Warehousing Infrastructure'],
    location: 'Johannesburg & Regional SADC Hubs',
    date: '2025',
    featured: true
  }
];
