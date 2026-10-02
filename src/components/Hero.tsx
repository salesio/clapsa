'use client';

import React from 'react';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function Hero() {
  const { data } = useContent();
  const hero = data.hero;
  const company = data.company;

  return (
    <section id="home" className="relative min-h-[80vh] pt-8 pb-20 bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center transition-colors duration-200">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/60 dark:from-rose-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-rose-500/10 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {hero.headlinePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-rose-500">
                {hero.headlineHighlight}
              </span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              {hero.subtitle}
            </p>

            {/* Value Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              {hero.checkpoints.map((cp, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-500 shrink-0" />
                  <span>{cp}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#portfolio"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-900/20 hover:shadow-rose-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5"
              >
                View Our Past & Recent Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#catalogues"
                className="px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-700/80 transition-all shadow-sm flex items-center gap-2"
              >
                Browse Catalogues & RFQ
              </a>

              <a
                href={`tel:${company.phoneDirect}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-2 px-3"
              >
                <PhoneCall className="w-4 h-4 text-rose-600 dark:text-rose-500" />
                <span>Speak to a Consultant: {company.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-black/80 group">
              {/* Highlight Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-rose-400/30 flex items-center gap-1.5 z-10">
                <Award className="w-3.5 h-3.5" />
                Featured Project
              </div>

              {/* Showcase Image */}
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image
                  src={getAssetPath(hero.featuredProject.image)}
                  alt={hero.featuredProject.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="inline-block px-2.5 py-1 rounded bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    {hero.featuredProject.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {hero.featuredProject.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1">
                    {hero.featuredProject.description}
                  </p>
                </div>
              </div>

              {/* Quick Stat Pill underneath */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block text-base font-extrabold text-slate-900 dark:text-white">
                    {hero.featuredProject.stat1.value}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {hero.featuredProject.stat1.label}
                  </span>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-800">
                  <span className="block text-base font-extrabold text-rose-600 dark:text-rose-500">
                    {hero.featuredProject.stat2.value}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {hero.featuredProject.stat2.label}
                  </span>
                </div>
                <div>
                  <span className="block text-base font-extrabold text-slate-900 dark:text-white">
                    {hero.featuredProject.stat3.value}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {hero.featuredProject.stat3.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
