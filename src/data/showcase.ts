export type ShowcaseCategory = 'all' | 'sportswear' | 'apparel' | 'gifting' | 'ppe';

export interface ShowcaseItem {
  id: string;
  title: string;
  category: ShowcaseCategory;
  categoryLabel: string;
  badge: string;
  image: string;
  aspectRatio: 'portrait' | 'square' | 'landscape';
  clientOrContext: string;
  highlights: string[];
  description: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  // 1. Sportswear & Sublimation
  {
    id: 'activewear-hoodie-lifestyle',
    title: 'Custom Sublimated Athletic Zip Hoodie',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Custom Sublimation',
    image: '/images/showcase/clapsa-activewear-hoodie-lifestyle.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'CLAPSA Activewear Line',
    highlights: ['All-Over Dye-Sublimation', 'Custom Sleeve URL Branding', 'Full-Zip Athletic Cut', 'Thermal Fleece Lining'],
    description: 'High-definition dye-sublimated performance hoodie featuring striking black and red contrast patterns with custom website typography along the right sleeve.'
  },
  {
    id: 'sublimation-tracksuit-pose',
    title: 'Precision Sleeve Print & Athletic Tracksuit',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Sleeve Typography',
    image: '/images/showcase/clapsa-sublimation-tracksuit-pose.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Custom Performance Apparel',
    highlights: ['Micro-Text Sharpness', 'Compression Leggings', 'Fade-Proof Inks', 'Moisture-Wicking Blend'],
    description: 'Showcasing razor-sharp typography detailing on the forearm with custom URL branding, paired with matching sublimated compression tights.'
  },
  {
    id: 'athletic-activewear-runner',
    title: 'Outdoor Activewear & Performance Leggings',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Performance Wear',
    image: '/images/showcase/clapsa-athletic-activewear-runner.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Fitness & Teamwear Outfitting',
    highlights: ['4-Way Stretch Fabric', 'Athletic Fit Profile', 'Outdoor Durability', 'Reinforced Seams'],
    description: 'Engineered for athlete movement with flexible, form-fitting stretch materials suited for outdoor corporate wellness, team sports, and fitness campaigns.'
  },
  {
    id: 'sportswear-tracksuit-motion',
    title: 'Dynamic Sublimated Tracksuit in Motion',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Sublimated Set',
    image: '/images/showcase/clapsa-sportswear-tracksuit-motion.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Athletic Club Division',
    highlights: ['Vibrant Red/Black Palette', 'Breathable Polyester', 'Custom Pattern Design', 'Full Movement Flexibility'],
    description: 'Full-length presentation of the coordinated tracksuit top and bottom, demonstrating vivid color saturation and athletic cut under natural daylight.'
  },
  {
    id: 'fitness-crop-leggings',
    title: 'Bespoke Fitness Tops & High-Waist Tights',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Sublimation',
    badge: 'Athletic Wear',
    image: '/images/showcase/clapsa-fitness-crop-leggings.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Lifestyle Activewear Collection',
    highlights: ['High-Waist Compression Band', 'Vibrant Crimson Fabric', 'Shape Retention Spandex', 'Anti-Chafe Construction'],
    description: 'Seamless sports activewear set built with high-density elastane fabric that provides firm muscle support and sleek lifestyle aesthetics.'
  },

  // 2. Corporate & Graphic Apparel
  {
    id: 'africa-graphic-tee-smile',
    title: 'Africa Map Typographical Graphic T-Shirt',
    category: 'apparel',
    categoryLabel: 'Corporate & Graphic Apparel',
    badge: 'High-Density Print',
    image: '/images/showcase/clapsa-africa-graphic-tee-smile.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Pan-African Apparel Line',
    highlights: ['180gsm Combed Cotton', 'Intricate Word Cloud Map', 'Soft-Hand Screen Print', 'Pre-Shrunk Ring-Spun'],
    description: 'Graphic screen-printed crewneck tee featuring all African nations artfully shaped into the continental silhouette with fine micro-typography.'
  },
  {
    id: 'africa-map-tshirt-walkway',
    title: 'Continental Graphic Tee Urban Lifestyle Shoot',
    category: 'apparel',
    categoryLabel: 'Corporate & Graphic Apparel',
    badge: 'Urban Lifestyle',
    image: '/images/showcase/clapsa-africa-map-tshirt-walkway.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Brand Merchandising Collection',
    highlights: ['Reinforced Double Stitching', 'Fade-Resistant Pigments', 'Breathable Natural Cotton', 'Contemporary Fit'],
    description: 'Urban outdoor lifestyle showcase displaying drape, color balance, and crisp chest artwork under bright daylight conditions.'
  },
  {
    id: 'custom-graphic-tee-deck',
    title: 'High-Contrast Screen Printed Cotton Tee',
    category: 'apparel',
    categoryLabel: 'Corporate & Graphic Apparel',
    badge: 'Screen Printing',
    image: '/images/showcase/clapsa-custom-graphic-tee-deck.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Custom Graphic Merchandising',
    highlights: ['High-Contrast Monochrome', 'Soft-Touch Plastisol', 'Non-Deforming Collar', 'Multi-Size Range (S-4XL)'],
    description: 'Detailed showcase of print longevity and crisp edge resolution on heavy cotton jerseys, ideal for brand launches and university campaigns.'
  },
  {
    id: 'corporate-emerald-tee-back',
    title: 'Emerald Green Corporate Tee with Upper Back Logo',
    category: 'apparel',
    categoryLabel: 'Corporate & Graphic Apparel',
    badge: 'Corporate Branding',
    image: '/images/showcase/clapsa-corporate-emerald-tee-back.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'CLAPSA Corporate Staff Wardrobe',
    highlights: ['Official White Logo Print', 'Vibrant Emerald Colorway', '100% Combed Cotton', 'Reinforced Neck Tape'],
    description: 'Official corporate crewneck t-shirt featuring crisp white heat-seal/screen logo on the upper back neck, demonstrating precision corporate uniformity.'
  },

  // 3. Event Merchandising & Bespoke Gifting
  {
    id: 'trace-vip-event-lanyards',
    title: 'TRACE+ VIP Satin Sublimated Event Lanyards',
    category: 'gifting',
    categoryLabel: 'Event & Gifting Merchandise',
    badge: 'VIP Event Branding',
    image: '/images/showcase/trace-vip-event-lanyards.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'TRACE+ International Music Event',
    highlights: ['Silky Double-Sided Satin', 'Vibrant Orange/Black Ink', 'Bilingual Campaign Text', 'Heavy-Duty Hardware'],
    description: 'Premium event satin lanyards manufactured for the TRACE+ music festival, featuring high-density typography and scannable VIP campaign text.'
  },
  {
    id: 'trace-event-wristbands-qr',
    title: 'Interactive QR Code Access Lanyards & Wristbands',
    category: 'gifting',
    categoryLabel: 'Event & Gifting Merchandise',
    badge: 'Scannable QR Codes',
    image: '/images/showcase/trace-event-wristbands-qr.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'TRACE+ Digital Access Campaign',
    highlights: ['Scannable Mobile QR Code', 'Anti-Fray Heat-Sealed Ends', 'Safety Breakaway Clips', '50,000+ Volume Capacity'],
    description: 'High-precision sublimation printing that keeps micro-QR codes 100% scannable by smartphone cameras for contactless ticketing and app downloads.'
  },
  {
    id: 'claps-premium-gin-coaster-glass',
    title: 'CLAPS Premium Gin & Laser-Cut Wooden Coasters',
    category: 'gifting',
    categoryLabel: 'Event & Gifting Merchandise',
    badge: 'Bespoke Executive Gift',
    image: '/images/showcase/claps-premium-gin-coaster-glass.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Executive Corporate Gifting',
    highlights: ['Custom Spirits Labeling', 'Laser-Cut Geometric Coasters', 'Natural Cork Finishes', 'VIP Hamper Presentation'],
    description: 'Turnkey luxury corporate gifting package combining custom labelled artisan spirit glass bottles with precision laser-engraved geometric wood coasters.'
  },
  {
    id: 'claps-gin-exhibition-showcase',
    title: 'Commercial Exhibition Stand & Product Display',
    category: 'gifting',
    categoryLabel: 'Event & Gifting Merchandise',
    badge: 'Trade Exhibition',
    image: '/images/showcase/claps-gin-exhibition-showcase.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'SADC Trade & Brand Expo',
    highlights: ['Tiered Merchandising Display', 'Large Format Wall Banner', 'Illuminated Bottle Showcase', 'Full Turnkey Stand Setup'],
    description: 'Complete commercial booth branding featuring large format backdrop printing paired with tiered product displays for trade expos and corporate activations.'
  },

  // 4. Safety Gear & PPE
  {
    id: 'ppe-safety-glasses-gloves',
    title: 'Certified Safety Eyewear & Heavy Grip Nitrile Gloves',
    category: 'ppe',
    categoryLabel: 'Safety Gear & Industrial PPE',
    badge: 'Certified Industrial PPE',
    image: '/images/showcase/clapsa-ppe-safety-glasses-gloves.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Heavy Engineering & Industrial Safety',
    highlights: ['Anti-Fog UV Safety Glasses', 'Nitrile Microfoam Grip Gloves', 'SABS Compliant Protection', 'Ergonomic Hand Contours'],
    description: 'Model showcasing industrial-grade protective eyewear with wrap-around optical clarity paired with tactile nitrile-coated handling gloves.'
  },
  {
    id: 'ppe-safety-gear-banner',
    title: 'Industrial Eye Protection & Protective Eyewear Suite',
    category: 'ppe',
    categoryLabel: 'Safety Gear & Industrial PPE',
    badge: 'Dromex Certified',
    image: '/images/showcase/clapsa-ppe-safety-gear-banner.jpg',
    aspectRatio: 'landscape',
    clientOrContext: 'Workplace Safety Compliance',
    highlights: ['Dromex Impact Goggles', 'Shaded & Clear UV Lenses', 'Adjustable Elastic Strap', 'Chemical & Dust Splash Proof'],
    description: 'Promotional deployment banner showcasing certified Dromex safety goggles and interchangeable tinted/clear protective spectacles for industrial workforces.'
  },
  {
    id: 'security-ppe-full-kit',
    title: 'Full Head & Hearing Protection Safety Kit',
    category: 'ppe',
    categoryLabel: 'Safety Gear & Industrial PPE',
    badge: 'Turnkey PPE Kit',
    image: '/images/showcase/clapsa-security-ppe-full-kit.jpg',
    aspectRatio: 'square',
    clientOrContext: 'Security & Industrial Site Supply',
    highlights: ['Face Shield & Ear Muff Kit', 'Wide-Vision Safety Goggles', 'Sublimated Team Jersey', 'SABS Approved Gear'],
    description: 'Comprehensive personal safety package providing combined respiratory, acoustic, visual, and thermal protective workwear for demanding job sites.'
  }
];
