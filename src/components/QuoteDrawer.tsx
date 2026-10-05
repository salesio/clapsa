'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { useContent } from '@/context/ContentContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageSquare, 
  Mail, 
  ShoppingBag, 
  Building,
  User,
  Phone
} from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function QuoteDrawer() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearQuote, 
    isDrawerOpen, 
    setIsDrawerOpen,
    totalItemsCount 
  } = useQuote();

  const { data } = useContent();
  const { t, language } = useLanguage();
  const company = data.company;

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [brandingRequirements, setBrandingRequirements] = useState('');

  if (!isDrawerOpen) return null;

  // Build structured message for WhatsApp
  const generateWhatsAppMessage = () => {
    let header = '*CLAPSA PROCUREMENT — FORMAL RFQ REQUEST*\n';
    let lblCompany = 'Company';
    let lblContact = 'Contact Person';
    let lblPhone = 'Phone';
    let lblReqItems = 'REQUESTED ITEMS:';
    let lblQty = 'Quantity';
    let lblCat = 'Category';
    let lblRefPrice = 'Ref Price';
    let lblBranding = 'BRANDING & CUSTOMIZATION NOTES:';
    let closing = 'Please provide a formal quotation including delivery lead-time to our premises. Thank you!';

    if (language === 'pt') {
      header = '*CLAPSA APROVISIONAMENTO — PEDIDO FORMAL DE COTAÇÃO (RFQ)*\n';
      lblCompany = 'Empresa';
      lblContact = 'Pessoa de Contacto';
      lblPhone = 'Telefone/WhatsApp';
      lblReqItems = 'ITENS SOLICITADOS:';
      lblQty = 'Quantidade';
      lblCat = 'Categoria';
      lblRefPrice = 'Preço Ref';
      lblBranding = 'NOTAS DE PERSONALIZAÇÃO & BORDADOS:';
      closing = 'Por favor enviem cotação formal incluindo prazo de entrega para as nossas instalações. Muito obrigado!';
    } else if (language === 'af') {
      header = '*CLAPSA VOORSIENING — FORMELE RFQ-KWOTASIEVERSOEK*\n';
      lblCompany = 'Maatskappy';
      lblContact = 'Kontakpersoon';
      lblPhone = 'Telefoon/WhatsApp';
      lblReqItems = 'VERSOEKTE ITEMS:';
      lblQty = 'Hoeveelheid';
      lblCat = 'Kategorie';
      lblRefPrice = 'Verw. Prys';
      lblBranding = 'HANDELSMERK- & PASMAAKNOTAS:';
      closing = 'Voorsien asseblief ’n formele kwotasie insluitend afleweringstydperk na ons perseel. Baie dankie!';
    }

    let msg = `${header}----------------------------------------\n`;
    if (companyName) msg += `*${lblCompany}:* ${companyName}\n`;
    if (contactName) msg += `*${lblContact}:* ${contactName}\n`;
    if (contactPhone) msg += `*${lblPhone}:* ${contactPhone}\n`;
    msg += `\n*${lblReqItems}*\n`;

    items.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   - ${lblQty}: ${item.quantity} units\n`;
      msg += `   - ${lblCat}: ${item.product.categoryLabel}\n`;
      if (item.product.indicativePrice) {
        msg += `   - ${lblRefPrice}: ${item.product.indicativePrice}\n`;
      }
    });

    if (brandingRequirements) {
      msg += `\n*${lblBranding}*\n${brandingRequirements}\n`;
    }

    msg += `\n----------------------------------------\n`;
    msg += closing;

    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const url = `https://wa.me/${company.whatsapp}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const subjectPrefix = language === 'pt' ? 'Pedido Formal de Cotação (RFQ)' : language === 'af' ? 'Formele RFQ-Kwotasieversoek' : 'Formal RFQ Quote Request';
    const subject = encodeURIComponent(`${subjectPrefix} - ${companyName || (language === 'pt' ? 'Cliente Corporativo' : language === 'af' ? 'Korporatiewe Kliënt' : 'Corporate Client')}`);
    const body = generateWhatsAppMessage().replaceAll('%0A', '%0D%0A');
    window.location.href = `mailto:${company.salesEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsDrawerOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-2xl flex flex-col justify-between transition-colors duration-200">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-600/20 text-rose-600 dark:text-rose-500 border border-rose-200 dark:border-rose-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{t.quoteDrawer.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {items.length} {t.quoteDrawer.linesCount} ({totalItemsCount} {t.quoteDrawer.totalUnits})
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 dark:text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-200">{t.quoteDrawer.emptyTitle}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                    {t.quoteDrawer.emptyDesc}
                  </p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-rose-500 transition-colors"
                >
                  {t.quoteDrawer.browseCatalogue}
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex gap-3.5 items-center shadow-sm"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative w-16 h-16 rounded-lg bg-white dark:bg-slate-900 shrink-0 overflow-hidden border border-slate-200 dark:border-slate-800">
                        <Image
                          src={getAssetPath(item.product.image)}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      {/* Info & Quantity Controls */}
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {item.product.name}
                        </h5>
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">
                          {item.product.indicativePrice || t.quoteDrawer.rfqPricing}
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 5)}
                              className="p-1 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                              title="Decrease quantity by 5"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-bold text-slate-900 dark:text-white min-w-[32px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 5)}
                              className="p-1 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                              title="Increase quantity by 5"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Delete Item */}
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                            title="Remove from quote"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear all */}
                <div className="flex justify-end pt-1">
                  <button
                    onClick={clearQuote}
                    className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-rose-600 underline transition-colors"
                  >
                    {t.quoteDrawer.clearBasket}
                  </button>
                </div>

                {/* Company & Customization Form inside Drawer */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t.quoteDrawer.contactTitle}
                  </h4>

                  <div className="space-y-2">
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={t.quoteDrawer.companyPlaceholder}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={t.quoteDrawer.contactPlaceholder}
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={t.quoteDrawer.phonePlaceholder}
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        rows={2}
                        placeholder={t.quoteDrawer.notesPlaceholder}
                        value={brandingRequirements}
                        onChange={(e) => setBrandingRequirements(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Submit Buttons */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 space-y-2.5">
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.quoteDrawer.sendWhatsApp}</span>
              </button>

              <button
                onClick={handleEmailSubmit}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-950/30 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>{t.quoteDrawer.sendEmail}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
