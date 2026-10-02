'use client';

import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Check, Grid } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export interface ImageAsset {
  label: string;
  category: 'showcase' | 'products' | 'partners' | 'branding';
  path: string;
}

export const SYSTEM_MEDIA_ASSETS: ImageAsset[] = [
  // Showcase & Media
  { label: 'Corporate Jackets (Red Lining)', category: 'showcase', path: '/images/media/Unknown1.jpg' },
  { label: 'Industrial Safety PPE & Goggles', category: 'showcase', path: '/images/media/Unknown2.jpg' },
  { label: 'Protective Workwear & Overalls', category: 'showcase', path: '/images/media/Unknown3.jpg' },
  { label: 'Tactical Uniforms & Armed Security', category: 'showcase', path: '/images/media/303452-main.png' },
  { label: 'Tactical Officer Uniform Set', category: 'showcase', path: '/images/media/302350-main.png' },
  { label: 'Tactical Field Gear', category: 'showcase', path: '/images/media/303869-main.png' },
  { label: 'High-Vis Industrial Gear', category: 'showcase', path: '/images/media/304616-main.png' },
  { label: 'Heavy Protective Equipment', category: 'showcase', path: '/images/media/306152-main.png' },
  { label: 'Branded Gazebos & Displays', category: 'showcase', path: '/images/media/display.jpg' },
  { label: 'Corporate Apparel & Shirts', category: 'showcase', path: '/images/media/apparel.jpg' },
  { label: 'VIP Executive Gifting', category: 'showcase', path: '/images/media/gifting.jpg' },
  { label: 'Heavy Duty Mining Conti Suits', category: 'showcase', path: '/images/media/workwear.jpg' },
  { label: 'Embroidered Caps & Headwear', category: 'showcase', path: '/images/media/headwear.jpg' },
  { label: 'Branded Conference Bags', category: 'showcase', path: '/images/media/bags.jpg' },
  { label: 'Hygiene & Medical Safety', category: 'showcase', path: '/images/media/COVID-19.jpg' },
  { label: 'Field Deployment Shoot 1', category: 'showcase', path: '/images/media/img-1.jpg' },
  { label: 'Field Deployment Shoot 2', category: 'showcase', path: '/images/media/img-2.jpg' },
  { label: 'Field Deployment Shoot 3', category: 'showcase', path: '/images/media/img3.jpg' },
  { label: 'Field Deployment Shoot 4', category: 'showcase', path: '/images/media/img4.jpg' },
  { label: 'Field Deployment Shoot 5', category: 'showcase', path: '/images/media/img5.jpg' },
  { label: 'Procurement Supply Line', category: 'showcase', path: '/images/media/PROCUMENT.jpeg' },

  // Products
  { label: 'Excavator S3 Heavy Safety Boot', category: 'products', path: '/images/products/excavator_s3_boot.jpeg' },
  { label: 'Resorption S3 Waterproof Boot', category: 'products', path: '/images/products/resorption_s3_boot.jpeg' },
  { label: 'Holton S3 Rugged Leather Boot', category: 'products', path: '/images/products/holton_boot.jpg' },
  { label: 'Kontrakta Dual Density Boot', category: 'products', path: '/images/products/kontrakta_boot.jpg' },
  { label: 'Abbey Ladies Safety Boot', category: 'products', path: '/images/products/abbey_ladies_boot.jpeg' },
  { label: 'Mae Ladies Steel Toe Boot', category: 'products', path: '/images/products/mae_ladies_boot.jpeg' },
  { label: 'Jace Ladies Lightweight Boot', category: 'products', path: '/images/products/jace_ladies_boot.jpeg' },
  { label: 'Chelsea Dealer Pull-On Boot', category: 'products', path: '/images/products/chelsea_boot.jpg' },
  { label: 'Chukka Executive Safety Shoe', category: 'products', path: '/images/products/chukka_boot.jpg' },
  { label: 'Crossrail Industrial Boot', category: 'products', path: '/images/products/crossrail_boot.jpeg' },
  { label: 'Wellspring Heavy Duty Boot', category: 'products', path: '/images/products/wellspring_boot.jpeg' },
  { label: 'Non-Metallic Safety Boot', category: 'products', path: '/images/products/non-metallic_safety_boot.jpg' },
  { label: 'Enterprise Metal-Free Executive Shoe', category: 'products', path: '/images/products/enterprise_metal-free_shoe.jpg' },
  { label: 'Radical Lightweight Trainer', category: 'products', path: '/images/products/radical_shoe.jpg' },
  { label: 'Multi Safety Work Shoe', category: 'products', path: '/images/products/multi_shoe.jpg' },
  { label: 'Promax Chemical & Dust Coverall', category: 'products', path: '/images/products/promax_coverall.jpg' },
  { label: 'Heavy Duty Gazebo Toolkit', category: 'products', path: '/images/products/gazebo_toolkit.png' },
  { label: 'Event Kiosk & Tasting Counter', category: 'products', path: '/images/products/kiosk_display.png' },
  { label: 'Fence Wrap & Perimeter Mesh', category: 'products', path: '/images/products/fence_wrap.png' },
  { label: 'Branded Pennants & Bunting', category: 'products', path: '/images/products/pennants_pvc.png' },
  { label: 'Wall Mount Auto Sanitizer Dispenser', category: 'products', path: '/images/products/soap_dispenser.jpg' },

  // Partners
  { label: 'Barron Corporate Brand', category: 'partners', path: '/images/partners/barron.jpg' },
  { label: 'Amrod Promotional Products', category: 'partners', path: '/images/partners/amrod.jpg' },
  { label: 'Altitude by Wizard', category: 'partners', path: '/images/partners/altitude.jpg' },
  { label: 'Bic Graphic Stationery', category: 'partners', path: '/images/partners/bic.jpg' },
  { label: 'KMQ Headwear & Apparel', category: 'partners', path: '/images/partners/kmq.jpg' },
  { label: 'Macma Corporate Gifts', category: 'partners', path: '/images/partners/macma.jpg' },
  { label: 'TOGS Tactical & Workwear', category: 'partners', path: '/images/partners/togs.jpg' },
  { label: 'Abelanani Headwear & Banners', category: 'partners', path: '/images/partners/abelanani.jpg' },
];

interface ImagePickerFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  aspectRatio?: 'square' | 'video' | 'logo' | 'portrait';
  placeholder?: string;
  helpText?: string;
}

export default function ImagePickerField({
  label,
  value,
  onChange,
  placeholder = '/images/... or https://...',
  helpText
}: ImagePickerFieldProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'showcase' | 'products' | 'partners'>('all');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (under 5MB to avoid localStorage overflow)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image file is larger than 5MB. Please choose a smaller image or compressed file.');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onChange(reader.result);
        setIsUploading(false);
      }
    };
    reader.onerror = () => {
      alert('Failed to read image file.');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const filteredAssets = activeGalleryTab === 'all' 
    ? SYSTEM_MEDIA_ASSETS 
    : SYSTEM_MEDIA_ASSETS.filter(a => a.category === activeGalleryTab);

  return (
    <div className="space-y-1.5 text-left w-full">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          {label}
        </label>
        {helpText && (
          <span className="text-[10px] text-slate-400">{helpText}</span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center">
        {/* Thumbnail Preview */}
        <div className="relative w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 overflow-hidden shrink-0 shadow-sm group">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getAssetPath(value)}
              alt="Preview"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <ImageIcon className="w-6 h-6" />
            </div>
          )}
        </div>

        {/* Input & Action Buttons */}
        <div className="flex-1 w-full space-y-2">
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="flex-1 min-w-[200px] p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-mono text-slate-800 dark:text-slate-200"
            />

            {/* Hidden native file input */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {/* Upload Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="px-3.5 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
              title="Upload image from your computer"
            >
              <Upload className="w-4 h-4 text-rose-600" />
              <span>{isUploading ? 'Loading...' : 'Upload File'}</span>
            </button>

            {/* Gallery Picker Button */}
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="px-3.5 py-2.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer shadow-sm"
              title="Choose from website photo library"
            >
              <Grid className="w-4 h-4" />
              <span>Photo Library</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal / Modal de Escolha de Imagens */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col text-left overflow-hidden animate-in fade-in zoom-in-95 my-auto">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Choose Image from Photo Library
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Click any high-resolution photo from CLAPSA or upload your own file.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setGalleryOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex gap-2 overflow-x-auto shrink-0">
              {[
                { id: 'all', label: `All Photos (${SYSTEM_MEDIA_ASSETS.length})` },
                { id: 'showcase', label: 'Showcase / Works' },
                { id: 'products', label: 'Safety & Products' },
                { id: 'partners', label: 'Partner Logos' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeGalleryTab === tab.id
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Image Grid with Fixed Heights & Responsive Layout */}
            <div className="p-5 flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredAssets.map((asset, idx) => {
                const isSelected = value === asset.path;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      onChange(asset.path);
                      setGalleryOpen(false);
                    }}
                    className={`group text-left rounded-xl border-2 transition-all p-2.5 bg-slate-50 dark:bg-slate-950 flex flex-col justify-between hover:scale-[1.02] cursor-pointer ${
                      isSelected
                        ? 'border-rose-600 ring-2 ring-rose-600/40 bg-rose-50/20 dark:bg-rose-950/30'
                        : 'border-slate-200 dark:border-slate-800 hover:border-rose-400'
                    }`}
                  >
                    <div className="relative w-full h-28 sm:h-32 rounded-lg overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0 mb-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(asset.path)}
                        alt={asset.label}
                        className={`w-full h-full ${
                          asset.category === 'partners' || asset.category === 'products'
                            ? 'object-contain p-2'
                            : 'object-cover'
                        } group-hover:scale-105 transition-transform duration-200`}
                      />
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 bg-rose-600 text-white p-1 rounded-full shadow-md z-10">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-0.5 w-full">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block truncate">
                        {asset.label}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono block truncate">
                        {asset.path}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex justify-between items-center shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Tip: You can also click &ldquo;Upload File&rdquo; to load any picture from your PC.
              </span>
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold uppercase transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
