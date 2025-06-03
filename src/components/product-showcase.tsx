import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, CakeSlice, ShoppingBasket, PartyPopper, LayoutPanelLeft, Soup } from 'lucide-react';

const services = [
  {
    title: 'Wedding Catering',
    description: 'Elegant and memorable culinary experiences for your special day. Full buffet or plated service available.',
    image: 'https://placehold.co/600x400.png',
    icon: <ShoppingBasket className="h-10 w-10 text-primary mb-4" />,
    hint: "wedding catering food"
  },
  {
    title: 'Corporate Events',
    description: 'Professional catering for business lunches, conferences, and corporate parties. Impress your clients and colleagues.',
    image: 'https://placehold.co/600x400.png',
    icon: <UtensilsCrossed className="h-10 w-10 text-primary mb-4" />,
    hint: "corporate event food"
  },
  {
    title: 'Private Parties',
    description: 'From birthdays to anniversaries, we provide delicious food that makes your celebration extra special.',
    image: 'https://placehold.co/600x400.png',
    icon: <CakeSlice className="h-10 w-10 text-primary mb-4" />,
    hint: "party food platter"
  },
  {
    title: 'Small Chops',
    description: 'A delightful assortment of bite-sized Nigerian snacks, perfect for any gathering or as appetizers.',
    image: 'https://placehold.co/600x400.png',
    icon: <PartyPopper className="h-10 w-10 text-primary mb-4" />,
    hint: "nigerian small chops"
  },
  {
    title: 'Food Trays',
    description: 'Beautifully arranged food trays, ideal for meetings, small parties, or as a thoughtful culinary gift.',
    image: 'https://placehold.co/600x400.png',
    icon: <LayoutPanelLeft className="h-10 w-10 text-primary mb-4" />,
    hint: "nigerian food tray"
  },
  {
    title: 'Delicious Soup Bowls',
    description: 'Hearty and flavorful traditional Nigerian soups, served in convenient bowls for easy enjoyment.',
    image: 'https://placehold.co/600x400.png',
    icon: <Soup className="h-10 w-10 text-primary mb-4" />,
    hint: "nigerian soup bowl"
  },
];

export default function ProductShowcase() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-center mb-4">Our Catering Services</h2>
        <p className="font-body text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
          LijoFoods offers a range of catering services tailored to your needs. We ensure quality, flavor, and impeccable service every time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader className="items-center text-center p-6">
                {service.icon}
                <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={service.hint}
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <CardDescription className="font-body text-foreground/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
