'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '@/data/products';

export interface QuoteItem {
  product: ProductItem;
  quantity: number;
  notes?: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (product: ProductItem, quantity?: number, notes?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  totalItemsCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('clapsa_quote_basket');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load quote basket:', e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('clapsa_quote_basket', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save quote basket:', e);
    }
  }, [items]);

  const addItem = (product: ProductItem, quantity: number = 10, notes: string = '') => {
    setItems((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity, notes: notes || i.notes }
            : i
        );
      }
      return [...prev, { product, quantity, notes }];
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        isDrawerOpen,
        setIsDrawerOpen,
        totalItemsCount,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
