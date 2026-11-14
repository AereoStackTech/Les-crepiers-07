import React from 'react';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { CartSheet } from '@/components/layout/CartSheet';
import { MobileCartBar } from '@/components/layout/MobileCartBar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { ServiceModes } from '@/components/sections/ServiceModes';
import { OrderCheckout } from '@/components/sections/OrderCheckout';

export default function HomePage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <MenuSection />
          <ServiceModes />
          <OrderCheckout />
        </main>
        <Footer />
        <CartSheet />
        <MobileCartBar />
      </div>
    </CartProvider>
  );
}
