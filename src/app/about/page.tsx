'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  ShieldCheck,
  Award,
  Factory,
  Truck,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Building2,
  Globe2,
  Layers,
  Cpu,
  Target,
  FileText
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const milestones = [
    {
      year: '2010',
      title: 'Foundation in Gauteng',
      desc: 'Established as a specialized corporate gifting and branded apparel supply agency in Johannesburg.'
    },
    {
      year: '2015',
      title: 'SABS Certification & Industrial PPE',
      desc: 'Expanded into certified industrial workwear, safety footwear, and mining site protective equipment.'
    },
    {
      year: '2019',
      title: 'In-House Sublimation & Embroidery Plant',
      desc: 'Commissioned industrial multi-head embroidery carousels and wide-format dye-sublimation calenders.'
    },
    {
      year: '2022',
      title: 'SADC Cross-Border Logistics Hub',
      desc: 'Inaugurated dedicated freight channels supplying enterprises in Mozambique, Angola, Zimbabwe, and Botswana.'
    },
    {
      year: '2025',
      title: 'Pan-African Multi-Language Platform',
      desc: 'Scaled to over 12,000 completed corporate contracts with real-time digital RFQ and multi-language support.'
    }
  ];

  const manufacturingPillars = [
    {
      icon: Cpu,
      title: 'Industrial Computerized Embroidery',
      desc: 'High-density multi-head Japanese embroidery machinery delivering microscopic thread precision on blazers, caps, and jackets.'
    },
    {
      icon: Layers,
      title: 'Wide-Format Dye Sublimation',
      desc: 'Thermal calender presses creating rich, fade-proof colors on technical activewear, sports jerseys, and gazebos.'
    },
    {
      icon: Factory,
      title: 'Screen Printing & Direct-to-Film (DTF)',
      desc: 'Automated 8-color printing carousels utilizing eco-friendly plastisol and water-based inks with soft-hand finish.'
    },
    {
      icon: Sparkles,
      title: 'Precision Laser Cutting & Engraving',
      desc: 'CO2 and fiber laser engraving systems for executive metal pens, artisan hardwood coasters, and luxury plaques.'
    },
    {
      icon: ShieldCheck,
      title: 'Certified PPE Testing & Compliance',
      desc: 'Rigorous batch quality testing ensuring all safety footwear, goggles, and respiratory masks meet SABS standards.'
    },
    {
      icon: Truck,
      title: 'SADC Fast-Track Freight Network',
      desc: 'Bonded warehousing and direct road/air freight partnerships enabling 48 to 72-hour cross-border deliveries.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.about.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {t.about.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
              {t.about.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.about.p1}
          </p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              SABS Approved Supply
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 text-xs font-bold">
              <Award className="w-4 h-4" />
              ISO 9001:2015 Standards
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 text-xs font-bold">
              <FileText className="w-4 h-4" />
              B-BBEE Level 1 Contributor
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-600 dark:text-purple-400 text-xs font-bold">
              <Globe2 className="w-4 h-4" />
              SADC Cross-Border Freight
            </span>
          </div>

        </div>
      </section>

      {/* Origin & Core Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Company Purpose & Philosophy
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                One Source Supply Solutions for Africa&apos;s Foremost Enterprises
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.about.p2}
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-3">
                <Target className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Our Mission</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    To eliminate supply chain bottlenecks for African corporations by delivering certified, high-grade uniforms, safety PPE, and branded promotional assets with zero defect tolerance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Our Pan-African Vision</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    To be the most reliable, tech-driven corporate procurement partner across South Africa, Mozambique, Angola, Zimbabwe, Botswana, Zambia, and Namibia.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Image Feature with Overlay */}
          <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-950">
            <Image
              src={getAssetPath('/images/portfolio/portfolio-lifestyle-apparel.jpg')}
              alt="CLAPSA Manufacturing & Quality Control"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Production Quality</span>
              </div>
              <p className="text-xs text-slate-300">
                Every garment, lanyard, and protective piece is inspected by in-house QA specialists prior to bulk cross-border dispatch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Manufacturing & Technical Infrastructure */}
      <section className="py-20 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              In-House Production Power
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Advanced Machinery & Manufacturing Facilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              We own and operate tier-1 production technology, allowing us to maintain stringent quality control, ultra-rapid sampling, and bulk capacity up to 50,000+ units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 space-y-3 hover:border-rose-500/60 transition-colors shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Company Milestones Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Our Journey of Growth
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            15 Years of African Manufacturing Excellence
          </h2>
        </div>

        <div className="relative border-l-2 border-rose-500/30 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white dark:border-slate-950 shadow-md group-hover:scale-125 transition-transform" />
              
              <div className="space-y-1 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs max-w-2xl">
                <span className="text-xs font-extrabold text-rose-600 dark:text-rose-400">
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Upgrade Your Corporate Uniforms & Safety Gear?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Connect directly with our procurement consultants in Johannesburg for wholesale pricing, bespoke digital mockups, and sample shipments.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I am interested in learning more about your manufacturing capabilities and requesting a corporate presentation.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Consultant</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Request Corporate Quote</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
