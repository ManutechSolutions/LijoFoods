import Link from "next/link";
import { CookingPot, Mail, Phone, Instagram, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "2347067724236";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello LijoFoods! I'm coming from your website, I want "
  )}`;
  const instagramLink =
    "https://www.instagram.com/_lijofoods?igsh=MXFxbGd4ZjdqY21tYg==";

  return (
    <footer
      id="contact"
      className="w-full bg-primary text-primary-foreground py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#hero" legacyBehavior>
              <a className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity w-[50px] h-[50px] rounded-full bg-[#9f5c2d]">
                <Image src={Logo} alt="Logo" className=" object-cover" />
                {/* <CookingPot size={32} /> */}
                {/* <span className="font-headline text-3xl">LijoFoods</span> */}
              </a>
            </Link>
            <p className="font-body text-sm opacity-90 leading-relaxed">
              Bringing the authentic taste of Nigerian cuisine to your events.
              Quality ingredients, traditional recipes, unforgettable flavors.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#cuisine"
                  className="hover:text-accent transition-colors"
                >
                  Our Cuisine
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="hover:text-accent transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="hover:text-accent transition-colors"
                >
                  Our Location
                </Link>
              </li>
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
                <span>
                  Address- No 64, Ijaye Road, Benedita plaza, Ogba, Lagos
                </span>
              </li>
              <li className="pt-2">
                <p className="font-semibold">Business Hours:</p>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </li>
              <li className="pt-2">
                <h4 className="font-semibold mb-1">Follow Us:</h4>
                <div className="flex space-x-3">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-accent transition-colors"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="hover:text-accent transition-colors"
                  >
                    <FaWhatsapp size={22} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-sm opacity-80">
            &copy; {currentYear} LijoFoods. All Rights Reserved.{" "}
            <a
              href="https://wa.me/393509667036"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed by ManuTechSolutions.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
