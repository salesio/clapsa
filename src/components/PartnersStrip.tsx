'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Building2 } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

const PARTNER_COLORS: Record<string, { bg: string; text: string }> = {
  barron: { bg: '#0c2a32', text: '#ffffff' },
  amrod: { bg: '#25a8e0', text: '#ffffff' },
  'altitude by wizard': { bg: '#414143', text: '#ffffff' },
  altitude: { bg: '#414143', text: '#ffffff' },
  abelanani: { bg: '#1e1e1e', text: '#ffffff' },
  'bic graphic': { bg: '#262825', text: '#ffffff' },
  bic: { bg: '#262825', text: '#ffffff' },
  kmq: { bg: '#15467e', text: '#ffffff' },
  macma: { bg: '#bbbbbd', text: '#0f172a' },
  togs: { bg: '#378cc2', text: '#ffffff' },
};

export default function PartnersStrip() {
  const { data } = useContent();
  const { t } = useLanguage();
  const partners = data.partners;

  // Tripled for seamless infinite looping across all screen widths
  const marqueePartners = [...partners, ...partners, ...partners];

  const getPartnerStyle = (partner: typeof partners[0]) => {
    if (partner.bgColor) {
      return {
        bg: partner.bgColor,
        text: partner.textColor || '#ffffff'
      };
    }
    const key = partner.name.toLowerCase().trim();
    return PARTNER_COLORS[key] || { bg: '#1e293b', text: '#ffffff' };
  };

  return (
    <section className="bg-slate-100/70 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400 mb-1">
            <Building2 className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            <span>{t.partners.title}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Sliding Infinite Logo Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Left & Right Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-100/90 dark:from-slate-900 via-slate-100/50 dark:via-slate-900/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-100/90 dark:from-slate-900 via-slate-100/50 dark:via-slate-900/50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-4 sm:gap-6">
            {marqueePartners.map((partner, idx) => {
              const style = getPartnerStyle(partner);
              const isLight = style.bg.toLowerCase() === '#bbbbbd' || style.bg.toLowerCase() === '#ffffff';

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: style.bg,
                    borderColor: isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.15)'
                  }}
                  className="group relative flex flex-col items-center justify-between p-3.5 rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-36 sm:w-40 h-28 shrink-0 cursor-pointer"
                  title={`${partner.name} - ${partner.description}`}
                >
                  {/* Logo Container matching background perfectly */}
                  <div 
                    className="relative w-28 h-14 flex items-center justify-center rounded-lg overflow-hidden"
                    style={{ backgroundColor: style.bg }}
                  >
                    <Image
                      src={getAssetPath(partner.image)}
                      alt={`${partner.name} Trade Supplier`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Partner Name Label */}
                  <span 
                    style={{ color: style.text }}
                    className="text-[11px] font-bold tracking-wider uppercase text-center mt-1 truncate max-w-[130px] opacity-95 group-hover:opacity-100"
                  >
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            {t.partners.sabsBadge}
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            {t.partners.warrantiesBadge}
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            {t.partners.bbbeeBadge}
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            {t.partners.sadcBadge}
          </span>
        </div>

      </div>
    </section>
  );
}
