
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

const AUTO_SCROLL_INTERVAL = 5000; // milliseconds

export default function CuisineSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [extendedDishes, setExtendedDishes] = useState<Dish[]>([]);
  const [isReady, setIsReady] = useState(false);
  const isTransitioningRef = useRef(false);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    if (originalDishes.length === 0) {
      setIsReady(true);
      return;
    }
    setExtendedDishes([...originalDishes, ...originalDishes, ...originalDishes]);

    const timer = setTimeout(() => {
      if (scrollContainerRef.current && scrollContainerRef.current.children.length > originalDishes.length) {
        const firstOriginalItem = scrollContainerRef.current.children[originalDishes.length] as HTMLElement;
        if (firstOriginalItem) {
          scrollContainerRef.current.scrollTo({ left: firstOriginalItem.offsetLeft, behavior: 'instant' });
        }
      }
      setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; 
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  }, []);

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
    const cardWidth = firstOriginalItem.offsetWidth || 300;

    if (currentScrollLeft < firstOriginalItem.offsetLeft - cardWidth * 0.5 ) {
      isTransitioningRef.current = true;
      container.scrollLeft += originalBlockWidth;
      requestAnimationFrame(() => { isTransitioningRef.current = false; });
    }
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

  const startAutoScroll = useCallback(() => {
    if (userInteractedRef.current || originalDishes.length <=1 ) return; // Don't auto-scroll if only one or no items
    if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
    autoScrollTimerRef.current = setInterval(() => {
      scroll('right');
    }, AUTO_SCROLL_INTERVAL);
  }, [scroll]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isReady) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isReady, startAutoScroll, stopAutoScroll]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    userInteractedRef.current = true;
    stopAutoScroll();
    scroll(direction);
    // Optionally restart auto-scroll after a delay
    // setTimeout(() => {
    //   userInteractedRef.current = false;
    //   startAutoScroll();
    // }, AUTO_SCROLL_INTERVAL * 2); 
  };
  
  const handleMouseEnter = () => {
    if (originalDishes.length > 1) { // Only stop if there's something to scroll
      userInteractedRef.current = true;
      stopAutoScroll();
    }
  };

  const handleMouseLeave = () => {
     if (originalDishes.length > 1) {
      userInteractedRef.current = false;
      startAutoScroll();
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
        <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide"
          >
            {dishesToRender.map((dish, index) => (
              <div key={`${dish.name}-${index}`} className="flex-shrink-0 w-[300px] md:w-[350px]">
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
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          {isReady && originalDishes.length > 1 && ( // Only show buttons if more than one dish
            <>
              <button 
                onClick={() => handleManualScroll('left')} 
                aria-label="Scroll left"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/50 hover:bg-primary/80 text-primary hover:text-primary-foreground rounded-full shadow-md transition-colors duration-300 -ml-4 md:-ml-6 hidden sm:block"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={() => handleManualScroll('right')} 
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
