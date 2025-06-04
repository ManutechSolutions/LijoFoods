import Link from 'next/link';
import { CookingPot, Mail, Phone, Instagram, MapPin, } from 'lucide-react';
// Removed: import { FaWhatsapp } from 'react-icons/fa6';

// Inline SVG for WhatsApp Icon
const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-primary-foreground hover:text-accent transition-colors"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.62C8.75 21.39 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.13 19.74 7.89 19L7.5 18.78L4.42 19.65L5.32 16.65L5.08 16.26C4.22 14.93 3.81 13.38 3.81 11.91C3.81 7.39 7.52 3.68 12.04 3.68C16.56 3.68 20.27 7.39 20.27 11.91C20.27 16.43 16.56 20.13 12.04 20.13ZM17.44 14.2C17.21 14.2 16.05 13.63 15.82 13.53C15.59 13.44 15.42 13.39 15.26 13.67C15.09 13.95 14.52 14.6 14.35 14.78C14.19 14.96 14.02 15 13.79 14.9C13.56 14.81 12.76 14.54 11.81 13.7C11.06 13.03 10.59 12.17 10.43 11.89C10.26 11.61 10.39 11.46 10.52 11.34C10.63 11.23 10.78 11.03 10.91 10.88C11.04 10.73 11.11 10.6 11.23 10.37C11.35 10.14 11.27 9.95 11.19 9.77C11.11 9.59 10.54 8.25 10.32 7.78C10.1 7.31 9.88 7.37 9.72 7.36C9.57 7.35 9.4 7.35 9.24 7.35C9.07 7.35 8.82 7.4 8.62 7.63C8.42 7.86 7.91 8.33 7.91 9.46C7.91 10.59 8.65 11.68 8.78 11.86C8.91 12.04 10.54 14.59 12.97 15.55C15.41 16.51 15.41 16.16 15.82 16.1C16.24 16.04 17.21 15.48 17.4 15.05C17.59 14.62 17.59 14.29 17.52 14.2C17.48 14.2 17.44 14.2 17.44 14.2Z" />
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "2347067724236";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello LijoFoods! I'm interested coming from your website, I want ")}`;
  const instagramLink = "https://www.instagram.com/_lijofoods?igsh=MXFxbGd4ZjdqY21tYg==";

  return (
    <footer id="contact" className="w-full bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#hero" legacyBehavior>
              <a className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
                <CookingPot size={32} />
                <span className="font-headline text-3xl">LijoFoods</span>
              </a>
            </Link>
            <p className="font-body text-sm opacity-90 leading-relaxed">
              Bringing the authentic taste of Nigerian cuisine to your events. Quality ingredients, traditional recipes, unforgettable flavors.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><Link href="#hero" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#cuisine" className="hover:text-accent transition-colors">Our Cuisine</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#reviews" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="#location" className="hover:text-accent transition-colors">Our Location</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span> +234 7067724236</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Address- No 64, Ijaye Road, Benedita plaza, Ogba, Lagos
                </span>
              </li>
              <li className="pt-2">
                <p className="font-semibold">Business Hours:</p>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </li>
               <li className="pt-2">
                <h4 className="font-semibold mb-1">Follow Us:</h4>
                <div className="flex space-x-3">
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                    <Instagram size={22} />
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent transition-colors">
                    <WhatsAppIcon size={22} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-sm opacity-80">
            &copy; {currentYear} LijoFoods. All Rights Reserved. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
