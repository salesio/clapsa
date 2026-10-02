'use client';

import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Building, 
  User, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const { data } = useContent();
  const company = data.company;

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Corporate Apparel & Uniforms',
    estimatedQuantity: '50-200 Units',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*CLAPSA PROCUREMENT — PROPOSAL INQUIRY*\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Contact:* ${formData.name || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Interest:* ${formData.serviceInterest}\n` +
      `*Quantity:* ${formData.estimatedQuantity}\n` +
      `*Notes:* ${formData.message || 'Please provide information.'}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Fast 24-Hour Quote Turnaround</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">Corporate Proposal</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Ready to equip your workforce or elevate your brand presence? Fill out the brief form below or connect directly with our Johannesburg procurement team.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Johannesburg Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Location</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{company.address}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">Cross-Border Delivery across SADC</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Telephone</span>
                    <a href={`tel:${company.phoneDirect}`} className="text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 font-semibold transition-colors block">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Official RFQ Email</span>
                    <a href={`mailto:${company.salesEmail}`} className="text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 font-semibold transition-colors block">
                      {company.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Business Hours</span>
                    <span className="text-slate-900 dark:text-white font-semibold">Monday – Friday: 08:00 – 17:00 (CAT)</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Live on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick SADC Delivery Promise */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-slate-100 dark:from-rose-950/40 dark:to-slate-950 border border-rose-200 dark:border-rose-900/30 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <span className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                Regional Logistics Guarantee
              </span>
              <p>
                We service all 9 South African provinces with expedited freight and handle all customs documentation for cross-border shipments to Botswana, Mozambique, Zimbabwe, Namibia, and Zambia.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-500 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Quotation Request Received!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our procurement team is compiling your customized specifications and will contact you within 24 hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white text-xs font-semibold"
                    >
                      Submit Another Request
                    </button>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Forward to WhatsApp Now
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Submit Formal RFQ Specs
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Company Name *</label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Mining Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Contact Person *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Corporate Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="s.jenkins@company.co.za"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Telephone / WhatsApp *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="082 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Primary Product Category</label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-rose-500"
                      >
                        <option>Corporate Apparel & Uniforms</option>
                        <option>Industrial PPE & Conti Suits</option>
                        <option>Safety Boots & Technical Footwear</option>
                        <option>Outdoor Gazebos & Event Displays</option>
                        <option>Tactical & Security Equipment</option>
                        <option>VIP Corporate Gifting & Merchandise</option>
                        <option>Full Consolidated Procurement Contract</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Estimated Order Volume</label>
                      <select
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-rose-500"
                      >
                        <option>10 - 50 Units (Sample / Initial Run)</option>
                        <option>50 - 200 Units (Standard Fleet)</option>
                        <option>200 - 1,000 Units (Large Department)</option>
                        <option>1,000+ Units (Enterprise / Mine Shutdown)</option>
                        <option>Ongoing Monthly Supply Agreement</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Project Requirements & Branding Specs</label>
                    <textarea
                      rows={3}
                      placeholder="Please specify branding type (embroidery, screen print), color preferences, sizing, and required delivery date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-900/30 transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Official Quotation</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="py-3.5 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
