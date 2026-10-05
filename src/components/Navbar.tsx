'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { useContent } from '@/context/ContentContext';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import { 
  Phone, 
  Mail, 
  ShoppingBag, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight, 
  MessageSquare,
  Sun,
  Moon,
  Sliders,
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsDrawerOpen } = useQuote();
  const { data } = useContent();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const company = data.company;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.ourWork, href: '#portfolio' },
    { label: t.nav.capabilities, href: '#services' },
    { label: t.nav.catalogues, href: '#catalogues' },
    { label: t.nav.aboutUs, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-950/95 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 hidden md:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Trust & Region Guarantee */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold tracking-tight shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.nav.sabsBanner}</span>
            </span>
            <span className="text-slate-700 hidden xl:inline">•</span>
            <span className="text-slate-400 hidden xl:inline">
              {t.nav.servingRegion} <strong className="text-slate-200 font-semibold">{t.nav.regionHighlight}</strong>
            </span>
          </div>

          {/* Right: Direct Contacts & Admin Portal */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${company.phoneDirect}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
            >
              <Phone className="w-3 h-3 text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{company.phoneDisplay}</span>
            </a>
            <span className="text-slate-800">|</span>
            <a 
              href={`mailto:${company.salesEmail}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
            >
              <Mail className="w-3 h-3 text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{company.salesEmail}</span>
            </a>
            <span className="text-slate-800">|</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-all shadow-2xs"
            >
              <Sliders className="w-3 h-3 text-rose-400" />
              <span>{t.nav.controlPanel}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-md py-2.5 border-b border-slate-200/90 dark:border-slate-800' 
            : 'bg-white/95 dark:bg-slate-950/90 backdrop-blur-md py-3.5 border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
          {/* Left: Brand Logo & Tagline */}
          <Link href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-32 h-10 sm:w-36 sm:h-11 flex items-center">
              <Image
                src={getAssetPath('/images/logo.png')}
                alt="CLAPSA Procurement Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden xl:flex flex-col pl-3 border-l border-slate-200 dark:border-slate-800 text-left">
              <span className="text-[11px] uppercase font-extrabold tracking-wider text-rose-600 dark:text-rose-500 leading-tight">
                {t.nav.taglineProc}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                {t.nav.taglineSub}
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links Pill Dock */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 shadow-2xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 xl:px-3.5 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xs transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Actions Cluster (Language + Theme + Quote Basket + CTA) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Language Selector */}
            <LanguageSelector variant="navbar" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs flex items-center justify-center transition-all"
              title={theme === 'light' ? t.nav.switchThemeDark : t.nav.switchThemeLight}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700 hover:text-rose-600 transition-colors" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
              )}
            </button>

            {/* Quote Basket Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative h-9 px-2.5 sm:px-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-800/60 shadow-xs flex items-center gap-1.5 sm:gap-2 text-xs font-bold transition-all group"
              title="View Quote Request Basket"
            >
              <ShoppingBag className="w-4 h-4 text-rose-600 dark:text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-slate-800 dark:text-slate-200">
                {t.nav.quote}
              </span>
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-xs border-2 border-white dark:border-slate-950">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Primary Request a Quote CTA */}
            <a
              href="#contact"
              className="h-9 px-3.5 sm:px-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md hover:shadow-rose-600/25 transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
            >
              <span>{t.nav.requestQuote}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-9 w-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 text-left">
            
            {/* Mobile Language Selector */}
            <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
              <LanguageSelector variant="mobile" />
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-xs uppercase border border-slate-200 dark:border-slate-800 shadow-2xs"
              >
                <Sliders className="w-4 h-4 text-rose-500" />
                {t.nav.openControlPanel}
              </Link>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                {t.nav.whatsappDirect}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                {t.nav.requestCorporateQuote}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

