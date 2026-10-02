'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  MessageSquare,
  Sliders
} from 'lucide-react';

export default function Footer() {
  const { data } = useContent();
  const company = data.company;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2.5 shadow-lg border-2 border-white/80 shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/logo.png"
                    alt="CLAPSA Procurement"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="block text-base font-extrabold text-white tracking-wider">
                  CLAPSA
                </span>
                <span className="block text-[11px] font-bold text-rose-500 uppercase tracking-wider">
                  Procurement Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              <strong>{company.legalName}</strong> — Premier one-source corporate procurement partner delivering certified PPE, high-density embroidered workwear, outdoor event display hardware, and VIP corporate gifts across South Africa and the SADC.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={COMPANY_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <Link
                href="/admin"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-rose-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Admin Panel</span>
              </Link>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">Our Work (Portfolio)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">Capabilities & Services</a>
              </li>
              <li>
                <a href="#catalogues" className="hover:text-rose-400 transition-colors">Products & Catalogues</a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">About CLAPSA</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-400 transition-colors">Request a Quote (RFQ)</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Supply Solutions */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Supply Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">Corporate Apparel & Uniforms</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">Flame/Acid D59 Conti Suits</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">S3 Heavy Industrial Safety Boots</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">Branded Gazebos & Flags</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">Tactical & Security Uniforms</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-rose-400 transition-colors">VIP Corporate Gifting</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Head Office */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Johannesburg Office
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`tel:${company.phoneDirect}`} className="hover:text-white transition-colors">
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`mailto:${company.salesEmail}`} className="hover:text-white transition-colors">
                  {company.salesEmail}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} {company.legalName}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>SABS Certified Compliance</span>
            <span>•</span>
            <span>B-BBEE Ready Procurement</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

const COMPANY_FACEBOOK = 'https://facebook.com/www.clapsa.co.za';
