'use client';

import React from 'react';
import { COMPANY } from '@/data/company';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <a
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group border border-emerald-400/30"
      aria-label={t.whatsappFloat.ariaLabel}
      title={t.whatsappFloat.title}
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold uppercase tracking-wider pr-1">
        {t.whatsappFloat.chatLabel}
      </span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white" />
    </a>
  );
}

