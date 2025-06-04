
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bike, PackageCheck } from 'lucide-react';
import Link from 'next/link';

export default function DeliverySection() {
  const phoneNumber = "2347067724236";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello LijoFoods! I'm interested in placing an order for delivery.")}`;

  return (
    <section id="delivery" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Food delivery"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="food delivery scooter"
            />
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-10 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <PackageCheck size={48} className="text-primary" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">
                Fast & Reliable Delivery
              </h2>
              <p className="font-body text-md md:text-lg text-foreground/80 mb-8">
                Get your favorite Nigerian dishes delivered straight to your doorstep! We ensure your food arrives fresh, hot, and ready to enjoy. Perfect for your home, office, or any gathering.
              </p>
              <Link href={whatsappLink} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="lg" variant="default" className="font-body text-lg px-8 py-6 w-full sm:w-auto">
                    <Bike className="mr-2 h-5 w-5" /> Order Now for Delivery
                  </Button>
                </a>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
