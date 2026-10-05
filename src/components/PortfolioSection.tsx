'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/data/portfolio';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  X, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

type CategoryFilter = 'all' | 'corporate' | 'ppe' | 'display' | 'security' | 'gifting';

export default function PortfolioSection() {
  const { data } = useContent();
  const { t } = useLanguage();
  const portfolioItems = data.portfolio;
  const company = data.company;

  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeTab);

  const filterTabs: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: t.portfolio.tabs.all, count: portfolioItems.length },
    { id: 'corporate', label: t.portfolio.tabs.corporate, count: portfolioItems.filter(i => i.category === 'corporate').length },
    { id: 'ppe', label: t.portfolio.tabs.ppe, count: portfolioItems.filter(i => i.category === 'ppe').length },
    { id: 'display', label: t.portfolio.tabs.display, count: portfolioItems.filter(i => i.category === 'display').length },
    { id: 'security', label: t.portfolio.tabs.security, count: portfolioItems.filter(i => i.category === 'security').length },
    { id: 'gifting', label: t.portfolio.tabs.gifting, count: portfolioItems.filter(i => i.category === 'gifting').length },
  ];

  // Helper to get localized project info if available in dictionary
  const getLocalizedProject = (item: PortfolioItem): PortfolioItem => {
    const localized = (t.portfolio.items as Record<string, any>)[item.id];
    if (localized) {
      return {
        ...item,
        title: localized.title || item.title,
        client: localized.client || item.client,
        tag: localized.tag || item.tag,
        categoryLabel: localized.categoryLabel || item.categoryLabel,
        location: localized.location || item.location,
        description: localized.description || item.description,
        deliverables: (localized.deliverables as string[]) || item.deliverables,
      };
    }
    return item;
  };

  const currentModalProject = selectedProject ? getLocalizedProject(selectedProject) : null;

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.portfolio.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.portfolio.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">
              {t.portfolio.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/30 border border-rose-500'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-rose-800 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((rawProject) => {
            const project = getLocalizedProject(rawProject);
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(rawProject)}
                className="group cursor-pointer rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-rose-950/20 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badge */}
                <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
                  <Image
                    src={getAssetPath(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase text-rose-600 dark:text-rose-400 border border-slate-200 dark:border-slate-800 shadow-sm">
                      {project.tag}
                    </span>
                  </div>

                  {/* Location Pill */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] text-slate-200 border border-slate-800">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    {project.location}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-rose-500" />
                      <span className="line-clamp-1">{project.client}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.portfolio.completed} {project.year}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-bold text-rose-600 dark:text-rose-400 group-hover:translate-x-1 transition-transform">
                      {t.portfolio.viewCaseStudy}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {currentModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-6 sm:p-8 text-left space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                <span>{currentModalProject.categoryLabel}</span>
                <span>•</span>
                <span className="text-slate-500 dark:text-slate-400">{currentModalProject.location}</span>
                <span>•</span>
                <span className="text-slate-500 dark:text-slate-400">{currentModalProject.year}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {currentModalProject.title}
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-rose-500" />
                {t.portfolio.client}: {currentModalProject.client}
              </p>
            </div>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <Image
                src={getAssetPath(currentModalProject.image)}
                alt={currentModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Overview & Deliverables */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {t.portfolio.modal.projectOverview}
              </h4>
              <p>{currentModalProject.description}</p>

              <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider pt-2">
                {t.portfolio.modal.scopeOfSupply}
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {currentModalProject.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
              >
                {t.portfolio.modal.close}
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I saw your case study on "${currentModalProject.title}" for ${currentModalProject.client}. We would like a quote for a similar project.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  {t.portfolio.modal.inquireWhatsApp}
                </a>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  {t.portfolio.modal.requestProposal}
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
