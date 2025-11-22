"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import { useMap } from "react-leaflet";
import { locations } from "../data/locations";
import Link from "next/link";

// Dynamic import to avoid SSR issues with Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const ImageOverlay = dynamic(
  () => import("react-leaflet").then((mod) => mod.ImageOverlay),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

// Estimated positions based on the map image
// Center: 50.448176621372475, -3.709909920953367
const locationCoordinates: Record<number, [number, number]> = {
  1: [50.458, -3.722],    // North-west area
  2: [50.457, -3.715],    // North-central
  3: [50.455, -3.712],    // North area near highway
  4: [50.454, -3.724],    // West side
  5: [50.453, -3.716],    // Central-west near stream
  6: [50.449, -3.714],    // Central area
  7: [50.448, -3.712],    // Central-east
  8: [50.445, -3.710],    // South-central
  9: [50.452, -3.709],    // Central
  10: [50.447, -3.703],   // East side
  11: [50.444, -3.700],   // South-east
  12: [50.458, -3.702],   // North-east cluster
  13: [50.447, -3.698],   // Far east
  14: [50.462, -3.710],   // Far north
  15: [50.441, -3.708],   // South
  16: [50.445, -3.711],   // South-central
  17: [50.455, -3.698],   // North-east
  18: [50.456, -3.712],   // North-central highway
  19: [50.448, -3.706],   // Central-east
  20: [50.440, -3.712],   // South area
};

interface FullScreenMapProps {
  selectedLocation: number | null;
  onLocationSelect: (locationId: number) => void;
}

function MapController({ selectedLocation }: { selectedLocation: number | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation && locationCoordinates[selectedLocation]) {
      const coords = locationCoordinates[selectedLocation];
      // Zoom to the selected location
      map.flyTo(coords, 16, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [selectedLocation, map]);

  return null;
}

export default function FullScreenMap({
  selectedLocation,
  onLocationSelect,
}: FullScreenMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<typeof import("leaflet") | null>(null);

  useEffect(() => {
    setIsClient(true);
    import("leaflet").then((leaflet) => {
      setL(leaflet.default);
      // Fix for default marker icons in Next.js
      const iconDefault = leaflet.default.Icon.Default.prototype;
      if ('_getIconUrl' in iconDefault) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (iconDefault as any)._getIconUrl;
      }
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    });
  }, []);

  // Handle clicks on marker divs
  useEffect(() => {
    const handleMarkerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const markerDiv = target.closest('[data-location-id]') as HTMLElement;
      if (markerDiv) {
        const locationId = parseInt(markerDiv.dataset.locationId || '0', 10);
        if (locationId) {
          onLocationSelect(locationId);
        }
      }
    };

    document.addEventListener('click', handleMarkerClick);
    return () => document.removeEventListener('click', handleMarkerClick);
  }, [onLocationSelect]);

  if (!isClient || !L) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  // Map bounds - estimated from the scale bar (1000m) and map dimensions
  const center: LatLngExpression = [50.448176621372475, -3.709909920953367];
  const bounds: LatLngBoundsExpression = [
    [50.438, -3.730], // South-West
    [50.465, -3.690], // North-East
  ];

  // Create custom icon
  const createCustomIcon = (locationId: number, isSelected: boolean) => {
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div 
          class="flex items-center justify-center w-10 h-10 rounded-full transition-all cursor-pointer ${
            isSelected
              ? "bg-blue-600 text-white scale-125 shadow-xl ring-4 ring-blue-300"
              : "bg-green-600 text-white hover:bg-green-700 hover:scale-110 shadow-lg"
          }"
          data-location-id="${locationId}"
        >
          <span class="font-bold text-sm pointer-events-none">${locationId}</span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };

  const selectedLocationData = selectedLocation 
    ? locations.find(loc => loc.id === selectedLocation)
    : null;

  return (
    <div className="relative w-full h-full">
      <style jsx global>{`
        @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .custom-marker > div {
          pointer-events: auto !important;
        }
      `}</style>
      
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <ImageOverlay url="/bidwell-map.png" bounds={bounds} opacity={0.9} />
        
        <MapController selectedLocation={selectedLocation} />
        
        {Object.entries(locationCoordinates).map(([id, coords]) => {
          const locationId = parseInt(id);
          const isSelected = selectedLocation === locationId;
          
          return (
            <Marker
              key={locationId}
              position={coords}
              icon={createCustomIcon(locationId, isSelected)}
              eventHandlers={{
                click: () => onLocationSelect(locationId),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Location Details Overlay */}
      {selectedLocationData && (
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4"
          style={{ zIndex: 10000 }}
        >
          <div className="bg-white rounded-lg shadow-2xl border-2 border-green-600 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-green-900">
                Location {selectedLocationData.id}
              </h3>
              <button
                onClick={() => onLocationSelect(0)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                Research Question
              </h4>
              <p className="text-gray-800 text-base leading-relaxed">
                {selectedLocationData.question}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/observe?location=${selectedLocationData.id}`}
                className="flex-1 text-center px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
              >
                Make an Observation
              </Link>
              <button
                onClick={() => onLocationSelect(0)}
                className="px-6 py-3 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors uppercase font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
