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
  ChevronRight,
  ExternalLink,
  Tag,
  Building2,
  Truck,
  ArrowUpRight
} from 'lucide-react';

type CatTab = 'all' | 'footwear' | 'display' | 'ppe' | 'medical';

export default function CataloguesPage() {
  const { t, language } = useLanguage();
  const { data } = useContent();
  const { items: quoteItems, addItem, totalItemsCount, setIsDrawerOpen } = useQuote();
  const company = data.company;
  const products = data.products;

  const [activeTab, setActiveTab] = useState<CatTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 8 Official Wholesale Trade Catalogues (Previews & Descriptions)
  // Ready to plug in updated direct links sent by the client!
  const tradeCatalogues = [
    {
      id: 'barron',
      title: 'Barron Master Corporate Catalogue 2025/2026',
      category: language === 'pt' ? 'Vestuário Corporativo & Bonés' : 'Corporate Apparel & Headwear',
      pages: '640+ Pages',
      format: 'Digital Flipbook & PDF',
      description: language === 'pt' 
        ? 'A referência máxima na África Austral para fatos executivos, polos corporativos, casacos impermeáveis, fardamento desportivo e brindes.'
        : 'The authoritative benchmark for corporate wardrobe, formal blazers, pique golf shirts, weather-resistant jackets, and promotional apparel.',
      image: '/images/partners/barron.jpg',
      badge: 'Master Wholesale',
      linkUrl: null as string | null // Client will provide direct updated URL; falls back to WhatsApp inquiry
    },
    {
      id: 'amrod',
      title: 'Amrod Total Solution Promotional Gifting',
      category: language === 'pt' ? 'Brindes VIP, Bebidas & Tecnologia' : 'VIP Gifting, Drinkware & Tech',
      pages: '520+ Pages',
      format: 'Interactive Digital Catalogue',
      description: language === 'pt'
        ? 'Coleção abrangente de presentes corporativos de alto valor percebido, garrafas térmicas a laser, acessórios executivos e kits de boas-vindas.'
        : 'Comprehensive catalogue of high-perceived-value corporate gifts, laser-engraved double-wall drinkware, tech accessories, and executive sets.',
      image: '/images/partners/amrod.jpg',
      badge: 'VIP Gifting',
      linkUrl: null
    },
    {
      id: 'altitude',
      title: 'Altitude Technical Outerwear & Activewear',
      category: language === 'pt' ? 'Casacos Técnicos & Desporto' : 'Performance Outerwear & Jackets',
      pages: '280+ Pages',
      format: 'High-Res Digital Edition',
      description: language === 'pt'
        ? 'Casacos softshell resistentes a intempéries, parkas acolchoadas de inverno, polos transpiráveis e fardamento desportivo de alto rendimento.'
        : 'Technical outerwear, weather-resistant softshell jackets, insulated winter parkas, and moisture-wicking golf collections.',
      image: '/images/partners/altitude.jpg',
      badge: 'Activewear',
      linkUrl: null
    },
    {
      id: 'abelanani',
      title: 'Abelanani Custom Manufactured Merchandise',
      category: language === 'pt' ? 'Fitas de Evento, Pulseiras & Displays' : 'Custom Event Novelties & Signage',
      pages: '190+ Pages',
      format: 'Manufacturer Reference',
      description: language === 'pt'
        ? 'Fabrico à medida de crachás de conferência, fitas de cetim sublimadas, pulseiras QR para festivais e suportes de ponto de venda.'
        : 'Specialist custom-manufactured conference supplies, printed satin lanyards, scannable QR wristbands, and point-of-sale display hardware.',
      image: '/images/partners/abelanani.jpg',
      badge: 'Custom Made',
      linkUrl: null
    },
    {
      id: 'kmq',
      title: 'KMQ Heavy Industrial Workwear & Safety Footwear',
      category: language === 'pt' ? 'Fatos SABS & Botas Industriais' : 'SABS 434 Workwear & Boots',
      pages: '210+ Pages',
      format: 'Industrial Safety Spec',
      description: language === 'pt'
        ? 'Fatos-macaco para mineração e construção, calçado com biqueira de aço SABS, coletes refletores e equipamentos de proteção individual.'
        : 'Heavy-duty mining overalls, acid-and-flame resistant conti suits, SABS steel-toe safety boots, and certified protective equipment.',
      image: '/images/partners/kmq.jpg',
      badge: 'SABS 434',
      linkUrl: null
    },
    {
      id: 'bic',
      title: 'Bic Graphic Promotional Writing Instruments',
      category: language === 'pt' ? 'Canetas & Instrumentos de Escrita' : 'Writing Instruments & Stationery',
      pages: '120+ Pages',
      format: 'High-Volume Stationery',
      description: language === 'pt'
        ? 'Canetas esferográficas mundiais, canetas stylus executivas gravadas e instrumentos de escrita promocionais de grande volume.'
        : 'World-renowned ballpoint pens, corporate executive metal pens, highlighters, and high-volume promotional writing instruments.',
      image: '/images/partners/bic.jpg',
      badge: 'High Volume',
      linkUrl: null
    },
    {
      id: 'macma',
      title: 'Macma Executive Gifting & Novelties',
      category: language === 'pt' ? 'Brindes Europeus & Secretária' : 'European Executive Gifts',
      pages: '340+ Pages',
      format: 'European Collection',
      description: language === 'pt'
        ? 'Brindes de design europeu, blocos de notas em pele sintética gravada, conjuntos de secretária executivos e caixas de luxo.'
        : 'European-designed executive gifts, embossed leatherette notebooks, desktop organizational sets, and luxury presentation hampers.',
      image: '/images/partners/macma.jpg',
      badge: 'Executive',
      linkUrl: null
    },
    {
      id: 'togs',
      title: 'TOGS Sublimated Sportswear & Athleisure',
      category: language === 'pt' ? 'Fardamento Desportivo Sublimado' : 'Sublimated Teamwear & Kits',
      pages: '160+ Pages',
      format: 'Full Sublimation Spec',
      description: language === 'pt'
        ? 'Equipamentos de futebol, râguebi e atletismo em sublimação total, fatos de treino de aquecimento e sacos desportivos.'
        : 'Full-sublimation soccer, rugby, and athletics kits, warm-up tracksuits, sports bags, and tournament apparel.',
      image: '/images/partners/togs.jpg',
      badge: 'Teamwear',
      linkUrl: null
    }
  ];

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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Visual Page Banner Tailored for Catalogues (1920x670px) */}
      <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:h-[670px] overflow-hidden flex flex-col justify-center bg-slate-950 text-white select-none border-b border-slate-800">
        {/* Full-Bleed 1920x670 Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/images/showcase/clapsa-corporate-new-arrivals-banner.jpg')}
            alt="CLAPSA Master Trade Catalogues & Wholesale Network"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50 lg:to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/25 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Banner Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
                <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                <span>{language === 'pt' ? 'Rede Oficial de Distribuição SADC' : 'Official SADC Wholesale Distribution'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                {language === 'pt' ? 'Catálogos Comerciais &' : 'Master Trade Catalogues &'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
                  {language === 'pt' ? 'Especificações' : 'Wholesale Specs'}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow-xs">
                {language === 'pt'
                  ? 'Acesso direto a mais de 10.000 produtos das principais fábricas da África do Sul. Veja abaixo as prévias dos catálogos oficiais atualizados para 2025/2026.'
                  : 'Direct tier-1 access to over 10,000+ factory-direct products from Southern Africa’s premier manufacturers. Explore live preview covers and detailed specifications below.'}
              </p>

              {/* Banner Feature Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-200">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-rose-400" />
                  {language === 'pt' ? 'Preços de Fábrica SA' : 'Direct SA Wholesale Pricing'}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  {language === 'pt' ? 'Certificado de Origem SADC' : 'SADC Certificate of Origin'}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-md">
                  <Layers className="w-4 h-4 text-amber-400" />
                  {language === 'pt' ? 'Bordados & Serigrafia Próprios' : 'In-House Branding Plant'}
                </span>
              </div>
            </div>

            {/* Right Banner Column: Visual Stack of Catalogue Covers */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-slate-900/85 border border-white/15 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {language === 'pt' ? 'Coleções Principais' : 'Featured Master Covers'}
                  </span>
                  <span className="text-[11px] font-bold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-md border border-rose-500/30">
                    8 Catalogues
                  </span>
                </div>

                {/* Overlapping Preview Mini-Grid */}
                <div className="grid grid-cols-4 gap-2.5">
                  {tradeCatalogues.slice(0, 4).map((item) => (
                    <div key={item.id} className="relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-950 border border-white/15 group">
                      <Image
                        src={getAssetPath(item.image)}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                      <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white text-center truncate">
                        {item.id.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>{language === 'pt' ? 'Tem um item específico?' : 'Need an unlisted code?'}</span>
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I have a specific product code from an SA catalogue that I need quoted.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-400 font-bold hover:text-rose-300 flex items-center gap-1"
                  >
                    <span>{language === 'pt' ? 'Perguntar no WhatsApp' : 'Direct RFQ Inquiry'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: 8 Official Trade Catalogues (Previews & Small Descriptions) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Prévias & Descrições Completas' : 'Catalogue Previews & Specifications'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'pt' ? 'Catálogos Disponíveis para Consulta' : 'Wholesale Manufacturer Catalogues'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {language === 'pt'
                ? 'Os links interativos atualizados estão a ser integrados. Clique em qualquer catálogo para abrir a prévia ou solicitar o link direto / PDF no WhatsApp.'
                : 'Updated 2025/2026 digital interactive flipbooks are being connected. Click any catalogue to preview, request the direct PDF link, or get manufacturer-direct quotes.'}
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
            {language === 'pt' ? '🔗 Novos links serão atualizados automaticamente' : '🔗 Updated links being populated'}
          </div>
        </div>

        {/* 8 Catalogue Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradeCatalogues.map((cat) => {
            const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              `Hi CLAPSA, please send me the latest interactive digital link or PDF for "${cat.title}".`
            )}`;
            const finalLink = cat.linkUrl || waUrl;

            return (
              <div
                key={cat.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Catalogue Preview Cover */}
                  <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden p-4 flex items-center justify-center">
                    <Image
                      src={getAssetPath(cat.image)}
                      alt={cat.title}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-slate-800">
                        {cat.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-medium">
                        {cat.pages}
                      </span>
                    </div>
                  </div>

                  {/* Body Info: Title + Small Description */}
                  <div className="p-5 space-y-2.5">
                    <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                      {cat.category}
                    </span>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
                      {cat.title}
                    </h3>

                    {/* Small Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      <span>Format: </span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{cat.format}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 space-y-2">
                  <a
                    href={finalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-rose-600 dark:bg-slate-800 dark:hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>{cat.linkUrl ? (language === 'pt' ? 'Abrir Catálogo ↗' : 'Open Catalogue ↗') : (language === 'pt' ? 'Pedir Link / PDF ↗' : 'Request Link / PDF ↗')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I want to request a wholesale quote for items from the ${cat.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 text-center text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors block"
                  >
                    {language === 'pt' ? 'Solicitar Cotação deste Catálogo' : 'Request RFQ from this Catalogue'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION: Interactive Single Products Catalogue & RFQ Drawer */}
      <section className="py-12 bg-white dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                {language === 'pt' ? 'Pesquisa Rápida de Produtos' : 'Individual Product Search'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {language === 'pt' ? 'Itens Populares & Linhas em Destaque' : 'Popular Single Line Items'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                {language === 'pt' ? 'Adicione produtos diretamente ao cesto de cotação para um orçamento expresso em 2 horas.' : 'Add items directly to your RFQ basket for an instant wholesale price breakdown.'}
              </p>
            </div>

            {totalItemsCount > 0 && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all animate-bounce"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{totalItemsCount} item(s) in basket</span>
              </button>
            )}
          </div>

          {/* Controls Toolbar: Category Tabs + Search */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-rose-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
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
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
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
                    <div className="relative h-56 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden p-4">
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
                    <div className="p-5 space-y-2.5">
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

                  {/* Add to RFQ Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => addItem(product, 50)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        inQuote
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-slate-900 dark:text-white hover:text-white'
                      }`}
                    >
                      {inQuote ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{t.catalogue.addedToQuote}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>{t.catalogue.addToQuote}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Cross-Border & Custom Sourcing Callout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950 to-slate-950 text-white relative overflow-hidden shadow-2xl border border-rose-900/40">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              {language === 'pt' ? 'Aprovisionamento Direto & Logística SADC' : 'Factory Direct Procurement & Cross-Border Logistics'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {language === 'pt' ? 'Procura Produtos Específicos Não Listados?' : 'Looking for Unlisted SABS PPE, High-Vis Workwear, or Custom Formats?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'pt'
                ? 'Temos parcerias diretas com os maiores fabricantes sul-africanos. Quer precise de tingimento Pantone personalizado, calçado mineiro especializado ou contentores consolidados, a nossa equipa em Sandton responde em 24h.'
                : 'We hold wholesale distribution agreements with South Africa\'s leading manufacturers. If you need custom Pantone fabric dyes, specialized mining footwear, or bulk container shipments, our Sandton procurement desk delivers within 24–48 hours.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I need a custom wholesale quotation for items not listed in your standard catalogue.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'pt' ? 'Falar com a Central de Compras' : 'Speak to Procurement Desk'}</span>
              </a>
              <Link
                href="/gallery"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>{language === 'pt' ? 'Ver Galeria de Produção Real' : 'View Real Production Gallery'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
