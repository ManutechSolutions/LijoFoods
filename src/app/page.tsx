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
  { src: 'https://placehold.co/1920x1080/EADDCA/5D4037?text=Jollof+Rice', alt: 'Delicious Jollof Rice', hint: 'jollof rice feast' },
  { src: 'https://placehold.co/1920x1081/F2D4C7/A1887F?text=Suya+Platter', alt: 'Assorted Suya Platter', hint: 'suya platter assorted' },
  { src: 'https://placehold.co/1920x1082/D1C4E9/4527A0?text=Egusi+Soup', alt: 'Egusi Soup with Pounded Yam', hint: 'egusi soup fufu' },
  { src: 'https://placehold.co/1920x1083/C8E6C9/2E7D32?text=Nigerian+Catering', alt: 'Nigerian Food Catering Spread', hint: 'nigerian food catering' },
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
