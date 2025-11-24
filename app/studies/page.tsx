"use client";

import Link from "next/link";

export default function StudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--primary-navy)]">
            Research Studies
          </h1>
          <p className="text-[var(--primary-dark)] mb-12">
            Bidwell Brook Monitors conducts community science studies to understand water drainage patterns 
            and inform flood prevention strategies in the Dartington area.
          </p>

          {/* Active Studies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[var(--primary-navy)]">Active Studies</h2>
            
            {/* Heavy Rain Study Card */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--primary-navy)] mb-2">
                      Heavy Rain Monitoring Survey
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--secondary-grey)]">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 font-semibold">
                        Active
                      </span>
                      <span>Autumn 2025</span>
                      <span>20 Locations</span>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--primary-dark)] mb-6">
                  This study investigates how informal drainage systems (agricultural land and natural spaces) 
                  interact with formal drainage systems that route runoff into the combined sewer system. 
                  We&apos;re documenting water flow patterns during and after heavy rain events across 20 
                  designated locations in the Dartington and Totnes area (TQ9 postcode).
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[var(--secondary-light-grey)] p-4">
                    <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">20</div>
                    <div className="text-sm text-[var(--secondary-grey)]">Observation Sites</div>
                  </div>
                  <div className="bg-[var(--secondary-light-grey)] p-4">
                    <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">TQ9</div>
                    <div className="text-sm text-[var(--secondary-grey)]">Postcode Area</div>
                  </div>
                  <div className="bg-[var(--secondary-light-grey)] p-4">
                    <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">Autumn</div>
                    <div className="text-sm text-[var(--secondary-grey)]">Study Period</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/studies/heavy-rain/locations"
                    className="inline-block px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
                  >
                    View Locations
                  </Link>
                  <Link
                    href="/studies/heavy-rain/observations"
                    className="inline-block px-6 py-3 bg-gray-200 text-[var(--primary-dark)] hover:bg-gray-300 transition-colors uppercase font-semibold text-sm"
                  >
                    Browse Observations
                  </Link>
                  <Link
                    href="/observe"
                    className="inline-block px-6 py-3 bg-white border-2 border-[var(--primary-accent)] text-[var(--primary-accent)] hover:bg-[var(--secondary-light-grey)] transition-colors uppercase font-semibold text-sm"
                  >
                    Make Observation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Studies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[var(--primary-navy)]">Planned Studies</h2>
            <div className="bg-white shadow-lg p-8">
              <p className="text-[var(--secondary-grey)] text-center">
                Future studies will be announced here. Stay tuned for more opportunities to contribute 
                to community science in the Dartington area.
              </p>
            </div>
          </div>

          {/* Get Involved */}
          <div className="bg-gradient-to-r from-[var(--primary-accent-light)] to-[var(--primary-light)] text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="mb-6">
              Join our community of volunteer monitors and help us understand local water drainage patterns. 
              Your observations make a real difference in protecting our community from flooding.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
            >
              Become a Monitor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
