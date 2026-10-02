'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CATALOGUE_DOWNLOADS, ProductItem } from '@/data/products';
import { useQuote } from '@/context/QuoteContext';
import { useContent } from '@/context/ContentContext';
import { 
  Package, 
  Search, 
  Download, 
  Plus, 
  Check, 
  FileText, 
  MessageSquare,
  ShoppingBag
} from 'lucide-react';

type ProductCategory = 'all' | 'footwear' | 'display' | 'ppe' | 'medical';

export default function CatalogueSection() {
  const { data } = useContent();
  const products = data.products;
  const company = data.company;

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const { addItem } = useQuote();

  const handleAddToQuote = (product: ProductItem) => {
    addItem(product, 10);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const filteredProducts = products.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogues" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Digital Catalogues & Rapid RFQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">Catalogue Browser</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Browse our most requested industrial boots, branded gazebos, and protective workwear. Add items to your **Quote Basket** or download full master trade catalogues below.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-slate-50 dark:bg-slate-900/90 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Catalog Lines' },
              { id: 'footwear', label: 'Safety Boots & Footwear' },
              { id: 'display', label: 'Outdoor Displays & Gazebos' },
              { id: 'ppe', label: 'Industrial PPE' },
              { id: 'medical', label: 'Hygiene & Coveralls' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProductCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search boots, gazebos, PPE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 p-4 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 w-full rounded-xl bg-white dark:bg-slate-950 overflow-hidden mb-4 border border-slate-200 dark:border-slate-800/80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isPopular && (
                    <div className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Popular Choice
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                    MOQ: {product.moq}
                  </div>
                </div>

                {/* Product Info */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                  {product.categoryLabel}
                </span>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-2 leading-snug">
                  {product.name}
                </h3>

                {product.indicativePrice && (
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-300 mt-1">
                    Indicative: <span className="text-rose-600 dark:text-rose-400 font-bold">{product.indicativePrice}</span>
                  </p>
                )}

                {/* Features Pill */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feat, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <button
                  onClick={() => handleAddToQuote(product)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    addedItems[product.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-900/20'
                  }`}
                >
                  {addedItems[product.id] ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Quote!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Quote</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello CLAPSA, I would like to inquire about "${product.name}" (MOQ: ${product.moq}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-800 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Master Catalogues Download Section */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Comprehensive PDF Trade Catalogues</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Need Full Product Specs & Range Overviews?
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  Download the latest 2025/2026 manufacturer trade catalogues containing thousands of styles, color options, and sizing charts.
                </p>
              </div>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shrink-0 text-center shadow-lg"
              >
                Request Custom Branded Catalogue
              </a>
            </div>

            {/* Catalogue Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {CATALOGUE_DOWNLOADS.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-bold text-rose-400 uppercase">{cat.category}</span>
                      <span>{cat.pages}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello CLAPSA, please send me the full PDF version of the "${cat.title}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-rose-400" />
                    <span>Request PDF ({cat.fileSize})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
