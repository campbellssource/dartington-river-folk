"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { locations, evidenceTypes } from "../data/locations";

function ObserveContent() {
  const searchParams = useSearchParams();
  const locationId = searchParams.get("location");
  const selectedLocation = locationId ? parseInt(locationId) : null;
  
  const [formData, setFormData] = useState({
    observerName: "",
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0].slice(0, 5),
    weatherConditions: "",
    evidenceTypes: [] as string[],
    observations: "",
    photos: [] as File[],
    additionalNotes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const location = locations.find(l => l.id === selectedLocation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Observation submitted:", {
      locationId: selectedLocation,
      ...formData
    });
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEvidenceTypeChange = (evidenceType: string) => {
    setFormData(prev => ({
      ...prev,
      evidenceTypes: prev.evidenceTypes.includes(evidenceType)
        ? prev.evidenceTypes.filter(t => t !== evidenceType)
        : [...prev.evidenceTypes, evidenceType]
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        photos: Array.from(e.target.files)
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-purple-50 to-white">
        <main className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-400">
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-3xl font-bold mb-4 text-green-900">
                Observation Recorded!
              </h1>
              <p className="text-gray-600 mb-6">
                Thank you for submitting your observation for Location {selectedLocation}. 
                Your data will help us understand water flow patterns in the area.
              </p>
              <div className="space-y-3">
                <Link
                  href="/locations"
                  className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Record Another Observation
                </Link>
                <Link
                  href="/"
                  className="block w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-purple-50 to-white">
      <main className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/locations" className="text-purple-600 hover:text-purple-800 font-semibold">
            ← Back to Locations
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-200">
          <h1 className="text-3xl font-bold mb-6 text-purple-900">
            Record Observation
          </h1>

          {!selectedLocation ? (
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
              <p className="text-yellow-800 mb-4">
                Please select a location first.
              </p>
              <Link
                href="/locations"
                className="inline-block bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
              >
                Go to Location Selection
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
                <h2 className="font-semibold text-purple-900 mb-2">
                  Location {location?.id}:
                </h2>
                <p className="text-gray-700 text-sm">{location?.question}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="observerName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Observer Name *
                    </label>
                    <input
                      type="text"
                      id="observerName"
                      name="observerName"
                      required
                      value={formData.observerName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="weatherConditions" className="block text-sm font-semibold text-gray-700 mb-2">
                      Weather Conditions *
                    </label>
                    <select
                      id="weatherConditions"
                      name="weatherConditions"
                      required
                      value={formData.weatherConditions}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="clear">Clear/Dry</option>
                      <option value="light-rain">Light Rain</option>
                      <option value="heavy-rain">Heavy Rain</option>
                      <option value="after-rain">Shortly After Rain</option>
                      <option value="cloudy">Cloudy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Evidence Types Observed * (Select all that apply)
                  </label>
                  <div className="space-y-2">
                    {evidenceTypes.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.evidenceTypes.includes(type)}
                          onChange={() => handleEvidenceTypeChange(type)}
                          className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="observations" className="block text-sm font-semibold text-gray-700 mb-2">
                    Detailed Observations *
                  </label>
                  <textarea
                    id="observations"
                    name="observations"
                    required
                    value={formData.observations}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe what you observed in detail. Include information about water flow, drainage patterns, accumulation points, etc."
                  />
                </div>

                <div>
                  <label htmlFor="photos" className="block text-sm font-semibold text-gray-700 mb-2">
                    Photos (Recommended)
                  </label>
                  <input
                    type="file"
                    id="photos"
                    name="photos"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  {formData.photos.length > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      {formData.photos.length} photo(s) selected
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any additional information that might be relevant..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg"
                >
                  Submit Observation
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function ObservePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    }>
      <ObserveContent />
    </Suspense>
  );
}
