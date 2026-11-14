'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Minus, Plus, UtensilsCrossed } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MENU_ITEMS, SITE_COPY, type MenuCategory } from '@/data/creperie-menu';
import { cn } from '@/lib/utils';

type CategoryFilter = 'all' | MenuCategory;

export function MenuSection() {
  const { lang, getQuantity, addItem, updateQuantity } = useCart();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const t = SITE_COPY[lang].menu;

  const tabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: t.tabs.all },
    { key: 'sweet', label: t.tabs.sweet },
    { key: 'savory', label: t.tabs.savory },
    { key: 'drinks', label: t.tabs.drinks },
  ];

  const categoryLabels: Record<MenuCategory, string> = {
    sweet: t.tabs.sweet,
    savory: t.tabs.savory,
    drinks: t.tabs.drinks,
  };

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-12 sm:py-16 border-t border-espresso-dark/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-caramel-gold">
              {t.kicker}
            </p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-espresso-dark text-balance">
              {t.title}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.kicker}
            className="flex items-center gap-1 overflow-x-auto rounded-xl border border-espresso-dark/10 bg-white p-1"
          >
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.key)}
                  className={cn(
                    'relative rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                    isActive
                      ? 'text-white'
                      : 'text-espresso-dark/70 hover:text-espresso-dark'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeMenuTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-espresso-dark"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-xs sm:text-sm leading-relaxed text-espresso-dark/65">
          {t.note}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const qty = getQuantity(item.id);
            return (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-espresso-dark/10 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso-dark/5">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream-batter to-caramel-gold/15 p-4 text-center">
                    <UtensilsCrossed className="h-6 w-6 text-caramel-gold/70 mb-1.5" />
                    <span className="text-xs font-medium text-espresso-dark/60">
                      {item.name[lang]}
                    </span>
                  </div>

                  <Image
                    src={item.image}
                    alt={item.name[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className={cn(
                          'font-semibold',
                          item.verified ? 'text-pistachio-pop' : 'text-espresso-dark/55'
                        )}
                      >
                        {item.verified ? t.verifiedLabel : t.placeholderLabel}
                      </span>
                      <span aria-hidden="true" className="text-espresso-dark/30">
                        ·
                      </span>
                      <span className="text-espresso-dark/60">
                        {categoryLabels[item.category]}
                      </span>
                    </div>

                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-espresso-dark">
                      {item.name[lang]}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-espresso-dark/70">
                      {item.ingredients[lang]}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-espresso-dark/8 pt-4">
                    <div>
                      <p className="text-base font-bold text-espresso-dark tabular-nums">
                        ~{item.unitPriceMad} MAD
                      </p>
                      <p className="text-[11px] text-espresso-dark/50">{t.priceSuffix}</p>
                    </div>

                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => addItem(item.id)}
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-espresso-dark px-4 py-2 text-xs sm:text-sm font-semibold text-cream-batter hover:bg-caramel-gold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>{t.add}</span>
                      </button>
                    ) : (
                      <div className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-caramel-gold/40 bg-cream-batter px-1.5 py-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Remove one ${item.name[lang]}`}
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-espresso-dark hover:bg-espresso-dark/5 transition-colors cursor-pointer"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-espresso-dark tabular-nums">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Add one ${item.name[lang]}`}
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-espresso-dark text-white hover:bg-caramel-gold transition-colors cursor-pointer"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
