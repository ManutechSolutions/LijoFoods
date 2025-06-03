"use client"; // This component is strictly client-side

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Safe to import L here as this component is only client-side
import type { IconOptions, LatLngExpression } from 'leaflet';
// Leaflet CSS is globally imported in layout.tsx, so removed from here to avoid redundancy

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
  const mapRef = useRef<L.Map | null>(null); // Ref to store the map instance
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the map container div

  useEffect(() => {
    // Initialize map only if it doesn't exist
    if (mapRef.current === null && mapContainerRef.current !== null) {
      const map = L.map(mapContainerRef.current, {
        center: position,
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      const marker = L.marker(position, { icon: defaultIcon }).addTo(map);

      marker.bindPopup(`
        <span className="font-headline text-lg text-primary">LijoFoods</span><br />
        ${address}
      `).openPopup();

      mapRef.current = map;
    } else if (mapRef.current !== null) {
      // If map exists, just update its view
      mapRef.current.setView(position, 16);
    }

    // Cleanup function
    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [position, address]); // Depend on position and address to update map view
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-lg shadow-xl overflow-hidden border border-border">
         <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
