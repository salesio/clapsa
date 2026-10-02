'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { ShieldCheck, Building2 } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function PartnersStrip() {
  const { data } = useContent();
  const partners = data.partners;

  return (
    <section className="bg-slate-100/70 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400 mb-1">
            <Building2 className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            <span>Authorized Corporate Supply & Manufacturing Network</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Direct tier-1 access to Southern Africa&apos;s foremost apparel, PPE, and promotional catalogues
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/80 hover:border-rose-500/50 transition-all duration-300 shadow-sm"
              title={`${partner.name} - ${partner.description}`}
            >
              <div className="relative w-24 h-12 flex items-center justify-center filter grayscale group-hover:grayscale-0 contrast-125 group-hover:scale-105 transition-all duration-300">
                <Image
                  src={getAssetPath(partner.image)}
                  alt={`${partner.name} Trade Supplier`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 tracking-wider uppercase transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            SABS & ISO Approved Garments
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            Authentic Manufacturer Warranties
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            B-BBEE Procurement Ready
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            Cross-Border SADC Freight
          </span>
        </div>

      </div>
    </section>
  );
}
