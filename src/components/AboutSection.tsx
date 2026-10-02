'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { 
  ShieldCheck, 
  Award, 
  Building
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function AboutSection() {
  const { data } = useContent();
  const company = data.company;

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl p-6 space-y-6">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={getAssetPath('/images/media/workwear.jpg')}
                  alt="CLAPSA Procurement Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] uppercase font-bold text-rose-400 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
                    Trusted across Southern Africa
                  </span>
                </div>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-500 block">
                    98%
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mt-0.5">
                    Client Satisfaction
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 leading-tight">
                    Corporate contract renewals
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-500 block">
                    1,500+
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mt-0.5">
                    Completed Deliveries
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 leading-tight">
                    Mining & corporate contracts
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-500 block">
                    8+ Brands
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mt-0.5">
                    Trade Partners
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 leading-tight">
                    Barron, Amrod, Altitude & more
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-500 block">
                    24 Hours
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mt-0.5">
                    RFQ Response
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 leading-tight">
                    Formal quotation delivery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>About {company.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              One Partner. Complete Procurement Integrity across <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">Africa</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded on the principle of making corporate and industrial purchasing effortless, <strong>{company.name}</strong> has evolved into a premier supply partner for corporate enterprises, civil contractors, mining groups, and government agencies.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We bridge the gap between world-class trade manufacturers (*Barron, Amrod, Altitude, Caterpillar, TOGS*) and high-demand corporate clients by providing <strong>in-house branding precision</strong>, stringent <strong>SABS safety compliance</strong>, and seamless <strong>SADC cross-border logistics</strong>.
            </p>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-500 shrink-0" />
                  <span>Certified Standards</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every conti suit, harness, and safety boot undergoes strict certification for flame, acid, impact, and chemical resistance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <Award className="w-5 h-5 text-rose-600 dark:text-rose-500 shrink-0" />
                  <span>Precision In-House Branding</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Computerized high-density embroidery, screen printing, and UV sublimated event hardware with pantone accuracy.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Partner with Clapsa
              </a>
              <a
                href={`tel:${company.phoneDirect}`}
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
              >
                Call Headquarters: {company.phoneDisplay}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
