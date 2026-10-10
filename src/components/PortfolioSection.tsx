'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  JOB_GROUPS, 
  GALLERY_ITEMS, 
  JobGroup, 
  GalleryItem, 
  MediaCategory 
} from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import JobSlideCard from '@/components/JobSlideCard';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  MapPin,
  Calendar,
  MessageSquare,
  Play,
  Layers,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

// The top 6 South African & enterprise client groups for the homepage
const FEATURED_JOB_IDS = [
  'job-standard-bank',
  'job-gauteng-province',
  'job-albany-bakeries',
  'job-g4s-security',
  'job-trans-sadc-signs',
  'job-movitel-telecom'
];

type HomeFilterCategory = 'all' | 'corporate' | 'ppe' | 'printing' | 'signage' | 'display';

export default function PortfolioSection() {
  const { t, language } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const [activeCategory, setActiveCategory] = useState<HomeFilterCategory>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Filter the top 6 featured groups
  const featuredJobs = useMemo(() => {
    return JOB_GROUPS.filter((job) => FEATURED_JOB_IDS.includes(job.id));
  }, []);

  // Filter by category if user clicks a tab
  const displayedJobs = useMemo(() => {
    if (activeCategory === 'all') return featuredJobs;
    return featuredJobs.filter((job) => {
      if (activeCategory === 'corporate') return job.category === 'corporate';
      if (activeCategory === 'ppe') return job.category === 'ppe';
      if (activeCategory === 'printing') return job.category === 'printing';
      if (activeCategory === 'signage') return job.category === 'signage';
      if (activeCategory === 'display') return job.category === 'display';
      return true;
    });
  }, [featuredJobs, activeCategory]);

  // All items belonging to featured jobs
  const featuredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => FEATURED_JOB_IDS.includes(item.jobId));
  }, []);

  // Lightbox modal item
  const currentModalItem = activeItemIndex !== null ? featuredItems[activeItemIndex] : null;

  const handleOpenItemModal = useCallback((itemId: string) => {
    const idx = featuredItems.findIndex((i) => i.id === itemId);
    if (idx !== -1) {
      setActiveItemIndex(idx);
    }
  }, [featuredItems]);

  const handleNextModal = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! + 1) % featuredItems.length);
  }, [activeItemIndex, featuredItems.length]);

  const handlePrevModal = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! - 1 + featuredItems.length) % featuredItems.length);
  }, [activeItemIndex, featuredItems.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowRight') handleNextModal();
      if (e.key === 'ArrowLeft') handlePrevModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, handleNextModal, handlePrevModal]);

  // Filter tabs for the homepage
  const filterTabs: { id: HomeFilterCategory; label: string; count: number }[] = [
    { 
      id: 'all', 
      label: language === 'pt' ? 'Todos em Destaque' : 'All Featured', 
      count: featuredJobs.length 
    },
    { 
      id: 'corporate', 
      label: language === 'pt' ? 'Bancos & Corporativo' : 'Corporate & Banking', 
      count: featuredJobs.filter(j => j.category === 'corporate').length 
    },
    { 
      id: 'ppe', 
      label: language === 'pt' ? 'EPI & Segurança Táctica' : 'Industrial PPE & Security', 
      count: featuredJobs.filter(j => j.category === 'ppe').length 
    },
    { 
      id: 'printing', 
      label: language === 'pt' ? 'Serigrafia & DTF' : 'Automated Screen Printing', 
      count: featuredJobs.filter(j => j.category === 'printing').length 
    },
    { 
      id: 'signage', 
      label: language === 'pt' ? 'Sinalização Rodoviária' : 'Highway & Site Signage', 
      count: featuredJobs.filter(j => j.category === 'signage').length 
    },
    { 
      id: 'display', 
      label: language === 'pt' ? 'Activação & Gazebos' : 'Brand Activation', 
      count: featuredJobs.filter(j => j.category === 'display').length 
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{language === 'pt' ? 'Trabalhos Reais & Clientes SADC' : 'Proven Enterprise Delivery'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'pt' ? 'Showcase dos Nossos ' : 'Our Past & Recent '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
              {language === 'pt' ? 'Trabalhos em Destaque' : 'Works Showcase'}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'pt'
              ? 'Desde uniformes executivos bancários e EPI para governos provinciais até sinalização rodoviária SADC e serigrafia de alta velocidade — veja como a CLAPSA entrega com rigor e qualidade de fábrica.'
              : 'From tier-1 banking uniform rollouts and provincial government PPE to SADC highway signage and high-volume textile screen printing — explore how CLAPSA delivers on-spec, on-budget, and on-time.'}
          </p>

          {/* Quick Counter Strip */}
          <div className="inline-flex items-center gap-6 pt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              13+ {language === 'pt' ? 'Clientes Empresariais' : 'Enterprise Clients'}
            </span>
            <span>•</span>
            <span>60+ {language === 'pt' ? 'Fotos de Produção' : 'Production Photos'}</span>
            <span>•</span>
            <span>8 {language === 'pt' ? 'Vídeos da Fábrica' : 'Factory Video Reels'}</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30 border border-rose-500'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-rose-800 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Curated Projects Grid (Top 6 Featured Cards with Auto-Slide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedJobs.map((job) => {
            const jobMedia = GALLERY_ITEMS.filter((item) => item.jobId === job.id);
            return (
              <JobSlideCard
                key={job.id}
                job={job}
                jobMedia={jobMedia}
                onOpenItemModal={handleOpenItemModal}
                secondaryActionHref={getAssetPath('/gallery')}
                secondaryActionLabel={language === 'pt' ? 'Ver Mais' : 'Gallery'}
              />
            );
          })}
        </div>

        {/* Prominent Call to Action: Button to View Full Showcase */}
        <div className="pt-14 text-center space-y-4">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100/80 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1 sm:max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                {language === 'pt' ? 'Galeria Completa de Produção' : 'Full Production Archive'}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {language === 'pt' 
                  ? 'Quer ver todos os trabalhos e campanhas?' 
                  : 'Looking for our complete job portfolio?'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'pt'
                  ? 'Explore mais de 60 fotografias e vídeos de campanhas eleitorais, uniformes corporativos, brindes e infraestrutura SADC.'
                  : 'Explore 60+ high-res photos and video reels across electoral campaigns, corporate gifts, security gear, and regional freight.'}
              </p>
            </div>

            <Link
              href="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-sm shadow-xl shadow-rose-950/25 hover:shadow-rose-600/30 hover:scale-102 transition-all duration-300 group shrink-0"
            >
              <span>{language === 'pt' ? 'Ver Galeria Completa' : 'View Full Showcase'}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold text-white group-hover:bg-white group-hover:text-rose-600 transition-colors">
                13+ {language === 'pt' ? 'Clientes' : 'Clients'}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>

      {/* Lightbox / Item Modal for Direct Inspection from Homepage */}
      {currentModalItem && (
        <div 
          onClick={() => setActiveItemIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col text-left"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4 sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-30">
              <div className="space-y-1 pr-6">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  <span>{currentModalItem.categoryLabel}</span>
                  <span>•</span>
                  <span className="text-slate-500 dark:text-slate-400">{currentModalItem.client}</span>
                  <span>•</span>
                  <span className="text-slate-500 dark:text-slate-400">{currentModalItem.date}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug line-clamp-1">
                  {currentModalItem.title}
                </h2>
              </div>

              <button
                onClick={() => setActiveItemIndex(null)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Display: Image or Video */}
            <div className="relative bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[440px] max-h-[550px] overflow-hidden">
              {currentModalItem.mediaType === 'video' ? (
                <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <video
                    src={getAssetPath(currentModalItem.src)}
                    poster={getAssetPath(currentModalItem.thumbnail)}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[500px] max-w-full rounded-2xl shadow-2xl"
                  />
                </div>
              ) : (
                <div className="relative w-full h-[340px] sm:h-[480px]">
                  <Image
                    src={getAssetPath(currentModalItem.src)}
                    alt={currentModalItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    priority
                  />
                </div>
              )}

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrevModal}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md transition-all z-20 shadow-lg"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextModal}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md transition-all z-20 shadow-lg"
                aria-label="Next item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Details & Specs */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {language === 'pt' ? 'Descrição Técnica & Contexto' : 'Technical Description & Scope'}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentModalItem.description}
                </p>
              </div>

              {/* Technical Specs List */}
              {currentModalItem.specs && currentModalItem.specs.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {language === 'pt' ? 'Especificações do Produto' : 'Product & Manufacturing Specifications'}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentModalItem.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags Strip */}
              {currentModalItem.tags && currentModalItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {currentModalItem.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/gallery"
                  onClick={() => setActiveItemIndex(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'pt' ? 'Ver Todos os Trabalhos' : 'View Full Gallery'}</span>
                </Link>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I saw "${currentModalItem.title}" (${currentModalItem.client}) in your showcase. We would like to request a quote for similar procurement.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setActiveItemIndex(null)}
                    className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md transition-all inline-flex items-center gap-1.5"
                  >
                    <span>{language === 'pt' ? 'Pedir Cotação' : 'Request Proposal'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
