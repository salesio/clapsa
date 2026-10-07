'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { SHOWCASE_ITEMS, ShowcaseItem, ShowcaseCategory } from '@/data/showcase';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  Camera,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Layers,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

export default function ShowcaseSection() {
  const { t } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const [activeCategory, setActiveCategory] = useState<ShowcaseCategory>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter((item) => item.category === activeCategory);

  const filterTabs: { id: ShowcaseCategory; label: string; count: number }[] = [
    { id: 'all', label: t.showcase.tabs.all, count: SHOWCASE_ITEMS.length },
    { id: 'sportswear', label: t.showcase.tabs.sportswear, count: SHOWCASE_ITEMS.filter(i => i.category === 'sportswear').length },
    { id: 'apparel', label: t.showcase.tabs.apparel, count: SHOWCASE_ITEMS.filter(i => i.category === 'apparel').length },
    { id: 'gifting', label: t.showcase.tabs.gifting, count: SHOWCASE_ITEMS.filter(i => i.category === 'gifting').length },
    { id: 'ppe', label: t.showcase.tabs.ppe, count: SHOWCASE_ITEMS.filter(i => i.category === 'ppe').length },
  ];

  // Localization helper
  const getLocalizedItem = (item: ShowcaseItem) => {
    const localized = (t.showcase.items as Record<string, any>)?.[item.id];
    if (localized) {
      return {
        ...item,
        title: localized.title || item.title,
        categoryLabel: localized.categoryLabel || item.categoryLabel,
        badge: localized.badge || item.badge,
        clientOrContext: localized.clientOrContext || item.clientOrContext,
        description: localized.description || item.description,
        highlights: (localized.highlights as string[]) || item.highlights,
      };
    }
    return item;
  };

  const currentItem = selectedItemIndex !== null ? getLocalizedItem(filteredItems[selectedItemIndex]) : null;

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [selectedItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handleNext, handlePrev]);

  return (
    <section id="showcase" className="py-24 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white relative transition-colors duration-200 border-y border-slate-200 dark:border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Camera className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.showcase.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.showcase.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
              {t.showcase.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.showcase.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30 border border-rose-500'
                    : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-rose-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((rawItem, idx) => {
            const item = getLocalizedItem(rawItem);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(idx)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-rose-950/20 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Dynamic Height */}
                <div className="relative h-72 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Badge Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase text-rose-400 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-slate-950 text-xs font-bold shadow-2xl backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-rose-600" />
                      {t.showcase.clickToInspect}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                      {item.clientOrContext}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-slate-400" />
                      {item.categoryLabel}
                    </span>
                    <span className="text-rose-600 dark:text-rose-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      {t.showcase.inspect}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{t.showcase.customOrderTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {t.showcase.customOrderSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I am browsing your Client Lookbook and would like to discuss custom manufacturing & branding for our organization.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.showcase.whatsappLookbook}</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <span>{t.showcase.requestSample}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Full-Screen Lightbox Modal */}
      {currentItem && selectedItemIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          
          {/* Close Backdrop */}
          <div 
            className="absolute inset-0"
            onClick={() => setSelectedItemIndex(null)} 
          />

          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-10 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: High-Res Image with Next/Prev Arrows */}
            <div className="relative lg:w-3/5 min-h-[360px] sm:min-h-[460px] lg:min-h-[560px] bg-slate-950 flex items-center justify-center">
              <Image
                src={getAssetPath(currentItem.image)}
                alt={currentItem.title}
                fill
                priority
                className="object-contain p-2"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md transition-all shadow-lg"
                aria-label="Previous item"
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
                aria-label="Next item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter Pill */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                {selectedItemIndex + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Right: Detailed Specifications & Inquiries */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900">
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 text-[10px] font-bold uppercase tracking-wide">
                      {currentItem.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {currentItem.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {t.showcase.clientContext}: <span className="text-slate-900 dark:text-slate-200">{currentItem.clientOrContext}</span>
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {t.showcase.details}
                  </h4>
                  <p>{currentItem.description}</p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {t.showcase.keyFeatures}
                  </h4>
                  <div className="space-y-1.5">
                    {currentItem.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I saw "${currentItem.title}" in your Production Lookbook (${currentItem.clientOrContext}). We are interested in ordering / getting a quote for this product line.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.showcase.inquireThisItem}</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setSelectedItemIndex(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold text-center transition-all"
                >
                  <span>{t.showcase.requestCustomProposal}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
