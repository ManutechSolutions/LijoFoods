"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

const dishes = [
  { name: 'Jollof Rice', image: 'https://placehold.co/400x300.png', description: 'Smoky party jollof, a true delight.', hint: 'jollof rice' },
  { name: 'Egusi Soup', image: 'https://placehold.co/400x300.png', description: 'Rich melon seed soup with assorted meats.', hint: 'egusi soup' },
  { name: 'Suya', image: 'https://placehold.co/400x300.png', description: 'Spicy grilled meat skewers, a street food classic.', hint: 'suya meat' },
  { name: 'Pounded Yam & Egusi', image: 'https://placehold.co/400x300.png', description: 'Classic combo for a hearty meal.', hint: 'pounded yam' },
  { name: 'Moi Moi', image: 'https://placehold.co/400x300.png', description: 'Steamed bean pudding, savory and delicious.', hint: 'moi moi' },
  { name: 'Fried Rice', image: 'https://placehold.co/400x300.png', description: 'Colorful and flavorful Nigerian fried rice.', hint: 'fried rice' },
];

export default function CuisineSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="cuisine" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-center mb-4">Our Delectable Cuisine</h2>
        <p className="font-body text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
          Discover a variety of mouth-watering Nigerian dishes, perfect for any occasion. Each prepared with love and the finest ingredients.
        </p>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {dishes.map((dish, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px]" style={{ scrollSnapAlign: 'start' }}>
                <Card className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover"
                      data-ai-hint={dish.hint}
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="font-headline text-2xl text-primary mb-2">{dish.name}</CardTitle>
                    <p className="font-body text-foreground/70 text-sm">{dish.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                     {/* Optional: Add a small button or link here */}
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('left')} 
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 hover:bg-primary/80 text-primary hover:text-primary-foreground rounded-full shadow-md transition-colors duration-300 -ml-4 md:-ml-6 hidden sm:block"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 hover:bg-primary/80 text-primary hover:text-primary-foreground rounded-full shadow-md transition-colors duration-300 -mr-4 md:-mr-6 hidden sm:block"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
