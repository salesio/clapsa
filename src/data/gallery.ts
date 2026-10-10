export type MediaCategory = 'all' | 'campaigns' | 'corporate' | 'ppe' | 'printing' | 'signage' | 'gifting' | 'sportswear' | 'display';
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
    "id": "job-standard-bank",
    "jobCode": "JOB #CLP-2025-SB",
    "title": "Standard Bank SADC Corporate Summits & Executive Gifting",
    "client": "Standard Bank Group SADC",
    "category": "corporate",
    "categoryLabel": "Corporate Banking & Financial Merchandising",
    "coverImage": "/images/gallery/thumbs/executive-pique-golf-shirts-embroidery.webp",
    "description": "Executive corporate outfitting, dual-tone pique cotton golf shirts, silk-satin sublimated conference lanyards, luxury hot-foil embossed kraft presentation hampers, and branded sports drinkware for regional financial conferences.",
    "itemsCount": 5,
    "location": "Sandton (South Africa) & Maputo (Mozambique)",
    "year": "2025",
    "deliverables": [
      "220gsm Combed Pique Cotton Executive Golf Shirts with Fine Crest Embroidery",
      "Dual-Sided Silk Satin Sublimated Conference Lanyards with Breakaways",
      "Luxury 250gsm Eco-Kraft Presentation Carrier Bags with Gold Foil Stamping",
      "Cobalt Blue 750ml Food-Grade Athletic Water Bottles"
    ]
  },
  {
    "id": "job-gauteng-province",
    "jobCode": "JOB #CLP-2024-GTG",
    "title": "Gauteng Provincial Government & Heavy Industrial PPE",
    "client": "Gauteng Provincial Government (SACR)",
    "category": "ppe",
    "categoryLabel": "Government Workwear & Industrial Safety",
    "coverImage": "/images/gallery/thumbs/gauteng-province-flame-retardant-conti-suits.webp",
    "description": "Supply of SABS certified D59 flame-retardant and acid-resistant two-piece continental work suits, official sports & culture athletic tracksuits, activewear, and steel-toe safety footwear.",
    "itemsCount": 4,
    "location": "Gauteng, South Africa",
    "year": "2024 - 2025",
    "deliverables": [
      "100% Cotton D59 Flame & Acid Retardant 2-Piece Conti Suits",
      "SABS 434 Approved Workwear with Official Department Crests",
      "Provincial Sports & Recreation Fleece Tracksuits with Piping",
      "SABS Certified Steel-Toe Caterpillar Industrial Safety Work Boots"
    ]
  },
  {
    "id": "job-albany-bakeries",
    "jobCode": "JOB #CLP-2025-ALB",
    "title": "Albany Bakeries High-Speed Carousel Screen Printing",
    "client": "Albany Bakeries (Tiger Brands FMCG)",
    "category": "printing",
    "categoryLabel": "High-Volume Textile Screen Printing",
    "coverImage": "/images/gallery/thumbs/albany-bakeries-promo-tshirts.webp",
    "description": "High-capacity automated carousel textile screen printing of promotional t-shirts, bakery staff apparel, marathon race shirts, and full-color DTF gang sheets with wash-tested plastisol and silicone inks.",
    "itemsCount": 5,
    "location": "Sandton & National FMCG Facilities",
    "year": "2025",
    "deliverables": [
      "12-Color Automated Carousel Precision Screen Printing Runs",
      "Eco-Plastisol Soft-Hand Inks Engineered for 60\u00b0C Industrial Washing",
      "Full-Color High-Definition Direct-to-Film (DTF) Heat Transfers",
      "High-Performance 100% Moisture-Wicking Marathon Race T-Shirts"
    ]
  },
  {
    "id": "job-g4s-security",
    "jobCode": "JOB #CLP-2025-G4S",
    "title": "G4S Secure Solutions SADC Tactical Armor & Workwear",
    "client": "G4S Secure Solutions SADC",
    "category": "ppe",
    "categoryLabel": "Tactical Security & Ballistic Apparel",
    "coverImage": "/images/gallery/thumbs/g4s-security-tactical-ballistic-vest.webp",
    "description": "Manufacturing of heavy-duty ballistic armor carriers, tactical plate carriers, and high-visibility security patrol vests featuring precision embroidery of G4S corporate insignias and high-intensity reflective banding.",
    "itemsCount": 4,
    "location": "Johannesburg, Gaborone & Maputo",
    "year": "2025",
    "deliverables": [
      "1000D Cordura Heavy Ballistic Body Armor Outer Carrier Vests",
      "High-Density Direct Thread Corporate Logo Embroidery",
      "SABS 1519 Certified Silver & Lime High-Visibility Reflective Tapes",
      "MOLLE Compatible Tactical Equipment Webbing & Holster Points"
    ]
  },
  {
    "id": "job-trans-sadc-signs",
    "jobCode": "JOB #CLP-2025-SGN",
    "title": "Trans-SADC Highway & Civil Road Safety Signage",
    "client": "SADC Road Maintenance & Civil Infrastructure",
    "category": "signage",
    "categoryLabel": "Highway & Traffic Safety Signage",
    "coverImage": "/images/gallery/thumbs/desvio-reflective-chevron-road-signs.webp",
    "description": "Class 1 & 2 engineering-grade retro-reflective highway detour chevron signs ('Desvio'), heavy-gauge galvanized A-frame support stands, high-density traffic cones, and weatherproof correx job site boards.",
    "itemsCount": 5,
    "location": "Maputo Corridor & Regional SADC Highway Routes",
    "year": "2025",
    "deliverables": [
      "Class 2 High-Intensity Prismatic Detour Chevron Signs ('Desvio')",
      "Hot-Dip Galvanized Angle-Iron Foldable Sign Support A-Frames",
      "750mm UV-Stabilized Flexible PVC Traffic Cones with Weighted Bases",
      "Triangular Construction Hazard Signs & Outdoor Site Boards"
    ]
  },
  {
    "id": "job-sadc-logistics",
    "jobCode": "JOB #CLP-2025-LOG",
    "title": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "CLAPSA Regional Freight & Beverage Reserve",
    "category": "gifting",
    "categoryLabel": "Cross-Border Logistics & Packaging",
    "coverImage": "/images/gallery/thumbs/shipping-container-clapsa-export-freight.webp",
    "description": "Complete cross-border maritime container freight stuffing, automated pallet film-wrapping, tamper-evident security transit courier bags, fleet graphics, and bespoke beverage packaging for regional export distribution.",
    "itemsCount": 6,
    "location": "SADC Transit Corridors (SA, Mozambique, Botswana, Zimbabwe)",
    "year": "2024 - 2025",
    "deliverables": [
      "40ft Full Maritime Container Export Packing & Phytosanitary Freight",
      "Multi-Layer Co-Extruded Tamper-Evident High-Security Courier Transit Bags",
      "CLAPS Premium Gin Embossed Gold-Foil Presentation Packaging",
      "Commercial Vinyl Fleet Vehicle Branding & Contour Cut Graphics"
    ]
  },
  {
    "id": "job-movitel-telecom",
    "jobCode": "JOB #CLP-2025-MVT",
    "title": "Movitel Telecom Brand Activation, Uniforms & Field Swag",
    "client": "Movitel Mo\u00e7ambique & Regional Telecom Partners",
    "category": "display",
    "categoryLabel": "Telecom Activation & Field Uniforms",
    "coverImage": "/images/gallery/thumbs/elaxo-sublimated-gazebo-and-tablecloth.webp",
    "description": "High-impact turnkey brand activation suites for national telecommunications roadshows, featuring heavy-duty sublimated event gazebos, fitted tablecloths, promotional ambassador trucker caps, and event display counters.",
    "itemsCount": 5,
    "location": "National SADC Telecom Corridors",
    "year": "2025",
    "deliverables": [
      "3x3m Commercial Waterproof Sublimated Pop-Up Gazebos & Tablecloths",
      "Custom Fitted Sublimated Activation Counters & Display Tables",
      "Dual-Tone Foam Trucker Caps for Promotional Brand Ambassadors",
      "Full Event Merchandise Suites & Ambassador Kits"
    ]
  },
  {
    "id": "job-frelimo-campaign",
    "jobCode": "JOB #CLP-2024-FRL",
    "title": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO (Frente de Liberta\u00e7\u00e3o de Mo\u00e7ambique)",
    "category": "campaigns",
    "categoryLabel": "Electoral Campaigns & Civic Apparel",
    "coverImage": "/images/gallery/thumbs/frelimo-daniel-chapo-campaign-kit.webp",
    "description": "Turnkey manufacturing and high-volume distribution of official presidential campaign merchandise across Mozambique, including custom embroidered polo shirts, 6-panel caps, water-resistant drawstring backpacks, and traditional campaign bandanas (capulanas).",
    "itemsCount": 6,
    "location": "Maputo & All Mozambique Provinces",
    "year": "2024",
    "deliverables": [
      "Heavyweight Red Combed Cotton Polo Shirts with 3D Embroidered Crests",
      "Matching 6-Panel Brushed Cotton Caps with Multi-Placement Embroidery",
      "Waterproof 210D Polyester Drawstring Backpacks with High-Density Prints",
      "Custom Printed Triangular Campaign Bandanas & Satin Scarves"
    ]
  },
  {
    "id": "job-cad-campaign",
    "jobCode": "JOB #CLP-2024-CAD",
    "title": "CAD & Ven\u00e2ncio Mondlane Electoral Displays & Promotional Gear",
    "client": "CAD (Coliga\u00e7\u00e3o Alian\u00e7a Democr\u00e1tica) & Ven\u00e2ncio Mondlane",
    "category": "campaigns",
    "categoryLabel": "Political Campaigns & Event Displays",
    "coverImage": "/images/gallery/thumbs/cad-venancio-mondlane-rollup-banner.webp",
    "description": "Design, large-format precision digital printing, and assembly of official campaign roll-up banner stands, acrylic podium branding, and event merchandise stamped with official CLAPSA production pedigree (dby: www.clapsa.co.za).",
    "itemsCount": 4,
    "location": "Maputo & National Campaign Corridors",
    "year": "2024",
    "deliverables": [
      "Commercial Heavy-Base Aluminum Roll-Up Pull-Up Display Banners",
      "Anti-Glare UV-Protected Polypropylene Graphic Media Substrates",
      "Custom Acrylic Presentation Podiums & Stage Branding",
      "Official Campaign Brochures & Printed Rally Promotional Material"
    ]
  },
  {
    "id": "job-renamo-campaign",
    "jobCode": "JOB #CLP-2024-RNM",
    "title": "RENAMO Official Party Uniforms, Embroidered Polos & Caps",
    "client": "RENAMO (Resist\u00eancia Nacional Mo\u00e7ambicana)",
    "category": "campaigns",
    "categoryLabel": "Party Apparel & Embroidered Headwear",
    "coverImage": "/images/gallery/thumbs/renamo-blue-embroidered-polo-shirt.webp",
    "description": "Production of official royal blue political party apparel featuring precision multi-color thread embroidery of the iconic RENAMO partridge symbol across conference polo shirts, structured 6-panel caps, and grassroots rally tees.",
    "itemsCount": 4,
    "location": "Maputo, Beira & Nampula, Mo\u00e7ambique",
    "year": "2024",
    "deliverables": [
      "Royal Blue Pique Cotton Conference Polo Shirts with Embroidered Crests",
      "Structured 6-Panel Brushed Cotton Caps with Embroidered Partridge Insignia",
      "Grassroots Civic Campaign Ambassador Cotton T-Shirts",
      "Colorfast Dyes Engineered for Long-Term Outdoor Sunlight Resistance"
    ]
  },
  {
    "id": "job-tropigalia",
    "jobCode": "JOB #CLP-2024-TRP",
    "title": "Tropigalia Mo\u00e7ambique Corporate Stationery & Executive Swag",
    "client": "Tropigalia Mo\u00e7ambique",
    "category": "gifting",
    "categoryLabel": "Promotional Stationery & Distribution",
    "coverImage": "/images/gallery/thumbs/tropigalia-branded-pens-bulk.webp",
    "description": "Mass production pad printing and laser engraving of commercial promotional ballpoint pens, executive writing sets, and corporate desk stationery for FMCG distribution across Mozambique retail networks.",
    "itemsCount": 2,
    "location": "Maputo, Mo\u00e7ambique",
    "year": "2024",
    "deliverables": [
      "Pad-Printed Retractable Metallic Ballpoint Pens with German Ink Refills",
      "Bespoke High-Volume Packaging & Retail Display Dispensers",
      "Scratch-Resistant Multi-Pass UV Pad Printing Inks",
      "Executive Commemorative Metal Ballpoints with Silver Trim"
    ]
  },
  {
    "id": "job-unicef-humanitarian",
    "jobCode": "JOB #CLP-2024-UNC",
    "title": "UNICEF & UN Regional Humanitarian Relief Programs",
    "client": "UNICEF, UNHCR & UN Women Missions",
    "category": "campaigns",
    "categoryLabel": "Humanitarian Relief & Civic Supplies",
    "coverImage": "/images/gallery/thumbs/unicef-mec-aprender-melhor-tote-bag.webp",
    "description": "Manufacturing and export distribution of educational cotton canvas totes for school programs, humanitarian relief t-shirts, reflective emergency field vests, and commemorative advocacy writing sets across Mozambique and SADC.",
    "itemsCount": 5,
    "location": "Mozambique, Zimbabwe & SADC Mission Centers",
    "year": "2024",
    "deliverables": [
      "Eco-Friendly 280gsm Unbleached Blue Cotton Canvas School Totes",
      "Screen-Printed UNHCR Cobalt Blue Humanitarian Mission T-Shirts",
      "Flame-Retardant Reflective Emergency Responder Overvests",
      "Advocacy Metal Ballpoint Writing Sets with Laser Engraving"
    ]
  },
  {
    "id": "job-mera-malawi",
    "jobCode": "JOB #CLP-2025-MRA",
    "title": "MERA Malawi Energy Authority Diplomatic Uniforms",
    "client": "Malawi Energy Regulatory Authority (MERA)",
    "category": "corporate",
    "categoryLabel": "Diplomatic & Government Regalia",
    "coverImage": "/images/gallery/thumbs/mera-malawi-energy-regulatory-uniforms.webp",
    "description": "High-specification institutional uniform program featuring intricate multi-color emblem crest embroidery, custom-dyed poly-cotton work shirts, and executive diplomatic ties and headwear.",
    "itemsCount": 3,
    "location": "Lilongwe, Malawi & SADC Regional Trade",
    "year": "2025",
    "deliverables": [
      "Custom-Dyed Poly-Cotton Diplomatic Uniform Shirts with Epaulettes",
      "High-Precision 50,000-Stitch Tajima Machine Emblem Embroidery",
      "Executive Woven Silk Corporate Ties with Monogram Accents",
      "Matching Wool-Blend Berets & Formal Regalia"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    "id": "item-standard-bank-identity",
    "jobId": "job-standard-bank",
    "jobTitle": "Standard Bank SADC Corporate Summits & Executive Gifting",
    "client": "Standard Bank Group",
    "category": "corporate",
    "categoryLabel": "Brand Identity",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/standard-bank-corporate-identity.webp",
    "src": "/images/gallery/standard-bank-corporate-identity.webp",
    "title": "Standard Bank Brand Color Standard & Logo Calibration",
    "description": "Official Standard Bank cobalt blue Pantone swatch calibration and thread matching for regional banking apparel and promotional items.",
    "tags": [
      "Standard Bank",
      "Brand Standards",
      "Pantone Matching",
      "Corporate"
    ],
    "specs": [
      "Pantone 286 C Precision Calibration",
      "Madeira Rayon Thread Match",
      "Corporate Identity Compliance"
    ],
    "location": "Johannesburg, South Africa",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-standard-bank-golf-shirts",
    "jobId": "job-standard-bank",
    "jobTitle": "Standard Bank SADC Corporate Summits & Executive Gifting",
    "client": "Standard Bank Group",
    "category": "corporate",
    "categoryLabel": "Executive Golf Shirts",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/executive-pique-golf-shirts-embroidery.webp",
    "src": "/images/gallery/executive-pique-golf-shirts-embroidery.webp",
    "title": "Executive Combed Pique Golf Shirts with Shield Embroidery",
    "description": "Premium 220gsm double-mercerized combed pique golf shirts in navy and royal blue, featuring the iconic Standard Bank shield crest on left chest.",
    "tags": [
      "Standard Bank",
      "Golf Shirts",
      "Embroidery",
      "Corporate Apparel"
    ],
    "specs": [
      "220gsm Mercerized Combed Cotton",
      "High-Definition 15,000-Stitch Crest",
      "Anti-Pilling & Pre-Shrunk Finish"
    ],
    "location": "Sandton & Maputo",
    "date": "2025"
  },
  {
    "id": "item-standard-bank-lanyards",
    "jobId": "job-standard-bank",
    "jobTitle": "Standard Bank SADC Corporate Summits & Executive Gifting",
    "client": "Standard Bank Group",
    "category": "corporate",
    "categoryLabel": "Summit Lanyards",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/siemens-matla-satin-sublimated-lanyards.webp",
    "src": "/images/gallery/siemens-matla-satin-sublimated-lanyards.webp",
    "title": "Dual-Sided Silk Satin Sublimated Summit Lanyards",
    "description": "Ultra-smooth 20mm silk satin lanyard with dual-sided full-color sublimation print, quick-release safety breakaway buckle, and chrome trigger clip.",
    "tags": [
      "Lanyards",
      "Summit",
      "Sublimation",
      "Corporate Swag"
    ],
    "specs": [
      "20mm High-Density Silk Satin",
      "Ergonomic Safety Breakaway",
      "Heavy-Duty Chrome Swivel Snap Hook"
    ],
    "location": "Sandton Convention Centre",
    "date": "2025"
  },
  {
    "id": "item-standard-bank-gift-bags",
    "jobId": "job-standard-bank",
    "jobTitle": "Standard Bank SADC Corporate Summits & Executive Gifting",
    "client": "Standard Bank Group",
    "category": "gifting",
    "categoryLabel": "Luxury Gift Bags",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/mantra-kraft-luxury-gift-bags.webp",
    "src": "/images/gallery/mantra-kraft-luxury-gift-bags.webp",
    "title": "Luxury Eco-Kraft Gift Bags with Metallic Foil Stamping",
    "description": "Heavyweight 250gsm ribbed recycled kraft gift carriers with hot-stamped metallic foil logos and twisted cotton rope handles for executive VIP hampers.",
    "tags": [
      "Gift Bags",
      "Packaging",
      "Foil Stamping",
      "Executive Gifting"
    ],
    "specs": [
      "250gsm FSC-Certified Recycled Kraft",
      "Hot Foil Stamped Embellishment",
      "Braided Cotton Rope Handles"
    ],
    "location": "Sandton, South Africa",
    "date": "2025"
  },
  {
    "id": "item-standard-bank-water-bottles",
    "jobId": "job-standard-bank",
    "jobTitle": "Standard Bank SADC Corporate Summits & Executive Gifting",
    "client": "Standard Bank Group",
    "category": "gifting",
    "categoryLabel": "Corporate Drinkware",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/sports-drinkware-water-bottles.webp",
    "src": "/images/gallery/sports-drinkware-water-bottles.webp",
    "title": "Royal Blue 750ml Sports Drinkware Squeeze Bottles",
    "description": "Food-grade BPA-free sports water bottles in corporate royal blue, screen-printed with white logos for banking wellness programs and athletic events.",
    "tags": [
      "Drinkware",
      "Water Bottles",
      "Screen Print",
      "Wellness"
    ],
    "specs": [
      "BPA-Free Food Grade Plastic",
      "Opaque White Screen Print",
      "Leak-Proof Valve"
    ],
    "location": "South Africa",
    "date": "2025"
  },
  {
    "id": "item-gauteng-conti-suits",
    "jobId": "job-gauteng-province",
    "jobTitle": "Gauteng Provincial Government & Heavy Industrial PPE",
    "client": "Gauteng Provincial Government",
    "category": "ppe",
    "categoryLabel": "Industrial PPE",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/gauteng-province-flame-retardant-conti-suits.webp",
    "src": "/images/gallery/gauteng-province-flame-retardant-conti-suits.webp",
    "title": "Gauteng Province Flame & Acid D59 Conti Suits",
    "description": "Heavyweight D59 flame and acid retardant two-piece workwear suits featuring official Gauteng Provincial Government embroidered emblems.",
    "tags": [
      "Conti Suits",
      "Gauteng",
      "SABS",
      "Flame Retardant",
      "Overalls"
    ],
    "specs": [
      "100% Cotton D59 Flame & Acid Retardant",
      "High-Density Crest Embroidery",
      "YKK Heavy Brass Zips"
    ],
    "location": "Gauteng, South Africa",
    "date": "2024",
    "featured": true
  },
  {
    "id": "item-gauteng-tracksuits",
    "jobId": "job-gauteng-province",
    "jobTitle": "Gauteng Provincial Government & Heavy Industrial PPE",
    "client": "Gauteng Department of Sport, Arts & Culture",
    "category": "ppe",
    "categoryLabel": "Civic Tracksuits",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/gauteng-province-sports-arts-tracksuits.webp",
    "src": "/images/gallery/gauteng-province-sports-arts-tracksuits.webp",
    "title": "Gauteng Sports, Arts & Culture Provincial Tracksuits",
    "description": "Custom-paneled microfiber tracksuits with brushed tricot lining, contrast piping, and official Republic of South Africa provincial coat of arms.",
    "tags": [
      "Tracksuits",
      "Gauteng",
      "Sportswear",
      "Athletics"
    ],
    "specs": [
      "Microfiber Wind-Resistant Shell",
      "Breathable Tricot Knit Lining",
      "High-Stitch Coat of Arms"
    ],
    "location": "Johannesburg, South Africa",
    "date": "2024"
  },
  {
    "id": "item-gauteng-recreation",
    "jobId": "job-gauteng-province",
    "jobTitle": "Gauteng Provincial Government & Heavy Industrial PPE",
    "client": "Gauteng Recreation Division",
    "category": "ppe",
    "categoryLabel": "Recreation Apparel",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/gauteng-province-recreation-apparel.webp",
    "src": "/images/gallery/gauteng-province-recreation-apparel.webp",
    "title": "Gauteng Provincial Government Recreation Field Jackets",
    "description": "Weatherproof softshell jackets engineered for provincial field officers and community sports coordinators.",
    "tags": [
      "Gauteng",
      "Field Jackets",
      "Softshell",
      "Civic Workwear"
    ],
    "specs": [
      "3-Layer Bonded Softshell",
      "Fleece Interior Backing",
      "Embroidered Department Identifiers"
    ],
    "location": "Pretoria & Johannesburg",
    "date": "2024"
  },
  {
    "id": "item-cat-safety-boots",
    "jobId": "job-gauteng-province",
    "jobTitle": "Gauteng Provincial Government & Heavy Industrial PPE",
    "client": "Industrial Safety Division",
    "category": "ppe",
    "categoryLabel": "Safety Boots",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/caterpillar-sabs-steel-toe-safety-boots.webp",
    "src": "/images/gallery/caterpillar-sabs-steel-toe-safety-boots.webp",
    "title": "SABS Certified Steel-Toe Caterpillar Industrial Safety Boots",
    "description": "Full-grain leather steel-toe safety footwear with oil-resistant Goodyear welted rubber soles for heavy infrastructure and civil sites.",
    "tags": [
      "Safety Boots",
      "Steel Toe",
      "PPE",
      "Footwear",
      "SABS"
    ],
    "specs": [
      "SABS & ISO 20345 Approved",
      "200J Impact Steel Toe Cap",
      "Oil & Slip Resistant Rubber Outsole"
    ],
    "location": "South Africa",
    "date": "2025"
  },
  {
    "id": "item-albany-promo-tshirts",
    "jobId": "job-albany-bakeries",
    "jobTitle": "Albany Bakeries High-Speed Carousel Screen Printing",
    "client": "Albany Bakeries",
    "category": "printing",
    "categoryLabel": "Automated Screen Print",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/albany-bakeries-promo-tshirts.webp",
    "src": "/images/gallery/albany-bakeries-promo-tshirts.webp",
    "title": "Albany Bakeries Red Promotional Screen-Printed T-Shirts",
    "description": "Mass production screen printing run of bright red Albany promotional t-shirts on automatic 12-color carousel with flash curing units.",
    "tags": [
      "Albany",
      "Screen Printing",
      "Carousel",
      "T-Shirts",
      "FMCG"
    ],
    "specs": [
      "High-Opacity Plastisol Inks",
      "Automated 12-Station Carousel",
      "Oven Flash-Cured at 165\u00b0C"
    ],
    "location": "CLAPSA Screen Printing Hall",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-albany-gang-sheet",
    "jobId": "job-albany-bakeries",
    "jobTitle": "Albany Bakeries High-Speed Carousel Screen Printing",
    "client": "Industrial Apparel Client",
    "category": "printing",
    "categoryLabel": "DTF Gang Sheets",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/humaniti-dtf-screen-transfers-gang-sheet.webp",
    "src": "/images/gallery/humaniti-dtf-screen-transfers-gang-sheet.webp",
    "title": "High-Definition DTF Heat Transfer Gang Sheets",
    "description": "Continuous 60cm wide DTF roll printing showcasing high-resolution logos, brand artwork, and apparel graphics before pneumatic heat pressing.",
    "tags": [
      "DTF",
      "Heat Transfer",
      "Gang Sheet",
      "Digital Printing"
    ],
    "specs": [
      "60cm Width Continuous Film",
      "Hot Melt Adhesive Powder Backing",
      "Zero-Color-Limitation Vivid Output"
    ],
    "location": "CLAPSA Print Facility",
    "date": "2025"
  },
  {
    "id": "item-albany-marathon-tshirts",
    "jobId": "job-albany-bakeries",
    "jobTitle": "Albany Bakeries High-Speed Carousel Screen Printing",
    "client": "Move for Youth Marathon",
    "category": "printing",
    "categoryLabel": "Performance Tees",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/move-for-youth-marathon-tshirts.webp",
    "src": "/images/gallery/move-for-youth-marathon-tshirts.webp",
    "title": "Move for Youth Marathon Moisture-Wicking Sports Tees",
    "description": "High-visibility neon athletic t-shirts screen-printed with breathable water-based stretch inks for regional marathon participants.",
    "tags": [
      "Marathon",
      "Sports Tees",
      "Moisture Wicking",
      "Athletics"
    ],
    "specs": [
      "100% Quick-Dry Polyester Birdseye Mesh",
      "Breathable Water-Based Screen Print",
      "Flatlock Anti-Chafe Seams"
    ],
    "location": "SADC Marathon Series",
    "date": "2025"
  },
  {
    "id": "item-albany-typography-tees",
    "jobId": "job-albany-bakeries",
    "jobTitle": "Albany Bakeries High-Speed Carousel Screen Printing",
    "client": "Fashion Apparel Label",
    "category": "printing",
    "categoryLabel": "Fashion Screen Print",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/soul-mate-typography-fashion-tshirts.webp",
    "src": "/images/gallery/soul-mate-typography-fashion-tshirts.webp",
    "title": "High-Definition Typography Fashion Cotton T-Shirts",
    "description": "Retail-grade apparel printing with fine typographic lines and micro-detail halftone registration on premium combed cotton tees.",
    "tags": [
      "Fashion",
      "Typography",
      "Screen Print",
      "Retail Quality"
    ],
    "specs": [
      "180gsm 100% Ringspun Combed Cotton",
      "Micro-Halftone Precision Screen Mesh",
      "Soft-Hand Feel Inks"
    ],
    "location": "Johannesburg",
    "date": "2025"
  },
  {
    "id": "item-albany-screen-print-reel",
    "jobId": "job-albany-bakeries",
    "jobTitle": "Albany Bakeries High-Speed Carousel Screen Printing",
    "client": "CLAPSA Production Facility",
    "category": "printing",
    "categoryLabel": "Motion Reel",
    "mediaType": "video",
    "thumbnail": "/videos/gallery/posters/clapsa-carousel-screen-printing-reel.webp",
    "src": "/videos/gallery/clapsa-carousel-screen-printing-reel.mp4",
    "title": "Automated Carousel Textile Screen Printing in Motion",
    "description": "Real-time video capturing automated pneumatic squeegees, rotating platen carousel, and flash-curing lamps during continuous textile production.",
    "tags": [
      "Screen Printing",
      "Video",
      "Machinery",
      "Automated Carousel",
      "Production"
    ],
    "specs": [
      "Full HD 60fps Motion Capture",
      "1,200 Garments/Hour Cycle",
      "Real-Time Flash Curing"
    ],
    "location": "CLAPSA Production Hall",
    "date": "2025"
  },
  {
    "id": "item-g4s-ballistic-vest",
    "jobId": "job-g4s-security",
    "jobTitle": "G4S Secure Solutions SADC Tactical Armor & Workwear",
    "client": "G4S Secure Solutions SADC",
    "category": "ppe",
    "categoryLabel": "Tactical Vests",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/g4s-security-tactical-ballistic-vest.webp",
    "src": "/images/gallery/g4s-security-tactical-ballistic-vest.webp",
    "title": "G4S Security Tactical Ballistic Carrier Vests",
    "description": "Custom ballistic armor carrier vests embroidered with official G4S security typography and insignias for SADC cash-in-transit personnel.",
    "tags": [
      "G4S",
      "Tactical",
      "Security",
      "Embroidery",
      "Vest"
    ],
    "specs": [
      "1000D Cordura Ballistic Nylon",
      "High-Density 3D Red/White Thread Embroidery",
      "Adjustable Velcro Cummerbund"
    ],
    "location": "Johannesburg & Maputo",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-g4s-batch-staging",
    "jobId": "job-g4s-security",
    "jobTitle": "G4S Secure Solutions SADC Tactical Armor & Workwear",
    "client": "G4S Secure Solutions SADC",
    "category": "ppe",
    "categoryLabel": "Tactical Equipment",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/g4s-tactical-vests-and-reflector-batch.webp",
    "src": "/images/gallery/g4s-tactical-vests-and-reflector-batch.webp",
    "title": "G4S Ballistic Carriers & High-Vis Vests Production Batch",
    "description": "Batch production staging of ballistic armor carriers paired with high-visibility lime reflective overvests ready for SADC security fleets.",
    "tags": [
      "G4S",
      "Batch Production",
      "High-Vis",
      "Security"
    ],
    "specs": [
      "SABS Approved Reflective Tape",
      "Heavy-Duty Hardware",
      "Reinforced Pouch Attachment"
    ],
    "location": "CLAPSA Tactical Department",
    "date": "2025"
  },
  {
    "id": "item-g4s-packaging-staging",
    "jobId": "job-g4s-security",
    "jobTitle": "G4S Secure Solutions SADC Tactical Armor & Workwear",
    "client": "G4S Secure Solutions SADC",
    "category": "ppe",
    "categoryLabel": "Dispatch Staging",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/g4s-ballistic-vests-packaging-staging.webp",
    "src": "/images/gallery/g4s-ballistic-vests-packaging-staging.webp",
    "title": "G4S Ballistic Vest Bulk Packaging & Dispatch Staging",
    "description": "Organized warehouse dispatch staging of hundreds of packed G4S tactical armor carriers labeled by operational unit and branch.",
    "tags": [
      "G4S",
      "Packaging",
      "Staging",
      "Logistics",
      "Security"
    ],
    "specs": [
      "Individually Barcoded Armor Bags",
      "Serialized Armor Tracking",
      "Reinforced Shipping Cartons"
    ],
    "location": "CLAPSA Warehouse Hub",
    "date": "2025"
  },
  {
    "id": "item-g4s-embroidery-qc",
    "jobId": "job-g4s-security",
    "jobTitle": "G4S Secure Solutions SADC Tactical Armor & Workwear",
    "client": "G4S Secure Solutions SADC",
    "category": "ppe",
    "categoryLabel": "Precision QC",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/g4s-security-vest-embroidery-qc.webp",
    "src": "/images/gallery/g4s-security-vest-embroidery-qc.webp",
    "title": "G4S Security Vest Quality Control & Precision Embroidery",
    "description": "Close-up quality control inspection of high-tensile embroidery thread and ballistic stitching on G4S security front chest panels.",
    "tags": [
      "G4S",
      "Quality Control",
      "Embroidery",
      "Inspection"
    ],
    "specs": [
      "Zero-Defect Thread Trimming",
      "High-Tension Tensile Strength Test",
      "Reflective Border Alignment"
    ],
    "location": "CLAPSA QC Lab",
    "date": "2025"
  },
  {
    "id": "item-desvio-chevron-signs",
    "jobId": "job-trans-sadc-signs",
    "jobTitle": "Trans-SADC Highway & Civil Road Safety Signage",
    "client": "SADC Road Maintenance & Civil",
    "category": "signage",
    "categoryLabel": "Road Signage",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/desvio-reflective-chevron-road-signs.webp",
    "src": "/images/gallery/desvio-reflective-chevron-road-signs.webp",
    "title": "Desvio Class 2 Retro-Reflective Highway Chevron Signs",
    "description": "High-visibility yellow/black highway chevron detour signs engineered with Class 2 reflective honeycomb sheeting for all-weather nighttime visibility.",
    "tags": [
      "Road Signs",
      "Reflective",
      "Desvio",
      "Highway",
      "Chromadek"
    ],
    "specs": [
      "Class 2 High-Intensity Prismatic Vinyl",
      "1.4mm Chromadek Steel",
      "SABS 1519 Compliant"
    ],
    "location": "Maputo Corridor, Mozambique",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-galvanized-a-frames",
    "jobId": "job-trans-sadc-signs",
    "jobTitle": "Trans-SADC Highway & Civil Road Safety Signage",
    "client": "Highway Infrastructure Contractors",
    "category": "signage",
    "categoryLabel": "Signage Hardware",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/galvanized-steel-signage-a-frames.webp",
    "src": "/images/gallery/galvanized-steel-signage-a-frames.webp",
    "title": "Heavy-Duty Hot-Dip Galvanized Foldable Road Sign A-Frames",
    "description": "Heavy-gauge angle-iron folding sign stands with hot-dip galvanized anti-corrosion coating designed for high-wind highway detours and construction sites.",
    "tags": [
      "A-Frames",
      "Galvanized Steel",
      "Road Works",
      "Hardware"
    ],
    "specs": [
      "32mm x 32mm x 3mm Angle Iron",
      "Hot-Dip Galvanized to ISO 1461",
      "Heavy Wind-Resistant Fold-Out Stance"
    ],
    "location": "Regional Highway Routes",
    "date": "2025"
  },
  {
    "id": "item-heavy-duty-cones",
    "jobId": "job-trans-sadc-signs",
    "jobTitle": "Trans-SADC Highway & Civil Road Safety Signage",
    "client": "Traffic Safety Department",
    "category": "signage",
    "categoryLabel": "Traffic Cones",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/heavy-duty-road-safety-traffic-cones.webp",
    "src": "/images/gallery/heavy-duty-road-safety-traffic-cones.webp",
    "title": "750mm UV-Stabilized Flexible PVC Highway Traffic Cones",
    "description": "Heavy weighted rubber base traffic cones with Class 1 reflective sleeves, UV stabilized against intense African sunlight without fading or cracking.",
    "tags": [
      "Traffic Cones",
      "Road Safety",
      "Reflective",
      "PVC"
    ],
    "specs": [
      "750mm Height with 4.5kg Recycled Rubber Base",
      "Class 1 High-Intensity Reflective Collar",
      "100% UV Stabilized Polymer"
    ],
    "location": "Mozambique Corridors",
    "date": "2025"
  },
  {
    "id": "item-triangular-hazard-signs",
    "jobId": "job-trans-sadc-signs",
    "jobTitle": "Trans-SADC Highway & Civil Road Safety Signage",
    "client": "Civil Construction Services",
    "category": "signage",
    "categoryLabel": "Hazard Signs",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/triangular-construction-hazard-signs.webp",
    "src": "/images/gallery/triangular-construction-hazard-signs.webp",
    "title": "900mm Triangular Road Works Ahead Reflective Signs",
    "description": "Standard 900mm triangular temporary warning road signs with red reflective borders and black symbols on fluorescent yellow backgrounds.",
    "tags": [
      "Hazard Signs",
      "Road Works",
      "Reflective",
      "Chromadek"
    ],
    "specs": [
      "900mm SADC Specification",
      "Retro-Reflective Sheeting",
      "Pre-Punched Mounting Holes"
    ],
    "location": "Regional SADC Routes",
    "date": "2025"
  },
  {
    "id": "item-correx-weatherproof-boards",
    "jobId": "job-trans-sadc-signs",
    "jobTitle": "Trans-SADC Highway & Civil Road Safety Signage",
    "client": "Civil Site Contractor",
    "category": "signage",
    "categoryLabel": "Correx Site Signs",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/correx-weatherproof-outdoor-signboards.webp",
    "src": "/images/gallery/correx-weatherproof-outdoor-signboards.webp",
    "title": "Weatherproof Fluted Correx Job Site Information Boards",
    "description": "Lightweight UV-resistant twin-wall polypropylene correx signboards printed with direct UV inks for outdoor construction site perimeters.",
    "tags": [
      "Correx",
      "Site Signs",
      "UV Print",
      "Weatherproof"
    ],
    "specs": [
      "4mm Fluted Twin-Wall Polypropylene",
      "Direct-to-Board UV Cured Inks",
      "Corner Eyelets for Cable-Tie Mounting"
    ],
    "location": "South Africa & Mozambique",
    "date": "2025"
  },
  {
    "id": "item-shipping-container-export",
    "jobId": "job-sadc-logistics",
    "jobTitle": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "CLAPSA Regional Freight Hub",
    "category": "gifting",
    "categoryLabel": "Container Freight",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/shipping-container-clapsa-export-freight.webp",
    "src": "/images/gallery/shipping-container-clapsa-export-freight.webp",
    "title": "40ft Maritime Container Export Stuffing for Mozambique",
    "description": "Full 40-foot maritime container stuffed with thousands of custom printed garments, signage, and corporate merchandise ready for export dispatch.",
    "tags": [
      "Logistics",
      "Export",
      "Shipping Container",
      "Freight",
      "Mozambique"
    ],
    "specs": [
      "40ft High-Cube Maritime Container",
      "Palletized & Shrink-Wrapped Manifest",
      "Customs Phytosanitary & Export Cleared"
    ],
    "location": "Sandton Hub to Maputo Port",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-tamper-security-bags",
    "jobId": "job-sadc-logistics",
    "jobTitle": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "Secure Logistics Division",
    "category": "gifting",
    "categoryLabel": "Security Packaging",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/tamper-evident-high-security-transit-bags.webp",
    "src": "/images/gallery/tamper-evident-high-security-transit-bags.webp",
    "title": "Tamper-Evident High-Security Courier Transit Envelopes",
    "description": "Multi-layer co-extruded polyethylene courier flyer bags with void tamper-evident adhesive closures and sequential barcode serialization.",
    "tags": [
      "Security Bags",
      "Courier",
      "Tamper Evident",
      "Packaging"
    ],
    "specs": [
      "60-Micron Opaque Co-Extruded Film",
      "High-Security 'VOID' Adhesive Tape",
      "Unique Sequential Barcoding"
    ],
    "location": "Regional Freight",
    "date": "2025"
  },
  {
    "id": "item-claps-gin-packaging",
    "jobId": "job-sadc-logistics",
    "jobTitle": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "CLAPS Beverage Co.",
    "category": "gifting",
    "categoryLabel": "Luxury Packaging",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/claps-premium-gin-custom-packaging.webp",
    "src": "/images/gallery/claps-premium-gin-custom-packaging.webp",
    "title": "CLAPS Premium Gin Custom Bottle Labeling & Rigid Box",
    "description": "Bespoke alcoholic beverage packaging including metallic hot-foil neck bands, textured cotton paper labels, and custom printed rigid presentation gift boxes.",
    "tags": [
      "Packaging",
      "Beverage",
      "Luxury",
      "Gold Foil",
      "Rigid Box"
    ],
    "specs": [
      "Estate Cotton Paper with Foil Stamping",
      "Velvet-Lined Rigid Board Box",
      "Precision Die-Cut Window"
    ],
    "location": "South Africa & Export",
    "date": "2025"
  },
  {
    "id": "item-pyb-fleet-branding",
    "jobId": "job-sadc-logistics",
    "jobTitle": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "PYB Logistics Fleet",
    "category": "gifting",
    "categoryLabel": "Fleet Vinyl Graphics",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/pyb-commercial-vehicle-vinyl-branding.webp",
    "src": "/images/gallery/pyb-commercial-vehicle-vinyl-branding.webp",
    "title": "Commercial Delivery Van Vinyl Wrapping & Fleet Identification",
    "description": "Cast vinyl vehicle wraps with UV protective overlaminate applied across delivery van side panels and rear doors for fleet branding.",
    "tags": [
      "Fleet Branding",
      "Vehicle Wrap",
      "Vinyl",
      "Commercial Fleet"
    ],
    "specs": [
      "Cast Air-Release Polymeric Vinyl",
      "UV Scratch-Resistant Gloss Overlaminate",
      "7-Year Exterior Outdoor Durability"
    ],
    "location": "Regional Delivery Routes",
    "date": "2025"
  },
  {
    "id": "item-sadc-utility-fleet",
    "jobId": "job-sadc-logistics",
    "jobTitle": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "SADC Utility Fleets",
    "category": "gifting",
    "categoryLabel": "Fleet Graphics",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/sadc-utility-fleet-bakkie-graphics.webp",
    "src": "/images/gallery/sadc-utility-fleet-bakkie-graphics.webp",
    "title": "Utility Fleet Bakkie Reflective Chevron & Door Branding",
    "description": "Rear tailgate high-visibility red/yellow chevron wraps and contour-cut vinyl door branding applied on utility bakkies.",
    "tags": [
      "Utility Fleet",
      "Vehicle Graphics",
      "Reflective",
      "Bakkie"
    ],
    "specs": [
      "High-Intensity Prismatic Rear Chevron",
      "Computer Contour-Cut Vinyl Logos",
      "Pressure-Sensitive Weatherproof Adhesive"
    ],
    "location": "SADC Corridors",
    "date": "2025"
  },
  {
    "id": "item-automated-wrapping-reel",
    "jobId": "job-sadc-logistics",
    "jobTitle": "Turnkey SADC Cross-Border Freight & Packaging Hub",
    "client": "CLAPSA Dispatch Hub",
    "category": "gifting",
    "categoryLabel": "Logistics Motion Reel",
    "mediaType": "video",
    "thumbnail": "/videos/gallery/posters/automated-pallet-stretch-wrapping-dispatch.webp",
    "src": "/videos/gallery/automated-pallet-stretch-wrapping-dispatch.mp4",
    "title": "Automated Pallet Stretch Wrapping & Freight Dispatch Reel",
    "description": "Warehouse footage showing automated rotating turntable pallet stretch wrappers securing export cartons with high-micron polythene stretch film.",
    "tags": [
      "Logistics",
      "Video",
      "Freight",
      "Pallet Wrapping",
      "Dispatch"
    ],
    "specs": [
      "Full HD Motion Reel",
      "Automated Turntable Stretch Wrapping",
      "Industrial 23-Micron Stretch Film"
    ],
    "location": "CLAPSA Freight Hub",
    "date": "2025"
  },
  {
    "id": "item-movitel-gazebo",
    "jobId": "job-movitel-telecom",
    "jobTitle": "Movitel Telecom Brand Activation, Uniforms & Field Swag",
    "client": "Movitel Mo\u00e7ambique",
    "category": "display",
    "categoryLabel": "Pop-Up Gazebos",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/elaxo-sublimated-gazebo-and-tablecloth.webp",
    "src": "/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp",
    "title": "Commercial Sublimated Outdoor Event Gazebo & Tablecloth",
    "description": "3m x 3m commercial pop-up canopy gazebo with full-coverage dye-sublimated canopy, heavy 40mm hexagonal aluminum legs, and matching branded fitted tablecloth.",
    "tags": [
      "Gazebo",
      "Movitel",
      "Event Display",
      "Sublimation",
      "Outdoor"
    ],
    "specs": [
      "600D Waterproof PU Polyester",
      "Hexagonal 40mm Aluminum Legs",
      "All-Over Sublimation"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-movitel-activation-table",
    "jobId": "job-movitel-telecom",
    "jobTitle": "Movitel Telecom Brand Activation, Uniforms & Field Swag",
    "client": "Movitel Mo\u00e7ambique",
    "category": "display",
    "categoryLabel": "Activation Tables",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/elaxo-event-activation-table-display.webp",
    "src": "/images/gallery/elaxo-event-activation-table-display.webp",
    "title": "Field Activation Branded Display Counter & Table Cover",
    "description": "Fitted stretch polyester table cover and collapsible field promotion counter with vibrant color-matched brand graphics for customer onboarding.",
    "tags": [
      "Tablecloth",
      "Activation",
      "Counter",
      "Display"
    ],
    "specs": [
      "Stretch Spandex Polyester",
      "Reinforced Foot Pockets",
      "Vibrant Sublimation Inks"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2025"
  },
  {
    "id": "item-movitel-merchandise-suite",
    "jobId": "job-movitel-telecom",
    "jobTitle": "Movitel Telecom Brand Activation, Uniforms & Field Swag",
    "client": "Movitel Mo\u00e7ambique",
    "category": "display",
    "categoryLabel": "Merchandise Suite",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/elaxo-owara-corporate-merchandise-suite.webp",
    "src": "/images/gallery/elaxo-owara-corporate-merchandise-suite.webp",
    "title": "Corporate Retail Merchandise & Ambassador Apparel Suite",
    "description": "Complete retail roadshow merchandise package including printed caps, branded polo shirts, activation accessories, and branded point-of-sale displays.",
    "tags": [
      "Merchandise",
      "Retail Suite",
      "Roadshow",
      "Branding"
    ],
    "specs": [
      "Complete Turnkey Activation Kit",
      "Custom Retail POS Packaging",
      "Full Brand Compliance"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2025"
  },
  {
    "id": "item-movitel-trucker-caps",
    "jobId": "job-movitel-telecom",
    "jobTitle": "Movitel Telecom Brand Activation, Uniforms & Field Swag",
    "client": "Movitel Mo\u00e7ambique",
    "category": "display",
    "categoryLabel": "Brand Ambassador Caps",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/california-vintage-mesh-trucker-cap.webp",
    "src": "/images/gallery/california-vintage-mesh-trucker-cap.webp",
    "title": "Brand Ambassador Foam Front Breathable Trucker Caps",
    "description": "Dual-tone promotional trucker caps featuring high-density sponge foam front, breathable mesh back, and direct heat transfer branding.",
    "tags": [
      "Caps",
      "Trucker Caps",
      "Promotional Headwear",
      "Ambassadors"
    ],
    "specs": [
      "High-Density Foam Front Panel",
      "Breathable Polyester Mesh Back",
      "Snapback Adjustable Closure"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2025"
  },
  {
    "id": "item-movitel-retro-caps",
    "jobId": "job-movitel-telecom",
    "jobTitle": "Movitel Telecom Brand Activation, Uniforms & Field Swag",
    "client": "Movitel Mo\u00e7ambique",
    "category": "display",
    "categoryLabel": "Field Promo Caps",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/1982-retro-mesh-trucker-caps.webp",
    "src": "/images/gallery/1982-retro-mesh-trucker-caps.webp",
    "title": "Retro Foam Trucker Caps for Telecom Roadshow Teams",
    "description": "Vintage aesthetic 5-panel foam trucker caps with plastic snap closure engineered for summer brand roadshows and SIM card registration teams.",
    "tags": [
      "Caps",
      "Trucker Caps",
      "Telecom Roadshow",
      "Headwear"
    ],
    "specs": [
      "5-Panel Construction",
      "Contrast Color Peak & Mesh",
      "Screen-Printed Front Panel"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2025"
  },
  {
    "id": "item-frelimo-campaign-kit",
    "jobId": "job-frelimo-campaign",
    "jobTitle": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO",
    "category": "campaigns",
    "categoryLabel": "Campaign Kits",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/frelimo-daniel-chapo-campaign-kit.webp",
    "src": "/images/gallery/frelimo-daniel-chapo-campaign-kit.webp",
    "title": "FRELIMO Daniel Chapo Complete Campaign Bundle",
    "description": "Complete presidential election bundle comprising red combed cotton polo shirt, structured 6-panel cap with 3D embroidery, and matching water-resistant drawstring pack.",
    "tags": [
      "Frelimo",
      "Daniel Chapo",
      "Campaign",
      "Election",
      "Polo",
      "Caps"
    ],
    "specs": [
      "100% Combed Cotton Polo",
      "3D Raised Front Embroidery",
      "210D Waterproof Polyester Pack"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024",
    "featured": true
  },
  {
    "id": "item-frelimo-drawstring-bag",
    "jobId": "job-frelimo-campaign",
    "jobTitle": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO",
    "category": "campaigns",
    "categoryLabel": "Campaign Merch",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/frelimo-daniel-chapo-drawstring-bag.webp",
    "src": "/images/gallery/frelimo-daniel-chapo-drawstring-bag.webp",
    "title": "Vota Daniel Chapo Red Drawstring Carrier Backpack",
    "description": "High-density multi-color screen-printed voter carrier backpack featuring official candidate photography, party drum emblem, and reinforced corner eyelets.",
    "tags": [
      "Frelimo",
      "Daniel Chapo",
      "Drawstring Bag",
      "Elections",
      "Vota"
    ],
    "specs": [
      "Reinforced PU Leather Corners",
      "High-Definition Screen Print",
      "Braided Drawstring Straps"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-frelimo-campaign-cap",
    "jobId": "job-frelimo-campaign",
    "jobTitle": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO",
    "category": "campaigns",
    "categoryLabel": "Embroidered Headwear",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/frelimo-presidential-campaign-cap.webp",
    "src": "/images/gallery/frelimo-presidential-campaign-cap.webp",
    "title": "FRELIMO Official 6-Panel Presidential Campaign Cap",
    "description": "Heavy brushed cotton baseball cap with multi-placement 3D embroidery of candidate Daniel Chapo, national flag accents, and brass buckle closure.",
    "tags": [
      "Frelimo",
      "Headwear",
      "Embroidery",
      "Caps",
      "Daniel Chapo"
    ],
    "specs": [
      "Heavy Brushed Cotton",
      "3D High-Relief Front Stitching",
      "Adjustable Brass Buckle"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-frelimo-red-scarves",
    "jobId": "job-frelimo-campaign",
    "jobTitle": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO",
    "category": "campaigns",
    "categoryLabel": "Campaign Textiles",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/frelimo-red-campaign-scarves-bandanas.webp",
    "src": "/images/gallery/frelimo-red-campaign-scarves-bandanas.webp",
    "title": "FRELIMO Red Satin Campaign Scarves & Bandanas",
    "description": "Bulk run of satin campaign neck scarves with candidate slogans and official party crests printed in deep, non-fading scarlet red.",
    "tags": [
      "Frelimo",
      "Scarves",
      "Bandanas",
      "Rally Merch",
      "Textiles"
    ],
    "specs": [
      "Smooth Silk Satin Weave",
      "Overlocked Anti-Fray Edges",
      "Dye-Sublimated Graphics"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-frelimo-yellow-capulana",
    "jobId": "job-frelimo-campaign",
    "jobTitle": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO",
    "category": "campaigns",
    "categoryLabel": "Capulana Apparel",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/frelimo-yellow-capulana-bandana.webp",
    "src": "/images/gallery/frelimo-yellow-capulana-bandana.webp",
    "title": "FRELIMO Yellow Traditional Capulana Triangular Bandana",
    "description": "Traditional Mozambican capulana cotton bandanas printed in vibrant yellow and red with candidate portrait and cultural geometric borders.",
    "tags": [
      "Capulana",
      "Bandana",
      "Traditional",
      "Frelimo",
      "Mozambique"
    ],
    "specs": [
      "100% Breathable Cotton",
      "Vibrant Discharge Screen Print",
      "Traditional Triangular Cut"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-frelimo-drum-scarf",
    "jobId": "job-frelimo-campaign",
    "jobTitle": "FRELIMO & Daniel Chapo Presidential Campaign Merchandise",
    "client": "FRELIMO",
    "category": "campaigns",
    "categoryLabel": "Emblem Scarf",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/frelimo-drum-emblem-triangular-scarf.webp",
    "src": "/images/gallery/frelimo-drum-emblem-triangular-scarf.webp",
    "title": "FRELIMO Traditional Drum Emblem Rally Scarf",
    "description": "Voter campaign scarf featuring the historic FRELIMO drum symbol with Chapo election slogans, mass-produced for nationwide provincial rallies.",
    "tags": [
      "Frelimo",
      "Drum Emblem",
      "Rally Scarf",
      "Mozambique"
    ],
    "specs": [
      "Lightweight Summer Poly-Cotton",
      "High-Contrast Screen Print",
      "Precision Edge Hemming"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-cad-rollup-banner",
    "jobId": "job-cad-campaign",
    "jobTitle": "CAD & Ven\u00e2ncio Mondlane Electoral Displays & Promotional Gear",
    "client": "CAD & Ven\u00e2ncio Mondlane",
    "category": "campaigns",
    "categoryLabel": "Roll-Up Displays",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/cad-venancio-mondlane-rollup-banner.webp",
    "src": "/images/gallery/cad-venancio-mondlane-rollup-banner.webp",
    "title": "CAD Ven\u00e2ncio Mondlane Official Roll-Up Banner Stand",
    "description": "Deluxe aluminum roll-up pull-up banner printed on anti-curl matte media, bearing official manufacturing imprint 'dby: www.clapsa.co.za'.",
    "tags": [
      "CAD",
      "Ven\u00e2ncio Mondlane",
      "Roll-Up",
      "Banner",
      "Clapsa Certified",
      "Elections"
    ],
    "specs": [
      "Anti-Curl Matte Polypropylene",
      "Heavy Aluminum Base with Chrome Endcaps",
      "dby: www.clapsa.co.za Imprint"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024",
    "featured": true
  },
  {
    "id": "item-cad-workshop-display",
    "jobId": "job-cad-campaign",
    "jobTitle": "CAD & Ven\u00e2ncio Mondlane Electoral Displays & Promotional Gear",
    "client": "CAD & Ven\u00e2ncio Mondlane",
    "category": "campaigns",
    "categoryLabel": "Event Displays",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/cad-electoral-banner-workshop-display.webp",
    "src": "/images/gallery/cad-electoral-banner-workshop-display.webp",
    "title": "CAD Electoral Banner Workshop Quality Control Staging",
    "description": "Staging and final quality control of multiple Ven\u00e2ncio Mondlane candidate banners inside CLAPSA large-format digital printing facility.",
    "tags": [
      "CAD",
      "Large Format",
      "Quality Control",
      "Digital Printing",
      "Workshop"
    ],
    "specs": [
      "Epson SureColor High-Gamut Eco-Solvent",
      "Zero Banding Inspection",
      "Tension Spring Rigidity Test"
    ],
    "location": "CLAPSA Production Facility",
    "date": "2024"
  },
  {
    "id": "item-cad-podium-branding",
    "jobId": "job-cad-campaign",
    "jobTitle": "CAD & Ven\u00e2ncio Mondlane Electoral Displays & Promotional Gear",
    "client": "CAD & Ven\u00e2ncio Mondlane",
    "category": "campaigns",
    "categoryLabel": "Stage Branding",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/cad-podium-acrylic-campaign-branding.webp",
    "src": "/images/gallery/cad-podium-acrylic-campaign-branding.webp",
    "title": "CAD Acrylic Press Conference Podium Branding",
    "description": "Cast acrylic podium branding panel with precision reverse-printed vinyl and optical clear adhesive for high-profile political press conferences.",
    "tags": [
      "Podium",
      "Acrylic",
      "CAD",
      "Press Conference",
      "Stage Branding"
    ],
    "specs": [
      "5mm Optical Clear Cast Acrylic",
      "High-Resolution Reverse Subsurface Print",
      "Polished Beveled Edges"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-cad-banner-finishing",
    "jobId": "job-cad-campaign",
    "jobTitle": "CAD & Ven\u00e2ncio Mondlane Electoral Displays & Promotional Gear",
    "client": "CAD & Ven\u00e2ncio Mondlane",
    "category": "campaigns",
    "categoryLabel": "Banner Finishing",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/cad-campaign-rollup-banner-finishing.webp",
    "src": "/images/gallery/cad-campaign-rollup-banner-finishing.webp",
    "title": "CAD Campaign Banner Assembly & Tension Spring Rigging",
    "description": "Technician assembling roll-up retraction mechanisms and protective nylon carrying cases for nationwide dispatch.",
    "tags": [
      "Assembly",
      "Packaging",
      "Rollup Banner",
      "CAD"
    ],
    "specs": [
      "Self-Locking Top Clamping Bar",
      "Heavy-Duty Padded Canvas Carry Bag",
      "Pre-Tensioned Spring Roller"
    ],
    "location": "CLAPSA Workshop",
    "date": "2024"
  },
  {
    "id": "item-renamo-polo-shirt",
    "jobId": "job-renamo-campaign",
    "jobTitle": "RENAMO Official Party Uniforms, Embroidered Polos & Caps",
    "client": "RENAMO",
    "category": "campaigns",
    "categoryLabel": "Official Polos",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/renamo-blue-embroidered-polo-shirt.webp",
    "src": "/images/gallery/renamo-blue-embroidered-polo-shirt.webp",
    "title": "RENAMO Royal Blue Embroidered Partridge Polo Shirt",
    "description": "Official party conference polo shirt in royal blue pique cotton, featuring the intricately embroidered RENAMO partridge symbol and lettering.",
    "tags": [
      "RENAMO",
      "Polo Shirt",
      "Partridge",
      "Embroidery",
      "Royal Blue"
    ],
    "specs": [
      "220gsm Heavy Pique Combed Cotton",
      "Tajima Precision 12-Color Crest Embroidery",
      "Reinforced Placket with Pearl Buttons"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024",
    "featured": true
  },
  {
    "id": "item-renamo-campaign-cap",
    "jobId": "job-renamo-campaign",
    "jobTitle": "RENAMO Official Party Uniforms, Embroidered Polos & Caps",
    "client": "RENAMO",
    "category": "campaigns",
    "categoryLabel": "Embroidered Caps",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/renamo-blue-embroidered-campaign-cap.webp",
    "src": "/images/gallery/renamo-blue-embroidered-campaign-cap.webp",
    "title": "RENAMO Official 6-Panel Partridge Embroidered Cap",
    "description": "Matching royal blue 6-panel structured baseball cap with 3D raised embroidery of the RENAMO partridge emblem on front and party name across the arch.",
    "tags": [
      "RENAMO",
      "Headwear",
      "Caps",
      "Embroidery",
      "Partridge"
    ],
    "specs": [
      "100% Brushed Cotton Twill",
      "Structured Buckram Front Panels",
      "Self-Fabric Strap with Metal Embossed Clasp"
    ],
    "location": "Beira, Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-renamo-civic-tee",
    "jobId": "job-renamo-campaign",
    "jobTitle": "RENAMO Official Party Uniforms, Embroidered Polos & Caps",
    "client": "RENAMO",
    "category": "campaigns",
    "categoryLabel": "Campaign Tees",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/renamo-civic-ambassador-blue-tee.webp",
    "src": "/images/gallery/renamo-civic-ambassador-blue-tee.webp",
    "title": "RENAMO Civic Campaign Ambassador Cotton T-Shirt",
    "description": "High-volume royal blue round-neck 165gsm combed cotton t-shirts screen-printed with white and red party graphics for grassroots rally organizers.",
    "tags": [
      "RENAMO",
      "T-Shirts",
      "Rally Merch",
      "Screen Printing"
    ],
    "specs": [
      "165gsm 100% Cotton",
      "Discharge Silk Screen Printing",
      "Double-Stitched Ribbed Crewneck"
    ],
    "location": "Nampula, Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-renamo-electoral-apparel",
    "jobId": "job-renamo-campaign",
    "jobTitle": "RENAMO Official Party Uniforms, Embroidered Polos & Caps",
    "client": "RENAMO",
    "category": "campaigns",
    "categoryLabel": "Field Apparel",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/renamo-community-electoral-apparel.webp",
    "src": "/images/gallery/renamo-community-electoral-apparel.webp",
    "title": "RENAMO Community Outreach Field Apparel Batch",
    "description": "Packed bundles of official royal blue political garments undergoing final folding, poly-bagging, and provincial logistics sorting.",
    "tags": [
      "RENAMO",
      "Batch Packaging",
      "Field Apparel",
      "Logistics"
    ],
    "specs": [
      "Individually Sealed Poly Bags",
      "Size-Sorted Bundles of 25",
      "Export Cartons with Manifests"
    ],
    "location": "CLAPSA Dispatch Hub",
    "date": "2024"
  },
  {
    "id": "item-tropigalia-pens-bulk",
    "jobId": "job-tropigalia",
    "jobTitle": "Tropigalia Mo\u00e7ambique Corporate Stationery & Executive Swag",
    "client": "Tropigalia Mo\u00e7ambique",
    "category": "gifting",
    "categoryLabel": "Corporate Pens",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/tropigalia-branded-pens-bulk.webp",
    "src": "/images/gallery/tropigalia-branded-pens-bulk.webp",
    "title": "Tropigalia Retractable Metallic Pens (Mass Production)",
    "description": "High-volume batch pad printing of dual-tone red and silver retractable corporate ballpoint pens for nationwide commercial distribution in Mozambique.",
    "tags": [
      "Tropigalia",
      "Pens",
      "Pad Printing",
      "Stationery",
      "Mozambique"
    ],
    "specs": [
      "Precision Pad Printing",
      "Ergonomic Grip Barrel",
      "German Black Ink Refill"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024",
    "featured": true
  },
  {
    "id": "item-tropigalia-executive-pens",
    "jobId": "job-tropigalia",
    "jobTitle": "Tropigalia Mo\u00e7ambique Corporate Stationery & Executive Swag",
    "client": "Tropigalia Mo\u00e7ambique",
    "category": "gifting",
    "categoryLabel": "Executive Writing Sets",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/generation-equality-promo-pens.webp",
    "src": "/images/gallery/generation-equality-promo-pens.webp",
    "title": "Executive Metal Twist Ballpoint Pens with Laser Engraving",
    "description": "Heavy brass barrel twist-action pens with satin lacquer finish and laser-engraved corporate logo for distributor executive gifts.",
    "tags": [
      "Executive Pens",
      "Laser Engraving",
      "Metal Pens",
      "Gifting"
    ],
    "specs": [
      "Solid Brass Weighted Core",
      "Precision Fiber Laser Engraving",
      "Swiss Tungsten Carbide Ball"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-unicef-tote-bag",
    "jobId": "job-unicef-humanitarian",
    "jobTitle": "UNICEF & UN Regional Humanitarian Relief Programs",
    "client": "UNICEF & Minist\u00e9rio da Educa\u00e7\u00e3o (MEC)",
    "category": "campaigns",
    "categoryLabel": "Eco Cotton Totes",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/unicef-mec-aprender-melhor-tote-bag.webp",
    "src": "/images/gallery/unicef-mec-aprender-melhor-tote-bag.webp",
    "title": "UNICEF 'Aprender Para Melhor Crescer' Cotton Carrier Tote",
    "description": "Royal blue heavy-duty cotton canvas tote bags manufactured for school children with official UNICEF and Mozambique Ministry of Education logos.",
    "tags": [
      "UNICEF",
      "MEC",
      "Tote Bag",
      "Education",
      "Humanitarian"
    ],
    "specs": [
      "100% Cotton 280gsm Canvas",
      "Reinforced Cross-Stitch Handles",
      "Non-Toxic Water-Based Screen Print"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2024",
    "featured": true
  },
  {
    "id": "item-unhcr-relief-shirts",
    "jobId": "job-unicef-humanitarian",
    "jobTitle": "UNICEF & UN Regional Humanitarian Relief Programs",
    "client": "UNHCR Regional Mission",
    "category": "campaigns",
    "categoryLabel": "Humanitarian Tees",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/unhcr-refugiados-humanitarian-blue-shirts.webp",
    "src": "/images/gallery/unhcr-refugiados-humanitarian-blue-shirts.webp",
    "title": "UNHCR / Refugiados Blue Humanitarian Relief Shirts",
    "description": "Cobalt blue humanitarian relief t-shirts screen-printed with the iconic white ribbon and UNHCR mission emblems.",
    "tags": [
      "UNHCR",
      "Humanitarian",
      "Blue Tees",
      "Screen Print"
    ],
    "specs": [
      "160gsm Ringspun Combed Cotton",
      "High-Opacity White Rubber Ink Screen Print",
      "SABS Certified Dyes"
    ],
    "location": "Regional SADC Mission",
    "date": "2025"
  },
  {
    "id": "item-unhcr-reflective-bundle",
    "jobId": "job-unicef-humanitarian",
    "jobTitle": "UNICEF & UN Regional Humanitarian Relief Programs",
    "client": "UNHCR Emergency Response",
    "category": "campaigns",
    "categoryLabel": "Reflective Field Gear",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/unhcr-high-vis-reflective-apparel-bundle.webp",
    "src": "/images/gallery/unhcr-high-vis-reflective-apparel-bundle.webp",
    "title": "UNHCR Mission High-Visibility Reflective Field Apparel",
    "description": "High-visibility reflective overvests and emergency responder jackets bundled for UN field logisticians and humanitarian workers.",
    "tags": [
      "UNHCR",
      "High-Vis",
      "Reflective",
      "Emergency",
      "Overvests"
    ],
    "specs": [
      "EN ISO 20471 Certified High-Vis Fabric",
      "Class 2 Reflective Stripes",
      "Clear ID Badge Pockets"
    ],
    "location": "SADC Emergency Corridors",
    "date": "2024"
  },
  {
    "id": "item-unhcr-humanitarian-tees",
    "jobId": "job-unicef-humanitarian",
    "jobTitle": "UNICEF & UN Regional Humanitarian Relief Programs",
    "client": "UN Regional Relief Agency",
    "category": "campaigns",
    "categoryLabel": "Civic Tees",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/unhcr-humanitarian-blue-tshirts.webp",
    "src": "/images/gallery/unhcr-humanitarian-blue-tshirts.webp",
    "title": "UN Humanitarian Blue Field Mission Cotton T-Shirts",
    "description": "Batch of cobalt blue cotton shirts folded and packed for aid distribution teams across regional flood and drought relief zones.",
    "tags": [
      "Humanitarian",
      "T-Shirts",
      "UN",
      "Blue Tees"
    ],
    "specs": [
      "Pre-Shrunk 100% Cotton",
      "Water-Based Eco Screen Inks",
      "Colorfast Wash Resistance"
    ],
    "location": "Mo\u00e7ambique",
    "date": "2024"
  },
  {
    "id": "item-un-women-pens",
    "jobId": "job-unicef-humanitarian",
    "jobTitle": "UNICEF & UN Regional Humanitarian Relief Programs",
    "client": "UN Women",
    "category": "campaigns",
    "categoryLabel": "Advocacy Stationery",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/un-women-generation-equality-pens.webp",
    "src": "/images/gallery/un-women-generation-equality-pens.webp",
    "title": "UN Women Generation Equality Commemorative Metal Pens",
    "description": "Engraved commemorative pens manufactured for UN Women advocacy campaigns and youth development summits across southern Africa.",
    "tags": [
      "UN Women",
      "Advocacy",
      "Pens",
      "Engraved"
    ],
    "specs": [
      "Metal Barrel with Soft-Touch Coating",
      "High-Precision Laser Etching",
      "Smooth Gel Flow Cartridge"
    ],
    "location": "SADC Regional Conferences",
    "date": "2024"
  },
  {
    "id": "item-mera-diplomatic-uniforms",
    "jobId": "job-mera-malawi",
    "jobTitle": "MERA Malawi Energy Authority Diplomatic Uniforms",
    "client": "Malawi Energy Regulatory Authority (MERA)",
    "category": "corporate",
    "categoryLabel": "Diplomatic Uniforms",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/mera-malawi-energy-regulatory-uniforms.webp",
    "src": "/images/gallery/mera-malawi-energy-regulatory-uniforms.webp",
    "title": "MERA Malawi Energy Authority Corporate Uniforms",
    "description": "High-spec institutional uniforms featuring intricate circular multicolor emblem embroidery executed on multi-head Tajima embroidery carousels.",
    "tags": [
      "MERA",
      "Embroidery",
      "Uniforms",
      "Malawi",
      "Government"
    ],
    "specs": [
      "Poly-Cotton Twill Weave",
      "50,000-Stitch Multicolor Crest",
      "Reinforced Triple Stitching"
    ],
    "location": "Lilongwe, Malawi",
    "date": "2025",
    "featured": true
  },
  {
    "id": "item-mozambique-work-shirts",
    "jobId": "job-mera-malawi",
    "jobTitle": "MERA Malawi Energy Authority Diplomatic Uniforms",
    "client": "Mozam Bio Energy",
    "category": "corporate",
    "categoryLabel": "Work Shirts",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/mozambique-corporate-work-shirts.webp",
    "src": "/images/gallery/mozambique-corporate-work-shirts.webp",
    "title": "Mozambique Industrial Work Shirts at Tajima Embroidery Machines",
    "description": "Corporate short-sleeve work shirts photographed directly at the Tajima embroidery machines with precision company branding.",
    "tags": [
      "Work Shirts",
      "Embroidery",
      "Mozambique",
      "Tajima"
    ],
    "specs": [
      "65/35 Heavy Twill Blend",
      "Multi-Head Direct Embroidery",
      "Button-Down Collar"
    ],
    "location": "Maputo, Mo\u00e7ambique",
    "date": "2025"
  },
  {
    "id": "item-soges-work-shirts",
    "jobId": "job-mera-malawi",
    "jobTitle": "MERA Malawi Energy Authority Diplomatic Uniforms",
    "client": "Soges Group",
    "category": "corporate",
    "categoryLabel": "Executive Shirts",
    "mediaType": "photo",
    "thumbnail": "/images/gallery/thumbs/soges-tailored-executive-work-shirts.webp",
    "src": "/images/gallery/soges-tailored-executive-work-shirts.webp",
    "title": "Soges Executive Tailored Workwear & Uniform Shirts",
    "description": "Custom-tailored corporate woven shirts with reinforced chest pockets, embroidered monogramming, and durable poly-viscose fabric.",
    "tags": [
      "Soges",
      "Executive Shirts",
      "Tailored",
      "Corporate"
    ],
    "specs": [
      "Easy-Iron Poly-Viscose",
      "Reinforced Stress Points",
      "Custom Collar Stays"
    ],
    "location": "SADC Region",
    "date": "2025"
  }
];
