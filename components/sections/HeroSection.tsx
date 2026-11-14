'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, ArrowDown, Utensils, Car, Bike } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { HERO_IMAGE, SITE_COPY } from '@/data/creperie-menu';
import { buildCreperieWhatsAppUrl } from '@/lib/whatsapp-order';

export function HeroSection() {
  const { lang, items, customerName, mode, deliveryAddress, notes } = useCart();
  const t = SITE_COPY[lang].hero;

  const whatsappUrl = buildCreperieWhatsAppUrl({
    customerName,
    mode,
    deliveryAddress,
    notes,
    items,
    lang,
  });

  const modeIcons = [Utensils, Car, Bike];

  return (
    <section id="hero" className="pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-pistachio-pop">
              {t.kicker}
            </p>

            <h1 className="mt-3 font-display text-[clamp(2.15rem,4vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-espresso-dark text-balance">
              {t.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-espresso-dark/75">
              {t.subheadline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-whatsapp/90 transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{t.ctaPrimary}</span>
              </a>

              <a
                href="#menu"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-espresso-dark/20 bg-white/60 px-5 py-3 text-sm sm:text-base font-semibold text-espresso-dark hover:bg-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowDown className="h-4 w-4 text-caramel-gold shrink-0" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-espresso-dark lg:h-full lg:min-h-[420px] shadow-md">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-espresso-dark via-espresso-dark/90 to-caramel-gold/30 p-6 text-center text-cream-batter/80">
                <Utensils className="h-8 w-8 text-caramel-gold mb-2" />
                <span className="font-display text-lg font-semibold text-cream-batter">
                  Les crepiers 07
                </span>
              </div>

              <Image
                src={HERO_IMAGE}
                alt="Crêpe Oreo et Pistache préparée à la minute chez Les crepiers 07 à Safi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/90 via-espresso-dark/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <p className="font-display text-lg sm:text-xl font-bold tracking-tight">
                  {t.imageCaptionTitle}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-cream-batter/85">
                  {t.imageCaptionSub}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 divide-espresso-dark/10 rounded-xl border border-espresso-dark/10 bg-white">
          {t.modes.map((item, idx) => {
            const Icon = modeIcons[idx];
            return (
              <div key={item.title} className="flex items-start gap-3.5 px-5 py-4 sm:py-5">
                <Icon className="mt-0.5 h-5 w-5 text-caramel-gold shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-espresso-dark">{item.title}</p>
                  <p className="mt-0.5 text-xs sm:text-sm text-espresso-dark/65">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
