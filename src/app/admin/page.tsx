'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useContent, PartnerItem } from '@/context/ContentContext';
import { PortfolioItem } from '@/data/portfolio';
import { ProductItem } from '@/data/products';
import { useTheme } from '@/context/ThemeContext';
import ImagePickerField from '@/components/admin/ImagePickerField';
import { getAssetPath } from '@/utils/assetPath';
import { 
  LayoutDashboard, 
  Sparkles, 
  Building2, 
  Briefcase, 
  Layers, 
  Package, 
  Phone, 
  Save, 
  Plus, 
  Trash2, 
  Edit3, 
  ArrowLeft, 
  RotateCcw, 
  Download, 
  Upload, 
  CheckCircle2, 
  Sun, 
  Moon,
  ExternalLink,
  Image as ImageIcon,
  X,
  Check,
  PlusCircle
} from 'lucide-react';

type AdminTab = 'hero' | 'partners' | 'portfolio' | 'services' | 'products' | 'contact' | 'backup';

const CATEGORY_LABELS: Record<string, string> = {
  corporate: 'Corporate Apparel',
  ppe: 'Industrial PPE & Safety',
  display: 'Branded Displays & Signage',
  security: 'Tactical & Security',
  gifting: 'Corporate Gifting'
};

const PRODUCT_CATEGORY_LABELS: Record<string, string> = {
  footwear: 'Safety Footwear',
  display: 'Branded Displays',
  ppe: 'Protective Workwear / PPE',
  apparel: 'Corporate Apparel',
  security: 'Tactical & Security',
  medical: 'Facility Hygiene'
};

export default function AdminControlPanel() {
  const { 
    data, 
    updateHero, 
    addPartner, 
    updatePartner, 
    deletePartner,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    updateService,
    addProduct,
    updateProduct,
    deleteProduct,
    updateCompany,
    resetToDefaults,
    exportJSON,
    importJSON
  } = useContent();

  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<AdminTab>('hero');
  const [savedNotice, setSavedNotice] = useState(false);

  // Form states
  const [heroForm, setHeroForm] = useState(data.hero);
  const [companyForm, setCompanyForm] = useState(data.company);

  // Portfolio modal / form state
  const [editingPortfolioItem, setEditingPortfolioItem] = useState<PortfolioItem | null>(null);
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    id: '',
    title: '',
    client: '',
    category: 'corporate' as const,
    categoryLabel: 'Corporate Apparel',
    image: '/images/media/Unknown1.jpg',
    description: '',
    deliverables: ['', '', '', ''],
    year: '2025',
    location: 'Johannesburg, South Africa',
    tag: 'Corporate Wardrobe'
  });

  // Product modal / form state
  const [editingProductItem, setEditingProductItem] = useState<ProductItem | null>(null);
  const [newProductItem, setNewProductItem] = useState({
    id: '',
    name: '',
    category: 'footwear' as const,
    categoryLabel: 'Safety Footwear',
    image: '/images/products/excavator_s3_boot.jpeg',
    indicativePrice: 'R 1,500.00',
    moq: '10 Pairs',
    features: ['SABS Certified', 'Steel Toe Cap', 'Slip Resistant', 'Oil Resistant'],
    description: '',
    isPopular: false
  });

  // Partner form state
  const [editingPartnerIndex, setEditingPartnerIndex] = useState<number | null>(null);
  const [editingPartnerItem, setEditingPartnerItem] = useState<PartnerItem | null>(null);
  const [newPartner, setNewPartner] = useState({
    name: '',
    image: '/images/partners/barron.jpg',
    description: ''
  });

  const triggerSaved = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    updateHero(heroForm);
    triggerSaved();
  };

  const handleSaveCompany = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompany(companyForm);
    triggerSaved();
  };

  const handleCreatePortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    const id = newPortfolioItem.id || `project-${Date.now()}`;
    addPortfolioItem({
      ...newPortfolioItem,
      id,
      deliverables: newPortfolioItem.deliverables.filter(d => d.trim() !== '')
    });
    setNewPortfolioItem({
      id: '',
      title: '',
      client: '',
      category: 'corporate',
      categoryLabel: 'Corporate Apparel',
      image: '/images/media/Unknown1.jpg',
      description: '',
      deliverables: ['', '', '', ''],
      year: '2025',
      location: 'Johannesburg, South Africa',
      tag: 'Corporate Wardrobe'
    });
    triggerSaved();
  };

  const handleSaveEditedPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPortfolioItem) return;
    updatePortfolioItem(editingPortfolioItem.id, {
      ...editingPortfolioItem,
      deliverables: editingPortfolioItem.deliverables.filter(d => d.trim() !== '')
    });
    setEditingPortfolioItem(null);
    triggerSaved();
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const id = newProductItem.id || `product-${Date.now()}`;
    addProduct({
      ...newProductItem,
      id,
      features: newProductItem.features.filter(f => f.trim() !== '')
    });
    setNewProductItem({
      id: '',
      name: '',
      category: 'footwear',
      categoryLabel: 'Safety Footwear',
      image: '/images/products/excavator_s3_boot.jpeg',
      indicativePrice: 'R 1,500.00',
      moq: '10 Pairs',
      features: ['SABS Certified', 'Steel Toe Cap', 'Slip Resistant', 'Oil Resistant'],
      description: '',
      isPopular: false
    });
    triggerSaved();
  };

  const handleSaveEditedProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProductItem) return;
    updateProduct(editingProductItem.id, {
      ...editingProductItem,
      features: editingProductItem.features.filter(f => f.trim() !== '')
    });
    setEditingProductItem(null);
    triggerSaved();
  };

  const handleCreatePartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartner.name) return;
    addPartner(newPartner);
    setNewPartner({ name: '', image: '/images/partners/barron.jpg', description: '' });
    triggerSaved();
  };

  const handleSaveEditedPartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPartnerIndex === null || !editingPartnerItem) return;
    updatePartner(editingPartnerIndex, editingPartnerItem);
    setEditingPartnerIndex(null);
    setEditingPartnerItem(null);
    triggerSaved();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      
      {/* Top Admin Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Live Site</span>
          </Link>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700" />

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-rose-600 text-white">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold leading-none">CLAPSA CMS Control Panel</h1>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Live Website Content Manager</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {savedNotice && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Changes Saved to Live Site!</span>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="/"
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all"
          >
            <span>Preview Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-2 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-20">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Manage Website Sections
          </div>

          {[
            { id: 'hero', label: 'Hero & Branding', icon: <Sparkles className="w-4 h-4 text-rose-500" /> },
            { id: 'portfolio', label: 'Our Works Showcase', icon: <Briefcase className="w-4 h-4 text-rose-500" /> },
            { id: 'products', label: 'Products & Catalogues', icon: <Package className="w-4 h-4 text-rose-500" /> },
            { id: 'services', label: 'Supply Solutions', icon: <Layers className="w-4 h-4 text-rose-500" /> },
            { id: 'partners', label: 'Authorized Partners', icon: <Building2 className="w-4 h-4 text-rose-500" /> },
            { id: 'contact', label: 'Contact Info & Phones', icon: <Phone className="w-4 h-4 text-rose-500" /> },
            { id: 'backup', label: 'Backup & Reset', icon: <RotateCcw className="w-4 h-4 text-slate-400" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                activeTab === tab.id
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </aside>

        {/* Right Content Editor Area */}
        <main className="lg:col-span-9 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          
          {/* TAB 1: HERO & BRANDING */}
          {activeTab === 'hero' && (
            <form onSubmit={handleSaveHero} className="space-y-6 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Hero Section & Slogan Management
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manage main headlines, subtexts, trust checkpoints, and the featured project card on the homepage.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Top Pill Tag / Slogan Badge
                  </label>
                  <input
                    type="text"
                    value={heroForm.badge}
                    onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                      Headline Prefix
                    </label>
                    <input
                      type="text"
                      value={heroForm.headlinePrefix}
                      onChange={(e) => setHeroForm({ ...heroForm, headlinePrefix: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                      Headline Highlighted Words (Red Gradient)
                    </label>
                    <input
                      type="text"
                      value={heroForm.headlineHighlight}
                      onChange={(e) => setHeroForm({ ...heroForm, headlineHighlight: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-rose-600 font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Hero Subtitle & Value Proposition
                  </label>
                  <textarea
                    rows={3}
                    value={heroForm.subtitle}
                    onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs resize-none"
                  />
                </div>

                {/* Checkpoints */}
                <div className="pt-2">
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-2">
                    4 Core Trust Checkpoints
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {heroForm.checkpoints.map((cp, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={cp}
                        onChange={(e) => {
                          const newCps = [...heroForm.checkpoints];
                          newCps[idx] = e.target.value;
                          setHeroForm({ ...heroForm, checkpoints: newCps });
                        }}
                        className="w-full p-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg text-xs"
                      />
                    ))}
                  </div>
                </div>

                {/* Featured Project Card in Hero with Image Picker */}
                <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-4 bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                    <span>Featured Showcase Card (Hero Right Side)</span>
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                        Card Title
                      </label>
                      <input
                        type="text"
                        value={heroForm.featuredProject.title}
                        onChange={(e) => setHeroForm({
                          ...heroForm,
                          featuredProject: { ...heroForm.featuredProject, title: e.target.value }
                        })}
                        className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                        Card Sub-tag
                      </label>
                      <input
                        type="text"
                        value={heroForm.featuredProject.tag}
                        onChange={(e) => setHeroForm({
                          ...heroForm,
                          featuredProject: { ...heroForm.featuredProject, tag: e.target.value }
                        })}
                        className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                      Card Description
                    </label>
                    <input
                      type="text"
                      value={heroForm.featuredProject.description}
                      onChange={(e) => setHeroForm({
                        ...heroForm,
                        featuredProject: { ...heroForm.featuredProject, description: e.target.value }
                      })}
                      className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                    />
                  </div>

                  {/* Image Picker for Hero Featured Project */}
                  <div className="pt-2">
                    <ImagePickerField
                      label="Featured Project Image (Select from library or upload from computer)"
                      value={heroForm.featuredProject.image}
                      onChange={(val) => setHeroForm({
                        ...heroForm,
                        featuredProject: { ...heroForm.featuredProject, image: val }
                      })}
                      helpText="Changes the large hero image on homepage"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Hero Section</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: WORKS SHOWCASE / PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-8 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Our Past & Recent Works Showcase ({data.portfolio.length} Projects)
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Edit existing showcase projects, upload images, select from photo library, and adjust deliverables.
                  </p>
                </div>
              </div>

              {/* Add New Case Study Form */}
              <form onSubmit={handleCreatePortfolio} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-rose-500" />
                  <span>Add New Portfolio Project / Case Study</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Project Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Executive Corporate Knitwear & Shirts"
                      value={newPortfolioItem.title}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
                      className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Client / Industry *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SADC Fleet & Logistics Enterprise"
                      value={newPortfolioItem.client}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, client: e.target.value })}
                      className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Category</label>
                    <select
                      value={newPortfolioItem.category}
                      onChange={(e) => {
                        const val = e.target.value as any;
                        setNewPortfolioItem({
                          ...newPortfolioItem,
                          category: val,
                          categoryLabel: CATEGORY_LABELS[val] || 'Corporate Apparel'
                        });
                      }}
                      className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    >
                      <option value="corporate">Corporate Apparel</option>
                      <option value="ppe">Industrial PPE & Safety</option>
                      <option value="display">Branded Displays & Signage</option>
                      <option value="security">Tactical & Security</option>
                      <option value="gifting">Corporate Gifting</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="Johannesburg, South Africa"
                      value={newPortfolioItem.location}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, location: e.target.value })}
                      className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Year</label>
                    <input
                      type="text"
                      placeholder="2025"
                      value={newPortfolioItem.year}
                      onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, year: e.target.value })}
                      className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>
                </div>

                {/* Image Picker */}
                <ImagePickerField
                  label="Project Showcase Image"
                  value={newPortfolioItem.image}
                  onChange={(val) => setNewPortfolioItem({ ...newPortfolioItem, image: val })}
                  helpText="Choose from library or upload from computer"
                />

                <div>
                  <label className="text-xs text-slate-500 block mb-1">Project Summary</label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of the work and requirements..."
                    value={newPortfolioItem.description}
                    onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
                    className="w-full p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500 block mb-1">Key Deliverables (Bullet Points)</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {newPortfolioItem.deliverables.map((del, i) => (
                      <input
                        key={i}
                        type="text"
                        placeholder={`Deliverable ${i + 1}`}
                        value={del}
                        onChange={(e) => {
                          const newDels = [...newPortfolioItem.deliverables];
                          newDels[i] = e.target.value;
                          setNewPortfolioItem({ ...newPortfolioItem, deliverables: newDels });
                        }}
                        className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Case Study</span>
                  </button>
                </div>
              </form>

              {/* Existing Projects List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Published Projects ({data.portfolio.length})
                  </h3>
                  <span className="text-[11px] text-slate-400">Click &apos;Edit&apos; to change image, texts or deliverables</span>
                </div>

                <div className="grid gap-3">
                  {data.portfolio.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="relative w-16 h-16 rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={getAssetPath(item.image)}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-0.5 min-w-0">
                          <span className="text-[10px] font-bold uppercase text-rose-500 block truncate">
                            {item.categoryLabel} • {item.location} ({item.year})
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                            Client: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.client}</span> — {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button
                          onClick={() => setEditingPortfolioItem({ ...item })}
                          className="px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/60 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors border border-rose-200 dark:border-rose-900/50"
                          title="Edit project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Delete project "${item.title}"?`)) {
                              deletePortfolioItem(item.id);
                              triggerSaved();
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                          title="Delete project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: PRODUCTS & CATALOGUES */}
          {activeTab === 'products' && (
            <div className="space-y-8 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Core Products & Catalogue Management ({data.products.length} Products)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manage catalogue items, edit prices, MOQs, change product images, and upload custom photos.
                </p>
              </div>

              {/* Add New Product Form */}
              <form onSubmit={handleCreateProduct} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-rose-500" />
                  <span>Add New Product to Catalogue</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Product Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Caterpillar S3 Heavy Safety Boot"
                      value={newProductItem.name}
                      onChange={(e) => setNewProductItem({ ...newProductItem, name: e.target.value })}
                      className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Category</label>
                    <select
                      value={newProductItem.category}
                      onChange={(e) => {
                        const val = e.target.value as any;
                        setNewProductItem({
                          ...newProductItem,
                          category: val,
                          categoryLabel: PRODUCT_CATEGORY_LABELS[val] || 'Safety Footwear'
                        });
                      }}
                      className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    >
                      <option value="footwear">Safety Footwear</option>
                      <option value="display">Branded Displays</option>
                      <option value="ppe">Protective Workwear / PPE</option>
                      <option value="apparel">Corporate Apparel</option>
                      <option value="security">Tactical & Security</option>
                      <option value="medical">Facility Hygiene</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Indicative Price (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. R 1,850.00"
                      value={newProductItem.indicativePrice}
                      onChange={(e) => setNewProductItem({ ...newProductItem, indicativePrice: e.target.value })}
                      className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Minimum Order Qty (MOQ)</label>
                    <input
                      type="text"
                      placeholder="e.g. 10 Pairs"
                      value={newProductItem.moq}
                      onChange={(e) => setNewProductItem({ ...newProductItem, moq: e.target.value })}
                      className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>
                </div>

                {/* Product Image Picker */}
                <ImagePickerField
                  label="Product Thumbnail Image"
                  value={newProductItem.image}
                  onChange={(val) => setNewProductItem({ ...newProductItem, image: val })}
                  helpText="Upload product photo or pick from catalogue library"
                />

                <div>
                  <label className="text-xs text-slate-500 block mb-1">Description</label>
                  <textarea
                    rows={2}
                    placeholder="Short product description..."
                    value={newProductItem.description}
                    onChange={(e) => setNewProductItem({ ...newProductItem, description: e.target.value })}
                    className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Catalog</span>
                  </button>
                </div>
              </form>

              {/* Existing Products List */}
              <div className="grid sm:grid-cols-2 gap-3">
                {data.products.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-14 h-14 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getAssetPath(item.image)}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>

                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase text-rose-500 block truncate">
                          {item.categoryLabel} • MOQ: {item.moq}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                          {item.indicativePrice || 'RFQ Pricing'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => setEditingProductItem({ ...item })}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        title="Edit product"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Remove product "${item.name}"?`)) {
                            deleteProduct(item.id);
                            triggerSaved();
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: SUPPLY SOLUTIONS (SERVICES) */}
          {activeTab === 'services' && (
            <div className="space-y-6 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Comprehensive Supply Solutions ({data.services.length} Services)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Edit titles, service descriptions, and feature bullet points.
                </p>
              </div>

              <div className="space-y-4">
                {data.services.map((service) => (
                  <div
                    key={service.id}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-500 block mb-1">Service Title</label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            updateService(service.id, { title: e.target.value });
                            triggerSaved();
                          }}
                          className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-500 block mb-1">Tag / Category</label>
                        <input
                          type="text"
                          value={service.tag}
                          onChange={(e) => {
                            updateService(service.id, { tag: e.target.value });
                            triggerSaved();
                          }}
                          className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 block mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={service.description}
                        onChange={(e) => {
                          updateService(service.id, { description: e.target.value });
                          triggerSaved();
                        }}
                        className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 5: PARTNERS & MANUFACTURERS */}
          {activeTab === 'partners' && (
            <div className="space-y-6 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Authorized Corporate Supply & Manufacturing Network ({data.partners.length} Partners)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manage trade distribution partners like Barron, Amrod, Altitude, Bic, KMQ, etc.
                </p>
              </div>

              {/* Add Partner Form with ImagePicker */}
              <form onSubmit={handleCreatePartner} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Partner Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Barron"
                      value={newPartner.name}
                      onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                      className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <ImagePickerField
                      label="Partner Brand Logo"
                      value={newPartner.image}
                      onChange={(val) => setNewPartner({ ...newPartner, image: val })}
                      helpText="Upload logo or select preset"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Partner</span>
                  </button>
                </div>
              </form>

              {/* Partners Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-8 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getAssetPath(partner.image)}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {partner.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          setEditingPartnerIndex(idx);
                          setEditingPartnerItem({ ...partner });
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Edit partner"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Remove ${partner.name}?`)) {
                            deletePartner(idx);
                            triggerSaved();
                          }
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Delete partner"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CONTACT & COMPANY INFO */}
          {activeTab === 'contact' && (
            <form onSubmit={handleSaveCompany} className="space-y-6 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Info & Company Credentials
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manage official phone numbers, WhatsApp, RFQ emails, headquarters address, and company legal name.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Company Trade Name
                  </label>
                  <input
                    type="text"
                    value={companyForm.name}
                    onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Legal Registered Name
                  </label>
                  <input
                    type="text"
                    value={companyForm.legalName}
                    onChange={(e) => setCompanyForm({ ...companyForm, legalName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Phone Numbers Display (Hotline / Landline)
                  </label>
                  <input
                    type="text"
                    value={companyForm.phoneDisplay}
                    onChange={(e) => setCompanyForm({ ...companyForm, phoneDisplay: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Direct WhatsApp Number (Without + or spaces)
                  </label>
                  <input
                    type="text"
                    value={companyForm.whatsapp}
                    onChange={(e) => setCompanyForm({
                      ...companyForm,
                      whatsapp: e.target.value,
                      whatsappUrl: `https://wa.me/${e.target.value}?text=Hello%20CLAPSA%20Procurement,%20I%20would%20like%20to%20request%20a%20quotation.`
                    })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Official RFQ Email
                  </label>
                  <input
                    type="email"
                    value={companyForm.salesEmail}
                    onChange={(e) => setCompanyForm({ ...companyForm, salesEmail: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300 block mb-1">
                    Headquarters Address
                  </label>
                  <input
                    type="text"
                    value={companyForm.address}
                    onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Contact Details</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 7: BACKUP & RESET */}
          {activeTab === 'backup' && (
            <div className="space-y-6 text-left">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Backup, Restore & Factory Reset
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Export all your website content configuration as a JSON file or restore the original defaults.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Download className="w-4 h-4 text-rose-500" />
                    <span>Export Content Backup</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Download a full JSON backup of all your edited projects, products, and contact info.
                  </p>
                  <button
                    onClick={() => {
                      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportJSON());
                      const dlAnchor = document.createElement('a');
                      dlAnchor.setAttribute("href", dataStr);
                      dlAnchor.setAttribute("download", `clapsa_content_backup_${Date.now()}.json`);
                      dlAnchor.click();
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-700"
                  >
                    Download JSON Backup
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-3">
                  <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset to Defaults</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Reset all content (Hero, Showcase, Products, Services) back to initial factory data.
                  </p>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to reset all content to defaults? This will erase custom edits in local storage.')) {
                        resetToDefaults();
                        triggerSaved();
                        window.location.reload();
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Reset All Content
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>

      </div>

      {/* ================= EDIT PORTFOLIO MODAL ================= */}
      {editingPortfolioItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-6 space-y-5 my-8 text-left animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-rose-100 dark:bg-rose-950/60 text-rose-600 rounded-lg">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Edit Showcase Project
                  </h3>
                  <span className="text-xs text-slate-400">ID: {editingPortfolioItem.id}</span>
                </div>
              </div>

              <button
                onClick={() => setEditingPortfolioItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedPortfolio} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingPortfolioItem.title}
                    onChange={(e) => setEditingPortfolioItem({ ...editingPortfolioItem, title: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Client / Industry *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingPortfolioItem.client}
                    onChange={(e) => setEditingPortfolioItem({ ...editingPortfolioItem, client: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Category
                  </label>
                  <select
                    value={editingPortfolioItem.category}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      setEditingPortfolioItem({
                        ...editingPortfolioItem,
                        category: val,
                        categoryLabel: CATEGORY_LABELS[val] || 'Corporate Apparel'
                      });
                    }}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                  >
                    <option value="corporate">Corporate Apparel</option>
                    <option value="ppe">Industrial PPE & Safety</option>
                    <option value="display">Branded Displays & Signage</option>
                    <option value="security">Tactical & Security</option>
                    <option value="gifting">Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editingPortfolioItem.location}
                    onChange={(e) => setEditingPortfolioItem({ ...editingPortfolioItem, location: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={editingPortfolioItem.year}
                    onChange={(e) => setEditingPortfolioItem({ ...editingPortfolioItem, year: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                  />
                </div>
              </div>

              {/* Image Picker Field for Showcase Edit */}
              <ImagePickerField
                label="Project Showcase Image (Upload file or pick from photo library)"
                value={editingPortfolioItem.image}
                onChange={(val) => setEditingPortfolioItem({ ...editingPortfolioItem, image: val })}
                helpText="Change or upload new showcase photo"
              />

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Project Summary Description
                </label>
                <textarea
                  rows={3}
                  value={editingPortfolioItem.description}
                  onChange={(e) => setEditingPortfolioItem({ ...editingPortfolioItem, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs resize-none"
                />
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Key Deliverables (Bullet Points)
                  </label>
                  <button
                    type="button"
                    onClick={() => setEditingPortfolioItem({
                      ...editingPortfolioItem,
                      deliverables: [...editingPortfolioItem.deliverables, '']
                    })}
                    className="text-[11px] text-rose-600 hover:text-rose-500 font-bold flex items-center gap-1"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Add Bullet Point</span>
                  </button>
                </div>

                <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                  {editingPortfolioItem.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder={`Deliverable ${i + 1}`}
                        value={del}
                        onChange={(e) => {
                          const newDels = [...editingPortfolioItem.deliverables];
                          newDels[i] = e.target.value;
                          setEditingPortfolioItem({ ...editingPortfolioItem, deliverables: newDels });
                        }}
                        className="flex-1 p-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newDels = editingPortfolioItem.deliverables.filter((_, idx) => idx !== i);
                          setEditingPortfolioItem({ ...editingPortfolioItem, deliverables: newDels });
                        }}
                        className="p-2 text-slate-400 hover:text-rose-600 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditingPortfolioItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= EDIT PRODUCT MODAL ================= */}
      {editingProductItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-xl w-full p-6 space-y-5 my-8 text-left animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-rose-100 dark:bg-rose-950/60 text-rose-600 rounded-lg">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Edit Catalogue Product
                  </h3>
                  <span className="text-xs text-slate-400">ID: {editingProductItem.id}</span>
                </div>
              </div>

              <button
                onClick={() => setEditingProductItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedProduct} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProductItem.name}
                    onChange={(e) => setEditingProductItem({ ...editingProductItem, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Category
                  </label>
                  <select
                    value={editingProductItem.category}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      setEditingProductItem({
                        ...editingProductItem,
                        category: val,
                        categoryLabel: PRODUCT_CATEGORY_LABELS[val] || 'Safety Footwear'
                      });
                    }}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                  >
                    <option value="footwear">Safety Footwear</option>
                    <option value="display">Branded Displays</option>
                    <option value="ppe">Protective Workwear / PPE</option>
                    <option value="apparel">Corporate Apparel</option>
                    <option value="security">Tactical & Security</option>
                    <option value="medical">Facility Hygiene</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Indicative Price
                  </label>
                  <input
                    type="text"
                    value={editingProductItem.indicativePrice || ''}
                    onChange={(e) => setEditingProductItem({ ...editingProductItem, indicativePrice: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                    placeholder="e.g. R 1,850.00"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Minimum Order Qty (MOQ)
                  </label>
                  <input
                    type="text"
                    value={editingProductItem.moq}
                    onChange={(e) => setEditingProductItem({ ...editingProductItem, moq: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
                  />
                </div>
              </div>

              {/* Product Image Picker */}
              <ImagePickerField
                label="Product Image"
                value={editingProductItem.image}
                onChange={(val) => setEditingProductItem({ ...editingProductItem, image: val })}
                helpText="Change or upload product image"
              />

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={editingProductItem.description || ''}
                  onChange={(e) => setEditingProductItem({ ...editingProductItem, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs resize-none"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditingProductItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= EDIT PARTNER MODAL ================= */}
      {editingPartnerItem && editingPartnerIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4 text-left animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Edit Partner Brand
              </h3>
              <button
                onClick={() => {
                  setEditingPartnerIndex(null);
                  setEditingPartnerItem(null);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditedPartner} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={editingPartnerItem.name}
                  onChange={(e) => setEditingPartnerItem({ ...editingPartnerItem, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold"
                />
              </div>

              <ImagePickerField
                label="Partner Brand Logo"
                value={editingPartnerItem.image}
                onChange={(val) => setEditingPartnerItem({ ...editingPartnerItem, image: val })}
                helpText="Upload logo or select preset"
              />

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setEditingPartnerIndex(null);
                    setEditingPartnerItem(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Brand</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
