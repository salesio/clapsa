'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  Building2,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const { data } = useContent();
  const company = data.company;

  const [formState, setFormState] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: 'Corporate Uniforms & Apparel',
    volume: '50 - 200 Units',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppRFQUrl = () => {
    const text = `*NEW CORPORATE RFQ INQUIRY (CLAPSA.CO.ZA)*\n\n` +
      `🏢 *Company:* ${formState.companyName || 'Not specified'}\n` +
      `👤 *Contact Person:* ${formState.contactPerson || 'Not specified'}\n` +
      `📧 *Email:* ${formState.email || 'Not specified'}\n` +
      `📞 *Phone:* ${formState.phone || 'Not specified'}\n` +
      `📦 *Category:* ${formState.category}\n` +
      `📊 *Volume:* ${formState.volume}\n\n` +
      `📝 *Requirements / Brief:*\n${formState.requirements || 'Standard wholesale catalog inquiry'}`;
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>{t.contact.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {t.contact.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
              {t.contact.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-semibold pt-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-500" />
              Fast 2-Hour Corporate RFQ Response
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-500" />
              SADC Express Cross-Border Dispatch
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              SABS Certified Supply
            </span>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Cards + Interactive RFQ Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Headquarters Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Direct Procurement Desk
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Headquarters & Consultation
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white text-xs uppercase tracking-wider font-bold">
                      {t.contact.locationLabel}
                    </strong>
                    <span className="text-xs">{company.address}</span>
                    <span className="block text-[11px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                      {t.contact.crossBorderSub}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white text-xs uppercase tracking-wider font-bold">
                      {t.contact.phoneLabel}
                    </strong>
                    <a href={`tel:${company.phoneDirect}`} className="text-xs hover:text-rose-600 font-semibold transition-colors">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white text-xs uppercase tracking-wider font-bold">
                      {t.contact.emailLabel}
                    </strong>
                    <a href={`mailto:${company.salesEmail}`} className="text-xs hover:text-rose-600 font-semibold transition-colors">
                      {company.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white text-xs uppercase tracking-wider font-bold">
                      {t.contact.hoursLabel}
                    </strong>
                    <span className="text-xs">{t.contact.hoursValue}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi CLAPSA, I would like to speak directly with an enterprise procurement specialist regarding a new contract.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contact.chatWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* SADC Logistics Guarantee Banner */}
            <div className="p-6 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>{t.contact.logisticsGuaranteeTitle}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.contact.logisticsGuaranteeDesc}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & RFQ Quote Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {t.contact.receivedTitle}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      {t.contact.receivedDescPrefix} <strong className="text-slate-900 dark:text-white">{formState.companyName || 'your company'}</strong> {t.contact.receivedDescSuffix}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppRFQUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.forwardWhatsAppNow}</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      {t.contact.submitAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      Request a Custom Proposal
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {t.contact.formTitle}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        {t.contact.companyName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.companyName}
                        onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        {t.contact.contactPerson} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.contactPerson}
                        onChange={(e) => setFormState({ ...formState, contactPerson: e.target.value })}
                        placeholder={t.contact.contactPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        {t.contact.corporateEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        {t.contact.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        {t.contact.categoryInterest}
                      </label>
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                      >
                        <option>Corporate Uniforms & Apparel</option>
                        <option>Industrial PPE & SABS Safety Gear</option>
                        <option>Custom Sportswear & Dye Sublimation</option>
                        <option>Branded Displays, Gazebos & Flags</option>
                        <option>VIP Corporate Gifting & Merchandising</option>
                        <option>Private Security Tactical Equipment</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        {t.contact.estimatedVolume}
                      </label>
                      <select
                        value={formState.volume}
                        onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                      >
                        <option>25 - 100 Units</option>
                        <option>100 - 500 Units</option>
                        <option>500 - 2,500 Units</option>
                        <option>2,500 - 10,000+ Units</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      {t.contact.projectRequirements}
                    </label>
                    <textarea
                      rows={4}
                      value={formState.requirements}
                      onChange={(e) => setFormState({ ...formState, requirements: e.target.value })}
                      placeholder={t.contact.requirementsPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitQuote}</span>
                    </button>

                    <a
                      href={getWhatsAppRFQUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.sendWhatsApp}</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
