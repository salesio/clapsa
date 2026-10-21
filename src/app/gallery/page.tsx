'use client';

import React, { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  GALLERY_ITEMS, 
  JOB_GROUPS, 
  GalleryItem, 
  JobGroup, 
  MediaCategory, 
  MediaType 
} from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  Camera,
  Play,
  Film,
  Image as ImageIcon,
  Grid,
  Layers,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Calendar,
  Briefcase,
  Maximize2,
  SlidersHorizontal,
  ShieldCheck,
  Truck,
  FileCheck
} from 'lucide-react';
import JobSlideCard from '@/components/JobSlideCard';

function GalleryContent() {
  const { t, language } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  // View Mode: 'jobs' (grouped by job) or 'stream' (all media grid)
  const [viewMode, setViewMode] = useState<'jobs' | 'stream'>('jobs');
  
  // Filter states
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('all');
  const [activeMediaType, setActiveMediaType] = useState<MediaType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Modal / Lightbox State
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const searchParams = useSearchParams();

  // Handle URL deep-linking parameters (e.g. /gallery?category=signage&q=fleet)
  useEffect(() => {
    const cat = searchParams.get('category');
    const filter = searchParams.get('filter');
    const q = searchParams.get('q') || searchParams.get('query');
    const job = searchParams.get('job');
    const mode = searchParams.get('view');

    if (cat && ['campaigns', 'corporate', 'ppe', 'printing', 'signage', 'gifting', 'sportswear', 'display'].includes(cat)) {
      setActiveCategory(cat as MediaCategory);
      setSelectedJobId(null);
    }
    if (filter) {
      if (['corporate', 'ppe', 'printing', 'signage', 'gifting', 'sportswear', 'display', 'campaigns'].includes(filter)) {
        setActiveCategory(filter as MediaCategory);
        setSelectedJobId(null);
      } else if (filter === 'fleet' || filter === 'vehicle' || filter === 'vehicles') {
        setActiveCategory('signage');
        setSearchQuery('fleet');
        setSelectedJobId(null);
      } else if (filter === 'signs' || filter === 'road') {
        setActiveCategory('signage');
        setSearchQuery('road');
        setSelectedJobId(null);
      } else if (filter === 'gazebos' || filter === 'displays') {
        setActiveCategory('display');
        setSelectedJobId(null);
      } else if (filter === 'uniforms') {
        setActiveCategory('corporate');
        setSelectedJobId(null);
      }
    }
    if (q) {
      setSearchQuery(q);
    }
    if (job) {
      setSelectedJobId(job);
      setViewMode('jobs');
    }
    if (mode === 'stream' || mode === 'jobs') {
      setViewMode(mode);
    }
  }, [searchParams]);

  // Filtered media items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Media type filter
      if (activeMediaType === 'photo' && item.mediaType !== 'photo') {
        return false;
      }
      if (activeMediaType === 'video' && item.mediaType !== 'video') {
        return false;
      }
      // Specific job selection (if filtered in job mode)
      if (selectedJobId && item.jobId !== selectedJobId) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesClient = item.client.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        const matchesJob = item.jobTitle.toLowerCase().includes(query);
        if (!matchesTitle && !matchesClient && !matchesDesc && !matchesTags && !matchesJob) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeMediaType, selectedJobId, searchQuery]);

  // Filtered job groups
  const filteredJobs = useMemo(() => {
    return JOB_GROUPS.filter((job) => {
      if (activeCategory !== 'all' && job.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          job.title.toLowerCase().includes(q) ||
          job.client.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q) ||
          job.deliverables.some(d => d.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const currentModalItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activeItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeItemIndex, filteredItems.length]);

  const handleOpenItemModal = useCallback((itemId: string) => {
    const idx = filteredItems.findIndex(item => item.id === itemId);
    if (idx !== -1) {
      setActiveItemIndex(idx);
    } else {
      const globalIdx = GALLERY_ITEMS.findIndex(item => item.id === itemId);
      if (globalIdx !== -1) {
        setActiveCategory('all');
        setActiveMediaType('all');
        setActiveItemIndex(globalIdx);
      }
    }
  }, [filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Production Lookbook Visual Banner (1920x670px) */}
      <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:h-[670px] overflow-hidden flex flex-col justify-center bg-slate-950 text-white select-none border-b border-slate-800">
        {/* Full-Bleed 1920x670 Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/images/slides/Slides_clapsa.png')}
            alt="CLAPSA Real Production Works Lookbook"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          {/* Subtle Gradient Overlays for High Background Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15 pointer-events-none" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-white/15 shadow-2xl text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Camera className="w-3.5 h-3.5 text-rose-400" />
              <span>{t.galleryPage.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-md">
              {t.galleryPage.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
                {t.galleryPage.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
              {t.galleryPage.subtitle}
            </p>

            {/* Client Brands Verification Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1 text-xs font-semibold text-slate-200">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">Standard Bank</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">PYB Logistics</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">Gauteng Govt D59</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">G4S Ballistics</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">Siemens Matla</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">Movitel</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">Renamo & Frelimo</span>
            </div>

            {/* Live Production Stats Counter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md text-center shadow-md">
                <span className="block text-xl sm:text-2xl font-extrabold text-rose-400">13</span>
                <span className="text-[11px] text-slate-300 font-medium">{language === 'pt' ? 'Grandes Contratos' : 'Enterprise Clients'}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md text-center shadow-md">
                <span className="block text-xl sm:text-2xl font-extrabold text-white">50+</span>
                <span className="text-[11px] text-slate-300 font-medium">{language === 'pt' ? 'Fotos Reais Fábrica' : 'Real Plant Photos'}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md text-center shadow-md">
                <span className="block text-xl sm:text-2xl font-extrabold text-amber-400">8</span>
                <span className="text-[11px] text-slate-300 font-medium">{language === 'pt' ? 'Vídeos em Movimento' : 'Factory Video Reels'}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md text-center shadow-md">
                <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400">100%</span>
                <span className="text-[11px] text-slate-300 font-medium">{language === 'pt' ? 'Directo Fábrica SABS' : 'Direct Factory & SABS'}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Gallery Controls */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Controls Toolbar: View Mode + Search + Media Type + Category Tabs */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          {/* Top Row: View Mode Switcher & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* View Mode Toggle: Jobs vs All Media */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 w-full md:w-auto">
              <button
                onClick={() => {
                  setViewMode('jobs');
                  setSelectedJobId(null);
                }}
                className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  viewMode === 'jobs'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{t.galleryPage.viewByJob}</span>
              </button>

              <button
                onClick={() => {
                  setViewMode('stream');
                  setSelectedJobId(null);
                }}
                className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  viewMode === 'stream'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>{t.galleryPage.viewAllMedia}</span>
              </button>
            </div>

            {/* Real-Time Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.galleryPage.searchPlaceholder}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Category Filter Tabs & Media Type Switcher */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            
            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2 w-full lg:w-auto">
              {[
                { id: 'all', label: language === 'pt' ? 'Todos os Projectos' : 'All Projects' },
                { id: 'corporate', label: language === 'pt' ? 'Corporativo (Standard Bank, MERA)' : 'Corporate (Standard Bank, MERA)' },
                { id: 'ppe', label: language === 'pt' ? 'EPI & Segurança (G4S, Gauteng)' : 'Industrial PPE & Security (G4S, Gauteng)' },
                { id: 'printing', label: language === 'pt' ? 'Serigrafia & DTF (Albany)' : 'Screen Printing & DTF (Albany)' },
                { id: 'signage', label: language === 'pt' ? 'Sinalização & Frotas (Viaturas, Desvios)' : 'Signage, Fleet & Vehicle Wraps' },
                { id: 'gifting', label: language === 'pt' ? 'Brindes & Logística SADC (Tropigalia)' : 'Merchandise & Logistics (Tropigalia)' },
                { id: 'display', label: language === 'pt' ? 'Activação & Gazebos (Movitel)' : 'Brand Activation (Movitel)' },
                { id: 'campaigns', label: language === 'pt' ? 'Campanhas Eleitorais (Frelimo, CAD, Renamo)' : 'Electoral Campaigns (Frelimo, CAD, Renamo)' },
              ].map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id as MediaCategory);
                      setSelectedJobId(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Media Type Switcher: All / Photos / Videos */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shrink-0">
              <button
                onClick={() => setActiveMediaType('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeMediaType === 'all'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {t.galleryPage.mediaTypes.all}
              </button>

              <button
                onClick={() => setActiveMediaType('photo')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeMediaType === 'photo'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{t.galleryPage.mediaTypes.photo}</span>
              </button>

              <button
                onClick={() => setActiveMediaType('video')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeMediaType === 'video'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>{t.galleryPage.mediaTypes.video}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Cluster Quick Shortcuts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="font-bold text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {language === 'pt' ? 'Atalhos de Produção:' : 'Production Clusters:'}
          </span>
          <button
            onClick={() => {
              setActiveCategory('signage');
              setSearchQuery('fleet');
              setSelectedJobId(null);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === 'signage' && searchQuery.includes('fleet')
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
            }`}
          >
            🚗 {language === 'pt' ? 'Branding de Viaturas & Frotas' : 'Vehicle & Fleet Wraps'}
          </button>
          <button
            onClick={() => {
              setActiveCategory('signage');
              setSearchQuery('road');
              setSelectedJobId(null);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === 'signage' && searchQuery.includes('road')
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
            }`}
          >
            🛑 {language === 'pt' ? 'Sinalização Rodoviária & Desvios' : 'Road Signs & Detours'}
          </button>
          <button
            onClick={() => {
              setActiveCategory('display');
              setSearchQuery('');
              setSelectedJobId(null);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === 'display' && !searchQuery
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
            }`}
          >
            ⛺ {language === 'pt' ? 'Gazebos & Bandeiras Promocionais' : 'Gazebos, Banners & Flags'}
          </button>
          <button
            onClick={() => {
              setActiveCategory('corporate');
              setSearchQuery('');
              setSelectedJobId(null);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === 'corporate' && !searchQuery
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
            }`}
          >
            👔 {language === 'pt' ? 'Fardamento & T-Shirts Corporativas' : 'Corporate Uniforms & Polos'}
          </button>
          <button
            onClick={() => {
              setActiveCategory('ppe');
              setSearchQuery('');
              setSelectedJobId(null);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === 'ppe' && !searchQuery
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
            }`}
          >
            🦺 {language === 'pt' ? 'EPIs & Fatos de Trabalho SABS' : 'Certified PPE & Workwear'}
          </button>
          <button
            onClick={() => {
              setActiveCategory('gifting');
              setSearchQuery('');
              setSelectedJobId(null);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === 'gifting' && !searchQuery
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
            }`}
          >
            🎁 {language === 'pt' ? 'Brindes VIP & Embalagens' : 'VIP Gifting & Packaging'}
          </button>
          <a
            href="https://salesio.github.io/saprolo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1"
          >
            📦 {language === 'pt' ? 'Logística & Frete Transfronteiriço ↗' : 'Cross-Border Logistics Hub ↗'}
          </a>
        </div>

        {/* Selected Job Banner Alert (if user clicked into a specific job) */}
        {selectedJobId && (
          <div className="flex items-center justify-between p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-rose-600" />
              <span>Filtering media for job: <strong>{JOB_GROUPS.find(j => j.id === selectedJobId)?.title}</strong></span>
            </div>
            <button
              onClick={() => setSelectedJobId(null)}
              className="text-xs underline font-bold hover:text-rose-700 dark:hover:text-rose-100"
            >
              {t.galleryPage.clearFilters}
            </button>
          </div>
        )}

        {/* VIEW MODE 1: GROUP BY JOB CARDS WITH INTERACTIVE SLIDESHOWS */}
        {viewMode === 'jobs' && !selectedJobId && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => {
                const jobMedia = GALLERY_ITEMS.filter(item => item.jobId === job.id);
                return (
                  <JobSlideCard
                    key={job.id}
                    job={job}
                    jobMedia={jobMedia}
                    onOpenItemModal={handleOpenItemModal}
                    onFilterJobInStream={(jobId) => {
                      setSelectedJobId(jobId);
                      setViewMode('stream');
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW MODE 2: ALL MEDIA STREAM (MASONRY/GRID OF PHOTOS & VIDEOS) */}
        {(viewMode === 'stream' || selectedJobId) && (
          <div className="space-y-8">
            {filteredItems.length === 0 ? (
              <div className="p-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4">
                <Camera className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t.galleryPage.noResultsTitle}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  {t.galleryPage.noResultsDesc}
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveMediaType('all');
                    setSearchQuery('');
                    setSelectedJobId(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-rose-500 transition-all"
                >
                  {t.galleryPage.clearFilters}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveItemIndex(idx)}
                    className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative h-72 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
                      <Image
                        src={getAssetPath(item.thumbnail)}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Media Type Badge (Photo vs Video) */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        {item.mediaType === 'video' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-extrabold uppercase tracking-wide shadow-lg animate-pulse">
                            <Play className="w-3 h-3 fill-white" />
                            <span>{t.galleryPage.videoBadge}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-rose-400 border border-slate-800">
                            <ImageIcon className="w-3 h-3" />
                            <span>{t.galleryPage.photoBadge}</span>
                          </span>
                        )}
                      </div>

                      {/* Location Pill */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-slate-300">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        <span>{item.location.split(',')[0]}</span>
                      </div>

                      {/* Hover Center Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.mediaType === 'video' ? (
                          <div className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-white ml-0.5" />
                          </div>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 text-slate-950 text-xs font-bold shadow-2xl backdrop-blur-md">
                            <Maximize2 className="w-3.5 h-3.5 text-rose-600" />
                            <span>Inspect</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                          {item.client}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        <span>{item.categoryLabel}</span>
                        <span className="text-rose-600 dark:text-rose-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                          View
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </section>

      {/* Advanced Lightbox & Video Player Modal */}
      {currentModalItem && activeItemIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          
          {/* Backdrop click */}
          <div
            className="absolute inset-0"
            onClick={() => setActiveItemIndex(null)}
          />

          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveItemIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Media Area (High-Res Image OR Native HTML5 Video Player) */}
            <div className="relative lg:w-3/5 min-h-[360px] sm:min-h-[460px] lg:min-h-[580px] bg-black flex items-center justify-center">
              
              {currentModalItem.mediaType === 'video' ? (
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <video
                    src={getAssetPath(currentModalItem.src)}
                    controls
                    autoPlay
                    playsInline
                    poster={getAssetPath(currentModalItem.thumbnail)}
                    className="max-h-[540px] w-auto max-w-full rounded-2xl shadow-2xl"
                  />
                </div>
              ) : (
                <Image
                  src={getAssetPath(currentModalItem.src)}
                  alt={currentModalItem.title}
                  fill
                  priority
                  className="object-contain p-2"
                />
              )}

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md transition-all shadow-lg"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md transition-all shadow-lg"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter Pill */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                {activeItemIndex + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Right: Job Specifications & WhatsApp Inquiries */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900">
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 text-[10px] font-extrabold uppercase tracking-wide">
                      {currentModalItem.mediaType === 'video' ? 'Video Media' : 'High-Res Photo'}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {currentModalItem.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {currentModalItem.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 space-y-1 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-rose-500" />
                      <span>{currentModalItem.client}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{currentModalItem.location} • {currentModalItem.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {t.galleryPage.deliverablesTitle}
                  </h4>
                  <p>{currentModalItem.description}</p>
                </div>

                {/* Specs List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {t.galleryPage.specsTitle}
                  </h4>
                  <div className="space-y-1.5">
                    {currentModalItem.specs.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I am viewing "${currentModalItem.title}" (${currentModalItem.client}) in your Production Gallery. We would like to request a quote for similar production.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.galleryPage.inquireJobWhatsApp}</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setActiveItemIndex(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold text-center transition-all"
                >
                  <span>{t.galleryPage.requestJobQuote}</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-rose-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
