'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';
import { useContent } from '@/context/ContentContext';
import { useTheme } from '@/context/ThemeContext';
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
  Sparkles
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsDrawerOpen } = useQuote();
  const { data } = useContent();
  const { theme, toggleTheme } = useTheme();

  const company = data.company;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Catalogues & RFQ', href: '#catalogues' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SABS Certified PPE & High-End Corporate Branding</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">
              Serving <strong className="text-white">South Africa & SADC Region</strong>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${company.phoneDirect}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>{company.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`mailto:${company.salesEmail}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <span>{company.salesEmail}</span>
            </a>
            <span className="text-slate-700">|</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-300 hover:text-white bg-rose-950/60 hover:bg-rose-900/80 px-2.5 py-1 rounded-md border border-rose-800/60 transition-all"
            >
              <Sliders className="w-3 h-3 text-rose-400" />
              <span>Control Panel</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 dark:border-slate-800' 
            : 'bg-white dark:bg-slate-950/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Left: Brand Logo & Tagline */}
          <Link href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-36 h-11 flex items-center">
              <Image
                src={getAssetPath('/images/logo.png')}
                alt="CLAPSA Procurement Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block pl-3 border-l border-slate-200 dark:border-slate-800 text-left">
              <span className="block text-[11px] uppercase font-extrabold tracking-wider text-rose-600 dark:text-rose-500">
                Procurement
              </span>
              <span className="block text-[10px] text-slate-500 dark:text-slate-400 tracking-tight font-medium">
                One Source Supply Solutions
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-[13px] font-semibold text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Actions (Theme Toggle + Quote Basket + CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center"
              title={`Switch to ${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
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
              className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 group"
              title="View Quote Request Basket"
            >
              <ShoppingBag className="w-4 h-4 text-rose-600 dark:text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-slate-800 dark:text-slate-200">
                Quote
              </span>
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Primary Request a Quote CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-rose-950/20 hover:shadow-rose-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request Quote</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top duration-200">
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
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-xs uppercase border border-slate-200 dark:border-slate-800"
              >
                <Sliders className="w-4 h-4 text-rose-500" />
                Open Control Panel
              </Link>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct Inquiry
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                Request Corporate Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
