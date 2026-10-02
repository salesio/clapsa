'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/company';
import { Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 fill-rose-600 dark:fill-rose-400" />
            <span>Client Feedback & Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Procurement Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">Say About Us</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg transition-all relative"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-600 to-red-700 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-md">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {t.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.role}, <strong className="text-slate-700 dark:text-slate-300">{t.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
