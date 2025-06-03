
"use client"; // This component is strictly client-side

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Safe to import L here as this component is only client-side
import type { IconOptions, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is loaded (can be redundant if in layout.tsx)
import { MapPin } from 'lucide-react';

// Fix for default Leaflet icon path issue in Next.js, defined client-side
const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41] as [number, number],
    iconAnchor: [12, 41] as [number, number],
    popupAnchor: [1, -34] as [number, number],
    shadowSize: [41, 41] as [number, number],
} as IconOptions);

interface MapClientComponentProps {
  position: LatLngExpression;
  address: string;
}

export function MapClientComponent({ position, address }: MapClientComponentProps) {
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
        <div className="w-full h-[400px] md:h-[500px] rounded-lg shadow-xl overflow-hidden border border-border">
          <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} attributionControl={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={defaultIcon}>
              <Popup>
                <span className="font-headline text-lg text-primary">LijoFoods</span><br />
                {address}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
