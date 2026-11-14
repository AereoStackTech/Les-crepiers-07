'use client';

import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MENU_ITEMS, SITE_COPY } from '@/data/creperie-menu';
import {
  CREPERIE_MAPS_URL,
  CREPERIE_PHONE_DISPLAY,
  CREPERIE_PLUS_CODE,
  buildCreperieWhatsAppUrl,
  type FulfillmentMode,
} from '@/lib/whatsapp-order';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function OrderCheckout() {
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
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const t = SITE_COPY[lang].checkout;
  const signatureItems = MENU_ITEMS.filter((m) => m.verified);

  const fulfillmentOptions: { key: FulfillmentMode; label: string }[] = [
    { key: 'drive', label: t.modes.drive },
    { key: 'dine-in', label: t.modes['dine-in'] },
    { key: 'delivery', label: t.modes.delivery },
  ];

  const whatsappUrl = buildCreperieWhatsAppUrl({
    customerName,
    mode,
    deliveryAddress,
    notes,
    items,
    lang,
  });

  return (
    <section id="commander" className="py-12 sm:py-16 border-t border-espresso-dark/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-caramel-gold">
            {t.kicker}
          </p>
          <h2 className="mt-1.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-espresso-dark text-balance">
            {t.title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-espresso-dark/10 bg-white lg:col-span-5">
            <div className="relative aspect-[16/10] w-full bg-espresso-dark/5 border-b border-espresso-dark/10">
              <iframe
                title="Les crepiers 07 — Quartier l'hôpital, Safi"
                src="https://maps.google.com/maps?q=7QP8%2BXQ%20Safi%2C%20Morocco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-caramel-gold shrink-0" />
                  <div>
                    <p className="font-display text-base font-bold text-espresso-dark">
                      {t.locationTitle}
                    </p>
                    <p className="mt-0.5 text-xs text-espresso-dark/60">
                      {t.plusCodeLabel} : <span className="font-semibold">{CREPERIE_PLUS_CODE}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-caramel-gold shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-espresso-dark">{t.hoursTitle}</p>
                    <p className="mt-0.5 text-sm text-espresso-dark/75">{t.hoursPrimary}</p>
                    <p className="mt-0.5 text-xs text-espresso-dark/55">{t.hoursSecondary}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-caramel-gold shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-espresso-dark">{t.phoneLabel}</p>
                    <a
                      href={`tel:${CREPERIE_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                      className="mt-0.5 inline-block text-sm font-medium text-espresso-dark/80 hover:text-caramel-gold tabular-nums"
                    >
                      {CREPERIE_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={CREPERIE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-espresso-dark/20 bg-cream-batter/60 px-4 py-2.5 text-sm font-semibold text-espresso-dark hover:bg-cream-batter transition-colors"
              >
                <Navigation className="h-4 w-4 text-caramel-gold" />
                <span>{t.directionsCta}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-espresso-dark/10 bg-white p-6 sm:p-8 lg:col-span-7">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-espresso-dark">
                  {t.builderTitle}
                </h3>
                <p className="mt-1 text-sm text-espresso-dark/65">{t.builderSubtitle}</p>
              </div>

              <div>
                <span className="block text-xs font-semibold text-espresso-dark/70 mb-2">
                  {t.modeLabel}
                </span>
                <div className="grid grid-cols-3 gap-1.5 rounded-lg bg-espresso-dark/5 p-1">
                  {fulfillmentOptions.map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setMode(opt.key)}
                      className={cn(
                        'rounded-md px-3 py-2.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap truncate cursor-pointer',
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

              {items.length === 0 ? (
                <div className="rounded-xl border border-dashed border-espresso-dark/15 bg-cream-batter/60 p-5">
                  <p className="text-sm font-semibold text-espresso-dark">{t.emptyTitle}</p>
                  <p className="mt-1 text-xs text-espresso-dark/65">{t.emptyDesc}</p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {signatureItems.map((sig) => (
                      <button
                        key={sig.id}
                        type="button"
                        onClick={() => addItem(sig.id)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-espresso-dark/15 bg-white px-3 py-2 text-xs font-semibold text-espresso-dark hover:border-caramel-gold transition-colors cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5 text-caramel-gold" />
                        <span>{sig.name[lang]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <ul className="divide-y divide-espresso-dark/10 rounded-xl border border-espresso-dark/10 bg-cream-batter/40 px-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-espresso-dark">
                            {item.name}
                          </p>
                          <p className="text-xs text-espresso-dark/60 tabular-nums">
                            ~{item.unitPriceMad} MAD × {item.quantity} = ~
                            {item.unitPriceMad * item.quantity} MAD
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-espresso-dark/15 bg-white text-espresso-dark hover:bg-espresso-dark/5 cursor-pointer"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-bold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-espresso-dark/15 bg-white text-espresso-dark hover:bg-espresso-dark/5 cursor-pointer"
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
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-xs font-medium text-espresso-dark/55 hover:text-espresso-dark cursor-pointer"
                    >
                      {t.clearCta}
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className={cn(mode !== 'delivery' && 'sm:col-span-2')}>
                  <label
                    htmlFor="checkout-name"
                    className="block text-xs font-semibold text-espresso-dark/75 mb-1.5"
                  >
                    {t.nameLabel}
                  </label>
                  <Input
                    id="checkout-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.namePlaceholder}
                  />
                </div>

                {mode === 'delivery' && (
                  <div>
                    <label
                      htmlFor="checkout-address"
                      className="block text-xs font-semibold text-espresso-dark/75 mb-1.5"
                    >
                      {t.addressLabel}
                    </label>
                    <Input
                      id="checkout-address"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder={t.addressPlaceholder}
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-notes"
                    className="block text-xs font-semibold text-espresso-dark/75 mb-1.5"
                  >
                    {t.notesLabel}
                  </label>
                  <Input
                    id="checkout-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.notesPlaceholder}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-espresso-dark/10 pt-5 space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-espresso-dark/70">{t.totalLabel}</p>
                  <p className="text-xs text-espresso-dark/55">{t.paymentNote}</p>
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-espresso-dark tabular-nums">
                  ~{estimatedTotal} MAD
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-whatsapp/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>{t.sendCta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
