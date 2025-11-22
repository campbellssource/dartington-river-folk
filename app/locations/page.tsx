"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { locations } from "../data/locations";
import { useState } from "react";
import InteractiveMap from "../components/InteractiveMap";

export default function LocationsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.id.toString().includes(searchTerm)
  );

  const handleSelectLocation = (locationId: number) => {
    // Directly navigate to observe page with selected location
    router.push(`/observe?location=${locationId}`);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-green-50 to-white">
      <main className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-green-600 hover:text-green-800 font-semibold">
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-200 mb-6">
          <h1 className="text-3xl font-bold mb-4 text-green-900">
            Select Observation Location
          </h1>
          <p className="text-gray-600 mb-6">
            Choose a monitoring location to record your observations. Click any location on the map or in the list below.
          </p>

          {/* Interactive Map */}
          <div className="mb-8">
            <InteractiveMap 
              onLocationSelect={handleSelectLocation}
              hoveredLocation={hoveredLocation}
              onHoverLocation={setHoveredLocation}
            />
          </div>

          {/* Search and List */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by location number or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-h-[400px] overflow-y-auto p-2">
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleSelectLocation(location.id)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                className={`text-left p-4 rounded-lg border-2 transition-all ${
                  hoveredLocation === location.id
                    ? "border-blue-500 bg-blue-50 shadow-md scale-105"
                    : "border-gray-200 hover:border-green-500 hover:bg-green-50 hover:shadow-md"
                }`}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-green-700 mr-2">
                    {location.id}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {location.question}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold mb-3 text-blue-900">
            Observation Tips:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Visit locations during or shortly after heavy rainfall for best results</li>
            <li>Take multiple photos from different angles</li>
            <li>Note the date and time of your observation</li>
            <li>Look for evidence of water flow paths (erosion, staining, debris)</li>
            <li>Mark exact locations on maps if possible</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
