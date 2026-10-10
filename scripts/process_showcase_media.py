import os
import subprocess
from PIL import Image

SRC_IMG_DIR = r"C:\Users\Alves King Edition\Videos\XenderDownload\phone\image\2026-10"
SRC_VID_DIR = r"C:\Users\Alves King Edition\Videos\XenderDownload\phone\video\2026-10"

OUT_IMG_DIR = r"c:\Users\Alves King Edition\Documents\Project 2\clapsa\public\images\gallery"
OUT_THUMB_DIR = os.path.join(OUT_IMG_DIR, "thumbs")
OUT_VID_DIR = r"c:\Users\Alves King Edition\Documents\Project 2\clapsa\public\videos\gallery"
OUT_POSTER_DIR = os.path.join(OUT_VID_DIR, "posters")

os.makedirs(OUT_IMG_DIR, exist_ok=True)
os.makedirs(OUT_THUMB_DIR, exist_ok=True)
os.makedirs(OUT_VID_DIR, exist_ok=True)
os.makedirs(OUT_POSTER_DIR, exist_ok=True)

# Curated image mappings: (source_filename, output_slug, title, client, category, job_id, specs, tags, description)
CURATED_IMAGES = [
    # --- Group 1: Tropigalia & Gifting ---
    ("IMG-20261010-WA0001.jpg", "tropigalia-branded-pens-bulk", 
     "Tropigalia Branded Ballpoint Pens (Bulk Production)", "Tropigalia Moçambique", "gifting", "job-stationery-gifting",
     ["Precision Pad Printing", "Ergonomic Retractable Barrel", "German Black Ink Refill"],
     ["Stationery", "Pad Printing", "Tropigalia", "Pens"],
     "High-volume batch pad printing of dual-tone red/silver retractable corporate ballpoint pens for national distribution in Mozambique."),
    
    ("IMG-20261010-WA0799.jpg", "generation-equality-promo-pens",
     "Generation Equality Campaign Pens", "UN Women & Generation Equality", "gifting", "job-stationery-gifting",
     ["360° Rotary Screen Print", "Rubberized Grip", "Non-Smudge Ballpoint"],
     ["Pens", "Campaign", "Promotional", "Equality"],
     "Custom promotional ballpoint pens branded for regional civic campaigns with multi-color crisp barrel printing."),

    ("IMG-20261010-WA1065.jpg", "sports-drinkware-water-bottles",
     "Branded Sports Water Bottles (750ml)", "MLS Enterprise", "gifting", "job-stationery-gifting",
     ["BPA-Free Food-Grade Plastic", "Screen-Printed Logo", "Pull-Top Sports Valve"],
     ["Drinkware", "Water Bottles", "Screen Print", "Sports"],
     "Durable 750ml cobalt blue athletic squeeze water bottles screen-printed in opaque white for corporate wellness and athletic teams."),

    ("IMG-20261010-WA0831.jpg", "mantra-kraft-luxury-gift-bags",
     "Mantra Luxury Kraft Gift Packaging & Bags", "Mantra Lifestyle", "gifting", "job-stationery-gifting",
     ["250gsm Eco-Kraft Cardboard", "Hot Foil Stamping", "Cotton Ribbon Handles"],
     ["Packaging", "Gift Bags", "Eco Kraft", "Branding"],
     "Bespoke recyclable kraft gift carrier bags and presentation gift boxes with precision monochrome hot-stamped logo."),

    # --- Group 2: SADC Road Safety & Signage ---
    ("IMG-20261010-WA0356.jpg", "desvio-reflective-chevron-road-signs",
     "Desvio Class 2 Retro-Reflective Highway Chevron Signs", "SADC Road Maintenance & Civil", "signage", "job-road-safety-signage",
     ["Class 2 High-Intensity Prismatic Vinyl", "1.4mm Chromadek Steel", "SABS 1519 Compliant"],
     ["Road Signs", "Reflective", "Desvio", "Highway", "Chromadek"],
     "High-visibility yellow/black highway chevron detour signs engineered with Class 2 reflective honeycomb sheeting for all-weather nighttime visibility."),

    ("IMG-20261010-WA0867.jpg", "triangular-construction-hazard-signs",
     "Triangular Heavy Plant Construction Signs", "Civil Construction & Haulage", "signage", "job-road-safety-signage",
     ["Class 1 Engineering Grade Sheeting", "Tubular Steel Stand", "Weatherproof UV Overlaminate"],
     ["Road Safety", "Hazard Signs", "Construction", "Reflective"],
     "Triangular roadwork safety signs featuring heavy plant silhouette, border red warning trim, and anti-glare protective laminate."),

    ("IMG-20261010-WA1270.jpg", "galvanized-steel-signage-a-frames",
     "Galvanized Structural Signage A-Frames", "Municipal Road Maintenance", "signage", "job-road-safety-signage",
     ["Hot-Dip Galvanized Angle Iron", "Rust-Inhibiting Primer Finish", "Wind-Resistant Foldable Geometry"],
     ["Metalwork", "A-Frames", "Sign Stands", "Hardware"],
     "Fabrication and batch coating of heavy-duty foldable metal road sign support frames designed for roadside deployment."),

    ("IMG-20261010-WA0412.jpg", "heavy-duty-road-safety-traffic-cones",
     "Heavy-Duty PVC Traffic Safety Cones", "Trans-SADC Highway Patrol", "signage", "job-road-safety-signage",
     ["UV-Stabilized Flexible PVC", "360° High-Intensity Reflective Collar", "Weighted Rubber Base"],
     ["Traffic Cones", "Safety Gear", "Road Patrol", "Reflective"],
     "750mm heavy-duty traffic cones with broad weighted hexagonal rubber base and multi-band retro-reflective collars."),

    ("IMG-20261010-WA1870.jpg", "correx-weatherproof-outdoor-signboards",
     "Correx Weatherproof Outdoor Estate Signboards", "Box2Box Cleaning Services", "signage", "job-road-safety-signage",
     ["3.5mm Twin-Wall Fluted Polypropylene", "UV Digital Direct-to-Board", "Weather & Water-Resistant"],
     ["Correx", "Signboards", "Digital Print", "Outdoor"],
     "High-resolution direct digital flatbed printed Correx boards for commercial service branding and outdoor display."),

    # --- Group 3: Industrial PPE & Workwear ---
    ("IMG-20261010-WA0679.jpg", "gauteng-province-flame-retardant-conti-suits",
     "Gauteng Province Flame & Acid Conti Suits", "Gauteng Provincial Government", "ppe", "job-mining-industrial-ppe",
     ["100% Cotton D59 Flame & Acid Retardant", "High-Density Crest Embroidery", "YKK Heavy Brass Zips"],
     ["Conti Suits", "Gauteng", "SABS", "Flame Retardant", "Overalls"],
     "Heavyweight D59 flame and acid retardant two-piece workwear suits featuring official Gauteng Provincial Government embroidered emblems."),

    ("IMG-20261010-WA1821.jpg", "nifiquile-two-tone-reflective-safety-jackets",
     "Nifiquile Two-Tone High-Vis Storm Safety Jackets", "Nifiquile Civil Engineering", "ppe", "job-mining-industrial-ppe",
     ["Waterproof Oxford Polyester", "50mm SABS Silver Reflective Tape", "Quilted Thermal Lining"],
     ["Reflective", "High-Vis", "Jackets", "PPE", "Nifiquile"],
     "Dual-color hi-vis lime and charcoal storm jackets featuring 50mm reflective cross-straps, concealed storm hood, and chest identity embroidery."),

    ("IMG-20261010-WA0427.jpg", "caterpillar-sabs-steel-toe-safety-boots",
     "SABS Certified Industrial Steel-Toe Safety Boots", "Caterpillar Heavy Earthmoving", "ppe", "job-mining-industrial-ppe",
     ["Full Grain Oiled Leather", "200J Impact Steel Toe Cap", "Oil & Slip Resistant PU Sole"],
     ["Safety Boots", "Footwear", "Steel Toe", "PPE"],
     "Heavy industrial protective work boots featuring puncture-resistant steel midsole, shock-absorbing heel, and anti-static outsole."),

    ("IMG-20261010-WA0117.jpg", "heat-resistant-industrial-fireman-gloves",
     "Heat-Resistant Fireman & Welder Gloves", "ATI Fire & Safety SADC", "ppe", "job-mining-industrial-ppe",
     ["Split Cowhide Chrome Leather", "Kevlar Fire-Resistant Stitching", "Fleece Insulated Palm"],
     ["Gloves", "Fire Safety", "Welding", "PPE"],
     "Heavy-duty split cowhide safety gauntlet gloves engineered for high-temperature welding, fire suppression, and foundry handling."),

    ("IMG-20261010-WA1566.jpg", "3m-dual-cartridge-industrial-respirators",
     "3M Half-Face Dual-Cartridge Industrial Respirators", "Chemical & Mining Plant Division", "ppe", "job-mining-industrial-ppe",
     ["Silicone Face Seal", "Replaceable Organic Vapor/Particulate Filters", "Adjustable 4-Point Harness"],
     ["Respirators", "Masks", "3M", "Mining PPE"],
     "Ergonomic half-mask reusable respirators with dual bayonet filter connections for gas, vapor, and particulate hazardous environments."),

    ("IMG-20261010-WA0593.jpg", "cai-wall-mounted-metal-first-aid-kits",
     "CAI Industrial Metal First Aid Emergency Stations", "CAI Industrial Corporation", "ppe", "job-mining-industrial-ppe",
     ["Powder-Coated Enamelled Steel Casing", "Screen-Printed Cross & Crest", "Lockable Internal Shelving"],
     ["First Aid", "Medical", "Safety", "Metal Cabinets"],
     "Heavy-gauge lockable wall-mounted metal emergency medical kits fully pre-packed to SABS Factory Regulation 3 medical standards."),

    # --- Group 4: SADC Diplomatic & Corporate Embroidery ---
    ("IMG-20261010-WA0551.jpg", "mera-malawi-energy-regulatory-uniforms",
     "MERA Malawi Energy Authority Corporate Uniforms", "Malawi Energy Regulatory Authority (MERA)", "apparel", "job-diplomatic-embroidery",
     ["Poly-Cotton Twill Weave", "50,000-Stitch Multicolor Crest", "Reinforced Triple Stitching"],
     ["MERA", "Embroidery", "Uniforms", "Malawi", "Government"],
     "High-spec institutional uniforms featuring intricate circular multicolor emblem embroidery executed on multi-head Tajima embroidery carousels."),

    ("IMG-20261010-WA0919.jpg", "g4s-security-tactical-ballistic-vests",
     "G4S Security Tactical Ballistic Carrier Vests", "G4S Secure Solutions SADC", "apparel", "job-diplomatic-embroidery",
     ["1000D Cordura Ballistic Nylon", "High-Density 3D Red/White Thread Embroidery", "Adjustable Velcro Cummerbund"],
     ["G4S", "Tactical", "Security", "Embroidery", "Vest"],
     "Custom ballistic armor carrier vests embroidered with official G4S security typography and insignias for SADC cash-in-transit personnel."),

    ("IMG-20261010-WA0715.jpg", "mozambique-corporate-work-shirts",
     "Mozambique Industrial Facility Button-Down Work Shirts", "Mozam Bio Energy", "apparel", "job-diplomatic-embroidery",
     ["65/35 Heavy Twill Blend", "Multi-Head Direct Embroidery", "Button-Down Collar & Chest Pocket"],
     ["Work Shirts", "Embroidery", "Mozambique", "Tajima"],
     "Corporate short-sleeve work shirts photographed directly at the Tajima embroidery machines with precision company branding."),

    ("IMG-20261010-WA0536.jpg", "soges-tailored-executive-work-shirts",
     "SOGES Tailored Corporate Button-Down Shirts", "SOGES Mozambique", "apparel", "job-diplomatic-embroidery",
     ["100% Breathable Cotton Twill", "Subtle Flap Pocket Embroidery", "Reinforced Shoulder Yoke"],
     ["Corporate", "SOGES", "Embroidery", "Workwear"],
     "Executive corporate button-down shirts with custom pocket and collar branding for engineering and logistics administrative staff."),

    ("IMG-20261010-WA1316.jpg", "executive-pique-golf-shirts-embroidery",
     "Executive Pique Cotton Golf Shirts (Dual-Tone)", "Corporate Executive Summit", "apparel", "job-diplomatic-embroidery",
     ["220gsm Combed Pique Cotton", "Subtle Tonal Crest Embroidery", "Ribbed Collar & Sleeve Cuffs"],
     ["Golf Shirts", "Polos", "Embroidery", "Corporate"],
     "Premium 220gsm combed cotton golf shirts with fine-gauge chest embroidery and side slits for executive conferences."),

    ("IMG-20261010-WA1717.jpg", "insida-corporate-golf-shirts-and-caps",
     "INSIDA Corporate Golf Shirts & 6-Panel Caps Combo", "INSIDA Global", "apparel", "job-diplomatic-embroidery",
     ["180gsm Polyester Moisture-Wick", "Matched Embroidered Caps", "Heat-Transfer Sleeve Accents"],
     ["Combo Kit", "Polos", "Caps", "INSIDA"],
     "Complete corporate uniform starter packs including matching golf shirts and 6-panel brushed cotton baseball caps."),

    # --- Group 5: High-Volume Screen Printing & DTF ---
    ("IMG-20261010-WA0247.jpg", "albany-bakeries-promo-tshirts",
     "Albany Bakeries High-Volume Screen-Printed Tees", "Albany Bakeries South Africa", "printing", "job-screen-printing-dtf",
     ["100% Carded Cotton 160gsm", "Plastisol Multi-Color Screen Print", "Heat-Tunnel Cured for Zero Washout"],
     ["Albany", "Screen Printing", "T-Shirts", "High-Volume"],
     "Bulk production run of red promotional t-shirts printed with Albany Bakeries diamond logo on high-speed textile carousel presses."),

    ("IMG-20261010-WA1038.jpg", "move-for-youth-marathon-tshirts",
     "Move For Youth Charity Marathon Bulk Runner Shirts", "Youth Sports & Charity Initiative", "printing", "job-screen-printing-dtf",
     ["140gsm Breathable Poly-Cotton", "Discharge & Plastisol Hybrid Print", "Double Needle Sleeve & Waist"],
     ["Marathon", "Charity", "Screen Print", "T-Shirts"],
     "Over 5,000 bright red charity marathon shirts stacked and sorted by size after passing through automated drying tunnels."),

    ("IMG-20261010-WA0271.jpg", "unhcr-humanitarian-blue-tshirts",
     "UNHCR / Refugiados Blue Humanitarian Event Shirts", "UNHCR Regional Mission", "printing", "job-screen-printing-dtf",
     ["160gsm Ringspun Combed Cotton", "High-Opacity White Rubber Ink Screen Print", "SABS Certified Dyes"],
     ["UNHCR", "Humanitarian", "Blue Tees", "Screen Print"],
     "Cobalt blue humanitarian relief t-shirts screen-printed with the iconic white ribbon and UNHCR mission emblems."),

    ("IMG-20261010-WA0050.jpg", "humaniti-dtf-screen-transfers-gang-sheet",
     "Humaniti DTF Heat Transfer Prints (Mass Production)", "Humaniti Apparel Brand", "printing", "job-screen-printing-dtf",
     ["Cold-Peel PET Film Base", "High-Elasticity Polyurethane Ink", "Fine-Grain Hot Melt Adhesive Powder"],
     ["DTF", "Heat Transfers", "Gang Sheets", "Printing"],
     "Massive gang-sheet print run of high-stretch black-and-white heat transfer graphics curing on drying racks prior to apparel application."),

    ("IMG-20261010-WA0239.jpg", "hospitality-custom-screenprinted-aprons",
     "Hospitality Heavy Canvas Aprons with Custom Graphics", "Alison Catering & Culinary", "printing", "job-screen-printing-dtf",
     ["10-Ounce 100% Cotton Duck Canvas", "Direct Screen Print & Heat Cured", "Dual Pockets & Brass Grommets"],
     ["Aprons", "Hospitality", "Screen Print", "Canvas"],
     "Sturdy tan duck canvas culinary aprons custom screen-printed with dual-color crest and heat-cured with heat gun inspection."),

    ("IMG-20261010-WA0973.jpg", "soul-mate-typography-fashion-tshirts",
     "Soul Mate Typography Graphic Fashion T-Shirts", "Soul Mate Fashion Line", "printing", "job-screen-printing-dtf",
     ["180gsm Heavyweight Combed Cotton", "High-Build Textured Screen Print", "Pre-Shrunk Luxury Fabric"],
     ["Fashion", "Streetwear", "Typography", "Screen Print"],
     "Heavyweight streetwear graphic tees featuring inverted 3D high-density white typography on jet-black blanks."),

    ("IMG-20261010-WA0921.jpg", "heavyweight-fleece-graphic-hoodies",
     "Heavyweight Brushed Fleece Graphic Streetwear Hoodies", "Urban Streetwear Label", "printing", "job-screen-printing-dtf",
     ["320gsm Brushed Cotton Fleece", "Oversized Multi-Placement Screen Print", "Kangaroo Pocket & Metal Aglets"],
     ["Hoodies", "Fleece", "Streetwear", "Screen Print"],
     "Plush 320gsm fleece hoodies with multi-color sleeve and back graphic screen prints for winter apparel launches."),

    # --- Group 6: Brand Activation, Gazebos & Fleet Wraps ---
    ("IMG-20261010-WA1337.jpg", "elaxo-sublimated-gazebo-and-tablecloth",
     "ELAXO Sublimated Waterproof Event Gazebo & Tablecloth", "ELAXO & Owara Corporate", "display", "job-brand-activation-fleet",
     ["600D Waterproof PU-Coated Polyester", "Hexagonal 40mm Aluminum Frame", "All-Over Dye Sublimation"],
     ["Gazebo", "Tablecloth", "ELAXO", "Sublimation", "Outdoor"],
     "3m x 3m heavy-duty commercial pop-up gazebo with custom dye-sublimated canopy, side walls, matching fitted stretch tablecloth, and branded caps."),

    ("IMG-20261010-WA0885.jpg", "construcoes-karina-teardrop-event-flags",
     "Construções Karina Teardrop & Feather Event Flags", "Construções Karina Lda", "display", "job-brand-activation-fleet",
     ["115gsm Knitted Polyester Flag Fabric", "Reinforced Fiberglass Telescopic Pole", "Full-Penetration Dye Sublimation"],
     ["Flags", "Teardrop", "Karina", "Display"],
     "3.5m and 4.5m outdoor teardrop branding flags photographed directly inside the printing and finishing assembly department."),

    ("IMG-20261010-WA0372.jpg", "pyb-commercial-vehicle-vinyl-branding",
     "PYB Commercial Fleet Vehicle Decals & Vinyl Wrap", "PYB Logistics Group", "signage", "job-brand-activation-fleet",
     ["Cast Polymeric Automotive Vinyl", "Gloss Anti-Scratch UV Overlaminate", "Contour-Cut Digital Print"],
     ["Vehicle Branding", "Car Decals", "Fleet", "Vinyl"],
     "Full side-door and quarter-panel commercial vehicle branding applied in our covered vehicle wrapping bay."),

    ("IMG-20261010-WA1229.jpg", "sadc-utility-fleet-bakkie-graphics",
     "SADC Cross-Border Utility Bakkie Fleet Graphics", "SADC Cross-Border Operations", "signage", "job-brand-activation-fleet",
     ["Reflective Contour Markings (ECE 104)", "Polymeric Fleet Vinyl", "Precision Plotter Cutting"],
     ["Bakkie", "Fleet Graphics", "Vehicle Wrap", "Reflective"],
     "Canopy and door livery installation on utility bakkies complying with cross-border SADC commercial vehicle visibility regulations."),

    ("IMG-20261010-WA0144.jpg", "siemens-matla-satin-sublimated-lanyards",
     "Siemens & Matla Dual-Sided Sublimated Satin Lanyards", "Siemens South Africa & Matla", "gifting", "job-brand-activation-fleet",
     ["20mm Soft Smooth Satin Polyester", "Heavy-Duty Lobster Claw Clasp", "Quick-Release Safety Breakaway Buckle"],
     ["Lanyards", "Siemens", "Sublimation", "Event Merchandise"],
     "Precision full-color dye-sublimated conference lanyards with metal swivel hooks and safety breakaway buckles for industrial summit attendees."),

    ("IMG-20261010-WA0849.jpg", "trax-heavy-duty-industrial-safety-lanyards",
     "Trax Industrial High-Visibility Woven Safety Lanyards", "Trax Rail & Logistics", "gifting", "job-brand-activation-fleet",
     ["High-Tensile Jacquard Woven Webbing", "High-Vis Neon Orange & Black Contrast", "Steel Swivel Dog-Clip"],
     ["Lanyards", "Trax", "Industrial", "Safety Gear"],
     "High-tensile heavy-duty industrial lanyards engineered for harsh rail, port, and logistics terminal working conditions."),

    ("IMG-20261010-WA0041.jpg", "commercial-tension-fabric-arch-displays",
     "Commercial Tension Fabric Arch Displays & Backdrops", "Event & Trade Exposition Group", "display", "job-brand-activation-fleet",
     ["Tension Stretch Fabric (260gsm)", "Lightweight Snap-Lock Aluminum Frame", "Double-Sided High-Definition Sublimation"],
     ["Arch Display", "Exhibition", "Trade Show", "Backdrop"],
     "Freestanding modular curved tension-fabric branding arches engineered for indoor retail showrooms and exhibition halls."),

    # --- Group 7: Headwear & Caps ---
    ("IMG-20261010-WA0697.jpg", "california-vintage-mesh-trucker-cap",
     "California Vintage Foam Trucker Cap (Orange/White)", "California Apparel Line", "apparel", "job-custom-headwear",
     ["Polyester Foam Front & Nylon Mesh Back", "High-Definition 2-Color Screen Print", "Adjustable Plastic Snap Closure"],
     ["Caps", "Trucker", "Headwear", "Vintage"],
     "Classic 5-panel retro foam trucker cap with breathable nylon rear mesh and custom palm tree front panel graphic."),

    ("IMG-20261010-WA1086.jpg", "1982-retro-mesh-trucker-caps",
     "1982 Retro Dual-Tone Pink & White Trucker Caps", "1982 Heritage Collective", "apparel", "job-custom-headwear",
     ["Contrast Curved Visor", "Foam Front Panel with Screen-Printed Crest", "Breathable Rear Mesh Panels"],
     ["Caps", "Trucker", "Headwear", "1982"],
     "Dual-tone retro trucker caps in vibrant hot-pink and clean white with centered circular vintage year emblem."),

    ("IMG-20261010-WA0283.jpg", "presidential-campaign-caps-and-packs",
     "Civic Election Campaign Caps & Drawstring Backpacks", "National Civic Electoral Campaign", "apparel", "job-custom-headwear",
     ["Heavy Brushed Cotton 6-Panel Caps", "Matching 210D Polyester Drawstring Packs", "3D Front Panel Screen Printing"],
     ["Campaign", "Caps", "Drawstring Bags", "Election"],
     "Complete political and civic campaign package including matching screen-printed red caps, t-shirts, and water-resistant drawstring backpacks."),

    # --- Group 8: Turnkey Freight & Production Infrastructure ---
    ("IMG-20261010-WA0903.jpg", "shipping-container-clapsa-export-freight",
     "40ft Shipping Container Loaded with CLAPSA Export Freight", "SADC Cross-Border Logistics", "apparel", "job-sadc-export-logistics",
     ["Heavy-Duty Multi-Wall Export Cartons", "Cross-Border Phytosanitary & Customs Clearance", "Palletized & Strapped Secure Cargo"],
     ["Logistics", "Export", "Shipping Container", "SADC Freight"],
     "Full 40ft maritime shipping container packed with CLAPSA branded cartons ready for cross-border dispatch to Maputo and Gaborone."),

    ("IMG-20261010-WA1920.jpg", "tamper-evident-high-security-transit-bags",
     "Tamper-Evident High-Security Courier Bags", "Secure Financial & Document Transit", "gifting", "job-sadc-export-logistics",
     ["Multi-Layer Co-Extruded Polyethylene", "Permanent Void-Tape Tamper Evident Closure", "Unique Barcode & Sequenced Numbering"],
     ["Security Bags", "Tamper Evident", "Packaging", "Transit"],
     "High-security courier bags engineered with tamper-evident void tape and unique tracking barcodes for confidential SADC shipments."),

    ("IMG-20261010-WA1202.jpg", "claps-premium-gin-custom-packaging",
     "CLAPS Premium Gin Custom Spirits Presentation & Labeling", "CLAPS Spirits & Beverage Co.", "gifting", "job-sadc-export-logistics",
     ["Embossed Textured Synthetic Label Paper", "Gold Hot-Foil Stamping & Die-Cut Finish", "Natural Wood-Top Synthetic Cork Seal"],
     ["Packaging", "Beverage", "Claps Gin", "Labels"],
     "Bespoke label design, gold-foil stamping, and bottle presentation packaging for CLAPS Premium Gin signature reserve."),

    ("IMG-20261010-WA1693.jpg", "touchless-sanitizer-pedal-stations",
     "Powder-Coated Industrial Touchless Sanitizer Pedal Stations", "SADC Public Health Infrastructure", "signage", "job-sadc-export-logistics",
     ["Heavy 2mm Powder-Coated Mild Steel", "Mechanical Foot Pedal Actuator", "Lockable Internal Bottle Shroud"],
     ["Metalwork", "Sanitizer Stand", "Pedal Station", "Safety"],
     "Fabrication, welding, and high-gloss red powder-coating of hands-free mechanical foot pedal sanitizer dispensing stations.")
]

# Curated Video reels mappings: (source_filename, output_slug, title, client, category, job_id, duration_desc, specs, description)
CURATED_VIDEOS = [
    ("VID-20261010-WA0003.mp4", "clapsa-carousel-screen-printing-reel",
     "High-Speed Carousel Screen Printing in Motion", "CLAPSA Screen Printing Department", "printing", "job-screen-printing-dtf",
     "11s High-Definition Reel",
     ["Automated Textile Carousel", "Multi-Color Wet-on-Wet Printing", "Plastisol Ink Registration"],
     "Live workshop footage showing precision squeegee pressure and multicolor alignment on black cotton blanks."),

    ("VID-20261010-WA0038.mp4", "clapsa-safety-showroom-and-retail-display",
     "CLAPSA Safety Equipment & Signage Retail Display", "CLAPSA Safety Division", "ppe", "job-road-safety-signage",
     "27s Showroom Walkthrough",
     ["SABS Safety Hard Hats", "Class 2 Retro-Reflective Signage", "High-Visibility Display Shelving"],
     "Comprehensive video tour of the CLAPSA safety gear showroom highlighting hard hats, warning signs, and protective clothing."),

    ("VID-20261010-WA0085.mp4", "precision-textile-squeegee-printing-stroke",
     "Precision Textile Squeegee Stroke & Ink Transfer", "CLAPSA Print Studio", "printing", "job-screen-printing-dtf",
     "17s Slow-Motion Reel",
     ["70-Durometer Polyurethane Squeegee", "High-Opacity White Textile Ink", "Monofilament Polyester Mesh"],
     "Macro close-up capturing uniform ink deposit through tensioned mesh onto corporate promotional apparel."),

    ("VID-20261010-WA0097.mp4", "luxury-boutique-paper-bag-assembly",
     "Luxury Boutique Carrier Bag Hand-Assembly & QC", "Mantra & Retail Packaging Clients", "gifting", "job-stationery-gifting",
     "14s Craftsmanship Reel",
     ["Reinforced Cardboard Base & Turn-Top", "Pure Cotton Cord Rope Handles", "Rigorous Weight-Bearing Quality Check"],
     "Detailed craft inspection of laminated luxury gift bags ensuring clean fold lines and reinforced handle anchors."),

    ("VID-20261010-WA0316.mp4", "automated-pallet-stretch-wrapping-dispatch",
     "Automated Pallet Wrapping & Freight Preparation", "CLAPSA Logistics Dispatch Hub", "apparel", "job-sadc-export-logistics",
     "10s Freight Reel",
     ["High-Yield Cast Stretch Film", "Corner Edge Board Protection", "Weather-Sealed Export Stacking"],
     "Automated turntable wrapping machine enclosing finished bulk apparel cartons ready for cross-border freight."),

    ("VID-20261010-WA0511.mp4", "clapsa-headquarters-sandton-facility-walkthrough",
     "CLAPSA Sandton Headquarters & Executive Entry", "CLAPSA Commercial Operations", "apparel", "job-diplomatic-embroidery",
     "15s Facility Reel",
     ["Architectural Glass Entry", "Modern Executive Production Offices", "Integrated Showroom Corridor"],
     "Interior walkthrough entering the Sandton headquarters showcasing corporate branding and modern client meeting spaces."),

    ("VID-20261010-WA0745.mp4", "high-visibility-storm-parka-jacket-inspection",
     "High-Vis SABS Waterproof Storm Parka Jacket Inspection", "Civil & Mining Client Workwear", "ppe", "job-mining-industrial-ppe",
     "15s Inspection Reel",
     ["100% Waterproof Seam-Sealed Outer Shell", "Heavy Silver Reflective Bands", "Embroidered Left-Chest Crest"],
     "Detailed garment inspection displaying heavy-duty zippers, storm flaps, and high-visibility reflective striping."),

    ("VID-20261010-WA1149.mp4", "toyota-forklift-loading-freight-trucks",
     "Forklift Logistics Loading Transport Flatbeds", "CLAPSA Warehousing & Dispatch Yard", "apparel", "job-sadc-export-logistics",
     "9s Yard Logistics Reel",
     ["Industrial Toyota 3-Ton Forklift", "Interstate Flatbed Transport Rig", "Cross-Border Dispatch Staging"],
     "Active warehouse yard footage of palletized corporate orders being loaded onto regional transport trucks.")
]

print(f"Processing {len(CURATED_IMAGES)} curated images to WebP...")

# 1. Process Images to WebP (Full & Thumbnail)
for src_name, slug, title, client, category, job_id, specs, tags, desc in CURATED_IMAGES:
    src_path = os.path.join(SRC_IMG_DIR, src_name)
    if not os.path.exists(src_path):
        print(f"Warning: {src_name} not found!")
        continue
    
    out_full = os.path.join(OUT_IMG_DIR, f"{slug}.webp")
    out_thumb = os.path.join(OUT_THUMB_DIR, f"{slug}.webp")
    
    try:
        with Image.open(src_path) as img:
            # Convert to RGB (in case of RGBA/P)
            rgb_img = img.convert("RGB")
            
            # Save full image (max 1280px on long edge, quality 82)
            full_img = rgb_img.copy()
            full_img.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
            full_img.save(out_full, format="WEBP", quality=82, method=6)
            
            # Save thumbnail (max 420px on long edge, quality 75)
            thumb_img = rgb_img.copy()
            thumb_img.thumbnail((420, 420), Image.Resampling.LANCZOS)
            thumb_img.save(out_thumb, format="WEBP", quality=75, method=6)
            
            full_size_kb = os.path.getsize(out_full) / 1024
            thumb_size_kb = os.path.getsize(out_thumb) / 1024
            print(f"[OK] {slug}.webp (Full: {full_size_kb:.1f}KB, Thumb: {thumb_size_kb:.1f}KB)")
    except Exception as e:
        print(f"Error processing {src_name}: {e}")

print(f"\nProcessing {len(CURATED_VIDEOS)} curated videos...")

# 2. Process Videos (Compress with ffmpeg to 720p/crf 28, generate poster WebP)
for src_name, slug, title, client, category, job_id, dur_desc, specs, desc in CURATED_VIDEOS:
    src_path = os.path.join(SRC_VID_DIR, src_name)
    if not os.path.exists(src_path):
        print(f"Warning: {src_name} not found!")
        continue
        
    out_vid = os.path.join(OUT_VID_DIR, f"{slug}.mp4")
    out_poster = os.path.join(OUT_POSTER_DIR, f"{slug}.webp")
    
    # 2a. Extract poster frame at 1.5s
    temp_poster_jpg = os.path.join(OUT_POSTER_DIR, f"{slug}_temp.jpg")
    cmd_poster = [
        "ffmpeg", "-y", "-ss", "00:00:01.5", "-i", src_path,
        "-vframes", "1", "-q:v", "2", temp_poster_jpg
    ]
    subprocess.run(cmd_poster, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    if os.path.exists(temp_poster_jpg):
        with Image.open(temp_poster_jpg) as p_img:
            p_rgb = p_img.convert("RGB")
            p_rgb.thumbnail((640, 640), Image.Resampling.LANCZOS)
            p_rgb.save(out_poster, format="WEBP", quality=80)
        os.remove(temp_poster_jpg)
    
    # 2b. Transcode/compress video to mp4 with H.264, scale to max 720p, crf 28, faststart for streaming
    cmd_transcode = [
        "ffmpeg", "-y", "-i", src_path,
        "-vf", "scale='min(720,iw)':-2",
        "-c:v", "libx264", "-crf", "28", "-preset", "fast",
        "-c:a", "aac", "-b:a", "96k",
        "-movflags", "+faststart",
        out_vid
    ]
    subprocess.run(cmd_transcode, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    if os.path.exists(out_vid):
        vid_size_mb = os.path.getsize(out_vid) / (1024 * 1024)
        print(f"[OK] Video: {slug}.mp4 ({vid_size_mb:.2f}MB)")

print("\nAll curated media processed successfully!")
