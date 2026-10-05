export type Language = 'en' | 'pt' | 'af';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  country: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    country: 'International / South Africa',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇲🇿',
    country: 'Moçambique / Angola / Portugal',
  },
  {
    code: 'af',
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
    flag: '🇿🇦',
    country: 'Suid-Afrika / Namibië',
  },
];

export interface TranslationSchema {
  nav: {
    sabsBanner: string;
    servingRegion: string;
    regionHighlight: string;
    controlPanel: string;
    home: string;
    ourWork: string;
    capabilities: string;
    catalogues: string;
    aboutUs: string;
    contact: string;
    quote: string;
    requestQuote: string;
    switchThemeLight: string;
    switchThemeDark: string;
    openControlPanel: string;
    whatsappDirect: string;
    requestCorporateQuote: string;
    taglineSub: string;
    taglineProc: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subtitle: string;
    checkpoints: readonly string[] | string[];
    viewPastWork: string;
    browseCatalogues: string;
    speakToConsultant: string;
    featuredProject: string;
    projectTag: string;
    projectTitle: string;
    projectDesc: string;
    statSatisfaction: string;
    statDeployments: string;
    statLogistics: string;
  };
  partners: {
    title: string;
    subtitle: string;
    sabsBadge: string;
    warrantiesBadge: string;
    bbbeeBadge: string;
    sadcBadge: string;
  };
  portfolio: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    tabs: {
      all: string;
      corporate: string;
      ppe: string;
      display: string;
      security: string;
      gifting: string;
    };
    client: string;
    completed: string;
    viewCaseStudy: string;
    modal: {
      projectOverview: string;
      scopeOfSupply: string;
      close: string;
      inquireWhatsApp: string;
      requestProposal: string;
    };
    items: Record<string, {
      title: string;
      client: string;
      tag: string;
      categoryLabel: string;
      location?: string;
      description: string;
      deliverables: readonly string[] | string[];
    }>;
  };
  services: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    requestSolution: string;
    items: Record<string, {
      title: string;
      tag: string;
      description: string;
      features: readonly string[] | string[];
    }>;
  };
  catalogue: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    popularChoice: string;
    moqPrefix: string;
    indicativePrefix: string;
    addToQuote: string;
    addedToQuote: string;
    whatsappInquiry: string;
    tabs: {
      all: string;
      footwear: string;
      display: string;
      ppe: string;
      medical: string;
    };
    products: Record<string, {
      name: string;
      categoryLabel: string;
      description: string;
      features: readonly string[] | string[];
    }>;
    downloads: {
      badge: string;
      title: string;
      subtitle: string;
      requestCustom: string;
      requestPdf: string;
      items: readonly {
        title: string;
        pages: string;
        category: string;
        fileSize: string;
        description: string;
      }[] | {
        title: string;
        pages: string;
        category: string;
        fileSize: string;
        description: string;
      }[];
    };
  };
  about: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    trustedBadge: string;
    p1: string;
    p2: string;
    statSatisfaction: string;
    statSatisfactionDesc: string;
    statDeliveries: string;
    statDeliveriesDesc: string;
    statPartners: string;
    statPartnersDesc: string;
    statRfq: string;
    statRfqDesc: string;
    pillarStandardsTitle: string;
    pillarStandardsDesc: string;
    pillarBrandingTitle: string;
    pillarBrandingDesc: string;
    partnerWithClapsa: string;
    callHeadquarters: string;
  };
  testimonials: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    items: readonly {
      quote: string;
      author: string;
      role: string;
      company: string;
      initials: string;
    }[] | {
      quote: string;
      author: string;
      role: string;
      company: string;
      initials: string;
    }[];
  };
  contact: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    hqTitle: string;
    locationLabel: string;
    crossBorderSub: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    chatWhatsApp: string;
    logisticsGuaranteeTitle: string;
    logisticsGuaranteeDesc: string;
    formTitle: string;
    companyName: string;
    companyPlaceholder: string;
    contactPerson: string;
    contactPlaceholder: string;
    corporateEmail: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    categoryInterest: string;
    categoryOptions: readonly string[] | string[];
    estimatedVolume: string;
    volumeOptions: readonly string[] | string[];
    projectRequirements: string;
    requirementsPlaceholder: string;
    submitQuote: string;
    sendWhatsApp: string;
    receivedTitle: string;
    receivedDescPrefix: string;
    receivedDescSuffix: string;
    submitAnother: string;
    forwardWhatsAppNow: string;
  };
  quoteDrawer: {
    title: string;
    linesCount: string;
    totalUnits: string;
    emptyTitle: string;
    emptyDesc: string;
    browseCatalogue: string;
    rfqPricing: string;
    clearBasket: string;
    contactTitle: string;
    companyPlaceholder: string;
    contactPlaceholder: string;
    phonePlaceholder: string;
    notesPlaceholder: string;
    sendWhatsApp: string;
    sendEmail: string;
  };
  whatsappFloat: {
    chatLabel: string;
    ariaLabel: string;
    title: string;
  };
  footer: {
    summary: string;
    adminPanel: string;
    quickLinks: string;
    supplySolutions: string;
    office: string;
    allRights: string;
    sabsCompliance: string;
    bbbeeProcurement: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      sabsBanner: 'SABS Certified PPE & High-End Corporate Branding',
      servingRegion: 'Serving',
      regionHighlight: 'South Africa & SADC',
      controlPanel: 'Control Panel',
      home: 'Home',
      ourWork: 'Portfolio',
      capabilities: 'Capabilities',
      catalogues: 'Catalogues',
      aboutUs: 'About Us',
      contact: 'Contact',
      quote: 'Quote',
      requestQuote: 'Request Quote',
      switchThemeLight: 'Switch to Light Mode',
      switchThemeDark: 'Switch to Dark Mode',
      openControlPanel: 'Open Control Panel',
      whatsappDirect: 'WhatsApp Direct Inquiry',
      requestCorporateQuote: 'Request Corporate Quote',
      taglineSub: 'One Source Solutions',
      taglineProc: 'Procurement',
      selectLanguage: 'Select Language',
    },
    hero: {
      badge: 'One Source Supply Solutions • South Africa & SADC',
      headlinePrefix: 'Elevate Your Workforce & Brand with',
      headlineHighlight: 'Precision Procurement',
      subtitle: 'We engineer and deliver turnkey Corporate Uniforms, Certified Industrial PPE, High-Impact Outdoor Displays, and VIP Merchandise for Africa’s leading enterprises.',
      checkpoints: [
        'SABS & ISO Standard Compliant Gear',
        'In-House High-Density Embroidery',
        'Bulk Wholesale Corporate Contracts',
        'Cross-Border SADC Rapid Freight',
      ],
      viewPastWork: 'View Our Past & Recent Work',
      browseCatalogues: 'Browse Catalogues & RFQ',
      speakToConsultant: 'Speak to a Consultant',
      featuredProject: 'Featured Project',
      projectTag: 'Custom Corporate Apparel',
      projectTitle: 'Custom Branded Winter Jackets & Technical Workwear',
      projectDesc: 'Turnkey employee uniform programs with high-density precision embroidery.',
      statSatisfaction: 'Satisfaction',
      statDeployments: 'Deployments',
      statLogistics: 'Logistics',
    },
    partners: {
      title: 'Authorized Corporate Supply & Manufacturing Network',
      subtitle: "Direct tier-1 access to Southern Africa's foremost apparel, PPE, and promotional catalogues",
      sabsBadge: 'SABS & ISO Approved Garments',
      warrantiesBadge: 'Authentic Manufacturer Warranties',
      bbbeeBadge: 'B-BBEE Procurement Ready',
      sadcBadge: 'Cross-Border SADC Freight',
    },
    portfolio: {
      badge: 'Proven Track Record & Client Highlights',
      titlePrefix: 'Our Past & Recent',
      titleHighlight: 'Works Showcase',
      subtitle: 'From regional mining PPE rollouts and tailored corporate wardrobes to stadium branding activations — explore how CLAPSA delivers on-spec, on-budget, and on-time.',
      tabs: {
        all: 'All Projects',
        corporate: 'Corporate & Teamwear',
        ppe: 'Industrial PPE & Safety',
        display: 'Branded Displays & Signage',
        security: 'Tactical & Security',
        gifting: 'Corporate Gifting',
      },
      client: 'Client',
      completed: 'Completed',
      viewCaseStudy: 'View Case Study',
      modal: {
        projectOverview: 'Project Overview',
        scopeOfSupply: 'Scope of Supply & Deliverables',
        close: 'Close Showcase',
        inquireWhatsApp: 'Inquire on WhatsApp',
        requestProposal: 'Request Proposal',
      },
      items: {
        'clapsa-corporate-apparel-collection': {
          title: 'Custom Branded Winter Jackets & Corporate Apparel',
          client: 'National Enterprise Fleet & Logistics',
          tag: 'Corporate Wardrobe',
          categoryLabel: 'Corporate Apparel',
          location: 'Johannesburg, South Africa',
          description: 'Designed, customized and manufactured complete high-density embroidered corporate jackets, winter coats, and brand merchandise for corporate and regional branch staff.',
          deliverables: [
            'Weatherproof Padded Winter Jackets with Custom Red Accent Linings',
            'High-Density Computerized Chest & Sleeve Logo Embroidery',
            'Individualized Employee Sizing Kits & Custom Packaging',
            'Full SADC Distribution across South Africa & Regional Hubs',
          ],
        },
        'industrial-ppe-safety-shoot': {
          title: 'Certified Safety PPE, Eye Protection & Gloves Deployment',
          client: 'Heavy Engineering & Industrial Fabrication Group',
          tag: 'Industrial PPE',
          categoryLabel: 'Industrial PPE & Safety',
          location: 'Gauteng & Mpumalanga',
          description: 'Supplied comprehensive eye protection goggles, heavy cut-resistant handling gloves, respiratory protection, and safety footwear for manufacturing plant workers.',
          deliverables: [
            'Anti-Scratch & Anti-Fog UV Protective Safety Goggles',
            'Cut-Level 5 Nitrile & Leather Reinforced Industrial Gloves',
            'Heavy-Duty Dual-Density Safety Footwear with Steel Midsole',
            'SABS & ISO 9001 Compliance Certification Documentation',
          ],
        },
        'security-tactical-uniforms': {
          title: 'Armed Response & Private Security Tactical Outfitting',
          client: 'Premier Security & VIP Escort Services',
          tag: 'Tactical Gear',
          categoryLabel: 'Tactical & Security',
          location: 'Johannesburg & Pretoria',
          description: 'Equipped 400+ security officers and patrol guards with high-durability tactical security uniforms, combat duty shirts, epaulettes, and heavy patrol boots.',
          deliverables: [
            'Rip-stop Combat Duty Trousers & Security Epaulette Shirts',
            'Tactical Combat High-Ankle S3 Protective Footwear',
            'Reinforced Duty Belts, Baton Holsters & Radio Pouches',
            'High-Visibility Night-Patrol Reflective Rain Jackets',
          ],
        },
        'outdoor-gazebo-displays': {
          title: 'High-Impact Branded Gazebos & Outdoor Activation Suite',
          client: 'Pan-African Retail Brand & Sports Championship',
          tag: 'Event Displays',
          categoryLabel: 'Branded Displays & Signage',
          location: 'National (SA & SADC)',
          description: 'Manufactured complete outdoor brand activation setups including heavy-duty hex-aluminum pop-up gazebos, double-sided teardrop flags, and promotional kiosks.',
          deliverables: [
            'Heavy-Duty 3x3m Waterproof Gazebos with Full-Wall Sublimation Prints',
            'Double-Sided 4m Teardrop & Sharkfin Flying Banners',
            'Perimeter Perforated PVC Fence & Barrier Wraps',
            'Portable Branded Sampling Kiosks for Roadshows',
          ],
        },
        'mining-protective-gear': {
          title: 'Mining Site PPE & Certified Respiratory Protection',
          client: 'Civil Infrastructure & Underground Mining Operations',
          tag: 'Mining Safety',
          categoryLabel: 'Industrial PPE & Safety',
          location: 'Rustenburg & Witbank',
          description: 'Bulk supply of certified vented hard hats, respiratory dust masks, high-visibility conti suits, and S3 heavy mining footwear for civil infrastructure contractors.',
          deliverables: [
            'SABS Approved Vented Hard Hats with Company Decals',
            'FFP2 / FFP3 Particulate Respiratory Half-Masks',
            'D59 Flame & Acid Retardant Heavy-Duty Conti Suits',
            'Caterpillar & Excavator S3 Heavy Safety Boots',
          ],
        },
        'lifestyle-brand-apparel': {
          title: 'Branded Activewear, Caps & Headwear Collection',
          client: 'Corporate Wellness & Athletics Association',
          tag: 'Activewear & Caps',
          categoryLabel: 'Corporate Apparel',
          location: 'Cape Town & Johannesburg',
          description: 'Supplied and customized lightweight technical activewear, branded 6-panel brushed cotton caps, and sport jackets for regional corporate games.',
          deliverables: [
            'Moisture-Management Technical Breathable T-Shirts & Golfers',
            '6-Panel Structured Brushed Cotton Caps with 3D Embroidery',
            'Customized Sports Duffel Bags & Thermal Water Bottles',
            'On-Site Fitting & Distribution Logistics',
          ],
        },
        'executive-corporate-gifting': {
          title: 'VIP Client Executive Gifting & Metal Accessories',
          client: 'Financial Advisory & Wealth Management Firm',
          tag: 'VIP Gifting',
          categoryLabel: 'Corporate Gifting',
          location: 'Johannesburg CBD',
          description: 'Curated 800 luxury VIP gift sets featuring laser-engraved metal torches, executive power essentials, thermal drinkware, and debossed presentation notebooks.',
          deliverables: [
            'Custom Matt-Black Metal Accessories with Precision Laser Etch',
            'Debossed Leatherette Executive Organizers & Metal Pens',
            'Double-Wall Vacuum Insulated Stainless Steel Drinkware',
            'Custom Luxury Presentation Packaging with Thank-You Cards',
          ],
        },
        'flag-banners-outdoor': {
          title: 'Stadium Perimeter Teardrop & Telescoping Flag Banners',
          client: 'Regional Athletics & Event Management',
          tag: 'Stadium Signage',
          categoryLabel: 'Branded Displays & Signage',
          location: 'Gauteng',
          description: 'Fabricated high-durability telescoping outdoor flag banners and wind-resistant event bunting with photographic dye-sublimation printing.',
          deliverables: [
            '50x 4m Double-Sided Heavyweight Telescoping Flags',
            'High-Traction Cast Iron Base Plates for Wind Resistance',
            '1,000m Customized Triangular PVC Digital Bunting',
            'Rapid 48-hour turn-around and delivery to stadium grounds',
          ],
        },
      },
    },
    services: {
      badge: 'End-to-End Capabilities',
      titlePrefix: 'Comprehensive',
      titleHighlight: 'Supply Solutions',
      subtitle: 'We simplify complex corporate purchasing by serving as your single-point partner for apparel manufacturing, branding, safety gear, and logistical delivery.',
      requestSolution: 'Request Specific Solution',
      items: {
        'corporate-apparel': {
          title: 'Corporate Wardrobe & Teamwear',
          tag: 'Uniforms & Apparel',
          description: 'Turnkey uniform programs tailored to your brand identity. From executive boardroom shirts and knitwear to heavy-duty field golfers and hospitality wear.',
          features: [
            'In-house high-density computerized embroidery',
            'Screen printing, heat-press, and dye-sublimation',
            'Male and female tailored cuts across all sizing',
            'Employee-by-employee individualized packouts',
          ],
        },
        'ppe-safety': {
          title: 'Certified Industrial PPE & Workwear',
          tag: 'Safety Compliance',
          description: 'Full compliance safety gear built to protect your workforce in hazardous environments. SABS-approved conti suits, safety footwear, and specialized protection.',
          features: [
            'D59 Flame & Acid retardant conti suits',
            'S3, S1P, and non-metallic composite safety boots',
            'Fall arrest harnesses, respiratory and eye protection',
            'Reflective high-visibility EN471 compliant garments',
          ],
        },
        'display-branding': {
          title: 'Outdoor Displays & Event Signage',
          tag: 'Brand Visibility',
          description: 'High-impact physical brand hardware that commands attention at trade expos, sports tournaments, mall activations, and roadside forecourts.',
          features: [
            'Hex-frame aluminum waterproof branded gazebos',
            'Teardrop, sharkfin, and telescoping flag banners',
            'Perimeter perforated mesh and PVC fence wraps',
            'Pop-up media backdrops and sampling counters',
          ],
        },
        'tactical-security': {
          title: 'Tactical & Security Uniform Solutions',
          tag: 'Defense & Protection',
          description: 'Ruggedized apparel and gear specifically manufactured for armed response units, private security guards, VIP escorts, and tactical squads.',
          features: [
            'Rip-stop combat trousers and tactical shirts',
            'Level IIIA ballistic vests and plate carriers',
            'Heavy-duty duty belts, baton holders and pouches',
            'Waterproof high-traction tactical response boots',
          ],
        },
        'corporate-gifting': {
          title: 'VIP Corporate Gifting & Merchandise',
          tag: 'Client Retention',
          description: 'Memorable, premium gifting collections to celebrate milestones, delight VIP clients, and power employee recognition campaigns.',
          features: [
            'Laser-engraved thermal drinkware and tech gear',
            'Debossed leatherette notebooks and metal executive pens',
            'Customized executive laptop backpacks and travel duffels',
            'Bespoke luxury gift boxes with custom unboxing ribbons',
          ],
        },
        'procurement-logistics': {
          title: 'SADC Procurement & Bulk Logistics',
          tag: 'Supply Chain',
          description: 'Streamlined consolidated supply solutions with door-to-door freight across South Africa and cross-border transport to all SADC partner states.',
          features: [
            'Consolidated one-invoice bulk procurement',
            'Cross-border customs documentation assistance',
            'Warehousing and staged delivery schedules',
            'Dedicated account manager for corporate contracts',
          ],
        },
      },
    },
    catalogue: {
      badge: 'Digital Catalogues & Rapid RFQ',
      titlePrefix: 'Core Products &',
      titleHighlight: 'Catalogue Browser',
      subtitle: 'Browse our most requested industrial boots, branded gazebos, and protective workwear. Add items to your Quote Basket or download full master trade catalogues below.',
      searchPlaceholder: 'Search boots, gazebos, PPE...',
      popularChoice: 'Popular Choice',
      moqPrefix: 'MOQ:',
      indicativePrefix: 'Indicative:',
      addToQuote: 'Add to Quote',
      addedToQuote: 'Added to Quote!',
      whatsappInquiry: 'WhatsApp Inquiry',
      tabs: {
        all: 'All Catalog Lines',
        footwear: 'Safety Boots & Footwear',
        display: 'Outdoor Displays & Gazebos',
        ppe: 'Industrial PPE',
        medical: 'Hygiene & Coveralls',
      },
      products: {
        'excavator-s3-boot': {
          name: 'Excavator S3 Heavy Industrial Safety Boot',
          categoryLabel: 'Safety Footwear',
          description: 'Ultimate rugged protection engineered for heavy mining, engineering, and harsh terrain construction.',
          features: ['S3 Certified', 'Composite Toe Cap', 'Waterproof Full-Grain Leather', 'Slip & Heat Resistant Outsole'],
        },
        'holton-s3-boot': {
          name: 'Holton Classic Goodyear-Welted Boot',
          categoryLabel: 'Safety Footwear',
          description: 'The iconic heavy-duty workhorse safety boot built for exceptional durability and long workday comfort.',
          features: ['Steel Toe Cap (200J)', 'Goodyear Welt Construction', 'Oil & Acid Resistant', 'Genuine Cowhide Leather'],
        },
        'mae-ladies-boot': {
          name: 'Mae Ergonomic Ladies Safety Boot',
          categoryLabel: 'Safety Footwear',
          description: 'Designed specifically on a female foot mold for superior comfort in manufacturing, warehousing, and logistics.',
          features: ['Ladies Specific Fit', 'Steel Toe Protection', 'Cushioned EVA Midsole', 'Breathable Mesh Lining'],
        },
        'resorption-s3-boot': {
          name: 'Resorption S3 Waterproof Tactical Boot',
          categoryLabel: 'Safety Footwear',
          description: 'All-weather tactical and security safety boot with superior ankle support and slip protection.',
          features: ['Waterproof Membrane', 'Electrical Hazard Safe', 'Shock Absorption Heel', 'High-Traction Tread'],
        },
        'kontrakta-boot': {
          name: 'Kontrakta General Utility Safety Boot',
          categoryLabel: 'Safety Footwear',
          description: 'Cost-effective high-volume work boot ideal for general construction, logistics, and site workers.',
          features: ['Steel Toe Cap', 'Dual-Density PU Sole', 'Padded Collar', 'CE / SABS Tested'],
        },
        'chelsea-dealer-boot': {
          name: 'Chelsea Slip-On Dealer Safety Boot',
          categoryLabel: 'Safety Footwear',
          description: 'Executive site boot combining effortless slip-on convenience with full industrial grade safety.',
          features: ['Elasticated Side Gussets', 'Quick Pull-On Tabs', 'Steel Toe Protection', 'Premium Nubuck Finish'],
        },
        'non-metallic-safety-boot': {
          name: 'Non-Metallic Metal-Free Airport/Substation Boot',
          categoryLabel: 'Safety Footwear',
          description: 'Engineered for electrical substations, airports, and high-security screening facilities.',
          features: ['100% Metal-Free', 'Composite Toe & Midsole', 'Anti-Static ESD', 'Scanner Friendly'],
        },
        'radical-safety-shoe': {
          name: 'Radical Low-Cut Athletic Safety Shoe',
          categoryLabel: 'Safety Footwear',
          description: 'Agile and lightweight safety shoe for light manufacturing, couriers, and warehouse technicians.',
          features: ['Sport Lightweight Design', 'Steel Toe Cap', 'Breathable Upper', 'Flexible PU Sole'],
        },
        'heavy-duty-gazebo': {
          name: 'Heavy-Duty 3x3m Branded Aluminum Gazebo Toolkit',
          categoryLabel: 'Branded Displays',
          description: 'Commercial grade pop-up marquee gazebo engineered to withstand outdoor winds and sun exposure.',
          features: ['40mm Hex Aluminum Frame', 'Full-Colour Dye-Sublimation', 'Waterproof & UV Coated', 'Wheeled Bag & Pegs'],
        },
        'promotional-fence-wrap': {
          name: 'Custom Perforated PVC Fence Wrap (Per Meter)',
          categoryLabel: 'Branded Displays',
          description: 'High-impact perimeter branding for construction hoardings, sports stadiums, and outdoor festivals.',
          features: ['Wind-Permeable Air Mesh', 'Eyelets every 500mm', 'UV Weather Resistant', 'Vibrant Print'],
        },
        'digital-pvc-pennants': {
          name: 'Digital Printed PVC Triangular Pennant Bunting',
          categoryLabel: 'Branded Displays',
          description: 'Eye-catching festival, forecourt, and dealership boundary bunting customized to your branding.',
          features: ['Double-Sided Digital Print', 'Braided Poly Rope', 'Custom Lengths', 'Fade Resistant'],
        },
        'modular-kiosk-display': {
          name: 'Modular Pop-Up Promotional Sampling Kiosk',
          categoryLabel: 'Branded Displays',
          description: 'Portable retail counter and brand activation booth assembled in under 2 minutes without tools.',
          features: ['Foldable Counter', 'Full Graphic Panel', 'Internal Storage Shelf', 'Overhead Header Banner'],
        },
        'promax-disposable-coverall': {
          name: 'PROMAX Breathable Chemical & Dust Coverall (Type 5/6)',
          categoryLabel: 'Protective Workwear',
          description: 'Essential barrier protection for spray painting, abatement, chemical handling, and cleanrooms.',
          features: ['Type 5/6 Particle Barrier', 'Elasticated Hood & Cuffs', 'Microporous Fabric', 'Lint Free'],
        },
        'auto-dispenser-700ml': {
          name: 'Commercial Automatic Touch-Free Sensor Dispenser (700ml)',
          categoryLabel: 'Facility Hygiene',
          description: 'Touchless sanitation unit designed for high-traffic office receptions, hospitals, and restrooms.',
          features: ['Infrared Smart Sensor', 'Liquid & Gel Compatible', 'Lockable Anti-Theft Case', 'Wall Mount Kit'],
        },
      },
      downloads: {
        badge: 'Comprehensive PDF Trade Catalogues',
        title: 'Need Full Product Specs & Range Overviews?',
        subtitle: 'Download the latest 2025/2026 manufacturer trade catalogues containing thousands of styles, color options, and sizing charts.',
        requestCustom: 'Request Custom Branded Catalogue',
        requestPdf: 'Request PDF',
        items: [
          {
            title: 'Barron Corporate & Workwear Master Catalogue',
            pages: '450+ Pages',
            category: 'Apparel & Gifting',
            fileSize: '48 MB PDF',
            description: 'Comprehensive guide to executive shirts, golfers, jackets, headwear, and brandable corporate gifts.',
          },
          {
            title: 'Amrod Promotional & Tech Merchandise Catalogue',
            pages: '600+ Pages',
            category: 'Gifting & Display',
            fileSize: '65 MB PDF',
            description: 'Complete range of corporate gifts, drinkware, bags, writing instruments, and outdoor display hardware.',
          },
          {
            title: 'Industrial PPE & SABS Safety Gear Guide',
            pages: '120+ Pages',
            category: 'PPE & Industrial',
            fileSize: '22 MB PDF',
            description: 'Conti suits, high-visibility reflector wear, safety boots, respiratory, eye & hearing protection specs.',
          },
          {
            title: 'Tactical, Ballistic & Security Equipment Catalog',
            pages: '80+ Pages',
            category: 'Security & Tactical',
            fileSize: '18 MB PDF',
            description: 'Combat uniforms, ballistic armor, tactical boots, baton/cuff gear, and private security accessories.',
          },
        ],
      },
    },
    about: {
      badge: 'About CLAPSA',
      titlePrefix: 'One Partner. Complete Procurement Integrity across',
      titleHighlight: 'Africa',
      trustedBadge: 'Trusted across Southern Africa',
      p1: 'Founded on the principle of making corporate and industrial purchasing effortless, CLAPSA Procurement has evolved into a premier supply partner for corporate enterprises, civil contractors, mining groups, and government agencies.',
      p2: 'We bridge the gap between world-class trade manufacturers (Barron, Amrod, Altitude, Caterpillar, TOGS) and high-demand corporate clients by providing in-house branding precision, stringent SABS safety compliance, and seamless SADC cross-border logistics.',
      statSatisfaction: 'Client Satisfaction',
      statSatisfactionDesc: 'Corporate contract renewals',
      statDeliveries: 'Completed Deliveries',
      statDeliveriesDesc: 'Mining & corporate contracts',
      statPartners: 'Trade Partners',
      statPartnersDesc: 'Barron, Amrod, Altitude & more',
      statRfq: 'RFQ Response',
      statRfqDesc: 'Formal quotation delivery',
      pillarStandardsTitle: 'Certified Standards',
      pillarStandardsDesc: 'Every conti suit, harness, and safety boot undergoes strict certification for flame, acid, impact, and chemical resistance.',
      pillarBrandingTitle: 'Precision In-House Branding',
      pillarBrandingDesc: 'Computerized high-density embroidery, screen printing, and UV sublimated event hardware with pantone accuracy.',
      partnerWithClapsa: 'Partner with Clapsa',
      callHeadquarters: 'Call Headquarters',
    },
    testimonials: {
      badge: 'Client Feedback & Endorsements',
      titlePrefix: 'What Procurement Leaders',
      titleHighlight: 'Say About Us',
      items: [
        {
          quote: 'CLAPSA transformed our entire mining operational gear. Outfitting over 1,200 contractors with SABS flame-retardant conti suits and CAT safety boots within our tight 10-day shutdown window was nothing short of miraculous.',
          author: 'Johan van der Merwe',
          role: 'Procurement & Safety Director',
          company: 'Gauteng Mineral Logistics',
          initials: 'JM',
        },
        {
          quote: 'The level of precision in their embroidery and the quality of their executive shirts exceeded all expectations. Our nationwide sales fleet now looks sharp, cohesive, and confident in every boardroom.',
          author: 'Naledi Sithole',
          role: 'Head of Brand & Communications',
          company: 'Pan-African Fleet & Logistics',
          initials: 'NS',
        },
        {
          quote: 'We ordered 30 heavy-duty branded gazebos and 80 teardrop banners for our regional tournament. Even through high winds and rains, the prints stayed vibrant and the frames held strong. Truly dependable partners.',
          author: 'Carlos Mendes',
          role: 'Events Operations Manager',
          company: 'Apex Athletics & Sports Series',
          initials: 'CM',
        },
      ],
    },
    contact: {
      badge: 'Fast 24-Hour Quote Turnaround',
      titlePrefix: 'Request a',
      titleHighlight: 'Corporate Proposal',
      subtitle: 'Ready to equip your workforce or elevate your brand presence? Fill out the brief form below or connect directly with our Johannesburg procurement team.',
      hqTitle: 'Johannesburg Headquarters',
      locationLabel: 'Location',
      crossBorderSub: 'Cross-Border Delivery across SADC',
      phoneLabel: 'Direct Telephone',
      emailLabel: 'Official RFQ Email',
      hoursLabel: 'Business Hours',
      hoursValue: 'Monday – Friday: 08:00 – 17:00 (CAT)',
      chatWhatsApp: 'Chat Live on WhatsApp',
      logisticsGuaranteeTitle: 'Regional Logistics Guarantee',
      logisticsGuaranteeDesc: 'We service all 9 South African provinces with expedited freight and handle all customs documentation for cross-border shipments to Botswana, Mozambique, Zimbabwe, Namibia, and Zambia.',
      formTitle: 'Submit Formal RFQ Specs',
      companyName: 'Company Name *',
      companyPlaceholder: 'e.g. Acme Mining Corp',
      contactPerson: 'Contact Person *',
      contactPlaceholder: 'e.g. Sarah Jenkins',
      corporateEmail: 'Corporate Email *',
      emailPlaceholder: 's.jenkins@company.co.za',
      phone: 'Telephone / WhatsApp *',
      phonePlaceholder: '082 123 4567',
      categoryInterest: 'Primary Product Category',
      categoryOptions: [
        'Corporate Apparel & Uniforms',
        'Industrial PPE & Conti Suits',
        'Safety Boots & Technical Footwear',
        'Outdoor Gazebos & Event Displays',
        'Tactical & Security Equipment',
        'VIP Corporate Gifting & Merchandise',
        'Full Consolidated Procurement Contract',
      ],
      estimatedVolume: 'Estimated Order Volume',
      volumeOptions: [
        '10 - 50 Units (Sample / Initial Run)',
        '50 - 200 Units (Standard Fleet)',
        '200 - 1,000 Units (Large Department)',
        '1,000+ Units (Enterprise / Mine Shutdown)',
        'Ongoing Monthly Supply Agreement',
      ],
      projectRequirements: 'Project Requirements & Branding Specs',
      requirementsPlaceholder: 'Please specify branding type (embroidery, screen print), color preferences, sizing, and required delivery date...',
      submitQuote: 'Request Official Quotation',
      sendWhatsApp: 'Send via WhatsApp',
      receivedTitle: 'Quotation Request Received!',
      receivedDescPrefix: 'Thank you,',
      receivedDescSuffix: '. Our procurement team is compiling your customized specifications and will contact you within 24 hours.',
      submitAnother: 'Submit Another Request',
      forwardWhatsAppNow: 'Forward to WhatsApp Now',
    },
    quoteDrawer: {
      title: 'Your RFQ Quote Basket',
      linesCount: 'product line(s) selected',
      totalUnits: 'total units',
      emptyTitle: 'Your Quote Basket is Empty',
      emptyDesc: 'Browse our products or case studies and click "Add to Quote" to build an itemized quotation request.',
      browseCatalogue: 'Browse Catalogue',
      rfqPricing: 'RFQ Pricing',
      clearBasket: 'Clear entire basket',
      contactTitle: 'Your Contact & Branding Info',
      companyPlaceholder: 'Company / Organization Name',
      contactPlaceholder: 'Contact Person Name',
      phonePlaceholder: 'Phone / WhatsApp Number',
      notesPlaceholder: 'Embroidery, printing, sizing or delivery details...',
      sendWhatsApp: 'Send RFQ via WhatsApp',
      sendEmail: 'Send RFQ via Official Email',
    },
    whatsappFloat: {
      chatLabel: 'Chat with Consultant',
      ariaLabel: 'Chat directly on WhatsApp with CLAPSA Consultant',
      title: 'Chat directly on WhatsApp',
    },
    footer: {
      summary: 'Premier one-source corporate procurement partner delivering certified PPE, high-density embroidered workwear, outdoor event display hardware, and VIP corporate gifts across South Africa and the SADC.',
      adminPanel: 'Admin Panel',
      quickLinks: 'Quick Links',
      supplySolutions: 'Supply Solutions',
      office: 'Johannesburg Office',
      allRights: 'All Rights Reserved.',
      sabsCompliance: 'SABS Certified Compliance',
      bbbeeProcurement: 'B-BBEE Ready Procurement',
      backToTop: 'Back to Top',
    },
  },

  pt: {
    nav: {
      sabsBanner: 'EPI Certificado SABS & Bordados Corporativos de Precisão',
      servingRegion: 'A servir',
      regionHighlight: 'África do Sul & SADC',
      controlPanel: 'Painel de Controlo',
      home: 'Início',
      ourWork: 'Portfólio',
      capabilities: 'Serviços',
      catalogues: 'Catálogos',
      aboutUs: 'Sobre Nós',
      contact: 'Contacto',
      quote: 'Cotação',
      requestQuote: 'Pedir Cotação',
      switchThemeLight: 'Mudar para Modo Claro',
      switchThemeDark: 'Mudar para Modo Escuro',
      openControlPanel: 'Abrir Painel de Controlo',
      whatsappDirect: 'Contacto Direto WhatsApp',
      requestCorporateQuote: 'Solicitar Cotação Corporativa',
      taglineSub: 'Soluções Integradas',
      taglineProc: 'Aprovisionamento',
      selectLanguage: 'Selecionar Idioma',
    },
    hero: {
      badge: 'Soluções Integradas de Aprovisionamento • África do Sul & SADC',
      headlinePrefix: 'Eleve a sua Força de Trabalho e Marca com',
      headlineHighlight: 'Aprovisionamento de Precisão',
      subtitle: 'Desenvolvemos e entregamos Uniformes Corporativos, EPI Industrial Certificado, Tendas Promocionais de Alto Impacto e Brindes VIP para as maiores empresas de África.',
      checkpoints: [
        'Equipamento Conforme Normas SABS e ISO',
        'Bordados Computorizados de Alta Densidade',
        'Contratos Corporativos por Atacado',
        'Logística e Frete Rápido para a SADC',
      ],
      viewPastWork: 'Ver Os Nossos Projetos Recentes',
      browseCatalogues: 'Consultar Catálogos & Cotações',
      speakToConsultant: 'Falar com um Consultor',
      featuredProject: 'Projeto em Destaque',
      projectTag: 'Vestuário Corporativo Personalizado',
      projectTitle: 'Casacos de Inverno e Fardamento Técnico com Marca',
      projectDesc: 'Programas completos de uniformes com bordados de alta precisão e durabilidade.',
      statSatisfaction: 'Satisfação',
      statDeployments: 'Entregas',
      statLogistics: 'Logística',
    },
    partners: {
      title: 'Rede Autorizada de Fornecimento e Fabrico Corporativo',
      subtitle: 'Acesso direto de 1º nível aos principais catálogos de vestuário, EPI e brindes da África Austral',
      sabsBadge: 'Vestuário Aprovado SABS & ISO',
      warrantiesBadge: 'Garantias Autênticas de Fabricante',
      bbbeeBadge: 'Aprovisionamento B-BBEE Ready',
      sadcBadge: 'Frete Transfronteiriço SADC',
    },
    portfolio: {
      badge: 'Histórico Comprovado e Destaques de Clientes',
      titlePrefix: 'A Nossa Galeria de',
      titleHighlight: 'Projetos e Obras Recentes',
      subtitle: 'Desde fornecimento massivo de EPI para mineração e fardamento executivo até ativações de marca em estádios — descubra como a CLAPSA entrega com rigor, dentro do orçamento e no prazo.',
      tabs: {
        all: 'Todos os Projetos',
        corporate: 'Vestuário Corporativo',
        ppe: 'EPI Industrial & Segurança',
        display: 'Tendas & Sinalética de Marca',
        security: 'Fardamento Tático & Segurança',
        gifting: 'Brindes Corporativos VIP',
      },
      client: 'Cliente',
      completed: 'Concluído em',
      viewCaseStudy: 'Ver Estudo de Caso',
      modal: {
        projectOverview: 'Visão Geral do Projeto',
        scopeOfSupply: 'Âmbito de Fornecimento & Entregáveis',
        close: 'Fechar Janela',
        inquireWhatsApp: 'Consultar por WhatsApp',
        requestProposal: 'Solicitar Proposta',
      },
      items: {
        'clapsa-corporate-apparel-collection': {
          title: 'Casacos de Inverno Personalizados & Fardamento Corporativo',
          client: 'Frota e Logística Empresarial Nacional',
          tag: 'Guarda-Roupa Corporativo',
          categoryLabel: 'Vestuário Corporativo',
          location: 'Joanesburgo, África do Sul',
          description: 'Conceção, personalização e fabrico de casacos corporativos acolchoados com bordado de alta densidade para equipas administrativas e filiais regionais.',
          deliverables: [
            'Casacos Térmicos Impermeáveis com Forro e Detalhes Vermelhos',
            'Bordados Computorizados no Peito e Mangas com Alta Definição',
            'Kits de Tamanhos Individuais por Colaborador com Embalagem Própria',
            'Distribuição Integral em Toda a África do Sul e Centros da SADC',
          ],
        },
        'industrial-ppe-safety-shoot': {
          title: 'Fornecimento de EPI Certificado, Óculos de Proteção e Luvas Industriais',
          client: 'Grupo de Engenharia Pesada e Fabrico Industrial',
          tag: 'EPI Industrial',
          categoryLabel: 'EPI Industrial & Segurança',
          location: 'Gauteng e Mpumalanga',
          description: 'Fornecimento completo de óculos de proteção UV antirrisco, luvas de alta resistência ao corte, proteção respiratória e calçado de segurança para fábricas.',
          deliverables: [
            'Óculos de Proteção UV Antirrisco e Antiembaçamento',
            'Luvas Industriais Reforçadas em Nitrilo e Couro Nível 5',
            'Calçado de Segurança com Sola de Dupla Densidade e Palmilha de Aço',
            'Documentação Completa de Conformidade SABS e ISO 9001',
          ],
        },
        'security-tactical-uniforms': {
          title: 'Equipamento Tático e Uniformes para Segurança Privada',
          client: 'Serviços de Escolta VIP e Resposta Armada Premier',
          tag: 'Equipamento Tático',
          categoryLabel: 'Fardamento Tático & Segurança',
          location: 'Joanesburgo e Pretória',
          description: 'Equipamento integral para mais de 400 agentes com fardamento de combate de alta resistência rip-stop, camisas com platinas e botas táticas.',
          deliverables: [
            'Calças de Combate Rip-Stop e Camisas de Patrulha com Platinas',
            'Botas Táticas de Cano Alto S3 com Máxima Aderência',
            'Cintos de Serviço Reforçados, Coldres de Bastão e Bolsas para Rádio',
            'Casacos de Chuva Refletores de Alta Visibilidade para Patrulha Noturna',
          ],
        },
        'outdoor-gazebo-displays': {
          title: 'Tendas Promocionais Personalizadas e Conjunto de Ativação Exterior',
          client: 'Marca de Retalho Pan-Africana & Campeonato Desportivo',
          tag: 'Expositores de Eventos',
          categoryLabel: 'Tendas & Sinalética de Marca',
          location: 'Nacional (África do Sul e SADC)',
          description: 'Fabrico de estruturas promocionais exteriores completas, incluindo tendas de alumínio hexagonal reforçado, bandeiras teardrop e balcões portáteis.',
          deliverables: [
            'Tendas 3x3m Impermeáveis com Impressão por Sublimação em Todas as Paredes',
            'Bandeiras Teardrop e Sharkfin de 4m com Impressão em Frente e Verso',
            'Telas Perfuradas em PVC para Vedações e Perímetros',
            'Quiosques Promocionais Portáteis para Degustação e Roadshows',
          ],
        },
        'mining-protective-gear': {
          title: 'EPI para Mineração e Proteção Respiratória Certificada',
          client: 'Operações de Infraestrutura Civil e Mineração Subterrânea',
          tag: 'Segurança Mineira',
          categoryLabel: 'EPI Industrial & Segurança',
          location: 'Rustenburg e Witbank',
          description: 'Fornecimento a granel de capacetes ventilados certificados, máscaras respiratórias, fatos macaco refletores e calçado de mineração S3.',
          deliverables: [
            'Capacetes Ventilados Aprovados SABS com Logótipo da Empresa',
            'Semimáscaras Respiratórias FFP2 / FFP3 contra Partículas e Poeiras',
            'Fatos Macaco D59 Ignífugos e Antiácido de Alta Durabilidade',
            'Botas de Segurança S3 Caterpillar e Excavator para Terrenos Exigentes',
          ],
        },
        'lifestyle-brand-apparel': {
          title: 'Coleção de Roupa Desportiva, Bonés e Acessórios com Marca',
          client: 'Associação de Desporto e Bem-Estar Corporativo',
          tag: 'Roupa Desportiva & Bonés',
          categoryLabel: 'Vestuário Corporativo',
          location: 'Cidade do Cabo e Joanesburgo',
          description: 'Fornecimento e personalização de roupa desportiva técnica leve, bonés de 6 painéis em algodão escovado e casacos desportivos para torneios corporativos.',
          deliverables: [
            'T-Shirts Técnicas e Polos Respiráveis com Controlo de Humidade',
            'Bonés Estruturados de 6 Painéis com Bordado 3D de Alta Definição',
            'Sacos de Desporto Personalizados e Garrafas Térmicas de Água',
            'Logística de Ajuste e Distribuição no Local do Evento',
          ],
        },
        'executive-corporate-gifting': {
          title: 'Brindes Executivos VIP para Clientes & Acessórios Metálicos',
          client: 'Empresa de Consultoria Financeira e Gestão de Património',
          tag: 'Brindes VIP',
          categoryLabel: 'Brindes Corporativos VIP',
          location: 'Centro de Joanesburgo (CBD)',
          description: 'Curadoria de 800 conjuntos de presentes VIP de luxo com lanternas metálicas gravadas a laser, baterias externas executivas, garrafas térmicas e blocos em couro.',
          deliverables: [
            'Acessórios Metálicos em Preto Fosco com Gravação a Laser de Alta Precisão',
            'Agendas Executivas em Couro Sintético com Baixo-Relevo e Canetas Metálicas',
            'Garrafas e Copos Térmicos em Aço Inoxidável com Isolamento a Vácuo',
            'Embalagens de Apresentação de Luxo Personalizadas com Cartões de Agradecimento',
          ],
        },
        'flag-banners-outdoor': {
          title: 'Bandeiras Telescópicas e Teardrop para Perímetro de Estádios',
          client: 'Gestão Regional de Atletismo e Eventos',
          tag: 'Sinalética de Estádio',
          categoryLabel: 'Tendas & Sinalética de Marca',
          location: 'Gauteng',
          description: 'Fabrico de bandeiras exteriores telescópicas de alta durabilidade e bandeirolas resistentes ao vento com impressão fotográfica por sublimação.',
          deliverables: [
            '50x Bandeiras Telescópicas de 4m com Impressão em Frente e Verso',
            'Bases em Ferro Fundido de Alta Tração e Resistência ao Vento',
            '1.000m de Bandeirolas Triangulares Personalizadas em PVC Digital',
            'Produção Rápida em 48 Horas e Entrega Direta no Estádio',
          ],
        },
      },
    },
    services: {
      badge: 'Soluções de Ponta a Ponta',
      titlePrefix: 'Soluções Abrangentes de',
      titleHighlight: 'Aprovisionamento',
      subtitle: 'Simplificamos as compras corporativas atuando como o seu parceiro central para confeção têxtil, personalização, equipamento de segurança e logística integrada.',
      requestSolution: 'Solicitar Solução Específica',
      items: {
        'corporate-apparel': {
          title: 'Guarda-Roupa Corporativo & Uniformes',
          tag: 'Uniformes & Vestuário',
          description: 'Programas de uniformes desenhados à medida da identidade da sua marca. Desde camisas executivas e malhas até polos de campo e fardamento para hotelaria.',
          features: [
            'Bordados computorizados de alta densidade em instalações próprias',
            'Serigrafia, estampagem térmica e sublimação têxtil',
            'Cortes ergonómicos masculinos e femininos em todos os tamanhos',
            'Embalamento individualizado e etiquetado por funcionário',
          ],
        },
        'ppe-safety': {
          title: 'EPI Industrial Certificado & Vestuário de Trabalho',
          tag: 'Conformidade e Segurança',
          description: 'Equipamento de segurança certificado para proteger os colaboradores em ambientes de risco. Fatos macaco SABS, calçado de proteção e segurança em altura.',
          features: [
            'Fatos macaco D59 resistentes a chamas e ácidos',
            'Botas de segurança S3, S1P e biqueira compósita não-metálica',
            'Arneses antiqueda, proteção respiratória e ocular',
            'Vestuário refletor de alta visibilidade em conformidade com EN471',
          ],
        },
        'display-branding': {
          title: 'Tendas Promocionais & Sinalética Exterior',
          tag: 'Visibilidade de Marca',
          description: 'Estruturas publicitárias de grande impacto visual para feiras comerciais, torneios desportivos, ações de rua e eventos corporativos.',
          features: [
            'Tendas promocionais impermeáveis com estrutura de alumínio hexagonal',
            'Bandeiras promocionais teardrop, sharkfin e telescópicas',
            'Lonas microperfuradas e revestimentos em PVC para vedações',
            'Pórticos, balcões de amostragem e painéis pop-up de imprensa',
          ],
        },
        'tactical-security': {
          title: 'Fardamento e Equipamento Tático de Segurança',
          tag: 'Defesa & Proteção',
          description: 'Vestuário e acessórios reforçados desenvolvidos para empresas de segurança privada, unidades de intervenção rápida e escoltas VIP.',
          features: [
            'Calças de combate rip-stop e camisas táticas com platinas',
            'Coletes balísticos Nível IIIA e suportes de placas táticas',
            'Cintos de serviço reforçados, coldres e bolsas para rádio',
            'Botas táticas impermeáveis de cano alto com tração superior',
          ],
        },
        'corporate-gifting': {
          title: 'Brindes Corporativos VIP & Merchandising',
          tag: 'Fidelização & Relações',
          description: 'Coleções de brindes memoráveis e de alta qualidade para celebrar conquistas, homenagear clientes VIP e motivar equipas.',
          features: [
            'Garrafas térmicas e acessórios tecnológicos gravados a laser',
            'Cadernos executivos em pele sintética e canetas de metal',
            'Mochilas ergonómicas para portátil e malas de viagem com marca',
            'Caixas de presente de luxo com fitas e embalamento exclusivo',
          ],
        },
        'procurement-logistics': {
          title: 'Aprovisionamento SADC & Logística em Grande Escala',
          tag: 'Cadeia de Suprimentos',
          description: 'Gestão consolidada de encomendas com entregas porta-a-porta na África do Sul e desalfandegamento para todos os países membros da SADC.',
          features: [
            'Faturação centralizada e compras em grande escala',
            'Apoio integral no desalfandegamento e documentação aduaneira',
            'Armazenamento e entregas escalonadas conforme necessidade',
            'Gestor de conta dedicado para contratos empresariais',
          ],
        },
      },
    },
    catalogue: {
      badge: 'Catálogos Digitais & Cotações Rápidas',
      titlePrefix: 'Produtos Principais &',
      titleHighlight: 'Explorador de Catálogo',
      subtitle: 'Consulte as nossas botas industriais mais procuradas, tendas promocionais e fardamento de proteção. Adicione artigos ao seu Cesto de Cotação ou descarregue os catálogos completos.',
      searchPlaceholder: 'Pesquisar botas, tendas, EPI, uniformes...',
      popularChoice: 'Mais Procurado',
      moqPrefix: 'Qtd. Mínima:',
      indicativePrefix: 'Preço Indicativo:',
      addToQuote: 'Adicionar à Cotação',
      addedToQuote: 'Adicionado à Cotação!',
      whatsappInquiry: 'Consultar via WhatsApp',
      tabs: {
        all: 'Todas as Linhas',
        footwear: 'Calçado de Segurança',
        display: 'Tendas & Bandeiras',
        ppe: 'EPI Industrial',
        medical: 'Higiene & Macacões',
      },
      products: {
        'excavator-s3-boot': {
          name: 'Bota de Segurança Industrial Pesada Excavator S3',
          categoryLabel: 'Calçado de Segurança',
          description: 'Máxima proteção robusta desenvolvida para mineração pesada, engenharia e construção em terrenos acidentados.',
          features: ['Certificação S3', 'Biqueira em Compósito', 'Couro Hidrófugo Genuíno', 'Sola Antiderrapante & Anticalórica'],
        },
        'holton-s3-boot': {
          name: 'Bota Clássica Goodyear-Welted Holton',
          categoryLabel: 'Calçado de Segurança',
          description: 'A bota de trabalho icónica construída para uma durabilidade excecional e conforto em longas jornadas.',
          features: ['Biqueira de Aço (200J)', 'Construção Goodyear Welt', 'Resistente a Óleos e Ácidos', 'Couro Bovino Genuíno'],
        },
        'mae-ladies-boot': {
          name: 'Bota Ergonómica Feminina Mae',
          categoryLabel: 'Calçado de Segurança',
          description: 'Concebida especificamente para o molde feminino para conforto superior na indústria, logística e armazéns.',
          features: ['Molde Específico para Mulher', 'Proteção com Biqueira de Aço', 'Entressola EVA Amortecida', 'Forro Respirável em Malha'],
        },
        'resorption-s3-boot': {
          name: 'Bota Tática Impermeável Resorption S3',
          categoryLabel: 'Calçado de Segurança',
          description: 'Bota tática e de segurança para qualquer clima, com excelente suporte de tornozelo e aderência.',
          features: ['Membrana Impermeável', 'Segura contra Riscos Elétricos', 'Amortecimento no Calcanhar', 'Piso de Alta Tração'],
        },
        'kontrakta-boot': {
          name: 'Bota de Segurança de Uso Geral Kontrakta',
          categoryLabel: 'Calçado de Segurança',
          description: 'Bota económica para frotas de grande volume, ideal para construção geral, logística e obras.',
          features: ['Biqueira de Aço', 'Sola PU de Dupla Densidade', 'Colarinho Acolchoado', 'Testada CE / SABS'],
        },
        'chelsea-dealer-boot': {
          name: 'Bota Chelsea Slip-On sem Atacadores',
          categoryLabel: 'Calçado de Segurança',
          description: 'Bota executiva de visita a obras combinando facilidade de calçar com proteção industrial completa.',
          features: ['Elásticos Laterais Reforçados', 'Puxadores de Calçar Rápido', 'Proteção com Biqueira de Aço', 'Acabamento Nobuck Premium'],
        },
        'non-metallic-safety-boot': {
          name: 'Bota Não-Metálica (Aeroportos & Subestações)',
          categoryLabel: 'Calçado de Segurança',
          description: '100% isenta de metal, ideal para subestações elétricas, aeroportos e instalações com detetores de metal.',
          features: ['100% Livre de Metais', 'Biqueira e Palmilha Compósitas', 'Antiestática ESD', 'Compatível com Scanners'],
        },
        'radical-safety-shoe': {
          name: 'Sapato de Segurança Desportivo Radical',
          categoryLabel: 'Calçado de Segurança',
          description: 'Sapato de segurança ágil e ultraleve para manufatura ligeira, distribuidores e técnicos de armazém.',
          features: ['Design Desportivo Leve', 'Biqueira de Aço', 'Malha Têxtil Respirável', 'Sola Flexível em PU'],
        },
        'heavy-duty-gazebo': {
          name: 'Kit Completo de Tenda Promocional 3x3m em Alumínio',
          categoryLabel: 'Estruturas Promocionais',
          description: 'Tenda desdobrável de nível comercial projetada para resistir a ventos fortes e exposição solar contínua.',
          features: ['Estrutura Hexagonal 40mm Alumínio', 'Impressão Total Sublimada', 'Impermeável & Proteção UV', 'Saco com Rodas & Estacas'],
        },
        'promotional-fence-wrap': {
          name: 'Lona Perfurada em PVC para Vedações (Por Metro)',
          categoryLabel: 'Estruturas Promocionais',
          description: 'Comunicação perimétrica de grande impacto para tapumes de obras, estádios desportivos e festivais.',
          features: ['Malha Microperfurada Antivento', 'Ilhoses a Cada 500mm', 'Resistente a Intempéries UV', 'Impressão Fotográfica Viva'],
        },
        'digital-pvc-pennants': {
          name: 'Bandeirolas Triangulares Personalizadas em PVC',
          categoryLabel: 'Estruturas Promocionais',
          description: 'Bandeirolas atrativas para eventos, postos de abastecimento e frotas de concessionários.',
          features: ['Impressão Digital Dupla Face', 'Corda Náutica Reforçada', 'Comprimentos Personalizados', 'Resistente ao Desbotamento'],
        },
        'modular-kiosk-display': {
          name: 'Balcão de Degustação e Ativação Promocional Modular',
          categoryLabel: 'Estruturas Promocionais',
          description: 'Balcão de atendimento portátil montado em menos de 2 minutos sem qualquer ferramenta.',
          features: ['Balcão Dobrável Leve', 'Painel Gráfico Envolvente', 'Prateleira de Arrumação Interna', 'Topete Superior de Destaque'],
        },
        'promax-disposable-coverall': {
          name: 'Fato Macaco Descartável PROMAX Químico e Poeiras (Tipo 5/6)',
          categoryLabel: 'Vestuário de Proteção',
          description: 'Barreira protetora essencial para pintura por pulverização, manuseamento de químicos e salas limpas.',
          features: ['Barreira Certificada Tipo 5/6', 'Capuz, Punhos e Tornozelos Elásticos', 'Tecido Microporoso Respirável', 'Livre de Fiapos'],
        },
        'auto-dispenser-700ml': {
          name: 'Dispensador Automático com Sensor sem Contacto (700ml)',
          categoryLabel: 'Higiene Institucional',
          description: 'Unidade de desinfeção sem toque desenhada para receções de alto tráfego, hospitais e sanitários.',
          features: ['Sensor Inteligente de Infravermelhos', 'Compatível com Sabão e Gel', 'Caixa com Fechadura Antifurto', 'Kit de Fixação Mural Incluído'],
        },
      },
      downloads: {
        badge: 'Catálogos Oficiais em Formato PDF',
        title: 'Precisa de Especificações e Variedade Completa?',
        subtitle: 'Descarregue os catálogos oficiais 2025/2026 com milhares de modelos, gamas de cores e tabelas de tamanhos detalhadas.',
        requestCustom: 'Solicitar Catálogo Personalizado',
        requestPdf: 'Pedir PDF',
        items: [
          {
            title: 'Catálogo Master de Vestuário Corporativo e Trabalho Barron',
            pages: '450+ Páginas',
            category: 'Vestuário & Brindes',
            fileSize: '48 MB PDF',
            description: 'Guia completo de camisas executivas, polos, casacos, bonés e vestuário com personalização.',
          },
          {
            title: 'Catálogo de Brindes Promocionais e Tecnologia Amrod',
            pages: '600+ Páginas',
            category: 'Brindes & Displays',
            fileSize: '65 MB PDF',
            description: 'Linha completa de brindes corporativos, garrafas térmicas, mochilas, esferográficas e displays exteriores.',
          },
          {
            title: 'Guia de Equipamento de Proteção Individual (EPI) e Normas SABS',
            pages: '120+ Páginas',
            category: 'EPI & Industrial',
            fileSize: '22 MB PDF',
            description: 'Fatos de macaco D59, coletes refletores, calçado de segurança, proteção respiratória, ocular e auditiva.',
          },
          {
            title: 'Catálogo de Equipamento Tático, Balístico e Segurança Privada',
            pages: '80+ Páginas',
            category: 'Segurança & Tático',
            fileSize: '18 MB PDF',
            description: 'Fardamento de combate, coletes balísticos, botas táticas, cinturões e acessórios de segurança privada.',
          },
        ],
      },
    },
    about: {
      badge: 'Sobre a CLAPSA',
      titlePrefix: 'Um Único Parceiro. Integridade Total de Aprovisionamento em',
      titleHighlight: 'África',
      trustedBadge: 'De Confiança em Toda a África Austral',
      p1: 'Fundada com o compromisso de tornar as compras industriais e corporativas simples e eficientes, a CLAPSA Procurement consolidou-se como o parceiro de eleição para grandes empresas, construtoras civis, grupos mineiros e entidades públicas.',
      p2: 'Conectamos os maiores fabricantes mundiais (Barron, Amrod, Altitude, Caterpillar, TOGS) a clientes corporativos exigentes, assegurando personalização com acabamento rigoroso, conformidade com as normas de segurança SABS e logística transfronteiriça sem complicações.',
      statSatisfaction: 'Satisfação de Clientes',
      statSatisfactionDesc: 'Renovações de contratos corporativos',
      statDeliveries: 'Entregas Concluídas',
      statDeliveriesDesc: 'Contratos industriais e mineiros',
      statPartners: 'Parceiros de Fabrico',
      statPartnersDesc: 'Barron, Amrod, Altitude e outros',
      statRfq: 'Resposta a Cotações',
      statRfqDesc: 'Envio de propostas formais',
      pillarStandardsTitle: 'Padrões e Normas Certificadas',
      pillarStandardsDesc: 'Cada fato macaco, arnês e bota de segurança cumpre rigorosos testes contra fogo, ácidos, impactos e agentes químicos.',
      pillarBrandingTitle: 'Personalização Própria de Precisão',
      pillarBrandingDesc: 'Bordados computorizados de alta densidade, serigrafia de precisão e sublimação UV com fidelidade exata às cores corporativas.',
      partnerWithClapsa: 'Trabalhe com a Clapsa',
      callHeadquarters: 'Ligar para a Sede',
    },
    testimonials: {
      badge: 'Testemunhos & Avaliações de Clientes',
      titlePrefix: 'O Que Dizem os Diretores de',
      titleHighlight: 'Aprovisionamento',
      items: [
        {
          quote: 'A CLAPSA transformou por completo o nosso aprovisionamento operacional para minas. Equipar mais de 1.200 colaboradores com fatos de macaco D59 antifogo certificados pela SABS e botas CAT durante a nossa paragem de 10 dias foi um trabalho excecional.',
          author: 'Johan van der Merwe',
          role: 'Diretor de Aprovisionamento e Segurança',
          company: 'Gauteng Mineral Logistics',
          initials: 'JM',
        },
        {
          quote: 'A precisão dos bordados e a qualidade das camisas executivas superaram todas as expetativas. A nossa equipa comercial em toda a região apresenta-se agora com distinção e confiança em todas as reuniões de direção.',
          author: 'Naledi Sithole',
          role: 'Diretora de Marca e Comunicação',
          company: 'Pan-African Fleet & Logistics',
          initials: 'NS',
        },
        {
          quote: 'Encomendámos 30 tendas promocionais reforçadas e 80 bandeiras tipo gota para o nosso campeonato regional. Mesmo com vento forte e chuva, as cores mantiveram-se vivas e as estruturas intactas. Parceiros de extrema confiança.',
          author: 'Carlos Mendes',
          role: 'Gestor de Operações de Eventos',
          company: 'Apex Athletics & Sports Series',
          initials: 'CM',
        },
      ],
    },
    contact: {
      badge: 'Resposta a Cotações em 24 Horas',
      titlePrefix: 'Solicitar uma',
      titleHighlight: 'Proposta Corporativa',
      subtitle: 'Pronto para equipar a sua equipa ou destacar a sua marca no mercado? Preencha o formulário abaixo ou fale diretamente com a nossa equipa em Joanesburgo.',
      hqTitle: 'Sede em Joanesburgo',
      locationLabel: 'Localização',
      crossBorderSub: 'Entregas Rápidas em Toda a Região SADC',
      phoneLabel: 'Telefone Direto',
      emailLabel: 'Email Oficial para Cotações',
      hoursLabel: 'Horário de Funcionamento',
      hoursValue: 'Segunda a Sexta: 08:00 – 17:00 (CAT)',
      chatWhatsApp: 'Falar em Direto no WhatsApp',
      logisticsGuaranteeTitle: 'Garantia de Logística Regional',
      logisticsGuaranteeDesc: 'Cobrimos todas as 9 províncias da África do Sul com frete expresso e tratamos de todo o processo aduaneiro para envios a Moçambique, Angola, Botsuana, Zimbabué, Namíbia e Zâmbia.',
      formTitle: 'Submeter Especificações para Cotação',
      companyName: 'Nome da Empresa *',
      companyPlaceholder: 'Ex: Sociedade Mineira Moçambique',
      contactPerson: 'Pessoa de Contacto *',
      contactPlaceholder: 'Ex: António Silva',
      corporateEmail: 'Email Corporativo *',
      emailPlaceholder: 'a.silva@empresa.co.mz',
      phone: 'Telefone / WhatsApp *',
      phonePlaceholder: '+258 84 123 4567',
      categoryInterest: 'Categoria Principal de Produto',
      categoryOptions: [
        'Vestuário Corporativo & Uniformes',
        'EPI Industrial & Fatos Macaco',
        'Botas de Segurança & Calçado Técnico',
        'Tendas Promocionais & Sinalética Exterior',
        'Equipamento Tático & Segurança Privada',
        'Brindes Corporativos VIP & Merchandising',
        'Contrato Geral Consolidado de Aprovisionamento',
      ],
      estimatedVolume: 'Volume Estimado da Encomenda',
      volumeOptions: [
        '10 - 50 Unidades (Amostras / Lote Inicial)',
        '50 - 200 Unidades (Equipa Padrão)',
        '200 - 1.000 Unidades (Grande Departamento)',
        '1.000+ Unidades (Empresa Inteira / Paragem Mineira)',
        'Contrato de Fornecimento Mensal Contínuo',
      ],
      projectRequirements: 'Requisitos do Projeto e Personalização',
      requirementsPlaceholder: 'Indique o tipo de personalização (bordado, serigrafia), cores, quantidades por tamanho e prazo limite de entrega...',
      submitQuote: 'Solicitar Proposta Formal',
      sendWhatsApp: 'Enviar via WhatsApp',
      receivedTitle: 'Pedido de Cotação Recebido!',
      receivedDescPrefix: 'Muito obrigado,',
      receivedDescSuffix: '. A nossa equipa está a analisar as suas especificações e entrará em contacto dentro de 24 horas úteis.',
      submitAnother: 'Submeter Outro Pedido',
      forwardWhatsAppNow: 'Reencaminhar para WhatsApp Agora',
    },
    quoteDrawer: {
      title: 'O Seu Cesto de Cotação (RFQ)',
      linesCount: 'linha(s) de produtos selecionada(s)',
      totalUnits: 'unidades totais',
      emptyTitle: 'O Seu Cesto de Cotação está Vazio',
      emptyDesc: 'Explore os nossos produtos ou estudos de caso e clique em "Adicionar à Cotação" para montar o seu pedido.',
      browseCatalogue: 'Explorar Catálogo',
      rfqPricing: 'Preço sob Consulta',
      clearBasket: 'Limpar todo o cesto',
      contactTitle: 'Dados de Contacto e Personalização',
      companyPlaceholder: 'Nome da Empresa / Instituição',
      contactPlaceholder: 'Nome do Responsável',
      phonePlaceholder: 'Número de Telefone / WhatsApp',
      notesPlaceholder: 'Detalhes de bordado, impressão, tamanhos ou morada de entrega...',
      sendWhatsApp: 'Enviar Cotação via WhatsApp',
      sendEmail: 'Enviar Cotação via Email Oficial',
    },
    whatsappFloat: {
      chatLabel: 'Falar com Consultor',
      ariaLabel: 'Falar diretamente no WhatsApp com um consultor CLAPSA',
      title: 'Falar diretamente no WhatsApp',
    },
    footer: {
      summary: 'Parceiro corporativo integrado de aprovisionamento, fornecendo EPI certificado, vestuário de trabalho com bordados de alta precisão, estruturas para eventos e brindes VIP em toda a África do Sul e SADC.',
      adminPanel: 'Painel Administrativo',
      quickLinks: 'Links Rápidos',
      supplySolutions: 'Soluções de Fornecimento',
      office: 'Escritório de Joanesburgo',
      allRights: 'Todos os Direitos Reservados.',
      sabsCompliance: 'Conformidade Certificada SABS',
      bbbeeProcurement: 'Aprovisionamento Preparado para B-BBEE',
      backToTop: 'Voltar ao Topo',
    },
  },

  af: {
    nav: {
      sabsBanner: 'SABS-Gesertifiseerde WBT & Hoëgehalte Korporatiewe Handelsmerke',
      servingRegion: 'Diens lewer aan',
      regionHighlight: 'Suid-Afrika & SAOG',
      controlPanel: 'Beheerpaneel',
      home: 'Tuis',
      ourWork: 'Portefeulje',
      capabilities: 'Dienste',
      catalogues: 'Katalogusse',
      aboutUs: 'Oor Ons',
      contact: 'Kontak',
      quote: 'Kwotasie',
      requestQuote: 'Vra Kwotasie Aan',
      switchThemeLight: 'Skakel oor na Ligte Modus',
      switchThemeDark: 'Skakel oor na Donker Modus',
      openControlPanel: 'Maak Beheerpaneel Oop',
      whatsappDirect: 'WhatsApp Regstreekse Navraag',
      requestCorporateQuote: 'Vra Korporatiewe Kwotasie Aan',
      taglineSub: 'Enkelbron Oplossings',
      taglineProc: 'Voorsiening',
      selectLanguage: 'Kies Taal',
    },
    hero: {
      badge: 'Enkelbron-Voorsieningsoplossings • Suid-Afrika & SAOG',
      headlinePrefix: 'Verhef U Werksmag en Handelsmerk met',
      headlineHighlight: 'Presisie-Aankope',
      subtitle: 'Ons ontwerp en lewer sleutelklaar Korporatiewedrag, Gesertifiseerde Industriële WBT (PPE), Hoë-Impak Buite-Uitstallings en BBP-Bemarkingsgeskenke vir Afrika se voorste ondernemings.',
      checkpoints: [
        'SABS- en ISO-Standaard Voldoenende Toerusting',
        'Eie Hoë-Digtheid Rekenaarborduurwerk',
        'Grootmaat Korporatiewe Kontrakte',
        'Vinnige Oorgrens-Vragvervoer binne SAOG',
      ],
      viewPastWork: 'Bekyk Ons Vorige en Onlangse Projekte',
      browseCatalogues: 'Blaai deur Katalogusse & RFQ',
      speakToConsultant: 'Praat met ’n Konsultant',
      featuredProject: 'Uitgesoekte Projek',
      projectTag: 'Gepasmaakte Korporatiewedrag',
      projectTitle: 'Gepasmaakte Winterbaadjies & Tegniese Werkdrag',
      projectDesc: 'Volledige werknemer-uniformprogramme met hoë-presisie borduurwerk.',
      statSatisfaction: 'Tevredenheid',
      statDeployments: 'Aflewerings',
      statLogistics: 'Logistiek',
    },
    partners: {
      title: 'Gemagtigde Korporatiewe Voorsienings- en Vervaardigingsnetwerk',
      subtitle: 'Regstreekse vlak-1 toegang tot Suider-Afrika se voorste klerasie-, WBT- en promosiekatalogusse',
      sabsBadge: 'SABS- en ISO-Goedgekeurde Kledingstukke',
      warrantiesBadge: 'Oorspronklike Vervaardigerswaarborge',
      bbbeeBadge: 'B-BBEE Voorsieningsgereed',
      sadcBadge: 'Oorgrens SAOG-Vragvervoer',
    },
    portfolio: {
      badge: 'Bewese Rekord & Kliëntehoogtepunte',
      titlePrefix: 'Ons Vorige & Onlangse',
      titleHighlight: 'Projekte-Vertoonvenster',
      subtitle: 'Van streekswye mynbou-WBT-uitrol en pasgemaakte korporatiewe kantooruitrustings tot stadion-handelsmerkaktiverings — ontdek hoe CLAPSA volgens spesifikasie, binne begroting en betyds lewer.',
      tabs: {
        all: 'Alle Projekte',
        corporate: 'Korporatief & Spandrag',
        ppe: 'Industriële WBT & Veiligheid',
        display: 'Handelsmerk-Uitstallings & Tekens',
        security: 'Takties & Sekuriteit',
        gifting: 'Korporatiewe Geskenke',
      },
      client: 'Kliënt',
      completed: 'Voltooi in',
      viewCaseStudy: 'Bekyk Gevalletoets',
      modal: {
        projectOverview: 'Projekoorsig',
        scopeOfSupply: 'Omvang van Lewering & Uitsette',
        close: 'Maak Vertoonvenster Toe',
        inquireWhatsApp: 'Doen Navraag op WhatsApp',
        requestProposal: 'Vra Voorstel Aan',
      },
      items: {
        'clapsa-corporate-apparel-collection': {
          title: 'Pasgemaakte Winterbaadjies & Korporatiewe Klerasie',
          client: 'Nasionale Ondernemingsvloot & Logistiek',
          tag: 'Korporatiewe Klerekas',
          categoryLabel: 'Korporatiewe Klerasie',
          location: 'Johannesburg, Suid-Afrika',
          description: 'Ontwerp, pasgemaak en vervaardig van volledige hoëdigtheid-geborduurde korporatiewe baadjies, winterjasse en handelsmerk-handelsware vir kantoor- en streekspersoneel.',
          deliverables: [
            'Weerbestande Gestopte Winterbaadjies met Pasgemaakte Rooi Voering',
            'Hoëdigtheid Gerekenariseerde Bors- en Mou-Handelsmerkborduurwerk',
            'Individuele Werknemer-Groottekits & Pasgemaakte Verpakking',
            'Volledige SAOG-Verspreiding regoor Suid-Afrika en Streeksentrums',
          ],
        },
        'industrial-ppe-safety-shoot': {
          title: 'Gesertifiseerde WBT-Veiligheidstoerusting, Oogbeskerming & Handskoene',
          client: 'Swaaringenieurswese & Industriële Vervaardigingsgroep',
          tag: 'Industriële WBT',
          categoryLabel: 'Industriële WBT & Veiligheid',
          location: 'Gauteng & Mpumalanga',
          description: 'Voorsiening van omvattende oogbeskermingsbrille, snybestande hanteringshandskoene, asemhalingsbeskerming en veiligheidsskoene vir aanlegwerkers.',
          deliverables: [
            'Krap- & Wasembestande UV-Beskermende Veiligheidsbrille',
            'Snyvlak-5 Nitriel & Leer-Versterkte Industriële Handskoene',
            'Swaardiens Dubbeldigtheid-Veiligheidskoene met Staal-Middelsool',
            'SABS- en ISO 9001-Voldoeningsdokumentasie',
          ],
        },
        'security-tactical-uniforms': {
          title: 'Gewapende Reaksie & Privaat Sekuriteit Taktiese Uitrusting',
          client: 'Premier Sekuriteit & BBP-Begeleidingsdienste',
          tag: 'Taktiese Toerusting',
          categoryLabel: 'Takties & Sekuriteit',
          location: 'Johannesburg & Pretoria',
          description: 'Meer as 400 sekuriteitsbeamptes en patrolliewagte toegerus met duursame taktiese uniforms, gevegshemde met epoulette en patrolliestewels.',
          deliverables: [
            'Skeurbestande Gevegsbroeke & Sekuriteitshemde met Epoulette',
            'Taktiese Hoë-Enkel S3 Beskermende Stewels',
            'Versterkte Dienstegordels, Knuppelhouers & Radiosakkies',
            'Hoësigtbaarheid Nagpatrollie Reflekterende Reënbaadjies',
          ],
        },
        'outdoor-gazebo-displays': {
          title: 'Hoë-Impak Handelsmerk-Gazebo’s & Buitelug-Aktiveringstel',
          client: 'Pan-Afrikaanse Kleinhandel-Handelsmerk & Sportkampioenskap',
          tag: 'Gebeurtenis-Uitstallings',
          categoryLabel: 'Handelsmerk-Uitstallings & Tekens',
          location: 'Nasionaal (SA & SAOG)',
          description: 'Vervaardiging van volledige buitelug-handelsmerkaktiveringstrukture insluitend swaardiens seskant-aluminium gazebo’s, dubbelkantige vlae en promosiekiosks.',
          deliverables: [
            'Swaardiens 3x3m Waterdigte Gazebo’s met Volmuur Sublimasiedruk',
            'Dubbelkantige 4m Druppel- & Haaivin-Vlae',
            'Geperforeerde PVC Heinings- en Grensomhulsel',
            'Draagbare Handelsmerk-Monsternemingskiosks vir Padvertonings',
          ],
        },
        'mining-protective-gear': {
          title: 'Mynbou WBT & Gesertifiseerde Asemhalingsbeskerming',
          client: 'Siviele Infrastruktuur & Ondergrondse Mynbedrywighede',
          tag: 'Mynveiligheid',
          categoryLabel: 'Industriële WBT & Veiligheid',
          location: 'Rustenburg & Witbank',
          description: 'Grootmaatvoorsiening van geventileerde veiligheidshaelms, stofmaskers, hoësigtbaarheid oorpakke en S3 mynstewels.',
          deliverables: [
            'SABS-Goedgekeurde Geventileerde Veiligheidshaelms met Maatskappykentekens',
            'FFP2 / FFP3 Deeltjie-Asemhalingshalfmaskers',
            'D59 Vlam- en Suurbestande Swaardiens Oorpakke',
            'Caterpillar & Excavator S3 Swaardiens Veiligheidstewels',
          ],
        },
        'lifestyle-brand-apparel': {
          title: 'Handelsmerk-Aktiewe Drag, Pette & Hoofbedekking-Versameling',
          client: 'Korporatiewe Fiksheid- & Atletiekvereniging',
          tag: 'Aktiewedrag & Pette',
          categoryLabel: 'Korporatiewe Klerasie',
          location: 'Kaapstad & Johannesburg',
          description: 'Voorsiening en pasmaak van liggewig tegniese sportdrag, 6-paneel geborselde katoenpette en sportbaadjies vir streekstoernooie.',
          deliverables: [
            'Vogbestuur Tegniese Asemhalende T-Hemde & Gholfhemde',
            '6-Paneel Gestruktureerde Geborselde Katoenpette met 3D-Borduurwerk',
            'Gepasmaakte Sportsakke & Termiese Waterbottels',
            'Op-Terrein Pas- en Verspreidingslogistiek',
          ],
        },
        'executive-corporate-gifting': {
          title: 'BBP-Kliënt Uitvoerende Geskenke & Metaalbykomstighede',
          client: 'Finansiële Advies- & Batebestuursfirma',
          tag: 'BBP-Geskenke',
          categoryLabel: 'Korporatiewe Geskenke',
          location: 'Johannesburg SBG',
          description: 'Samestelling van 800 luukse BBP-geskenkstelle met lasergraveerde metaaltoortse, uitvoerende kragpakke, termiese drinkware en notaboeke.',
          deliverables: [
            'Pasgemaakte Mat-Swart Metaalbykomstighede met Presisie-Laseretsing',
            'Reliëf-Leerkuns Uitvoerende Organiseerders & Metaalpenne',
            'Dubbelwand-Vakuum-Geïsoleerde Vlekvryestaal Drinkware',
            'Luukse Aanbiedingsverpakking met Pasgemaakte Dankie-Kaartjies',
          ],
        },
        'flag-banners-outdoor': {
          title: 'Stadion-Perimeter Druppel- & Teleskopiese Vlagbaniere',
          client: 'Streeksatletiek- & Gebeurtenisbestuur',
          tag: 'Stadion-Tekens',
          categoryLabel: 'Handelsmerk-Uitstallings & Tekens',
          location: 'Gauteng',
          description: 'Vervaardiging van hoëduursaamheid teleskopiese buitelugvlae en windbestande gebeurteniswimpels met fotografiese kleursublimasiedruk.',
          deliverables: [
            '50x 4m Dubbelkantige Teleskopiese Swaardiensvlae',
            'Hoëtraksie Gietyster-Grondplate vir Windweerstand',
            '1 000m Pasgemaakte Driehoekige PVC Digitale Wimpels',
            'Vinnige 48-uur Ommeswaai en Aflewering by Stadion-Terrein',
          ],
        },
      },
    },
    services: {
      badge: 'Volledige Leweringsvermoëns',
      titlePrefix: 'Omvattende',
      titleHighlight: 'Voorsieningsoplossings',
      subtitle: 'Ons vereenvoudig ingewikkelde korporatiewe aankope deur as u enkelpunt-vennoot vir klerasievervaardiging, handelsmerke, veiligheidstoerusting en logistiek op te tree.',
      requestSolution: 'Vra Spesifieke Oplossing Aan',
      items: {
        'corporate-apparel': {
          title: 'Korporatiewe Klerekas & Spandrag',
          tag: 'Uniforms & Klerasie',
          description: 'Sleutelklaar uniformprogramme wat volgens u handelsmerkidentiteit ontwerp is. Van raadsaalhemde en truie tot swaardiens veldgholfhemde en gasvryheidsdrag.',
          features: [
            'Eie hoëdigtheid rekenaarborduurwerk in ons fasiliteite',
            'Skermdrukwerk, hitte-oordrag en kleurstofsublimasie',
            'Mans- en damessnitte oor alle groottes heen',
            'Individuele verpakking per werknemer',
          ],
        },
        'ppe-safety': {
          title: 'Gesertifiseerde Industriële WBT & Werkdrag',
          tag: 'Veiligheidsnakoming',
          description: 'Volledig voldoenende veiligheidstoerusting wat u werkers in gevaarlike omgewings beskerm. SABS-goedgekeurde oorpakke, veiligheidsskoene en valbeskerming.',
          features: [
            'D59 Vlam- en Suurbestaande oorpakke',
            'S3, S1P en metaalvrye saamgestelde veiligheidstewels',
            'Valstutharnasse, asemhalings- en oogbeskerming',
            'Reflekterende hoësigbaarheid EN471-voldoenende kledingstukke',
          ],
        },
        'display-branding': {
          title: 'Buitelug-Uitstallings & Geleentheidstekens',
          tag: 'Handelsmerksigbaarheid',
          description: 'Hoë-impak fisiese handelsmerkapparate wat aandag trek by handelskoue, sporttoernooie, winkelsentrum-aktiverings en buitelug-byeenkomste.',
          features: [
            'Seskanthoek-aluminium waterdigte handelsmerk-gazebo’s',
            'Traan-, haaivin- en teleskopiese vlae',
            'Geperforeerde maas- en PVC-heiningomslae',
            'Opslaan-mediabagne en promosie-toonbanke',
          ],
        },
        'tactical-security': {
          title: 'Taktiese & Sekuriteitsuniform-Oplossings',
          tag: 'Verdediging & Beskerming',
          description: 'Swaardiens klerasie en toerusting spesifiek vervaardig vir gewapende reaksie-eenhede, privaatwagte, BBP-begeleiers en taktiese spanne.',
          features: [
            'Skeurvaste gevegsbroeke en taktiese hemde met epoulette',
            'Vlak IIIA ballistiese baadjies en plaathouers',
            'Swaardiens diensgordels, knuppelhouers en radiosakkies',
            'Waterdigte hoë-traksie taktiese reaksiestewels',
          ],
        },
        'corporate-gifting': {
          title: 'BBP Korporatiewe Geskenke & Bemarkingsware',
          tag: 'Kliëntebehoud',
          description: 'Onvergeetlike, luukse geskenkversamelings om mylpale te vier, BBP-kliënte te bederf en werknemerserkenning te dryf.',
          features: [
            'Lasergraveerde termiese drinkware en tegnologie-items',
            'Reliëfgedrukte leërnotaboeke en metaal uitvoerende penne',
            'Pasgemaakte skootrekenaarrugsakke en reissakke',
            'Luukse pasgemaakte geskenkbokse met pasgemaakte linte',
          ],
        },
        'procurement-logistics': {
          title: 'SAOG-Aankope & Grootmaat-Logistiek',
          tag: 'Voorsieningsketting',
          description: 'Gestroomlynde gekonsolideerde voorsieningsoplossings met deur-tot-deur vraggeld regoor Suid-Afrika en oorgrens-vervoer na alle SAOG-vennootstate.',
          features: [
            'Gekonsolideerde enkelrekening-grootmaataankope',
            'Hulp met oorgrens-doeanedokumentasie',
            'Pakhuisdienste en geskeduleerde lewerings',
            'Toegewyde rekeningbestuurder vir korporatiewe kontrakte',
          ],
        },
      },
    },
    catalogue: {
      badge: 'Digitale Katalogusse & Vinnige RFQ',
      titlePrefix: 'Kernprodukte &',
      titleHighlight: 'Katalogus-Blaaier',
      subtitle: 'Blaai deur ons gewildste industriële stewels, handelsmerk-gazebo’s en beskermende werkdrag. Voeg items by u Kwotasiemandjie of laai volledige handelskatalogusse hieronder af.',
      searchPlaceholder: 'Soek stewels, gazebo’s, WBT, klere...',
      popularChoice: 'Gewilde Keuse',
      moqPrefix: 'Min. Bestelling:',
      indicativePrefix: 'Aanduidende Prys:',
      addToQuote: 'Voeg by Kwotasie',
      addedToQuote: 'Bygevoeg!',
      whatsappInquiry: 'WhatsApp Navraag',
      tabs: {
        all: 'Alle Kataloguslyne',
        footwear: 'Veiligheidstewels & Skoene',
        display: 'Buitelug-Uitstallings & Gazebo’s',
        ppe: 'Industriële WBT',
        medical: 'Higiëne & Oorpakke',
      },
      products: {
        'excavator-s3-boot': {
          name: 'Excavator S3 Swaardiens Industriële Veiligheidstewel',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Maksimum robuuste beskerming ontwerp vir swaar mynbou, ingenieurswese en rowwe konstruksieterreine.',
          features: ['S3 Gesertifiseer', 'Saamgestelde Neusbeskermer', 'Waterdigte Volnerfleer', 'Gly- & Hittebestande Sole'],
        },
        'holton-s3-boot': {
          name: 'Holton Klassieke Goodyear-Welted Werkstewel',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Die ikoniese swaardiens werkstewel gebou vir buitengewone duursaamheid en heeldag-gerief.',
          features: ['Staalneus (200J)', 'Goodyear Welt Konstruksie', 'Olie- & Suurbestand', 'Egte Beesleer'],
        },
        'mae-ladies-boot': {
          name: 'Mae Ergonomiese Dames Veiligheidstewel',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Spesifiek ontwerp volgens ’n vroulike voetvorm vir uitstekende gemak in vervaardiging en pakhuise.',
          features: ['Dames Spesifieke Pasvorm', 'Staalneusbeskerming', 'Kussing-EVA Middelsool', 'Asemhalende Netvoering'],
        },
        'resorption-s3-boot': {
          name: 'Resorption S3 Waterdigte Taktiese Stewel',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Alle-weersomstandighede taktiese en sekuriteitsveiligheidstewel met uitstekende enkelsteun en greep.',
          features: ['Waterdigte Membraan', 'Elektriese Gevaar Veilig', 'Skokdempende Hak', 'Hoë-Traksie Loopvlak'],
        },
        'kontrakta-boot': {
          name: 'Kontrakta Algemene Nutswerkstewel',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Koste-effektiewe grootmaat werkstewel ideaal vir algemene konstruksie, logistiek en terreinwerkers.',
          features: ['Staalneusbeskermer', 'Dubbeldigtheid PU-sool', 'Gevoerde Kraag', 'CE / SABS Getoets'],
        },
        'chelsea-dealer-boot': {
          name: 'Chelsea Aangliploop-Veiligheidstewel',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Uitvoerende terreinstewel wat maklike aantrek met volle industriële veiligheid kombineer.',
          features: ['Versterkte Sy-Elastiek', 'Vinnige Aantrektrekkers', 'Staalneusbeskerming', 'Premium Nubuck-Afwerking'],
        },
        'non-metallic-safety-boot': {
          name: 'Nie-Metaal Metaalvrye Lughawe/Substasie Stewel',
          categoryLabel: 'Veiligheidsskoene',
          description: '100% metaalvry ontwerp vir elektriese substasies, lughawens en hoë-sekuriteitsfasiliteite.',
          features: ['100% Metaalvry', 'Saamgestelde Neus & Middelsool', 'Anti-Staties ESD', 'Skandeerdervriendelik'],
        },
        'radical-safety-shoe': {
          name: 'Radical Lae-Sny Sportiewe Veiligheidsskoen',
          categoryLabel: 'Veiligheidsskoene',
          description: 'Fink en liggewig veiligheidsskoen vir ligte vervaardiging, koeriers en pakhuiswerkers.',
          features: ['Sportiewe Liggewigontwerp', 'Staalneusbeskermer', 'Asemhalende Tekstiel', 'Buigsame PU-sool'],
        },
        'heavy-duty-gazebo': {
          name: 'Swaardiens 3x3m Handelsmerk-Aluminium Gazebo-Stel',
          categoryLabel: 'Handelsmerk-Uitstallings',
          description: 'Kommersiële opslaangazebo gebou om buitelugwinde en aanhoudende sonblootstelling te weerstaan.',
          features: ['40mm Heks-Aluminiumraam', 'Volkleur Kleurstofsublimasie', 'Waterdig & UV-Bestand', 'Wielsak & Penne'],
        },
        'promotional-fence-wrap': {
          name: 'Pasgemaakte Geperforeerde PVC-Heiningomhulsel (Per Meter)',
          categoryLabel: 'Handelsmerk-Uitstallings',
          description: 'Hoë-impak grensbemarking vir konstruksieheinings, sportstadions en buitelugfeeste.',
          features: ['Winddeurlatende Lugnetwerk', 'Versterkte Oogies elke 500mm', 'UV-Weerbestand', 'Heldere Drukwerk'],
        },
        'digital-pvc-pennants': {
          name: 'Digitaal Gedrukte Driehoekige PVC-Vlae / Wimpels',
          categoryLabel: 'Handelsmerk-Uitstallings',
          description: 'Ooglopende fees-, voorplaas- en motorhandelaar-wimpels pasgemaak volgens u handelsmerk.',
          features: ['Dubbelkantige Digitale Druk', 'Swaardiens Gevlegte Tou', 'Pasgemaakte Lengtes', 'Vervaagbestand'],
        },
        'modular-kiosk-display': {
          name: 'Modulêre Opslaan-Promosietoonbank & Kiosk',
          categoryLabel: 'Handelsmerk-Uitstallings',
          description: 'Draagbare kleinhandelstoonbank en promosiehokkie opgerig binne 2 minute sonder gereedskap.',
          features: ['Liggewig Voubare Toonbank', 'Volledige Grafiese Paneel', 'Interne Bergrak', 'Bokant-Opskrifbaander'],
        },
        'promax-disposable-coverall': {
          name: 'PROMAX Asemhalende Chemiese & Stof Oorpak (Tipe 5/6)',
          categoryLabel: 'Beskermende Werkdrag',
          description: 'Noodsaaklike versperringsbeskerming vir spuitverf, chemiese hantering en skoonkamers.',
          features: ['Tipe 5/6 Partikelversperring', 'Elastiese Kap, Moue & Enkels', 'Mikroporeuse Stof', 'Pluisvry'],
        },
        'auto-dispenser-700ml': {
          name: 'Kommersiële Outomatiese Kontaklose Sensor-Dispenser (700ml)',
          categoryLabel: 'Fasiliteitshigiëne',
          description: 'Kontaklose ontsmettingseenheid ontwerp vir besige kantoorontvangste, hospitale en toilette.',
          features: ['Infrarooi Slimsensor', 'Vloeistof & Gel Versoenbaar', 'Sluitbare Anti-Diefstal Omhulsel', 'Muurmonteringsrak Ingesluit'],
        },
      },
      downloads: {
        badge: 'Omvattende PDF-Handelskatalogusse',
        title: 'Benodig u Volledige Produkspesifikasies?',
        subtitle: 'Laai die nuutste 2025/2026 vervaardigerskatalogusse af met duisende style, kleuropsies en groottediagramme.',
        requestCustom: 'Vra Pasgemaakte Katalogus Aan',
        requestPdf: 'Vra PDF Aan',
        items: [
          {
            title: 'Barron Korporatiewe & Werkdrag Meesterkatalogus',
            pages: '450+ Bladsye',
            category: 'Klerasie & Geskenke',
            fileSize: '48 MB PDF',
            description: 'Omvattende gids tot uitvoerende hemde, gholfhemde, baadjies, hoofbedekkings en pasgemaakte korporatiewe klerasie.',
          },
          {
            title: 'Amrod Promosie- & Tegnologie-Geskenkekatalogus',
            pages: '600+ Bladsye',
            category: 'Geskenke & Uitstallings',
            fileSize: '65 MB PDF',
            description: 'Volledige reeks korporatiewe geskenke, drinkware, sakke, skryfbehoeftes en buitelug-uitstaltoerusting.',
          },
          {
            title: 'Industriële WBT & SABS Veiligheidsgids',
            pages: '120+ Bladsye',
            category: 'WBT & Industrieel',
            fileSize: '22 MB PDF',
            description: 'Oorpakke, hoë-sigbaarheid weerkaatsers, veiligheidstewels, asemhaling-, oog- en gehoorbeskerming.',
          },
          {
            title: 'Taktiese, Ballistiese & Sekuriteitstoerusting-Katalogus',
            pages: '80+ Bladsye',
            category: 'Sekuriteit & Takties',
            fileSize: '18 MB PDF',
            description: 'Gevegsuniforms, ballistiese baadjies, taktiese stewels, knuppels en sekuriteitstoebehore.',
          },
        ],
      },
    },
    about: {
      badge: 'Oor CLAPSA',
      titlePrefix: 'Een Vennoot. Volledige Aankope-Integriteit regoor',
      titleHighlight: 'Afrika',
      trustedBadge: 'Vertrou regoor Suidelike Afrika',
      p1: 'Gegrond op die beginsel om korporatiewe en industriële aankope moeiteloos te maak, het CLAPSA Procurement ontwikkel tot ’n voorste voorsieningsvennoot vir korporatiewe ondernemings, siviele kontrakteurs, mynbou-groepe en staatsinstellings.',
      p2: 'Ons oorbrug die gaping tussen wêreldklas vervaardigers (Barron, Amrod, Altitude, Caterpillar, TOGS) en hoë-aanvraag korporatiewe kliënte deur eie presisie-borduurwerk, streng SABS-veiligheidsnakoming en naatlose SAOG-oorgrenslogistiek te lewer.',
      statSatisfaction: 'Kliëntetevredenheid',
      statSatisfactionDesc: 'Korporatiewe kontrakhernuwings',
      statDeliveries: 'Voltooide Aflewerings',
      statDeliveriesDesc: 'Mynbou- en korporatiewe kontrakte',
      statPartners: 'Handelsvennote',
      statPartnersDesc: 'Barron, Amrod, Altitude & meer',
      statRfq: 'Kwotasie-Reaksie',
      statRfqDesc: 'Formele kwotasie-aflewering',
      pillarStandardsTitle: 'Gesertifiseerde Standaarde',
      pillarStandardsDesc: 'Elke oorpak, harnas en veiligheidstewel ondergaan streng sertifisering vir vlam-, suur-, impak- en chemiese weerstand.',
      pillarBrandingTitle: 'Presisie Eie Handelsmerke',
      pillarBrandingDesc: 'Rekenaargesteunde hoëdigtheid-borduurwerk, skermdrukwerk en UV-gesublimeerde hardeware met akkurate Pantone-kleure.',
      partnerWithClapsa: 'Werk saam met Clapsa',
      callHeadquarters: 'Bel Hoofkantoor',
    },
    testimonials: {
      badge: 'Kliënteterugvoer & Aanbevelings',
      titlePrefix: 'Wat Aankope-Leiers',
      titleHighlight: 'Oor Ons Sê',
      items: [
        {
          quote: 'CLAPSA het ons hele mynbou-operasionele toerusting getransformeer. Om meer as 1,200 kontrakteurs binne ons kort 10-dae afsluitingsperiode met SABS-vuurvertragende oorpakke en CAT-veiligheidstewels toe te rus, was wonderbaarlik.',
          author: 'Johan van der Merwe',
          role: 'Aankope & Veiligheidsdirekteur',
          company: 'Gauteng Mineral Logistics',
          initials: 'JM',
        },
        {
          quote: 'Die vlak van presisie in hul borduurwerk en die gehalte van hul uitvoerende hemde het alle verwagtinge oortref. Ons landwye verkoopspan lyk nou skerp, professioneel en selfversekerd in elke raadsaal.',
          author: 'Naledi Sithole',
          role: 'Hoof van Handelsmerk & Kommunikasie',
          company: 'Pan-African Fleet & Logistics',
          initials: 'NS',
        },
        {
          quote: 'Ons het 30 swaardiens-gazebo’s en 80 druppelvlae vir ons streekstoernooi bestel. Selfs deur sterk winde en reën het die kleure helder gebly en die rame sterk gestaan. Waarlik betroubare vennote.',
          author: 'Carlos Mendes',
          role: 'Gebeurtenis-Bedryfsbestuurder',
          company: 'Apex Athletics & Sports Series',
          initials: 'CM',
        },
      ],
    },
    contact: {
      badge: 'Vinnige 24-Uur Kwotasie-Ommeswaai',
      titlePrefix: 'Vra ’n',
      titleHighlight: 'Korporatiewe Voorstel Aan',
      subtitle: 'Gereed om u werkers toe te rus of u handelsmerk teenwoordigheid te verhoog? Vul die kort vorm hieronder in of skakel direk met ons Johannesburg-aankopespan.',
      hqTitle: 'Johannesburg Hoofkantoor',
      locationLabel: 'Ligging',
      crossBorderSub: 'Oorgrensaflewering regoor SAOG',
      phoneLabel: 'Direkte Telefoon',
      emailLabel: 'Amptelike RFQ-E-pos',
      hoursLabel: 'Besigheidsure',
      hoursValue: 'Maandag – Vrydag: 08:00 – 17:00 (CAT)',
      chatWhatsApp: 'Gesels Regstreeks op WhatsApp',
      logisticsGuaranteeTitle: 'Streekslogistiek-Waarborg',
      logisticsGuaranteeDesc: 'Ons bedien al 9 Suid-Afrikaanse provinsies met snelle vragvervoer en hanteer alle doeanedokumentasie vir oorgrensbessendings na Botswana, Mosambiek, Zimbabwe, Namibië en Zambië.',
      formTitle: 'Dien Formele RFQ-Spesifikasies In',
      companyName: 'Maatskappynaam *',
      companyPlaceholder: 'bv. Acme Mynbou Korporasie',
      contactPerson: 'Kontakpersoon *',
      contactPlaceholder: 'bv. Johan van der Walt',
      corporateEmail: 'Korporatiewe E-pos *',
      emailPlaceholder: 'j.vdwalt@maatskappy.co.za',
      phone: 'Telefoon / WhatsApp *',
      phonePlaceholder: '082 123 4567',
      categoryInterest: 'Primêre Produkkategorie',
      categoryOptions: [
        'Korporatiewe Klerasie & Uniforms',
        'Industriële WBT & Oorpakke',
        'Veiligheidstewels & Tegniese Skoene',
        'Buitelug-Gazebo’s & Handelsmerk-Uitstallings',
        'Taktiese & Sekuriteitstoerusting',
        'BBP Korporatiewe Geskenke & Promosie-Items',
        'Volledige Gekonsolideerde Voorsieningskontrak',
      ],
      estimatedVolume: 'Beraamde Bestelvolume',
      volumeOptions: [
        '10 - 50 Eenhede (Monster / Aanvanklike Lopie)',
        '50 - 200 Eenhede (Standaard Vloot)',
        '200 - 1,000 Eenhede (Groot Departement)',
        '1,000+ Eenhede (Onderneming / Myn-Afsluiting)',
        'Deurlopende Maandelikse Leweringsooreenkoms',
      ],
      projectRequirements: 'Projekvereistes & Handelsmerkspesifikasies',
      requirementsPlaceholder: 'Spesifiseer asseblief borduurwerk, kleure, groottes en vereiste afleweringsdatum...',
      submitQuote: 'Vra Amptelike Kwotasie Aan',
      sendWhatsApp: 'Stuur via WhatsApp',
      receivedTitle: 'Kwotasieversoek Ontvang!',
      receivedDescPrefix: 'Baie dankie,',
      receivedDescSuffix: '. Ons aankopespan stel u pasgemaakte spesifikasies saam en sal u binne 24 uur kontak.',
      submitAnother: 'Dien Nog ’n Versoek In',
      forwardWhatsAppNow: 'Stuur Nou na WhatsApp',
    },
    quoteDrawer: {
      title: 'U RFQ Kwotasiemandjie',
      linesCount: 'produklyn(e) gekies',
      totalUnits: 'totale eenhede',
      emptyTitle: 'U Kwotasiemandjie is Leeg',
      emptyDesc: 'Blaai deur ons produkte of gevalletoetse en klik op "Voeg by Kwotasie" om ’n gedetailleerde kwotasieversoek op te stel.',
      browseCatalogue: 'Blaai deur Katalogus',
      rfqPricing: 'RFQ-Pryse',
      clearBasket: 'Maak hele mandjie leeg',
      contactTitle: 'U Kontak- en Handelsmerkinligting',
      companyPlaceholder: 'Maatskappy- / Organisasienaam',
      contactPlaceholder: 'Kontakpersoon se Naam',
      phonePlaceholder: 'Telefoon- / WhatsApp-nommer',
      notesPlaceholder: 'Borduurwerk, drukwerk, groottes of afleweringsbesonderhede...',
      sendWhatsApp: 'Stuur RFQ via WhatsApp',
      sendEmail: 'Stuur RFQ via Amptelike E-pos',
    },
    whatsappFloat: {
      chatLabel: 'Gesels met Konsultant',
      ariaLabel: 'Gesels direk op WhatsApp met ’n CLAPSA-konsultant',
      title: 'Gesels direk op WhatsApp',
    },
    footer: {
      summary: 'Premier enkelbron korporatiewe voorsieningsvennoot wat gesertifiseerde WBT, hoëdigtheid-geborduurde werkdrag, buitelug-uitstallings en BBP-korporatiewe geskenke regoor Suid-Afrika en die SAOG lewer.',
      adminPanel: 'Beheerpaneel',
      quickLinks: 'Vinnige Skakels',
      supplySolutions: 'Voorsieningsoplossings',
      office: 'Johannesburg Kantoor',
      allRights: 'Alle Regte Voorbehou.',
      sabsCompliance: 'SABS-Gesertifiseerde Nakoming',
      bbbeeProcurement: 'B-BBEE Voorsieningsgereed',
      backToTop: 'Terug na Bo',
    },
  },
};
