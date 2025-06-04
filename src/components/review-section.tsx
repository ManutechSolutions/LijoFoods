import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const reviews = [
  {
    firstName: 'Adeola ',
    lastName: 'Johnson',
    // avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'smiling person',
    review: "LijoFoods catered my wedding and it was phenomenal! The Jollof rice was the best I've ever had. Highly recommended!",
    rating: 5,
    event: "Wedding Reception"
  },
  {
    firstName: 'Chinedu',
    lastName: 'Nwosu',
    // avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'professional person',
    review: "Their corporate catering service is top-notch. Punctual, professional, and the food was absolutely delicious. Our clients were impressed.",
    rating: 5,
    event: "Corporate Luncheon"
  },
  {
    firstName: 'Fatima',
    lastName: 'Bello',
    // avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'happy customer',
    review: "Used LijoFoods for my daughter's birthday party. The kids and adults loved the variety and taste. The Suya was a hit!",
    rating: 4,
    event: "Birthday Party"
  },
];

export default function ReviewSection() {
  return (
    <section id="reviews" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-center mb-4">What Our Customers Say</h2>
        <p className="font-body text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
          We take pride in delighting our customers. Here’s what they have to say about their LijoFoods experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-6">
                <Avatar className="h-16 w-16">
                  {/* <AvatarImage src={review.avatar} alt={review.firstName.charAt(0) + review.lastName.charAt(0)} data-ai-hint={review.avatarHint} /> */}
                  <AvatarFallback className='font-semibold text-xl text-primary'>{review.firstName.charAt(0) + review.lastName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-headline text-xl text-primary">{review.firstName + ' ' + review.lastName}</CardTitle>
                  <p className="text-sm text-muted-foreground font-body">{review.event}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <div className="flex mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <p className="font-body text-foreground/80 leading-relaxed italic">"{review.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
