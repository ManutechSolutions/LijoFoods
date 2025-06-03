import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import CuisineSlider from '@/components/cuisine-slider';
import ProductShowcase from '@/components/product-showcase';
import CustomerCounter from '@/components/customer-counter';
import ReviewSection from '@/components/review-section';
import MapSection from '@/components/map-section';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';


const heroImages = [
  { src: '/images/femoree-kn_ANxnwCQ0-unsplash.jpg', alt: 'Delicious Nigerian food spread', hint: 'nigerian food feast' },
  { src: '/images/alfredo-burgos-LAhQ2YdD-T8-unsplash.jpg', alt: 'Jollof rice in a bowl', hint: 'jollof rice bowl' },
  { src: '/images/dr-muhammad-amer-d0ey0aExQbk-unsplash.jpg', alt: 'Assorted suya platter', hint: 'suya platter' },
  { src: '/images/mario-raj-n1z3gc9gJ8I-unsplash.jpg', alt: 'Egusi soup with fufu', hint: 'egusi soup fufu' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection images={heroImages} />
        <CuisineSlider />
        <ProductShowcase />
        <CustomerCounter />
        <ReviewSection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
