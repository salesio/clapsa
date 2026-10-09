'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { useQuote } from '@/context/QuoteContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  BookOpen,
  Search,
  Download,
  FileText,
  ShoppingBag,
  CheckCircle2,
  Plus,
  Check,
  MessageSquare,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

type CatTab = 'all' | 'footwear' | 'display' | 'ppe' | 'medical';

export default function CataloguesPage() {
  const { t } = useLanguage();
  const { data } = useContent();
  const { items: quoteItems, addItem, totalItemsCount, setIsDrawerOpen } = useQuote();
  const company = data.company;
  const products = data.products;

  const [activeTab, setActiveTab] = useState<CatTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: CatTab; label: string; count: number }[] = [
    { id: 'all', label: t.catalogue.tabs.all, count: products.length },
    { id: 'footwear', label: t.catalogue.tabs.footwear, count: products.filter(p => p.category === 'footwear').length },
    { id: 'display', label: t.catalogue.tabs.display, count: products.filter(p => p.category === 'display').length },
    { id: 'ppe', label: t.catalogue.tabs.ppe, count: products.filter(p => p.category === 'ppe').length },
    { id: 'medical', label: t.catalogue.tabs.medical, count: products.filter(p => p.category === 'medical').length },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeTab !== 'all' && product.category !== activeTab) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const localized = (t.catalogue.products as Record<string, any>)[product.id];
      const name = (localized?.name || product.name).toLowerCase();
      const desc = (localized?.description || product.description).toLowerCase();
      return name.includes(q) || desc.includes(q);
    }
    return true;
  });

  const getLocalizedProduct = (p: typeof products[0]) => {
    const localized = (t.catalogue.products as Record<string, any>)[p.id];
    if (localized) {
      return {
        ...p,
        name: localized.name || p.name,
        categoryLabel: localized.categoryLabel || p.categoryLabel,
        description: localized.description || p.description,
        features: (localized.features as string[]) || p.features,
      };
    }
    return p;
  };

  const tradeDownloads = [
    {
      title: 'Barron Master Corporate Catalogue 2025/2026',
      pages: '640+ Pages',
      category: 'Corporate Wardrobe & Headwear',
      fileSize: '48.5 MB',
      description: 'The authoritative reference for corporate apparel, formal blazers, sports teamwear, knitwear, and promotional gifting.',
      image: '/images/partners/barron.jpg'
    },
    {
      title: 'Amrod Total Solution Promotional Gifting',
      pages: '520+ Pages',
      category: 'VIP Gifting, Drinkware & Tech',
      fileSize: '39.2 MB',
      description: 'Comprehensive catalogue of high-perceived-value corporate gifts, laser-engraved metal drinkware, and tech accessories.',
      image: '/images/partners/amrod.jpg'
    },
    {
      title: 'Altitude by Wizard Outerwear & Activewear',
      pages: '280+ Pages',
      category: 'Performance Activewear & Jackets',
      fileSize: '24.8 MB',
      description: 'Technical outerwear, weather-resistant softshell jackets, padded winter parkas, and moisture-wicking golf collections.',
      image: '/images/partners/altitude.jpg'
    },
    {
      title: 'Abelanani Custom Manufactured Merchandise',
      pages: '190+ Pages',
      category: 'Custom Event Novelties & Signage',
      fileSize: '18.4 MB',
      description: 'Specialist custom-manufactured conference supplies, printed satin lanyards, festival novelties, and point-of-sale displays.',
      image: '/images/partners/abelanani.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.catalogue.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {t.catalogue.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
              {t.catalogue.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.catalogue.subtitle}
          </p>

          {/* Floating Basket Quick Pill if items exist */}
          {totalItemsCount > 0 && (
            <div className="pt-2">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all animate-bounce"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>You have {totalItemsCount} item(s) in your RFQ basket — View Basket</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Interactive Products Catalogue */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Controls Toolbar: Category Tabs + Search */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-rose-800 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.catalogue.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
            />
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((rawP) => {
            const product = getLocalizedProduct(rawP);
            const inQuote = quoteItems.some((item) => item.product.id === product.id);

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden p-4">
                    <Image
                      src={getAssetPath(product.image)}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-slate-800">
                        {product.categoryLabel}
                      </span>
                    </div>

                    {product.isPopular && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide">
                          {t.catalogue.popularChoice}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {product.features.slice(0, 2).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer & Actions */}
                <div className="p-5 pt-0 space-y-3 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                  <div className="flex items-center justify-between text-xs pt-3">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      MOQ: <strong className="text-slate-900 dark:text-white font-bold">{product.moq}</strong>
                    </span>
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                      {product.indicativePrice || 'Wholesale RFQ'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addItem(product)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        inQuote
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {inQuote ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.catalogue.addedToQuote}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t.catalogue.addToQuote}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I would like to request bulk pricing for "${product.name}" (MOQ: ${product.moq}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* Downloadable Trade PDF Catalogues Section */}
      <section className="py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              {t.catalogue.downloads.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t.catalogue.downloads.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              {t.catalogue.downloads.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeDownloads.map((dl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs hover:border-rose-500/60 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 shrink-0 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={getAssetPath(dl.image)}
                      alt={dl.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                      {dl.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {dl.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {dl.pages} • PDF ({dl.fileSize})
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, please send me the latest PDF download for "${dl.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-rose-600 dark:hover:bg-rose-600 text-white dark:text-slate-900 dark:hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Request PDF</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
