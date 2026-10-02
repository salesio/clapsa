'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS, PARTNERS, PortfolioItem } from '@/data/portfolio';
import { PRODUCTS, CATALOGUE_DOWNLOADS, ProductItem } from '@/data/products';
import { COMPANY, SERVICES } from '@/data/company';

export interface HeroData {
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  subtitle: string;
  checkpoints: string[];
  featuredProject: {
    title: string;
    description: string;
    tag: string;
    image: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
}

export interface PartnerItem {
  name: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  tag: string;
  description: string;
  features: string[];
}

export interface CompanyData {
  name: string;
  legalName: string;
  tagline: string;
  summary: string;
  phoneDisplay: string;
  phoneDirect: string;
  landline: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  salesEmail: string;
  address: string;
  regionServed: string;
}

export interface CMSData {
  hero: HeroData;
  partners: PartnerItem[];
  portfolio: PortfolioItem[];
  services: ServiceItem[];
  products: ProductItem[];
  company: CompanyData;
}

export const DEFAULT_HERO_DATA: HeroData = {
  badge: 'One Source Supply Solutions • South Africa & SADC',
  headlinePrefix: 'Elevate Your Workforce & Brand with',
  headlineHighlight: 'Precision Procurement',
  subtitle: 'We engineer and deliver turnkey Corporate Uniforms, Certified Industrial PPE, High-Impact Outdoor Displays, and VIP Merchandise for Africa’s leading enterprises.',
  checkpoints: [
    'SABS & ISO Standard Compliant Gear',
    'In-House High-Density Embroidery',
    'Bulk Wholesale Corporate Contracts',
    'Cross-Border SADC Rapid Freight'
  ],
  featuredProject: {
    title: 'Custom Branded Winter Jackets & Technical Workwear',
    description: 'Turnkey employee uniform programs with high-density precision embroidery.',
    tag: 'Custom Corporate Apparel',
    image: '/images/media/Unknown1.jpg',
    stat1: { value: '98%', label: 'Satisfaction' },
    stat2: { value: '1,500+', label: 'Deployments' },
    stat3: { value: 'SADC', label: 'Logistics' },
  }
};

const DEFAULT_CMS_DATA: CMSData = {
  hero: DEFAULT_HERO_DATA,
  partners: PARTNERS,
  portfolio: PORTFOLIO_ITEMS,
  services: SERVICES,
  products: PRODUCTS,
  company: COMPANY,
};

interface ContentContextType {
  data: CMSData;
  updateHero: (hero: Partial<HeroData>) => void;
  // Partners
  addPartner: (partner: PartnerItem) => void;
  updatePartner: (index: number, partner: PartnerItem) => void;
  deletePartner: (index: number) => void;
  // Portfolio
  addPortfolioItem: (item: PortfolioItem) => void;
  updatePortfolioItem: (id: string, item: Partial<PortfolioItem>) => void;
  deletePortfolioItem: (id: string) => void;
  // Services
  updateService: (id: string, item: Partial<ServiceItem>) => void;
  addService: (service: ServiceItem) => void;
  deleteService: (id: string) => void;
  // Products
  addProduct: (product: ProductItem) => void;
  updateProduct: (id: string, product: Partial<ProductItem>) => void;
  deleteProduct: (id: string) => void;
  // Company
  updateCompany: (company: Partial<CompanyData>) => void;
  // Utilities
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (jsonStr: string) => boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CMSData>(DEFAULT_CMS_DATA);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('clapsa_cms_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error('Failed to load saved CMS data:', e);
    }
    setLoaded(true);
  }, []);

  const saveToStorage = (newData: CMSData) => {
    setData(newData);
    try {
      localStorage.setItem('clapsa_cms_data', JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save CMS data to storage:', e);
    }
  };

  const updateHero = (heroUpdates: Partial<HeroData>) => {
    const updated = {
      ...data,
      hero: { ...data.hero, ...heroUpdates }
    };
    saveToStorage(updated);
  };

  // Partners CRUD
  const addPartner = (partner: PartnerItem) => {
    const updated = {
      ...data,
      partners: [...data.partners, partner]
    };
    saveToStorage(updated);
  };

  const updatePartner = (index: number, partner: PartnerItem) => {
    const newPartners = [...data.partners];
    newPartners[index] = partner;
    saveToStorage({ ...data, partners: newPartners });
  };

  const deletePartner = (index: number) => {
    const newPartners = data.partners.filter((_, i) => i !== index);
    saveToStorage({ ...data, partners: newPartners });
  };

  // Portfolio CRUD
  const addPortfolioItem = (item: PortfolioItem) => {
    saveToStorage({
      ...data,
      portfolio: [item, ...data.portfolio]
    });
  };

  const updatePortfolioItem = (id: string, itemUpdates: Partial<PortfolioItem>) => {
    const newPortfolio = data.portfolio.map((item) =>
      item.id === id ? { ...item, ...itemUpdates } : item
    );
    saveToStorage({ ...data, portfolio: newPortfolio });
  };

  const deletePortfolioItem = (id: string) => {
    const newPortfolio = data.portfolio.filter((item) => item.id !== id);
    saveToStorage({ ...data, portfolio: newPortfolio });
  };

  // Services CRUD
  const updateService = (id: string, serviceUpdates: Partial<ServiceItem>) => {
    const newServices = data.services.map((item) =>
      item.id === id ? { ...item, ...serviceUpdates } : item
    );
    saveToStorage({ ...data, services: newServices });
  };

  const addService = (service: ServiceItem) => {
    saveToStorage({
      ...data,
      services: [...data.services, service]
    });
  };

  const deleteService = (id: string) => {
    const newServices = data.services.filter((s) => s.id !== id);
    saveToStorage({ ...data, services: newServices });
  };

  // Products CRUD
  const addProduct = (product: ProductItem) => {
    saveToStorage({
      ...data,
      products: [product, ...data.products]
    });
  };

  const updateProduct = (id: string, productUpdates: Partial<ProductItem>) => {
    const newProducts = data.products.map((p) =>
      p.id === id ? { ...p, ...productUpdates } : p
    );
    saveToStorage({ ...data, products: newProducts });
  };

  const deleteProduct = (id: string) => {
    const newProducts = data.products.filter((p) => p.id !== id);
    saveToStorage({ ...data, products: newProducts });
  };

  // Company Info
  const updateCompany = (companyUpdates: Partial<CompanyData>) => {
    saveToStorage({
      ...data,
      company: { ...data.company, ...companyUpdates }
    });
  };

  const resetToDefaults = () => {
    saveToStorage(DEFAULT_CMS_DATA);
  };

  const exportJSON = () => {
    return JSON.stringify(data, null, 2);
  };

  const importJSON = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && parsed.hero && parsed.portfolio && parsed.products) {
        saveToStorage(parsed);
        return true;
      }
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return (
    <ContentContext.Provider
      value={{
        data,
        updateHero,
        addPartner,
        updatePartner,
        deletePartner,
        addPortfolioItem,
        updatePortfolioItem,
        deletePortfolioItem,
        updateService,
        addService,
        deleteService,
        addProduct,
        updateProduct,
        deleteProduct,
        updateCompany,
        resetToDefaults,
        exportJSON,
        importJSON,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
