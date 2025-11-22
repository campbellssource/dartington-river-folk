"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import { useMap } from "react-leaflet";

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
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
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

interface InteractiveMapProps {
  onLocationSelect: (locationId: number) => void;
  hoveredLocation: number | null;
  onHoverLocation: (locationId: number | null) => void;
}

function MapUpdater({ hoveredLocation }: { hoveredLocation: number | null }) {
  const map = useMap();

  useEffect(() => {
    if (hoveredLocation && locationCoordinates[hoveredLocation]) {
      const coords = locationCoordinates[hoveredLocation];
      map.setView(coords, map.getZoom(), { animate: true });
    }
  }, [hoveredLocation, map]);

  return null;
}

export default function InteractiveMap({
  onLocationSelect,
  hoveredLocation,
  onHoverLocation,
}: InteractiveMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    import("leaflet").then((leaflet) => {
      setL(leaflet.default);
      // Fix for default marker icons in Next.js
      delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    });
  }, []);

  if (!isClient || !L) {
    return (
      <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
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
  const createCustomIcon = (locationId: number, isHovered: boolean) => {
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div class="flex items-center justify-center w-10 h-10 rounded-full transition-all ${
          isHovered
            ? "bg-blue-600 text-white scale-125 shadow-xl ring-4 ring-blue-300"
            : "bg-green-600 text-white hover:bg-green-700 hover:scale-110 shadow-lg"
        }">
          <span class="font-bold text-sm">${locationId}</span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20],
    });
  };

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
      <style jsx global>{`
        @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
        }
        
        .leaflet-popup-content {
          margin: 12px;
        }
      `}</style>
      
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <ImageOverlay url="/bidwell-map.png" bounds={bounds} opacity={0.9} />
        
        <MapUpdater hoveredLocation={hoveredLocation} />
        
        {Object.entries(locationCoordinates).map(([id, coords]) => {
          const locationId = parseInt(id);
          const isHovered = hoveredLocation === locationId;
          
          return (
            <Marker
              key={locationId}
              position={coords}
              icon={createCustomIcon(locationId, isHovered)}
              eventHandlers={{
                click: () => onLocationSelect(locationId),
                mouseover: () => onHoverLocation(locationId),
                mouseout: () => onHoverLocation(null),
              }}
            >
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-green-900 mb-2">
                    Location {locationId}
                  </h3>
                  <button
                    onClick={() => onLocationSelect(locationId)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-xs font-semibold"
                  >
                    Record Observation →
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
