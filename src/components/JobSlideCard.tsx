'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { JobGroup, GalleryItem } from '@/data/gallery';
import { getAssetPath } from '@/utils/assetPath';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Briefcase,
  Film,
  ImageIcon,
  Play,
  CheckCircle2,
  Grid,
  ArrowUpRight
} from 'lucide-react';

export interface JobSlideCardProps {
  job: JobGroup;
  jobMedia: GalleryItem[];
  onOpenItemModal: (itemId: string) => void;
  onFilterJobInStream?: (jobId: string) => void;
  secondaryActionHref?: string;
  secondaryActionLabel?: string;
}

export default function JobSlideCard({
  job,
  jobMedia,
  onOpenItemModal,
  onFilterJobInStream,
  secondaryActionHref,
  secondaryActionLabel = 'Grid'
}: JobSlideCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = jobMedia.length > 0 ? jobMedia.length : 1;

  // Auto-advance slides every 4.2 seconds when not hovered
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4200);
    return () => clearInterval(timer);
  }, [isHovered, totalSlides]);

  const activeItem = jobMedia.length > 0 ? jobMedia[currentSlide] : null;
  const isVideo = activeItem?.mediaType === 'video';

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleCardImageClick = () => {
    if (activeItem) {
      onOpenItemModal(activeItem.id);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/60 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Interactive Image / Video Slider */}
        <div 
          onClick={handleCardImageClick}
          className="relative h-72 w-full bg-slate-950 overflow-hidden cursor-pointer select-none"
        >
          {/* Active Slide Image */}
          <Image
            key={activeItem ? activeItem.id : job.coverImage}
            src={getAssetPath(activeItem ? activeItem.thumbnail : job.coverImage)}
            alt={activeItem ? activeItem.title : job.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

          {/* Top Badges: Job Code & SADC Location */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-slate-800">
              {job.jobCode}
            </span>
            {isVideo && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-extrabold uppercase tracking-wide shadow-md animate-pulse">
                <Play className="w-2.5 h-2.5 fill-white" />
                <span>Video Reel</span>
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] text-slate-300 border border-slate-800 z-10">
            <MapPin className="w-3 h-3 text-rose-400" />
            <span>{job.location}</span>
          </div>

          {/* Slider Prev / Next Controls */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={handlePrevSlide}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-rose-600 text-white backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Hover Inspect Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl">
              <Maximize2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Click to Inspect High-Res</span>
            </div>
          </div>

          {/* Bottom Overlay: Slide Dots + Slide Counter */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10">
            {/* Slide Indicators */}
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {jobMedia.slice(0, 8).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentSlide
                      ? 'w-4 bg-rose-500'
                      : 'w-1.5 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Slide Count Pill */}
            <div className="flex items-center gap-1.5 text-[11px] font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-slate-200">
              {isVideo ? (
                <Film className="w-3 h-3 text-rose-400" />
              ) : (
                <ImageIcon className="w-3 h-3 text-sky-400" />
              )}
              <span>{currentSlide + 1} / {totalSlides}</span>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <Briefcase className="w-3.5 h-3.5 text-rose-500" />
              <span>{job.client}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
              {job.title}
            </h3>
          </div>

          {/* Slide Context Subtitle (Changes dynamically with slide!) */}
          {activeItem && (
            <div 
              onClick={handleCardImageClick}
              className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2 text-xs cursor-pointer hover:border-rose-500/50 transition-colors"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                {activeItem.title}
              </span>
              <span className="text-[10px] uppercase font-extrabold text-rose-600 dark:text-rose-400 shrink-0">
                {activeItem.mediaType === 'video' ? 'Reel' : 'Photo'}
              </span>
            </div>
          )}

          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {job.description}
          </p>

          {/* Micro-Thumbnail Quick Picker */}
          {jobMedia.length > 1 && (
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                <span>Job Media ({jobMedia.length}):</span>
                <span className="text-rose-600 dark:text-rose-400 font-semibold">Slide {currentSlide + 1} of {totalSlides}</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {jobMedia.map((m, idx) => {
                  const isCurrent = idx === currentSlide;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        isCurrent 
                          ? 'border-rose-500 ring-2 ring-rose-500/30 scale-105' 
                          : 'border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                      title={m.title}
                    >
                      <Image
                        src={getAssetPath(m.thumbnail)}
                        alt={m.title}
                        fill
                        className="object-cover"
                      />
                      {m.mediaType === 'video' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-2.5 h-2.5 fill-white text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Deliverables Checklist */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            {job.deliverables.slice(0, 2).map((d, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="line-clamp-1">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dual Card Actions */}
      <div className="p-6 pt-0 flex items-center justify-between gap-2.5">
        <button
          onClick={handleCardImageClick}
          className="flex-1 py-2.5 px-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-rose-600/20 text-center flex items-center justify-center gap-1.5"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Inspect Slide ({currentSlide + 1}/{totalSlides})</span>
        </button>

        {secondaryActionHref ? (
          <a
            href={secondaryActionHref}
            className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1"
            title="View all media for this client"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{secondaryActionLabel}</span>
          </a>
        ) : onFilterJobInStream ? (
          <button
            onClick={() => onFilterJobInStream(job.id)}
            className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1"
            title="View all items in grid view"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{secondaryActionLabel}</span>
          </button>
        ) : null}
      </div>

    </div>
  );
}
