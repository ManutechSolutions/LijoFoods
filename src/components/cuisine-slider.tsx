
"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useEffect, useState, useCallback } from 'react';

const originalDishes = [
  { name: 'Jollof Rice', image: '/images/istockphoto-644430366-612x612.jpg', description: 'Smoky party jollof, a true delight.', hint: 'jollof rice' },
  { name: 'Egusi Soup', image: '/images/istockphoto-498311434-612x612.jpg', description: 'Rich melon seed soup with assorted meats.', hint: 'egusi soup' },
  { name: 'Beans & Plantain', image: '/images/istockphoto-1448028211-612x612.jpg', description: 'Better soft beans with ripe plantain', hint: 'beans and plantain' },
  { name: 'Pounded Yam & Efo Riro', image: '/images/femoree-kn_ANxnwCQ0-unsplash.jpg', description: 'Classic combo for a hearty meal.', hint: 'pounded yam' },
  { name: 'Moi Moi', image: '/images/femi-oyekoya-rbEtzd20Qcw-unsplash.jpg', description: 'Steamed bean pudding, savory and delicious.', hint: 'moi moi' },
  { name: 'Fried Rice', image: '/images/istockphoto-1299613532-612x612.jpg', description: 'Colorful and flavorful Nigerian fried rice.', hint: 'fried rice' },
];

type Dish = typeof originalDishes[0];

export default function CuisineSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [extendedDishes, setExtendedDishes] = useState<Dish[]>([]);
  const [isReady, setIsReady] = useState(false);
  const isTransitioningRef = useRef(false); // To prevent scroll events during instant jump

  useEffect(() => {
    if (originalDishes.length === 0) {
      setIsReady(true);
      return;
    }
    // Triplicate dishes for infinite effect: [clone, original, clone]
    setExtendedDishes([...originalDishes, ...originalDishes, ...originalDishes]);

    // Wait for the DOM to update with extendedDishes
    const timer = setTimeout(() => {
      if (scrollContainerRef.current && scrollContainerRef.current.children.length > originalDishes.length) {
        const firstOriginalItem = scrollContainerRef.current.children[originalDishes.length] as HTMLElement;
        if (firstOriginalItem) {
          scrollContainerRef.current.scrollTo({ left: firstOriginalItem.offsetLeft, behavior: 'instant' });
        }
      }
      setIsReady(true);
    }, 0); // Using setTimeout to allow DOM update

    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  const handleInfiniteScroll = useCallback(() => {
    if (!scrollContainerRef.current || !isReady || originalDishes.length === 0 || isTransitioningRef.current) {
      return;
    }

    const container = scrollContainerRef.current;
    const currentScrollLeft = container.scrollLeft;

    const firstOriginalItem = container.children[originalDishes.length] as HTMLElement;
    const lastOriginalItem = container.children[originalDishes.length * 2 - 1] as HTMLElement;
    
    if (!firstOriginalItem || !lastOriginalItem) return;

    const originalBlockWidth = (lastOriginalItem.offsetLeft + lastOriginalItem.offsetWidth) - firstOriginalItem.offsetLeft;
    
    // Threshold is roughly one card width. If not enough children, don't proceed.
    const cardWidth = firstOriginalItem.offsetWidth || 300; // Estimate if offsetWidth is 0

    // Check if scrolled to the "left clone" area
    if (currentScrollLeft < firstOriginalItem.offsetLeft - cardWidth * 0.5 ) {
      isTransitioningRef.current = true;
      container.scrollLeft += originalBlockWidth;
      requestAnimationFrame(() => { isTransitioningRef.current = false; });
    }
    // Check if scrolled to the "right clone" area
    else if (currentScrollLeft > (lastOriginalItem.offsetLeft + lastOriginalItem.offsetWidth - container.clientWidth + cardWidth * 0.5) ) {
      isTransitioningRef.current = true;
      container.scrollLeft -= originalBlockWidth;
      requestAnimationFrame(() => { isTransitioningRef.current = false; });
    }
  }, [isReady, originalDishes.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && isReady) {
      container.addEventListener('scroll', handleInfiniteScroll);
      return () => container.removeEventListener('scroll', handleInfiniteScroll);
    }
  }, [isReady, handleInfiniteScroll]);


  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust as needed, perhaps based on card width
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  if (originalDishes.length === 0) {
    return (
      <section id="cuisine" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-lg text-foreground/80">No dishes to display.</p>
        </div>
      </section>
    );
  }
  
  const dishesToRender = extendedDishes.length > 0 ? extendedDishes : originalDishes;


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
            // Removed scroll-snap properties
          >
            {dishesToRender.map((dish, index) => (
              // Ensure unique keys for cloned items
              <div key={`${dish.name}-${index}`} className="flex-shrink-0 w-[300px] md:w-[350px]" /* Removed scroll-snap-align */>
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
          {isReady && (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}

    