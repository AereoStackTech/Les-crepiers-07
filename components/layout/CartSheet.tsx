'use client';

import React from 'react';
import { Minus, Plus, Trash2, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MENU_ITEMS, SITE_COPY } from '@/data/creperie-menu';
import { buildCreperieWhatsAppUrl, type FulfillmentMode } from '@/lib/whatsapp-order';
import { Sheet } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function CartSheet() {
  const {
    lang,
    items,
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
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const t = SITE_COPY[lang];
  const signatureItems = MENU_ITEMS.filter((m) => m.verified);

  const whatsappUrl = buildCreperieWhatsAppUrl({
    customerName,
    mode,
    deliveryAddress,
    notes,
    items,
    lang,
  });

  const fulfillmentOptions: { key: FulfillmentMode; label: string }[] = [
    { key: 'drive', label: t.checkout.modes.drive },
    { key: 'dine-in', label: t.checkout.modes['dine-in'] },
    { key: 'delivery', label: t.checkout.modes.delivery },
  ];

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={setIsSheetOpen}
      title={t.sheet.title}
      subtitle={t.sheet.subtitle}
    >
      {items.length === 0 ? (
        <div className="space-y-6">
          <div className="rounded-xl border border-espresso-dark/10 bg-white p-5">
            <h3 className="font-display text-base font-bold text-espresso-dark">
              {t.checkout.emptyTitle}
            </h3>
            <p className="mt-1.5 text-sm text-espresso-dark/70">{t.checkout.emptyDesc}</p>
            <div className="mt-4 space-y-2.5">
              {signatureItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => addItem(item.id)}
                  className="flex w-full items-center justify-between rounded-lg border border-espresso-dark/10 bg-cream-batter/70 px-3.5 py-2.5 text-left text-sm transition-colors hover:border-caramel-gold/50 hover:bg-cream-batter cursor-pointer"
                >
                  <span className="font-medium text-espresso-dark">{item.name[lang]}</span>
                  <span className="text-xs font-semibold text-caramel-gold tabular-nums whitespace-nowrap ml-3">
                    + ~{item.unitPriceMad} MAD
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <ul className="divide-y divide-espresso-dark/10 rounded-xl border border-espresso-dark/10 bg-white px-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 py-3.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-espresso-dark">{item.name}</p>
                  <p className="mt-0.5 text-xs text-espresso-dark/60 tabular-nums">
                    ~{item.unitPriceMad} MAD × {item.quantity} = ~{item.unitPriceMad * item.quantity} MAD
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label="Decrease quantity"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-espresso-dark/15 text-espresso-dark hover:bg-espresso-dark/5 cursor-pointer"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold tabular-nums">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label="Increase quantity"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-espresso-dark/15 text-espresso-dark hover:bg-espresso-dark/5 cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    className="ml-1 flex h-8 w-8 items-center justify-center rounded-md text-espresso-dark/45 hover:text-espresso-dark cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <div>
              <span className="block text-xs font-semibold text-espresso-dark/70 mb-2">
                {t.checkout.modeLabel}
              </span>
              <div className="grid grid-cols-3 gap-1.5 rounded-lg bg-espresso-dark/5 p-1">
                {fulfillmentOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setMode(opt.key)}
                    className={cn(
                      'rounded-md px-2 py-2 text-xs font-semibold transition-colors whitespace-nowrap truncate cursor-pointer',
                      mode === opt.key
                        ? 'bg-white text-espresso-dark shadow-xs'
                        : 'text-espresso-dark/65 hover:text-espresso-dark'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-espresso-dark/75 mb-1.5">
                {t.checkout.nameLabel}
              </label>
              <Input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={t.checkout.namePlaceholder}
              />
            </div>

            {mode === 'delivery' && (
              <div>
                <label className="block text-xs font-semibold text-espresso-dark/75 mb-1.5">
                  {t.checkout.addressLabel}
                </label>
                <Input
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder={t.checkout.addressPlaceholder}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-espresso-dark/75 mb-1.5">
                {t.checkout.notesLabel}
              </label>
              <Input
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.checkout.notesPlaceholder}
              />
            </div>
          </div>

          <div className="border-t border-espresso-dark/10 pt-4 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-espresso-dark/70">{t.checkout.totalLabel}</span>
              <span className="font-display text-2xl font-bold text-espresso-dark tabular-nums">
                ~{estimatedTotal} MAD
              </span>
            </div>
            <p className="text-xs text-espresso-dark/60">{t.checkout.paymentNote}</p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-whatsapp/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.sheet.sendDirect}</span>
            </a>

            <div className="flex items-center justify-between text-xs">
              <a
                href="#commander"
                onClick={() => setIsSheetOpen(false)}
                className="inline-flex items-center gap-1 font-semibold text-caramel-gold hover:underline"
              >
                <span>{t.sheet.goToCheckout}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={clearCart}
                className="text-espresso-dark/55 hover:text-espresso-dark cursor-pointer"
              >
                {t.checkout.clearCta}
              </button>
            </div>
          </div>
        </div>
      )}
    </Sheet>
  );
}
