"use client";

import { useState, useEffect, useRef } from 'react';
import { Users, Smile } from 'lucide-react';

export default function CustomerCounter() {
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(0);
  const [eventsCatered, setEventsCatered] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  
  const targetCustomers = 1250;
  const targetEvents = 300;
  const targetYears = 5;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 50); // 50ms interval

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.ceil(start));
        }
      }, 50);
      return () => clearInterval(timer);
    };

    animateCount(setSatisfiedCustomers, targetCustomers);
    animateCount(setEventsCatered, targetEvents);
    animateCount(setYearsExperience, targetYears);

  }, [isVisible, targetCustomers, targetEvents, targetYears]);

  const CounterItem = ({ icon, value, label }: { icon: React.ReactNode, value: number, label: string }) => (
    <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
      {icon}
      <p className="font-headline text-5xl text-primary mt-3 mb-2">{value.toLocaleString()}+</p>
      <p className="font-body text-lg text-foreground/80">{label}</p>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-center mb-12">Our Journey So Far</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isVisible && (
            <>
              <CounterItem icon={<Smile size={48} className="text-accent" />} value={satisfiedCustomers} label="Happy Customers" />
              <CounterItem icon={<Users size={48} className="text-accent" />} value={eventsCatered} label="Events Catered" />
              <CounterItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M19.07 4.93a10 10 0 0 0-16.28 11.05A10 10 0 0 0 7.1 21.98l4.9-4.9a1 1 0 0 1 1.41 0l4.9 4.9a10 10 0 0 0 4.28-11.92Z"/><path d="M10.5 12H12a1.5 1.5 0 0 1 0 3H9V9a1.5 1.5 0 0 1 3 0v3Z"/></svg>} value={yearsExperience} label="Years of Experience" />
            </>
          )}
          {!isVisible && ( // Placeholder for SSR or before intersection
            <>
              <div className="h-48 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-48 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-48 bg-muted rounded-lg animate-pulse"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
