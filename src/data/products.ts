export interface ProductItem {
  id: string;
  name: string;
  category: 'footwear' | 'ppe' | 'apparel' | 'display' | 'security' | 'medical';
  categoryLabel: string;
  image: string;
  indicativePrice?: string;
  moq: string; // Minimum Order Quantity
  features: string[];
  description: string;
  isPopular?: boolean;
}

export const PRODUCTS: ProductItem[] = [
  // Footwear & PPE
  {
    id: 'excavator-s3-boot',
    name: 'Excavator S3 Heavy Industrial Safety Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/excavator_s3_boot.jpeg',
    indicativePrice: 'R 2,418.00',
    moq: '10 Pairs',
    features: ['S3 Certified', 'Composite Toe Cap', 'Waterproof Full-Grain Leather', 'Slip & Heat Resistant Outsole'],
    description: 'Ultimate rugged protection engineered for heavy mining, engineering, and harsh terrain construction.',
    isPopular: true
  },
  {
    id: 'holton-s3-boot',
    name: 'Holton Classic Goodyear-Welted Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/holton_boot.jpg',
    indicativePrice: 'R 1,783.50',
    moq: '10 Pairs',
    features: ['Steel Toe Cap (200 Joules)', 'Goodyear Welt Construction', 'Oil & Acid Resistant', 'Genuine Cowhide Leather'],
    description: 'The iconic heavy-duty workhorse safety boot built for exceptional durability and long workday comfort.',
    isPopular: true
  },
  {
    id: 'mae-ladies-boot',
    name: 'Mae Ergonomic Ladies Safety Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/mae_ladies_boot.jpeg',
    indicativePrice: 'R 1,633.50',
    moq: '5 Pairs',
    features: ['Ladies Fit Specific Last', 'Steel Toe Protection', 'Cushioned EVA Midsole', 'Breathable Mesh Lining'],
    description: 'Designed specifically on a female foot mold for superior comfort in manufacturing, warehousing, and logistics.'
  },
  {
    id: 'resorption-s3-boot',
    name: 'Resorption S3 Waterproof Tactical Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/resorption_s3_boot.jpeg',
    indicativePrice: 'R 1,834.50',
    moq: '10 Pairs',
    features: ['Waterproof Membrane', 'Electrical Hazard Safe', 'Shock Absorption Heel', 'High-Traction Tread'],
    description: 'All-weather tactical and security safety boot with superior ankle support and slip protection.'
  },
  {
    id: 'kontrakta-boot',
    name: 'Kontrakta General Utility Safety Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/kontrakta_boot.jpg',
    indicativePrice: 'R 790.00',
    moq: '20 Pairs',
    features: ['Steel Toe Cap', 'Dual-Density PU Sole', 'Padded Collar', 'CE / SABS Tested'],
    description: 'Cost-effective high-volume work boot ideal for general construction, logistics, and site workers.',
    isPopular: true
  },
  {
    id: 'chelsea-dealer-boot',
    name: 'Chelsea Slip-On Dealer Safety Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/chelsea_boot.jpg',
    indicativePrice: 'R 1,290.00',
    moq: '10 Pairs',
    features: ['Elasticated Side Gussets', 'Quick Pull-On Tabs', 'Steel Toe Protection', 'Premium Nubuck Finish'],
    description: 'Executive site boot combining effortless slip-on convenience with full industrial grade safety.'
  },
  {
    id: 'non-metallic-safety-boot',
    name: 'Non-Metallic Metal-Free Airport/Substation Boot',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/non-metallic_safety_boot.jpg',
    indicativePrice: 'R 1,450.00',
    moq: '10 Pairs',
    features: ['100% Metal-Free', 'Composite Toe & Anti-Penetration Midsole', 'Anti-Static ESD', 'Scanner Friendly'],
    description: 'Engineered for electrical substations, airports, and high-security screening facilities.'
  },
  {
    id: 'radical-safety-shoe',
    name: 'Radical Low-Cut Athletic Safety Shoe',
    category: 'footwear',
    categoryLabel: 'Safety Footwear',
    image: '/images/products/radical_shoe.jpg',
    indicativePrice: 'R 980.00',
    moq: '10 Pairs',
    features: ['Sport-Style Lightweight Design', 'Steel Toe Cap', 'Breathable Textile Upper', 'Flexible PU Sole'],
    description: 'Agile and lightweight safety shoe for light manufacturing, couriers, and warehouse technicians.'
  },

  // Displays & Promo
  {
    id: 'heavy-duty-gazebo',
    name: 'Heavy-Duty 3x3m Branded Aluminum Gazebo Toolkit',
    category: 'display',
    categoryLabel: 'Branded Displays',
    image: '/images/products/gazebo_toolkit.png',
    indicativePrice: 'R 3,450.00',
    moq: '1 Unit',
    features: ['40mm Hex Aluminum Frame', 'Full-Colour Dye-Sublimation Canopy', 'Waterproof & UV Coated', 'Wheeled Carry Bag & Pegs'],
    description: 'Commercial grade pop-up marquee gazebo engineered to withstand outdoor winds and sun exposure.',
    isPopular: true
  },
  {
    id: 'promotional-fence-wrap',
    name: 'Custom Perforated PVC Fence Wrap (Per Meter)',
    category: 'display',
    categoryLabel: 'Branded Displays',
    image: '/images/products/fence_wrap.png',
    indicativePrice: 'R 185.00/m',
    moq: '20 Meters',
    features: ['Wind-Permeable Air Mesh', 'Reinforced Eyelets every 500mm', 'UV Weather Resistant', 'Vibrant Photographic Print'],
    description: 'High-impact perimeter branding for construction hoardings, sports stadiums, and outdoor festivals.'
  },
  {
    id: 'digital-pvc-pennants',
    name: 'Digital Printed PVC Triangular Pennant Bunting',
    category: 'display',
    categoryLabel: 'Branded Displays',
    image: '/images/products/pennants_pvc.png',
    indicativePrice: 'R 112.00/10m',
    moq: '50 Meters',
    features: ['Double-Sided Digital Printing', 'Heavyweight Braided Poly Rope', 'Custom Shape & Lengths', 'Fade Resistant'],
    description: 'Eye-catching festival, forecourt, and dealership boundary bunting customized to your branding.'
  },
  {
    id: 'modular-kiosk-display',
    name: 'Modular Pop-Up Promotional Sampling Kiosk',
    category: 'display',
    categoryLabel: 'Branded Displays',
    image: '/images/products/kiosk_display.png',
    indicativePrice: 'R 1,890.00',
    moq: '1 Unit',
    features: ['Lightweight Foldable Counter', 'Full Wrap-Around Graphic Panel', 'Internal Storage Shelf', 'Overhead Header Banner'],
    description: 'Portable retail counter and brand activation booth assembled in under 2 minutes without tools.'
  },

  // Protective & Medical
  {
    id: 'promax-disposable-coverall',
    name: 'PROMAX Breathable Chemical & Dust Coverall (Type 5/6)',
    category: 'ppe',
    categoryLabel: 'Protective Workwear',
    image: '/images/products/promax_coverall.jpg',
    indicativePrice: 'R 120.00',
    moq: '50 Units',
    features: ['Type 5/6 Certified Particle Barrier', 'Elasticated Hood, Cuffs & Ankles', 'Breathable Microporous Fabric', 'Lint Free'],
    description: 'Essential barrier protection for spray painting, abatement, chemical handling, and cleanrooms.'
  },
  {
    id: 'auto-dispenser-700ml',
    name: 'Commercial Automatic Touch-Free Sensor Dispenser (700ml)',
    category: 'medical',
    categoryLabel: 'Facility Hygiene',
    image: '/images/products/soap_dispenser.jpg',
    indicativePrice: 'R 700.00',
    moq: '5 Units',
    features: ['Infrared Smart Sensor', 'Liquid & Gel Compatible', 'Lockable Anti-Theft Casing', 'Wall Mount Kit Included'],
    description: 'Touchless sanitation unit designed for high-traffic office receptions, hospitals, and restrooms.'
  }
];

export const CATALOGUE_DOWNLOADS = [
  {
    title: 'Barron Corporate & Workwear Master Catalogue',
    pages: '450+ Pages',
    category: 'Apparel & Gifting',
    fileSize: '48 MB PDF',
    description: 'Comprehensive guide to executive shirts, golfers, jackets, headwear, and brandable corporate gifts.'
  },
  {
    title: 'Amrod Promotional & Tech Merchandise Catalogue',
    pages: '600+ Pages',
    category: 'Gifting & Display',
    fileSize: '65 MB PDF',
    description: 'Complete range of corporate gifts, drinkware, bags, writing instruments, and outdoor display hardware.'
  },
  {
    title: 'Industrial PPE & SABS Safety Gear Guide',
    pages: '120+ Pages',
    category: 'PPE & Industrial',
    fileSize: '22 MB PDF',
    description: 'Conti suits, high-visibility reflector wear, safety boots, respiratory, eye & hearing protection specs.'
  },
  {
    title: 'Tactical, Ballistic & Security Equipment Catalog',
    pages: '80+ Pages',
    category: 'Security & Tactical',
    fileSize: '18 MB PDF',
    description: 'Combat uniforms, ballistic armor, tactical boots, baton/cuff gear, and private security accessories.'
  }
];
