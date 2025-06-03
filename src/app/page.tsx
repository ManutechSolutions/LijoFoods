import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import CuisineSlider from '@/components/cuisine-slider';
import ProductShowcase from '@/components/product-showcase';
import CustomerCounter from '@/components/customer-counter';
import ReviewSection from '@/components/review-section';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';

const heroImages = [
  { src: 'https://placehold.co/1920x1080.png', alt: 'Delicious Nigerian food spread', hint: 'nigerian food feast' },
  { src: 'https://placehold.co/1920x1081.png', alt: 'Jollof rice in a bowl', hint: 'jollof rice bowl' }, // Changed height slightly for unique URL
  { src: 'https://placehold.co/1920x1082.png', alt: 'Assorted suya platter', hint: 'suya platter' }, // Changed height slightly for unique URL
  { src: 'https://placehold.co/1920x1083.png', alt: 'Egusi soup with fufu', hint: 'egusi soup fufu' }, // Changed height slightly for unique URL
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
