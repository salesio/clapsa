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
  ChevronRight
} from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const capabilities = [
    {
      id: 'corporate-wardrobe',
      title: 'Corporate Wardrobe & Executive Uniforms',
      tag: 'Corporate & Hospitality',
      image: '/images/portfolio/portfolio-corporate-uniforms.jpg',
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
      moq: '50 Units'
    },
    {
      id: 'industrial-ppe',
      title: 'Industrial PPE & Certified Workplace Safety',
      tag: 'SABS Approved Safety',
      image: '/images/portfolio/portfolio-ppe-safety.jpg',
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
      moq: '25 Units'
    },
    {
      id: 'sublimated-sportswear',
      title: 'Custom Sportswear & All-Over Dye Sublimation',
      tag: 'Performance & Athletics',
      image: '/images/portfolio/portfolio-lifestyle-apparel.jpg',
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
      moq: '30 Sets'
    },
    {
      id: 'displays-signage',
      title: 'Large-Format Displays, Gazebos & Outdoor Signage',
      tag: 'Event & Brand Signage',
      image: '/images/showcase/claps-gin-exhibition-showcase.jpg',
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
      moq: '1 Unit'
    },
    {
      id: 'corporate-gifting',
      title: 'VIP Corporate Gifting & Artisan Merchandising',
      tag: 'Executive Gifting',
      image: '/images/portfolio/portfolio-corporate-gifting.jpg',
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
      moq: '50 Units'
    },
    {
      id: 'event-merchandise',
      title: 'Event Merchandising, Lanyards & QR Wristbands',
      tag: 'Festivals & Conferences',
      image: '/images/portfolio/portfolio-event-branding.jpg',
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
      moq: '250 Units'
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
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.services.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {t.services.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
              {t.services.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              Request Custom RFQ
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/60 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
            >
              View Production Gallery
            </Link>
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
                <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I am inquiring about your "${cap.title}" capability and would like to request technical specifications and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
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

    </div>
  );
}
