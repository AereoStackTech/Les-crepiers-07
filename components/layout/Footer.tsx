'use client';

import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SITE_COPY } from '@/data/creperie-menu';
import {
  CREPERIE_GLOVO_URL,
  CREPERIE_MAPS_URL,
  CREPERIE_PHONE_DISPLAY,
  buildCreperieWhatsAppUrl,
} from '@/lib/whatsapp-order';

export function Footer() {
  const { lang } = useCart();
  const t = SITE_COPY[lang].footer;
  const quickWhatsApp = buildCreperieWhatsAppUrl({
    customerName: '',
    mode: 'drive',
    items: [],
    lang,
  });

  return (
    <footer className="bg-espresso-dark text-cream-batter pb-20 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 border-b border-cream-batter/15 pb-10">
          <div className="space-y-3">
            <p className="font-display text-2xl font-bold text-white">Les crepiers 07</p>
            <p className="text-sm leading-relaxed text-cream-batter/75 max-w-xs">{t.tagline}</p>
          </div>

          <div className="space-y-3 text-sm text-cream-batter/80">
            <a
              href={CREPERIE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 hover:text-white transition-colors"
            >
              <MapPin className="mt-0.5 h-4 w-4 text-caramel-gold shrink-0" />
              <span>{t.address}</span>
            </a>
            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 text-caramel-gold shrink-0" />
              <span>{t.hours}</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={`tel:${CREPERIE_PHONE_DISPLAY.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 font-medium text-cream-batter hover:text-white transition-colors tabular-nums"
            >
              <Phone className="h-4 w-4 text-caramel-gold shrink-0" />
              <span>{CREPERIE_PHONE_DISPLAY}</span>
            </a>
            <div>
              <a
                href={quickWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp hover:underline"
              >
                <span>WhatsApp Direct</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div>
              <a
                href={CREPERIE_GLOVO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cream-batter/65 hover:text-cream-batter transition-colors"
              >
                <span>{t.glovo}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-cream-batter/55">
          <span>{t.rights}</span>
          <span>{t.address}</span>
        </div>
      </div>
    </footer>
  );
}
