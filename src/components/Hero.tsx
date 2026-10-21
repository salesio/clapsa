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
    id: 'event-activations-displays',
    tabLabel: {
      en: '01. Displays & Activations',
      pt: '01. Eventos & Expositores',
      af: '01. Uitstallings & Aktiverings',
    },
    badge: {
      en: 'Gazebos, Roll-Up Banners, Promo Counters & Event Gear',
      pt: 'Gazebos, Roll-Ups, Balcões Promocionais & Eventos',
      af: 'Gazebos, Banierstaanders & Handelsmerk-Uitstallings',
    },
    headlinePrefix: {
      en: 'Complete Outdoor Gazebos, Roll-Ups &',
      pt: 'Gazebos Personalizados, Roll-Ups &',
      af: 'Volledige Buitelug Gazebos, Baniere &',
    },
    headlineHighlight: {
      en: 'Brand Activation Kits',
      pt: 'Kits de Ativação de Marca',
      af: 'Handelsmerk-Aktiveringstelle',
    },
    headlineSuffix: {
      en: 'Engineered for Maximum Impact.',
      pt: 'Para Eventos de Alto Impacto.',
      af: 'Gebou vir Maksimum Impak.',
    },
    subtitle: {
      en: 'Turnkey promotional setups including waterproof sublimated gazebos, roll-up banners, pop-up A-frames, promo counters, branded tablecloths, caps, and event apparel.',
      pt: 'Soluções completas para ativações de marca: tendas gazebo sublimadas, roll-ups, pop-ups horizontais, balcões promocionais, toalhas de mesa, bonés e t-shirts.',
      af: 'Omvattende promosie-uitstallings insluitend waterdigte gazebos, rolbaniere, opslaan-rame, toonbanke, pette en geleentheidsklere.',
    },
    checkpoints: {
      en: [
        'Waterproof Sublimated Event Gazebos & Tents',
        'Roll-Up Banners, Teardrop Flags & Pop-Up A-Frames',
        'Branded Promotional Counters & Fitted Tablecloths',
        'Matching Event Caps, T-Shirts & Campaign Kits'
      ],
      pt: [
        'Tendas Gazebo Sublimadas Impermeáveis à Medida',
        'Banners Roll-Up, Bandeiras Gota & Pop-Up A-Frame',
        'Balcões de Degustação & Toalhas de Mesa Personalizadas',
        'Bonés, T-Shirts e Fardamento Completo para Eventos'
      ],
      af: [
        'Waterdigte Sublimasie Geleentheids-Gazebos',
        'Rolbaniere, Traanvlae & Opslaan A-Rame',
        'Handelsmerk Promosietoonbanke & Tafeldoeke',
        'Bypassende Pette, T-Hemde & Veldtogstelle'
      ]
    },
    primaryCta: {
      label: {
        en: 'Explore Displays & Lookbook',
        pt: 'Ver Expositores no Lookbook',
        af: 'Verken Uitstallings & Werk',
      },
      href: '/gallery?category=display',
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
      en: 'Outdoor & Event Branding',
      pt: 'Eventos & Publicidade Exterior',
      af: 'Buitelug & Geleenthede',
    },
    featuredTitle: {
      en: 'Relaxo, Owara & Bahamas Full Brand Activation Suite',
      pt: 'Kit Completo de Ativação Relaxo, Owara & Bahamas',
      af: 'Relaxo, Owara & Bahamas Handelsmerk-Uitstalling',
    },
    featuredDesc: {
      en: 'Full-color UV-resistant dye sublimation on heavy-duty canvas gazebos, banners, and event counters.',
      pt: 'Sublimação de alta definição resistente a UV em tendas, banners, balcões e têxteis promocionais.',
      af: 'UV-bestande kleurstofsublimasie op swaardiens gazebos, baniere en toonbanke.',
    },
    backgroundImage: '/images/slides/Slides_clapsa.png',
    specimenImage: '/images/gallery/elaxo-sublimated-gazebo-and-tablecloth.webp',
    stats: {
      val1: '1,500+',
      label1: { en: 'Event Kits', pt: 'Kits de Evento', af: 'Uitstallings' },
      val2: '100% UV',
      label2: { en: 'Weatherproof', pt: 'Resistente UV', af: 'Weerbestand' },
      val3: 'SADC',
      label3: { en: 'Delivery', pt: 'Entrega SADC', af: 'Aflewering' },
    },
    deepLink: '/gallery?category=display'
  },
  {
    id: 'corporate-fleet',
    tabLabel: {
      en: '02. Fleet & Vehicle Wraps',
      pt: '02. Branding de Viaturas',
      af: '02. Vloot & Voertuig-Omslae',
    },
    badge: {
      en: 'Commercial Fleet Vinyl Wrapping & Corporate Identity',
      pt: 'Envelopamento de Frotas Comerciais & Identidade Visual',
      af: 'Kommersiële Vloot Viniel-Omslae & Identiteit',
    },
    headlinePrefix: {
      en: 'High-Durability Cast Vinyl &',
      pt: 'Vinil Automóvel de Alta Durabilidade &',
      af: 'Hoë-Duursaamheid Voertuigviniel &',
    },
    headlineHighlight: {
      en: 'Commercial Fleet Branding',
      pt: 'Branding de Viaturas e Frotas',
      af: 'Kommersiële Vloot-Handelsmerk',
    },
    headlineSuffix: {
      en: 'That Turns Every Mile Into Reach.',
      pt: 'Que Destaca a Sua Empresa nas Estradas.',
      af: 'Wat Elke Kilometer Laat Tel.',
    },
    subtitle: {
      en: 'Precision contour-cut vehicle graphics, full bakkie and commercial car wraps, and UV-laminated fleet decals engineered for long-term resilience across South Africa and Mozambique.',
      pt: 'Envelopamento parcial e integral de carrinhas, viaturas comerciais e frotas corporativas com vinil fundido e laminação proteção UV para a África do Sul e Moçambique.',
      af: 'Presisie-gesnyde voertuiggrafika, bakkie- en vloot-omslae met UV-laminering vir Suid-Afrika en Mosambiek.',
    },
    checkpoints: {
      en: [
        'Full & Partial Commercial Bakkie & Sedan Vinyl Wraps',
        'High-Gloss UV Over-Laminate Against Harsh Sun',
        'Precision Contour-Cut Decals & Contact Lettering',
        'Turnkey Fleet Branding in Johannesburg & Maputo'
      ],
      pt: [
        'Envelopamento Total e Parcial de Carrinhas e Viaturas',
        'Laminação Protetora UV Contra Sol Intenso e Chuva',
        'Recorte Eletrónico de Precisão e Logótipos Corporativos',
        'Aplicação Profissional para Frotas em SA e Moçambique'
      ],
      af: [
        'Volledige & Gedeeltelike Bakkie en Vloot Viniel-Omslae',
        'Hoë-Glans UV-Beskermende Laminering',
        'Presisie-Gesnyde Plakkers & Korporatiewe Skrif',
        'Professionele Vloot-Installasie in SA & Mosambiek'
      ]
    },
    primaryCta: {
      label: {
        en: 'Explore Fleet Branding Lookbook',
        pt: 'Ver Trabalhos de Viaturas & Frotas',
        af: 'Verken Vloot-Handelsmerk Werk',
      },
      href: '/gallery?category=signage&q=fleet',
    },
    secondaryCta: {
      label: {
        en: 'Request Fleet Quote',
        pt: 'Pedir Cotação de Frota',
        af: 'Vra Vloot-Kwotasie',
      },
      href: '/contact',
    },
    featuredTag: {
      en: 'Enterprise Fleet Graphics',
      pt: 'Branding de Frotas',
      af: 'Vloot-Grafika',
    },
    featuredTitle: {
      en: 'TTN Security Bakkie & PYB Commercial Fleet Wraps',
      pt: 'Viaturas Comerciais TTN Security & PYB Branding',
      af: 'TTN Sekuriteit Bakkie & PYB Kommersiële Vloot',
    },
    featuredDesc: {
      en: 'Heavy-gauge cast automotive vinyl with UV laminate for long-lasting fleet visibility.',
      pt: 'Vinil automóvel fundido de alta aderência com proteção UV anti-desbotamento.',
      af: 'Swaardiens gegote motorviniel met UV-laminering vir langdurige sigbaarheid.',
    },
    backgroundImage: '/images/slides/Slides_clapsa_02.png',
    specimenImage: '/images/gallery/pyb-commercial-vehicle-vinyl-branding.webp',
    stats: {
      val1: '5+ Years',
      label1: { en: 'UV Durability', pt: 'Durabilidade UV', af: 'UV-Duursaamheid' },
      val2: 'Cast Vinyl',
      label2: { en: 'Automotive Grade', pt: 'Grau Automóvel', af: 'Motor-Graad' },
      val3: 'SADC',
      label3: { en: 'Fleet Support', pt: 'Apoio a Frotas', af: 'Vloot-Diens' },
    },
    deepLink: '/gallery?category=signage&q=fleet'
  },
  {
    id: 'signage-drinkware-campaigns',
    tabLabel: {
      en: '03. Road Signs & Campaigns',
      pt: '03. Sinalização & Campanhas',
      af: '03. Padtekens & Veldtogte',
    },
    badge: {
      en: 'Reflective Road Signs, Drinkware & Campaign Merchandise',
      pt: 'Sinalização Rodoviária, Brindes & Material de Campanha',
      af: 'Weerkaatsende Padtekens, Drinkware & Veldtogte',
    },
    headlinePrefix: {
      en: 'Civil Detour Road Signs, Custom Drinkware &',
      pt: 'Sinais de Estrada Refletores, Garrafas &',
      af: 'Siviele Padtekens, Drinkware &',
    },
    headlineHighlight: {
      en: 'Mass Campaign Apparel',
      pt: 'Têxteis de Grande Volume',
      af: 'Massa Veldtogklere',
    },
    headlineSuffix: {
      en: 'Delivered On Schedule.',
      pt: 'Produzidos com Rigor Industrial.',
      af: 'Stiptelik Afgelewer.',
    },
    subtitle: {
      en: 'From SABS retroreflective chevron detour signboards for civil engineering to custom screen-printed sports bottles, drawstring backpacks, and high-volume campaign t-shirts.',
      pt: 'Desde placas rodoviárias refletoras de desvio para obras públicas até garrafas desportivas personalizadas, sacos mochila e milhares de camisolas para campanhas e eventos.',
      af: 'Van SABS weerkaatsende padtekens vir siviele werke tot gedrukte waterbottels,rugsakke en hoë-volume veldtog T-hemde.',
    },
    checkpoints: {
      en: [
        'High-Intensity Retroreflective Desvio / Chevron Road Signs',
        'Custom Printed Sports Bottles, Mugs & Corporate Drinkware',
        'Sublimated & Screen-Printed Drawstring Bags & T-Shirts',
        'High-Speed Bulk Production for National Campaigns'
      ],
      pt: [
        'Sinais de Desvio e Chevrons Refletores de Alta Intensidade',
        'Garrafas Desportivas, Canecas e Brindes Personalizados',
        'Sacos Mochila e Camisolas Estampadas em Grande Escala',
        'Produção Rápida para Campanhas e Eventos Nacionais'
      ],
      af: [
        'Hoë-Intensiteit Weerkaatsende Desvio / Chevron Padtekens',
        'Gedrukte Sportbottels, Bekers & Korporatiewe Geskenke',
        'Sublimasie & Skermgedrukte Rugsakke en T-Hemde',
        'Hoë-Spoed Grootmaat Produksie vir Nasionale Veldtogte'
      ]
    },
    primaryCta: {
      label: {
        en: 'Inspect Road Signs & Merch',
        pt: 'Ver Sinais & Brindes no Lookbook',
        af: 'Sien Padtekens & Produkte',
      },
      href: '/gallery?category=signage&q=road',
    },
    secondaryCta: {
      label: {
        en: 'View All Capabilities',
        pt: 'Ver Todas as Capacidades',
        af: 'Sien Alle Vermoëns',
      },
      href: '/services',
    },
    featuredTag: {
      en: 'Signage & Mass Merchandising',
      pt: 'Sinalização & Grandes Tiragens',
      af: 'Padtekens & Grootmaat Drukwerk',
    },
    featuredTitle: {
      en: 'Desvio Chevron Road Signs, MLS Bottles & Campaign Kits',
      pt: 'Placas de Desvio, Garrafas MLS & Kits de Campanha',
      af: 'Desvio Padtekens, MLS Bottels & Veldtogstelle',
    },
    featuredDesc: {
      en: 'Galvanised steel road signage with prismatic reflective sheeting + precision screen printing.',
      pt: 'Chapa galvanizada com película refletora prismática + serigrafia industrial de alta velocidade.',
      af: 'Gegalvaniseerde staal padtekens met prismatiese weerkaatsing + presisie skermdruk.',
    },
    backgroundImage: '/images/slides/Slides_clapsa_03.png',
    specimenImage: '/images/gallery/desvio-reflective-chevron-road-signs.webp',
    stats: {
      val1: 'SABS 1519',
      label1: { en: 'Road Spec', pt: 'Norma Rodoviária', af: 'Padstandaard' },
      val2: '50,000+',
      label2: { en: 'Units / Run', pt: 'Unidades / Lote', af: 'Eenhede' },
      val3: 'Fast-Track',
      label3: { en: 'Cross-Border', pt: 'Envio Expresso', af: 'Spoedvrag' },
    },
    deepLink: '/gallery?category=signage&q=road'
  },
  {
    id: 'corporate-gifting-print-safety',
    tabLabel: {
      en: '04. Gifting, Print & Safety',
      pt: '04. Brindes, Impressão & EPI',
      af: '04. Geskenke, Druk & Veiligheid',
    },
    badge: {
      en: 'One-Source Corporate Gifting, Apparel Print & Traffic Safety',
      pt: 'Fornecedor Único: Brindes, Serigrafia, Bandeiras & Segurança',
      af: 'Een-Bron Korporatiewe Geskenke, Drukwerk & Veiligheid',
    },
    headlinePrefix: {
      en: 'Executive Gift Bags, Branded Pens, Apparel &',
      pt: 'Sacos Kraft, Canetas, T-Shirts, Bandeiras &',
      af: 'Geskenksakke, Penne, Klere &',
    },
    headlineHighlight: {
      en: 'Road Safety Equipment',
      pt: 'Equipamento de Segurança',
      af: 'Padveiligheidstoerusting',
    },
    headlineSuffix: {
      en: 'From Our Sandton Hub to SADC.',
      pt: 'Directamente da Fábrica para a SADC.',
      af: 'Direk vanaf Ons Sandton-Hub.',
    },
    subtitle: {
      en: 'Complete in-house production and wholesale supply: custom QR kraft gift bags, engraved executive pens, wide-format teardrop banners, screen-printed team shirts, and palletized road traffic cones.',
      pt: 'Produção própria e fornecimento grossista: sacos de presente personalizados, canetas executivas, bandeiras gota e roll-ups, camisolas estampadas e cones de estrada refletivos em paletes.',
      af: 'Volledige vervaardiging en groothandel: gedrukte geskenksakke, penne, traanvlae, skermgedrukte hemde en weerkaatsende padkeëls.',
    },
    checkpoints: {
      en: [
        'Luxury Kraft Gift Bags & High-Volume Branded Pens',
        'In-House Wide-Format Roll-Up & Teardrop Flag Plant',
        'Multi-Color Carousel Screen Printing on Cotton T-Shirts',
        'Palletized Road Traffic Cones & SADC Freight Consolidation'
      ],
      pt: [
        'Sacos Kraft de Luxo & Canetas Promocionais Personalizadas',
        'Gráfica de Grande Formato para Roll-Ups e Bandeiras Gota',
        'Serigrafia Automática Multi-Cor em T-Shirts e Polos',
        'Cones de Estrada Refletores & Consolidação de Carga SADC'
      ],
      af: [
        'Luukse Kraft Geskenksakke & Handelsmerk Penne',
        'Grootformaat Drukkery vir Rolbaniere & Traanvlae',
        'Outomatiese Meerkleur Skermdruk op Katoen T-Hemde',
        'Weerkaatsende Padkeëls & SADC Vragkonsolidasie'
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
        en: 'Explore Full Lookbook',
        pt: 'Ver Portfólio Completo',
        af: 'Verken Volledige Werk',
      },
      href: '/gallery',
    },
    featuredTag: {
      en: 'Turnkey Factory & Freight',
      pt: 'Fábrica & Logística Integrada',
      af: 'Fabriek & Vragdiens',
    },
    featuredTitle: {
      en: 'Mantra Packaging, Tropigalia Pens, Karina Flags & Road Cones',
      pt: 'Sacos Mantra, Canetas Tropigalia, Bandeiras Karina & Cones',
      af: 'Mantra Sakke, Tropigalia Penne, Karina Vlae & Padkeëls',
    },
    featuredDesc: {
      en: 'Manufactured and consolidated at our Sandton facility for fast 24–72h cross-border delivery.',
      pt: 'Produzido e consolidado em Sandton com despacho expresso em 24–72h para Moçambique.',
      af: 'Vervaardig en gekonsolideer in Sandton vir 24–72u oorgrens-aflewering.',
    },
    backgroundImage: '/images/slides/Slides_clapsa_04.png',
    specimenImage: '/images/gallery/mantra-kraft-luxury-gift-bags.webp',
    stats: {
      val1: '24 - 72h',
      label1: { en: 'SADC Transit', pt: 'Trânsito SADC', af: 'SADC Vragtyd' },
      val2: 'Sandton HQ',
      label2: { en: 'Production Hub', pt: 'Centro Produtivo', af: 'Produksie-Hub' },
      val3: '10,000+',
      label3: { en: 'Catalogue SKUs', pt: 'Produtos', af: 'Katalogus-Items' },
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15 pointer-events-none" />
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
