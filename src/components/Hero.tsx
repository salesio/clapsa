'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Truck,
  ShieldCheck,
  Briefcase,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

interface SlideData {
  id: string;
  tabLabel: {
    en: string;
    pt: string;
    af: string;
  };
  badge: {
    en: string;
    pt: string;
    af: string;
  };
  headlinePrefix: {
    en: string;
    pt: string;
    af: string;
  };
  headlineHighlight: {
    en: string;
    pt: string;
    af: string;
  };
  headlineSuffix: {
    en: string;
    pt: string;
    af: string;
  };
  subtitle: {
    en: string;
    pt: string;
    af: string;
  };
  checkpoints: {
    en: string[];
    pt: string[];
    af: string[];
  };
  primaryCta: {
    label: {
      en: string;
      pt: string;
      af: string;
    };
    href: string;
  };
  secondaryCta: {
    label: {
      en: string;
      pt: string;
      af: string;
    };
    href: string;
  };
  featuredTag: {
    en: string;
    pt: string;
    af: string;
  };
  featuredTitle: {
    en: string;
    pt: string;
    af: string;
  };
  featuredDesc: {
    en: string;
    pt: string;
    af: string;
  };
  mainImage: string;
  subImage: string;
  stats: {
    val1: string;
    label1: { en: string; pt: string; af: string };
    val2: string;
    label2: { en: string; pt: string; af: string };
    val3: string;
    label3: { en: string; pt: string; af: string };
  };
  deepLink: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'corporate-fleet',
    tabLabel: {
      en: '01. Corporate & Fleet',
      pt: '01. Corporativo & Frotas',
      af: '01. Korporatief & Vloot',
    },
    badge: {
      en: 'Corporate Identity & Commercial Fleet Branding',
      pt: 'Identidade Corporativa & Branding de Frotas',
      af: 'Korporatiewe Identiteit & Handelsmerk-Vloot',
    },
    headlinePrefix: {
      en: 'Corporate Apparel, Precision Embroidery &',
      pt: 'Uniformes Corporativos, Bordados Tajima &',
      af: 'Korporatiewe Klere, Presisie Borduurwerk &',
    },
    headlineHighlight: {
      en: 'Commercial Fleet Wraps',
      pt: 'Branding de Viaturas',
      af: 'Kommersiële Vloot-Omslae',
    },
    headlineSuffix: {
      en: 'That Build Unmatched Market Authority.',
      pt: 'Com Presença e Durabilidade SADC.',
      af: 'Wat Markgesag Bou.',
    },
    subtitle: {
      en: 'Turnkey uniform programs for leaders like Standard Bank, automated micro-stitch crest embroidery, and weather-tested commercial vehicle wraps engineered for maximum visibility across South Africa & Mozambique.',
      pt: 'Programas de fardamento executivo para líderes como o Standard Bank, bordados micro-stitch de alta densidade e envelopamento duradouro de frotas comerciais em toda a África do Sul e Moçambique.',
      af: 'Omvattende klereprogramme vir leiers soos Standard Bank, outomatiese mikro-steek borduurwerk en duursame vloot-grafika vir Suid-Afrika en Mosambiek.',
    },
    checkpoints: {
      en: [
        'Standard Bank Executive Crest Pique Golfers',
        'Full Commercial Fleet & Vehicle Vinyl Branding',
        'Automated Computerized Micro-Stitch Embroidery',
        'Turnkey Cross-Border Distribution to Mozambique'
      ],
      pt: [
        'Polos Piquet Executivos Standard Bank',
        'Branding Integral de Frotas & Viaturas Comerciais',
        'Bordados Computorizados de Alta Densidade',
        'Distribuição Direta para Moçambique e Região'
      ],
      af: [
        'Standard Bank Uitvoerende Gholfhemde',
        'Volledige Kommersiële Vloot Viniel-Omslae',
        'Outomatiese Tajima Presisie Borduurwerk',
        'Oorgrensvrag na Mosambiek en SADC'
      ]
    },
    primaryCta: {
      label: {
        en: 'Explore Fleet & Corporate Lookbook',
        pt: 'Ver Trabalhos de Frotas & Bordados',
        af: 'Verken Vloot & Korporatiewe Werk',
      },
      href: '/gallery?category=signage&q=fleet',
    },
    secondaryCta: {
      label: {
        en: 'Browse Catalogues & RFQ',
        pt: 'Catálogos & Cotação',
        af: 'Blaai Deur Katalogusse',
      },
      href: '/catalogues',
    },
    featuredTag: {
      en: 'Enterprise Fleet & Identity',
      pt: 'Identidade & Frotas',
      af: 'Vloot & Identiteit',
    },
    featuredTitle: {
      en: 'PYB Logistics Commercial Fleet Wraps & Standard Bank Golfers',
      pt: 'Envelopamento de Frotas PYB & Polos Executivos Standard Bank',
      af: 'PYB Logistiek Vloot-Omslae & Standard Bank Gholfhemde',
    },
    featuredDesc: {
      en: 'Heavy-gauge cast vinyl with UV over-laminate + 12-color computerized micro-stitch embroidery.',
      pt: 'Vinil fundido com laminação UV anti-risco + bordado Tajima de 12 agulhas.',
      af: 'UV-beskermde viniel-omslae en hoë-digtheid rekenaarborduurwerk.',
    },
    mainImage: '/images/gallery/pyb-commercial-vehicle-vinyl-branding.webp',
    subImage: '/images/gallery/executive-pique-golf-shirts-embroidery.webp',
    stats: {
      val1: '1,500+',
      label1: { en: 'Deployments', pt: 'Entregas', af: 'Ontplooiings' },
      val2: '12-Needle',
      label2: { en: 'Micro-Stitch', pt: 'Bordado HD', af: 'Mikro-Steek' },
      val3: 'SADC',
      label3: { en: 'Transit', pt: 'Trânsito', af: 'Vragvervoer' },
    },
    deepLink: '/gallery?category=signage&q=fleet'
  },
  {
    id: 'safety-road-signs',
    tabLabel: {
      en: '02. Safety & Road Signs',
      pt: '02. Segurança & Sinais',
      af: '02. Veiligheid & Padtekens',
    },
    badge: {
      en: 'SABS 434 Certified PPE & Heavy Civil Infrastructure',
      pt: 'EPI Certificado SABS 434 & Sinalização Rodoviária',
      af: 'SABS 434 Veiligheid & Siviele Padtekens',
    },
    headlinePrefix: {
      en: 'SABS-Certified Flame Conti Suits, Armor &',
      pt: 'Fatos-Macaco SABS Retardantes de Chama, Coletes &',
      af: 'SABS-Vlamvertragende Oorpakke, Pantser &',
    },
    headlineHighlight: {
      en: 'Civil Detour Road Signs',
      pt: 'Sinalização Rodoviária',
      af: 'Siviele Padtekens',
    },
    headlineSuffix: {
      en: 'Built for High-Risk Environments.',
      pt: 'Engenharia para Ambientes Críticos.',
      af: 'Gebou vir Hoë-Risiko Omgewings.',
    },
    subtitle: {
      en: 'Gauteng Provincial Government D59 flame-and-acid retardant conti suits, G4S modular ballistic tactical carriers, and engineer-grade retroreflective road construction and detour signboards.',
      pt: 'Fatos-macaco D59 retardantes de chamas e ácidos para o Governo Provincial de Gauteng, coletes táticos balísticos modulares G4S e painéis refletores de obras e desvios rodoviários.',
      af: 'Gauteng Provinsiale Regering D59 vlam- en suurvertragende oorpakke, G4S taktiese ballistiese draers en hoë-intensiteit weerkaatsende padtekens.',
    },
    checkpoints: {
      en: [
        'SABS 434 & 1519 Certified Flame Retardant Workwear',
        'Heavy-Duty Desvio / Detour High-Intensity Reflective Signs',
        'G4S Security Level IV Tactical Ballistic Carrier Outfitting',
        'Industrial Steel-Toe Safety Footwear & Head Protection'
      ],
      pt: [
        'Fatos-Macaco SABS 434 & 1519 Retardantes de Chama e Ácido',
        'Painéis Rodoviários de Desvio & Chevrons Alta Reflectividade',
        'Coletes Balísticos Modulares Nível IV para Segurança G4S',
        'Calçado de Segurança Biqueira de Aço & Capacetes SABS'
      ],
      af: [
        'SABS 434 & 1519 Gesertifiseerde Werkklere',
        'Swaar Desvio / Herleiding Hoë-Weerkaatsing Padtekens',
        'G4S Taktiese Ballistiese Draers en Sekuriteitsklere',
        'SABS Veiligheidsskoene en Konstruksiehelms'
      ]
    },
    primaryCta: {
      label: {
        en: 'Inspect Safety Gear & Road Signs',
        pt: 'Ver Sinais de Estrada & EPIs',
        af: 'Ondersoek Padtekens & Veiligheid',
      },
      href: '/gallery?category=signage&q=road',
    },
    secondaryCta: {
      label: {
        en: 'View Safety Capabilities',
        pt: 'Capacidades de Segurança',
        af: 'Sien Veiligheidsvermoëns',
      },
      href: '/services',
    },
    featuredTag: {
      en: 'SABS 434 & Civil Infrastructure',
      pt: 'SABS 434 & Infraestrutura',
      af: 'SABS 434 & Infrastruktuur',
    },
    featuredTitle: {
      en: 'Gauteng Government D59 Conti Suits & Civil Detour Signs',
      pt: 'Fatos D59 Governo de Gauteng & Painéis de Desvio Rodoviário',
      af: 'Gauteng Regering D59 Oorpakke & Siviele Herleidingstekens',
    },
    featuredDesc: {
      en: 'Heavy-duty 100% cotton D59 with chemical treatment + galvanised steel road signs with micro-prismatic sheeting.',
      pt: 'Tecido D59 100% algodão com tratamento retardante + chapa galvanizada com vinil micro-prismático refletor.',
      af: 'D59 100% katoen chemiese behandeling en gegalvaniseerde staal padtekens.',
    },
    mainImage: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
    subImage: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
    stats: {
      val1: 'SABS 434',
      label1: { en: 'Compliance', pt: 'Certificação', af: 'Sertifisering' },
      val2: '25,000+',
      label2: { en: 'Suits Supplied', pt: 'Fatos Fornecidos', af: 'Pakke Verskaf' },
      val3: 'Zero Defect',
      label3: { en: 'QA Standard', pt: 'Qualidade Zero Defeito', af: 'Gehaltestandaard' },
    },
    deepLink: '/gallery?category=signage&q=road'
  },
  {
    id: 'logistics-freight',
    tabLabel: {
      en: '03. Cross-Border Freight',
      pt: '03. Carga Transfronteiriça',
      af: '03. Oorgrens Vragvervoer',
    },
    badge: {
      en: 'Sandton Receiving Hub • Cross-Border Line-Haul',
      pt: 'Hub de Sandton • Linha Direta para Moçambique',
      af: 'Sandton Hub • Vrag na Mosambiek',
    },
    headlinePrefix: {
      en: 'Ship With CLAPSA:',
      pt: 'Envie com a CLAPSA:',
      af: 'Verskeep Met CLAPSA:',
    },
    headlineHighlight: {
      en: 'Buy in South Africa, Delivered in Mozambique',
      pt: 'Compre na África do Sul, Receba em Moçambique',
      af: 'Koop in SA, Afgelewer in Mosambiek',
    },
    headlineSuffix: {
      en: 'With SADC Customs Clearance.',
      pt: 'Com Despacho Aduaneiro SADC.',
      af: 'Met SADC Doeane-Uitklaring.',
    },
    subtitle: {
      en: 'Order equipment and inventory from any South African supplier and deliver directly to our Sandton warehouse. We inspect, consolidate, pallet-wrap, clear SADC customs, and haul directly to Maputo, Beira & beyond.',
      pt: 'Compre produtos em qualquer fornecedor sul-africano e use o nosso entreposto de Sandton como endereço de entrega. Consolidamos, embalamos em paletes, tratamos do desalfandegamento SADC e transportamos para Moçambique.',
      af: 'Bestel voorraad by enige Suid-Afrikaanse verskaffer en lewer af by ons Sandton-depot. Ons konsolideer, krimp-verpak, hanteer SADC doeane en vervoer direk na Mosambiek.',
    },
    checkpoints: {
      en: [
        'Central Sandton / Johannesburg Receiving Address',
        'Automated Turntable Stretch-Wrapping & Weatherproofing',
        'SADC Certificate of Origin & Full Customs Clearance',
        '24 to 72-Hour Express Consolidated Road Freight'
      ],
      pt: [
        'Endereço de Recepção Central em Sandton / Joanesburgo',
        'Embalamento Automático de Paletes com Filme Estirável',
        'Certificado de Origem SADC & Despacho Alfandegário Completo',
        'Transporte Rodoviário Consolidado Expresso em 24 a 72 Horas'
      ],
      af: [
        'Sentrale Sandton / Johannesburg Ontvangsdepot',
        'Outomatiese Pallet Krimp-Verpakking & Weerbestandheid',
        'SADC Oorsprong-Sertifikaat & Volledige Doeane-Hantering',
        '24 tot 72-uur Spoedvrag na Mosambiek en SADC'
      ]
    },
    primaryCta: {
      label: {
        en: 'Ship With Us / Logistics Hub',
        pt: 'Hub de Logística / Envie Connosco',
        af: 'Verskeep Met Ons / Logistieke Hub',
      },
      href: '/logistics',
    },
    secondaryCta: {
      label: {
        en: 'Interactive Freight Calculator',
        pt: 'Calculadora de Frete Online',
        af: 'Aanlyn Vrag-Sakrekenaar',
      },
      href: '/logistics#calculator',
    },
    featuredTag: {
      en: 'Bonded Logistics & Freight',
      pt: 'Logística & Carga Alfandegada',
      af: 'Vrag & Doeane-Hantering',
    },
    featuredTitle: {
      en: '40ft Bonded Shipping Containers & Pan-African Express Haulage',
      pt: 'Contentores de 40 Pés & Carga Rodoviária Pan-Africana',
      af: '40vt Skeepshouers & Pan-Afrika Vragvervoer',
    },
    featuredDesc: {
      en: 'Direct consolidated freight channels connecting Johannesburg HQ to Maputo, Matola, Beira, Nampula, and SADC.',
      pt: 'Canais regulares de carga consolidada ligando Sandton a Maputo, Matola, Beira, Nampula e capitais SADC.',
      af: 'Gereelde vragverbindings tussen Johannesburg, Maputo, Beira en SADC-bestemmings.',
    },
    mainImage: '/images/gallery/shipping-container-clapsa-export-freight.webp',
    subImage: '/videos/gallery/posters/automated-pallet-stretch-wrapping-dispatch.webp',
    stats: {
      val1: '24 - 72h',
      label1: { en: 'SADC Transit', pt: 'Trânsito SADC', af: 'SADC Vragtyd' },
      val2: 'Sandton HQ',
      label2: { en: 'Receiving Hub', pt: 'Armazém Central', af: 'Ontvangsdepot' },
      val3: '100%',
      label3: { en: 'Bonded Freight', pt: 'Carga Alfandegada', af: 'Doeane-Geregistreer' },
    },
    deepLink: '/logistics'
  }
];

export default function Hero() {
  const { data } = useContent();
  const { language } = useLanguage();
  const company = data.company;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const langKey = (language === 'pt' || language === 'af') ? language : 'en';

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgressKey((k) => k + 1);
    }, 6500);

    return () => clearInterval(timer);
  }, [isHovered, currentSlideIndex]);

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
    setProgressKey((k) => k + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goToSlide((currentSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    goToSlide((currentSlideIndex + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section 
      id="home" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[85vh] pt-6 sm:pt-10 pb-20 bg-slate-50 dark:bg-slate-950 overflow-hidden flex flex-col justify-center transition-colors duration-200"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/60 dark:from-rose-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-rose-500/10 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Slideshow Top Navigation Switcher Tabs */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-md border border-slate-200 dark:border-slate-800' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-900/40'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-rose-600 scale-125' : 'bg-slate-300 dark:bg-slate-700'}`} />
                  <span>{slide.tabLabel[langKey]}</span>
                  {isActive && (
                    <span 
                      key={progressKey}
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-rose-600 rounded-full animate-[progress_6.5s_linear]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Prev / Next Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-slate-400">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Animated Slide Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Slide Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/90 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-xs font-bold tracking-wide shadow-xs animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 animate-pulse" />
              <span>{currentSlide.badge[langKey]}</span>
            </div>

            {/* Slide Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] min-h-[100px] sm:min-h-[110px] transition-all">
              {currentSlide.headlinePrefix[langKey]}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-rose-500">
                {currentSlide.headlineHighlight[langKey]}
              </span>{' '}
              {currentSlide.headlineSuffix[langKey]}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed min-h-[64px]">
              {currentSlide.subtitle[langKey]}
            </p>

            {/* 4 Value Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              {currentSlide.checkpoints[langKey].map((cp, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-500 shrink-0" />
                  <span className="line-clamp-1">{cp}</span>
                </div>
              ))}
            </div>

            {/* Slide Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href={currentSlide.primaryCta.href}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-900/20 hover:shadow-rose-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>{currentSlide.primaryCta.label[langKey]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={currentSlide.secondaryCta.href}
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-700/80 transition-all shadow-xs flex items-center gap-2"
              >
                <span>{currentSlide.secondaryCta.label[langKey]}</span>
              </Link>

              <a
                href={`tel:${company.phoneDirect}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-2 px-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rose-600 dark:text-rose-500" />
                <span>{company.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-black/80 group select-none">
              
              {/* Highlight Badge */}
              <div className="absolute -top-3 -right-2 bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-rose-400/30 flex items-center gap-1.5 z-30">
                <Award className="w-3.5 h-3.5" />
                <span>{currentSlide.featuredTag[langKey]}</span>
              </div>

              {/* Main Showcase Image Frame */}
              <div className="relative h-72 sm:h-84 md:h-92 w-full rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src={getAssetPath(currentSlide.mainImage)}
                  alt={currentSlide.featuredTitle[langKey]}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                
                {/* Secondary Inset Thumbnail Preview */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 p-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 max-w-[200px]">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src={getAssetPath(currentSlide.subImage)}
                      alt="Complementary Specimen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left pr-1">
                    <span className="block text-[9px] font-bold text-rose-400 uppercase tracking-wider">
                      {langKey === 'pt' ? 'Detalhe Real' : langKey === 'af' ? 'Regte Besonderheid' : 'Live Specimen'}
                    </span>
                    <span className="block text-[10px] text-white font-medium line-clamp-1">
                      {langKey === 'pt' ? 'Em Produção' : langKey === 'af' ? 'In Vervaardiging' : 'Production Spec'}
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Title & Deep-Link */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md">
                    {currentSlide.featuredTitle[langKey]}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    {currentSlide.featuredDesc[langKey]}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <Link
                      href={currentSlide.deepLink}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-400 hover:text-rose-300 transition-colors uppercase tracking-wider"
                    >
                      <span>{langKey === 'pt' ? 'Explorar Galeria Completa' : langKey === 'af' ? 'Sien Volledige Galery' : 'Explore Lookbook Archive'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Mobile Arrows */}
                <button
                  onClick={handlePrev}
                  className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/75 text-white flex items-center justify-center backdrop-blur-md"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/75 text-white flex items-center justify-center backdrop-blur-md"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic 3-Column Metrics Underneath */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {currentSlide.stats.val1}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {currentSlide.stats.label1[langKey]}
                  </span>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-800">
                  <span className="block text-sm sm:text-base font-extrabold text-rose-600 dark:text-rose-500">
                    {currentSlide.stats.val2}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {currentSlide.stats.label2[langKey]}
                  </span>
                </div>
                <div>
                  <span className="block text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {currentSlide.stats.val3}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {currentSlide.stats.label3[langKey]}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
