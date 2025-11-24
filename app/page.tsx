"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import InteractiveMap to avoid SSR issues
const InteractiveMap = dynamic(() => import("./components/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-[var(--secondary-light-grey)] flex items-center justify-center">
      <p className="text-[var(--secondary-grey)]">Loading map...</p>
    </div>
  ),
});

export default function Home() {
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);

  // Handle client-side mounting - this is intentional for SSR compatibility
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowMap(true);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary-accent-light)] to-[var(--primary-light)] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/Bactiquick-sampling.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get out and get involved
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join volunteer group who monitor the Bidwell Brook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-block px-8 py-4 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
              >
                Become a Monitor
              </Link>
              <Link 
                href="/studies/heavy-rain/"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors uppercase font-semibold text-sm border border-white/30"
              >
                View latest study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Current Study: Heavy Rain Monitoring
            </h2>
            <div className="bg-[var(--secondary-light-grey)] p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Study Period</h3>
                  <p className="text-[var(--primary-dark)] mb-6">Autumn 2025</p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Location</h3>
                  <p className="text-[var(--primary-dark)] mb-6">Dartington and Totnes area, Devon (TQ9 postcode)</p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Observation Sites</h3>
                  <p className="text-[var(--primary-dark)]">20 designated locations</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[var(--primary-navy)]">Study Focus</h3>
                  <p className="text-[var(--primary-dark)]">
                    We&apos;re investigating how informal drainage systems (agricultural land and natural spaces) 
                    interact with formal drainage systems that route runoff into the combined sewer system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need Section */}
      <section className="py-16 bg-[var(--secondary-light-grey)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What We&apos;re Looking For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 text-center">
              <div className="text-5xl mb-4">🌧️</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">When to Observe</h3>
              <p className="text-[var(--primary-dark)] mb-2">During or shortly after heavy rain events</p>
              <p className="text-sm text-[var(--secondary-grey)]">We&apos;ll notify you when weather conditions are right</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 text-center">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">What to Document</h3>
              <p className="text-[var(--primary-dark)] mb-2">Photos, videos, and detailed notes</p>
              <p className="text-sm text-[var(--secondary-grey)]">Capture evidence of water flow and drainage patterns</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">Types of Evidence</h3>
              <p className="text-[var(--primary-dark)] mb-2">Erosion, sediment, water staining, pooling</p>
              <p className="text-sm text-[var(--secondary-grey)]">Signs that help us understand water movement</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">Your Impact</h3>
              <p className="text-[var(--primary-dark)] mb-2">Help protect our community</p>
              <p className="text-sm text-[var(--secondary-grey)]">Your observations inform flood prevention strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Observation Locations
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              {showMap && (
                <InteractiveMap 
                  onLocationSelect={(id) => router.push(`/observe?location=${id}`)}
                  hoveredLocation={null}
                  onHoverLocation={() => {}}
                />
              )}
            </div>
            <div className="text-center">
              <Link 
                href="/studies/heavy-rain/locations"
                className="inline-block px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
              >
                View Full Location Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[var(--secondary-light-grey)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Getting Started is Easy
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--button-primary)] text-[var(--button-text)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">Register</h3>
              <p className="text-[var(--primary-dark)] mb-2">Create your free account</p>
              <p className="text-sm text-[var(--secondary-grey)]">Takes less than a minute. Click the magic link in your email to get started.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--button-primary)] text-[var(--button-text)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">Get Notified</h3>
              <p className="text-[var(--primary-dark)] mb-2">Receive observation requests</p>
              <p className="text-sm text-[var(--secondary-grey)]">We&apos;ll email you when heavy rain is forecast and observations are needed.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--button-primary)] text-[var(--button-text)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">Observe & Document</h3>
              <p className="text-[var(--primary-dark)] mb-2">Make your observations</p>
              <p className="text-sm text-[var(--secondary-grey)]">Visit a location, record what you see, upload photos/videos.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--button-primary)] text-[var(--button-text)] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">Submit & Track</h3>
              <p className="text-[var(--primary-dark)] mb-2">Share your findings</p>
              <p className="text-sm text-[var(--secondary-grey)]">Submit your observation and see how it contributes to the overall data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-accent-light)] to-[var(--primary-light)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join our community of volunteer monitors helping to understand and protect our local waterways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup"
              className="inline-block px-8 py-4 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
            >
              Sign Up Now
            </Link>
            <Link 
              href="/about"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors uppercase font-semibold text-sm border border-white/30"
            >
              Learn More About the Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
