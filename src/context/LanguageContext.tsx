'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, SUPPORTED_LANGUAGES, LanguageOption, translations, TranslationSchema } from '@/i18n/translations';

interface GeoInfo {
  ip?: string;
  countryCode?: string;
  countryName?: string;
  city?: string;
  detectedLang?: Language;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  supportedLanguages: LanguageOption[];
  currentLanguageInfo: LanguageOption;
  t: TranslationSchema;
  geoInfo: GeoInfo | null;
  isDetecting: boolean;
  userOverridden: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const PORTUGUESE_COUNTRIES = new Set([
  'MZ', // Mozambique
  'AO', // Angola
  'PT', // Portugal
  'BR', // Brazil
  'CV', // Cape Verde
  'GW', // Guinea-Bissau
  'ST', // São Tomé and Príncipe
  'TL', // Timor-Leste
]);

const AFRIKAANS_COUNTRIES = new Set([
  'ZA', // South Africa
  'NA', // Namibia
]);

/**
 * Detects language from country code and browser preference
 */
function getLanguageFromCountry(countryCode: string): Language {
  const code = countryCode.toUpperCase();
  if (PORTUGUESE_COUNTRIES.has(code)) {
    return 'pt';
  }

  if (AFRIKAANS_COUNTRIES.has(code)) {
    // If the browser specifically has Afrikaans preference, use AF, otherwise default to EN
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const browserLangs = navigator.languages || [navigator.language];
      const hasAfrikaans = browserLangs.some((l) => l.toLowerCase().startsWith('af'));
      if (hasAfrikaans) {
        return 'af';
      }
    }
  }

  return 'en';
}

/**
 * Synchronous instant browser language fallback
 */
function getInitialBrowserLanguage(): Language {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'en';
  }

  const browserLangs = navigator.languages || [navigator.language];
  for (const l of browserLangs) {
    const langLower = l.toLowerCase();
    if (langLower.startsWith('pt')) return 'pt';
    if (langLower.startsWith('af')) return 'af';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [geoInfo, setGeoInfo] = useState<GeoInfo | null>(null);
  const [isDetecting, setIsDetecting] = useState<boolean>(true);
  const [userOverridden, setUserOverridden] = useState<boolean>(false);

  // Set language with persistence
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setUserOverridden(true);
    try {
      localStorage.setItem('clapsa_lang', lang);
      localStorage.setItem('clapsa_lang_manual', 'true');
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }, []);

  useEffect(() => {
    // 1. Check if user already has a saved manual preference
    try {
      const savedLang = localStorage.getItem('clapsa_lang') as Language | null;
      const isManual = localStorage.getItem('clapsa_lang_manual') === 'true';

      if (savedLang && ['en', 'pt', 'af'].includes(savedLang)) {
        setLanguageState(savedLang);
        setUserOverridden(isManual);
        document.documentElement.lang = savedLang;
        setIsDetecting(false);
        return;
      }
    } catch (e) {
      console.warn('Storage check error:', e);
    }

    // 2. Set quick fallback from browser language immediately
    const browserLang = getInitialBrowserLanguage();
    setLanguageState(browserLang);
    document.documentElement.lang = browserLang;

    // 3. Asynchronously perform IP Geolocation detection
    let isMounted = true;

    async function detectGeoAndLanguage() {
      setIsDetecting(true);
      try {
        // Try fast lightweight API: api.country.is
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        let countryCode: string | null = null;
        let ip: string | undefined;

        try {
          const res = await fetch('https://api.country.is/', {
            signal: controller.signal,
          });
          if (res.ok) {
            const data = await res.json();
            countryCode = data.country;
            ip = data.ip;
          }
        } catch {
          // Fallback 1: ipwho.is
          try {
            const res2 = await fetch('https://ipwho.is/', {
              signal: controller.signal,
            });
            if (res2.ok) {
              const data2 = await res2.json();
              if (data2.success) {
                countryCode = data2.country_code;
                ip = data2.ip;
              }
            }
          } catch {
            // Fallback 2: ipapi.co
            try {
              const res3 = await fetch('https://ipapi.co/json/', {
                signal: controller.signal,
              });
              if (res3.ok) {
                const data3 = await res3.json();
                countryCode = data3.country_code;
                ip = data3.ip;
              }
            } catch (err) {
              console.warn('All IP geolocation providers failed, using browser language', err);
            }
          }
        } finally {
          clearTimeout(timeoutId);
        }

        if (!isMounted) return;

        if (countryCode) {
          const detected = getLanguageFromCountry(countryCode);
          setGeoInfo({
            countryCode,
            ip,
            detectedLang: detected,
          });

          // Only change if user hasn't manually overridden during async fetch
          const currentlyManual = localStorage.getItem('clapsa_lang_manual') === 'true';
          if (!currentlyManual) {
            setLanguageState(detected);
            document.documentElement.lang = detected;
            try {
              localStorage.setItem('clapsa_lang', detected);
            } catch (e) {
              console.warn('Failed to save detected lang:', e);
            }
          }
        }
      } catch (err) {
        console.warn('Geolocation detection error:', err);
      } finally {
        if (isMounted) {
          setIsDetecting(false);
        }
      }
    }

    detectGeoAndLanguage();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentLanguageInfo =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        currentLanguageInfo,
        t,
        geoInfo,
        isDetecting,
        userOverridden,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
