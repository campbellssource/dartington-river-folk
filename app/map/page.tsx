"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import FullScreenMap to avoid SSR issues
const FullScreenMap = dynamic(() => import("../components/FullScreenMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[var(--secondary-light-grey)] flex items-center justify-center">
      <p className="text-[var(--secondary-grey)]">Loading map...</p>
    </div>
  ),
});

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Handle client-side mounting - this is intentional for SSR compatibility
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleLocationSelect = (locationId: number) => {
    if (locationId === 0) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(locationId);
    }
  };

  // Don't render map until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <>
        <style jsx global>{`
          body {
            overflow: hidden;
          }
          footer {
            display: none !important;
          }
        `}</style>
        <div 
          className="w-full bg-white flex items-center justify-center"
          style={{ 
            height: 'calc(100vh - var(--header-height))',
            overflow: 'hidden'
          }}
        >
          <p className="text-[var(--secondary-grey)]">Loading map...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
        footer {
          display: none !important;
        }
      `}</style>
      <div 
        className="w-full bg-white"
        style={{ 
          height: 'calc(100vh - var(--header-height))',
          overflow: 'hidden'
        }}
      >
        <FullScreenMap
          selectedLocation={selectedLocation}
          onLocationSelect={handleLocationSelect}
        />
      </div>
    </>
  );
}
