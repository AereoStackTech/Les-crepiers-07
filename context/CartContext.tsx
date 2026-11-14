'use client';

import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { MENU_ITEMS, type Lang, type MenuItem } from '@/data/creperie-menu';
import type { CartItem, FulfillmentMode } from '@/lib/whatsapp-order';

interface CartEntry {
  id: string;
  quantity: number;
}

interface CartContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  entries: CartEntry[];
  items: CartItem[];
  totalItems: number;
  estimatedTotal: number;
  mode: FulfillmentMode;
  setMode: (mode: FulfillmentMode) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  isSheetOpen: boolean;
  setIsSheetOpen: (open: boolean) => void;
  getQuantity: (id: string) => number;
  addItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const MENU_BY_ID = new Map<string, MenuItem>(MENU_ITEMS.map((item) => [item.id, item]));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const [entries, setEntries] = useState<CartEntry[]>([]);
  const [mode, setMode] = useState<FulfillmentMode>('drive');
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const getQuantity = useCallback(
    (id: string) => entries.find((e) => e.id === id)?.quantity ?? 0,
    [entries]
  );

  const addItem = useCallback((id: string) => {
    setEntries((prev) => {
      const existing = prev.find((e) => e.id === id);
      if (existing) {
        return prev.map((e) => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e));
      }
      return [...prev, { id, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setEntries((prev) =>
      prev
        .map((e) => (e.id === id ? { ...e, quantity: e.quantity + delta } : e))
        .filter((e) => e.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setEntries([]);
  }, []);

  const items: CartItem[] = useMemo(() => {
    return entries
      .map((entry) => {
        const menuItem = MENU_BY_ID.get(entry.id);
        if (!menuItem) return null;
        return {
          id: menuItem.id,
          name: menuItem.name[lang],
          quantity: entry.quantity,
          unitPriceMad: menuItem.unitPriceMad,
        };
      })
      .filter((item): item is CartItem => item !== null);
  }, [entries, lang]);

  const totalItems = useMemo(
    () => entries.reduce((sum, entry) => sum + entry.quantity, 0),
    [entries]
  );

  const estimatedTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.unitPriceMad, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lang,
      setLang,
      entries,
      items,
      totalItems,
      estimatedTotal,
      mode,
      setMode,
      customerName,
      setCustomerName,
      deliveryAddress,
      setDeliveryAddress,
      notes,
      setNotes,
      isSheetOpen,
      setIsSheetOpen,
      getQuantity,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [
      lang,
      entries,
      items,
      totalItems,
      estimatedTotal,
      mode,
      customerName,
      deliveryAddress,
      notes,
      isSheetOpen,
      getQuantity,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
