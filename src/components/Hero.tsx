'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

const HERO_CAROUSEL_SLIDES = [
  {
    image: '/images/gallery/executive-pique-golf-shirts-embroidery.webp',
    tag: 'Corporate Apparel',
    title: 'Standard Bank Executive Pique Golf Shirts & Precision Embroidery',
    desc: 'Turnkey enterprise uniform programs with micro-stitch crest embroidery.',
    stat1: { value: '98%', label: 'Satisfaction' },
    stat2: { value: '1,500+', label: 'Deployments' },
    stat3: { value: 'SADC', label: 'Logistics' },
  },
  {
    image: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
    tag: 'SABS Certified PPE',
    title: 'Gauteng Provincial Government D59 Flame & Acid Conti Suits',
    desc: 'SABS 434 & 1519 certified protective workwear engineered for hazardous industrial environments.',
    stat1: { value: 'SABS 434', label: 'Compliance' },
    stat2: { value: '25,000+', label: 'Suits Supplied' },
    stat3: { value: 'Zero Defect', label: 'QA Standard' },
  },
  {
    image: '/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp',
    tag: 'Displays & Signage',
    title: 'Commercial 3x3m Pop-Up Gazebos & Fitted Sublimation Tablecloths',
    desc: 'Weatherproof dye-sublimation activation displays engineered for nationwide corporate roadshows.',
    stat1: { value: '100% PU', label: 'Waterproof' },
    stat2: { value: '40mm Hex', label: 'Aluminum Frame' },
    stat3: { value: '5-Day', label: 'Turnaround' },
  },
  {
    image: '/images/gallery/shipping-container-clapsa-export-freight.webp',
    tag: 'Cross-Border Logistics',
    title: '40ft Bonded Shipping Containers & Pan-African Road Freight',
    desc: 'Direct consolidated freight channels to Mozambique, Zimbabwe, Botswana, and Angola.',
    stat1: { value: '48 - 72h', label: 'SADC Transit' },
    stat2: { value: '100%', label: 'Bonded Freight' },
    stat3: { value: 'Sandton HQ', label: 'Central Hub' },
  },
  {
    image: '/images/gallery/mantra-kraft-luxury-gift-bags.webp',
    tag: 'VIP Gifting & Packaging',
    title: 'Mantra Eco-Kraft Luxury Packaging with Metallic Foil Stamping',
    desc: 'Custom rigid presentation boxes, embossed gift bags, and executive corporate hampers.',
    stat1: { value: 'Gold Foil', label: 'Finishing' },
    stat2: { value: 'Eco-Kraft', label: 'Sustainable' },
    stat3: { value: 'Bespoke', label: 'Packaging' },
  },
  {
    image: '/images/gallery/g4s-security-tactical-ballistic-vest.webp',
    tag: 'Tactical & Security',
    title: 'G4S Security Tactical Ballistic Armor Carriers & Workwear',
    desc: '1000D Cordura tactical outfitting with modular MOLLE and precision embroidery.',
    stat1: { value: 'Level IV', label: 'Ballistic Capable' },
    stat2: { value: '1000D', label: 'Cordura Ripstop' },
    stat3: { value: 'Custom', label: 'MOLLE Kits' },
  }
];

export default function Hero() {
  const { data } = useContent();
  const { t } = useLanguage();
  const hero = data.hero;
  const company = data.company;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + HERO_CAROUSEL_SLIDES.length) % HERO_CAROUSEL_SLIDES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_SLIDES.length);
  };

  const activeProject = HERO_CAROUSEL_SLIDES[currentSlide];

  return (
    <section id="home" className="relative min-h-[80vh] pt-8 pb-20 bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center transition-colors duration-200">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/60 dark:from-rose-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-rose-500/10 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {t.hero.headlinePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-rose-500">
                {t.hero.headlineHighlight}
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Value Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              {t.hero.checkpoints.map((cp, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-500 shrink-0" />
                  <span>{cp}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/gallery"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-900/20 hover:shadow-rose-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5"
              >
                {t.hero.viewPastWork}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/catalogues"
                className="px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-700/80 transition-all shadow-sm flex items-center gap-2"
              >
                {t.hero.browseCatalogues}
              </Link>

              <a
                href={`tel:${company.phoneDirect}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-2 px-3"
              >
                <PhoneCall className="w-4 h-4 text-rose-600 dark:text-rose-500" />
                <span>{t.hero.speakToConsultant}: {company.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Visual Showcase Carousel Card */}
          <div className="lg:col-span-5 relative">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-black/80 group select-none"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-rose-400/30 flex items-center gap-1.5 z-30">
                <Award className="w-3.5 h-3.5" />
                <span>{t.hero.featuredProject}</span>
              </div>

              {/* Showcase Image Carousel Frame */}
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-950">
                {HERO_CAROUSEL_SLIDES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={getAssetPath(slide.image)}
                      alt={slide.title}
                      fill
                      className="object-cover object-top"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                    
                    {/* Bottom Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="inline-block px-2.5 py-1 rounded bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2 shadow">
                        {slide.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-md">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Slide Indicators Pill */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {HERO_CAROUSEL_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-5 bg-rose-500' : 'w-1.5 bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Left / Right Nav Arrows on Hover */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/75 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/75 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Stats Pill underneath */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center transition-all duration-300">
                <div>
                  <span className="block text-base font-extrabold text-slate-900 dark:text-white transition-all">
                    {activeProject.stat1.value}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {activeProject.stat1.label}
                  </span>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-800">
                  <span className="block text-base font-extrabold text-rose-600 dark:text-rose-500 transition-all">
                    {activeProject.stat2.value}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {activeProject.stat2.label}
                  </span>
                </div>
                <div>
                  <span className="block text-base font-extrabold text-slate-900 dark:text-white transition-all">
                    {activeProject.stat3.value}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {activeProject.stat3.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
