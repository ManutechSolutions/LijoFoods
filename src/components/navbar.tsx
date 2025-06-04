// @ts-nocheck
"use client";

import Link from 'next/link';
import { CookingPot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#cuisine', label: 'Cuisine' },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Order Now' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          // @ts-ignore
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = link.href.substring(1);
          }
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    navLinks.map((link) => (
      <Link key={link.href} href={link.href} legacyBehavior>
        <a
          className={`px-3 py-2 rounded-md text-sm transition-colors
            ${isMobile ? 'block w-full text-left hover:bg-accent hover:text-accent-foreground' : 'hover:text-primary'}
            ${activeSection === link.href.substring(1) && !isMobile ? 'text-primary font-semibold' : 'text-foreground/80'}
            ${activeSection === link.href.substring(1) && isMobile ? 'bg-accent text-accent-foreground font-semibold' : ''}
          `}
        >
          {link.label}
        </a>
      </Link>
    ))
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#hero" legacyBehavior>
            <a className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity w-[80px] h-[80px] rounded-full bg-[#9f5c2d]">
              <Image src={Logo} alt='Logo' className=' object-cover'/>
              {/* <CookingPot size={32} /> */}
              {/* <span className="font-headline text-3xl">LijoFoods</span> */}
            </a>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLinksContent />
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-4">
                  <NavLinksContent isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
