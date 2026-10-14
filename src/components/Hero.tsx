'use client';

import React, { useState, useEffect } from 'react';
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
  backgroundImage: string;
  specimenImage: string;
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
    backgroundImage: '/images/gallery/pyb-commercial-vehicle-vinyl-branding.webp',
    specimenImage: '/images/gallery/executive-pique-golf-shirts-embroidery.webp',
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
    backgroundImage: '/images/gallery/gauteng-province-flame-retardant-conti-suits.webp',
    specimenImage: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
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
    backgroundImage: '/images/gallery/shipping-container-clapsa-export-freight.webp',
    specimenImage: '/videos/gallery/posters/automated-pallet-stretch-wrapping-dispatch.webp',
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
      className="relative w-full max-w-[1920px] mx-auto min-h-[620px] lg:h-[670px] overflow-hidden flex flex-col justify-between bg-slate-950 text-white select-none transition-colors duration-200"
    >
      {/* 1920x670 Full-Bleed Background Image Slides with Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={getAssetPath(slide.backgroundImage)}
              alt={slide.headlineHighlight[langKey]}
              fill
              className="object-cover object-center scale-100 transition-transform duration-1000"
              priority={idx === 0}
            />
            {/* Subtle Gradient Overlays for High Background Image Clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/25 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Main Container Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 pb-6 my-auto">
        <div className="max-w-2xl lg:max-w-3xl p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-white/15 shadow-2xl text-left space-y-5">
          
          {/* Slide Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>{currentSlide.badge[langKey]}</span>
          </div>

          {/* Slide Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-md">
            {currentSlide.headlinePrefix[langKey]}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
              {currentSlide.headlineHighlight[langKey]}
            </span>{' '}
            {currentSlide.headlineSuffix[langKey]}
          </h1>

          {/* Slide Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed drop-shadow-xs">
            {currentSlide.subtitle[langKey]}
          </p>

          {/* 4 Value Checkpoints */}
          <div className="grid sm:grid-cols-2 gap-2 pt-1 text-xs sm:text-sm font-medium text-slate-200">
            {currentSlide.checkpoints[langKey].map((cp, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="line-clamp-1">{cp}</span>
              </div>
            ))}
          </div>

          {/* Slide Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={currentSlide.primaryCta.href}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-rose-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>{currentSlide.primaryCta.label[langKey]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={currentSlide.secondaryCta.href}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all shadow-xs flex items-center gap-2"
            >
              <span>{currentSlide.secondaryCta.label[langKey]}</span>
            </Link>

            <a
              href={`tel:${company.phoneDirect}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-2 px-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>{company.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slideshow Bottom Navigation Switcher (1920x670 Anchor Controls) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-3">
          
          {/* 3 Slide Tabs with Active Progress Line */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-white/15 text-white border border-white/20 shadow-lg' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-rose-500 scale-125' : 'bg-slate-600'}`} />
                  <span>{slide.tabLabel[langKey]}</span>
                  {isActive && (
                    <span 
                      key={progressKey}
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-rose-500 rounded-full animate-[progress_6.5s_linear]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-rose-600 text-white border border-white/15 flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-slate-300 px-1">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-rose-600 text-white border border-white/15 flex items-center justify-center transition-all shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
