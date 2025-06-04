"use client";

import { Button } from '@/components/ui/button';
 import { FaWhatsapp } from 'react-icons/fa6';


export default function WhatsAppButton() {
  const message = "Hello LijoFoods! I'm interested coming from your website, I want ";
  const phoneNumber = "2347067724236";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Order via WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full shadow-xl p-4 h-16 w-16 bg-green-500 hover:bg-green-600 text-white
                   transition-all duration-300 ease-in-out transform group-hover:scale-110"
      >
        <FaWhatsapp style={{height: '2em', width: '2em'}} />
        <span className="sr-only">Order via WhatsApp</span>
      </Button>
      <span 
        className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 px-3 py-2
                   bg-foreground text-background text-xs font-semibold rounded-md shadow-md
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
