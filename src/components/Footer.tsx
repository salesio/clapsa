'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  MessageSquare,
  Sliders
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Footer() {
  const { data } = useContent();
  const { t } = useLanguage();
  const company = data.company;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2.5 shadow-lg border-2 border-white/80 shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={getAssetPath('/images/logo.png')}
                    alt="CLAPSA Procurement"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="block text-base font-extrabold text-white tracking-wider">
                  CLAPSA
                </span>
                <span className="block text-[11px] font-bold text-rose-500 uppercase tracking-wider">
                  Procurement Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              <strong>{company.legalName}</strong> — {t.footer.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={COMPANY_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <Link
                href="/admin"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-rose-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{t.footer.adminPanel}</span>
              </Link>
            </div>

            {/* Language Selector in Footer Brand Column */}
            <div className="pt-2">
              <LanguageSelector variant="footer" />
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-rose-400 transition-colors">{t.nav.home}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.nav.ourWork}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">{t.nav.capabilities}</a>
              </li>
              <li>
                <a href="#catalogues" className="hover:text-rose-400 transition-colors">{t.nav.catalogues}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">{t.nav.aboutUs}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-400 transition-colors">{t.nav.requestQuote}</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Supply Solutions */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.supplySolutions}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.portfolio.tabs.corporate}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.portfolio.tabs.ppe}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.catalogue.tabs.footwear}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.portfolio.tabs.display}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.portfolio.tabs.security}</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">{t.portfolio.tabs.gifting}</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Head Office */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.office}
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`tel:${company.phoneDirect}`} className="hover:text-white transition-colors">
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`mailto:${company.salesEmail}`} className="hover:text-white transition-colors">
                  {company.salesEmail}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} {company.legalName}. {t.footer.allRights}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>{t.footer.sabsCompliance}</span>
            <span>•</span>
            <span>{t.footer.bbbeeProcurement}</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

const COMPANY_FACEBOOK = 'https://facebook.com/www.clapsa.co.za';

