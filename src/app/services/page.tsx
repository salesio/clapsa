'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  Briefcase,
  ShieldCheck,
  Sparkles,
  Layers,
  Flag,
  Gift,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileSpreadsheet,
  Cpu,
  Truck,
  Check,
  Award,
  ChevronRight,
  Play,
  Video,
  X
} from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const [activeMachineryVideo, setActiveMachineryVideo] = useState<{
    id: string;
    title: string;
    subtitle: string;
    videoSrc: string;
  } | null>(null);

  const machineryVideos = [
    {
      id: 'carousel-printing',
      title: 'Automated 8-Color Carousel Screen Printing',
      subtitle: 'High-speed automated squeegees with micro-registration and conveyor flash curing units.',
      videoSrc: '/videos/gallery/clapsa-carousel-screen-printing-reel.mp4',
      poster: '/videos/gallery/posters/clapsa-carousel-screen-printing-reel.webp',
      badge: 'Textile Printing'
    },
    {
      id: 'squeegee-precision',
      title: 'Precision Textile Squeegee Ink Application',
      subtitle: 'Uniform ink deposit stroke delivering vibrant, durable prints without cracking.',
      videoSrc: '/videos/gallery/precision-textile-squeegee-printing-stroke.mp4',
      poster: '/videos/gallery/posters/precision-textile-squeegee-printing-stroke.webp',
      badge: 'Ink Transfer'
    },
    {
      id: 'pallet-wrapping',
      title: 'Automated Pallet Stretch Wrapping Machine',
      subtitle: 'Turntable industrial wrapping ensuring weatherproof containment for freight.',
      videoSrc: '/videos/gallery/automated-pallet-stretch-wrapping-dispatch.mp4',
      poster: '/videos/gallery/posters/automated-pallet-stretch-wrapping-dispatch.webp',
      badge: 'Protective Packaging'
    },
    {
      id: 'forklift-loading',
      title: 'Toyota Forklift Heavy Dispatch & Freight Loading',
      subtitle: 'Rapid staging and loading of cross-border articulated trucks for SADC dispatch.',
      videoSrc: '/videos/gallery/toyota-forklift-loading-freight-trucks.mp4',
      poster: '/videos/gallery/posters/toyota-forklift-loading-freight-trucks.webp',
      badge: 'Freight Dispatch'
    }
  ];

  const capabilities = [
    {
      id: 'corporate-wardrobe',
      title: 'Corporate Wardrobe & Executive Uniforms',
      tag: 'Corporate & Hospitality',
      image: '/images/gallery/executive-pique-golf-shirts-embroidery.webp',
      icon: Briefcase,
      description: 'Turnkey executive clothing programs from tailored suits and corporate blazers to moisture-wicking golfers, oxford shirts, and knitted pullovers with computerized high-density embroidery.',
      features: [
        'Tailored Poly-Viscose Corporate Blazers & Formal Trousers',
        'Heavyweight 180gsm Combed Cotton & Poly-Cotton Golfers',
        'High-Density Computerized Chest & Sleeve Logo Embroidery',
        'Custom Dye-Matching to Corporate Brand Pantone Standards',
        'Individual Employee Size Profiling & Custom Boxed Kits'
      ],
      leadTime: '7 - 14 Business Days',
      moq: '50 Units',
      lookbookLink: '/gallery?category=corporate'
    },
    {
      id: 'industrial-ppe',
      title: 'Industrial PPE & Certified Workplace Safety',
      tag: 'SABS Approved Safety',
      image: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
      icon: ShieldCheck,
      description: 'Complete occupational health & safety outfitting compliant with SABS, CE, and ISO standards. Covering heavy manufacturing, underground mining, civil construction, and logistics.',
      features: [
        'D59 Flame-Retardant & Acid-Resistant Heavy-Duty Conti Suits',
        'S3 Steel-Toe & Composite Mining Boots with Dual-Density Soles',
        'Anti-Scratch & Anti-Fog UV Certified Protective Safety Eyewear',
        'Level-5 Cut-Resistant Nitrile & Thermal Handling Gloves',
        'Vented Safety Hard Hats, Visors & Hearing Protection Ear Muffs'
      ],
      leadTime: '3 - 7 Business Days',
      moq: '25 Units',
      lookbookLink: '/gallery?category=ppe'
    },
    {
      id: 'sublimated-sportswear',
      title: 'Custom Sportswear & All-Over Dye Sublimation',
      tag: 'Performance & Athletics',
      image: '/images/gallery/gauteng-province-sports-arts-tracksuits.webp',
      icon: Layers,
      description: 'Bespoke athletic apparel engineered for professional sports clubs, corporate wellness, school athletics, and gym activewear using vibrant thermal calender dye-sublimation.',
      features: [
        'Dye-Sublimated Performance Zip Hoodies & Athletic Tracksuits',
        '4-Way Stretch Compression Tights & Form-Fitting Leggings',
        'Moisture-Management Sweat-Wicking Soccer & Rugby Jerseys',
        'Full-Coverage Edge-to-Edge Gradient & Micro-Pattern Inks',
        'Reinforced Anti-Chafe Flatlock Seams for High Mobility'
      ],
      leadTime: '10 - 15 Business Days',
      moq: '30 Sets',
      lookbookLink: '/gallery?category=sportswear'
    },
    {
      id: 'displays-signage',
      title: 'Large-Format Displays, Gazebos & Outdoor Signage',
      tag: 'Event & Brand Signage',
      image: '/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp',
      icon: Flag,
      description: 'Heavy-duty promotional event hardware and photographic sublimation display fabrics for brand activations, sports championships, roadshows, and retail point-of-sale.',
      features: [
        '3x3m & 3x6m Waterproof Hex-Aluminum Pop-Up Gazebos',
        'Double-Sided 3m / 4m Teardrop & Sharkfin Flying Banners',
        'Heavyweight Perforated PVC Fence & Barrier Mesh Wraps',
        'Portable Curved & Straight Tension Fabric Media Backdrop Walls',
        'All-Terrain Weighted Water/Cast-Iron Base Anchoring Hardware'
      ],
      leadTime: '5 - 10 Business Days',
      moq: '1 Unit',
      lookbookLink: '/gallery?category=display'
    },
    {
      id: 'fleet-branding',
      title: 'Commercial Vehicle & Fleet Branding',
      tag: 'Fleet Graphics & Vinyl Wraps',
      image: '/images/gallery/pyb-commercial-vehicle-vinyl-branding.webp',
      icon: Truck,
      description: 'High-visibility cast vinyl vehicle wraps, contour-cut door logos, and reflective chevrons designed for delivery vans, corporate fleet bakkies, and cross-border logistics trucks.',
      features: [
        'Cast Automotive Grade Vinyl with Air-Release Bubble Channels',
        'High-Gloss UV Protective Laminate Against Harsh African Sunlight',
        'Class 2 SABS Retro-Reflective Tailgate Chevron Markings',
        'Contour Kiss-Cut Side Door Logos & Regulatory Identification',
        '3-5 Year Outdoor Resilience with Residue-Free Clean Removal'
      ],
      leadTime: '3 - 7 Business Days',
      moq: '1 Vehicle',
      lookbookLink: '/gallery?category=signage&q=fleet'
    },
    {
      id: 'road-signage',
      title: 'Civil Road Works & Detour Reflective Signboards',
      tag: 'Highway & Traffic Safety',
      image: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
      icon: ShieldCheck,
      description: 'Engineering-grade road safety signage, retro-reflective chevron detour signs, chromadek plates, and heavy-duty folding A-frames compliant with SADC 1519 and SABS safety standards.',
      features: [
        'Class 2 High-Intensity Honeycomb Prismatic Reflective Sheeting',
        '1.4mm Heavy Galvanized Chromadek Steel Signboards',
        'Hot-Dip Galvanized Anti-Wind Foldable Angle Iron A-Frames',
        'Standard 900mm Triangular Road Works Ahead Warning Markings',
        '750mm Flexible Heavy Weighted Rubber Base Highway Traffic Cones'
      ],
      leadTime: '3 - 7 Business Days',
      moq: '5 Units',
      lookbookLink: '/gallery?category=signage&q=road'
    },
    {
      id: 'corporate-gifting',
      title: 'VIP Corporate Gifting & Artisan Merchandising',
      tag: 'Executive Gifting',
      image: '/images/gallery/mantra-kraft-luxury-gift-bags.webp',
      icon: Gift,
      description: 'Custom curated luxury gift hampers, precision laser-etched metal accessories, bespoke bottled beverages, and high-perceived-value merchandise for executive clientele.',
      features: [
        'Custom Bottled Artisan Spirits with Foil Labels & Cork Seals',
        'Precision Laser-Cut Geometric Hardwood Coaster Sets',
        'Double-Wall Vacuum Insulated Stainless Steel Drinkware',
        'Debossed Leatherette Executive Organizers, Notebooks & Pens',
        'Custom Presentation Packaging with Satin Liners & Wax Seals'
      ],
      leadTime: '7 - 12 Business Days',
      moq: '50 Units',
      lookbookLink: '/gallery?category=gifting'
    },
    {
      id: 'event-merchandise',
      title: 'Event Merchandising, Lanyards & QR Wristbands',
      tag: 'Festivals & Conferences',
      image: '/images/gallery/siemens-matla-satin-sublimated-lanyards.webp',
      icon: Sparkles,
      description: 'Mass-volume event accreditations, double-sided silk satin lanyards, RFID and scannable QR wristbands, and promotional giveaways for large-scale pan-African gatherings.',
      features: [
        'Double-Sided Silk Satin Sublimated Event Lanyards',
        'Scannable Micro-QR Codes for Digital Ticketing & App Activations',
        'Safety Breakaway Clips & Heavy-Duty Zinc Alloy Lobster Clasps',
        'Woven Fabric & Tyvek Waterproof Security Event Wristbands',
        'Capacity for 100,000+ Units with Fast-Track SADC Air/Road Freight'
      ],
      leadTime: '3 - 8 Business Days',
      moq: '250 Units',
      lookbookLink: '/gallery?category=gifting'
    },
    {
      id: 'cross-border-logistics',
      title: 'Cross-Border Freight, Consolidation & Warehouse Hub',
      tag: 'SADC Logistics Forwarding',
      image: '/images/gallery/shipping-container-clapsa-export-freight.webp',
      icon: Truck,
      description: 'Ship with CLAPSA: Use our Sandton/Johannesburg warehouse as your delivery address. We collect from SA suppliers, consolidate orders, handle SADC customs clearances, and deliver safely into Mozambique and Southern Africa.',
      features: [
        'Central Sandton/Johannesburg Receiving & Inspection Depot',
        'Automated Turntable Pallet Stretch-Wrapping & Weatherproofing',
        'Complete SADC Customs Documentation & Phytosanitary Clearances',
        'Consolidated 24-72h Line-Haul to Maputo, Matola, Beira, Nampula',
        'Online Freight Rate Estimator & Door-to-Door Delivery Available'
      ],
      leadTime: '24 - 72 Hours',
      moq: '1 Parcel',
      lookbookLink: '/logistics'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Brief & Requirements Analysis',
      desc: 'Our technical consultants review your volume, technical specs, SABS standards, and brand guidelines to structure the optimal quotation.'
    },
    {
      step: '02',
      title: 'Digital Proofing & Pre-Production Sample',
      desc: 'We generate accurate 3D CAD renders and physical pre-production samples for client sign-off on fabric weight, color match, and stitching.'
    },
    {
      step: '03',
      title: 'Precision In-House Manufacturing',
      desc: 'Mass manufacturing runs on our automated embroidery carousels, wide sublimation heat presses, and screen-printing assembly lines.'
    },
    {
      step: '04',
      title: 'Strict SABS & ISO Quality Inspection',
      desc: 'Every batch undergoes rigorous quality checks for seam strength, embroidery tension, colorfastness, and safety certification.'
    },
    {
      step: '05',
      title: 'SADC Express Freight & Handover',
      desc: 'Carefully packaged, labeled by branch/employee, and dispatched with cross-border customs clearance across South Africa and SADC.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Capabilities & Manufacturing Visual Banner (1920x670px) */}
      <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:h-[670px] overflow-hidden flex flex-col justify-center bg-slate-950 text-white select-none border-b border-slate-800">
        {/* Full-Bleed 1920x670 Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/videos/gallery/posters/clapsa-carousel-screen-printing-reel.webp')}
            alt="CLAPSA Manufacturing & Screen Printing Plant"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          {/* Subtle Gradient Overlays for High Background Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/25 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl lg:max-w-3xl p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-white/15 shadow-2xl text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-rose-400" />
              <span>{t.services.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              {t.services.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
                {t.services.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-xs">
              {t.services.subtitle}
            </p>

            {/* Capability Visual Badges in Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                <span className="block text-rose-400 font-extrabold text-xs uppercase tracking-wider">Screen Print</span>
                <span className="text-[11px] text-slate-300">Automated 8-Color</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                <span className="block text-amber-400 font-extrabold text-xs uppercase tracking-wider">Embroidery</span>
                <span className="text-[11px] text-slate-300">Tajima 15-Needle</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                <span className="block text-emerald-400 font-extrabold text-xs uppercase tracking-wider">Road Signs</span>
                <span className="text-[11px] text-slate-300">SABS Retroreflective</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                <span className="block text-blue-400 font-extrabold text-xs uppercase tracking-wider">SADC Freight</span>
                <span className="text-[11px] text-slate-300">Sandton Hub Line-Haul</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-rose-950/60 transition-all flex items-center gap-2"
              >
                <span>Request Custom RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>View Production Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 In-Depth Capabilities Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Core Production Divisions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Specialized Manufacturing & Procurement Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header */}
                  <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
                    <Image
                      src={getAssetPath(cap.image)}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-slate-800">
                        {cap.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="text-slate-300 font-medium">MOQ: <strong className="text-white font-bold">{cap.moq}</strong></span>
                      <span className="text-slate-300 font-medium">Lead Time: <strong className="text-white font-bold">{cap.leadTime}</strong></span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                          {cap.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 block">
                        Included Specifications & Scope:
                      </span>
                      <div className="space-y-1.5">
                        {cap.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-2.5">
                  <Link
                    href={cap.lookbookLink}
                    className="py-2.5 px-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>{cap.lookbookLink === '/logistics' ? 'Logistics Hub' : 'View Real Works'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I am inquiring about your "${cap.title}" capability and would like to request technical specifications and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="py-2.5 px-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>Quote</span>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* Live Machinery & Production in Motion Reel Showcase */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-800/60 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-rose-400" />
              <span>Machinery In Motion</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Industrial Plant Machinery & Operations Live
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Experience the precision engineering behind every order — automated textile printing presses, continuous squeegees, industrial packaging wrappers, and heavy logistics dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machineryVideos.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMachineryVideo(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-rose-500/60 shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Poster / Video Thumbnail Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={getAssetPath(item.poster)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-rose-400 border border-slate-800 backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-600/90 group-hover:bg-rose-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5-Step Workflow Process */}
      <section className="py-20 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              The CLAPSA Standard
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Our 5-Step Turnkey Procurement & Quality Control
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              A streamlined, auditable process that guarantees precision brand fidelity, zero-defect manufacturing, and rapid freight across Southern Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflowSteps.map((w, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 relative space-y-3 shadow-xs"
              >
                <span className="text-3xl font-extrabold text-rose-600/30 dark:text-rose-500/20 block">
                  {w.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {w.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Need a Tailored Procurement Contract for Your Enterprise?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              We provide comprehensive corporate tender fulfillment, B-BBEE compliant supply solutions, and SADC cross-border logistics.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              Start Your Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Machinery Video Modal */}
      {activeMachineryVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveMachineryVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                  Live Machinery Reel
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeMachineryVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveMachineryVideo(null)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
              <video
                src={getAssetPath(activeMachineryVideo.videoSrc)}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs text-slate-400">
              {activeMachineryVideo.subtitle}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
