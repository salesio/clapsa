'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContent } from '@/context/ContentContext';
import { getAssetPath } from '@/utils/assetPath';
import {
  Truck,
  Package,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Calculator,
  ArrowRight,
  MessageSquare,
  Mail,
  Copy,
  Check,
  Building2,
  Boxes,
  Compass,
  FileText,
  Sparkles,
  Phone,
  Layers,
  ChevronDown,
  ChevronUp,
  Play,
  Video,
  X
} from 'lucide-react';

export default function LogisticsPage() {
  const { t, language } = useLanguage();
  const { data } = useContent();
  const company = data.company;
  const lp = t.logisticsPage;

  // Warehouse Address Copy State
  const [copied, setCopied] = useState(false);

  // Video modal state
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoSrc: string;
  } | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [packageName, setPackageName] = useState('');
  const [cargoType, setCargoType] = useState(lp.form.cargoOptions[0] || 'Corporate Apparel & Merchandising');
  const [origin, setOrigin] = useState(lp.form.originOptions[0] || 'Deliver to CLAPSA Sandton/JHB Hub (Free Drop-off)');
  const [destination, setDestination] = useState(lp.form.destinationOptions[0] || 'Maputo / Matola (Express Line-Haul)');
  const [packagesCount, setPackagesCount] = useState<number>(1);
  const [weightKg, setWeightKg] = useState<number>(25);
  const [lengthCm, setLengthCm] = useState<number>(50);
  const [widthCm, setWidthCm] = useState<number>(40);
  const [heightCm, setHeightCm] = useState<number>(40);
  const [commercialValue, setCommercialValue] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [hasCalculated, setHasCalculated] = useState(true);

  // Calculation logic
  const calculation = useMemo(() => {
    const totalActualWeight = Math.max(1, weightKg || 1);
    const count = Math.max(1, packagesCount || 1);
    const l = Math.max(1, lengthCm || 1);
    const w = Math.max(1, widthCm || 1);
    const h = Math.max(1, heightCm || 1);

    // Standard IATA air/road volumetric factor: (L x W x H in cm) / 5000
    const volWeightPerPkg = (l * w * h) / 5000;
    const totalVolumetricWeight = Math.round(volWeightPerPkg * count * 10) / 10;
    const chargeableWeight = Math.max(totalActualWeight, totalVolumetricWeight);

    // Baseline rate per kg based on destination
    let ratePerKg = 45; // default base ZAR/kg for Maputo/Matola
    let transitTime = '24 - 48 Hours';

    if (destination.includes('Beira')) {
      ratePerKg = 75;
      transitTime = '3 - 5 Business Days';
    } else if (destination.includes('Nampula') || destination.includes('Pemba') || destination.includes('Nacala')) {
      ratePerKg = 95;
      transitTime = '4 - 7 Business Days';
    } else if (destination.includes('Tete')) {
      ratePerKg = 85;
      transitTime = '3 - 6 Business Days';
    } else if (destination.includes('Gaborone') || destination.includes('Harare') || destination.includes('Lusaka')) {
      ratePerKg = 80;
      transitTime = '3 - 5 Business Days';
    }

    // Origin collection surcharge if not drop-off at hub
    let collectionFee = 0;
    if (origin.includes('Cape Town') || origin.includes('Durban') || origin.includes('Bloemfontein') || origin.includes('Port Elizabeth')) {
      collectionFee = 450 + (chargeableWeight * 8); // interprovincial collection
    } else if (origin.includes('Johannesburg / Pretoria')) {
      collectionFee = 250; // local metro courier collection
    }

    const baseFreightCost = Math.round((chargeableWeight * ratePerKg) + collectionFee);
    const baseFreightCostMzn = Math.round(baseFreightCost * 3.4); // Approx ZAR to MZN conversion

    return {
      totalActualWeight,
      totalVolumetricWeight,
      chargeableWeight,
      transitTime,
      ratePerKg,
      collectionFee,
      estimatedCostZar: baseFreightCost,
      estimatedCostMzn: baseFreightCostMzn
    };
  }, [weightKg, packagesCount, lengthCm, widthCm, heightCm, destination, origin]);

  const handleCopyAddress = () => {
    const textToCopy = `${lp.warehouseName}\n${lp.warehouseAddress}\n${lp.warehouseCity}\n${lp.warehousePostal}\n${lp.warehouseCountry}\nTel: ${company.phoneDirect}\nContact: ${company.salesEmail}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const generateWhatsAppMessage = () => {
    const text = `*CLAPSA Cross-Border Freight Booking Inquiry*
----------------------------------------
*Customer / Company:* ${clientName || 'Not specified'}
*WhatsApp Contact:* ${clientPhone || 'Not specified'}
*Corporate Email:* ${clientEmail || 'Not specified'}

*Package / Order:* ${packageName || 'Consolidated Cargo'}
*Cargo Category:* ${cargoType}
*Origin (SA):* ${origin}
*Destination (SADC):* ${destination}

*Quantity of Packages:* ${packagesCount}
*Actual Weight:* ${calculation.totalActualWeight} kg
*Dimensions:* ${lengthCm} x ${widthCm} x ${heightCm} cm
*Volumetric Weight:* ${calculation.totalVolumetricWeight} kg
*Chargeable Weight:* ${calculation.chargeableWeight} kg
*Commercial Value:* ${commercialValue || 'N/A'}

*Estimated Freight:* approx. R${calculation.estimatedCostZar.toLocaleString()} ZAR (~${calculation.estimatedCostMzn.toLocaleString()} MZN)
*Estimated Transit:* ${calculation.transitTime}
*Special Instructions:* ${notes || 'None'}

Please confirm availability, customs requirements, and receiving clearance at your Sandton hub.`;

    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const generateEmailSubject = () => {
    return encodeURIComponent(`Freight Booking Inquiry: ${packageName || 'Cargo'} - ${clientName || 'New Client'}`);
  };

  const generateEmailBody = () => {
    const text = `CLAPSA Cross-Border Logistics & Freight Inquiry
========================================

Customer / Company: ${clientName || 'N/A'}
Phone / WhatsApp: ${clientPhone || 'N/A'}
Corporate Email: ${clientEmail || 'N/A'}

Package Description: ${packageName || 'General Cargo'}
Cargo Category: ${cargoType}
Origin in South Africa: ${origin}
Destination in SADC: ${destination}

Package Count: ${packagesCount}
Actual Weight: ${calculation.totalActualWeight} kg
Dimensions: ${lengthCm}cm (L) x ${widthCm}cm (W) x ${heightCm}cm (H)
Chargeable Weight: ${calculation.chargeableWeight} kg
Commercial Declared Value: ${commercialValue || 'N/A'}

Estimated Transit Time: ${calculation.transitTime}
Estimated Baseline Freight: R${calculation.estimatedCostZar.toLocaleString()} ZAR

Additional Notes / Supplier Invoice:
${notes || 'None provided.'}

Please issue an official quotation with customs clearance instructions.`;

    return encodeURIComponent(text);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors pb-20">
      
      {/* 1. SADC LOGISTICS VISUAL BANNER (1920x670px) */}
      <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] lg:h-[670px] overflow-hidden flex flex-col justify-center bg-slate-950 text-white select-none border-b border-slate-800">
        {/* Full-Bleed 1920x670 Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/images/slides/Slides_clapsa_02.png')}
            alt="CLAPSA Fleet & Cross-Border Logistics"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          {/* Subtle Gradient Overlays for High Background Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-white/15 shadow-2xl text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span>{lp.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-md">
              {lp.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-red-400">
                {lp.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
              {lp.subtitle}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-950/60 transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>{lp.calculateFreightBtn}</span>
              </a>

              <a
                href="#warehouse"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 shadow-xs"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{lp.warehouseBadge}</span>
              </a>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2">
              {lp.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-md flex items-center gap-3 text-left"
                >
                  <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOW "SHIP WITH US" WORKS (THE 4-STEP PROTOCOL) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{lp.howItWorksBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {lp.howItWorksTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {lp.howItWorksSubtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lp.steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-rose-300 dark:hover:border-rose-900/60 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-slate-300 dark:text-slate-700 group-hover:text-rose-600 transition-colors">
                    {step.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
                <span>Step {idx + 1} of 4</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WAREHOUSE RECEIVING HUB DETAILS */}
      <section id="warehouse" className="py-12 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Facility Visual & Video Reels */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group">
                <Image
                  src={getAssetPath('/images/gallery/shipping-container-clapsa-export-freight.webp')}
                  alt="CLAPSA Sandton Logistics Hub"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Sandton Cross-Border Freight Facility
                  </span>
                  <h4 className="text-lg font-bold">
                    Automated Turntable Stretch Wrapping & Staging
                  </h4>
                </div>
              </div>

              {/* Video Quick Launch Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveVideo({
                    title: 'Automated Pallet Stretch Wrapping Machine',
                    videoSrc: '/videos/gallery/automated-pallet-stretch-wrapping-dispatch.mp4'
                  })}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-left border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">Pallet Wrapping</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Watch Reel</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveVideo({
                    title: 'Forklift Container & Freight Truck Loading',
                    videoSrc: '/videos/gallery/toyota-forklift-loading-freight-trucks.mp4'
                  })}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-left border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">Truck Loading</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Watch Reel</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Warehouse Address & Labeling Instructions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{lp.warehouseBadge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {lp.warehouseTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {lp.warehouseSubtitle}
                </p>
              </div>

              {/* Address Highlight Card */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-extrabold text-rose-600 dark:text-rose-400 tracking-wider">
                    {lp.warehouseName}
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p>{lp.warehouseAddress}</p>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {lp.warehouseCity}, {lp.warehousePostal} • {lp.warehouseCountry}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 text-xs leading-relaxed">
                  <strong>⚠️ {lp.warehouseNotes}</strong>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleCopyAddress}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? lp.addressCopied : lp.copyAddressBtn}</span>
                  </button>

                  <a
                    href={`tel:${company.phoneDirect}`}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-rose-600" />
                    <span>{company.phoneDisplay}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FREIGHT ESTIMATOR & INTAKE CALCULATOR */}
      <section id="calculator" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lp.calculatorBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {lp.calculatorTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {lp.calculatorSubtitle}
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6 text-left">
            
            {/* Cargo Description & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {lp.form.packageName}
                </label>
                <input
                  type="text"
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  placeholder={lp.form.packageNamePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {lp.form.cargoType}
                </label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  {lp.form.cargoOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {lp.form.origin}
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  {lp.form.originOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {lp.form.destination}
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  {lp.form.destinationOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dimensions & Weight */}
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {lp.form.packagesCount}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={packagesCount}
                    onChange={(e) => setPackagesCount(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {lp.form.weight}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={weightKg}
                    onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {lp.form.length}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={lengthCm}
                    onChange={(e) => setLengthCm(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {lp.form.height}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={heightCm}
                    onChange={(e) => setHeightCm(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>
            </div>

            {/* Client Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white">
                  {lp.form.clientName}
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. John Doe / Empresa Lda"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white">
                  {lp.form.clientPhone}
                </label>
                <input
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+258 84 ... / +27 ..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 dark:text-white">
                  {lp.form.commercialValue}
                </label>
                <input
                  type="text"
                  value={commercialValue}
                  onChange={(e) => setCommercialValue(e.target.value)}
                  placeholder="e.g. R 15,000 / 50,000 MT"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-900 dark:text-white">
                {lp.form.notes}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={lp.form.notesPlaceholder}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
              />
            </div>

          </div>

          {/* Right: Live Freight Calculation Summary & Action Dispatch */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6 sticky top-28">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {lp.results.summaryTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                R{calculation.estimatedCostZar.toLocaleString()} <span className="text-sm font-semibold text-slate-400">ZAR</span>
              </h3>
              <p className="text-xs text-slate-400">
                ≈ {calculation.estimatedCostMzn.toLocaleString()} MZN (estimated currency conversion)
              </p>
            </div>

            {/* Weight Metric Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-slate-400">
                <span>{lp.results.actualWeight}:</span>
                <span className="font-bold text-white">{calculation.totalActualWeight} kg</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>{lp.results.volumetricWeight}:</span>
                <span className="font-bold text-white">{calculation.totalVolumetricWeight} kg</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-800 font-bold text-rose-400">
                <span>{lp.results.chargeableWeight}:</span>
                <span className="text-sm text-rose-300">{calculation.chargeableWeight} kg</span>
              </div>
              <div className="flex justify-between items-center pt-1 text-slate-400">
                <span>{lp.results.estimatedTransit}:</span>
                <span className="font-bold text-amber-400">{calculation.transitTime}</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed italic">
              {lp.results.rateDisclaimer}
            </p>

            {/* 1-Click Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lp.form.instantWhatsAppBtn}</span>
              </a>

              <a
                href={`mailto:${company.salesEmail}?subject=${generateEmailSubject()}&body=${generateEmailBody()}`}
                className="w-full py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>{lp.form.instantEmailBtn}</span>
              </a>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-400">
                Need wholesale container stuffing? Call our freight team at <strong className="text-white">{company.phoneDisplay}</strong>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-rose-600" />
            <span>{lp.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {lp.faqTitle}
          </h2>
        </div>

        <div className="space-y-3">
          {lp.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-rose-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {activeVideo.title}
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-black flex items-center justify-center">
              <video
                src={getAssetPath(activeVideo.videoSrc)}
                controls
                autoPlay
                playsInline
                className="max-h-[500px] w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
