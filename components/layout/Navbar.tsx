'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SITE_COPY } from '@/data/creperie-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { lang, setLang, totalItems, setIsSheetOpen } = useCart();
  const t = SITE_COPY[lang].nav;

  return (
    <header className="sticky top-0 z-40 border-b border-espresso-dark/10 bg-cream-batter/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 md:h-16 max-w-6xl items-center justify-between gap-4 md:gap-8 px-4 sm:px-6">
        <a
          href="#hero"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-espresso-dark whitespace-nowrap shrink-0"
        >
          Les crepiers 07
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-espresso-dark/75">
          <a
            href="#menu"
            className="hover:text-espresso-dark hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.menu}
          </a>
          <a
            href="#service"
            className="hover:text-espresso-dark hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.service}
          </a>
          <a
            href="#commander"
            className="hover:text-espresso-dark hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.access}
          </a>
          <button
            type="button"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
            className="text-xs font-semibold tracking-wide text-espresso-dark/65 hover:text-espresso-dark transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span className={cn(lang === 'fr' && 'text-espresso-dark underline underline-offset-4')}>
              FR
            </span>
            <span className="mx-1 text-espresso-dark/30">/</span>
            <span className={cn(lang === 'en' && 'text-espresso-dark underline underline-offset-4')}>
              EN
            </span>
          </button>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
            className="md:hidden px-2 py-1 text-xs font-semibold text-espresso-dark/75 hover:text-espresso-dark whitespace-nowrap shrink-0 cursor-pointer"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <button
            type="button"
            onClick={() => setIsSheetOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-espresso-dark px-3.5 py-2 text-xs sm:text-sm font-semibold text-cream-batter hover:bg-espresso-dark/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4 text-caramel-gold" />
            <span>
              {t.cart} (<span className="tabular-nums">{totalItems}</span>)
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
