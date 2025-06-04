
"use client";

import { Button } from '@/components/ui/button';
import { Bike } from 'lucide-react';
import Link from 'next/link';

export default function DeliverySection() {
  const phoneNumber = "2347067724236";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello LijoFoods! I'm interested in placing an order for delivery.")}`;

  return (
    <section id="delivery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Bike size={48} className="text-primary" />
        </div>
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">
          Fast & Reliable Delivery
        </h2>
        <p className="font-body text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
          Get your favorite Nigerian dishes delivered straight to your doorstep! We ensure your food arrives fresh, hot, and ready to enjoy. Perfect for your home, office, or any gathering.
        </p>
        <Link href={whatsappLink} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="default" className="font-body text-lg px-8 py-6">
              Order Now for Delivery
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
}
