"use client";

import { Button } from '@/components/ui/button';
// Removed: import { FaWhatsapp } from 'react-icons/fa6';

// Inline SVG for WhatsApp Icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32" 
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.62C8.75 21.39 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.13 19.74 7.89 19L7.5 18.78L4.42 19.65L5.32 16.65L5.08 16.26C4.22 14.93 3.81 13.38 3.81 11.91C3.81 7.39 7.52 3.68 12.04 3.68C16.56 3.68 20.27 7.39 20.27 11.91C20.27 16.43 16.56 20.13 12.04 20.13ZM17.44 14.2C17.21 14.2 16.05 13.63 15.82 13.53C15.59 13.44 15.42 13.39 15.26 13.67C15.09 13.95 14.52 14.6 14.35 14.78C14.19 14.96 14.02 15 13.79 14.9C13.56 14.81 12.76 14.54 11.81 13.7C11.06 13.03 10.59 12.17 10.43 11.89C10.26 11.61 10.39 11.46 10.52 11.34C10.63 11.23 10.78 11.03 10.91 10.88C11.04 10.73 11.11 10.6 11.23 10.37C11.35 10.14 11.27 9.95 11.19 9.77C11.11 9.59 10.54 8.25 10.32 7.78C10.1 7.31 9.88 7.37 9.72 7.36C9.57 7.35 9.4 7.35 9.24 7.35C9.07 7.35 8.82 7.4 8.62 7.63C8.42 7.86 7.91 8.33 7.91 9.46C7.91 10.59 8.65 11.68 8.78 11.86C8.91 12.04 10.54 14.59 12.97 15.55C15.41 16.51 15.41 16.16 15.82 16.1C16.24 16.04 17.21 15.48 17.4 15.05C17.59 14.62 17.59 14.29 17.52 14.2C17.48 14.2 17.44 14.2 17.44 14.2Z" />
  </svg>
);


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
        <WhatsAppIcon />
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
