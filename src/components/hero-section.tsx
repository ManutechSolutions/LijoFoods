"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HeroImage {
  src: string;
  alt: string;
  hint: string;
}

interface HeroSectionProps {
  images: HeroImage[];
}

export default function HeroSection({ images }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images]); // Re-run effect if images array changes

  const defaultContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10  z-10"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-foreground/90 mb-6 leading-tight">
          Savor Authentic Nigerian Flavors
        </h1>
        <p className="font-body text-xl md:text-2xl text-foreground/100 font-semibold max-w-3xl mx-auto mb-10">
          Experience the rich taste of Nigeria with LijoFoods. We offer premium catering services for all your events, bringing traditional recipes and modern elegance to your table.
        </p>
        <div className="space-x-4">
          <Link href="#cuisine" passHref>
            <Button size="lg" variant="default" className="font-body text-lg px-8 py-6">
              Explore Our Menu
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button size="lg" variant="outline" className="font-body text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
              Book Catering
            </Button>
          </Link>
        </div>
      </div>
    </>
  );

  if (!images || images.length === 0) {
    return (
      <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {defaultContent}
      </section>
    );
  }

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image.src + index} // Unique key for each image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          quality={80}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-80' : 'opacity-0'
          }`}
          data-ai-hint={image.hint}
          priority={index === 0} // Prioritize the first image for LCP
        />
      ))}
      {defaultContent}
    </section>
  );
}
