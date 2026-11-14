'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, title, subtitle, children }: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={title}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-espresso-dark/45 backdrop-blur-xs"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 360, damping: 36 }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-cream-batter shadow-2xl border-l border-espresso-dark/10"
          >
            <div className="flex items-start justify-between gap-4 border-b border-espresso-dark/10 px-6 py-5">
              <div>
                <h2 className="font-display text-xl font-bold text-espresso-dark">{title}</h2>
                {subtitle && (
                  <p className="mt-1 text-sm text-espresso-dark/65">{subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-espresso-dark/70 hover:bg-espresso-dark/5 hover:text-espresso-dark transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
