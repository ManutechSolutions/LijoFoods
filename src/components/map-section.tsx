
"use client";

import type { LatLngExpression } from 'leaflet'; // Type imports are safe
import { MapPin } from 'lucide-react'; // Used in placeholder
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
// Leaflet CSS is imported in layout.tsx, so it's not strictly needed here again,
// but can be kept if preferred for component-specific CSS bundling.
// import 'leaflet/dist/leaflet.css'; 

// Define Placeholder directly in this file
const MapPlaceholder = ({ address }: { address: string }) => (
  <section id="location" className="w-full py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center items-center mb-4">
        <MapPin className="h-10 w-10 text-primary mr-3" />
        <h2 className="font-headline text-4xl md:text-5xl text-primary">Visit Our Location</h2>
      </div>
      <p className="font-body text-lg text-foreground/80 mb-8">{address}</p>
      <div className="w-full h-[400px] bg-muted rounded-lg shadow-lg flex items-center justify-center">
        <p className="text-foreground/60">Loading map...</p>
      </div>
    </div>
  </section>
);


export default function MapSection() {
  const position: LatLngExpression = [6.6388, 3.3306]; // Approximate coordinates for Ogba, Lagos
  const address = "No 64, Ijaye Road, Benedita plaza, Ogba, Lagos";

  const MapWithNoSSR = useMemo(() => dynamic(
    () => import('@/components/map-client').then((mod) => mod.MapClientComponent),
    {
      ssr: false, // This is crucial: the component will only render on the client side
      loading: () => <MapPlaceholder address={address} /> // Show placeholder during SSR and loading
    }
  ), [address]); // Dependency array for useMemo

  return <MapWithNoSSR position={position} address={address} />;
}
