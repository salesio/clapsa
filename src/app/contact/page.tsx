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
      
      {/* Executive Procurement & Sandton Depot Visual Banner (1920x670px) */}
      <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:h-[670px] overflow-hidden flex flex-col justify-center bg-slate-950 text-white select-none border-b border-slate-800">
        {/* Full-Bleed 1920x670 Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/images/gallery/shipping-container-clapsa-export-freight.webp')}
            alt="CLAPSA Sandton Central Logistics Depot & Procurement"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          {/* Subtle Gradient Overlays for High Background Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/25 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl lg:max-w-3xl p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-white/15 shadow-2xl text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
              <span>{t.contact.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              {t.contact.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
                {t.contact.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-xs">
              {t.contact.subtitle}
            </p>

            {/* Response Commitments */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-semibold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-rose-300 backdrop-blur-md">
                <Clock className="w-4 h-4 text-rose-400" />
                Fast 2-Hour Corporate RFQ Response
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-emerald-300 backdrop-blur-md">
                <Truck className="w-4 h-4 text-emerald-400" />
                SADC Express Cross-Border Dispatch
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-blue-300 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                SABS Certified Direct Supply
              </span>
            </div>

            {/* Quick Contact Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${company.phoneDirect}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-rose-950/60 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {company.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi CLAPSA, I have an urgent procurement / logistics inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Procurement Desk</span>
              </a>
            </div>
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

            {/* Sandton Operations & Freight Dispatch Visual Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={getAssetPath('/images/gallery/shipping-container-clapsa-export-freight.webp')}
                  alt="CLAPSA Sandton Logistics Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-rose-400 border border-slate-800">
                    Bonded Operations Hub
                  </span>
                  <p className="text-xs font-bold text-white mt-1">
                    Sandton Logistics & SADC Export Transit
                  </p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/50 text-[11px] text-slate-500 dark:text-slate-400">
                Direct export consolidation facility for road freight to Maputo Corridor, Gaborone, Harare, and Lusaka.
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
