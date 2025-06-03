"use client";

import type { LatLngExpression } from 'leaflet'; // Type imports are safe
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useMemo, useId } from 'react'; // Import useId

export default function MapSection() {
  const position: LatLngExpression = [6.6388, 3.3306]; // Approximate coordinates for Ogba, Lagos
  const address = "No 64, Ijaye Road, Benedita plaza, Ogba, Lagos";
  const mapInstanceKey = useId(); // Generate a unique key

  // Dynamically import the client-side map component
  // useMemo with an empty dependency array ensures this component reference is stable
  const MapClientDynamic = useMemo(() => dynamic(
    () => import('@/components/map-client').then((mod) => mod.MapClientComponent),
    {
      ssr: false, // Ensure it only renders on the client
      loading: () => ( // Placeholder specifically for the map area
        <div className="w-full h-[400px] md:h-[500px] bg-muted rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-foreground/60">Loading map...</p>
        </div>
      )
    }
  ), []);

  return (
    <section id="location" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center mb-4">
                 <MapPin className="h-10 w-10 text-primary mr-3" />
                <h2 className="font-headline text-4xl md:text-5xl text-primary">Visit Our Location</h2>
            </div>
          <p className="font-body text-lg text-foreground/80">{address}</p>
        </div>
        {/* Render the dynamically imported map component with a unique key */}
        <MapClientDynamic key={mapInstanceKey} position={position} address={address} />
      </div>
    </section>
  );
}
