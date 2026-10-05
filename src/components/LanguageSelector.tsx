'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageOption } from '@/i18n/translations';
import { Globe, Check, ChevronDown, Sparkles } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'compact' | 'footer' | 'mobile';
  className?: string;
}

export default function LanguageSelector({ variant = 'navbar', className = '' }: LanguageSelectorProps) {
  const { language, setLanguage, supportedLanguages, currentLanguageInfo, geoInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Footer pill layout
  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-1 p-1 rounded-xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm ${className}`}>
        {supportedLanguages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isActive
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
              title={`${lang.name} (${lang.nativeName})`}
            >
              <span className="text-xs">{lang.flag}</span>
              <span className="uppercase text-[11px] font-bold tracking-wider">{lang.code}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Mobile drawer full width layout
  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1 uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <Globe className="w-3.5 h-3.5 text-rose-500" />
            Language / Idioma
          </span>
          {geoInfo?.countryCode && (
            <span className="inline-flex items-center gap-1 text-[10px] text-rose-500 dark:text-rose-400 font-semibold px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/40">
              <Sparkles className="w-2.5 h-2.5" />
              Auto: {geoInfo.countryCode}
            </span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {supportedLanguages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 border transition-all ${
                  isActive
                    ? 'bg-gradient-to-b from-rose-600 to-red-600 border-rose-500 text-white shadow-md shadow-rose-950/20'
                    : 'bg-slate-100 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <span className="text-base leading-none drop-shadow-sm">{lang.flag}</span>
                <span className="text-[11px] uppercase tracking-wider font-extrabold">{lang.code}</span>
                <span className={`text-[9px] font-medium truncate max-w-full ${isActive ? 'text-rose-100' : 'text-slate-500 dark:text-slate-400'}`}>
                  {lang.nativeName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Navbar dropdown variant (default & compact)
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-9 px-2.5 sm:px-3 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-bold border shadow-xs group ${
          isOpen
            ? 'bg-slate-200 dark:bg-slate-800 border-rose-500/50 text-slate-900 dark:text-white'
            : 'bg-slate-100/90 dark:bg-slate-900/90 hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
        }`}
        aria-label="Select language"
        title={`Language: ${currentLanguageInfo.name}`}
      >
        <span className="text-sm leading-none drop-shadow-xs">{currentLanguageInfo.flag}</span>
        <span className="uppercase text-[11px] font-extrabold tracking-wider text-slate-800 dark:text-slate-200">
          {currentLanguageInfo.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-rose-500' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-950/20 p-2 z-50 animate-in fade-in zoom-in-95 duration-150 text-left">
          <div className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800/80 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-rose-500" />
              Select Language
            </span>
            {geoInfo?.countryCode && (
              <span className="text-[9px] text-rose-500 dark:text-rose-400 font-semibold lowercase px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/40">
                IP: {geoInfo.countryCode}
              </span>
            )}
          </div>

          <div className="space-y-1">
            {supportedLanguages.map((lang: LanguageOption) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold border border-rose-200/80 dark:border-rose-900/50 shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-900 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-lg leading-none shrink-0 drop-shadow-xs">{lang.flag}</span>
                    <div className="text-left min-w-0">
                      <div className="font-bold text-slate-900 dark:text-white leading-tight truncate">
                        {lang.nativeName}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {lang.name} • {lang.country.split('/')[0].trim()}
                      </div>
                    </div>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

