'use client';

import React from 'react';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Shirt, 
  HardHat, 
  Tent, 
  Shield, 
  Gift, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Shirt: <Shirt className="w-6 h-6 text-rose-600 dark:text-rose-500" />,
  HardHat: <HardHat className="w-6 h-6 text-rose-600 dark:text-rose-500" />,
  Tent: <Tent className="w-6 h-6 text-rose-600 dark:text-rose-500" />,
  Shield: <Shield className="w-6 h-6 text-rose-600 dark:text-rose-500" />,
  Gift: <Gift className="w-6 h-6 text-rose-600 dark:text-rose-500" />,
  Truck: <Truck className="w-6 h-6 text-rose-600 dark:text-rose-500" />
};

export default function ServicesSection() {
  const { data } = useContent();
  const { t } = useLanguage();
  const services = data.services;

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">
              {t.services.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const localized = (t.services.items as Record<string, any>)[service.id];
            const title = localized?.title || service.title;
            const tag = localized?.tag || service.tag;
            const description = localized?.description || service.description;
            const features = localized?.features || service.features;

            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 hover:shadow-xl dark:hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-5">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-rose-500/40 group-hover:scale-110 transition-all">
                      {iconMap[service.icon] || <Shield className="w-6 h-6 text-rose-600 dark:text-rose-500" />}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/40">
                      {tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800/80">
                    {features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 hover:text-rose-500 group-hover:translate-x-1 transition-all"
                  >
                    <span>{t.services.requestSolution}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
