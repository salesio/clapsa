import os
import json

# Read the current translations.ts
with open('src/i18n/translations.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# Let's inspect where TranslationSchema is
# We need to add `lookbook: string;` in nav and `showcase: { ... }` in TranslationSchema.

schema_nav_old = """    taglineSub: string;
    taglineProc: string;
    selectLanguage: string;
  };"""

schema_nav_new = """    taglineSub: string;
    taglineProc: string;
    selectLanguage: string;
    lookbook: string;
  };"""

schema_showcase_def = """  showcase: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    tabs: {
      all: string;
      sportswear: string;
      apparel: string;
      gifting: string;
      ppe: string;
    };
    clickToInspect: string;
    inspect: string;
    clientContext: string;
    details: string;
    keyFeatures: string;
    inquireThisItem: string;
    requestCustomProposal: string;
    customOrderTitle: string;
    customOrderSubtitle: string;
    whatsappLookbook: string;
    requestSample: string;
    items: Record<string, {
      title: string;
      categoryLabel: string;
      badge: string;
      clientOrContext: string;
      description: string;
      highlights: readonly string[] | string[];
    }>;
  };
"""

# Let's define the portfolio translations for EN, PT, AF:
portfolio_items_en = """      items: {
        'clapsa-activewear-collection': {
          title: 'Custom Sublimated Zip Hoodies & Athletic Tracksuits',
          client: 'CLAPSA Activewear & Performance Line',
          tag: 'Sublimated Apparel',
          categoryLabel: 'Sublimation & Sportswear',
          location: 'Johannesburg, South Africa',
          description: 'Designed, printed, and manufactured high-performance custom sublimated zip hoodies and activewear featuring precision color saturation and bespoke sleeve branding.',
          deliverables: [
            'Dye-Sublimated Performance Zip Hoodies with Vivid Contrast Graphics',
            'Matching High-Flex Moisture-Wicking 3/4 Activewear Leggings',
            'Custom Typography Sleeve Print (www.clapsashop.co.za)',
            'Complete Athlete Sizing Kits & Custom Retail Packaging',
          ],
        },
        'trace-vip-event-merchandising': {
          title: 'TRACE+ VIP Event Lanyards & Sublimated Wristbands',
          client: 'TRACE+ Music & Entertainment Tour',
          tag: 'Event Merchandising',
          categoryLabel: 'Event Merchandising',
          location: 'Pan-African Tour & Festivals',
          description: 'Manufactured premium black satin dye-sublimated VIP event lanyards and wristbands featuring scannable QR campaign activations and vibrant orange branding.',
          deliverables: [
            'Double-Sided High-Density Silk Satin Sublimated Lanyards',
            'High-Precision Scannable QR Codes for Contactless Digital Activations',
            'Heavy-Duty Lobster Claw Clasps & Safety Breakaway Buckles',
            '50,000+ Units Rapid SADC Pan-African Event Distribution',
          ],
        },
        'claps-gin-corporate-gifting': {
          title: 'CLAPS Premium Gin & Laser-Engraved Wooden Coasters',
          client: 'Exclusive Brand Launch & VIP Executive Gifting',
          tag: 'Executive Gifting',
          categoryLabel: 'Bespoke Corporate Gifting',
          location: 'Sandton, Johannesburg',
          description: 'Curated luxury artisan gifting suites featuring custom-labelled CLAPS Premium Gin spirit bottles with natural cork stoppers and bespoke laser-cut geometric wooden coasters.',
          deliverables: [
            'Custom Foil-Laminated Spirit Bottle Labels with Natural Cork Seals',
            'Precision Laser-Cut Geometric Hardwood Coaster Sets',
            'Debossed Presentation Gift Boxes with Silk Ribbon Liners',
            'Turnkey VIP Executive Gift Hamper Assembly & Distribution',
          ],
        },
        'industrial-ppe-safety-shoot': {
          title: 'Certified Safety Eyewear & Heavy-Duty Nitrile Grip Gloves',
          client: 'Manufacturing & Heavy Industrial Engineering Group',
          tag: 'Certified Safety PPE',
          categoryLabel: 'Industrial PPE & Safety',
          location: 'Gauteng & Mpumalanga',
          description: 'Supplied comprehensive SABS & CE approved eye protection goggles, anti-abrasion nitrile safety gloves, and industrial head protection for engineering workforces.',
          deliverables: [
            'Anti-Scratch & Anti-Fog UV Protective Safety Glasses',
            'Heavy-Duty High-Grip Nitrile Coated Handling Gloves',
            'Industrial Head & Hearing Protection Kits',
            'SABS & ISO 9001 Compliance Certification Documentation',
          ],
        },
        'clapsa-graphic-tees': {
          title: 'Africa Map Typography Graphic T-Shirt Collection',
          client: 'Pan-African Apparel & Cultural Brand',
          tag: 'Graphic Apparel',
          categoryLabel: 'Graphic & Corporate Apparel',
          location: 'Johannesburg, South Africa',
          description: 'Produced premium 180gsm combed cotton graphic t-shirts featuring high-density typographical Africa map screen printing with razor-sharp micro-text clarity.',
          deliverables: [
            '180gsm 100% Combed Cotton Heavyweight Crewneck Tees',
            'High-Density Screen & DTF Typographical Map Printing',
            'Pre-Shrunk Ring-Spun Fabric with Reinforced Double Stitching',
            'Custom Neck Labeling and Eco-Friendly Retail Bagging',
          ],
        },
        'clapsa-corporate-uniforms': {
          title: 'Corporate Emerald Cotton T-Shirts with Custom Back Branding',
          client: 'CLAPSA Official Corporate Uniforms',
          tag: 'Corporate Wardrobe',
          categoryLabel: 'Corporate Uniforms',
          location: 'South Africa & Regional Branches',
          description: 'Manufactured custom vibrant emerald-green corporate crewnecks featuring crisp white official logo placement across the upper back for internal and client-facing teams.',
          deliverables: [
            '100% Premium Cotton Crewneck Corporate T-Shirts',
            'Precision Screen-Printed Upper Back CLAPSA Branding',
            'Comfort Fit with Anti-Fade Color Fastness Technology',
            'Full Sizing Range (XS to 4XL) for Multi-Branch Outfitting',
          ],
        },
        'trade-exhibition-showcase': {
          title: 'Commercial Exhibition Stand & Product Showcase',
          client: 'SADC Trade & Brand Exhibition',
          tag: 'Trade Displays',
          categoryLabel: 'Exhibition Displays & Signage',
          location: 'Johannesburg & Regional SADC Hubs',
          description: 'Designed and built complete commercial retail display counters, promotional backdrops, and product shelf arrangements for high-traffic trade exhibitions.',
          deliverables: [
            'Vibrant Dye-Sublimation Fabric Wall & Pop-Up Backdrop Banners',
            'Custom Tiered Merchandising Display Stand with Product Shelving',
            'Illuminated Product Showcases for Glass Bottled Merchandise',
            'Turnkey Event Setup, Dismantling & Logistics Support',
          ],
        },
        'custom-sportswear-activewear': {
          title: 'All-Over Sublimation Activewear & Fitness Leggings',
          client: 'Athletic Club & Teamwear Division',
          tag: 'Athletic Apparel',
          categoryLabel: 'Sportswear & Activewear',
          location: 'Cape Town & Johannesburg',
          description: 'Custom designed technical performance sportswear with 4-way stretch compression leggings and breathable athletic fabrics for fitness and team sports.',
          deliverables: [
            '4-Way Stretch High-Compression Spandex/Polyester Leggings',
            'Sweat-Wicking Anti-Odor Performance Technical Fabrics',
            'Reinforced Flatlock Seams for Maximum Athlete Comfort',
            'High-Resolution Gradient Printing with Fade-Proof Inks',
          ],
        },
      },"""

portfolio_items_pt = """      items: {
        'clapsa-activewear-collection': {
          title: 'Casacos com Capuz Sublimados & Fatos de Treino Desportivos',
          client: 'Linha CLAPSA Activewear & Performance',
          tag: 'Vestuário Sublimado',
          categoryLabel: 'Sublimação & Desporto',
          location: 'Joanesburgo, África do Sul',
          description: 'Conceção, estampagem e fabrico de casacos desportivos com capuz e fecho e vestuário ativo com saturação de cor de alta definição e marca personalizada nas mangas.',
          deliverables: [
            'Casacos Desportivos Sublimados com Padrões Gráficos de Alto Contraste',
            'Leggings 3/4 de Compressão com Tecido Respirável e Flexível',
            'Estampagem Tipográfica Personalizada na Manga (www.clapsashop.co.za)',
            'Kits de Tamanhos para Atletas e Embalagem Própria de Retalho',
          ],
        },
        'trace-vip-event-merchandising': {
          title: 'Fitas Lanyard VIP TRACE+ & Pulseiras Sublimadas',
          client: 'Digressão TRACE+ Música & Entretenimento',
          tag: 'Merchandising para Eventos',
          categoryLabel: 'Merchandising para Eventos',
          location: 'Digressão Pan-Africana & Festivais',
          description: 'Fabrico de fitas lanyard em cetim preto sublimado de alta qualidade e pulseiras para eventos VIP com ativações interativas por código QR e cores vibrantes.',
          deliverables: [
            'Lanyards Sublimados em Cetim de Seda de Alta Densidade com Dupla Face',
            'Códigos QR de Alta Precisão para Ativação Digital Sem Contacto',
            'Mosquetões Metálicos Reforçados e Fechos de Segurança Anti-Asfixia',
            'Mais de 50.000 Unidades com Logística Rápida para a SADC',
          ],
        },
        'claps-gin-corporate-gifting': {
          title: 'Gin Premium CLAPS & Bases de Copo em Madeira Gravadas a Laser',
          client: 'Lançamento de Marca Exclusiva & Ofertas Executivas VIP',
          tag: 'Brindes Executivos',
          categoryLabel: 'Brindes Corporativos de Luxo',
          location: 'Sandton, Joanesburgo',
          description: 'Conjuntos de oferta de luxo artesanais com garrafas de Gin Premium CLAPS com rótulos personalizados, rolhas de cortiça natural e bases geométricas em madeira.',
          deliverables: [
            'Rótulos Personalizados com Acabamento em Folha Metálica e Cortiça Natural',
            'Conjuntos de Bases em Madeira Nobre com Corte Geométrico a Laser',
            'Caixas de Apresentação Premium em Relevo com Fita de Cetim',
            'Montagem Chave-na-Mão de Cabazes Executivos VIP e Distribuição',
          ],
        },
        'industrial-ppe-safety-shoot': {
          title: 'Óculos de Segurança Certificados & Luvas em Nitrilo de Alta Aderência',
          client: 'Grupo de Engenharia e Manufatura Industrial Pesada',
          tag: 'EPI Certificado',
          categoryLabel: 'EPI Industrial & Segurança',
          location: 'Gauteng e Mpumalanga',
          description: 'Fornecimento completo de óculos de proteção certificados SABS e CE, luvas de segurança resistentes ao atrito e proteção para a cabeça para indústria pesada.',
          deliverables: [
            'Óculos de Proteção UV Antirrisco e Antiembaçamento',
            'Luvas Industriais Revestidas a Microespuma de Nitrilo de Elevada Aderência',
            'Kits de Proteção para Cabeça e Protetores Auriculares',
            'Documentação Completa de Conformidade SABS e ISO 9001',
          ],
        },
        'clapsa-graphic-tees': {
          title: 'Coleção de T-Shirts Gráficas com Mapa Tipográfico de África',
          client: 'Marca Cultural & Vestuário Pan-Africano',
          tag: 'Vestuário Gráfico',
          categoryLabel: 'Vestuário Gráfico & Corporativo',
          location: 'Joanesburgo, África do Sul',
          description: 'Produção de t-shirts em algodão penteado de 180g/m² com serigrafia tipográfica de alta densidade do mapa de África com microtexto de máxima nitidez.',
          deliverables: [
            'T-Shirts Gola Redonda em Algodão 100% Penteado de 180g/m²',
            'Estampagem Serigráfica e DTF de Alta Densidade com Mapa Tipográfico',
            'Tecido Pré-Encolhido com Costuras Duplas Reforçadas',
            'Etiquetagem de Gola Personalizada e Embalagem Ecológica',
          ],
        },
        'clapsa-corporate-uniforms': {
          title: 'T-Shirts Corporativas em Verde Esmeralda com Logótipo nas Costas',
          client: 'Fardamento Oficial Corporativo CLAPSA',
          tag: 'Guarda-Roupa Corporativo',
          categoryLabel: 'Uniformes Corporativos',
          location: 'África do Sul & Filiais Regionais',
          description: 'Fabrico de t-shirts corporativas em tom verde esmeralda com estampagem nítida do logótipo oficial em branco na parte superior das costas para equipas corporativas.',
          deliverables: [
            'T-Shirts Gola Redonda em Algodão 100% Premium',
            'Estampagem Precisa do Logótipo Oficial CLAPSA nas Costas',
            'Corte Confortável com Tecnologia de Alta Solidez de Cor',
            'Gama Completa de Tamanhos (XS a 4XL) para Várias Filiais',
          ],
        },
        'trade-exhibition-showcase': {
          title: 'Stand de Exposição Comercial & Expositores de Produtos',
          client: 'Feira e Exposição Comercial da SADC',
          tag: 'Estruturas de Exposição',
          categoryLabel: 'Sinalética & Expositores',
          location: 'Joanesburgo & Polos Regionais da SADC',
          description: 'Conceção e montagem de balcões comerciais para retalho, fundos promocionais e prateleiras de exposição para feiras e eventos com grande afluência.',
          deliverables: [
            'Paredes em Tecido Sublimado Vibrante e Banners Pop-Up de Fundo',
            'Expositores de Produtos em Vários Níveis com Prateleiras Personalizadas',
            'Vitrinas Iluminadas para Garrafas de Vidro e Artigos Promocionais',
            'Montagem, Desmontagem e Apoio Logístico Integral para Eventos',
          ],
        },
        'custom-sportswear-activewear': {
          title: 'Vestuário Desportivo com Sublimação Integral & Leggings de Fitness',
          client: 'Divisão Desportiva & Equipamentos de Equipa',
          tag: 'Vestuário Desportivo',
          categoryLabel: 'Vestuário Desportivo & Fitness',
          location: 'Cidade do Cabo & Joanesburgo',
          description: 'Design personalizado de roupa técnica de alto rendimento com leggings de compressão elástica em 4 direções e tecidos respiráveis para fitness e desportos coletivos.',
          deliverables: [
            'Leggings em Spandex/Poliéster de Alta Compressão Elástica em 4 Direções',
            'Tecidos Técnicos com Gestão de Humidade e Controlo de Odores',
            'Costuras Planas (Flatlock) Reforçadas para Conforto Máximo do Atleta',
            'Estampagem de Gradientes de Alta Resolução com Tintas Anti-Desbotamento',
          ],
        },
      },"""

portfolio_items_af = """      items: {
        'clapsa-activewear-collection': {
          title: 'Pasgemaakte Gesublimeerde Ritsbaadjies & Sport-Oorpakke',
          client: 'CLAPSA Sportdrag- & Prestasieklerereeks',
          tag: 'Sublimasieklere',
          categoryLabel: 'Sublimasie & Sportdrag',
          location: 'Johannesburg, Suid-Afrika',
          description: 'Ontwerp, gedruk en vervaardig van hoëprestasie pasgemaakte gesublimeerde ritsbaadjies en aktiewe klerasie met presiese kleurversadiging en handelsmerkmoue.',
          deliverables: [
            'Gesublimeerde Prestasie-Ritsbaadjies met Hoëkontras-Grafika',
            'Passende Hoë-Elastisiteit Vogtighedsafvoerende 3/4 Sporttights',
            'Pasgemaakte Tipografiese Mou-Drukwerk (www.clapsashop.co.za)',
            'Volledige Atleetgroottes-Kits & Pasgemaakte Kleinhandelverpakking',
          ],
        },
        'trace-vip-event-merchandising': {
          title: 'TRACE+ BBP-Geleentheidsnekbande & Gesublimeerde Polsbandjies',
          client: 'TRACE+ Musiek- en Vermaaktoer',
          tag: 'Geleentheidshandelsware',
          categoryLabel: 'Geleentheidshandelsware',
          location: 'Pan-Afrikaanse Toer & Feeste',
          description: 'Vervaardiging van hoëgehalte swart satyn gesublimeerde BBP-nekbande en polsbandjies met skandeerbare QR-veldtogte en helder oranje handelsmerke.',
          deliverables: [
            'Dubbelsydige Hoëdigtheid Sysatyn Gesublimeerde Nekbande',
            'Hoëpresisie Skandeerbare QR-Kodes vir Digitale Toegang',
            'Swaardiens Kreefknypers & Veiligheidsbreekgespes',
            '50,000+ Eenhede Vinnige SAOG Pan-Afrikaanse Geleentheidsverspreiding',
          ],
        },
        'claps-gin-corporate-gifting': {
          title: 'CLAPS Premium Jenewer & Laser-Gegraveerde Hout-Platjies',
          client: 'Eksklusiewe Handelsmerkbekendstelling & BBP-Geskenke',
          tag: 'Uitvoerende Geskenke',
          categoryLabel: 'Pasgemaakte Korporatiewe Geskenke',
          location: 'Sandton, Johannesburg',
          description: 'Luukse handgemaakte geskenkpakke met pasgemaakte CLAPS Premium Jenewer-bottels met natuurlike kurkproppe en geometriese laser-gesnyde hout-platjies.',
          deliverables: [
            'Pasgemaakte Foelie-Etikette vir Drankbottels met Natuurlike Kurkproppe',
            'Presisie Laser-Gesnyde Geometriese Hardehout-Platjiestelle',
            'Luukse Aanbiedingsgeskenkbokse met Satynlinte',
            'Sleutelklaar BBP-Geskenkmandjie-Montering & Verspreiding',
          ],
        },
        'industrial-ppe-safety-shoot': {
          title: 'Gesertifiseerde Veiligheidsbrille & Nitriel-Hanteringshandskoene',
          client: 'Swaaringenieurswese & Industriële Vervaardigingsgroep',
          tag: 'Gesertifiseerde WBT',
          categoryLabel: 'Industriële WBT & Veiligheid',
          location: 'Gauteng & Mpumalanga',
          description: 'Omvattende voorsiening van SABS- en CE-goedgekeurde oogbeskermingsbrille, skuurbestande nitriel-handskoene en industriële kopbeskerming.',
          deliverables: [
            'Krap- & Wasembestande UV-Beskermende Veiligheidsbrille',
            'Swaardiens Hoë-Gryp Nitriel-Bedekte Hanteringshandskoene',
            'Industriële Kop- en Gehoorbeskermingspakke',
            'Volledige SABS- en ISO 9001-Voldoeningsdokumentasie',
          ],
        },
        'clapsa-graphic-tees': {
          title: 'Afrika-Kaart Tipografie Grafiese T-Hempversameling',
          client: 'Pan-Afrikaanse Klerasie & Kulturele Handelsmerk',
          tag: 'Grafiese Klerasie',
          categoryLabel: 'Grafiese & Korporatiewe Klerasie',
          location: 'Johannesburg, Suid-Afrika',
          description: 'Vervaardig van premium 180gsm gekamde katoen T-hemde met hoëdigtheid tipografiese Afrika-kaart skermdrukwerk met mikroskopiese tekshelderheid.',
          deliverables: [
            '180gsm 100% Gekamde Katoen Swaargewig Rondehals T-Hemde',
            'Hoëdigtheid Skerm- en DTF-Tipografiese Kaartdrukwerk',
            'Voorkrimp-Stof met Versterkte Dubbelstikwerk',
            'Pasgemaakte Nek-Etikettering en Omgewingsvriendelike Verpakking',
          ],
        },
        'clapsa-corporate-uniforms': {
          title: 'Korporatiewe Smarag-Groen T-Hemde met Handelsmerk op Rug',
          client: 'CLAPSA Amptelike Korporatiewedrag',
          tag: 'Korporatiewe Klerekas',
          categoryLabel: 'Korporatiewedrag',
          location: 'Suid-Afrika & Streektakke',
          description: 'Pasgemaakte smaraggroen korporatiewe T-hemde met skerp wit amptelike handelsmerk op die boonste rug vir interne en kliëntgerigte personeel.',
          deliverables: [
            '100% Premium Katoen Rondehals Korporatiewe T-Hemde',
            'Presiese Skermgedrukte CLAPSA-Handelsmerk op Boonste Rug',
            'Gerieflike Pasvorm met Kleurvaste Tegnologie',
            'Volledige Groottereeks (XS tot 4XL) vir Veeltakkige Uitrusting',
          ],
        },
        'trade-exhibition-showcase': {
          title: 'Kommersiële Uitstalstalletjie & Produkvertoonrakke',
          client: 'SAOG Handels- & Handelsmerkskou',
          tag: 'Handelskou-Uitstallings',
          categoryLabel: 'Uitstallings & Tekens',
          location: 'Johannesburg & SAOG Streekssentrums',
          description: 'Ontwerp en bou van volledige kleinhandel-uitstaltoonbanke, promosie-agtergronde en produkrakke vir besige handelsskoue.',
          deliverables: [
            'Helder Gesublimeerde Stofmure en Opslaan-Agtergrondbaniere',
            'Pasgemaakte Vlak-Produkuitstalrakke met Beligting',
            'Verligte Produkvertoonvensters vir Glasbottels en Handelsware',
            'Sleutelklaar Stalletjie-Opstelling, Afbreek & Logistieke Ondersteuning',
          ],
        },
        'custom-sportswear-activewear': {
          title: 'Volle-Sublimasie Sportdrag & Fiksheidstights',
          client: 'Sportklub- & Spandrag-Afdeling',
          tag: 'Sportdrag',
          categoryLabel: 'Sportdrag & Aktiewe Drag',
          location: 'Kaapstad & Johannesburg',
          description: 'Pasgemaakte tegniese prestasie-sportdrag met 4-rigting rek-kompressietights en asemhalende stowwe vir fiksheid en spansporte.',
          deliverables: [
            '4-Rigting Rek Hoë-Kompressie Spandex/Poliëster Tights',
            'Vogafvoerende Reukbestande Prestasie-Stowwe',
            'Versterkte Plat Naelnate vir Maksimum Atleetgerief',
            'Hoë Resolusie Kleurgradiënt-Drukwerk met Vervaagbestande Ink',
          ],
        },
      },"""

# Showcase section translations:
showcase_en = """    showcase: {
      badge: 'Authentic Client Media & Production',
      titlePrefix: 'Client Lookbook &',
      titleHighlight: 'Production Showcase',
      subtitle: 'Browse authentic photographs of real garments, merchandise, and safety equipment manufactured, sublimated, and branded by CLAPSA.',
      tabs: {
        all: 'All Production',
        sportswear: 'Sportswear & Sublimation',
        apparel: 'Corporate & Graphic Tees',
        gifting: 'Event & Bespoke Gifting',
        ppe: 'Safety Gear & PPE',
      },
      clickToInspect: 'Click to Inspect',
      inspect: 'Inspect',
      clientContext: 'Client / Project',
      details: 'Production Details & Execution',
      keyFeatures: 'Key Specifications',
      inquireThisItem: 'Inquire About This Product',
      requestCustomProposal: 'Request Custom Proposal',
      customOrderTitle: 'Need Custom Branded Apparel or Merchandising?',
      customOrderSubtitle: 'From bespoke promotional runs to 50,000+ pan-African event rollouts, we manufacture, brand, and distribute across South Africa and SADC.',
      whatsappLookbook: 'Chat on WhatsApp',
      requestSample: 'Request Spec Sample / Quote',
      items: {
        'activewear-hoodie-lifestyle': {
          title: 'Custom Sublimated Athletic Zip Hoodie',
          categoryLabel: 'Sportswear & Sublimation',
          badge: 'Custom Sublimation',
          clientOrContext: 'CLAPSA Activewear Line',
          description: 'High-definition dye-sublimated performance hoodie featuring striking black and red contrast patterns with custom website typography along the right sleeve.',
          highlights: ['All-Over Dye-Sublimation', 'Custom Sleeve URL Branding', 'Full-Zip Athletic Cut', 'Thermal Fleece Lining'],
        },
        'sublimation-tracksuit-pose': {
          title: 'Precision Sleeve Print & Athletic Tracksuit',
          categoryLabel: 'Sportswear & Sublimation',
          badge: 'Sleeve Typography',
          clientOrContext: 'Custom Performance Apparel',
          description: 'Showcasing razor-sharp typography detailing on the forearm with custom URL branding, paired with matching sublimated compression tights.',
          highlights: ['Micro-Text Sharpness', 'Compression Leggings', 'Fade-Proof Inks', 'Moisture-Wicking Blend'],
        },
        'athletic-activewear-runner': {
          title: 'Outdoor Activewear & Performance Leggings',
          categoryLabel: 'Sportswear & Sublimation',
          badge: 'Performance Wear',
          clientOrContext: 'Fitness & Teamwear Outfitting',
          description: 'Engineered for athlete movement with flexible, form-fitting stretch materials suited for outdoor corporate wellness, team sports, and fitness campaigns.',
          highlights: ['4-Way Stretch Fabric', 'Athletic Fit Profile', 'Outdoor Durability', 'Reinforced Seams'],
        },
        'sportswear-tracksuit-motion': {
          title: 'Dynamic Sublimated Tracksuit in Motion',
          categoryLabel: 'Sportswear & Sublimation',
          badge: 'Sublimated Set',
          clientOrContext: 'Athletic Club Division',
          description: 'Full-length presentation of the coordinated tracksuit top and bottom, demonstrating vivid color saturation and athletic cut under natural daylight.',
          highlights: ['Vibrant Red/Black Palette', 'Breathable Polyester', 'Custom Pattern Design', 'Full Movement Flexibility'],
        },
        'fitness-crop-leggings': {
          title: 'Bespoke Fitness Tops & High-Waist Tights',
          categoryLabel: 'Sportswear & Sublimation',
          badge: 'Athletic Wear',
          clientOrContext: 'Lifestyle Activewear Collection',
          description: 'Seamless sports activewear set built with high-density elastane fabric that provides firm muscle support and sleek lifestyle aesthetics.',
          highlights: ['High-Waist Compression Band', 'Vibrant Crimson Fabric', 'Shape Retention Spandex', 'Anti-Chafe Construction'],
        },
        'africa-graphic-tee-smile': {
          title: 'Africa Map Typographical Graphic T-Shirt',
          categoryLabel: 'Corporate & Graphic Apparel',
          badge: 'High-Density Print',
          clientOrContext: 'Pan-African Apparel Line',
          description: 'Graphic screen-printed crewneck tee featuring all African nations artfully shaped into the continental silhouette with fine micro-typography.',
          highlights: ['180gsm Combed Cotton', 'Intricate Word Cloud Map', 'Soft-Hand Screen Print', 'Pre-Shrunk Ring-Spun'],
        },
        'africa-map-tshirt-walkway': {
          title: 'Continental Graphic Tee Urban Lifestyle Shoot',
          categoryLabel: 'Corporate & Graphic Apparel',
          badge: 'Urban Lifestyle',
          clientOrContext: 'Brand Merchandising Collection',
          description: 'Urban outdoor lifestyle showcase displaying drape, color balance, and crisp chest artwork under bright daylight conditions.',
          highlights: ['Reinforced Double Stitching', 'Fade-Resistant Pigments', 'Breathable Natural Cotton', 'Contemporary Fit'],
        },
        'custom-graphic-tee-deck': {
          title: 'High-Contrast Screen Printed Cotton Tee',
          categoryLabel: 'Corporate & Graphic Apparel',
          badge: 'Screen Printing',
          clientOrContext: 'Custom Graphic Merchandising',
          description: 'Detailed showcase of print longevity and crisp edge resolution on heavy cotton jerseys, ideal for brand launches and university campaigns.',
          highlights: ['High-Contrast Monochrome', 'Soft-Touch Plastisol', 'Non-Deforming Collar', 'Multi-Size Range (S-4XL)'],
        },
        'corporate-emerald-tee-back': {
          title: 'Emerald Green Corporate Tee with Upper Back Logo',
          categoryLabel: 'Corporate & Graphic Apparel',
          badge: 'Corporate Branding',
          clientOrContext: 'CLAPSA Corporate Staff Wardrobe',
          description: 'Official corporate crewneck t-shirt featuring crisp white heat-seal/screen logo on the upper back neck, demonstrating precision corporate uniformity.',
          highlights: ['Official White Logo Print', 'Vibrant Emerald Colorway', '100% Combed Cotton', 'Reinforced Neck Tape'],
        },
        'trace-vip-event-lanyards': {
          title: 'TRACE+ VIP Satin Sublimated Event Lanyards',
          categoryLabel: 'Event & Gifting Merchandise',
          badge: 'VIP Event Branding',
          clientOrContext: 'TRACE+ International Music Event',
          description: 'Premium event satin lanyards manufactured for the TRACE+ music festival, featuring high-density typography and scannable VIP campaign text.',
          highlights: ['Silky Double-Sided Satin', 'Vibrant Orange/Black Ink', 'Bilingual Campaign Text', 'Heavy-Duty Hardware'],
        },
        'trace-event-wristbands-qr': {
          title: 'Interactive QR Code Access Lanyards & Wristbands',
          categoryLabel: 'Event & Gifting Merchandise',
          badge: 'Scannable QR Codes',
          clientOrContext: 'TRACE+ Digital Access Campaign',
          description: 'High-precision sublimation printing that keeps micro-QR codes 100% scannable by smartphone cameras for contactless ticketing and app downloads.',
          highlights: ['Scannable Mobile QR Code', 'Anti-Fray Heat-Sealed Ends', 'Safety Breakaway Clips', '50,000+ Volume Capacity'],
        },
        'claps-premium-gin-coaster-glass': {
          title: 'CLAPS Premium Gin & Laser-Cut Wooden Coasters',
          categoryLabel: 'Event & Gifting Merchandise',
          badge: 'Bespoke Executive Gift',
          clientOrContext: 'Executive Corporate Gifting',
          description: 'Turnkey luxury corporate gifting package combining custom labelled artisan spirit glass bottles with precision laser-engraved geometric wood coasters.',
          highlights: ['Custom Spirits Labeling', 'Laser-Cut Geometric Coasters', 'Natural Cork Finishes', 'VIP Hamper Presentation'],
        },
        'claps-gin-exhibition-showcase': {
          title: 'Commercial Exhibition Stand & Product Display',
          categoryLabel: 'Event & Gifting Merchandise',
          badge: 'Trade Exhibition',
          clientOrContext: 'SADC Trade & Brand Expo',
          description: 'Complete commercial booth branding featuring large format backdrop printing paired with tiered product displays for trade expos and corporate activations.',
          highlights: ['Tiered Merchandising Display', 'Large Format Wall Banner', 'Illuminated Bottle Showcase', 'Full Turnkey Stand Setup'],
        },
        'ppe-safety-glasses-gloves': {
          title: 'Certified Safety Eyewear & Heavy Grip Nitrile Gloves',
          categoryLabel: 'Safety Gear & Industrial PPE',
          badge: 'Certified Industrial PPE',
          clientOrContext: 'Heavy Engineering & Industrial Safety',
          description: 'Model showcasing industrial-grade protective eyewear with wrap-around optical clarity paired with tactile nitrile-coated handling gloves.',
          highlights: ['Anti-Fog UV Safety Glasses', 'Nitrile Microfoam Grip Gloves', 'SABS Compliant Protection', 'Ergonomic Hand Contours'],
        },
        'ppe-safety-gear-banner': {
          title: 'Industrial Eye Protection & Protective Eyewear Suite',
          categoryLabel: 'Safety Gear & Industrial PPE',
          badge: 'Dromex Certified',
          clientOrContext: 'Workplace Safety Compliance',
          description: 'Promotional deployment banner showcasing certified Dromex safety goggles and interchangeable tinted/clear protective spectacles for industrial workforces.',
          highlights: ['Dromex Impact Goggles', 'Shaded & Clear UV Lenses', 'Adjustable Elastic Strap', 'Chemical & Dust Splash Proof'],
        },
        'security-ppe-full-kit': {
          title: 'Full Head & Hearing Protection Safety Kit',
          categoryLabel: 'Safety Gear & Industrial PPE',
          badge: 'Turnkey PPE Kit',
          clientOrContext: 'Security & Industrial Site Supply',
          description: 'Comprehensive personal safety package providing combined respiratory, acoustic, visual, and thermal protective workwear for demanding job sites.',
          highlights: ['Face Shield & Ear Muff Kit', 'Wide-Vision Safety Goggles', 'Sublimated Team Jersey', 'SABS Approved Gear'],
        },
      },
    },"""

showcase_pt = """    showcase: {
      badge: 'Mídia Real de Produção & Clientes',
      titlePrefix: 'Catálogo Visual &',
      titleHighlight: 'Galeria de Produção',
      subtitle: 'Explore fotografias autênticas de vestuário real, brindes e equipamentos de segurança fabricados, sublimados e personalizados pela CLAPSA.',
      tabs: {
        all: 'Toda a Produção',
        sportswear: 'Vestuário Desportivo & Sublimação',
        apparel: 'T-Shirts Corporativas & Gráficas',
        gifting: 'Eventos & Brindes VIP',
        ppe: 'EPI & Equipamento de Proteção',
      },
      clickToInspect: 'Clique para Inspecionar',
      inspect: 'Inspecionar',
      clientContext: 'Cliente / Projeto',
      details: 'Detalhes de Fabrico & Execução',
      keyFeatures: 'Especificações Principais',
      inquireThisItem: 'Pedir Cotação Deste Artigo',
      requestCustomProposal: 'Solicitar Proposta à Medida',
      customOrderTitle: 'Precisa de Vestuário ou Merchandising Personalizado?',
      customOrderSubtitle: 'Desde pequenas séries exclusivas até produções em massa de mais de 50.000 unidades para a SADC, fabricamos, personalizamos e distribuímos.',
      whatsappLookbook: 'Conversar no WhatsApp',
      requestSample: 'Solicitar Amostra / Cotação',
      items: {
        'activewear-hoodie-lifestyle': {
          title: 'Casaco Desportivo Sublimado com Capuz e Fecho',
          categoryLabel: 'Vestuário Desportivo & Sublimação',
          badge: 'Sublimação Total',
          clientOrContext: 'Linha CLAPSA Activewear',
          description: 'Casaco de alta performance sublimado com padrões gráficos a vermelho e preto e estampagem tipográfica personalizada do website na manga direita.',
          highlights: ['Sublimação Digital Total', 'Website na Manga', 'Corte Desportivo com Fecho', 'Forro Térmico Interior'],
        },
        'sublimation-tracksuit-pose': {
          title: 'Estampagem Tipográfica na Manga & Fato de Treino',
          categoryLabel: 'Vestuário Desportivo & Sublimação',
          badge: 'Tipografia na Manga',
          clientOrContext: 'Vestuário Técnico de Alta Performance',
          description: 'Destaque para o microtexto e endereço web nítido no antebraço, combinado com leggings de compressão sublimadas a condizer.',
          highlights: ['Nitidez de Microtexto', 'Leggings de Compressão', 'Tintas Anti-Desbotamento', 'Tecido Respirável'],
        },
        'athletic-activewear-runner': {
          title: 'Vestuário de Corrida & Leggings Desportivas',
          categoryLabel: 'Vestuário Desportivo & Sublimação',
          badge: 'Alta Performance',
          clientOrContext: 'Equipamento para Fitness e Clubes',
          description: 'Concebido para maximizar a amplitude de movimentos com tecidos elásticos adaptados a programas de bem-estar corporativo e eventos desportivos.',
          highlights: ['Elasticidade em 4 Direções', 'Corte Anatómico Desportivo', 'Resistência ao Ar Livre', 'Costuras Reforçadas'],
        },
        'sportswear-tracksuit-motion': {
          title: 'Fato de Treino Sublimado em Movimento',
          categoryLabel: 'Vestuário Desportivo & Sublimação',
          badge: 'Conjunto Sublimado',
          clientOrContext: 'Divisão Desportiva e Clubes',
          description: 'Apresentação integral do fato de treino (casaco e calças), exibindo a saturação vibrante das cores sob iluminação natural.',
          highlights: ['Paleta Vermelha e Preta', 'Poliéster Respirável', 'Padrão Gráfico Exclusivo', 'Flexibilidade Total'],
        },
        'fitness-crop-leggings': {
          title: 'Top Desportivo & Leggings de Cintura Alta',
          categoryLabel: 'Vestuário Desportivo & Sublimação',
          badge: 'Activewear Feminino',
          clientOrContext: 'Coleção Fitness & Lifestyle',
          description: 'Conjunto desportivo sem costuras desconfortáveis, confecionado em elastano de alta densidade que garante suporte muscular e elegância.',
          highlights: ['Cintura Alta de Compressão', 'Tom Vermelho Intenso', 'Elastano com Memória de Forma', 'Anti-Fricção'],
        },
        'africa-graphic-tee-smile': {
          title: 'T-Shirt Gráfica com Mapa Tipográfico de África',
          categoryLabel: 'T-Shirts Corporativas & Gráficas',
          badge: 'Serigrafia de Alta Densidade',
          clientOrContext: 'Linha de Vestuário Pan-Africana',
          description: 'T-shirt de gola redonda com serigrafia minuciosa contendo o nome de todos os países africanos formando a silhueta do continente.',
          highlights: ['100% Algodão Penteado 180g', 'Mapa com Nuvem de Palavras', 'Toque Macio ao Vestir', 'Pré-Encolhido'],
        },
        'africa-map-tshirt-walkway': {
          title: 'Sessão Urbana com T-Shirt Gráfica Continental',
          categoryLabel: 'T-Shirts Corporativas & Gráficas',
          badge: 'Estilo Urbano',
          clientOrContext: 'Coleção de Merchandising de Marca',
          description: 'Ensaio fotográfico urbano demonstrando o caimento, a consistência de cor e o detalhe gráfico sob a luz do dia.',
          highlights: ['Costura Dupla Reforçada', 'Pigmentos Resistentes', 'Algodão Natural Respirável', 'Corte Contemporâneo'],
        },
        'custom-graphic-tee-deck': {
          title: 'T-Shirt em Algodão com Estampagem Monocromática',
          categoryLabel: 'T-Shirts Corporativas & Gráficas',
          badge: 'Serigrafia de Alta Precisão',
          clientOrContext: 'Merchandising Personalizado',
          description: 'Exemplo prático de durabilidade e definição de contornos em camisolas de algodão encorpado, ideal para lançamentos e eventos institucionais.',
          highlights: ['Alto Contraste Monocromático', 'Plastisol de Toque Suave', 'Gola Indeformável', 'Tamanhos do S ao 4XL'],
        },
        'corporate-emerald-tee-back': {
          title: 'T-Shirt Corporativa Verde Esmeralda com Logótipo nas Costas',
          categoryLabel: 'T-Shirts Corporativas & Gráficas',
          badge: 'Identidade Corporativa',
          clientOrContext: 'Fardamento Oficial de Funcionários CLAPSA',
          description: 'T-shirt corporativa oficial com logótipo CLAPSA estampado a branco na nuca, assegurando uma apresentação homogénea e profissional.',
          highlights: ['Logótipo Oficial a Branco', 'Tom Verde Esmeralda', '100% Algodão Penteado', 'Fita de Reforço de Gola'],
        },
        'trace-vip-event-lanyards': {
          title: 'Fitas Lanyard VIP em Cetim Sublimado TRACE+',
          categoryLabel: 'Eventos & Brindes VIP',
          badge: 'Credenciação de Eventos VIP',
          clientOrContext: 'Festival Internacional de Música TRACE+',
          description: 'Lanyards em fita de cetim acetinada fabricados para o festival TRACE+, com tipografia nítida e texto bilingue para campanhas VIP.',
          highlights: ['Cetim de Seda Dupla Face', 'Tintas Laranja e Preto Vivas', 'Texto Bilingue da Campanha', 'Acessórios Metálicos Robustos'],
        },
        'trace-event-wristbands-qr': {
          title: 'Lanyards & Pulseiras com Código QR Interativo',
          categoryLabel: 'Eventos & Brindes VIP',
          badge: 'Códigos QR Escaneáveis',
          clientOrContext: 'Campanha Digital TRACE+',
          description: 'Estampagem sublimada de alta precisão que mantém os códigos QR 100% legíveis por telemóveis para validação de bilhetes e downloads.',
          highlights: ['Código QR Escaneável', 'Pontas Seladas a Quente', 'Fecho de Segurança', 'Capacidade para +50.000 Unidades'],
        },
        'claps-premium-gin-coaster-glass': {
          title: 'Gin Premium CLAPS & Bases de Copo Gravadas a Laser',
          categoryLabel: 'Eventos & Brindes VIP',
          badge: 'Brinde Executivo VIP',
          clientOrContext: 'Ofertas Corporativas Exclusivas',
          description: 'Pack de prestígio que associa garrafas de vidro com rotulagem personalizada a bases de madeira nobre cortadas e gravadas a laser.',
          highlights: ['Rotulagem Especial para Bebidas', 'Bases em Madeira Gravadas a Laser', 'Rolhas de Cortiça Natural', 'Apresentação em Cabaz VIP'],
        },
        'claps-gin-exhibition-showcase': {
          title: 'Stand Comercial & Mostrador de Merchandising',
          categoryLabel: 'Eventos & Brindes VIP',
          badge: 'Feiras Comerciais',
          clientOrContext: 'Feira Comercial da SADC',
          description: 'Branding integral de expositor comercial incluindo painel traseiro de grande formato e mostrador escalonado para ativações de marca.',
          highlights: ['Expositor Escalonado', 'Painel Têxtil de Grande Formato', 'Iluminação de Produto', 'Montagem Chave-na-Mão'],
        },
        'ppe-safety-glasses-gloves': {
          title: 'Óculos de Segurança Certificados & Luvas em Nitrilo',
          categoryLabel: 'EPI & Equipamento de Proteção',
          badge: 'EPI Industrial Certificado',
          clientOrContext: 'Engenharia Pesada e Proteção Laboral',
          description: 'Modelo equipada com óculos panorâmicos com proteção UV e luvas táteis revestidas a microespuma de nitrilo para manipulação segura.',
          highlights: ['Óculos UV Antiembaçamento', 'Luvas em Microespuma de Nitrilo', 'Aprovação pelas Normas SABS', 'Ajuste Ergonómico'],
        },
        'ppe-safety-gear-banner': {
          title: 'Linha Completa de Proteção Ocular e Óculos Industriais',
          categoryLabel: 'EPI & Equipamento de Proteção',
          badge: 'Certificação Dromex',
          clientOrContext: 'Conformidade de Segurança no Trabalho',
          description: 'Banner promocional ilustrando a gama de óculos de proteção Dromex com lentes incolores e fumadas para proteção contra impactos e produtos químicos.',
          highlights: ['Óculos de Proteção Dromex', 'Lentes Claras e Escuras UV', 'Fita Elástica Ajustável', 'Proteção Química e Antipoeiras'],
        },
        'security-ppe-full-kit': {
          title: 'Kit de Proteção Facial, Auditiva e Uniforme',
          categoryLabel: 'EPI & Equipamento de Proteção',
          badge: 'Kit EPI Completo',
          clientOrContext: 'Fornecimento para Minas e Segurança',
          description: 'Solução completa de proteção combinando viseira de proteção, abafadores de ruído, óculos de segurança e camisola técnica sublimada.',
          highlights: ['Viseira com Protetor Auricular', 'Óculos de Ampla Visão', 'Camisola Sublimada de Equipa', 'Conformidade com Normas SABS'],
        },
      },
    },"""

showcase_af = """    showcase: {
      badge: 'Regte Kliënte- & Produksiebeelde',
      titlePrefix: 'Kliënte-Stylgids &',
      titleHighlight: 'Produksievertoonvenster',
      subtitle: 'Blaai deur outentieke foto\\'s van werklike klere, handelsware en veiligheidstoerusting wat deur CLAPSA vervaardig, gesublimeer en gebrandmerk is.',
      tabs: {
        all: 'Alle Produksie',
        sportswear: 'Sportdrag & Sublimasie',
        apparel: 'Korporatiewe & Grafiese T-Hemde',
        gifting: 'Geleenthede & BBP-Geskenke',
        ppe: 'WBT & Veiligheidstoerusting',
      },
      clickToInspect: 'Klik om te Inspekteer',
      inspect: 'Inspekteer',
      clientContext: 'Kliënt / Projek',
      details: 'Produksiebesonderhede & Uitvoering',
      keyFeatures: 'Sleutelspesifikasies',
      inquireThisItem: 'Doen Navraag oor Hierdie Item',
      requestCustomProposal: 'Vra Pasgemaakte Voorstel Aan',
      customOrderTitle: 'Benodig u Pasgemaakte Klerasie of Handelsware?',
      customOrderSubtitle: 'Van klein pasgemaakte bestellings tot 50,000+ pan-Afrikaanse geleentheidsuitrolle, ons vervaardig, brandmerk en versprei regoor Suid-Afrika en die SAOG.',
      whatsappLookbook: 'Gesels op WhatsApp',
      requestSample: 'Vra Monster / Kwotasie Aan',
      items: {
        'activewear-hoodie-lifestyle': {
          title: 'Pasgemaakte Gesublimeerde Sportbaadjie met Rits',
          categoryLabel: 'Sportdrag & Sublimasie',
          badge: 'Volledige Sublimasie',
          clientOrContext: 'CLAPSA Sportdragreeks',
          description: 'Hoëdefinisie kleursublimasiebaadjie met treffende swart en rooi grafika en pasgemaakte webtuiste-tipografie op die regtermou.',
          highlights: ['Volle Kleursublimasie', 'Moutipografie met Webtuiste', 'Sportiewe Rits-Snit', 'Termiese Sagte Voering'],
        },
        'sublimation-tracksuit-pose': {
          title: 'Presisie Mou-Drukwerk & Sportoorpak',
          categoryLabel: 'Sportdrag & Sublimasie',
          badge: 'Moutipografie',
          clientOrContext: 'Tegniese Hoëprestasieklere',
          description: 'Uitsonderlike mikroteks- en webtuistedrukwerk op die voorarm, gekombineer met bypassende gesublimeerde kompressietights.',
          highlights: ['Skerp Mikroteks', 'Kompressietights', 'Vervaagvaste Ink', 'Asemhalende Stofmengsel'],
        },
        'athletic-activewear-runner': {
          title: 'Buitelug-Oefendrag & Prestasietights',
          categoryLabel: 'Sportdrag & Sublimasie',
          badge: 'Prestasieklerasie',
          clientOrContext: 'Fiksheid- en Spanuitrusting',
          description: 'Ontwerp vir vrye beweging met rekbare stowwe wat ideaal is vir korporatiewe welstandprogramme en sportveldtogte.',
          highlights: ['4-Rigting Rekbare Stof', 'Sportiewe Pasvorm', 'Buitelugduursaamheid', 'Versterkte Naelnate'],
        },
        'sportswear-tracksuit-motion': {
          title: 'Dinamiese Gesublimeerde Sportpak in Aksie',
          categoryLabel: 'Sportdrag & Sublimasie',
          badge: 'Gesublimeerde Stel',
          clientOrContext: 'Sportklub- & Spanafdeling',
          description: 'Volledige vertoning van die bypassende ritsbaadjie en broek, wat lewendige kleurversadiging in natuurlike sonlig toon.',
          highlights: ['Rooi en Swart Kleurpalet', 'Asemhalende Poliëster', 'Pasgemaakte Patroon', 'Totale Buigsaamheid'],
        },
        'fitness-crop-leggings': {
          title: 'Fiksheidstop & Hoëtellyf-Sporttights',
          categoryLabel: 'Sportdrag & Sublimasie',
          badge: 'Dames-Aktiewedrag',
          clientOrContext: 'Fiksheid- en Leefstylversameling',
          description: 'Gerieflike sportdragstel sonder skurende nate, gemaak met hoëdigtheid-elastane vir ferm spierondersteuning en styl.',
          highlights: ['Hoëtellyf Kompressieband', 'Helderrooi Kleurbaan', 'Vormbehoudende Spandex', 'Skuurbestande Naelnate'],
        },
        'africa-graphic-tee-smile': {
          title: 'Afrika-Kaart Tipografiese Grafiese T-Hemp',
          categoryLabel: 'Korporatiewe & Grafiese T-Hemde',
          badge: 'Hoëdigtheid Skermdruk',
          clientOrContext: 'Pan-Afrikaanse Klerereeks',
          description: 'Rondehals T-hemp met fyn skermdrukwerk van al die Afrika-lande kunstig gevorm in die silhoeët van die kontinent.',
          highlights: ['180gsm Gekamde Katoen', 'Woordwolk-Kaartontwerp', 'Sagte Handgevoel', 'Voorkrimp-Stof'],
        },
        'africa-map-tshirt-walkway': {
          title: 'Kontinentale Grafiese T-Hemp Stedelike Stylfotosessie',
          categoryLabel: 'Korporatiewe & Grafiese T-Hemde',
          badge: 'Stedelike Leefstyl',
          clientOrContext: 'Handelsmerk-Handelsware',
          description: 'Stedelike buitelug-fotosessie wat die val, kleurbalans en skerp borsdrukwerk in daglig demonstreer.',
          highlights: ['Dubbelversterkte Stikwerk', 'Vervaagvaste Kleurpigmente', 'Asemhalende Natuurlike Katoen', 'Kontemporêre Snit'],
        },
        'custom-graphic-tee-deck': {
          title: 'Monochroom Gedrukte Swaargewig Katoen T-Hemp',
          categoryLabel: 'Korporatiewe & Grafiese T-Hemde',
          badge: 'Presisie Skermdruk',
          clientOrContext: 'Pasgemaakte Handelsware',
          description: 'Gedetailleerde voorbeeld van druklanglewendheid en skerp buitelyne op stewige katoentruie vir veldtogte en instellings.',
          highlights: ['Hoë Kontras Monochroom', 'Sagte Plastisoldruk', 'Vormvaste Kraag', 'Groottes S tot 4XL'],
        },
        'corporate-emerald-tee-back': {
          title: 'Smaraggroen Korporatiewe T-Hemp met Handelsmerk op Rug',
          categoryLabel: 'Korporatiewe & Grafiese T-Hemde',
          badge: 'Korporatiewe Handelsmerk',
          clientOrContext: 'CLAPSA Personeel-Werksklere',
          description: 'Amptelike korporatiewe T-hemp met skerp wit CLAPSA-embleem op die agternek gedruk vir professionele korporatiewe eenvormigheid.',
          highlights: ['Amptelike Wit Logo-Druk', 'Smaraggroen Kleurbaan', '100% Gekamde Katoen', 'Versterkte Nekband'],
        },
        'trace-vip-event-lanyards': {
          title: 'TRACE+ BBP-Satyn Gesublimeerde Nekbande',
          categoryLabel: 'Geleenthede & BBP-Geskenke',
          badge: 'BBP-Geleentheidshandelsware',
          clientOrContext: 'TRACE+ Internasionale Musiekfees',
          description: 'Eersteklas satyn-nekbande vervaardig vir die TRACE+-musiekfees, met hoëdigtheidtipografie en tweetalige BBP-veldtogteks.',
          highlights: ['Dubbelsydige Sysatyn', 'Lewendige Oranje/Swart Ink', 'Tweetalige Veldtogteks', 'Swaardiens Metaalhakies'],
        },
        'trace-event-wristbands-qr': {
          title: 'Interaktiewe QR-Kode Toegangsnekbande & Polsbande',
          categoryLabel: 'Geleenthede & BBP-Geskenke',
          badge: 'Skandeerbare QR-Kodes',
          clientOrContext: 'TRACE+ Digitale Veldtog',
          description: 'Hoëpresisie-sublimasiedrukwerk wat mikroskopiese QR-kodes 100% skandeerbaar hou vir slimfone en kontaklose kaartjies.',
          highlights: ['Skandeerbare QR-Kode', 'Hitte-Geseëlde Punte', 'Veiligheidsklemme', 'Kapasiteit vir 50,000+ Eenhede'],
        },
        'claps-premium-gin-coaster-glass': {
          title: 'CLAPS Premium Jenewer & Laser-Gesnyde Hout-Platjies',
          categoryLabel: 'Geleenthede & BBP-Geskenke',
          badge: 'Eksklusiewe BBP-Geskenk',
          clientOrContext: 'Korporatiewe Uitvoerende Geskenke',
          description: 'Sleutelklaar luukse korporatiewe geskenkpak wat pasgemaakte drankbottels kombineer met laser-gegraveerde geometriese hout-platjies.',
          highlights: ['Pasgemaakte Bottel-Etikette', 'Laser-Gesnyde Hardehout-Platjies', 'Natuurlike Kurkafwerking', 'BBP-Mandjie-Aanbieding'],
        },
        'claps-gin-exhibition-showcase': {
          title: 'Kommersiële Uitstalstalletjie & Produkvertoonrak',
          categoryLabel: 'Geleenthede & BBP-Geskenke',
          badge: 'Handelsskoue',
          clientOrContext: 'SAOG Handels- en Handelsmerkskou',
          description: 'Volledige handelsmerkstalletjie met grootformaat-agtergronde en vlak-uitstalrakke vir handelskoue en promosie-aktiverings.',
          highlights: ['Vlak-Produkuitstalling', 'Grootformaat Stofagtergrond', 'Produkbeligting', 'Sleutelklaar Opstelling'],
        },
        'ppe-safety-glasses-gloves': {
          title: 'Gesertifiseerde Veiligheidsbrille & Nitriel-Gryphandskoene',
          categoryLabel: 'WBT & Veiligheidstoerusting',
          badge: 'Gesertifiseerde Industriële WBT',
          clientOrContext: 'Swaaringenieurswese en Veiligheid',
          description: 'Model met industriële veiligheidsbril met wye panoramiese sig en nitriel-bedekte hanteringshandskoene vir veilige werk.',
          highlights: ['Wasemvrye UV-Veiligheidsbril', 'Nitriel Mikroskuim-Handskoene', 'SABS-Voldoening', 'Ergonomiese Pasvorm'],
        },
        'ppe-safety-gear-banner': {
          title: 'Industriële Oogbeskerming & Veiligheidsbril-Reeks',
          categoryLabel: 'WBT & Veiligheidstoerusting',
          badge: 'Dromex Gesertifiseer',
          clientOrContext: 'Werkplekveiligheidsnakoming',
          description: 'Promosiebaniere wat gesertifiseerde Dromex-veiligheidsbrille met helder en getinte lense vir industriële werkplekke vertoon.',
          highlights: ['Dromex Slagbestande Brille', 'Heldere & Donker UV-Lense', 'Verstelbare Elastiese Band', 'Chemikalie- en Stofbestand'],
        },
        'security-ppe-full-kit': {
          title: 'Volledige Gesig-, Gehoor- en Veiligheidsuitrustingstel',
          categoryLabel: 'WBT & Veiligheidstoerusting',
          badge: 'Volledige WBT-Stel',
          clientOrContext: 'Sekuriteit en Industriële Werfvoorsiening',
          description: 'Omvattende persoonlike veiligheidsuitrusting wat asemhalings-, akoestiese, visuele en termiese werksbeskerming kombineer.',
          highlights: ['Gesigskerm met Oorkappies', 'Wyesig-Veiligheidsbrille', 'Gesublimeerde Spantrui', 'SABS-Goedgekeurde Toerusting'],
        },
      },
    },"""

# Let's perform precise regex replacements

# 1. Update TranslationSchema nav
text = orig.replace(schema_nav_old, schema_nav_new)

# 2. Add showcase to TranslationSchema (insert before services: {)
text = text.replace('  services: {\n    badge: string;', showcase_showcase_def_insert := (schema_showcase_def + '  services: {\n    badge: string;'))

# 3. Add lookbook to en.nav
text = text.replace("selectLanguage: 'Select Language',", "selectLanguage: 'Select Language',\n      lookbook: 'Lookbook',")

# 4. Replace en.portfolio.items
# Find portfolio items in en
en_port_start = text.find('portfolio: {')
en_port_items_start = text.find('items: {', en_port_start)
en_port_items_end = text.find('},\n    },', en_port_items_start) + 2
# Let's replace items block in en
text = text[:en_port_items_start] + portfolio_items_en + text[en_port_items_end:]

# 5. Insert showcase_en into en (before services: {)
en_services_pos = text.find('services: {', text.find('en: {'))
text = text[:en_services_pos] + showcase_en + '\n    ' + text[en_services_pos:]

# 6. Add lookbook to pt.nav
text = text.replace("selectLanguage: 'Selecionar Idioma',", "selectLanguage: 'Selecionar Idioma',\n      lookbook: 'Catálogo Visual',")

# 7. Replace pt.portfolio.items
pt_port_start = text.find('portfolio: {', text.find('pt: {'))
pt_port_items_start = text.find('items: {', pt_port_start)
pt_port_items_end = text.find('},\n    },', pt_port_items_start) + 2
text = text[:pt_port_items_start] + portfolio_items_pt + text[pt_port_items_end:]

# 8. Insert showcase_pt into pt (before services: {)
pt_services_pos = text.find('services: {', text.find('pt: {'))
text = text[:pt_services_pos] + showcase_pt + '\n    ' + text[pt_services_pos:]

# 9. Add lookbook to af.nav
text = text.replace("selectLanguage: 'Kies Taal',", "selectLanguage: 'Kies Taal',\n      lookbook: 'Stylgids',")

# 10. Replace af.portfolio.items
af_port_start = text.find('portfolio: {', text.find('af: {'))
af_port_items_start = text.find('items: {', af_port_start)
af_port_items_end = text.find('},\n    },', af_port_items_start) + 2
text = text[:af_port_items_start] + portfolio_items_af + text[af_port_items_end:]

# 11. Insert showcase_af into af (before services: {)
af_services_pos = text.find('services: {', text.find('af: {'))
text = text[:af_services_pos] + showcase_af + '\n    ' + text[af_services_pos:]

# Save
with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated translations.ts successfully!')
