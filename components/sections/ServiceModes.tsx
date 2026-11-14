'use client';

import React from 'react';
import { Car, Utensils, Bike, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SITE_COPY } from '@/data/creperie-menu';
import { CREPERIE_GLOVO_URL } from '@/lib/whatsapp-order';

export function ServiceModes() {
  const { lang } = useCart();
  const t = SITE_COPY[lang].service;

  const icons = [Car, Utensils, Bike];

  return (
    <section id="service" className="py-12 sm:py-16 border-t border-espresso-dark/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-caramel-gold">
            {t.kicker}
          </p>
          <h2 className="mt-1.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-espresso-dark text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-espresso-dark/70">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-xl border border-espresso-dark/10 bg-white p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-caramel-gold tabular-nums">
                      {card.index}.
                    </span>
                    <Icon className="h-5 w-5 text-espresso-dark/70" />
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-espresso-dark">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-espresso-dark/70">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-espresso-dark/8 pt-4 space-y-2">
                  <p className="text-xs font-medium text-espresso-dark/60">{card.meta}</p>
                  {'glovoLabel' in card && card.glovoLabel && (
                    <a
                      href={CREPERIE_GLOVO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel-gold hover:underline"
                    >
                      <span>{card.glovoLabel}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
