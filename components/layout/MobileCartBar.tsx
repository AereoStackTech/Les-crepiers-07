'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SITE_COPY } from '@/data/creperie-menu';

export function MobileCartBar() {
  const { lang, totalItems, estimatedTotal, setIsSheetOpen } = useCart();
  const t = SITE_COPY[lang].mobileBar;

  const itemWord = totalItems === 1 ? t.itemsSingular : t.itemsPlural;

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-espresso-dark/15 bg-espresso-dark text-cream-batter shadow-lg"
        >
          <div className="flex h-14 items-center justify-between gap-3 px-4">
            <div className="min-w-0">
              <p className="text-xs text-cream-batter/75 tabular-nums truncate">
                {totalItems} {itemWord} · <strong className="text-white font-semibold">~{estimatedTotal} MAD</strong>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSheetOpen(true)}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-whatsapp px-3.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{t.cta}</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
