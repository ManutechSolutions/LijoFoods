import Link from 'next/link';
import { CookingPot, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>Address- No 64, Ijaye Road, Benedita plaza, Ogba, Lagos 
                </span>
              </li>
              <li className="pt-2">
                <p className="font-semibold">Business Hours:</p>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
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
