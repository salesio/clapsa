'use client';

import React, { useState } from 'react';
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
  FileText,
  Play,
  Video,
  X,
  Maximize2
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    subtitle: string;
    videoSrc: string;
  } | null>(null);

  const facilityVideos = [
    {
      id: 'sandton-hq',
      title: 'Sandton Headquarters & Executive Showroom',
      subtitle: 'Facility walkthrough, boardroom consultation suites, and product displays.',
      videoSrc: '/videos/gallery/clapsa-headquarters-sandton-facility-walkthrough.mp4',
      poster: '/videos/gallery/posters/clapsa-headquarters-sandton-facility-walkthrough.webp',
      badge: 'Headquarters Tour'
    },
    {
      id: 'screen-printing',
      title: 'Automated Carousel Screen Printing Plant',
      subtitle: 'Continuous multi-color textile printing with automated conveyor heat-tunnel curing.',
      videoSrc: '/videos/gallery/clapsa-carousel-screen-printing-reel.mp4',
      poster: '/videos/gallery/posters/clapsa-carousel-screen-printing-reel.webp',
      badge: 'Production Plant'
    },
    {
      id: 'pallet-wrapping',
      title: 'High-Efficiency Stretch Wrapping & Freight Dispatch',
      subtitle: 'Securing heavy export pallets for regional SADC freight logistics corridors.',
      videoSrc: '/videos/gallery/automated-pallet-stretch-wrapping-dispatch.mp4',
      poster: '/videos/gallery/posters/automated-pallet-stretch-wrapping-dispatch.webp',
      badge: 'Logistics Dispatch'
    },
    {
      id: 'safety-showroom',
      title: 'Certified PPE & Safety Footwear Display Center',
      subtitle: 'SABS approved boots, ballistic tactical carriers, and industrial safety workwear.',
      videoSrc: '/videos/gallery/clapsa-safety-showroom-and-retail-display.mp4',
      poster: '/videos/gallery/posters/clapsa-safety-showroom-and-retail-display.webp',
      badge: 'Safety Showroom'
    }
  ];

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
      
      {/* Sandton HQ & Pan-African Supply Visual Banner (1920x670px) */}
      <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:h-[670px] overflow-hidden flex flex-col justify-center bg-slate-950 text-white select-none border-b border-slate-800">
        {/* Full-Bleed 1920x670 Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/images/slides/Slides_clapsa_02.png')}
            alt="CLAPSA Sandton Headquarters & Commercial Fleet Operations"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          {/* Subtle Gradient Overlays for High Background Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl lg:max-w-3xl p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-white/15 shadow-2xl text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-rose-400" />
              <span>{t.about.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              {t.about.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
                {t.about.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-xs">
              {t.about.p1}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-emerald-400 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4" />
                SABS Approved Supply
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-blue-400 backdrop-blur-md">
                <Award className="w-4 h-4" />
                ISO 9001:2015 Standards
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-amber-400 backdrop-blur-md">
                <FileText className="w-4 h-4" />
                B-BBEE Level 1 Contributor
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-purple-400 backdrop-blur-md">
                <Globe2 className="w-4 h-4" />
                SADC Cross-Border Hub
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#facility-tours"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-rose-950/60 transition-all flex items-center gap-2"
              >
                <span>Explore Sandton Facility</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>Contact Directors</span>
                <Globe2 className="w-4 h-4" />
              </Link>
            </div>
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
              src={getAssetPath('/images/gallery/shipping-container-clapsa-export-freight.webp')}
              alt="CLAPSA Manufacturing & SADC Freight Operations"
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

      {/* Facility & Production Tour in Motion (Video Reels) */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-800/60 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-rose-400" />
              <span>Production In Motion</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Sandton Headquarters & Industrial Facilities Tour
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Take an inside look into our operational headquarters in Sandton, automated textile screen printing presses, certified safety showroom, and cross-border freight dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityVideos.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
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

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                  Live Facility Motion Reel
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
              <video
                src={getAssetPath(activeVideo.videoSrc)}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs text-slate-400">
              {activeVideo.subtitle}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
