"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data for demonstration
const mockObservations = [
  {
    id: 1,
    locationId: 5,
    locationName: "Location 5",
    date: "2025-11-20",
    observerName: "John Smith",
    weatherConditions: "Heavy rain",
    evidenceTypes: ["Active flow", "Erosion patterns"],
    summary: "Significant water flow observed entering manholes near Bidwell Brook...",
    hasPhotos: true,
  },
  {
    id: 2,
    locationId: 12,
    locationName: "Location 12",
    date: "2025-11-19",
    observerName: "Sarah Jones",
    weatherConditions: "Light rain",
    evidenceTypes: ["Water staining", "Pooling areas"],
    summary: "Evidence of previous water accumulation with staining visible on surfaces...",
    hasPhotos: true,
  },
  {
    id: 3,
    locationId: 7,
    locationName: "Location 7",
    date: "2025-11-18",
    observerName: "Mike Brown",
    weatherConditions: "Recent heavy rain",
    evidenceTypes: ["Sediment deposits", "Active flow"],
    summary: "Clear runoff patterns along highway with sediment accumulation...",
    hasPhotos: false,
  },
];

export default function ObservationsPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid" | "map">("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState<string>("all");
  const [filterEvidence, setFilterEvidence] = useState<string>("all");

  const filteredObservations = mockObservations.filter(obs => {
    const matchesSearch = obs.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         obs.observerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         obs.locationName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === "all" || obs.locationId.toString() === filterLocation;
    const matchesEvidence = filterEvidence === "all" || obs.evidenceTypes.some(e => e === filterEvidence);
    
    return matchesSearch && matchesLocation && matchesEvidence;
  });

  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-navy)]">
              Browse Observations
            </h1>
            <p className="text-[var(--primary-dark)]">
              View observations from volunteer monitors across all 20 locations
            </p>
          </div>

          {/* Filters and View Toggle */}
          <div className="bg-white shadow-lg p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by location, observer, or keywords..."
                  className="w-full px-4 py-2 border border-[var(--secondary-border-grey)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors"
                />
              </div>

              {/* Location Filter */}
              <div>
                <label htmlFor="location-filter" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                  Location
                </label>
                <select
                  id="location-filter"
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-[var(--secondary-border-grey)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors"
                >
                  <option value="all">All Locations</option>
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>Location {i + 1}</option>
                  ))}
                </select>
              </div>

              {/* Evidence Filter */}
              <div>
                <label htmlFor="evidence-filter" className="block text-sm font-semibold mb-2 text-[var(--primary-dark)]">
                  Evidence Type
                </label>
                <select
                  id="evidence-filter"
                  value={filterEvidence}
                  onChange={(e) => setFilterEvidence(e.target.value)}
                  className="w-full px-4 py-2 border border-[var(--secondary-border-grey)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors"
                >
                  <option value="all">All Types</option>
                  <option value="Erosion patterns">Erosion patterns</option>
                  <option value="Sediment deposits">Sediment deposits</option>
                  <option value="Water staining">Water staining</option>
                  <option value="Pooling areas">Pooling areas</option>
                  <option value="Active flow">Active flow</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-[var(--secondary-grey)]">
                Showing {filteredObservations.length} observation{filteredObservations.length !== 1 ? 's' : ''}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    viewMode === "list"
                      ? "bg-[var(--button-primary)] text-[var(--button-text)]"
                      : "bg-gray-200 text-[var(--primary-dark)] hover:bg-gray-300"
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    viewMode === "grid"
                      ? "bg-[var(--button-primary)] text-[var(--button-text)]"
                      : "bg-gray-200 text-[var(--primary-dark)] hover:bg-gray-300"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    viewMode === "map"
                      ? "bg-[var(--button-primary)] text-[var(--button-text)]"
                      : "bg-gray-200 text-[var(--primary-dark)] hover:bg-gray-300"
                  }`}
                >
                  Map
                </button>
              </div>
            </div>
          </div>

          {/* Map View Notice */}
          {viewMode === "map" && (
            <div className="bg-blue-50 border border-blue-200 p-6 mb-6">
              <p className="text-[var(--primary-dark)]">
                Map view will display all observations on an interactive map. This feature requires backend integration.
              </p>
            </div>
          )}

          {/* Observations List/Grid */}
          {viewMode !== "map" && (
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-6"}>
              {filteredObservations.length === 0 ? (
                <div className="bg-white shadow-lg p-8 text-center">
                  <p className="text-[var(--secondary-grey)]">No observations found matching your filters.</p>
                </div>
              ) : (
                filteredObservations.map((obs) => (
                  <div key={obs.id} className="bg-white shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--primary-navy)] mb-1">
                          {obs.locationName}
                        </h3>
                        <p className="text-sm text-[var(--secondary-grey)]">
                          {obs.date} by {obs.observerName}
                        </p>
                      </div>
                      {obs.hasPhotos && (
                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800">
                          📷 Has photos
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-[var(--secondary-grey)] mb-2">
                        <strong>Weather:</strong> {obs.weatherConditions}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {obs.evidenceTypes.map((evidence, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs bg-[var(--secondary-light-grey)] text-[var(--primary-dark)]"
                          >
                            {evidence}
                          </span>
                        ))}
                      </div>
                      <p className="text-[var(--primary-dark)] line-clamp-3">
                        {obs.summary}
                      </p>
                    </div>

                    <Link
                      href={`/observations/${obs.id}`}
                      className="inline-block px-6 py-2 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}

          {/* No Results State */}
          {filteredObservations.length === 0 && viewMode !== "map" && (
            <div className="bg-white shadow-lg p-8 text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">No Observations Found</h3>
              <p className="text-[var(--secondary-grey)] mb-4">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterLocation("all");
                  setFilterEvidence("all");
                }}
                className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-semibold"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-[var(--primary-accent-light)] to-[var(--primary-light)] text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="mb-6">
              Join our community of volunteer monitors and help us understand water drainage patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
              >
                Become a Monitor
              </Link>
              <Link
                href="/observe"
                className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors uppercase font-semibold text-sm border border-white/30"
              >
                Make an Observation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
